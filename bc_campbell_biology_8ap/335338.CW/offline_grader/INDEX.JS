

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "21: Genomes and Their Evolution > Activities Quiz";
	ak.quiz_loc_with_commas = "21: Genomes and Their Evolution, Activities Quiz";
	ak.quiz_title = "Activities Quiz";

	
		ak.help_url = "../../placeholders/help_placeholder.html";
	
	ak.essay_total = 0;
	ak.pair_problem_total = 0;
	ak.pair_total = 0;
	ak.problem_total = 10;
	ak.non_essay_total = 10;
	ak.scored_item_total = 10;

	
	
	


	
	ak.copyright_date = "2008";
	ak.brandname = "Pearson Benjamin Cummings";
	ak.legal = "../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.pearsoned.com%2Flegal%2Findex.htm";


	// Loop over all problems
	
	
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335339;


		
		

		
			
			p.question = "In this example the marker DNA includes fragments that have 23,130, 9,416, 6,557, 4,361, 2,322, 2,027, and 564 base pairs. Approximately how many base pairs are in the DNA fragment indicated by the letter A? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?20&E','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Analyzing DNA Fragments Using Gel Electrophoresis</a>)<br><br><img SRC=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/2101q.jpg\" ALT=\"Question #1\" BORDER=\"1\" >";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "564",
				false,
				"DNA fragment A did not move as far as this marker fragment.");
			
				p.addAnswer(2, "2,027",
				false,
				"DNA fragment A did not move as far as this marker fragment.");
			
				p.addAnswer(3, "2,322",
				false,
				"DNA fragment A did not move as far as this marker fragment.");
			
				p.addAnswer(4, "6,557",
				true,
				"DNA fragment A moved about the same distance as the third-longest marker DNA fragment.");
			
				p.addAnswer(5, "9,416",
				false,
				"DNA fragment A moved past this marker fragment.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335340;


		
		

		
			
			p.question = "In this example the marker DNA includes fragments that have 23,130, 9,416, 6,557, 4,361, 2,322, 2,027, and 564 base pairs. Approximately how many base pairs are in the DNA fragment indicated by the letter B? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?20&E','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Analyzing DNA Fragments Using Gel Electrophoresis</a>)<br><br><img SRC=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/2102q.jpg\" ALT=\"Question #2\" BORDER=\"1\" >";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "between 23,130 and 9,416 base pairs",
				false,
				"Of all the fragments, the 23,130 base pair fragment moved the shortest distance.");
			
				p.addAnswer(2, "between 9,416 and 6,557 base pairs",
				false,
				"DNA fragment B moved farther than the 6,557 base pair marker fragment.");
			
				p.addAnswer(3, "between 6,557 and 4,361 base pairs",
				true,
				"DNA fragment B moved farther than the 6,557 base pair marker fragment but not as far as the 4,361 base pair marker fragment.");
			
				p.addAnswer(4, "between 4,361 and 2,322 base pairs",
				false,
				"DNA fragment B did not move this far.");
			
				p.addAnswer(5, "between 2,322 and 2,027 base pairs",
				false,
				"DNA fragment B did not move this far.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335341;


		
		

		
			
			p.question = "DNA fragment B consists of _____ base pairs. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?20&E','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Analyzing DNA Fragments Using Gel Electrophoresis</a>)<br><br><img SRC=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/2103q.jpg\" ALT=\"Question #3\" BORDER=\"1\" >";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "564",
				false,
				"You need to reexamine the calibration curve.");
			
				p.addAnswer(2, "1,268",
				false,
				"You need to reexamine the calibration curve.");
			
				p.addAnswer(3, "1,405",
				true,
				"Reading the calibration curve should give you a value of 1,405 base pairs for this DNA fragment.");
			
				p.addAnswer(4, "2,027",
				false,
				"You need to reexamine the calibration curve.");
			
				p.addAnswer(5, "2,322",
				false,
				"You need to reexamine the calibration curve.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335342;


		
		

		
			
			p.question = "DNA fragment A consists of _____ base pairs. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?20&F','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: The Human Genome Project: Genes on Human Chromosome 17</a>)<br><br><img SRC=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/2104q.jpg\" ALT=\"Question #4\" BORDER=\"1\" >";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "564",
				false,
				"You need to reexamine the calibration curve.");
			
				p.addAnswer(2, "1,268",
				true,
				"Reading the calibration curve should give you a value of 1,268 base pairs for this DNA fragment.");
			
				p.addAnswer(3, "1,405",
				false,
				"You need to reexamine the calibration curve.");
			
				p.addAnswer(4, "2,027",
				false,
				"You need to reexamine the calibration curve.");
			
				p.addAnswer(5, "2,322",
				false,
				"You need to reexamine the calibration curve.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335343;


		
		

		
			
			p.question = "Which of these genes are located on the q arm of chromosome 17? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?20&F','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: The Human Genome Project: Genes on Human Chromosome 17</a>)<br><br><img SRC=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/2105q.jpg\" ALT=\"Question #5\" BORDER=\"1\" >";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "gastrin and GH1",
				true,
				"The q arm is the long arm of a chromosome.");
			
				p.addAnswer(2, "MPO and GLUT4",
				false,
				"These genes are located on two different arms of the chromosome.");
			
				p.addAnswer(3, "BLMH and RP13",
				false,
				"These genes are located on two different arms of the chromosome.");
			
				p.addAnswer(4, "RP13 and GLUT4",
				false,
				"Both of these genes are located on the p arm of the chromosome.");
			
				p.addAnswer(5, "TP53 and KRTHA1",
				false,
				"These genes are located on two different arms of the chromosome.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335344;


		
		

		
			
			p.question = "The RP13 gene of chromosome 17 codes for a protein _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?20&F','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: The Human Genome Project: Genes on Human Chromosome 17</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "involved in glucose transport",
				false,
				"The GLUT4 gene codes for a protein that plays a role in glucose transport.");
			
				p.addAnswer(2, "that is a component of hair and nails",
				false,
				"The KRTHA1 gene codes for such a protein.");
			
				p.addAnswer(3, "in the regulation of blood pressure",
				false,
				"The DCP1 gene codes for such a protein.");
			
				p.addAnswer(4, "involved in eye development",
				true,
				"The RP13 gene codes for a protein that plays a role in eye development.");
			
				p.addAnswer(5, "involved in the determination of personality",
				false,
				"The SCLC6A4 gene plays a role in determination of personality.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335345;


		
		

		
			
			p.question = "The gene that codes for gastrin is located on the _____ of chromosome 17. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?20&F','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: The Human Genome Project: Genes on Human Chromosome 17</a>)<br><br><img SRC=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/2107q.jpg\" ALT=\"Question #7\" BORDER=\"1\" >";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "q<sup>2</sup>",
				false,
				"There is no such location on a chromosome.");
			
				p.addAnswer(2, "q arm",
				true,
				"The gene that codes for gastrin is located on the long arm of chromosome 17.");
			
				p.addAnswer(3, "p<sup>2</sup>",
				false,
				"There is no such location on a chromosome.");
			
				p.addAnswer(4, "p arm",
				false,
				"The gene that codes for gastrin is not located on the short arm of chromosome 17.");
			
				p.addAnswer(5, "centromere",
				false,
				"The gene that codes for gastrin is not located on the centromere of chromosome 17.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335346;


		
		

		
			
			p.question = "The TP53 gene of chromosome 17 codes for a protein _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?20&F','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: The Human Genome Project: Genes on Human Chromosome 17</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "that plays a role in the digestive process",
				false,
				"The gastrin gene codes for gastrin, a protein that plays a role in the digestive process.");
			
				p.addAnswer(2, "that, in a particular variant, may play a role in Alzheimer\'s disease",
				false,
				"This describes a variant of the BLMH gene.");
			
				p.addAnswer(3, "involved in glucose transport",
				false,
				"The GLUT4 gene codes for a protein that plays a role in glucose transport.");
			
				p.addAnswer(4, "involved in the regulation of the cell cycle",
				true,
				"This is the function of the TP53 protein.");
			
				p.addAnswer(5, "that is like a white blood cell protein",
				false,
				"The MPO gene codes for a protein that functions in white blood cells.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335347;


		
		

		
			
			p.question = "Which of these genes codes for a protein that plays a role in growth? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?20&F','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: The Human Genome Project: Genes on Human Chromosome 17</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "gastrin",
				false,
				"The protein product of this gene plays a role in the digestive process.");
			
				p.addAnswer(2, "DCP1",
				false,
				"The protein product of this gene plays a role in the regulation of blood pressure.");
			
				p.addAnswer(3, "SCLC6A4",
				false,
				"The protein product of this gene plays a role in the personality.");
			
				p.addAnswer(4, "KRTHA1",
				false,
				"The protein product of this gene is a component of hair and nails.");
			
				p.addAnswer(5, "GH1",
				true,
				"\"GH\" stands for growth hormone.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335348;


		
		

		
			
			p.question = "Which of these genes codes for a protein that plays a role in white blood cell function? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?20&F','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: The Human Genome Project: Genes on Human Chromosome 17</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "DCP1",
				false,
				"The protein product of this gene plays a role in the regulation of blood pressure.");
			
				p.addAnswer(2, "KRTHA1",
				false,
				"The protein product of this gene is a component of hair and nails.");
			
				p.addAnswer(3, "MPO",
				true,
				"This gene codes for a protein that plays a role in white blood cell function");
			
				p.addAnswer(4, "GLUT4",
				false,
				"The GLUT4 gene codes for a protein that plays a role in glucose transport.");
			
				p.addAnswer(5, "RP13",
				false,
				"The RP13 gene codes for a protein that plays a role in eye development.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

