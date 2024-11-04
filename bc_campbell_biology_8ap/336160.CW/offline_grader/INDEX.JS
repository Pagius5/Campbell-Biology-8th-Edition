

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "37: Plant Nutrition > Practice Test";
	ak.quiz_loc_with_commas = "37: Plant Nutrition, Practice Test";
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
		
		p.id = 336161;


		
		

		
			
			p.question = "The \"dustbowl\" of the 1930s resulted from _______ (<script type=\"text/javascript\">ebook(\'37OV\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the removal of the native grasses that held the soil in place and planting of agricultural crops",
				true,
				"Correct. Native grasses that had evolved in that area helped to hold the soil in place and could tolerate the climate extremes of the area. When these native plants were removed, soil erosion became a huge problem.");
			
				p.addAnswer(2, "high aluminum toxicity",
				false,
				"No. Aluminum toxicity is usually a problem in areas like the tropics with high rainfall. This was not a major factor in the dustbowl.");
			
				p.addAnswer(3, "the leaching of nutrients from the soil",
				false,
				"No. This was not a major problem in the dustbowl. The soil was fertile; it just wasn\'t held in place.");
			
				p.addAnswer(4, "subsidence caused by overpumping of aquifers for irrigation",
				false,
				"No. Overpumping of aquifers was not an issue in producing dustbowl conditions.");
			
				p.addAnswer(5, "salinization caused by poor irrigation practices",
				false,
				"No. Most farmers in that area did not irrigate.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336162;


		
		

		
			
			p.question = "Soil can easily become deficient in _____, because these ions are negatively charged and do not stick to negatively charged soil particles. (<script type=\"text/javascript\">ebook(\'3701\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "potassium",
				false,
				"No. K<sup>+</sup> is positively charged and is attracted to the negatively charged surfaces of soil particles.");
			
				p.addAnswer(2, "calcium",
				false,
				"No. Ca<sup>2+</sup> is positively charged and is attracted to the negatively charged surfaces of soil particles.");
			
				p.addAnswer(3, "magnesium",
				false,
				"No. Mg<sup>2+</sup> is positively charged and is attracted to the negatively charged surfaces of soil particles.");
			
				p.addAnswer(4, "nitrate",
				true,
				"Correct. NO<sub>3</sub><sup>-</sup> is negatively charged and not tightly bound to soil particles.");
			
				p.addAnswer(5, "ammonium",
				false,
				"No. NH<sub>4</sub><sup>+</sup> is positively charged and is attracted to the negatively charged surfaces of soil particles.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336163;


		
		

		
			
			p.question = "The particles in soil are important because they _____. (<script type=\"text/javascript\">ebook(\'3701\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "are composed of nitrogen needed by plants",
				false,
				"No. Roots do not absorb soil particles.");
			
				p.addAnswer(2, "eliminate spaces for air and facilitate drainage",
				false,
				"No. The elimination of air spaces would not facilitate drainage.");
			
				p.addAnswer(3, "fill spaces and keep oxygen out of the soil",
				false,
				"No. The arrangement of soil particles creates air spaces within the soil.");
			
				p.addAnswer(4, "are charged and hold ions needed by plants",
				true,
				"Correct. The surfaces of soil particles are negatively charged, and they attract and help retain positively charged minerals within the soil.");
			
				p.addAnswer(5, "supply humus needed by plants",
				false,
				"No. Humus is formed by the action of decomposers such as fungi.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336164;


		
		

		
			
			p.question = "Fertilizers are usually enriched in _____. (<script type=\"text/javascript\">ebook(\'3701\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "iron, manganese, and zinc",
				false,
				"No. Farm and garden soils are less likely to be deficient in these micronutrients than in other nutrients.");
			
				p.addAnswer(2, "calcium and boron",
				false,
				"No. Farm and garden soils are less likely to be deficient in these nutrients than in other nutrients.");
			
				p.addAnswer(3, "nitrogen, phosphorus, and potassium",
				true,
				"Correct. Farm and garden soils are most likely to be deficient in these macronutrients.");
			
				p.addAnswer(4, "molybdenum, copper, and magnesium",
				false,
				"No. Farm and garden soils are less likely to be deficient in these nutrients than in other nutrients.");
			
				p.addAnswer(5, "all essential nutrients",
				false,
				"No. While soil in agricultural and domestic use will become depleted of all minerals, not all minerals are depleted at the same rate and not all essential nutrients are obtained from soil.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336165;


		
		

		
			
			p.question = "Which of the following would be considered a sustainable agricultural practice? (<script type=\"text/javascript\">ebook(\'3701\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "flooding fields",
				false,
				"No. The practice of flooding fields wastes water through evaporation. Because of the scarcity of fresh water, this would not be considered a sustainable practice.");
			
				p.addAnswer(2, "drip irrigation",
				false,
				"No. Drip irrigation is a much more sustainable way of irrigating than flooding fields or spraying them with water, but there is a better answer.");
			
				p.addAnswer(3, "planting cover crops such as alfalfa",
				false,
				"No. Planting cover crops helps to hold topsoil in place and provides green manure, but there is a better answer.");
			
				p.addAnswer(4, "using large farming equipment in the fields",
				false,
				"No. Using large equipment for plowing and harvesting compacts the soil, leaving less pore space for water and oxygen.");
			
				p.addAnswer(5, "both b and c",
				true,
				"Correct. The use of drip irrigation conserves water resources, and planting cover crops reduces soil erosion and mitigates the need for chemical fertilizers.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336166;


		
		

		
			
			p.question = "What is the goal of phytoremediation? (<script type=\"text/javascript\">ebook(\'3701\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "to test whether an element is essential to a certain species of plant",
				false,
				"No. This is a goal of growing plants in a hydroponic culture.");
			
				p.addAnswer(2, "to replace lost minerals in soil",
				false,
				"No. This is the goal of fertilization.");
			
				p.addAnswer(3, "to clean contaminated sites by using plants that have the ability to extract and store soil pollutants",
				true,
				"Correct. Some plants can absorb and store pollutants at levels hundreds of times greater than other plants. Phytoremediation shows promise for cleaning up areas contaminated by smelters, mining operations, or nuclear testing.");
			
				p.addAnswer(4, "to grow crops such as alfalfa and wheat that provide good ground cover",
				false,
				"No. This is a method of slowing down erosion, but it is not related to phytoremediation.");
			
				p.addAnswer(5, "both b and c",
				false,
				"No. The third answer is correct. The second answer is a goal of fertilization.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336167;


		
		

		
			
			p.question = "Why do farmers need to be concerned with the pH level of soil? (<script type=\"text/javascript\">ebook(\'3701\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "The pH level of soil affects anion exchange and influences the chemical form of minerals.",
				false,
				"No. The pH level of soil affects cation exchange.");
			
				p.addAnswer(2, "The pH level of soil affects cation exchange and influences the chemical form of minerals.",
				true,
				"Correct. An essential element could be abundant, but plants may be starving for that element because it is bound too tightly to soil particles or is in a chemical form the plant cannot absorb.");
			
				p.addAnswer(3, "The pH level of soil affects water levels.",
				false,
				"No. The pH level of soil affects cation exchange.");
			
				p.addAnswer(4, "Plants may turn blue if the pH is too high.",
				false,
				"No. There is a certain \"smart\" plant that has been genetically engineered to turn blue when phosphorus levels become low.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the other answers is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336168;


		
		

		
			
			p.question = "At low soil pH levels (5 or less), what can happen? (<script type=\"text/javascript\">ebook(\'3701\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Cation exchange will be enhanced, causing the plants to grow faster.",
				false,
				"No. While slightly acidic soil facilitates cation exchange, low pH changes the bioavailability of certain nutrients.");
			
				p.addAnswer(2, "Plant roots are eaten away by the acidic soil.",
				false,
				"No. It would be a very extreme case of soil pH that could eat away at a plant\'s roots.");
			
				p.addAnswer(3, "Toxic aluminum ions become more available, stunting the plant\'s growth.",
				true,
				"Correct. Aluminum ions are not bioavailable above a pH of 5. At pH\'s below 5, however, they are readily absorbed by plants and have toxic effects.");
			
				p.addAnswer(4, "Absorption of negatively charged ions is enhanced, causing the plants to grow faster.",
				false,
				"No. Slightly acidic soil facilitates cation exchange, not anion exchange.");
			
				p.addAnswer(5, "Absorption of calcium is enhanced, but iron is unavailable.",
				false,
				"No. This situation occurs at a pH of 8.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336169;


		
		

		
			
			p.question = "Phytoremediation is showing promise as a sustainable, cost-effective way to decontaminate soil and water. In the case of a hyperaccumulater like <i>Thlaspi caerulescens</i>, however, what might be a drawback of the technology? (<script type=\"text/javascript\">ebook(\'3701\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "The toxic metals will stunt the plant\'s growth.",
				false,
				"No. <i>Thlaspi caerulescens</i> is a plant that can tolerate high levels of toxic metals, particularly zinc.");
			
				p.addAnswer(2, "The toxic metals will affect the other organisms in the soil",
				false,
				"No. This is not a drawback of the technology. This is the problem the technology is trying to solve.");
			
				p.addAnswer(3, "Herbivores that eat the plant may be poisoned.",
				false,
				"No. This is true, but there is more to it than that.");
			
				p.addAnswer(4, "Carnivores that eat the herbivores that eat the plant may be poisoned.",
				false,
				"No. This is true, but there is more to it than that.");
			
				p.addAnswer(5, "both c and d",
				true,
				"Correct. These plants may be effective in decontaminating the soil, but if they are eaten, they will contaminate the food chain.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336170;


		
		

		
			
			p.question = "The biological process that produces most of the dry weight of a plant is called _____. (<script type=\"text/javascript\">ebook(\'3702\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "photosynthesis",
				true,
				"Correct. Photosynthesis is the biological process that converts CO<sub>2</sub> and water to carbohydrates such as sugar, starch, and cellulose.");
			
				p.addAnswer(2, "respiration",
				false,
				"No. Respiration breaks down organic molecules.");
			
				p.addAnswer(3, "transpiration",
				false,
				"No. Transpiration is the evaporation of water from the surface of a leaf.");
			
				p.addAnswer(4, "oxidation",
				false,
				"No. Oxidation is the loss of electrons from a molecule.");
			
				p.addAnswer(5, "carbonation",
				false,
				"No. Carbonation dissolves CO<sub>2</sub> in water.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336171;


		
		

		
			
			p.question = "Which of the following substances does a plant obtain from the air? (<script type=\"text/javascript\">ebook(\'3702\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "magnesium",
				false,
				"No. Magnesium is a macronutrient obtained from the soil.");
			
				p.addAnswer(2, "nitrogen",
				false,
				"No. Nitrogen is a macronutrient that is made available to plants by bacteria in the form of ammonium (NH<sub>4</sub><sup>+</sup>) or nitrate (NO<sub>3</sub><sup>-</sup>) in the soil.");
			
				p.addAnswer(3, "carbon",
				true,
				"Correct. Carbon is obtained in the form of atmospheric CO<sub>2</sub>.");
			
				p.addAnswer(4, "water",
				false,
				"No. In general water is obtained from the soil.");
			
				p.addAnswer(5, "both b and c",
				false,
				"No. While carbon is obtained from the air in the form of carbon dioxide, plants cannot use nitrogen in its gaseous form. It must be fixed by bacteria.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336172;


		
		

		
			
			p.question = "Professor Scheinman claims to have discovered a new macronutrient required for plant growth. Most of the professor\'s colleagues are skeptical of this claim. Why might they consider it unlikely? (<script type=\"text/javascript\">ebook(\'3702\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "All the nutrients required for plant growth have already been found.",
				false,
				"No. Not necessarily. It is quite possible that nutrients needed in trace amounts are yet to be recognized as such.");
			
				p.addAnswer(2, "It is very difficult to prove that a plant needs a certain nutrient.",
				false,
				"No. Carefully controlled experiments can be used to determine a plant\'s need for a particular nutrient. This is particularly true of nutrients required in very large quantities.");
			
				p.addAnswer(3, "Plants need thousands of nutrients; a new one is not significant.",
				false,
				"No. It appears that about 17 nutrients are essential to plants. A discovery of another essential nutrient at this time would be of major significance.");
			
				p.addAnswer(4, "Any nutrient needed in large amounts (macronutrient) has probably been noted already.",
				true,
				"Correct. It is easier to determine the need for a mineral needed in large amounts than to determine the need for a nutrient needed in only trace amounts.");
			
				p.addAnswer(5, "Plants manufacture their own macronutrients.",
				false,
				"No. There are macronutrients, such as water and carbon dioxide, which plants must obtain from an outside source.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336173;


		
		

		
			
			p.question = "If a plant\'s leaves are yellowing, it may be that the plant is deficient in the elements needed to make chlorophyll, one of which is _____. (<script type=\"text/javascript\">ebook(\'3702\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "copper",
				false,
				"No. Copper does not play a major role in chlorophyll formation.");
			
				p.addAnswer(2, "molybdenum",
				false,
				"No. Molybdenum does not play a major role in chlorophyll formation.");
			
				p.addAnswer(3, "sulfur",
				false,
				"No. Sulfur does not play a major role in chlorophyll formation.");
			
				p.addAnswer(4, "magnesium",
				true,
				"Correct. A deficiency of magnesium, an important component of chlorophyll, can result in chlorosis, or a yellowing of the leaves.");
			
				p.addAnswer(5, "phosphorus",
				false,
				"No. Phosphorus does not play a major role in chlorophyll formation.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336174;


		
		

		
			
			p.question = "If a plant is deficient in _____, it will not be able to make DNA. (<script type=\"text/javascript\">ebook(\'3702\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "phosphorus",
				true,
				"Correct. Phosphorus is an important component of nucleic acids.");
			
				p.addAnswer(2, "magnesium",
				false,
				"No. Magnesium is not a component of nucleic acids.");
			
				p.addAnswer(3, "manganese",
				false,
				"No. Manganese is not a component of nucleic acids.");
			
				p.addAnswer(4, "iron",
				false,
				"No. Iron is not a component of nucleic acids.");
			
				p.addAnswer(5, "sulfur",
				false,
				"No. Sulfur is not a component of nucleic acids.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336175;


		
		

		
			
			p.question = "Soil could be deficient in any of the following nutrients. If you had to supply one of them, which would be needed in the smallest amount? (<script type=\"text/javascript\">ebook(\'3702\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "sulfur",
				false,
				"No. Sulfur is a macronutrient.");
			
				p.addAnswer(2, "phosphorus",
				false,
				"No. Phosphorus is a macronutrient.");
			
				p.addAnswer(3, "nitrogen",
				false,
				"No. Nitrogen is a macronutrient.");
			
				p.addAnswer(4, "potassium",
				false,
				"No. Potassium is a macronutrient.");
			
				p.addAnswer(5, "iron",
				true,
				"Correct. Iron is a micronutrient.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336176;


		
		

		
			
			p.question = "Which of the following is least likely to be deficient in soil? (<script type=\"text/javascript\">ebook(\'3702\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "oxygen",
				false,
				"No. Oxygen is a macronutrient.");
			
				p.addAnswer(2, "phosphorus",
				false,
				"No. Phosphorus is a macronutrient.");
			
				p.addAnswer(3, "carbon",
				false,
				"No. Carbon is a macronutrient, and plants do not obtain carbon from the soil.");
			
				p.addAnswer(4, "iron",
				true,
				"Correct. Iron is a micronutrient.");
			
				p.addAnswer(5, "hydrogen",
				false,
				"No. Hydrogen is a macronutrient.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336177;


		
		

		
			
			p.question = "Which is true regarding mineral deficiency symptoms in plants? (<script type=\"text/javascript\">ebook(\'3702\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Deficiency symptoms of freely moving nutrients will show up first in younger organs.",
				false,
				"No. The symptoms would show up in older organs first.");
			
				p.addAnswer(2, "Deficiency symptoms of immobile nutrients will show up first in older organs.",
				false,
				"No. The symptoms would show up first in young organs.");
			
				p.addAnswer(3, "Growing tissues would not show signs of mineral deficiency of mobile nutrients before older tissues.",
				true,
				"Correct. If a nutrient moves freely, symptoms will show up first in older organs because young, growing tissues have more \"drawing power\" for nutrients in short supply.");
			
				p.addAnswer(4, "Symptoms of mineral deficiency always show up in older leaves first.",
				false,
				"No. Mobility of the nutrient is a factor.");
			
				p.addAnswer(5, "Symptoms always show up in younger leaves first.",
				false,
				"No. Mobility of the nutrient is a factor.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336178;


		
		

		
			
			p.question = "When you add \"plant food\" to your potted geraniums, you are actually providing the plant with _____. (<script type=\"text/javascript\">ebook(\'3702\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "sugars",
				false,
				"No. Plants manufacture their own sugars.");
			
				p.addAnswer(2, "complex carbohydrates",
				false,
				"No. Plants manufacture their own complex carbohydrates.");
			
				p.addAnswer(3, "vitamins and amino acids",
				false,
				"No. Plants manufacture their own organic compounds.");
			
				p.addAnswer(4, "minerals",
				true,
				"Correct. Of the essential nutrients required by plants, most are minerals.");
			
				p.addAnswer(5, "all of the above",
				false,
				"No. Only one of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336179;


		
		

		
			
			p.question = "How did the addition of a gene for citrate synthesis increase the tolerance of tobacco and papaya plants to high aluminum concentrations in the soil? (<script type=\"text/javascript\">ebook(\'3702\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "The citric acid produced by the plant dissolved the aluminum in the soil.",
				false,
				"No. This is not the mechanism that increased aluminum tolerance.");
			
				p.addAnswer(2, "The citric acid produced by the plant coated the root tips and blocked the entrance of aluminum.",
				false,
				"No. This is not the mechanism that increased aluminum tolerance.");
			
				p.addAnswer(3, "The citric acid produced by the plants bound the free aluminum in the soil, making it less available to be taken up by the plants.",
				true,
				"Correct. By binding the free aluminum in the soil, the citric acid put the aluminum in a form that the plants cannot absorb. The aluminum is still in the soil, but it is not bioavailable in its bound form.");
			
				p.addAnswer(4, "The citrate synthase gene activated the <i>Sub1A-1</i> gene and improved aluminum tolerance in the plants.",
				false,
				"No. The <i>Sub1A-1</i> gene improves flood tolerance in rice. It does not appear to be related to aluminum toxicity.");
			
				p.addAnswer(5, "all of the above",
				false,
				"No. Only one of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336180;


		
		

		
			
			p.question = "What supplies the energy for most of the microorganisms in the rhizosphere? (<script type=\"text/javascript\">ebook(\'3703\',\'quiz\')</script>)";
			p.incorrect_any_expl = "No. Carbohydrates supplied by the plants fuel the rhizosphere.";
			p.incorrect_any_expl_flag = 1;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "nitrogen-fixing bacteria",
				false,
				"");
			
				p.addAnswer(2, "plants",
				true,
				"Correct. Carbohydrates and other organic molecules formed in the leaves and transported to the roots fuel the rhizosphere.");
			
				p.addAnswer(3, "mycorrhizae",
				false,
				"");
			
				p.addAnswer(4, "earthworms",
				false,
				"");
			
				p.addAnswer(5, "soil bacteria",
				false,
				"");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336181;


		
		

		
			
			p.question = "The most abundant gas in our atmosphere cannot be used by plants directly in its atmospheric form and is, therefore, captured by certain bacteria that live symbiotically in their roots. What is this gas? (<script type=\"text/javascript\">ebook(\'3703\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "hydrogen",
				false,
				"No. Plants obtain hydrogen with water uptake.");
			
				p.addAnswer(2, "carbon dioxide",
				false,
				"No. Plants obtain carbon dioxide from the atmosphere.");
			
				p.addAnswer(3, "nitrogen",
				true,
				"Correct. Despite the fact that the atmosphere is 80% nitrogen gas, plants cannot use the element in that form and frequently suffer from nitrogen deficiency.");
			
				p.addAnswer(4, "oxygen",
				false,
				"No. Plants obtain oxygen from the atmosphere.");
			
				p.addAnswer(5, "neon",
				false,
				"No. Neon does not play a role in plant metabolism.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336182;


		
		

		
			
			p.question = "Nitrogen fixation is _____. (<script type=\"text/javascript\">ebook(\'3703\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "using nitrogen to build molecules such as proteins and nucleic acids",
				false,
				"No. Nitrogen fixation is not the incorporation of nitrogen into proteins and nucleic acids.");
			
				p.addAnswer(2, "converting nitrogen in the air to a form usable by plants",
				true,
				"Correct. Nitrogen fixation is the conversion of atmospheric nitrogen to ammonia, which is then converted to ammonium.");
			
				p.addAnswer(3, "recycling nitrogen from organic matter in the soil",
				false,
				"No. Recycling organic nitrogen in the soil into ammonia is called ammonification.");
			
				p.addAnswer(4, "absorbing N<sub>2</sub> from the soil",
				false,
				"No. Nitrogen fixation is the conversion of nitrogen from one form to another.");
			
				p.addAnswer(5, "performed by fungus inhabiting root nodules",
				false,
				"No. It is performed by nitrogen-fixing bacteria.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336183;


		
		

		
			
			p.question = "The enzyme that catalyzes the conversion of atmospheric nitrogen to ammonia is _____. (<script type=\"text/javascript\">ebook(\'3703\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "rhizobium",
				false,
				"No. <i>Rhizobium</i> is a genus of nitrogen-fixing bacteria.");
			
				p.addAnswer(2, "nitrogenase",
				true,
				"Correct. Nitrogenase reduces N<sub>2</sub> to NH<sub>3</sub> by adding electrons and hydrogen ions.");
			
				p.addAnswer(3, "nodulase",
				false,
				"No. A series of enzymes are required to promote nodulation.");
			
				p.addAnswer(4, "rubisco",
				false,
				"No. This enzyme is responsible for the incorporation of CO<sub>2</sub> into the Calvin cycle.");
			
				p.addAnswer(5, "hydrogenase",
				false,
				"No. Hydrogenation replaces a double bond between two carbon atoms with a single bond and an additional hydrogen atom bonded to each carbon.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336184;


		
		

		
			
			p.question = "Which of the following organisms can fix nitrogen? (<script type=\"text/javascript\">ebook(\'3703\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "fungi",
				false,
				"No. All nitrogen fixing organisms are prokaryotic.");
			
				p.addAnswer(2, "protists",
				false,
				"No. All nitrogen fixing organisms are prokaryotic.");
			
				p.addAnswer(3, "bacteria",
				true,
				"Correct. All nitrogen fixing organisms are prokaryotic.");
			
				p.addAnswer(4, "plants",
				false,
				"No. All nitrogen fixing organisms are prokaryotic.");
			
				p.addAnswer(5, "all of the above",
				false,
				"No. Only one of the answers is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336185;


		
		

		
			
			p.question = "Legumes (members of the pea family) have roots with swellings called nodules that _____. (<script type=\"text/javascript\">ebook(\'3703\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "contain nitrogen-fixing bacteria",
				true,
				"Correct. Legume roots have swellings called nodules that contain nitrogen-fixing bacteria of the genus <i>Rhizobium</i>.");
			
				p.addAnswer(2, "form fungal hyphae",
				false,
				"No. Hyphae form the body of a fungus.");
			
				p.addAnswer(3, "provide a steady supply of sugar to the host plant",
				false,
				"No. Plants manufacture their own organic compounds.");
			
				p.addAnswer(4, "produce antibiotics that protect the plant from soil bacteria",
				false,
				"No. This is accomplished by the fungal component of mycorrhizae.");
			
				p.addAnswer(5, "increase the surface area for water uptake",
				false,
				"No. This is accomplished by both root hairs and mycorrhizae.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336186;


		
		

		
			
			p.question = "Which of these describes the initial interaction between <i>Rhizobium</i> and a soybean root? (<script type=\"text/javascript\">ebook(\'3703\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Vesicles containing bacteria bud into cortical cells.",
				false,
				"No. Vesicles do not form until after the production of the infection thread.");
			
				p.addAnswer(2, "Soybeans secrete flavonoids that are detected by <i>Rhizobium</i>.",
				true,
				"Correct. The legume initiates nodulation by secreting flavonoids.");
			
				p.addAnswer(3, "The nodule develops vascular tissue.",
				false,
				"No. This is one of the last stages in the formation of a root nodule.");
			
				p.addAnswer(4, "An infection thread is initiated in the root hair of the legume",
				false,
				"No. Nod factors from <i>Rhizobium</i> are necessary to initiate the infection thread.");
			
				p.addAnswer(5, "There is nodule growth in response to secretions from <i>Rhizobium</i>.",
				false,
				"No. Nodule growth does not begin until the infection thread reaches the cortex.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336187;


		
		

		
			
			p.question = "In root nodules, the mutualistic association between plants and bacteria, the plants provide _______, and the bacteria provide _______. (<script type=\"text/javascript\">ebook(\'3703\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "an aerobic environment; fixed nitrogen",
				false,
				"No. Plants actually provide an anaerobic environment which is required for nitrogen fixation.");
			
				p.addAnswer(2, "carbohydrates; fixed nitrogen",
				true,
				"Correct. Plants provide carbohydrates for energy, and bacteria provide nitrogen in a form that the plants can assimilate.");
			
				p.addAnswer(3, "amino acids; ATP",
				false,
				"No. The plants rely on the nitrogen-fixing bacteria to provide fixed nitrogen to use for the synthesis of amino acids, among other things.");
			
				p.addAnswer(4, "carbohydrates; nitrogen gas",
				false,
				"No. The atmosphere is full of nitrogen gas. The bacteria fix the nitrogen into a form that the plants can assimilate and use.");
			
				p.addAnswer(5, "ATP; nitrogen gas",
				false,
				"No. The atmosphere is full of nitrogen gas. The bacteria fix the nitrogen into a form that the plants can assimilate and use.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336188;


		
		

		
			
			p.question = "Mycorrhizae develop _____. (<script type=\"text/javascript\">ebook(\'3703\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "when nutrients are required by plants in relatively small amounts",
				false,
				"No. Mycorrhizae are not nutrients, though they play a role in the acquisition of nutrients.");
			
				p.addAnswer(2, "in plants such as mistletoe that parasitize other plants",
				false,
				"No. Mycorrhizal associations are not parasitic.");
			
				p.addAnswer(3, "when soil is too compact and lacks sufficient air spaces",
				false,
				"No. Mycorrhizae are a part of living organisms.");
			
				p.addAnswer(4, "to control the evaporation of water from leaves",
				false,
				"No. Guard cells regulate the opening of the stomata through which water evaporates.");
			
				p.addAnswer(5, "between roots and beneficial fungi",
				true,
				"Correct. Mycorrhizae are modified roots consisting of a mutualistic association of roots and fungi.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336189;


		
		

		
			
			p.question = "Which of the following is true of mycorrhizae? (<script type=\"text/javascript\">ebook(\'3703\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Arbuscular mycorrhizae penetrate the cytoplasm of root cells.",
				false,
				"No. In arbuscular<b> </b>mycorrhizae, hyphae penetrate root cell walls, but not cytoplasm.");
			
				p.addAnswer(2, "Ectomycorrhizae are found in many crop plants such as wheat and maize.",
				false,
				"No. Endomycorrhizae are found in over 85% of plant species, including crop plants such as wheat and maize.");
			
				p.addAnswer(3, "Arbuscular mycorrhizae do not have a dense mantle ensheathing roots.",
				true,
				"Correct. A microscope is needed to see the fine fungal hyphae that extend from the root into the soil.");
			
				p.addAnswer(4, "The fungal hyphae of ectomycorrhizae form arbuscules.",
				false,
				"No. The fungal hyphae of arbuscular mycorrhizae form arbuscules.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the other answers is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336190;


		
		

		
			
			p.question = "By trapping insects, carnivorous plants obtain _____, which they need _____. (<script type=\"text/javascript\">ebook(\'3703\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "water; because they live in dry soil",
				false,
				"No. These plants live in habitats such as bogs where water is not in limited supply.");
			
				p.addAnswer(2, "nitrogen; to make sugar",
				false,
				"No. Sugar does not contain nitrogen.");
			
				p.addAnswer(3, "phosphorus; to make protein",
				false,
				"No. The amino acids of which proteins are made do not contain phosphorus.");
			
				p.addAnswer(4, "sugars; because they can\'t make enough in photosynthesis",
				false,
				"No. Photosynthesis produces sufficient sugar to meet the needs of a carnivorous plant.");
			
				p.addAnswer(5, "nitrogen; to make protein",
				true,
				"Correct. The soil that carnivorous plants inhabit is typically very nitrogen deficient. The plants need another source of nitrogen to make proteins.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

