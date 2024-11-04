//********** Offline Grader Class Library ************/

//********** Utility functions ************/

var nut = navigator.userAgent.toLowerCase();

//quiz RR path fix for OS10 Safari bug
if (nut.indexOf("safari")!=-1) { var mediapath="../media/_grader_/";} 
else { var mediapath="../../media/_grader_/";}

function StringBuffer() { 
	this.buffer = []; 
} 

StringBuffer.prototype.append = function append(str) { 
	this.buffer.push(str + '\n'); 
	return this; 
}; 

StringBuffer.prototype.toString = function toString() { 
	return this.buffer.join(""); 
}; 

function htmlEscape (s) {
	var ret = new String(s);
	ret = ret.replace(/</g, '&lt;');
	ret = ret.replace(/>/g, '&gt;');
	ret = ret.replace(/&/g, '&amp;');
	return ret;
}

function stripHTML (s) {
	var ret = new String(s);

	// strip html comments, style block, script block
	ret = ret.replace(/<![-]+[^-]+[-]+>/ig, "");
	ret = ret.replace(/<style[^>]*>(.*|\s*)*<\/style>/ig, "");
	ret = ret.replace(/<script[^>]*>(.*|\s*)*<\/script>/ig, "");

	// replace break tag with xhtml style break tag
	ret = ret.replace(/<br[^>]*>\n*/ig, "<br />");

	// replace break tag with ctrl-n, paragraph tag with double ctrl-n
	ret = ret.replace(/<br[^>]*(\s+\/)?>/ig, "\n");
	ret = ret.replace(/<p[^>]*(\s+\/)?>/ig, "\n\n");

	// strip html open or close tag: 
	ret = ret.replace(/<\/?[a-z]+[^>]*(\s+\/)?>/ig, "");

	// replace non breaking space entity with space
	ret = ret.replace(/&nbsp;/ig, " ");

	// strip any starting cr/lfs or spaces followed only by cr/lf
	//ret = ret.replace(/^[\r\n ]+/, "");

	// strip any ending cr/lfs or trailing spaces
	//ret = ret.replace(/[\r\n\t ]+$/, "");

	// replace excessive blank lines with a single one
	ret = ret.replace(/[\n][\s]*[\n][\s]*[\n][\s]*([\n][\s])+/, "\n");

	return ret;
}

//********** Debug StringBuffer ************/
// use: dblog("val: " + val);
// set _dblog to true
// view debug info via view source
// IE bug: dblog in pattenmatch code causes rendering of comment on the page

var _dblog = false;
var db = new StringBuffer();

function dumpDebugBuffer() {
	if (_dblog) {
		var tmpl = "<!-- \n";
		tmpl += db.toString();
		tmpl += " -->";
		return tmpl;
	} else {
		return "";
	}
}

function dblog(s) {
	if (_dblog) { db.append(s);	}
}

//********** Answer ************/

function Answer(number, text, correct, explanation) {
	this.number = number;
	this.text = text;
	this.correct = !!correct; //make it a boolean
	this.explanation = explanation;
}

//********** AnswerPair ************/

function AnswerPair(number, text, matchText, correct, any_inc_explan, explanationArray) {
	this.number = number;
	this.text = text;
	this.matchText = matchText;
	this.correct = correct;	// always true
	this.anyIncorrectExplanation = any_inc_explan;
	this.explanationArray = explanationArray;
}

//********** Problem ************/

function Problem(type) {
	this.id = null;
	this.type = type;
	this.question = null;
	this.answersArray = new Array();
	this.incorrect_any_expl = null
	this.incorrect_any_expl_flag = false;
	this.incorrect_expls_flag = false;
	this.correct_expls_flag = false;
	this.explanation = null;
	this.numCorrect = 0;
	this.matchCase = false;
	this.maxCharsIncorrect = 0;
	this.correctPatternIdx = -1;
}

Problem.prototype.addAnswer = function addAnswer (number, text, correct, explanation) {
	var a = new Answer(number, text, correct, explanation);
	this.answersArray[this.answersArray.length] = a;
	if (correct) { this.numCorrect++; }
};

Problem.prototype.isCorrect = function isCorrect (val) {
	var i, l = this.answersArray.length, correctCount = 0, ta= null;
	switch (this.type) {
		case "essay":
			return true;
			break;
		case "patternmatch":
			var minErrors = this.maxCharsIncorrect + 1;
			for (i=0; i< l; i++) {
				ret = this.isPatternCorrect(this.answersArray[i].text, val, this.matchCase, this.maxCharsIncorrect);
				if (ret[0] == true) {
					if (ret[1] < minErrors) {
						minErrors = ret[1];
						this.correctPatternIdx = i;
					}
				}
			}
			return (this.correctPatternIdx != -1) ? true : false;
			break;
		default:	// mc, fitb, tf			
			if (this.numCorrect > 1) {
				var rt = true, rs = new Object();
				ta = val.split(",");
				for (i in ta) {  rs[ta[i]] = true; }
				for (i=0; i< l; i++) {
					if (!this.answersArray[i].correct && rs[this.answersArray[i].number]) {  return false; }
					if (this.answersArray[i].correct && rs[this.answersArray[i].number]) {  correctCount++; }
				}
				if (correctCount != this.numCorrect) { return false };
				return true;
			} else {
				for (i=0; i< l; i++) {
					if (this.answersArray[i].number == val)  {return this.answersArray[i].correct;}
				}
				return false;
			}
			break;
	}
};

Problem.prototype.isPatternCorrect = function isPatternCorrect (a, b, matchCase, maxErr) {
	var sa = new String(a);
	var sb = new String(b);
	var err = 0;
	var retval = new Array(true, 0);
	
	// strip leading and trailing whitespace
	sa = sa.replace(/(^\s+)/g, '');
	sb = sb.replace(/(^\s+)/g, '');
	sa = sa.replace(/(\s+$)/g, '');
	sb = sb.replace(/(\s+$)/g, '');

	// normalize internal whitespace 
	sa = sa.replace(/(\s+)/g, ' ');
	sb = sb.replace(/(\s+)/g, ' ');

	dblog('sa, after regexes: ' + sa);
	dblog('sb, after regexes: ' + sb);
	dblog('matchCase: ' + matchCase);
	dblog('maxErr: ' + maxErr);
	
	// compare strings character by character
	var ia = 0;
	var ib = 0;
	var ca = sa.charAt(ia++);
	var cb = sb.charAt(ib++);
	
	// compare until both character variables are set to unicode 0
	while (!(ca.charCodeAt(0) == 0  && cb.charCodeAt(0) == 0)) {
		dblog('comparing: |' + ca + '|' + cb + '|');
		if (this.comparePattern(ca, cb, matchCase)) {
			// point at next char unless end of string, then unicode 0
			ca = (ia < sa.length) ? sa.charAt(ia++) : String.fromCharCode(0);
			cb = (ib < sb.length) ? sb.charAt(ib++) : String.fromCharCode(0);
			continue;
		} else {
			retval[1] = ++err;
			dblog('incorrect: ' + err);
			if (err > maxErr) { retval[0] = false; break; }	// all done
			
			// whitespace: 'wait' for longer words to finish before continuing to compare
			ca_is_WS = (ca.match(/\s/)) ? true : false;
			cb_is_WS = (cb.match(/\s/)) ? true : false;
			if (ca_is_WS || cb_is_WS) {
				if (ca_is_WS) {
					// bump only cb char variable
					dblog('bumping only cb'); 
					cb = (ib < sb.length) ? sb.charAt(ib++) : String.fromCharCode(0);
				} else {
					// bump only ca char variable
					dblog('bumping only ca'); 
					ca = (ia < sa.length) ? sa.charAt(ia++) : String.fromCharCode(0);
				}
			} else {
				// bump both char variables
				ca = (ia < sa.length) ? sa.charAt(ia++) : String.fromCharCode(0);
				cb = (ib < sb.length) ? sb.charAt(ib++) : String.fromCharCode(0);
			}
		}
	}
	dblog('returning: ' + retval[0] + ', ' + retval[1]);
	dblog('----------------------------------');
	return retval;
};

Problem.prototype.comparePattern = function comparePattern (ca, cb, matchCase) {
	if (ca.match(/\s/) && cb.match(/\s/)) {
		return true;
	}
	if (matchCase) {
		return (ca == cb);
	} else {
		return (ca.toLowerCase() == cb.toLowerCase());
	}
};

Problem.prototype.getAnswerText = function getAnswerText (val) {
	var ta = null, s = "", a = new Array(), i, l = this.answersArray.length, firstTime = true, rs = new Object();
	switch (this.type) {
		case "patternmatch":
			// not applicable
			break;

		case "essay":
			var s = new String(val); 
			// disarm potentially hostile HTML intruders
			//s = s.replace(/&/g, "&#38;");
			//s = s.replace(/</g, "&#60;");
			//s = s.replace(/>/g, "&#62;");
			return s;
			break;

		default:	// mc, fitb, tf	
			ta = val.split(",");
			for (i in ta) {  rs[ta[i]] = true; }
			for (i=0; i< l; i++) {
				if (rs[this.answersArray[i].number]) {
					a.push(this.answersArray[i].text);
				}
			}
			return a;
			break;
	}
};

Problem.prototype.getAnswerExplanation = function getAnswerExplanation (val) {
	var ta = null, a = new Array(), i, l = this.answersArray.length, rs = new Object();
	switch (this.type) {
		case "patternmatch":
			a.push(this.answersArray[this.correctPatternIdx].explanation); 
			return a;
			break;
		
		default:		// mc, fitb, tf, essay
			ta = val.split(",");
			for (i in ta) {  rs[ta[i]] = true; }
			for (i=0; i< l; i++) {
				if (rs[this.answersArray[i].number]) {
					a.push(this.answersArray[i].explanation);
				}
			}
			return a;
			break;
	}
};

// called for problem types: mc, fitb, tf, patternmatch
Problem.prototype.getNumCorrectAnswers = function getNumCorrectAnswers () {
	var i, ret=0; a = new Array(); l = this.answersArray.length;
	for (i=0; i< l; i++) {
		if (this.answersArray[i].correct)  {
			ret++;
		}
	}
	return ret;
};

// called for problem types: mc, fitb, tf
Problem.prototype.getNumResponses = function getNumResponses (val) {
	var ta = val.toString().split(",");
	return ta.length;
};
	
//********** PairedProblem ************/

