

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "Investigation Quiz > How Is the Rate of Cellular Respiration Measured?";
	ak.quiz_loc_with_commas = "Investigation Quiz, How Is the Rate of Cellular Respiration Measured?";
	ak.quiz_title = "How Is the Rate of Cellular Respiration Measured?";

	
		ak.help_url = "../../placeholders/help_placeholder.html";
	
	ak.essay_total = 3;
	ak.pair_problem_total = 0;
	ak.pair_total = 0;
	ak.problem_total = 3;
	ak.non_essay_total = 0;
	ak.scored_item_total = 0;

	
	
	


	
	ak.copyright_date = "2008";
	ak.brandname = "Pearson Benjamin Cummings";
	ak.legal = "../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.pearsoned.com%2Flegal%2Findex.htm";


	// Loop over all problems
	
	
	

		// ----- essay ------------
		//
		
			p = new Problem("essay");
		
		p.id = 337585;


		
		

		
			p.question = "Compare the amounts of oxygen consumed by germinating corn seeds at 22&#176;C and 12&#176;C.   ";
			p.explanation = "";

		

		

		
			ak.addProblem(p);
		

		
	

		// ----- essay ------------
		//
		
			p = new Problem("essay");
		
		p.id = 337586;


		
		

		
			p.question = "What is the rate of oxygen consumption in germinating corn seeds at 12&#176;C?";
			p.explanation = "";

		

		

		
			ak.addProblem(p);
		

		
	

		// ----- essay ------------
		//
		
			p = new Problem("essay");
		
		p.id = 337587;


		
		

		
			p.question = "How does temperature affect respiration in germinating and nongerminating corn seeds?";
			p.explanation = "";

		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

