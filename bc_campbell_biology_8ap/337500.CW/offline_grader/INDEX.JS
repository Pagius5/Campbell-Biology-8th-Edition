

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "GraphIt! Quiz > GraphIt! Quiz > Prospects for Renewable Energy";
	ak.quiz_loc_with_commas = "GraphIt! Quiz, GraphIt! Quiz, Prospects for Renewable Energy";
	ak.quiz_title = "Prospects for Renewable Energy";

	
		ak.help_url = "../../placeholders/help_placeholder.html";
	
	ak.essay_total = 0;
	ak.pair_problem_total = 0;
	ak.pair_total = 0;
	ak.problem_total = 6;
	ak.non_essay_total = 6;
	ak.scored_item_total = 6;

	
	
	


	
	ak.copyright_date = "2008";
	ak.brandname = "Pearson Benjamin Cummings";
	ak.legal = "../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.pearsoned.com%2Flegal%2Findex.htm";


	// Loop over all problems
	
	
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 337501;


		
		

		
			
			p.question = "By how much would solar have to grow to match the current level of hydroelectric power?";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 0;
			p.correct_expls_flag = 0;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "about 2 times",
				false,
				"");
			
				p.addAnswer(2, "about 50 times",
				true,
				"");
			
				p.addAnswer(3, "about 100 times",
				false,
				"");
			
				p.addAnswer(4, "about 10 times",
				false,
				"");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 337502;


		
		

		
			
			p.question = "Which source represents 32% of renewables?";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 0;
			p.correct_expls_flag = 0;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "wind",
				false,
				"");
			
				p.addAnswer(2, "tide",
				false,
				"");
			
				p.addAnswer(3, "geothermal",
				false,
				"");
			
				p.addAnswer(4, "solar",
				false,
				"");
			
				p.addAnswer(5, "none of them",
				true,
				"");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 337503;


		
		

		
			
			p.question = "Wind currently represents 0.02% of all energy sources. If the current rate of growth maintains, what proportion will it represent in two years?";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 0;
			p.correct_expls_flag = 0;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "4%",
				false,
				"");
			
				p.addAnswer(2, "20%",
				false,
				"");
			
				p.addAnswer(3, ".02%",
				false,
				"");
			
				p.addAnswer(4, ".045%",
				true,
				"");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 337504;


		
		

		
			
			p.question = "Do you expect these rates to be higher or lower over the next 30-year period (2000 to 2030)?";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 0;
			p.correct_expls_flag = 0;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "These growth rates are relative to small absolute numbers. They will most likely decrease as the total contribution by renewables increases.",
				true,
				"");
			
				p.addAnswer(2, "These growth rates will likely stay the same or grow as interest in renewables increases.",
				false,
				"");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 337505;


		
		

		
			
			p.question = "Which projection has nonrenewables at less than 50% by 2050?";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 0;
			p.correct_expls_flag = 0;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "projection 1",
				false,
				"");
			
				p.addAnswer(2, "projection 2",
				false,
				"");
			
				p.addAnswer(3, "both projections",
				false,
				"");
			
				p.addAnswer(4, "neither projection",
				true,
				"");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 337506;


		
		

		
			
			p.question = "Assume depletion of nonrenewables requires renewables (excluding combustibles and waste) to account for more than 30% by 2040. What growth rates of renewables must be achieved and by when?";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 0;
			p.correct_expls_flag = 0;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "more than 15% annual growth rate by 2025",
				false,
				"");
			
				p.addAnswer(2, "more than 15% growth rate starting immediately",
				true,
				"");
			
				p.addAnswer(3, "Current growth rates are sufficient to meet this goal.",
				false,
				"");
			
				p.addAnswer(4, "more than 5% annual growth rate by 2025",
				false,
				"");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

