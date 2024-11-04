

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "44: Osmoregulation and Excretion > Practice Test";
	ak.quiz_loc_with_commas = "44: Osmoregulation and Excretion, Practice Test";
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
		
		p.id = 336554;


		
		

		
			
			p.question = "An albatross spending its life hovering over the ocean and a desert kangaroo rat are extreme examples of _____, the process by which animals control solute concentrations and balance water gain and loss. (<script type=\"text/javascript\">ebook(\'44OV\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "osmoregulation",
				true,
				"Correct.");
			
				p.addAnswer(2, "hydration",
				false,
				"No. Hydration is only the intake of water.");
			
				p.addAnswer(3, "evaporation",
				false,
				"No. Evaporation is the change of water from a liquid to gas.");
			
				p.addAnswer(4, "inspiration",
				false,
				"No. This is not an appropriate term. Inspiration refers to the process of mental stimulation or motivation.");
			
				p.addAnswer(5, "excretion",
				false,
				"No. This process rids the body of nitrogenous metabolites and other waste products.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336555;


		
		

		
			
			p.question = "Osmoconformers are animals that _____. (<script type=\"text/javascript\">ebook(\'4401\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "expend considerable energy in matching concentrations of their body fluids with those of their marine environment",
				false,
				"No. It doesn\'t take energy to remain isoosmotic with an aquatic environment.");
			
				p.addAnswer(2, "rely on the digestive, respiratory, and excretory systems to remove excess salts and water from their bodies",
				false,
				"No. These are osmoregulators such as freshwater fish.");
			
				p.addAnswer(3, "have an internal environment isoosmotic with their external environment, which does not require expending energy",
				true,
				"Correct. These are simple animals such as marine invertebrates.");
			
				p.addAnswer(4, "spontaneously absorb water through the body surface and lose solutes in urine",
				false,
				"No. These are hyperosmotic osmoregulators such as perch, which are freshwater fish.");
			
				p.addAnswer(5, "spontaneously lose water through body surfaces and must actively unload ions and drink water to maintain osmotic homeostasis",
				false,
				"No. These are hypoosmotic osmoregulators such as cod that live in salt water.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336556;


		
		

		
			
			p.question = "In a marine environment, animals that are isoosmotic relative to their environment _____. (<script type=\"text/javascript\">ebook(\'4401\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "experience no net water loss by osmosis",
				true,
				"Correct. One solution for a marine animal is to be isoosmotic with its saltwater environment. Such osmoconformers do not actively adjust internal osmolarity.");
			
				p.addAnswer(2, "experience significant water gain by osmosis",
				false,
				"No. Consider the meaning of the prefix \"iso-.\"");
			
				p.addAnswer(3, "experience significant water loss by osmosis",
				false,
				"No. Isoosmotic solutions have equal solute concentrations.");
			
				p.addAnswer(4, "must expend energy on the active transport of solutes from their bodies to the environment",
				false,
				"No. Isoosmotic solutions have equal solute concentrations.");
			
				p.addAnswer(5, "do not exist",
				false,
				"No. Marine animals are isoosmotic.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336557;


		
		

		
			
			p.question = "Which type of organism would have the least chance of long-term survival in the given environment? (<script type=\"text/javascript\">ebook(\'4401\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "osmoconformers in seawater",
				false,
				"No. Seawater, except in some coastal areas, has a very consistent salinity. An osmoconformer would not find the situation stressful.");
			
				p.addAnswer(2, "euryhaline animals in fresh water",
				false,
				"No. Euryhaline animals such as salmon can survive large fluctuations of external osmolarity.");
			
				p.addAnswer(3, "stenohaline animals that move between fresh water and seawater",
				true,
				"Correct. Stenohaline animals cannot tolerate large fluctuations of external osmolarity.");
			
				p.addAnswer(4, "osmoregulators in seawater",
				false,
				"No. Seawater, except in some coastal areas, has a stable salinity. Provided the stress is constant, rather than variable, an osmoregulator would be able to tolerate the environment.");
			
				p.addAnswer(5, "euryhaline animals in seawater",
				false,
				"No. Euryhaline animals such as salmon can survive large fluctuations of external osmolarity.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336558;


		
		

		
			
			p.question = "Freshwater fish excrete a large amount of very dilute urine. What is the best explanation for this? (<script type=\"text/javascript\">ebook(\'4401\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Because they live in a hypoosmotic solution, their cells take up excess water that must be excreted.",
				true,
				"Correct. Freshwater fish take in a lot of water from the environment through osmosis and must excrete large amounts of water in dilute urine from their kidneys.");
			
				p.addAnswer(2, "Because they live in a hypoosmotic solution, their cells tend to accumulate a lot of solute that must be excreted.",
				false,
				"No. Living in a hypoosmotic environment means that their cells would tend to accumulate a lot of water.");
			
				p.addAnswer(3, "Because they live in a hyperosmotic solution, their cells take up an excess of water that must be excreted.",
				false,
				"No. They live in a hypoosmotic environment.");
			
				p.addAnswer(4, "Because they live in a hyperosmotic solution, their cells tend to accumulate a lot of solute that must be excreted.",
				false,
				"No. They live in a hypoosmotic environment.");
			
				p.addAnswer(5, "Because animals must live in an isoosmotic solution, they excrete solutes to make the concentration of solutes in the water equal to the concentration of solutes in their cells.",
				false,
				"No. They live in a hypoosmotic environment.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336559;


		
		

		
			
			p.question = "Dehydration in animals _____. (<script type=\"text/javascript\">ebook(\'4401\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "such as the tardigrade is lethal",
				false,
				"No. Animals such as the tardigrade have survival mechanisms for dehydration.");
			
				p.addAnswer(2, "is a problem because carbohydrates are fragile and break down when they dry out",
				false,
				"No. Proteins, not carbohydrates, are fragile and break down when dried.");
			
				p.addAnswer(3, "has nothing in common with freezing",
				false,
				"No. Both freezing and dehydration result in water becoming unavailable to the cell.");
			
				p.addAnswer(4, "is a problem because fluid-mosaic cell membranes fall apart when deprived of water",
				false,
				"No. But they do collapse and stick together when dehydrated.");
			
				p.addAnswer(5, "may be less damaging in the presence of sugar",
				true,
				"Correct. In nematodes, a sugar, trehalose, replaces the lost water, preventing proteins and cell membranes from being damaged by dehydration.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336560;


		
		

		
			
			p.question = "Most of our nitrogen-containing waste products are a result of ______. (<script type=\"text/javascript\">ebook(\'4402\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "drug use",
				false,
				"No. These nitrogen-containing waste products are produced regardless of drug use.");
			
				p.addAnswer(2, "consumption of foods high in nitrates, such as green vegetables",
				false,
				"No. Such foods are not high in nitrates.");
			
				p.addAnswer(3, "protein metabolism",
				true,
				"Correct. Some of the most toxic by-products of metabolism are nitrogen-containing wastes from the breakdown of protein and nucleic acids.");
			
				p.addAnswer(4, "the body\'s attempts to maintain pH homeostasis",
				false,
				"No. These wastes are the result of the breakdown of protein and nucleic acids.");
			
				p.addAnswer(5, "metabolism of fatty foods",
				false,
				"No. Fats do not contain nitrogen.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336561;


		
		

		
			
			p.question = "Most aquatic animals excrete ammonia, while land animals excrete urea or uric acid. What is the most likely explanation for this difference? (<script type=\"text/javascript\">ebook(\'4402\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "They have different diets.",
				false,
				"No. All three of the waste products are molecules that contain surplus nitrogen, which results from catabolism of proteins and nucleic acids, macromolecules found in the diets of all animals.");
			
				p.addAnswer(2, "Land animals can get the energy needed to make urea or uric acid.",
				false,
				"No. Think again about which waste product requires large amounts of water.");
			
				p.addAnswer(3, "Ammonia is very toxic, and it takes lots of water to dilute it.",
				true,
				"Correct. Because aquatic animals have access to so much water, the ammonia they excrete is diluted without causing harm.");
			
				p.addAnswer(4, "Land animals cannot afford the energy needed to make ammonia.",
				false,
				"No. The production of ammonia requires less energy than either urea or uric acid.");
			
				p.addAnswer(5, "Fish need to get rid of ammonia, but land animals need it to live.",
				false,
				"No. Ammonia is extremely toxic to both terrestrial and aquatic animals.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336562;


		
		

		
			
			p.question = "In our bodies, the primary nitrogen-containing compound excreted by our kidneys is ______. (<script type=\"text/javascript\">ebook(\'4402\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "uric acid",
				false,
				"No. Uric acid is excreted along with very little water.");
			
				p.addAnswer(2, "amino acids",
				false,
				"No. Amino acids are not a normal component of the urine excreted by our kidneys.");
			
				p.addAnswer(3, "ammonia",
				false,
				"No. Ammonia is most commonly excreted by aquatic organisms.");
			
				p.addAnswer(4, "urea",
				true,
				"Correct. Mammals, most adult amphibians, and aquatic turtles excrete urea.");
			
				p.addAnswer(5, "nitrite",
				false,
				"No. Nitrite is not a nitrogen-containing compound excreted by our kidneys.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336563;


		
		

		
			
			p.question = "The most effective molecule for nitrogenous waste disposal in desert animals would be _____. (<script type=\"text/javascript\">ebook(\'4402\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "ammonia because it uses less energy to make than uric acid or urea",
				false,
				"No. Ammonia is so highly toxic that it is used for nitrogen disposal only by aquatic organisms because it can diffuse rapidly away into surrounding water.");
			
				p.addAnswer(2, "urea because it is less toxic than uric acid",
				false,
				"No. It is less toxic, but it requires large quantities of water for excretion.");
			
				p.addAnswer(3, "uric acid because it takes less energy to make than urea",
				false,
				"No. It takes much more energy to make the larger uric acid molecule than to make urea.");
			
				p.addAnswer(4, "uric acid because it does not require water for excretion",
				true,
				"Correct. Uric acid can be excreted in crystalline form, which is an important adaptation for conserving water in a desert.");
			
				p.addAnswer(5, "ammonia because it is the most soluble of all the nitrogen-containing metabolic waste products",
				false,
				"No. In a desert, where water supply is limited, solubility in water is not a desirable quality for a disposable product.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336564;


		
		

		
			
			p.question = "Many insects, birds, and other reptiles excrete nitrogenous wastes in the form of uric acid, which _____. (<script type=\"text/javascript\">ebook(\'4402\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "is synthesized in the kidneys from ammonia and CO<sub>2</sub>",
				false,
				"No. Uric acid forms solids that are relatively insoluble and nontoxic.");
			
				p.addAnswer(2, "forms solids that are relatively insoluble and nontoxic",
				true,
				"Correct. Uric acid precipitates out of solution and can be stored within an egg as a solid that is left behind when the animal hatches.");
			
				p.addAnswer(3, "readily decomposes on exposure to air",
				false,
				"No. Uric acid forms solids that are relatively insoluble and nontoxic.");
			
				p.addAnswer(4, "is readily excreted through feathers and scales",
				false,
				"No. Uric acid forms solids that are relatively insoluble and nontoxic.");
			
				p.addAnswer(5, "can be recycled and utilized as an additional energy source",
				false,
				"No. Uric acid forms solids that are relatively insoluble and nontoxic.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336565;


		
		

		
			
			p.question = "Which of the following is a function of the excretory system? (<script type=\"text/javascript\">ebook(\'4403\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "elimination of nitrogenous wastes",
				false,
				"No. Although this is a function of the excretory system, another answer is best.");
			
				p.addAnswer(2, "maintenance of salt balance",
				false,
				"No. Although this<b> </b>is a function of the excretory system, another answer is best.");
			
				p.addAnswer(3, "production of urine",
				false,
				"No. Although this<b> </b>is a function of the excretory system, another answer is best.");
			
				p.addAnswer(4, "maintenance of the water balance",
				false,
				"No. Although this<b> </b>is a function of the excretory system, another answer is best.");
			
				p.addAnswer(5, "all of the above",
				true,
				"Correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336566;


		
		

		
			
			p.question = "Which of the following is filtered from blood but not normally found in urine? (<script type=\"text/javascript\">ebook(\'4403\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "water",
				false,
				"No. Think about it; urine is mostly water.");
			
				p.addAnswer(2, "red blood cells",
				false,
				"No. Red blood cells are too large to be filtered. When found in the urine they usually indicate traumatic injury to the kidney.");
			
				p.addAnswer(3, "H<sup>+</sup> ions",
				false,
				"No. Because most foods are slightly acidic, there are almost always extra hydrogen ions that the body needs to excrete.");
			
				p.addAnswer(4, "amino acids",
				true,
				"Correct. Amino acids are filtered because they are small, but normally their reabsorption is 100% efficient.");
			
				p.addAnswer(5, "urea",
				false,
				"No. Urea is filtered from blood and found in urine, although some is reabsorbed.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336567;


		
		

		
			
			p.question = "The filtrate formed by the nephrons in the kidney is not urine. The filtrate is first refined and concentrated by the processes of _____, which form the urine that leaves the body. (<script type=\"text/javascript\">ebook(\'4403\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "filtration and secretion",
				false,
				"No. The process of filtration produces the filtrate.");
			
				p.addAnswer(2, "reabsorption and secretion",
				true,
				"Correct. Reabsorption returns valuable molecules filtered from the plasma, while secretion permits selected substances, such as salts and hydrogen ions, to be removed more rapidly from the blood than by filtration alone.");
			
				p.addAnswer(3, "reabsorption and excretion",
				false,
				"No. \"Excretion\" is the term used to describe something leaving the body, which in this case is urine.");
			
				p.addAnswer(4, "filtration and reabsorption",
				false,
				"No. The process of filtration produces the filtrate.");
			
				p.addAnswer(5, "secretion and excretion",
				false,
				"No. \"Excretion\" is the term used to describe something leaving the body, which in this case is urine.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336568;


		
		

		
			
			p.question = "Metanephridia are found in _____ and function in_____. (<script type=\"text/javascript\">ebook(\'4403\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "insects; excretion",
				false,
				"No. Metanephridia are found in most annelids, including earthworms, and function in both osmoregulation and excretion. The metanephridium has internal openings that collect body fluids.");
			
				p.addAnswer(2, "annelids; excretion and osmoregulation",
				true,
				"Correct. Metanephridia are found in most annelids, including earthworms, and function in osmoregulation and excretion. The metanephridium has internal openings that collect body fluids.");
			
				p.addAnswer(3, "bats; osmoregulation",
				false,
				"No. Metanephridia are found in most annelids, including earthworms, and function in both osmoregulation and excretion. The metanephridium has internal openings that collect body fluids.");
			
				p.addAnswer(4, "earthworms; excretion",
				false,
				"No. Although this is true, it is not the best response. Metanephridia are found in annelids, including but not limited to earthworms. Also, the tubes function in excretion and osmoregulation.");
			
				p.addAnswer(5, "birds; osmoregulation and excretion",
				false,
				"No. Metanephridia are found in most annelids, including earthworms, and function in both osmoregulation and excretion. The metanephridium has internal openings that collect body fluids.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336569;


		
		

		
			
			p.question = "Which of the following is the most accurate and comprehensive description of the function of kidneys? (<script type=\"text/javascript\">ebook(\'4403\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the breakdown of body wastes",
				false,
				"No. If any organ fits this description, it is the liver.");
			
				p.addAnswer(2, "the excretion of wastes",
				false,
				"No. However, excreting wastes is an important activity.");
			
				p.addAnswer(3, "the regulation of body fluid composition",
				true,
				"Correct. This includes waste molecule elimination in urine, but also the regulation of salt and hydrogen ion concentrations in body fluids.");
			
				p.addAnswer(4, "filtration of the blood",
				false,
				"No. The kidney does this, but a better approach to the answer would be to ask yourself why it filters the blood.");
			
				p.addAnswer(5, "production of urine",
				false,
				"No. Although the kidney does this, a better approach to the answer would be to ask yourself why urine is produced and what urine contains.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336570;


		
		

		
			
			p.question = "Which one of the following is a tube that carries urine from the kidneys to the urinary bladder in a mammal? (<script type=\"text/javascript\">ebook(\'4403\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "loop of Henle",
				false,
				"No. This is a portion of a nephron.");
			
				p.addAnswer(2, "ureter",
				true,
				"Correct. Urine is conveyed to the urinary bladder via the ureter and to the outside of the body via the urethra.");
			
				p.addAnswer(3, "urethra",
				false,
				"No. The urethra transports urine from the urinary bladder to the outside of the body.");
			
				p.addAnswer(4, "uvula",
				false,
				"No. The uvula is found at the back of a human\'s mouth.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336571;


		
		

		
			
			p.question = "The functional units of kidneys are _____. (<script type=\"text/javascript\">ebook(\'4403\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "neurons",
				false,
				"No. Neurons are the functional units of nervous tissue.");
			
				p.addAnswer(2, "glomeruli",
				false,
				"No. Glomeruli are bundles of capillaries.");
			
				p.addAnswer(3, "ureters",
				false,
				"No. A ureter transfers urine from a kidney to the urinary bladder.");
			
				p.addAnswer(4, "nephrons",
				true,
				"Correct. The nephron is the functional unit of the kidney.");
			
				p.addAnswer(5, "collecting ducts",
				false,
				"No. Nephrons empty into collecting ducts.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336572;


		
		

		
			
			p.question = "The bed of capillaries in a vertebrate kidney where water, urea, and salts are filtered out of the blood is the _____. (<script type=\"text/javascript\">ebook(\'4403\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Bowman\'s capsule",
				false,
				"No. Bowman\'s capsule is a different region of a nephron.");
			
				p.addAnswer(2, "collecting duct",
				false,
				"No. This is a different region of a nephron.");
			
				p.addAnswer(3, "glomerulus",
				true,
				"Correct. The nephron consists of a single long tubule and a ball of capillaries called the glomerulus.");
			
				p.addAnswer(4, "loop of Henle",
				false,
				"No. This is a different region of a nephron.");
			
				p.addAnswer(5, "proximal convoluted tubule",
				false,
				"No. This is a different region of a nephron.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336573;


		
		

		
			
			p.question = "In each nephron of the kidney, the glomerulus and Bowman\'s capsule _____. (<script type=\"text/javascript\">ebook(\'4403\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "filter the blood and capture the filtrate",
				true,
				"Correct. Using hydrostatic pressure, plasma is forced through the walls of the glomerulus, becoming filtrate as it crosses, and collecting within Bowman\'s capsule.");
			
				p.addAnswer(2, "reabsorb water into the blood",
				false,
				"No. This is not where water is reabsorbed.");
			
				p.addAnswer(3, "break down harmful toxins and poisons",
				false,
				"No. This is primarily a function of the liver, not the kidney.");
			
				p.addAnswer(4, "reabsorb salts and nutrients",
				false,
				"No. Reabsorption occurs in the proximal convoluted tubule, loop of Henle, distal tubule, and collecting duct.");
			
				p.addAnswer(5, "refine and concentrate the urine for excretion",
				false,
				"No. The refinement of filtrate involves reabsorption and secretion, which occur throughout the nephron, and the recovery of water, which occurs in association with reabsorption and under the influence of ADH.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336574;


		
		

		
			
			p.question = "The fluid that enters vertebrate nephrons is called the filtrate. Where does the filtrate come from? (<script type=\"text/javascript\">ebook(\'4403\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "blood in capillaries",
				true,
				"Correct. Filtration occurs as blood pressure forces water, urea, salts, and other small solutes from the blood in the glomerulus into the lumen of Bowman\'s capsule.");
			
				p.addAnswer(2, "urine",
				false,
				"No. Urine exits the nephron.");
			
				p.addAnswer(3, "lymphatic fluid",
				false,
				"No. Consider the source of the fluids that enter the kidney.");
			
				p.addAnswer(4, "cells of the kidney",
				false,
				"No. Consider the source of the fluids that enter the kidney.");
			
				p.addAnswer(5, "the loop of Henle",
				false,
				"No. Filtrate is formed prior to encountering the loop of Henle.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336575;


		
		

		
			
			p.question = "Which of the following substances is generally filtered from the blood by the kidneys? (<script type=\"text/javascript\">ebook(\'4403\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "water",
				false,
				"No. Although water is filtered from the blood, there is a better choice.");
			
				p.addAnswer(2, "sodium",
				false,
				"No. Although sodium is filtered from the blood, there is a better choice.");
			
				p.addAnswer(3, "urea",
				false,
				"No. Although urea is filtered from the blood, there is a better choice.");
			
				p.addAnswer(4, "glucose",
				false,
				"No. Although glucose is filtered from the blood, there is a better choice.");
			
				p.addAnswer(5, "all of the above",
				true,
				"Correct. All of these substances are generally filtered from the blood by the kidneys.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336576;


		
		

		
			
			p.question = "Which is an accurate statement about the anatomy of the human excretory system? (<script type=\"text/javascript\">ebook(\'4403\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Bowman\'s capsule is a network of capillaries inside the glomerulus.",
				false,
				"No. The glomerulus is a network of capillaries within Bowman\'s capsule.");
			
				p.addAnswer(2, "The proximal tubule is the portion of the nephron tubule farthest from Bowman\'s capsule.",
				false,
				"No. The proximal tubule is the portion of the nephron tubule closest to Bowman\'s capsule (\"proximal\" means \"near\").");
			
				p.addAnswer(3, "The renal cortex, which contains the nephrons, is interior to the renal medulla.",
				false,
				"No. The renal cortex is exterior to the renal medulla. Each nephron starts and ends in the cortex; some extend into the medulla.");
			
				p.addAnswer(4, "The loop of Henle is located between the proximal tubule and the distal tubule.",
				true,
				"Correct. This accurately describes the location of these parts of a nephron.");
			
				p.addAnswer(5, "The distal tubule of a nephron connects with the renal pelvis of the kidney via the ureter.",
				false,
				"No. The distal tubule connects to the renal pelvis via the collecting duct. The ureter passes urine from the kidney to the bladder.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336577;


		
		

		
			
			p.question = "Which is an accurate pairing of a key excretory function with its definition? (<script type=\"text/javascript\">ebook(\'4403\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Filtration happens when blood pressure forces water, nitrogenous waste, and valuable solutes from the blood into the collecting duct.",
				false,
				"No. Filtration happens when blood pressure forces water, nitrogenous waste, and valuable solutes from the blood into the nephron\'s proximal tubule.");
			
				p.addAnswer(2, "Reabsorption is the reclamation process that returns valuable solutes and water to the nephron from the capillaries.",
				false,
				"No. Reabsorption is the reclamation process that returns valuable solutes and water to the capillaries from the nephron so they are not wasted in the urine.");
			
				p.addAnswer(3, "Secretion transports certain toxins, drugs, and excessive ions from the filtrate to the capillaries.",
				false,
				"No. Secretion transports certain toxins, drugs, and excessive ions from the capillaries to the filtrate.");
			
				p.addAnswer(4, "Excretion moves urine, the processed filtrate, out of the kidney, through the ureter, the bladder, and finally out of the body via the urethra.",
				true,
				"Correct. This is the one accurate statement.");
			
				p.addAnswer(5, "Reabsorption is the process where toxins, drugs, and excessive ions that remain in the blood after filtration are transported into the nephron for disposal in the urine.",
				false,
				"No. Reabsorption is the return of substances from the filtrate to the blood. Secretion is the transport of certain substances from the blood to the filtrate.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336578;


		
		

		
			
			p.question = "All of the following processes occur in the nephron of the kidney except _____. (<script type=\"text/javascript\">ebook(\'4404\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "tubular secretion",
				false,
				"No. This process occurs in nephrons.");
			
				p.addAnswer(2, "capsular filtration",
				false,
				"No. This process occurs<b> </b>in nephrons.");
			
				p.addAnswer(3, "blood cell formation",
				true,
				"Correct. Blood cells are not formed in the kidneys. Instead, the nephron filters blood, secretes hydrogen ions and other substances to maintain a constant pH for body fluids, and reabsorbs sugars, vitamins, and other nutrients.");
			
				p.addAnswer(4, "cellular respiration",
				false,
				"No. The nephron is composed of metabolically active cells.");
			
				p.addAnswer(5, "selective reabsorption",
				false,
				"No. This process occurs<b> </b>in nephrons.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336579;


		
		

		
			
			p.question = "As filtrate passes through the long loop of Henle, salt is removed and concentrated in the interstitial fluid of the kidney medulla. Because of this high salt concentration, the nephron is able to _____. (<script type=\"text/javascript\">ebook(\'4404\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "excrete the maximum amount of salt",
				false,
				"No. The loop of Henle is adapted to facilitate water reabsorption.");
			
				p.addAnswer(2, "neutralize toxins that might accumulate in the kidney",
				false,
				"No. The cells of the kidney lack the biochemical ability to neutralize most toxins.");
			
				p.addAnswer(3, "control the pH of the interstitial fluid",
				false,
				"No. The pH is determined primarily by the distribution of hydrogen ions and buffers; cells in the loop of Henle move urea and sodium chloride.");
			
				p.addAnswer(4, "excrete a large amount of water",
				false,
				"No. Just the opposite is true. The primary function of the loop of Henle is to create the capacity to reabsorb large amounts of water.");
			
				p.addAnswer(5, "establish a hyperosmotic interstitial medullary concentration",
				true,
				"Correct. Because the interstitial fluid is hyperosmotic, water can be drawn from the filtrate in the collecting duct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336580;


		
		

		
			
			p.question = "What is the function of the ascending loop of Henle? (<script type=\"text/javascript\">ebook(\'4404\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "It provides water for reabsorption by the interstitial fluid and capillaries.",
				false,
				"No. The ascending loop is impermeable to water, and thus none is lost for reabsorption.");
			
				p.addAnswer(2, "It loses urea to the renal medulla, helping this tissue to maintain its concentration gradient of solutes.",
				false,
				"No. The collecting duct of the nephron offloads some urea into the medulla, which helps maintain the concentration gradient of solutes.");
			
				p.addAnswer(3, "It absorbs some drugs and poisons from surrounding capillaries.",
				false,
				"No. This is accomplished by the distal tubule of the nephron.");
			
				p.addAnswer(4, "It helps maintain the concentration gradient of NaCl in the interstitial fluid, thus increasing water reabsorption.",
				true,
				"Correct. NaCl diffuses out of the ascending loop of Henle in the inner medulla and is actively transported out in the outer medulla.");
			
				p.addAnswer(5, "It collects processed filtrate from the nephrons.",
				false,
				"No. The filtrate is collected from nephrons by the collecting duct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336581;


		
		

		
			
			p.question = "The lowest osmotic potential inside a nephron will be found in _____. (<script type=\"text/javascript\">ebook(\'4404\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Bowman\'s capsule and the proximal tubule",
				false,
				"No. Bowman\'s capsule is where filtrate is formed.");
			
				p.addAnswer(2, "the descending limb of the loop of Henle",
				false,
				"No. The thick segment of the ascending limb of the loop of Henle actively pumps NaCl out of the tubule, making the filtrate increasingly dilute.");
			
				p.addAnswer(3, "the loop of Henle",
				false,
				"No. The thick segment of the ascending limb of the loop of Henle actively pumps NaCl out of the tubule, making the filtrate increasingly dilute.");
			
				p.addAnswer(4, "the thick segment of the ascending limb and the distal tubule",
				true,
				"Correct. The thick segment of the ascending limb of the loop of Henle actively pumps NaCl out of the tubule, making the filtrate increasingly dilute. By the time the filtrate reaches the distal tubule, it is hypoosmotic to body fluids.");
			
				p.addAnswer(5, "the collecting duct",
				false,
				"No. The thick segment of the ascending limb of the loop of Henle actively pumps NaCl out of the tubule, making the filtrate increasingly dilute.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336582;


		
		

		
			
			p.question = "At a particular position along a nephron, the osmotic potential of the filtrate is 500 mosm/L while the surrounding kidney\'s is 600 mosm/L. Which one of the following is a likely result? (<script type=\"text/javascript\">ebook(\'4404\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Water will diffuse into the nephron by osmosis.",
				false,
				"No. The filtrate in the nephron has a lower solute concentration.");
			
				p.addAnswer(2, "Water will be pumped into the nephron by active transport.",
				false,
				"No.  There is a concentration gradient here that will create a different result.");
			
				p.addAnswer(3, "Water will diffuse out of the nephron by osmosis.",
				true,
				"Correct. For water to move out of the tubule by osmosis, the interstitial fluid bathing the tubule must be hyperosmotic to the filtrate.");
			
				p.addAnswer(4, "Water will be pumped out of the nephron by active transport.",
				false,
				"No. However, the filtrate will lose water to its surroundings.");
			
				p.addAnswer(5, "There will be no net movement of water.",
				false,
				"No. There will be movement of water.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336583;


		
		

		
			
			p.question = "The loops of Henle in the kidneys of a desert kangaroo rat are much longer than those in a white laboratory rat because the _____. (<script type=\"text/javascript\">ebook(\'4404\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "kangaroo rat is adapted to living in an environment where water is scarce",
				true,
				"Correct. The longer loops of Henle allow more water to be absorbed back into the body.");
			
				p.addAnswer(2, "white rat\'s diet is much less varied than the kangaroo rat\'s diet",
				false,
				"No. The white rat\'s diet is probably more varied than the kangaroo rat\'s.");
			
				p.addAnswer(3, "kangaroo rat cannot always find food",
				false,
				"No. Perhaps you are thinking about the relative length of the small intestine. Animals eating more fibrous foods have longer small intestines.");
			
				p.addAnswer(4, "kangaroo rat produces more body wastes",
				false,
				"No. If this were true, the simple solution would be to have a larger kidney.");
			
				p.addAnswer(5, "kangaroo rat has less stress and lower blood pressure",
				false,
				"No. Even if this were true, can you recall any connection between the loop of Henle and stress?");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336584;


		
		

		
			
			p.question = "What is the function of antidiuretic hormone (ADH) in the body? (<script type=\"text/javascript\">ebook(\'4405\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "During times of increased solute concentrations, ADH causes nephrons to absorb water faster.",
				false,
				"No. ADH does not signal the nephrons to take in water but to let more out for reabsorption into capillaries.");
			
				p.addAnswer(2, "During times of higher solute concentrations, ADH causes more water to be released from the nephrons to be reabsorbed by the blood.",
				true,
				"Correct. ADH signals the nephrons to release more water from the filtrate into the interstitial fluid; the water is then reabsorbed into the blood.");
			
				p.addAnswer(3, "Low levels or the absence of ADH in the blood are the brain\'s response to thirst.",
				false,
				"No. Thirst would cause the brain to trigger a release of ADH into the blood; ADH would circulate to the kidneys and cause more water to be reabsorbed from the filtrate into the blood.");
			
				p.addAnswer(4, "ADH is the only hormone that provides a system of control over the kidney as an osmoregulator for urine production.",
				false,
				"No. ADH works in tandem with two other hormones to monitor the kidney\'s effect on salt and water balance.");
			
				p.addAnswer(5, "ADH controls the rate that filtrate moves from the glomerulus into Bowman\'s capsule.",
				false,
				"No. ADH regulates the removal and retention of water by the nephrons.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336585;


		
		

		
			
			p.question = "Secretion of ADH (antidiuretic hormone) from the ______ occurs in response to _____ and causes ______. (<script type=\"text/javascript\">ebook(\'4405\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "thyroid gland; low blood sugar; kidney blood vessels to constrict",
				false,
				"No. The thyroid gland does not secrete ADH.");
			
				p.addAnswer(2, "pituitary gland; low blood osmolarity; decreased permeability to water of a kidney\'s collecting duct",
				false,
				"No. ADH promotes the conservation of water.");
			
				p.addAnswer(3, "adrenal gland; high blood osmolarity; increased permeability to water of a collecting duct",
				false,
				"No. The adrenal gland does not secrete ADH.");
			
				p.addAnswer(4, "pituitary gland; high blood osmolarity; increased permeability to water of a collecting duct",
				true,
				"Correct. When excessive water loss causes an increase in blood osmolarity, antidiuretic hormone, released by the pituitary, acts on the collecting duct to increase the reabsorption of water.");
			
				p.addAnswer(5, "adrenal gland; low blood pressure; increased water and solute reabsorption at the proximal tubule of the kidney",
				false,
				"No. The adrenal gland does not secrete ADH.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336586;


		
		

		
			
			p.question = "Alcohol consumption increases urinary output because alcohol ______. (<script type=\"text/javascript\">ebook(\'4405\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "enhances aldosterone production",
				false,
				"No. Aldosterone promotes the reabsorption of water.");
			
				p.addAnswer(2, "inhibits aldosterone production",
				false,
				"No. This is not how alcohol functions.");
			
				p.addAnswer(3, "causes cellular metabolism to proceed at a faster rate",
				false,
				"No. Alcohol is a depressant.");
			
				p.addAnswer(4, "enhances ADH (vasopressin) production and release",
				false,
				"No. This would decrease urinary output.");
			
				p.addAnswer(5, "inhibits ADH (vasopressin) production and release",
				true,
				"Correct. Alcohol can disturb water balance by inhibiting the release of ADH.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336587;


		
		

		
			
			p.question = "What conditions are responsible for the stimulation of the JGA (juxtaglomerular apparatus)? (<script type=\"text/javascript\">ebook(\'4405\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "an increase in blood pressure or blood volume within the heart",
				false,
				"No. However, these events will trigger the release of ANF from the atrial walls, which reduces sodium reabsorption within the kidney.");
			
				p.addAnswer(2, "an increase in the solute concentration of the blood plasma",
				false,
				"No. This will lead to the release of ADH, which returns water to the plasma and corrects high plasma osmolarity.");
			
				p.addAnswer(3, "a decrease in the solute concentration of the blood plasma",
				false,
				"No. This condition will inhibit the release of ADH and thereby increase water loss.");
			
				p.addAnswer(4, "a decrease in the blood pressure or blood volume in the afferent arteriole",
				true,
				"Correct. JGA activation results in the release of renin, which converts angiotensinogen to its active form. Angiotensin II then increases blood pressure by vasoconstriction and increased sodium reabsorption.");
			
				p.addAnswer(5, "consumption of alcohol",
				false,
				"No. Alcohol interferes with the release of ADH, acting as a diuretic and causing excessive water loss.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