function PairedProblem(type) {
	this.id = null;
	this.type = type;
	this.question = null;
	this.explanation_incorrect = "";
	this.answerPairsArray = new Array();
	this.incorrect_pair_expls_flags = null;
	this.incorrect_any_expls_flags = null;
	this.incorrect_item_expls_flags = null;
	this.incorrect_any_expl_flag = false;
	this.incorrect_expls_flag = false;
	this.image_url = "";
	this.longdesc = false;
	this.longdescurl = null;
	this.reverse_map = null;	// for text rendering of labeling problems
	this.col1 = false;
	this.col2 = false;
	this.expl = new Array();	// 'working' array used in calculateFeedbackValues and rendering
	this.sep = new Array();		// 'working' array used in calculateFeedbackValues and rendering
}

PairedProblem.prototype.addAnswerPair = function addAnswerPair (number, text, matchText, correct, any_inc_explan, explanationArray) {
	var a = new AnswerPair(number, text, matchText, correct, any_inc_explan, explanationArray);
	this.answerPairsArray[this.answerPairsArray.length] = a;
};

PairedProblem.prototype.isPairCorrect = function isPairCorrect (pair_idx, val) {
	return (this.answerPairsArray[pair_idx].number == val) ? true : false;
};

// r is result obj
PairedProblem.prototype.isAnsweredIncorrectly = function isAnsweredIncorrectly (r) {
	// if at least one of the pairs is graded as incorrect
	for (i=0; i<r.pairResults.length; i++) {
		if (r.pairResults[i].code == "incorrect") {
			return true;
		}
	}
	return false;
};

PairedProblem.prototype.needCorrectAnswerCol = function needCorrectAnswerCol () {
	return this.col1;
};

PairedProblem.prototype.needIncorrectFeedbackCol = function needIncorrectFeedbackCol () {
	return this.col2;
};	

// r is result obj
PairedProblem.prototype.calculateFeedbackValues = function calculateFeedbackValues (r) {
	this.col1 = false;
	if (this.incorrect_expls_flag) {
		this.col2 = false;
	}
	for (i=0; i<this.answerPairsArray.length; i++) {
		answerPair = this.answerPairsArray[i];
		this.incorrect_item_expl_flag = this.incorrect_item_expls_flags[i];
		if (this.incorrect_expls_flag && !this.incorrect_item_expl_flag) {
			this.expl[i] = false;
		}
		if (r.pairResults[i].code == "incorrect") {
			this.col1 = true;
			if (this.incorrect_item_expl_flag) {
				this.incorrect_any_expl_flag = this.incorrect_any_expls_flags[i];
				if (this.incorrect_any_expl_flag) {
					this.col2 = true;
				}
				this.expl[i] = this.incorrect_any_expl_flag;
				this.sep[i] = false;
				if (this.incorrect_pair_expls_flags[i]) {
					if (answerPair.explanationArray[r.pairResults[i].val] != "") {
						if (this.incorrect_any_expl_flag) {
							this.sep[i] = true;
						} else {
							this.col2 = true;
							this.expl[i] = true;
						}
					}
				}
			}
		} else {
			this.expl[i] = false;
		}
	}
};

//********** AnswerKey ************/

function AnswerKey () {
	this.problemsArray = new Array();
	this.site_title = "";
	this.book_title = ""; 
	this.author = "";
	this.quiz_location = "";
	this.quiz_loc_with_commas = "";
	this.quiz_title = "";
	this.time_spent = "";
	
	this.essay_total = 0;
	this.pair_problem_total = 0;
	this.pair_total = 0;
	this.problemsArray_total = 0;
	this.non_essay_total = 0;
	this.scored_item_total = 0;

	this.copyright_date = "";
	this.brandname = "";
	this.legal = "";

	this.email_support = true;
	this.grade_sender_url = "";
	this.style_base_url = "";
}
	
AnswerKey.prototype.init = function init () {
	// normalize white space
	this.site_title = this.site_title.replace(/(\s+)/g, ' ');
	this.book_title = this.book_title.replace(/(\s+)/g, ' ');
	this.author = this.author.replace(/(\s+)/g, ' ');
	this.quiz_location = this.quiz_location.replace(/(\s+)/g, ' ');
	this.quiz_loc_with_commas = this.quiz_loc_with_commas.replace(/(\s+)/g, ' ');
	this.quiz_title = this.quiz_title.replace(/(\s+)/g, ' ');
};

AnswerKey.prototype.addProblem = function addProblem (p) {
	this.problemsArray[this.problemsArray.length] = p;
};

AnswerKey.prototype.addPairedProblem = function addPairedProblem (p) {
	this.problemsArray[this.problemsArray.length] = p;
};

AnswerKey.prototype.getProblem = function getProblem (i) {
	return this.problemsArray[i];
};

//********** Result ************/

function Result (r, val, p, pr) {
	this.code = r;
	this.val = val;
	this.problem = p;
	this.pairResults = (pr) ? pr : null;
}

//********** PairResult ************/

function PairResult (r, val) {
	this.code = r;
	this.val = val;
}

//********** Grader ************/

function Grader (answerKey) {
	this.answerKey = answerKey;
	this.responsesAssocArray = new Object();
	this.pairResponses = new Array();
	this.result = new Array();
	this.correct = 0;
	this.incorrect = 0;
	this.unanswered = 0;
	this.notscored = 0;
	this.total = 0;
}
	
Grader.prototype.collectResponse = function collectResponse (theForm) {
	// Loop over the form and gather up everything
	// into the responses associative array
	var s, offset, current, r;
	var id = new String();
	var lastRadio = null;
	var lastSelect = null;

	this.answerKey.time_spent = theForm.elements['timer'].value;
	
	for (var i=0; i<theForm.length; i++) {
		current = theForm.elements[i];
		s = new String(current.name);
		if(s.search(/^UserAnswer_/) >= 0) {
			id = s.replace(/^UserAnswer_/, "");
			offset = 0;
		} else {
			id = s.replace(/^answer_/, "");
			offset = 1;
		}
		switch (current.type) {
			case "textarea":	// essay
			case "text":		// patternmatch
				this.responsesAssocArray[id] = current.value;
				break;
				
			case "checkbox":	// multiple choice
				if(current.checked) {
					if(this.responsesAssocArray[id] == null) { 
						r = parseInt(current.value) + offset;
						this.responsesAssocArray[id] = r.toString();
					} else {
						r = parseInt(current.value) + offset;
						this.responsesAssocArray[id] += "," + r.toString();
					}
				}
				break;
				
			case "radio":	// multiple choice, fillintheblanks, truefalse
				if(current.checked) {
					lastRadio = id;
					r = parseInt(current.value) + offset;
					this.responsesAssocArray[id] = r.toString();
				} else {
					// RENS warning this will fail with noncontiguous radio groups
					if (lastRadio != id) {
						lastRadio = id;
						this.responsesAssocArray[id] = null;
					}
				}
				break;
				
			case "select-one":	// labeling and matching
				// pull problem number and item (pair) number off 'id'
				//var reg = /(\d*)_(\d*)/g;
				ar = id.split('_');
				var prob_id = ar[0];
				var pair_id = ar[1];
				if (lastSelect != prob_id) {
					lastSelect = prob_id;
					var pairs = new Array();
					pairs[0] = current.value;
					this.responsesAssocArray[prob_id] = pairs;
				} else {
					pairs.push(current.value);
				}
				break;
				
			case "hidden":		// for the timer
			case "submit":
			case "reset":
			case "select-multiple":
			case "image":
			case "":
				// known items to ignore
				break;
		}
	}
};

Grader.prototype.evaluate = function evaluate () {
	var i;
	for (i=0; i < this.answerKey.problem_total; i++) {
		//this.total++;
		var p = this.answerKey.getProblem(i);
		switch (p.type) {
			case "essay":
				if ( this.responsesAssocArray[p.id] == null || this.responsesAssocArray[p.id] == "" ) {
					this.unanswered++;
					this.result[i] = new Result("unanswered", 0, p);
				} else {
					this.notscored++;
					this.result[i] = new Result("notscored", this.responsesAssocArray[p.id], p);
				}
				break;
			
			case "labeling":
			case "matching":
				var pairResults = new Array();
				var pairResponses = this.responsesAssocArray[p.id];
				for (j=0; j<pairResponses.length; j++) {
					pairResponse = pairResponses[j];
					if (pairResponse == null || pairResponse == "") {
						this.unanswered++;
						this.incorrect++;
						pairResult = new PairResult("unanswered", pairResponse);
						pairResults.push(pairResult);
					} else {
						if (p.isPairCorrect(j, pairResponse)) {
							this.correct++;
							pairResult = new PairResult("correct", pairResponse);
							pairResults.push(pairResult);
						} else {
							this.incorrect++;
							pairResult = new PairResult("incorrect", pairResponse);
							pairResults.push(pairResult);
						}
					}
				}
				this.result[i] = new Result("pairs", 0, p, pairResults);
				break;
			
			default:		// mc, fitb, tf	
				if ( this.responsesAssocArray[p.id] == null || this.responsesAssocArray[p.id] == "" ) {
					this.unanswered++;
					this.incorrect++;
					this.result[i] = new Result("unanswered", 0, p);
				} else {
					if (p.isCorrect(this.responsesAssocArray[p.id])) {
						this.correct++;
						this.result[i] = new Result("correct", this.responsesAssocArray[p.id], p);
					} else {
						this.incorrect++
						this.result[i] = new Result("incorrect", this.responsesAssocArray[p.id], p);
					}
				}
				break;
		}
	}
};

// debug function
Grader.prototype.dump_results = function dump_results () {
	var i;
	for (i=0; i < this.answerKey.problem_total; i++) {
		var p = this.answerKey.getProblem(i);
		dblog("dump_results: i: " + i);
		dblog('p.id: ' + p.id + '  response: ' + this.responsesAssocArray[p.id]);
	}
};

//********** ResultsReporter ************/

function ResultsReporter (grader, email, sender) {
	this.grader = grader;
	this.email_support = email;
	this.sender = sender;
}

