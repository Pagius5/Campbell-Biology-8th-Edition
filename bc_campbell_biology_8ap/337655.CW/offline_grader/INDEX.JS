

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "Investigation Quiz > How Do You Design a Gene Expression System?";
	ak.quiz_loc_with_commas = "Investigation Quiz, How Do You Design a Gene Expression System?";
	ak.quiz_title = "How Do You Design a Gene Expression System?";

	
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
		
		p.id = 337656;


		
		

		
			p.question = "Explain the role of the promoter in eukaryotes.";
			p.explanation = "";

		

		

		
			ak.addProblem(p);
		

		
	

		// ----- essay ------------
		//
		
			p = new Problem("essay");
		
		p.id = 337657;


		
		

		
			p.question = "What is the best DNA segment arrangement to get successful expression of eukaryotic genes?";
			p.explanation = "";

		

		

		
			ak.addProblem(p);
		

		
	

		// ----- essay ------------
		//
		
			p = new Problem("essay");
		
		p.id = 337658;


		
		

		
			p.question = "What can you conclude about the aldehyde reductase promoter from your research data?";
			p.explanation = "";

		

		

		
			ak.addProblem(p);
		

		
	

		// ----- essay ------------
		//
		
			p = new Problem("essay");
		
		p.id = 337659;


		
		

		
			p.question = "Develop a hypothesis that explains why bi-directional promoters such as the aldehyde reductase promoters are more common in eukaryotes than prokaryotes.";
			p.explanation = "";

		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

