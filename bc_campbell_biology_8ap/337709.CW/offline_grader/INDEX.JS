

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "Investigation Quiz > How Did Life Begin on Early Earth?";
	ak.quiz_loc_with_commas = "Investigation Quiz, How Did Life Begin on Early Earth?";
	ak.quiz_title = "How Did Life Begin on Early Earth?";

	
		ak.help_url = "../../placeholders/help_placeholder.html";
	
	ak.essay_total = 4;
	ak.pair_problem_total = 0;
	ak.pair_total = 0;
	ak.problem_total = 4;
	ak.non_essay_total = 0;
	ak.scored_item_total = 0;

	
	
	


	
	ak.copyright_date = "2008";
	ak.brandname = "Pearson Benjamin Cummings";
	ak.legal = "../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.pearsoned.com%2Flegal%2Findex.htm";


	// Loop over all problems
	
	
	

		// ----- essay ------------
		//
		
			p = new Problem("essay");
		
		p.id = 337710;


		
		

		
			p.question = "Why is it not feasible to replicate the events leading to the origins of life on Earth?";
			p.explanation = "";

		

		

		
			ak.addProblem(p);
		

		
	

		// ----- essay ------------
		//
		
			p = new Problem("essay");
		
		p.id = 337711;


		
		

		
			p.question = "What proportion of the molecules produced in the experiment are directly useful for the cellular metabolism and cell structure found in contemporary organisms, and what is the importance of this observation?";
			p.explanation = "";

		

		

		
			ak.addProblem(p);
		

		
	

		// ----- essay ------------
		//
		
			p = new Problem("essay");
		
		p.id = 337712;


		
		

		
			p.question = "Hypothesize why clay was important in the formation of life on Earth.";
			p.explanation = "";

		

		

		
			ak.addProblem(p);
		

		
	

		// ----- essay ------------
		//
		
			p = new Problem("essay");
		
		p.id = 337713;


		
		

		
			p.question = "What information is greatly lacking that prevents the solidification of a theory explaining the origins of cells similar to those existing today?";
			p.explanation = "";

		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