ResultsReporter.prototype.renderQuizInfoBeg = function renderQuizInfoBeg (mode) {
	var ak = this.grader.answerKey;
	var buf = new StringBuffer();
	switch(mode) {
		case "html":
			buf.append('');
			buf.append('<table width="100%" border="0" cellspacing="0" cellpadding="5" \n');
			buf.append('summary="A display table presents the page heading and a Print button. There are no data tables on this page.">\n');
			buf.append('<tr valign="top">\n');
			buf.append('<td><span class="contentHeader">Your Results for "' + ak.quiz_title + '"</span></td>\n');
			buf.append('<td align="right">\n');
			buf.append('<p><a href="javascript:window.print();"><nobr>Print this page</nobr></a><noscript><br />\n');
			buf.append('The Print feature requires scripting to function. Your browser either does not support scripting \n');
			buf.append('or you have turned scripting off. To print this page, first highlight the text, then select Print \n');
			buf.append('from the File menu.</noscript></p></td>\n');
			buf.append('</tr></table> \n');
			buf.append('<!-- *** Results Summary Table *** --> \n');
			buf.append('<table width="100%" border="0" cellpadding="5" cellspacing="0" \n');
			buf.append('summary="A display table presents summary information about this quiz and a summary of your results.">\n');
			buf.append('<tr valign="top">\n');
			buf.append('<td>\n');
			buf.append('<table width="100%" border="0" align="center" cellpadding="3" cellspacing="0"\n');
			buf.append('summary="A display table presents information about this quiz.">\n');
			break;
		case "text":
			break;
	}
	return buf.toString();
};

ResultsReporter.prototype.renderQuizInfoEnd = function renderQuizInfoEnd (mode) {
	var ak = this.grader.answerKey;
	var buf = new StringBuffer();
	var d = new Date();
	switch(mode) {
		case "html":
			if (ak.site_title) {
				buf.append('<tr valign="top">\n');
				buf.append('<td width="30%" align="right"><span class="Title">Site Title:</span></td>\n');
				buf.append('<td width="70%"><span>' + ak.site_title + '</span></td>\n');
				buf.append('</tr>\n');
			}
			if (ak.book_title) {
				buf.append('<tr valign="top">\n');
				buf.append('<td width="30%" align="right"><span class="Title">Book\'s Title:</span></td>\n');
				buf.append('<td width="70%"><span>' + ak.book_title + '</span></td>\n');
				buf.append('</tr>\n');
			}
			if (ak.author) {
				buf.append('<tr valign="top">\n');
				buf.append('<td width="30%" align="right"><span class="Title">Book\'s Author:</span></td>\n');
				buf.append('<td width="70%"><span>' + ak.author + '</span></td>\n');
				buf.append('</tr>\n');
			}
			if (ak.quiz_location) {
				buf.append('<tr valign="top">\n');
				buf.append('<td width="30%" align="right"><span class="Title">Location on Site:</span></td>\n');
				buf.append('<td width="70%"><span>' + ak.quiz_location + '</span></td>\n');
				buf.append('</tr>\n');
			}
			buf.append('<tr valign="top">\n');
			buf.append('<td width="30%" align="right"><p class="Title">Date/Time Submitted:</p></td>\n');
			buf.append('<td width="70%"><p>' + d.toString() + '</p></td>\n');
			buf.append('</tr>\n');

			if (ak.time_spent) {
				buf.append('<tr valign="top">\n');
				buf.append('<td width="30%" align="right"><p class="Title">Time Spent:</p></td>\n');
				buf.append('<td width="70%"><p>' + ak.time_spent + '</p></td>\n');
				buf.append('</tr>\n');
			}
			buf.append('</table></td>\n');
			break;
		case "text":
			if (ak.site_title) {
				buf.append('Site Name: ' + stripHTML(ak.site_title));
			}
			if (ak.author) {
				buf.append('Author Name: ' + stripHTML(ak.author));
			}
			if (ak.quiz_location) {
				buf.append('Location on Site: ' + stripHTML(ak.quiz_location));
			}
			buf.append('\n');
			
			break;
	}
	return buf.toString();
};

ResultsReporter.prototype.renderSummary = function renderSummary (mode) {
	var g = this.grader;
	var ak = this.grader.answerKey;
	var tmpl = "";
	var buf = new StringBuffer();
	switch (mode) {
		case "html":
			buf.append('<td align="right">');
			buf.append('<table width="300" border="0" cellpadding="0" cellspacing="0" class="tableFrameBorder" summary="">\n');
			buf.append('<tr><td valign="top">\n');
			buf.append('<table width="100%" border="0" align="center" cellpadding="4" \n');
			buf.append('cellspacing="1" summary="A display table presents your results.">\n');
			buf.append('<tr align="center"><td align="center" class="tableRowTitle">Summary of Results</td></tr>\n');
			buf.append('<tr><td width="50%" align="center" class="tableRowAlt2">\n');
			
			if (ak.non_essay_total > 0) {
			
				buf.append('<span class="ResultsForm"><span class="Score">!_PCOR_!%\n');
				buf.append('Correct</span> of '+ ak.scored_item_total + '\n');
				buf.append((ak.essay_total > 0) ? 'scored ' : '');
				buf.append((ak.scored_item_total != 1) ? 'items: ' : 'item: ');
				buf.append('</span>\n');
				buf.append('<table width="100%" border="0" cellspacing="0" cellpadding="2" \n');
				buf.append('summary="A display table gives four pieces of information: number correct, percent correct, number incorrect, and percent incorrect.">\n');
				buf.append('<tr>\n');
				buf.append('<td width="30%" align="right" class="ResultsForm">!_COR_! correct:</td>\n');
				buf.append('<td width="70%" class="ResultsForm">\n');
				buf.append('<img src="'+mediapath+'images/resgraph_c2.gif" \n');
				buf.append('alt="!_PCOR_!% Correct" width="!_PCORMIN1_!" \n');
				buf.append('height="10" align="bottom" valign="baseline"> \n');
				buf.append('!_PCOR_!%</td>\n');
				buf.append('</tr><tr>\n');
				buf.append('<td width="30%" align="right" class="ResultsForm">!_INCOR_! incorrect:</td>\n');
				buf.append('<td width="70%" class="ResultsForm"><img src="'+mediapath+'images/resgraph_i2.gif"\n');
				buf.append('alt="!_PINCOR_!% Incorrect" width="!_PINCMIN1_!"\n');
				buf.append('height="10" align="bottom" valign="baseline">\n');
				buf.append('!_PINCOR_!%</td>\n');
				buf.append('</tr></table>\n');

			} else {

				buf.append('<table width="100%" border="0" cellspacing="0" cellpadding="0" \n');
				buf.append('summary="A display table presents some information about scoring for this type of quiz.">\n');
				buf.append('<tr><td>\n');
				buf.append('<p class="ResultsForm">\n');
				if (ak.essay_total == 1) {
					buf.append('This activity consists of one essay question, which is not scored by the system.\n');
				} else {
					buf.append('All ' + ak.essay_total + ' questions in this activity\n');
					buf.append('are essays, which are not scored by the system.\n');
				}
				buf.append('</p><br><br><p class="ResultsForm">You answered !_NOTSCORED_! \n');
				buf.append((g.notscored != 1) ? 'questions, ' : 'question, ');
				buf.append('and left !_UNANSW_! ');
				buf.append((g.unanswered != 1) ? 'questions ' : 'question ');
				buf.append(' blank.</p>\n');
				buf.append('</td></tr></table>\n');
			}
			buf.append('</td></tr>\n');
			buf.append('<tr class="tableRowAlt1"><td><p class="ResultsForm">\n');
			if (ak.problem_total > ak.essay_total) {
				if (ak.essay_total > 0) {
					buf.append('' + ak.essay_total + '\n');
					buf.append((ak.essay_total != 1) ? 'questions ' : 'question ');
					buf.append('not scored.\n');
					buf.append('' + ak.non_essay_total + ' scored \n');
					buf.append((ak.non_essay_total != 1) ? 'questions.<br>' : 'question.<br>');
				}
				if (ak.pair_problem_total > 0) {
					buf.append('' + ak.problem_total + ' total \n');
					buf.append((ak.problem_total != 1) ? 'questions ' : 'question ');
					buf.append('in quiz (with ' + ak.pair_problem_total + ' ');
					buf.append((ak.pair_problem_total != 1) ? 'questions ' : 'question ');
					buf.append('containing multiple pairs), for a total of \n');
					buf.append('' + ak.scored_item_total + ' scored items.\n');
				}
			}			
			buf.append('</p></td></tr></table></td></tr></table></td></tr></table></td>');
			break;	

		case "text":
			if (ak.non_essay_total > 0) {
				buf.append('!_PCOR_!% Correct of ' + ak.scored_item_total + ((ak.essay_total > 0) ? ' scored ' : ' ') + 'item' + ((ak.scored_item_total != 1) ? 's:' : ':'));
				buf.append('!_COR_! Correct: !_PCOR_!%');
				buf.append('!_INCOR_! Incorrect: !_PINCOR_!%' + '\n');
			} else {
				if (ak.essay_total == 1) {
					buf.append('This activity consists of one essay question, which is not scored by the system.');
				} else {
					buf.append('All ' + ak.essay_total + ' questions in this activity are essays, which are not scored by the system.');
				}
				buf.append('You answered !_NOTSCORED_! ' + ((g.notscored != 1) ? 'questions, ' : 'question, ') + 'and left !_UNANSW_! ' + ((g.unanswered != 1) ? 'questions ' : 'question ') + 'blank.\n');
			}
			if (ak.problem_total > ak.essay_total) {
				if (ak.essay_total > 0) {
					buf.append(ak.essay_total + ' question' + ((ak.essay_total != 1) ? 's' : '') + ' not scored. ' + ak.non_essay_total + ' scored question' + ((ak.non_essay_total != 1) ? 's.' : '.'));
				}
				if (ak.pair_problem_total > 0) {
					buf.append(ak.problem_total + ' total question' + ((ak.problem_total != 1) ? 's' : '') + ' in quiz (with ' + ak.pair_problem_total + ' question' + ((ak.pair_problem_total != 1) ? 's' : '') + ' containing multiple pairs), ');
					buf.append('for a total of ' + ak.scored_item_total + ' scored items.');
				}
			}

			buf.append('\n');
			buf.append('Submitted on !_TSTAMP_! ');
			break;		
	}

	tmpl = buf.toString();
	
	var _graded = g.correct + g.incorrect;
	
	var pCorrect = Math.round((g.correct / _graded) * 100);
	var pCorrectMin1 = (pCorrect > 0) ? pCorrect : 1;
	var pIncorrect = Math.round((g.incorrect / _graded) * 100);
	var pIncorrectMin1 = (pIncorrect > 0) ? pIncorrect : 1;

	var d = new Date();
	tmpl = tmpl.replace(/!_TOT_!/g, ak.non_essay_total);
	tmpl = tmpl.replace(/!_COR_!/g, g.correct);
	tmpl = tmpl.replace(/!_INCOR_!/g, g.incorrect);
	tmpl = tmpl.replace(/!_UNANSW_!/g, g.unanswered);
	tmpl = tmpl.replace(/!_NOTSCORED_!/g, g.notscored);
	tmpl = tmpl.replace(/!_PCOR_!/g, pCorrect);
	tmpl = tmpl.replace(/!_PCORMIN1_!/g, pCorrectMin1);
	tmpl = tmpl.replace(/!_PINCOR_!/g, pIncorrect);
	tmpl = tmpl.replace(/!_PINCMIN1_!/g, pIncorrectMin1);
	tmpl = tmpl.replace(/!_TSTAMP_!/g, d.toString());
	tmpl = tmpl.replace(/!_HELP_URL_!/g, ak.help_url);

	return tmpl;
};

