

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "Investigation Quiz > How Can Frequency of Alleles Be Calculated?";
	ak.quiz_loc_with_commas = "Investigation Quiz, How Can Frequency of Alleles Be Calculated?";
	ak.quiz_title = "How Can Frequency of Alleles Be Calculated?";

	
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
		
		p.id = 337697;


		
		

		
			p.question = "What percent of this pig population is heterozygous for white coat?";
			p.explanation = "";

		

		

		
			ak.addProblem(p);
		

		
	

		// ----- essay ------------
		//
		
			p = new Problem("essay");
		
		p.id = 337698;


		
		

		
			p.question = "How many individuals out of this population of 1000 fruit flies would you expect to be homozygous for red eye color?";
			p.explanation = "";

		

		

		
			ak.addProblem(p);
		

		
	

		// ----- essay ------------
		//
		
			p = new Problem("essay");
		
		p.id = 337699;


		
		

		
			p.question = "If the frequency of two alleles in a gene pool is 90% <i>A</i> and 10% <i>a</i>, what is the frequency of individuals in the population with the genotype <i>Aa</i>?";
			p.explanation = "";

		

		

		
			ak.addProblem(p);
		

		
	

		// ----- essay ------------
		//
		
			p = new Problem("essay");
		
		p.id = 337700;


		
		

		
			p.question = "In a population that is in Hardy-Weinberg equilibrium, the frequency of the homozygous recessive genotype is 0.09. What is the frequency of individuals that are homozygous for the dominant allele?";
			p.explanation = "";

		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

