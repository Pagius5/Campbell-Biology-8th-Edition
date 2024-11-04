

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "14: Mendel and the Gene Idea > Activities Quiz";
	ak.quiz_loc_with_commas = "14: Mendel and the Gene Idea, Activities Quiz";
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
		
		p.id = 334858;


		
		

		
			
			p.question = "The result of the following cross indicates the orange eyes are _____ black eyes. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?14&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Monohybrid Cross</a>)<br><br><img SRC=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/1401q.jpg\" ALT=\"Question #1\" BORDER=\"1\" >";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "incompletely dominant to",
				false,
				"The cross does not indicate that the eye color alleles are incompletely dominant.");
			
				p.addAnswer(2, "recessive to",
				true,
				"The result of this cross indicates that both parents are heterozygous for eye color.");
			
				p.addAnswer(3, "co-dominant to",
				false,
				"Co-dominance occurs when both alleles are equally expressed.");
			
				p.addAnswer(4, "dominant to",
				false,
				"If black were recessive and two black-eyed individuals were crossed, all of the offspring would have black eyes.&#160;");
			
				p.addAnswer(5, "larger than",
				false,
				"It looks like black eyes and orange eyes are about the same size.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334859;


		
		

		
			
			p.question = "If <i>O</i> represents the allele for black eyes (dominant) and <i>o</i> represents the allele for orange eyes (recessive), what would be the genotypic ratio of a cross between a heterozygous black-eyed MendAlien and an orange-eyed MendAlien? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?14&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Monohybrid Cross</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "1 homozygous black (<i>OO</i>): 1 heterozygote (black) (<i>Oo</i>): 1 homozygous orange (<i>oo</i>)",
				false,
				"There are only two possible genotypic combinations.");
			
				p.addAnswer(2, "2 homozygous black (<i>OO</i>): 1 heterozygote (black) (<i>Oo</i>): 1 homozygous orange (<i>oo</i>)",
				false,
				"Since orange is recessive, all of the offspring must have at least one <i>o</i>.");
			
				p.addAnswer(3, "1 homozygous black (<i>OO</i>): 0 heterozygote (black) (<i>Oo</i>): 1 homozygous orange (<i>oo</i>)",
				false,
				"Since orange is recessive, all of the offspring must have at least one <i>o</i>.");
			
				p.addAnswer(4, "0 homozygous black (<i>OO</i>): 1 heterozygote (black) (<i>Oo</i>): 1 homozygous orange (<i>oo</i>)",
				true,
				"The heterozygous black-eyed MendAlien has the genotype <i>Oo</i>. The orange-eyed MendAlien has the genotype <i>oo</i>. The result of this cross is two <i>Oo</i> offspring and two <i>oo</i> offspring. This 2:2 ratio reduces to 1:1.");
			
				p.addAnswer(5, "0 homozygous black (<i>OO</i>): 0 heterozygote (black) (<i>Oo</i>): 1 homozygous orange (<i>oo</i>)",
				false,
				"You are neglecting the <i>O</i> allele.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334860;


		
		

		
			
			p.question = "If <i>O</i> represents the allele for black eyes (dominant) and <i>o</i> represents the allele for orange eyes (recessive), what would be the phenotypic ratio of a cross between a heterozygous black-eyed MendAlien and an orange-eyed MendAlien? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?14&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Monohybrid Cross</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "3 black : 1 orange",
				false,
				"This would be the result of a cross between two heterozygous black-eyed MendAliens.");
			
				p.addAnswer(2, "1 black : 3 orange",
				false,
				"This would indicate that the allele for orange eyes is dominant to the allele for black eyes.");
			
				p.addAnswer(3, "0 black : 1 orange",
				false,
				"The allele for black eyes is dominant to the allele for orange eyes.");
			
				p.addAnswer(4, "1 black : 1 orange",
				true,
				"The heterozygous black-eyed MendAlien has the genotype <i>Oo</i>. The orange-eyed MendAlien has the genotype <i>oo</i>. The result of this cross is two <i>Oo</i> offspring and two <i>oo</i> offspring. This means that two of the offspring have black eyes and two of the offspring have orange eyes. This 2:2 ratio then reduces to 1:1.");
			
				p.addAnswer(5, "1 black : 0 orange",
				false,
				"The black-eyed MendAlien is heterozygous.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334861;


		
		

		
			
			p.question = "The result of the following cross indicates that the genotype of the female parent is _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?14&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Monohybrid Cross</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "<i>bb</i>",
				true,
				"The result of this cross indicates that the flat headtop allele is dominant to the wild-type headtop. Thus, the only way to express a wild-type headtop is to be homozygous recessive.");
			
				p.addAnswer(2, "<i>BB</i>",
				false,
				"If the female were <i>BB</i>, then the male would be <i>bb</i>. Therefore, wild would be dominant to flat, and all of the offspring would be wild type.");
			
				p.addAnswer(3, "<i>Bb</i>",
				false,
				"If the female parent were <i>Bb</i>, that would mean wild was dominant to flat and that the cross would be a <i>Bb</i> female exhibiting the wild type and a homozygous recessive male exhibiting a flat head.");
			
				p.addAnswer(4, "<i>b</i>",
				false,
				"MendAliens are diploid.");
			
				p.addAnswer(5, "<i>B</i>",
				false,
				"MendAliens are diploid.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334862;


		
		

		
			
			p.question = "The result of the following cross indicates that the genotype of the male parent is _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?14&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Monohybrid Cross</a>)<br><br><img SRC=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/1405q.jpg\" ALT=\"Question #5\" BORDER=\"1\">";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "<i>bb</i>",
				false,
				"If this were so, the offspring would not all resemble the male parent rather than the female parent.");
			
				p.addAnswer(2, "<i>BB</i>",
				true,
				"Since all of the offspring have flat headtops, it is reasonable to conclude that the allele for flat headtop is dominant to the wild-type headtop allele.");
			
				p.addAnswer(3, "<i>Bb</i>",
				false,
				"If this were so, some of the offspring would have wild-type headtops.");
			
				p.addAnswer(4, "<i>b</i>",
				false,
				"MendAliens are diploid.");
			
				p.addAnswer(5, "<i>B</i>",
				false,
				"MendAliens are diploid.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334863;


		
		

		
			
			p.question = "The result of the following cross indicates that genotypically the offspring _____.  (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?14&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Monohybrid Cross</a>)<br><br><img SRC=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/1406q.jpg\" ALT=\"Question #6\" BORDER=\"1\">";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "are all <i>bb</i>",
				false,
				"The result of the cross indicates that all of the offspring are exhibiting the dominant allele.");
			
				p.addAnswer(2, "are all <i>BB</i>",
				false,
				"You are neglecting the wild-type headtop allele.");
			
				p.addAnswer(3, "are all <i>Bb</i>",
				true,
				"This cross indicates that the flat headtop allele is dominant to the wild-type headtop allele, so all offspring are indeed <i>Bb</i>.");
			
				p.addAnswer(4, "exhibit a 3 <i>BB</i> : 1 <i>bb</i> ratio",
				false,
				"This ratio indicates that two different phenotypes are being expressed in the offspring, but the cross indicates that all of the offspring express the same phenotype.");
			
				p.addAnswer(5, "exhibit a 1 <i>BB</i> : 2 <i>Bb</i> : 1 <i>bb</i> ratio",
				false,
				"Since <i>B</i> is dominant to b, the genotypes <i>BB</i> and <i>Bb</i> both express the same phenotype.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334864;


		
		

		
			
			p.question = "Which of these is a testcross? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?14&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Monohybrid Cross</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "<i>A?</i> x <i>aa</i>",
				true,
				"A testcross is used to determine whether an individual expressing the dominant phenotype is homozygous dominant or heterozygous.");
			
				p.addAnswer(2, "<i>A?</i> x <i>AA</i>",
				false,
				"All of the offspring of this cross would exhibit the dominant, regardless of whether ? is A or a, so this is not a testcross.");
			
				p.addAnswer(3, "<i>A?</i> x <i>Aa</i>",
				false,
				"This is not a testcross.");
			
				p.addAnswer(4, "<i>A?</i> x <i>A?</i>",
				false,
				"Such a cross cannot be used to determine the identity of the unknown alleles, which is the purpose of a testcross.");
			
				p.addAnswer(5, "<i>aa</i> x <i>aa</i>",
				false,
				"This is a cross between two homozygous recessive individuals.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334865;


		
		

		
			
			p.question = "That each gamete contains a single allele of the eye color gene is an illustration of _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?14&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Monohybrid Cross</a>)<br><br><img SRC=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/1408q.jpg\" ALT=\"Question #8\" BORDER=\"1\" >";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Beadle and Tatum\'s one gene - one enzyme hypothesis",
				false,
				"This illustration is concerned with the behavior of alleles during gamete formation, not with gene expression.");
			
				p.addAnswer(2, "Mendel\'s law of segregation only",
				true,
				"Mendel\'s law of segregation is based on gametes getting only one copy of each allele of each gene.");
			
				p.addAnswer(3, "Darwin\'s theory of natural selection",
				false,
				"No, that is incorrect.");
			
				p.addAnswer(4, "Mendel\'s law of independent assortment only",
				false,
				"This illustration is considering only a single gene pair.");
			
				p.addAnswer(5, "Both Mendel\'s law of segregation and Mendel\'s law of independent assortment.",
				false,
				"Pick one.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334866;


		
		

		
			
			p.question = "What is the genotype of the parent with orange eyes and white skin? (Note: orange eyes are recessive.)  \n(<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?14&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Dihybrid Cross</a>)<br><br><img SRC=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/1409q.jpg\" ALT=\"Question #9\" BORDER=\"1\">";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "<i>OoWw</i>",
				false,
				"As noted in the activity on monohybrid crosses, orange eyes are recessive.");
			
				p.addAnswer(2, "<i>ooWW</i>",
				false,
				"All of the offspring have green skin.");
			
				p.addAnswer(3, "<i>ooWw</i>",
				false,
				"An orange-eye, green-skin phenotype corresponds to this genotype.");
			
				p.addAnswer(4, "<i>OOWW</i>",
				false,
				"This is the genotype of the parent with black eyes and green skin.");
			
				p.addAnswer(5, "<i>ooww</i>",
				true,
				"This result of the cross indicates that both orange eyes and white skin are recessive.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334867;


		
		

		
			
			p.question = "Black eyes are dominant to orange eyes, and green skin is dominant to white skin. Sam, a MendAlien with black eyes and green skin, has a parent with orange eyes and white skin. Carole is a MendAlien with orange eyes and white skin. If Sam and Carole were to mate, the predicted phenotypic ratio of their offspring would be _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?14&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Dihybrid Cross</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "1 black eyes, green skin : 1 black eyes, white skin : 1 orange eyes, green skin : 1 orange eyes, white skin",
				true,
				"Sam\'s genotype is <i>OoWw</i>, and Carole\'s genotype is <i>ooww</i>.");
			
				p.addAnswer(2, "3 black eyes, green skin : 3 black eyes, white skin : 9 orange eyes, green skin : 1 orange eyes, white skin",
				false,
				"You do not have the correct genotypes for Sam and Carole.");
			
				p.addAnswer(3, "1 black eyes, green skin : 3 black eyes, white skin : 3 orange eyes, green skin : 9 orange eyes, white skin",
				false,
				"Both orange eyes and white skin are recessive.");
			
				p.addAnswer(4, "9 black eyes, green skin : 3 black eyes, white skin : 3 orange eyes, green skin : 1 orange eyes, white skin",
				false,
				"Carole\'s genotype is not <i>OoWw</i>.");
			
				p.addAnswer(5, "There is insufficient information to determine Sam\'s genotype.",
				false,
				"There IS sufficient information to determine Sam\'s genotype.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334868;


		
		

		
			
			p.question = "In order to determine the genotype of a MendAlien with black eyes and green skin, you would cross this individual with a(n) _____ individual. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?14&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Dihybrid Cross</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "<i>ooww</i>",
				true,
				"This is an extension of the single character testcross you worked with in  the activity on monohybrid crosses.");
			
				p.addAnswer(2, "<i>OOWW</i>",
				false,
				"All of the offspring of this individual will have black eyes and green skin and would not reveal the genotype of the MendAlien with black eyes and green skin.");
			
				p.addAnswer(3, "<i>OOww</i>",
				false,
				"All of the offspring of this individual will have black eyes.");
			
				p.addAnswer(4, "<i>ooWW</i>",
				false,
				"All of the offspring of this individual will have green skin.");
			
				p.addAnswer(5, "<i>OoWw</i>",
				false,
				"This is not a testcross.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334869;


		
		

		
			
			p.question = "Black eyes are dominant to orange eyes, and green skin is dominant to white skin. Sam, a MendAlien with black eyes and green skin, has a parent with orange eyes and white skin. Carole is a MendAlien with orange eyes and white skin. If Sam and Carole were to mate, the predicted phenotypic ratio of their offspring would be _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?14&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Dihybrid Cross</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "1 black eyes, green skin : 1 black eyes, white skin : 1 orange eyes, green skin : 1 orange eyes, white skin",
				true,
				"Sam\'s genotype is <i>OoWw</i>, and Carole\'s genotype is <i>ooww</i>.");
			
				p.addAnswer(2, "3 black eyes, green skin : 3 black eyes, white skin : 9 orange eyes, green skin : 1 orange eyes, white skin",
				false,
				"You do not have the correct genotypes for Sam and Carole.");
			
				p.addAnswer(3, "1 black eyes, green skin : 3 black eyes, white skin : 3 orange eyes, green skin : 9 orange eyes, white skin",
				false,
				"Both orange eyes and white skin are recessive.");
			
				p.addAnswer(4, "9 black eyes, green skin : 3 black eyes, white skin : 3 orange eyes, green skin : 1 orange eyes, white skin",
				false,
				"Carole\'s genotype is not <i>OoWw</i>.");
			
				p.addAnswer(5, "There is insufficient information to determine Sam\'s genotype.",
				false,
				"There IS sufficient information to determine Sam\'s genotype.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334870;


		
		

		
			
			p.question = "A cross between an individual with orange eyes and green skin and an individual with black eyes and white skin is an example of a _____ cross. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?14&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Dihybrid Cross</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "test",
				false,
				"A testcross would involve an individual who is homozygous recessive for both characters.");
			
				p.addAnswer(2, "difficult",
				false,
				"With a little effort, you will find such crosses to be fairly easy.");
			
				p.addAnswer(3, "dihybrid",
				true,
				"The cross is examining two characters.");
			
				p.addAnswer(4, "trihybrid",
				false,
				"Only two characters are being considered.");
			
				p.addAnswer(5, "monohybrid",
				false,
				"More than a single character is being considered.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334871;


		
		

		
			
			p.question = "A phenotypic ratio of 9:3:3:1 in the offspring of a cross indicates that _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?14&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Dihybrid Cross</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "one parent is homozygous dominant and one parent is homozygous recessive",
				false,
				"If this were so, all of the offspring would express both dominants.");
			
				p.addAnswer(2, "one parent is heterozygous and one parent is homozygous recessive",
				false,
				"This cross would be expected to result in a 1:1:1:1 ratio.");
			
				p.addAnswer(3, "one parent is homozygous dominant and one parent is heterozygous",
				false,
				"If this were so, all of the offspring would express both dominants.");
			
				p.addAnswer(4, "both parents are heterozygous for both genes",
				true,
				"Such a result indicates that the genes assort independently and that, for each gene, the alleles exhibit a dominant/recessive relationship.");
			
				p.addAnswer(5, "both parents are homozygous dominant",
				false,
				"If this were so all of the offspring would express both dominants.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334872;


		
		

		
			
			p.question = "The observed distribution of alleles into gametes is an illustration of _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?14&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Dihybrid Cross</a>)<br><br><img SRC=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/1415q.jpg\" ALT=\"Question #15\" BORDER=\"1\">";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Mendel\'s law of segregation only",
				false,
				"Mendel\'s law of segregation is based on gametes getting only one copy of each allele of each gene, as shown here. Another law is also being illustrated, however.");
			
				p.addAnswer(2, "Thienemann\'s rule",
				false,
				"Thienemann\'s rule is concerned with phytogeography.");
			
				p.addAnswer(3, "Eimer\'s principle",
				false,
				"Eimer\'s principle is concerned with epistasis.");
			
				p.addAnswer(4, "Mendel\'s law of independent assortment only",
				false,
				"The gene pairs are assorting independently, but another law is also being illustrated.");
			
				p.addAnswer(5, "Mendel\'s laws of segregation and independent assortment",
				true,
				"The events seen here illustrate both the law of segregation and the law of independent assortment.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334873;


		
		

		
			
			p.question = "An individual heterozygous for eye color, skin color, and number of eyes mates with an individual who is homozygous recessive for all three characters; what would be the expected phenotypic ratio of their offspring? [Hint: O = black eyes, o = orange eyes; W = green skin, w = white skin; C = two eyes, c = one eye] (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?14&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Dihybrid Cross</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "9 black eyes, green skin, two eyes : 3 black eyes, green skin, one eye : 3 black eyes, white skin, two eyes : 1 black eyes, white skin, one eye : 9 orange eyes, green skin, two eyes : 3 orange eyes, green skin, one eye : 3 orange eyes, white skin, two eyes : 1 orange eyes, white skin, one eye",
				false,
				"You have the correct phenotypic combinations, but you need to work on the ratio.");
			
				p.addAnswer(2, "9 black eyes, green skin, two eyes : 3 black eyes, green skin, one eye : 3 black eyes, white skin, two eyes : 1 black eyes, white skin, one eye",
				false,
				"You are neglecting the orange-eyed offspring.");
			
				p.addAnswer(3, "1 black eyes, green skin, two eyes : 1 black eyes, green skin, one eye : 1 black eyes, white skin, two eyes : 1 orange eyes, green skin, two eyes : 1 orange eyes, white skin, two eyes : 1 orange eyes, white skin, one eye",
				false,
				"This choice is missing two of the possible phenotypic combinations.");
			
				p.addAnswer(4, "1 black eyes, green skin, two eyes : 1 black eyes, green skin, one eye : 1 black eyes, white skin, two eyes : 1 black eyes, white skin, one eye : 1 orange eyes, green skin, two eyes : 1 orange eyes, green skin, one eye : 1 orange eyes, white skin, two eyes : 1 orange eyes, white skin, one eye",
				true,
				"This is a tough problem; you had to expand your Punnett square to accommodate another character. However, 1:1:1:1:1:1:1:1 ratio is the expected outcome of a <i>OoWwCc</i> x <i>oowwcc</i> cross.");
			
				p.addAnswer(5, "9 orange eyes, green skin, two eyes : 9 orange eyes, green skin, one eye : 9 orange eyes, white skin, two eyes : 1 orange eyes, white skin, one eye",
				false,
				"You are neglecting the black-eyed offspring.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334874;


		
		

		
			
			p.question = "A <i>OoWw</i> x <i>ooww</i> cross yields a phenotypic ratio of approximately 5 black eyes, green skin : 5 orange eyes, white skin : 1 black eyes, white skin : 1 orange eyes, green skin. Which of the following best explains these results? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?14&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Dihybrid Cross</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Mendel\'s law of independent assortment is being violated.",
				true,
				"If the genes for eye color and skin color assorted independently, then the outcome of this cross would have been a 1:1:1:1 ratio.");
			
				p.addAnswer(2, "Mendel\'s law of segregation is being violated.",
				false,
				"These results do not contradict Mendel\'s law of segregation.");
			
				p.addAnswer(3, "The genes for eye color and skin color are co-dominant.",
				false,
				"Co-dominance concerns the relationship between pairs of alleles of a single gene.");
			
				p.addAnswer(4, "The heterozygous individual is male, and the homozygous individual is female.",
				false,
				"Sex-linkage does not play a role in this cross.");
			
				p.addAnswer(5, "Mendel\'s laws of segregation and independent assortment are being violated.",
				false,
				"Only one of these laws is being violated.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334875;


		
		

		
			
			p.question = "In the following cross the genotype of the female parent is <i>OoWw</i>. What is the genotype of the male parent? [Hint: <i>O</i> = black eyes, <i>o</i> = orange eyes, <i>W</i> = green skin, <i>w</i> = white skin] (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?14&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Dihybrid Cross</a>)<br><br><img SRC=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/1418q.jpg\" ALT=\"Question #18\" BORDER=\"1\">";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "<i>OoWw</i>",
				false,
				"If this were so, there would be orange-eyed offspring.");
			
				p.addAnswer(2, "<i>OOWW</i>",
				false,
				"If this were so, all of the offspring would have black eyes and green skin.");
			
				p.addAnswer(3, "<i>OOWw</i>",
				true,
				"All of the offspring have black eyes, and there is a 3:1 ratio of skin color.");
			
				p.addAnswer(4, "<i>OoWW</i>",
				false,
				"If this were so, all of the offspring would have green skin.");
			
				p.addAnswer(5, "<i>ooWW</i>",
				false,
				"If this were so, there would be orange-eyed offspring.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334876;


		
		

		
			
			p.question = "In a situation in which genes assort independently, what is the ratio of the gametes produced by an <i>AaBB</i> individual? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?14&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Dihybrid Cross</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "1 <i>A</i> : 1 <i>B</i>",
				false,
				"Each gamete gets one allele of each gene.");
			
				p.addAnswer(2, "3 <i>A</i> : 1 <i>B</i>",
				false,
				"Each gamete gets one allele of each gene.");
			
				p.addAnswer(3, "3 <i>AB</i> : 1 <i>ab</i>",
				false,
				"There are no b alleles.");
			
				p.addAnswer(4, "1 <i>AB</i> : 1 <i>aB</i>",
				true,
				"This is the correct ratio of gametes.");
			
				p.addAnswer(5, "3 <i>AA</i> : 1 <i>BB</i>",
				false,
				"This violates the law of segregation.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334877;


		
		

		
			
			p.question = "Mendel worked _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?14&C','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Gregor\'s Garden</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "on the Human Genome Project",
				false,
				"The Human Genome Project is a current project.");
			
				p.addAnswer(2, "with fruit flies",
				false,
				"Mendel is best known for his work with peas.");
			
				p.addAnswer(3, "on problems involving characters that were inherited together more often than expected by chance",
				false,
				"It appears that Mendel never encountered, or avoided, such situations.");
			
				p.addAnswer(4, "on gene mapping",
				false,
				"No, he didn\'t.");
			
				p.addAnswer(5, "in a monastery",
				true,
				"Mendel was a monk who worked in his monastery garden.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334878;


		
		

		
			
			p.question = "Andalusian chickens with the genotype <i>C<sup>B</sup>C<sup>B</sup></i> are black, those with the genotype <i>C<sup>W</sup>C<sup>W</sup></i> are white, and those with the genotype <i>C<sup>B</sup>C<sup>W</sup></i> are gray. What is the relationship between the <i>C<sup>B</sup></i> and <i>C<sup>W</sup></i> alleles? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?14&D','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Incomplete Dominance</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "<i>C<sup>B</sup></i> is dominant to <i>C<sup>W</sup></i>",
				false,
				"If this were so, the heterozygote would be black.");
			
				p.addAnswer(2, "<i>C<sup>B</sup></i> is recessive to <i>C<sup>W</sup></i>",
				false,
				"If this were so, the heterozygote would be white.");
			
				p.addAnswer(3, "<i>C<sup>W</sup></i> is dominant to <i>C<sup>B</sup></i>",
				false,
				"If this were so, the heterozygote would be white.");
			
				p.addAnswer(4, "The relationship between the alleles is one of incomplete dominance.",
				true,
				"The phenotype of the heterozygote falls between black and white.");
			
				p.addAnswer(5, "<i>C<sup>B</sup></i> and <i>C<sup>W</sup></i> are co-dominant",
				false,
				"If this were so, the heterozygote would be both black and white.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334879;


		
		

		
			
			p.question = "Andalusian chickens with the genotype <i>C<sup>B</sup>C<sup>B</sup></i> are black, those with the genotype <i>C<sup>W</sup>C<sup>W</sup></i> are white, and those with the genotype <i>C<sup>B</sup>C<sup>W</sup></i> are gray. What is the expected phenotypic ratio of a <i>C<sup>B</sup>C<sup>W</sup></i> x <i>C<sup>B</sup>C<sup>W</sup></i> cross? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?14&D','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Incomplete Dominance</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "1 black : 1 white",
				false,
				"You need to reconsider the phenotype of the heterozygote.");
			
				p.addAnswer(2, "3 black : 1 white",
				false,
				"You need to reconsider the phenotype of the heterozygote.");
			
				p.addAnswer(3, "1 black : 2 gray : 1 white",
				true,
				"In this instance the phenotypic and genotypic ratios are the same.");
			
				p.addAnswer(4, "3 gray : 1 white",
				false,
				"You are neglecting the <i>C<sup>B</sup>C<sup>B</sup></i> offspring.");
			
				p.addAnswer(5, "1 black : 1 gray",
				false,
				"You are neglecting the <i>C<sup>W</sup>C<sup>W</sup></i> offspring.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334880;


		
		

		
			
			p.question = "Andalusian chickens with the genotype <i>C<sup>B</sup>C<sup>B</sup></i> are black, those with the genotype <i>C<sup>W</sup>C<sup>W</sup></i> are white, and those with the genotype <i>C<sup>B</sup>C<sup>W</sup></i> are gray. What is the expected genotypic ratio of a <i>C<sup>B</sup>C<sup>W</sup></i> x <i>C<sup>B</sup>C<sup>W</sup></i> cross? <A HREF=\"javascript:;\" ONCLICK=\"window.open('"+qzmediapath+"bc_campbell_biology_7/media/activities/load.html?14&D','activity','menubar=0,toolbar=0,location=0,status=1,scrollbars=1,resizable=1,width=740,height=520');\">(Activity: Incomplete Dominance)</A>";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "1 <i>C<sup>B</sup>C<sup>B</sup></i> : 1 <i>C<sup>B</sup>C<sup>W</sup></i>",
				false,
				"You are neglecting to consider the white chickens.");
			
				p.addAnswer(2, "3 <i>C<sup>B</sup>C<sup>B</sup></i> : 1 <i>C<sup>W</sup>C<sup>W</sup></i>",
				false,
				"You are neglecting to consider the gray chickens.");
			
				p.addAnswer(3, "1 <i>C<sup>B</sup>C<sup>B</sup></i> : 2 <i>C<sup>B</sup>C<sup>W</sup></i> : 1 <i>C<sup>W</sup>C<sup>W</sup></i>",
				true,
				"In this instance the phenotypic and genotypic ratios are the same.");
			
				p.addAnswer(4, "2 <i>C<sup>B</sup>C<sup>B</sup></i> : 1 <i>C<sup>B</sup>C<sup>W</sup></i> : 2 <i>C<sup>W</sup>C<sup>W</sup></i>",
				false,
				"You may want to redo your Punnett square.");
			
				p.addAnswer(5, "9 <i>C<sup>B</sup>C<sup>B</sup></i> : 3 <i>C<sup>B</sup>C<sup>W</sup></i> : 3 <i>C<sup>W</sup>C<sup>B</sup></i> : 1 <i>C<sup>W</sup>C<sup>W</sup></i>",
				false,
				"<i>C<sup>B</sup>C<sup>W</sup></i> is the same as <i>C<sup>W</sup>C<sup>B</sup></i>.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334881;


		
		

		
			
			p.question = "Andalusian chickens with the genotype <i>C<sup>B</sup>C<sup>B</sup></i> are black, those with the genotype <i>C<sup>W</sup>C<sup>W</sup></i> are white, and those with the genotype <i>C<sup>B</sup>C<sup>W</sup></i> are gray. What is the expected genotypic ratio of a <i>C<sup>B</sup>C<sup>B</sup></i> x <i>C<sup>B</sup>C<sup>W</sup></i> cross? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?14&D','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Incomplete Dominance</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "1 <i>C<sup>B</sup>C<sup>B</sup></i> : 1 <i>C<sup>B</sup>C<sup>W</sup></i>",
				true,
				"In this instance the phenotypic and genotypic ratios are the same.");
			
				p.addAnswer(2, "3 <i>C<sup>B</sup>C<sup>B</sup></i> : 1 <i>C<sup>W</sup>C<sup>W</sup></i>",
				false,
				"<i>C<sup>W</sup>C<sup>W</sup></i> is not a possible outcome of this cross.");
			
				p.addAnswer(3, "1 <i>C<sup>B</sup>C<sup>B</sup></i> : 2 <i>C<sup>B</sup>C<sup>W</sup></i> : 1 <i>C<sup>W</sup>C<sup>W</sup></i>",
				false,
				"<i>C<sup>W</sup>C<sup>W</sup></i> is not a possible outcome of this cross.");
			
				p.addAnswer(4, "2 <i>C<sup>B</sup>C<sup>B</sup></i> : 1 <i>C<sup>B</sup>C<sup>W</sup></i> : 2 <i>C<sup>W</sup>C<sup>W</sup></i>",
				false,
				"<i>C<sup>W</sup>C<sup>W</sup></i> is not a possible outcome of this cross.");
			
				p.addAnswer(5, "9 <i>C<sup>B</sup>C<sup>B</sup></i> : 3 <i>C<sup>B</sup>C<sup>W</sup></i> : 3 <i>C<sup>W</sup>C<sup>B</sup></i> : 1 <i>C<sup>W</sup>C<sup>W</sup></i>",
				false,
				"<i>C<sup>W</sup>C<sup>W</sup></i> is not a possible outcome of this cross.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334882;


		
		

		
			
			p.question = "Andalusian chickens with the genotype <i>C<sup>B</sup>C<sup>B</sup></i> are black, those with the genotype <i>C<sup>W</sup>C<sup>W</sup></i> are white, and those with the genotype <i>C<sup>B</sup>C<sup>W</sup></i> are gray. What is the expected phenotypic ratio of a <i>C<sup>B</sup>C<sup>B</sup></i> x <i>C<sup>B</sup>C<sup>W</sup></i> cross? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?14&D','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Incomplete Dominance</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "1 black : 1 white",
				false,
				"There are no <i>C<sup>W</sup>C<sup>W</sup></i> offspring.");
			
				p.addAnswer(2, "3 black : 1 white",
				false,
				"You need to reconsider the phenotype of the heterozygote.");
			
				p.addAnswer(3, "1 black : 2 gray : 1 white",
				false,
				"There are no <i>C<sup>W</sup>C<sup>W</sup></i> offspring.");
			
				p.addAnswer(4, "3 gray : 1 white",
				false,
				"There are no <i>C<sup>W</sup>C<sup>W</sup></i> offspring.");
			
				p.addAnswer(5, "1 black : 1 gray",
				true,
				"In this instance the phenotypic and genotypic ratios are the same.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

