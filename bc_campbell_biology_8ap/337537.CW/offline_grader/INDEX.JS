

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "Investigation Quiz > How Are Space Rocks Analyzed for Signs of Life?";
	ak.quiz_loc_with_commas = "Investigation Quiz, How Are Space Rocks Analyzed for Signs of Life?";
	ak.quiz_title = "How Are Space Rocks Analyzed for Signs of Life?";

	
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
		
		p.id = 337538;


		
		

		
			p.question = "Explain a probable elemental analysis test you could develop to determine whether a microscopic organism collected on a rock from another planet was recently alive or died many years ago.";
			p.explanation = "";

		

		

		
			ak.addProblem(p);
		

		
	

		// ----- essay ------------
		//
		
			p = new Problem("essay");
		
		p.id = 337539;


		
		

		
			p.question = "Explain which rock(s) provide the best evidence for life on its planet of origin.";
			p.explanation = "";

		

		

		
			ak.addProblem(p);
		

		
	

		// ----- essay ------------
		//
		
			p = new Problem("essay");
		
		p.id = 337540;


		
		

		
			p.question = "Explain what you would have to do to show that the elements found on Rocks 2 and 3 came from living organisms.";
			p.explanation = "";

		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