// n is row num (index to problem), r is result obj
ResultsReporter.prototype.renderResultRow = function renderResultRow (n, r, mode) {
	var str = "";
	switch (r.problem.type) {
		case "fillintheblanks":
		case "multiplechoice":
		case "truefalse":
			str = this.renderResultRowBasic(n, r, mode);
			break;
		case "essay":
			str = this.renderResultRowEssay(n, r, mode);
			break;
		case "patternmatch":
			str = this.renderResultRowPatternmatch(n, r, mode);
			break;
		case "labeling":
		case "matching":
			str = this.renderResultRowLabelingMatching(n, r, mode);
			break;
	}
	return str;
};
		
// n is row num (index to problem), r is result obj
ResultsReporter.prototype.renderResultRowBasic = function renderResultRowBasic (n, r, mode) {
	var buf = new StringBuffer();
	switch (mode) {
		case "html":
			buf.append('<tr><td valign="top"><p class="number">' + n + '.</p></td>');
			buf.append('<td valign="top">');
			if (r.code == "correct") {
				buf.append('<img src="'+mediapath+'images/correct.gif" alt="Correct" width="80" height="13">');
			} else {
				buf.append('<img src="'+mediapath+'images/incorrect.gif" alt="Incorrect" width="80" height="13">');
			}
			buf.append('</td>');
			buf.append('<td width="99%" valign="top"><span class="Ques">' + r.problem.question + '</span><br><br>');
			buf.append('<table width="100%" border="0" cellpadding="2" cellspacing="0" summary="A display table presents your results for this question">');
			buf.append('<tr>');
			buf.append('<td valign="top" align="right" nowrap>');
			if (r.problem.getNumResponses(r.val) > 1) {
				buf.append('<p class="Ans">Your Answers:</p>');
			} else {
				buf.append('<p class="Ans">Your Answer:</p>');
			}
			buf.append('</td>');
			buf.append('<td width="99%" valign="top">');
			// if answered correctly, loop through correct answers and show text
			if (r.code == "correct") {
				var j = 0;
				var l = r.problem.answersArray.length;
				for (i=0; i< l; i++) {
					if (r.problem.answersArray[i].correct) {
						if (j > 0) { buf.append('<br><br>'); } j = 1;
						buf.append('<span class="CorOpt">' + r.problem.answersArray[i].text + '</span>');
					}
				}
			} else if (r.code != "unanswered") {
				// not answered correctly, show user's answers
				var j = 0;
				var a = r.problem.getAnswerText(r.val);
				for (i=0; i<a.length; i++) { 
					if (j > 0) { buf.append('<br><br>'); } j = 1;
					buf.append('<span class="IncOpt">' + a[i] + '</span>');
				}
				buf.append('<td>');
				buf.append('</tr>');
				buf.append('<tr>');
				// Show correct answers
				buf.append('<td valign="top" align="right" nowrap>');
				if (r.problem.getNumCorrectAnswers() > 1) {
					buf.append('<p class="Ans">Correct Answers:</p>');
				} else {
					buf.append('<p class="Ans">Correct Answer:</p>');
				}
				buf.append('</td>');
				buf.append('<td width="99%" valign="top">');
				var j = 0;
				var l = r.problem.answersArray.length;
				for (i=0; i< l; i++) {
					if (r.problem.answersArray[i].correct) {
						if (j > 0) { buf.append('<br><br>'); } j = 1;
						buf.append('<span class="CorOpt">' + r.problem.answersArray[i].text + '</span>');
					}
				}
			}
			// Question was not answered
			if (r.code == "unanswered") {
				buf.append('<p class="IncOpt">(blank)</p>');
			}
			buf.append('</td>');
			buf.append('</tr>');
			buf.append('</table></td>');
			buf.append('</tr>');
	
	
			// if there are some correct explanations  -OR-  at least one incorrect per-answer feedback 
			if (r.problem.correct_expls_flag || r.problem.incorrect_expls_flag) {
				if (r.code != "unanswered") {
					if (r.code == "correct") {
						if (r.problem.correct_expls_flag) {
							buf.append('<tr valign="top">');
								//buf.append('<td colspan="2">&nbsp;</td>');
								buf.append('<td colspan="2"></td>');
								buf.append('<td width="99%">');
									var ia = r.problem.getAnswerExplanation(r.val);
									var j = 0;
									var l = ia.length;
									for (i=0; i< l; i++) {
										if (j > 0) { buf.append('<br><br>'); } j = 1;
										buf.append('<span class="CorOpt">' + ia[i] + '</span>');
									}
								buf.append('</td>');
							buf.append('</tr>');
						}
					// answered incorrectly
					} else {
						if (r.problem.incorrect_expls_flag || r.problem.incorrect_any_expl_flag) {
							buf.append('<tr valign="top">');
							//buf.append('<td colspan="2">&nbsp;</td>');
							buf.append('<td colspan="2"></td>');
							buf.append('<td width="99%">');
							var ia = r.problem.getAnswerExplanation(r.val);
							var j = 0;
							var sep = 0;
							var l = ia.length;
							for (i=0; i< l; i++) {
								if (j > 0) { buf.append('<br><br>'); } j = 1;
								buf.append('<span class="IncExpl">' + ia[i] + '</span>');
								sep = 1;
							}
							if (r.problem.incorrect_any_expl_flag) {
								if (sep > 0) { 
									buf.append('<br><br>');
								} 
								buf.append('<span class="GlobIncExpl">');
								buf.append(r.problem.incorrect_any_expl);
								buf.append('</span>');
							}
							buf.append('</td>');
							buf.append('</tr>');
						}
					}
				}
			}
			break;

		case "text":
			buf.append(stripHTML(r.problem.question) + '\n');
			// if answered correctly, loop through correct answers and show text
			if (r.code != "unanswered") {
				if (r.code == "correct") {
					var l = r.problem.answersArray.length;
					for (i=0; i< l; i++) {
						if (r.problem.answersArray[i].correct) {
							buf.append('Correct: ' + stripHTML(r.problem.answersArray[i].text) + '\n');
							if (r.problem.answersArray[i].explanation) {
								buf.append(stripHTML(r.problem.answersArray[i].explanation) + '\n');
							}
						}
					}
				} else {
					// incorrectly answered
					var a = r.problem.getAnswerText(r.val);
					var ia = r.problem.getAnswerExplanation(r.val);
					for (i=0; i<a.length; i++) { 
						buf.append('Incorrect: ' + stripHTML(a[i]) + '\n');
						if (ia[i]) { 
							buf.append(stripHTML(ia[i]) + '\n');
						}
					}
					if (r.problem.incorrect_any_expl_flag) {
						buf.append(stripHTML(r.problem.incorrect_any_expl) + '\n');
					}
				}
			} else {
				// unanswered
				buf.append('Incorrect: (blank) \n');
			}
			break;

	}

	return buf.toString();
};

// n is row num (index to problem), r is result obj
ResultsReporter.prototype.renderResultRowEssay = function renderResultRowEssay (n, r, mode) {
	var buf = new StringBuffer();
	switch (mode) {
		case "html":
			buf.append('<tr><td valign="top"><p class="number">' + n + '.</p></td>');
  			if (this.grader.answerKey.non_essay_total > 0) {
				buf.append('<td valign="top">');
				buf.append('<img src="'+mediapath+'images/not_scored.gif" alt="Not Scored" width="80" height="13">');
				buf.append('</td>');
			}
			buf.append('<td width="99%" valign="top"><span class="Ques">' + r.problem.question + '</span><br>');
			buf.append('<table width="100%" border="0" cellpadding="2" cellspacing="0" summary="A display table presents your results for this essay question">');
			buf.append('<tr>');
			buf.append('<td valign="top">');
			buf.append('<p class="Ans">Your Answer:</p>');
			buf.append('</td>');
			buf.append('</tr>');
			buf.append('<tr>');
			buf.append('<td width="99%" valign="top">');
			if (r.code != "unanswered") {
				buf.append('<p class="essayText" wrap>' + r.val + '</p>');
			} else {
				buf.append('<span class="IncOpt">(blank)</span>');
			}
			buf.append('</td>');
			buf.append('</tr>');
			buf.append('</table></td>');
			buf.append('</tr>');
			if (r.problem.explanation != "") {
				// if answered
				if (r.code != "unanswered") {
					buf.append('<tr>');
					if (this.grader.answerKey.non_essay_total > 0) {
						//buf.append('<td colspan="2">&nbsp;</td>');
						buf.append('<td colspan="2"></td>');
					} else {
						//buf.append('<td>&nbsp;</td>');
						buf.append('<td></td>');
					}
					buf.append('<td width="99%">' + r.problem.explanation + '</span></td>');
					buf.append('</tr>');
				}
			}
			break;
			
		case "text":
			buf.append(stripHTML(r.problem.question) + '\n');
			if (r.code != "unanswered") {
				buf.append('Not Scored: ' + r.val + '\n');
				if (r.problem.explanation != "") {
					buf.append(stripHTML(r.problem.explanation) + '\n');
				}
			} else {
				buf.append('Not Scored: (blank) \n');
			}		
			break;
		
	}

	return buf.toString();
};

