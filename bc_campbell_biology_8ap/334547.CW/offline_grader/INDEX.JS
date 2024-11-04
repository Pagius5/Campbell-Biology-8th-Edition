

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "9: Cellular Respiration: Harvesting Chemical Energy > Practice Test";
	ak.quiz_loc_with_commas = "9: Cellular Respiration: Harvesting Chemical Energy, Practice Test";
	ak.quiz_title = "Practice Test";

	
		ak.help_url = "../../placeholders/help_placeholder.html";
	
	ak.essay_total = 0;
	ak.pair_problem_total = 0;
	ak.pair_total = 0;
	ak.problem_total = 47;
	ak.non_essay_total = 47;
	ak.scored_item_total = 47;

	
	
	


	
	ak.copyright_date = "2008";
	ak.brandname = "Pearson Benjamin Cummings";
	ak.legal = "../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.pearsoned.com%2Flegal%2Findex.htm";


	// Loop over all problems
	
	
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334548;


		
		

		
			
			p.question = "A molecule becomes more oxidized when it _____. (<script type=\"text/javascript\">ebook(\'0901\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "changes shape",
				false,
				"No. Oxidation changes the shape of the molecule; a change in shape does not cause oxidation.");
			
				p.addAnswer(2, "gains a hydrogen (H<sup>+</sup>) ion",
				false,
				"No. Oxidation involves changes in electrons.");
			
				p.addAnswer(3, "loses a hydrogen (H<sup>+</sup>) ion",
				false,
				"No. Oxidation involves changes in electrons.");
			
				p.addAnswer(4, "gains an electron",
				false,
				"No. Gaining an electron is reduction.");
			
				p.addAnswer(5, "loses an electron",
				true,
				"Correct. During oxidation, an electron is removed.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334549;


		
		

		
			
			p.question = "In the overall process of glycolysis and cellular respiration, _____ is oxidized and _____ is reduced. (<script type=\"text/javascript\">ebook(\'0901\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "oxygen; ATP",
				false,
				"No. During oxidation, electrons and hydrogen are removed.");
			
				p.addAnswer(2, "ATP; oxygen",
				false,
				"No. However, you are partly right. Oxygen is reduced.");
			
				p.addAnswer(3, "glucose; oxygen",
				true,
				"Correct. In cellular respiration, electrons and hydrogen are removed from glucose and added to oxygen.");
			
				p.addAnswer(4, "carbon dioxide; water",
				false,
				"No. The carbon in carbon dioxide is already oxidized.");
			
				p.addAnswer(5, "glucose; ATP",
				false,
				"No. However, you are partly right. Glucose is oxidized.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334550;


		
		

		
			
			p.question = "Most of the ATP produced in cellular respiration comes from which of the following processes? (<script type=\"text/javascript\">ebook(\'0901\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "glycolysis",
				false,
				"No. During glycolysis, glucose is metabolized into two molecules of pyruvate with a net yield of only two ATP.");
			
				p.addAnswer(2, "oxidative phosphorylation",
				true,
				"Correct. After hydrogen ions are pumped into the mitochondrial intermembrane space, they flow back through ATP synthase, which produces most of the ATP associated with cellular respiration.");
			
				p.addAnswer(3, "reduction of NADH",
				false,
				"No. It is the oxidation of NADH that produces most of the ATP in cellular respiration.");
			
				p.addAnswer(4, "substrate-level phosphorylation",
				false,
				"No. ATP synthesis by this mechanism occurs in glycolysis and the citric acid cycle, but it accounts for only a small amount of the total ATP made in respiration.");
			
				p.addAnswer(5, "the citric acid cycle",
				false,
				"No. A little ATP is produced in the citric acid cycle, but the most important products are the reduced electron carriers NADH and FADH<sub>2</sub>.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334551;


		
		

		
			
			p.question = "Oxygen gas (O<sub>2</sub>) is one of the strongest oxidizing agents known. The explanation for this is that _____. (<script type=\"text/javascript\">ebook(\'0901\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "oxygen is so abundant in the atmosphere",
				false,
				"No. Oxygen does make up 22% of the atmosphere, but this does not determine its redox properties.");
			
				p.addAnswer(2, "oxygen gas is composed of two atoms of oxygen",
				false,
				"No. Oxygen gas is composed of two atoms of oxygen, but its strength as an oxidizing agent is more dependent on the properties of the oxygen atom.");
			
				p.addAnswer(3, "oxygen gas contains a double bond",
				false,
				"No. Atoms with double bonds are not necessarily strong oxidizing agents.");
			
				p.addAnswer(4, "the oxygen atom is very electronegative",
				true,
				"Correct. The high electronegativity of the oxygen atom is the reason that oxygen is such a good oxidizing agent (why it can oxidize so many compounds).");
			
				p.addAnswer(5, "oxygen acts as the final electron acceptor in cellular respiration",
				false,
				"No. It is the other way around&mdash;oxygen acts as the final electron acceptor in cellular respiration because it is such a strong oxidizing agent.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334552;


		
		

		
			
			p.question = "The function of cellular respiration is to _____. (<script type=\"text/javascript\">ebook(\'0901\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "reduce CO<sub>2</sub>",
				false,
				"No. The reduction of CO<sub>2</sub> is an energy-requiring process.");
			
				p.addAnswer(2, "extract CO<sub>2</sub> from the atmosphere",
				false,
				"No. Cellular respiration produces carbon dioxide as a product.");
			
				p.addAnswer(3, "extract usable energy from glucose",
				true,
				"Correct. The most prevalent and efficient catabolic pathway is cellular respiration in which oxygen is consumed as a reactant, along with the organic fuel (frequently glucose).");
			
				p.addAnswer(4, "synthesize macromolecules from monomers",
				false,
				"No. Cellular respiration is a catabolic process.");
			
				p.addAnswer(5, "produce carbohydrates",
				false,
				"No. Cellular respiration breaks down carbohydrates.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334553;


		
		

		
			
			p.question = "During the reaction C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub> &rarr; 6 CO<sub>2</sub> + 6 H<sub>2</sub>O, which compound is reduced as a result of the reaction? (<script type=\"text/javascript\">ebook(\'0901\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "oxygen",
				true,
				"Correct. In cellular respiration, glucose is oxidized to carbon dioxide and oxygen is reduced to water.");
			
				p.addAnswer(2, "glucose",
				false,
				"No. Glucose is oxidized.");
			
				p.addAnswer(3, "carbon dioxide",
				false,
				"No. Carbon dioxide is produced as a by-product of the oxidation of glucose.");
			
				p.addAnswer(4, "water",
				false,
				"No. Water is the product of the reduction reaction.");
			
				p.addAnswer(5, "both glucose and carbon dioxide",
				false,
				"No. Glucose is oxidized, and carbon dioxide is the product of this oxidation.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334554;


		
		

		
			
			p.question = "Which of the following statements provides the best explanation for why the oxidation of organic compounds by molecular oxygen (O<sub>2</sub>) yields so much energy? (<script type=\"text/javascript\">ebook(\'0901\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "The oxygen atom has a higher affinity for electrons than the carbon atom.",
				true,
				"Correct. The high electronegativity (affinity for electrons) of the oxygen atom relative to carbon is the reason that oxidation of organic compounds releases so much energy.");
			
				p.addAnswer(2, "The reaction has a very negative free-energy change.",
				false,
				"No. Any reaction with a large negative free-energy change will yield a lot of energy.");
			
				p.addAnswer(3, "In cells, this reaction is capable of providing the energy for ATP synthesis.",
				false,
				"No. The oxidation of glucose in cellular respiration does produce a lot of ATP, but this is not an explanation for why the oxidation of organic compounds (like glucose) yields energy.");
			
				p.addAnswer(4, "This is an example of a redox reaction, and all redox reactions produce a large amount of energy.",
				false,
				"No. Redox reactions are not inherently high-energy producers.");
			
				p.addAnswer(5, "Any reaction that produces water as a product will also release a lot of energy.",
				false,
				"No. The formation of biological polymers from individual subunits produces water as a product, but these reactions require energy rather than releasing energy.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334555;


		
		

		
			
			p.question = "Each ATP molecule contains about 1% of the amount of chemical energy available from the complete oxidation of a single glucose molecule. Cellular respiration produces about 38 ATP from one glucose molecule. What happens to the rest of the energy in glucose? (<script type=\"text/javascript\">ebook(\'0901\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "It is stored as fat.",
				false,
				"No. This energy cannot be converted to fat.");
			
				p.addAnswer(2, "It is converted to heat.",
				true,
				"Correct. The process is only about 38% efficient, with the rest of the energy lost as heat.");
			
				p.addAnswer(3, "It is used to make water from hydrogen ions and oxygen.",
				false,
				"No. The energy derived from the reduction of oxygen drives this process.");
			
				p.addAnswer(4, "It is released as carbon dioxide and water",
				false,
				"No. Energy cannot be converted to carbon dioxide or water.");
			
				p.addAnswer(5, "It is converted to starch.",
				false,
				"No. Energy cannot be converted to starch. It can only be used to produce starch from other compounds containing carbon, oxygen, and hydrogen.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334556;


		
		

		
			
			p.question = "A small amount of ATP is made in glycolysis by which of the following processes? (<script type=\"text/javascript\">ebook(\'0901\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "transfer of a phosphate group from a fragment of glucose to ADP by substrate-level phosphorylation",
				true,
				"Correct. Remember that glucose is phosphorylated at the beginning of glycolysis.");
			
				p.addAnswer(2, "harnessing energy from the sun",
				false,
				"No. Use of the sun to make ATP is a part of photosynthesis, not glycolysis.");
			
				p.addAnswer(3, "transport of electrons through a series of carriers",
				false,
				"No. Glycolysis does make some ATP, but not in association with electron carriers.");
			
				p.addAnswer(4, "transfer of electrons and hydrogen atoms to NAD<sup>+</sup>",
				false,
				"No. The reduction of NAD<sup>+</sup> does not directly make ATP.");
			
				p.addAnswer(5, "attachment of a free inorganic phosphate (P<sub>i</sub>) group to ADP to make ATP",
				false,
				"No. Free P<sub>i</sub> is not the source of the phosphate that is added to ADP to make ATP in glycolysis.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334557;


		
		

		
			
			p.question = "A chemist has discovered a drug that blocks phosphoglucoisomerase, an enzyme that catalyzes the second reaction in glycolysis. He wants to use the drug to kill bacteria in people with infections. However, he cannot do this because _____. (<script type=\"text/javascript\">ebook(\'0902\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "bacteria are prokaryotes; they usually don\'t need to perform glycolysis",
				false,
				"No. Almost all cells use glycolysis as part of their energy-producing reactions.");
			
				p.addAnswer(2, "glycolysis produces so little ATP that the drug will have little effect",
				false,
				"No. Although glycolysis produces only a small amount of ATP, it is important for other reasons");
			
				p.addAnswer(3, "human cells must also perform glycolysis; the drug might also poison them",
				true,
				"Correct. The chemist\'s drug could have a devastating effect on human cells.");
			
				p.addAnswer(4, "this step in the pathway of glycolysis can be skipped in bacteria, but not in humans",
				false,
				"No. The pathway of glycolysis is the same in all organisms.");
			
				p.addAnswer(5, "glycolysis can occur without the action of enzymes",
				false,
				"No. Glycolysis, like all metabolic pathways, requires the use of enzymes.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334558;


		
		

		
			
			p.question = "In glycolysis, there is no production of carbon dioxide as a product of the pathway. Which of the following is the best explanation for this? (<script type=\"text/javascript\">ebook(\'0902\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "There are no oxidation or reduction reactions in glycolysis to produce CO<sub>2</sub>.",
				false,
				"No. The fact that glycolysis produces NADH means that something was oxidized and NAD<sup>+</sup> was reduced.");
			
				p.addAnswer(2, "There is very little ATP produced in glycolysis.",
				false,
				"No. The fact that little ATP is produced has nothing to do with whether CO<sub>2</sub> is produced or not.");
			
				p.addAnswer(3, "The two pyruvate molecules produced from each glucose molecule each contain three carbon atoms.",
				true,
				"Correct. All of the carbon in one glucose molecule is accounted for in the two molecules of pyruvate produced by glycolysis.");
			
				p.addAnswer(4, "The initial steps of glycolysis require an input of energy in the form of ATP (two per glucose).",
				false,
				"No. This is a true statement, but it does not explain why there is no CO<sub>2</sub> production in glycolysis.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the above answers is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334559;


		
		

		
			
			p.question = "Of the following molecules in the glycolytic pathway (the process of glycolysis), the one with the most chemical energy is _____. (<script type=\"text/javascript\">ebook(\'0902\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "pyruvate",
				false,
				"No. This is a product of glycolysis and has the lowest energy.");
			
				p.addAnswer(2, "glucose",
				false,
				"No. Although this is the form in which compounds enter glycolysis, glucose is further transformed before energy is recovered from glycolysis.");
			
				p.addAnswer(3, "fructose-6-phosphate",
				false,
				"No. This has greater energy than glucose alone because of the addition of a phosphate from the hydrolysis of ATP, but there is an answer with still higher energy.");
			
				p.addAnswer(4, "fructose-1,6-bisphosphate",
				true,
				"Correct. Fructose-1,6-bisphosphate has received two phosphate groups from ATP, conserving some of the energy derived from the hydrolysis of ATP in the fructose-1,6-bisphosphate molecule.");
			
				p.addAnswer(5, "glyceraldehyde-3-phosphate",
				false,
				"No. This compound occurs in glycolysis after the six-carbon skeleton of glucose has been broken into two three-carbon compounds.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334560;


		
		

		
			
			p.question = "During respiration in a eukaryotic cell, reactions of glycolysis occur _____. (<script type=\"text/javascript\">ebook(\'0902\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "in the cytosol",
				true,
				"Correct. Glycolysis occurs in the cytosol.");
			
				p.addAnswer(2, "in the matrix of the mitochondrion",
				false,
				"No. This is where the citric acid cycle occurs.");
			
				p.addAnswer(3, "in the inner membrane of the mitochondrion",
				false,
				"No. This is where the electron transport chain is found.");
			
				p.addAnswer(4, "in the intermembrane space of the mitochondrion",
				false,
				"No. This is the space in the mitochondria where protons accumulate for the chemiosmotic synthesis of ATP.");
			
				p.addAnswer(5, "across the inner membrane of the mitochondrion",
				false,
				"No. Chemiosmotic synthesis of ATP occurs across the inner mitochondrial membrane.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334561;


		
		

		
			
			p.question = "What is the name of the process in which glucose is converted to pyruvate with the production of ATP and NADH? (<script type=\"text/javascript\">ebook(\'0902\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "chemiosmosis",
				false,
				"No. This is the process by which electron transport makes most of the ATP in cellular respiration.");
			
				p.addAnswer(2, "fermentation",
				false,
				"No. Fermentation is the anaerobic metabolism of pyruvate from this process.");
			
				p.addAnswer(3, "glycolysis",
				true,
				"Correct. Glycolysis, or the splitting of sugar, splits a 6-carbon glucose into two 3-carbon pyruvate molecules.");
			
				p.addAnswer(4, "the citric acid cycle",
				false,
				"No. The citric acid cycle uses the pyruvate produced by this process.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334562;


		
		

		
			
			p.question = "Most of the NADH that delivers electrons to the electron transport chain comes from which of the following? (<script type=\"text/javascript\">ebook(\'0903\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "oxidative phosphorylation",
				false,
				"No. Oxidative phosphorylation produces ATP, not NADH.");
			
				p.addAnswer(2, "substrate-level phosphorylation",
				false,
				"No. Substrate-level phosphorylation involves the synthesis of ATP, not of NADH.");
			
				p.addAnswer(3, "glycolysis",
				false,
				"No. Although a small quantity of NADH is produced during glycolysis, this is not the correct choice.");
			
				p.addAnswer(4, "anabolic pathways",
				false,
				"No. Anabolic pathways are synthetic processes and are energy intensive; that is, they use energy rather than contribute it.");
			
				p.addAnswer(5, "the citric acid cycle",
				true,
				"Correct. Both NADH and FADH<sub>2</sub> are produced during the citric acid cycle.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334563;


		
		

		
			
			p.question = "In an experiment, mice were fed glucose (C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>) containing a small amount of radioactive oxygen. The mice were closely monitored, and after a few minutes radioactive oxygen atoms showed up in _____. (<script type=\"text/javascript\">ebook(\'0903\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "carbon dioxide",
				true,
				"Correct. One molecule of CO<sub>2</sub> is formed when pyruvate is converted to acetyl CoA, and two molecules of CO<sub>2</sub> are produced in the citric acid cycle.");
			
				p.addAnswer(2, "NADH",
				false,
				"No. NADH is formed when electrons removed from glucose are used to reduce NAD<sup>+</sup>.");
			
				p.addAnswer(3, "water",
				false,
				"No. The oxygen in water enters the mitochondrion as molecular oxygen from the atmosphere.");
			
				p.addAnswer(4, "ATP",
				false,
				"No. ATP is produced by the phosphorylation of ADP.");
			
				p.addAnswer(5, "oxygen gas",
				false,
				"No. Oxygen gas is reduced to water in cellular respiration.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334564;


		
		

		
			
			p.question = "In preparing pyruvate to enter the citric acid cycle, which of the following steps does occur? (<script type=\"text/javascript\">ebook(\'0903\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "It is oxidized, and the resulting electrons reduce an NAD<sup>+</sup> to an NADH.",
				false,
				"No. Although this is one of the steps that occur, there is a better answer.");
			
				p.addAnswer(2, "A carbon atom is released in carbon dioxide.",
				false,
				"No. Although this is one of the steps that occur, there is a better answer.");
			
				p.addAnswer(3, "A compound called coenzyme A binds to a two-carbon fragment.",
				false,
				"No. Although this is one of the steps that occur, there is a better answer.");
			
				p.addAnswer(4, "None of the above are steps in the metabolism of pyruvate before its entry into the citric acid cycle.",
				false,
				"No. The three steps above are all steps in the metabolism of pyruvate before its entry into the citric acid cycle.");
			
				p.addAnswer(5, "The three steps above are all involved in the metabolism of pyruvate before its entry into the citric acid cycle.",
				true,
				"Correct. All of the above do occur in the conversion of pyruvate from glycolysis to acetyl CoA before it enters the citric acid cycle.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334565;


		
		

		
			
			p.question = "Why is the citric acid cycle called a cycle? (<script type=\"text/javascript\">ebook(\'0903\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "The pyruvate that enters the cycle is regenerated in the last step of the pathway.",
				false,
				"No. Pyruvate is consumed by the citric acid cycle, but it is not regenerated by the cycle.");
			
				p.addAnswer(2, "NAD<sup>+</sup> and FAD are recycled.",
				false,
				"No. They are recycled, but that is not the step for which the cycle is named.");
			
				p.addAnswer(3, "The four-carbon acid that accepts the acetyl CoA in the first step of the cycle is regenerated by the last step of the cycle.",
				true,
				"Correct. The cycling referred to is that of the resynthesis of the four-carbon compound.");
			
				p.addAnswer(4, "All of the carbon from glucose is cycled back into the atmosphere as carbon dioxide.",
				false,
				"No. This is true, but it is not why the pathway is called the citric acid cycle.");
			
				p.addAnswer(5, "NADH is cycled down the electron transport chain.",
				false,
				"No. NADH gives up electrons, which flow one way down the electron transport chain to oxygen. This is separate from the citric acid cycle.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334566;


		
		

		
			
			p.question = "In the citric acid cycle, for each pyruvate that enters the cycle, 1 ATP, 3 NADH, and 1 FADH<sub>2</sub> are produced. For each glucose molecule that enters glycolysis, how many ATP, NADH, and FADH<sub>2</sub> are produced in the citric acid cycle? (<script type=\"text/javascript\">ebook(\'0903\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "2 ATP, 6 NADH, 2 FADH<sub>2</sub>",
				true,
				"Correct. Then the NADH and FADH<sub><sub>2</sub></sub> go through the electron transport chain.");
			
				p.addAnswer(2, "4 ATP, 6 NADH, 2 FADH<sub>2</sub>",
				false,
				"No. This would be the answer if we considered the production of both glycolysis and the citric acid cycle.");
			
				p.addAnswer(3, "3 ATP, 3 NADH, 1 FADH<sub>2</sub>",
				false,
				"No. This is incorrect.");
			
				p.addAnswer(4, "about 38 ATP",
				false,
				"No. This would be the production from the entire process of glycolysis and cellular respiration including electron transport and oxidative phosphorylation.");
			
				p.addAnswer(5, "1 ATP, 3 NADH, 1 FADH<sub>2</sub>",
				false,
				"No. Remember that for each glucose molecule that enters glycolysis, there are two molecules of pyruvate that enter the citric acid cycle.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334567;


		
		

		
			
			p.question = "During respiration in eukaryotic cells, reactions of the citric acid cycle occur _____. (<script type=\"text/javascript\">ebook(\'0903\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "in the cytosol",
				false,
				"No. This is the location of glycolysis.");
			
				p.addAnswer(2, "in the matrix of the mitochondrion",
				true,
				"Correct. The citric acid cycle, which takes place in the mitochondrial matrix, completes the degradation of glucose.");
			
				p.addAnswer(3, "in the cristae of the mitochondrion",
				false,
				"No. The cristae of the inner mitochondrial membrane are the location of the electron transport chain.");
			
				p.addAnswer(4, "in the intermembrane space of the mitochondrion",
				false,
				"No. Protons are pumped into this space.");
			
				p.addAnswer(5, "across the inner membrane of the mitochondrion",
				false,
				"No. Chemiosmotic synthesis of ATP occurs across the inner mitochondrial membrane.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334568;


		
		

		
			
			p.question = "How many molecules of ATP are gained by substrate-level phosphorylation from the complete breakdown of a single molecule of glucose in the presence of oxygen? (<script type=\"text/javascript\">ebook(\'0903\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "2",
				false,
				"No. This is the net ATP production by substrate-level phosphorylation during glycolysis.");
			
				p.addAnswer(2, "4",
				true,
				"Correct. Substrate-level phosphorylation produces 2 ATP in glycolysis and 2 in the citric acid cycle.");
			
				p.addAnswer(3, "3",
				false,
				"No. Check your math again.");
			
				p.addAnswer(4, "about 38 ATP",
				false,
				"No. This is the amount of ATP produced by both substrate-level and oxidative phosphorylation.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334569;


		
		

		
			
			p.question = "Which of the following represents the major (but not the only) energy accomplishment of the citric acid cycle? (<script type=\"text/javascript\">ebook(\'0903\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "formation of CO<sub>2</sub>",
				false,
				"No. However, CO<sub>2</sub> is a by-product of the citric acid cycle.");
			
				p.addAnswer(2, "formation of ATP",
				false,
				"No. However, the citric acid cycle forms ATP.");
			
				p.addAnswer(3, "formation of NADH and FADH<sub>2</sub>",
				true,
				"Correct. Each turn of the citric acid cycle releases carbon dioxide, forms 1 ATP by oxidative phosphorylation, and passes electrons to 3 NAD<sup>+</sup> and 1 FAD.");
			
				p.addAnswer(4, "utilization of O<sub>2</sub>",
				false,
				"No. O<sub>2</sub> is neither a reactant nor a product of the citric acid cycle.");
			
				p.addAnswer(5, "completion of substrate-level phosphorylation",
				false,
				"No. This results in the production of only a few ATP.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334570;


		
		

		
			
			p.question = "After completion of the citric acid cycle, most of the usable energy from the original glucose molecule is in the form of _____. (<script type=\"text/javascript\">ebook(\'0903\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "acetyl CoA",
				false,
				"No. This is input into the citric acid cycle.");
			
				p.addAnswer(2, "ATP",
				false,
				"No. However, the citric acid cycle produces ATP.");
			
				p.addAnswer(3, "NADH",
				true,
				"Correct. The citric acid cycle produces 3 NADH per turn of the cycle.");
			
				p.addAnswer(4, "CO<sub><sub>2</sub></sub>",
				false,
				"No. However, CO<sub>2</sub> is a by-product of the citric acid cycle.");
			
				p.addAnswer(5, "FADH<sub><sub>2</sub></sub>",
				false,
				"No. The citric acid cycle produces only one FADH<sub>2</sub> per turn of the cycle");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334571;


		
		

		
			
			p.question = "Which of the following accompanies the conversion of pyruvate to acetyl CoA before the citric acid cycle? (<script type=\"text/javascript\">ebook(\'0903\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "formation of CO<sub>2</sub> and ATP",
				false,
				"No. CO<sub>2</sub> forms but ATP does not.");
			
				p.addAnswer(2, "formation of CO<sub>2</sub> and NADH",
				true,
				"Correct. The carboxyl group of pyruvate is removed as a carbon dioxide molecule. The remaining two-carbon fragment is oxidized to acetate while NAD<sup>+</sup> is reduced to NADH.");
			
				p.addAnswer(3, "formation of CO<sub>2</sub> and coenzyme A",
				false,
				"No. CO<sub>2</sub> forms but coenzyme A does not.");
			
				p.addAnswer(4, "removal of coenzyme A",
				false,
				"No. Coenzyme A is incorporated into acetyl CoA.");
			
				p.addAnswer(5, "regeneration of NAD<sup>+</sup>",
				false,
				"No. NAD<sup>+</sup> is consumed by this reaction.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334572;


		
		

		
			
			p.question = "The energy given up by electrons as they move through the electron transport chain is used in which of the following processes? (<script type=\"text/javascript\">ebook(\'0904\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the breakdown of glucose",
				false,
				"No. The catabolism of glucose is exergonic: energy is released in the process, not required.");
			
				p.addAnswer(2, "the production of NADH and FADH<sub>2</sub>",
				false,
				"No. NAD<sup>+</sup> and FAD are reduced temporarily to NADH and FADH<sub>2</sub> when they transport electrons from glycolysis and the citric acid cycle to the electron transport chain, but this is not the best choice.");
			
				p.addAnswer(3, "pumping H<sup>+</sup> across a membrane",
				true,
				"Correct. Many of the electron transport molecules in the mitochondrion pump a hydrogen ion into the intermembrane space when they pass an electron along the chain.");
			
				p.addAnswer(4, "the oxidation of water",
				false,
				"No. Water is not oxidized in this process; however, oxygen is reduced.");
			
				p.addAnswer(5, "the production of CO<sub>2</sub>",
				false,
				"No. CO<sub>2</sub> is not produced by the electron transport chain.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334573;


		
		

		
			
			p.question = "The ATP synthase in a human cell obtains energy for making ATP directly from which of the following processes? (<script type=\"text/javascript\">ebook(\'0904\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the oxidation of NADH and FADH<sub>2</sub>",
				false,
				"No. These compounds provide the energy for electron transport, but something else directly drives the synthesis of ATP.");
			
				p.addAnswer(2, "the flow of H<sup>+</sup> across a membrane through the ATP synthase enzyme",
				true,
				"Correct. Hydrogen ions flow along an electrochemical gradient across the inner mitochondrial membrane. The gradient is the source of the energy for ATP production.");
			
				p.addAnswer(3, "the oxidation of glucose",
				false,
				"No. The energy released by the oxidation of glucose is used to reduce the electron carriers NAD<sup>+</sup> and FAD.");
			
				p.addAnswer(4, "the movement of electrons through a series of carriers",
				false,
				"No. However, this answer is close. As electrons move along the transport chain, hydrogen ions are pumped into the intermembrane space of the mitochondrion.");
			
				p.addAnswer(5, "the reduction of oxygen",
				false,
				"No. Oxygen is reduced as the final step in electron transport, but this step is not directly involved with ATP production.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334574;


		
		

		
			
			p.question = "When a poison such as cyanide blocks the electron transport chain, glycolysis and the citric acid cycle soon grind to a halt as well. Which of the following is the best explanation for this? (<script type=\"text/javascript\">ebook(\'0904\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "A high level of NADH is present in the cell.",
				false,
				"No. If electron transport is inhibited, it is true that NADH levels in the cell rise, but this does not in itself inhibit glycolysis or the citric acid cycle.");
			
				p.addAnswer(2, "The uptake of oxygen stops because electron transport was inhibited.",
				false,
				"No. This is a true statement, but it does not explain why glycolysis and the citric acid cycle stop.");
			
				p.addAnswer(3, "NAD<sup>+</sup> and FAD are not available for glycolysis and the citric acid cycle to continue.",
				true,
				"Correct. Unless the electron transport molecules (NADH and FADH<sub>2</sub>) can recycle back to their oxidized states (NAD<sup>+</sup> and FAD), they will be unable to receive electrons in the other steps of cellular respiration.");
			
				p.addAnswer(4, "Electrons are no longer available from the electron transport chain to power glycolysis and the citric acid cycle.",
				false,
				"No. Electrons from the electron transport chain are used to reduce oxygen; they do not participate in glycolysis or the citric acid cycle.");
			
				p.addAnswer(5, "They run out of ADP.",
				false,
				"No. In fact, when electron transport is inhibited, the cell\'s supply of ATP is hydrolyzed rapidly to ADP and phosphate.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334575;


		
		

		
			
			p.question = "Which of the following sequences correctly describes the synthesis of ATP associated with electron transport in mitochondria? (<script type=\"text/javascript\">ebook(\'0904\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "NADH, electron transport, chemiosmosis, proton gradient",
				false,
				"No. The proton gradient is the energy source for chemiosmosis.");
			
				p.addAnswer(2, "NADH, electron transport, proton gradient, substrate-level phosphorylation",
				false,
				"No. Substrate-level phosphorylation is the simple transfer of phosphate from another organic molecule to ADP to form ATP and is not associated with electron transport.");
			
				p.addAnswer(3, "NADH, electron transport, proton gradient, chemiosmosis",
				true,
				"Correct. This is the pattern of energy flow in oxidative phosphorylation in mitochondria.");
			
				p.addAnswer(4, "NADH, electron transport, substrate-level phosphorylation, ATP",
				false,
				"No. Substrate-level phosphorylation is the simple transfer of phosphate from another organic molecule to ADP to form ATP and is not associated with electron transport.");
			
				p.addAnswer(5, "None of the above correctly shows the pattern of energy flow between electron transport and ATP synthesis.",
				false,
				"No. One of the above does show the correct pattern.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334576;


		
		

		
			
			p.question = "Most of the electrons removed from glucose by cellular respiration are used for which of the following processes? (<script type=\"text/javascript\">ebook(\'0904\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "reducing NAD<sup>+</sup> to NADH in glycolysis and the citric acid cycle",
				false,
				"No. Electrons from glucose are used to reduce NAD<sup>+</sup>, but is this the only correct answer?");
			
				p.addAnswer(2, "producing a proton gradient for ATP synthesis in the mitochondria",
				false,
				"No. Electrons from glucose are used to produce a proton gradient for ATP synthesis, but is this the only correct answer?");
			
				p.addAnswer(3, "driving substrate-level phosphorylation in glycolysis",
				false,
				"No. Electrons from glucose are not involved in substrate-level phosphorylation.");
			
				p.addAnswer(4, "The first two choices are correct.",
				true,
				"Correct. Electrons from oxidation of glucose are used to reduce NAD<sup>+</sup> and produce a proton gradient for ATP synthesis in the mitochondria.");
			
				p.addAnswer(5, "The first three answers are correct.",
				false,
				"No. At least one of these answers is incorrect.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334577;


		
		

		
			
			p.question = "Which part of the cellular catabolism of glucose requires molecular oxygen (O<sub>2</sub>) and produces CO<sub>2</sub>? (<script type=\"text/javascript\">ebook(\'0904\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "glycolysis",
				false,
				"No. Glycolysis does not require O<sub>2</sub> or produce CO<sub>2</sub>.");
			
				p.addAnswer(2, "the citric acid cycle",
				false,
				"No. The citric acid cycle does not directly require O<sub>2</sub>.");
			
				p.addAnswer(3, "the electron transport chain",
				false,
				"No. The electron transport chain does not produce CO<sub>2</sub>.");
			
				p.addAnswer(4, "the combination of glycolysis and the citric acid cycle",
				false,
				"No. There is no utilization of O<sub>2</sub> by these processes.");
			
				p.addAnswer(5, "the combination of the citric acid cycle and electron transport",
				true,
				"Correct. CO<sub>2</sub> is produced in the citric acid cycle, and O<sub>2</sub> is taken up in electron transport.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334578;


		
		

		
			
			p.question = "During aerobic respiration, molecular oxygen (O<sub>2</sub>) is used for which of the following purposes? (<script type=\"text/javascript\">ebook(\'0904\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "at the end of glycolysis to oxidize pyruvate",
				false,
				"No. Pyruvate oxidation does not directly require O<sub>2</sub>.");
			
				p.addAnswer(2, "at the end of the citric acid cycle to regenerate citric acid",
				false,
				"No. The production of citric acid does not directly require O<sub>2</sub>.");
			
				p.addAnswer(3, "between glycolysis and the citric acid cycle to split a carbon from pyruvate, producing CO<sub>2</sub>",
				false,
				"No. This does not require O<sub>2</sub>.");
			
				p.addAnswer(4, "as a source of O<sub>2</sub> in every reaction that produces CO<sub>2</sub>",
				false,
				"No. The oxygen atoms in CO<sub>2</sub> come from glucose and water, not from O<sub>2</sub>.");
			
				p.addAnswer(5, "at the end of the electron transport chain to accept electrons and form H<sub>2</sub>O",
				true,
				"Correct. O<sub>2</sub> is the final electron acceptor.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334579;


		
		

		
			
			p.question = "Which of the following substances, if any, is/are involved in oxidative phosphorylation? (<script type=\"text/javascript\">ebook(\'0904\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "ADP",
				false,
				"No. Although ADP is converted to ATP during oxidative phosphorylation, there is a better answer.");
			
				p.addAnswer(2, "oxygen",
				false,
				"No. Although oxygen functions as the terminal electron acceptor in oxidative phosphorylation, there is a better answer.");
			
				p.addAnswer(3, "ATP",
				false,
				"No. Although ATP is the energy-containing product of oxidative phosphorylation, there is a better answer.");
			
				p.addAnswer(4, "none of the above",
				false,
				"No. All of the above are involved in oxidative phosphorylation.");
			
				p.addAnswer(5, "The first three choices above are involved in oxidative phosphorylation.",
				true,
				"Correct. ADP is converted to ATP during oxidative phosphorylation, and oxygen functions as the terminal electron acceptor in oxidative phosphorylation.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334580;


		
		

		
			
			p.question = "Which one of the following best describes the electron transport chain? (<script type=\"text/javascript\">ebook(\'0904\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Electrons are pumped across a membrane by active transport.",
				false,
				"No. Electrons are not transported in this manner.");
			
				p.addAnswer(2, "Acetyl CoA is fully oxidized to CO<sub>2</sub>.",
				false,
				"No. This occurs in the citric acid cycle.");
			
				p.addAnswer(3, "Hydrogen atoms are added to CO<sub>2</sub> to make an energy-rich compound.",
				false,
				"No. This represents the production of organic compounds; their oxidation occurs in the process of cellular respiration.");
			
				p.addAnswer(4, "Electrons are passed from one carrier to another, releasing a little energy at each step.",
				true,
				"Correct. NADH and FADH<sub>2</sub> deliver electrons from the breakdown products of glycolysis and the citric acid cycle to the electron transport chain, which passes these electrons from one molecule to another, releasing a small amount of energy at each step.");
			
				p.addAnswer(5, "Glucose is broken down to a three-carbon compound in preparation for the citric acid cycle.",
				false,
				"No. This describes glycolysis.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334581;


		
		

		
			
			p.question = "If a compound that allows protons to freely diffuse across membranes is added to cells that are actively metabolizing glucose via cellular respiration, which of the following processes would stop? (<script type=\"text/javascript\">ebook(\'0904\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "glycolysis",
				false,
				"No. Glycolysis will continue under these conditions because electron transport will continue to oxidize NADH produced in glycolysis and the citric acid cycle.");
			
				p.addAnswer(2, "electron transport",
				false,
				"No. Collapsing the proton gradient does not prevent electron transport and proton pumping from occurring&#151;the mitochondria simply cannot make a proton gradient.");
			
				p.addAnswer(3, "ATP synthesis",
				false,
				"No. Only the chemiosmotic synthesis of ATP would stop (no proton gradient), but substrate-level phosphorylation would continue.");
			
				p.addAnswer(4, "all of the above",
				false,
				"No. None of the above processes would stop.");
			
				p.addAnswer(5, "none of the above",
				true,
				"Correct. The chemiosmotic synthesis of ATP would stop in the mitochondria, but substrate-level phosphorylation could continue.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334582;


		
		

		
			
			p.question = "Which one of the following is the source of the energy that produces the chemiosmotic gradient in mitochondria? (<script type=\"text/javascript\">ebook(\'0904\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "ATP",
				false,
				"No. The goal of chemiosmosis is to produce ATP, not to use it.");
			
				p.addAnswer(2, "an ATP-dependent proton pump",
				false,
				"No. This would use ATP, not produce it.");
			
				p.addAnswer(3, "the production of NADH",
				false,
				"No. The production of NADH does conserve energy from the oxidation of glucose, but it does not produce a chemiosmotic gradient.");
			
				p.addAnswer(4, "the components of the electron transport chain",
				false,
				"No. The electron carriers of the electron transport chain do not themselves produce energy.");
			
				p.addAnswer(5, "electrons moving down the electron transport chain",
				true,
				"Correct. Energy from the flow of electrons along the electron transport chain is used to pump hydrogen ions (protons) across the inner mitochondrial membrane, creating the chemiosmotic gradient.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334583;


		
		

		
			
			p.question = "During respiration in eukaryotic cells, the electron transport chain is located in or on the _____. (<script type=\"text/javascript\">ebook(\'0904\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "cytosol",
				false,
				"No. Glycolysis occurs in the cytosol.");
			
				p.addAnswer(2, "matrix of the mitochondrion",
				false,
				"No. This is the location of the citric acid cycle.");
			
				p.addAnswer(3, "inner membrane of the mitochondrion",
				true,
				"Correct. The electron transport chain is an energy converter that uses the exergonic flow of electrons to pump hydrogen ions across the membrane from matrix to intermembrane space.");
			
				p.addAnswer(4, "intermembrane space of the mitochondrion",
				false,
				"No. Protons are pumped into this space.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the choices above is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334584;


		
		

		
			
			p.question = "The overall efficiency of respiration (the percentage of the energy released that is saved in ATP) is approximately _____. (<script type=\"text/javascript\">ebook(\'0904\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "0.5%",
				false,
				"No. Higher.");
			
				p.addAnswer(2, "2%",
				false,
				"No. Higher.");
			
				p.addAnswer(3, "40%",
				true,
				"Correct. The efficiency of respiration is 7.3 kcal per mole times 38 moles (maximum ATP yield per mole of glucose) divided by 686 kcal (the amount of energy contained in one mole of glucose), or about 40%.");
			
				p.addAnswer(4, "94%",
				false,
				"No. Lower.");
			
				p.addAnswer(5, "100%",
				false,
				"No. This would violate the second law of thermodynamics.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334585;


		
		

		
			
			p.question = "Fermentation is essentially glycolysis plus an extra step in which pyruvate is reduced to form lactate or alcohol and carbon dioxide. This last step _____. (<script type=\"text/javascript\">ebook(\'0905\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "removes poisonous oxygen from the environment",
				false,
				"No. Oxygen does not participate in this process; in fact, lactate production is an emergency process for many cells when conditions are anaerobic.");
			
				p.addAnswer(2, "extracts a bit more energy from glucose",
				false,
				"No. The additional step in the fermentation process does not produce any ATP.");
			
				p.addAnswer(3, "enables the cell to recycle NAD<sup>+</sup>",
				true,
				"Correct. Normally, the reduced NADH delivers its electrons to the electron transport chain, enabling NAD<sup>+</sup> to be recycled to glycolysis.");
			
				p.addAnswer(4, "prevents pyruvate from accumulating",
				false,
				"No. If the additional step(s) of fermentation did not occur, the production of pyruvate would be inhibited.");
			
				p.addAnswer(5, "enables the cell to make pyruvate into substances it can use",
				false,
				"No. In fact, pyruvate is more useful to the cell than is alcohol or lactate, which cannot be metabolized in the absence of oxygen.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334586;


		
		

		
			
			p.question = "Sports physiologists at an Olympic training center wanted to monitor athletes to determine at what point their muscles were functioning anaerobically. They could do this by checking for a buildup of which of the following compounds? (<script type=\"text/javascript\">ebook(\'0905\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "ATP",
				false,
				"No. Under anaerobic conditions, the accumulation of ATP in cells should go down, not up.");
			
				p.addAnswer(2, "lactate",
				true,
				"Correct. In humans, muscle cells switch to lactate fermentation after becoming anaerobic.");
			
				p.addAnswer(3, "carbon dioxide",
				false,
				"No. In fact, when cells become anaerobic they do not use the citric acid cycle, which is the source of most carbon dioxide.");
			
				p.addAnswer(4, "ADP",
				false,
				"No. As long as the muscle is working, ADP will be produced from the hydrolysis of ATP.");
			
				p.addAnswer(5, "oxygen",
				false,
				"No. If the cell were anaerobic, there would be no oxygen.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334587;


		
		

		
			
			p.question = "In glycolysis in the absence of oxygen, cells need a way to regenerate which compound? (<script type=\"text/javascript\">ebook(\'0905\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "ethanol",
				false,
				"No. Ethanol is a fermentation product of yeast.");
			
				p.addAnswer(2, "carbon dioxide",
				false,
				"No. Carbon dioxide is produced during cellular respiration, but it cannot be recycled into sugars in mitochondria.");
			
				p.addAnswer(3, "NAD<sup>+</sup>",
				true,
				"Correct. The NAD<sup>+</sup> needs to be regenerated, which is why ethanol or lactate is formed.");
			
				p.addAnswer(4, "lactate",
				false,
				"No. Lactate is a fermentation product of animal cells.");
			
				p.addAnswer(5, "glucose",
				false,
				"No. The glucose is not regenerated in this process.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334588;


		
		

		
			
			p.question = "Muscle tissues make lactate from pyruvate to do which of the following? (<script type=\"text/javascript\">ebook(\'0905\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "speed up the rate of glycolysis",
				false,
				"No. Speeding up glycolysis is a consequence of lactate production in muscles, not the cause of it.");
			
				p.addAnswer(2, "get rid of pyruvate produced by glycolysis",
				false,
				"No. The accumulation of pyruvate is not a problem to muscle cells; it rarely occurs under aerobic or anaerobic conditions.");
			
				p.addAnswer(3, "utilize the energy in pyruvate",
				false,
				"No. This would require O<sub>2</sub>, and muscle cells do not make lactate unless O<sub>2</sub> is absent.");
			
				p.addAnswer(4, "produce additional CO<sub>2</sub>",
				false,
				"No. Lactate production in muscles does not produce any CO<sub>2</sub>.");
			
				p.addAnswer(5, "regenerate NAD<sup>+</sup>",
				true,
				"Correct. Human muscle cells make ATP by lactic acid fermentation when oxygen is scarce. This allows them to regenerate NAD<sup>+</sup> so that glycolysis can continue.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334589;


		
		

		
			
			p.question = "In brewing beer, maltose (a disaccharide of glucose) is _____. (<script type=\"text/javascript\">ebook(\'0905\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "a flavoring ingredient",
				false,
				"No. Most beers are not sweet.");
			
				p.addAnswer(2, "the substrate for aerobic respiration",
				false,
				"No. The alcohol in beer is produced under anaerobic conditions.");
			
				p.addAnswer(3, "the substrate for alcoholic fermentation",
				true,
				"Correct. In alcoholic fermentation, maltose is cleaved into two glucose molecules, which undergo glycolysis. The resulting pyruvate is converted to ethanol in two steps, one of which regenerates the supply of NAD<sup>+</sup> needed for continued glycolysis.");
			
				p.addAnswer(4, "one of the enzymes for alcoholic fermentation",
				false,
				"No. Enzymes are usually proteins, but never carbohydrates.");
			
				p.addAnswer(5, "a substitute for pyruvate that cannot be made in yeast",
				false,
				"No. All cells can perform glycolysis, which means that all cells can produce pyruvate.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334590;


		
		

		
			
			p.question = "If muscle cells in the human body consume O<sub>2</sub> faster than it can be supplied, which of the following is likely to result? (<script type=\"text/javascript\">ebook(\'0905\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "The muscle cells will have more trouble making enough ATP to meet their energy requirements.",
				false,
				"No. It is correct that in the absence of O<sub>2</sub> the cells will have trouble meeting their energy demands, but is this the only correct answer?");
			
				p.addAnswer(2, "The cells will not be able to carry out oxidative phosphorylation.",
				false,
				"No. Without O<sub>2</sub>, electron transport and oxidative phosphorylation will stop, but is this the only correct answer?");
			
				p.addAnswer(3, "The cells will consume glucose at an increased rate.",
				false,
				"No. To meet their energy demands using only the ATP from glycolysis, cells will have to metabolize glucose at a higher rate, but is this the only correct answer?");
			
				p.addAnswer(4, "Only the first two answers are correct.",
				false,
				"No. This is not the correct answer.");
			
				p.addAnswer(5, "The first three answers are correct.",
				true,
				"Correct. Muscle cells would not be able to produce enough ATP to meet demands, oxidative phosphorylation would stop, and muscle cells would consume glucose at an increased rate.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334591;


		
		

		
			
			p.question = "Of the metabolic pathways listed below, which is the only pathway found in all organisms? (<script type=\"text/javascript\">ebook(\'0905\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "cellular respiration",
				false,
				"No. Cellular respiration is not available to organisms or cells that function in an environment without oxygen.");
			
				p.addAnswer(2, "the citric acid cycle",
				false,
				"No. The citric acid cycle does not work well under anaerobic conditions (it needs oxygen to oxidize NADH).");
			
				p.addAnswer(3, "the electron transport chain",
				false,
				"No. The electron transport chain requires oxygen as the final electron acceptor; not all organisms live in the presence of oxygen.");
			
				p.addAnswer(4, "glycolysis",
				true,
				"Correct. Ancient prokaryotes probably used glycolysis to make ATP long before oxygen was present in Earth\'s atmosphere. Glycolysis is the most widespread metabolic pathway.");
			
				p.addAnswer(5, "fermentation",
				false,
				"No. There are organisms incapable of fermentation.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334592;


		
		

		
			
			p.question = "When protein molecules are used as fuel for cellular respiration, _____ are produced as waste. (<script type=\"text/javascript\">ebook(\'0906\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "amino groups",
				true,
				"Correct. The amino group is a residual product of amino acid catabolism.");
			
				p.addAnswer(2, "fatty acids",
				false,
				"No. Fatty acids are not products of amino acid catabolism.");
			
				p.addAnswer(3, "sugar molecules",
				false,
				"No. Sugar molecules are not products of amino acid catabolism.");
			
				p.addAnswer(4, "molecules of lactate",
				false,
				"No. Lactate is a product of one of the fermentation pathways of pyruvate.");
			
				p.addAnswer(5, "ethanol and CO<sub>2</sub>",
				false,
				"No. Ethanol and CO<sub>2</sub> are products of one of the fermentation pathways of pyruvate.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334593;


		
		

		
			
			p.question = "A gram of fat oxidized by respiration produces approximately twice as much ATP as a gram of carbohydrate. Which of the following best explains this observation? (<script type=\"text/javascript\">ebook(\'0906\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Fats are produced when cells take in more food than they need.",
				false,
				"No. This is true, but it does not explain why the oxidation of fats produces more energy than sugars.");
			
				p.addAnswer(2, "Fats are better electron donors to oxygen than are sugars.",
				true,
				"Correct. Fats contain more hydrogen and less oxygen than sugars&#151;it is the transfer of electrons from good donors like hydrogen atoms to good acceptors like oxygen that provides the energy in respiration.");
			
				p.addAnswer(3, "Fats are less soluble in water than sugars.",
				false,
				"No. This is true, but it has nothing to do with energy production in respiration.");
			
				p.addAnswer(4, "Fats do not form true macromolecules as sugars do.",
				false,
				"No. This is true, but it has nothing to do with energy production in respiration.");
			
				p.addAnswer(5, "Fats are closely related to lipid molecules, the basic building blocks of cellular membranes.",
				false,
				"No. This is true, but it has nothing to do with energy production in respiration.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334594;


		
		

		
			
			p.question = "If significant amounts of materials are removed from the citric acid cycle to produce amino acids for protein synthesis, which of the following will result? (<script type=\"text/javascript\">ebook(\'0906\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Less ATP will be produced by the cell.",
				false,
				"No. If carbon is diverted from the oxidative reactions in the citric acid cycle, less ATP can be made, but is this the only correct answer?");
			
				p.addAnswer(2, "Less CO<sub>2</sub> will be produced by the cell.",
				false,
				"No. If carbon is diverted from the oxidative reactions in the citric acid cycle, less CO<sub>2</sub> will be produced, but is this the only correct answer?");
			
				p.addAnswer(3, "The four-carbon compound that combines with acetyl CoA will have to be made by some other process.",
				false,
				"No. To keep the citric acid cycle going to produce energy and carbon skeletons for amino acid synthesis, some other way to make the four-carbon acceptor compound of the cycle must be found, but is this the only correct answer?");
			
				p.addAnswer(4, "The first two answers are correct.",
				false,
				"No. This is not the correct answer.");
			
				p.addAnswer(5, "The first three answers are correct.",
				true,
				"Correct. All three answers are correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

