

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "Investigation Quiz > How Is the Rate of Enzyme Catalysis Measured?";
	ak.quiz_loc_with_commas = "Investigation Quiz, How Is the Rate of Enzyme Catalysis Measured?";
	ak.quiz_title = "How Is the Rate of Enzyme Catalysis Measured?";

	
		ak.help_url = "../../placeholders/help_placeholder.html";
	
	ak.essay_total = 2;
	ak.pair_problem_total = 0;
	ak.pair_total = 0;
	ak.problem_total = 2;
	ak.non_essay_total = 0;
	ak.scored_item_total = 0;

	
	
	


	
	ak.copyright_date = "2008";
	ak.brandname = "Pearson Benjamin Cummings";
	ak.legal = "../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.pearsoned.com%2Flegal%2Findex.htm";


	// Loop over all problems
	
	
	

		// ----- essay ------------
		//
		
			p = new Problem("essay");
		
		p.id = 337582;


		
		

		
			p.question = "During which interval is the enzyme working at its maximum rate: 0-60 seconds, 60-120 seconds, 120-180 seconds, or over the entire time course? Explain.";
			p.explanation = "";

		

		

		
			ak.addProblem(p);
		

		
	

		// ----- essay ------------
		//
		
			p = new Problem("essay");
		
		p.id = 337583;


		
		

		
			p.question = "In order to keep the rate constant over the entire time course, what should be added: more enzyme or more substrate? Explain.";
			p.explanation = "";

		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

