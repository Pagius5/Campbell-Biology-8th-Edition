

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "21: Genomes and Their Evolution > Practice Test";
	ak.quiz_loc_with_commas = "21: Genomes and Their Evolution, Practice Test";
	ak.quiz_title = "Practice Test";

	
		ak.help_url = "../../placeholders/help_placeholder.html";
	
	ak.essay_total = 0;
	ak.pair_problem_total = 0;
	ak.pair_total = 0;
	ak.problem_total = 34;
	ak.non_essay_total = 34;
	ak.scored_item_total = 34;

	
	
	


	
	ak.copyright_date = "2008";
	ak.brandname = "Pearson Benjamin Cummings";
	ak.legal = "../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.pearsoned.com%2Flegal%2Findex.htm";


	// Loop over all problems
	
	
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335350;


		
		

		
			
			p.question = "Preparing a physical map of the genome involves _____. (<script type=\"text/javascript\">ebook(\'2101\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "ordering markers such as RFLPs within the genome",
				false,
				"No. This is part of preparing a genetic map.");
			
				p.addAnswer(2, "ordering markers such as simple sequence repeats within the genome",
				false,
				"No. This is part of preparing a genetic map.");
			
				p.addAnswer(3, "cutting the DNA of each chromosome into restriction fragments that overlap, and then determining the original order of the fragments",
				true,
				"Correct. In this way, fragments can be assigned to a sequential order that corresponds to their order in a chromosome.");
			
				p.addAnswer(4, "determining the nucleotide sequence of small genomic fragments",
				false,
				"No. DNA sequencing is not a necessary part of physical mapping.");
			
				p.addAnswer(5, "all of the above",
				false,
				"No. Only one of the other answers is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335351;


		
		

		
			
			p.question = "What is an advantage of the whole genome shotgun sequencing approach, compared to the ordered process used by the International Human Genome Consortium? (<script type=\"text/javascript\">ebook(\'2101\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "The whole genome shotgun approach eliminates the need for cloning.",
				false,
				"No. a clone library is made, then individual clones are sequenced.");
			
				p.addAnswer(2, "The whole genome shotgun approach is much faster.",
				true,
				"Yes - the procedure eliminates physical mapping and ordering of large cloned DNA fragments.");
			
				p.addAnswer(3, "The whole genome shotgun approach requires less computational power.",
				false,
				"No. the opposite is true.");
			
				p.addAnswer(4, "The whole genome shotgun approach is more accurate.",
				false,
				"No. the approach is susceptible to some errors.");
			
				p.addAnswer(5, "The whole genome shotgun approach handles repetitive sequences better.",
				false,
				"No. the opposite is true.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335352;


		
		

		
			
			p.question = "For cloning DNA fragments of 100,000 base pairs, one would use ___. (<script type=\"text/javascript\">ebook(\'2101\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Phage vectors.",
				false,
				"No. Phage vectors accommodate fragments of up to 10-20 kb.");
			
				p.addAnswer(2, "Plasmids.",
				false,
				"No. plasmids accommodate fragments of several kb.");
			
				p.addAnswer(3, "Yeast artificial chromosomes",
				false,
				"No. YACs accommodate million base pair fragments.");
			
				p.addAnswer(4, "Bacterial artificial chromosomes",
				true,
				"Correct - BACs are a workhorse vector for large genome sequencing projects.");
			
				p.addAnswer(5, "Any of the above.",
				false,
				"No. the above vectors accommodate DNA fragments in different size ranges.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335353;


		
		

		
			
			p.question = "What is a limitation or disadvantage of the whole genome shotgun (WGS) approach to sequencing? (<script type=\"text/javascript\">ebook(\'2102\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "WGS requires more cloning steps.",
				false,
				"No. the opposite is true.");
			
				p.addAnswer(2, "WGS cannot be performed by automated DNA sequencers.",
				false,
				"No. Celera and the International Human Genome Consortium both used automated DNA sequencers");
			
				p.addAnswer(3, "WGS has difficulty with repeated sequences because there is no corresponding physical map.",
				true,
				"Correct - Celera\'s genome assembly used the mapping data from the International Human Genome Consortium.");
			
				p.addAnswer(4, "WGS takes more time.",
				false,
				"No. the speed of WGS is its primary advantage.");
			
				p.addAnswer(5, "None of the above are disadvantages or limitations of the WGS approach.",
				false,
				"No. one of the above is a limitation of WGS.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335354;


		
		

		
			
			p.question = "Once an organism\'s genome sequence has been determined, how do scientists generally start identifying all the genes within the genome? (<script type=\"text/javascript\">ebook(\'2102\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Analyze the sequence using software that scans the sequence for telltale sequence elements such as promoters, transcription start and stop sites, and so on.",
				true,
				"Correct. This is the most efficient way of identifying potential new genes.");
			
				p.addAnswer(2, "Hybridize the DNA with probes specific for known genes from other organisms.",
				false,
				"No. This wouldn\'t be terribly efficient, and in any case would miss all genes with no known counterpart in another species.");
			
				p.addAnswer(3, "Use DNA microarrays to examine the expression of huge numbers of sequences from the genome under different conditions.",
				false,
				"No. DNA microarrays are extremely useful for examining gene expression patterns (among other things), but they are not the most efficient way of identifying genes within genomes.");
			
				p.addAnswer(4, "Individually mutate all of the nucleotides within the genome, and determine which mutations cause a detectable phenotype.",
				false,
				"No. Although this would likely tell you where many of the genes are, it would not be very efficient and would miss all the genes that do not cause a detectable phenotype.");
			
				p.addAnswer(5, "None of the above.",
				false,
				"No, that is incorrect.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335355;


		
		

		
			
			p.question = "What tool or resource is useful for identifying previously unknown protein-coding genes in a genomic DNA sequence? (<script type=\"text/javascript\">ebook(\'2102\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "DNA microarrays",
				false,
				"No. these are used to analyze gene expression.");
			
				p.addAnswer(2, "Bacterial artificial chromosomes (BACs)",
				false,
				"No. BACs are cloning vectors.");
			
				p.addAnswer(3, "Software that searches for translational start and stop signals.",
				true,
				"Correct - these identify putative coding sequences.");
			
				p.addAnswer(4, "Protein structures database",
				false,
				"No. we cannot yet predict protein structure from sequence information, so a protein structure database is not useful in characterizing unknown genes.");
			
				p.addAnswer(5, "All of the above",
				false,
				"No. there is only one correct answer.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335356;


		
		

		
			
			p.question = "An example of a systems biology experiment might be _________. (<script type=\"text/javascript\">ebook(\'2104\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Determining what gene mutation causes insulin resistance.",
				false,
				"No. That is not a systems biology experiment.");
			
				p.addAnswer(2, "Determining the normal biochemical function of the gene involved in insulin resistance.",
				false,
				"No. That is not a systems biology experiment.");
			
				p.addAnswer(3, "Determining how insulin resistance affects transcription of thousands of other genes in the genome.",
				true,
				"Correct. That is an example of a systems biology experiment.");
			
				p.addAnswer(4, "Comparing the insulin resistance gene in human, mouse and chimpanzee genomes.",
				false,
				"No. That is not a systems biology experiment.");
			
				p.addAnswer(5, "Any of the above.",
				false,
				"No. Only one of the above answers is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335357;


		
		

		
			
			p.question = "NCBI provides ________. (<script type=\"text/javascript\">ebook(\'2102\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "BLAST",
				false,
				"No. NCBI does have this, but there is a better answer.");
			
				p.addAnswer(2, "A database of protein structures",
				false,
				"No. NCBI does have this, but there is a better answer.");
			
				p.addAnswer(3, "Genbank",
				false,
				"No. NCBI does have this, but there is a better answer.");
			
				p.addAnswer(4, "All of the above.",
				true,
				"Correct - the NCBI also provides access to Pubmed, an index of biomedical journal articles, and other resources.");
			
				p.addAnswer(5, "None of the above.",
				false,
				"No. the NCBI provides at least one of the above.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335358;


		
		

		
			
			p.question = "The human genome is thought to contain about how many genes? (<script type=\"text/javascript\">ebook(\'2103\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "1,000&ndash;2,000",
				false,
				"No. This is close to the number in some simple bacterial species.");
			
				p.addAnswer(2, "4,000&ndash;6,000",
				false,
				"No. This is close to the number in <i>E. coli</i> and in yeast.");
			
				p.addAnswer(3, "13,000&ndash;15,000",
				false,
				"No. This is close to the number in <i>Drosophila melanogaster</i>.");
			
				p.addAnswer(4, "20,000&ndash;25,000",
				true,
				"Correct. This was a major surprise, as many scientists expected the number to be 100,000 or even higher.");
			
				p.addAnswer(5, "100,000&ndash;110,000",
				false,
				"No. But many scientists expected that there would be this many.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335359;


		
		

		
			
			p.question = "The number of genes in an organism\'s genome is not a perfect indication of the organism\'s complexity because _________. (<script type=\"text/javascript\">ebook(\'2103\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "alternative splicing can increase the number of polypeptides made from a single pre-mRNA",
				false,
				"No. This is correct, but it is not the best response.");
			
				p.addAnswer(2, "post-translational modifications can increase the types of proteins produced by a single gene",
				false,
				"No. This is correct, but it is not the best response.");
			
				p.addAnswer(3, "individual polypeptides can interact to form multiple types of protein complexes",
				false,
				"No. This is correct, but it is not the best response.");
			
				p.addAnswer(4, "individual genes can be expressed in more or less complex ways in different organisms",
				false,
				"No. This is correct, but it is not the best response.");
			
				p.addAnswer(5, "all of the above",
				true,
				"Correct. Although the number of genes in the genome is a useful indicator of an organism\'s complexity, many other factors can contribute as well.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335360;


		
		

		
			
			p.question = "Among the organisms listed below, which has the largest genome? (<script type=\"text/javascript\">ebook(\'2103\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "<i>Homo sapiens</i>",
				false,
				"No. the human genome is dwarfed by some other genomes.");
			
				p.addAnswer(2, "Brewer\'s yeast <i>Saccharomyces cerevisiae</i>",
				false,
				"No. yeast have relatively small, compact genomes.");
			
				p.addAnswer(3, "Archaea",
				false,
				"No. prokaryotes have smaller genomes than eukaryotes.");
			
				p.addAnswer(4, "<i>Fritillaria</i> lilies",
				false,
				"No. but these lilies have genomes much larger than humans.");
			
				p.addAnswer(5, "<i>Amoeba dubia</i>",
				true,
				"Correct - this genome has not been sequenced!");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335361;


		
		

		
			
			p.question = "Why might the number of genes in the genome underestimate the number of different proteins that an organism makes? (<script type=\"text/javascript\">ebook(\'2103\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "The genome rearranges its DNA so that different cells can make different proteins.",
				false,
				"No. this happens only in immune system cells, and only for antigen-binding proteins.");
			
				p.addAnswer(2, "Many genes undergo alternative splicing, so that different proteins with different exon combinations are produced from the same gene.",
				true,
				"Correct - about 60% of human genes undergo alternative splicing.");
			
				p.addAnswer(3, "Organisms take up foreign DNA and make proteins encoded by these foreign DNA molecules.",
				false,
				"No. this happens only rarely.");
			
				p.addAnswer(4, "All of the above reasons.",
				false,
				"No. only one of the above is correct.");
			
				p.addAnswer(5, "None of the above reasons.",
				false,
				"No. one of the above is a correct answer.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335362;


		
		

		
			
			p.question = "What factor accounts most for the difference in genome size between vertebrates and prokaryotes?  (<script type=\"text/javascript\">ebook(\'2103\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Vertebrates have more protein-coding genes.",
				false,
				"No. vertebrates have 4-5 times as many genes, but other differences are larger.");
			
				p.addAnswer(2, "Vertebrates have longer and more complex upstream regulatory sequences",
				false,
				"No. eukaryotic regulatory sequences are indeed more complex and much longer, but these still account for only a minor fraction of the size difference.");
			
				p.addAnswer(3, "Vertebrates have more genes for functional RNA molecules.",
				false,
				"No. vertebrates and other eukaryotes do have more rRNA genes and genes for microRNAs, but these still account for only a minor fraction of the size difference.");
			
				p.addAnswer(4, "Vertebrates have more non-coding DNA sequences.",
				true,
				"Yes - non-coding, apparently non-functional DNA sequences such as introns and transposon-derived repeats comprise the greatest percentage of the human and other vertebrate genomes.");
			
				p.addAnswer(5, "All of the above are equal contributors.",
				false,
				"No. one factor accounts for a far greater percentage of the size difference than any other.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335363;


		
		

		
			
			p.question = "There is about 1,000 times as much DNA in a human cell as in an <i>E. coli</i> cell, but only about 5 times as many genes. What accounts for this discrepancy? (<script type=\"text/javascript\">ebook(\'2104\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "A human cell has much more noncoding DNA.",
				true,
				"Correct. In humans, a significant amount of the DNA does not code for proteins or RNA.");
			
				p.addAnswer(2, "The DNA packing is much more complex in a prokaryotic cell.",
				false,
				"No. DNA packing is more complex in eukaryotic cells.");
			
				p.addAnswer(3, "Most of the genes in a human cell are turned off.",
				false,
				"No. The question is not whether the genes are turned off, but what accounts for the difference in the number of genes.");
			
				p.addAnswer(4, "<i>E. coli</i> bacteria are less able to respond to their environment than humans.",
				false,
				"No. This answer does not address the question. In any case, bacteria are as able, if not more able, to respond to their environment as humans.");
			
				p.addAnswer(5, "Human cells are much larger than <i>E. coli</i> cells.",
				false,
				"No. This is true, but it does not address the question.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335364;


		
		

		
			
			p.question = "The eukaryotic genome is much less tidy and compact than the genomes of prokaryotes. Eukaryotes, but not prokaryotes, have ________. (<script type=\"text/javascript\">ebook(\'2104\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "a large proportion of their DNA that is never expressed",
				false,
				"No. This choice is correct, but there is a better response.");
			
				p.addAnswer(2, "introns, some of which are bigger than the genes they interrupt",
				false,
				"No. This choice is correct, but there is a better response.");
			
				p.addAnswer(3, "short sequences of nucleotides that may be repeated thousands of times",
				false,
				"No. This choice is correct, but there is a better response.");
			
				p.addAnswer(4, "all of the above",
				true,
				"Correct. The genomes of humans and other eukaryotes also include an enormous amount of DNA that does not program the synthesis of RNA or protein. Such DNA includes introns and repetitive DNA.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. Just the opposite is true.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335365;


		
		

		
			
			p.question = "Who discovered \"jumping genes\" (transposons)? (<script type=\"text/javascript\">ebook(\'2104\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Chase",
				false,
				"No. Chase is best known for her work with bacteriophages.");
			
				p.addAnswer(2, "Tatum",
				false,
				"No. Tatum, along with Beadle, proposed the one gene&mdash;one enzyme hypothesis.");
			
				p.addAnswer(3, "McClintock",
				true,
				"Correct. Barbara McClintock was the first to discover transposons when she found evidence for mobile genetic elements that affected the color of developing corn kernels.");
			
				p.addAnswer(4, "Crick",
				false,
				"No. Crick is best known as the codiscoverer of the structure of DNA.");
			
				p.addAnswer(5, "Pauling",
				false,
				"No. Although Pauling is well known for many contributions to biology, the discovery of transposons is not one of them.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335366;


		
		

		
			
			p.question = "Satellite DNA in eukaryotes consists of ________. (<script type=\"text/javascript\">ebook(\'2104\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Non-chromosomal DNA",
				false,
				"No. although non-chromosomal DNA acquired by lateral gene transfer may have a different base composition, satellite DNA is a part of chromosomal DNA.");
			
				p.addAnswer(2, "Simple sequence repeats that have a different base composition than the rest of the genomic DNA",
				true,
				"Correct - the different base composition causes the simple sequence repeat DNA to band at a different buoyant density, a so-called \"satellite\" band.");
			
				p.addAnswer(3, "DNA from outer space",
				false,
				"No. DNA from outer space would not be found in eukaryotes on Earth.");
			
				p.addAnswer(4, "Genes acquired by lateral gene transfer from another species.",
				false,
				"No. satellite DNAs are not generally acquired from other species.");
			
				p.addAnswer(5, "Pseudogenes",
				false,
				"No. pseudogenes are copies of normal cellular genes that have accumulated mutations and are no longer functional.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335367;


		
		

		
			
			p.question = "Alu elements _________. (<script type=\"text/javascript\">ebook(\'2104\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Are found only in the human genome.",
				false,
				"No. Alu elements are found in other primate genomes.");
			
				p.addAnswer(2, "Encode their own transposase.",
				false,
				"No. Alu elements do not contain a protein-coding gene.");
			
				p.addAnswer(3, "Make up nearly 50% of the human genome.",
				false,
				"No. they account for about 10% of the human genome - a substantial fraction, but not close to half.");
			
				p.addAnswer(4, "Are present in all mammals.",
				false,
				"No. they are primate-specific.");
			
				p.addAnswer(5, "Are derived from or related to transposable elements.",
				true,
				"Correct - they appear to be derived from a retrotransposon.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335368;


		
		

		
			
			p.question = "Given that about 25% of the mammalian genome is associated with genes, including introns and regulatory sequence, what would be the approximate average length of DNA per gene, if the genome contained 20,000 genes? (<script type=\"text/javascript\">ebook(\'2104\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "1,000 base pairs.",
				false,
				"No. this is the typical size of a prokaryotic gene.");
			
				p.addAnswer(2, "10,000 base pairs",
				false,
				"No. 20,000 genes of this size would occupy 200 million base pairs, which is far less than 25% of a typical mammalian genome.");
			
				p.addAnswer(3, "40,000 base pairs",
				true,
				"Correct - 20,000 genes of this size would occupy 800 million base pairs, which is approximately 1/4 of the typical mammalian genome.");
			
				p.addAnswer(4, "20,000 base pairs",
				false,
				"No. 20,000 genes of this size would occupy 400 million base pairs, which is approximately 1/8 of the typical mammalian genome.");
			
				p.addAnswer(5, "80,000 base pairs",
				false,
				"No. 20,000 genes of this size would occupy 1.6 billion base pairs, which is approximately &#189; of the typical mammalian genome.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335369;


		
		

		
			
			p.question = "Segments of eukaryotic DNA that can move from one site to another in the genome by means of an RNA intermediate are called _________. (<script type=\"text/javascript\">ebook(\'2104\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Alleles",
				false,
				"No. Alleles are alternate versions of a gene.");
			
				p.addAnswer(2, "Plasmids",
				false,
				"No. Plasmids are circular pieces of DNA apart from the main bacterial chromosome.");
			
				p.addAnswer(3, "Transposons",
				false,
				"No. Transposons move by means of a DNA intermediate.");
			
				p.addAnswer(4, "Introns",
				false,
				"No. Introns are unexpressed regions of eukaryotic DNA.");
			
				p.addAnswer(5, "Retrotransposons",
				true,
				"Correct. Retrotransposons leave a copy at the original site during transposition. To insert at another site, the RNA intermediate is first converted back to DNA by reverse transcriptase.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335370;


		
		

		
			
			p.question = "Multigene families arise as a result of _________. (<script type=\"text/javascript\">ebook(\'2105\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "transformation",
				false,
				"No. This is the process by which a bacterium takes up DNA from the surrounding solution.");
			
				p.addAnswer(2, "errors during DNA replication and recombination",
				true,
				"Correct. Multigene families consist of identical or very similar genes.");
			
				p.addAnswer(3, "RNA splicing",
				false,
				"No. This involves the removal of introns and the connecting of exons in an mRNA strand.");
			
				p.addAnswer(4, "protein degradation",
				false,
				"No. Protein degradation helps regulate the activity of a protein.");
			
				p.addAnswer(5, "the action of restriction enzymes",
				false,
				"No. Restriction enzymes are bacterial enzymes used to cut foreign DNA into fragments.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335371;


		
		

		
			
			p.question = "Chromosomal rearrangements may be important in evolution because ________. (<script type=\"text/javascript\">ebook(\'2105\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Offspring who inherit two differently arranged sets of chromosomes instantly become a new species",
				false,
				"No. pairing of homologous chromosomes in meiotic prophase would be affected, and such offspring are most likely to be sterile.");
			
				p.addAnswer(2, "Chromosomal rearrangements caused the extinction of dinosaurs, thereby allowing mammals to become dominant",
				false,
				"No. while chromosome arrangements may have contributed to the evolutionary radiation of mammals, the available evidence indicates that the cause of dinosaur extinction was a large asteroid impact.");
			
				p.addAnswer(3, "Chromosome rearrangements cause new genes to evolve",
				false,
				"No. this would be a rare event, and not the most important way chromosome rearrangements contribute to speciation.");
			
				p.addAnswer(4, "Chromosome rearrangements lead to gene duplication, thus generating a \"spare\" copy of the gene that is free to evolve and acquire a new function",
				true,
				"Correct - multigene families arose through gene duplication events mediated by chromosome rearrangements.");
			
				p.addAnswer(5, "Chromosome rearrangements may cause genetic diseases",
				false,
				"No. although this statement is true, it does not contribute to evolution of new species.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335372;


		
		

		
			
			p.question = "The molecular data indicate that the globin gene family ________. (<script type=\"text/javascript\">ebook(\'2105\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Has two distinct evolutionary lineages, originating from an ancestral alpha-globin gene and an ancestral beta-globin gene",
				false,
				"No. alpha and beta globin are clearly related in sequence.");
			
				p.addAnswer(2, "arose through convergent evolution, where genes of different ancestry become similar over time because they have the same function",
				false,
				"No. the opposite is true.");
			
				p.addAnswer(3, "Evolved from a common globin gene ancestor that gave rise to both alpha- and beta-globin genes, as well as myoglobin and plant leghemoglobin",
				true,
				"Correct - amino acid similarities and phylogenetic trees support this model.");
			
				p.addAnswer(4, "Evolved from a common ancestor of the alpha- and beta-globin genes, but that myoglobin and leghemoglobin arose from a different ancestor",
				false,
				"No. myoglobin and leghemoglobin share clear sequence similarity with alpha- and beta-globins.");
			
				p.addAnswer(5, "Evolved through exon duplication",
				false,
				"No. whole genes duplicated, not individual exons.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335373;


		
		

		
			
			p.question = "A rapid way for natural evolution to alter a protein-coding gene to encode a protein with a different structure and function is _________. (<script type=\"text/javascript\">ebook(\'2105\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Exon duplication and exon shuffling",
				true,
				"Correct - many protein domains are encoded by an exon, so duplicated exons and new exons can modify protein structure and function.");
			
				p.addAnswer(2, "Single nucleotide substitutions",
				false,
				"No. most single nucleotide substitutions have no effect on protein structure or function.");
			
				p.addAnswer(3, "Mutations in the regulatory sequence of a gene",
				false,
				"No. this may alter the expression of the gene, but will not change the protein itself.");
			
				p.addAnswer(4, "Homologous recombination",
				false,
				"No. only non-homologous recombination can provide new protein structure combinations.");
			
				p.addAnswer(5, "Recombinant DNA",
				false,
				"No. this method is used in genetic engineering, but not in natural evolution.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335374;


		
		

		
			
			p.question = "How do transposable elements promote functional genetic diversity in a population? (<script type=\"text/javascript\">ebook(\'2105\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Transposable elements that insert into an intron may provide an alternative splice site, leading to protein with a new exon.",
				false,
				"No. this is a good answer, but not the best.");
			
				p.addAnswer(2, "Transposable element insertion into a regulatory sequence may alter the strength of transcription.",
				false,
				"No. this is a good answer, but not the best.");
			
				p.addAnswer(3, "A transposable element gene such as integrase or reverse transcriptase may become part of a normal cellular gene.",
				true,
				"No. this is a good answer, but not the best.");
			
				p.addAnswer(4, "A transposable element may carry along a gene or an exon to a different locus, leading to exon duplication or exon shuffling.",
				false,
				"No. this is a good answer, but not the best.");
			
				p.addAnswer(5, "A transposable element may cause genetic diversity by any of the above methods.",
				false,
				"Correct - any variation that confers a selective advantage will become predominant in the population.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335375;


		
		

		
			
			p.question = "Why might active transposons be rare in natural populations? (<script type=\"text/javascript\">ebook(\'2105\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Organisms do not wish to evolve new genes.",
				false,
				"No. such teleological thinking is not part of science.");
			
				p.addAnswer(2, "Individuals with active transposons are usually eliminated by natural selection, because transposition events usually produce harmful mutations.",
				true,
				"Correct - any genomic mutation or rearrangement is fare more likely to be harmful than beneficial.");
			
				p.addAnswer(3, "Multiple copies of a transposon suppress each other.",
				false,
				"No. a transposase or a reverse transcriptase can facilitate transposition of any member of the same family.");
			
				p.addAnswer(4, "The immune system attacks active transposons as foreign invaders.",
				false,
				"No. since transposons are present in the host genome, they are not recognized as foreign.");
			
				p.addAnswer(5, "Transposons have a dramatically higher rate of mutation.",
				false,
				"No. while reverse transcriptase is more error-prone, the chromosomal DNA copies appear to experience the same rate of mutation as most other non-coding DNA.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335376;


		
		

		
			
			p.question = "The highly conserved sequence element present within homeotic genes is called the _________. (<script type=\"text/javascript\">ebook(\'2106\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Homeobox",
				true,
				"Correct. Similar or identical nucleotide sequences are found in homeobox segments from a wide range of organisms.");
			
				p.addAnswer(2, "<i>bicoid</i>",
				false,
				"No. This is a gene that is a type of egg-polarity gene.");
			
				p.addAnswer(3, "ced-3",
				false,
				"No. This is a gene that codes for a protein that plays a role in apoptosis (cell suicide).");
			
				p.addAnswer(4, "Morphogen",
				false,
				"No. Morphogens are proteins, not nucleic acids.");
			
				p.addAnswer(5, "TATA box",
				false,
				"No. A TATA box is part of a promoter.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335377;


		
		

		
			
			p.question = "The similarity of the homeobox in many different kinds of organisms is evidence _________. (<script type=\"text/javascript\">ebook(\'2106\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "of convergent evolution",
				false,
				"No. Highly unlikely.");
			
				p.addAnswer(2, "of analogy",
				false,
				"No. Analogy is similarity due to convergence in evolution.");
			
				p.addAnswer(3, "that it is not responsive to natural selection",
				false,
				"No. The conservation of the homeobox sequence indicates that selection has acted to eliminate variants.");
			
				p.addAnswer(4, "of its recent origin",
				false,
				"No. If the homeobox arose recently, it would be shared by fewer kinds of organisms. It might even be unique to a specific group.");
			
				p.addAnswer(5, "of the common ancestry of different life-forms",
				true,
				"Correct. Moreover, such conservation is evidence that the homeobox evolved early in the history of life, and was sufficiently valuable to have been conserved virtually unchanged for hundreds of millions of years.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335378;


		
		

		
			
			p.question = "What can be learned from comparing the genomes of distantly related species, such as yeast and humans, or plants and fruit flies? (<script type=\"text/javascript\">ebook(\'2106\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Conserved genes provide insight into their evolutionary relationships.",
				true,
				"Correct - genes present in both species can provide information about when they last shared a common ancestor, and insight into their evolutionary lineages.");
			
				p.addAnswer(2, "Genes found in humans but not in yeast provide insight into human evolution.",
				false,
				"No. this comparison is too distant to justify such conclusions.");
			
				p.addAnswer(3, "Conserved genes indicate that they were transferred laterally from one species to the other.",
				false,
				"No. usually conserved genes are descended from a common ancestor.");
			
				p.addAnswer(4, "All of the above.",
				false,
				"No. at least one of the above is incorrect.");
			
				p.addAnswer(5, "None of the above.",
				false,
				"No. at least one of the above is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335379;


		
		

		
			
			p.question = "What is a valid rationale for sequencing the chimpanzee genome? (<script type=\"text/javascript\">ebook(\'2106\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "To reconstruct chimpanzees if they become extinct.",
				false,
				"No. sequencing the genome is a poor substitute for conservation.");
			
				p.addAnswer(2, "To be able to study human diseases in chimpanzees.",
				false,
				"No. chimpanzees are not a good model system for human disease because they are too difficult to obtain and expensive to maintain.");
			
				p.addAnswer(3, "To determine whether another human pathogen like HIV could originate from viruses that infect chimpanzees.",
				false,
				"No. the genome sequence would not be especially helpful with this question.");
			
				p.addAnswer(4, "To determine whether any chimpanzee genes could be used to genetically engineer superior humans, or vice versa.",
				false,
				"No. such experiments would be highly unethical.");
			
				p.addAnswer(5, "To determine what genetic changes determine uniquely human features like large brains and language ability.",
				true,
				"Correct - such comparisons have identified genes that have undergone especially rapid evolution in the human lineage, but not in chimpanzees or mice.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335380;


		
		

		
			
			p.question = "Detailed comparison of the human and chimpanzee genomes has revealed that ________. (<script type=\"text/javascript\">ebook(\'2106\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Humans and chimpanzee genomes are so similar that they should be considered to be the same species",
				false,
				"No. humans and chimpanzees are clearly different biological species.");
			
				p.addAnswer(2, "Most differences are in the form of single nucleotide substitutions",
				false,
				"No. other kinds of genetic differences are more frequent.");
			
				p.addAnswer(3, "Most differences are in the form of chromosomal rearrangements",
				true,
				"Correct - insertions, deletions, and rearrangements are more frequent than single nucleotide changes.");
			
				p.addAnswer(4, "Chimpanzee transposons are different from human transposons",
				false,
				"No. the two species share most of the same transposons, such as Alu elements and LINEs.");
			
				p.addAnswer(5, "Chimpanzees have more chromosomes",
				false,
				"No. while chimpanzees have one more chromosome pair than humans, this was known well before sequencing the genome.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335381;


		
		

		
			
			p.question = "A gene family has been identified that has undergone  extensive duplication in humans, but is present in only one or a few copies in other primates or other mammals. What experimental approaches could be used to determine the function of this gene and its significance in human evolution? (<script type=\"text/javascript\">ebook(\'2106\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Reduce the number of copies of this gene in a human subject.",
				false,
				"No. this experiment cannot be done, for both ethical and technical reasons.");
			
				p.addAnswer(2, "Create knockout mice to determine their phenotype.",
				true,
				"Correct - this is both feasible and likely to yield information about the function of the gene.");
			
				p.addAnswer(3, "Determine the timing and location of expression of these genes during embryonic development in fruit flies.",
				false,
				"No. such an experiment would be more informative in mammals or better yet, in primates.");
			
				p.addAnswer(4, "Introduce these genes into yeast and study the phenotype of the resulting cells.",
				false,
				"No. yeast is too distant for this to be likely to yield useful information.");
			
				p.addAnswer(5, "All of the above.",
				false,
				"No. some of the above approaches are not feasible or unlikely to yield useful information.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335382;


		
		

		
			
			p.question = "Why might the dog genome sequencing project prove particularly informative, compared to other mammalian genomes? (<script type=\"text/javascript\">ebook(\'2106\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Genetic variation between breeds may be linked to phenotypic variation.",
				true,
				"Correct - studies have already identified a gene whose alleles determine body size.");
			
				p.addAnswer(2, "Dogs are more closely related to humans than other mammals.",
				false,
				"No. other primates are more closely related to humans; dogs are not more closely related to humans than mice or rats.");
			
				p.addAnswer(3, "The dog genome is smaller than other mammalian genomes.",
				false,
				"No. mammalian genomes are all comparable in size.");
			
				p.addAnswer(4, "The dog genome lacks transposons.",
				false,
				"No. eukaryotic genomes all have transposons and transposon-related sequences.");
			
				p.addAnswer(5, "Dogs have large brains and sophisticated communication abilities.",
				false,
				"No. this may be true to some extent, but there is a better answer.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335383;


		
		

		
			
			p.question = "A group of scientists is attempting to sequence the Neanderthal genome with DNA extracted from Neanderthal bones.  Information from this project might reveal _________. (<script type=\"text/javascript\">ebook(\'2106\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "whether Neanderthals had language ability",
				false,
				"No. it is unlikely that DNA sequence alone can answer this question.");
			
				p.addAnswer(2, "whether Neanderthals are the same species as modern humans",
				false,
				"No. it is unlikely that this question can be answered without knowledge of reproductive barriers between modern humans and Neanderthals.");
			
				p.addAnswer(3, "what genetic differences may be responsible for the superior abilities of modern humans to communicate and make more sophisticated tools",
				true,
				"Correct - the genetic differences are expected to be relatively few, and will narrow the list of candidate genes important for human evolution.");
			
				p.addAnswer(4, "why Neanderthals became extinct",
				false,
				"No. genomic sequence information alone cannot reveal this kind of historic information.");
			
				p.addAnswer(5, "All of the above.",
				false,
				"No. only one of the above is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

