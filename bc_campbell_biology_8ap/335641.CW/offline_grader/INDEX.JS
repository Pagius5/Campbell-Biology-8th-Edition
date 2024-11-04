

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "27: Bacteria and Archaea > Practice Test";
	ak.quiz_loc_with_commas = "27: Bacteria and Archaea, Practice Test";
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
		
		p.id = 335642;


		
		

		
			
			p.question = "Why is salt a good preservative to use for foods such as pork and fish? (<script type=\"text/javascript\">ebook(\'2701\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Prokaryotes living in the food products will take in excess water and explode.",
				false,
				"No. This is what would happen to prokaryotes in a hypotonic environment, if it weren\'t for their cell walls.");
			
				p.addAnswer(2, "Salt is a toxin to prokaryotic cells and leads to their death.",
				false,
				"No. Salt alone doesn\'t necessarily kill most prokaryotic cells.");
			
				p.addAnswer(3, "Prokaryotic cells will shrink from their cell walls, impacting their ability to reproduce.",
				true,
				"Correct. Prokaryotic cells will shrink from their cell walls, impacting their ability to reproduce.");
			
				p.addAnswer(4, "Salt breaks down the chitin contained in the cell walls of prokaryotes.",
				false,
				"No. Chitin is found in some eukaryotic cells.");
			
				p.addAnswer(5, "Salt breaks down the peptidoglycan found in the capsule of prokaryotes.",
				false,
				"No. Peptidoglycan is a component of the cell wall of bacteria, not the capsule.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335643;


		
		

		
			
			p.question = "Gram-negative bacteria have _____ peptidoglycan than gram-positive cells, and their cell walls are _____ complex structurally. (<script type=\"text/javascript\">ebook(\'2701\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "more; more",
				false,
				"No. Gram-negative bacteria have less peptidoglycan than gram-positive cells, although their cell walls are more complex than the walls of gram-positive cells.");
			
				p.addAnswer(2, "more; less",
				false,
				"No. Gram-negative bacteria have less peptidoglycan than gram-positive cells, but their cell walls are more structurally complex.");
			
				p.addAnswer(3, "less; less",
				false,
				"No. Gram-negative bacteria do have less peptidoglycan than gram-positive cells, but their cell walls are more structurally complex.");
			
				p.addAnswer(4, "less; more",
				true,
				"Correct. Gram-negative bacteria do not contain as much peptidoglycan. They have an additional outer membrane with lipopolysaccharides.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the answers is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335644;


		
		

		
			
			p.question = "A gram-negative cell wall consists of _____. (<script type=\"text/javascript\">ebook(\'2701\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "a thick layer of peptidoglycan surrounded by an outer membrane",
				false,
				"No. Gram-negative cells do not contain as much peptidoglycan as gram-positive cells.");
			
				p.addAnswer(2, "a thin layer of peptidoglycan surrounded by an outer membrane",
				true,
				"Correct. Gram-negative bacteria have a thin layer of peptidoglycan, which is located in a periplasmic gel between the plasma membrane and an outer membrane.");
			
				p.addAnswer(3, "two layers of peptidoglycan with a layer of lipid in between",
				false,
				"No. Gram-negative bacteria have a thin layer of peptidoglycan, which is located in a periplasmic gel between the plasma membrane and an outer membrane.");
			
				p.addAnswer(4, "cholesterol and peptidoglycan",
				false,
				"No. Cholesterol is a sterol found in animals.");
			
				p.addAnswer(5, "bacteriorhodopsin and periplasmic gel",
				false,
				"No. Bacteriorhodopsin is a photosynthetic pigment.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335645;


		
		

		
			
			p.question = "Bacteria that _____ tend to have abundant internal membranes. (<script type=\"text/javascript\">ebook(\'2701\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "are photosynthetic",
				true,
				"Correct. Cyanobacteria have thylakoid membranes, much like those in chloroplasts, that function in photosynthesis.");
			
				p.addAnswer(2, "are gram-negative",
				false,
				"No. \"Gram-negative\" refers to bacteria that have an extra membrane outside of the cell wall.");
			
				p.addAnswer(3, "have flagella",
				false,
				"No. Flagella are not found internally.");
			
				p.addAnswer(4, "are pathogenic",
				false,
				"No. The answer has to do with the nutritional mode of a certain type of bacteria.");
			
				p.addAnswer(5, "all of the above",
				false,
				"No. Only one of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335646;


		
		

		
			
			p.question = "Bacterial cells, but not eukaryotic cells, possess _____. (<script type=\"text/javascript\">ebook(\'2701\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "photosynthetic pigments",
				false,
				"No. Plants contain cells capable of photosynthesis.");
			
				p.addAnswer(2, "a nucleoid with a circular chromosome",
				true,
				"Correct. The bacterial chromosome is one double-stranded DNA molecule in the form of a ring, and is not contained within a nuclear envelope.");
			
				p.addAnswer(3, "membrane-enclosed organelles",
				false,
				"No. Eukaryotes, not prokaryotes, are characterized by membrane-bound organelles.");
			
				p.addAnswer(4, "a \"9 + 2\" arrangement of microtubules",
				false,
				"No. This microtubule arrangement is found in eukaryotic cilia and flagella.");
			
				p.addAnswer(5, "cell walls",
				false,
				"No. Although made from different substances, bacteria and several types of eukaryotic cells have cell walls.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335647;


		
		

		
			
			p.question = "Plasmids _____. (<script type=\"text/javascript\">ebook(\'2701\',\'quiz\')</script>)";
			p.incorrect_any_expl = "No. This answer is correct, but there is a better answer.";
			p.incorrect_any_expl_flag = 1;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "replicate independently of the main chromosome",
				false,
				"");
			
				p.addAnswer(2, "often contain antibiotic resistance genes",
				false,
				"");
			
				p.addAnswer(3, "are transferred from one bacterium to another by conjugation",
				false,
				"");
			
				p.addAnswer(4, "allow bacteria to survive adverse conditions",
				false,
				"");
			
				p.addAnswer(5, "all of the above",
				true,
				"Correct. Plasmids may also direct the metabolism of rarely encountered nutrients.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335648;


		
		

		
			
			p.question = "The bacteria that cause tetanus can be killed only by prolonged heating at temperatures considerably above boiling. This suggests that these bacteria _____. (<script type=\"text/javascript\">ebook(\'2701\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "have cell walls containing peptidoglycan",
				false,
				"No. Most bacteria have some peptidoglycan. This doesn\'t offer protection from extreme heat.");
			
				p.addAnswer(2, "protect themselves by secreting antibiotics",
				false,
				"No. Even if they could, antibiotics would not protect them from such elevated temperatures.");
			
				p.addAnswer(3, "secrete endotoxins",
				false,
				"No. Endotoxins would not protect them from such elevated temperatures.");
			
				p.addAnswer(4, "are autotrophic",
				false,
				"No. They are not autotrophic; and even if they were, that would not provide protection from such elevated temperatures.");
			
				p.addAnswer(5, "produce endospores",
				true,
				"Correct. Endospores are extremely heat resistant.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335649;


		
		

		
			
			p.question = "How is it possible that as many as 9 million mutations can arise each day in the <i>E. coli</i> inhabiting one human? (<script type=\"text/javascript\">ebook(\'2702\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "<i>E. coli</i> have a very high mutation rate.",
				false,
				"No. <i>E. coli</i> have a similar mutation rate to other prokaryotes and eukaryotes.");
			
				p.addAnswer(2, "The interior of the human colon is particularly mutagenic.",
				false,
				"No. Although the typical American\'s diet may be higher in mutagenic chemicals than we would like, the human colon is not particularly mutagenic.");
			
				p.addAnswer(3, "The mathematics of large population size and rapid reproduction rate combine to produce many mutations without a particularly high mutation rate.",
				true,
				"Correct. Simply by rapid multiplication and a very large population with a normal mutation rate, enormous numbers of mutations can arise in a single day. Even if many of the mutations are lethal, they will hardly make a dent in the population.");
			
				p.addAnswer(4, "Transformation is occurring.",
				false,
				"No. Transformation is a form of genetic recombination, not mutation.");
			
				p.addAnswer(5, "Conjugation is occurring.",
				false,
				"No. Conjugation is a form of genetic recombination, not mutation.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335650;


		
		

		
			
			p.question = "In the absence of meiosis and sexual reproduction, what general process allows genetic recombination among prokaryotes? (<script type=\"text/javascript\">ebook(\'2702\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "evolution",
				false,
				"No. Evolution is a product of genetic recombination.");
			
				p.addAnswer(2, "mutation",
				false,
				"No. Mutation produces new genetic possibilities, but it does not recombine them.");
			
				p.addAnswer(3, "chemoautotrophy",
				false,
				"No. This is a mode of nutrition.");
			
				p.addAnswer(4, "biofilms",
				false,
				"No. This is a type of metabolic cooperation.");
			
				p.addAnswer(5, "horizontal gene transfer",
				true,
				"Correct. Horizontal gene transfer by way of transformation, transduction, and conjugation allows bacteria to share genetic material and recombine it.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335651;


		
		

		
			
			p.question = "Which statement about transformation is true? (<script type=\"text/javascript\">ebook(\'2702\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "It requires transport of DNA by a virus.",
				false,
				"No. Transduction is the transport of DNA by a virus.");
			
				p.addAnswer(2, "It requires movement of DNA through a pilus.",
				false,
				"No. DNA moves from one bacterium to another through a pilus in the process of conjugation.");
			
				p.addAnswer(3, "It can be facilitated by cell-surface proteins that recognize compatible DNA.",
				true,
				"Correct. For some bacteria, transformation is a very important source of genetic material, and they have evolved mechanisms to make the process efficient.");
			
				p.addAnswer(4, "It is a very rare phenomenon that happens by chance.",
				false,
				"No. When it was originally discovered, scientists believed this was the case. Further research, however, has shown transformation to be an important process in many naturally occurring bacterial populations.");
			
				p.addAnswer(5, "It does not play an important role in natural bacterial populations.",
				false,
				"No. When it was originally discovered, scientists believed this was the case. Further research, however, has shown transformation to be an important process in many naturally occurring bacterial populations.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335652;


		
		

		
			
			p.question = "An F<sup>+</sup> bacterial cell ________. (<script type=\"text/javascript\">ebook(\'2702\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "acts as a receptor during conjugation",
				false,
				"No. An F<sup>+</sup> cell acts as a donor during conjugation.");
			
				p.addAnswer(2, "transfers DNA by way of transduction",
				false,
				"No. The F<sup>+</sup> designation is used of bacteria that participate in conjugation.");
			
				p.addAnswer(3, "has many antibiotic resistance genes",
				false,
				"No. The F<sup>+</sup> designation refers to the cell\'s ability to form a pilus and transfer DNA to a receptor cell. It does not indicate the types of genes involved in the transfer.");
			
				p.addAnswer(4, "acts as a donor during conjugation",
				true,
				"Correct. The F<sup>+</sup> designation indicates that the bacterial cell has the genes necessary to initiate conjugation and transfer DNA to a receptor cell.");
			
				p.addAnswer(5, "Uses fimbriae to transfer DNA",
				false,
				"No. Fimbriae are attachment pili. Sex pili are used in conjugation.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335653;


		
		

		
			
			p.question = "Which of the following is true about R plasmids? (<script type=\"text/javascript\">ebook(\'2702\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "They can only carry one resistance gene for resistance to one antibiotic.",
				false,
				"No. R plasmids may carry resistance genes for many antibiotics.");
			
				p.addAnswer(2, "They can be transferred from one bacterium to another via conjugation.",
				false,
				"No. This is true, but there is a better answer.");
			
				p.addAnswer(3, "They can carry several resistance genes.",
				false,
				"No, this is true, but there is a better answer.");
			
				p.addAnswer(4, "both a and b",
				false,
				"No. Answer a is not correct. R plasmids may carry resistance genes for many antibiotics.");
			
				p.addAnswer(5, "both b and c",
				true,
				"Correct. R plasmids can carry genes that confer resistance to many antibiotics, and they can be transferred via conjugation.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335654;


		
		

		
			
			p.question = "Bacteria that use light for their energy source and CO<sub>2</sub> for their carbon source are called _____. (<script type=\"text/javascript\">ebook(\'2703\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "photoautotrophs",
				true,
				"Correct. Photoautotrophs are photosynthetic organisms that harness light energy to drive the synthesis of organic compounds from carbon dioxide.");
			
				p.addAnswer(2, "photoheterotrophs",
				false,
				"No. Heterotrophs obtain their carbon from organic compounds.");
			
				p.addAnswer(3, "chemoautotrophs",
				false,
				"No. Light, not chemicals, is the source of energy for these bacteria.");
			
				p.addAnswer(4, "chemoheterotrophs",
				false,
				"No. Heterotrophs obtain their carbon from organic compounds.");
			
				p.addAnswer(5, "photochemoheterotrophs",
				false,
				"No. Heterotrophs obtain their carbon from organic compounds.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335655;


		
		

		
			
			p.question = "In an experiment, a microbiologist put equal numbers of each of the following organisms into a flask of sterile broth, consisting mostly of sugar and a few amino acids. She then placed the flask in the dark. Which of the organisms would be most likely to survive? (<script type=\"text/javascript\">ebook(\'2703\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "chemoheterotrophic bacteria",
				true,
				"Correct. These organisms do not require light and use organic compounds for both energy and carbon.");
			
				p.addAnswer(2, "cyanobacteria",
				false,
				"No. They require light for photosynthesis.");
			
				p.addAnswer(3, "photoheterotrophs",
				false,
				"No. They require light.");
			
				p.addAnswer(4, "thermoacidophilic bacteria",
				false,
				"No. This term indicates that these bacteria like acidic and hot environments, but it does not give you information about their energy and carbon source.");
			
				p.addAnswer(5, "photoautotrophs",
				false,
				"No. They require light for photosynthesis.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335656;


		
		

		
			
			p.question = "The <i>Desulfovibrio</i> bacterium breaks down organic matter (which it must have) and uses sulfate (not oxygen) as an electron acceptor. As a result, it produces hydrogen sulfide (H<sub>2</sub>S), accounting for the \"rotten egg\" smell of swamp muck. Oxygen is a deadly poison to <i>Desulfovibrio</i>. We would call <i>Desulfovibrio</i> a(n) _____. (<script type=\"text/javascript\">ebook(\'2703\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "facultatively aerobic chemoheterotroph",
				false,
				"No. \"Aerobic\" means \"with oxygen.\"");
			
				p.addAnswer(2, "obligately anaerobic chemoheterotroph",
				true,
				"Correct. Obligate anaerobes are poisoned by oxygen. Chemoheterotrophs must consume organic molecules for both energy and carbon.");
			
				p.addAnswer(3, "facultatively anaerobic chemoautotroph",
				false,
				"No. Chemoautotrophs can produce their own organic compounds.");
			
				p.addAnswer(4, "obligately anaerobic chemoautotroph",
				false,
				"No. Autotrophs do not require pre-made organic compounds.");
			
				p.addAnswer(5, "There is insufficient information to answer this question.",
				false,
				"No. You know that the organism requires organic compounds and is poisoned by oxygen. This is enough information to answer the question.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335657;


		
		

		
			
			p.question = "Choose the list below that contains the substances required by typical nitrogen-fixing cyanobacteria. (<script type=\"text/javascript\">ebook(\'2703\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "oxygen, sulfur, light, water, and some minerals",
				false,
				"No. Oxygen can be acquired from the splitting of water molecules. Sulfur is not required. Nitrogen is another essential substance.");
			
				p.addAnswer(2, "carbon dioxide, sulfur, light, water, and some minerals",
				false,
				"No. Nitrogen is also required. Sulfur is not.");
			
				p.addAnswer(3, "carbon, nitrogen, light, water, and some minerals",
				false,
				"No. How can photosynthesis occur without carbon dioxide?");
			
				p.addAnswer(4, "carbon dioxide, nitrogen, water, light, and some minerals",
				true,
				"Correct. These bacteria are considered some of the most self-sufficient of all organisms.");
			
				p.addAnswer(5, "carbon dioxide, ammonium, water, light, and some minerals",
				false,
				"No. Nitrogen-fixing bacteria require nitrogen to convert it to ammonium.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335658;


		
		

		
			
			p.question = "What is the role of heterocytes in a cyanobacterial filament? (<script type=\"text/javascript\">ebook(\'2703\',\'quiz\')</script>)";
			p.incorrect_any_expl = "No. Filaments are colonies of prokaryotic cells. In some cases, photosynthesis and nitrogen fixation cannot occur in a single cell because oxygen inactivates enzymes needed for nitrogen fixation. Heterocysts are specialized cells that carry out only nitrogen fixation.";
			p.incorrect_any_expl_flag = 1;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "They carry out photosynthesis and nitrogen fixation.",
				false,
				"");
			
				p.addAnswer(2, "They carry out only nitrogen fixation.",
				true,
				"Correct. Filaments are colonies of prokaryotic cells. In some cases, photosynthesis and nitrogen fixation cannot occur in a single cell because oxygen inactivates enzymes needed for nitrogen fixation. Heterocysts are specialized cells that carry out only nitrogen fixation.");
			
				p.addAnswer(3, "They carry out only photosynthesis.",
				false,
				"");
			
				p.addAnswer(4, "They oxidize inorganic substances to obtain energy.",
				false,
				"");
			
				p.addAnswer(5, "They store endospores.",
				false,
				"");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335659;


		
		

		
			
			p.question = "Biofilms are an example of ______. (<script type=\"text/javascript\">ebook(\'2703\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "metabolic cooperation among prokaryotic species",
				true,
				"Correct. Bacteria in biofilms send signals to each other, produce structures to channel nutrients in and wastes out, and produce proteins that help the cells adhere to the substrate and to each other.");
			
				p.addAnswer(2, "scientific videos",
				false,
				"No. Just kidding. Not that kind of film.");
			
				p.addAnswer(3, "multicellularity in prokaryotes",
				false,
				"No. Biofilms are more colonial. They are not multicellular prokaryotic organisms.");
			
				p.addAnswer(4, "sites of horizontal gene transfer among prokaryotes",
				false,
				"No. Horizontal gene transfer can occur in many places depending on the specific process being used.");
			
				p.addAnswer(5, "sites of intense nitrogen fixation by prokaryotes",
				false,
				"No. Nitrogen fixation occurs in many bacterial communities. Depending on the community in a particular biofilm, there may be no nitrogen fixation occurring at all.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335660;


		
		

		
			
			p.question = "Portions of the genomes of certain prokaryotic species are very similar to portions of the genomes of distantly related prokaryotes. The process that most likely accounts for this genetic similarity is _____. (<script type=\"text/javascript\">ebook(\'2704\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "convergent evolution",
				false,
				"No. This is not the most likely answer. Convergent evolution usually endows distantly related organisms with similar morphological or nutritional traits, without causing them to be genetically similar.");
			
				p.addAnswer(2, "identical mutations occurring independently in these distantly related lineages",
				false,
				"No. The chances of this are negligible.");
			
				p.addAnswer(3, "horizontal gene transfer",
				true,
				"Correct. Prokaryotes are adept at obtaining DNA from other sources, including other species of prokaryotes, through the processes of conjugation, transformation, and transduction.");
			
				p.addAnswer(4, "genetic variation arising from binary fission",
				false,
				"No. Binary fission generally produces genetically identical daughter cells.");
			
				p.addAnswer(5, "genetic variation arising from meiosis",
				false,
				"No. Meiosis is a kind of nuclear division, and because \nprokaryotes lack nuclei, meiosis is not a possibility.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335661;


		
		

		
			
			p.question = "Which subgroup of proteobacteria contains many species that are closely associated with eukaryotic hosts in mutualistic or parasitic relationships? (<script type=\"text/javascript\">ebook(\'2704\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "alpha",
				true,
				"Correct. Members of this subgroup include <i>Rhizobium</i>, which live in nodules within the roots of legumes and convert atmospheric N<sub>2</sub> to compounds that are usable by the plants. This group also gave rise to mitochondria.");
			
				p.addAnswer(2, "beta",
				false,
				"No. These proteobacteria are not known for symbiotic relationships.");
			
				p.addAnswer(3, "gamma",
				false,
				"No. This group includes several of the well-known pathogens that cause human disease.");
			
				p.addAnswer(4, "delta",
				false,
				"No. This group includes species that congregate into relatively large slimy colonies and species that are predators of other bacteria.");
			
				p.addAnswer(5, "epsilon",
				false,
				"No. Most species in this subgroup are pathogenic to humans or other animals.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335662;


		
		

		
			
			p.question = "Which subgroup of proteobacteria contains many species that are predators of other bacteria? (<script type=\"text/javascript\">ebook(\'2704\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "alpha",
				false,
				"No. Members of this subgroup include <i>Rhizobium</i>, which lives in nodules within the roots of legumes and converts atmospheric N<sub>2</sub> to compounds that are usable by the plants.");
			
				p.addAnswer(2, "beta",
				false,
				"No. These proteobacteria are not known for preying on other bacteria.");
			
				p.addAnswer(3, "gamma",
				false,
				"No. This group includes several of the well-known pathogens that cause human disease.");
			
				p.addAnswer(4, "delta",
				true,
				"Correct. This group includes species that congregate into relatively large slimy colonies and species that are predators of other bacteria.");
			
				p.addAnswer(5, "epsilon",
				false,
				"No. Most species in this subgroup are pathogenic to humans or other animals.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335663;


		
		

		
			
			p.question = "Which group of bacteria is unusual in that they lack peptidoglycan in their cell walls? (<script type=\"text/javascript\">ebook(\'2704\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "spirochetes",
				false,
				"No. This group is not known for lacking peptidoglycan.");
			
				p.addAnswer(2, "epsilon proteobacteria",
				false,
				"No. This group is not known for lacking peptidoglycan.");
			
				p.addAnswer(3, "chlamydias",
				true,
				"Correct. The gram-negative walls of chlamydias are unusual in that they lack peptidoglycan. One species, <i>Chlamydia trachomatis</i>, is the most common cause of blindness in the world.");
			
				p.addAnswer(4, "gram-negative bacteria",
				false,
				"No. Although gram-negative bacteria contain less peptidoglycan than gram-positive bacteria, they usually do include some.");
			
				p.addAnswer(5, "cyanobacteria",
				false,
				"No. This group is not known for lacking peptidoglycan.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335664;


		
		

		
			
			p.question = "Which of the following is a difference between bacteria and archaea? (<script type=\"text/javascript\">ebook(\'2704\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Archaea are unicellular, and bacteria are colonial.",
				false,
				"No. Both are unicellular; some species sometimes form colonies.");
			
				p.addAnswer(2, "Many archaea are extremophiles, but no bacteria are.",
				false,
				"No. There are bacteria that live in extreme environments.");
			
				p.addAnswer(3, "They have different chemicals in their cell membranes and cell walls.",
				true,
				"Correct. Bacteria have peptidoglycan in their cell walls; archaea never have peptidoglycan.");
			
				p.addAnswer(4, "Bacteria are autotrophic, and archaea are heterotrophic.",
				false,
				"No. Only some species of bacteria are autotrophic. Some species of archaea are also autotrophic.");
			
				p.addAnswer(5, "Only bacteria have circular chromosomes.",
				false,
				"No. Both bacteria and archaea have circular chromosomes.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335665;


		
		

		
			
			p.question = "Which of the following statements about cyanobacteria is true? (<script type=\"text/javascript\">ebook(\'2704\',\'quiz\')</script>)";
			p.incorrect_any_expl = "No. This is a true statement, but there is a better answer.";
			p.incorrect_any_expl_flag = 1;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Some are single cells, whereas others live in filamentous colonies.",
				false,
				"");
			
				p.addAnswer(2, "They are the only prokaryotes that perform plantlike, oxygenic photosynthesis.",
				false,
				"");
			
				p.addAnswer(3, "Some species may carry on nitrogen fixation.",
				false,
				"");
			
				p.addAnswer(4, "It can be said that nitrogen-fixing cyanobacteria are the most self-sufficient of all organisms.",
				false,
				"");
			
				p.addAnswer(5, "all of the above",
				true,
				"Correct. Cyanobacteria are photoautotrophs that conduct plantlike photosynthesis, during which they split water, liberating oxygen. Some cyanobacteria are able to use atmospheric nitrogen directly as a source of nitrogen.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335666;


		
		

		
			
			p.question = "Prokaryotes found inhabiting the Great Salt Lake would be _____. (<script type=\"text/javascript\">ebook(\'2704\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "cyanobacteria",
				false,
				"No. Cyanobacteria would not survive under these conditions.");
			
				p.addAnswer(2, "extreme halophiles",
				true,
				"Correct. Extreme halophiles (salt-loving bacteria) live in such places as the Great Salt Lake and the Dead Sea.");
			
				p.addAnswer(3, "extremophiles",
				false,
				"No. This is true, but it is not the best response. What particular type of extremophile is this question referring to?");
			
				p.addAnswer(4, "methanogens",
				false,
				"No. Methanogens produce methane as a waste product.");
			
				p.addAnswer(5, "extreme thermophiles",
				false,
				"No. Extreme thermophiles thrive in extremely hot temperatures.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335667;


		
		

		
			
			p.question = "Which one of the following groups of prokaryotes is classified as a member of the domain Archaea? (<script type=\"text/javascript\">ebook(\'2704\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "gram-negative bacteria",
				false,
				"No. Bacteria are placed in the domain Bacteria.");
			
				p.addAnswer(2, "spirochetes",
				false,
				"No. Spirochetes are spiral-shaped bacteria.");
			
				p.addAnswer(3, "cyanobacteria",
				false,
				"No. Cyanobacteria, as their name implies, are in the domain Bacteria.");
			
				p.addAnswer(4, "methanogens",
				true,
				"Correct. The three main groups of archaea are the methanogens (methane producers), extreme halophiles (salt lovers), and extreme thermophiles (heat lovers).");
			
				p.addAnswer(5, "botulism-causing prokaryotes",
				false,
				"No. <i>Clostridium botulinum</i> is in the domain Bacteria.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335668;


		
		

		
			
			p.question = "Which clade of archaea includes most of the extreme thermophiles? (<script type=\"text/javascript\">ebook(\'2704\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Euryarchaeota",
				false,
				"No. This clade does contain some of the extreme thermophiles, but not most of them.");
			
				p.addAnswer(2, "Crenarchaeota",
				true,
				"Correct. The word root <i>cren</i> means \"spring,\" as in \"hot spring.\"");
			
				p.addAnswer(3, "Korarchaeota",
				false,
				"No. Although these archaea were first discovered in a hot spring in Yellowstone National Park, the clade does not include most of the extreme thermophiles.");
			
				p.addAnswer(4, "Nanoarchaeota",
				false,
				"No. The first known species of this clade was discovered in a hydrothermal vent attached to a much larger crenarchaeote. The clade does not include most of the extreme thermophiles.");
			
				p.addAnswer(5, "Extremophiles",
				false,
				"No. This is a term used to describe archaea that thrive in harsh environments, but this is not a clade.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335669;


		
		

		
			
			p.question = "Prokaryotes are complete indispensable to which chemical cycle? (<script type=\"text/javascript\">ebook(\'2705\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Carbon",
				false,
				"No. There are many photosynthetic organisms that are not bacteria.");
			
				p.addAnswer(2, "Nitrogen",
				true,
				"Correct. Nitrogen-fixing bacteria are the only organisms that can fix atmospheric nitrogen into compounds that other organisms can use to build cellular components.");
			
				p.addAnswer(3, "Phosphorus",
				false,
				"No. Phosphate can be absorbed by plants.");
			
				p.addAnswer(4, "Water",
				false,
				"No. The water cycle does not depend on prokaryotes.");
			
				p.addAnswer(5, "Sulfur",
				false,
				"No. The sulfur cycle does not depend on prokaryotes.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335670;


		
		

		
			
			p.question = "A type of ecological relationship called _____ involves one organism living at the expense of another organism. (<script type=\"text/javascript\">ebook(\'2705\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "mutualism",
				false,
				"No. In mutualism, both parties benefit.");
			
				p.addAnswer(2, "commensalism",
				false,
				"No. A commensal organism does not cause harm to its host.");
			
				p.addAnswer(3, "parasitism",
				true,
				"Correct. Parasitism is a type of symbiosis that involves one organism living at the expense of another.");
			
				p.addAnswer(4, "phoresis",
				false,
				"No. Phoresis is one organism catching a ride from another organism.");
			
				p.addAnswer(5, "symbiosis",
				false,
				"No. Which type of symbiosis? Not all symbiotic relationships involve harm being inflicted on one member of the relationship.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335671;


		
		

		
			
			p.question = "Which example below is a correct statement about <i>Bacteroides thetaiotaomicron</i>, a bacterium that lives in the human intestines? (<script type=\"text/javascript\">ebook(\'2705\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "The bacteria have a parasitic relationship with the human body.",
				false,
				"No. Humans also benefit from this relationship.");
			
				p.addAnswer(2, "The bacteria have a commensal relationship with the human body.",
				false,
				"No. Both the bacteria and humans benefit from this relationship.");
			
				p.addAnswer(3, "The bacteria have a mutualistic relationship with the human body.",
				true,
				"Correct. The bacteria obtain food, energy, and shelter in the human intestines. Humans benefit from the many roles these bacteria play, such as involvement in the synthesis of vitamins and the release of antibiotic chemicals that kill other bacteria.");
			
				p.addAnswer(4, "The bacteria directly create a network of intestinal blood vessels necessary to absorb food.",
				false,
				"No. Signals from these bacteria activate human genes that build the network of vessels.");
			
				p.addAnswer(5, "Many pathogenic strains of <i>B. thetaiotaomicron</i> have emerged.",
				false,
				"No. Many pathogenic strains of <i>E. coli</i> have emerged, however.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335672;


		
		

		
			
			p.question = "Ticks that live on deer and field mice are responsible for spreading the bacterium _____, which causes _____. (<script type=\"text/javascript\">ebook(\'2706\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "<i>Vibrio cholerae</i>; cholera",
				false,
				"No. <i>Vibrio cholerae</i> causes cholera and is spread when someone consumes water containing infected copepods (tiny crustaceans that are typically the hosts of <i>Vibrio cholerae</i>).");
			
				p.addAnswer(2, "<i>Borrelia burgdorferi</i>; Lyme disease\n",
				true,
				"Correct. The hallmark of infection is a large rash that appears at the location of the tick bite.");
			
				p.addAnswer(3, "<i>Salmonella</i>; food poisoning",
				false,
				"No. Ticks do not transmit <i>Salmonella</i>.");
			
				p.addAnswer(4, "<i>Helicobacter pylori</i>; stomach ulcers\n",
				false,
				"No. Ticks do not transmit <i>Helicobacter pylori</i>.");
			
				p.addAnswer(5, "<i>Clostridium botulinum</i>; botulism",
				false,
				"No. Ticks do not transmit <i>Clostridium botulinum</i>.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335673;


		
		

		
			
			p.question = "Which statement is true regarding cholera? (<script type=\"text/javascript\">ebook(\'2706\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "It is the most widespread pest-carried disease in the United States.",
				false,
				"No. This is true of Lyme disease.");
			
				p.addAnswer(2, "Its symptoms are caused by an exotoxin that stimulates intestinal cells to release chloride ions into the gut.",
				true,
				"Correct. Water follows the chloride ions from the cells through osmosis leading to diarrhea, extreme dehydration, and electrolyte imbalance.");
			
				p.addAnswer(3, "The symptoms begin when <i>Vibrio cholerae</i> die and endotoxins are released from the cell walls.",
				false,
				"No. Cholera is caused by an exotoxin released by <i>Vibrio cholerae</i>.");
			
				p.addAnswer(4, "People are apt to come down with cholera after eating improperly canned foods.",
				false,
				"No. This is true of botulism.");
			
				p.addAnswer(5, "The disease is caused by typically harmless enteric bacteria.",
				false,
				"No. <i>Vibrio cholerae</i> is not a usual resident of the human intestines.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335674;


		
		

		
			
			p.question = "Scientists hypothesize that the O157:H7 strain of <i>E. coli</i> is so different from the K-12 strain because of _____. (<script type=\"text/javascript\">ebook(\'2706\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the high number of mutations that occur in this type of bacteria",
				false,
				"No. Approximately 25% of the genes in O157:H7 have no counterpart on K-12. This cannot be explained by mutations.");
			
				p.addAnswer(2, "the immense number of plasmids associated with this group of bacteria",
				false,
				"No. Scientists compared the chromosomal genome of the two strains, not plasmids.");
			
				p.addAnswer(3, "the frequent abuse of antibiotics used to treat this bacteria",
				false,
				"No. The emergence of the pathogenic strains is a natural phenomenon brought on by evolution of the prokaryote.");
			
				p.addAnswer(4, "the higher than average rate of binary fission that occurs in this type of bacteria",
				false,
				"No. One bacterial cell splitting does not explain how new genes emerge in a bacterium.");
			
				p.addAnswer(5, "horizontal gene transfer over many years, most likely through the action of bacteriophages",
				true,
				"Correct. Many of these imported genes are associated with the pathogenic bacterium\'s invasion of the host.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335675;


		
		

		
			
			p.question = "Which statement about prokaryotes is true? (<script type=\"text/javascript\">ebook(\'2706\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Prokaryotes have no industrial uses.",
				false,
				"No. Prokaryotes are used in all sorts of industrial applications from sewage treatment to extraction of gold ore.");
			
				p.addAnswer(2, "The vast majority of prokaryotes are pathogenic.",
				false,
				"No. Only 1 or 2% of known bacteria are pathogenic.");
			
				p.addAnswer(3, "Prokaryotes are widely used for bioremediation.",
				true,
				"Correct. Prokaryotes have been used in sewage treatment for decades, and they are being used to clean up oil spills and radioactive waste.");
			
				p.addAnswer(4, "Prokaryotes are not useful in genetic engineering because their DNA is so different from that of eukaryotes.",
				false,
				"No. Bacteria are used in many bio engineering applications because their DNA is structurally the same as eukaryotes, and they are easier to work with.");
			
				p.addAnswer(5, "It is important to try and rid your body of all prokaryotes.",
				false,
				"No. First of all it would be nearly impossible to rid your body of all prokaryotes. In addition many prokaryotes living in and on humans have mutualistic relationships with their hosts.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

