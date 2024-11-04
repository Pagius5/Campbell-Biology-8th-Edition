

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "52: An Introduction to Ecology and the Biosphere 52: An Introduction to Ecology and the Biosphere > Practice Test";
	ak.quiz_loc_with_commas = "52: An Introduction to Ecology and the Biosphere 52: An Introduction to Ecology and the Biosphere, Practice Test";
	ak.quiz_title = "Practice Test";

	
		ak.help_url = "../../placeholders/help_placeholder.html";
	
	ak.essay_total = 0;
	ak.pair_problem_total = 0;
	ak.pair_total = 0;
	ak.problem_total = 33;
	ak.non_essay_total = 33;
	ak.scored_item_total = 33;

	
	
	


	
	ak.copyright_date = "2008";
	ak.brandname = "Pearson Benjamin Cummings";
	ak.legal = "../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.pearsoned.com%2Flegal%2Findex.htm";


	// Loop over all problems
	
	
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336962;


		
		

		
			
			p.question = "An ecologist might conduct research to answer which of the following questions? (<script type=\"text/javascript\">ebook(\'5201\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "How does the uneven heating of Earth\'s surface cause the movement of air and water masses?",
				false,
				"No. This question refers to no living organisms. An atmospheric scientist might attempt to answer this question.");
			
				p.addAnswer(2, "How do genes specify protein construction?",
				false,
				"No. This question does not consider the interactions of organisms and their environments. A molecular biologist might attempt to answer this question.");
			
				p.addAnswer(3, "How are different species of fish related (in an evolutionary sense) to each other?",
				false,
				"No. This question does not consider the interactions of organisms and their environments. A systematist might attempt to answer this question.");
			
				p.addAnswer(4, "How does caffeine affect the transmission of nerve impulses in humans?",
				false,
				"No. This question does not consider the interactions of organisms and their environments. A physiologist might attempt to answer this question.");
			
				p.addAnswer(5, "How do tapeworms adapt to life in the human intestine?",
				true,
				"Correct. This involves the study of a population of organisms (tapeworms) and their environment (the intestine).");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336963;


		
		

		
			
			p.question = "The sum of all Earth\'s ecosystems is called the _____. (<script type=\"text/javascript\">ebook(\'5201\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "stratosphere",
				false,
				"No. The stratosphere is one of the layers of Earth\'s atmosphere.");
			
				p.addAnswer(2, "lithosphere",
				false,
				"No. The lithosphere is Earth\'s rock layer.");
			
				p.addAnswer(3, "biosphere",
				true,
				"Correct. The biosphere is the global ecosystem&#151;the sum of all the planet\'s ecosystems.");
			
				p.addAnswer(4, "hydrosphere",
				false,
				"No. The hydrosphere refers to Earth\'s water.");
			
				p.addAnswer(5, "troposphere",
				false,
				"No. The troposphere is one of the layers of Earth\'s atmosphere.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336964;


		
		

		
			
			p.question = "An immature frog (a tadpole) lives in a pond or lake. However, the adult frog possesses special adaptations that permit it to survive in a terrestrial environment. These special adaptations _____. (<script type=\"text/javascript\">ebook(\'5201\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "help prevent the adult frog\'s body from drying out",
				true,
				"Correct. High temperatures and wind conspire to cause terrestrial organisms to lose water, which is essential to all living things. An adult frog has many adaptations, such as a watertight skin, that retard water loss.");
			
				p.addAnswer(2, "maximize body temperature",
				false,
				"No. A sufficiently high body temperature is necessary to maintain metabolic function. However, excessive temperatures may destroy metabolic enzymes and increase water loss through evaporation.");
			
				p.addAnswer(3, "permit the adult frog to maintain its internal water balance given the solute concentration of its hypotonic surroundings",
				false,
				"No. A terrestrial organism has little concern about its body gaining too much water from its surroundings.");
			
				p.addAnswer(4, "maximize the rate of water loss from its body",
				false,
				"No. Water, which is essential to all living things, is scarce in terrestrial environments. An adult frog has adaptations that help it to minimize water loss.");
			
				p.addAnswer(5, "maximize the interception of solar energy",
				false,
				"No. Some exposure to solar energy is important in helping the adult frog to maintain a satisfactory body temperature (some solar energy is converted to heat). However, excessive exposure may lead to a dangerously high body temperature.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336965;


		
		

		
			
			p.question = "The warming of the Earth is a(n) ______ effect. People are worried that it will have a(n) _______ effect, perhaps causing the extinction of a number of species. (<script type=\"text/javascript\">ebook(\'5201\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "ecological; evolutionary",
				true,
				"Correct. When the environment changes (ecological effect), organisms that were well-adapted to the former environment may struggle to survive in the new environment (evolutionary effect).");
			
				p.addAnswer(2, "abiotic; dispersal",
				false,
				"No. Dispersal may be an issue as the climate changes, but an organism\'s ability to disperse is part of its evolutionary adaptability.");
			
				p.addAnswer(3, "evolutionary; biotic",
				false,
				"No. Climate change is not an evolutionary effect.");
			
				p.addAnswer(4, "ecological; dispersal",
				false,
				"No. Dispersal may be an issue as the climate changes, but an organism\'s ability to disperse is part of its evolutionary adaptability.");
			
				p.addAnswer(5, "biotic; abiotic",
				false,
				"No. Climate change is not a biotic effect, and extinction is not an abiotic effect.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336966;


		
		

		
			
			p.question = "In a rather infamous case of species transplantation, starlings were introduced into North America from Europe in 1890 by an eccentric Shakespeare fan. While the actual range of starlings was originally in the eastern hemisphere, it is clear that North America was part of its _______ range. (<script type=\"text/javascript\">ebook(\'5201\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "biotic",
				false,
				"No. This term is not used to refer to an organism\'s range.");
			
				p.addAnswer(2, "potential",
				true,
				"Correct. Starlings are very successful in North America, so North America has always been part of the starling\'s potential range. It needed some help to disperse.");
			
				p.addAnswer(3, "biogeographical",
				false,
				"No. This term is not used to refer to an organism\'s range.");
			
				p.addAnswer(4, "natural",
				false,
				"No. This term is not used to refer to an organism\'s range.");
			
				p.addAnswer(5, "ecological",
				false,
				"No. This term is not used to refer to an organism\'s range.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336967;


		
		

		
			
			p.question = "Temperature, precipitation, sunlight, and wind are the major components of ______ (<script type=\"text/javascript\">ebook(\'5202\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "biotic factors",
				false,
				"No. These are all abiotic factors.");
			
				p.addAnswer(2, "biomes",
				false,
				"No. Biomes consist of both abiotic factors such as the ones listed here as well as communities of organisms.");
			
				p.addAnswer(3, "dispersal",
				false,
				"No. These are not the major components of dispersal.");
			
				p.addAnswer(4, "climate",
				true,
				"Correct. These factors are the major components of climate.");
			
				p.addAnswer(5, "ecosystems",
				false,
				"No. Ecosystems consist of both abiotic factors such as those listed here and biotic factors such as communities of organisms.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336968;


		
		

		
			
			p.question = "Bodies of water tend to moderate climate because ________. (<script type=\"text/javascript\">ebook(\'5202\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "The hydrogen bonding in water gives it a high specific heat.",
				true,
				"Correct. Water\'s high specific heat prevents it from changing temperature rapidly. Because there are such large bodies of water on Earth that do not change temperature as quickly as air or land, water moderates climate.");
			
				p.addAnswer(2, "Water has a high heat of vaporization.",
				false,
				"No. Although water does have a high heat of vaporization, it is more useful in cooling organisms than in moderating climate.");
			
				p.addAnswer(3, "The hydrogen bonding in water causes it to be cohesive.",
				false,
				"No. Hydrogen bonding does give water cohesiveness, but that property does not moderate climate.");
			
				p.addAnswer(4, "Water is always cooler than the nearby landmasses.",
				false,
				"No. This is not true.");
			
				p.addAnswer(5, "all of the above",
				false,
				"No. Only one of the answers is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336969;


		
		

		
			
			p.question = "Why are many of the world\'s deserts located at latitudes of between 30&#176;N and 30&#176;S? (<script type=\"text/javascript\">ebook(\'5202\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Earth is tilted on its axis.",
				false,
				"No. This explains why there are seasons.");
			
				p.addAnswer(2, "The greatest amount of solar energy per unit area is absorbed by Earth between 30&#176;N latitude and 30&#176;S latitude.",
				false,
				"No. The greatest amount of solar energy per unit area is absorbed at the equator.");
			
				p.addAnswer(3, "Dry air, originating at the equator, descends toward Earth\'s surface between 30&#176;N latitude and 30&#176;S latitude.",
				true,
				"Correct. The lack of water-laden air masses between 30&#176;N latitude and 30&#176;S latitude is responsible for desert conditions.");
			
				p.addAnswer(4, "Warm air rises between 30&#176;N latitude and 30&#176;S latitude and spreads toward the poles and the equator.",
				false,
				"No. Warm air rises at the equator.");
			
				p.addAnswer(5, "Earth is a rotating sphere.",
				false,
				"No. This affects the directions of the trade winds and westerlies.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336970;


		
		

		
			
			p.question = "Earth\'s biosphere is not completely self-contained (or closed) because _____. (<script type=\"text/javascript\">ebook(\'5202\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "humans pollute the atmosphere and bodies of water",
				false,
				"No. Pollutants originate and remain within the biosphere.");
			
				p.addAnswer(2, "plants, algae, and photosynthetic bacteria obtain energy from sunlight, and heat escapes from the biosphere into space",
				true,
				"Correct. Solar energy represents an input to the biosphere from outside, and heat escape represents a loss from the biosphere.");
			
				p.addAnswer(3, "the precipitation that falls on the interior of western North America is derived from the Pacific Ocean",
				false,
				"No. All precipitation that occurs within the biosphere originates from water that has evaporated from bodies of water located within the biosphere.");
			
				p.addAnswer(4, "bacteria that live on snowy mountains receive nutrients blown to them by winds",
				false,
				"No. These nutrients originated elsewhere (the lowlands) but within the biosphere.");
			
				p.addAnswer(5, "sulfur bacteria that live near hydrothermal vents deep in the oceans use CO<sub>2</sub> contained in seawater to make organic compounds",
				false,
				"No. The CO<sub>2</sub> originated elsewhere (from the respiratory activities of ocean-dwelling organisms) but within the biosphere.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336971;


		
		

		
			
			p.question = "When people speak of the \"rain shadow\" of the California Coast Range, they are referring to _____. (<script type=\"text/javascript\">ebook(\'5202\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the shadow cast by the mist and clouds that hover above the crest of the range",
				false,
				"No. Rain shadows occur on the leeward side of mountains.");
			
				p.addAnswer(2, "the forested condition on the eastern flank of the range compared with the western flank",
				false,
				"No. While rain shadows affect vegetation, the term \"rain shadow\" does not directly refer to vegetation.");
			
				p.addAnswer(3, "the scarcity of rain on the eastern flank and adjacent lowlands compared with the western flank",
				true,
				"Correct. On the leeward side of a mountain, cooler dry air descends, absorbing moisture and producing a rain shadow, an area of low precipitation.");
			
				p.addAnswer(4, "the dark-colored chaparral vegetation that grows on the eastern flank",
				false,
				"No. The term \"rain shadow\" itself does not refer to the color of vegetation.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336972;


		
		

		
			
			p.question = "Wet and dry seasons in tropical deciduous forests are ultimately caused by _____. (<script type=\"text/javascript\">ebook(\'5202\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "changes in day length",
				false,
				"No. Changes in day length have a greater impact on temperature.");
			
				p.addAnswer(2, "microclimates",
				false,
				"No. Microclimates exist on a much smaller scale than that of a forest.");
			
				p.addAnswer(3, "proximity to bodies of water",
				false,
				"No. While proximity to bodies of water has a major effect on climate, it does not necessarily cause wet and dry seasons.");
			
				p.addAnswer(4, "upwelling of cold ocean water",
				false,
				"No. This has much more of an effect on the nutrients available to organisms in the ocean.");
			
				p.addAnswer(5, "the tilt of the Earth",
				true,
				"Correct. The tilt of the Earth causes seasonality. When different parts of the Earth are receiving greater or lesser amounts of solar radiation, the belts of wet and dry air on either side of the equator move north or south, causing wet or dry seasons in the tropics.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336973;


		
		

		
			
			p.question = "Which one of the following statements about biomes is correct? (<script type=\"text/javascript\">ebook(\'5203\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Each biome type occurs on every continent.",
				false,
				"No. Consider that tropical forests are not found in Antarctica.");
			
				p.addAnswer(2, "The major factors affecting the distribution of biomes are temperature and precipitation.",
				true,
				"Correct. Annual means for temperature and rainfall are reasonably well correlated with the biomes found in different regions.");
			
				p.addAnswer(3, "Most biomes are characterized by unique groups of particular species of plants and animals.",
				false,
				"No. Biomes of the same type do not necessarily share the same assemblage of plant and animal species; however, the species found in each are likely to have significant similarities.");
			
				p.addAnswer(4, "Most biomes are unaffected by human activity.",
				false,
				"No. At this point in time most of the planet has been affected either directly or indirectly by human activity.");
			
				p.addAnswer(5, "Each continent is home to a biome not found elsewhere on Earth.",
				false,
				"No. For example, the desert biome is found on the African, Asian, North American, and South American continents; the situation is similar for many of the other biomes.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336974;


		
		

		
			
			p.question = "Communities that exist in the aphotic zone ultimately depend on food manufactured by chemoautotrophic bacteria or _____. (<script type=\"text/javascript\">ebook(\'5203\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "algae and cyanobacteria that also live in the aphotic zone",
				false,
				"No. Algae and cyanobacteria, which are photosynthetic, don\'t live in the aphotic zone.");
			
				p.addAnswer(2, "algae and cyanobacteria that live in the photic zone",
				true,
				"Correct. Organic matter, originating in the photic zone as a result of the activities of these photosynthesizing organisms, either sinks into the aphotic zone or is transported there by other organisms.");
			
				p.addAnswer(3, "decomposers",
				false,
				"No. These animals, bacteria, and fungi that commonly live in the aphotic zone can\'t manufacture new food molecules (they\'re not photosynthetic or chemoautotrophic); they use only existing organic compounds.");
			
				p.addAnswer(4, "scavengers",
				false,
				"No. These sea urchins, polychaete worms, and many species of fish that commonly live in the aphotic zone can\'t manufacture new food molecules (they\'re not photosynthetic or chemoautotrophic); they use only existing organic compounds.");
			
				p.addAnswer(5, "minerals found on the ocean bottom",
				false,
				"No. Minerals don\'t contain organic compounds.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336975;


		
		

		
			
			p.question = "After nutrient enrichment from sewage contamination, a lake often becomes inhospitable to fish. Why? (<script type=\"text/javascript\">ebook(\'5203\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Nutrient input to a lake causes the explosive growth of algal and cyanobacterial populations. This reduces the penetration of light into the lake, the water temperature falls, and eventually the fish population dies.",
				false,
				"No. The reduction in light penetration precedes fish death, but it is not the cause.");
			
				p.addAnswer(2, "Nutrient input to a lake poisons the fish.",
				false,
				"No. The nutrients contained in sewage, especially nitrogen and phosphorus, act as fertilizers for algae and cyanobacteria, but they have no directly harmful effects on fish.");
			
				p.addAnswer(3, "Nutrient input to a lake causes the explosive growth of algal and cyanobacterial populations. Decomposition of dead algae and cyanobacteria by bacteria results in the depletion of oxygen in the water, which leads to the death of fish.",
				true,
				"Correct. A lack of oxygen is the ultimate cause of fish death in an example such as this. The lake may become essentially anaerobic.");
			
				p.addAnswer(4, "Nutrient input to a lake poisons the organisms that fish eat.",
				false,
				"No. The nutrients contained in sewage, especially nitrogen and phosphorus, act as fertilizers for algae, but they have no directly harmful effects on the organisms (for example, insects and other fish) that the fish eat.");
			
				p.addAnswer(5, "Nutrient input causes the death of algae and cyanobacteria and, thus, the ultimate sources of organic compounds in a lake ecosystem. Eventually, this reduces the availability of food for fish within the lake, leading to their death.",
				false,
				"No. Nutrient input to a lake causes the explosive growth of algal and cyanobacterial populations.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336976;


		
		

		
			
			p.question = "Plankton consists of _____. (<script type=\"text/javascript\">ebook(\'5203\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "algae, cyanobacteria, and animals that drift near the surfaces of oceans only",
				false,
				"No. Plankton consists of drifting algae and cyanobacteria (phytoplankton) and animals (zooplankton) in oceans or in freshwater environments.");
			
				p.addAnswer(2, "photosynthetic organisms that drift near the surfaces of aquatic biomes",
				false,
				"No. Plankton consists of drifting (nonphotosynthetic) animals (zooplankton) as well as (photosynthetic) algae and cyanobacteria (phytoplankton).");
			
				p.addAnswer(3, "algae, cyanobacteria, and animals that belong to the benthic communities of oceans, lakes, ponds, rivers, and streams",
				false,
				"No. Plankton consists of drifting, not benthic (bottom-dwelling), organisms.");
			
				p.addAnswer(4, "algae, cyanobacteria, and animals that drift near the surfaces of oceans, lakes, ponds, rivers, and streams",
				true,
				"Correct. Plankton consists of drifting algae and cyanobacteria (phytoplankton) and animals (zooplankton).");
			
				p.addAnswer(5, "algae, cyanobacteria, and animals that occupy the aphotic zones of oceans, lakes, and ponds",
				false,
				"No. Phytoplankton cannot live in the dark aphotic zone. Besides, plankton drift near the surface, while the aphotic zone usually occurs in deeper waters. Also, rivers and streams have plankton communities, but they usually lack aphotic zones.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336977;


		
		

		
			
			p.question = "Which one of the following is characteristic of oligotrophic lakes? (<script type=\"text/javascript\">ebook(\'5203\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "seasonal O<sub>2</sub> depletion",
				false,
				"No. Oligotrophic lakes contain oxygen-rich waters.");
			
				p.addAnswer(2, "summer turnover",
				false,
				"No. Turnovers occur in the spring and fall.");
			
				p.addAnswer(3, "frequent algal blooms",
				false,
				"No. Oligotrophic lakes are nutrient-poor and algal blooms require nutrients.");
			
				p.addAnswer(4, "few littoral plants and a low density of phytoplankton",
				true,
				"Correct. Oligotrophic lakes are deep and nutrient-poor, and the plankton in the limnetic zone are not very productive.");
			
				p.addAnswer(5, "animals that are tolerant of low-oxygen conditions",
				false,
				"No. Oligotrophic lakes contain oxygen-rich waters.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336978;


		
		

		
			
			p.question = "Rooted plants are found only in the _____ zone of a lake. (<script type=\"text/javascript\">ebook(\'5203\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "pelagic",
				false,
				"No. The pelagic is the open ocean, a difficult place for plants to take root.");
			
				p.addAnswer(2, "thermocline",
				false,
				"No. This refers to a narrow stratum of temperature change.");
			
				p.addAnswer(3, "limnetic",
				false,
				"No. This is the open region of a lake, a difficult place for plants to take root.");
			
				p.addAnswer(4, "littoral",
				true,
				"Correct. Rooted and floating aquatic plants flourish in the littoral zone, the shallow, well-lit waters close to shore.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336979;


		
		

		
			
			p.question = "Below the photic zone of the ocean, _____. (<script type=\"text/javascript\">ebook(\'5203\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "phytoplankton outnumber zooplankton",
				false,
				"No. Phytoplankton require sunlight for photosynthesis, which is not found below the photic zone.");
			
				p.addAnswer(2, "plants are rooted in the sandy bottom",
				false,
				"No. Plants are not rooted in the aphotic zone.");
			
				p.addAnswer(3, "food chains are detritus-based",
				true,
				"Correct. Below the photic zone is the aphotic zone, where little light penetrates and little photosynthesis takes place. Detritus \"rains\" down from the productive surface waters of the photic zone.");
			
				p.addAnswer(4, "primary producers capture the sun\'s energy, which is then passed up the energy pyramid",
				false,
				"No. Primary producers require light, which is not found below the photic zone.");
			
				p.addAnswer(5, "all the organisms are either floating or free-swimming",
				false,
				"No. Attached organisms are found in the aphotic zone.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336980;


		
		

		
			
			p.question = "What is the importance of turnover in temperate lakes? (<script type=\"text/javascript\">ebook(\'5203\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "It brings oxygen-rich water to the bottom, and nutrient-rich water to the surface.",
				true,
				"Correct. Turnover redistributes nutrients and oxygen to all levels of the lake.");
			
				p.addAnswer(2, "It helps to set up a thermocline in the lake.",
				false,
				"No. Turnover disturbs the thermocline in the lake because it redistributes warm and cold water.");
			
				p.addAnswer(3, "It brings benthic organisms to the surface where they have access to more light and oxygen.",
				false,
				"No. Benthic organisms remain on the lake bottom, but turnover does bring more oxygen to these organisms.");
			
				p.addAnswer(4, "It occurs constantly during the summer, giving the lakes a murky appearance.",
				false,
				"No. Turnover occurs in the spring and fall.");
			
				p.addAnswer(5, "It changes the relative positions of the photic and aphotic zones.",
				false,
				"No. The positions of the photic and aphotic zones are determined by the sun.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336981;


		
		

		
			
			p.question = "A climograph shows the mean temperature and precipitation values that support different biomes. What information that would help predict what biome should be found in a particular range is missing? (<script type=\"text/javascript\">ebook(\'5204\',\'quiz\')</script>) 	";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "latitude and longitude",
				false,
				"No. Latitude and longitude affect the distribution of biomes, but not as much as temperature and precipitation.");
			
				p.addAnswer(2, "day length",
				false,
				"No. Day length is not as important as temperature and precipitation.");
			
				p.addAnswer(3, "the pattern of climatic variation, including seasonal differences",
				true,
				"Correct. A climograph shows mean annual temperature and precipitation. Different biomes will occur in areas where the rainfall is evenly distributed throughout the year, for instance, as opposed to concentrated in a wet season.");
			
				p.addAnswer(4, "microclimate",
				false,
				"No. Microclimate is not very useful in predicting the range of a biome.");
			
				p.addAnswer(5, "dominant plant species",
				false,
				"No. The dominant plant species are usually determined by the temperature and precipitation.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336982;


		
		

		
			
			p.question = "Different species that inhabit the same type of biome, but occur in widely separated geographic regions, often appear similar due to _____. (<script type=\"text/javascript\">ebook(\'5204\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "their close evolutionary relationships",
				false,
				"No. The species in the different regions have similar traits, but not because they are closely related evolutionarily.");
			
				p.addAnswer(2, "convergent evolution",
				true,
				"Correct. The species in the different regions have similar traits that evolved independently in response to similar environmental conditions.");
			
				p.addAnswer(3, "the occurrence of the same sets of species within a biome, wherever it is found",
				false,
				"No. Similar, but not the same, species occur in different regions within the same biome.");
			
				p.addAnswer(4, "recent common ancestry",
				false,
				"No. The species in the different regions have similar traits, but not because they share a recent common ancestor.");
			
				p.addAnswer(5, "chance",
				false,
				"No. The species in the different regions have similar traits that evolved in response to similar environmental conditions, and thus selection, not chance.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336983;


		
		

		
			
			p.question = "What helps produce the patchiness found in most biomes? (<script type=\"text/javascript\">ebook(\'5204\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "climate change",
				false,
				"No. Patchiness is usually caused by disturbance.");
			
				p.addAnswer(2, "layered structure",
				false,
				"No. Patchiness is usually caused by disturbance.");
			
				p.addAnswer(3, "convergent evolution",
				false,
				"No. Patchiness is usually caused by disturbance.");
			
				p.addAnswer(4, "ecotones",
				false,
				"No. Ecotones are the gradational boundaries between biomes.");
			
				p.addAnswer(5, "disturbance",
				true,
				"Correct. Disturbances, such as storms or fire, allow different communities to flourish side by side and produce patchiness within a biome.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336984;


		
		

		
			
			p.question = "Permafrost is characteristic of the _____. (<script type=\"text/javascript\">ebook(\'5204\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "tundra",
				true,
				"Correct. Permafrost (permanently frozen subsoil), bitterly cold temperatures, and high winds are responsible for the absence of trees and tall plants in the arctic tundra.");
			
				p.addAnswer(2, "temperate forest",
				false,
				"No. Consider that permafrost does not undergo seasonal thawing.");
			
				p.addAnswer(3, "taiga",
				false,
				"No. But in terms of the location of the biomes you are close.");
			
				p.addAnswer(4, "desert",
				false,
				"No. Permafrost is a permanently frozen stratum.");
			
				p.addAnswer(5, "tropical forest",
				false,
				"No. Permafrost is a permanently frozen stratum.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336985;


		
		

		
			
			p.question = "Which biome is the largest terrestrial biome on Earth? (<script type=\"text/javascript\">ebook(\'5204\',\'quiz\')</script>)";
			p.incorrect_any_expl = "No. The biome that extends across northern North America and Eurasia to the southern border of the arctic tundra is also the largest terrestrial biome.";
			p.incorrect_any_expl_flag = 1;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "temperate broadleaf forest",
				false,
				"");
			
				p.addAnswer(2, "coniferous forest",
				true,
				"Correct. This is the biome that is the largest terrestrial biome.");
			
				p.addAnswer(3, "savanna",
				false,
				"");
			
				p.addAnswer(4, "desert",
				false,
				"");
			
				p.addAnswer(5, "tropical forest",
				false,
				"");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336986;


		
		

		
			
			p.question = "Fringe wetlands develop _____. (<script type=\"text/javascript\">ebook(\'5204\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "along shallow and periodically flooded banks of rivers and streams",
				false,
				"No. This describes riverine wetlands.");
			
				p.addAnswer(2, "along the coasts of lakes where water flows back and forth because of falling and rising lake levels",
				false,
				"No. This is a correct response, but there is a better answer.");
			
				p.addAnswer(3, "along the coasts of seas where water flows back and forth because of tidal action",
				false,
				"No. This is a correct response, but there is a better answer.");
			
				p.addAnswer(4, "both b and c",
				true,
				"Correct. Fringe wetlands are found along the edges of large lakes and seas.");
			
				p.addAnswer(5, "all of the above",
				false,
				"No. The first answer describes riverine wetlands.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336987;


		
		

		
			
			p.question = "Which one of the following choices correctly pairs a terrestrial biome with some of its characteristics? (<script type=\"text/javascript\">ebook(\'5204\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "temperate broadleaf forest; cold winters, wet and dry seasons",
				false,
				"No. Temperate broadleaf forests do not have wet and dry seasons.");
			
				p.addAnswer(2, "grassland; moderate winter temperatures, dry summers",
				false,
				"No. Grasslands have cold winters.");
			
				p.addAnswer(3, "taiga; very cold winters, short growing season",
				true,
				"Correct. This accurately describes conditions in the taiga.");
			
				p.addAnswer(4, "savanna; long, cold winters, abundant precipitation throughout the year",
				false,
				"No. The savanna has distinct wet and dry seasons.");
			
				p.addAnswer(5, "tundra; very cold winters, low summer productivity",
				false,
				"No. The tundra has very high summer productivity.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336988;


		
		

		
			
			p.question = "Which one of the following biomes is dominated by gymnosperm or conifer trees (pines, firs, spruces)? (<script type=\"text/javascript\">ebook(\'5204\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "taiga",
				true,
				"Correct. A northern coniferous forest, or taiga, supports cone-bearing trees, such as pine, spruce, fir, and hemlock.");
			
				p.addAnswer(2, "tundra",
				false,
				"No. Large trees do not grow in the tundra.");
			
				p.addAnswer(3, "desert",
				false,
				"No. Deserts lack sufficient water to support such trees.");
			
				p.addAnswer(4, "broadleaf forest",
				false,
				"No. Deciduous trees, which are found in broadleaf forests, shed their leaves seasonally; many conifers do not.");
			
				p.addAnswer(5, "tropical rain forest",
				false,
				"No. Conifers are found in regions characterized by cooler temperatures than those of tropical rain forests.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336989;


		
		

		
			
			p.question = "Of these biomes, vertical stratification (layers of plants) is most pronounced in the _____. (<script type=\"text/javascript\">ebook(\'5204\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "grassland",
				false,
				"No. Grasses are not known for growing to great heights; there is some stratification, but certainly not to the degree of tropical rain forests.");
			
				p.addAnswer(2, "tundra",
				false,
				"No. Tundra lacks tall plants and thus lacks significant pronounced vertical stratification.");
			
				p.addAnswer(3, "desert",
				false,
				"No. Although some cacti can be rather tall, vertical stratification is more pronounced in another of the choices.");
			
				p.addAnswer(4, "tropical rain forest",
				true,
				"Correct. Tropical rain forests have pronounced vertical stratification, which provides varied habitats and abundant rainfall, both of which favor a great diversity of species.");
			
				p.addAnswer(5, "savanna",
				false,
				"No. Savanna is characterized primarily by grasses and scattered trees, and it thus lacks significant pronounced vertical stratification.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336990;


		
		

		
			
			p.question = "What could a climograph be used for? (<script type=\"text/javascript\">ebook(\'5204\',\'quiz\')</script>)";
			p.incorrect_any_expl = "No. Climographs plot the temperature and precipitation that falls in a particular region.";
			p.incorrect_any_expl_flag = 1;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "to compare the temperature and altitude of different biomes",
				false,
				"");
			
				p.addAnswer(2, "to compare the latitude and precipitation of different biomes",
				false,
				"");
			
				p.addAnswer(3, "to compare the temperature and precipitation of different biomes",
				true,
				"Correct. A climatograph is a plot of the temperature and precipitation in a particular region.");
			
				p.addAnswer(4, "to compare geographic range and diversity of organisms in different biomes",
				false,
				"");
			
				p.addAnswer(5, "to compare average wind speeds and precipitation of different biomes",
				false,
				"");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336991;


		
		

		
			
			p.question = "Which statement is true about the tundra? (<script type=\"text/javascript\">ebook(\'5204\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Tundra only exists in the Arctic.",
				false,
				"No. Tundra can exist in all latitudes. Alpine tundra is found on high mountaintops.");
			
				p.addAnswer(2, "Permafrost prevents much water from infiltrating the soil.",
				true,
				"Correct. The types of plants that can grow in tundra are limited because the top layer of soil is always frozen.");
			
				p.addAnswer(3, "Migratory birds leave the tundra during the summer to find warmer places to nest.",
				false,
				"No. Migratory birds may travel to the tundra in the summer to nest.");
			
				p.addAnswer(4, "Due to rich mineral content, agriculturists have recently focused their attention on the tundra.",
				false,
				"No. The tundra has received attention from individuals who have an interest in extracting minerals and oil from the soil.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336992;


		
		

		
			
			p.question = "Which choice below describes a feature of grassland that explains why its remnants are concentrated in arid regions of North America and central Asia? (<script type=\"text/javascript\">ebook(\'5204\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Grassland is often consumed by fire.",
				false,
				"No. This statement is correct, but grassland grasses recover from fire quickly. This does not explain why most grassland now exists in more arid areas.");
			
				p.addAnswer(2, "The soil is fertile and most grassland has been converted to farmland.",
				true,
				"Correct. The grassland in drier areas is less desirable for agricultural use.");
			
				p.addAnswer(3, "Large grazers, such as bison and wild horses, have depleted grassland.",
				false,
				"No. Grazing of large animals actually helps preserve grassland because it stops the growth of shrubs and trees.");
			
				p.addAnswer(4, "Woody shrubs and trees have taken over in areas that receive more precipitation.",
				false,
				"No. This is not the reason for the concentration of grassland in arid areas. Most of the grassland in other areas has been converted to farmland.");
			
				p.addAnswer(5, "Grassland has been found to be a good source of minerals and oil.",
				false,
				"No. This is true of tundra.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336993;


		
		

		
			
			p.question = "Which one of the following pairs of biomes is characterized by relatively simple food webs (low biological diversity)? (<script type=\"text/javascript\">ebook(\'5204\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "tundra and grassland",
				false,
				"No. However, this choice is partially correct.");
			
				p.addAnswer(2, "tundra and desert",
				true,
				"Correct. Sparse rainfall and extreme temperatures characterize these two biomes. Only specially adapted organisms can exist in these areas, and biodiversity is low, compared to some of the other biomes.");
			
				p.addAnswer(3, "desert and grassland",
				false,
				"No. However, this choice is partially correct.");
			
				p.addAnswer(4, "desert and broadleaf forest",
				false,
				"No. However, this choice is partially correct.");
			
				p.addAnswer(5, "taiga and savanna",
				false,
				"No. There are biomes that have lower levels of diversity than either taiga or savanna.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336994;


		
		

		
			
			p.question = "In which one of the following biomes would you expect decomposers to work most rapidly and efficiently? (<script type=\"text/javascript\">ebook(\'5204\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "tundra",
				false,
				"No. The tundra is cold, and decomposition occurs slowly in the cold.");
			
				p.addAnswer(2, "savanna",
				false,
				"No. There is another biome more favorable to rapid decomposition.");
			
				p.addAnswer(3, "desert",
				false,
				"No. Decomposition is enhanced by moisture, which the desert lacks.");
			
				p.addAnswer(4, "taiga",
				false,
				"No. There is another biome more favorable to rapid decomposition.");
			
				p.addAnswer(5, "tropical rain forest",
				true,
				"Correct. Tropical rain forest temperatures accommodate rapid rates of decomposition and thus quickly recycle nutrients from dead organisms back to living organisms.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

