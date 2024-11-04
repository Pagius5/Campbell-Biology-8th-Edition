

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "43: The Immune System > Activities Quiz";
	ak.quiz_loc_with_commas = "43: The Immune System, Activities Quiz";
	ak.quiz_title = "Activities Quiz";

	
		ak.help_url = "../../placeholders/help_placeholder.html";
	
	ak.essay_total = 0;
	ak.pair_problem_total = 0;
	ak.pair_total = 0;
	ak.problem_total = 15;
	ak.non_essay_total = 15;
	ak.scored_item_total = 15;

	
	
	


	
	ak.copyright_date = "2008";
	ak.brandname = "Pearson Benjamin Cummings";
	ak.legal = "../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.pearsoned.com%2Flegal%2Findex.htm";


	// Loop over all problems
	
	
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336480;


		
		

		
			
			p.question = "Which of these cells is a phagocytic leukocyte that can engulf a foreign bacterium? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?43&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Immune Responses</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "B cell",
				false,
				"B cells are not phagocytic.");
			
				p.addAnswer(2, "cytotoxic T cell",
				false,
				"Cytotoxic T cells are not phagocytic.");
			
				p.addAnswer(3, "plasma cell",
				false,
				"Plasma cells are not phagocytic.");
			
				p.addAnswer(4, "helper T cell",
				false,
				"Helper T cells are not phagocytic.");
			
				p.addAnswer(5, "macrophage",
				true,
				"Macrophages are phagocytic leukocytes.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336481;


		
		

		
			
			p.question = "_____ interact with the antigen-class II MHC complex presented by macrophages. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?43&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Immune Responses</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "B cells",
				false,
				"However, the cells that interact with the antigen-class II MHC complex stimulate B cells.");
			
				p.addAnswer(2, "Bacterial cells",
				false,
				"However, the antigen of the antigen-class II MHC complex is bacterial in origin.");
			
				p.addAnswer(3, "Helper T cells",
				true,
				"Specific helper T cells recognize specific antigen-class II MHC complexes. The result of this is an activated helper T cell that stimulates both humoral and cell-mediated immune responses.");
			
				p.addAnswer(4, "Epithelial cells",
				false,
				"Epithelial cells are cells that cover body surfaces; these cells do not interact with the antigen-class II MHC complexes.");
			
				p.addAnswer(5, "Cytotoxic T cells",
				false,
				"However, the cells that interact with the antigen-class II MHC complex stimulate cytotoxic T cells.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336482;


		
		

		
			
			p.question = "B cells that have been stimulated by interleukin-2 develop into _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?43&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Immune Responses</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "macrophages",
				false,
				"B cells are not stimulated to develop into phagocytic cells.");
			
				p.addAnswer(2, "helper T cells",
				false,
				"Helper T cells are the source of the interleukin-2 that stimulates B cells.");
			
				p.addAnswer(3, "cytotoxic T cells",
				false,
				"B cells and cytotoxic T cells are concerned with different aspects of the immune response.");
			
				p.addAnswer(4, "antigens",
				false,
				"Antigens are foreign molecules; B cells are \"self.\"");
			
				p.addAnswer(5, "plasma cells",
				true,
				"Plasma cells develop from B cells that have been stimulated by the interleukin-2 secreted by helper T cells.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336483;


		
		

		
			
			p.question = "The role of cytotoxic T cells is the secretion of _____, which plays a role in the _____ immune response. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?43&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Immune Responses</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "antibodies ... antibody-mediated",
				false,
				"While antibody secretion is a component of the humoral immune response, cytotoxic T cells do not secrete antibodies.");
			
				p.addAnswer(2, "antibodies ... humoral",
				false,
				"While antibody secretion is a component of the humoral immune response, cytotoxic T cells do not secrete antibodies.");
			
				p.addAnswer(3, "perforin ... cell-mediated",
				true,
				"Perforin causes the lysis of pathogen-infected body cells; it is a component of the cell-mediated immune response.");
			
				p.addAnswer(4, "perforin ... humoral",
				false,
				"This choice is partially correct.");
			
				p.addAnswer(5, "interleukin-2 ... humoral",
				false,
				"Cytotoxic T cells do not secrete interleukin-2.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336484;


		
		

		
			
			p.question = "Clonal selection is the division of _____ that have been stimulated by binding to an antigen, which results in the production of cloned _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?43&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Immune Responses</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "helper T cells ... plasma cells",
				false,
				"While helper T cells stimulate the formation of plasma cells, they do not divide to produce plasma cells.");
			
				p.addAnswer(2, "B cells ... plasma cells and memory cells",
				true,
				"The antigen-selected proliferation of B cells produces clones of plasma cells and memory cells.");
			
				p.addAnswer(3, "T cells ... B cells",
				false,
				"T cells do not produce B cells.");
			
				p.addAnswer(4, "B cells ... macrophages",
				false,
				"B cells do not produce macrophages.");
			
				p.addAnswer(5, "macrophages ... B cells and T cells",
				false,
				"Macrophages produce neither B cells nor T cells.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336485;


		
		

		
			
			p.question = "Which of these cells is responsible for the rapidity of the secondary immune response? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?43&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Immune Responses</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "memory cells",
				true,
				"Memory cells are responsible for the rapidity of the secondary immune response and for long-term immunity.");
			
				p.addAnswer(2, "cytotoxic T cells",
				false,
				"While they play a major role in the immune response, cytotoxic cells are not responsible for the rapidity of the secondary immune response.");
			
				p.addAnswer(3, "macrophages",
				false,
				"While they play a major role in the immune response, macrophages are not responsible for the rapidity of the secondary immune response.");
			
				p.addAnswer(4, "cytokines",
				false,
				"Cytokines are not cells; they are proteins or peptides (such as interleukins) that play a role in the immune response.");
			
				p.addAnswer(5, "plasma cells",
				false,
				"While they play a major role in the immune response, plasma cells are not responsible for the rapidity of the secondary immune response.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336486;


		
		

		
			
			p.question = "Which of these cells produce and secrete antibodies? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?43&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Immune Responses</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "macrophages",
				false,
				"Macrophages are phagocytic cells that secrete interleukin-1.");
			
				p.addAnswer(2, "cytotoxic T cells",
				false,
				"Cytotoxic T cells secrete perforin.");
			
				p.addAnswer(3, "helper T cells",
				false,
				"Helper T cells secrete interleukin-2.");
			
				p.addAnswer(4, "bacterial cells",
				false,
				"Bacterial cells bear antigens that trigger an immune response.");
			
				p.addAnswer(5, "plasma cells",
				true,
				"Plasma cells are clones of antibody-secreting B cells.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336487;


		
		

		
			
			p.question = "The genetic material of HIV consists of _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?43&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: HIV Reproductive Cycle</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "single-stranded DNA",
				false,
				"This choice is partially correct.");
			
				p.addAnswer(2, "single-stranded RNA",
				true,
				"The genetic material of HIV consists of two molecules of single-stranded RNA.");
			
				p.addAnswer(3, "double-stranded DNA",
				false,
				"No, that is incorrect.");
			
				p.addAnswer(4, "double-stranded RNA",
				false,
				"This choice is partially correct.");
			
				p.addAnswer(5, "none of the above",
				false,
				"One of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336488;


		
		

		
			
			p.question = "Which of these binds to receptor molecules on the host cell membrane? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?43&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: HIV Reproductive Cycle</a>)<br><br><img SRC=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/4309q.jpg\" ALT=\"Question #9\" BORDER=\"1\">";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "A",
				true,
				"Glycoproteins on the viral envelope recognize and bind to receptors on the host cell.");
			
				p.addAnswer(2, "B",
				false,
				"This is the viral envelope.");
			
				p.addAnswer(3, "C",
				false,
				"This is reverse transcriptase.");
			
				p.addAnswer(4, "D",
				false,
				"This is a protein coat.");
			
				p.addAnswer(5, "E",
				false,
				"This is viral genetic material.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336489;


		
		

		
			
			p.question = "What is the function of reverse transcriptase? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?43&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: HIV Reproductive Cycle</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "catalyzing the formation of a polypeptide from a RNA template",
				false,
				"No, that is incorrect.");
			
				p.addAnswer(2, "catalyzing the formation of DNA from a polypeptide template",
				false,
				"No, that is incorrect.");
			
				p.addAnswer(3, "catalyzing the formation of RNA from a polypeptide template",
				false,
				"No, that is incorrect.");
			
				p.addAnswer(4, "catalyzing the formation of RNA from a DNA template",
				false,
				"No, that is incorrect.");
			
				p.addAnswer(5, "catalyzing the formation of DNA from a RNA template",
				true,
				"This is the function of reverse transcriptase");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336490;


		
		

		
			
			p.question = "What is the source of a viral envelope? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?43&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: HIV Reproductive Cycle</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "host cell DNA",
				false,
				"Host cell DNA is not a component of a viral envelope.");
			
				p.addAnswer(2, "prophages",
				false,
				"A prophage is viral DNA that has been incorporated into a bacterial chromosome.");
			
				p.addAnswer(3, "provirus",
				false,
				"A provirus is viral DNA that has been inserted into a host cell\'s genome.");
			
				p.addAnswer(4, "host cell membrane",
				true,
				"The viral envelope is derived from host cell membrane.");
			
				p.addAnswer(5, "viral glycoproteins",
				false,
				"Glycoproteins stud the viral envelope.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336491;


		
		

		
			
			p.question = "Which of these is reverse transcriptase? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?43&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: HIV Reproductive Cycle</a>)<br><br><img SRC=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/4312q.jpg\" ALT=\"Question #12\" BORDER=\"1\" >";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "A",
				false,
				"This is a glycoprotein.");
			
				p.addAnswer(2, "B",
				false,
				"This is the viral envelope.");
			
				p.addAnswer(3, "C",
				true,
				"This is reverse transcriptase.");
			
				p.addAnswer(4, "D",
				false,
				"This is the virus\'s protein coat.");
			
				p.addAnswer(5, "E",
				false,
				"This is RNA.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336492;


		
		

		
			
			p.question = "Which of these is the viral genome? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?43&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: HIV Reproductive Cycle</a>)<br><br><img SRC=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/4313q.jpg\" ALT=\"Question #13\" BORDER=\"1\">";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "A",
				false,
				"This is a glycoprotein.");
			
				p.addAnswer(2, "B",
				false,
				"This is the viral envelope.");
			
				p.addAnswer(3, "C",
				false,
				"This is reverse transcriptase.");
			
				p.addAnswer(4, "D",
				false,
				"This is the virus\'s protein coat.");
			
				p.addAnswer(5, "E",
				true,
				"HIV is a RNA virus.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336493;


		
		

		
			
			p.question = "Click Start to begin the animation. What enzyme is responsible for the process seen here? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?43&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: HIV Reproductive Cycle</a>)<br><br><OBJECT classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=\"../../placeholders/external_placeholder.html?http%3A%2F%2Fdownload.macromedia.com%2Fpub%2Fshockwave%2Fcabs%2Fflash%2Fswflash.cab#version=5,0,0,0\" WIDTH=432 HEIGHT=319><PARAM NAME=movie VALUE=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/4314q.swf\"><PARAM NAME=quality VALUE=high><PARAM NAME=bgcolor VALUE=#FFFFFF><EMBED src=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/4314q.swf\" quality=high bgcolor=#FFFFFF WIDTH=432 HEIGHT=319 TYPE=\"application/x-shockwave-flash\" PLUGINSPAGE=\"../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.macromedia.com%2Fshockwave%2Fdownload%2Findex.cgi%3FP1_Prod_Version%3DShockwaveFlash\"></EMBED></OBJECT>";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "RNA polymerase",
				false,
				"RNA polymerase catalyzes the formation of an RNA transcript from a DNA template.");
			
				p.addAnswer(2, "DNA polymerase",
				false,
				"DNA polymerase catalyzes the formation of DNA from a DNA template.");
			
				p.addAnswer(3, "reverse transcriptase",
				true,
				"Reverse transcriptase catalyzes the formation of DNA from a RNA template.");
			
				p.addAnswer(4, "endonuclease",
				false,
				"Endonucleases break up DNA.");
			
				p.addAnswer(5, "DNA ligase",
				false,
				"DNA ligase binds DNA nucleotides.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336494;


		
		

		
			
			p.question = "Double-stranded viral DNA is incorporated into a host cell as a _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?43&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: HIV Reproductive Cycle</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "promoter",
				false,
				"A promoter is a DNA region where RNA polymerase attaches.");
			
				p.addAnswer(2, "provirus",
				true,
				"\"Provirus\" is the name given to double-stranded viral DNA that has been incorporated into a host cell\'s genome.");
			
				p.addAnswer(3, "transposon",
				false,
				"Transposons are also referred to as jumping genes.");
			
				p.addAnswer(4, "lac",
				false,
				"<i>Lac</i> is an example of a bacterial operon.");
			
				p.addAnswer(5, "homeoboxes",
				false,
				"Homeoboxes are highly conserved regions of DNA that are concerned with the development of multicellular organisms.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

