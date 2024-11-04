

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "23: The Evolution of Populations > Practice Test";
	ak.quiz_loc_with_commas = "23: The Evolution of Populations, Practice Test";
	ak.quiz_title = "Practice Test";

	
		ak.help_url = "../../placeholders/help_placeholder.html";
	
	ak.essay_total = 0;
	ak.pair_problem_total = 0;
	ak.pair_total = 0;
	ak.problem_total = 36;
	ak.non_essay_total = 36;
	ak.scored_item_total = 36;

	
	
	


	
	ak.copyright_date = "2008";
	ak.brandname = "Pearson Benjamin Cummings";
	ak.legal = "../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.pearsoned.com%2Flegal%2Findex.htm";


	// Loop over all problems
	
	
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335452;


		
		

		
			
			p.question = "In the context of populations, how do we define evolution? (<script type=\"text/javascript\">ebook(\'23OV\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Evolution is a change in a population\'s allelic frequencies over generations",
				true,
				"Correct. This is the definition of microevolution, which focuses on evolutionary change in populations.");
			
				p.addAnswer(2, "Evolution is the tendency for some individuals in a population to leave more offspring than others",
				false,
				"No. This tendency was one of Darwin\'s major inferences.");
			
				p.addAnswer(3, "Evolution is the way in which sexual reproduction can rapidly spread advantageous traits throughout a population",
				false,
				"No. Sexual reproduction is not necessary for populations to evolve.");
			
				p.addAnswer(4, "Evolution is the explanation for how organic molecules formed from inorganic molecules.",
				false,
				"No. Abiotic synthesis is the explanation of how organic molecules formed from inorganic molecules.");
			
				p.addAnswer(5, "Evolution is always caused by natural selection.",
				false,
				"No. Gene flow and genetic drift can have significant effects on allele frequencies from generation to generation.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335453;


		
		

		
			
			p.question = "Which of the following mechanisms can alter allele frequencies? (<script type=\"text/javascript\">ebook(\'23OV\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "genetic drift",
				false,
				"No. This is one mechanism for altering allele frequencies, but there is a better answer.");
			
				p.addAnswer(2, "natural selection",
				false,
				"No. This is one mechanism for altering allele frequencies, but there is a better answer.");
			
				p.addAnswer(3, "gene flow",
				false,
				"No. This is one mechanism for altering allele frequencies, but there is a better answer.");
			
				p.addAnswer(4, "all of the above",
				true,
				"Correct. Natural selection, gene flow, and genetic drift can all cause microevolution");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. There is a correct answer.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335454;


		
		

		
			
			p.question = "Which example below correctly describes average heterozygosity? (<script type=\"text/javascript\">ebook(\'2301\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Average heterozygosity refers to the number of individuals in a population that are heterozygous for a certain trait.",
				false,
				"No. Average heterozygosity does not look at certain traits, but rather at the average number of traits that have two alleles.");
			
				p.addAnswer(2, "Average heterozygosity is measured by comparing the nucleotide sequences of DNA samples, and then averaging the data from the comparison.",
				false,
				"No. This statement describes nucleotide variability.");
			
				p.addAnswer(3, "Average heterozygosity is usually less than the average difference between nucleotide sequences.",
				false,
				"No. The opposite is true. A gene can consist of thousands of bases of DNA. A difference at only one of these bases is sufficient to make two alleles of that gene different and count toward heterozygosity.");
			
				p.addAnswer(4, "Average heterozygosity refers to the average percentage of loci that are heterozygous in a population.",
				true,
				"Correct. Researchers use average heterozygosity to measure the number of polymorphisms in a population.");
			
				p.addAnswer(5, "Average heterozygosity is measured by looking at changes in karyotypes.",
				false,
				"No. Average heterozygosity is concerned with the number loci with more than one allele, not with chromosome number.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335455;


		
		

		
			
			p.question = "The human genome consists of approximately 3 billion base pairs. If humans typically differ from one another by about 3 million base pairs, what is the nucleotide variability of <i>Homo sapiens</i>? (<script type=\"text/javascript\">ebook(\'2301\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "10%",
				false,
				"No. Check your math.");
			
				p.addAnswer(2, "1%",
				false,
				"No. Check your math.");
			
				p.addAnswer(3, "50%",
				false,
				"No. Check your math.");
			
				p.addAnswer(4, "3%",
				false,
				"No. Check your math.");
			
				p.addAnswer(5, "0.1%",
				true,
				"Correct. Nucleotide variability in humans is about 0.1%, indicating that <i>Homo sapiens</i> is a fairly young species.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335456;


		
		

		
			
			p.question = "Which example below would most likely be a cline? (<script type=\"text/javascript\">ebook(\'2301\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Individuals who are heterozygotic for the sickle-cell disease allele have a greater resistance to malaria.",
				false,
				"No. This is an example of heterozygote advantage.");
			
				p.addAnswer(2, "Rabbits that live in colder regions tend to have smaller ears than rabbits of the same species that live in warmer regions.",
				true,
				"Correct. A cline is a graded change in a trait along a geographic axis.");
			
				p.addAnswer(3, "Male bowerbirds decorate stations to attract females.",
				false,
				"No. This is an example of sexual selection.");
			
				p.addAnswer(4, "Cows are selectively bred to gain a higher milk yield.",
				false,
				"No. This is an example of artificial selection.");
			
				p.addAnswer(5, "Seals have flippers that make them great swimmers but make their movements on rocks and land very cumbersome.",
				false,
				"No. This is an example of the imperfect work of natural selection. Adaptations are often compromises.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335457;


		
		

		
			
			p.question = "New alleles originate from _____. (<script type=\"text/javascript\">ebook(\'2301\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "natural selection",
				false,
				"No. Natural selection leads to adaptation, but it is not the origin of genetic variation.");
			
				p.addAnswer(2, "genetic drift",
				false,
				"No. This just leads to a change in the frequency of alleles in a gene pool.");
			
				p.addAnswer(3, "sexual recombination",
				false,
				"No. This is not the origin of variation, but a recombination of available alleles.");
			
				p.addAnswer(4, "the environment",
				false,
				"No. The environment elicits adaptation but not genetic variation.");
			
				p.addAnswer(5, "mutation",
				true,
				"Correct. Although mutations most often do not result in favorable adaptations, they are the primary way that new alleles come about.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335458;


		
		

		
			
			p.question = "Sexual recombination includes the shuffling of chromosomes in _____ and fertilization. (<script type=\"text/javascript\">ebook(\'2301\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "mitosis",
				false,
				"No. Chromosomes are duplicated but not shuffled in mitosis.");
			
				p.addAnswer(2, "genetic drift",
				false,
				"No. This is the random change in a small gene pool.");
			
				p.addAnswer(3, "natural selection",
				false,
				"No. Natural selection refers to an organism\'s reproductive success.");
			
				p.addAnswer(4, "mutation",
				false,
				"No. Mutation is the ultimate source of genetic variation, but it has nothing to do with sexual recombination.");
			
				p.addAnswer(5, "meiosis",
				true,
				"Correct. Sexual recombination occurs with the crossing over and independent assortment of chromosomes.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335459;


		
		

		
			
			p.question = "Which type of mutation plays the most important role in increasing the number of genes in the gene pool? (<script type=\"text/javascript\">ebook(\'2302\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Mutations are so rare that there are no mutations that can have such an important effect.",
				false,
				"No. This is true but it is not the best answer Mutations are the ultimate source of genetic variation.");
			
				p.addAnswer(2, "duplication",
				true,
				"Correct. Gene duplication is an important source of new genetic material.");
			
				p.addAnswer(3, "point mutation",
				false,
				"No. Since the genetic code is redundant, even point mutations in genes that code for proteins may have little effect because they do not alter the amino acid composition. The chances are slight that such a mutation would have a profound effect on an organism.");
			
				p.addAnswer(4, "rearrangement of gene loci",
				false,
				"No. Such a mutation would most likely be harmful, and it does not generate new genetic material.");
			
				p.addAnswer(5, "changes in nucleotide sequence",
				false,
				"No. This is true but it is not the best answer, as it describes the result of any type of mutation.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335460;


		
		

		
			
			p.question = "In a large population of randomly breeding organisms, the frequency of a recessive allele is initially 0.3. There is no migration and no selection. Humans enter this ecosystem and selectively hunt individuals showing the dominant trait. When the gene frequency is reexamined at the end of the year, _____. (<script type=\"text/javascript\">ebook(\'2302\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the frequency of the homozygous dominants will go down, the frequency of the heterozygous genotype will go up, and the frequency of the homozygous recessives will remain the same",
				false,
				"No. Heterozygotes express the dominant trait.");
			
				p.addAnswer(2, "the frequency of the homozygous dominants will go down, the frequency of the heterozygous genotype will remain the same, and the frequency of the homozygous recessives will go up",
				false,
				"No. Heterozygotes express the dominant trait.");
			
				p.addAnswer(3, "the frequency of the homozygous dominants will go up, the frequency of the heterozygous genotype will go down, and the frequency of the homozygous recessives will go down",
				false,
				"No. Dominants are being selected against.");
			
				p.addAnswer(4, "the frequency of the homozygous dominants will go up, the frequency of the heterozygous genotype will go down, and the frequency of the homozygous recessives will go up",
				false,
				"No. Dominants are being selected against.");
			
				p.addAnswer(5, "the frequency of the individuals who express the dominant phenotype will go down and the frequency of homozygous recessive individuals will go up",
				true,
				"Correct. The frequency of individuals who express the dominant phenotype should decline, and the proportion of individuals who express the recessive phenotype (homozygous recessives) should increase.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335461;


		
		

		
			
			p.question = "In the Hardy-Weinberg equation, <i>p</i><sup>2</sup> represents _____. (<script type=\"text/javascript\">ebook(\'2302\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the total alleles in the gene pool",
				false,
				"No. The total number of alleles in the gene pool depends on the number of individuals in the population.");
			
				p.addAnswer(2, "the frequency of heterozygous dominant individuals in the population",
				false,
				"No. Heterozygotes are represented by 2<i>pq</i>.");
			
				p.addAnswer(3, "the frequency of homozygous recessive individuals in the population",
				false,
				"No. The frequency of homozygous recessives is <i>q</i><sup>2</sup>");
			
				p.addAnswer(4, "all of the possible phenotypes in the gene pool",
				false,
				"No. There are no phenotypes in a gene pool. The gene pool refers to the alleles in a population while phenotypes refer to the expression of those alleles.");
			
				p.addAnswer(5, "the expected frequency of homozygous dominant individuals in the population",
				true,
				"Correct. <i>p</i> = the frequency of the dominant allele (<i>A</i>); thus <i>p</i><sup>2</sup> represents the frequency of homozygous dominant individuals (<i>AA</i>: <i>p</i> x<i> p</i> = <i>p</i><sup>2</sup>).");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335462;


		
		

		
			
			p.question = "In a large population of bonobos, the frequency of the recessive allele is initially 0.1. There is no migration and no selection. What is the frequency of the dominant allele? Assume that there are two alleles of this gene. (<script type=\"text/javascript\">ebook(\'2302\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "10%",
				false,
				"No. <i>p</i> (the frequency of the dominant allele) = 1- <i>q</i> (the frequency of the recessive allele), or 0.9.");
			
				p.addAnswer(2, "20%",
				false,
				"No. <i>p</i> (the frequency of the dominant allele) = 1- <i>q</i> (the frequency of the recessive allele), or 0.9.");
			
				p.addAnswer(3, "50%",
				false,
				"No. <i>p</i> (the frequency of the dominant allele) = 1- <i>q</i> (the frequency of the recessive allele), or 0.9.");
			
				p.addAnswer(4, "90%",
				true,
				"Correct. <i>p</i> (the frequency of the dominant allele) = 1- <i>q</i> (the frequency of the recessive allele), or 0.9.");
			
				p.addAnswer(5, "99%",
				false,
				"No. <i>p</i> (the frequency of the dominant allele) = 1- <i>q</i> (the frequency of the recessive allele), or 0.9.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335463;


		
		

		
			
			p.question = "In a population in Hardy-Weinberg equilibrium, 1% of the individuals in a population show the recessive trait of a certain characteristic. In this situation, what is the value of <i>p</i>? (<script type=\"text/javascript\">ebook(\'2302\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "99%",
				false,
				"No. This would be the percentage of individuals who show the dominant trait.");
			
				p.addAnswer(2, "0.81",
				false,
				"No. This would be the value of <i>p</i><sup>2</sup>.");
			
				p.addAnswer(3, "0.9",
				true,
				"Correct. In this equation <i>q</i><sup>2</sup> = .01, <i>q</i> = 0.1, 1 - 0.1 = <i>p</i>");
			
				p.addAnswer(4, "0.18",
				false,
				"No. This is the value of 2<i>pq</i>.");
			
				p.addAnswer(5, "The answer cannot be determined from the information given.",
				false,
				"No. One of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335464;


		
		

		
			
			p.question = "In the equation for Hardy-Weinberg equilibrium, 1 represents _____. (<script type=\"text/javascript\">ebook(\'2302\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the sum of the frequencies of the genotypes for a particular gene locus",
				true,
				"Correct. The sum of the frequencies of the genotypes must equal 1 in any population.");
			
				p.addAnswer(2, "the frequency of heterozygous individuals in the populations",
				false,
				"No. In a situation in which there are only two alleles of a gene, the 2<i>pq</i> term in the equation for Hardy-Weinberg equilibrium represents the frequency of heterozygotes.");
			
				p.addAnswer(3, "the frequency of homozygous recessive individuals in the population",
				false,
				"No. In a situation in which there are only two alleles of a gene, <i>q</i><sup>2</sup> represents the frequency of homozygous recessive individuals.");
			
				p.addAnswer(4, "all the possible phenotypes in the population",
				false,
				"No. The Hardy-Weinberg equation is concerned with genotype, not phenotypes.");
			
				p.addAnswer(5, "the frequency of homozygous dominant individuals in the population",
				false,
				"No. In a situation in which there are only two alleles of a gene, <i>p</i><sup>2</sup> represents the frequency of homozygous dominant individuals.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335465;


		
		

		
			
			p.question = "Approximately 1 out of every 2,500 Caucasians in the United States is born with the recessive disease cystic fibrosis. According to the Hardy-Weinberg equilibrium equation, approximately how many people are carriers? (<script type=\"text/javascript\">ebook(\'2302\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "about 1 in 50",
				false,
				"No. You forgot that the number of hybrids is 2<i>pq</i>, not <i>pq</i>.");
			
				p.addAnswer(2, "about 96 in 100",
				false,
				"No. This would be the answer if the allele for cystic fibrosis were dominant.");
			
				p.addAnswer(3, "about 1 in 25",
				true,
				"Correct. If <i>q</i><sup>2</sup> equals 1/2,500, then <i>q</i> equals 1/50, <i>p</i> equals 49/50, and 2<i>pq</i> equals approximately 1/25.");
			
				p.addAnswer(4, "about 1 in 10",
				false,
				"No. You are not using the Hardy-Weinberg equation.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the other answers is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335466;


		
		

		
			
			p.question = "In a certain group of African people, 4% are born with sickle-cell disease (homozygous recessive). If this group is in Hardy-Weinberg equilibrium, what percentage of the group has the selective advantage of being more resistant to malaria (heterozygous) than those individuals who are homozygous for normal hemoglobin or for sickle-cell disease? (<script type=\"text/javascript\">ebook(\'2302\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "2%",
				false,
				"No. This is the frequency of the recessive allele.");
			
				p.addAnswer(2, "4%",
				false,
				"No. This is the frequency of homozygous recessive individuals.");
			
				p.addAnswer(3, "8%",
				false,
				"No. This is the frequency of the dominant allele.");
			
				p.addAnswer(4, "16%",
				false,
				"No. Since this is <i>pq</i>, you are close to the solution.");
			
				p.addAnswer(5, "32%",
				true,
				"Correct. The 4% born with sickle-cell disease are homozygous for the sickle hemoglobin allele, so <i>q</i><sup>2</sup> = 0.04 and <i>q</i> = 0.2. Since <i>p</i> = 1 - <i>q</i>, <i>p</i> = 0.8. The heterozygotes would be equal to 2<i>pq</i>, or 0.32.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335467;


		
		

		
			
			p.question = "Assume a population in Hardy-Weinberg equilibrium for a character trait with these genotypic frequencies: <i>AA</i> = 0.25, <i>Aa</i> = 0.50, and <i>aa</i> = 0.25. If you remove all the homozygous dominants and allow the remaining population to reproduce (again under Hardy-Weinberg conditions), what will be the frequency of homozygous dominants in the next generation? (<script type=\"text/javascript\">ebook(\'2302\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "0",
				false,
				"No. Homozygous dominant individuals will exist in the population.");
			
				p.addAnswer(2, "0.11",
				true,
				"Correct. The new frequencies of the three genotypes are: <i>AA</i> = 0, <i>Aa</i> = 0.66, and <i>aa</i> = 0.33. If there were 100 individuals (carrying 200 alleles), 66/200 alleles would be <i>A</i> and <i>p</i> = 0.33. The frequency of homozygous dominant individuals would then be <i>p</i><sup>2</sup>, or 0.11.");
			
				p.addAnswer(3, "0.22",
				false,
				"No. Review the Hardy-Weinberg equation.");
			
				p.addAnswer(4, "0.44",
				false,
				"No. Review the Hardy-Weinberg equation.");
			
				p.addAnswer(5, "0.50",
				false,
				"No. Review the Hardy-Weinberg equation.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335468;


		
		

		
			
			p.question = "Which of the following sets of conditions is required for Hardy-Weinberg equilibrium? (<script type=\"text/javascript\">ebook(\'2302\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "a large population, no mutations, and natural selection",
				false,
				"No. A population in which natural selection is acting is not in Hardy-Weinberg equilibrium.");
			
				p.addAnswer(2, "a large population, random mutations, and no migration of alleles in or out of the population",
				false,
				"No. Mutations would negate Hardy-Weinberg equilibrium.");
			
				p.addAnswer(3, "no mutations, sexual selection, and no natural selection",
				false,
				"No. Hardy-Weinberg equilibrium requires random mating. A population with sexual selection would not be randomly mating.");
			
				p.addAnswer(4, "random mating, no natural selection, and a large population",
				true,
				"Correct. These three conditions, along with no mutations and no movement of alleles into or out of the population, are required for Hardy-Weinberg equilibrium.");
			
				p.addAnswer(5, "random mating, a small population, and no mutations",
				false,
				"No. A small population would alter Hardy-Weinberg equilibrium.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335469;


		
		

		
			
			p.question = "_____ and _____ generate variation, while _____ results in an adaptation to the environment. (<script type=\"text/javascript\">ebook(\'2302\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Genetic drift; natural selection; mutation",
				false,
				"No. Genetic drift and natural selection cause changes in the frequency of alleles in the gene pool. They do not result in genetic variation. Mutations do not usually result in adaptation to the environment.");
			
				p.addAnswer(2, "Mutation; sexual recombination; natural selection",
				true,
				"Correct. Mutation is the original source of variation, and sexual recombination causes new combinations of existing alleles. Natural selection results in favorable characteristics being passed on to the next generation.");
			
				p.addAnswer(3, "Overproduction of offspring; mutation; sexual recombination",
				false,
				"No. Although mutation results in genetic variation, overproduction does not.");
			
				p.addAnswer(4, "Natural selection; mutation; sexual recombination",
				false,
				"No. Although mutation results in genetic variation, natural selection does not.");
			
				p.addAnswer(5, "Sexual recombination; natural selection; overproduction",
				false,
				"No. Although sexual recombination results in genetic variation, natural selection does not.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335470;


		
		

		
			
			p.question = "A population of 15 birds inhabits a fairly new island. Ten of the birds are dark brown and five of them are light brown. By chance, two of the dark brown birds and three of the light brown birds die before producing any offspring. All of the birds in the next generation are dark brown. This change in phenotypic frequency can be attributed to _____. (<script type=\"text/javascript\">ebook(\'2303\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "natural selection",
				false,
				"No. There is no evidence that the birds\' color affected their fitness.");
			
				p.addAnswer(2, "genetic drift",
				true,
				"Correct. In small populations, allele frequencies can fluctuate indeterminately.");
			
				p.addAnswer(3, "gene flow",
				false,
				"No. This refers to the genetic exchange between populations. In this example, there is only one population.");
			
				p.addAnswer(4, "disruptive selection",
				false,
				"No. There is no evidence that the birds\' color affected their fitness.");
			
				p.addAnswer(5, "a cline",
				false,
				"No. A cline is a graded change in a trait along a geographic axis.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335471;


		
		

		
			
			p.question = "An earthquake hits a small island. All but a small group of closely related lizards are eliminated, and the survivors spread out over the island. This is an instance of _____. (<script type=\"text/javascript\">ebook(\'2303\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "founder effect",
				false,
				"No. The founder effect would occur if a small group of lizards migrated to the island.");
			
				p.addAnswer(2, "bottleneck effect",
				true,
				"Correct. This is a description of the bottleneck effect.");
			
				p.addAnswer(3, "gene flow",
				false,
				"No. Gene flow would occur if lizards migrated in and out of the population.");
			
				p.addAnswer(4, "mutation",
				false,
				"No. There are no mutations described here.");
			
				p.addAnswer(5, "nonrandom mating",
				false,
				"No. One can assume random mating unless otherwise stated.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335472;


		
		

		
			
			p.question = "Which of the following scenarios would most likely result in the microevolution of a population of humans? (<script type=\"text/javascript\">ebook(\'2303\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Only random mating takes place among all the people that reproduce in North America.",
				false,
				"No. That would decrease the possibility of microevolution in that population.");
			
				p.addAnswer(2, "A colony of humans on the moon is isolated from Earth.",
				true,
				"Correct. Genetic drift (the founder effect) could occur.");
			
				p.addAnswer(3, "The incidence of skin cancer in adults over age 40 rises significantly.",
				false,
				"No. Skin cells are somatic cells and would not affect reproduction.");
			
				p.addAnswer(4, "Hundreds of thousands of people are killed in a natural disaster.",
				false,
				"No. That would not be a significant enough change in the human gene pool to cause microevolution to take place.");
			
				p.addAnswer(5, "Both random mating and an increase in middle-aged skin cancer occur.",
				false,
				"No. Even combined, these two factors would not lead to microevolution.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335473;


		
		

		
			
			p.question = "Which of the following is the best example of gene flow? (<script type=\"text/javascript\">ebook(\'2303\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "A small population of humans colonizes a newly formed island.",
				false,
				"No. Gene flow is the loss or gain of alleles from the gene pool by migration. This is an example of the founder effect.");
			
				p.addAnswer(2, "Genes are shuffled by the crossing over of chromosomes during meiosis.",
				false,
				"No. Gene flow is the loss or gain of alleles from the gene pool.");
			
				p.addAnswer(3, "An earthquake results in the formation of a canyon, splitting a population of toads apart.",
				false,
				"No. Gene flow is the loss or gain of alleles from the gene pool.");
			
				p.addAnswer(4, "Wind blows pollen from one population of plants to another and cross-fertilization occurs.",
				true,
				"Correct. Over several generations, the two populations will become more similar.");
			
				p.addAnswer(5, "All the mutations in a population were neutral.",
				false,
				"No. Gene flow is the loss or gain of alleles from the gene pool.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335474;


		
		

		
			
			p.question = "Which of the following most accurately measures an organism\'s fitness? (<script type=\"text/javascript\">ebook(\'2304\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "how strong the organism is when pitted against others of its species",
				false,
				"No. This is not a generic measurement of fitness because not all organisms compete in this way.");
			
				p.addAnswer(2, "its mutation rate",
				false,
				"No. Most mutations are not beneficial.");
			
				p.addAnswer(3, "how many fertile offspring it produces",
				true,
				"Correct. That is the definition of fitness.");
			
				p.addAnswer(4, "its ability to withstand environmental extremes",
				false,
				"No. But that might result in its leaving more offspring than other individuals.");
			
				p.addAnswer(5, "how much food it is able to make or obtain",
				false,
				"No. But that might result in its leaving more offspring than other individuals.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335475;


		
		

		
			
			p.question = "Antibiotic resistance in bacteria is an example of which of the following? (<script type=\"text/javascript\">ebook(\'2304\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "stabilizing selection",
				false,
				"No. Stabilizing selection occurs in stable environments, which resist factors that promote phenotypic variation.");
			
				p.addAnswer(2, "directional selection",
				true,
				"Correct. Directional selection favors those individuals at one end of the spectrum that best adapt to a new situation&#8212;in this case, the presence of an antibiotic.");
			
				p.addAnswer(3, "disruptive selection",
				false,
				"No. This acts opposite to disruptive selection in that it promotes the growth of only those bacteria with the gene for antibiotic resistance.");
			
				p.addAnswer(4, "Hardy-Weinberg equilibrium",
				false,
				"No. This situation represents rapid evolution rather than equilibrium.");
			
				p.addAnswer(5, "macroevolution",
				false,
				"No. The spread of antibiotic resistance in a population would be an example of microevolution.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335476;


		
		

		
			
			p.question = "For several years, scientists have warned doctors of the danger of overprescribing antibiotics such as penicillin. Scientists are concerned because _____. (<script type=\"text/javascript\">ebook(\'2304\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "humans will become tolerant to the effects of drugs",
				false,
				"No. Consider why antibiotics are prescribed.");
			
				p.addAnswer(2, "the organisms that produce many of the antibiotics are overexploited and could become extinct",
				false,
				"No. Consider the topics of this chapter.");
			
				p.addAnswer(3, "strains of microorganisms that are resistant to these drugs will be selected for",
				true,
				"Correct. A beneficial mutation can increase in frequency in a bacterial population very rapidly. If a single individual in the population harbors a mutation that renders it resistant to an antibiotic, there may be millions of resistant bacteria within several hours of antibiotic treatment.");
			
				p.addAnswer(4, "the drugs will be metabolized more quickly by our bodies, decreasing their effectiveness",
				false,
				"No. Possibly, but this is not the major cause for concern.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335477;


		
		

		
			
			p.question = "A population of squirrels is preyed upon by small hawks. The smaller squirrels can escape into burrows. The larger squirrels can fight off the hawks. After several generations, the squirrels in the area tend to be very small or very large. What process is responsible for this outcome? (<script type=\"text/javascript\">ebook(\'2304\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "stabilizing selection",
				false,
				"No. Stabilizing selection favors intermediate variants.");
			
				p.addAnswer(2, "directional selection",
				false,
				"No. Directional selection acts against individuals at one of the phenotypic extremes.");
			
				p.addAnswer(3, "disruptive selection",
				true,
				"Correct. Disruptive selection favors individuals at both ends of the phenotypic spectrum.");
			
				p.addAnswer(4, "balancing selection",
				false,
				"No. Balancing selection maintains stable frequencies of two or more phenotypic forms in a population.");
			
				p.addAnswer(5, "Hardy-Weinberg equilibrium",
				false,
				"No. The type of selection referred to in the question would favor evolution rather than equilibrium.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335478;


		
		

		
			
			p.question = "Stabilizing selection _____. (<script type=\"text/javascript\">ebook(\'2304\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "favors intermediate variants in a population",
				true,
				"Correct. Stabilizing selection culls extreme variants from the population.");
			
				p.addAnswer(2, "prevents mutations from occurring",
				false,
				"No. Stabilizing selection has nothing to do with mutation rates.");
			
				p.addAnswer(3, "occurs when some individuals migrate to an area with different environmental conditions",
				false,
				"No. That would result in directional selection.");
			
				p.addAnswer(4, "can take place only in species exhibiting sexual dimorphism",
				false,
				"No. That has nothing to do with stabilizing selection.");
			
				p.addAnswer(5, "occurs only in plants",
				false,
				"No. It can occur in animals as well.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335479;


		
		

		
			
			p.question = "Birds with average-size wings survived a severe storm more successfully than other birds in the same population with longer or shorter wings. If severe storms occur regularly, then over time, one should expect these storms to bring about _____. (<script type=\"text/javascript\">ebook(\'2304\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the bottleneck effect",
				false,
				"No. The reduction in the frequency of some alleles is not random.");
			
				p.addAnswer(2, "stabilizing selection",
				true,
				"Correct. Stabilizing selection favors the intermediate trait.");
			
				p.addAnswer(3, "artificial selection",
				false,
				"No. Humans are not influencing the bird population.");
			
				p.addAnswer(4, "gene flow",
				false,
				"No. We are not seeing the loss or gain of alleles from the gene pool (that is, individuals are neither immigrating to nor emigrating from the population).");
			
				p.addAnswer(5, "disruptive selection",
				false,
				"No. Other wing variants are being selected against.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335480;


		
		

		
			
			p.question = "Tay-Sachs disease, which is lethal, results from having the homozygous recessive condition of the responsible gene. Which one of the following statements is true? (<script type=\"text/javascript\">ebook(\'2304\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Because homozygous recessive individuals die, the recessive allele will eventually be lost from the population.",
				false,
				"No. The recessive allele has been maintained in the population because heterozygotes survive and may pass the recessive allele on to offspring.");
			
				p.addAnswer(2, "Only homozygous dominant individuals will be able to survive and reproduce.",
				false,
				"No. In order to be affected by the disease, an individual must be homozygous recessive. Heterozygotes survive and may pass the recessive allele on to offspring.");
			
				p.addAnswer(3, "Heterozygous individuals will survive and may pass the recessive allele on to their offspring.",
				true,
				"Correct. The diploid nature of most eukaryotes hides a considerable amount of genetic variation from selection, in the form of recessive alleles in heterozygotes.");
			
				p.addAnswer(4, "In the heterozygous condition, the dominant allele will overcome the recessive allele and only the dominant allele will be passed on to offspring.",
				false,
				"No. All alleles within an organism have equal chance of being passed on to offspring.");
			
				p.addAnswer(5, "Homozygous dominant individuals will be more likely to reproduce than heterozygous individuals.",
				false,
				"No. The presence of the Tay-Sachs allele in a heterozygous individual would not affect his or her ability to reproduce.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335481;


		
		

		
			
			p.question = "Which type of selection maintains stable frequencies of two or more phenotypic forms in a population? (<script type=\"text/javascript\">ebook(\'2304\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "balancing selection",
				true,
				"Correct. Balancing selection preserves variation through many mechanisms, such as heterozygote advantage and frequency-dependent selection.");
			
				p.addAnswer(2, "neutral variation",
				false,
				"No. This refers to genetic variations that have little or no impact on reproductive success.");
			
				p.addAnswer(3, "heterozygote advantage",
				false,
				"No. This answer is too specific. Heterozygote advantage is just one mechanism of balancing selection.");
			
				p.addAnswer(4, "stabilizing selection",
				false,
				"No. This mode of selection actually reduces variation and maintains the status quo for a particular phenotypic character.");
			
				p.addAnswer(5, "relative fitness",
				false,
				"No. This is the contribution of a genotype to the next generation compared to the contributions of alternative genotypes for the same locus.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335482;


		
		

		
			
			p.question = "Which of the following would seem to be an example of neutral variation? (<script type=\"text/javascript\">ebook(\'2304\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "homozygosity of the cheetah population",
				false,
				"No. This is an example of a population with practically no variation.");
			
				p.addAnswer(2, "polymorphism of the G&#225;lapagos finches",
				false,
				"No. These variations are adaptive and selective rather than neutral.");
			
				p.addAnswer(3, "founder effect",
				false,
				"No. The founder effect reduces the amount of variation in a population, but there is no reason to assume the variations are neutral.");
			
				p.addAnswer(4, "human fingerprints",
				true,
				"Correct. As far as we know, this variation from human to human is neutral; that is, it has no selective advantage.");
			
				p.addAnswer(5, "moth coloration",
				false,
				"No. Colors usually have a purpose, such as mating or camouflage.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335483;


		
		

		
			
			p.question = "What is the importance of neutral variation in evolution? (<script type=\"text/javascript\">ebook(\'2304\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "DNA forensics relies on neutral variation among humans.",
				false,
				"No. DNA forensics does use neutral variation to distinguish one human from another, but this use of neutral variation does not affect evolution.");
			
				p.addAnswer(2, "Neutral variation increases genetic variation, allowing a population to carry more alleles that may help it respond to environmental change.",
				true,
				"Correct. A trait that is neutral in one environment may be advantageous in another. If a trait confers an advantage (or disadvantage), natural selection can act on it, and evolution may occur.");
			
				p.addAnswer(3, "Relative frequencies of neutral variations are controlled by natural selection.",
				false,
				"No. Variations are considered neutral if they are neither advantageous nor deleterious. Natural selection does not act on neutral variation in the current environment");
			
				p.addAnswer(4, "Neutral variation is usually removed from the population by natural selection because it does not confer an advantage in the current environment.",
				false,
				"No. Natural selection does not act on neutral variation.");
			
				p.addAnswer(5, "Many mutations are silent and do not affect the amino acid that is coded for.",
				false,
				"No. Although this statement is true, it does not explain the importance of this kind of variation to evolution.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335484;


		
		

		
			
			p.question = "Selection that acts over evolutionary time to preserve traits that increase an individual\'s ability to mate is known as _____. (<script type=\"text/javascript\">ebook(\'2304\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "directional selection",
				false,
				"No. Directional selection shifts the frequency curve for some phenotypic character in one direction or the other, by favoring individuals that deviate from the average.");
			
				p.addAnswer(2, "disruptive selection",
				false,
				"No. Disruptive selection occurs when environmental conditions favor individuals on both extremes of a phenotypic range over intermediate phenotypes.");
			
				p.addAnswer(3, "stabilizing selection",
				false,
				"No. Stabilizing selection acts against extreme phenotypes and favors intermediate variants.");
			
				p.addAnswer(4, "sexual selection",
				true,
				"Correct. In sexual selection, secondary sexual characteristics that may not seem to be adaptive in the general sense may give an individual an edge in gaining a mate.");
			
				p.addAnswer(5, "balancing selection",
				false,
				"No. Balancing selection maintains stable frequencies of two or more phenotypic forms in a population.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335485;


		
		

		
			
			p.question = "Which statement below is true about sexual selection? (<script type=\"text/javascript\">ebook(\'2304\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Intrasexual selection leads to the death of most unfit males in combat.",
				false,
				"No. More often than not, the victor of these struggles wins through psychological methods rather than physical ones.");
			
				p.addAnswer(2, "Showy secondary sexual characteristics cannot be explained because they break all of the rules of natural selection.",
				false,
				"No. On the surface, this does appear to be true. For example, the colorful plumage of some birds makes them much more visible to predators. However, there are some theories to explain how these characteristics can increase an individual\'s fitness.");
			
				p.addAnswer(3, "In most vertebrates, females court the males.",
				false,
				"No. Males are usually the suitors in vertebrate populations.");
			
				p.addAnswer(4, "There is no evidence that intrasexual selection takes place between females.",
				false,
				"No. There is evidence in some populations of females establishing hierarchies of dominance.");
			
				p.addAnswer(5, "Sexual selection can result in sexual dimorphism-marked differences between the sexes in secondary sexual characteristics that are not associated directly with reproduction.",
				true,
				"Correct. Sexual dimorphism is a result of sexual selection.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335486;


		
		

		
			
			p.question = "How does natural selection fashion organisms? (<script type=\"text/javascript\">ebook(\'2304\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "The best traits for the current environment arise in the population and are selected for.",
				false,
				"No. Natural selection can only act on variations that exist or arise in a population by chance. There is no guarantee that any of the existing alleles provide the best traits.");
			
				p.addAnswer(2, "Brand new body plans arise often, giving natural selection many new possibilities to work with.",
				false,
				"No. Descent with modification has a long history. Existing body plans have been extensively modified for different environments, but new ones rarely arise.");
			
				p.addAnswer(3, "Chance and the environment interact with natural selection, so that the best available traits are selected for.",
				true,
				"Correct. The ideal traits for a particular environment may not exist or may have been removed from the population by chance events. Natural selection can only act on traits that exist in the population.");
			
				p.addAnswer(4, "Sexual selection acts to make organisms better adapted to their environments.",
				false,
				"No. Sexual selection often leads to compromise. Traits that increase an organism\'s reproductive success, such as colorful plumage in birds, may make them more susceptible to predation.");
			
				p.addAnswer(5, "Neutral traits are often selected for because they will eventually produce alleles that confer an advantage.",
				false,
				"No. Natural selection is not predictive. Although neutral alleles sometimes become advantageous, natural selection only selects for the best available traits in the current environment.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335487;


		
		

		
			
			p.question = "A number of mosquito populations today are resistant to insecticides that were once quite effective. Biologists think that insecticide resistance evolved in mosquitoes because _____. (<script type=\"text/javascript\">ebook(\'2304\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "individual mosquitoes built up an immunity to an insecticide after being exposed to it",
				false,
				"No. The insecticides are toxic chemicals. The insects could not have developed immunity.");
			
				p.addAnswer(2, "mosquitoes needed to develop insecticide resistance to survive after the insecticide was used",
				false,
				"No. This is not how evolution works. Selection can only edit existing variations.");
			
				p.addAnswer(3, "a few mosquitoes were probably resistant to the insecticide before it was ever used, and these individuals were more likely to survive and reproduce",
				true,
				"Correct. The degree of adaptation can be extended only within the realm of genetic variability present in the population.");
			
				p.addAnswer(4, "mosquitoes attempted to adapt to their environment",
				false,
				"No. Mosquitoes are not capable of such an action.");
			
				p.addAnswer(5, "a new allele developed in response to the insecticide that provided future generations the benefit of resistance",
				false,
				"No. This is not how evolution works. New alleles do not arise on demand.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

