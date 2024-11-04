

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "25: The History of Life on Earth > Practice Test";
	ak.quiz_loc_with_commas = "25: The History of Life on Earth, Practice Test";
	ak.quiz_title = "Practice Test";

	
		ak.help_url = "../../placeholders/help_placeholder.html";
	
	ak.essay_total = 0;
	ak.pair_problem_total = 0;
	ak.pair_total = 0;
	ak.problem_total = 30;
	ak.non_essay_total = 30;
	ak.scored_item_total = 30;

	
	
	


	
	ak.copyright_date = "2008";
	ak.brandname = "Pearson Benjamin Cummings";
	ak.legal = "../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.pearsoned.com%2Flegal%2Findex.htm";


	// Loop over all problems
	
	
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335554;


		
		

		
			
			p.question = "Why is the four-stage hypothesis for the abiotic origin of life useful? (<script type=\"text/javascript\">ebook(\'2501\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "It can be proven.",
				false,
				"No. Very little can be proven in science, and abiotic synthesis will be difficult to prove without a time machine.");
			
				p.addAnswer(2, "It leads to predictions that can be tested.",
				true,
				"Correct. Theories and hypotheses in science are only useful if they produce testable predictions.");
			
				p.addAnswer(3, "It is true.",
				false,
				"No. Science deals with evidence, data, and support for hypotheses, not truth.");
			
				p.addAnswer(4, "It provides a reason for the origin of living things.",
				false,
				"No. Science is concerned with testable hypotheses and reproducible experiments. A reason for the existence of living things is beyond the scope of science.");
			
				p.addAnswer(5, "It proves that RNA was the first genetic molecule.",
				false,
				"No. While there is some interesting evidence to support that assertion, the hypothesis is not proof.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335555;


		
		

		
			
			p.question = "The early atmosphere on Earth is thought to have lacked which one of the following gases? (<script type=\"text/javascript\">ebook(\'2501\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "methane",
				false,
				"No. Methane is likely to have been abundant in the primitive atmosphere.");
			
				p.addAnswer(2, "carbon dioxide",
				false,
				"No. Carbon dioxide is likely to have been abundant in the primitive atmosphere.");
			
				p.addAnswer(3, "oxygen",
				true,
				"Correct. The atmosphere of primitive Earth was very different from today\'s atmosphere. For example, the primitive atmosphere lacked molecular oxygen.");
			
				p.addAnswer(4, "water",
				false,
				"No. Water vapor is likely to have been abundant in the primitive atmosphere.");
			
				p.addAnswer(5, "nitrogen",
				false,
				"No. Nitrogen is likely to have been abundant in the primitive atmosphere.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335556;


		
		

		
			
			p.question = "Currently scientists think the early atmosphere probably consisted of _____. (<script type=\"text/javascript\">ebook(\'2501\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "N<sub>2</sub>, H<sub>2</sub>O, CO<sub>2</sub>, NH<sub>3</sub>, CH<sub>4</sub>, H<sub>2</sub>, and H<sub>2</sub>S",
				true,
				"Correct. These are the gases currently thought to have made up the early atmosphere, which may not have been either reducing or oxidizing.");
			
				p.addAnswer(2, "O<sub>2</sub>, SO<sub>2</sub>, and H<sub>2</sub>O",
				false,
				"No. Most scientists are in agreement that there was little or no free O<sub>2</sub> in the early atmosphere.");
			
				p.addAnswer(3, "N<sub>2</sub>, H<sub>2</sub>O, CO<sub>2</sub>, NH<sub>3</sub>, CH<sub>4</sub>, and O<sub>2</sub>",
				false,
				"No. Most scientists are in agreement that there was little or no free O<sub>2</sub> in the early atmosphere.");
			
				p.addAnswer(4, "H<sub>2</sub>O, CH<sub>4</sub>, H<sub>2</sub>, and NH<sub>3</sub>",
				false,
				"No. These are the gases uses by Miller and Urey in 1953, but most scientists agree that the early atmosphere was not so reducing.");
			
				p.addAnswer(5, "H<sub>2</sub>O, CH<sub>4</sub>, H<sub>2</sub>, NH<sub>3</sub>, and O<sub>2</sub>",
				false,
				"No. Most scientists are in agreement that there was little or no free O<sub>2</sub> in the early atmosphere.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335557;


		
		

		
			
			p.question = "The Miller and Urey abiotic synthesis experiment (and subsequent, similar experiments) showed that _____. (<script type=\"text/javascript\">ebook(\'2501\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "life can be created in a test tube",
				false,
				"No. Miller did not create life.");
			
				p.addAnswer(2, "long chains of DNA can form under abiotic conditions",
				false,
				"No. DNA did not form during Miller\'s experiment.");
			
				p.addAnswer(3, "simple organic molecules can form spontaneously under conditions like those thought to prevail early in Earth\'s history",
				true,
				"Correct. In 1953 Stanley Miller created, in the laboratory, conditions thought to be comparable to those of early Earth, with water vapor, hydrogen, methane, and ammonia. The Miller apparatus produced a variety of amino acids and other organic compounds found in living organisms today.");
			
				p.addAnswer(4, "the earliest life forms introduced large amounts of oxygen into the atmosphere",
				false,
				"No. The primitive atmosphere did not contain large amounts of O<sub>2</sub>.");
			
				p.addAnswer(5, "the \"concentration gap\" probably prevented simple organic molecules from polymerizing",
				false,
				"No. The Miller apparatus produced a variety of amino acids and other organic compounds found in living organisms today.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335558;


		
		

		
			
			p.question = "The early atmosphere may not have been as reducing as originally postulated by Haldane, Oparin, Miller, and Urey. In light of current thinking about the composition of the early atmosphere, what is regarded as a likely place for the abiotic synthesis of organic molecules to have occurred? (<script type=\"text/javascript\">ebook(\'2501\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "dust particles in the atmosphere",
				false,
				"No. Without a reducing environment, organic molecules may not have been able to persist for very long before being broken down.");
			
				p.addAnswer(2, "banded iron formations",
				false,
				"No. Banded iron formations show evidence of strong oxidation. A strongly oxidizing environment would not have favored the abiotic synthesis of organic molecules.");
			
				p.addAnswer(3, "the surface of ancient oceans",
				false,
				"No. Without a reducing environment, organic molecules may not have been able to persist for very long before being broken down.");
			
				p.addAnswer(4, "deep sea hydrothermal vents",
				true,
				"Correct. Deep sea hydrothermal vents may be locally reducing. They are also associated with inorganic compounds such as sulfide and iron compounds that are important in ATP synthesis.");
			
				p.addAnswer(5, "stromatolite mounds",
				false,
				"No. Stromatolites are formed by living organisms. There is nothing abiotic about them.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335559;


		
		

		
			
			p.question = "Protobionts, such as liposomes, display which of the following rudimentary qualities necessary for life? (<script type=\"text/javascript\">ebook(\'2501\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the ability to accurately replicate and build macromolecules",
				false,
				"No. Protobionts can reproduce in some cases, but they cannot build macromolecules.");
			
				p.addAnswer(2, "the ability to perform simple reproduction and metabolism",
				true,
				"Correct. Protobionts are capable of dividing and performing simple metabolic reactions.");
			
				p.addAnswer(3, "the ability to synthesize organic molecules from inorganic molecules",
				false,
				"No. Protobionts have not been shown to synthesize organic molecules.");
			
				p.addAnswer(4, "the ability to maintain an internal chemical environment different from their surroundings and to reproduce sexually",
				false,
				"No. Although some protobionts can maintain a distinct internal chemical environment, they do not reproduce sexually.");
			
				p.addAnswer(5, "the ability to perform simple metabolism and to assemble nucleic acids from nucleotides",
				false,
				"No. Protobionts are not able to assemble nucleic acids.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335560;


		
		

		
			
			p.question = "Cech and Altman suggested that the first self-replicating molecules were _____. (<script type=\"text/javascript\">ebook(\'2501\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "DNA",
				false,
				"No. They proposed that another molecule, other than DNA, was the first self-replicating molecule.");
			
				p.addAnswer(2, "phospholipids",
				false,
				"No. Phospholipids are not self-replicating.");
			
				p.addAnswer(3, "viruses",
				false,
				"No. Viruses are not self-replicating.");
			
				p.addAnswer(4, "true proteins",
				false,
				"No. Proteins are not self-replicating.");
			
				p.addAnswer(5, "RNA",
				true,
				"Correct. Cech and his coworkers discovered in <i>Tetrahymena thermophila</i> that RNA molecules are important catalysts in modern cells. Some RNA is autocatalytic, and in the prebiotic world, long before there were enzymes or DNA, RNA molecules may have been fully capable of self-replication.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335561;


		
		

		
			
			p.question = "A radioactive isotope has a half-life of 1.2 billion years. As measured by the presence of the isotope and its stable decay product, a rock originally contained 10 grams of the radioactive isotope, and now contains 1.25 grams. Approximately how many years old is the rock? (<script type=\"text/javascript\">ebook(\'2502\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "10,000 years",
				false,
				"No. Three half-lives have elapsed since the sample was alive (10 grams to 5 grams, 5 grams to 2.5 grams, and 2.5 grams to 1.25 grams). Because half the isotope would be expected to decay by the end of each half-life, the sample is 3 x 1.2 billion years old.");
			
				p.addAnswer(2, "12 billion years",
				false,
				"No. Three half-lives have elapsed since the sample was alive (10 grams to 5 grams, 5 grams to 2.5 grams, and 2.5 grams to 1.25 grams). Because half the isotope would be expected to decay by the end of each half-life, the sample is 3 x 1.2 billion years old.");
			
				p.addAnswer(3, "3.6 billion years",
				true,
				"Correct. Three half-lives have elapsed since the sample was alive (10 grams to 5 grams, 5 grams to 2.5 grams, and 2.5 grams to 1.25 grams). Because half the isotope would be expected to decay by the end of each half-life, the sample is 3 x 1.2 billion years old.");
			
				p.addAnswer(4, "0.3 billion years",
				false,
				"No. Three half-lives have elapsed since the sample was alive (10 grams to 5 grams, 5 grams to 2.5 grams, and 2.5 grams to 1.25 grams). Because half the isotope would be expected to decay by the end of each half-life, the sample is 3 x 1.2 billion years old.");
			
				p.addAnswer(5, "1,000 years",
				false,
				"No. Three half-lives have elapsed since the sample was alive (10 grams to 5 grams, 5 grams to 2.5 grams, and 2.5 grams to 1.25 grams). Because half the isotope would be expected to decay by the end of each half-life, the sample is 3 x 1.2 billion years old.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335562;


		
		

		
			
			p.question = "Fossils that can be used to establish relative dates are most likely to be found in _____. (<script type=\"text/javascript\">ebook(\'2502\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the continental shelves",
				false,
				"No. Fossils usually are found in sedimentary rock. Sedimentary rock is formed from layers of minerals that settle out of water.");
			
				p.addAnswer(2, "glacial till (i.e., rubble)",
				false,
				"No. Glacial rubble may contain fossils, but is jumbled and no longer presents a usable sequence from deepest (oldest) to most shallow (youngest).");
			
				p.addAnswer(3, "sedimentary rock",
				true,
				"Correct. Sedimentary rock is formed from layers of minerals that settle out of water. When aquatic life-forms and terrestrial organisms swept into the seas and swamps die, they settle along with the sediments.");
			
				p.addAnswer(4, "igneous rock",
				false,
				"No. This is rock that has formed from molten lava.");
			
				p.addAnswer(5, "volcanic archipelagos, such as the Gal&#225;pagos and Hawaiian Islands",
				false,
				"No. Fossils usually are found in sedimentary rock. Sedimentary rock is formed from layers of minerals that settle out of water or air. Volcanic archipelagos consist primarily of volcanic rock.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335563;


		
		

		
			
			p.question = "You are watching a movie in which one of the characters excitedly claims to have found human remains dated at 10 million years old. The date was obtained by carbon-14 dating. What is your reaction? (<script type=\"text/javascript\">ebook(\'2502\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "This can\'t possibly be true because humans weren\'t around 10 million years ago.",
				false,
				"No. According to data available now, humans weren\'t around 10 million years ago, but preconceived notions are not a good way to judge scientific data. The problem with this claim is that carbon-14 dating is only useful to around 75,000 years.");
			
				p.addAnswer(2, "This would be a surprising finding because so far there is no evidence that humans existed that long ago.",
				false,
				"No. It would be a surprising finding if it could be taken seriously. Remember that carbon-14 dating is only accurate to around 75,000 years ago, so claims of carbon-14 dates in the 10-million-year range are clearly bogus.");
			
				p.addAnswer(3, "This is a perfectly reasonable finding.",
				false,
				"No. Carbon-14 dating is only accurate to around 75,000 years ago, so claims of carbon-14 dates in the 10-million-year range are clearly bogus.");
			
				p.addAnswer(4, "This can\'t possibly be true because carbon-14 dating can only be used back to about 750,000 years.",
				false,
				"No. Carbon-14 dating can only be used back to about 75,000 years.");
			
				p.addAnswer(5, "This can\'t possibly be true because carbon-14 dating can only be used back to about 75,000 years.",
				true,
				"Correct. Because of carbon-14\'s short half-life, it decays relatively rapidly. Items older than 75,000 years have so little carbon-14 left in them that it can\'t be measured accurately enough to get a date. But that won\'t stop movie and TV producers from trying to sound \"scientific\" by putting all sorts of ludicrous dates into the script.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335564;


		
		

		
			
			p.question = "Single-celled prokaryotes had the Earth to themselves for approximately _____. (<script type=\"text/javascript\">ebook(\'2503\',\'quiz\')</script>)";
			p.incorrect_any_expl = "No. Prokaryotes, which are all single-celled, were the only organisms on earth from sometime before 3.5 billion years ago until around 2 billion years ago. That\'s about 1.5 billion years.";
			p.incorrect_any_expl_flag = 1;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "1.5 million years",
				false,
				"");
			
				p.addAnswer(2, "3 billion years",
				false,
				"");
			
				p.addAnswer(3, "1.5 billion years",
				true,
				"Correct. Prokaryotes, which are all single-celled, were the only organisms on earth from sometime before 3.5 billion years ago until around 2 billion years ago. That\'s about 1.5 billion years.");
			
				p.addAnswer(4, "150,000 years",
				false,
				"");
			
				p.addAnswer(5, "3 million years",
				false,
				"");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335565;


		
		

		
			
			p.question = "The correct order of the geologic eras, from most ancient to most recent, is _____. (<script type=\"text/javascript\">ebook(\'2503\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Paleozoic, Cenozoic, Mesozoic",
				false,
				"No. The Cenozoic is the current era.");
			
				p.addAnswer(2, "Proterozoic, Mesozoic, Cenozoic, Paleozoic",
				false,
				"No. The Cenozoic is the current era.");
			
				p.addAnswer(3, "Paleozoic, Mesozoic, Cenozoic",
				true,
				"Correct. The Paleozoic was followed by the Mesozoic (the age of reptiles). The current era is the Cenozoic.");
			
				p.addAnswer(4, "Paleozoic, Mesozoic, Cenozoic, Proterozoic",
				false,
				"No. The Cenozoic is the current era.");
			
				p.addAnswer(5, "Cenozoic, Mesozoic, Paleozoic",
				false,
				"No. The Mesozoic and Paleozoic precede the Cenozoic.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335566;


		
		

		
			
			p.question = "Ancient cyanobacteria were very important in the history of life because they _____. (<script type=\"text/javascript\">ebook(\'2503\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "were probably the first organisms to live on Earth",
				false,
				"No. Simple heterotrophs existed prior to the ancient cyanobacteria.");
			
				p.addAnswer(2, "produced atmospheric oxygen",
				true,
				"Correct. This caused many other life forms to perish and provided a selective pressure that led to the evolution of new life forms.");
			
				p.addAnswer(3, "are the oldest known archaea",
				false,
				"No. They are not archaea.");
			
				p.addAnswer(4, "were the first truly multicellular organisms",
				false,
				"No. They were not truly multicellular.");
			
				p.addAnswer(5, "extracted heat from the atmosphere, cooling Earth",
				false,
				"No. They did not do this.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335567;


		
		

		
			
			p.question = "What prokaryotic adaptation occurred during the oxygen revolution and opened up the possibility for energy-demanding multicellular life-forms? (<script type=\"text/javascript\">ebook(\'2503\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "electron transport systems",
				false,
				"No. Types of electron transport systems existed before the oxygen revolution. The answer to this question is a specific electron transport system.");
			
				p.addAnswer(2, "anaerobic fermentation",
				false,
				"No. The key to this question is the presence of oxygen. Oxygen is not required for anaerobic fermentation.");
			
				p.addAnswer(3, "cellular respiration",
				true,
				"Correct. Some bacteria adapted electron transport to aerobic respiration, using oxygen as an electron acceptor. This type of electron transport, which could produce more ATP than earlier anaerobic mechanisms, opened up the possibility of energy-demanding multicellular life.");
			
				p.addAnswer(4, "photosynthesis",
				false,
				"No. Forms of photosynthesis existed before the oxygen revolution. In fact, the actions of photosynthetic prokaryotes were the cause of the oxygen revolution.");
			
				p.addAnswer(5, "emergence of obligate anaerobes",
				false,
				"No. The key to this question is the presence of oxygen. Oxygen is not used by obligate anaerobes, and can actually destroy the cells of many obligate anaerobes.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335568;


		
		

		
			
			p.question = "What evidence supports the hypothesis that mitochondria and plastids evolved from prokaryotic endosymbionts? (<script type=\"text/javascript\">ebook(\'2503\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "They have a single circular chromosome similar to bacterial chromosomes.",
				false,
				"No. This statement is true, but there is a better answer.");
			
				p.addAnswer(2, "They have flagella similar to bacterial flagella.",
				false,
				"No. While both prokaryotes and eukaryotes may have flagella, their structure and mode of operation are quite different.");
			
				p.addAnswer(3, "Their ribosomes are more like prokaryotic ribosomes than eukaryotic ribosomes.",
				false,
				"No. This statement is true, but there is a better answer.");
			
				p.addAnswer(4, "They divide by a process similar to meiosis.",
				false,
				"No. They actually divide by a process similar to bacterial fission.");
			
				p.addAnswer(5, "both a and c",
				true,
				"Correct. Among many supporting pieces of evidence are the facts that mitochondria and plastids have chromosomes and ribosomes that are very similar to those found in prokaryotes.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335569;


		
		

		
			
			p.question = "Prior to the Cambrian explosion, most animals were small and soft-bodied. What development appears to have spurred adaptations such as sharp spines, claws, and body armor (shells)? (<script type=\"text/javascript\">ebook(\'2503\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "increase in oxygen concentration in the atmosphere",
				false,
				"No. Although there is some evidence that the higher oxygen concentration made possible the secretion of calcified body parts, the advent of predation made those calcified body parts extremely useful.");
			
				p.addAnswer(2, "aerobic respiration",
				false,
				"No. Aerobic respiration may have made it possible for animals to grow bigger, but it did not directly select for spines, claws, and body armor.");
			
				p.addAnswer(3, "radial symmetry",
				false,
				"No. Radially symmetric organisms were abundant before calcified body parts evolved.");
			
				p.addAnswer(4, "predation",
				true,
				"Correct. As organisms began hunting and eating each other, protective devices such as spines and body armor gave prey an enormous advantage while claws gave predators an advantage.");
			
				p.addAnswer(5, "filter feeding",
				false,
				"No. Filter feeders were abundant before the appearance of calcified body parts.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335570;


		
		

		
			
			p.question = "What were the two major \"problems\" that had to be solved before plants, animals, and fungi could move into terrestrial habitats? (<script type=\"text/javascript\">ebook(\'2503\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "reproduction and prevention of dehydration",
				true,
				"Correct. Life originally evolved in water and depends on aqueous solutions for many processes. Gametes generally have to swim to each other for fertilization. Until adaptations to address these two issues evolved, vast amounts of terrestrial habitat were unusable.");
			
				p.addAnswer(2, "support and absorption",
				false,
				"No. While support for body parts without the buoyancy of water posed a problem, organisms were quite capable of absorbing nutrients.");
			
				p.addAnswer(3, "reproduction and locomotion",
				false,
				"No. The major problems that had to be solved were reproduction without water and prevention of dehydration.");
			
				p.addAnswer(4, "prevention of dehydration and locomotion",
				false,
				"No. The major problems that had to be solved were reproduction without water and prevention of dehydration.");
			
				p.addAnswer(5, "cell division and absorption of nutrients",
				false,
				"No. The major problems that had to be solved were reproduction without water and prevention of dehydration.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335571;


		
		

		
			
			p.question = "What does the snowball Earth hypothesis propose? (<script type=\"text/javascript\">ebook(\'2503\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Once the first multicellular eukaryotes appeared, their sizes and populations grew exponentially, like a snowball rolling down a hill.",
				false,
				"No. Some believe that the evolution of multicellular eukaryotes was limited by a 180-million-year-long ice age.");
			
				p.addAnswer(2, "Multicellular eukaryotes had an advantage over single-celled organisms in extremely cold conditions.",
				false,
				"No. Some believe that the evolution of multicellular eukaryotes was limited by a 180-million-year-long ice age.");
			
				p.addAnswer(3, "The first multicellular eukaryotes formed colonies on the surface of glaciers.",
				false,
				"No. Some believe that the evolution of multicellular eukaryotes was limited by a 180-million-year-long ice age.");
			
				p.addAnswer(4, "Multicellular organisms evolved when conditions were so cold that plasma membranes of unicellular organisms fused.",
				false,
				"No. Some believe that the evolution of multicellular eukaryotes was limited by a 180-million-year-long ice age.");
			
				p.addAnswer(5, "Larger multicellular eukaryotes are scarce in the fossil record until the late Proterozoic because an ice age limited life to deep-sea vents and hot springs.",
				true,
				"Correct. Geologic evidence indicates that a severe ice age lasted from 750 to 570 million years ago. During this period, glaciers covered the planet\'s landmasses from pole to pole, and the seas would have been iced over.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335572;


		
		

		
			
			p.question = "Plants colonized land in the company of _____; their symbiotic relationships still exist today. (<script type=\"text/javascript\">ebook(\'2503\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "fungi",
				true,
				"Correct. Even today, the roots of most plants are associated with fungi that aid in the absorption of water and minerals from the soil.");
			
				p.addAnswer(2, "animals",
				false,
				"No. The question is referring to fungi. Even today, the roots of most plants are associated with fungi that aid in the absorption of water and minerals from the soil.");
			
				p.addAnswer(3, "insects",
				false,
				"No. The question is referring to fungi. Even today, the roots of most plants are associated with fungi that aid in the absorption of water and minerals from the soil.");
			
				p.addAnswer(4, "cyanobacteria",
				false,
				"No. The question is referring to fungi. Even today, the roots of most plants are associated with fungi that aid in the absorption of water and minerals from the soil.");
			
				p.addAnswer(5, "algae",
				false,
				"No. The question is referring to fungi. Even today, the roots of most plants are associated with fungi that aid in the absorption of water and minerals from the soil.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335573;


		
		

		
			
			p.question = "What evidence most strongly suggests that an impact by an asteroid or meteorite may have caused the extinction of the dinosaurs? (<script type=\"text/javascript\">ebook(\'2504\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Fossils show that dinosaurs suffered from cold and starvation.",
				false,
				"No. While this may have been the proximate cause of Cretaceous extinctions, cold and starvation could have causes other than an asteroid or meteorite impact.");
			
				p.addAnswer(2, "Sedimentary rocks contain a layer of iridium, a mineral uncommon on Earth.",
				true,
				"Correct. A layer of iridium, probably from the collision of an asteroid with Earth, is found at the Mesozoic-Cenozoic boundary.");
			
				p.addAnswer(3, "There have been several near misses in recent years.",
				false,
				"No. A layer of iridium, probably from the collision of an asteroid with Earth, is found at the Mesozoic-Cenozoic boundary. Iridium is uncommon on Earth.");
			
				p.addAnswer(4, "The dinosaurs disappeared rather abruptly, virtually overnight.",
				false,
				"No. This is a misconception.");
			
				p.addAnswer(5, "Fossils indicate that most dinosaurs were looking up when they died.",
				false,
				"No. Since most fell down either before or after they died, this cannot be correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335574;


		
		

		
			
			p.question = "Which one of the following best describes how the breakup of Pangaea affected evolution? (<script type=\"text/javascript\">ebook(\'2504\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Mammals had an opportunity to become dominant.",
				false,
				"No. Pangaea broke up during the Mesozoic era&mdash;the age of reptiles. Mammalian dominance came later.");
			
				p.addAnswer(2, "Shallow marine habitat became scarcer.",
				false,
				"No. This occurred when Pangaea formed.");
			
				p.addAnswer(3, "Extensive glaciation caused mass extinctions.",
				false,
				"No. During the Mesozoic era Pangaea began to break up, causing geographic isolation of colossal proportions. As the continents drifted apart, each became a separate evolutionary arena, and the fauna and flora of the different biogeographic realms diverged.");
			
				p.addAnswer(4, "The geographic isolation of populations that had previously coexisted led to speciation.",
				true,
				"Correct. During the Mesozoic era Pangaea began to break up, causing geographic isolation of colossal proportions. As the continents drifted apart, each became a separate evolutionary arena, and the fauna and flora of the different biogeographic realms diverged.");
			
				p.addAnswer(5, "Sympatric speciation became the primary means by which new species were formed.",
				false,
				"No. Sympatric speciation occurs in a situation in which there is geographic overlap.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335575;


		
		

		
			
			p.question = "The fauna and flora of Australia are very different from those of the rest of the world. Why might this be true? (<script type=\"text/javascript\">ebook(\'2504\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "They have become different by convergent evolution.",
				false,
				"No. Convergent evolution accounts for the similarities we see, not the differences.");
			
				p.addAnswer(2, "The climate of Australia is unlike that of any other place in the world.",
				false,
				"No. Australia\'s climatic conditions are not exclusive to Australia.");
			
				p.addAnswer(3, "Australia was never in close proximity to the other continents.",
				false,
				"No. What is now Australia was once part of Pangaea, and marsupials reached Australia from what is now North America via what are now South America and Antarctica.");
			
				p.addAnswer(4, "Life in Australia was wiped out by ancient volcanic eruptions.",
				false,
				"No. Recolonization would result in similarities, not differences.");
			
				p.addAnswer(5, "Australia has been isolated for about 50 million years.",
				true,
				"Correct. Such a long period of isolation has allowed for the evolution of unique forms of life.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335576;


		
		

		
			
			p.question = "Lake Malawi, in the African Rift Valley, is home to more than a hundred species of cichlid fishes, each with slightly different diets and habits. All these species probably evolved from a common ancestor, making them an example of _____. (<script type=\"text/javascript\">ebook(\'2504\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "sympatric speciation",
				false,
				"No. It is unlikely that so many species of fish evolved by sympatric speciation.");
			
				p.addAnswer(2, "hybrid breakdown",
				false,
				"No. There is no evidence that the various fishes are infertile or feeble.");
			
				p.addAnswer(3, "adaptive radiation",
				true,
				"Correct. The fishes probably evolved in response to different opportunities and adversities.");
			
				p.addAnswer(4, "convergence",
				false,
				"No. Convergence occurs when unrelated organisms come to resemble each other by adapting under the same selective pressures. What has occurred among the cichlids of Lake Malawai is, rather, divergence.");
			
				p.addAnswer(5, "hybrid sterility",
				false,
				"No. There is no evidence that the various fishes are infertile.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335577;


		
		

		
			
			p.question = "Adaptive radiations are often seen after ______. (<script type=\"text/javascript\">ebook(\'2504\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "sexual selection takes place",
				false,
				"No. Sexual selection is occurring all the time.");
			
				p.addAnswer(2, "major new evolutionary adaptations, such as flight, occur",
				false,
				"No. This may be a factor in an adaptive radiation, but there is a better answer.");
			
				p.addAnswer(3, "mass extinctions",
				false,
				"No. Adaptive radiations do usually occur after mass extinctions, but there is a better answer.");
			
				p.addAnswer(4, "bacteria and plants both have flagellated gametes",
				false,
				"No. Bacteria do not form gametes. Most reproduce by binary fission.");
			
				p.addAnswer(5, "both b and c",
				true,
				"Correct. Adaptive radiations commonly occur after mass extinctions or after a major new evolutionary innovation becomes established in a population.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335578;


		
		

		
			
			p.question = "Although they originated around 180 million years ago, mammals underwent an adaptive radiation starting approximately 65 million years ago. Why? (<script type=\"text/javascript\">ebook(\'2504\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Mammals were not well-adapted to the climate that existed before about 65 million years ago.",
				false,
				"No. There is no evidence that mammals were poorly adapted to the climate (which changed a great deal) between 180 million and 65 million years ago.");
			
				p.addAnswer(2, "Mammals were mostly nocturnal until 65 million years ago.",
				false,
				"No. Many mammals that existed before 65 million years ago do appear to have been nocturnal, but that is not sufficient to explain their relative unimportance.");
			
				p.addAnswer(3, "Between 180 and 65 million years ago, mammals were out-competed by the well-established dinosaurs.",
				true,
				"Correct. It is likely that mammals could not compete with dinosaurs for resources. Once the majority of the dinosaurs were wiped out around 65 million years ago, many ecological niches became available.");
			
				p.addAnswer(4, "Fur evolved in mammals around 65 million years ago, enabling them to withstand colder temperatures.",
				false,
				"No. Fur had already evolved in mammals (and possibly in dinosaurs) before that time.");
			
				p.addAnswer(5, "all of the above",
				false,
				"No. Only one of the answers is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335579;


		
		

		
			
			p.question = "How does continental drift affect speciation? (<script type=\"text/javascript\">ebook(\'2504\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Climate change associated with mountain building and plates moving to different latitudes creates new niches for some organisms and wipes out other organisms.",
				false,
				"No. This is one effect of continental drift, but there is a better answer.");
			
				p.addAnswer(2, "The breaking apart of landmasses or the change in configuration of ocean basins promotes allopatric speciation.",
				false,
				"No. This is one effect of continental drift, but there is a better answer.");
			
				p.addAnswer(3, "The closing of an ocean basin represents an enormous loss of habitat that can wipe out some species.",
				false,
				"No. This is one effect of continental drift, but there is a better answer.");
			
				p.addAnswer(4, "The joining of previously separated habitats may produce a hybrid zone or establish competition among previously isolated populations.",
				false,
				"No. This is one effect of continental drift, but there is a better answer.");
			
				p.addAnswer(5, "all of the above",
				true,
				"Correct. These are all ways in which continental drift can affect speciation.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335580;


		
		

		
			
			p.question = "Mutations in what class of genes have probably been responsible for many of the changes leading to the great diversity of life existing today? (<script type=\"text/javascript\">ebook(\'2505\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "developmental genes",
				true,
				"Correct. Small changes in developmental genes such as <i>Hox</i> genes can produce large morphologic changes.");
			
				p.addAnswer(2, "DNA repair genes",
				false,
				"No. DNA repair genes have not changed greatly since before the evolution of multicellularity. Changes in developmental genes, however, have led to many different body plans in multicellular organisms.");
			
				p.addAnswer(3, "genes that regulate mitosis",
				false,
				"No. Genes that regulate mitosis have not changed greatly since before the evolution of multicellularity. Changes in developmental genes, however, have led to many different body plans in multicellular organisms.");
			
				p.addAnswer(4, "genes for digestive enzymes",
				false,
				"No. Although new digestive enzymes have allowed organisms to exploit new energy sources, changes in developmental genes have led to many different body plans in multicellular organisms.");
			
				p.addAnswer(5, "genes for aerobic respiration",
				false,
				"No. Genes that regulate aerobic respiration have not changed greatly since before the evolution of multicellularity. Changes in developmental genes, however, have led to many different body plans in multicellular organisms");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335581;


		
		

		
			
			p.question = "The products of <i>Hox</i> genes _____. (<script type=\"text/javascript\">ebook(\'2505\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "provide positional information in animal embryos",
				true,
				"Correct. The products of these genes prompt cells to develop into structures appropriate for a particular location.");
			
				p.addAnswer(2, "may cause polyploidy in some plants",
				false,
				"No. The products of these genes prompt cells in animal embryos to develop into structures appropriate for a particular location.");
			
				p.addAnswer(3, "control the rate of timing and developmental events",
				false,
				"No. The products of these genes prompt cells in animal embryos to develop into structures appropriate for a particular location.");
			
				p.addAnswer(4, "can cause paedomorphosis",
				false,
				"No. The products of these genes prompt cells in animal embryos to develop into structures appropriate for a particular location.");
			
				p.addAnswer(5, "control allometric growth",
				false,
				"No. The products of these genes prompt cells in animal embryos to develop into structures appropriate for a particular location.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335582;


		
		

		
			
			p.question = "If the wings of extant flying birds originally arose as thermoregulatory devices in ancestral reptiles, then the bird wings could be accurately described as _____. (<script type=\"text/javascript\">ebook(\'2506\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "vestigial structures",
				false,
				"No. Wing structures cannot be considered vestigial as long as they function in flight.");
			
				p.addAnswer(2, "analogous organs",
				false,
				"No. Analagous structures are structures that have the same function. Thermoregulation and flight are not the same function.");
			
				p.addAnswer(3, "degenerate structures",
				false,
				"No. In fact, wings are very complicated structures and not at all degenerate.");
			
				p.addAnswer(4, "exaptations",
				true,
				"Correct. An exaptation is a structure that had one function originally, and later evolved other, or different, functions.");
			
				p.addAnswer(5, "anticipatory structures",
				false,
				"No. Evolution cannot anticipate what an organism will need in the future.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335583;


		
		

		
			
			p.question = "In the species selection model, _______ is to macroevolution what _______ is to microevolution. (<script type=\"text/javascript\">ebook(\'2506\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "exaptation; adaptation.",
				false,
				"No. Exaptation and adaptation both refer to the generation of novel attributes that increase an organism\'s fitness.");
			
				p.addAnswer(2, "differential speciation success; differential reproductive success",
				true,
				"Correct. If a species gives rise to more species, it is passing on more of its genome in a manner analogous to an organism passing on it genes to the next generation.");
			
				p.addAnswer(3, "genotype; phenotype",
				false,
				"No. Phenotype is simply the physical expression of genotype.");
			
				p.addAnswer(4, "disruptive selection; balancing selection.",
				false,
				"No. These are both types of natural selection which operate at a population level.");
			
				p.addAnswer(5, "allopatric speciation; sympatric speciation.",
				false,
				"No. These are both types of speciation that operate at a population level.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

