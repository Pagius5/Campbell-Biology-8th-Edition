

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "Investigation Quiz > How Do Temperature and Light Affect Primary Production?";
	ak.quiz_loc_with_commas = "Investigation Quiz, How Do Temperature and Light Affect Primary Production?";
	ak.quiz_title = "How Do Temperature and Light Affect Primary Production?";

	
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
		
		p.id = 337888;


		
		

		
			p.question = "Which environment has the greater concentration of dissolved oxygen: salt water or fresh water?";
			p.explanation = "";

		

		

		
			ak.addProblem(p);
		

		
	

		// ----- essay ------------
		//
		
			p = new Problem("essay");
		
		p.id = 337889;


		
		

		
			p.question = "Which environment has the greater concentration of dissolved oxygen: warm water (31&#176;C) or cool water (18&#176;C)?";
			p.explanation = "";

		

		

		
			ak.addProblem(p);
		

		
	

		// ----- essay ------------
		//
		
			p = new Problem("essay");
		
		p.id = 337890;


		
		

		
			p.question = "Which environment has the greater concentration of dissolved oxygen: a clear pond or a pond with a heavy algal mat? Explain.";
			p.explanation = "";

		

		

		
			ak.addProblem(p);
		

		
	

		// ----- essay ------------
		//
		
			p = new Problem("essay");
		
		p.id = 337891;


		
		

		
			p.question = "Based on the graph, at what light intensity do you expect no net primary production?";
			p.explanation = "";

		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

