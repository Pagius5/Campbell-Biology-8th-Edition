

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "8: An Introduction to Metabolism > Practice Test";
	ak.quiz_loc_with_commas = "8: An Introduction to Metabolism, Practice Test";
	ak.quiz_title = "Practice Test";

	
		ak.help_url = "../../placeholders/help_placeholder.html";
	
	ak.essay_total = 0;
	ak.pair_problem_total = 0;
	ak.pair_total = 0;
	ak.problem_total = 45;
	ak.non_essay_total = 45;
	ak.scored_item_total = 45;

	
	
	


	
	ak.copyright_date = "2008";
	ak.brandname = "Pearson Benjamin Cummings";
	ak.legal = "../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.pearsoned.com%2Flegal%2Findex.htm";


	// Loop over all problems
	
	
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334474;


		
		

		
			
			p.question = "Which of the following correctly states the relationship between anabolic and catabolic pathways? (<script type=\"text/javascript\">ebook(\'0801\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Degradation of organic molecules by anabolic pathways provides the energy to drive catabolic pathways.",
				false,
				"No. Catabolic pathways release energy derived from the breakdown of organic molecules; this energy is used by anabolic pathways.");
			
				p.addAnswer(2, "Energy derived from catabolic pathways is used to drive the breakdown of organic molecules in anabolic pathways.",
				false,
				"No. Energy derived from catabolic pathways is used to drive the synthesis of organic molecules in anabolic pathways.");
			
				p.addAnswer(3, "Anabolic pathways synthesize more complex organic molecules using the energy derived from catabolic pathways.",
				true,
				"Correct. The synthesis of complex molecules in anabolic pathways requires an input of energy from catabolic pathways.");
			
				p.addAnswer(4, "Catabolic pathways produce usable cellular energy by synthesizing more complex organic molecules.",
				false,
				"No. Catabolic pathways degrade organic molecules with the release of energy that can be used to drive cellular processes, including anabolic pathways.");
			
				p.addAnswer(5, "The flow of energy between catabolic and anabolic pathways is reversible.",
				false,
				"No. Anabolic pathways do not produce energy that can be used by catabolic pathways.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334475;


		
		

		
			
			p.question = "Which of the following situations represent(s) a transformation of one type of energy to another? (<script type=\"text/javascript\">ebook(\'0801\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the burning of gasoline in a car engine to move a car",
				false,
				"No. Although this represents the change of chemical energy to mechanical energy and heat, there is a better answer.");
			
				p.addAnswer(2, "the production of sugar by photosynthesis",
				false,
				"No. Although this<b> </b>represents the change of light energy to chemical energy, there is a better answer.");
			
				p.addAnswer(3, "the production of electrical power by damming a river",
				false,
				"No. Although this represents the conversion of the potential energy of water behind the dam into electrical energy, there is a better answer.");
			
				p.addAnswer(4, "playing music by putting new batteries in your CD player",
				false,
				"No. Although this represents the change of electrical energy to the mechanical energy of sound waves, there is a better answer.");
			
				p.addAnswer(5, "all of the above",
				true,
				"Correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334476;


		
		

		
			
			p.question = "Organisms are described as thermodynamically open systems. Which of the following statements is consistent with this description? (<script type=\"text/javascript\">ebook(\'0801\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "The metabolism of an organism is isolated from its surroundings.",
				false,
				"No. This would describe a closed system.");
			
				p.addAnswer(2, "Because energy must be conserved, organisms constantly recycle energy and thus need no input of energy.",
				false,
				"No. Energy is conserved, but utilization of energy by organisms requires that some energy be lost as heat. This energy must be replaced by new energy from the environment.");
			
				p.addAnswer(3, "Organisms acquire energy from their surroundings.",
				true,
				"Correct. Open systems are those in which energy and materials can be exchanged between the system and its surroundings.");
			
				p.addAnswer(4, "Heat produced by the organism is conserved in the organism and not lost to the environment.",
				false,
				"No. This would describe a closed system; organisms constantly lose heat to their environment as a consequence of being open systems.");
			
				p.addAnswer(5, "all of the above",
				false,
				"No. Only one of the choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334477;


		
		

		
			
			p.question = "Consider the growth of a farmer\'s crop over a season. Which of the following correctly states a limitation imposed by the first or second law of thermodynamics? (<script type=\"text/javascript\">ebook(\'0801\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "The entropy of the universe must decrease to account for the increased entropy associated with plant growth.",
				false,
				"No. The growth of plants represents a decrease in entropy, which by the second law requires a corresponding increase in entropy of the plant\'s surroundings (the universe).");
			
				p.addAnswer(2, "The process of photosynthesis produces energy that the plant uses to grow.",
				false,
				"No. Energy is not produced by photosynthesis; it is converted from energy in the form of sunlight into energy in the form of chemical bonds (sugars).");
			
				p.addAnswer(3, "To obey the first law, the crops must represent an open system.",
				true,
				"Correct. The first law states that energy cannot be created. The growth of plants stores much energy in the body of the plant. That energy must have been obtained from the plant\'s environment; thus, the plant must be an open system.");
			
				p.addAnswer(4, "Growth of the crops must occur spontaneously.",
				false,
				"No. Growth of plants requires an input of energy. Spontaneous processes require no input of energy.");
			
				p.addAnswer(5, "all of the above",
				false,
				"No. Only one of the possible choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334478;


		
		

		
			
			p.question = "Which of the following states the relevance of the first law of thermodynamics to biology? (<script type=\"text/javascript\">ebook(\'0801\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "The total energy taken in by an organism must be greater than the total energy stored or released by the organism.",
				false,
				"No. The first law states that the total energy must be conserved.");
			
				p.addAnswer(2, "Energy can be freely transformed among different forms as long as the total energy is conserved.",
				true,
				"Correct. The first law of thermodynamics states that energy can be transformed but can be neither created nor destroyed.");
			
				p.addAnswer(3, "Photosynthetic organisms produce energy in sugars from sunlight.",
				false,
				"No. Organisms cannot produce energy; they can only convert it from one form (sunlight) to another (chemical bonds in sugars).");
			
				p.addAnswer(4, "All organisms must produce some heat as a result of the processes of life.",
				false,
				"No. It is true that all organisms do produce heat, but this is not required by the first law of thermodynamics. It only requires that the heat produced must be part of the total energy that is conserved.");
			
				p.addAnswer(5, "Living organisms must increase the entropy of their surroundings.",
				false,
				"No. It is true that organisms must increase the entropy of their surroundings, but this is not related to the first law of thermodynamics.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334479;


		
		

		
			
			p.question = "Which is the most abundant form of energy in a cell? (<script type=\"text/javascript\">ebook(\'0801\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "chemical and electrical gradients",
				false,
				"No. Although active transport processes can store energy (potential) in gradients across membranes, there is a far more abundant form of energy present in cells.");
			
				p.addAnswer(2, "mechanical energy",
				false,
				"No. Some cells such as muscles can produce mechanical energy, but this is not a common form of energy in cells.");
			
				p.addAnswer(3, "heat",
				false,
				"No. All cells produce heat as a consequence of their life processes, but this heat is lost from the cell to its environment.");
			
				p.addAnswer(4, "kinetic energy",
				false,
				"No. In most cells, kinetic energy is primarily associated with the movement of atoms and molecules, but there is a far more abundant form of energy in cells.");
			
				p.addAnswer(5, "chemical energy",
				true,
				"Correct. All of the macromolecules that make up a cell contain large amounts of chemical (potential) energy, stored when they were made in anabolic reactions.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334480;


		
		

		
			
			p.question = "Which of the following is an example of the second law of thermodynamics as it applies to biological reactions? (<script type=\"text/javascript\">ebook(\'0801\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "The aerobic respiration of one molecule of glucose produces six molecules each of carbon dioxide and water.",
				true,
				"Correct. The second law of thermodynamics states that every energy transformation makes the universe more disordered&mdash;carbon dioxide and water are more disordered than glucose.");
			
				p.addAnswer(2, "All types of cellular respiration produce ATP.",
				false,
				"No. This is a true statement, but it has nothing to do with the second law of thermodynamics.");
			
				p.addAnswer(3, "Cellular respiration releases some energy as heat.",
				false,
				"No. This is a true statement, but the second law does not require spontaneous processes to produce heat (although many do).");
			
				p.addAnswer(4, "The first and second choices are correct.",
				false,
				"No. There is only one correct answer to this question.");
			
				p.addAnswer(5, "The first, second, and third choices are correct.",
				false,
				"No. There is only one correct answer to this question.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334481;


		
		

		
			
			p.question = "According to the second law of thermodynamics, which of the following is true? (<script type=\"text/javascript\">ebook(\'0801\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Energy conversions increase the order in the universe.",
				false,
				"No. All energy conversions decrease the order in the universe.");
			
				p.addAnswer(2, "The total amount of energy in the universe is constant.",
				false,
				"No. This is true, but it is not a concept related to the second law of thermodynamics.");
			
				p.addAnswer(3, "The decrease in entropy associated with life must be compensated for by an increase in entropy in the environment that life occurs in.",
				true,
				"Correct. The second law of thermodynamics demands that total entropy must increase with any reaction.");
			
				p.addAnswer(4, "The entropy of the universe is constantly decreasing.",
				false,
				"No. The entropy of the universe is increasing.");
			
				p.addAnswer(5, "All reactions produce some heat.",
				false,
				"No. There is no requirement associated with the second law of thermodynamics that all reactions must produce heat.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334482;


		
		

		
			
			p.question = "If the entropy of a living organism is decreasing, which of the following is most likely to be occurring simultaneously? (<script type=\"text/javascript\">ebook(\'0802\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "The entropy of the organism\'s environment must also be decreasing.",
				false,
				"No. The second law says that the total energy (of the system and its environment) <b>must</b> increase.");
			
				p.addAnswer(2, "Heat is being used by the organism as a source of energy.",
				false,
				"No. Such a system would require an input of energy to drive the decrease in entropy, but heat cannot be used to do this in biological systems.");
			
				p.addAnswer(3, "The first law of thermodynamics is being violated.",
				false,
				"No. The first law states that energy must be conserved, and there is no indication that this organism is not conserving energy.");
			
				p.addAnswer(4, "Energy input into the organism must be occurring to drive the decrease in entropy.",
				true,
				"Correct. If the entropy is decreasing, this would tend to make the free energy change associated with this positive. Thus, an input of energy would be required to make this decrease in entropy occur.");
			
				p.addAnswer(5, "In this situation, the second law of thermodynamics must not apply.",
				false,
				"No. The second law only states that the entropy of the universe must always increase. Local decreases are allowed (as in living organisms), but the total entropy, including the organism\'s environment, must increase.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334483;


		
		

		
			
			p.question = "Which one of the following has the most free energy per molecule? (<script type=\"text/javascript\">ebook(\'0802\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "a sugar molecule",
				false,
				"No. Sugars are relatively small molecules with few covalent bonds.");
			
				p.addAnswer(2, "an amino acid molecule",
				false,
				"No. Amino acids are relatively small molecules with few covalent bonds.");
			
				p.addAnswer(3, "a starch molecule",
				true,
				"Correct. Starch is a large polymer of sugar and thus contains many covalent bonds.");
			
				p.addAnswer(4, "a fatty acid molecule",
				false,
				"No. A fatty acid is a relatively small molecule with few covalent bonds.");
			
				p.addAnswer(5, "a cholesterol molecule",
				false,
				"No. Cholesterol is a relatively small molecule with few covalent bonds.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334484;


		
		

		
			
			p.question = "Which part of the equation &Delta;<i>G</i> = &Delta;<i>H</i> - <i>T</i>&Delta;<i>S</i> tells you if a process is spontaneous? (<script type=\"text/javascript\">ebook(\'0802\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "&Delta;<i>G</i>",
				true,
				"Correct. In any spontaneous process, the free energy of a system decreases. The change in free energy equals the change in total energy minus the change in entropy times the temperature.");
			
				p.addAnswer(2, "&Delta;<i>H</i>",
				false,
				"No. Although the change in enthalpy does contribute to the spontaneity of a reaction, other factors must also be taken into account.");
			
				p.addAnswer(3, "&Delta;<i>S</i>",
				false,
				"No. Although the change in entropy does contribute to the spontaneity of a reaction, other factors must also be taken into account.");
			
				p.addAnswer(4, "<i>T</i>&Delta;<i>S</i>",
				false,
				"No. Although the change in entropy does contribute to the spontaneity of a reaction, other factors must also be taken into account.");
			
				p.addAnswer(5, "All of these values reveal the direction in which a reaction will go.",
				false,
				"No. Only one of the above choices can determine definitively whether a reaction is spontaneous or not.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334485;


		
		

		
			
			p.question = "If, during a process, the system becomes more ordered, then _____. (<script type=\"text/javascript\">ebook(\'0802\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "&Delta;<i>G</i> is negative",
				false,
				"No. Entropy alone does not determine the change in free energy (&Delta;<i>G</i>).");
			
				p.addAnswer(2, "&Delta;<i>G</i> is positive",
				false,
				"No. Entropy alone does not determine the change in free energy (&Delta;<i>G</i>).");
			
				p.addAnswer(3, "&Delta;<i>H</i> is negative",
				false,
				"No. The orderliness of a system is not related to the change in enthalpy (&Delta;<i>H</i>).");
			
				p.addAnswer(4, "&Delta;<i>H</i> is positive",
				false,
				"No. The orderliness of a system is not related to the change in enthalpy (&Delta;<i>H</i>).");
			
				p.addAnswer(5, "&Delta;<i>S</i> is negative",
				true,
				"Correct. In an endergonic reaction, in which order is increased, the change in entropy, symbolized by &Delta;<i>S</i>, is negative.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334486;


		
		

		
			
			p.question = "When one molecule is broken down into six component molecules, which one of the following will always be true? (<script type=\"text/javascript\">ebook(\'0802\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "An input of free energy is needed.",
				false,
				"No. This reaction has a large increase in entropy, which in many cases will tend to make the &Delta;<i>G</i> for the reaction negative, meaning no energy input is needed.");
			
				p.addAnswer(2, "&Delta;<i>G</i> is positive.",
				false,
				"No. This reaction has a large increase in entropy, which in many cases will tend to make the &Delta;<i>G</i> for the reaction negative, meaning no energy input is needed.");
			
				p.addAnswer(3, "&Delta;<i>H</i> is negative.",
				false,
				"No. The relative complexity of the reactants and products does not affect enthalpy (&Delta;<i>H</i>).");
			
				p.addAnswer(4, "&Delta;<i>S</i> is positive.",
				true,
				"Correct. The large increase in disorder associated with this reaction means that entropy (&Delta;<i>S</i>) increases.");
			
				p.addAnswer(5, "&Delta;<i>S</i> is negative.",
				false,
				"No. It is true that the change in disorder is associated with entropy (&Delta;<i>S</i>), but increasing disorder does not decrease entropy.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334487;


		
		

		
			
			p.question = "From the equation &Delta;<i>G</i> = &Delta;<i>H</i> - <i>T</i>&Delta;<i>S</i> it is clear that _____. (<script type=\"text/javascript\">ebook(\'0802\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "a decrease in the system\'s total energy will increase the probability of spontaneous change",
				false,
				"No. This answer is correct, but there is a better response.");
			
				p.addAnswer(2, "increasing the entropy of a system will increase the probability of spontaneous change",
				false,
				"No. This answer is correct, but there is a better response.");
			
				p.addAnswer(3, "increasing the temperature of a system will increase the probability of spontaneous change",
				false,
				"No. This answer is correct, but there is a better response.");
			
				p.addAnswer(4, "The first and second choices are correct.",
				false,
				"No. There is a better answer.");
			
				p.addAnswer(5, "The first three choices are correct.",
				true,
				"Correct. This is the best response.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334488;


		
		

		
			
			p.question = "What must be true if the reaction AB + CD &rarr; AC + BD occurs spontaneously? (<script type=\"text/javascript\">ebook(\'0802\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "The &Delta;<i>H</i> of the reaction must be negative.",
				false,
				"No. This will help to make the reaction spontaneous, but there is a better answer.");
			
				p.addAnswer(2, "The &Delta;<i>S</i> of the reaction must be positive.",
				false,
				"No. This will help to make the reaction spontaneous, but there is a better answer.");
			
				p.addAnswer(3, "The reaction must be endergonic.",
				false,
				"No. Endergonic reactions are not spontaneous.");
			
				p.addAnswer(4, "The difference between &Delta;<i>H</i> and <i>T</i>&Delta;<i>S</i> must be negative.",
				true,
				"Correct. In spontaneous reactions, the &Delta;<i>G</i> must be negative.");
			
				p.addAnswer(5, "all of the above",
				false,
				"No. Only one of the possible choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334489;


		
		

		
			
			p.question = "An exergonic (spontaneous) reaction is a chemical reaction that _____. (<script type=\"text/javascript\">ebook(\'0802\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "occurs only when an enzyme or other catalyst is present",
				false,
				"No. Spontaneous reactions can occur in the absence of a catalyst.");
			
				p.addAnswer(2, "cannot occur outside of a living cell",
				false,
				"No. The occurrence of spontaneous reactions is not limited to living systems.");
			
				p.addAnswer(3, "releases energy when proceeding in the forward direction",
				true,
				"Correct. Exergonic reactions proceed with a net release of free energy, and they occur spontaneously.");
			
				p.addAnswer(4, "is common in anabolic pathways",
				false,
				"No. Anabolic pathways construct complex molecules out of simpler building blocks, and thus they require an input of energy (they are endergonic).");
			
				p.addAnswer(5, "leads to a decrease in the entropy of the universe",
				false,
				"No. Spontaneous reactions must increase the entropy of the universe according to the second law of thermodynamics.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334490;


		
		

		
			
			p.question = "Which of the following reactions would be endergonic? (<script type=\"text/javascript\">ebook(\'0802\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "HCl &rarr; H<sup>+</sup> + Cl<sup>-</sup>",
				false,
				"No. This reaction results in less complex products (greater entropy). Perhaps you remember the warning from chemistry about adding acid to water?");
			
				p.addAnswer(2, "C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub> &rarr; 6 CO<sub>2</sub> + 6 H<sub>2</sub>O",
				false,
				"No. This represents the breakdown of glucose, a complex molecule, into less complex products (increasing entropy).");
			
				p.addAnswer(3, "ATP &rarr; ADP + P<sub>i</sub>",
				false,
				"No. Remember that the hydrolysis of ATP is the source of most of the immediate energy for metabolism.");
			
				p.addAnswer(4, "glucose + fructose &rarr; sucrose",
				true,
				"Correct. In this case, the product is more complex (lower entropy) than the reactants, and like many anabolic reactions, this one requires an input of energy.");
			
				p.addAnswer(5, "all of the above",
				false,
				"No. Only one of the choices is an endergonic reaction.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334491;


		
		

		
			
			p.question = "Metabolic pathways in cells are typically far from equilibrium. Which of the following processes tend to keep these pathways away from equilibrium? (<script type=\"text/javascript\">ebook(\'0802\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the continuous removal of the products of a pathway to be used in other reactions",
				false,
				"No. This is one possible way that a pathway can be displaced from equilibrium, but is it the only way?");
			
				p.addAnswer(2, "an input of free energy from outside the pathway",
				false,
				"No. This is one possible way that a pathway can be displaced from equilibrium, but is it the only way?");
			
				p.addAnswer(3, "an input of heat from the environment",
				false,
				"No. Although heat is a form of energy, it cannot be used by cells as an input of energy to change the <font face=\"Symbol\">D</font><i>G</i> of a pathway.");
			
				p.addAnswer(4, "The first and second choices are correct.",
				true,
				"Correct. Pathways can be displaced from equilibrium either by adding free energy or by removal of the products of the pathway by other reactions.");
			
				p.addAnswer(5, "The first, second, and third choices are correct.",
				false,
				"No. Two of these three choices are correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334492;


		
		

		
			
			p.question = "Which of the following is an example of the cellular work accomplished with the free energy derived from the hydrolysis of ATP? (<script type=\"text/javascript\">ebook(\'0803\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "mechanical work, such as the beating of cilia",
				false,
				"No. Although this is an example of cellular work, there is a better answer.");
			
				p.addAnswer(2, "transport work, such as the active transport of an ion into a cell",
				false,
				"No. Although this is an example of cellular work, there is a better answer.");
			
				p.addAnswer(3, "chemical work, such as the synthesis of new protein",
				false,
				"No. Although this is an example of cellular work, there is a better answer.");
			
				p.addAnswer(4, "all of the above",
				true,
				"Correct. All three choices above are examples of cellular work.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. The three examples above are all examples of cellular work.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334493;


		
		

		
			
			p.question = "In general, the hydrolysis of ATP drives cellular work by _____. (<script type=\"text/javascript\">ebook(\'0803\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "changing to ADP and phosphate",
				false,
				"No. Although ATP is broken down into ADP and P<sub>i</sub>, you need to consider how this is then used to drive another reaction.");
			
				p.addAnswer(2, "releasing free energy that can be coupled to other reactions",
				true,
				"Correct. With the help of specific enzymes, the cell can couple the energy of ATP hydrolysis directly to endergonic processes.");
			
				p.addAnswer(3, "releasing heat",
				false,
				"No. Heat is released in the hydrolysis of ATP, but heat is not available to do cellular work.");
			
				p.addAnswer(4, "acting as a catalyst",
				false,
				"No. ATP is not a catalyst.");
			
				p.addAnswer(5, "lowering the free energy of the reaction",
				false,
				"No. The free energy of ATP hydrolysis is used to provide energy to overcome the positive <font face=\"Symbol\">D</font><i>G</i> of a reaction, not the activation energy barrier.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334494;


		
		

		
			
			p.question = "Which of the following statements correctly describes some aspect of ATP hydrolysis being used to drive the active transport of an ion into the cell against the ion\'s concentration gradient? (<script type=\"text/javascript\">ebook(\'0802\',\'quiz\')</script> and <script type=\"text/javascript\">ebook(\'0803\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "ATP is acting as a transport protein to facilitate the movement of the ion across the plasma membrane.",
				false,
				"No. ATP is not a protein.");
			
				p.addAnswer(2, "The hydrolysis of ATP endergonic, and the active transport exergonic.",
				false,
				"No. ATP hydrolysis is exergonic, and active transport is endergonic.");
			
				p.addAnswer(3, "Neither ATP hydrolysis nor active transport is spontaneous.",
				false,
				"No. The hydrolysis of ATP is a spontaneous reaction (one that occurs with a release of free energy).");
			
				p.addAnswer(4, "This is an example of energy coupling.",
				true,
				"Correct. The free energy released from the hydrolysis of ATP is coupled to the energy-requiring active transport of the ion across a membrane.");
			
				p.addAnswer(5, "Both ATP hydrolysis and active transport are spontaneous because they result in an increase in entropy of the system.",
				false,
				"No. Moving an ion against its concentration gradient by active transport decreases entropy in a system.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334495;


		
		

		
			
			p.question = "Which compound could be most easily modified to form ATP? (<script type=\"text/javascript\">ebook(\'0803\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the RNA nucleotide adenosine",
				true,
				"Correct. ATP has three phosphate groups attached to ribose, which is attached to adenine. The RNA nucleotide adenosine contains only one phosphate.");
			
				p.addAnswer(2, "the amino acid tryptophan",
				false,
				"No. Although there is some superficial similarity in the ring structures, the molecules are quite different.");
			
				p.addAnswer(3, "the DNA nucleotide adenosine",
				false,
				"No. The sugar in DNA bases is deoxyribose; the sugar in ATP is ribose.");
			
				p.addAnswer(4, "the nitrogenous base adenine",
				false,
				"No. Although adenine is one part of the ATP molecule, there is a better answer.");
			
				p.addAnswer(5, "the monosaccharide ribose",
				false,
				"No. Although ribose is one part of the ATP molecule, there is a better answer.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334496;


		
		

		
			
			p.question = "Much of the suitability of ATP as an energy intermediary is related to the instability of the bonds between the phosphate groups. These bonds are unstable because _____. (<script type=\"text/javascript\">ebook(\'0803\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the valence electrons in the phosphorus atom have less energy on average than those of other atoms",
				false,
				"No. If this were true, all molecules containing phosphorus would be unstable, not just ATP.");
			
				p.addAnswer(2, "the negatively charged phosphate groups vigorously repel one another and the terminal phosphate group is more stable in water than it is in ATP",
				true,
				"Correct. Negative charges repel each other. Loss of the terminal phosphate removes some of the repulsion.");
			
				p.addAnswer(3, "they are hydrogen bonds, which are only about 10% as strong as covalent bonds",
				false,
				"No. The bonds between the phosphate groups are covalent.");
			
				p.addAnswer(4, "the phosphate groups are polar and are attracted to the water in the cell\'s interior",
				false,
				"No. Phosphate groups are very hydrophilic, but so are all other water-soluble molecules. Other characteristics of ATP make it suitable as an energy intermediary.");
			
				p.addAnswer(5, "the bonds between the phosphate groups are unusually strong and breaking them releases free energy",
				false,
				"No. Unstable bonds are not strong bonds.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334497;


		
		

		
			
			p.question = "When 1 mole of ATP is hydrolyzed in a test tube without an enzyme, about twice as much heat is given off as when 1 mole of ATP is hydrolyzed in a cell. Which of the following best explains these observations? (<script type=\"text/javascript\">ebook(\'0803\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Cells are less efficient at energy metabolism than reactions that are optimized in a test tube.",
				false,
				"No. The smaller amount of heat released by the cell means it is more energy efficient than the test tube.");
			
				p.addAnswer(2, "The amount of heat released by a reaction has nothing to do with the free energy change of the reaction.",
				false,
				"No. The heat released is part of the free energy made available by the hydrolysis of ATP.");
			
				p.addAnswer(3, "In the cell, the hydrolysis of ATP is coupled to other endergonic reactions.",
				true,
				"Correct. The coupling of ATP to other endergonic processes in cells means that less of the free energy is released as heat. When ATP is hydrolyzed without this coupling, all of the energy is released as heat.");
			
				p.addAnswer(4, "In cells, ATP is hydrolyzed to ADP and P<sub>i</sub>, but in the test tube it is hydrolyzed to carbon dioxide and water.",
				false,
				"No. The hydrolysis reactions are the same (addition of water to break a phosphate-phosphate bond) in both cases.");
			
				p.addAnswer(5, "Cells have the ability to store heat; this cannot happen in a test tube.",
				false,
				"No. Cells cannot store heat; they rapidly lose the heat to their surroundings.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334498;


		
		

		
			
			p.question = "What best characterizes the role of ATP in cellular metabolism? (<script type=\"text/javascript\">ebook(\'0803\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "The release of free energy during the hydrolysis of ATP heats the surrounding environment.",
				false,
				"No. Although some of the energy released in the hydrolysis of ATP is heat, this does not best characterize its role in metabolism.");
			
				p.addAnswer(2, "The free energy released by ATP hydrolysis may be coupled to an endergonic process via the formation of a phosphorylated intermediate.",
				true,
				"Correct. This is one way a cell can use an exergonic reaction to drive an endergonic reaction.");
			
				p.addAnswer(3, "It is catabolized to carbon dioxide and water.",
				false,
				"No. ATP is formed from ADP and P<sub>i</sub> using the energy released from catabolic reactions such as cellular respiration (whose products are carbon dioxide and water).");
			
				p.addAnswer(4, "The <font face=\"Symbol\">D</font><i>G</i> associated with its hydrolysis is positive.",
				false,
				"No. If the <font face=\"Symbol\">D</font><i>G</i> were positive, it would indicate that the reaction requires an input of energy rather than releasing free energy.");
			
				p.addAnswer(5, "The charge on the phosphate group of ATP tends to make the molecule very water-soluble.",
				false,
				"No. Although charged groups do tend to make molecules more water-soluble, this does not characterize the role of ATP in cellular metabolism.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334499;


		
		

		
			
			p.question = "The formation of glucose-6-phosphate from glucose is an endergonic reaction and is coupled to which of the following reactions or pathways? (<script type=\"text/javascript\">ebook(\'0803\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the conversion of glucose + fructose to make sucrose",
				false,
				"No. The formation of sucrose is also an endergonic reaction and does not provide the phosphate group needed to make glucose-6-phosphate from glucose.");
			
				p.addAnswer(2, "the contraction of a muscle cell",
				false,
				"No. Muscle contraction requires an input of energy and so does the formation of glucose-6-phosphate; thus, they could not be coupled.");
			
				p.addAnswer(3, "the hydrolysis of ATP",
				true,
				"Correct. With the help of specific enzymes, the cell is able to couple the energy of ATP hydrolysis directly to endergonic processes by transferring a phosphate group from ATP to some other molecule, such as glucose.");
			
				p.addAnswer(4, "the active transport of a phosphate ion into the cell",
				false,
				"No. Both the formation of glucose-6-phosphate and active transport are endergonic reactions and could not be coupled to each other.");
			
				p.addAnswer(5, "the formation of ATP from ADP + P<SUB>i</SUB>",
				false,
				"No. This reaction requires an input of energy and does not provide a phosphate group to transfer to the glucose.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334500;


		
		

		
			
			p.question = "A chemical reaction is designated as exergonic rather than endergonic when _____. (<script type=\"text/javascript\">ebook(\'0802\',\'quiz\')</script> and <script type=\"text/javascript\">ebook(\'0804\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "activation energy is required",
				false,
				"No. Activation energy is required for both types of reactions.");
			
				p.addAnswer(2, "the products are less complex than the reactants",
				false,
				"No. The complexity of the products relative to the reactants is a measure of entropy, but increasing entropy is not the only thing that determines whether a reaction is exergonic.");
			
				p.addAnswer(3, "activation energy exceeds net energy release",
				false,
				"No. The amount of activation energy has nothing to do with whether a reaction is exergonic or endergonic.");
			
				p.addAnswer(4, "the potential energy of the products is less than the potential energy of the reactants",
				true,
				"Correct. If a reaction is exergonic, the formation of new bonds releases more energy than was invested in breaking the old bonds.");
			
				p.addAnswer(5, "it absorbs more energy",
				false,
				"No. An exergonic reaction releases free energy.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334501;


		
		

		
			
			p.question = "What do the sign and magnitude of the &Delta;<i>G</i> of a reaction tell us about the speed of the reaction? (<script type=\"text/javascript\">ebook(\'0802\',\'quiz\')</script> and <script type=\"text/javascript\">ebook(\'0804\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "The sign determines whether the reaction is spontaneous, and the magnitude determines the speed.",
				false,
				"No. Neither the sign nor the magnitude of &Delta;<i>G</i> have anything to do with the speed of a reaction.");
			
				p.addAnswer(2, "The sign does not matter, but the larger the magnitude of &Delta;<i>G</i> the faster the reaction.",
				false,
				"No. Neither the sign nor the magnitude of &Delta;<i>G</i> have anything to do with the speed of a reaction.");
			
				p.addAnswer(3, "The sign does not matter, but the smaller the magnitude of &Delta;<i>G</i> the faster the reaction.",
				false,
				"No. Neither the sign nor the magnitude of &Delta;<i>G</i> have anything to do with the speed of a reaction.");
			
				p.addAnswer(4, "The more negative the &Delta;<i>G</i>, the faster the reaction is.",
				false,
				"No. Neither the sign nor the magnitude of &Delta;<i>G</i> have anything to do with the speed of a reaction.");
			
				p.addAnswer(5, "Neither the sign nor the magnitude of &Delta;<i>G</i> have anything to do with the speed of a reaction.",
				true,
				"Correct. The speed of a reaction is determined by the activation energy barrier of the reaction and the temperature (which determines how many reactants have the energy to overcome the barrier).");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334502;


		
		

		
			
			p.question = "The mechanism of enzyme action is _____. (<script type=\"text/javascript\">ebook(\'0804\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "providing energy to speed up the rate of the reaction",
				false,
				"No. Enzymes cannot provide energy to make a reaction go faster; they lower the energy requirement to get over the activation energy barrier.");
			
				p.addAnswer(2, "lowering the energy of activation for a reaction",
				true,
				"Correct. Enzymes lower the activation energy of a reaction.");
			
				p.addAnswer(3, "changing the direction of thermodynamic equilibrium",
				false,
				"No. Enzymes can change the rate of a reaction, but not the direction toward equilibrium.");
			
				p.addAnswer(4, "changing endergonic into exergonic reactions",
				false,
				"No. This would involve changing the <font face=\"Symbol\">D</font><i>G</i> for the reaction, and enzymes cannot do this.");
			
				p.addAnswer(5, "lowering the free energy change of a reaction",
				false,
				"No. Enzymes do not change the free energy change (<font face=\"Symbol\">D</font><i>G</i>) for the reaction they catalyze.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334503;


		
		

		
			
			p.question = "Which of the following statements about enzymes is true? (<script type=\"text/javascript\">ebook(\'0804\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Enzymes increase the rate of a reaction by raising the activation energy for reactions.",
				false,
				"No. Enzymes lower the activation energy.");
			
				p.addAnswer(2, "Enzymes react with their substrate (form chemical bonds) forming an enzyme-substrate complex, which irreversibly alters the enzyme.",
				false,
				"No. Some enzymes do form covalent bonds with their substrates, but these bonds are eventually broken before the products are released. All enzymes are unchanged as a result of their participation in a reaction.");
			
				p.addAnswer(3, "Enzymes speed up the rate of the reaction without changing the <font face=\"Symbol\">D</font><i>G</i> for the reaction.",
				true,
				"Correct. Enzymes speed up reactions by lowering the activation energy barrier for the reaction. Enzymes cannot change the <font face=\"Symbol\">D</font><i>G</i> for the reaction.");
			
				p.addAnswer(4, "The more heat that is added to a reaction, the faster the enzymes will function.",
				false,
				"No. If heated too much, an enzyme will no longer function efficiently because excess heat will denature the enzyme.");
			
				p.addAnswer(5, "all of the above",
				false,
				"No. Just one of the choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334504;


		
		

		
			
			p.question = "Which of the following statements about enzyme function is correct? (<script type=\"text/javascript\">ebook(\'0804\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Enzymes can greatly speed up reactions, but they cannot change the net energy output because they cannot change the activation energy.",
				false,
				"No. Enzymes can speed up reactions because they can lower the activation energy.");
			
				p.addAnswer(2, "Enzymes can change the equilibrium point of reactions, but they cannot speed up reactions because they cannot change the net energy output.",
				false,
				"No. Enzymes cannot change the equilibrium point, but they can speed up reactions.");
			
				p.addAnswer(3, "Enzymes can greatly speed up reactions, but they cannot change the activation energy because they cannot change the net energy output.",
				false,
				"No. Enzymes speed up reactions by lowering the activation energy.");
			
				p.addAnswer(4, "Enzymes can lower the activation energy of reactions, but they cannot change the equilibrium point because they cannot change the net energy output.",
				true,
				"Correct. Enzymes lower the activation energy barrier of a reaction but do not change the free energy of the products.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334505;


		
		

		
			
			p.question = "A plot of reaction rate (velocity) against temperature for an enzyme indicates little activity at 10&deg;C and 45&deg;C, with peak activity at 35&deg;C. The most reasonable explanation for the low velocity at 10&deg;C is that _____. (<script type=\"text/javascript\">ebook(\'0804\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the hydrogen bonds that define the structure of the enzyme\'s active site are unstable",
				false,
				"No. But this might be true at 45&deg;C.");
			
				p.addAnswer(2, "the substrate becomes a competitive inhibitor at lower temperature",
				false,
				"No. A substrate can never be a competitive inhibitor of itself.");
			
				p.addAnswer(3, "the enzyme was denatured",
				false,
				"No. But this might be true at 45&deg;C.");
			
				p.addAnswer(4, "the cofactors required by the enzyme system lack the thermal energy required to activate the enzyme",
				false,
				"No. Cofactors do not provide activation energy for enzyme-catalyzed reactions.");
			
				p.addAnswer(5, "there is too little activation energy available",
				true,
				"Correct. The environment usually supplies activation energy in the form of heat. The lower the temperature, the less energy that is available to overcome the activation energy barrier.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334506;


		
		

		
			
			p.question = "Which of the following statements about enzymes is <b>correct</b>? (<script type=\"text/javascript\">ebook(\'0804\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Most enzymes are proteins.",
				false,
				"No. Although this statement is true, there is a better answer.");
			
				p.addAnswer(2, "An enzyme is not consumed by the catalytic process.",
				false,
				"No. Although this statement is true, there is a better answer.");
			
				p.addAnswer(3, "An enzyme is very specific in terms of which substrate it binds to.",
				false,
				"No. Although this statement is true, there is a better answer.");
			
				p.addAnswer(4, "An enzyme lowers the activation energy of a chemical reaction.",
				false,
				"No. Although this statement is true, there is a better answer.");
			
				p.addAnswer(5, "all of the above",
				true,
				"Correct. Most enzymes are catalytic proteins that change the rate of reactions without being consumed by the reaction. (Ribozymes, another class of biological catalysts, are made of RNA.) An enzyme speeds a reaction by lowering the activation energy barrier. An enzyme can distinguish its substrate from even closely related compounds such as isomers.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334507;


		
		

		
			
			p.question = "Which of the following statements about the active site of an enzyme is correct? (<script type=\"text/javascript\">ebook(\'0804\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "The active site has a fixed structure (shape).",
				false,
				"No. The active site of an enzyme changes when it binds to its substrate(s)&mdash;this is induced fit.");
			
				p.addAnswer(2, "Coenzymes are never found in the active site of an enzyme.",
				false,
				"No. Some coenzymes are bound to active sites.");
			
				p.addAnswer(3, "The active site may resemble a groove or pocket in the surface of a protein into which the substrate fits.",
				true,
				"Correct. Only a restricted region of an enzyme molecule (the active site) binds to the substrate. Usually, the active site is formed by only a few of the amino acids, with the rest of the protein molecule providing a framework that reinforces the configuration of the active site.");
			
				p.addAnswer(4, "The structure of the active site is not affected by changes in temperature.",
				false,
				"No. As temperature increases, the structure of the active site will eventually be lost as the protein denatures.");
			
				p.addAnswer(5, "The active site allows the reaction to occur under the same environmental conditions as the reaction without the enzyme.",
				false,
				"No. The active site often changes the local environment to one that favors the reaction by lowering the activation energy.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334508;


		
		

		
			
			p.question = "What is meant by the \"induced fit\" of an enzyme? (<script type=\"text/javascript\">ebook(\'0804\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "The substrate can be altered so that it is induced to fit into the enzyme\'s active site.",
				false,
				"No. The substrate does not change to induce a fit into the active site.");
			
				p.addAnswer(2, "The enzyme structure is altered so that it can be induced to fit many different types of substrate.",
				false,
				"No. Each enzyme recognizes a specific substrate or a specific type of substrate.");
			
				p.addAnswer(3, "The presence of the substrate in solution induces the enzyme to slightly change its structure.",
				false,
				"No. A substrate free in solution has no effect on the structure of the enzyme. There must be a closer interaction for structural changes to occur.");
			
				p.addAnswer(4, "The shape of the active site is nearly perfect for specifically binding the enzyme\'s substrate(s).",
				false,
				"No. This is a true statement, but it has nothing directly to do with induced fit, which refers to changes in the structure of the active site.");
			
				p.addAnswer(5, "The enzyme changes its shape slightly as the substrate binds to it.",
				true,
				"Correct. The enzyme changes slightly to bind to the substrate and catalyze the reaction.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334509;


		
		

		
			
			p.question = "Which of the following statements correctly describe(s) the role(s) of heat and temperature in biological reactions? (<script type=\"text/javascript\">ebook(\'0804\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Heat from the environment is necessary for substrates to get over the activation energy barrier.",
				false,
				"No. This is a correct statement, but is this the only correct answer?");
			
				p.addAnswer(2, "Increasing temperature increases the kinetic energy of the substrates.",
				false,
				"No. This is a correct statement, but is this the only correct answer?");
			
				p.addAnswer(3, "Increasing the temperature will increase the rate of enzyme-catalyzed reactions.",
				false,
				"No. This is true only for a limited temperature range. With increasing temperatures, the enzyme will eventually denature, leading to a lower rate of the reaction.");
			
				p.addAnswer(4, "The first and second choices are correct.",
				true,
				"Correct.");
			
				p.addAnswer(5, "The first, second, and third choices are correct.",
				false,
				"No. At least one of these three choices is incorrect.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334510;


		
		

		
			
			p.question = "Above a certain substrate concentration, the rate of an enzyme-catalyzed reaction drops as the enzymes become saturated. Which of the following would lead to a faster conversion of substrate into product under these saturated conditions? (<script type=\"text/javascript\">ebook(\'0804\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "an increase in concentration of enzyme",
				false,
				"No. Adding more enzyme can overcome substrate saturation of an enzyme, but this is not the only correct answer.");
			
				p.addAnswer(2, "increasing the temperature by a few degrees",
				false,
				"No. This is a correct statement (slightly increased temperature will speed up the reaction), but this is not the only correct answer.");
			
				p.addAnswer(3, "increasing the substrate concentration",
				false,
				"No. If the enzyme is saturated with respect to its substrate, adding more substrate will have no effect on the rate of product formation.");
			
				p.addAnswer(4, "The first and second choices are correct.",
				true,
				"Correct. Either increasing the enzyme concentration or slightly increasing the temperature will increase the rate of product formation.");
			
				p.addAnswer(5, "The first, second, and third choices are correct.",
				false,
				"No. At least one of these choices is incorrect");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334511;


		
		

		
			
			p.question = "Which of the following environments or actions affect(s) the rate of an enzyme reaction? (<script type=\"text/javascript\">ebook(\'0804\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "heating the enzyme",
				false,
				"No. Although this will eventually denature the enzyme and therefore inactivate it, is this the only correct choice?");
			
				p.addAnswer(2, "cooling the enzyme",
				false,
				"No. Although this<b> </b>will slow down molecular activity, slowing the rate of contact between enzyme and substrate and the catalytic reaction of the enzyme, is this the only correct choice?");
			
				p.addAnswer(3, "substrate concentration",
				false,
				"No. Although substrate concentration does affect reaction rate, is this the only correct choice?");
			
				p.addAnswer(4, "pH",
				false,
				"No. Although a change in hydrogen ion concentration can change the chemical bonds that give the enzyme protein its final structure or the charge on critical amino acids in the active site, is this the only correct choice?");
			
				p.addAnswer(5, "all of the above",
				true,
				"Correct. Changes in temperature, substrate concentration, and pH are all likely to affect enzyme activity.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334512;


		
		

		
			
			p.question = "Enzyme activity is affected by pH because _____. (<script type=\"text/javascript\">ebook(\'0804\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "most substrates don\'t function well at high or low pH",
				false,
				"No. Although pH can affect the structure of the substrate, it is more likely to affect something else.");
			
				p.addAnswer(2, "high or low pH may disrupt hydrogen bonding or ionic interactions and thus change the shape of the active site",
				true,
				"Correct. Each enzyme has an optimal pH at which it is most active, and variations in pH can alter the enzyme\'s structure, changing activity.");
			
				p.addAnswer(3, "low pH will denature all enzymes",
				false,
				"No. Enzymes that function in the stomach function optimally at very low pH.");
			
				p.addAnswer(4, "changes in pH can cause loss of cofactors from the enzyme",
				false,
				"No. Although pH changes can cause an enzyme to lose a cofactor, even enzymes without cofactors are affected by changes in pH.");
			
				p.addAnswer(5, "the binding of hydrogen ions to the enzyme absorbs energy and thus there may not be enough energy to overcome the activation energy barrier",
				false,
				"No. Binding of hydrogen ions does not affect the energy that is available to overcome the activation energy barrier.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334513;


		
		

		
			
			p.question = "Which of these statements about enzyme inhibitors is true? (<script type=\"text/javascript\">ebook(\'0804\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "A competitive inhibitor binds to the enzyme at a place that is separate from the active site.",
				false,
				"No. A competitive inhibitor competes with the substrate for binding at the active site.");
			
				p.addAnswer(2, "The action of competitive inhibitors may be reversible or irreversible.",
				true,
				"Correct. Competitive inhibitors that bind covalently to the enzyme would be irreversible, and those that bind weakly would be reversible.");
			
				p.addAnswer(3, "A noncompetitive inhibitor does not change the shape of the active site.",
				false,
				"No. A noncompetitive inhibitor changes the shape of the enzyme and its active site by binding to a site different from the active site.");
			
				p.addAnswer(4, "When the product of an enzyme or an enzyme sequence acts as its inhibitor, this is known as positive feedback.",
				false,
				"No. This is an example of negative feedback.");
			
				p.addAnswer(5, "Inhibition of enzyme function by compounds that are not substrates is something that only occurs under controlled conditions in the laboratory.",
				false,
				"No. Almost all biological reactions or pathways are regulated by non-competitive or allosteric interactions.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334514;


		
		

		
			
			p.question = "Succinylcholine is structurally almost identical to acetylcholine. If succinylcholine is added to a mixture that contains acetylcholine and the enzyme that hydrolyzes acetylcholine (but not succinylcholine), the rate of acetylcholine hydrolysis is decreased. Subsequent addition of more acetylcholine restores the original rate of acetylcholine hydrolysis. Which of the following correctly explains this observation? (<script type=\"text/javascript\">ebook(\'0804\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Succinylcholine must be a competitive inhibitor with acetylcholine.",
				true,
				"Correct. Competitive inhibition occurs when a molecule mimics the substrate by competing with it at the active site.");
			
				p.addAnswer(2, "Succinylcholine must be an allosteric regulator for this enzyme.",
				false,
				"No. Although this is remotely possible, the observations are much more consistent with a different role for succinylcholine.");
			
				p.addAnswer(3, "The active site must have the wrong configuration to permit succinylcholine binding.",
				false,
				"No. The observations are consistent with acetylcholine and succinylcholine competing for the active site of the enzyme.");
			
				p.addAnswer(4, "Succinylcholine must be a non-competitive inhibitor.",
				false,
				"No. Noncompetitive inhibition occurs when a molecule dissimilar to the substrate interacts with the enzyme at a site that is separate from the active site.");
			
				p.addAnswer(5, "The activation energy barrier for succinylcholine hydrolysis is higher than for acetylcholine hydrolysis.",
				false,
				"No. The enzyme is not capable of hydrolyzing succinylcholine, so its activation energy barrier must be much higher than that of acetylcholine.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334515;


		
		

		
			
			p.question = "The process of stabilizing the structure of an enzyme in its active form by the binding of a molecule is an example of _____. (<script type=\"text/javascript\">ebook(\'0805\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "feedback inhibition",
				false,
				"No. In feedback inhibition, accumulating product inhibits one of the early enzymes in the metabolic pathway.");
			
				p.addAnswer(2, "competitive inhibition",
				false,
				"No. In this form of competition, a molecule similar to the substrate blocks the active site.");
			
				p.addAnswer(3, "allosteric regulation",
				true,
				"Correct. The molecule in this example would be termed an allosteric activator.");
			
				p.addAnswer(4, "non-competitive inhibition",
				false,
				"No. Binding of a non-competitive inhibitor would stabilize the enzyme in a form that is less active, not more active.");
			
				p.addAnswer(5, "cooperativity",
				false,
				"No. In cooperativity, the binding of the substrate to one active site increases the affinity of other active sites on the same enzyme for the substrate.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334516;


		
		

		
			
			p.question = "Which of the following statements about allosteric proteins is/are true? (<script type=\"text/javascript\">ebook(\'0805\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "They are sensitive to environmental conditions.",
				false,
				"No. Although this is a true statement, is it the only correct statement?");
			
				p.addAnswer(2, "They are acted on by inhibitors.",
				false,
				"No. Although this is a true statement, is it the only correct statement?");
			
				p.addAnswer(3, "They exist in active and inactive conformations.",
				false,
				"No. Although this is a true statement, is it the only correct statement?");
			
				p.addAnswer(4, "all of the above",
				true,
				"Correct.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. All of the above statements are true of allosteric proteins.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334517;


		
		

		
			
			p.question = "The binding of an allosteric inhibitor to an enzyme causes the rate of product formation by the enzyme to decrease. Which of the following best explains why this decrease occurs? (<script type=\"text/javascript\">ebook(\'0805\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "The allosteric inhibitor binds to the active site, preventing the substrate from binding.",
				false,
				"No. Allosteric regulators bind at sites that are different from the active site.");
			
				p.addAnswer(2, "The allosteric inhibitor causes free energy change of the reaction to increase.",
				false,
				"No. The allosteric inhibitor will cause an increase in the activation energy of the reaction.");
			
				p.addAnswer(3, "The allosteric inhibitor causes a structural change in the enzyme that prevents the substrate from binding at the active site.",
				true,
				"Correct. In general, any allosteric regulator functions by changing the structure of the enzyme to either change the ability of the active site to bind the substrate or to facilitate the chemical reaction.");
			
				p.addAnswer(4, "The allosteric inhibitor lowers the temperature of the active site.",
				false,
				"No. The temperature of the active site is the same as the environment that surrounds it.");
			
				p.addAnswer(5, "The allosteric inhibitor binds to the substrate and prevents it from binding at the active site.",
				false,
				"No. Although anything that binds to the substrate would alter its ability to bind at the active site, this is not the way that allosteric regulators work.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334518;


		
		

		
			
			p.question = "Under most conditions, the supply of energy by catabolic pathways is regulated by the demand for energy by anabolic pathways. Considering the role of ATP formation and hydrolysis in energy coupling of anabolic and catabolic pathways, which of the following statements is most likely to be true? (<script type=\"text/javascript\">ebook(\'0805\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "High levels of ADP act as an allosteric inhibitor of catabolic pathways.",
				false,
				"No. High levels of ADP would indicate that the demand for ATP by anabolic pathways exceeds supply by catabolic pathways&mdash;ADP should activate catabolic pathways.");
			
				p.addAnswer(2, "High levels of ATP act as an allosteric activator of anabolic pathways.",
				false,
				"No. If energy supply is dictated by demand for energy, you would not want high ATP (high supply) to activate anabolic pathways&mdash;then supply would regulate demand.");
			
				p.addAnswer(3, "High levels of ATP act as an allosteric activator of catabolic pathways.",
				false,
				"No. This would mean that high supply of energy by catabolic pathways would increase the supply of energy by catabolic pathways&mdash;a kind of positive feedback.");
			
				p.addAnswer(4, "High levels of ADP act as an allosteric activator of catabolic pathways",
				true,
				"Correct. In this case, high demand for energy by anabolic pathways uses ATP, increasing the level of ADP, which in turn increases the supply of ATP from catabolic pathways.");
			
				p.addAnswer(5, "High levels of ADP act as an allosteric inhibitor of anabolic pathways.",
				false,
				"No. In this case, high ADP (indicative of high demand or low supply) would have no effect on supply by the catabolic pathways.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

