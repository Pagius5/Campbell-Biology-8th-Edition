

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "20: Modern Biotechnology > Practice Test";
	ak.quiz_loc_with_commas = "20: Modern Biotechnology, Practice Test";
	ak.quiz_title = "Practice Test";

	
		ak.help_url = "../../placeholders/help_placeholder.html";
	
	ak.essay_total = 0;
	ak.pair_problem_total = 0;
	ak.pair_total = 0;
	ak.problem_total = 38;
	ak.non_essay_total = 38;
	ak.scored_item_total = 38;

	
	
	


	
	ak.copyright_date = "2008";
	ak.brandname = "Pearson Benjamin Cummings";
	ak.legal = "../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.pearsoned.com%2Flegal%2Findex.htm";


	// Loop over all problems
	
	
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335298;


		
		

		
			
			p.question = "Bacteria use restriction enzymes to _____. (<script type=\"text/javascript\">ebook(\'2001\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "synthesize DNA",
				false,
				"No. These enzymes do not synthesize DNA.");
			
				p.addAnswer(2, "synthesize RNA",
				false,
				"No. These enzymes do not synthesize RNA.");
			
				p.addAnswer(3, "synthesize protein",
				false,
				"No. These enzymes do not synthesize protein.");
			
				p.addAnswer(4, "destroy foreign protein",
				false,
				"No. These enzymes do not break peptide bonds.");
			
				p.addAnswer(5, "destroy foreign DNA",
				true,
				"Correct. Restriction enzymes are used to protect bacteria against intruding DNA from other organisms.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335299;


		
		

		
			
			p.question = "An enzyme that cuts DNA at a symmetrical sequence of bases is called a _____. (<script type=\"text/javascript\">ebook(\'2001\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "reverse transcriptase",
				false,
				"No. Reverse transcriptase catalyzes the formation of a strand of DNA that is complementary to a strand of RNA.");
			
				p.addAnswer(2, "restriction enzyme",
				true,
				"Correct. Restriction enzymes cut DNA molecules at a limited number of specific locations, each of which contains a recognition sequence, or restriction site.");
			
				p.addAnswer(3, "cDNA",
				false,
				"No. cDNA formation is catalyzed by reverse transcriptase.");
			
				p.addAnswer(4, "palindrome",
				false,
				"No. Palindromes are recognition sites.");
			
				p.addAnswer(5, "ligase",
				false,
				"No. Ligases catalyze the formation of phosphodiester bonds.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335300;


		
		

		
			
			p.question = "When a typical restriction enzyme cuts a DNA molecule, the cuts are staggered so that the DNA fragments have single-stranded ends. This is important in recombinant DNA work because _____. (<script type=\"text/javascript\">ebook(\'2001\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "it allows a cell to recognize fragments produced by the enzyme",
				false,
				"No. This is not true.");
			
				p.addAnswer(2, "the single-stranded ends serve as starting points for DNA replication",
				false,
				"No. Different restriction enzymes produce fragments with different sticky ends, which are unlikely to have the appropriate sequence for the initiation of DNA replication.");
			
				p.addAnswer(3, "the fragments will bond to other fragments with complementary single-stranded ends",
				true,
				"Correct. The sticky ends of restriction fragments allow hydrogen bonding with complementary single-stranded stretches on other DNA molecules cut with the same enzyme.");
			
				p.addAnswer(4, "it enables researchers to use the fragments as introns",
				false,
				"No. Introns are segments of eukaryotic genes that are spliced out of mRNA.");
			
				p.addAnswer(5, "only single-stranded DNA segments can code for proteins",
				false,
				"No. This is not true.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335301;


		
		

		
			
			p.question = "In genetic engineering, \"sticky end\" refers to _____. (<script type=\"text/javascript\">ebook(\'2001\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "a technique for finding a gene of interest within a nucleus without destroying the cell",
				false,
				"No. Sticky ends are found at the end of certain DNA molecules.");
			
				p.addAnswer(2, "the ability of plasmids to stick to a bacterial cell wall and thus be taken up into the bacterium",
				false,
				"No. Sticky ends are found at the end of certain DNA molecules.");
			
				p.addAnswer(3, "short bits of single-stranded DNA left at the end of DNA molecules cut by restriction enzymes",
				true,
				"Correct. The sticky ends of restriction fragments allow hydrogen bonds with complementary single-stranded stretches on other DNA molecules cut with the same enzyme.");
			
				p.addAnswer(4, "the site on mRNA that sticks to the DNA during transcription",
				false,
				"No. Sticky ends are products of restriction enzymes.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335302;


		
		

		
			
			p.question = "Which one of the following enzymes could seal a nick in one strand of a double-stranded DNA molecule by creating a sugar-phosphate bond between the adjacent, unjoined nucleotides? (<script type=\"text/javascript\">ebook(\'2001\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "DNA ligase",
				true,
				"Correct. DNA ligase is a fundamental tool in recombinant DNA technology.");
			
				p.addAnswer(2, "reverse transcriptase",
				false,
				"No. Reverse transcriptase catalyzes the formation of cDNA.");
			
				p.addAnswer(3, "restriction enzyme",
				false,
				"No. Restriction enzymes cut DNA at specific recognition sites.");
			
				p.addAnswer(4, "terminator enzyme",
				false,
				"No. Another term is correct.");
			
				p.addAnswer(5, "DNA polymerase",
				false,
				"No. DNA polymerase catalyzes DNA replication.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335303;


		
		

		
			
			p.question = "To create recombinant DNA with long-term stability, it is necessary to have which of the following in the test tube? (<script type=\"text/javascript\">ebook(\'2001\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "hydrogen bonding",
				false,
				"No. Although hydrogen bonds hold strands together, they do not provide long-term stability.");
			
				p.addAnswer(2, "DNA ligase",
				true,
				"Correct. DNA ligase catalyzes the formation of covalent bonds in the sugar-phosphate backbone, cementing the linkage between nucleic acids having complementary sticky ends.");
			
				p.addAnswer(3, "reverse transcriptase",
				false,
				"No. This is an enzyme that catalyzes the formation of cDNA from an mRNA template.");
			
				p.addAnswer(4, "DNA polymerase",
				false,
				"No. DNA polymerase catalyzes DNA synthesis.");
			
				p.addAnswer(5, "heat-resistant DNA polymerase",
				false,
				"No. This is necessary for PCR.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335304;


		
		

		
			
			p.question = "What two enzymes are needed to produce recombinant DNA? (<script type=\"text/javascript\">ebook(\'2001\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "a restriction enzyme and a topoisomerase",
				false,
				"No. However, this choice is partially correct.");
			
				p.addAnswer(2, "a restriction enzyme and a ligase",
				true,
				"Correct. Recombinant DNA technology involves combining genes from two sources, such as different species, into a single molecule. Restriction enzymes cut the segments, and ligase seals the pieces in place.");
			
				p.addAnswer(3, "a restriction enzyme and a polymerase",
				false,
				"No. However, this choice is partially correct.");
			
				p.addAnswer(4, "a polymerase and a ligase",
				false,
				"No. However, this choice is partially correct.");
			
				p.addAnswer(5, "a polymerase and a topoisomerase",
				false,
				"No. Neither of these is required for the production of recombinant DNA.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335305;


		
		

		
			
			p.question = "In recombinant methods, the term \"vector\" refers to _____. (<script type=\"text/javascript\">ebook(\'2001\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the enzyme that cuts DNA into restriction fragments",
				false,
				"No. Vectors are not enzymes.");
			
				p.addAnswer(2, "the sticky ends of a DNA fragment",
				false,
				"No. Vectors can carry DNA.");
			
				p.addAnswer(3, "an RFLP marker",
				false,
				"No. Vectors are not markers.");
			
				p.addAnswer(4, "a plasmid or other agent used to transfer DNA into a living cell",
				true,
				"Correct. A cloning vector is a DNA molecule that can carry foreign DNA into a cell and replicate there.");
			
				p.addAnswer(5, "a DNA probe used to locate a particular gene",
				false,
				"No. Vectors are not probes.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335306;


		
		

		
			
			p.question = "Which arrangement of the following four enzymes represents the order in which they would be used in a typical gene-cloning experiment resulting in the insertion of a cDNA into a bacterial plasmid? Begin with the gene\'s mRNA transcript. (<script type=\"text/javascript\">ebook(\'2001\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "restriction enzyme, reverse transcriptase, DNA polymerase, DNA ligase",
				false,
				"No. Restriction enzymes are used after the reverse transcriptase and DNA polymerase.");
			
				p.addAnswer(2, "restriction enzyme, DNA ligase, reverse transcriptase, DNA polymerase",
				false,
				"No. Restriction enzymes are used after the reverse transcriptase and DNA polymerase.");
			
				p.addAnswer(3, "reverse transcriptase, DNA polymerase, restriction enzyme, DNA ligase",
				true,
				"Correct. Beginning with the mRNA transcript, we use reverse transcriptase to make a cDNA copy, followed by DNA polymerase to make the second strand. A restriction enzyme opens the plasmid for insertion, and ligase seals the gap.");
			
				p.addAnswer(4, "reverse transcriptase, DNA ligase, DNA polymerase, restriction enzyme",
				false,
				"No. The ligase is only used after the restriction enzyme.");
			
				p.addAnswer(5, "reverse transcriptase, restriction enzyme, DNA polymerase, DNA ligase",
				false,
				"No. The DNA polymerase is used immediately after the reverse transcriptase.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335307;


		
		

		
			
			p.question = "A scientist wishing to create an organism capable of breaking down several kinds of toxic waste combines genes from several species of bacteria to create a single \"superbacterium.\" Which of the following would be needed to do this? (<script type=\"text/javascript\">ebook(\'2001\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "nucleic acid probes",
				false,
				"No. Probes would probably be used for locating certain nucleotide sequences, but there is a better answer.");
			
				p.addAnswer(2, "DNA ligase",
				false,
				"No. DNA ligase undoubtedly would be used in making recombinant DNA, but there is a better answer.");
			
				p.addAnswer(3, "plasmids",
				false,
				"No. Plasmids would probably be used as gene vectors, but there is a better answer.");
			
				p.addAnswer(4, "restriction enzymes",
				false,
				"No. Restriction enzymes would probably be used in isolating the desired genes and preparing recombinant DNA, but there is a better answer.");
			
				p.addAnswer(5, "all of the above",
				true,
				"Correct. All of these \"tools\" would be needed.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335308;


		
		

		
			
			p.question = "A nucleic acid probe is used to _____. (<script type=\"text/javascript\">ebook(\'2001\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "clone genes",
				false,
				"No. Host cells, such as bacteria, are often used to clone genes.");
			
				p.addAnswer(2, "produce a large amount of DNA from a tiny amount of DNA",
				false,
				"No. PCR can accomplish this feat.");
			
				p.addAnswer(3, "make exact copies of DNA sequences",
				false,
				"No. Probes do not replicate DNA.");
			
				p.addAnswer(4, "identify genes that have been inserted into bacterial plasmids or separated by electrophoresis",
				true,
				"Correct. A nucleic acid probe is a short single-stranded probe of either DNA or RNA that is complementary to the sequence of interest. It will base-pair with the sequence of interest in a plasmid or gel, revealing the location of that sequence.");
			
				p.addAnswer(5, "make DNA from RNA",
				false,
				"No. This is done by reverse transcriptase.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335309;


		
		

		
			
			p.question = "What is the source of the reverse transcriptase used in recombinant DNA technology? (<script type=\"text/javascript\">ebook(\'2001\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "retroviruses",
				true,
				"Correct. Reverse transcriptase is an enzyme found in retroviruses.");
			
				p.addAnswer(2, "plant cells",
				false,
				"No. Plants are not a source of reverse transcriptase.");
			
				p.addAnswer(3, "cultured fungal cells",
				false,
				"No. Fungi are not a source of reverse transcriptase.");
			
				p.addAnswer(4, "cultured phage-infected mammalian cells",
				false,
				"No. Such cells are not a source of reverse transcriptase.");
			
				p.addAnswer(5, "either retroviruses or cultured phage-infected mammalian cells",
				false,
				"No. This choice is partially correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335310;


		
		

		
			
			p.question = "Because eukaryotic genes contain introns, they cannot be translated by bacteria, which lack RNA-splicing machinery. But if you want to engineer a bacterium to produce a eukaryotic protein, you can synthesize a gene without introns. A good way to do this is to _____. (<script type=\"text/javascript\">ebook(\'2001\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "alter the bacteria so that they can splice RNA",
				false,
				"No. This would involve engineering the bacteria to differentiate among the introns and exons, to cut out the introns, and to splice together the exons. There is a much easier way.");
			
				p.addAnswer(2, "use a nucleic acid probe to find a gene without introns",
				false,
				"No. Most eukaryotic genes have introns.");
			
				p.addAnswer(3, "work backward from mRNA to make a version of the gene without introns",
				true,
				"Correct. Reverse transcriptase can be used to make cDNA transcripts of mRNA.");
			
				p.addAnswer(4, "use a phage to insert the desired gene into a bacterium",
				false,
				"No. This use of a phage will not eliminate the introns.");
			
				p.addAnswer(5, "use a restriction enzyme to remove introns from the gene",
				false,
				"No. Restriction enzymes cut at specific recognition sites that are unlikely to be in the right places for removing all the introns from a particular gene.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335311;


		
		

		
			
			p.question = "DNA synthesized using an RNA template is called _____. (<script type=\"text/javascript\">ebook(\'2001\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "reverse transcriptase",
				false,
				"No. This is the enzyme that is used to catalyze the formation of DNA from an RNA template.");
			
				p.addAnswer(2, "a restriction enzyme",
				false,
				"No. Restriction enzymes cut DNA at specific recognition sites.");
			
				p.addAnswer(3, "cDNA",
				true,
				"Correct. Reverse transcriptase from retroviruses can be used to make cDNA (complementary DNA) out of processed mRNA from eukaryotic cells.");
			
				p.addAnswer(4, "a palindrome",
				false,
				"No. Restriction enzyme recognition sites are palindromes.");
			
				p.addAnswer(5, "a plasmid",
				false,
				"No. A plasmid is a small, circular piece of bacterial DNA.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335312;


		
		

		
			
			p.question = "In the polymerase chain reaction (PCR), the sequence of bases in the primers is important because it _____. (<script type=\"text/javascript\">ebook(\'2001\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "determines which segment of the genome will be amplified",
				true,
				"Correct. PCR starts with double-stranded DNA that is to be copied. Primers, necessary for DNA polymerase to initiate DNA synthesis, are added to the mixture. They are complementary to the ends of the targeted DNA and determine the segment of DNA to be amplified.");
			
				p.addAnswer(2, "always matches a stop codon",
				false,
				"No. Stop codons terminate translation.");
			
				p.addAnswer(3, "always causes a silent mutation",
				false,
				"No. The goal of PCR is to clone DNA.");
			
				p.addAnswer(4, "determines how many cycles of the reaction are needed to obtain a sufficient amount of amplified DNA",
				false,
				"No. Primers provide specificity to the reaction.");
			
				p.addAnswer(5, "determines the number of tandem repeats in a genome",
				false,
				"No. The goal of PCR is to amplify DNA.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335313;


		
		

		
			
			p.question = "A molecular biologist has isolated a short segment of DNA that she wants to replicate <i>in vitro</i>. First she heats the DNA, which separates the two strands, and then she adds _____. (<script type=\"text/javascript\">ebook(\'2001\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "nucleotides, primers, and polymerase",
				true,
				"Correct. PCR requires a pool of nucleotide building blocks, primers to initiate DNA synthesis, and polymerase to continue elongation of the new strands.");
			
				p.addAnswer(2, "ribosomes, nucleosomes, and messenger RNA",
				false,
				"No. Ribosomes are needed for translation.");
			
				p.addAnswer(3, "nucleotides and ligase",
				false,
				"No. This choice is partially correct.");
			
				p.addAnswer(4, "transfer RNA, matching amino acids, and messenger RNA",
				false,
				"No. These are required for translation.");
			
				p.addAnswer(5, "ribosomes, matching amino acids, and primers",
				false,
				"No. Primers are necessary, but ribosomes and matching amino acids are required for translation.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335314;


		
		

		
			
			p.question = "In the polymerase chain reaction (PCR) technique, a heating phase and a cooling phase alternate. An original sample of DNA would have to pass through how many total rounds of heating and cooling before a sample is increased eight times in quantity? (<script type=\"text/javascript\">ebook(\'2001\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "two",
				false,
				"No. More.");
			
				p.addAnswer(2, "three",
				true,
				"Correct. The amount of DNA doubles with each round. After one round, there is twice as much as was originally present. After two rounds, four times as much. After three rounds, eight times as much would be present.");
			
				p.addAnswer(3, "four",
				false,
				"No. Fewer.");
			
				p.addAnswer(4, "six",
				false,
				"No. Fewer.");
			
				p.addAnswer(5, "eight",
				false,
				"No. Fewer.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335315;


		
		

		
			
			p.question = "Separating DNA fragments by gel electrophoresis is useful for which of the following? (<script type=\"text/javascript\">ebook(\'2002\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "identifying DNA fragments for RFLP analysis",
				false,
				"No. Gel electrophoresis can be used for this, but there is a better answer.");
			
				p.addAnswer(2, "purifying specific DNA fragments",
				false,
				"No. Gel electrophoresis can be used for this, but there is a better answer.");
			
				p.addAnswer(3, "distinguishing between different alleles of a gene",
				false,
				"No. Gel electrophoresis can be used for this, but there is a better answer.");
			
				p.addAnswer(4, "identifying a plasmid or a virus by examining its restriction fragment pattern",
				false,
				"No. Gel electrophoresis can be used for this, but there is a better answer.");
			
				p.addAnswer(5, "all of the above",
				true,
				"Correct. All of these can be performed with gel electrophoresis.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335316;


		
		

		
			
			p.question = "Southern blotting is _____. (<script type=\"text/javascript\">ebook(\'2002\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "a method of DNA amplification",
				false,
				"No. PCR is used to amplify DNA.");
			
				p.addAnswer(2, "a technique used to study RFLPs",
				true,
				"Correct. Southern blotting uses nucleic acid hybridization to identify restriction fragments carrying specific DNA sequences.");
			
				p.addAnswer(3, "how bacteria take up DNA from the surrounding solution",
				false,
				"No. This describes transformation.");
			
				p.addAnswer(4, "the insertion of DNA into a plant\'s chromosomes",
				false,
				"No. Southern blotting allows specific DNA molecules to be identified.");
			
				p.addAnswer(5, "used to determine the product of a particular gene",
				false,
				"No. Southern blotting does not involve gene expression or the detection of proteins.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335317;


		
		

		
			
			p.question = "Which of the following is the first step of the Southern blotting procedure? (<script type=\"text/javascript\">ebook(\'2002\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "hybridizing the DNA with a radioactive probe",
				false,
				"No. This is step 4.");
			
				p.addAnswer(2, "digesting the DNA with a restriction enzyme",
				true,
				"Correct. This is the first step.");
			
				p.addAnswer(3, "separating the DNA fragments using gel electrophoresis",
				false,
				"No. This is step 2.");
			
				p.addAnswer(4, "transferring the DNA to a blot",
				false,
				"No. This is step 3.");
			
				p.addAnswer(5, "using the blot to expose photographic film",
				false,
				"No. This is step 5.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335318;


		
		

		
			
			p.question = "The dideoxyribonucleotide chain-termination method _____. (<script type=\"text/javascript\">ebook(\'2002\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "produces a ladder of DNA fragments, with each individual band labeled with one of four different fluorescent tags",
				true,
				"Correct. Each band differs in size by a single nucleotide, and the particular fluorescent tag of the band indicates the identity of the final nucleotide.");
			
				p.addAnswer(2, "can be used to sequence entire eukaryotic chromosomes in a single reaction",
				false,
				"No. A single reaction can sequence fragments up to about 800 nucleotides in length.");
			
				p.addAnswer(3, "is very slow, requiring several weeks to determine a sequence of about 200 nucleotides",
				false,
				"No. It is very fast; a typical reaction can read up to 800 nucleotides in a couple of hours.");
			
				p.addAnswer(4, "does not involve electrophoresis",
				false,
				"No. The method produces many DNA fragments of slightly varying length, which are then separated by electrophoresis.");
			
				p.addAnswer(5, "is difficult to automate and must be performed under close human supervision",
				false,
				"No. The massive automation of DNA sequencing was a key element in the success of the Human Genome Project.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335319;


		
		

		
			
			p.question = "The term \"RFLP\" stands for _____. (<script type=\"text/javascript\">ebook(\'2002\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "restriction fragment length polymorphism",
				true,
				"Correct. RFLPs, or restriction fragment length polymorphisms, are small differences in homologous DNA sequences that result in different restriction fragment patterns.");
			
				p.addAnswer(2, "reverse fragment ligated polymerization",
				false,
				"No. It doesn\'t stand for this.");
			
				p.addAnswer(3, "really fast ligation protocol",
				false,
				"No. It doesn\'t stand for this.");
			
				p.addAnswer(4, "restriction fragment ligation procedure",
				false,
				"No. It doesn\'t stand for this.");
			
				p.addAnswer(5, "RNA fragment length pool",
				false,
				"No. It doesn\'t stand for this.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335320;


		
		

		
			
			p.question = "RFLPs have been tremendously useful for genomic mapping studies because _____. (<script type=\"text/javascript\">ebook(\'2002\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "they are found only in the coding sequences of genes",
				false,
				"No. In fact, they are useful because they are <b>not</b> found only in genes.");
			
				p.addAnswer(2, "they are found only in the promoter regions of genes",
				false,
				"No. In fact, they are useful because they are <b>not</b> found only in genes.");
			
				p.addAnswer(3, "they are found only in disease-causing genes",
				false,
				"No. In fact, they are useful because they are <b>not</b> found only in genes.");
			
				p.addAnswer(4, "they are not restricted to genes, and are abundantly scattered throughout the genome",
				true,
				"Correct. Because RFLPs are found throughout the genome and are relatively easy to identify, they have served as fundamental tools of genomic analysis.");
			
				p.addAnswer(5, "they are found only in expressed genes",
				false,
				"No. In fact, they are useful because they are <b>not</b> found only in genes.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335321;


		
		

		
			
			p.question = "The efficiency of cloning, and the ability to generate healthy cloned animals, has been largely hampered by the difficulty of _____. (<script type=\"text/javascript\">ebook(\'2003\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "completely reversing epigenetic alterations in donor cell nuclei such as DNA methylation and chromatin packing",
				true,
				"Correct. It is thought that the subtle abnormalities that often affect cloned animals result from an inability to completely reverse these alterations.");
			
				p.addAnswer(2, "inducing recombination in differentiated donor cells in order to restore the full genomic complement",
				false,
				"No. Differentiated cells already have a full genomic complement.");
			
				p.addAnswer(3, "transforming donor cells with genes encoding proteins required for normal embryonic development",
				false,
				"No. Currently, at least, cloning does not involve the introduction of additional genes into the donor cell nuclei.");
			
				p.addAnswer(4, "physically removing the nucleus from the egg cell that will ultimately receive the donor cell nucleus",
				false,
				"No. While not necessarily straightforward, this has not been a particular problem in cloning.");
			
				p.addAnswer(5, "implanting the clone into the surrogate mother",
				false,
				"No. While not necessarily straightforward, this has not been a particular problem in cloning.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335322;


		
		

		
			
			p.question = "\"Therapeutic cloning\" refers to _____. (<script type=\"text/javascript\">ebook(\'2003\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the use of cloned embryos as a source of stem cells that could be used to treat disease",
				true,
				"Correct. Such cells could potentially be used to treat diseases such as Parkinson disease, Huntington disease, and diabetes. Nevertheless, the prospect of therapeutic cloning remains quite controversial.");
			
				p.addAnswer(2, "treating patients with therapeutic proteins made using recombinant DNA technology",
				false,
				"No. This would simply involve the use of cloned genes; therapeutic cloning is different.");
			
				p.addAnswer(3, "cloning animals to obtain organs that could be used for transplantation into humans",
				false,
				"No. This would be reproductive cloning.");
			
				p.addAnswer(4, "treating a genetic disease by obtaining cells from an individual with the disease, introducing genes into the cells in order to repair the genetic defect, and then reintroducing the cells back into the individual",
				false,
				"No. This would be gene therapy.");
			
				p.addAnswer(5, "all of the above",
				false,
				"No. Only one of the other answers is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335323;


		
		

		
			
			p.question = "Nuclear transplantation involves _____. (<script type=\"text/javascript\">ebook(\'2003\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Inserting a sperm cell into an egg cell <i>in vitro</i>",
				false,
				"No. This is <i>in vitro</i><b> </b>fertilization.");
			
				p.addAnswer(2, "Placing the nucleus from an egg cell into an enucleated somatic cell",
				false,
				"No. This procedure is unlikely to produce anything.");
			
				p.addAnswer(3, "Removing the nucleus of an egg cell and replacing it with the nucleus of a somatic cell",
				true,
				"Correct. In this way, the egg cell becomes diploid, similarly to when it is fertilized by a sperm.");
			
				p.addAnswer(4, "The use of microarray analysis and RNA interference",
				false,
				"No. Neither of these techniques is involved in nuclear transplantation.");
			
				p.addAnswer(5, "The use of reverse transcriptase to make copies of the genes that are being expressed.",
				false,
				"No. Although improper gene expression appears to be a problem in clones, reverse transcriptase is not used in nuclear transplantation.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335324;


		
		

		
			
			p.question = "________ can give rise to any type of cell while ________ can give rise to a subset of cell types. (<script type=\"text/javascript\">ebook(\'2003\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Heterozygous cells; homozygous cells",
				false,
				"No. Heterozygous and homozygous refer to the alleles of a particular gene.");
			
				p.addAnswer(2, "Adult stem cells; embryonic stem cells",
				false,
				"No. It\'s the other way around.");
			
				p.addAnswer(3, "Embryonic stem cells; adult stem cells",
				true,
				"Correct. Embryonic stem cells are essentially totipotent and can differentiate into any type of cell. Adult stem cells are partially differentiated and can further differentiate into certain types of cells.");
			
				p.addAnswer(4, "Totipotent cells; nerve cells",
				false,
				"No. Totipotent cells can give rise to any type of cell, but nerve cells are completely differentiated.");
			
				p.addAnswer(5, "Adult stem cells; totipotent cells",
				false,
				"No. It\'s the other way around.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335325;


		
		

		
			
			p.question = "During the process of differentiation, cells _____ (<script type=\"text/javascript\">ebook(\'2003\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "lose genes",
				false,
				"No. The DNA in every cell in a multicellular organism is essentially the same.");
			
				p.addAnswer(2, "exchange DNA with other cells via the process of horizontal gene transfer",
				false,
				"No. Horizontal gene transfer is most common in prokaryotes. It is not a part of differentiation.");
			
				p.addAnswer(3, "gain and lose genes, depending on what type of cell they will become",
				false,
				"No. The DNA in every cell in a multicellular organism is essentially the same.");
			
				p.addAnswer(4, "express different genes in response to cell signaling",
				true,
				"Correct. Although the DNA in every cell is the same, different genes are expressed in a muscle cell and a nerve cell.");
			
				p.addAnswer(5, "randomly turn on and off genes until the right combination is reached",
				false,
				"No. Gene expression during differentiation is tightly controlled.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335326;


		
		

		
			
			p.question = "Dolly, the sheep, was cloned from an adult cell. She had a number of health problems and died at a relatively young age. Three mules that were born in 2003 were cloned from fetal cells. If it turns out that the mules remain healthy and live normal lives, how would this outcome tie in with Gurdon\'s observations with tadpoles? (<script type=\"text/javascript\">ebook(\'2003\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Gurdon found no correlation between the age of the donor cells and the ability of the transplanted nucleus to direct development.",
				false,
				"No. Gurdon found that nuclei from older donor cells were unlikely to correctly direct differentiation.");
			
				p.addAnswer(2, "Gurdon found that nuclei from older donor cells were more likely to correctly direct differentiation and give rise to healthy tadpoles.",
				false,
				"No. Just the opposite is true.");
			
				p.addAnswer(3, "Gurdon found a direct correlation between the age of the donor nuclei and the ability of the nuclei to direct differentiation.",
				false,
				"No. Just the opposite is true.");
			
				p.addAnswer(4, "Gurdon found that the ability of a transplanted nucleus to direct normal development was inversely related to the age of the donor.",
				true,
				"Correct. In animals it appears that the age of the donor may have an effect on the ability of the nucleus to properly direct gene expression during development. Cloning has not been going on long enough for us to have a large enough data set to draw solid conclusion.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the answers is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335327;


		
		

		
			
			p.question = "A genetic marker is _____. (<script type=\"text/javascript\">ebook(\'2004\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "a place where a restriction enzyme cuts DNA",
				false,
				"No. Not necessarily.");
			
				p.addAnswer(2, "a chart that traces the family history of a genetic trait",
				false,
				"No. This describes a pedigree.");
			
				p.addAnswer(3, "a particular nucleotide sequence at a particular locus whose inheritance can be followed",
				true,
				"Correct. A genetic marker is a landmark within a genome.");
			
				p.addAnswer(4, "a radioactive probe used to find a gene",
				false,
				"No. Probes are used to recognize specific nucleotide sequences.");
			
				p.addAnswer(5, "an enzyme used to cut DNA",
				false,
				"No. A marker is not an enzyme.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335328;


		
		

		
			
			p.question = "Human nerve cells differ from human muscle cells because different sets of genes are expressed; in each type of cell, different genes are transcribed into mRNA and translated into protein. Which of the following techniques would be the most efficient way to identify the genes that these cells express? (<script type=\"text/javascript\">ebook(\'2004\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "gel electrophoresis of DNA fragments",
				false,
				"No. This would not tell you anything about the gene expression.");
			
				p.addAnswer(2, "DNA microarray assays",
				true,
				"Correct. At least theoretically, this method allows all the different kinds of mRNA made by a particular type of cell to be quickly and easily tested for matching with all of the organism\'s genes.");
			
				p.addAnswer(3, "isolating and analyzing all the proteins from each type of tissue",
				false,
				"No. This would provide much relevant information but not as quickly as one of the other choices.");
			
				p.addAnswer(4, "PCR",
				false,
				"No. The polymerase chain reaction is used to amplify specific segments of DNA, not to study gene expression.");
			
				p.addAnswer(5, "chromosome walking",
				false,
				"No. This is a technique for determining the order of chromosomal fragments.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335329;


		
		

		
			
			p.question = "Gene therapy involves _____. (<script type=\"text/javascript\">ebook(\'2004\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "adding a functioning version of a defective gene to the cells of an individual",
				true,
				"Correct. In gene therapy, a new, functional gene is inserted into the somatic cells of the tissue affected by the disorder.");
			
				p.addAnswer(2, "allowing individuals to follow the natural progression of a genetic disorder, accompanied by psychological counseling, then drug treatment when the condition becomes life-threatening",
				false,
				"No. This is not the goal of gene therapy.");
			
				p.addAnswer(3, "no serious ethical questions",
				false,
				"No. Gene therapy raises many serious ethical issues.");
			
				p.addAnswer(4, "replacing organs affected with genetic disorders by transplants",
				false,
				"No. Gene therapy involves replacing genes, not organs.");
			
				p.addAnswer(5, "all of the above",
				false,
				"No. Only one of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335330;


		
		

		
			
			p.question = "A molecular biologist used a retroviral vector to introduce a gene coding for a certain human enzyme into mouse cells. One cell line was isolated that was able to make the human enzyme, but it had lost the ability to express an endogenous, normally expressed gene in the process. What is the best explanation for these results? (<script type=\"text/javascript\">ebook(\'2004\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "The virus caused the mouse cells to become diseased.",
				false,
				"No. Hopefully, disease-causing genes of the virus had been removed prior to its use as a vector.");
			
				p.addAnswer(2, "The virus had transferred a gene from one mouse cell to another.",
				false,
				"No. This might have happened, but it is not an explanation for the results.");
			
				p.addAnswer(3, "The virus inserted the gene encoding the human enzyme into the normally expressed endogenous gene.",
				true,
				"Correct. The inserted DNA disrupted the endogenous mouse gene, preventing its expression.");
			
				p.addAnswer(4, "The virus was too small to carry the entire gene.",
				false,
				"No. If this were so, the cell would not have been able to express the introduced gene.");
			
				p.addAnswer(5, "The enzyme acted as a nuclease enzyme, cutting up mouse DNA.",
				false,
				"No. This would not have led to the observed results.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335331;


		
		

		
			
			p.question = "DNA fingerprints are used to determine whether Sam could be the father of Becky\'s baby. Sam is not the father if _____ genetic fingerprint shows some bands not present in _____ genetic fingerprint. (<script type=\"text/javascript\">ebook(\'2004\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Sam\'s; the baby\'s",
				false,
				"No. Since a baby receives only half of its genes from each parent, you would expect the DNA of each parent to show some bands not seen in their child.");
			
				p.addAnswer(2, "Becky\'s; the baby\'s",
				false,
				"No. Since a baby receives only half of its genes from each parent, you would expect the DNA of each parent to show some bands not seen in their child.");
			
				p.addAnswer(3, "the baby\'s; Sam\'s",
				false,
				"No. Since each parent contributes only half of the offspring\'s genes, you would expect the baby\'s DNA to exhibit bands not found in the DNA of just one particular parent.");
			
				p.addAnswer(4, "the baby\'s; Becky\'s",
				false,
				"No. Since each parent contributes only half of the offspring\'s genes, you would expect the baby\'s DNA to exhibit bands not found in the DNA of just one particular parent.");
			
				p.addAnswer(5, "the baby\'s; Sam\'s or Becky\'s",
				true,
				"Correct. These bands must have come from the actual father.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335332;


		
		

		
			
			p.question = "DNA fingerprints used as evidence in a murder trial look something like supermarket bar codes. The pattern of bars in a DNA fingerprint shows _____. (<script type=\"text/javascript\">ebook(\'2004\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the order of bases in a particular gene",
				false,
				"No. DNA fingerprinting does not involve nucleotide sequencing.");
			
				p.addAnswer(2, "the presence of various-sized fragments of DNA",
				true,
				"Correct. There is only a very low probability that the markers used to produce a DNA fingerprint would be shared by two or more individuals (with the exception of identical twins).");
			
				p.addAnswer(3, "the presence of dominant or recessive alleles for particular traits",
				false,
				"No. Nor would this be particularly useful for determining the identity of a single individual.");
			
				p.addAnswer(4, "the order of genes along particular chromosomes",
				false,
				"No. In the absence of chromosomal aberrations, all individuals within a species have a common gene sequence along their chromosomes.");
			
				p.addAnswer(5, "the exact location of a specific gene in a genomic library",
				false,
				"No. The bars represent individual bands of DNA.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335333;


		
		

		
			
			p.question = "Which of the following would be considered a transgenic organism? (<script type=\"text/javascript\">ebook(\'2004\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "a bacterium that has been treated with a compound that affects the expression of many of its genes",
				false,
				"No. Transgenic refers to the origin of the genes in the genome, not their expression.");
			
				p.addAnswer(2, "a human treated with insulin produced by <i>E. coli</i> bacteria",
				false,
				"No. The human has not received a gene from the bacteria, but has received the product of a human gene.");
			
				p.addAnswer(3, "a fern grown in cell culture from a single fern root cell",
				false,
				"No. Such a fern would be considered a clone.");
			
				p.addAnswer(4, "a rat with rabbit hemoglobin genes",
				true,
				"Correct. Transgenic organisms contain genes from other species.");
			
				p.addAnswer(5, "all of the above",
				false,
				"No. Only one of the other answers is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335334;


		
		

		
			
			p.question = "Transgenic organisms can be scientifically or commercially useful only if _____. (<script type=\"text/javascript\">ebook(\'2004\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the inserted (\"foreign\") gene is drawn from the human genome",
				false,
				"No. Humans are not the only organisms with commercially useful genes.");
			
				p.addAnswer(2, "the inserted (\"foreign\") gene is expressed in the host organism",
				true,
				"Correct. If the gene is not expressed, it will probably have little effect on the organism.");
			
				p.addAnswer(3, "the host organism is a microorganism",
				false,
				"No. Transgenic plants and animals are useful for agriculture, medicine, and basic research.");
			
				p.addAnswer(4, "the vector is a plasmid",
				false,
				"No. This is not true.");
			
				p.addAnswer(5, "all of the above",
				false,
				"No. Only one of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335335;


		
		

		
			
			p.question = "In genetic engineering, the highly active plasmid from <i>Agrobacterium tumefaciens</i> is used to _____. (<script type=\"text/javascript\">ebook(\'2004\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "insert genes of interest into plant chromosomes",
				true,
				"Correct. The usual DNA vector for moving genes into plants is a plasmid of the bacterium <i>Agrobacterium tumefaciens</i>.");
			
				p.addAnswer(2, "cut DNA at a specific base sequence",
				false,
				"No. Plasmids do not cut DNA.");
			
				p.addAnswer(3, "locate specific genes on animal chromosomes",
				false,
				"No. Plasmids are not nucleic acid probes.");
			
				p.addAnswer(4, "detect and correct mistakes in DNA replication",
				false,
				"No. Plasmids are not enzymes.");
			
				p.addAnswer(5, "all of the above",
				false,
				"No. Only one of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