// n is row num (index to problem), r is result obj
ResultsReporter.prototype.renderResultRowPatternmatch = function renderResultRowPatternmatch (n, r, mode) {
	var buf = new StringBuffer();
	switch (mode) {
		case "html":
			buf.append('<tr>');
			buf.append('<td valign="top"><p class="number">' + n + '.</p></td>');
			buf.append('<td valign="top">');
			if (r.code == "correct") {
				buf.append('<img src="'+mediapath+'images/correct.gif" alt="Correct" width="80" height="13">');
			} else {
				buf.append('<img src="'+mediapath+'images/incorrect.gif" alt="Incorrect" width="80" height="13">');
			}
			buf.append('</td>');
			buf.append('<td width="99%" valign="top"><span class="Ques">' + r.problem.question + '</span><br><br>');
			buf.append('<table width="100%" border="0" cellpadding="2" cellspacing="0" summary="A display table presents your results for this question">');
			buf.append('<tr>');
			buf.append('<td valign="top" align="right" nowrap>');
			buf.append('<p class="Ans">Your Answer:</p>');
			buf.append('</td>');
			buf.append('<td width="99%" valign="top">');
			if (r.code != "unanswered") {
				if (r.code == "correct") {
					buf.append('<span class="CorOpt">' + r.val + '</span>');
				} else {
					buf.append('<span class="IncOpt">' + r.val + '</span>');
					buf.append('<td>');
					buf.append('</tr>');
					buf.append('<tr>');
					buf.append('<td valign="top" align="right" nowrap>');
					if (r.problem.getNumCorrectAnswers() > 1) {
						buf.append('<p class="Ans">Correct Answers:</p>');
					} else {
						buf.append('<p class="Ans">Correct Answer:</p>');
					}
					buf.append('</td>');
					buf.append('<td width="99%" valign="top">');
					var j = 0;
					var l = r.problem.answersArray.length;
					for (i=0; i< l; i++) {
						if (r.problem.answersArray[i].correct) {
							if (j > 0) { buf.append('<br><br>'); } j = 1;
							buf.append('<span class="CorOpt">' + r.problem.answersArray[i].text + '</span>');
						}
					}
				}
			} else {
				buf.append('<p class="IncOpt">(blank)</p>');
			}
			buf.append('</td>');
			buf.append('</tr>');
			buf.append('</table></td>');
			buf.append('</tr>');
			if (r.problem.correct_expls_flag || r.problem.incorrect_any_expl_flag) {
				if (r.code != "unanswered") {
					if (r.code == "correct") {
						if (r.problem.correct_expls_flag) {
							var ia = r.problem.getAnswerExplanation();
							var l = ia.length;
							for (i=0; i< l; i++) {
								buf.append('<tr valign="top">');
								//buf.append('<td colspan="2">&nbsp;</td>');
								buf.append('<td colspan="2"></td>');
								buf.append('<td width="99%">');
								buf.append('<span class="CorExpl">' + ia[i] + '</span>');
								buf.append('</td>');
								buf.append('</tr>');
							}
						}
					} else {
						if (r.problem.incorrect_any_expl_flag) {
							buf.append('<tr valign="top">');
							//buf.append('<td colspan="2">&nbsp;</td>');
							buf.append('<td colspan="2"></td>');
							buf.append('<td width="99%">');
							buf.append('<span class="GlobIncExpl">' + r.problem.incorrect_any_expl + '</span>');
							buf.append('</td>');
							buf.append('</tr>');
						}
					}
				}
			}
			break;
			
		case "text":
			buf.append(stripHTML(r.problem.question) + '\n');
			if (r.code != "unanswered") {
				if (r.code == "correct") {
					buf.append('Correct: ' + r.val + '\n');
					if (r.problem.correct_expls_flag) {
						var ia = r.problem.getAnswerExplanation();
						var l = ia.length;
						for (i=0; i< l; i++) {
							buf.append(stripHTML(ia[i]) + '\n');
						}
					}
				} else {
					buf.append('Incorrect: ' + r.val + '\n');
					if (r.problem.incorrect_any_expl_flag) {
						buf.append(stripHTML(r.problem.incorrect_any_expl) + '\n');
					}
				}
			} else {
				buf.append('Incorrect: (blank) \n');
			}
			break;
		
	}

	return buf.toString();
};

// n is row num (index to problem), r is result obj
ResultsReporter.prototype.renderResultRowLabelingMatching = function renderResultRowLabelingMatching (n, r, mode) {

	r.problem.calculateFeedbackValues(r);	// determine whether we need correct answers and/or feedback columns

	var buf = new StringBuffer();
	switch (mode) {
		case "html":
			buf.append('<tr>');
			buf.append('<td valign="top"><p class="number">' + n + '.</p></td>');
			buf.append('<td valign="top"><img src="'+mediapath+'images/dot.gif" width="80" height="13"></td>');
			buf.append('<td width="99%" valign="top">');
			buf.append('<span class="Ques">' + r.problem.question + '</span>');
			if (r.problem.type == "labeling") {
				buf.append('<br><br>');
				buf.append('<span>');
				if (r.problem.image_url == "") {
					buf.append('(Note to content authors: image has not yet been saved in the Visual Tool.)');
				} else {
					buf.append('<img src="' + r.problem.image_url + '"');
					var charStr = String.fromCharCode(r.problem.answerPairsArray.length + 64);
					buf.append('alt="The letters A through ' + charStr + ' appear on the image associated with this question.');
					if (r.problem.longdesc) { 
						buf.append('A link to a long description follows the image.');
					}
					buf.append('"');
					if (r.problem.longdesc) {
						buf.append('longdesc="' + r.problem.longdescurl + '"');
					}
					buf.append('hspace="0" vspace="0" border="0">');
					if (r.problem.longdesc) {
						buf.append('<br><a href="' + r.problem.longdescurl + '" target="_blank" ');
						buf.append('title="Open text description of the image for this question in a new window." >');
						buf.append('<img src="'+mediapath+'images/dot.gif" width="1" height="1" ');
						buf.append('alt="Open text description of the image for this question in a new window." ');
						buf.append('border="0" hspace="0" vspace="0"></a>');
					}
				}
				buf.append('</span>');
			}
			buf.append('</td>');
			buf.append('</tr>');
			buf.append('<tr>');
			buf.append('<td colspan="3">');
			buf.append('<table border="0" cellpadding="5" cellspacing="2" summary="A data table presents your results for this question.">');
			buf.append('<tr valign="top">');
			buf.append('<td><img src="'+mediapath+'images/dot.gif" width="10" height="13" alt=""></td>');
			buf.append('<td width="95"><img src="'+mediapath+'images/dot.gif" width="80" height="13" alt=""></td>');
			if (r.problem.type == "labeling") {
				buf.append('<th bgcolor="#EEEEEE" id="label"><p class="QuesHead">Label</p></th>');
			} else {
				buf.append('<th bgcolor="#EEEEEE" id="label"><p class="QuesHead">Option</p></th>');
			}
			buf.append('<th bgcolor="#EEEEEE" id="youranswer"><p class="QuesHead">Your Answer</p></th>');
			if (r.problem.needCorrectAnswerCol()) {
				buf.append('<th bgcolor="#EEEEEE" id="correctanswer"><p class="QuesHead">Correct Answer</p></th>');
			}
			if (r.problem.incorrect_expls_flag) {
				if (r.problem.needIncorrectFeedbackCol()) {
					buf.append('<th bgcolor="#EEEEEE" id="comments"><p class="QuesHead">Comments</p></th>');
				}
			}
			buf.append('</tr>');
			
			for (i=0; i<r.problem.answerPairsArray.length; i++) {
				var item = r.problem.answerPairsArray[i];
				
				buf.append('<tr valign="top">');
				buf.append('<th width="10" id="itemnumber" nowrap><p class="number">' + n + '.' + eval(i+1) + '</p></th>');
				buf.append('<td width="95" align="center" headers="itemnumber">');
			
				if (r.pairResults[i].code == "correct") {		// if answered and correct
					buf.append('<img src="'+mediapath+'images/correct.gif"');
					buf.append('alt="Correct" width="80" height="13">');
				} else {										// either incorrect or not answered
					buf.append('<img src="'+mediapath+'images/incorrect.gif"');
					buf.append('alt="Incorrect" width="80" height="13">');
				}
				buf.append('</td>');
				if (r.problem.type == "labeling") {
					buf.append('<td bgcolor="#EEEEEE" headers="itemnumber label">');
				} else {
					buf.append('<td bgcolor="#EEEEEE" headers="itemnumber option">');
				}
				//buf.append('<span><b>' + item.text + '</b>&nbsp;</span>		');
				buf.append('<span><b>' + item.text + '</b></span>');
				buf.append('</td>');
				
				buf.append('<td bgcolor="#EEEEEE" headers="itemnumber youranswer">');
				if (r.pairResults[i].code != "unanswered") {	// if answered
					// display the letter that they answered
					var charStr = String.fromCharCode(parseInt(r.pairResults[i].val) + 65);
					if (r.pairResults[i].code == "correct") {	// if correct
						var cls = "CorOpt";
					} else {
						var cls = "IncOpt";
					}
					if (r.problem.type == "labeling") {
						//buf.append('<span class="' + cls + '">' + charStr + '.&nbsp;</span>');
						buf.append('<span class="' + cls + '">' + charStr + '. </span>');
					} else {
						var matchText = r.problem.answerPairsArray[r.pairResults[i].val].matchText;
						//buf.append('<span class="' + cls + '">' + charStr + '. ' + matchText + '&nbsp;</span>');
						buf.append('<span class="' + cls + '">' + charStr + '. ' + matchText + '</span>');
					}
				} else {										// not answered
					buf.append('<p class="IncOpt">(blank)</p>');
				}

				if (r.problem.needCorrectAnswerCol()) {
					// display the correct answer column
					buf.append('<td bgcolor="#EEEEEE" headers="itemnumber correctanswer">');
					buf.append('<span class="CorOpt">');
					if (r.pairResults[i].code != "unanswered") {	// if answered
						var charStr = String.fromCharCode(parseInt(r.problem.answerPairsArray[i].number) + 65);
						if (r.problem.type == "labeling") {
							buf.append(charStr + '.');
						} else {
							var matchText = r.problem.answerPairsArray[r.problem.answerPairsArray[i].number].matchText;
							buf.append(charStr + '. ' + matchText);
						}
					} else {									// not answered
						buf.append('--');
					}
					//buf.append('&nbsp;</span>');
					buf.append('</span>');
					buf.append('</td>');
				}
				
				if (r.problem.incorrect_expls_flag) {
					if (r.problem.needIncorrectFeedbackCol()) {
						// display the feedback column
						buf.append('<td bgcolor="#EEEEEE" headers="itemnumber comments">');
						if (r.problem.expl[i]) {								// if single item explanation
							if (r.problem.answerPairsArray[i].explanationArray[r.pairResults[i].val] != "") {
								buf.append('<span class="IncExpl">');
								buf.append(r.problem.answerPairsArray[i].explanationArray[r.pairResults[i].val]);
								buf.append('</span>');
							}
							if (r.problem.incorrect_any_expls_flags[i]) {		// feedback for any incorrect answers
								if (r.problem.sep[i]) {
									buf.append('<br><br>');
								}
								buf.append('<span class="IncExpl">');
								buf.append(r.problem.answerPairsArray[i].anyIncorrectExplanation);
								buf.append('</span>');
							}
						} else {										// no single item explanation
							if (r.pairResults[i].code == "correct") {	// if correct
								buf.append('<span class="CorExpl">Correct!</span>');
							} else {									// unanswered or incorrect
								buf.append('<span class="IncExpl">Incorrect!</span>');
							}
						}
						buf.append('</td>');
					}
				}

				buf.append('</tr>');
			}
			buf.append('</table></td>');
			buf.append('</tr>');
		
			if (r.problem.explanation_incorrect != "") {
				if (r.problem.isAnsweredIncorrectly(r)) {
					buf.append('<tr>');
						//buf.append('<td colspan="2">&nbsp;</td>');
						buf.append('<td colspan="2"></td>');
						buf.append('<td width="99%">');
							buf.append('<span class="GlobIncExpl">' + r.problem.explanation_incorrect + '</span>');
						buf.append('</td>');
					buf.append('</tr>');
				}
			}
			break;
			
		case "text":
			buf.append(stripHTML(r.problem.question) + '\n');
			if (r.problem.explanation_incorrect != "") {
				if (r.problem.isAnsweredIncorrectly(r)) {
					buf.append(stripHTML(r.problem.explanation_incorrect) + '\n');
				}
			}
			for (i=0; i<r.problem.answerPairsArray.length; i++) {
				var item = r.problem.answerPairsArray[i];
				buf.append('- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -');
				buf.append(n + '.' + eval(i+1) + ' ' + stripHTML(item.text) + '\n');
				if (r.pairResults[i].code != "unanswered") {
					if (r.pairResults[i].code == "correct") {
						//buf.append('Correct: ');
						var charStr = String.fromCharCode(parseInt(r.problem.answerPairsArray[i].number) + 65);
						if (r.problem.type == "labeling") {
							buf.append('Correct: ' + charStr + '.' + '\n');
						} else {
							var matchText = stripHTML(r.problem.answerPairsArray[r.problem.answerPairsArray[i].number].matchText);
							buf.append('Correct: ' + charStr + '. ' + matchText + '\n');
						}
					} else {
						//buf.append('Incorrect: ');
						// display the letter that they answered
						var charStr = String.fromCharCode(parseInt(r.pairResults[i].val) + 65);
						if (r.problem.type == "labeling") {
							buf.append('Incorrect: ' + charStr + '.' + '\n');
						} else {
							var matchText = stripHTML(r.problem.answerPairsArray[r.pairResults[i].val].matchText);
							buf.append('Incorrect: ' + charStr + '. ' + matchText + '\n');
						}
						if (r.problem.type == "labeling") {
							var j = r.pairResults[i].val;
							buf.append('Which is the answer to: ' + n + '.' + parseInt(r.problem.reverse_map[j] + 1) +
										' ' + stripHTML(r.problem.answerPairsArray[r.problem.reverse_map[j]].text) + '\n');
						}							
						if (r.problem.answerPairsArray[i].explanationArray[r.pairResults[i].val] != "") {
							buf.append(stripHTML(r.problem.answerPairsArray[i].explanationArray[r.pairResults[i].val]) + '\n');
						}
					}
				} else {
					buf.append('Incorrect: (blank)' + '\n');
				}
			}
			break;

	}

	return buf.toString();
};

