

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "Investigation Quiz > What Determines Cell Differentiation in the Sea Urchin?";
	ak.quiz_loc_with_commas = "Investigation Quiz, What Determines Cell Differentiation in the Sea Urchin?";
	ak.quiz_title = "What Determines Cell Differentiation in the Sea Urchin?";

	
		ak.help_url = "../../placeholders/help_placeholder.html";
	
	ak.essay_total = 6;
	ak.pair_problem_total = 0;
	ak.pair_total = 0;
	ak.problem_total = 6;
	ak.non_essay_total = 0;
	ak.scored_item_total = 0;

	
	
	


	
	ak.copyright_date = "2008";
	ak.brandname = "Pearson Benjamin Cummings";
	ak.legal = "../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.pearsoned.com%2Flegal%2Findex.htm";


	// Loop over all problems
	
	
	

		// ----- essay ------------
		//
		
			p = new Problem("essay");
		
		p.id = 337847;


		
		

		
			p.question = "List three possible outcomes from your transplantation experiments, using the terms \"donor\" and \"host.\"";
			p.explanation = "";

		

		

		
			ak.addProblem(p);
		

		
	

		// ----- essay ------------
		//
		
			p = new Problem("essay");
		
		p.id = 337848;


		
		

		
			p.question = "What is the purpose of transplanting PMCs from a species A donor embryo back into a species A host embryo (or transplanting PMCs from a species B donor embryo back into a species B host embryo)?";
			p.explanation = "";

		

		

		
			ak.addProblem(p);
		

		
	

		// ----- essay ------------
		//
		
			p = new Problem("essay");
		
		p.id = 337849;


		
		

		
			p.question = "Analyzing the data from all four experiments in the first set involving PMC ring position, what can you conclude? Is the ring position determined autonomously, by the PMCs themselves, or regulated by other cells? If the latter, which cells? (Note, to answer these questions, it may help to go back to the data table and classify the ring position observed in each experiment as either \"donor\" or \"host\", if you haven\'t already done so.)";
			p.explanation = "";

		

		

		
			ak.addProblem(p);
		

		
	

		// ----- essay ------------
		//
		
			p = new Problem("essay");
		
		p.id = 337850;


		
		

		
			p.question = "Analyzing the data from all four experiments in the second set involving spicule form, what can you conclude? Is the form of the spicule determined autonomously, by the PMCs themselves, or is it regulated by other cells? If the latter, which cells? (Note: Again, it will help to classify the spicule form data as either \"donor\" or \"host\" in each experiment.)";
			p.explanation = "";

		

		

		
			ak.addProblem(p);
		

		
	

		// ----- essay ------------
		//
		
			p = new Problem("essay");
		
		p.id = 337851;


		
		

		
			p.question = "Considering all the data from both sets of experiments, can you make a blanket statement about whether PMC fate and cell differentiation is determined autonomously, or is regulated by other cells? If not, what can you conclude?";
			p.explanation = "";

		

		

		
			ak.addProblem(p);
		

		
	

		// ----- essay ------------
		//
		
			p = new Problem("essay");
		
		p.id = 337852;


		
		

		
			p.question = "Given what you postulated, what would you predict about the cells in the dish? Would they form a ring, and if so, where? What form will the spicules have?";
			p.explanation = "";

		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

