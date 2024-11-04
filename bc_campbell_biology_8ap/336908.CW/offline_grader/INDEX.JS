

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "51: Animal Behavior > Activities Quiz";
	ak.quiz_loc_with_commas = "51: Animal Behavior, Activities Quiz";
	ak.quiz_title = "Activities Quiz";

	
		ak.help_url = "../../placeholders/help_placeholder.html";
	
	ak.essay_total = 0;
	ak.pair_problem_total = 0;
	ak.pair_total = 0;
	ak.problem_total = 3;
	ak.non_essay_total = 3;
	ak.scored_item_total = 3;

	
	
	


	
	ak.copyright_date = "2008";
	ak.brandname = "Pearson Benjamin Cummings";
	ak.legal = "../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.pearsoned.com%2Flegal%2Findex.htm";


	// Loop over all problems
	
	
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336909;


		
		

		
			
			p.question = "Which of these bee dances communicates ONLY the information that a food source is nearby? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?51&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Honeybee Waggle Dance Video</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "rumba",
				false,
				"Bees don\'t rumba.");
			
				p.addAnswer(2, "tango",
				false,
				"Bee\'s don\'t tango.");
			
				p.addAnswer(3, "round dance",
				true,
				"The round dance communicates that a food source is nearby; it does not communicate information about the distance or direction to the food source.");
			
				p.addAnswer(4, "waltz",
				false,
				"Bees don\'t waltz.");
			
				p.addAnswer(5, "waggle dance",
				false,
				"The waggle dance communicates information about the direction and distance to a food source.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336910;


		
		

		
			
			p.question = "Which of these bee dances communicates information about the direction and distance to a food source? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?51&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Honeybee Waggle Dance Video</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "rumba",
				false,
				"Bees don\'t rumba.");
			
				p.addAnswer(2, "tango",
				false,
				"Bees don\'t tango.");
			
				p.addAnswer(3, "round dance",
				false,
				"The round dance communicates that food source is nearby; it does not communicate information about the distance and direction to the food source.");
			
				p.addAnswer(4, "waltz",
				false,
				"Bees don\'t waltz.");
			
				p.addAnswer(5, "waggle dance",
				true,
				"The waggle dance communicates information about the direction and distance to a food source.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336911;


		
		

		
			
			p.question = "In the waggle dance, distance to a food source is indicated by the speed of the dance and by the _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?51&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Honeybee Waggle Dance Video</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "angle of the straight-run component of the dance",
				false,
				"The angle of the straight-run component of the waggle dance indicates the direction to a food source.");
			
				p.addAnswer(2, "number of waggles",
				true,
				"The number of waggles in a waggle dance indicates the distance (flying effort) to a food source.");
			
				p.addAnswer(3, "angle made when turning out of the straight run",
				false,
				"No, that is incorrect.");
			
				p.addAnswer(4, "diameter of the circle made by the waggle dance",
				false,
				"The diameter of the circle made by the waggle dance does not communicate information about the distance to a food source.");
			
				p.addAnswer(5, "The waggle dance does not communicate information about the distance to a food source.",
				false,
				"Yes, it does.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

