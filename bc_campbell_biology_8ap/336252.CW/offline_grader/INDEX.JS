

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "39: Plant Responses to Internal and External Signals > Practice Test";
	ak.quiz_loc_with_commas = "39: Plant Responses to Internal and External Signals, Practice Test";
	ak.quiz_title = "Practice Test";

	
		ak.help_url = "../../placeholders/help_placeholder.html";
	
	ak.essay_total = 0;
	ak.pair_problem_total = 0;
	ak.pair_total = 0;
	ak.problem_total = 35;
	ak.non_essay_total = 35;
	ak.scored_item_total = 35;

	
	
	


	
	ak.copyright_date = "2008";
	ak.brandname = "Pearson Benjamin Cummings";
	ak.legal = "../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.pearsoned.com%2Flegal%2Findex.htm";


	// Loop over all problems
	
	
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336253;


		
		

		
			
			p.question = "A conformational change in a substance called phytochrome _____. (<script type=\"text/javascript\">ebook(\'3901\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "causes a plant to bend toward light",
				false,
				"No. Bending toward light is phototropism, which is unrelated to phytochromes.");
			
				p.addAnswer(2, "triggers fruit drop",
				false,
				"No. Increased levels of ethylene and decreased levels of auxin trigger fruit drop.");
			
				p.addAnswer(3, "leads to de-etoliation",
				true,
				"Correct. In darkness, plants synthesize P<sub>r</sub>. Light triggers the conversion of some P<sub>r</sub> to P<sub>fr</sub>; thus, the production of P<sub>fr</sub> signals the presence of light.");
			
				p.addAnswer(4, "is responsible for gravitropism",
				false,
				"No. Bending toward gravity is gravitropism, which is unrelated to phytochromes.");
			
				p.addAnswer(5, "causes changes in a plant in response to stresses such as water shortage",
				false,
				"No. Phytochrome function is unrelated to stress responses.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336254;


		
		

		
			
			p.question = "Growth that results in curvatures of whole plant organs toward or away from stimuli is called _____. (<script type=\"text/javascript\">ebook(\'3902\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "gravitropism",
				false,
				"No. Gravitropism is movement in response to gravity. This is an example of a tropism, but there is a better response.");
			
				p.addAnswer(2, "phototropism",
				false,
				"No. Phototropism is movement in response to light. This is an example of a tropism, but there is a better response.");
			
				p.addAnswer(3, "thigmotropism",
				false,
				"No. Thigmotropism is movement in response to touch. This is an example of a tropism, but there is a better response.");
			
				p.addAnswer(4, "heliotropism",
				false,
				"No. Heliotropism is movement in response to solar position. This is an example of a tropism, but there is a better response.");
			
				p.addAnswer(5, "all of the above",
				true,
				"Correct. A \"tropism\" refers to a growth response that changes the position of a plant. The stimulus may be light (phototropism), gravity (gravitropism), mechanical (thigmotropism), or solar position (heliotropism).");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336255;


		
		

		
			
			p.question = "You are interested in determining what part of a plant is actually sensitive to light for phototropism. A good first experiment would be to _____. (<script type=\"text/javascript\">ebook(\'3902\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "remove the apical meristem and apply auxin before beginning light treatments",
				false,
				"No. By applying auxin, you are replacing the auxin synthesized by the apical meristem.");
			
				p.addAnswer(2, "shine light from one side only. Then measure the auxin diffusing down the stem on the light and the shaded sides",
				false,
				"No. Light will still affect both sides of the stem.");
			
				p.addAnswer(3, "cover one part (for instance, the tip or base) before beginning light treatments",
				true,
				"Correct. Covering one part of the plant will provide a control for your experiment.");
			
				p.addAnswer(4, "spray auxin on just one part of the plant at a time to determine which one stimulates flowering",
				false,
				"No. This proposed experiment does not involve light.");
			
				p.addAnswer(5, "try light treatments of different colors (first blue, then yellow, then green) to see which promotes flowering the fastest",
				false,
				"No.  Flowering and phototropism are two different photomorphogenetic processes.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336256;


		
		

		
			
			p.question = "The immediate, direct effect of auxin in cell elongation, according to the acid growth hypothesis, is to _____. (<script type=\"text/javascript\">ebook(\'3902\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "increase the hydrostatic pressure in cells, stretching their walls",
				false,
				"No. Although the increased uptake of water does occur, another of the choices is a more immediate and direct effect of auxin.");
			
				p.addAnswer(2, "activate ATP-driven proton (H<sup>+</sup>) pumps",
				true,
				"Correct. In a shoot\'s region of elongation, auxin stimulates the proton pumps, an action that lowers the pH in the cell wall.");
			
				p.addAnswer(3, "shift the pH and thus activate enzymes that break the hydrogen bonds",
				false,
				"No. Although the acidification of the cell wall activates expansins that break hydrogen bonds, another of the choices describes a more immediate and direct effect of auxin.");
			
				p.addAnswer(4, "move water into vacuoles",
				false,
				"No. Although ion uptake by the cell increases the movement of water into the cell, another of the choices describes a more immediate and direct effect of auxin.");
			
				p.addAnswer(5, "activate the synthesis of new cytoplasm",
				false,
				"No. The synthesis of cytoplasm occurs after the initial elongation.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336257;


		
		

		
			
			p.question = "A graduate student growing plant cells in a laboratory dish wants them to _____; therefore, the student treats them with cytokinins. (<script type=\"text/javascript\">ebook(\'3902\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "enlarge",
				false,
				"No. Gibberellins and auxin are responsible for cell elongation.");
			
				p.addAnswer(2, "become dormant",
				false,
				"No. As an inhibitor of both primary and secondary growth, abscisic acid may play a role in the onset of dormancy.");
			
				p.addAnswer(3, "grow roots",
				false,
				"No. Auxin stimulates root development.");
			
				p.addAnswer(4, "produce auxin",
				false,
				"No. Cytokinins do not regulate auxin production.");
			
				p.addAnswer(5, "divide",
				true,
				"Correct. Cytokinins, acting with auxin, stimulate cell division.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336258;


		
		

		
			
			p.question = "A callus will develop roots if you use a _____ auxin concentration and a _____ cytokinin concentration in the medium. (<script type=\"text/javascript\">ebook(\'3902\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "high ... high",
				false,
				"No. Equal concentrations of auxin and cytokinin allow the cells of the callus to increase in number, but the cells remain undifferentiated.");
			
				p.addAnswer(2, "high ... low",
				true,
				"Correct. If auxin is more concentrated than cytokinin in a callus, roots form.");
			
				p.addAnswer(3, "low ... high",
				false,
				"No. A low concentration of auxin relative to cytokinin would stimulate the development of shoot buds from the callus.");
			
				p.addAnswer(4, "low ... low",
				false,
				"No. Equal concentrations of auxin and cytokinin allow the cells of the callus to increase in number, but the cells remain undifferentiated.");
			
				p.addAnswer(5, "low ... high or low",
				false,
				"No. Different ratios of the two hormones have different effects on the callus.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336259;


		
		

		
			
			p.question = "In shoots, branching is inhibited by _____ from the tip of a growing shoot, but this effect is countered by _____ from the roots. (<script type=\"text/javascript\">ebook(\'3902\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "cytokinins ... auxin",
				false,
				"No. The opposite is the correct answer.");
			
				p.addAnswer(2, "gibberellins ... ethylene",
				false,
				"No. Gibberellins stimulate growth in length but do not, by themselves, inhibit branching. Ethylene may be a growth inhibitor.");
			
				p.addAnswer(3, "auxin ... cytokinins",
				true,
				"Correct. Auxin, either directly or indirectly, inhibits the growth of axillary buds. Cytokinins stimulate the development of axillary buds.");
			
				p.addAnswer(4, "gibberellins ... abscisic acid",
				false,
				"No. Gibberellins stimulate growth in length but do not, by themselves, inhibit branching. Abscisic acid inhibits plant growth.");
			
				p.addAnswer(5, "auxin ... abscisic acid",
				false,
				"No. Auxin is the correct choice. Abscisic acid, however, inhibits plant growth.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336260;


		
		

		
			
			p.question = "Which hormone would a florist most likely spray on cut flowers to keep them fresh? (<script type=\"text/javascript\">ebook(\'3902\',\'quiz\')</script>)";
			p.incorrect_any_expl = "No. A florist would most likely use a cytokinin spray because cytokinins slow aging and deterioration.";
			p.incorrect_any_expl_flag = 1;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "auxin",
				false,
				"");
			
				p.addAnswer(2, "gibberellins",
				false,
				"");
			
				p.addAnswer(3, "cytokinins",
				true,
				"Correct. A florist would most likely use a cytokinin spray because cytokinins slow aging and deterioration.");
			
				p.addAnswer(4, "brassinosteriods",
				false,
				"");
			
				p.addAnswer(5, "ethylene",
				false,
				"");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336261;


		
		

		
			
			p.question = "As leaf lettuce matures, a tall flowering shoot extends beyond the basal edible leaves. After the plant bolts like this, it no longer produces broad, tasty leaves. Suppose you want to prevent bolting so that you can harvest lettuce longer. You may want to prevent the plant from synthesizing _____. (<script type=\"text/javascript\">ebook(\'3902\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "abscisic acid",
				false,
				"No. Abscisic acid is an inhibitor of plant growth.");
			
				p.addAnswer(2, "gibberellins",
				true,
				"Correct. Gibberellins are responsible for promoting stem elongation.");
			
				p.addAnswer(3, "cytokinins",
				false,
				"No. Cytokinins stimulate lateral branching.");
			
				p.addAnswer(4, "ethylene",
				false,
				"No. Ethylene is an inhibitor of cell elongation.");
			
				p.addAnswer(5, "brassinosteroids",
				false,
				"No. Brassinosteroids induce cell elongation and division in stem segments and seedlings. The effects of brassinosteroids are quite similar to the effects of auxin.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336262;


		
		

		
			
			p.question = "Seeds of many desert plants will not germinate until a heavy rain washes away their _____. (<script type=\"text/javascript\">ebook(\'3902\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "phytochrome",
				false,
				"No. Phytochromes play a role in photoperiodism.");
			
				p.addAnswer(2, "abscisic acid",
				true,
				"Correct. The removal of abscisic acid, an inhibitor of growth, allows seeds to break dormancy.");
			
				p.addAnswer(3, "gibberellins",
				false,
				"No. Gibberellins stimulate stem elongation.");
			
				p.addAnswer(4, "auxin",
				false,
				"No. Auxin promotes primary growth.");
			
				p.addAnswer(5, "phytoalexins",
				false,
				"No. Phytoalexins are antimicrobial compounds produced by plants in response to infection.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336263;


		
		

		
			
			p.question = "The synthesis and release of abscisic acid in a plant is a response to _____. (<script type=\"text/javascript\">ebook(\'3902\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "water deficit",
				true,
				"Correct. A water deficit stimulates an increased synthesis and release of abscisic acid from mesophyll cells, which keeps stomata closed by acting on guard cell membranes.");
			
				p.addAnswer(2, "oxygen deprivation",
				false,
				"No. A response to oxygen deprivation in waterlogged soils is the formation of air tubes that provide oxygen to submerged roots.");
			
				p.addAnswer(3, "salt stress",
				false,
				"No. The production of organic solutes by plants is a response to salt stress.");
			
				p.addAnswer(4, "heat stress",
				false,
				"No. The closing of stomata and the production of heat-shock proteins are responses to heat stress.");
			
				p.addAnswer(5, "herbivory",
				false,
				"No. Some plants respond to herbivory by producing an unusual amino acid called canavanine, which kills the insect that fed on the plant.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336264;


		
		

		
			
			p.question = "The triple response to mechanical stress results in _____. (<script type=\"text/javascript\">ebook(\'3902\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "decreased stem elongation",
				true,
				"Correct. The triple response involves a slowing of stem elongation.");
			
				p.addAnswer(2, "thinner, weaker stems",
				false,
				"No. Stem thickening is part of the triple response.");
			
				p.addAnswer(3, "symmetric growth",
				false,
				"No.  During the triple response, asymmetric growth results in stem curvature .");
			
				p.addAnswer(4, "the activation of kinase",
				false,
				"No. The triple response results in the inactivation of kinase. This allows synthesis of the proteins required for the triple response.");
			
				p.addAnswer(5, "is promoted by ctytokinin",
				false,
				"No. The triple response is promoted by ethylene.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336265;


		
		

		
			
			p.question = "The abscission layer _____. (<script type=\"text/javascript\">ebook(\'3902\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "causes a shoot to bend toward light",
				false,
				"No. Hormones regulate the bending of a plant toward light.");
			
				p.addAnswer(2, "secretes cytokinin",
				false,
				"No. Cytokinins are produced in actively growing tissues such as roots, embryos, and fruits.");
			
				p.addAnswer(3, "is the location of the biological clock in a plant",
				false,
				"No. The biological clock has not been localized to such a specific region.");
			
				p.addAnswer(4, "detects light and measures the photoperiod",
				false,
				"No. This function is performed by phytochromes.");
			
				p.addAnswer(5, "is where a leaf separates from a stem",
				true,
				"Correct. This is the point near the base of the petiole where leaves break off the stem.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336266;


		
		

		
			
			p.question = "In the autumn, the amount of _____ decreases, rendering the cells of the abscission layer more sensitive to _____. (<script type=\"text/javascript\">ebook(\'3902\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "ethylene ... auxin",
				false,
				"No. These are the correct hormones, but it is a decrease in auxin that results in changes in the abscission layer.");
			
				p.addAnswer(2, "gibberellin ... abscisic acid",
				false,
				"No. Neither of these hormones plays a role in leaf abscission.");
			
				p.addAnswer(3, "cytokinin ... abscisic acid",
				false,
				"No. Neither of these hormones plays a role in leaf abscission.");
			
				p.addAnswer(4, "auxin ... ethylene",
				true,
				"Correct. The decrease in auxin results in the promotion of leaf abscission by ethylene.");
			
				p.addAnswer(5, "gibberellin ... auxin",
				false,
				"No. Only one of these hormones plays a role in leaf abscission.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336267;


		
		

		
			
			p.question = "Which of these features is characteristic of ethylene? (<script type=\"text/javascript\">ebook(\'3902\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "It is an organic compound.",
				false,
				"This is true but there is a better answer. Ethylene is an organic compound.");
			
				p.addAnswer(2, "It is active in small amounts.",
				false,
				"This is true but there is a better answer.");
			
				p.addAnswer(3, "Ethylene is involved in one of the rare examples of a positive feedback loop.",
				false,
				"This is true but there is a better answer.  Consider the relationship between ethylene and ripening (<script type=\"text/javascript\">ebook(\'3902\',\'quiz\')</script>).");
			
				p.addAnswer(4, "A burst of ethylene is almost always associated with apoptosis.",
				false,
				"This is true but there is a better answer.");
			
				p.addAnswer(5, "All of the above statements are true regarding ethylene.",
				true,
				"Correct. All of these statements are true.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336268;


		
		

		
			
			p.question = "Some seeds require light for germination. This process is controlled by the phytochrome system. Of the following germination treatments, which would inhibit germination of such seeds ? (<script type=\"text/javascript\">ebook(\'3903\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "exposure of seeds to only red light",
				false,
				"No. The exposure to red light would maintain P<sub>fr</sub>, the phytochrome isomer that promotes germination.");
			
				p.addAnswer(2, "exposure of seeds to red light followed by far-red light",
				true,
				"Correct. The exposure to far-red light promotes the conversion of P<sub>fr</sub> to P<sub>r</sub>, thus inhibiting germination. The effect of the initial red light exposure is \"canceled.\"");
			
				p.addAnswer(3, "far-red light followed by red light",
				false,
				"No. The exposure to red light would maintain P<sub>fr</sub>, the phytochrome isomer that promotes germination. The effect of the initial far-red light exposure is \"canceled.\"");
			
				p.addAnswer(4, "green light followed by red light",
				false,
				"No. The exposure to red light would maintain P<sub>fr</sub>, the phytochrome isomer that stimulates germination. The green light does not affect phytochrome.");
			
				p.addAnswer(5, "red light and far-red light together, followed by red light only",
				false,
				"No. The final exposure to red light would convert P<sub>r</sub> to P<sub>fr</sub>, and P<sub>fr</sub>, the phytochrome isomer that promotes germination.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336269;


		
		

		
			
			p.question = "Circadian rhythms are _____. (<script type=\"text/javascript\">ebook(\'3903\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "responses to the number of hours of daylight",
				false,
				"No. Circadian rhythms are not directly tied to any known environmental variable.");
			
				p.addAnswer(2, "innate 24-hour cycles of behavior or physiological change",
				true,
				"Correct. A physiological cycle with a frequency of about 24 hours is called a circadian rhythm.");
			
				p.addAnswer(3, "monthly cycles of behavior or physiological change",
				false,
				"No. Circadian rhythms are not monthly cycles.");
			
				p.addAnswer(4, "metabolic processes related to the light/dark cycling of the environment",
				false,
				"No.<b> </b>Circadian rhythms are not directly tied to any known environmental variable<b>.</b>");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336270;


		
		

		
			
			p.question = "Photoperiodism is _____. (<script type=\"text/javascript\">ebook(\'3903\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the ability to perceive shortwave ultraviolet light",
				false,
				"No. Photoperiodism is not related necessarily to an ability to perceive shortwave ultraviolet light.");
			
				p.addAnswer(2, "an attraction to light",
				false,
				"No. An attraction to light would be positive phototropism.");
			
				p.addAnswer(3, "found only in plants",
				false,
				"No. Animals also exhibit photoperiodism.");
			
				p.addAnswer(4, "a physiological response of an organism to alternating light and dark cycles",
				true,
				"Correct. A physiological response to the relative lengths of day and night is called photoperiodism.");
			
				p.addAnswer(5, "an aversion to light",
				false,
				"No. This would be negative phototropism.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336271;


		
		

		
			
			p.question = "An Alaskan trapper worried about being attacked by grizzly bears left on the lights in his cabin all the time. Plants just outside the cabin flowered a month early. Which of the following best explains this? (<script type=\"text/javascript\">ebook(\'3903\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "It was due to phototropism.",
				false,
				"No. Phototropism is the tendency of plants to grow toward light.");
			
				p.addAnswer(2, "They must have been long-night plants.",
				false,
				"No. Leaving the lights on would eliminate periods of darkness. Long-night (short-day) plants would not flower.");
			
				p.addAnswer(3, "The lights must have emitted far-red light.",
				false,
				"No. Red light affects plant flowering when it interrupts a period of darkness.");
			
				p.addAnswer(4, "They must have been long-day plants.",
				true,
				"Correct. Long-day (short-night) plants can be stimulated to flower by specific periods of uninterrupted exposure to darkness.");
			
				p.addAnswer(5, "They must have been short-day plants.",
				false,
				"No. Leaving the lights on would eliminate periods of darkness, preventing short-day (long-night) plants from flowering.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336272;


		
		

		
			
			p.question = "A certain short-day plant flowers when days are less than 12 hours long. Which of the following treatments will result in flowering? (<script type=\"text/javascript\">ebook(\'3903\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "a 15-hour day and a 9-hour night",
				false,
				"No. The length of the dark period is insufficient to cause flowering.");
			
				p.addAnswer(2, "an 8-hour day and a 16-hour night with 1 minute of white light after 8 hours",
				false,
				"No. The flash of light interrupts the dark period, resulting in a dark period that is insufficient to cause flowering.");
			
				p.addAnswer(3, "an 11-hour day with 1 minute of darkness after 6 hours, followed by a 13-hour night",
				true,
				"Correct. Short-day plants are actually long-night plants and this plant has received 13 hours of uninterrupted darkness. The interruption of the light period does not affect flowering.");
			
				p.addAnswer(4, "a 12-hour day and a 12-hour night with 1 minute of white light after 6 hours",
				false,
				"No. The length of uninterrupted darkness is insufficient to cause flowering.");
			
				p.addAnswer(5, "alternating 4-hour periods of light and darkness",
				false,
				"No. The length of uninterrupted darkness is insufficient to cause flowering.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336273;


		
		

		
			
			p.question = "A certain plant flowers only if days are shorter than 10 hours. Which of the following will cause it to flower? (<script type=\"text/javascript\">ebook(\'3902\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "an 8 hour day and a 16 hour night with a flash of red light after 8 hours",
				false,
				"No. Such a plant requires at least 14 hours of uninterrupted darkness. The flash of red light interrupts the period of darkness.");
			
				p.addAnswer(2, "a12 hour day and a 12 hour night with a flash of red light after 6 hours of dark",
				false,
				"No. There is only 12 hours of dark.  Additionally, the flash of red light interrupts the period of darkness. Such a plant requires at least 14 hours of uninterrupted darkness.");
			
				p.addAnswer(3, "a 16 hour day with a brief flash of red light after 8 hours, followed by an 8 hour night",
				false,
				"No. There is only 8 hours of dark. Such a plant requires at least 14 hours of darkness. The interruption of the light period does not affect flowering.");
			
				p.addAnswer(4, "an 8 hour day and a 16 hour night with a flash of red light, followed by a flash of far-red light",
				true,
				"Correct. Though a flash of red light can interrupt a period of darkness, the far-red light exposure \"cancels\" of the effect of the red light. The plant \"perceives\" this as 16 hours of uninterrupted darkness, which meets its requirement for flowering.");
			
				p.addAnswer(5, "6 hours light, 6 hours dark, 6 hours light, 6 hours dark",
				false,
				"No. Such a plant requires at least 14 hours of uninterrupted darkness.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336274;


		
		

		
			
			p.question = "_____ appear to be responsible for gravitropism. (<script type=\"text/javascript\">ebook(\'3904\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Statoliths",
				true,
				"Correct. The accumulation of statoliths at the low point of a cell may trigger a sequence of events that orient the plant with respect to gravity.");
			
				p.addAnswer(2, "Phytoalexins",
				false,
				"No. Phytoalexins are antimicrobial compounds produced in response to infection.");
			
				p.addAnswer(3, "Gibberellins",
				false,
				"No. Gibberellins stimulate plant growth, but not plant orientation.");
			
				p.addAnswer(4, "Cytokinins",
				false,
				"No. Cytokinins stimulate plant growth, but not plant orientation.");
			
				p.addAnswer(5, "Phytochromes",
				false,
				"No. Phytochromes play a role in a plant\'s response to light and photoperiod.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336275;


		
		

		
			
			p.question = "A rapid loss of water in specialized cells in the sensitive plant <i>Mimosa pudica</i> causes _____. (<script type=\"text/javascript\">ebook(\'3904\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "seed germination",
				false,
				"No. The germination of seeds requires an uptake of water by the seeds.");
			
				p.addAnswer(2, "the plant to bend toward light",
				false,
				"No. Such a response involves either the inhibition or stimulation of cell elongation. Cell elongation involves enzymes loosening the cell wall.");
			
				p.addAnswer(3, "stomatal openings, initiating photosynthesis",
				false,
				"No. The loss of water from guard cells would result in the closure of stomata.");
			
				p.addAnswer(4, "stress that results in the production of PR proteins",
				false,
				"No. PR proteins are produced in response to infection.");
			
				p.addAnswer(5, "leaves to droop",
				true,
				"Correct. The loss of water causes a loss of turgor and a drooping of the leaves.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336276;


		
		

		
			
			p.question = "Inhibiting the growth of shallow roots is a response of plants to _____. (<script type=\"text/javascript\">ebook(\'3904\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "water deficit",
				true,
				"Correct. Water deficits inhibit the growth of shallow roots.");
			
				p.addAnswer(2, "oxygen deprivation",
				false,
				"No. A response to oxygen deprivation in waterlogged soils is the formation of air tubes that provide oxygen to submerged roots.");
			
				p.addAnswer(3, "salt stress",
				false,
				"No. The production of organic solutes by plants is a response to salt stress.");
			
				p.addAnswer(4, "heat stress",
				false,
				"No. The closing of stomata and the production of heat-shock proteins are responses to heat stress.");
			
				p.addAnswer(5, "herbivory",
				false,
				"No. Some plants respond to herbivory by producing an unusual amino acid called canavanine, which kills the insect that fed on the plant.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336277;


		
		

		
			
			p.question = "The formation of air tubes in submerged roots is an adaptation to _____. (<script type=\"text/javascript\">ebook(\'3904\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "water deficit",
				false,
				"No. Roots submerged in water are not suffering from a water deficit.");
			
				p.addAnswer(2, "oxygen deprivation",
				true,
				"Correct. Oxygen deprivation stimulates the production of the hormone ethylene, which causes apoptosis in root cells. The destruction of cells creates air tubes.");
			
				p.addAnswer(3, "salt stress",
				false,
				"No. The production of organic solutes by plants is a response to salt stress.");
			
				p.addAnswer(4, "heat stress",
				false,
				"No. The closing of stomata and the production of heat-shock proteins are responses to heat stress.");
			
				p.addAnswer(5, "cold stress",
				false,
				"No. Some plants respond to cold stress by changing the solute composition of their cells.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336278;


		
		

		
			
			p.question = "When a plant that is not adapted to salty water is exposed to salty water, it will _____. (<script type=\"text/javascript\">ebook(\'3904\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "lose water rather than absorb it",
				true,
				"Correct. By lowering the water potential of the soil solution, salt can cause a water deficit in plants even when the soil has plenty of water. In this situation, roots will lose water rather than absorb it.");
			
				p.addAnswer(2, "thrive",
				false,
				"No. A plant in salty water is in a hypertonic solution.");
			
				p.addAnswer(3, "form air tubes",
				false,
				"No. The formation of air tubes is a response to the oxygen deprivation that occurs when roots are submerged.");
			
				p.addAnswer(4, "synthesize and release abscisic acid",
				false,
				"No. This is a response to a deficit of water.");
			
				p.addAnswer(5, "keep its stomata closed",
				false,
				"No. This is a response to a deficit of water.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336279;


		
		

		
			
			p.question = "The production of organic solutes by plants is a response to _____. (<script type=\"text/javascript\">ebook(\'3904\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "water deficit",
				false,
				"No. Water deficits stimulate an increased synthesis and release of abscisic acid from mesophyll cells, which keeps stomata closed by acting on guard cell membranes.");
			
				p.addAnswer(2, "oxygen deprivation",
				false,
				"No. A response to oxygen deprivation in waterlogged soils is the formation of air tubes that provide oxygen to submerged roots.");
			
				p.addAnswer(3, "salt stress",
				true,
				"Correct. Many plants can respond to soil salinity by producing organic compounds that keep the water potential of cells more negative than that of the soil solution without admitting toxic quantities of salt.");
			
				p.addAnswer(4, "heat stress",
				false,
				"No. The closing of stomata and the production of heat-shock proteins are responses to heat stress.");
			
				p.addAnswer(5, "herbivory",
				false,
				"No. Some plants respond to herbivory by producing chemicals that attract animals that are predators of those herbivores.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336280;


		
		

		
			
			p.question = "Which one of the following describes a plant\'s response to heat stress? (<script type=\"text/javascript\">ebook(\'3904\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "production of heat-shock proteins",
				false,
				"No. This choice is correct, but there is a better response.");
			
				p.addAnswer(2, "closing of stomata",
				false,
				"No. This choice is correct, but there is a better response.");
			
				p.addAnswer(3, "production of abscisic acid",
				false,
				"No. This response to water deficit occurs even if heat is not the cause of the water deficit.");
			
				p.addAnswer(4, "production of heat-shock proteins and closing of stomata",
				true,
				"Correct. Stomata are closed in response to high temperatures, and plant cells begin synthesizing heat-shock proteins.");
			
				p.addAnswer(5, "production of heat-shock proteins, closing of stomata, and altering the lipid composition of their membranes",
				false,
				"No. The third part of this choice describes a plant\'s response to cold stress.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336281;


		
		

		
			
			p.question = "How are heat-shock proteins thought to work? (<script type=\"text/javascript\">ebook(\'3904\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "They promote evaporative cooling.",
				false,
				"No. Heat-shock proteins do not promote water loss.");
			
				p.addAnswer(2, "They help other proteins retain their functional shapes.",
				true,
				"Correct. Some heat-shock proteins are identical to chaperone proteins, which help other proteins fold into their functional shapes.");
			
				p.addAnswer(3, "They regulate stomatal opening and closing.",
				false,
				"No. This is not the function of heat-shock proteins.");
			
				p.addAnswer(4, "They facilitate the uptake of water.",
				false,
				"No. This is not how heat-shock proteins work.");
			
				p.addAnswer(5, "They increase water potential.",
				false,
				"No. Water potential can be affected by the production of organic compounds retained within the cell.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336282;


		
		

		
			
			p.question = "Increasing the proportion of unsaturated fatty acids in their membranes is a response of plants to _____. (<script type=\"text/javascript\">ebook(\'3904\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "water deficit",
				false,
				"No. Water deficits stimulate an increased synthesis and release of abscisic acid from mesophyll cells, which keeps stomata closed by acting on guard cell membranes.");
			
				p.addAnswer(2, "oxygen deprivation",
				false,
				"No. A response to oxygen deprivation in waterlogged soils is the formation of air tubes that provide oxygen to submerged roots.");
			
				p.addAnswer(3, "salt stress",
				false,
				"No. The production of organic solutes by plants is a response to salt stress.");
			
				p.addAnswer(4, "cold stress",
				true,
				"Correct. Plants respond to cold stress by increasing the proportion of unsaturated fatty acids in their membranes. The fatty acids impede crystal formation and thus help keep membranes fluid at lower temperatures.");
			
				p.addAnswer(5, "herbivory",
				false,
				"No. Some plants respond to herbivory by producing an unusual amino acid called canavanine, which kills the insect that fed on the plant.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336283;


		
		

		
			
			p.question = "Increasing the cytoplasmic levels of specific well-tolerated solutes, such as sugars, helps a plant to cope with _____. (<script type=\"text/javascript\">ebook(\'3904\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "water deficit",
				false,
				"No. Water deficits stimulate an increased synthesis and release of abscisic acid from mesophyll cells, which keeps stomata closed by acting on guard cell membranes.");
			
				p.addAnswer(2, "oxygen deprivation",
				false,
				"No. A response to oxygen deprivation in waterlogged soil is the formation of air tubes that provide oxygen to submerged roots.");
			
				p.addAnswer(3, "heat stress",
				false,
				"No. The closing of stomata and the production of heat-shock proteins are responses to heat stress.");
			
				p.addAnswer(4, "cold stress",
				true,
				"Correct. The solutes will help reduce the loss of water from the cell during extracellular freezing.");
			
				p.addAnswer(5, "herbivory",
				false,
				"No. Some plants respond to herbivory by producing chemicals that attract predators of those herbivores.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336284;


		
		

		
			
			p.question = "The production of canavanine is a response of some plants to _____. (<script type=\"text/javascript\">ebook(\'3905\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "water deficit",
				false,
				"No. The synthesis and release of abscisic acid is a response to a water deficit.");
			
				p.addAnswer(2, "oxygen deprivation",
				false,
				"No. A response to oxygen deprivation in waterlogged soil is the formation of air tubes that provide oxygen to submerged roots.");
			
				p.addAnswer(3, "salt stress",
				false,
				"No. The production of organic solutes that affect water potential is a response to salt stress.");
			
				p.addAnswer(4, "cold stress",
				false,
				"No. An increase in the proportion of unsaturated fatty acids in the membranes is a response to cold stress.");
			
				p.addAnswer(5, "herbivory",
				true,
				"Correct. Some plants counter herbivory by producing an unusual amino acid called canavanine, which kills the insect that fed on the plant.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336285;


		
		

		
			
			p.question = "In at least some species of plants, a leaf damaged by a caterpillar may _____. (<script type=\"text/javascript\">ebook(\'3905\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "synthesize and release chemicals that attract wasps that prey on the caterpillar",
				true,
				"Correct. The physical damage and a salivary chemical from the caterpillar trigger a signal-transduction pathway that results in the synthesis and release of volatile attractants that recruit a parasitoid wasp to inject its eggs into the caterpillar.");
			
				p.addAnswer(2, "produce large quantities of heat-shock proteins that discourage foraging",
				false,
				"No. Heat-shock proteins are produced in response to heat stress.");
			
				p.addAnswer(3, "increase the proportion of unsaturated fatty acids in the membranes",
				false,
				"No. An increase in the proportion of unsaturated fatty acids in the membranes is a response to cold stress.");
			
				p.addAnswer(4, "respond by producing organic solutes that affect water potential",
				false,
				"No. This is a response to salt stress.");
			
				p.addAnswer(5, "increase the synthesis and release of abscisic acid, a deterrent to foraging",
				false,
				"No. The synthesis and release of abscisic acid is a response to a water deficit.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336286;


		
		

		
			
			p.question = "The first line of defense against pathogens is _____. (<script type=\"text/javascript\">ebook(\'3905\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "gene-for-gene recognition",
				false,
				"No.  The pathogen must already be in contact with the plant cell for this to function.");
			
				p.addAnswer(2, "specific plant disease resistance (<i>R</i>) genes",
				false,
				"No.  This is part of gene-for-gene recognition.");
			
				p.addAnswer(3, "production of oligosaccharides",
				false,
				"No. Oligosaccharides are elicitors that produce phytoalexins.");
			
				p.addAnswer(4, "production of phytoalexines",
				false,
				"No.  Phytoalexins are produced in response to contact with pathogenic microbes.");
			
				p.addAnswer(5, "physical barrier of the epidermis (or periderm)",
				true,
				"Correct.  The \"skin\" of a plant, like the skin of an animal, is its first line of defense against pathogens.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336287;


		
		

		
			
			p.question = "Plant defenses against the herbivores that feed on them include _____. (<script type=\"text/javascript\">ebook(\'3905\',\'quiz\')</script>)";
			p.incorrect_any_expl = "No. This choice is correct, but there is a better response.";
			p.incorrect_any_expl_flag = 1;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "poisons such as canavanine",
				false,
				"");
			
				p.addAnswer(2, "physical defenses, such as thorns and spines",
				false,
				"");
			
				p.addAnswer(3, "distasteful compounds",
				false,
				"");
			
				p.addAnswer(4, "chemicals that mimic insect hormones and cause developmental malformations in insects that eat them",
				false,
				"");
			
				p.addAnswer(5, "all of the above",
				true,
				"Correct. Plant defenses against herbivores include spines and thorns, in addition to chemicals that are poisonous, distasteful, or similar enough to insect hormones to interfere with insect development.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

