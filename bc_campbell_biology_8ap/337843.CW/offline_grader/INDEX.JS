

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "Investigation Quiz > What Might Obstruct the Male Urethra?";
	ak.quiz_loc_with_commas = "Investigation Quiz, What Might Obstruct the Male Urethra?";
	ak.quiz_title = "What Might Obstruct the Male Urethra?";

	
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
		
		p.id = 337844;


		
		

		
			p.question = "If you were the doctor, what hypothesis would you make? Explain.";
			p.explanation = "";

		

		

		
			ak.addProblem(p);
		

		
	

		// ----- essay ------------
		//
		
			p = new Problem("essay");
		
		p.id = 337845;


		
		

		
			p.question = "In this abnormal condition, what appears to be causing some obstruction of urine flow through the urethra?";
			p.explanation = "";

		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

