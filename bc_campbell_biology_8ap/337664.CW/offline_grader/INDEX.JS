

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "Investigation Quiz > What Causes Infections in AIDS Patients?";
	ak.quiz_loc_with_commas = "Investigation Quiz, What Causes Infections in AIDS Patients?";
	ak.quiz_title = "What Causes Infections in AIDS Patients?";

	
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
		
		p.id = 337665;


		
		

		
			p.question = "After examining the lung tissue, describe what you would do next if you were the physician investigating this condition.";
			p.explanation = "";

		

		

		
			ak.addProblem(p);
		

		
	

		// ----- essay ------------
		//
		
			p = new Problem("essay");
		
		p.id = 337666;


		
		

		
			p.question = "Are the invading cells prokaryotic or eukaryotic? Include evidence to support your conclusion.";
			p.explanation = "";

		

		

		
			ak.addProblem(p);
		

		
	

		// ----- essay ------------
		//
		
			p = new Problem("essay");
		
		p.id = 337667;


		
		

		
			p.question = "Describe the physical nature of the cells in the nodules. What do you think may be happening? Are the nodules caused by an invading cell or the patient\'s own cells growing abnormally? List evidence that supports your diagnosis.";
			p.explanation = "";

		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

