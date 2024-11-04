

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "53: Population Ecology > Activities Quiz";
	ak.quiz_loc_with_commas = "53: Population Ecology, Activities Quiz";
	ak.quiz_title = "Activities Quiz";

	
		ak.help_url = "../../placeholders/help_placeholder.html";
	
	ak.essay_total = 0;
	ak.pair_problem_total = 0;
	ak.pair_total = 0;
	ak.problem_total = 14;
	ak.non_essay_total = 14;
	ak.scored_item_total = 14;

	
	
	


	
	ak.copyright_date = "2008";
	ak.brandname = "Pearson Benjamin Cummings";
	ak.legal = "../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.pearsoned.com%2Flegal%2Findex.htm";


	// Loop over all problems
	
	
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336998;


		
		

		
			
			p.question = "You are doing a mark-recapture experiment to determine the population size of the MendAliens living on an island in my back yard. Initially, you catch and mark 130 MendAliens, which you then release. Next, you capture 90 MendAliens, of which 20 are marked. What is your estimate of the population size of MendAliens living on the island in my back yard? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?52&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Techniques for Estimating Population Density and Size</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "14",
				false,
				"The population size is not calculated as (20 x 90) / 130.");
			
				p.addAnswer(2, "29",
				false,
				"The population size is not calculated as (130 x 20) / 90.");
			
				p.addAnswer(3, "130",
				false,
				"The population size is not equal to the number of recaptured individuals that are marked.");
			
				p.addAnswer(4, "585",
				true,
				"To get the population size <i>N,</i> multiply the number marked in the first catch, <i>M<sub>1</sub>,</i> by the total number caught in the second catch, <i>C,</i> and divide that by the number of marked recaptures in the second catch, <i>M<sub>2</sub>:</i><p><blockquote><i>N</i> =<nobr>&#160;<i>(M<sub>1</sub></i><font face=\"Arial, Helvetica, Sans-serif\"> x </font><i>C)</i>&#160;/&#160;<i>M<sub>2</sub></i></nobr></blockquote> Or: (130 x 90) / 20 = 585.");
			
				p.addAnswer(5, "234,000",
				false,
				"The population size is not calculated as 130 x 90 x 20.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336999;


		
		

		
			
			p.question = "Assume there are 200 MendAliens living on an island in my back yard. If my island has an area of 20 hectares, what is the population density of MendAliens in terms of MendAliens per hectare? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?52&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Techniques for Estimating Population Density and Size</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "0.1 MendAliens per hectare",
				false,
				"Population density is not calculated as area divided by population size.");
			
				p.addAnswer(2, "4 MendAliens per hectare",
				false,
				"No, that is incorrect.");
			
				p.addAnswer(3, "10 MendAliens per hectare",
				true,
				"Population density is calculated as population size divided by area: 200 MendAliens / 20 hectares = 10 MendAliens per hectare.");
			
				p.addAnswer(4, "200 MendAliens per hectare",
				false,
				"No, that is incorrect.");
			
				p.addAnswer(5, "4,000 MendAliens per hectare",
				false,
				"Population density is not calculated as population size times area.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 337000;


		
		

		
			
			p.question = "The mark-recapture method would be best for sampling a population of _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?52&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Techniques for Estimating Population Density and Size</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "sharks",
				true,
				"The mark-recapture method works best for active species whose individuals tend to be highly mobile.");
			
				p.addAnswer(2, "maple trees",
				false,
				"The sample-plot method works for species whose individuals tend to stay in one place.");
			
				p.addAnswer(3, "rose bushes",
				false,
				"The sample-plot method works for species whose individuals tend to stay in one place.");
			
				p.addAnswer(4, "wheat",
				false,
				"The sample-plot method works for species whose individuals tend to stay in one place.");
			
				p.addAnswer(5, "oysters",
				false,
				"The sample-plot method works for species whose individuals tend to stay in one place.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 337001;


		
		

		
			
			p.question = "Which of these species typically has a mortality rate that remains fairly constant over an individual\'s life span? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?52&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Investigating Survivorship Curves</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "humans",
				false,
				"The mortality rate of humans remains relatively low for much of their life span and then dramatically increases for older humans.");
			
				p.addAnswer(2, "robins",
				true,
				"The mortality rate of robins remains relatively constant throughout their life span.");
			
				p.addAnswer(3, "grasses",
				false,
				"Grasses have a relatively high mortality rate early in their life span, after which the mortality rate decreases.");
			
				p.addAnswer(4, "elephants",
				false,
				"The mortality rate of elephants remains relatively low for much of their life span and then dramatically increases for older elephants.");
			
				p.addAnswer(5, "oysters",
				false,
				"Oysters have a relatively high mortality rate early in their life span, after which the mortality rate decreases.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 337002;


		
		

		
			
			p.question = "Oyster populations are primarily, if not exclusively, composed of _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?52&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Investigating Survivorship Curves</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "larvae",
				false,
				"Larval oysters have a very high mortality rate and thus are not the major age group of any oyster population.");
			
				p.addAnswer(2, "adults",
				true,
				"Young oysters have a very high mortality rate; older oysters have a much lower mortality rate. Thus, most oyster populations consist primarily of older individuals.");
			
				p.addAnswer(3, "juveniles",
				false,
				"Juvenile oysters have a very high mortality rate and thus are not the major age group of any oyster population.");
			
				p.addAnswer(4, "larval and juvenile oysters",
				false,
				"Both larval and juvenile oysters have a very high mortality rate and thus are not the major age groups of any oyster population.");
			
				p.addAnswer(5, "prereproductive oysters",
				false,
				"Young oysters have a very high mortality rate and thus are not the major age group of any oyster population.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 337003;


		
		

		
			
			p.question = "Which of these organisms has a survivorship curve similar to that of oysters? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?52&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Investigating Survivorship Curves</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "humans",
				false,
				"The mortality rate of humans remains relatively low for much of their life span and then dramatically increases for older humans.");
			
				p.addAnswer(2, "robins",
				false,
				"The mortality rate of robins remains relatively constant throughout their life span.");
			
				p.addAnswer(3, "grasses",
				true,
				"Grasses, like oysters, have a relatively high mortality rate early in their life span, after which the mortality rate decreases.");
			
				p.addAnswer(4, "elephants",
				false,
				"The mortality rate of elephants remains relatively low for much of their life span and then dramatically increases for older elephants.");
			
				p.addAnswer(5, "cats",
				false,
				"The mortality rate of cats remains relatively constant throughout their life span.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 337004;


		
		

		
			
			p.question = "Which of these organisms has a survivorship curve similar to that of humans? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?52&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Investigating Survivorship Curves</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "oysters",
				false,
				"Oysters have a relatively high mortality rate early in their life span, after which the mortality rate decreases.");
			
				p.addAnswer(2, "robins",
				false,
				"The mortality rate of robins remains relatively constant throughout their life span.");
			
				p.addAnswer(3, "grasses",
				false,
				"Grasses have a relatively high mortality rate early in their life span, after which the mortality rate decreases.");
			
				p.addAnswer(4, "elephants",
				true,
				"The mortality rate of elephants, like that of humans, remains relatively low for much of their life span and then dramatically increases for older individuals.");
			
				p.addAnswer(5, "cats",
				false,
				"The mortality rate of cats remains relatively constant throughout their life span.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 337005;


		
		

		
			
			p.question = "Which of these was the first of the major events that stimulated an increase in the size of the human population? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?52&C','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Human Population Growth</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the Industrial Revolution",
				false,
				"While the Industrial Revolution stimulated an increase in the size of the human population it was not the first event to do so.");
			
				p.addAnswer(2, "the discovery of antibiotics",
				false,
				"While antibiotics have stimulated an increase in the size of the human population, their discovery was preceded by other events listed here.");
			
				p.addAnswer(3, "the advent of agriculture",
				true,
				"The advent of agriculture is the first of the events listed here that stimulated an increase in the size of the human population.");
			
				p.addAnswer(4, "the discovery of vaccines",
				false,
				"While vaccines have stimulated an increase in the size of the human population, their discovery was preceded by other events listed here.");
			
				p.addAnswer(5, "the bubonic plague",
				false,
				"The bubonic plague was responsible for a massive decrease in the size of the European population of humans.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 337006;


		
		

		
			
			p.question = "Which of these was the second of the major events that stimulated an increase in the size of the human population? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?52&C','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Human Population Growth</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the Industrial Revolution",
				true,
				"The Industrial Revolution was the second of the major events that stimulated an increase in the size of the human population.");
			
				p.addAnswer(2, "the discovery of antibiotics",
				false,
				"While antibiotics have stimulated an increase in the size of the human population, their discovery was preceded by other events listed here.");
			
				p.addAnswer(3, "the advent of agriculture",
				false,
				"The advent of agriculture was the first of the events listed here that stimulated an increase in the size of the human population.");
			
				p.addAnswer(4, "the discovery of vaccines",
				false,
				"While vaccines have stimulated an increase in the size of the human population, their discovery was preceded by other events listed here.");
			
				p.addAnswer(5, "the bubonic plague",
				false,
				"The bubonic plague was responsible for a massive decrease in the size of the European population of humans.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 337007;


		
		

		
			
			p.question = "Which of these was the third of the major events that stimulated an increase in the size of the human population? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?52&C','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Human Population Growth</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the Industrial Revolution",
				false,
				"The Industrial Revolution was the second of the major events that stimulated an increase in the size of the human population.");
			
				p.addAnswer(2, "the discovery of antibiotics",
				false,
				"This choice is partially correct.");
			
				p.addAnswer(3, "the advent of agriculture",
				false,
				"The advent of agriculture was the first of the events listed here that stimulated an increase in the size of the human population.");
			
				p.addAnswer(4, "the discovery of vaccines",
				false,
				"This choice is partially correct.");
			
				p.addAnswer(5, "the discovery of vaccines and the discovery of antibiotics",
				true,
				"The advent of modern medicine is the third and most recent of the events listed here that have stimulated an increase in the population size of humans.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 337008;


		
		

		
			
			p.question = "Currently, how large is the worldwide population of humans relative to Earth\'s carrying capacity for humans? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?52&C','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Human Population Growth</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "at the carrying capacity",
				false,
				"The human population is still increasing, but natural resources are getting scarcer.");
			
				p.addAnswer(2, "above the carrying capacity",
				false,
				"The human population is still increasing, but natural resources are getting scarcer.");
			
				p.addAnswer(3, "below the carrying capacity",
				false,
				"The human population is still increasing, but natural resources are getting scarcer.");
			
				p.addAnswer(4, "either at or above the carrying capacity",
				false,
				"The human population is still increasing, but natural resources are getting scarcer.");
			
				p.addAnswer(5, "There is insufficient information to answer this question.",
				true,
				"Not knowing how technological innovations will affect the human population means there is insufficient information to answer this question.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 337009;


		
		

		
			
			p.question = "Ignoring migration, the age structure of a human population likely to increase in size will have what shape? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?52&D','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Analyzing Age-Structure Pyramids</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "pyramid",
				true,
				"This would mean that most individuals are in the prereproductive years. Such a population is expected to increase.");
			
				p.addAnswer(2, "inverted pyramid",
				false,
				"In such a population the majority of individuals are in their postreproductive years. Such a population is expected to decrease.");
			
				p.addAnswer(3, "a rectangle tapering toward the top",
				false,
				"Such a population is expected to have a relatively stable size.");
			
				p.addAnswer(4, "Both a pyramid and a rectangle tapering toward the top result in a population that increases in size.",
				false,
				"Only one of these two shapes is associated with an expected increase in the size of a population.");
			
				p.addAnswer(5, "Both an inverted pyramid and a rectangle tapering toward the top result in a population that increases in size.",
				false,
				"Neither of these choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 337010;


		
		

		
			
			p.question = "Ignoring migration, the age structure of a human population likely to decrease in size will have what shape? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?52&D','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Analyzing Age-Structure Pyramids</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "pyramid",
				false,
				"This would mean that most individuals are in the prereproductive years. Such a population is expected to increase.");
			
				p.addAnswer(2, "inverted pyramid",
				true,
				"In such a population the majority of individuals are in their postreproductive years. Such a population is expected to decrease.");
			
				p.addAnswer(3, "a rectangle tapering toward the top",
				false,
				"Such a population is expected to have a relatively stable size.");
			
				p.addAnswer(4, "Both a pyramid and a rectangle tapering toward the top result in a population that decreases in size.",
				false,
				"Neither of these choices is correct.");
			
				p.addAnswer(5, "Both an inverted pyramid and a rectangle tapering toward the top result in a population that decreases in size.",
				false,
				"Only one of these two shapes is associated with an expected decrease in the size of a population.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 337011;


		
		

		
			
			p.question = "Ignoring migration, the age structure diagram of a human population likely to maintain a relatively stable size will have what shape? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?52&D','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Analyzing Age-Structure Pyramids</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "pyramid",
				false,
				"This would mean that most individuals are in the prereproductive years. Such a population is expected to increase.");
			
				p.addAnswer(2, "inverted pyramid",
				false,
				"In such a population the majority of individuals are in their postreproductive years. Such a population is expected to decrease.");
			
				p.addAnswer(3, "a rectangle tapering toward the top",
				true,
				"Such a population is expected to have a relatively stable size.");
			
				p.addAnswer(4, "Both a pyramid and a rectangle tapering toward the top result in a population that remains stable in size.",
				false,
				"Only one of these two shapes is associated with a population that remains stable in size.");
			
				p.addAnswer(5, "Both an inverted pyramid and a rectangle tapering toward the top result in a population that remains stable in size.",
				false,
				"Only one of these two shapes is associated with a population that remains stable in size.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

