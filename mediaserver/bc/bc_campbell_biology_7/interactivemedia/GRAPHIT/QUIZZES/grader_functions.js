// ********************** 
// Offline Grader Support
// **********************

// ********************** 
// Email reporter utility functions
// **********************

function og_checkemail(email) {
  var re = /^[a-z0-9][a-z0-9_.\\\'-]*@[a-z0-9]([a-z0-9_\\\'-])*([.][a-z0-9][a-z0-9_]*)+$/i;
  return re.test(email);   
}

function og_submitformail(f) {
  f.action = GradeSenderLocation();

  f.submit();
}


function og_gradeformsend(f,mf) {
  var addrs = new Array();
  if (! og_gradeformvalidate(f)) {
    return false;
  } else {
    if ( f.mail_student.checked ) { addrs[addrs.length] = f.student.value; }
    if ( f.mail_teacher.checked ) { addrs[addrs.length] = f.teacher.value; }
    if ( f.mail_ta.checked ) { addrs[addrs.length] =  f.ta.value; }
    if ( f.mail_other.checked ) { addrs[addrs.length] = f.other.value; }

    mf.action = "mailto:" + addrs.join(",");
      
    mf.action += "?subject=" + "Off-line Grader Results for " + f.given_names.value
      + " " + f.last_name.value;
    mf.mailBody.value = "\n-----------------\nCW Off-line Grader\n"+
      "Student Name: " + f.given_names.value + " " + f.last_name.value + "\n" +
      "Student Email: " + (f.mail_student.checked ? f.student.value : "(see 'From' line above)") + "\n";
    mf.mailBody.value += f.resultsText.value;
    //    alert(mf.action + "\n\n" + mf.mailBody.value);
    mf.submit();
    return true;
  }
}

function og_gradeformvalidate(f) {
  var nameslen = f.given_names.value.length +
    f.last_name.value.length; 
  if (nameslen == 0) {;
  alert("Please enter your first and last name.");
  return false;
  }

  if (!( (f.mail_student.checked && f.student.value.length > 0)
	|| (f.mail_teacher.checked && f.teacher.value.length > 0)
	|| (f.mail_ta.checked && f.ta.value.length > 0)
	||  (f.mail_other.checked && f.other.value.length > 0))) {
    alert("you must indicate at least one email address to send to!");
    return false;
  }

  var student_email = f.student.value;
  var teacher_email = f.teacher.value;
  var ta_email = f.ta.value;
  var other_email = f.other.value;
  var errMsg = '';

  student_email = student_email.replace(/\s+/g, '');
  teacher_email = teacher_email.replace(/\s+/g, '');
  ta_email = ta_email.replace(/\s+/g, '');
  other_email = other_email.replace(/\s+/g, '');
  if(student_email != '' && !og_checkemail(student_email))
    errMsg += "Your email address is not valid.\n\n";
  if(teacher_email != '' && !og_checkemail(teacher_email))
    errMsg += "The Instructor email address is not valid.\n\n";
  if(ta_email != '' && !og_checkemail(ta_email))
    errMsg += "The TA email address is not valid.\n\n";
  if(other_email != '' && !og_checkemail(other_email))
    errMsg += "Other's email address is not valid.\n\n";
  if(errMsg != '') {
    window.alert(errMsg);
    return false;
  }
  return true;
}

// **********************
// **** Global Components
// **********************

_debug = false;

function dbprint(s) {
	if ( _debug ) { alert(s) };
}

// object definitions

function Answer(number,text,correct,explanation) {
  this.number = number;
  this.text = text;
  this.correct = !!correct; //make it a boolean
  this.coaching = explanation;
dbprint("constructing answer" + this); 
}

function Problem(type) {
  this.answer = new Array();
  this.question = null;
  this.explanation = null;
  this.supported = false;
  this.type = type;
  this.numCorrect = 0;

  switch(this.type) {	
  case "fillintheblanks":
  case "multiplechoice":
  case "truefalse":
  case "essay":
    this.supported = true;
    break;
  default:
    this.supported = false;
    this.question = "Questions of this type (" + this.type +
      ") are not supported by this off-line grader.";
  }
  dbprint("constructing problem"); 

  function _AddAnswer(number, text, correct, explanation) {
    dbprint("adding answer"); 
    var a = new Answer(number, text, correct, explanation);
    this.answer[this.answer.length] = a;
    if(correct) { this.numCorrect++; }
  }
  this.addAnswer = _AddAnswer;
  
  function _IsCorrect (n) {
  	var i, l = this.answer.length, correctCount = 0, ta= null;
 dbprint("isCorrect"); 
 if (this.type == "essay") { return true; }
	if (this.numCorrect > 1) {
	  var rt = true, rs = new Object();
	  ta = n.split(",");
	  for (i in ta) {  rs[ta[i]] = true; }
	  for (i=0; i< l; i++) {
	    if (!this.answer[i].correct && rs[this.answer[i].number]) {  return false; }
	    if (this.answer[i].correct && rs[this.answer[i].number]) {  correctCount++; }
	  }
	  if (correctCount != this.numCorrect) { return false };
	  return true;
	} else {
	  for (i=0; i< l; i++) {
	    if (this.answer[i].number == n)  {return this.answer[i].correct;}
	  }
	  return false;
	}
  }
  this.isCorrect = _IsCorrect;
  
  function _GetAnswerText(n) {
dbprint("in getanswertext");
  	var ta = null, s = "", i, l = this.answer.length, firstTime = true, rs = new Object();
	if (this.type == "essay") {
	  var s = new String(n); // disarm potentially hostile HTML intruders
	  s = s.replace(/&/g, "&#38;");
	  s = s.replace(/</g, "&#60;");
	  s = s.replace(/>/g, "&#62;");
	  return s;
	}
dbprint("in getanswertext: beforethesplit");
	ta = n.split(",");
dbprint("in getanswertext: afterthesplit");
	for (i in ta) {  rs[ta[i]] = true; }
	for (i=0; i< l; i++) {
		if (rs[this.answer[i].number]) {
		  if (! firstTime) {s += ", "; }
		  s += this.answer[i].text;
		  firstTime = false;
		}
	}
dbprint("leaving getanswertext");
  	return s;
  }
  this.getAnswerText = _GetAnswerText;

  function _GetCorrectAnswerText() { // XXX needs to be extended/modified for multiple correct answers
  	var i, s = "", firstTime = true; l = this.answer.length;
dbprint("in getCorrectanswertext");
	for (i=0; i< l; i++) {
		if (this.answer[i].correct)  {
		  if (! firstTime) {s += ", ";}
		  s += this.answer[i].text;
		  firstTime = false;
		}
	}
dbprint("leaving getCorrectanswertext");
  	return s;
  }
  this.getCorrectAnswerText = _GetCorrectAnswerText;
  
  
}

function AnswerKey() {
  this.problem = new Array();
  this.sitetitle = this.booktitle = this.author = this.quizlocation = "";
  this.chapter=0;
  this.section = "unknown section";
  
  function _AddProblem(p) {
    this.problem[this.problem.length] = p;
  }
  this.addProblem = _AddProblem;
  
  function _Count() {
  	return this.problem.length;
  }
  this.count = _Count;
  
  function _GetProblem(i) {
  	return this.problem[i];
  }
  this.getProblem = _GetProblem;
  
}

function Result(r,n,p) {
	this.code = r;
	this.num = n;
	this.problem = p;
}

function Grader (answerKey) {
  this.answerKey = answerKey;
  this.response = new Object();
  this.result = new Array();
  this.correct = this.incorrect = this.unanswered = this.unsupported = this.total = 0;
  
  function _CollectResponse(theForm) {
    // Loop over the form and gather up everything
    // into the response array
    var s,id,current, lastRadio = null;
    
    for (var i=0;i<theForm.length;i++) {
      current = theForm.elements[i];
	  s = new String(current.name);
	  id = s.replace(/^UserAnswer_/,"");
      switch (current.type) {
      case "textarea": // typically, an essay question
		this.response[id] = current.value;
		break;
      case "checkbox":
dbprint("checkbox");
	if(current.checked) {
dbprint("checkbox checked");
	  if(this.response[id] == null) { 
dbprint("first time");
	    this.response[id] = current.value;
	  } else {
dbprint("second time");
	    this.response[id] += "," + current.value;
	  }
	}
dbprint("checkbox done");
	break;
      case "radio": // most of the other question types
	if(current.checked) {
	  lastRadio = id;
	  this.response[id] = current.value;
	} else {
	  // RENS warning this will fail with noncontiguous radio groups
	  if (lastRadio != id) {
	    lastRadio = id;
	    this.response[id] = null;
	  }
	}
	break;
      case "hidden":		// for the timer
      case "submit":
      case "reset":
      case "text":
      case "select-one":
      case "select-multiple":
      case "":
	// known items to ignore
	break;
      default:
	alert("unknown or unsupported input type " + current.type + " for " + current);
      }
    }
  }
  this.collectResponse = _CollectResponse;

  function _Evaluate() {
dbprint("evaluating"); 
  	var i;
	for (i=0; i < this.answerKey.count(); i++) {
dbprint("i is " + i);
		this.total++;
		var p = this.answerKey.getProblem(i);
		if ( !p.supported ) {
dbprint("evaluate: unsupported"); 
			this.unsupported++;
			this.result[i] = new Result("unsupported",0,p);
		} else {
dbprint("evaluate: supported: p.id " + p.id );
			if ( this.response[p.id] == null || this.response[p.id] == "" ) {
dbprint("evaluate: unanswered " + this.response[p.id] );
				this.unanswered++;
				this.result[i] = new Result("unanswered",0,p);
			} else { 
dbprint("evaluate: answered: " + this.response[p.id]);

				if ( p.isCorrect(this.response[p.id]) ) {
dbprint("evaluate: correct");
					this.correct++;
					this.result[i] = new Result("correct",this.response[p.id],p);
				} else {
dbprint("evaluate: incorrect");
					this.incorrect++
					this.result[i] = new Result("incorrect",this.response[p.id],p);
				}
			}
		}
	}
dbprint("leaving evaluate");	
  }
  this.evaluate = _Evaluate;
}

function ResultsReporter(grader,email) {
  this.grader = grader;
  this.email_support = email;

  function _RenderHeader(mode) {
    switch(mode) {
    case "html":
      return "<div id=\"results_page\">";
      break;
    case "text":
      return "";
      break;
    default:
      var tmpl = "invalid mode " + mode + " given to _RenderHeader\n";

    }

  }
  this.renderHeader = _RenderHeader;

  function _RenderFooter(mode) {
    switch(mode) {
    case "html":
      return "</div>\n";
      break;
    case "text":
      return "";
      break;
    default:
      var tmpl = "invalid mode " + mode + " given to _RenderFooter\n";
    }
  }
  this.renderFooter = _RenderFooter;

  function _RenderResultRow (n, r, mode) {
    switch (mode) {
    case "html":
      var tmpl = new String("<tr><td colspan=\"3\"><hr size=\"1\" noshade></td></tr>\n" +
			    "<tr><td valign=top><b>!_NUMBER_!.</b>&nbsp;&nbsp;&nbsp;</td>\n" +
			    "<td valign=top><span class=\"!_RESULTSPAN_!\">!_RESULT_! &nbsp;&nbsp;&nbsp;</span></td>\n" +
			    "<td valign=top><span class=\"OGQues\">!_QUESTION_!</span><br/>\n" +
			    "!_RESPONSE_!!_CORRECTANSWER_!!_EXPLANATION_!" +
			    "</td></tr>\n");
      var tmpl_rsp = new String("<span class=\"OGAns\">Your Answer: </span>" +
				"<span class=\"!_RSP_SPAN_!\">!_RSP_TEXT_!</span><br/>\n");
      var tmpl_corr = new String("<span class=\"OGAns\">The Correct Answer!_CPLURAL_!: </span>" +
				 "<span class=\"OGCorOpt\">!_CORR_TEXT_!</span><br/>\n");
      var tmpl_expln = new String("<span class=\"OGGlobIncExpl\">!_EXPLN_TEXT_!</span><br />");
      break;
    case "text":
      var tmpl = new String("----------\n\n" +
			    "!_NUMBER_!.\n" +
			    "!_RESULT_!\n" +
			    "!_QUESTION_!\n" +
			    "!_RESPONSE_!!_CORRECTANSWER_!!_EXPLANATION_!");
      var tmpl_rsp = new String("Your Answer:\n\t!_RSP_TEXT_!\n");
      var tmpl_corr = new String("The Correct Answer!_CPLURAL_!:\n\t!_CORR_TEXT_!\n");
      var tmpl_expln = new String("!_EXPLN_TEXT_!\n");
      break;
    default:
      var tmpl = "invalid mode " + mode + " given to _RenderResultRow\n";
    }    
    tmpl = tmpl.replace(/!_NUMBER_!/g,n);
    tmpl = tmpl.replace(/!_QUESTION_!/g,r.problem.question);

      
    switch(r.code) {
    case "correct":
dbprint("RenderResultRow: correct");
      if (r.problem.type == "essay") {
	tmpl = tmpl.replace(/!_RESULT_!/g,"Answered");
      } else {
	tmpl = tmpl.replace(/!_RESULT_!/g,"Correct");
      }
      tmpl = tmpl.replace(/!_RESULTSPAN_!/g,"OGCorExpl");

      tmpl_rsp = tmpl_rsp.replace(/!_RSP_SPAN_!/g,"OGCorOpt");
      tmpl_rsp = tmpl_rsp.replace(/!_RSP_TEXT_!/g,r.problem.getAnswerText(r.num));
      tmpl = tmpl.replace(/!_RESPONSE_!/g,tmpl_rsp);
      tmpl = tmpl.replace(/!_CORRECTANSWER_!/g,"");
      tmpl_expln = tmpl_expln.replace(/!_EXPLN_TEXT_!/g,
				      ( r.problem.type == "essay" ?
					r.problem.explanation : "&nbsp;"));
      tmpl = tmpl.replace(/!_EXPLANATION_!/g,tmpl_expln);
      break;
    case "incorrect":
      tmpl = tmpl.replace(/!_RESULT_!/g,"Incorrect");
      tmpl = tmpl.replace(/!_RESULTSPAN_!/g,"OGIncExpl");

      tmpl_rsp = tmpl_rsp.replace(/!_RSP_SPAN_!/g,"OGIncOpt");
      tmpl_rsp = tmpl_rsp.replace(/!_RSP_TEXT_!/g,r.problem.getAnswerText(r.num));
      tmpl = tmpl.replace(/!_RESPONSE_!/g,tmpl_rsp);
      tmpl_corr = tmpl_corr.replace(/!_CPLURAL_!/g,(r.problem.numCorrect > 1 ? "s":"") );
      tmpl_corr = tmpl_corr.replace(/!_CORR_TEXT_!/g,r.problem.getCorrectAnswerText());
      tmpl = tmpl.replace(/!_CORRECTANSWER_!/g,tmpl_corr);
      tmpl_expln = tmpl_expln.replace(/!_EXPLN_TEXT_!/g,"&nbsp;");
      tmpl = tmpl.replace(/!_EXPLANATION_!/g,tmpl_expln);
      break;
    case "unanswered":
      tmpl = tmpl.replace(/!_RESULT_!/g,"Not Answered");
      tmpl = tmpl.replace(/!_RESULTSPAN_!/g,"OGUngradable");
      tmpl = tmpl.replace(/!_RESPONSE_!/g,"");
      tmpl_corr = tmpl_corr.replace(/!_CPLURAL_!/g,(r.problem.numCorrect > 1 ? "s":"") );
      tmpl_corr = tmpl_corr.replace(/!_CORR_TEXT_!/g,r.problem.getCorrectAnswerText());
      tmpl = tmpl.replace(/!_CORRECTANSWER_!/g,( r.problem.type == "essay" ? "" : tmpl_corr));
      tmpl_expln = tmpl_expln.replace(/!_EXPLN_TEXT_!/g,"&nbsp;");
      tmpl = tmpl.replace(/!_EXPLANATION_!/g,tmpl_expln);
      break;
    case "unsupported":
      tmpl = tmpl.replace(/!_RESULT_!/g,"Not Supported");
      tmpl = tmpl.replace(/!_RESULTSPAN_!/g,"OGUngradable");
      tmpl = tmpl.replace(/!_RESPONSE_!/g,"");
      tmpl = tmpl.replace(/!_CORRECTANSWER_!/g,"");
      tmpl = tmpl.replace(/!_EXPLANATION_!/g,"");
      break;
    default:
      tmpl = "an internal error occurred: type was " + r.code
    }
    return tmpl;
  }
  this.renderResultRow = _RenderResultRow;


  function _RenderSummary (mode) {
    var g = this.grader;
    var tmpl = "";
    switch (mode) {
    case "html":
      tmpl = "<table align=center bgcolor=\"#dddddd\" cellspacing=0 cellpadding=5 border=0>\n " +
	"<tr><td colspan=2><span class=\"OGchart\"><b>Summary</b>: !_PCOR_!% Correct !_UNSUPSUM_!" +
	"</span></td></tr>" +
	"<tr><td><HideFromPlainVersion>" +
	"<table border=0 bgcolor=\"#000000\" cellpadding=1 align=center valign=middle cellspacing=0>" +
	"<tr><td bgcolor=\"#000000\" border=0 cellpadding=4 cellspacing=0>" +
	"<table align=center bgcolor=\"#ffffff\" border=0 cellspacing=0 cellpadding=4>" +
	"<tr><td valign=bottom align=center><span class=\"OGchart\"> !_PCOR_!%</span><br />" +
	"<img src=\"media/resgraph_c.gif\" width=20 height=!_PCOR_! valign=baseline></td>" +
	"<td valign=bottom align=center><span class=\"OGchart\">!_PINC_!%</span><br />" +
	"<img src=\"media/resgraph_i.gif\" width=20 height=!_PINC_! valign=baseline></td>" +
	"<td valign=bottom align=center><span class=\"OGchart\">!_PUNA_!%</span><br />" +
	"<img src=\"media/resgraph_u.gif\" width=20 height=!_PUNA_! valign=baseline><br />" +
	"</td></tr></table></td></tr></table></HideFromPlainVersion></td>" +
	"<td><span class=\"OGchart\">Of !_SUP_! questions, here are your results:<br />" +
	"<img src=\"media/resgraph_c.gif\" width=10 height=10 valign=baseline>" +
	"&nbsp;!_COR_! correct or not graded<br>" +
	"<img src=\"media/resgraph_i.gif\" width=10 height=10 valign=baseline>" +
	"&nbsp;!_INC_! incorrect<br>" +
	"<img src=\"media/resgraph_u.gif\" width=10 height=10 valign=baseline>" +
	"&nbsp;!_UNA_! unanswered<BR>" +
	"</span></td></tr><tr><td colspan=2><span class=\"OGchart\">" +
	"Submitted on !_TSTAMP_!</span></td></tr></table>";
      break;
    case "text":
      tmpl = "Summary: !_PCOR_!% Correct !_UNSUPSUM_!\n"+
	"of !_SUP_! questions, here are your results:\n" +
	" !_COR_! Correct or not graded\n" +
	" !_INC_! Incorrect\n" +
	" !_UNA_! Unanswered\n" +
	"Submitted on !_TSTAMP_!.\n";
      break;
    default:
      var tmpl = "invalid mode " + mode + " given to _RenderSummary\n";
    }

    var supported = g.total - g.unsupported;
    var pCorrect = Math.floor(g.correct / supported * 100);
    var pIncorrect = Math.floor(g.incorrect / supported * 100);
    var pUnanswered = Math.floor(g.unanswered / supported * 100);

    var d = new Date();
    tmpl = tmpl.replace(/!_SUP_!/g,supported);
    tmpl = tmpl.replace(/!_COR_!/g,g.correct);
    tmpl = tmpl.replace(/!_INC_!/g,g.incorrect);
    tmpl = tmpl.replace(/!_UNA_!/g,g.unanswered);
    tmpl = tmpl.replace(/!_UNS_!/g,g.unsupported);
    tmpl = tmpl.replace(/!_PCOR_!/g,pCorrect);
    tmpl = tmpl.replace(/!_PINC_!/g,pIncorrect);
    tmpl = tmpl.replace(/!_PUNA_!/g,pUnanswered);
    tmpl = tmpl.replace(/!_TSTAMP_!/g,d.toString());
    tmpl = tmpl.replace(/!_UNSUPSUM_!/g,( g.unsupported > 0 ?
					  "(excludes " + g.unsupported + " unsupported)" :
					  "") );


    return tmpl;
  }
  this.renderSummary = _RenderSummary;






  function _RenderEmailReporter (mode) {
    //mode is ignored
    var tmpl = "<form name=\"quizForm\" method=\"get\" ACTION=\"\">" +
      "<input type=hidden name=\"timer\" value=\"0\">\n" +
      "<input type=hidden name=\"show_timer\" value=\"0\"></form>\n" +
      "<form name=\"graderform\" method=\"post\" ACTION=\"\">" +
      "<center><table border=0 bgcolor=\"#cccccc\" cellpadding=15 align=center width=90%><tr><td>\n" +
      "<!--- leave cell open --->\n<table border=0 bgcolor=\"#CCCCCC\" cellspacing=0 align=center width=90%>" +
      "<tr><td colspan=3><span class=\"OGEmailForm\"><b>Routing Information</b></span><p></td></tr>" +
      "<tr><td><span class=\"OGEmailForm\">My name is (first, last):</span></td>" +
      "<td colspan=2><input type=text name=\"given_names\" size=20 maxlength=50  value=\"\">" +
      "<input type=text name=\"last_name\" size=20 maxlength=50  value=\"\"></td></tr>" +
      "<tr><td colspan=3><span class=\"OGEmailForm\">E-mail my results to:</span></td></tr>" +
      "<tr><td></td><td><font size=-2><i>E-mail address:</i></font></td>" +
      "<td><font size=-2><i>Send as:</i></font></td></tr>" +
      "<tr><td align=left> <input type=\"checkbox\" name=\"mail_student\" value=\"1\" />" +
      "<span class=\"OGEmailForm\">Me:</span></td>" +
      "<td><input type=text name=\"student\" size=20 maxlength=50  value=\"\"></td>" +
      "<td><select name=student_type>" +
      "<option value=\"html:no\" > HTML" +
      "<option value=\"plain:no\" selected> Text" +
      "<option value=\"plain:yes\" > Attached Text" +
      "<option value=\"html:yes\" > HTML Attachment" +
      "</select></td></tr>" +
      "<tr><td align=left> <input type=\"checkbox\" name=\"mail_teacher\" value=\"1\" />" +
      "<span class=\"OGEmailForm\">Instructor:</span></td>" +
      "<td><input type=text name=\"teacher\" size=20 maxlength=50  value=\"\"></td>" +
      "<td><select name=teacher_type>" +
      "<option value=\"html:no\" > HTML" +
      "<option value=\"plain:no\" selected> Text" +
      "<option value=\"plain:yes\" > Attached Text" +
      "<option value=\"html:yes\" > HTML Attachment" +
      "</select></td></tr>" +
      "<tr><td align=left> <input type=\"checkbox\" name=\"mail_ta\" value=\"1\" />" +
      "<span class=\"OGEmailForm\">TA:</span></td>" +
      "<td><input type=text name=\"ta\" size=20 maxlength=50  value=\"\"></td>" +
      "<td><select name=ta_type>" +
      "<option value=\"html:no\" > HTML" +
      "<option value=\"plain:no\" selected> Text" +
      "<option value=\"plain:yes\" > Attached Text" +
      "<option value=\"html:yes\" > HTML Attachment" +
      "</select></td></tr>" +
      "<tr><td align=left><input type=\"checkbox\" name=\"mail_other\" value=\"1\" />" +
      "<span class=\"OGEmailForm\">Other:</span></td>" +
      "<td><input type=text name=\"other\" size=20 maxlength=50  value=\"\"></td>" +
      "<td><select name=other_type>" +
      "<option value=\"html:no\" > HTML" +
      "<option value=\"plain:no\" selected> Text" +
      "<option value=\"plain:yes\" > Attached Text" +
      "<option value=\"html:yes\" > HTML Attachment" +
      "</select></td></tr>" +
      "<tr><td colspan=3 align=right>" +
      "<input type=button name=\"register\" value=\"E-Mail Results\" " +
//      "onclick=\"og_gradeformsend(this.form,document.og_mailform);\">" + // removed: no mailto:
      "onclick=\"og_submitformail(this.form);\">" +
      "<input type=hidden name=\"volume_title\" value=\"!_SITETITLE_!\">\n" +
      "<input type=hidden name=\"author_lastname\" value=\"!_AUTHOR_!\">\n" +
      "<input type=hidden name=\"book_title\" value=\"!_BOOK_!\">\n" +
      "<input type=hidden name=\"volume_path\" value=\"!_LOCATION_!\">\n" +
      "<input type=hidden name=\"total_problems\" value=\"!_SUP_!\">\n" +
      "<input type=hidden name=\"total_score\" value=\"!_COR_!\">\n" +
      "<input type=hidden name=\"total_incorrect\" value=\"!_INC_!\">\n" +
      "<input type=hidden name=\"total_unanswered\" value=\"!_UNA_!\">\n" +
      "<input type=hidden name=\"html_body\" value=\"!_HTMLBODY_!\">\n" +
      "<input type=hidden name=\"text_body\" value=\"!_TEXTBODY_!\">\n" +
      "<input type=hidden name=\"id\" value=\"12345\">\n" +
      "<td></tr></table>\n" +
      "<!--- close open cell --->\n" +
      "</td></tr></table></center></form>" +
      "<form name=\"og_mailform\" method=\"POST\" enctype=\"text/plain\" action=\"\" " + 
      // "onsubmit=\"og_gradeformsend(document.graderform,document.og_mailform);\" +
      "><input type=\"hidden\" name=\"result_sheet\" value=\"\"></form>";

    var s = this.renderResults("text",false);
    s = s.replace(/\"/g,"&quot;");
    tmpl = tmpl.replace(/!_TEXTBODY_!/g, s );
    s = this.renderResults("html",false);
    s = s.replace(/\"/g,"&quot;");
    tmpl = tmpl.replace(/!_HTMLBODY_!/g, s);
    tmpl = tmpl.replace(/!_SITETITLE_!/g,this.grader.answerKey.sitetitle.replace(/\"/g,"&quot;"));
    tmpl = tmpl.replace(/!_AUTHOR_!/g,this.grader.answerKey.author.replace(/\"/g,"&quot;"));
    tmpl = tmpl.replace(/!_BOOK_!/g,this.grader.answerKey.book.replace(/\"/g,"&quot;"));
    tmpl = tmpl.replace(/!_LOCATION_!/g,this.grader.answerKey.quizlocation.replace(/\"/g,"&quot;"));

    var supported = this.grader.total - this.grader.unsupported;

    tmpl = tmpl.replace(/!_SUP_!/g,supported);
    tmpl = tmpl.replace(/!_COR_!/g,this.grader.correct);
    tmpl = tmpl.replace(/!_INC_!/g,this.grader.incorrect);
    tmpl = tmpl.replace(/!_UNA_!/g,this.grader.unanswered);

    return tmpl;
  }
    this.renderEmailReporter = _RenderEmailReporter;


  function _RenderContentID (mode) {
    switch(mode) {
    case "html":
      var tmpl = "<P><BR><table align=center width=90% border=0>" +
	"<tr><td><span class=\"OGTitle\">Site Title:</span>!_SITE_!</td></tr>\n" +
	"<tr><td><span class=\"OGTitle\">Book's Title:</span>!_BOOK_!</td></tr>\n" +
	"<tr><td><span class=\"OGTitle\">Book's Author:</span>!_AUTHOR_!</td></tr>\n" +
	"<tr><td><span class=\"OGTitle\">Quiz Location:</span>!_LOCATION_!</td></tr>\n" +
	"</table></P><table align=center width=90% border=0>\n" +
	"<tr><td><span class=\"OGTitle\">Results Reporter</span></td></tr></table><center>";
      break;
    case "text":
      var tmpl = "Site Title: !_SITE_!\n" +
	"\Book's Title: !_BOOK_!\n" +
	"\Book's Author: !_AUTHOR_!\n" +
	"\nQuiz Location: !_LOCATION_!\n\nResults Reporter";
      break;
    default:
      var tmpl = "invalid mode " + mode + " given to _RenderContentID\n";
    }
    tmpl = tmpl.replace(/!_SITE_!/g,this.grader.answerKey.sitetitle);
    tmpl = tmpl.replace(/!_BOOK_!/g,this.grader.answerKey.booktitle);
    tmpl = tmpl.replace(/!_AUTHOR_!/g,this.grader.answerKey.author);
    tmpl = tmpl.replace(/!_LOCATION_!/g,this.grader.answerKey.quizlocation);
    return tmpl;
  }
    this.renderContentID = _RenderContentID;



  function _RenderResults(mode,showHeader) {
    var tmpl = r =  "";

    dbprint("renderResults");
    switch(mode) {
    case "html":
      tmpl = "!_CONTENTID_!\n!_SUMMARY_!\n" +
	"<table WIDTH=90% border=\"0\">" +
	"!_ROWS_!</table></center>";

      break;
    case "text":
      tmpl = "!_CONTENTID_!\n!_SUMMARY_!\n!_ROWS_!";

      break;
    default:
      var tmpl = "invalid mode " + mode + " given to _RenderResults\n";
    }
    if (!showHeader) {
      tmpl = tmpl.replace(/!_CONTENTID_!/g,"");
      tmpl = tmpl.replace(/!_SUMMARY_!/g,"");
    } else {
      tmpl = tmpl.replace(/!_CONTENTID_!/g,this.renderContentID(mode));
      tmpl = tmpl.replace(/!_SUMMARY_!/g,this.renderSummary(mode));
    }

    for (var i = 0; i < this.grader.result.length; i++) {
dbprint("render details row " + (i+1));	
      r += this.renderResultRow( i+1, this.grader.result[i],mode);
    }
    tmpl = tmpl.replace(/!_ROWS_!/g,r);
    return tmpl;
  }
  this.renderResults = _RenderResults;

  function _Render(elem) {
    var s = "";

    s += this.renderHeader("html");
    s += this.renderResults("html",true);
    s += this.renderFooter("html");
    if(this.email_support) { s += this.renderEmailReporter("html");}
    elem.innerHTML = s;
  }
  this.render = _Render;
}

// Entrypoint

function InvokeOfflineGrader (aForm) {
  email_support = SupportEmailReporter();
  answerKey = new AnswerKey();
  InitializeAnswerKey(answerKey);

  grader = new Grader(answerKey);
  grader.collectResponse(aForm);
  grader.evaluate();
  reporter = new ResultsReporter(grader,email_support);
  window.scrollTo(0,0);
  reporter.render(document.getElementById("div_entire_page"));
  return(false);
}

//Stylesheet must be picked up inline, as it won't be parsed again

document.write("<style type=text/css> \
.OGChapter {font-family:Arial,Helvetica; color:555555; font-weight:bold;}\
.OGTitle {font-family:Arial,Helvetica; color:000000; font-weight:bold;} \
.OGQuesHead {font-family:Arial,Helvetica; color:000088; font-weight:bold;} \
.OGQues {font-family:Arial,Helvetica; color:000088; font-weight:bold;} \
.OGCorOpt {font-family:Arial,Helvetica; color:green;} \
.OGCorExpl {font-family:Arial,Helvetica; color:green; font-weight:bold;} \
.OGUngradable {font-family:Arial,Helvetica; color:gray; font-weight:bold;} \
.OGIncOpt {font-family:Arial,Helvetica; color:cc0000;} \
.OGIncExpl {font-family:Arial,Helvetica; color:cc0000; font-weight:bold;} \
.OGGlobIncExpl {font-family:Arial,Helvetica; color:aa0000; font-weight:bold;} \
.OGPoints {font-family:Arial,Helvetica; font-style:italic;} \
.OGScore {font-family:Arial,Helvetica; font-style:italic; font-weight:bold;} \
.OGAns {font-family:Arial,Helvetica; color:000000; font-weight:bold;} \
.OGError {font-family:Arial,Helvetica; color:red; font-style:italic; font-weight:bold;} \
.OGChart  {font-family:Arial,Helvetica; color:000000; font-size:80%;} \
.OGEmailForm {font-family:Arial,Helvetica; color:000000; font-size:80%;} \
</style> ");

dbprint("done with the global");
