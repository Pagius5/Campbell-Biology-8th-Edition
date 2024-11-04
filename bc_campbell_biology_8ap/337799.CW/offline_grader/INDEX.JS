

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "Investigation Quiz > How Does Temperature Affect Metabolic Rate in <i>Daphnia</i>?";
	ak.quiz_loc_with_commas = "Investigation Quiz, How Does Temperature Affect Metabolic Rate in <i>Daphnia</i>?";
	ak.quiz_title = "How Does Temperature Affect Metabolic Rate in <i>Daphnia</i>?";

	
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
		
		p.id = 337800;


		
		

		
			p.question = "What were the heart rates for <i>Daphnia</i> at 10&#176;C, 20&#176;C, and 30&#176;C?";
			p.explanation = "";

		

		

		
			ak.addProblem(p);
		

		
	

		// ----- essay ------------
		//
		
			p = new Problem("essay");
		
		p.id = 337801;


		
		

		
			p.question = "Explain how the data you collected relates to ectotherm behavior.";
			p.explanation = "";

		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

