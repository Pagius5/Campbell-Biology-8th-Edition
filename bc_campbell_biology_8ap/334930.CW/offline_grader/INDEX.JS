

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "15: The Chromosomal Basis of Inheritance > Activities Quiz";
	ak.quiz_loc_with_commas = "15: The Chromosomal Basis of Inheritance, Activities Quiz";
	ak.quiz_title = "Activities Quiz";

	
		ak.help_url = "../../placeholders/help_placeholder.html";
	
	ak.essay_total = 0;
	ak.pair_problem_total = 0;
	ak.pair_total = 0;
	ak.problem_total = 25;
	ak.non_essay_total = 25;
	ak.scored_item_total = 25;

	
	
	


	
	ak.copyright_date = "2008";
	ak.brandname = "Pearson Benjamin Cummings";
	ak.legal = "../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.pearsoned.com%2Flegal%2Findex.htm";


	// Loop over all problems
	
	
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334931;


		
		

		
			
			p.question = "Based on the results of this cross, you determine that _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?15&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Linked Genes and Crossing Over</a>)<br><br><img SRC=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/1501q.jpg\" ALT=\"Question #1\" BORDER=\"1\" >";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "round eyes are dominant to vertical eyes, and the absence of a tooth is dominant to the presence of a tooth",
				true,
				"This is the phenotype of the F<sub>1</sub> generation.");
			
				p.addAnswer(2, "round eyes are dominant to vertical eyes, and the presence of a tooth is dominant to the absence of a tooth",
				false,
				"You need to reexamine the F<sub>1</sub> generation.");
			
				p.addAnswer(3, "the allele for round eyes is linked to the allele for no tooth",
				false,
				"While this may be so, it cannot be determined from this cross.");
			
				p.addAnswer(4, "vertical eyes are dominant to round eyes, and the absence of a tooth is dominant to the presence of a tooth",
				false,
				"You need to reexamine the F<sub>1</sub> generation.");
			
				p.addAnswer(5, "vertical eyes are dominant to round eyes, and the presence of a tooth is dominant to the absence of a tooth",
				false,
				"You need to reexamine the F<sub>1</sub> generation.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334932;


		
		

		
			
			p.question = "The results of the following cross indicate that the _____.  (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?15&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Linked Genes and Crossing Over</a>)<br><br><img SRC=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/1502q.jpg\" ALT=\"Question #2\" BORDER=\"1\">";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "absence of a tooth is dominant to the presence of a tooth",
				false,
				"This cannot be determined from this cross.");
			
				p.addAnswer(2, "two genes are linked",
				false,
				"If this were so, the parental phenotypes would occur more often than expected by chance.");
			
				p.addAnswer(3, "MendAlien species is polyploid",
				false,
				"MendAliens are diploid.");
			
				p.addAnswer(4, "absence of a tooth is dominant to vertical eyes",
				false,
				"These characters are determined by two different genes.");
			
				p.addAnswer(5, "two genes assort independently",
				true,
				"With independent assortment, the ratio of the cross can be expected to be close to 1:1:1:1.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334933;


		
		

		
			
			p.question = "An F<sub>1</sub> individual can produce _____ different gametes when both eye and tooth genes are considered.  (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?15&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Linked Genes and Crossing Over</a>)<br><br><img SRC=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/1503q.jpg\" ALT=\"Question #3\" BORDER=\"1\">";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "1",
				false,
				"F<sub>1</sub> individuals are not homozygous for both genes.");
			
				p.addAnswer(2, "2",
				false,
				"This would mean that the F<sub>1</sub> individuals are homozygous for one of the two genes");
			
				p.addAnswer(3, "3",
				false,
				"No, that is incorrect.");
			
				p.addAnswer(4, "4",
				true,
				"Since this F<sub>1</sub> individual is heterozygous, it can produce four different gametes (VT, vt, Vt, vT).");
			
				p.addAnswer(5, "5",
				false,
				"No, that is incorrect.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334934;


		
		

		
			
			p.question = "Given these chromosomes, which of the choices represents the possible recombinant gametes? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?15&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Linked Genes and Crossing Over</a>)<br><br><img SRC=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/1504q.jpg\" ALT=\"Question #4\" BORDER=\"1\" >";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "<IMG SRC=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/1504a1.jpg\" ALT=\"Question #4, Answer #1\" BORDER=\"1\" ><br>",
				false,
				"This choice is partially correct.");
			
				p.addAnswer(2, "<IMG SRC=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/1504a2.jpg\" ALT=\"Question #4, Answer #2\" BORDER=\"1\" ><br>",
				false,
				"This gamete bears a chromosome that is identical to one of the chromosomes found in the question.");
			
				p.addAnswer(3, "<IMG SRC=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/1504a3.jpg\" ALT=\"Question #4, Answer #3\" BORDER=\"1\" ><br>",
				false,
				"This choice is partially correct.");
			
				p.addAnswer(4, "<IMG SRC=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/1504a4.jpg\" ALT=\"Question #4, Answer #4\" BORDER=\"1\" ><br>",
				true,
				"These gametes each carry a chromosome that formed as a result of crossing over.");
			
				p.addAnswer(5, "<IMG SRC=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/1504a5.jpg\" ALT=\"Question #4, Answer #5\" BORDER=\"1\" ><br>",
				false,
				"One of these is not a recombinant gamete.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334935;


		
		

		
			
			p.question = "The results of a F<sub>1</sub> testcross are: 250 bald head, four ears : 247 hairy head, six ears : 21 bald head, six ears : 19 hairy head, four ears. How many map units apart are the head and ear genes? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?15&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Linked Genes and Crossing Over</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "3.5",
				false,
				"You forgot to add something in before dividing by the total number of offspring.");
			
				p.addAnswer(2, "3.9",
				false,
				"You forgot to add something in before dividing by the total number of offspring.");
			
				p.addAnswer(3, "7.5",
				true,
				"21 + 19 = 40 recombinant offspring. This is then divided by 537 total progeny and multiplied by 100 to arrive at 7.5.");
			
				p.addAnswer(4, "50.5",
				false,
				"You are not considering only recombinant offspring.");
			
				p.addAnswer(5, "92.6",
				false,
				"You are not considering only recombinant offspring.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334936;


		
		

		
			
			p.question = "Which of the individuals is homozygous recessive for both of the gene pairs? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?15&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Linked Genes and Crossing Over</a>)<br><br><img SRC=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/1506q.jpg\" ALT=\"Question #6\" BORDER=\"1\">";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the female parent",
				true,
				"You know this because all of the offspring of this cross have round eyes and lack a tooth.");
			
				p.addAnswer(2, "the male parent",
				false,
				"The cross indicates that the male parent is homozygous dominant for both gene pairs.");
			
				p.addAnswer(3, "the F<sub>1</sub> generation",
				false,
				"The cross indicates that the individuals of the F<sub>1</sub> generation are heterozygous for both gene pairs.");
			
				p.addAnswer(4, "both the male and female parents",
				false,
				"The cross indicates that the male parent is homozygous dominant for both gene pairs.");
			
				p.addAnswer(5, "both the male parent and the F<sub>1</sub> generation",
				false,
				"The cross indicates that the individuals of the F<sub>1</sub> generation are heterozygous for both gene pairs.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334937;


		
		

		
			
			p.question = "The results of the following cross indicates that the _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?15&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Linked Genes and Crossing Over</a>)<br><br><img SRC=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/1507q.jpg\" ALT=\"Question #7\" BORDER=\"1\">";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "absence of a tooth is dominant to the presence of a tooth",
				false,
				"This cannot be determined from this cross.");
			
				p.addAnswer(2, "two genes are linked",
				true,
				"The two parental phenotypes occur more often than expected by chance.");
			
				p.addAnswer(3, "MendAlien species is polyploid",
				false,
				"MendAliens are diploid.");
			
				p.addAnswer(4, "absence of a tooth is dominant to vertical eyes",
				false,
				"These characters are determined by two different genes.");
			
				p.addAnswer(5, "two genes assort independently",
				false,
				"With independent assortment the ratio of the cross can be expected to be close to 1:1:1:1.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334938;


		
		

		
			
			p.question = "The recombination frequency between gene A and gene B is 8.4%, the recombination frequency between gene A and gene C is 6.8%, and the recombination frequency between gene B and gene C is 15.2%. Which of these is the correct arrangement of these genes? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?15&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Linked Genes and Crossing Over</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "ABC",
				false,
				"A is closer to C than it is to B.");
			
				p.addAnswer(2, "ACB",
				false,
				"B is closer to A than it is to C.");
			
				p.addAnswer(3, "BCA",
				false,
				"B is closer to A than it is to C.");
			
				p.addAnswer(4, "CAB",
				true,
				"The distance from C to A is 6.8, the distance from A to B is 8.4. The sum of these distances is 15.2, which is equal to the distance from B to C. This places A in the middle.");
			
				p.addAnswer(5, "CBA",
				false,
				"C is closer to A than it is to B.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334939;


		
		

		
			
			p.question = "A color-blind woman mates with a male with normal color vision. Which of these results would indicate that color blindness is caused by an X-linked recessive allele? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?15&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Sex-Linked Genes</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Half of the sons and half of the daughters are color-blind.",
				false,
				"This would not indicate that color blindness is caused by an X-linked recessive allele.");
			
				p.addAnswer(2, "All of the daughters, and none of the sons, are color-blind.",
				false,
				"This would not indicate that color blindness is caused by an X-linked recessive allele.");
			
				p.addAnswer(3, "All of the sons, and none of the daughters, are color-blind.",
				true,
				"Since all of the sons have the same phenotype as the mother and all of the daughters have the same phenotype as the father, the color blindness is likely to be caused by an X-linked recessive allele.");
			
				p.addAnswer(4, "The offspring occur in a ratio of 3 color-blind : 1 normal vision.",
				false,
				"This result would indicate that color blindness is dominant and not sex-linked.");
			
				p.addAnswer(5, "The offspring occur in a ratio of 9 normal vision males : 3 color-blind vision males : 3 normal vision females : 1 color-blind female.",
				false,
				"The expected ratio of females to males is 1:1.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334940;


		
		

		
			
			p.question = "Color blindness is an X-linked recessive trait. A color-blind man has a daughter with normal color vision. What is the genotype of the daughter? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?15&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Sex-Linked Genes</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "X<sup>C</sup>X<sup>c</sup>",
				true,
				"The X<sup>C</sup> assures the daughter of normal color vision while she inherits a X<sup>c</sup> from her father.");
			
				p.addAnswer(2, "X<sup>C</sup>X<sup>C</sup>",
				false,
				"Consider that a male carries a single X chromosome.");
			
				p.addAnswer(3, "X<sup>c</sup>X<sup>c</sup>",
				false,
				"Such a female would be color-blind.");
			
				p.addAnswer(4, "X<sup>C</sup>Y",
				false,
				"This is the genotype of a male");
			
				p.addAnswer(5, "X<sup>c</sup>Y",
				false,
				"This is the genotype of a male.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334941;


		
		

		
			
			p.question = "Color blindness is an X-linked recessive trait. A color-blind man has a daughter with normal color vision. She mates with a male who has normal color vision. What is the expected phenotypic ratio of their offspring? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?15&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Sex-Linked Genes</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "1 normal vision female : 1 color-blind female : 1 normal vision male : 1 color-blind male",
				false,
				"You may want to redo your Punnett square.");
			
				p.addAnswer(2, "All the offspring have normal color vision.",
				false,
				"You may want to redo your Punnett square.");
			
				p.addAnswer(3, "2 normal vision females : 1 normal vision male : 1 color-blind male",
				true,
				"The parents, X<sup>C</sup>X<sup>c</sup> x X<sup>C</sup>Y, have four possible offspring: X<sup>C</sup>X<sup>C</sup> (homozygous normal vision female), X<sup>C</sup>X<sup>c</sup> (heterozygous normal vision female), X<sup>C</sup>Y (normal vision male), X<sup>c</sup>Y (color-blind male).");
			
				p.addAnswer(4, "3 normal vision female : 1 color-blind male",
				false,
				"You may want to redo your Punnett square.");
			
				p.addAnswer(5, "1 normal vision female : 1 color-blind male",
				false,
				"You may want to redo your Punnett square.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334942;


		
		

		
			
			p.question = "Color blindness is an X-linked recessive trait. A color-blind man has a daughter with normal color vision. She mates with a color-blind male. What is the expected phenotypic ratio of their offspring? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?15&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Sex-Linked Genes</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "All the offspring have normal color vision.",
				false,
				"You may want to redo your Punnett square.");
			
				p.addAnswer(2, "2 normal vision females : 1 normal vision male : 1 color-blind male",
				false,
				"You may want to redo your Punnett square.");
			
				p.addAnswer(3, "3 normal vision female : 1 color-blind male",
				false,
				"You may want to redo your Punnett square.");
			
				p.addAnswer(4, "1 normal vision female : 1 color-blind female : 1 normal male : 1 color-blind male",
				true,
				"The parents, X<sup>C</sup>X<sup>c</sup> x X<sup>c</sup>Y, have four possible offspring: X<sup>C</sup>X<sup>c</sup> (heterozygous normal vision female), X<sup>c</sup>X<sup>c</sup> (homozygous color-blind female), X<sup>C</sup>Y (normal vision male), X<sup>c</sup>Y (color-blind male).");
			
				p.addAnswer(5, "1 normal vision female : 1 color-blind male",
				false,
				"You may want to redo your Punnett square.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334943;


		
		

		
			
			p.question = "Color blindness is an X-linked recessive trait. A woman who is homozygous for normal color vision mates with a color-blind male. What is the expected phenotypic ratio of their offspring? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?15&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Sex-Linked Genes</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "2 normal vision females : 1 normal vision male : 1 color-blind male",
				false,
				"You may want to redo your Punnett square.");
			
				p.addAnswer(2, "3 normal vision female : 1 color-blind male",
				false,
				"You may want to redo your Punnett square.");
			
				p.addAnswer(3, "All the offspring have normal color vision.",
				true,
				"The offspring of the parents, X<sup>C</sup>X<sup>C</sup> x X<sup>c</sup>Y, are: X<sup>C</sup>X<sup>c</sup> (heterozygous normal vision female), X<sup>C</sup>X<sup>c</sup> (heterozygous normal vision female), X<sup>C</sup>Y (normal vision male), X<sup>C</sup>Y (normal vision male).");
			
				p.addAnswer(4, "1 normal vision female : 1 color-blind female : 1 normal male : 1 color-blind male",
				false,
				"You may want to redo your Punnett square.");
			
				p.addAnswer(5, "1 normal vision female : 1 color-blind male",
				false,
				"You may want to redo your Punnett square.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334944;


		
		

		
			
			p.question = "Color blindness is an X-linked recessive trait. A color-blind woman mates with a male with normal color vision. What is the expected phenotypic ratio of their offspring? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?15&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Sex-Linked Genes</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "1 normal vision female : 1 color-blind female : 1 normal male : 1 color-blind male",
				false,
				"You may want to redo your Punnett square.");
			
				p.addAnswer(2, "1 normal vision daughter : 1 color-blind son",
				true,
				"The offspring of the parents, X<sup>c</sup>X<sup>c</sup> x X<sup>C</sup>Y, are: X<sup>C</sup>X<sup>c</sup> (heterozygous normal vision female), X<sup>C</sup>X<sup>c</sup> (heterozygous normal vision female), X<sup>c</sup>Y (color-blind male), X<sup>c</sup>Y (color-blind male).");
			
				p.addAnswer(3, "2 normal vision females : 1 normal-vision male : 1 color-blind male",
				false,
				"You may want to redo your Punnett square.");
			
				p.addAnswer(4, "3 normal vision female : 1 color-blind male",
				false,
				"You may want to redo your Punnett square.");
			
				p.addAnswer(5, "All the offspring have normal color vision.",
				false,
				"You may want to redo your Punnett square.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334945;


		
		

		
			
			p.question = "Color blindness is an X-linked recessive trait. Under what conditions can an unaffected male have a color-blind daughter? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?15&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Sex-Linked Genes</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "His mate is color-blind.",
				false,
				"An unaffected male will transmit the X-linked dominant allele to his daughter.");
			
				p.addAnswer(2, "He can\'t.",
				true,
				"Unless there is a very unlikely mutation, an unaffected male cannot have a daughter who expresses an X-linked recessive.");
			
				p.addAnswer(3, "He is heterozygous for color vision.",
				false,
				"An unaffected male cannot be heterozygous for an X-linked character.");
			
				p.addAnswer(4, "His father is color-blind.",
				false,
				"A daughter does not share an X-chromosome with her father\'s father.");
			
				p.addAnswer(5, "His mother is color-blind.",
				false,
				"If his mother is color-blind, he would be color-blind.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334946;


		
		

		
			
			p.question = "Hypophosphatemia (vitamin D-resistant rickets) is inherited as an X-linked dominant. An unaffected woman mates with a male with hypophosphatemia. What is the expected phenotypic ratio of their offspring? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?15&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Sex-Linked Genes</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "1 normal female : 1 female with hypophosphatemia : 1 normal male : 1 male with hypophosphatemia",
				false,
				"You may want to redo your Punnett square.");
			
				p.addAnswer(2, "1 normal daughter : 1 son with hypophosphatemia",
				false,
				"You may want to redo your Punnett square.");
			
				p.addAnswer(3, "1 daughter with hypophosphatemia : 1 normal son",
				true,
				"The offspring of the parents, X<sup>h</sup>X<sup>h</sup> x X<sup>H</sup>Y , are: X<sup>H</sup>X<sup>h</sup> (heterozygous female with hypophosphatemia), X<sup>H</sup>X<sup>h</sup> (heterozygous female with hypophosphatemia), X<sup>h</sup>Y (normal male), X<sup>h</sup>Y (normal male).");
			
				p.addAnswer(4, "2 normal females : 1 normal male : 1 male with hypophosphatemia",
				false,
				"You may want to redo your Punnett square.");
			
				p.addAnswer(5, "3 normal females : 1 male with hypophosphatemia",
				false,
				"You may want to redo your Punnett square.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334947;


		
		

		
			
			p.question = "Hypophosphatemia (vitamin D-resistant rickets) is inherited as an X-linked dominant. A woman without hypophosphatemia and a man with hypophosphatemia have a daughter. The daughter mates with a male without hypophosphatemia. What is the expected phenotypic ratio of their offspring? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?15&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Sex-Linked Genes</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "2 unaffected females : 1 unaffected male : 1 male with hypophosphatemia",
				false,
				"You may want to redo your Punnett square.");
			
				p.addAnswer(2, "1 unaffected female : 1 female with hypophosphatemia : 1 unaffected male : 1 male with hypophosphatemia",
				true,
				"The offspring of the parents, X<sup>H</sup>X<sup>h</sup> x X<sup>h</sup>Y, are: X<sup>h</sup>X<sup>h</sup> (homozygous female without hypophosphatemia), X<sup>H</sup>X<sup>h</sup> (heterozygous female with hypophosphatemia), X<sup>h</sup>Y (unaffected male), X<sup>H</sup>Y (male with hypophosphatemia).");
			
				p.addAnswer(3, "1 unaffected daughter : 1 son with hypophosphatemia",
				false,
				"You may want to redo your Punnett square.");
			
				p.addAnswer(4, "1 daughter with hypophosphatemia : 1 unaffected son",
				false,
				"You may want to redo your Punnett square.");
			
				p.addAnswer(5, "3 unaffected females : 1 male with hypophosphatemia",
				false,
				"You may want to redo your Punnett square.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334948;


		
		

		
			
			p.question = "Suppose that having three nostrils is a Y-linked character. A woman with two nostrils mates with a man with three nostrils. What is the expected phenotypic ratio of their offspring? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?15&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Sex-Linked Genes</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "1 daughter with two nostrils : 1 son with three nostrils",
				true,
				"The offspring of the parents, XX x XYE, are: XX (female with two nostrils), XX (female with two nostrils), XYE (male with three nostrils), XYE (male with three nostrils).");
			
				p.addAnswer(2, "1 daughter with two nostrils: 1 daughter with three nostrils: 1 son with two nostrils : 1 son with three nostrils",
				false,
				"A daughter does not normally inherit a Y-linked trait from her father.");
			
				p.addAnswer(3, "2 daughters with two nostrils: 1 son with two nostrils: 1 son with three nostrils",
				false,
				"You may want to redo your Punnett square.");
			
				p.addAnswer(4, "2 daughters with three nostrils: 1 son with two nostrils: 1 son with three nostrils",
				false,
				"A daughter does not normally inherit a Y-linked trait from her father.");
			
				p.addAnswer(5, "2 sons with two nostrils: 1 daughter with two nostrils: 1 daughter with three nostrils",
				false,
				"A daughter does not normally inherit a Y-linked trait from her father.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334949;


		
		

		
			
			p.question = "Humans are diploid and have 46 chromosomes (or two sets). How many sets of chromosomes are found in each human gamete? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?15&C','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Polyploid Plants</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "1",
				true,
				"Meiosis cuts the number of chromosomal sets in half.");
			
				p.addAnswer(2, "2",
				false,
				"Human nonsex cells have two sets of chromosomes.");
			
				p.addAnswer(3, "3",
				false,
				"If such a gamete fused with another gamete, the resulting zygote would not survive.");
			
				p.addAnswer(4, "4",
				false,
				"If such a gamete fused with another gamete, the resulting zygote would not survive.");
			
				p.addAnswer(5, "5",
				false,
				"If such a gamete fused with another gamete, the resulting zygote would not survive.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334950;


		
		

		
			
			p.question = "Humans are diploid and have 46 chromosomes. How many chromosomes are found in each human gamete? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?15&C','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Polyploid Plants</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "12",
				false,
				"No, that is incorrect.");
			
				p.addAnswer(2, "23",
				true,
				"23 is one-half of 46.");
			
				p.addAnswer(3, "36",
				false,
				"No, that is incorrect.");
			
				p.addAnswer(4, "45",
				false,
				"No, that is incorrect.");
			
				p.addAnswer(5, "92",
				false,
				"Meiosis does not result in a doubling of the number of chromosomes.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334951;


		
		

		
			
			p.question = "_____ is the process by which haploid gametes form a diploid zygote. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?15&C','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Polyploid Plants</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Embryogenesis",
				false,
				"Embryogenesis refers to development of the embryo.");
			
				p.addAnswer(2, "Meiosis",
				false,
				"Meiosis is the process by which haploid gametes are produced.");
			
				p.addAnswer(3, "Gastrulation",
				false,
				"Gastrulation is an event of prenatal development.");
			
				p.addAnswer(4, "Fertilization",
				true,
				"The joining of haploid gametes produces a diploid zygote.");
			
				p.addAnswer(5, "Mitosis",
				false,
				"Mitosis does not alter number of chromosomal sets.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334952;


		
		

		
			
			p.question = "A particular diploid plant species has 48 chromosomes, or two sets. A mutation occurs and gametes with 48 chromosomes are produced. If self-fertilization occurs, the gametes will have _____ set(s) of chromosomes. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?15&C','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Polyploid Plants</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "1",
				false,
				"If the mutation had not occurred, the gametes would have contained a single chromosomal set.");
			
				p.addAnswer(2, "2",
				false,
				"Because the mutation occurred, the gametes have two sets. The zygote formed by the union of two gametes would have more sets.");
			
				p.addAnswer(3, "3",
				false,
				"No, that is incorrect.");
			
				p.addAnswer(4, "4",
				true,
				"If self-fertilization occurs, and two gametes (each having 48 chromosomes) unite, the zygote will have 96 chromosomes (or 4 sets).");
			
				p.addAnswer(5, "5",
				false,
				"No, that is incorrect.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334953;


		
		

		
			
			p.question = "Which of these terms applies to an organism with extra sets of chromosomes? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?15&C','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Polyploid Plants</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "monosomy",
				false,
				"This term refers to having one too few chromosomes.");
			
				p.addAnswer(2, "haploid",
				false,
				"This term refers to a single chromosomal set.");
			
				p.addAnswer(3, "trisomy",
				false,
				"This term refers to having one too many chromosomes.");
			
				p.addAnswer(4, "polyploid",
				true,
				"Polyploid individuals have more than two complete sets of chromosomes.");
			
				p.addAnswer(5, "diploid",
				false,
				"This term refers to having two complete sets of chromosomes.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334954;


		
		

		
			
			p.question = "Mutant tetraploid plants _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?15&C','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Polyploid Plants</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "are usually sickly",
				false,
				"Tetraploid plants are often quite vigorous.");
			
				p.addAnswer(2, "are able to interbreed with their parents",
				false,
				"No, they can\'t.");
			
				p.addAnswer(3, "have an odd number of chromosomes",
				false,
				"The prefix \"tetra\'\" refers to the number four.");
			
				p.addAnswer(4, "are unable to interbreed with a diploid plant",
				true,
				"This is why polyploidy is a mechanisms of plant speciation.");
			
				p.addAnswer(5, "unable to self-fertilize",
				false,
				"Tetraploid plants can self-fertilize.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334955;


		
		

		
			
			p.question = "Most polyploid plants arise as a result of _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?15&C','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Polyploid Plants</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "self-fertilization",
				false,
				"Self-fertilization does not necessarily result in polyploidy.");
			
				p.addAnswer(2, "a mutation of gamete formation",
				false,
				"Another mechanism bears primary responsibility for the origin of polyploid plants.");
			
				p.addAnswer(3, "meiosis",
				false,
				"Meiosis cuts the number of chromosomal sets in half.");
			
				p.addAnswer(4, "mitosis",
				false,
				"Normal mitosis does not change the number of chromosomal sets.");
			
				p.addAnswer(5, "hybridization",
				true,
				"Most polyploid plants are the result of the hybridization of two different parental species.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

