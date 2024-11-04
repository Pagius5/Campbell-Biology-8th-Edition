

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "Investigation Quiz > How Is Phylogeny Determined by Comparing Proteins?";
	ak.quiz_loc_with_commas = "Investigation Quiz, How Is Phylogeny Determined by Comparing Proteins?";
	ak.quiz_title = "How Is Phylogeny Determined by Comparing Proteins?";

	
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
		
		p.id = 337715;


		
		

		
			p.question = "Explain the type of mutations that most likely accounts for gradual changes in the amino acid sequences of similar proteins in different organisms.";
			p.explanation = "";

		

		

		
			ak.addProblem(p);
		

		
	

		// ----- essay ------------
		//
		
			p = new Problem("essay");
		
		p.id = 337716;


		
		

		
			p.question = "What conclusions can you make about the origins of the bacterial contamination for the three restaurants?";
			p.explanation = "";

		

		

		
			ak.addProblem(p);
		

		
	

		// ----- essay ------------
		//
		
			p = new Problem("essay");
		
		p.id = 337717;


		
		

		
			p.question = "Why does the tryptophan synthetase A amino acid sequence differ between bacteria on hamburgers 1 and 2 if the bacteria are from the same origin?";
			p.explanation = "";

		

		

		
			ak.addProblem(p);
		

		
	

		// ----- essay ------------
		//
		
			p = new Problem("essay");
		
		p.id = 337718;


		
		

		
			p.question = "What other types of testing can be done to confirm with little doubt the origin of the food contamination?";
			p.explanation = "";

		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