// mode is ignored
ResultsReporter.prototype.renderEmailReporter = function renderEmailReporter (mode) {
	var g = this.grader;
	var ak = this.grader.answerKey;
	var buf = new StringBuffer;

	buf.append('<table border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#666666" \n');
	buf.append('summary="A display table presents a form that can be used to email these results to up to four different email addresses."> \n');
	buf.append('<tr> \n');

	// the old form and its variables
	buf.append('<form name="graderform" method="post" ACTION="!_SENDER_!">');
	buf.append('<input type=hidden name="volume_title" value="!_SITE_TITLE_!">\n');
	buf.append('<input type=hidden name="quiz_title" value="!_QUIZ_TITLE_!">\n');
	buf.append('<input type=hidden name="author_lastname" value="!_AUTHOR_!">\n');
	buf.append('<input type=hidden name="book_title" value="!_BOOK_!">\n');
	buf.append('<input type=hidden name="quiz_location" value="!_LOCATION_!">\n');
	buf.append('<input type=hidden name="quiz_loc_with_commas" value="!_LOCATION_2_!">\n');
	buf.append('<input type=hidden name="total_problems" value="!_TOT_!">\n');
	buf.append('<input type=hidden name="total_score" value="!_COR_!">\n');
	buf.append('<input type=hidden name="total_incorrect" value="!_INCOR_!">\n');
	buf.append('<input type=hidden name="total_unanswered" value="!_UNANSW_!">\n');
	buf.append('<input type=hidden name="html_body_beg" value="!_HTML_BODY_BEG_!">\n');
	buf.append('<input type=hidden name="html_body_end" value="!_HTML_BODY_END_!">\n');
	buf.append('<input type=hidden name="text_body_beg" value="!_TEXT_BODY_BEG_!">\n');
	buf.append('<input type=hidden name="text_body_end" value="!_TEXT_BODY_END_!">\n');
	buf.append('<input type=hidden name="id" value="12345">\n');
	buf.append('<input type=hidden name="style_base_url" value="!_STYLE_BASE_URL_!">\n');

	// the form and variables used by the apache grader
	//buf.append('<form name="graderform" method="post" action="[.location grader2]"> \n');
	//buf.append('<input type="hidden" name="command" value="email-basic"> \n');
	//buf.append('<input type="hidden" name="session" value="<% SESSION %>"> \n');
	//buf.append('<input type="hidden" name="url_path" value="<% CGI url_path %>"> \n');
	//buf.append('<input type="hidden" name="id" value="<% CGI id %>"> \n');
	//buf.append('<input type="hidden" name="teacher_name" value="<% SUBCOOKIE_HTML ph-personal teacher_name %>"> \n');
	//buf.append('<input type="hidden" name="ta_name" value="<% SUBCOOKIE_HTML ph-personal ta_name %>"> \n');
	//buf.append('<input type="hidden" name="other_name" value="<% SUBCOOKIE_HTML ph-personal other_name %>"> \n');
	
	buf.append('<td><!--- leave cell open ---> \n');
	buf.append('<table width="100%" border="0" align="center" cellpadding="6" cellspacing="1"  \n');
	buf.append('summary="A display table announces the beginning of the email form and contains it."> \n');
	buf.append('<tr> \n');
	buf.append('<td colspan="3" align="center" class="tableRowTitle"><span class="contentSubHeader">E-mail Your Results</span></td> \n');
	buf.append('</tr> \n');
	buf.append('<tr> \n');
	buf.append('<td class="tableRowHead" nowrap><p class="EmailForm"><label for="myname">My name is (first last):</label></p></td> \n');
	buf.append('<td colspan="2" class="tableRowHead"> \n');
	buf.append('<input type="text" name="student_name" id="myname" size="40" maxlength="100"> \n');
	buf.append('</td> \n');
	buf.append('</tr> \n');
	buf.append('<tr> \n');
	buf.append('<td colspan="3" class="tableRowWhite"><p class="EmailForm">E-mail my results to:</p></td> \n');
	buf.append('</tr> \n');
	buf.append('<tr class="tableRowHead"> \n');
	buf.append('<td><img src="'+mediapath+'images/dot.gif" width="1" height="1" hspace="0" vspace="0" border="0"  \n');
	buf.append('alt="This section allows you to choose to send email to yourself, your instructor, your Teaching Assistant,  \n');
	buf.append('and/or another email address. For each person, there is a checkbox that allows you to select whether or  \n');
	buf.append('not to send email to that person. Following the check box for each person are form fields with the  \n');
	buf.append('following headers:"></td> \n');
	buf.append('<td><p class="tableRowHead">E-mail address:</p></td> \n');
	buf.append('<td><p class="tableRowHead">Send as:</p></td> \n');
	buf.append('</tr><tr> \n');
	buf.append('<td class="tableRowAlt1"><p class="EmailForm"> \n');
	buf.append('<label for="me"><img src="'+mediapath+'images/dot.gif" width="1" height="1" hspace="0" vspace="0"  \n');
	buf.append('border="0" alt="Me:"></label><br /> \n');
	buf.append('<input type="checkbox" id="student_checkbox" name="mail_student" value="1">Me:</p></td> \n');
	buf.append('<td class="tableRowAlt1"> \n');
	buf.append('<label for="myemail"><img src="'+mediapath+'images/dot.gif" width="1" height="1" hspace="0" vspace="0"  \n');
	buf.append('border="0" alt="My email address is:"></label><br /> \n');
	buf.append('<input type="text" id="myemail" name="student" size="20" maxlength="50"> \n');
	buf.append('</td> \n');
	buf.append('<td class="tableRowAlt1"> \n');
	buf.append('<label for="metype"><img src="'+mediapath+'images/dot.gif" width="1" height="1" hspace="0" vspace="0"  \n');
	buf.append('border="0" alt="Send email to me as:"></label><br /> \n');
	buf.append('<select id="metype" name="student_type"> \n');
	buf.append('<option value="plain:no">Text</option> \n');
	buf.append('<option value="html:no">HTML</option> \n');
	buf.append('<option value="plain:yes">Attached text</option> \n');
	buf.append('<option value="html:yes" >Attached HTML</option> \n');
	buf.append('</select> \n');
	buf.append('</td> \n');
	buf.append('</tr><tr> \n');
	buf.append('<td class="tableRowAlt1" nowrap><p class="EmailForm"> \n');
	buf.append('<label for="instructor"><img src="'+mediapath+'images/dot.gif" width="1" height="1" hspace="0" vspace="0"  \n');
	buf.append('border="0" alt="Instructor:"></label><br /> \n');
	buf.append('<input type="checkbox" id="instructor_checkbox" name="mail_teacher" value="1" />Instructor:</p></td> \n');
	buf.append('<td class="tableRowAlt1"> \n');
	buf.append('<label for="instremail"><img src="'+mediapath+'images/dot.gif" width="1" height="1" hspace="0" vspace="0"  \n');
	buf.append('border="0" alt="My instructor\'s email address is:"></label><br /> \n');
	buf.append('<input type="text" id="instremail" name="teacher" size="20" maxlength="50" value=""> \n');
	buf.append('</td> \n');
	buf.append('<td class="tableRowAlt1"> \n');
	buf.append('<label for="teachertype"><img src="'+mediapath+'images/dot.gif" width="1" height="1" hspace="0" vspace="0"  \n');
	buf.append('border="0" alt="Send email to my Instructor as:"></label><br /> \n');
	buf.append('<select name="teacher_type" id="teachertype"> \n');
	buf.append('<option value="plain:no">Text</option> \n');
	buf.append('<option value="html:no">HTML</option> \n');
	buf.append('<option value="plain:yes">Attached text</option> \n');
	buf.append('<option value="html:yes" >Attached HTML</option> \n');
	buf.append('</select> \n');
	buf.append('</td> \n');
	buf.append('</tr><tr> \n');
	buf.append('<td class="tableRowAlt1"><p class="EmailForm"> \n');
	buf.append('<label for="ta"><img src="'+mediapath+'images/dot.gif" width="1" height="1" hspace="0" vspace="0"  \n');
	buf.append('border="0" alt="Teaching Assistant"></label><br /> \n');
	buf.append('<input type="checkbox" id="ta_checkbox" name="mail_ta" value="1" /><acronym title="Teaching Assistant">TA</acronym>:</p></td> \n');
	buf.append('<td class="tableRowAlt1"> \n');
	buf.append('<label for="taemail"><img src="'+mediapath+'images/dot.gif" width="1" height="1" hspace="0" vspace="0"  \n');
	buf.append('border="0" alt="My Teaching Assistant\'s email address is:"></label><br /> \n');
	buf.append('<input type="text" id="taemail" name="ta" size="20" maxlength="50" value=""> \n');
	buf.append('</td> \n');
	buf.append('<td class="tableRowAlt1"> \n');
	buf.append('<label for="tatype"><img src="'+mediapath+'images/dot.gif" width="1" height="1" hspace="0" vspace="0"  \n');
	buf.append('border="0" alt="Send email to my Teaching Assistant as:"></label><br /> \n');
	buf.append('<select name="ta_type" id="tatype"> \n');
	buf.append('<option value="plain:no">Text</option> \n');
	buf.append('<option value="html:no">HTML</option> \n');
	buf.append('<option value="plain:yes">Attached text</option> \n');
	buf.append('<option value="html:yes" >Attached HTML</option> \n');
	buf.append('</select> \n');
	buf.append('</td> \n');
	buf.append('</tr><tr> \n');
	buf.append('<td class="tableRowAlt1"><p class="EmailForm"> \n');
	buf.append('<label for="other"><img src="'+mediapath+'images/dot.gif" width="1" height="1" hspace="0" vspace="0"  \n');
	buf.append('border="0" alt="Other:"></label><br /> \n');
	buf.append('<input type="checkbox" id="other_checkbox" name="mail_other" value="1" />Other:</p></td> \n');
	buf.append('<td class="tableRowAlt1"> \n');
	buf.append('<label for="oemail"><img src="'+mediapath+'images/dot.gif" width="1" height="1" hspace="0" vspace="0"  \n');
	buf.append('border="0" alt="The other email address is:"></label><br /> \n');
	buf.append('<input type="text" id="oemail" name="other" size="20"	maxlength="50" value=""> \n');
	buf.append('</td> \n');
	buf.append('<td class="tableRowAlt1"> \n');
	buf.append('<label for="otype"><img src="'+mediapath+'images/dot.gif" width="1" height="1" hspace="0" vspace="0"  \n');
	buf.append('border="0" alt="Send email to this address as:"></label><br /> \n');
	buf.append('<select name="other_type" id="otype"> \n');
	buf.append('<option value="plain:no">Text</option> \n');
	buf.append('<option value="html:no">HTML</option> \n');
	buf.append('<option value="plain:yes">Attached text</option> \n');
	buf.append('<option value="html:yes" >Attached HTML</option> \n');
	buf.append('</select> \n');
	buf.append('</td> \n');
	buf.append('</tr><tr> \n');
	buf.append('<td colspan="2" class="tableRowAlt1"><p class="EmailForm"> \n');
	buf.append('</td><!-- no onkeypress is ok here because href will take place --> \n');
	buf.append('<td align="right" class="tableRowAlt1"> \n');
	buf.append('<input type="button" name="register" value="E-Mail Results" onClick="gradeformvalidate();"></td> \n');
	buf.append('</tr> \n');
	buf.append('</table> \n');
	buf.append('</td><!--- close open cell ---> \n');
	buf.append('</form> \n');
	buf.append('</tr> \n');
	buf.append('</table> \n');
	buf.append('<!-- *** end e-mail routing table *** --> \n');

	var tmpl = buf.toString();
	
	arr = this.renderForEmail("html");
	arr[0] = arr[0].replace(/\"/g, "&quot;");
	arr[1] = arr[1].replace(/\"/g, "&quot;");
	tmpl = tmpl.replace(/!_HTML_BODY_BEG_!/g, arr[0]);
	tmpl = tmpl.replace(/!_HTML_BODY_END_!/g, arr[1]);

	arr = this.renderForEmail("text");
	arr[0] = arr[0].replace(/\"/g, "&quot;");
	arr[1] = arr[1].replace(/\"/g, "&quot;");
	tmpl = tmpl.replace(/!_TEXT_BODY_BEG_!/g, arr[0]);
	tmpl = tmpl.replace(/!_TEXT_BODY_END_!/g, arr[1]);

	tmpl = tmpl.replace(/!_SENDER_!/g, this.sender);
	tmpl = tmpl.replace(/!_SITE_TITLE_!/g, ak.site_title.replace(/\"/g, "&quot;"));
	tmpl = tmpl.replace(/!_QUIZ_TITLE_!/g, ak.quiz_title.replace(/\"/g, "&quot;"));
	tmpl = tmpl.replace(/!_AUTHOR_!/g, ak.author.replace(/\"/g, "&quot;"));
	tmpl = tmpl.replace(/!_BOOK_!/g, ak.book_title.replace(/\"/g, "&quot;"));
	tmpl = tmpl.replace(/!_LOCATION_!/g, ak.quiz_location.replace(/\"/g, "&quot;"));
	tmpl = tmpl.replace(/!_LOCATION_2_!/g, ak.quiz_loc_with_commas.replace(/\"/g, "&quot;"));
	tmpl = tmpl.replace(/!_HELP_URL_!/g, ak.help_url.replace(/\"/g, "&quot;"));
	tmpl = tmpl.replace(/!_STYLE_BASE_URL_!/g, ak.style_base_url.replace(/\"/g, "&quot;"));

	tmpl = tmpl.replace(/!_TOT_!/g, ak.non_essay_total);
	tmpl = tmpl.replace(/!_COR_!/g, g.correct);
	tmpl = tmpl.replace(/!_INCOR_!/g, g.incorrect);
	tmpl = tmpl.replace(/!_UNANSW_!/g, g.unanswered);

	return tmpl;
};

// mode is ignored
ResultsReporter.prototype.renderCopyright = function renderCopyright (mode) {
	var ak = this.grader.answerKey;
	var buf = new StringBuffer;

	buf.append('<p><br>');
	buf.append('<div align="center" class="copyright">');
	buf.append('Copyright &copy; 1995-' + ak.copyright_date + ', ');
	buf.append('Pearson Education, Inc.');
	if (ak.brandname != "") { 
		buf.append(', publishing as ' + ak.brandname);
	}
	buf.append('| <a href="' + ak.legal + '" target="new" ');
	buf.append('title="Open Pearson\'s Legal and Privacy Terms in a New Window">Legal and Privacy Terms</a>');
	buf.append('</div>');

	return buf.toString();
};

ResultsReporter.prototype.renderForEmail = function renderForEmail (mode) {
	var a = new Array();
	a[0] = this.renderResults(mode, true, "beg");
	a[1] = this.renderResults(mode, true, "end");
	return a;
};

ResultsReporter.prototype.renderResults = function renderResults (mode, forEmail, begOrEnd) {
	var tmpl = r =  "";

	switch(mode) {
		case "html":
			if (!forEmail) {
				tmpl = '<div id="results_page"> \n' +
				'!_QUIZ_INFO_BEG_!\n!_QUIZ_INFO_END_!\n!_SUMMARY_!\n'  +
				'<!-- *** Question by Question Results *** --> \n' +
				'<table width="100%" border="0" align="center" cellpadding="10" cellspacing="0" \n' +
				'summary="A display table presents your results for each question."> \n' +
				'<tr><td colspan="3"><hr size="1" noshade></td></tr>\n' +
				'!_ROWS_!\n' +
				'</table>\n' +
				'!_EMAIL_!\n' +
				'!_COPYRIGHT_!\n' +
				'</div>\n';
			} else {
				if (begOrEnd == "beg") {
					tmpl = '<div id="results_page"> \n' +
					'!_QUIZ_INFO_BEG_!';
				} else {
					tmpl = '!_QUIZ_INFO_END_!\n!_SUMMARY_!\n' +
					'<!-- *** Question by Question Results *** --> \n' +
					'<table width="100%" border="0" align="center" cellpadding="10" cellspacing="0" \n' +
					'summary="A display table presents your results for each question."> \n' +
					'<tr><td colspan="3"><hr size="1" noshade></td></tr>\n' +
					'!_ROWS_!\n' +
					'</table>\n' +
					'!_COPYRIGHT_!\n' +
					'</div>\n';
				}
			}
			break;
		case "text":
			if (!forEmail) {
				tmpl = '!_QUIZ_INFO_BEG_!!_QUIZ_INFO_END_!!_SUMMARY_!!_ROWS_!';
			} else {
				if (begOrEnd == "beg") {
					tmpl = '!_QUIZ_INFO_BEG_!';
				} else {
					tmpl = '!_QUIZ_INFO_END_!!_SUMMARY_!!_ROWS_!';
				}
			}
			break;
	}
	tmpl = tmpl.replace(/!_QUIZ_INFO_BEG_!/g, this.renderQuizInfoBeg(mode));

	if (forEmail) {
		if (begOrEnd == "beg") {
			tmpl = tmpl.replace(/media\/_grader_/g, "_grader_");
			return tmpl;
		}
	}

	tmpl = tmpl.replace(/!_QUIZ_INFO_END_!/g, this.renderQuizInfoEnd(mode));
	tmpl = tmpl.replace(/!_SUMMARY_!/g, this.renderSummary(mode));

	for (var i = 0; i < this.grader.result.length; i++) {
		switch(mode) {
			case "html":
				r += this.renderResultRow(i+1, this.grader.result[i], mode);
				r += '<tr><td colspan="3"><hr size="1" noshade></td></tr>\n';
				break;
			case "text":
				r += '\n\n\n--------------------------------------------------------------------------\n'
				r += 'Question ' + eval(i+1) + '\n\n\n';
				r += this.renderResultRow(i+1, this.grader.result[i], mode);
				break;
		}
	}
	tmpl = tmpl.replace(/!_ROWS_!/g, r);

	switch(mode) {
		case "html":
			if (!forEmail) {
				if (this.email_support) { 
					tmpl = tmpl.replace(/!_EMAIL_!/g, this.renderEmailReporter(mode));
				} else {
					tmpl = tmpl.replace(/!_EMAIL_!/g, "");
				}
			}
			tmpl = tmpl.replace(/!_COPYRIGHT_!/g, this.renderCopyright(mode));
			break;
	}

	if (forEmail) {
		tmpl = tmpl.replace(/media\/_grader_/g, "_grader_");
	}
	return tmpl;
};

// test text mode by rendering on page (and view source)
var _test_text = false;

ResultsReporter.prototype.render = function render () {
	var s = "";
	if (_test_text) {
		// test text mode by rendering on page (and view source)
		s += this.renderResults("text", false, "");
	} else {
		// normal rendering
		s += this.renderResults("html", false, "");
	}
	//s += dumpDebugBuffer();

	return s;
};

//********** CSS ************/

var style = '<style type="text/css"> \n' +
	'.Chapter { color: #555555; font-weight:bold; } \n' +
	'.Title { font-weight:bold; } \n' +
	'.QuesHead { font-weight:bold; } \n' +
	'.Ques { } \n' +
	'.CorOpt { color: #000000;} \n' +
	'.CorExpl { font-weight: 100; color: #333333; } \n' +
	'.Ungradable { color: #808080; font-weight: bold; } \n' +
	'.IncOpt { color: #333333; } \n' +
	'.IncExpl { font-weight: 100; color: #990000; } \n' +
	'.GlobIncExpl { color: #000000; } \n' +
	'.Points { font-style: italic; } \n' +
	'.Score { font-weight: bold; color: #336600; } \n' +
	'.Ans { font-weight: bold; } \n' +
	'.Error { color: #CC0000; font-weight: bold; } \n' +
	'.Chart { } \n' +
	'.EmailForm { font-size: 10px; } \n' +
	'/* ----- RESULTS PAGES----- */ \n' +
	'.resultstitle { background: #FFF; width: 510px; height: 30px; padding: 0px; vertical-align: middle; font-family: Arial, Helvetica, sans-serif; color: #036; font-weight: bold; } \n' +
	'.resultstag { background:#FFF; width:510px; height:40px; padding:0px; font-family: Arial, Helvetica, sans-serif; color: #000; font-size: 13px; vertical-align: middle; } \n' +
	'.summarytitle { background:#ECECEC; width:510px; height: 16px; padding:7px; border-color: #666; border-style: solid; border-width: 1px; vertical-align: middle; font-family: Arial, Helvetica, sans-serif; color: #000; font-weight: bold; font-size:14px; vertical-align: middle; } \n' +
	'.summaryinfo { background: #DCDBED; width: 510px; height: 100px; padding: 7px; border-color: #666; border-style: solid; border-width: 0 1px 0 1px; font-family: Arial, Helvetica, sans-serif; color: #000; font-weight: normal; font-size: 12px; vertical-align: middle; } \n' +
	'.bluetitlebar { background: #DCDBED;width: 510px;height: 14px;padding: 7px;border-color: #666; border-style: solid;border-width: 1px 1px 1px 1px;font-family: Arial, Helvetica, sans-serif;color: #000;font-weight: normal;font-size: 11px; vertical-align: middle; } \n' +
	'.bluebar { background: #DCDBED; width: 510px; height: 14px; padding: 7px; border-color: #666; border-style: solid; border-width: 0 1px 1px 1px; font-family: Arial, Helvetica, sans-serif; color: #000; font-weight: normal; font-size: 11px; vertical-align: middle; } \n' +
	'.whitebar { background: #FFF; width: 510px; height: 14px; padding: 7px; border-color: #666; border-style: solid; border-width: 0 1px 1px 1px; font-family: Arial, Helvetica, sans-serif; color: #000; font-weight: normal; font-size: 11px; vertical-align: middle; } \n' +
	'.greybar { background: #ECECEC; width: 510px; height: 14px; padding: 7px; border-color: #666; border-style: solid; border-width: 0 1px 1px 1px; font-family: Arial, Helvetica, sans-serif; color: #000; font-weight: normal; font-size: 11px; vertical-align: middle; } \n' +
	'.summarytext { width:510px; font-family: Arial, Helvetica, sans-serif; color: #000; font-weight: normal; font-size: 11px; } \n' +
	'.summarystats { background: #FEFFEF; width: 510px; height: 40px; padding: 7px; border-color: #666; border-style: solid; border-width: 1px 1px 0 1px; font-family: Arial, Helvetica, sans-serif; color: #000; font-weight: normal; font-size: 11px; vertical-align: middle; } \n' +
	'.summarybottombox { background:#ECECEC; width:510px; height: 60px; padding:7px; border-color: #666; border-style: solid; border-width: 1px 1px 1px 1px; vertical-align: middle; font-family: Arial, Helvetica, sans-serif; color: #000; font-weight: normal; font-size: 11px; vertical-align: middle; } \n' +
	'/* ----- Basics ----- */ \n' +
	'body { font-weight: normal; color: #000000; } \n' +
	'td { font-family: Verdana, Arial, Helvetica, sans-serif; font-weight: normal; } \n' +
	'p { font-family: Verdana, Arial, Helvetica, sans-serif; font-weight: normal; font-size: 12px; line-height: 15px; } \n' +
	'/* fix for firefox rendering */ \n' +
	'td p { display: inline; margin-right: 8px; } \n' +
	'span { font-family: Verdana, Arial, Helvetica, sans-serif; font-weight: normal; font-size: 12px; } \n' +
	'.number {font-weight: bold;font-size: 16px;} \n' +
	'.breadcrumbs { font-family: Verdana, Arial, Helvetica, sans-serif; font-weight: normal; font-size: 9px; line-height: 12px; color: #805A2A; } \n' +
	'a { color: #003366; } \n' +
	'a:hover { color: #CC0000; } \n' +
	'/* ----- Main Content ----- */ \n' +
	'.tableRowTitle { background-color: #DBDBEE; font-family: Verdana, Arial, Helvetica, sans-serif; font-weight: 800; font-size: 14px; line-height: 18px; } \n' +
	'.tableRowHead { background-color: #DDDDDD; font-family: Verdana, Arial, Helvetica, sans-serif; font-weight: bold; font-size: 10px; } \n' +
	'.tableRowAlt1 { background-color: #EEEEEE; } \n' +
	'.tableRowAlt2 { background-color: #FFFFEF; } \n' +
	'.tableRowWhite { background-color: #FFFFFF; } \n' +
	'.tableFrameBorder { background-color: #999999; } \n' +
	'/* ----- Form Elements ----- */ \n' +
	'input, textarea, select { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 10px; color: #000000; } \n' +
	'.formDropdown { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 73%;} \n' +
	'.formText { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 73%;} \n' +
	'/* ----- Text ----- */ \n' +
	'.contentHeader { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 18px; line-height: 22px; font-weight: 800; color: #003366; } \n' +
	'.contentSubHeader { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: 18px; font-weight: 800; color: #003366; } \n' +
	'.ResultsForm { font-size: 10px; } \n' +
	'.notcode { font-family: Verdana, Arial, Helvetica, sans-serif; font-weight: normal; font-size: 12px; line-height: 15px; } \n' +
	'.essayText { font-family: Verdana, Arial, Helvetica, sans-serif; font-weight: normal; font-size: 12px; line-height: 15px; margin-left: 30px; margin-right: 30px; } \n' +
	'.copyright { font-family: Verdana, Arial, Helvetica, sans-serif; color: #000000; font-size: 10px; font-weight: 800; text-align: center; } \n' +
	'</style> ';
	
//quiz RR path fix for OS10 Safari bug
if (nut.indexOf("safari")!=-1) { var path="../";} 
else { var path="../../";}

var js = '<script src="'+path+'grade_results.js" type="text/javascript"></script>';


if (_test_text) { style = "" }

//********** Entry Point ************/

var _render_mode = 'same_win'		// modes: 'same_win', 'new_win', 'inner_html' 

function InvokeOfflineGrader (aForm) {
	answerKey = new AnswerKey();
	InitializeAnswerKey(answerKey);
	InitializeURLs(answerKey);

	grader = new Grader(answerKey);
	grader.collectResponse(aForm);
	grader.evaluate();
	grader.dump_results();	// debug

	reporter = new ResultsReporter(grader, answerKey.email_support, answerKey.grade_sender_url);

	// render modes: 'same_win', 'new_win', 'inner_html'
	if (_render_mode == 'same_win') {
		var body = reporter.render();
		var head = "<html><head><script src='../../media/objects/326/334000/_skins_/P/places_blue/0_code/scripts.js' type='text/javascript'></script>\n" + js + style + "\n</head>\n"; //added by swright 11/12/07
		var page = "<body >\n" + body + "\n</body></html>\n";
		//document.open();
		document.write(head);
		document.write(page);
		setTimeout ( "document.close()", 2000 );
		//document.close();

	} else if (_render_mode == 'new_win') {
		var body = reporter.render();
		var page = "<html><head>\n" + style + js + "\n</head><body>\n" + body + "\n</body></html>\n";
		var dwin = window.open("", "debugWindow");
		dwin.document.write(page);
		dwin.document.close();
	
	} else if (_render_mode == 'inner_html') {		// look into: email box doesn't show up in firefox in this mode
		window.scrollTo(0, 0);
		var body = reporter.render();
		var elem = document.getElementById("div_entire_page")
		elem.innerHTML = body;
	}
	return(false);
}

if (_render_mode == "inner_html") { 
	//old comment - stylesheet must be picked up inline, as it won't be parsed again
	document.write(style);
	document.write(js);
}
