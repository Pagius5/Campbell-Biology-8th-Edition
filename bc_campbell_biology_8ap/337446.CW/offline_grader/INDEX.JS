

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "GraphIt! Quiz > GraphIt! Quiz > Species Area Effect and Island Biogeography";
	ak.quiz_loc_with_commas = "GraphIt! Quiz, GraphIt! Quiz, Species Area Effect and Island Biogeography";
	ak.quiz_title = "Species Area Effect and Island Biogeography";

	
		ak.help_url = "../../placeholders/help_placeholder.html";
	
	ak.essay_total = 0;
	ak.pair_problem_total = 0;
	ak.pair_total = 0;
	ak.problem_total = 5;
	ak.non_essay_total = 5;
	ak.scored_item_total = 5;

	
	
	


	
	ak.copyright_date = "2008";
	ak.brandname = "Pearson Benjamin Cummings";
	ak.legal = "../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.pearsoned.com%2Flegal%2Findex.htm";


	// Loop over all problems
	
	
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 337447;


		
		

		
			
			p.question = "Which of the following statements best describes the trend in the species versus island area data?";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 0;
			p.correct_expls_flag = 0;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "The number of species on an island increases by roughly 30 for every 5000-square-mile increase in land area.",
				false,
				"");
			
				p.addAnswer(2, "The increase in number of species with increasing land area slows for larger islands, suggesting that there may be a maximum number of species an island can hold regardless of size.",
				true,
				"");
			
				p.addAnswer(3, "There is a decreasing trend in species number as island size increases.",
				false,
				"");
			
				p.addAnswer(4, "There is no detectable influence of island size on number of species.",
				false,
				"");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 337448;


		
		

		
			
			p.question = "Roughly five orders of magnitude separate the smallest and largest islands on the log plot. How many orders of magnitude separate them on the standard plot?";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 0;
			p.correct_expls_flag = 0;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "1",
				false,
				"");
			
				p.addAnswer(2, "2",
				false,
				"");
			
				p.addAnswer(3, "5",
				true,
				"");
			
				p.addAnswer(4, "10",
				false,
				"");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 337449;


		
		

		
			
			p.question = "If another island were present in the Caribbean that was about 1000 square miles in size, how many species of amphibians and reptiles would you expect to find on it? Choose the most likely number from the options below.";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 0;
			p.correct_expls_flag = 0;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "90",
				false,
				"");
			
				p.addAnswer(2, "19",
				true,
				"");
			
				p.addAnswer(3, "9",
				false,
				"");
			
				p.addAnswer(4, "5",
				false,
				"");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 337450;


		
		

		
			
			p.question = "Adjust the immigration rate curve so that its maximum value (on the Y-axis) is 4. Adjust the extinction curve so that its maximum is 2. Choose the number below that is closest to the predicted number of species on this island.";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 0;
			p.correct_expls_flag = 0;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "40",
				false,
				"");
			
				p.addAnswer(2, "75",
				false,
				"");
			
				p.addAnswer(3, "25",
				false,
				"");
			
				p.addAnswer(4, "60",
				true,
				"");
			
				p.addAnswer(5, "50",
				false,
				"");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 337451;


		
		

		
			
			p.question = "Imagine a chain of islands of the same size that are at increasing distances from a mainland. The immigration rate should be highest for islands close to the mainland because they should receive the most colonizers. The extinction rate should be the same for all these islands. Use the equilibrium model of island biogeography to predict how the number of species on an island changes with distance from a mainland. Select the statement below that best represents your prediction.";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 0;
			p.correct_expls_flag = 0;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "The number of species increases as island size increases.",
				false,
				"");
			
				p.addAnswer(2, "The number of species decreases with distance from the mainland.",
				true,
				"");
			
				p.addAnswer(3, "The number of species increases with distance from the mainland.",
				false,
				"");
			
				p.addAnswer(4, "Immigration and extinction rates balance out so that there is no change in species number with distance from the mainland.",
				false,
				"");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

