

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "14: Mendel and the Gene Idea > Practice Test";
	ak.quiz_loc_with_commas = "14: Mendel and the Gene Idea, Practice Test";
	ak.quiz_title = "Practice Test";

	
		ak.help_url = "../../placeholders/help_placeholder.html";
	
	ak.essay_total = 0;
	ak.pair_problem_total = 0;
	ak.pair_total = 0;
	ak.problem_total = 44;
	ak.non_essay_total = 44;
	ak.scored_item_total = 44;

	
	
	


	
	ak.copyright_date = "2008";
	ak.brandname = "Pearson Benjamin Cummings";
	ak.legal = "../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.pearsoned.com%2Flegal%2Findex.htm";


	// Loop over all problems
	
	
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334884;


		
		

		
			
			p.question = "Which choice below is a basic difference between Mendel\'s particulate hypothesis and the hypothesis of blending inheritance? (<script type=\"text/javascript\">ebook(\'1401\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "The blending inheritance hypothesis, but not the particulate hypothesis, maintained that mutation is the major source of new gene combinations.",
				false,
				"No. Neither hypothesis speculated on the origin of different alleles. However, mutation is the ultimate source of all genetic variation.");
			
				p.addAnswer(2, "The blending inheritance hypothesis, but not the particulate hypothesis, maintained that the two alleles at any given locus are always different.",
				false,
				"No. The blending inheritance hypothesis did not specifically address alleles and loci, or whether alleles were the same or different, but rather generally dealt with what happens to the genetic material upon mating.");
			
				p.addAnswer(3, "The blending inheritance hypothesis, but not the particulate hypothesis, maintained that the traits governed by genes in the egg are different from the traits governed by genes in the sperm.",
				false,
				"No. With the exception of sex-linked genes, males and females both contribute genes that affect the same characters.");
			
				p.addAnswer(4, "The blending inheritance hypothesis, but not the particulate hypothesis, maintained that after a mating, the genetic material provided by each of the two parents is mixed in the offspring, losing its individual identity.",
				true,
				"Correct. The blending hypothesis maintained that the genetic material contributed by the two parents mixes in a manner analogous to the way blue and yellow paints blend to make green.");
			
				p.addAnswer(5, "all of the above",
				false,
				"No. One of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334885;


		
		

		
			
			p.question = "If a plant variety is true-breeding for a dominant trait, then _____.\n (<script type=\"text/javascript\">ebook(\'1401\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "if the plant were allowed to self-pollinate, the dominant and recessive traits would consistently appear in a 3:1 ratio among the progeny",
				false,
				"No. All the progeny would show the same phenotype.");
			
				p.addAnswer(2, "the plant is heterozygous for the trait",
				false,
				"No. The plant is homozygous for the trait.");
			
				p.addAnswer(3, "if the plant were crossed with a heterozygote, one-half of the progeny would show the dominant trait, and one-half would show the recessive trait",
				false,
				"No. All the progeny would show the dominant trait.");
			
				p.addAnswer(4, "if the plant were allowed to self-pollinate, all of the progeny would have the dominant trait",
				true,
				"Correct. True-breeding means that self-pollination would produce progeny that all have the same phenotype as the parent. In this case, as the parent shows the dominant trait, the progeny would as well.");
			
				p.addAnswer(5, "the variety is unable to mutate",
				false,
				"No. Even the genes of true-breeding varieties can mutate.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334886;


		
		

		
			
			p.question = "<i>A </i>= big apples;<i> R </i>= red apples;<i> a </i>= small apples;<i> r </i>= yellow apples. You have one tree that produces big yellow apples and another tree that produces small red apples. When the two are crossed, you find that half of the new trees produce big red apples and half produce big yellow apples. What are the genotypes of the parents?\n (<script type=\"text/javascript\">ebook(\'1401\',\'quiz\')</script>)";
			p.incorrect_any_expl = "No. Trees that produce big yellow apples could be <i>AArr</i> or <i>Aarr</i>. Trees that produce small red apples could be <i>aaRR</i> or <i>aaRr</i>. Since all the offspring are big, the big parent must be homozygous for <i>A</i>. Since half the apples are red and half are yellow, the red parent must be heterozygous for red. The conclusion is that the cross must be <i>AArr </i> x <i>aaRr</i>.";
			p.incorrect_any_expl_flag = 1;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "<i>AArr</i> and <i>aaRr</i>",
				true,
				"Correct. Trees that produce big yellow apples could be <i>AArr</i> or <i>Aarr</i>. Trees that produce small red apples could be <i>aaRR</i> or <i>aaRr</i>. Since all the offspring are big, the big parent must be homozygous for <i>A</i>. Since half the apples are red and half are yellow, the red parent must be heterozygous for red. The conclusion is that the cross must be <i>AArr</i> x <i>aaRr</i>.");
			
				p.addAnswer(2, "<i>Aarr</i> and <i>aaRr</i>",
				false,
				"");
			
				p.addAnswer(3, "<i>AARr</i> and <i>Aarr</i>",
				false,
				"");
			
				p.addAnswer(4, "<i>AaRr</i> and <i>AaRr</i>",
				false,
				"");
			
				p.addAnswer(5, "<i>AaRr</i> and <i>aarr</i>",
				false,
				"");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334887;


		
		

		
			
			p.question = "Assume tall (<i>T</i>) is completely dominant to dwarf (<i>t</i>) in a certain species of plant. If a homozygous dominant individual is crossed with a homozygous dwarf, the offspring will _____.\n (<script type=\"text/javascript\">ebook(\'1401\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "all be intermediate in height",
				false,
				"No. The tall allele is completely dominant to the dwarf allele.");
			
				p.addAnswer(2, "all be tall",
				true,
				"Correct. Like Mendel\'s original purple with white cross, all the F<sub>1</sub> offspring will show the dominant phenotype.");
			
				p.addAnswer(3, "be 1/2 tall and 1/2 dwarf",
				false,
				"No. All the F<sub>1</sub> will have the same genotype and, therefore, the same phenotype.");
			
				p.addAnswer(4, "be 3/4 tall and 1/4 dwarf",
				false,
				"No. Both parents are homozygous.");
			
				p.addAnswer(5, "all be short",
				false,
				"No. Tall is dominant to short.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334888;


		
		

		
			
			p.question = "The F<sub>1</sub> generation differed from the F<sub>2</sub> in Mendel\'s experiments in that _____.\n (<script type=\"text/javascript\">ebook(\'1401\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "all of the F<sub>1</sub> showed the dominant phenotype, whereas only half of the F<sub>2</sub> did",
				false,
				"No. Only part of this response is correct.");
			
				p.addAnswer(2, "all of the F<sub>1</sub> showed the dominant phenotype, but only three-fourths of the F<sub>2</sub> did",
				true,
				"Correct. All of the F<sub>1</sub> were heterozygous and therefore showed the dominant phenotype. In the F<sub>2</sub>, one-half were heterozygous, and another quarter were homozygous for the dominant allele.");
			
				p.addAnswer(3, "all of the F<sub>1</sub> showed the dominant phenotype, and all of the F<sub>2</sub> showed the recessive phenotype",
				false,
				"No. Only part of this response is correct.");
			
				p.addAnswer(4, "one-half of the F<sub>1</sub> showed the dominant phenotype, and three-fourths of the F<sub>2</sub> did",
				false,
				"No. All of the F<sub>1</sub> showed the dominant phenotype.");
			
				p.addAnswer(5, "none of the F<sub>1</sub> showed the dominant phenotype, but one-half of the F<sub>2</sub> did",
				false,
				"No. Both of these statements are incorrect.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334889;


		
		

		
			
			p.question = "Physically, what <i>are</i> different alleles?\n (<script type=\"text/javascript\">ebook(\'1401\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Different alleles are different DNA sequences found at the same locus on sister chromatids.",
				false,
				"No. Unless a mutation has occurred during DNA synthesis, sister chromatids will always carry the same allele.");
			
				p.addAnswer(2, "Different alleles are different particles found in gametes.",
				false,
				"No. Mendel referred to hereditary \"particles\" because of their discrete nature, but alleles are DNA sequences, and they are found in all cells, not just gametes.");
			
				p.addAnswer(3, "Different alleles are different phenotypes for a particular character.",
				false,
				"No. An allele is a DNA sequence. It is expressed as a phenotype.");
			
				p.addAnswer(4, "Different alleles are different DNA sequences found at the same locus on homologous chromosomes.",
				true,
				"Correct. From a physical standpoint, an allele is a variant of a DNA sequence that codes for a particular gene.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334890;


		
		

		
			
			p.question = "In a certain plant, the alleles <i>A</i>, <i>B</i>, and <i>C</i> are completely dominant to the alleles <i>a</i>, <i>b</i>, and <i>c</i>. A plant with the genotype <i>AABbcc</i> will have the same phenotype as a plant with the genotype _____.\n (<script type=\"text/javascript\">ebook(\'1401\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "<i>Aabbcc</i>",
				false,
				"No. This genotype expresses a phenotype that expresses only one dominant trait.");
			
				p.addAnswer(2, "<i>aabbcc</i>",
				false,
				"No. This genotype expresses a phenotype that is recessive for all three characters.");
			
				p.addAnswer(3, "<i>AaBBcc</i>",
				true,
				"Correct. Individuals with one or two dominant alleles at a locus are indistinguishable, so <i>AA</i> and <i>Aa</i> have the same phenotype (as do <i>BB</i> and <i>Bb</i>).");
			
				p.addAnswer(4, "<i>AABBCc</i>",
				false,
				"No. This genotype expresses a phenotype that is dominant for all three characters.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334891;


		
		

		
			
			p.question = "Pea plants are tall if they have the genotype <i>TT</i> or <i>Tt</i>, and they are short if they have genotype <i>tt</i>. A tall plant is mated with a short plant. Which outcome below would indicate that the tall parent plant was heterozygous?\n (<script type=\"text/javascript\">ebook(\'1401\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "All of the offspring are short.",
				false,
				"No. This is possible, but unlikely. If one parent has the genotype <i>Tt</i> and the other parent has the genotype <i>tt</i>, about half of the offspring will be tall.");
			
				p.addAnswer(2, "All of the offspring are tall.",
				false,
				"No. This would indicate that the tall parent was homozygous.");
			
				p.addAnswer(3, "The ratio of tall offspring to short offspring is 3:1.",
				false,
				"No. This would be the ratio if both parents were heterozygous.");
			
				p.addAnswer(4, "The ratio of tall offspring to short offspring is 1:1.",
				true,
				"Correct. Half of the offspring would be heterozygous and the other half homozygous recessive.");
			
				p.addAnswer(5, "There is not enough information to answer the question.",
				false,
				"No. All of the necessary information is provided.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334892;


		
		

		
			
			p.question = "What is indicated when a single-character testcross yields offspring that all have the dominant phenotype?\n (<script type=\"text/javascript\">ebook(\'1401\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "The parent with the dominant phenotype was homozygous.",
				true,
				"Correct. If all the progeny show the dominant phenotype, the parent must have been homozygous, transmitting the dominant allele to all of the offspring.");
			
				p.addAnswer(2, "The parent with the dominant phenotype was heterozygous.",
				false,
				"No. If the parent had been heterozygous, half of the progeny would have had the dominant phenotype and the other half the recessive phenotype.");
			
				p.addAnswer(3, "Epistasis has occurred.",
				false,
				"No. Only a single gene pair is involved.");
			
				p.addAnswer(4, "The alleles are codominant.",
				false,
				"No. The dominant allele is completely dominant.");
			
				p.addAnswer(5, "Both parents are heterozygous.",
				false,
				"No. If this were so, the cross would not be a testcross.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334893;


		
		

		
			
			p.question = "If an organism that is homozygous dominant is crossed with a heterozygote for that trait, the offspring will be _____. (<script type=\"text/javascript\">ebook(\'1401\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "all of the dominant phenotype",
				true,
				"Correct. The offspring of an <i>AA</i> x <i>Aa</i> cross are either <i>AA</i> or <i>Aa</i>. All will express the dominant phenotype.");
			
				p.addAnswer(2, "1/4 of the recessive phenotype",
				false,
				"No. The offspring of a homozygous dominant parent cannot have a recessive phenotype.");
			
				p.addAnswer(3, "all homozygous dominant",
				false,
				"No. One of the parents has a recessive allele.");
			
				p.addAnswer(4, "all homozygous recessive",
				false,
				"No. The offspring of a homozygous dominant parent cannot have a recessive phenotype.");
			
				p.addAnswer(5, "present in a 9:3:3:1 ratio",
				false,
				"No. This is true of the F<sub>2</sub> generation of a dihybrid with two true-breeding individuals.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334894;


		
		

		
			
			p.question = "In Mendel\'s monohybrid cross of purple-flowered and white-flowered peas, all members of the F<sub>1</sub> generation had the _____ phenotype because their genotype was _____ at the flower-color locus.\n (<script type=\"text/javascript\">ebook(\'1401\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "white-flowered; homozygous recessive",
				false,
				"No. Consider which of the traits is dominant.");
			
				p.addAnswer(2, "white-flowered; heterozygous",
				false,
				"No. Consider which of the traits is dominant.");
			
				p.addAnswer(3, "purple-flowered; homozygous recessive",
				false,
				"No. Consider which of the traits is dominant.");
			
				p.addAnswer(4, "purple-flowered; homozygous dominant",
				false,
				"No. A heterozygote will express the dominant trait.");
			
				p.addAnswer(5, "purple-flowered; heterozygous",
				true,
				"Correct. All F<sub>1</sub> individuals of the purple x white cross were phenotypically purple and heterozygous (<i>Pp</i>).");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334895;


		
		

		
			
			p.question = "If the two traits that Mendel looked at in his dihybrid cross of smooth yellow peas with wrinkled green peas had been controlled by genes that were located near each other on the same chromosome, then the F<sub>2</sub> generation _____.\n (<script type=\"text/javascript\">ebook(\'1401\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "would have contained four phenotypes in a 9:3:3:1 ratio",
				false,
				"No. This is what happens when the genes are located on different chromosomes.");
			
				p.addAnswer(2, "would have contained only individuals that were heterozygous at both loci",
				false,
				"No. Try using a Punnett square.");
			
				p.addAnswer(3, "would have deviated from the 9:3:3:1 phenotypic ratio that is predicted by the law of independent assortment",
				true,
				"Correct. If the two characters are located on the same chromosome, they will not segregate independently.");
			
				p.addAnswer(4, "would have contained no individuals that were heterozygous at both loci",
				false,
				"No. Try using a Punnett square.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334896;


		
		

		
			
			p.question = "In carrying out his breeding studies, Mendel examined characters that had which of the following properties?\n (<script type=\"text/javascript\">ebook(\'1401\',\'quiz\')</script>)";
			p.incorrect_any_expl = "No. This statement is correct, but it is not the best answer.";
			p.incorrect_any_expl_flag = 1;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "They were controlled by loci that were (or behaved as if they were) on different chromosomes.",
				false,
				"");
			
				p.addAnswer(2, "It was possible to isolate true-breeding varieties for each trait.",
				false,
				"");
			
				p.addAnswer(3, "The traits varied in an either-or fashion.",
				false,
				"");
			
				p.addAnswer(4, "The characters each were controlled by a single gene.",
				false,
				"");
			
				p.addAnswer(5, "all of the above",
				true,
				"Correct. All of these statements are true.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334897;


		
		

		
			
			p.question = "The law of independent assortment _____. \n (<script type=\"text/javascript\">ebook(\'1401\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "states that the alleles at different loci segregate independently from one another during a dihybrid cross",
				false,
				"No. This answer is correct, but it is not the best response.");
			
				p.addAnswer(2, "can account for a 9:3:3:1 ratio seen in the F<sub>2</sub> generation",
				false,
				"No. This answer is correct, but it is not the best response.");
			
				p.addAnswer(3, "applies only to genes that are present on different chromosomes (or behave as if they were)",
				false,
				"No. This answer is correct, but it is not the best response.");
			
				p.addAnswer(4, "The first and second answers are correct.",
				false,
				"No. This answer is correct, but it is not the best response.");
			
				p.addAnswer(5, "The first, second, and third answers are correct.",
				true,
				"Correct. All of these are criteria of the law of independent assortment.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334898;


		
		

		
			
			p.question = "Homologous pairs of chromosomes often _____.\n (<script type=\"text/javascript\">ebook(\'1401\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "carry different genes for different traits",
				false,
				"No. Pairs of homologous chromosomes carry the same genes.");
			
				p.addAnswer(2, "differ in length",
				false,
				"No. This is not true of homologous chromosomes.");
			
				p.addAnswer(3, "contain different alleles",
				true,
				"Correct. Homologous chromosomes may carry different alleles at one or more loci.");
			
				p.addAnswer(4, "are not both present in diploid somatic cells",
				false,
				"No. They are both present in diploid somatic cells.");
			
				p.addAnswer(5, "are paired up in the G<sub>2</sub> phase of the cell cycle",
				false,
				"No. Homologous chromosomes pair up during meiosis. Review Chapters 12 and 13.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334899;


		
		

		
			
			p.question = "If each parent can produce 100 genetically distinct gametes, how many genetically distinct offspring can two parents produce?\n (<script type=\"text/javascript\">ebook(\'1402\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "10,000",
				true,
				"Correct. 100 x 100 = 10,000. The rule of multiplication applies to these independent events.");
			
				p.addAnswer(2, "200",
				false,
				"No. This is not the sum of the kinds of gametes produced by the parents.");
			
				p.addAnswer(3, "1,000",
				false,
				"No. The rule of multiplication applies to these events.");
			
				p.addAnswer(4, "100",
				false,
				"No. The rule of multiplication applies to these events.");
			
				p.addAnswer(5, "1,000,000",
				false,
				"No. The rule of multiplication applies to these events.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334900;


		
		

		
			
			p.question = "Pea flowers may be purple (<i>P</i>) or white (<i>p</i>). Pea seeds may be round (<i>R</i>) or wrinkled (<i>r</i>). What proportion of the offspring from the cross <i>PpRr</i> x <i>PpRr</i> will have white flowers and wrinkled seeds? (<script type=\"text/javascript\">ebook(\'1402\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "0",
				false,
				"No. Some of the offspring will have this phenotype.");
			
				p.addAnswer(2, "1/16",
				true,
				"Correct. <i>Pp</i> x <i>Pp</i> would produce 3/4 purple and 1/4 white. <i>Rr</i> x <i>Rr</i> would produce 3/4 round and 1/4 wrinkled; (1/4)(1/4) = 1/16 would have white flowers and wrinkled seeds.");
			
				p.addAnswer(3, "1/4",
				false,
				"No. Remember that the multiplication rule states that to determine the overall probability of two or more independent events, you must multiply the probability of one event by the probability of the other event.");
			
				p.addAnswer(4, "3/4",
				false,
				"No. Remember that both white flowers and wrinkled seeds are recessive traits.");
			
				p.addAnswer(5, "1/2",
				false,
				"No. Remember that both white flowers and wrinkled seeds are recessive traits.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334901;


		
		

		
			
			p.question = "An <i>AABbccDdEeFF</i> individual is crossed with an individual with the genotype <i>AaBBCCDdEeff</i>. What is the probability that their offspring will have the genotype <i>AaBBCcddEEFf</i>? (<script type=\"text/javascript\">ebook(\'1402\',\'quiz\')</script>)";
			p.incorrect_any_expl = "No. To obtain the overall probability, multiply the individual probabilities for each locus: (1/2)(1/2)(1)(1/4)(1/4)(1) = 1/64.";
			p.incorrect_any_expl_flag = 1;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "1/2",
				false,
				"");
			
				p.addAnswer(2, "1/4",
				false,
				"");
			
				p.addAnswer(3, "1/16",
				false,
				"");
			
				p.addAnswer(4, "1/32",
				false,
				"");
			
				p.addAnswer(5, "1/64",
				true,
				"Correct. To obtain the overall probability, multiply the individual probabilities for each locus: (1/2)(1/2)(1)(1/4)(1/4)(1) = 1/64.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334902;


		
		

		
			
			p.question = "If a heterozygous plant is allowed to self-pollinate, what proportion of the offspring will also be heterozygous? (<script type=\"text/javascript\">ebook(\'1402\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "1/4",
				false,
				"No. Try drawing a Punnett square.");
			
				p.addAnswer(2, "1/3",
				false,
				"No. Try drawing a Punnett square.");
			
				p.addAnswer(3, "1/2",
				true,
				"Correct. One-quarter of the offspring will be homozygous for the dominant allele, one-quarter will be homozygous for the recessive allele, and the remaining half will be heterozygous.");
			
				p.addAnswer(4, "2/3",
				false,
				"No. Try drawing a Punnett square.");
			
				p.addAnswer(5, "all of them",
				false,
				"No. Only a fraction of the offspring will have this phenotype. Try drawing a Punnett square.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334903;


		
		

		
			
			p.question = "An individual with the genotype <i>AABbCcDD</i> can make how many different kinds of gametes? (<script type=\"text/javascript\">ebook(\'1402\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "2",
				false,
				"No. This is the number of gametes that an individual heterozygous at a single locus would make.");
			
				p.addAnswer(2, "4",
				true,
				"Correct. The individual varies only at loci B and C (not at A and D, which are homozygous), and there are two possible alleles at each loci (2<sup>2</sup> = 4).");
			
				p.addAnswer(3, "8",
				false,
				"No. This would be the number produced for an individual heterozygous at three loci (2<sup>3</sup> = 8).");
			
				p.addAnswer(4, "16",
				false,
				"No. This would be the number produced for an individual heterozygous at four loci (2<sup>4</sup> = 16).");
			
				p.addAnswer(5, "32",
				false,
				"No. This would be the number produced for an individual heterozygous at five loci (2<sup>5</sup> = 32).");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334904;


		
		

		
			
			p.question = "A red bull is crossed with a white cow and all of the offspring are roan, an intermediate color that is caused by the presence of both red and white hairs. This is an example of genes that are _____. (<script type=\"text/javascript\">ebook(\'1403\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "nonhomologous",
				false,
				"No. The red and white alleles are present at equivalent loci on homologous chromosomes.");
			
				p.addAnswer(2, "epistatic",
				false,
				"No. There is no indication that a second gene pair is involved.");
			
				p.addAnswer(3, "codominant",
				true,
				"Correct. Roan is caused by the presence of both red and white hairs.");
			
				p.addAnswer(4, "polygenic",
				false,
				"No. There is no indication that more than one gene pair is involved.");
			
				p.addAnswer(5, "completely dominant",
				false,
				"No. If this were so, there would be only two trait variants&mdash;red and white.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334905;


		
		

		
			
			p.question = "Flower color in snapdragons is an example of incomplete dominance. When a red-flowered plant is crossed with a white-flowered plant, the F<sub>1</sub> generation has pink flowers. If a pink-flowered plant is crossed with another pink-flowered plant, the progeny plants will be _____.\n (<script type=\"text/javascript\">ebook(\'1403\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "100% pink",
				false,
				"No. Not all progeny plants will be heterozygotes.");
			
				p.addAnswer(2, "100% red",
				false,
				"No. Not all progeny plants will be homozygous for the red allele.");
			
				p.addAnswer(3, "25% red, 50% pink, and 25% white",
				true,
				"Correct. Breeding the F<sub>1</sub> hybrids of the snapdragon cross produces F<sub>2</sub> offspring, with a phenotypic ratio of 1 red: 2 pink: 1 white.");
			
				p.addAnswer(4, "50% pink and 50% red",
				false,
				"No. Some will be white.");
			
				p.addAnswer(5, "25% white and 75% red",
				false,
				"No. Some will be pink.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334906;


		
		

		
			
			p.question = "Which choice below describes the expression of Tay-Sachs disorder in humans at the biochemical level?\n (<script type=\"text/javascript\">ebook(\'1403\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "dominant",
				false,
				"No. The Tay-Sachs allele is not dominant at any level.");
			
				p.addAnswer(2, "incompletely dominant",
				true,
				"Yes. This is the phenotype observed at the biochemical level. The activity level of the lipid-metabolizing enzyme in heterozygotes is intermediate.");
			
				p.addAnswer(3, "codominant",
				false,
				"Incorrect. Heterozygous individuals produce half the number of functional enzyme molecules.");
			
				p.addAnswer(4, "recessive",
				false,
				"No. The Tay-Sachs allele is recessive at the organismal level. Only children who inherit two copies of the Tay-Sachs allele develop symptoms of the disease.");
			
				p.addAnswer(5, "polygenic",
				false,
				"No. Tay-Sachs is caused by a mutation in a single gene.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334907;


		
		

		
			
			p.question = "Human blood groups are governed by three alleles, A, B, and O. A and B are codominant while O is recessive to both. A man who has type B blood and a woman who has type A blood could have children of which of the following phenotypes?\n (<script type=\"text/javascript\">ebook(\'1403\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "A or B only",
				false,
				"No. There are more possibilities than this.");
			
				p.addAnswer(2, "AB only",
				false,
				"No. There are more possibilities than this.");
			
				p.addAnswer(3, "AB or O",
				false,
				"No. There are more possibilities than this.");
			
				p.addAnswer(4, "A, B, or O",
				false,
				"No. There are more possibilities than this.");
			
				p.addAnswer(5, "A, B, AB, or O",
				true,
				"Correct. The genotype of the man with type B blood could be <i>I</i><sup>B</sup><i>I</i><sup>B</sup> or <i>I</i><sup>B</sup><i>i</i>, therefore his gametes could be <i>I</i><sup>B</sup> or <i>i</i>. The genotype of the woman with type A blood could be <i>I</i><sup>A</sup><i>I</i><sup>A</sup> or <i>I</i><sup>A</sup><i>i</i>, so her gametes could be <i>I</i><sup>A</sup> or <i>i</i>.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334908;


		
		

		
			
			p.question = "Which of the following matings cannot produce a child with blood type O? The letters refer to blood types (phenotypes).\n (<script type=\"text/javascript\">ebook(\'1403\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "A x A",
				false,
				"No. Both parents could be <i>I</i><sup>A</sup><i>i</i>.");
			
				p.addAnswer(2, "A x B",
				false,
				"No. One parent could be <i>I</i><sup>A</sup><i>i</i> and the other parent could be <i>I</i><sup>B</sup><i>i</i>.");
			
				p.addAnswer(3, "O x AB",
				true,
				"Correct. Every child of an AB individual will carry either the A or the B allele.");
			
				p.addAnswer(4, "O x O",
				false,
				"No. These parents can only have children with type O blood.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334909;


		
		

		
			
			p.question = "A woman with type O blood is expecting a child. Her husband is type A. Both the woman\'s father and her husband\'s father had type B blood. What is the probability that the child will have type O blood?\n (<script type=\"text/javascript\">ebook(\'1403\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "100%",
				false,
				"No. Try drawing a Punnett square.");
			
				p.addAnswer(2, "75%",
				false,
				"No. Try drawing a Punnett square.");
			
				p.addAnswer(3, "50%",
				true,
				"Correct. The woman must be <i>ii</i>. The husband is A but must be a carrier of the <i>i</i> allele, as his father was B. (The father did not give him a B allele, so he must have given him a recessive <i>i</i> allele.) The cross <i>ii</i> x <i>I</i><sup>A</sup><i>i</i> yields a 50% probability that the child will be <i>ii</i>, or type O.");
			
				p.addAnswer(4, "25%",
				false,
				"No. Try drawing a Punnett square.");
			
				p.addAnswer(5, "0%",
				false,
				"No. Draw a Punnett square.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334910;


		
		

		
			
			p.question = "A single genetic locus that controls more than one trait is said to be _____.\n (<script type=\"text/javascript\">ebook(\'1403\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "polygenic",
				false,
				"No. This means that more than one genetic locus is involved.");
			
				p.addAnswer(2, "epistatic",
				false,
				"No. Epistasis is a kind of relationship between different genes.");
			
				p.addAnswer(3, "pleiotropic",
				true,
				"Correct. The ability of a gene to affect an organism in multiple ways is called pleiotropy.");
			
				p.addAnswer(4, "A quantitative character",
				false,
				"No. A quantitative character is one that varies along a continuum.");
			
				p.addAnswer(5, "somatic",
				false,
				"No. Somatic refers to non-sex cells.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334911;


		
		

		
			
			p.question = "Color in squash is controlled by epistatic interactions in which color is recessive to no color. At the first locus white squash (W) is dominant to colored squash (w). At the second locus yellow (Y) is dominant to green (y). What is the phenotype of a squash with the genotype wwYy?\n (<script type=\"text/javascript\">ebook(\'1403\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "white",
				false,
				"No. The genotype is homozygous recessive for colored squash.");
			
				p.addAnswer(2, "Green with yellow stripes",
				false,
				"No. This is a system of dominant/recessive alleles. There is no incomplete dominance or codominance.");
			
				p.addAnswer(3, "green",
				false,
				"No. The genotype is heterozygous for yellow, so the dominant yellow color will be expressed.");
			
				p.addAnswer(4, "yellow",
				true,
				"Correct. The genotype at the first locus is homozygous recessive for colored squash, and the genotype at the second locus is heterozygous.  Yellow is dominant. Therefore, the squash is yellow.");
			
				p.addAnswer(5, "White with yellow stripes.",
				false,
				"No. This is a system of dominant/recessive alleles. There is no incomplete dominance or codominance.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334912;


		
		

		
			
			p.question = "Tail length in a certain species of armadillo falls along a continuum, following a normal distribution. Assuming that environmental factors do not play an important role in determining tail length, this type of variation probably reflects _____. \n (<script type=\"text/javascript\">ebook(\'1403\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "polygenic inheritance",
				true,
				"Correct. Characters that vary along a continuum, following a normal distribution, are often controlled by multiple genes, each contributing to the phenotype in an additive fashion.");
			
				p.addAnswer(2, "pleiotropy",
				false,
				"No. Pleiotropy refers to the ability of a single gene to affect multiple characters.");
			
				p.addAnswer(3, "epistasis",
				false,
				"No. Epistasis refers to a kind of interaction between different genes.");
			
				p.addAnswer(4, "complete dominance",
				false,
				"No. Alleles that show complete dominance generally produce phenotypes that appear in Mendelian ratios.");
			
				p.addAnswer(5, "incomplete dominance",
				false,
				"No. Characters controlled by alleles that show incomplete dominance generally fall into discrete categories, not along a continuum.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334913;


		
		

		
			
			p.question = "Mendel\'s theory of particulate inheritance _____.\n (<script type=\"text/javascript\">ebook(\'1403\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "can explain inheritance patterns for virtually every sexually-reproducing organism but does not explain multifactorial characters",
				true,
				"Correct. Although many patterns of inheritance have been discovered, they can still be explained using the concept of alleles (Mendel\'s hereditary \"particles\"). Multifactorial characters are influenced by environmental influences, so they are not strictly governed by Mendel\'s theory.");
			
				p.addAnswer(2, "cannot explain epistasis",
				false,
				"No. Although epistasis is a more complicated pattern of inheritance, it is still governed by the inheritance of discrete alleles of genes.");
			
				p.addAnswer(3, "only applies to alleles that are strictly dominant or recessive",
				false,
				"No. Although Mendel\'s original laws described strict dominance, codominance, incomplete dominance, polygenic inheritance, and so on, can all be explained using discrete alleles.");
			
				p.addAnswer(4, "can explain incomplete dominance but fails to explain multiple alleles",
				false,
				"No. Mendel did not work very much with traits with multiple alleles, but their inheritance can still be explained using discrete alleles of genes.");
			
				p.addAnswer(5, "explains how genotype is expressed as phenotype",
				false,
				"No. Mendel did not understand how his hereditary \"particles\" were expressed as physical traits. His theory deals only with their inheritance, not their expression.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334914;


		
		

		
			
			p.question = "Tay-Sachs disease runs in Rebecca\'s family. On a family pedigree, she saw a shaded circle. This represented a _____.\n (<script type=\"text/javascript\">ebook(\'1404\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "male with Tay-Sachs",
				false,
				"No. Males are represented by squares.");
			
				p.addAnswer(2, "female carrier",
				false,
				"No. Carriers, who do not have the disease, are represented by open symbols or by half-shaded symbols.");
			
				p.addAnswer(3, "male carrier",
				false,
				"No. Males are represented by squares, and carriers by open or half-shaded symbols.");
			
				p.addAnswer(4, "female with Tay-Sachs",
				true,
				"Correct. The circle indicates a female and the shading indicates the disease.");
			
				p.addAnswer(5, "male of unknown genotype",
				false,
				"No. Males are represented by squares, and shading does not indicate that the genotype is unknown.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334915;


		
		

		
			
			p.question = "A man who can roll his tongue and a woman who cannot roll her tongue have a son who can roll his tongue (<i>R</i> = can roll tongue; <i>r</i> = can\'t roll tongue). The son is curious about whether his father is homozygous or heterozygous for the tongue-rolling trait. Which of the following facts would allow him to know?\n (<script type=\"text/javascript\">ebook(\'1404\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "His father\'s mother cannot roll her tongue.",
				true,
				"Correct. If his father\'s mother cannot roll her tongue, then his father must be heterozygous.");
			
				p.addAnswer(2, "His paternal grandfather and his paternal grandmother can both roll their tongues.",
				false,
				"No. Because tongue-rolling ability is dominant, this would not tell you whether his father is homozygous or heterozygous.");
			
				p.addAnswer(3, "The son\'s sister is a tongue roller.",
				false,
				"No. She must have inherited the tongue-rolling allele from her father, but this would not help determine whether the father is homozygous or heterozygous for the trait.");
			
				p.addAnswer(4, "The son\'s own daughter cannot roll her tongue.",
				false,
				"No. This would tell him that he himself is heterozygous, but would say nothing about his father.");
			
				p.addAnswer(5, "The son submits his own blood sample to a local genotyping lab, and they establish that he is heterozygous for the trait.",
				false,
				"No. It was already clear that he was heterozygous, because his mother is homozygous recessive.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334916;


		
		

		
			
			p.question = "Michelle and Keith are apparently normal, but their daughter was born with alkaptonuria, an inherited metabolic disorder. If alkaptonuria is like most other human hereditary disorders, the probability of their next child being born with alkaptonuria is _____.\n (<script type=\"text/javascript\">ebook(\'1404\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "0",
				false,
				"No. The chances of their next child having alkaptonuria are significantly greater than 0 because they must both be carriers for the trait.");
			
				p.addAnswer(2, "1/4",
				true,
				"Correct. The probability of their next child having alkaptonuria is one-fourth because they are both heterozygous (carriers) for the trait.");
			
				p.addAnswer(3, "1/2",
				false,
				"No. Alkaptonuria is a recessive trait, and since neither Michelle nor Keith has the disease they must both be heterozygous (carriers) for it.");
			
				p.addAnswer(4, "2/3",
				false,
				"No. Alkaptonuria is a recessive trait, and since neither Michelle nor Keith has the disease they must both be heterozygous (carriers) for it.");
			
				p.addAnswer(5, "3/4",
				false,
				"No. Alkaptonuria is a recessive trait, and since neither Michelle nor Keith has the disease they must both be heterozygous (carriers) for it.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334917;


		
		

		
			
			p.question = "Tom\'s brother suffers from phenylketonuria (PKU), a recessive disorder. The brothers\' parents do not have PKU. What are the chances that Tom, who is normal for this trait, is a carrier of PKU?\n (<script type=\"text/javascript\">ebook(\'1404\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "1/4",
				false,
				"No. He would have a 1/4 chance of not being a carrier and a 1/4 chance of having the disease.");
			
				p.addAnswer(2, "1/3",
				false,
				"No. Consider that both of Tom\'s parents must be heterozygous.");
			
				p.addAnswer(3, "1/2",
				false,
				"No. Remember that you know he does not have the disease.");
			
				p.addAnswer(4, "2/3",
				true,
				"Correct. The parents must both be carriers of PKU. Tom, who is not affected, has a 1/3 chance of not being a carrier and a 2/3 chance of being a carrier.");
			
				p.addAnswer(5, "4/3",
				false,
				"No. The answer cannot exceed 1.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334918;


		
		

		
			
			p.question = "A couple, both descended from eastern European (Ashkenazic) Jews, visit a genetic counselor before trying to have children. In view of their ethnic background, the counselor recommends that they be tested to see if they are carriers for _____. \n (<script type=\"text/javascript\">ebook(\'1404\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "cystic fibrosis",
				false,
				"No. Cystic fibrosis is prevalent in white people of European descent.");
			
				p.addAnswer(2, "hemophilia",
				false,
				"No. Hemophilia is not particularly prevalent among Ashkenazic Jews.");
			
				p.addAnswer(3, "sickle-cell disease",
				false,
				"No. Sickle-cell disease is prevalent in individuals of African descent.");
			
				p.addAnswer(4, "hypercholesterolemia",
				false,
				"No. Hypercholesterolemia is not particularly prevalent among Ashkenazic Jews.");
			
				p.addAnswer(5, "Tay-Sachs",
				true,
				"Correct. There is a disproportionately high incidence of Tay-Sachs disease among Ashkenazic Jews.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334919;


		
		

		
			
			p.question = "Cystic fibrosis, which is usually lethal before the age of reproduction, is a homozygous recessive trait. Why do cases continue to arise, even though people with the disease rarely live to reproduce?\n (<script type=\"text/javascript\">ebook(\'1404\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Because new mutations continually introduce this harmful condition into the population.",
				false,
				"No. Although this could be true, the number of new mutations would not account for most of the new cases.");
			
				p.addAnswer(2, "Because the harmful allele \"hides\" within heterozygous individuals, one-fourth of the offspring of two heterozygotes would be afflicted.",
				true,
				"Correct. Cystic fibrosis is inherited as a Mendelian recessive trait. Affected individuals usually have unaffected parents, both of whom are carriers of the recessive allele.");
			
				p.addAnswer(3, "Because mosquitoes can transfer the disease from person to person.",
				false,
				"No. Cystic fibrosis cannot be acquired in such a fashion.");
			
				p.addAnswer(4, "Because people continue to make inappropriate lifestyle choices.",
				false,
				"No. Cystic fibrosis is not acquired as a result of lifestyle.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334920;


		
		

		
			
			p.question = "The genetic disease cystic fibrosis is caused by a defective allele that _____.\n (<script type=\"text/javascript\">ebook(\'1404\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "encodes a dysfunctional enzyme that fails to break down brain lipids",
				false,
				"No. This is true of Tay-Sachs disease.");
			
				p.addAnswer(2, "causes hemoglobin molecules to malfunction",
				false,
				"No. This is true of sickle-cell disease.");
			
				p.addAnswer(3, "encodes a defective chloride-channel membrane transport protein",
				true,
				"Correct. The absence of the transport protein leads to a high concentration of extracellular chloride, causing a thick, sticky mucus to accumulate outside of cells. This mucus interferes with the normal function of numerous organs.");
			
				p.addAnswer(4, "encodes a neurotoxin",
				false,
				"No. The defective allele has its primary effects in the lungs, pancreas, digestive system, and other internal organs.");
			
				p.addAnswer(5, "encodes an enzyme that breaks down muscle fibers",
				false,
				"No. The defective allele has its primary effects in the lungs, pancreas, digestive system, and other internal organs.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334921;


		
		

		
			
			p.question = "In people with sickle-cell disease, red blood cells break down, clump, and clog the blood vessels. The blood vessels and the broken cells accumulate in the spleen. Among other things this leads to physical weakness, heart failure, joint pain, and brain damage. Such a suite of symptoms can be explained by _____.\n (<script type=\"text/javascript\">ebook(\'1404\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the polygenic nature of sickle-cell disease",
				false,
				"No. Sickle-cell disease is not polygenic.");
			
				p.addAnswer(2, "the pleiotropic effects of the sickle-cell allele",
				true,
				"Correct. Pleiotropy refers to the ability of certain genes to affect multiple characters.");
			
				p.addAnswer(3, "an epistatic interaction between the sickle-cell allele and a proteolytic enzyme gene",
				false,
				"No. The sickle-cell allele is sufficient to cause these symptoms without interacting with another gene.");
			
				p.addAnswer(4, "a bacterial infection interacting with the sickle-cell allele",
				false,
				"No. The sickle-cell allele is sufficient to cause these symptoms without any other interactions.");
			
				p.addAnswer(5, "side effects of the drugs used to cure sickle-cell disease",
				false,
				"No. Drugs do not create this symptom complex.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334922;


		
		

		
			
			p.question = "When two average-height parents give birth to a child exhibiting achondroplasia, it is most likely due to a new mutation. This is because _____.\n (<script type=\"text/javascript\">ebook(\'1404\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the frequency of achondroplasia is unknown",
				false,
				"No. The frequency of achondroplasia is approximately 1 in 25,000.");
			
				p.addAnswer(2, "achondroplasia is a relatively rare disorder",
				false,
				"No. Although the disorder is relatively rare, that doesn\'t explain why it is probably caused by a new mutation in this case.");
			
				p.addAnswer(3, "achondroplasia is caused by an allele that is always expressed, therefore the parents must not have the allele",
				true,
				"Correct. Achondroplasia, a form of dwarfism, is due to a dominant allele.");
			
				p.addAnswer(4, "such mutations are statistically predictable",
				false,
				"No. To a degree, but another choice provides a better answer to the question.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334923;


		
		

		
			
			p.question = "It is far more common to find human genetic disease caused by _____ alleles than by _____ alleles because _____.\n (<script type=\"text/javascript\">ebook(\'1404\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "dominant; recessive; dominant alleles have an evolutionary advantage over recessive alleles",
				false,
				"No. Dominant genes do not necessarily have an evolutionary advantage over recessive alleles.");
			
				p.addAnswer(2, "dominant; recessive; dominant alleles became dominant because they aid the survival of the organism carrying them",
				false,
				"No. Whether an allele is dominant or recessive is not relevant to an allele\'s role in affecting the survival of the organism carrying it.");
			
				p.addAnswer(3, "recessive; dominant; harmful recessive alleles can survive in the heterozygote without any selection pressure against them",
				true,
				"Correct. Lethal dominant alleles are much less common than lethal recessive ones because the effects of lethal dominants are not masked in heterozygotes.");
			
				p.addAnswer(4, "recessive; dominant; even when homozygous, recessive alleles usually do not cause as much damage as dominant alleles",
				false,
				"No. Recessive alleles can be just as damaging as dominant ones.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334924;


		
		

		
			
			p.question = "Huntington\'s disease is an example of a genetic disorder caused by _____.\n (<script type=\"text/javascript\">ebook(\'1404\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "a lethal dominant allele that afflicts an individual later in life",
				true,
				"Correct. By the time symptoms are evident, the individual may have already transmitted the allele to his or her children.");
			
				p.addAnswer(2, "a nonlethal dominant allele",
				false,
				"No. The disorder is caused by a dominant allele, but it is lethal.");
			
				p.addAnswer(3, "a late-acting recessive allele",
				false,
				"No. The disease is late-acting, but the allele is dominant.");
			
				p.addAnswer(4, "homozygous recessive alleles",
				false,
				"No. The allele is dominant.");
			
				p.addAnswer(5, "multiple alleles",
				false,
				"No. A single allele causes the disease.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334925;


		
		

		
			
			p.question = "Heart disease, diabetes, cancer, alcoholism, and many mental illnesses can best be described as _____.\n (<script type=\"text/javascript\">ebook(\'1404\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "simple Mendelian disorders",
				false,
				"No. These afflictions are all considered to be multifactorial. Lifestyle and environmental factors can affect the expression of these genes.");
			
				p.addAnswer(2, "infectious diseases caused by microorganisms",
				false,
				"No. They are not infectious.");
			
				p.addAnswer(3, "multifactorial disorders with a possible polygenic component",
				true,
				"Correct. These disorders involve several genes and environmental factors.");
			
				p.addAnswer(4, "the symptoms of Huntington\'s disease",
				false,
				"No. Except for mental illness, these are not symptoms of Huntington\'s disease.");
			
				p.addAnswer(5, "the results of an unhealthy lifestyle",
				false,
				"No. Even people with healthy lifestyles can be afflicted with some of these diseases.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334926;


		
		

		
			
			p.question = "Fetal cells may be removed along with fluid from the womb by a process known as _____.\n (<script type=\"text/javascript\">ebook(\'1404\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "karyotyping",
				false,
				"No. However, karyotyping is process that may be performed on fetal cells after amniocentesis.");
			
				p.addAnswer(2, "testcrossing",
				false,
				"No. A testcross is a method for determining the genotype of an organism with a dominant phenotype.");
			
				p.addAnswer(3, "amniocentesis",
				true,
				"Correct. In amniocentesis, a small amount of the amniotic fluid is extracted for testing.");
			
				p.addAnswer(4, "sonogramming",
				false,
				"No. A sonogram is not invasive.");
			
				p.addAnswer(5, "chorionic villus sampling",
				false,
				"No. CVS does not require taking amniotic fluid.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334927;


		
		

		
			
			p.question = "In which genetic testing procedure would a physician remove a small tissue sample from a membrane of fetal genetic origin?\n (<script type=\"text/javascript\">ebook(\'1404\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "chorionic villus sampling",
				true,
				"Correct. The cells sampled are derived from the fetus; therefore, a karyotype of the fetus can be created using these cells.");
			
				p.addAnswer(2, "amniocentesis",
				false,
				"No. During amniocentesis a physician inserts a needle into the uterus and removes amniotic fluid. Disorders could be detected from chemicals present in the fluid or by karyotyping of fetal cells floating in the fluid.");
			
				p.addAnswer(3, "fetoscopy",
				false,
				"No. During fetoscopy, a viewing scope is inserted into the uterus. This procedure allows a physician to look for visible abnormalities, but it does not involve the removal of any tissue.");
			
				p.addAnswer(4, "ultrasound",
				false,
				"No. In this technique sound waves are used to produce an image of the fetus. This is a non-invasive procedure and does not involve the removal of any tissue.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

