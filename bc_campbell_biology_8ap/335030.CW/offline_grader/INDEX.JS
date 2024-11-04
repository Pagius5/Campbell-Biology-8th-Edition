

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "16: The Molecular Basis of Inheritance > Practice Test";
	ak.quiz_loc_with_commas = "16: The Molecular Basis of Inheritance, Practice Test";
	ak.quiz_title = "Practice Test";

	
		ak.help_url = "../../placeholders/help_placeholder.html";
	
	ak.essay_total = 0;
	ak.pair_problem_total = 0;
	ak.pair_total = 0;
	ak.problem_total = 43;
	ak.non_essay_total = 43;
	ak.scored_item_total = 43;

	
	
	


	
	ak.copyright_date = "2008";
	ak.brandname = "Pearson Benjamin Cummings";
	ak.legal = "../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.pearsoned.com%2Flegal%2Findex.htm";


	// Loop over all problems
	
	
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335053;


		
		

		
			
			p.question = "One strand of a DNA molecule has the base sequence 5\'-ATAGGT-3\'. The complementary base sequence on the other strand of DNA will be 3\'-_______-5\'. (<script type=\"text/javascript\">ebook(\'1602\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "TATCCA",
				true,
				"Correct. A always pairs with T, and G with C.");
			
				p.addAnswer(2, "TGGATA",
				false,
				"No. This is not how the bases pair.");
			
				p.addAnswer(3, "TGGAUA",
				false,
				"No. One of these bases is not found in DNA.");
			
				p.addAnswer(4, "UAUCCA",
				false,
				"No. One of these bases is not found in DNA.");
			
				p.addAnswer(5, "ATAGGT",
				false,
				"No. This is not how the bases pair.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335031;


		
		

		
			
			p.question = "During Griffith\'s experiments with <i>Streptococcus pneumoniae</i> in mice, material from _____ bacteria transformed _____ bacteria. (<script type=\"text/javascript\">ebook(\'1601\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "living nonvirulent; living virulent",
				false,
				"No. It was a virulent strain that transformed a nonvirulent strain.");
			
				p.addAnswer(2, "living nonvirulent; heat-killed virulent",
				false,
				"No. Dead cells cannot be transformed.");
			
				p.addAnswer(3, "living virulent; heat-killed nonvirulent",
				false,
				"No. Dead cells cannot be transformed.");
			
				p.addAnswer(4, "heat-killed virulent; living nonvirulent",
				true,
				"Correct. Griffith found that some of the living nonvirulent cells were converted to the virulent form.");
			
				p.addAnswer(5, "heat-killed nonvirulent; living virulent",
				false,
				"No. It was a virulent strain that transformed a nonvirulent strain.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335032;


		
		

		
			
			p.question = "Avery and his colleagues\' 1944 experiment showed that DNA _____. (<script type=\"text/javascript\">ebook(\'1601\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "was the substance that transformed the bacteria in Griffith\'s experiment",
				true,
				"Correct. Avery and his colleagues announced that the transforming agent was DNA.");
			
				p.addAnswer(2, "consists of sugars, phosphate groups, and bases",
				false,
				"No. There was another group of researchers that figured that out.");
			
				p.addAnswer(3, "has two strands held together with hydrogen bonds",
				false,
				"No. There was another group of researchers that figured that out.");
			
				p.addAnswer(4, "uses three bases to code for one amino acid",
				false,
				"No. There was another group of researchers that figured that out.");
			
				p.addAnswer(5, "contains adenine, guanine, thymine, and cytosine",
				false,
				"No. There was another group of researchers that figured that out.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335033;


		
		

		
			
			p.question = "A scientist assembles a bacteriophage with the protein coat of phage T2 and the DNA of phage T4. If this composite phage were allowed to infect a bacterium, the phages produced in the host cell would have _____. (<script type=\"text/javascript\">ebook(\'1601\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the protein of T2 and the DNA of T4",
				false,
				"No. Viral protein does not contain the information for the production of more viral protein.");
			
				p.addAnswer(2, "the protein of T4 and the DNA of T2",
				false,
				"No. However, this answer is partially correct.");
			
				p.addAnswer(3, "a mixture of the DNA and proteins of both phages",
				false,
				"No. Only the DNA and protein of the phage whose genetic material was used would be produced.");
			
				p.addAnswer(4, "the protein and DNA of T2",
				false,
				"No. This would be true only if protein were the genetic material.");
			
				p.addAnswer(5, "the protein and DNA of T4",
				true,
				"Correct. The protein and DNA would match that of the phage whose DNA was used.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335034;


		
		

		
			
			p.question = "In an important experiment, a radioactively labeled bacteriophage was allowed to infect bacteria. In a first trial, the phage contained radioactive DNA, and radioactivity was detected inside the bacteria. Next, phage containing radioactive protein was used, and the radioactivity was not detected inside the bacteria. These experiments led to the conclusion that _____. (<script type=\"text/javascript\">ebook(\'1601\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the genetic material of the phage is DNA",
				true,
				"Correct. In order to replicate, viral material must enter a bacterial cell. This experiment showed that the viral DNA had entered the bacterial cell.");
			
				p.addAnswer(2, "bacteriophages can infect bacteria",
				false,
				"No. This was already known before the experiment was carried out.");
			
				p.addAnswer(3, "DNA is made of nucleotides",
				false,
				"No. This was already known, and in any case was not shown by the experiment.");
			
				p.addAnswer(4, "the genetic material of the phage is protein",
				false,
				"No. In fact, the experiment demonstrated that this is not the case.");
			
				p.addAnswer(5, "genes are on chromosomes",
				false,
				"No. This was already known. The experiment here addressed whether the genetic material is present in the DNA or the protein component of chromosomes.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335035;


		
		

		
			
			p.question = "Up until Hershey and Chase showed that DNA was the genetic molecule, what molecule was considered the best candidate for carrying genetic information and why? (<script type=\"text/javascript\">ebook(\'1601\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "amino acids because of all the ways they can join together",
				false,
				"No. Amino acids are the monomers that make up proteins. They are not macromolecules.");
			
				p.addAnswer(2, "proteins because they were thought to be the only molecule with both the variety and specificity of function to account for the array of heritable traits observed",
				true,
				"Correct. Many scientists believed that proteins must be the chemical carriers of genetic information.");
			
				p.addAnswer(3, "carbohydrates because they are found in abundance in all organisms",
				false,
				"Carbohydrates were not seriously considered to be the genetic molecules.");
			
				p.addAnswer(4, "sterols because of the different variations on their ring structure",
				false,
				"No. Lipids were not seriously considered to be the genetic molecules.");
			
				p.addAnswer(5, "nucleoside triphosphates because of the ability to add and remove phosphate groups",
				false,
				"No. Nucleotide triphosphates, such as ATP and the monomers that are used to build nucleic acids are not large or diverse enough to encode genetic information.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335036;


		
		

		
			
			p.question = "Monomers for the synthesis of DNA are called _____. (<script type=\"text/javascript\">ebook(\'1601\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "amino acids",
				false,
				"No. Proteins are composed of amino acid monomers.");
			
				p.addAnswer(2, "fatty acids",
				false,
				"No. Fatty acids are components of lipids.");
			
				p.addAnswer(3, "nucleotides",
				true,
				"Correct. Each nucleotide unit of DNA consists of a nitrogenous base (A, G, C, or T), the sugar deoxyribose, and a phosphate group.");
			
				p.addAnswer(4, "monosaccharides",
				false,
				"No. Carbohydrates are composed of monosaccharide monomers.");
			
				p.addAnswer(5, "disaccharides",
				false,
				"No. Disaccharides are not monomers.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335037;


		
		

		
			
			p.question = "Chargaff found that for DNA _____. (<script type=\"text/javascript\">ebook(\'1601\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the ratio of A to C is close to 1:1 and the ratio of G to T is close to 1:1",
				false,
				"No. Think about specific base pairing.");
			
				p.addAnswer(2, "the ratio of A to T is close to 1:1 and the ratio of G to C is close to 1:1",
				true,
				"Correct. This is a result of specific base pairing and of DNA\'s double-helical structure.");
			
				p.addAnswer(3, "the ratio of A to G is close to 1:1 and the ratio of T to C is close to 1:1",
				false,
				"No. Think about specific base pairing.");
			
				p.addAnswer(4, "A + T = G + C",
				false,
				"No. A pairs with T, and G pairs with C, so these are not necessarily equal.");
			
				p.addAnswer(5, "A + T = 50% of the total bases",
				false,
				"No. There is no restriction on the possible percentage of A-T base pairs in the genome.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335038;


		
		

		
			
			p.question = "What technique was most helpful to Watson and Crick in developing their model for the structure of DNA? (<script type=\"text/javascript\">ebook(\'1601\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "radioactive labeling",
				false,
				"No. Experiments involving radioactive labeling were useful in determining that DNA is the genetic material.");
			
				p.addAnswer(2, "X-ray crystallography",
				true,
				"Correct. Watson and Crick based their model of DNA on insights they were able to gain from Franklin\'s X-ray diffraction photo.");
			
				p.addAnswer(3, "electrophoresis",
				false,
				"No. Another answer is correct.");
			
				p.addAnswer(4, "cloned DNA",
				false,
				"No. This technology was developed after Watson and Crick described the structure of DNA.");
			
				p.addAnswer(5, "transgenic animals",
				false,
				"No. This technology was developed after Watson and Crick described the structure of DNA.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335039;


		
		

		
			
			p.question = "In DNA, the two purines are _____, and the two pyrimidines are _____. (<script type=\"text/javascript\">ebook(\'1601\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "cytosine and guanine; adenine and thymine",
				false,
				"No. Cytosine is not a purine, and adenine is not a pyrimidine.");
			
				p.addAnswer(2, "cytosine and thymine; adenine and guanine",
				false,
				"No. The purines and the pyrimidines are backward.");
			
				p.addAnswer(3, "adenine and guanine; cytosine and thymine",
				true,
				"Correct. Purines have two rings, and pyrimidines have one.");
			
				p.addAnswer(4, "adenine and thymine; cytosine and guanine",
				false,
				"No. Thymine is not a purine, and guanine is not a pyrimidine.");
			
				p.addAnswer(5, "adenine and cytosine; guanine and thymine",
				false,
				"No. Cytosine is not a purine, and guanine is not a pyrimidine.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335040;


		
		

		
			
			p.question = "Which of the following is correct? (<script type=\"text/javascript\">ebook(\'1601\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Adenine forms two hydrogen bonds with guanine; thymine forms three hydrogen bonds with cytosine.",
				false,
				"No. Think about specific base pairing. Moreover, the pairing of A with G would take up more space than allotted by the width of the DNA double helix, and the T-C pairing would take up less space.");
			
				p.addAnswer(2, "Adenine forms three hydrogen bonds with thymine; guanine forms two hydrogen bonds with cytosine.",
				false,
				"No. The characteristics of the bases will not allow this.");
			
				p.addAnswer(3, "Adenine forms two covalent bonds with thymine; guanine forms three covalent bonds with cytosine.",
				false,
				"No. The bases are not connected to each other by covalent bonds.");
			
				p.addAnswer(4, "Adenine forms two hydrogen bonds with thymine; guanine forms three hydrogen bonds with cytosine.",
				true,
				"Correct. This is a consequence of the characteristics of the bases.");
			
				p.addAnswer(5, "Adenine forms three covalent bonds with thymine; guanine forms two covalent bonds with cytosine.",
				false,
				"No. The bases are not connected to each other by covalent bonds.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335041;


		
		

		
			
			p.question = "The two sugar-phosphate strands of a DNA molecule are joined to each other through _____. (<script type=\"text/javascript\">ebook(\'1601\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "5\' deoxyribose and phosphate bonds",
				false,
				"No. Deoxyribose is the sugar.");
			
				p.addAnswer(2, "hydrogen bonds between nucleotide bases",
				true,
				"Correct. The two sugar-phosphate strands of a DNA molecule are held together by hydrogen bonding between the nitrogenous bases, which are paired in the interior of the helix.");
			
				p.addAnswer(3, "covalent bonds between nitrogen atoms in adenine and in thymine",
				false,
				"No. These bases are not joined by covalent bonds.");
			
				p.addAnswer(4, "covalent bonds between carbon atoms in deoxyribose molecules",
				false,
				"No. Deoxyribose is the sugar.");
			
				p.addAnswer(5, "ionic bonds between guanine and cytosine",
				false,
				"No. These bases are not joined by ionic bonds.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335042;


		
		

		
			
			p.question = "The information in DNA is contained in _____. (<script type=\"text/javascript\">ebook(\'1601\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the variation in the structure of nucleotides that make up the DNA molecule",
				false,
				"No. The structure of the nucleotides does not change.");
			
				p.addAnswer(2, "the types of sugars used in making the DNA molecule",
				false,
				"No. The sugar is always deoxyribose.");
			
				p.addAnswer(3, "the sequence of amino acids that make up the DNA molecule",
				false,
				"No. DNA is not composed of amino acids.");
			
				p.addAnswer(4, "the sequence of nucleotides along the length of the two strands of the DNA molecule",
				true,
				"Correct. Although base-pairing rules dictate the combinations of nitrogenous bases forming the rungs of the double helix, they do not restrict the sequence of nucleotides along each strand, and the linear sequence of bases can be varied in countless ways.");
			
				p.addAnswer(5, "all of the above",
				false,
				"No. Only one of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335043;


		
		

		
			
			p.question = "Who is credited with explaining the structure of the DNA double helix? (<script type=\"text/javascript\">ebook(\'1601\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Jacob and Monod",
				false,
				"No. These individuals contributed to an understanding of the regulation of gene expression.");
			
				p.addAnswer(2, "Watson and Crick",
				true,
				"Correct. In April 1953, Watson and Crick published a one-page paper in the journal <i>Nature</i> elucidating their molecular model for the DNA double helix.");
			
				p.addAnswer(3, "Avery, McCarty, and MacLeod",
				false,
				"No. They demonstrated that DNA is the transforming agent.");
			
				p.addAnswer(4, "Griffith",
				false,
				"No. Griffith identified the phenomenon of bacterial transformation.");
			
				p.addAnswer(5, "Hershey and Chase",
				false,
				"No. They showed that DNA is the genetic material in phages.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335044;


		
		

		
			
			p.question = "Which of the following attributes of DNA is most crucial to its accurate duplication? (<script type=\"text/javascript\">ebook(\'1602\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "its helical nature and hydrogen bonding",
				false,
				"No. DNA\'s helical nature is not crucial to its duplication.");
			
				p.addAnswer(2, "its phosphodiester linkages and complementary strands",
				false,
				"No. The phosphodiester linkages are not crucial to its duplication.");
			
				p.addAnswer(3, "its deoxyribose sugar and phosphate groups",
				false,
				"No. The sugar and phosphate groups, while important in the backbone structure of DNA, do not play an important role in the copying of DNA.");
			
				p.addAnswer(4, "its specific base pairing and hydrogen bonding",
				true,
				"Correct. The hydrogen bonding makes it easy to separate the two strands. Specific complementary base pairing ensures that an accurate strand will be constructed on each template strand.");
			
				p.addAnswer(5, "its specific sequence of bases",
				false,
				"No. It doesn\'t matter what the sequence of bases is. The structure of DNA guarantees that the sequence of bases that exists will be accurately copied.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335045;


		
		

		
			
			p.question = "During the replication of DNA, _____. (<script type=\"text/javascript\">ebook(\'1602\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "both strands of a molecule act as templates",
				true,
				"Correct. When a cell copies a DNA molecule, each strand serves as a template for ordering nucleotides into a new complementary strand.");
			
				p.addAnswer(2, "the reaction is catalyzed by RNA polymerase",
				false,
				"No. DNA polymerase catalyzes DNA synthesis.");
			
				p.addAnswer(3, "errors never occur",
				false,
				"No. Although the error rate may by low, replication is not error free.");
			
				p.addAnswer(4, "only one strand of the molecule acts as a template",
				false,
				"No. What about the other strand?");
			
				p.addAnswer(5, "the cell undergoes mitosis",
				false,
				"No. DNA replication occurs during interphase.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335046;


		
		

		
			
			p.question = "The experiments of Meselson and Stahl showed that DNA _____. (<script type=\"text/javascript\">ebook(\'1602\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "is the genetic material",
				false,
				"No. This was known prior to the Meselson-Stahl experiments.");
			
				p.addAnswer(2, "replicates in a semiconservative fashion",
				true,
				"Correct. In the semiconservative model of DNA replication, the two strands of the parental molecule separate. Each functions as a template for the synthesis of a new complementary strand.");
			
				p.addAnswer(3, "contains complementary base pairing",
				false,
				"No. This was already known.");
			
				p.addAnswer(4, "codes for the sequence of amino acids in proteins",
				false,
				"No. Meselson and Stahl did not show this.");
			
				p.addAnswer(5, "is composed of nucleotides",
				false,
				"No. This was already known.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335047;


		
		

		
			
			p.question = "The DNA structures of prokaryotes and eukaryotes are different in several ways, but one way in which they are the same is that _____. (<script type=\"text/javascript\">ebook(\'1602\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "both have a sugar-phosphate backbone",
				true,
				"Correct. All DNA occurs as a double helix with two sugar-phosphate backbones that are antiparallel to each other.");
			
				p.addAnswer(2, "histones are present in the nucleosomes",
				false,
				"No. This is only true of eukaryotic DNA.");
			
				p.addAnswer(3, "the DNA is packaged into several linear chromosomes",
				false,
				"No. This is only true of eukaryotic DNA.");
			
				p.addAnswer(4, "most of the DNA is in the form of plasmids",
				false,
				"No. This is true of neither prokaryotic nor eukaryotic DNA.");
			
				p.addAnswer(5, "both have a single circular chromosome",
				false,
				"No. This is only true of prokaryotic DNA.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335048;


		
		

		
			
			p.question = "Which of the following statements about replication origins is correct? (<script type=\"text/javascript\">ebook(\'1602\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Bacterial chromosomes have a single origin, but eukaryotic chromosomes have many origins.",
				false,
				"No. This statement is correct, but there is a better answer.");
			
				p.addAnswer(2, "In bacteria, the DNA sequence at the origin is recognized by specific proteins that then bind to the origin.",
				false,
				"No. This statement is correct, but there is a better answer.");
			
				p.addAnswer(3, "The two strands of DNA at the origin are separated, allowing the formation of a replication bubble.",
				false,
				"No. This statement is correct, but there is a better answer.");
			
				p.addAnswer(4, "In both prokaryotes and eukaryotes, replication proceeds in both directions from each origin.",
				false,
				"No. This statement is correct, but there is a better answer.");
			
				p.addAnswer(5, "all of the above",
				true,
				"Correct. All of these statements are correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335049;


		
		

		
			
			p.question = "At each end of a DNA replication bubble is _____. (<script type=\"text/javascript\">ebook(\'1602\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "an origin of replication",
				false,
				"No. This is a site where replication begins, and is therefore present at the center of the replication bubble.");
			
				p.addAnswer(2, "a gene",
				false,
				"No. The movement of replication bubbles along the chromosome does not depend on the presence of genes.");
			
				p.addAnswer(3, "a telomere",
				false,
				"No. Not usually. Some, but not all, replication bubbles terminate at telomeres.");
			
				p.addAnswer(4, "a replication fork",
				true,
				"Correct. Replication forks are found at the ends of replication bubbles.");
			
				p.addAnswer(5, "a ribosome",
				false,
				"No. Ribosomes carry out protein synthesis.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335050;


		
		

		
			
			p.question = "The role of DNA polymerases in DNA replication is to _____. (<script type=\"text/javascript\">ebook(\'1602\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "attach free nucleotides to the new strand",
				true,
				"Correct. Elongation of new DNA at a replication fork is catalyzed by enzymes called DNA polymerases.");
			
				p.addAnswer(2, "synthesize an RNA primer to initiate DNA strand synthesis",
				false,
				"No. This is done by primase.");
			
				p.addAnswer(3, "link together short strands of DNA",
				false,
				"No. DNA ligase joins fragments.");
			
				p.addAnswer(4, "separate the two strands of DNA",
				false,
				"No. This is done by helicase.");
			
				p.addAnswer(5, "all of the above",
				false,
				"No. Only one of these answers is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335051;


		
		

		
			
			p.question = "The rate of elongation in prokaryotes is _____ the rate in eukaryotes. (<script type=\"text/javascript\">ebook(\'1602\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "much slower than",
				false,
				"No. It is faster.");
			
				p.addAnswer(2, "about the same speed as",
				false,
				"No. It is faster.");
			
				p.addAnswer(3, "much faster than",
				true,
				"Correct. The rate of elongation is about 500 nucleotides per second in bacteria and about 50 nucleotides per second in human cells.");
			
				p.addAnswer(4, "sometimes faster and sometimes slower than",
				false,
				"No. It is always faster.");
			
				p.addAnswer(5, "The rates are not comparable, since elongation only occurs in prokaryotes.",
				false,
				"No. Elongation occurs in both prokaryotes and eukaryotes.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335052;


		
		

		
			
			p.question = "The two strands of a DNA double helix are antiparallel. This means that _____. (<script type=\"text/javascript\">ebook(\'1602\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the two strands are mirror images",
				false,
				"No. This would mean that a base paired with itself.");
			
				p.addAnswer(2, "only one of the two strands can be used as a template for replication, because DNA polymerase only works in one direction",
				false,
				"No. The complement of the other strand grows discontinuously, by means of Okazaki fragments.");
			
				p.addAnswer(3, "one strand is actually composed of RNA",
				false,
				"No. Both strands are composed of DNA.");
			
				p.addAnswer(4, "one strand runs in the 5\' to 3\' direction, and the other runs in the 3\' to 5\' direction",
				true,
				"Correct. This allows the two strands to fit together properly.");
			
				p.addAnswer(5, "they both run in the 3\' to 5\' direction",
				false,
				"No. This would not allow the two strands to fit together properly.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335054;


		
		

		
			
			p.question = "DNA polymerase adds nucleotides to the _____ of the leading strands, and to the _____ of the lagging strands (Okazaki fragments). (<script type=\"text/javascript\">ebook(\'1602\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "5\' end; 3\' end",
				false,
				"No. DNA polymerase adds nucleotides to the 3\' end of both the leading and the lagging strands.");
			
				p.addAnswer(2, "3\' end; 5\' end",
				false,
				"No. DNA polymerase adds nucleotides to the 3\' end of both the leading and the lagging strands.");
			
				p.addAnswer(3, "5\' end; 5\' end",
				false,
				"No. DNA polymerase can only add nucleotides to the 3\' end of a growing DNA strand.");
			
				p.addAnswer(4, "3\' end; 3\' end",
				true,
				"Correct. Although the leading strand and lagging strand are synthesized in opposing directions with respect to the movement of the replication fork, the DNA polymerase enzyme can only add nucleotides to the 3\' end of a growing DNA strand.");
			
				p.addAnswer(5, "sugar group; phosphate group",
				false,
				"No. On both strands, DNA polymerase links the nucleotide to the 3\' OH group of the sugar group found at the end of the DNA strand.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335055;


		
		

		
			
			p.question = "What enzyme joins Okazaki fragments? (<script type=\"text/javascript\">ebook(\'1602\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "DNA polymerase",
				false,
				"No. DNA polymerases elongate DNA.");
			
				p.addAnswer(2, "DNA ligase",
				true,
				"Correct. Helicases unwind the DNA; polymerase synthesizes the complementary strands; ligase joins the Okazaki fragments.");
			
				p.addAnswer(3, "topoisomerase",
				false,
				"No. Topoisomerase relieves strain in the DNA ahead of the replication fork.");
			
				p.addAnswer(4, "helicase",
				false,
				"No. Helicases unwind the helix.");
			
				p.addAnswer(5, "primase",
				false,
				"No. Primase links RNA nucleotides together to make a primer for DNA synthesis.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335056;


		
		

		
			
			p.question = "After the formation of a replication bubble, which of the following is the correct sequence of enzymes used for the synthesis of the lagging DNA strand? (<script type=\"text/javascript\">ebook(\'1602\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "primase, helicases, DNA polymerase, ligase",
				false,
				"No. The helix must be unwound before the RNA primer is produced.");
			
				p.addAnswer(2, "helicases, primase, ligase, DNA polymerase",
				false,
				"No. The Okazaki fragments must be elongated before they are joined.");
			
				p.addAnswer(3, "helicases, primase, DNA polymerase, ligase",
				true,
				"Correct. First the double helix is unwound; primase makes the RNA primer; DNA polymerase elongates the growing strand and replaces the RNA primer with DNA; and DNA ligase joins the Okazaki fragments.");
			
				p.addAnswer(4, "helicases, DNA polymerase, primase, ligase",
				false,
				"No. Because DNA polymerase can only build onto a preexisting strand, an RNA primer is required for elongation to begin.");
			
				p.addAnswer(5, "ligase, primase, DNA polymerase, helicases",
				false,
				"No. Ligase attaches Okazaki fragments. Before these fragments are produced, the strands of the double helix need to be separated.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335057;


		
		

		
			
			p.question = "Which of the following components is (are) required for DNA replication? (<script type=\"text/javascript\">ebook(\'1602\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "ribosomes",
				false,
				"No. Ribosomes are the sites of polypeptide synthesis.");
			
				p.addAnswer(2, "transfer RNA",
				false,
				"No. Transfer RNA plays a role in polypeptide synthesis.");
			
				p.addAnswer(3, "RNA primer",
				true,
				"Correct. In the cell, the preexisting chain, the primer, is RNA, not DNA.");
			
				p.addAnswer(4, "proteases",
				false,
				"No. Proteases digest polypeptides.");
			
				p.addAnswer(5, "sucrases",
				false,
				"No. The sugar of the nucleotides is left intact.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335058;


		
		

		
			
			p.question = "The removal of the RNA primer and addition of DNA nucleotides to the 3\' end of Okazaki fragments in its place is carried out by _____. (<script type=\"text/javascript\">ebook(\'1602\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "nuclease",
				false,
				"No. Nucleases cut DNA&mdash;for example, as part of nucleotide excision repair.");
			
				p.addAnswer(2, "primase",
				false,
				"No. Primase synthesizes the RNA primer to initiate leading and lagging strand synthesis.");
			
				p.addAnswer(3, "DNA polymerase I",
				true,
				"Correct. Upon encountering the RNA primer, DNA polymerase III falls off the DNA and is replaced by DNA polymerase I.");
			
				p.addAnswer(4, "DNA polymerase III",
				false,
				"No. Upon encountering the RNA primer, DNA polymerase III falls off the DNA and is replaced by DNA polymerase I.");
			
				p.addAnswer(5, "ligase",
				false,
				"No. Ligase links completed Okazaki fragments together.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335059;


		
		

		
			
			p.question = "The unwinding of DNA at the replication fork causes twisting and strain in the DNA ahead of the fork, which is relieved by an enzyme called _____. (<script type=\"text/javascript\">ebook(\'1602\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "relievase",
				false,
				"No. There is another term for the enzyme.");
			
				p.addAnswer(2, "primase",
				false,
				"No. Primase synthesizes the RNA primer to initiate strand synthesis.");
			
				p.addAnswer(3, "ligase",
				false,
				"No. Ligase links segments of DNA together.");
			
				p.addAnswer(4, "topoisomerase",
				true,
				"Correct. Topoisomerase cuts the DNA and allows it to spin around its central axis, which relieves the strain caused by twisting.");
			
				p.addAnswer(5, "ribosomes",
				false,
				"No. Ribosomes carry out protein synthesis.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335060;


		
		

		
			
			p.question = "Once the DNA at the replication fork is unwound by helicases, what prevents the two strands from coming back together to reform a double helix? (<script type=\"text/javascript\">ebook(\'1602\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "The helicase modifies the DNA in such a way as to eliminate the affinity between the two strands.",
				false,
				"No. The two strands would come back together if they had the chance.");
			
				p.addAnswer(2, "DNA polymerase follows the helicase so closely that there is no chance for the strands to come back together.",
				false,
				"No. This is not true, especially on the lagging strand.");
			
				p.addAnswer(3, "Single-strand binding proteins bind the unwound DNA and prevent the double helix from reforming.",
				true,
				"Correct. As soon as the helicase passes, the single-strand binding proteins rapidly coat the unwound DNA and prevent the strands from coming back together.");
			
				p.addAnswer(4, "The helicase pushes the two strands so far apart that they have no chance of finding each other.",
				false,
				"No. This is not true.");
			
				p.addAnswer(5, "One of the strands is rapidly degraded, preventing the double helix from reforming.",
				false,
				"No. Both strands are maintained and used as templates for DNA replication.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335061;


		
		

		
			
			p.question = "Which description of DNA replication is correct? (<script type=\"text/javascript\">ebook(\'1602\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Helicases separate the two strands of the double helix, and DNA polymerases then construct two new strands using each of the original strands as templates.",
				true,
				"Correct. In the semiconservative model of DNA replication, the two strands of the parental molecule separate, and each functions as a template for the synthesis of a new complementary strand.");
			
				p.addAnswer(2, "Ligase assembles single-stranded codons, then polymerase knits these codons together into a DNA strand.",
				false,
				"No. Ligases link segments of DNA together.");
			
				p.addAnswer(3, "The two strands of DNA separate, and restriction enzymes cut up one strand. Then polymerase synthesizes two new strands out of the old ones.",
				false,
				"No. Neither of the strands is destroyed during replication.");
			
				p.addAnswer(4, "The two strands separate, and each one receives a complementary strand of RNA. Then this RNA serves as a template for the assembly of many new strands of DNA.",
				false,
				"No. However, RNA is used as a primer for DNA synthesis.");
			
				p.addAnswer(5, "Ligase separates the two strands of the DNA double helix. Then DNA polymerase synthesizes the leading strand and primase synthesizes the lagging strand.",
				false,
				"No. Ligase links DNA segments together, and DNA polymerase is responsible for the synthesis of both the leading and the lagging strands.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335062;


		
		

		
			
			p.question = "In what way(s) is our traditional representation of DNA polymerase molecules moving like locomotives along a track inaccurate? (<script type=\"text/javascript\">ebook(\'1602\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "The proteins involved in replication do not move; instead, DNA is drawn through the complex.",
				false,
				"No. While this statement is correct, there is a better answer.");
			
				p.addAnswer(2, "DNA polymerase acts as part of a large complex of proteins, not like a single locomotive.",
				false,
				"No. While this statement is correct, there is a better answer.");
			
				p.addAnswer(3, "Like a train on a track, DNA polymerase must add nucleotides sequentially. It cannot jump around.",
				false,
				"No. This describes an attribute of DNA replication that is like a locomotive on a track.");
			
				p.addAnswer(4, "both a and b",
				true,
				"Correct. DNA polymerase is part of a replication machine that may be anchored to the nuclear matrix. DNA is drawn into the complex, and the newly synthesized strands are extruded.");
			
				p.addAnswer(5, "DNA polymerase completes replication of one strand and then begins the other.",
				false,
				"No. Both strands are being replicated simultaneously.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335063;


		
		

		
			
			p.question = "The overall error rate in the completed DNA molecule is approximately _____. (<script type=\"text/javascript\">ebook(\'1602\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "1 error per 100 nucleotides",
				false,
				"No. Lower.");
			
				p.addAnswer(2, "1 error per 1,000 nucleotides",
				false,
				"No. Lower.");
			
				p.addAnswer(3, "1 error per 1,000,000 nucleotides",
				false,
				"No. Lower.");
			
				p.addAnswer(4, "1 error per 1,000,000,000 nucleotides",
				false,
				"No. Lower.");
			
				p.addAnswer(5, "1 error per 10,000,000,000 nucleotides",
				true,
				"Correct. The rate of initial pairing errors during replication is about 1 in 100,000. This level of accuracy is then dramatically enhanced by the different proofreading mechanisms discussed in the chapter.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335064;


		
		

		
			
			p.question = "The incorporation of an incorrect base into the DNA during replication _____. (<script type=\"text/javascript\">ebook(\'1602\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "will almost certainly lead to the death of the cell",
				false,
				"No. Even if the mistake is not corrected, most single base alterations have little effect on the cell.");
			
				p.addAnswer(2, "cannot be repaired, and a new mutation will invariably result",
				false,
				"No. Although it may lead to a new mutation, there is a chance that it will be detected and repaired.");
			
				p.addAnswer(3, "will trigger the cell to destroy the new strand, and replication will begin again",
				false,
				"No. Once replication has started, it will continue even if incorrect bases are incorporated.");
			
				p.addAnswer(4, "can be repaired by the mismatch repair system",
				true,
				"Correct. The mismatch repair system can detect and rectify incorrectly incorporated bases.");
			
				p.addAnswer(5, "is virtually impossible, as the accuracy of DNA polymerase is such that errors almost never occur",
				false,
				"No. Although DNA polymerase is remarkably accurate, errors still occur.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335065;


		
		

		
			
			p.question = "Which set of enzymes is involved in nucleotide excision repair? (<script type=\"text/javascript\">ebook(\'1602\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "nuclease, DNA polymerase, primase",
				false,
				"No. Primase is not involved in excision repair.");
			
				p.addAnswer(2, "DNA polymerase, helicase, primase",
				false,
				"No. Helicase and primase are involved in DNA replication, not nucleotide excision repair.");
			
				p.addAnswer(3, "ligase, nuclease, and primase",
				false,
				"No. Primase is not involved in nucleotide excision repair.");
			
				p.addAnswer(4, "nuclease, DNA polymerase, and ligase",
				true,
				"Correct. Nucleotide excision repair involves nucleases, DNA polymerase, and ligase.");
			
				p.addAnswer(5, "hydrolase, nuclease, and ligase",
				false,
				"No. Hydrolase enzymes are involved primarily in digestion.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335066;


		
		

		
			
			p.question = "Individuals with the disorder xeroderma pigmentosum _____. (<script type=\"text/javascript\">ebook(\'1602\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "are hypersensitive to sunlight",
				false,
				"No. This is not the only correct answer.");
			
				p.addAnswer(2, "have high rates of skin cancer",
				false,
				"No. This is not the only correct answer.");
			
				p.addAnswer(3, "often have inherited defects in the nucleotide excision repair system",
				false,
				"No. This is not the only correct answer.");
			
				p.addAnswer(4, "have difficulty repairing thymine dimers",
				false,
				"No. This is not the only correct answer.");
			
				p.addAnswer(5, "all of the above",
				true,
				"Correct. Individuals with this disorder are unusually sensitive to sunlight because they cannot repair the thymine dimers that can result from exposure to ultraviolet light.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335067;


		
		

		
			
			p.question = "Unlike prokaryotic DNA replication, replication of eukaryotic chromosomes _____. (<script type=\"text/javascript\">ebook(\'1602\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "involves two leading strands and no lagging strands",
				false,
				"No. Both eukaryotic and prokaryotic replication involve leading and lagging strands.");
			
				p.addAnswer(2, "cannot be completed by DNA polymerase",
				true,
				"Correct. This is the case because eukaryotic chromosomes are linear, and DNA polymerase cannot replicate the extreme 3\' end of the template strands.");
			
				p.addAnswer(3, "is semiconservative",
				false,
				"No. Both prokaryotic and eukaryotic DNA replication are semiconservative.");
			
				p.addAnswer(4, "has a single origin",
				false,
				"No. Prokaryotic DNA replication has a single origin; eukaryotic DNA replication has multiple origins.");
			
				p.addAnswer(5, "is error free",
				false,
				"No. Although error rates may be low, replication is not error free.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335068;


		
		

		
			
			p.question = "Telomeres _____. (<script type=\"text/javascript\">ebook(\'1602\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "get longer with continued cell division",
				false,
				"No. In general, they get shorter.");
			
				p.addAnswer(2, "are found in both prokaryotic and eukaryotic cells",
				false,
				"No. Prokaryotic chromosomes are circular; they do not have telomeres.");
			
				p.addAnswer(3, "remain the same regardless of the frequency of cell division",
				false,
				"No. Telomere length usually decreases with each round of cell division.");
			
				p.addAnswer(4, "get shorter with continued cell division",
				true,
				"Correct. However, the enzyme telomerase, which is not present in most cells of multicellular organisms, can lengthen the telomeres.");
			
				p.addAnswer(5, "are shorter for younger individuals",
				false,
				"No. In general, the older the individual, the shorter the telomeres.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335069;


		
		

		
			
			p.question = "Telomerase _____. (<script type=\"text/javascript\">ebook(\'1602\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "is an enzyme that lengthens telomeres",
				true,
				"Correct. Telomerase is an enzyme made of a protein and an RNA sequence that serves as a template for adding additional telomeric DNA sequences. Telomerase is found in germ cells and in many human cancers, increasing the longevity of these cells.");
			
				p.addAnswer(2, "prevents the loss of centromeric DNA",
				false,
				"No. As the name implies, telomerase is an enzyme that acts upon telomeres.");
			
				p.addAnswer(3, "speeds cell aging",
				false,
				"No. In fact, telomerase appears to slow cell aging, and is present mostly only in germ cells and cancer cells.");
			
				p.addAnswer(4, "slows the rate of cancer cell growth",
				false,
				"No. Telomerase may actually play a role in maintaining cancers by allowing cancerous cells to divide many times without losing the ends of their chromosomes.");
			
				p.addAnswer(5, "splits telomeres",
				false,
				"No. Telomerase does act upon telomeres, but not by splitting them.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335070;


		
		

		
			
			p.question = "What is the major difference between bacterial chromosomes and eukaryotic chromosomes? (<script type=\"text/javascript\">ebook(\'1603\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "The DNA of bacterial chromosomes has a slightly different structure.",
				false,
				"No. The molecular structure of DNA is the same in all organisms.");
			
				p.addAnswer(2, "Eukaryotes have a single circular chromosome while bacteria have several linear chromosomes.",
				false,
				"No. The opposite is true.");
			
				p.addAnswer(3, "Bacteria have a single circular chromosome while eukaryotes have several linear chromosomes.",
				true,
				"Correct. The arrangement of DNA and its association with proteins is different for prokaryotes and eukaryotes.");
			
				p.addAnswer(4, "Bacterial chromosomes have much more protein associated with the DNA than eukaryotes.",
				false,
				"No. Bacterial chromosomes actually have less protein associated with the DNA.");
			
				p.addAnswer(5, "There is no difference between bacterial and eukaryotic chromosomes.",
				false,
				"No. While the DNA itself has the same structure, there are differences in the structure of the chromosomes, which consist of DNA and proteins.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335071;


		
		

		
			
			p.question = "Put the following DNA-containing entities in order according to the amount of DNA found in their genomes. (<script type=\"text/javascript\">ebook(\'1603\',\'quiz\')</script>)";
			p.incorrect_any_expl = "No. The correct order is virus, bacteria, eukaryote";
			p.incorrect_any_expl_flag = 1;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "bacteria, virus, eukaryote",
				false,
				"");
			
				p.addAnswer(2, "bacteria, eukaryote, virus",
				false,
				"");
			
				p.addAnswer(3, "eukaryote, virus, bacteria",
				false,
				"");
			
				p.addAnswer(4, "virus, bacteria, eukaryote",
				true,
				"Correct. In general viruses have the smallest genomes, followed by bacteria, with eukaryotes having the largest genomes.");
			
				p.addAnswer(5, "They all have about the same amount of DNA.",
				false,
				"");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335072;


		
		

		
			
			p.question = "Why were many of the early experiments on DNA carried out on viruses and bacteria? (<script type=\"text/javascript\">ebook(\'1603\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "They have short generation times.",
				false,
				"No. This is an attractive attribute of viruses and bacteria, but there is a better answer.");
			
				p.addAnswer(2, "They have relatively small genomes.",
				false,
				"No. This is an attractive attribute of viruses and bacteria, but there is a better answer.");
			
				p.addAnswer(3, "Their chromosomes have a simpler structure.",
				false,
				"No. This is an attractive attribute of viruses and bacteria, but there is a better answer.");
			
				p.addAnswer(4, "They can interact with each other.",
				false,
				"No. This is an attractive attribute of viruses and bacteria, but there is a better answer.");
			
				p.addAnswer(5, "all of the above",
				true,
				"Correct. Experiments on DNA were, and still are, carried out on these subjects for all of these reasons.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335073;


		
		

		
			
			p.question = "The \"beads on a string\" seen in interphase chromatin are _____. (<script type=\"text/javascript\">ebook(\'1603\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "nucleosomes",
				true,
				"Correct. Nucleosomes are complexes of DNA wrapped around 8 histone molecules.");
			
				p.addAnswer(2, "looped domains",
				false,
				"No. Looped domains are higher order structures in which the DNA is more tightly packed.");
			
				p.addAnswer(3, "heterochromatin",
				false,
				"No. Heterochromatin refers to clumps of tightly packed chromatin observed in interphase chromatin.");
			
				p.addAnswer(4, "histone tails",
				false,
				"No. The histone proteins around which DNA is wrapped in a chromosome have tails.");
			
				p.addAnswer(5, "nucleoids",
				false,
				"No. The nucleoid is the region in a prokaryotic cell that contains the bacterial chromosome.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

