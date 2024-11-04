

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "1: Introduction: Themes in the Study of Life > Practice Test";
	ak.quiz_loc_with_commas = "1: Introduction: Themes in the Study of Life, Practice Test";
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
		
		p.id = 334021;


		
		

		
			
			p.question = "Which of the following is an attribute of living things? (<script type=\"text/javascript\">ebook(\'01OV\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "They must be carbon-based.",
				false,
				"No. Although organisms on this planet are carbon-based, there is no reason that entities displaying the qualities of living things couldn\'t be based on some other element.");
			
				p.addAnswer(2, "They must be able to breathe oxygen.",
				false,
				"No. Oxygen levels on Earth didn\'t reach significant levels until around 500 million years ago. Ancient organisms were largely anaerobic, and even today there are many anaerobic organisms.");
			
				p.addAnswer(3, "They must be able to evolve and adapt.",
				true,
				"Correct. One of the attributes that we associate with living things is the ability to adapt by evolving.");
			
				p.addAnswer(4, "They must be able to reproduce sexually.",
				false,
				"No. Many organisms reproduce asexually.");
			
				p.addAnswer(5, "all of the above",
				false,
				"No. Only one of the answers is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334022;


		
		

		
			
			p.question = "What is the appropriate term for an interacting group of individuals of a single type? (<script type=\"text/javascript\">ebook(\'0101\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "species",
				false,
				"No. Members of the same species may be geographically isolated and unable to interact with one another.");
			
				p.addAnswer(2, "population",
				true,
				"Correct. Only the organisms of a given species that have the opportunity to interact with one another are considered to be within the same population.");
			
				p.addAnswer(3, "ecosystem",
				false,
				"No. The entire array of different species within a given ecosystem comprises a community.");
			
				p.addAnswer(4, "community",
				false,
				"No. All of the different populations within a given ecosystem compose a community.");
			
				p.addAnswer(5, "habitat",
				false,
				"No. The habitat is the ecological niche inhabited by the members of a population.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334023;


		
		

		
			
			p.question = "Which series of terms is in the sequence of biological organization from the simplest to the most complex? (<script type=\"text/javascript\">ebook(\'0101\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "community, population, ecosystem, habitat, biosphere",
				false,
				"No. The population lives in a habitat, and the populations of an ecosystem are the community. The biosphere includes all the environments on Earth that are inhabited by life. Thus, the correct order should be population, community, ecosystem, biosphere.");
			
				p.addAnswer(2, "tissue, organ system, organ, cell, organism",
				false,
				"No. The correct sequence would be cell, tissue, organ, organ system, organism.");
			
				p.addAnswer(3, "organism, ecosystem, community, population, biosphere",
				false,
				"No. The correct sequence would be organism, population, community, ecosystem, biosphere.");
			
				p.addAnswer(4, "cell, tissue, organ, population, community",
				true,
				"Correct. These terms are in order of increasing complexity.");
			
				p.addAnswer(5, "molecule, tissue, cell, organelle, organ",
				false,
				"No. The correct sequence would be molecule, organelle, cell, tissue, organ.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334024;


		
		

		
			
			p.question = "Emergent properties of living systems are defined as properties that _____. (<script type=\"text/javascript\">ebook(\'0101\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "are apparent only when an organism is studied at the molecular level",
				false,
				"No. Consider the meaning of the term <i>emergent</i>.");
			
				p.addAnswer(2, "are due to the arrangement and interactions of parts as complexity increases",
				true,
				"Correct. Emergent properties are novel properties not present at the level of biological organization just below. Emergent properties arise from the arrangement and interactions of parts as complexity increases.");
			
				p.addAnswer(3, "are evident during only one portion of the life cycle of an organism",
				false,
				"No. Consider the meaning of the term <i>emergent</i>.");
			
				p.addAnswer(4, "define the cell\'s surroundings",
				false,
				"No. Consider the meaning of the term <i>emergent</i>.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the choices provides a correct definition of emergent properties. Remember that with each step upward in the hierarchy of biological order, novel properties emerge that are not present at the level just below.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334025;


		
		

		
			
			p.question = "Which of the following can be considered a biological system? (<script type=\"text/javascript\">ebook(\'0101\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "a single liver cell",
				false,
				"No. A single cell can be considered a biological system, but there is a better answer.");
			
				p.addAnswer(2, "a pond",
				false,
				"No. A pond can be considered a biological system, but there is a better answer.");
			
				p.addAnswer(3, "the biosphere",
				false,
				"No. The biosphere can be considered a biological system (a very complex one), but there is a better answer.");
			
				p.addAnswer(4, "a salmon\'s cardiovascular system",
				false,
				"No. The cardiovascular system of a salmon can be considered a biological system, but there is a better answer.");
			
				p.addAnswer(5, "all of the above",
				true,
				"Correct. A system is a combination of components that function together. It can be defined at any scale.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334026;


		
		

		
			
			p.question = "Sequencing a protein to discover the sequence of amino acids that make it up is an example of ________. Understanding how that protein functions and interacts with other proteins in a cell is an example of ________. (<script type=\"text/javascript\">ebook(\'0101\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "systems biology; reductionism",
				false,
				"No. Make sure you get your answers in the right order.");
			
				p.addAnswer(2, "hypothesis-driven science; systems biology",
				false,
				"No. Sequencing a protein is discovery science.");
			
				p.addAnswer(3, "reductionism; systems biology",
				true,
				"Correct. Reductionism seeks to reduce complex systems to simpler, more manageable components. Systems biology seeks to understand how all the parts function together.");
			
				p.addAnswer(4, "natural selection; systems biology",
				false,
				"No. Protein sequencing is part of discovery science.");
			
				p.addAnswer(5, "inductive reasoning; reductionism",
				false,
				"No. Although protein sequencing might lead to inductive reasoning, it is part of discovery science. Looking at protein function and interaction is a systems biology approach.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334027;


		
		

		
			
			p.question = "In an ecosystem nutrients _________ and energy ________. (<script type=\"text/javascript\">ebook(\'0101\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "are wasted; is burned",
				false,
				"No. Nutrients are always recycled in some form, and energy is transformed in various ways before exiting the system.");
			
				p.addAnswer(2, "cycle; flows through",
				true,
				"Correct. Nutrients are always recycled. Energy flows through the system, typically entering as solar energy and leaving as heat.");
			
				p.addAnswer(3, "flow through; is recycled",
				false,
				"No. Just the opposite is true.");
			
				p.addAnswer(4, "are created; is lost",
				false,
				"No. In terms of materials (including nutrients) the Earth is essentially a closed system. Materials are neither created in or lost from an ecosystem.");
			
				p.addAnswer(5, "disappear; can not be created nor destroyed",
				false,
				"No. Nutrients are always recycled. Energy flows through the ecosystem.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334028;


		
		

		
			
			p.question = "The chemical energy used by (most) organisms for metabolism and growth ultimately comes from _____. (<script type=\"text/javascript\">ebook(\'0101\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "heat",
				false,
				"No. Biological energy is dissipated as heat.");
			
				p.addAnswer(2, "the decomposition of plants and other organic debris",
				false,
				"No. This process provides nutrients, not chemical energy.");
			
				p.addAnswer(3, "the sun",
				true,
				"Correct. Energy for most life ultimately comes from the energy of the sun, trapped in the chemical bonds of molecules synthesized by photosynthetic organisms.");
			
				p.addAnswer(4, "carbon dioxide",
				false,
				"No. This is a waste product of the metabolism of sugar for energy, and it is a source of the atoms in the sugar produced by photosynthesis.");
			
				p.addAnswer(5, "evolution",
				false,
				"No. Evolution is not a source of energy; it is a process that explains the diversity of life.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334029;


		
		

		
			
			p.question = "Which of the following is the fundamental unit of structure and function in living organisms? (<script type=\"text/javascript\">ebook(\'0101\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "organelle",
				false,
				"No. Organelles exhibit some, but not all, of the characteristics of living systems.");
			
				p.addAnswer(2, "tissue",
				false,
				"No. A tissue is composed of cells of similar structure and function&mdash;for example, nerve cells forming nervous tissue. Tissues exhibit the functions of life, but there is a simpler level of biological organization that is life\'s fundamental unit of structure and function.");
			
				p.addAnswer(3, "cell",
				true,
				"Correct. The cell is the fundamental structural and functional unit of both single-celled and multicellular organisms.");
			
				p.addAnswer(4, "organ",
				false,
				"No. An organ consists of two or more tissues, while a tissue consists of cells of similar structure and function. Organs exhibit the functions of life, but there is a simpler level of biological organization that is life\'s fundamental unit of structure and function.");
			
				p.addAnswer(5, "organism",
				false,
				"No. An organism consists of one cell (single-celled or unicellular organism) or many cells (multicellular organism). Organisms exhibit the functions of life, but there is a simpler level of biological organization that is life\'s fundamental unit of structure and function.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334030;


		
		

		
			
			p.question = "What is the molecular commonality that is the basis of life\'s variety? (<script type=\"text/javascript\">ebook(\'0101\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "protein",
				false,
				"No. Proteins have a structure that depends on genetic material.");
			
				p.addAnswer(2, "DNA",
				true,
				"Correct. The uniformity of coding in DNA is virtually universal. Life\'s variety arises from variations in the nucleotide sequences of inherited DNA molecules, the substance of genes.");
			
				p.addAnswer(3, "the ecosystem",
				false,
				"No. This is a level of biological organization, not a molecule. Ecosystems consist of living organisms along with the nonliving components of their environment with which they interact. The variations in each organism are generally considered to be adaptations to different ecosystems.");
			
				p.addAnswer(4, "natural selection",
				false,
				"No. This is a process and a mechanism of evolution, not a molecule.");
			
				p.addAnswer(5, "mutation",
				false,
				"No. This is a variation within the common molecule.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334031;


		
		

		
			
			p.question = "How is the information encoded in DNA actually used by organisms? (<script type=\"text/javascript\">ebook(\'0101\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Proteins are built directly from the information in the DNA.",
				false,
				"No. The information in DNA is first transcribed to RNA and then translated into protein.");
			
				p.addAnswer(2, "DNA is translated into protein and then transcribed to RNA.",
				false,
				"No. The information in DNA is first transcribed to RNA and then translated into protein.");
			
				p.addAnswer(3, "DNA leaves the nucleus and interacts directly with other molecules in the cell.",
				false,
				"No. DNA remains in the nucleus (of eukaryotic cells) and only interacts with a few different types of molecules.");
			
				p.addAnswer(4, "The information in the DNA diffuses throughout the cell.",
				false,
				"No. The information in DNA is first transcribed to RNA and then translated into protein.");
			
				p.addAnswer(5, "The information in DNA is transcribed to RNA and then translated into protein.",
				true,
				"Correct. The information in DNA is first transcribed to RNA and then translated into protein.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334032;


		
		

		
			
			p.question = "In which kingdom can multicellular eukaryotic, photosynthetic organisms be found? (<script type=\"text/javascript\">ebook(\'0102\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Archaea",
				false,
				"No. Archaea is a taxonomic domain, not a kingdom, composed of organisms with prokaryotic cells.");
			
				p.addAnswer(2, "Fungi",
				false,
				"No. Fungi are not photosynthetic.");
			
				p.addAnswer(3, "Protista",
				false,
				"No. Protists are primarily unicellular eukaryotes.");
			
				p.addAnswer(4, "Plantae",
				true,
				"Correct. Multicellular eukaryotes that carry out photosynthesis are placed in the kingdom Plantae.");
			
				p.addAnswer(5, "Animalia",
				false,
				"No. Animals are not photosynthetic.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334033;


		
		

		
			
			p.question = "Which of the following domains is prokaryotic? (<script type=\"text/javascript\">ebook(\'0102\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Eukarya",
				false,
				"No. Domain Eukarya contains all eukaryotic organisms (organisms with eukaryotic cells).");
			
				p.addAnswer(2, "Protista.",
				false,
				"No. Protists are eukaryotic, and Protista is a kingdom, not a domain.");
			
				p.addAnswer(3, "Archaea",
				true,
				"Correct. Archaea are among the simplest kinds of organisms, the prokaryotes.");
			
				p.addAnswer(4, "Fungi",
				false,
				"No. Fungi is a kingdom, not a domain, and it is composed of eukaryotic organisms.");
			
				p.addAnswer(5, "The domain Bacteria, the domain Archaea, and the domain Eukarya all contain at least some prokaryotic members.",
				false,
				"No. There are no prokaryotes in the domain Eukarya.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334034;


		
		

		
			
			p.question = "Which kingdom within the domain Eukarya is composed of organisms that are generally unicellular (single-celled)? (<script type=\"text/javascript\">ebook(\'0102\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Plantae",
				false,
				"No. Plants are multicellular organisms.");
			
				p.addAnswer(2, "Fungi",
				false,
				"No. Although yeasts generally are single-celled, most fungi are multicellular organisms.");
			
				p.addAnswer(3, "Animalia",
				false,
				"No. Animals are all multicellular organisms.");
			
				p.addAnswer(4, "Protista",
				true,
				"Correct. The eukaryotic protists are usually single-celled or unicellular organisms.");
			
				p.addAnswer(5, "Archaea",
				false,
				"No. Archaea is a domain, not a kingdom, of unicellular prokaryotic organisms.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334035;


		
		

		
			
			p.question = "Eukaryotic organisms that decompose dead organisms and absorb the nutrients are generally found in which kingdom? (<script type=\"text/javascript\">ebook(\'0102\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Archaea",
				false,
				"No. Archaea is a domain, not a kingdom. Archaea are prokaryotes, not eukaryotes.");
			
				p.addAnswer(2, "Bacteria",
				false,
				"No. Bacteria is a domain, not a kingdom. Although many bacteria are decomposers, bacterial cells are prokaryotic, not eukaryotic.");
			
				p.addAnswer(3, "Plantae",
				false,
				"No. These organisms produce their own food by photosynthesis, not by decomposing other organisms.");
			
				p.addAnswer(4, "Animalia",
				false,
				"No. These organisms obtain their food by ingestion; they are not generally decomposers.");
			
				p.addAnswer(5, "Fungi",
				true,
				"Correct. These are eukaryotic decomposers that obtain their nutrients by breaking down dead organisms and organic wastes.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334036;


		
		

		
			
			p.question = "Natural selection tends to act at which of the following levels? (<script type=\"text/javascript\">ebook(\'0102\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "population",
				true,
				"Correct. Natural selection selects for organisms within a population that are best adapted to their local environment.");
			
				p.addAnswer(2, "species",
				false,
				"No. The members of a given species may be spread over the world in different environments, so the same adaptations would not work for all populations.");
			
				p.addAnswer(3, "phylum",
				false,
				"No. Eventually evolution may produce new phyla, but natural selection acts at a simpler level.");
			
				p.addAnswer(4, "kingdom",
				false,
				"No. A lot of evolutionary change would have to occur before new kingdoms evolved.");
			
				p.addAnswer(5, "class",
				false,
				"No. Eventually evolution may produce new classes, but natural selection acts at a simpler level.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334037;


		
		

		
			
			p.question = "Which of the following observations and inferences led Charles Darwin to his theory of natural selection as the mechanism for evolution? (<script type=\"text/javascript\">ebook(\'0102\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Individuals in a population of any species vary in many heritable traits.",
				false,
				"No. This is a correct statement, but there is a better answer.");
			
				p.addAnswer(2, "Individuals with heritable traits best-suited to the local environment will generally produce a disproportionate number of healthy, fertile offspring.",
				false,
				"No. This is a correct statement, but there is a better answer.");
			
				p.addAnswer(3, "A population of any species has the potential to produce far more offspring than will survive to produce offspring of their own.",
				false,
				"No. This is a correct statement, but there is a better answer.");
			
				p.addAnswer(4, "Individuals of a population are unequal in the likelihood of surviving and reproducing.",
				false,
				"No. This is a correct statement, but there is a better answer.");
			
				p.addAnswer(5, "Darwin synthesized his theory of natural selection from all of the above observations and inferences.",
				true,
				"Correct. All of the above observations and inferences led Charles Darwin to his theory of natural selection as the mechanism for evolution.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334038;


		
		

		
			
			p.question = "With evolution as the core theme of biology, we can explain traits shared by organisms as evidence of _______ and traits that differ among organisms as evidence of _________. (<script type=\"text/javascript\">ebook(\'0102\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "descent from a common ancestor; chance",
				false,
				"No. While chance does have a place in evolution, different traits are most often a product of natural selection.");
			
				p.addAnswer(2, "coincidence; adaptation",
				false,
				"No. Most shared traits arise because of descent from a common ancestor. They may also arise because of convergent evolution, but coincidence is rarely involved.");
			
				p.addAnswer(3, "systems biology; reductionism",
				false,
				"No. Systems biology and reductionism are ways of approaching biological problems, not explanations of organismal traits.");
			
				p.addAnswer(4, "descent from a common ancestor; adaptation through natural selection",
				true,
				"Correct. Many shared traits have been derived from common ancestry. The modifications to those shared traits can usually be attributed to adaptive evolution by natural selection.");
			
				p.addAnswer(5, "qualitative data; quantitative data",
				false,
				"No. Traits can be measured both qualitatively and quantitatively, but the type of data does not give an explanation for the observed patterns.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334039;


		
		

		
			
			p.question = "Experimentation is only one part of the process of scientific inquiry, but it is a very important step because it _____. (<script type=\"text/javascript\">ebook(\'0103\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "gives the investigator a systematic, unbiased result",
				false,
				"No. Experimentation is important because hypotheses can be rejected when contradictory evidence emerges. Experimentation cannot \"prove\" that a hypothesis is correct.");
			
				p.addAnswer(2, "allows rejection of some alternative hypotheses",
				true,
				"Correct. Experimentation is important because hypotheses <b>can</b> be rejected when contradictory evidence emerges.");
			
				p.addAnswer(3, "ensures that hypotheses can be confirmed with certainty",
				false,
				"No. An experiment cannot prove that a hypothesis is correct, but only eliminate it through falsification. Hypotheses can be eliminated, but not confirmed with absolute certainty.");
			
				p.addAnswer(4, "ensures that the variable being tested is measured without error",
				false,
				"No. Experimentation is important because hypotheses can be rejected when contradictory evidence emerges. All experiments are subject to error, which is why replication and reproduction of results is so important.");
			
				p.addAnswer(5, "gives scientists a chance to work in the laboratory",
				false,
				"No. Experimentation is important because hypotheses can be rejected when contradictory evidence emerges.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334040;


		
		

		
			
			p.question = "Radon is a radioactive gas that seeps into homes from the soil. It is thought to be a leading cause of lung cancer. A research team investigates this theory. They gather large amounts of data on basement radon concentrations and lung cancer rates and conclude that the more radon there is in a home, the more likely is lung cancer. After the study is published, other researchers criticize it by asserting that the studied neighborhoods with higher radon concentrations also have a higher percentage of older people and a higher percentage of cigarette smokers than the low-radon neighborhoods. Both advanced age and cigarette smoking increase the risk of lung cancer. This criticism, if correct, shows that the radon study suffered from _____. (<script type=\"text/javascript\">ebook(\'0103\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "a lack of replication",
				false,
				"No. However, any study does need to be replicated before the results can be considered valid.");
			
				p.addAnswer(2, "an unfalsifiable hypothesis",
				false,
				"No. The hypothesis is falsifiable.");
			
				p.addAnswer(3, "uncontrolled variables",
				true,
				"Correct. An important feature of the scientific process is the controlled experiment in which two groups are established and treated exactly alike, except for the one variable the experiment is designed to test.");
			
				p.addAnswer(4, "nonsystematic observation and analysis of data\n",
				false,
				"No. Observational data were collected systematically and presumably quantitatively analyzed.");
			
				p.addAnswer(5, "a small sample size",
				false,
				"No. Although this may have been true, it did not form the basis of the criticism.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334041;


		
		

		
			
			p.question = "Which one of the following statements is most clearly inductively derived? (<script type=\"text/javascript\">ebook(\'0103\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "If the animals observed require organic molecules as nutrients, then it can be concluded that all animals require organic molecules as nutrients.",
				true,
				"Correct. Induction moves from a set of specific observations (humans require organic molecules, fish require organic molecules, etc.) to reach a general conclusion (all animals require organic molecules).");
			
				p.addAnswer(2, "If all flying animals are birds, then it can be concluded that bats are birds.",
				false,
				"No. Induction moves from a set of specific observations to reach a general. In this case a generalization is being applied to a more specific group.");
			
				p.addAnswer(3, "Because worms lack bones, they are classified as invertebrates.",
				false,
				"No. This statement is simply applying a definition to a group of organisms.");
			
				p.addAnswer(4, "A paramecium moves by means of the rhythmic motion of its cilia.",
				false,
				"No. Induction moves from a set of specific observations to reach a general conclusion. This is just one specific observation.");
			
				p.addAnswer(5, "An elephant is warm-blooded because it is a mammal.",
				false,
				"No. This is a poor attempt to apply a taxonomic classification.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334042;


		
		

		
			
			p.question = "Two garden plots were planted with corn. The soil was similar in each, and equal amounts of water were applied to each plot. One plot was fertilized, and the other was not. The experimenters measured the yield as bushels of corn from each plot. The plot that did not receive the fertilizer was the _____. (<script type=\"text/javascript\">ebook(\'0103\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "experimental plot",
				false,
				"No. The experimental plot is the plot that received the experimental treatment or the variable being tested.");
			
				p.addAnswer(2, "control plot",
				true,
				"Correct. The control refers to the plot that does not receive the experimental treatment or the variable being tested, in this case, fertilizer.");
			
				p.addAnswer(3, "controlled variable",
				false,
				"No. In this experiment, the plot is not a variable.");
			
				p.addAnswer(4, "dependent variable",
				false,
				"No. In this experiment, the plot is not a variable.");
			
				p.addAnswer(5, "emergent property",
				false,
				"Emergent properties relate to the hierarchy of biological organization, not to a process of scientific inquiry.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334043;


		
		

		
			
			p.question = "A hypothesis must be testable and falsifiable to be scientifically valid. Being testable and falsifiable means that _____. (<script type=\"text/javascript\">ebook(\'0103\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "some conceivable observation or experiment could reveal whether a given hypothesis is correct or incorrect",
				true,
				"Correct. Hypotheses should be phrased in a way that enables one to make predictions that can be tested and falsified by experiments or observations.");
			
				p.addAnswer(2, "only a controlled experiment can prove whether the hypothesis is correct or incorrect",
				false,
				"No. However, controls are required to assure the validity of an experiment. Testing never \"proves\" that a hypothesis is correct; it only supports the hypothesis by not eliminating it through falsification.");
			
				p.addAnswer(3, "the hypothesis has been proved wrong",
				false,
				"No. Testing never \"proves\" that a hypothesis is correct or incorrect; it only supports the hypothesis by not eliminating it through falsification.");
			
				p.addAnswer(4, "there must be several options in the hypothesis to choose from, one of which is correct",
				false,
				"No. Hypotheses are not necessarily correct.");
			
				p.addAnswer(5, "if the hypothesis is not correct, the experiment was a failure",
				false,
				"No. If the outcome of an experiment does not support a hypothesis, the hypothesis is falsified, but that does not make for a failed experiment.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334044;


		
		

		
			
			p.question = "At which point is a scientific investigator most likely to use deductive reasoning? (<script type=\"text/javascript\">ebook(\'0103\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "during initial observation(s)",
				false,
				"No. Initial observations might be part of discovery science, not deductive reasoning.");
			
				p.addAnswer(2, "during the formulation of a hypothesis",
				false,
				"No. The formulation of a hypothesis sets the stage for deductive testing.");
			
				p.addAnswer(3, "in establishing a test of a hypothesis",
				true,
				"Correct. In deduction, reasoning flows from the general to the specific. Deductive testing would take the form of \"if . . . then\" logic.");
			
				p.addAnswer(4, "in arranging for a peer review",
				false,
				"No. It\'s a little late at this point.");
			
				p.addAnswer(5, "after the careful analysis of both the qualitative and the quantitative data recorded in the study",
				false,
				"No. After data analysis a new hypothesis may be put forward to be tested.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334045;


		
		

		
			
			p.question = "Which of the following is outside the realm of scientific inquiry? (<script type=\"text/javascript\">ebook(\'0103\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "determining the physical causes for physical phenomena",
				false,
				"No. This is within the realm of science.");
			
				p.addAnswer(2, "formulating testable hypotheses in seeking natural causes for natural phenomena",
				false,
				"No. This is within the realm of science.");
			
				p.addAnswer(3, "explaining naturally occurring events",
				false,
				"No. This is within the realm of science.");
			
				p.addAnswer(4, "addressing questions of ethical dilemmas",
				true,
				"Correct. Questions of ethics are not amenable to solution by experiments or observations.");
			
				p.addAnswer(5, "determining the efficacy of a low-carbohydrate diet",
				false,
				"No. This is within the realm of science.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334046;


		
		

		
			
			p.question = "A company was testing a new drug it thought would help decrease the risk of transmission of viruses from mother to fetus. In an experiment to test the compound, an investigator gave 400 pregnant female rats a small dose of the experimental drug and inoculated each with a type of virus known to cause disease in rats. At the same time, 400 other pregnant rats were given only the virus. Of the rat pups born to the females that received both the virus and the drug, 203 showed no symptoms of the disease; 205 rat pups born to the virus-only females showed symptoms. From this test, we can best conclude _____. (<script type=\"text/javascript\">ebook(\'0103\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "that the drug is 5% effective and testing on humans should begin",
				false,
				"No. It is not that simple to extrapolate from rats to humans. Recalculate the percent effectiveness of the drug.");
			
				p.addAnswer(2, "that the drug seems to have little effect on viral transmission at the dosage given",
				true,
				"Correct. Approximately equal numbers of pups were affected in both groups (experimental group 400 - 203 = 197, control group = 205), suggesting that the drug was probably not effective at the dosage given.");
			
				p.addAnswer(3, "nothing, because no independent variable could be identified",
				false,
				"No. There is an independent variable in this experiment, the administration of the drug to only one of the two groups of pregnant rats inoculated with the virus.");
			
				p.addAnswer(4, "nothing, because no control group was used in the test of the drug",
				false,
				"No. The pregnant rats that were inoculated with the virus and that did not receive the new drug represent the control group for the experiment.");
			
				p.addAnswer(5, "that the drug enhances disease progression",
				false,
				"No. No evidence of this was provided. Approximately the same percentage of animals in the control (51%) and experimental (49%) groups produced pups that exhibited the disease.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334047;


		
		

		
			
			p.question = "The best method for determining whether bean plants require sodium is to _____. (<script type=\"text/javascript\">ebook(\'0103\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "measure the amount of sodium in a few bean plants",
				false,
				"No. The presence of sodium in the plant tissue does not indicate that sodium is a required bean plant nutrient.");
			
				p.addAnswer(2, "measure how fast radioactive sodium enters the plant",
				false,
				"No. The movement of sodium into the bean plant tissue does not indicate that sodium is a required nutrient");
			
				p.addAnswer(3, "look for sodium in leaf tissues using autoradiography",
				false,
				"No. The presence of sodium in the leaf tissue does not indicate that sodium is a required bean plant nutrient.");
			
				p.addAnswer(4, "analyze root contents for sodium",
				false,
				"No. The presence of sodium in the root tissue does not indicate that sodium is a required bean plant nutrient..");
			
				p.addAnswer(5, "grow bean plants with and without sodium",
				true,
				"Correct. In hypothesis-based scientific inquiry, the experiment must have an experimental group and a control group. In this case, growing bean plants with sodium would constitute the experimental group, and growing bean plants without the addition of sodium would constitute the control group.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334048;


		
		

		
			
			p.question = "In experimental procedures, repetition of the procedures _____. (<script type=\"text/javascript\">ebook(\'0103\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "is not necessary if the scientist obtains enough background information",
				false,
				"No. Background information does not tell if the tested result will happen every time.");
			
				p.addAnswer(2, "is too difficult for researchers doing fieldwork",
				false,
				"No. No experimental result is considered correct, regardless of the conditions, if it is not shown to be repeatable.");
			
				p.addAnswer(3, "is necessary before assuming that a given set of results is correct",
				true,
				"Correct. Repetition of tests is crucial to the process of science. Only when a result is repeatable can it be considered correct.");
			
				p.addAnswer(4, "should always be done by changing a variable",
				false,
				"No. If a variable is changed, the experiment is not being repeated.");
			
				p.addAnswer(5, "wastes money that can be better spent doing new experiments",
				false,
				"No. The experiment is not finished unless the results are shown to be repeatable.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334049;


		
		

		
			
			p.question = "Should an experiment test only one variable at a time? Why or why not? (<script type=\"text/javascript\">ebook(\'0103\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Yes, an experiment should only test one variable at a time. That way, the experiment will only have to be performed once.",
				false,
				"No. Experimental results must be repeated before they are considered valid.");
			
				p.addAnswer(2, "Yes, an experiment should only test one variable at a time. This ensures that the experimental outcome is clearly due to one identifiable factor.",
				true,
				"Correct. Treatment of an experimental group should differ from treatment of a control group by only a single variable so that the researcher can determine what causes the observed effect.");
			
				p.addAnswer(3, "No, it is not necessary to test only one variable per experiment, especially when time is of the essence.",
				false,
				"No. That is why scientific research is so time-consuming. It requires time and infinite care.");
			
				p.addAnswer(4, "As long as the experiment is repeated a sufficient number of times, it doesn\'t matter how many variables are used.",
				false,
				"No. It does matter. Repetition of confusion doesn\'t eliminate the confusion.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334050;


		
		

		
			
			p.question = "A theory is _____. (<script type=\"text/javascript\">ebook(\'0103\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "a poorly supported idea that has little backing but might be correct",
				false,
				"No. A theory is a well-supported concept that has broad explanatory power.");
			
				p.addAnswer(2, "a well-supported concept that has broad explanatory power",
				true,
				"Correct. Theories are comprehensive and become widely accepted if they are supported by a large body of evidence.");
			
				p.addAnswer(3, "the same thing as a hypothesis",
				false,
				"No. A theory is a well-supported concept that has broad explanatory power.");
			
				p.addAnswer(4, "not correct unless it is several years old",
				false,
				"No. A theory is a well-supported concept that has broad explanatory power, regardless of the time the theory has been in existence.");
			
				p.addAnswer(5, "a concept that, once established in the scientific literature, can be modified but never rejected, even when new scientific methods produce data that don\'t fit",
				false,
				"No. A theory is a well-supported concept that has broad explanatory power, but scientists must modify or even reject a theory when new research produces data that don\'t fit.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

