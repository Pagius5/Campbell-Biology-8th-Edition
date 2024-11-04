

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "Investigation Quiz > What Plant Hormones Affect Organ Formation?";
	ak.quiz_loc_with_commas = "Investigation Quiz, What Plant Hormones Affect Organ Formation?";
	ak.quiz_title = "What Plant Hormones Affect Organ Formation?";

	
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
		
		p.id = 337797;


		
		

		
			p.question = "What hormone combination or combinations will initiate the process of organ formation, and what is the effect?";
			p.explanation = "";

		

		

		
			ak.addProblem(p);
		

		
	

		// ----- essay ------------
		//
		
			p = new Problem("essay");
		
		p.id = 337798;


		
		

		
			p.question = "What hormone ratios induce the formation of shoots and roots in this plant?";
			p.explanation = "";

		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

