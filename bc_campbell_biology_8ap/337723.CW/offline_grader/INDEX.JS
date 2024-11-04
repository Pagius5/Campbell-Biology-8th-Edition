

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "Investigation Quiz > What Kinds of Protists Do Various Habitats Support?";
	ak.quiz_loc_with_commas = "Investigation Quiz, What Kinds of Protists Do Various Habitats Support?";
	ak.quiz_title = "What Kinds of Protists Do Various Habitats Support?";

	
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
		
		p.id = 337724;


		
		

		
			p.question = "Why do you think that methods of obtaining nutrition and methods of movement are often used by biologists to classify protists?";
			p.explanation = "";

		

		

		
			ak.addProblem(p);
		

		
	

		// ----- essay ------------
		//
		
			p = new Problem("essay");
		
		p.id = 337725;


		
		

		
			p.question = "What informal term seems to apply best to this organism: protozoan, slime mold, unicellular algae, or seaweed? Explain.";
			p.explanation = "";

		

		

		
			ak.addProblem(p);
		

		
	

		// ----- essay ------------
		//
		
			p = new Problem("essay");
		
		p.id = 337726;


		
		

		
			p.question = "What informal term seems to apply best to this organism: protozoan, slime mold, unicellular algae, or seaweed? Explain.";
			p.explanation = "";

		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

