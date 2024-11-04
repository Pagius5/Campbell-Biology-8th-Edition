

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "Investigation Quiz > What Is the Correct Model for DNA Replication?";
	ak.quiz_loc_with_commas = "Investigation Quiz, What Is the Correct Model for DNA Replication?";
	ak.quiz_title = "What Is the Correct Model for DNA Replication?";

	
		ak.help_url = "../../placeholders/help_placeholder.html";
	
	ak.essay_total = 5;
	ak.pair_problem_total = 0;
	ak.pair_total = 0;
	ak.problem_total = 5;
	ak.non_essay_total = 0;
	ak.scored_item_total = 0;

	
	
	


	
	ak.copyright_date = "2008";
	ak.brandname = "Pearson Benjamin Cummings";
	ak.legal = "../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.pearsoned.com%2Flegal%2Findex.htm";


	// Loop over all problems
	
	
	

		// ----- essay ------------
		//
		
			p = new Problem("essay");
		
		p.id = 337644;


		
		

		
			p.question = "Suppose you were a scientist evaluating these three models when they were first proposed. What would have been your hypothesis regarding which model was correct? Explain.";
			p.explanation = "";

		

		

		
			ak.addProblem(p);
		

		
	

		// ----- essay ------------
		//
		
			p = new Problem("essay");
		
		p.id = 337645;


		
		

		
			p.question = "Which two models have similar results after replication cycle 1?";
			p.explanation = "";

		

		

		
			ak.addProblem(p);
		

		
	

		// ----- essay ------------
		//
		
			p = new Problem("essay");
		
		p.id = 337646;


		
		

		
			p.question = "Why were culture samples taken after each replication cycle?";
			p.explanation = "";

		

		

		
			ak.addProblem(p);
		

		
	

		// ----- essay ------------
		//
		
			p = new Problem("essay");
		
		p.id = 337647;


		
		

		
			p.question = "Which model(s), if any, is ruled out by the experimental results of replication cycle 1? Explain.";
			p.explanation = "";

		

		

		
			ak.addProblem(p);
		

		
	

		// ----- essay ------------
		//
		
			p = new Problem("essay");
		
		p.id = 337648;


		
		

		
			p.question = "Which model is proved correct by the experimental results of replication cycle 2? Explain.";
			p.explanation = "";

		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

