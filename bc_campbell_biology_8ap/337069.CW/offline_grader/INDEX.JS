

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "54: Community Ecology > Practice Test";
	ak.quiz_loc_with_commas = "54: Community Ecology, Practice Test";
	ak.quiz_title = "Practice Test";

	
		ak.help_url = "../../placeholders/help_placeholder.html";
	
	ak.essay_total = 0;
	ak.pair_problem_total = 0;
	ak.pair_total = 0;
	ak.problem_total = 24;
	ak.non_essay_total = 24;
	ak.scored_item_total = 24;

	
	
	


	
	ak.copyright_date = "2008";
	ak.brandname = "Pearson Benjamin Cummings";
	ak.legal = "../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.pearsoned.com%2Flegal%2Findex.htm";


	// Loop over all problems
	
	
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 337070;


		
		

		
			
			p.question = "Under which of the following circumstances would interspecific competition be most obvious?\n (<script type=\"text/javascript\">ebook(\'5401\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "when resources are most abundant",
				false,
				"No. Until the population sizes increase to meet the abundance, competition should be less obvious when resources are abundant.");
			
				p.addAnswer(2, "in the presence of a keystone species",
				false,
				"No. A keystone species will reduce the levels of competition among prey species.");
			
				p.addAnswer(3, "when organisms have quite different ecological niches",
				false,
				"No. Having different ecological niches will lessen the degree of competition.");
			
				p.addAnswer(4, "among species whose trophic levels are different",
				false,
				"No. Species at different trophic levels are not in competition for food.");
			
				p.addAnswer(5, "when a non-native organism is introduced to a community",
				true,
				"Correct. Nonnative species, which have not evolved with the members of the community into which they are introduced, may have the potential to outcompete native species.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 337071;


		
		

		
			
			p.question = "The niche of an animal is _____. (<script type=\"text/javascript\">ebook(\'5401\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the number of individuals of the species the environment will support",
				false,
				"No. This is the definition of carrying capacity.");
			
				p.addAnswer(2, "the same as its habitat",
				false,
				"No. The terms are not synonymous. \"Habitat\" is a more limited term that refers only to where an organism lives.");
			
				p.addAnswer(3, "the way the animal fits into its environment",
				true,
				"Correct. The niche describes a set of resources and the degree to which they are used by an organism.");
			
				p.addAnswer(4, "its den or nest",
				false,
				"No. Although den and nest sites are a part of a niche, they alone are not the niche.");
			
				p.addAnswer(5, "its position in the food chain",
				false,
				"No. This is a component of an animal\'s niche.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 337072;


		
		

		
			
			p.question = "When goats were introduced to an island off the California coast, the goats inhabited the same areas and ate the same plants as the native deer. The deer population dwindled and finally disappeared. This is an example of _____. (<script type=\"text/javascript\">ebook(\'5401\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "commensalism",
				false,
				"No. Commensalism is a +/0 relationship. In this example, the deer lose.");
			
				p.addAnswer(2, "succession",
				false,
				"No. This term refers to changes in entire communities over time.");
			
				p.addAnswer(3, "a food chain",
				false,
				"No. A food chain is a hierarchy of feeding relationships. Goats and deer both feed at the same level.");
			
				p.addAnswer(4, "coevolution",
				false,
				"No. Coevolution is a situation in which two species influence each other\'s evolution.");
			
				p.addAnswer(5, "competitive exclusion",
				true,
				"Correct. The niches of the goats and deer overlapped so much that they could not coexist.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 337073;


		
		

		
			
			p.question = "Flounder is a type of fish that looks like the seafloor. This is an example of _____. (<script type=\"text/javascript\">ebook(\'5401\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "M&#252;llerian mimicry",
				false,
				"No. In M&#252;llerian mimicry, two or more unpalatable species evolve similar warning coloration.");
			
				p.addAnswer(2, "warning coloration",
				false,
				"No. This type of coloration causes the organism to stand out against the background and serves as a warning to potential predators.");
			
				p.addAnswer(3, "character displacement",
				false,
				"No. In character displacement, two species that utilize similar resources differ more in areas where their distributions overlap than they do in areas where their distributions do not overlap.");
			
				p.addAnswer(4, "cryptic coloration",
				true,
				"Correct. The organism\'s coloration allows it to blend into the background, making it difficult to see.");
			
				p.addAnswer(5, "Batesian mimicry",
				false,
				"No. In Batesian mimicry, harmful or unpalatable species are mimicked by harmless, palatable species.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 337074;


		
		

		
			
			p.question = "The flower fly resembles a honeybee, but the flower fly has no stinger. This is an example of _____. (<script type=\"text/javascript\">ebook(\'5401\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Batesian mimicry",
				true,
				"Correct. In Batesian mimicry, a palatable or harmless species mimics an unpalatable or harmful model.");
			
				p.addAnswer(2, "M&#252;llerian mimicry",
				false,
				"No. M&#252;llerian mimicry occurs when harmful species mimic each other.");
			
				p.addAnswer(3, "cryptic coloration",
				false,
				"No. Cryptic coloration helps in the avoidance of detection.");
			
				p.addAnswer(4, "interspecific competition",
				false,
				"No. The question does not mention competition between the species.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 337075;


		
		

		
			
			p.question = "The poison-arrow frogs <i>Dendrobates</i> of tropical America are all brightly colored and have very similar patterns. Although each species is distasteful to predators and all possess toxic skin secretions, some of the species live quite separate from the others. The adaptive relationship among these species is best termed _____. (<script type=\"text/javascript\">ebook(\'5401\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "cryptic coloration",
				false,
				"No. Cryptic coloration helps in the avoidance of detection.");
			
				p.addAnswer(2, "parasitism",
				false,
				"No. Parasitism is a type of relationship that benefits the parasite and reduces the fitness of the host.");
			
				p.addAnswer(3, "commensalism",
				false,
				"No. In commensalism only one member of a species pair benefits.  In this situation, all the poison-arrow frogs benefit.");
			
				p.addAnswer(4, "Batesian mimicry",
				false,
				"No. In Batesian mimicry, a palatable or harmless species mimics an unpalatable or harmful model.");
			
				p.addAnswer(5, "M&#252;llerian mimicry",
				true,
				"Correct. In M&#252;llerian mimicry, two or more unpalatable species resemble each other.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 337076;


		
		

		
			
			p.question = "A leech that attaches itself to a swimmer is an example of _____. (<script type=\"text/javascript\">ebook(\'5401\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "prey",
				false,
				"No. Prey are the victims of predators. In this case, the leech is not a victim.");
			
				p.addAnswer(2, "a parasitoid",
				false,
				"No. Parasitoids are insects whose larvae hatch in and then feed on their hosts.");
			
				p.addAnswer(3, "an endoparasite",
				false,
				"No. Examples of endoparasites are tapeworms. Endoparasites live within the body of their hosts.");
			
				p.addAnswer(4, "an ectoparasite",
				true,
				"Correct. Leeches feed on the external surface of their hosts, a characteristic of all ectoparasites.");
			
				p.addAnswer(5, "a pathogen",
				false,
				"No. Pathogens are similar to parasites; however, parasites are usually multicellular, while pathogens are typically microorganisms. Also, pathogens usually inflict greater damage on their hosts than parasites do.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 337077;


		
		

		
			
			p.question = "Certain species of acacia trees in Central and South America have hollow thorns that house stinging ants, which attack anything that touches the tree. The ants feed on nutrients produced by the acacias. This is an example of _____.  (<script type=\"text/javascript\">ebook(\'5401\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "mutualism",
				true,
				"Correct. Mutualism is a symbiotic relationship that benefits both participants.");
			
				p.addAnswer(2, "parasitism",
				false,
				"No. In parasitism, the fitness of the parasite increases while the fitness of the host decreases.");
			
				p.addAnswer(3, "predation",
				false,
				"No. In predation, the fitness of the predator increases while the fitness of the prey decreases.");
			
				p.addAnswer(4, "competitive exclusion",
				false,
				"No. Competitive exclusion occurs when two species occupy very similar niches and one drives the other to local extinction. In this situation, the acacia tree and the ants are coexisting.");
			
				p.addAnswer(5, "intraspecific competition",
				false,
				"No. The ants and acacia trees are two different species.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 337078;


		
		

		
			
			p.question = "Which example below correctly lists members of a desert ecosystem from the producer level to the top consumer level? (<script type=\"text/javascript\">ebook(\'5402\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "detritivores, brittlebush, collared lizard, red-tailed hawk",
				false,
				"No. Detritivores are not primary producers, and this list is missing a primary consumer.");
			
				p.addAnswer(2, "red-tailed hawk, collared lizard, pallid-winged grasshopper, brittlebush",
				false,
				"No. The examples are listed in order, but it starts from the highest level of consumer.");
			
				p.addAnswer(3, "pallid-winged grasshopper, collared lizard, red-tailed hawk, detritivores",
				false,
				"No. This list is missing a producer.");
			
				p.addAnswer(4, "brittlebush, pallid-winged grasshopper, collared lizard, red-tailed hawk",
				false,
				"No. This list is missing a quarternary consumer.");
			
				p.addAnswer(5, "none of the above",
				true,
				"Correct. Although the fourth answer lists the choices in the order that was requested, the highest-level consumer is tertiary.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 337079;


		
		

		
			
			p.question = "A field contains 950 kg of plant material. How many kilograms of tertiary consumers could be supported? (<script type=\"text/javascript\">ebook(\'5402\',\'quiz\')</script>)";
			p.incorrect_any_expl = "No. Only about 10% of the energy stored in the organic matter of each trophic level is converted to organic matter at the next trophic level.";
			p.incorrect_any_expl_flag = 1;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "9,500",
				false,
				"");
			
				p.addAnswer(2, "950",
				false,
				"");
			
				p.addAnswer(3, "95",
				false,
				"");
			
				p.addAnswer(4, "9.5",
				false,
				"");
			
				p.addAnswer(5, "0.95",
				true,
				"Correct. This area would support approximately 95 kg of primary consumers, 9.5 kg of secondary consumers, and 0.95 kg of tertiary consumers.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 337080;


		
		

		
			
			p.question = "What is the key difference between a dominant species and a keystone species? (<script type=\"text/javascript\">ebook(\'5402\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "There is no difference. The two terms are synonymous.",
				false,
				"No. The terms refer to species that have different roles in a community.");
			
				p.addAnswer(2, "Dominant species alter the structure or dynamics of the environment; keystone species are the most abundant.",
				false,
				"No. Foundation species alter the structure or dynamics of the environment; dominant species are the most abundant.");
			
				p.addAnswer(3, "Dominant species are the most abundant; keystone species exert control through important roles or niches.",
				true,
				"Correct. Dominant species have the highest biomass in a community. Keystone species may not be abundant, but they do have a crucial role in the function of a community.");
			
				p.addAnswer(4, "The removal of a dominant species from a community has more impact than removing a keystone species.",
				false,
				"No. This is not always true.");
			
				p.addAnswer(5, "Keystone species are more successful at evading their predators and the impacts of disease.",
				false,
				"No. This is true of dominant species, and may explain why they become the most abundant species in their community.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 337081;


		
		

		
			
			p.question = "In the North Pacific, sea otters are keystone predators.  A reduction in their numbers has resulted in what changes in the marine community? (<script type=\"text/javascript\">ebook(\'5402\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "competitive exclusion inevitably reduced species richness",
				false,
				"No. While there is a decrease in species richness as a result of the decline in the number of sea otters, it is not due to competitive exclusion.");
			
				p.addAnswer(2, "mutualism among prey species maintained species diversity",
				false,
				"No. The prey species for the sea otters was sea urchins.  Due to the decline of the sea otters, the sea urchins reduced the kelp forests.");
			
				p.addAnswer(3, "the orcas have begun to prey on sea urchins",
				false,
				"No. Orcas have been forced to prey on sea otters, causing a decline in the sea otter population.");
			
				p.addAnswer(4, "the absence of a keystone species decreased community diversity",
				true,
				"Correct. By reducing the densities of sea otters, the densities of sea urchins increased and eventually reduced the kelp forests.");
			
				p.addAnswer(5, "resource partitioning allowed otherwise competing species to coexist",
				false,
				"No. Although resource partitioning will lessen the effects of competition, it was not responsible for the community composition changes.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 337082;


		
		

		
			
			p.question = "A species of malaria-carrying mosquito lives in a forest in which two species of monkeys, A and B, coexist. Species A is immune to malaria, but species B is not. The malaria-carrying mosquito is the chief food for a particular kind of bird in the forest. If all these birds were suddenly eliminated by hunters, which of the following would be an immediately observable consequence? (<script type=\"text/javascript\">ebook(\'5402\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "increased mortality (death rate) in monkey species A",
				false,
				"No. Although the increase in mosquitoes may be an irritant to monkey species A, the species is resistant to malaria.");
			
				p.addAnswer(2, "increased mortality in monkey species B",
				true,
				"Correct. If the birds that eat the mosquito were suddenly eliminated, presumably the population would increase rapidly and more mosquitoes would be available to infect monkey species B with malaria.");
			
				p.addAnswer(3, "increased mortality in the malaria-carrying mosquitoes",
				false,
				"No. The expectation would be an increase in the population of the malaria-carrying mosquitoes.");
			
				p.addAnswer(4, "emergence of malaria-resistant strains in monkey species B",
				false,
				"No. This may occur over the long term, but not as an immediate consequence.");
			
				p.addAnswer(5, "emergence of malaria-sensitive strains in monkey species A",
				false,
				"No. An increase in malaria-carrying mosquitoes would reinforce the selective advantage of malaria resistance.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 337083;


		
		

		
			
			p.question = "A lake community with four trophic levels suddenly suffers from algal blooms. Using the strategy of biomanipulation, an ecologist may propose _____. (<script type=\"text/javascript\">ebook(\'5402\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "removing zooplankton",
				false,
				"No. Since zooplankton feed on cyanobacteria, this would not solve the algal bloom problem.");
			
				p.addAnswer(2, "adding mineral nutrients to the water",
				false,
				"No. The additional mineral nutrients would cause the cyanobacteria to thrive.");
			
				p.addAnswer(3, "adding fish that eat zooplankton",
				false,
				"No. This would reduce the population of zooplankton, and most likely increase the population of cyanobacteria.");
			
				p.addAnswer(4, "removing fish that eat zooplankton",
				true,
				"Correct. If the predators of zooplankton are removed from the lake, then the population of zooplankton should increase and the population of cyanobacteria should decrease.");
			
				p.addAnswer(5, "removing the fourth trophic level in the lake",
				false,
				"No. The ecologist may suggest <b>adding</b> a fifth trophic level, thereby decreasing the number of fish that feed on zooplankton. Removing the fourth trophic level would not solve the algal bloom problem.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 337084;


		
		

		
			
			p.question = "The current view of biological communities is _____. (<script type=\"text/javascript\">ebook(\'5403\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "that they eventually reach a state of equilibrium",
				false,
				"No. This type of model is applicable to an older view of biological communities.");
			
				p.addAnswer(2, "that disturbance and nonequilibrium are the norm",
				true,
				"Correct. The nonequilibrium model describes communities as constantly changing after being buffeted by disturbances.");
			
				p.addAnswer(3, "that they maintain a relatively constant composition of species",
				false,
				"No. The nonequilibrium model describes communities as constantly changing after being buffeted by disturbances.");
			
				p.addAnswer(4, "that the effect of disturbances is usually negative",
				false,
				"No. This is not always true. Disturbances may create opportunities for species that have not previously occupied habitats to become established.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 337085;


		
		

		
			
			p.question = "Succession of communities occurs because _____. (<script type=\"text/javascript\">ebook(\'5403\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "each existing community changes the environment",
				true,
				"Correct. Transitions in species composition over ecological time represent a process called ecological succession. Because resource availability changes over the course of succession, different species compete better at different stages. Early colonizers with high reproductive rates maintain themselves by constantly colonizing new areas before better competitors can become established in the same place.");
			
				p.addAnswer(2, "climatic changes lead to reduced water availability",
				false,
				"No. This choice refers to geologic processes that may be responsible for a disturbance, but not to community succession.");
			
				p.addAnswer(3, "most populations have a limited life span and die making room for others",
				false,
				"No. Populations do not necessarily have a limited life span.");
			
				p.addAnswer(4, "resources in an area are limited",
				false,
				"No. To a greater or lesser extent resources are always limited.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 337086;


		
		

		
			
			p.question = "Which statement below correctly describes conditions on a glacier moraine during the reign of pioneer species? (<script type=\"text/javascript\">ebook(\'5403\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Vegetation consists of sphagnum bogs on poorly drained flat areas.",
				false,
				"No. This does happen during ecological succession on a glacial moraine, but not for about 300 years. This is long after the pioneer species have paved the way for spruce and hemlock trees.");
			
				p.addAnswer(2, "Decomposition of acidic spruce needles reduces the pH of the soil.",
				false,
				"No. This does happen during ecological succession on a glacial moraine, but not for several centuries. Remember that spruce trees are unlikely to be a pioneer species.");
			
				p.addAnswer(3, "Low nitrogen content causes many plants to have yellow leaves.",
				true,
				"Correct. Almost all the pioneer species begin the succession with very poor growth and yellow leaves due to inadequate nitrogen supply.");
			
				p.addAnswer(4, "Alder forms dense thickets up to 9-meters-tall.",
				false,
				"No. This does occur, but alder are not pioneer species.");
			
				p.addAnswer(5, "Bare soil is acidic due to the carbonate compounds in the parent rocks.",
				false,
				"No. The carbonate compounds in parent rocks would make the bare soil basic, not acidic.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 337087;


		
		

		
			
			p.question = "_____ views a community as the chance assemblage of organisms with similar abiotic needs. (<script type=\"text/javascript\">ebook(\'5403\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "The niche concept",
				false,
				"No. A niche refers to a population\'s interactions with both the biotic and abiotic components of its ecosystem.");
			
				p.addAnswer(2, "H. A. Gleason",
				true,
				"Correct. H.A. Gleason\'s hypothesis of community structure.");
			
				p.addAnswer(3, "Species richness",
				false,
				"No. This term refers to the number of species found in a particular community.");
			
				p.addAnswer(4, "Commensalism",
				false,
				"No. Commensalism describes a relationship between two species in which one benefits and the other is not significantly affected.");
			
				p.addAnswer(5, "F. E. Clements\'s hypothesis",
				false,
				"No. According to Clements\'s hypothesis, assemblages of organisms that must interact with each other form a single functional unit: the community.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 337088;


		
		

		
			
			p.question = "What are two key factors in species richness equatorial-polar gradients? (<script type=\"text/javascript\">ebook(\'5404\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "length of seasons and water availability",
				false,
				"No. This answer is too specific. Consider what the length of seasons, especially the length of the growing season, affects. Also consider that water availability is only one of several important climatic factors.");
			
				p.addAnswer(2, "evolutionary history and climate",
				true,
				"Correct. Over time, species diversity may increase in a community because more speciation events have occurred. Tropical communities are generally older than polar communities. The climatic factors of solar energy input and water availability are primary causes of the latitudinal gradient in biodiversity.");
			
				p.addAnswer(3, "altitude and evolutionary history",
				false,
				"No. Evolutionary history is one key factor. Altitude does affect the second key factor, climate.");
			
				p.addAnswer(4, "evapotranspiration and temperature",
				false,
				"No. Both of these choices relate to the key factor <i>climate</i>. Evapotranspiration is the evaporation of water from soil plus the transpiration from leaves. However, neither evapotranspiration nor temperature account for the time that species have had to develop in certain regions of the world.");
			
				p.addAnswer(5, "solar radiation and water availability",
				false,
				"No. Both of these are climatic factors. Evolutionary history also is a key factor.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 337089;


		
		

		
			
			p.question = "When equilibrium is reached on an island, _____. (<script type=\"text/javascript\">ebook(\'5404\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the number of organisms does not change",
				false,
				"No. Equilibrium refers to species number, not number of individuals.");
			
				p.addAnswer(2, "ecological disturbance is minimized",
				false,
				"No. Disturbance is not considered in the hypothesis. Different levels of disturbance can affect species numbers.");
			
				p.addAnswer(3, "the rate of species immigration will equal the rate of species extinction",
				true,
				"Correct. This is correlated with island size and distance from the mainland.");
			
				p.addAnswer(4, "the food web will be highly stable",
				false,
				"No. Food webs emerge from trophic interactions that are not related to island biogeography.");
			
				p.addAnswer(5, "extinction will cease",
				false,
				"No. Species number can remain the same, even in the face of extinction, as long as immigration continues.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 337090;


		
		

		
			
			p.question = "What happens to the number of species in a community as the area of that community increases? (<script type=\"text/javascript\">ebook(\'5404\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the number of species does not change",
				false,
				"No. Because of increasing geographic area, there will be a corresponding addition of habitats.  This addition of habitats will lead to an increase in the number of species present.");
			
				p.addAnswer(2, "the number of species drops",
				false,
				"No. Because of increasing geographic area, there will be a corresponding addition of habitats.  This addition of habitats will lead to an increase in the number of species present.");
			
				p.addAnswer(3, "the number of species increases",
				true,
				"Correct. The larger the area, the greater the number of species present");
			
				p.addAnswer(4, "the area of the community is not involved in determining the number of species present",
				false,
				"No. Geographic area does influence the number of species present.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the answers is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 337091;


		
		

		
			
			p.question = "The potential evapotranspiration is determined by ______. (<script type=\"text/javascript\">ebook(\'5404\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "wind",
				false,
				"No.  Wind is not one of the largest influences on potential evapotranspiration.");
			
				p.addAnswer(2, "soil type",
				false,
				"No. Soil type is not one of the largest influences on potential evapotranspiration.");
			
				p.addAnswer(3, "slope",
				false,
				"No.  Slope is not one of the largest influences on potential evapotranspiration.");
			
				p.addAnswer(4, "Solar radiation",
				true,
				"Correct.  Solar radiation and temperature are the two primary influences on potential evapotranspiration.");
			
				p.addAnswer(5, "season",
				false,
				"No. Season is not one of the largest influences on potential evapotranspiration.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 337092;


		
		

		
			
			p.question = "Which of the following is the definition of a pathogen? (<script type=\"text/javascript\">ebook(\'5405\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "a group of populations living in close enough proximity to interact regularly",
				false,
				"No. This is the definition of a community.");
			
				p.addAnswer(2, "a disease-causing microorganism",
				true,
				"Correct.  Pathogens include viruses, viroids, and prions, too.");
			
				p.addAnswer(3, "a species that kills and eats another species",
				false,
				"No.  This is the definition of a predator.");
			
				p.addAnswer(4, "a species that is killed and eaten by another",
				false,
				"No. This is the definition of prey.");
			
				p.addAnswer(5, "a type of interspecific interaction that benefits both species",
				false,
				"No. This is the definition of a mutualism.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 337093;


		
		

		
			
			p.question = "What is a zoonotic pathogen? (<script type=\"text/javascript\">ebook(\'5405\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "a pathogen that infects many species",
				false,
				"No. While zoonotic pathogens do infect many species, they specifically infect humans, too.");
			
				p.addAnswer(2, "a pathogen that can be controlled with antibiotics",
				false,
				"No. Antibiotics control only bacterial pathogens.");
			
				p.addAnswer(3, "a pathogen that is transferred from another species into humans",
				true,
				"Correct. Transfer can be direct or through a vector.");
			
				p.addAnswer(4, "a pathogen that only infects one species",
				false,
				"No. Zoonotic pathogens infect more than one species (at least one of which is humans).");
			
				p.addAnswer(5, "an easily treatable pathogen",
				false,
				"No. Many modern zoonotic diseases are not easily treatable: mad-cow and hantavirus, for example.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

