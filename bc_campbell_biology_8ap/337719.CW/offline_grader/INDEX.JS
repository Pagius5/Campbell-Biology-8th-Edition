

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "Investigation Quiz > What Are the Modes of Nutrition in Prokaryotes?";
	ak.quiz_loc_with_commas = "Investigation Quiz, What Are the Modes of Nutrition in Prokaryotes?";
	ak.quiz_title = "What Are the Modes of Nutrition in Prokaryotes?";

	
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
		
		p.id = 337720;


		
		

		
			p.question = "What is the fundamental difference between the nutritional needs of autotrophic and heterotrophic prokaryotes?";
			p.explanation = "";

		

		

		
			ak.addProblem(p);
		

		
	

		// ----- essay ------------
		//
		
			p = new Problem("essay");
		
		p.id = 337721;


		
		

		
			p.question = "What mode of nutrition is exhibited by this organism?";
			p.explanation = "";

		

		

		
			ak.addProblem(p);
		

		
	

		// ----- essay ------------
		//
		
			p = new Problem("essay");
		
		p.id = 337722;


		
		

		
			p.question = "Explain the mode of nutrition used by this prokaryote.";
			p.explanation = "";

		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

