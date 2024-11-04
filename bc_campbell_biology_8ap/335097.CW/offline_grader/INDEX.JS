

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "17: From Gene to Protein > Practice Test";
	ak.quiz_loc_with_commas = "17: From Gene to Protein, Practice Test";
	ak.quiz_title = "Practice Test";

	
		ak.help_url = "../../placeholders/help_placeholder.html";
	
	ak.essay_total = 0;
	ak.pair_problem_total = 0;
	ak.pair_total = 0;
	ak.problem_total = 46;
	ak.non_essay_total = 46;
	ak.scored_item_total = 46;

	
	
	


	
	ak.copyright_date = "2008";
	ak.brandname = "Pearson Benjamin Cummings";
	ak.legal = "../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.pearsoned.com%2Flegal%2Findex.htm";


	// Loop over all problems
	
	
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335098;


		
		

		
			
			p.question = "Who formulated the one gene&ndash;one enzyme hypothesis? (<script type=\"text/javascript\">ebook(\'1701\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Watson and Crick",
				false,
				"No. Watson and Crick deduced the structure of DNA.");
			
				p.addAnswer(2, "Beadle and Tatum",
				true,
				"Correct. Restating Beadle and Tatum\'s idea as one gene&ndash;one polypeptide reflects the current idea that each polypeptide is specified by one gene.");
			
				p.addAnswer(3, "Hershey and Chase",
				false,
				"No. Review Chapter 16 for the significance of the Hershey-Chase experiments.");
			
				p.addAnswer(4, "Franklin",
				false,
				"No. Review Chapter 16 for the significance of Franklin\'s work.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335099;


		
		

		
			
			p.question = "Genetic information of eukaryotic cells is transferred from the nucleus to the cytoplasm in the form of _____. (<script type=\"text/javascript\">ebook(\'1701\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "proteins",
				false,
				"No. Protein is not the genetic material.");
			
				p.addAnswer(2, "lipids",
				false,
				"No. Lipid is not the genetic material.");
			
				p.addAnswer(3, "RNA",
				true,
				"Correct. In transcription, a gene provides the instructions for synthesizing an mRNA molecule, a polynucleotide that enters the cytoplasm to be translated.");
			
				p.addAnswer(4, "carbohydrates",
				false,
				"No. Carbohydrate is not the genetic material.");
			
				p.addAnswer(5, "DNA",
				false,
				"No. DNA does not leave the nucleus.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335100;


		
		

		
			
			p.question = "Which one of the following statements is true? (<script type=\"text/javascript\">ebook(\'1701\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Each DNA base codes for three amino acids.",
				false,
				"No. Three nucleotides code for a single amino acid.");
			
				p.addAnswer(2, "Each gene codes for three proteins.",
				false,
				"No. The number of proteins that a single gene codes for can vary with mRNA processing.");
			
				p.addAnswer(3, "It takes three genes to code for one protein.",
				false,
				"No. This is not true.");
			
				p.addAnswer(4, "Each triplet has many different meanings.",
				false,
				"No. Each triplet has only a single meaning.");
			
				p.addAnswer(5, "Each amino acid in a protein is coded for by three bases in the DNA.",
				true,
				"Correct. The mRNA base triplets are called codons, each of which codes for the incorporation of a single amino acid.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335101;


		
		

		
			
			p.question = "When RNA is being made, the RNA base _____ always pairs with the base _____ in DNA. (<script type=\"text/javascript\">ebook(\'1701\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "U; T",
				false,
				"No. In RNA uracil takes the place of thymine; it does not pair with thymine.");
			
				p.addAnswer(2, "T; G",
				false,
				"No. Thymine is not present in RNA. Furthermore, in DNA thymine does not pair with guanine.");
			
				p.addAnswer(3, "U; A",
				true,
				"Correct. In RNA uracil takes the place of thymine and, like thymine, pairs with adenine.");
			
				p.addAnswer(4, "A; U",
				false,
				"No. DNA does not contain uracil.");
			
				p.addAnswer(5, "T; A",
				false,
				"No. Thymine is not present in RNA.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335102;


		
		

		
			
			p.question = "Generally speaking, how many genetic codes are there? (<script type=\"text/javascript\">ebook(\'1701\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "20",
				false,
				"No. There are 20 amino acids, but not 20 genetic codes.");
			
				p.addAnswer(2, "1",
				true,
				"Correct. The genetic code is universal. All organisms use the same genetic code to translate mRNA to protein.");
			
				p.addAnswer(3, "4",
				false,
				"No. There are four nitrogenous bases in DNA, but there are not four genetic codes.");
			
				p.addAnswer(4, "One for each organism.",
				false,
				"No. The genetic code is universal. All organisms use the same genetic code to translate mRNA to protein.");
			
				p.addAnswer(5, "3",
				false,
				"No. There are three letters in a codon, but there are not three genetic codes.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335103;


		
		

		
			
			p.question = "What mRNA codon would be made from the DNA triplet CGT? (<script type=\"text/javascript\">ebook(\'1701\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "ATU",
				false,
				"No. Review specific base pairing.");
			
				p.addAnswer(2, "GCA",
				true,
				"Correct. C pairs with G, and T pairs with A.");
			
				p.addAnswer(3, "TCU",
				false,
				"No. Review specific base pairing.");
			
				p.addAnswer(4, "CTA",
				false,
				"No. RNA does not contain thymine.");
			
				p.addAnswer(5, "UCG",
				false,
				"No. Review specific base pairing.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335104;


		
		

		
			
			p.question = "The number of nucleotide bases \"read\" together on the mRNA to designate each amino acid is _____; this unit is called a(n) _____. (<script type=\"text/javascript\">ebook(\'1701\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "2; dipeptide",
				false,
				"No. A dipeptide consists of two amino acids.");
			
				p.addAnswer(2, "3; triose",
				false,
				"No. A triose is a three-carbon monosaccharide.");
			
				p.addAnswer(3, "2; anticodon",
				false,
				"No. Anticodons are found on tRNAs.");
			
				p.addAnswer(4, "3; codon",
				true,
				"Correct. The mRNA base triplets are called codons.");
			
				p.addAnswer(5, "1; amino acid",
				false,
				"No. A series of three nucleotides codes for each amino acid.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335105;


		
		

		
			
			p.question = "The codons AAA, CCC, GGG, and UUU specify the amino acids lysine, proline, glycine, and phenylalanine, respectively. Which of the following DNA sequences would specify the peptide pro-gly-lys-phe if present in the template strand? (<script type=\"text/javascript\">ebook(\'1701\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "3\'-CCCGGGAAATTT-5\'",
				false,
				"No. The template strand is complementary to the mRNA.");
			
				p.addAnswer(2, "3\'-CCCGGGAAAUUU-5\'",
				false,
				"No. DNA contains thymine, not uracil, and in any case the template strand is complementary to the mRNA.");
			
				p.addAnswer(3, "3\'-GGGCCCTTTAAA-5\'",
				true,
				"Correct. The template strand is complementary to the mRNA, running in the 3\' to 5\' direction.");
			
				p.addAnswer(4, "5\'-GGGCCCUUUAAA-3\'",
				false,
				"No. The template runs in the 3\' to 5\' direction. Also, DNA contains thymine, not uracil.");
			
				p.addAnswer(5, "5\'-GGGCCCTTTAAA-3\'",
				false,
				"No. The template strand is complementary to the mRNA, running in the 3\' to 5\' direction.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335106;


		
		

		
			
			p.question = "The codons AAA, CCC, GGG, and UUU specify the amino acids lysine, proline, glycine, and phenylalanine, respectively. What peptide sequence would be encoded by the sequence 5\'-CCCAAATTTGGG-3\', if present in the coding strand of the DNA? (<script type=\"text/javascript\">ebook(\'1701\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "lys-pro-gly-phe",
				false,
				"No. Review which codons specify which amino acids.");
			
				p.addAnswer(2, "pro-lys-phe-gly",
				true,
				"Correct. The sequence of the coding strand of the DNA is equivalent to that of the transcribed mRNA.");
			
				p.addAnswer(3, "gly-phe-lys-pro",
				false,
				"No. Review which codons specify which amino acids.");
			
				p.addAnswer(4, "phe-gly-pro-lys",
				false,
				"No. Review which codons specify which amino acids.");
			
				p.addAnswer(5, "gly-phe-pro-lys",
				false,
				"No. Review which codons specify which amino acids.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335107;


		
		

		
			
			p.question = "How many nucleotides are needed to code for a protein with 450 amino acids? (<script type=\"text/javascript\">ebook(\'1701\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "at least 150",
				false,
				"No. The answer is not obtained by dividing by 3.");
			
				p.addAnswer(2, "at least 300",
				false,
				"No. More.");
			
				p.addAnswer(3, "at least 450",
				false,
				"No. More.");
			
				p.addAnswer(4, "at least 900",
				false,
				"No. More.");
			
				p.addAnswer(5, "at least 1,350",
				true,
				"Correct. Because the code is a triplet and three nucleotides code for the incorporation of one amino acid, 450 x 3, or at least 1,350, would be needed.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335108;


		
		

		
			
			p.question = "In many cases, more than one codon codes for the same amino acid. Because of this, we say that the code is _____. (<script type=\"text/javascript\">ebook(\'1701\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "inaccurate",
				false,
				"No. The genetic code is very accurate.");
			
				p.addAnswer(2, "incomplete",
				false,
				"No. There are enough codons to specify all 20 amino acids.");
			
				p.addAnswer(3, "not specific",
				false,
				"No. The code is very specific.");
			
				p.addAnswer(4, "redundant",
				true,
				"Correct. For example, there are six codons that code for the amino acid leucine.");
			
				p.addAnswer(5, "tricky",
				false,
				"No. Although understanding and using the code may be tricky, this is not the correct choice.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335109;


		
		

		
			
			p.question = "Bacteria can transcribe and translate human genes to produce functional human proteins because _____. (<script type=\"text/javascript\">ebook(\'1701\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the genetic code is universal",
				true,
				"Correct. All organisms use the same genetic code, so it is possible (and the basis of many biotech applications) to produce human proteins using another organism\'s protein synthesis machinery.");
			
				p.addAnswer(2, "bacterial ribosomes and eukaryotic ribosomes are identical",
				false,
				"No. Bacterial and eukaryotic ribosomes are not identical, but they are capable of translating each other\'s mRNA.");
			
				p.addAnswer(3, "eukaryotes do not really need a nucleus",
				false,
				"No. Eukaryotic cells require a nucleus for a number of reasons, including processing of pre-mRNA, but a properly engineered gene can be transcribed and translated by a bacterium.");
			
				p.addAnswer(4, "RNA has catalytic properties",
				false,
				"No. While RNA has been shown to have catalytic properties, that is not why bacteria can transcribe and translate human genes.");
			
				p.addAnswer(5, "bacterial and eukaryotic RNA polymerases are identical",
				false,
				"No. Bacterial and eukaryotic RNA polymerases are not identical, but they are capable of transcribing each other\'s DNA.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335110;


		
		

		
			
			p.question = "At one point as a cell carried out its day-to-day activities, the nucleotides GAT were paired with the nucleotides CUA. This pairing occurred _____. (<script type=\"text/javascript\">ebook(\'1702\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "in a double-stranded DNA molecule",
				false,
				"No. Uracil is not present in DNA.");
			
				p.addAnswer(2, "during translation",
				false,
				"No. Translation only involves RNA (rRNA, tRNA, and mRNA), and thymine is only present in DNA.");
			
				p.addAnswer(3, "during transcription",
				true,
				"Correct. The CUA of an RNA strand is complementary to the GAT of a DNA strand.");
			
				p.addAnswer(4, "when an mRNA codon paired with a tRNA anticodon",
				false,
				"No. Thymine is not found in RNA.");
			
				p.addAnswer(5, "It is impossible to say, given this information.",
				false,
				"No. It is possible to identify the correct answer.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335111;


		
		

		
			
			p.question = "Which one of the following catalyzes the linkage between ribonucleotides to form RNA during gene expression? (<script type=\"text/javascript\">ebook(\'1702\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "RNA polymerase",
				true,
				"Correct. The enzyme responsible for transcription is RNA polymerase.");
			
				p.addAnswer(2, "RNA ligase",
				false,
				"No. RNA ligase is not involved in transcription.");
			
				p.addAnswer(3, "a ribozyme",
				false,
				"No. Ribozymes are not involved in transcription.");
			
				p.addAnswer(4, "reverse transcriptase",
				false,
				"No. This enzyme makes a strand of DNA complementary to a strand of RNA.");
			
				p.addAnswer(5, "tRNA",
				false,
				"No. tRNAs are involved in translation.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335112;


		
		

		
			
			p.question = "In eukaryotic cells, a terminator in mRNA synthesis is _____. (<script type=\"text/javascript\">ebook(\'1702\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "an enzyme whose specific function is to stop synthesis",
				false,
				"No. Terminators are not enzymes.");
			
				p.addAnswer(2, "a molecule of tRNA that recognizes a stop codon",
				false,
				"No. Terminators are not tRNA molecules.");
			
				p.addAnswer(3, "a specific nucleotide sequence in DNA that signals the RNA polymerase to stop",
				true,
				"Correct. Elongation continues until a terminator sequence is reached.");
			
				p.addAnswer(4, "a specific nucleotide sequence in mRNA that signals the RNA polymerase to stop and to release from the DNA",
				false,
				"No. This is true of prokaryotic cells.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335113;


		
		

		
			
			p.question = "In a eukaryotic cell, transcription takes place _____. (<script type=\"text/javascript\">ebook(\'1702\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "on the cell membrane",
				false,
				"No. The cell membrane does not store a cell\'s genetic material.");
			
				p.addAnswer(2, "in the rough endoplasmic reticulum",
				false,
				"No. The rough ER does not store a cell\'s genetic material.");
			
				p.addAnswer(3, "in the cytoplasm",
				false,
				"No. Transcription occurs within an organelle.");
			
				p.addAnswer(4, "on free ribosomes",
				false,
				"No. The ribosomes do not store a cell\'s genetic material.");
			
				p.addAnswer(5, "in the nucleus",
				true,
				"Correct. In a eukaryotic cell, there is compartmentalization of function, with transcription occurring in the nucleus and translation occurring in the cytoplasm.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335114;


		
		

		
			
			p.question = "One strand of a DNA molecule has the following sequence: 3\'-AGTACAAACTATCCACCGTC-5\'. In order for transcription to occur in that strand, there would have to be a specific recognition sequence, called a(n) _____, to the left of the DNA sequence indicated. (<script type=\"text/javascript\">ebook(\'1702\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "centromere",
				false,
				"No. This is where sister chromatids are attached.");
			
				p.addAnswer(2, "intron",
				false,
				"No. Introns are removed when mRNA is modified.");
			
				p.addAnswer(3, "exon",
				false,
				"No. RNA polymerase does not attach here.");
			
				p.addAnswer(4, "AUG codon",
				false,
				"No. This is the start codon of translation.");
			
				p.addAnswer(5, "promoter",
				true,
				"Correct. The region of DNA to which RNA polymerase attaches and initiates transcription is the promoter, which typically extends several dozen nucleotides \"upstream\" from the transcription start point.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335115;


		
		

		
			
			p.question = "During the transcription of a given portion of a DNA molecule _____. (<script type=\"text/javascript\">ebook(\'1702\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "mRNA is synthesized on both chains of the DNA molecule at once",
				false,
				"No. Only one strand of DNA is the template.");
			
				p.addAnswer(2, "mRNA is synthesized on both chains of the DNA molecule, but first on one side and then the other",
				false,
				"No. Only one strand of DNA is the template.");
			
				p.addAnswer(3, "mRNA is synthesized on only one of the chains",
				true,
				"Correct. After binding to the promoter, the RNA polymerase initiates RNA synthesis at the start point on the template strand. Nucleotides from a pool within the cell are used to elongate the growing strand of RNA. Nucleotide sequences within the promoter determine in which direction the polymerase faces and which strand is used as the template.");
			
				p.addAnswer(4, "half of the mRNA is synthesized on half of one chain; then the other half of the mRNA is made on the other half of the DNA",
				false,
				"No. Only one strand of DNA is the template.");
			
				p.addAnswer(5, "Any of the above patterns may be found.",
				false,
				"No. Only one of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335116;


		
		

		
			
			p.question = "In transcription, _____. (<script type=\"text/javascript\">ebook(\'1702\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the promoter region acts as an initial binding site for RNA polymerase",
				false,
				"No. This statement is correct, but there is a better answer.");
			
				p.addAnswer(2, "only one of the DNA strands is used as the template",
				false,
				"No. This statement is correct, but there is a better answer.");
			
				p.addAnswer(3, "the RNA nucleotides used are produced by the cell",
				false,
				"No. This statement is correct, but there is a better answer");
			
				p.addAnswer(4, "all of the above",
				true,
				"Correct. After binding to the promoter, the RNA polymerase initiates RNA synthesis at the start point on the template strand. Nucleotides from a pool within the cell are used to elongate the growing strand of RNA. Nucleotide sequences within the promoter determine in which direction the polymerase faces and which strand is used as the template.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335117;


		
		

		
			
			p.question = "In eukaryotes, which of the following mechanisms of gene regulation operates after transcription, but before translation of mRNA into protein? (<script type=\"text/javascript\">ebook(\'1703\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "RNA splicing",
				true,
				"Correct. Introns are deleted and exons are spliced together after transcription and before translation.");
			
				p.addAnswer(2, "DNA packaging into nucleosomes",
				false,
				"No. DNA packaging plays a role in the regulation of transcription.");
			
				p.addAnswer(3, "action of repressors and activators",
				false,
				"No. These play a role in the regulation of transcription.");
			
				p.addAnswer(4, "protein degradation",
				false,
				"No. Protein degradation has a post-translational role.");
			
				p.addAnswer(5, "all of the above",
				false,
				"No. Only one of the choices above is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335118;


		
		

		
			
			p.question = "Usually, in eukaryotic genes _____. (<script type=\"text/javascript\">ebook(\'1703\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "exons are not transcribed",
				false,
				"No. Exons are transcribed.");
			
				p.addAnswer(2, "introns are not transcribed",
				false,
				"No. Introns are transcribed.");
			
				p.addAnswer(3, "exons are transcribed, but the RNA transcribed from introns does not leave the nucleus",
				true,
				"Correct. The noncoding elements that lie between coding regions, called introns, are spliced out of the mRNA during processing. The pre-mRNA never leaves the nucleus; only the processed message enters the cytoplasm for translation.");
			
				p.addAnswer(4, "both introns and exons are transcribed, but the RNA transcribed from them does not leave the nucleus",
				false,
				"No. Exons do leave the nucleus.");
			
				p.addAnswer(5, "exons and introns are transcribed, and the RNA transcribed from them leaves the nucleus",
				false,
				"No. Only exons leave the nucleus.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335119;


		
		

		
			
			p.question = "Which one of the following statements correctly describes mRNA processing? (<script type=\"text/javascript\">ebook(\'1703\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Introns are cut out of the primary transcript, and the resulting exons are spliced together.",
				true,
				"Correct. Eukaryotic mRNA molecules are processed before leaving the nucleus; introns are removed and exons joined before the mRNA enters the cytoplasm for translation.");
			
				p.addAnswer(2, "Exons are cut out of the primary transcript, and the introns are spliced together.",
				false,
				"No. Introns are cut out of the primary transcript, not exons.");
			
				p.addAnswer(3, "Introns are cut out of the primary transcript and spliced together at the end of the transcript.",
				false,
				"No. Introns are not spliced together.");
			
				p.addAnswer(4, "Exons are cut out of the primary transcript and transported to the endoplasmic reticulum.",
				false,
				"No. Exons are spliced together and exported to the cytoplasm.");
			
				p.addAnswer(5, "Introns are cut out of the primary transcript and transported to the ribosomes.",
				false,
				"No. Introns are discarded; they are not transported anywhere.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335120;


		
		

		
			
			p.question = "The structures called snRNPs are _____. (<script type=\"text/javascript\">ebook(\'1703\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "part of a spliceosome",
				true,
				"Correct. Particles called small nuclear ribonucleoproteins, or snRNPs, recognize the splice sites and are part of a larger assembly, called a spliceosome.");
			
				p.addAnswer(2, "involved in the removal of exons from DNA",
				false,
				"No. snRNPs act upon RNA, not DNA.");
			
				p.addAnswer(3, "a type of specialized carbohydrate",
				false,
				"No. snRNPs are composed of RNA and protein.");
			
				p.addAnswer(4, "a critical component of the initiation complex",
				false,
				"No. snRNPs are involved in splicing.");
			
				p.addAnswer(5, "all of the above",
				false,
				"No. Only one of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335121;


		
		

		
			
			p.question = "Nuclei of eukaryotic cells contain spliceosomes that are made up of _____. (<script type=\"text/javascript\">ebook(\'1703\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "snRNA",
				false,
				"No. This choice is partially correct.");
			
				p.addAnswer(2, "snRNA and tRNA",
				false,
				"No. This choice is partially correct.");
			
				p.addAnswer(3, "snRNA and DNA",
				false,
				"No. This choice is partially correct.");
			
				p.addAnswer(4, "snRNA and protein",
				true,
				"Correct. Particles called small nuclear ribonucleoproteins, or snRNPs, recognize the splice sites and are part of a larger assembly, called a spliceosome, which interacts with the ends of an intron. The snRNPs consist of proteins and snRNA (small nuclear RNA).");
			
				p.addAnswer(5, "DNA and protein",
				false,
				"No. This choice is partially correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335122;


		
		

		
			
			p.question = "A cell biologist found that two different proteins with largely different structures were translated from two different mRNAs. These mRNAs, however, were transcribed from the same template within the cell nucleus. Which mechanism below could best account for this? (<script type=\"text/javascript\">ebook(\'1703\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Different systems of DNA unpacking could result in two different mRNAs.",
				false,
				"No. DNA packing does not affect the nucleotide sequence.");
			
				p.addAnswer(2, "A point mutation might have altered the gene.",
				false,
				"No. Though a point mutation may affect the protein product, it will not result in the production of two different mRNAs from the same DNA sequence.");
			
				p.addAnswer(3, "Exons from the same gene could be spliced in different ways to make different mRNAs.",
				true,
				"Correct. In fruit flies, for example, sex differences are primarily the result of differences in RNA splicing.");
			
				p.addAnswer(4, "Different transcription factors were involved in the transcription of the two mRNAs.",
				false,
				"No. mRNAs do not change as a function of the transcription factors used to drive their expression.");
			
				p.addAnswer(5, "The two proteins have different functions in the cell.",
				false,
				"No. This may be so, but it does not explain their different structures.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335123;


		
		

		
			
			p.question = "The function of tRNA during protein synthesis is to _____. (<script type=\"text/javascript\">ebook(\'1704\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "deliver amino acids to their proper site during protein synthesis",
				true,
				"Correct. Each tRNA molecule is used repeatedly, picking up its designated amino acid in the cytosol, depositing this cargo at the ribosome, and leaving the ribosome to pick up another load.");
			
				p.addAnswer(2, "guide ribosome subunits out of the nucleus through nuclear pores",
				false,
				"No. tRNA does not have this function.");
			
				p.addAnswer(3, "attach mRNA to the small subunit of the ribosome",
				false,
				"No. tRNA does not have this function.");
			
				p.addAnswer(4, "process mRNA",
				false,
				"No. tRNA is involved in translation.");
			
				p.addAnswer(5, "transcribe mRNA",
				false,
				"No. tRNA is involved in translation.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335124;


		
		

		
			
			p.question = "Which of the following summaries of protein synthesis is correct? (<script type=\"text/javascript\">ebook(\'1704\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "DNA transposons leave the nucleus, are transported to a ribosome, and catalyze the polymerization of amino acids in a protein.",
				false,
				"No. Transposons do not participate in the translation process.");
			
				p.addAnswer(2, "DNA exchanges its thymine units with uracil in polymerase. This activates polymerase, and it starts joining amino acids together.",
				false,
				"No. This does not occur.");
			
				p.addAnswer(3, "Transfer RNAs line up on a ribosome, and amino acids bind to them with hydrogen bonds.",
				false,
				"No. Translation does not work in this way.");
			
				p.addAnswer(4, "Messenger RNA is made on a DNA template, and then amino-acid-bearing transfer RNAs bind to it through codon-anticodon pairing.",
				true,
				"Correct. Genes program protein synthesis via genetic messages in the form of mRNA. The mRNA is read into a polypeptide on a ribosome, where tRNA molecules bring amino acids for incorporation into the growing polypeptide.");
			
				p.addAnswer(5, "DNA strands separate in the nucleus to form mRNA. mRNA leaves the nucleus and is transcribed into tRNA on ribosomes.",
				false,
				"No. mRNA is not made up of one strand of DNA. The DNA is transcribed to form an independent mRNA strand. mRNA and tRNA come together on ribosomes to translate the mRNA to protein.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335125;


		
		

		
			
			p.question = "The bonds that hold tRNA molecules in the correct three-dimensional shape are _____. (<script type=\"text/javascript\">ebook(\'1704\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "peptide linkages",
				false,
				"No. Peptide bonds join amino acids.");
			
				p.addAnswer(2, "hydrophobic interactions",
				false,
				"No. The bonds are the same as those that hold the DNA double helix together.");
			
				p.addAnswer(3, "covalent bonds",
				false,
				"No. The bonds are the same as those that hold the DNA double helix together.");
			
				p.addAnswer(4, "ionic bonds",
				false,
				"No. The bonds are the same as those that hold the DNA double helix together.");
			
				p.addAnswer(5, "hydrogen bonds",
				true,
				"Correct. Nucleotide bases in certain regions of the tRNA strand form hydrogen bonds with complementary bases from other regions.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335126;


		
		

		
			
			p.question = "During translation in a eukaryotic cell _____. (<script type=\"text/javascript\">ebook(\'1704\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "ribosomes move into the nucleus",
				false,
				"No. Ribosomes do not enter the nucleus.");
			
				p.addAnswer(2, "tRNA carries amino acid molecules to the nucleus, where they are added to a growing polypeptide chain",
				false,
				"No. Translation occurs in the cytoplasm, not the nucleus.");
			
				p.addAnswer(3, "polypeptides are synthesized at ribosomes, according to instructions carried by mRNA",
				true,
				"Correct. The ribosome adds each amino acid brought to it by tRNA to the growing end of a polypeptide chain.");
			
				p.addAnswer(4, "mRNA is synthesized by the bonding of free nucleotides to the bases on the template strand of DNA",
				false,
				"No. This describes transcription.");
			
				p.addAnswer(5, "ribosomes move out of the nucleus",
				false,
				"No. Ribosomes have already reached the cytosol.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335127;


		
		

		
			
			p.question = "The P site of a ribosome does which one of the following? (<script type=\"text/javascript\">ebook(\'1704\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "It holds the tRNA that is carrying the next amino acid to be added to the growing polypeptide chain.",
				false,
				"No. This tRNA is held by the A site.");
			
				p.addAnswer(2, "It holds the tRNA carrying the growing polypeptide chain.",
				true,
				"Correct. The P site (peptidyl-tRNA site) holds the tRNA carrying the growing polypeptide chain, while the A site (aminoacyl-tRNA site) holds the tRNA carrying the next amino acid to be added to the chain.");
			
				p.addAnswer(3, "It helps \"unzip\" DNA during transcription.",
				false,
				"No. This is accomplished by DNA helicase.");
			
				p.addAnswer(4, "It catalyzes the addition of amino acids to the tRNAs.",
				false,
				"No. This is done by aminoacyl-tRNA synthetases.");
			
				p.addAnswer(5, "It recognizes the promoter during transcription initiation.",
				false,
				"No. RNA polymerase binds to the promoter.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335128;


		
		

		
			
			p.question = "The first amino acid inserted into a new polypeptide chain in eukaryotic cells is always _____. (<script type=\"text/javascript\">ebook(\'1704\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "glycine",
				false,
				"No. Another amino acid is inserted.");
			
				p.addAnswer(2, "serine",
				false,
				"No. Another amino acid is inserted.");
			
				p.addAnswer(3, "methionine",
				true,
				"Correct. The initiator tRNA, which carries the amino acid methionine, attaches to the initiation codon.");
			
				p.addAnswer(4, "adenosine monophosphate",
				false,
				"No. AMP is not an amino acid.");
			
				p.addAnswer(5, "alanine",
				false,
				"No. Another amino acid is inserted.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335129;


		
		

		
			
			p.question = "Which of the following is a post-translational modification of a polypeptide? (<script type=\"text/javascript\">ebook(\'1704\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "cleavage of a polypeptide into two or more chains",
				true,
				"Correct. Once a polypeptide has been formed during translation, it can undergo post-translational modifications.");
			
				p.addAnswer(2, "removal of introns and splicing of exons",
				false,
				"No. Processing of mRNA occurs before translation.");
			
				p.addAnswer(3, "formation of a polysome that allows simultaneous formation of many polypeptides from one mRNA transcript",
				false,
				"No. This process occurs during translation.");
			
				p.addAnswer(4, "The growing polypeptide signals the ribosome to attach to the ER.",
				false,
				"No. This process occurs during translation.");
			
				p.addAnswer(5, "complementary base pairing of mRNA and tRNA in the ribosome",
				false,
				"No. This process occurs during translation.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335130;


		
		

		
			
			p.question = "During translation, amino acid chain elongation occurs until _____. (<script type=\"text/javascript\">ebook(\'1704\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "no further amino acids are needed by the cell",
				false,
				"No. Translation stops because of a signal present within the mRNA.");
			
				p.addAnswer(2, "all tRNAs are empty",
				false,
				"No. Translation stops because of a signal present within the mRNA.");
			
				p.addAnswer(3, "the polypeptide is long enough",
				false,
				"No. Translation stops because of a signal present within the mRNA.");
			
				p.addAnswer(4, "the ribosome encounters a \"stop\" codon",
				true,
				"Correct. Elongation continues until a stop codon occupies the A site of the ribosome.");
			
				p.addAnswer(5, "the ribosome runs off the end of the mRNA strand",
				false,
				"No. Translation stops because of a signal present within the mRNA.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335131;


		
		

		
			
			p.question = "Polysomes may be defined as _____. (<script type=\"text/javascript\">ebook(\'1704\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "microfilaments and microtubules",
				false,
				"No. Polysomes are involved in translation.");
			
				p.addAnswer(2, "groups of lysosomes",
				false,
				"No. Polysomes are involved in translation.");
			
				p.addAnswer(3, "groups of ribosomes",
				true,
				"Correct. Polysomes are strings of ribosomes reading the same mRNA.");
			
				p.addAnswer(4, "groups of chromosomes",
				false,
				"No. Polysomes are involved in translation.");
			
				p.addAnswer(5, "groups of peroxisomes",
				false,
				"No. Polysomes are involved in translation.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335132;


		
		

		
			
			p.question = "Cells are able to distinguish proteins destined for secretion or for segregation to specific intracellular compartments from those that will remain in the cytoplasm because _____. (<script type=\"text/javascript\">ebook(\'1704\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "there are two types of ribosomes: one group that synthesizes cytoplasmic proteins only, and another type that synthesizes secreted or compartment-specific proteins only",
				false,
				"No. This is not true.");
			
				p.addAnswer(2, "some proteins, as they begin to be synthesized, contain a signal region that causes the ribosome with its growing polypeptide to attach to the ER and translocate the polypeptide into the lumen (space) of the ER",
				true,
				"Correct. The synthesis of all proteins begins in the cytosol. Only if the polypeptides are destined for the endomembrane system or for secretion will they contain a signal peptide, which targets the protein to the endoplasmic reticulum.");
			
				p.addAnswer(3, "proteins destined for secretion or for a specific compartment are all synthesized in the nucleus, whereas cytoplasmic proteins are all synthesized in the cytoplasm",
				false,
				"No. Proteins are not synthesized within the nucleus.");
			
				p.addAnswer(4, "each compartment in the cell (the nucleus, lysosome, and so forth) has its own set of ribosomes that synthesize proteins unique to that compartment",
				false,
				"No. This is not true.");
			
				p.addAnswer(5, "ribosomes contain two types of subunits",
				false,
				"No. While true, this is not relevant to the question.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335133;


		
		

		
			
			p.question = "What is the proper order of the following events in the expression of a eukaryotic gene? <br><br>1. translation<br><br>2. RNA processing<br><br>3. transcription<br><br>4. modification of protein<br><br>(<script type=\"text/javascript\">ebook(\'1704\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "1, 2, 3, 4",
				false,
				"No. In eukaryotic cells, the transcription of a pre-mRNA is followed by processing. The mRNA then moves to the cytoplasm, where ribosomes construct a polypeptide based on the codons in the RNA. The polypeptide is then modified, if necessary.");
			
				p.addAnswer(2, "3, 2, 1, 4",
				true,
				"Correct. In eukaryotic cells, the transcription of a pre-mRNA is followed by processing. The mRNA then moves to the cytoplasm, where ribosomes construct a polypeptide based on the codons in the RNA. The polypeptide is then modified, if necessary.");
			
				p.addAnswer(3, "4, 2, 3, 1",
				false,
				"No. In eukaryotic cells, the transcription of a pre-mRNA is followed by processing. The mRNA then moves to the cytoplasm, where ribosomes construct a polypeptide based on the codons in the RNA. The polypeptide is then modified, if necessary.");
			
				p.addAnswer(4, "2, 3, 4, 1",
				false,
				"No. In eukaryotic cells, the transcription of a pre-mRNA is followed by processing. The mRNA then moves to the cytoplasm, where ribosomes construct a polypeptide based on the codons in the RNA. The polypeptide is then modified, if necessary.");
			
				p.addAnswer(5, "1, 2, 4, 3",
				false,
				"No. In eukaryotic cells, the transcription of a pre-mRNA is followed by processing. The mRNA then moves to the cytoplasm, where ribosomes construct a polypeptide based on the codons in the RNA. The polypeptide is then modified, if necessary.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335134;


		
		

		
			
			p.question = "What is a key difference in gene expression between eukaryotic and prokaryotic cells? (<script type=\"text/javascript\">ebook(\'1705\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "In prokaryotes, proteins are assembled directly from DNA.",
				false,
				"No. Neither prokaryotes nor eukaryotes assemble proteins directly from DNA.");
			
				p.addAnswer(2, "RNA polymerases are involved only in initiation in eukaryotes.",
				false,
				"No. RNA polymerases are involved in initiation in both types of cells.");
			
				p.addAnswer(3, "In prokaryotic cells, the mRNA transcript is immediately available as mRNA without processing.",
				true,
				"Correct. In the absence of a nucleus, it can simultaneously transcribe and translate the same gene.");
			
				p.addAnswer(4, "In eukaryotic cells, transcribed RNA sequences function as termination signals.",
				false,
				"No. This is true of prokaryotic cells.");
			
				p.addAnswer(5, "Prokaryotes do not contain ribosomes.",
				false,
				"No. They do contain ribosomes.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335135;


		
		

		
			
			p.question = "A geneticist found that a particular mutation had no effect on the polypeptide encoded by the gene. This mutation probably involved _____. (<script type=\"text/javascript\">ebook(\'1705\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the deletion of one nucleotide",
				false,
				"No. This would change the reading frame, likely introducing many amino acid changes and stop codons into the coding sequence.");
			
				p.addAnswer(2, "a missense mutation",
				false,
				"No. This would change an amino acid in the encoded protein, potentially altering or even destroying its function.");
			
				p.addAnswer(3, "the insertion of one nucleotide",
				false,
				"No. This would change the reading frame, likely introducing many amino acid changes and stop codons into the coding sequence.");
			
				p.addAnswer(4, "a nonsense mutation",
				false,
				"No. This would truncate the gene and likely destroy its function.");
			
				p.addAnswer(5, "a silent or neutral mutation",
				true,
				"Correct. Silent mutations are attributable to the redundancy of the genetic code.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335136;


		
		

		
			
			p.question = "Which one of the following types of mutation is least likely to affect the function of the protein corresponding to the gene in which the mutation occurs? (<script type=\"text/javascript\">ebook(\'1705\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "addition of single bases",
				false,
				"No. This would change the reading frame.");
			
				p.addAnswer(2, "base-pair substitution",
				true,
				"Correct. Base substitutions can be silent (having no effect on the encoded protein), minor (changing the amino acid to one with similar properties or being located in an unimportant portion of the protein), or major (changing an amino acid that has significant effects on the activity of the protein). Insertions and deletions usually have disastrous effects.");
			
				p.addAnswer(3, "transposition",
				false,
				"No. Insertion of a transposon into a gene can interrupt the coding sequence, completely destroying the function of the encoded protein.");
			
				p.addAnswer(4, "deletion of single bases",
				false,
				"No. This would change the reading frame.");
			
				p.addAnswer(5, "nonsense mutation",
				false,
				"No. Nonsense mutations introduce stop codons into the coding sequence, truncating the encoded protein and likely eliminating its function.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335137;


		
		

		
			
			p.question = "A base-pair substitution mutation in a germ cell line is likely to have <b>no</b> effect on phenotype if the substitution _____. (<script type=\"text/javascript\">ebook(\'1705\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "forms a new stop codon",
				false,
				"No. This could have an effect by prematurely terminating translation of the encoded protein.");
			
				p.addAnswer(2, "occurs in an intron",
				true,
				"Correct. A base substitution in an intron that does not change the amino acid sequence of the polypeptide encoded by that gene would have no phenotypic effect on the organism.");
			
				p.addAnswer(3, "changes a stop codon to a codon specifying an amino acid",
				false,
				"No. This could change the nature of the encoded protein.");
			
				p.addAnswer(4, "changes the structure of an enzyme",
				false,
				"No. This may substantially change the nature of the enzyme.");
			
				p.addAnswer(5, "prevents the initiation of transcription of the DNA sequence that codes for ATP synthase",
				false,
				"This would mean that the cell would be unable to produce ATP.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335138;


		
		

		
			
			p.question = "A virus infects a cell and randomly inserts many short segments of DNA containing a stop codon throughout the organism\'s chromosomes. This will probably cause _____. (<script type=\"text/javascript\">ebook(\'1705\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "manufactured proteins to be short and defective",
				true,
				"Correct. Alterations that insert stop codons cause premature termination of the polypeptides.");
			
				p.addAnswer(2, "the DNA to break up into thousands of short segments",
				false,
				"No. The DNA itself will probably not break apart.");
			
				p.addAnswer(3, "incorrect pairing between mRNA codons and amino acids",
				false,
				"No. Specific base pairing would not be affected.");
			
				p.addAnswer(4, "no bad effects, as long as the stop codons are not also inserted into tRNA",
				false,
				"No. This is not true.");
			
				p.addAnswer(5, "all of the above",
				false,
				"No. Only one of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335139;


		
		

		
			
			p.question = "A point mutation in which a single base pair is inserted or deleted from DNA is called a(n) _____. (<script type=\"text/javascript\">ebook(\'1705\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "nonsense mutation",
				false,
				"No. Nonsense mutations are single base changes that convert an amino-acid-encoding codon into a stop codon.");
			
				p.addAnswer(2, "frame-shift mutation",
				true,
				"Correct. Insertions or deletions alter the reading frame (triplet grouping) of the genetic message. Such mutations are called frame-shift mutations.");
			
				p.addAnswer(3, "inversion mutation",
				false,
				"No. The question does not describe an inversion.");
			
				p.addAnswer(4, "translocation mutation",
				false,
				"No. The question does not describe a translocation.");
			
				p.addAnswer(5, "missense mutation",
				false,
				"No. Missense mutations are single base changes within a codon that alter the encoded amino acid.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335140;


		
		

		
			
			p.question = "Ultraviolet (UV) radiation is damaging to cells because it _____. (<script type=\"text/javascript\">ebook(\'1705\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "pokes holes in the nuclear envelope",
				false,
				"No. UV radiation acts directly upon the DNA.");
			
				p.addAnswer(2, "blocks all translation",
				false,
				"No. Although UV radiation can damage nucleic acids and may therefore hinder translation, this is not its most damaging effect.");
			
				p.addAnswer(3, "causes mutations in the DNA",
				true,
				"Correct. Mutagenic radiation, a physical mutagen, includes UV light, which can produce disruptive thymine dimers in DNA.");
			
				p.addAnswer(4, "deactivates the enzymes needed for DNA replication",
				false,
				"No. UV radiation acts directly upon the DNA.");
			
				p.addAnswer(5, "shreds the cytoskeleton and leads to free radicals",
				false,
				"No. It doesn\'t, at least not directly.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335141;


		
		

		
			
			p.question = "Transcription factors are found in __________. (<script type=\"text/javascript\">ebook(\'1706\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "archaea",
				false,
				"No. While archaea do use transcription factors, there is a better answer.");
			
				p.addAnswer(2, "bacteria and eukaryotes",
				false,
				"No. Bacteria do not regulate gene expression by way of transcription factors.");
			
				p.addAnswer(3, "bacteria and archaea",
				false,
				"No. Bacteria do not regulate gene expression by way of transcription factors.");
			
				p.addAnswer(4, "eukaryotes",
				false,
				"No. Eukaryotes do use transcription factors, but there is a better answer.");
			
				p.addAnswer(5, "archaea and eukaryotes",
				true,
				"Correct. Both archaea and eukaryotes use transcription factors to regulate gene expression.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335142;


		
		

		
			
			p.question = "On the off chance that you might contract an archaeal infection, how might it be treated? (<script type=\"text/javascript\">ebook(\'1706\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "It could be treated with antiviral medications because archaea are similar to viruses.",
				false,
				"No. Archaea are true living things made up of cells. They are not very similar to viruses.");
			
				p.addAnswer(2, "It could be treated with antibiotics such as streptomycin that inactivate bacterial ribosomes because archaea and bacteria have similar ribosomes.",
				false,
				"No. Although bacterial and archaeal ribosomes are similar in size, archaeal ribosomes are more like eukaryotic ribosomes in their reaction to drugs like streptomycin.");
			
				p.addAnswer(3, "It could be treated with drugs that disrupt gene splicing because archaea remove introns in the nucleus before sending mRNA to ribosomes.",
				false,
				"No. Archaea don\'t have a nucleus.");
			
				p.addAnswer(4, "It could be treated with a vaccine.",
				false,
				"No. Usually a vaccine is only useful before you have become infected.");
			
				p.addAnswer(5, "none of the above",
				true,
				"Correct. If you were infected by an archaeal organism, you would probably baffle the doctor.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335143;


		
		

		
			
			p.question = "When genes are expressed, they produce _____. (<script type=\"text/javascript\">ebook(\'1706\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "enzymes",
				false,
				"No. While some DNA codes for enzymes, this answer is too narrow.");
			
				p.addAnswer(2, "RNA molecules",
				false,
				"No. DNA directly codes for RNA molecules of many kinds, but there is a better answer.");
			
				p.addAnswer(3, "phenotypic traits",
				false,
				"No. Phenotypic traits are produced as a result of the actions of molecules coded for by DNA.");
			
				p.addAnswer(4, "polypeptides",
				false,
				"No. About 1.5% of the human genome codes for polypeptides, but there are many other functional molecules that are coded for by DNA.");
			
				p.addAnswer(5, "both b and d",
				true,
				"Correct. It now appears that DNA codes for both polypeptides and many types of functional RNA molecules.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

