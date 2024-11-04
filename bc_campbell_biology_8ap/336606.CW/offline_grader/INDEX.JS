

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "45: Hormones and the Endocrine System > Practice Test";
	ak.quiz_loc_with_commas = "45: Hormones and the Endocrine System, Practice Test";
	ak.quiz_title = "Practice Test";

	
		ak.help_url = "../../placeholders/help_placeholder.html";
	
	ak.essay_total = 0;
	ak.pair_problem_total = 0;
	ak.pair_total = 0;
	ak.problem_total = 40;
	ak.non_essay_total = 40;
	ak.scored_item_total = 40;

	
	
	


	
	ak.copyright_date = "2008";
	ak.brandname = "Pearson Benjamin Cummings";
	ak.legal = "../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.pearsoned.com%2Flegal%2Findex.htm";


	// Loop over all problems
	
	
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336607;


		
		

		
			
			p.question = "The endocrine system relies upon _____ that _____ all of the cells of the body. (<script type=\"text/javascript\">ebook(\'45OV\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "hormones; reach",
				true,
				"Correct.  Different hormones affect cells with the receptors for that particular hormone.");
			
				p.addAnswer(2, "hormones; target",
				false,
				"No. Hormones only affect cells that have specific receptors for the hormone.");
			
				p.addAnswer(3, "nerves; reach",
				false,
				"No. The endocrine system releases hormones that affect target cells, which have specific receptors for the hormone.");
			
				p.addAnswer(4, "nerves; target",
				false,
				"No. The endocrine system releases hormones that affect target cells, which have specific receptors for the hormone.");
			
				p.addAnswer(5, "the nervous system; interconnects",
				false,
				"No. The endocrine system releases hormones that affect target cells, which have specific receptors for the hormone.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336608;


		
		

		
			
			p.question = "Neurosecretory cells are typically found in the _____. (<script type=\"text/javascript\">ebook(\'4501\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "brain",
				true,
				"Correct. Some types of nervous tissue contain specialized nerve cells, called neurosecretory cells, which secrete hormones.");
			
				p.addAnswer(2, "skeletal muscle",
				false,
				"No. Neurosecretory cells are commonly found in the brain.");
			
				p.addAnswer(3, "pancreas",
				false,
				"No. Neurosecretory cells are commonly found in the brain.");
			
				p.addAnswer(4, "liver",
				false,
				"No. Neurosecretory cells are commonly found in the brain.");
			
				p.addAnswer(5, "adrenal glands",
				false,
				"No. The adrenal glands are composed of glandular tissue. Neurosecretory cells are commonly found in the brain.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336609;


		
		

		
			
			p.question = "Which example below is a true statement about the differences between hormones and neurotransmitters? (<script type=\"text/javascript\">ebook(\'4501\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Neurotransmitters produce slower responses than hormones.",
				false,
				"No. Hormones are more apt to produce slower, but longer-acting, responses.");
			
				p.addAnswer(2, "Neurotransmitters are released from ductless glands into the blood.",
				false,
				"No. Hormones are released from ductless glands directly into body fluids.");
			
				p.addAnswer(3, "Some endocrine glands release neurotransmitters, but no nervous tissue releases hormones.",
				false,
				"No. Neurosecretory cells, part of the nervous system, release hormones directly into the blood.");
			
				p.addAnswer(4, "Neurotransmitters convey messages between nerve cells.",
				true,
				"Correct. Neurotransmitters are local chemical signals that convey messages between neurons in the nervous system.");
			
				p.addAnswer(5, "all of the above",
				false,
				"No. Only one of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336610;


		
		

		
			
			p.question = "Which is an accurate statement regarding the difference between steroid and nonsteroid hormones? (<script type=\"text/javascript\">ebook(\'4501\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Steroid hormones are made from lipids; nonsteroid hormones are made from one or more amino acids.",
				true,
				"Correct.  Steroid hormones are lipid-soluble, which allows them to pass through membranes.");
			
				p.addAnswer(2, "Nonsteroid hormones can pass through cell membranes; most steroid hormones cannot.",
				false,
				"No. Steroid hormones can pass through cell membranes; most nonsteroid hormones cannot.");
			
				p.addAnswer(3, "Nonsteroid hormones attach to receptors in the cytoplasm; steroid hormones attach to membrane-bound receptors.",
				false,
				"No. Steroid hormones attach to receptors in the cytoplasm; nonsteroid hormones attach to membrane-bound receptors.");
			
				p.addAnswer(4, "Steroid hormones inactivate genes; nonsteroid hormones directly activate genes.",
				false,
				"No. Steroid hormones activate genes; nonsteroid hormones do not directly activate genes.");
			
				p.addAnswer(5, "Steroid hormones are produced by endocrine glands; nonsteroid hormones are produced by nervous tissue.",
				false,
				"No. Both types of hormones can be made by endocrine glands.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336611;


		
		

		
			
			p.question = "Since most chemical signals are unable to pass through the plasma membrane, the cellular action they initiate results from _____. (<script type=\"text/javascript\">ebook(\'4501\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "ligand binding",
				false,
				"No. A ligand is any small molecule that binds to a larger molecule. Ligand binding occurs with chemical signaling, but binding alone does not explain the change in the cell\'s chemical behavior.");
			
				p.addAnswer(2, "the activation of a signal transduction pathway",
				true,
				"Correct. When a signal molecule binds to a surface receptor, it induces a specific intracellular response.");
			
				p.addAnswer(3, "direct stimulation of the cell\'s DNA",
				false,
				"No. This would be possible only if the signal molecule could cross the plasma membrane and then have access to the nucleus.");
			
				p.addAnswer(4, "the enzymatic behavior of the signal molecule",
				false,
				"No. Even if the signal molecule were an enzyme, its action would be restricted to the surface of the cell.");
			
				p.addAnswer(5, "binding to intracellular receptors",
				false,
				"No. However, some steroid hormones do bind to intracellular receptors. This question asked about those molecules unable to cross the plasma membrane.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336612;


		
		

		
			
			p.question = "What is the role of a second messenger in hormone action? (<script type=\"text/javascript\">ebook(\'4501\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "It signals a cell to secrete a hormone.",
				false,
				"No. A second messenger is produced by a stimulated receptor.");
			
				p.addAnswer(2, "It informs a gland as to whether its hormones are having an effect.",
				false,
				"No. However, feedback is an important aspect of hormonal regulation.");
			
				p.addAnswer(3, "It relays a hormone\'s message inside a target cell.",
				true,
				"Correct. Most hormones are unable to cross plasma membranes. After binding to a surface receptor, a transduction event may result in the production of a second messenger within the cell.");
			
				p.addAnswer(4, "It stops hormone action when it is no longer needed.",
				false,
				"No. Hormone action continues until the hormones are inactivated enzymatically, bound intracellularly, or decline in concentration below a threshold level.");
			
				p.addAnswer(5, "all of the above",
				false,
				"No. Only one of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336613;


		
		

		
			
			p.question = "What did experiments with melanocyte-stimulating hormone, a water-soluble hormone, in the skin cells of frogs reveal about hormone action? (<script type=\"text/javascript\">ebook(\'4501\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "These experiments revealed the role of cell-surface receptors in signal transduction pathways.",
				true,
				"Correct. When melanocyte-stimulating hormone was added to the interstitial fluid around frog skin cells, the skin changed color. When the hormone was injected directly into the cells, no change occurred. This indicates that an interaction between the hormone and a surface receptor is required for hormone action.");
			
				p.addAnswer(2, "These experiments identified intracellular proteins that function as receptors.",
				false,
				"No. This could only be true if melanocyte-stimulating hormone were a lipid-soluble hormone.");
			
				p.addAnswer(3, "These experiments indicated that hormones could only cause a reaction within target cells.",
				false,
				"No. This is a true statement, but this was not revealed by the experiment referred to in this question.");
			
				p.addAnswer(4, "These experiments indicated that certain hormones could cause a change in gene expression.",
				false,
				"No. This is true of lipid-soluble hormones, but not water-soluble hormones.");
			
				p.addAnswer(5, "These experiments indicated that certain hormone receptors are trapped in the cytoplasm in the absence of hormone.",
				false,
				"No. This could be true of hormone receptors for lipid-soluble hormones, but not hormone receptors of water-soluble hormones.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336614;


		
		

		
			
			p.question = "Which one of the following hormones or types of hormones is thought to act at the cellular level by inducing a change in gene expression? (<script type=\"text/javascript\">ebook(\'4501\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "protein hormones",
				false,
				"No. Protein hormones are not soluble in lipids.");
			
				p.addAnswer(2, "thyroid-stimulating hormone (TSH)",
				false,
				"No. TSH is a glycoprotein.");
			
				p.addAnswer(3, "sex hormones",
				true,
				"Correct. Sex hormones are steroid hormones that can cross the plasma membrane and bind to receptors in the cytoplasm. The hormone-receptor complex has the proper conformation to bind to certain sites on DNA.");
			
				p.addAnswer(4, "catecholamines",
				false,
				"No. Catecholamines are protein hormones.");
			
				p.addAnswer(5, "antidiuretic hormone",
				false,
				"No. Only steroids, iodine-containing thyroid hormones, and vitamin D can enter cells.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336615;


		
		

		
			
			p.question = "Which example below is a role of nitric oxide (NO), a local regulator? (<script type=\"text/javascript\">ebook(\'4501\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "When oxygen levels fall, nitric oxide activates an enzyme that relaxes smooth muscle. This dilates blood vessels and improves blood flow.",
				true,
				"Correct.  NO increases blood flow.");
			
				p.addAnswer(2, "When secreted by certain white blood cells, NO stimulates the reproduction of some bacteria and cancer cells.",
				false,
				"No. When secreted by certain white blood cells, NO kills some bacteria and cancer cells.");
			
				p.addAnswer(3, "NO decreases the blood flow into the penis, producing an erection.",
				false,
				"No. NO increases the blood flow into the penis, producing an erection.");
			
				p.addAnswer(4, "In the nervous system, NO serves as a cell surface receptor.",
				false,
				"No. In the nervous system, NO serves as a neurotransmitter.");
			
				p.addAnswer(5, "all of the above",
				false,
				"No. Only one of the responses above is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336616;


		
		

		
			
			p.question = "Ibuprofen is known for its pain-relieving and anti-inflammatory properties because it inhibits the synthesis of _____. (<script type=\"text/javascript\">ebook(\'4501\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "glucocorticoids",
				false,
				"No. Glucocorticoids are involved with inflammation, but they are not blocked by ibuprofen.");
			
				p.addAnswer(2, "nitric oxide",
				false,
				"No. Although nitric oxide has many roles in the body, the sensation of pain and inflammation is not one of them.");
			
				p.addAnswer(3, "progestins",
				false,
				"No. These hormones are produced by the ovaries. They prepare and maintain the uterus for pregnancy.");
			
				p.addAnswer(4, "prostaglandins",
				true,
				"Correct. Among other roles, prostaglandins help induce fever and inflammation and intensify the sensation of pain.");
			
				p.addAnswer(5, "cytokines",
				false,
				"No. Cytokines are active in the immune response. They are secreted by activated helper T cells and stimulate other lymphocytes.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336617;


		
		

		
			
			p.question = "Every time you eat a cookie or candy bar, your blood sugar increases. This triggers an increase in the hormone _____. (<script type=\"text/javascript\">ebook(\'4502\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "thyroxine",
				false,
				"No. The primary function of thyroxine is to regulate the metabolic rate.");
			
				p.addAnswer(2, "epinephrine",
				false,
				"No. Epinephrine stimulates receptors of the autonomic nervous system, resulting in a coordinated physiological response to stress.");
			
				p.addAnswer(3, "adrenocorticotropic hormone (ACTH)",
				false,
				"No. ACTH is a tropic hormone that stimulates the adrenal cortex.");
			
				p.addAnswer(4, "glucagon",
				false,
				"No. The primary action of glucagon is to elevate blood sugar by accelerating the catabolism of glycogen.");
			
				p.addAnswer(5, "insulin",
				true,
				"Correct. Insulin facilitates the entry of glucose into a wide variety of body cells and quickly removes glucose from the blood.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336618;


		
		

		
			
			p.question = "Which of the following hormones have antagonistic effects? (<script type=\"text/javascript\">ebook(\'4502\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "thyroxine and calcitonin",
				false,
				"No. Thyroxine regulates the metabolic rate of most cells, and calcitonin participates in calcium regulation.");
			
				p.addAnswer(2, "insulin and glucagon",
				true,
				"Correct. These hormones decrease and increase blood sugar, respectively. It is important to note, however, that the mechanisms responsible for the effects are not opposite to one another.");
			
				p.addAnswer(3, "growth hormone and epinephrine",
				false,
				"No. Growth hormone is a growth factor, and epinephrine intensifies the activity of the organ systems necessary to deal with short-term stress.");
			
				p.addAnswer(4, "ACTH and glucocorticoids",
				false,
				"No. ACTH is the tropic hormone that brings about the release of glucocorticoids from the adrenal cortex.");
			
				p.addAnswer(5, "epinephrine and norepinephrine",
				false,
				"No. Both are released during times of stress.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336619;


		
		

		
			
			p.question = "Which sequence below correctly describes the maintenance of glucose synthesis? (<script type=\"text/javascript\">ebook(\'4502\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "low blood sugar, pancreatic beta cells stimulated, insulin released, breakdown of glycogen in target cells",
				false,
				"No. When blood sugar levels are low, the pancreas releases glucagon.");
			
				p.addAnswer(2, "low blood sugar, pancreatic alpha cells stimulated, glucagon released, breakdown of glycogen in target cells",
				true,
				"Correct. The target cells in this case are glycogen-storing liver cells.");
			
				p.addAnswer(3, "high blood sugar, pancreatic alpha cells stimulated, insulin released, uptake of glucose by target cells",
				false,
				"No. Pancreatic beta cells release insulin.");
			
				p.addAnswer(4, "high blood sugar, pancreatic alpha cells stimulated, glucagon released, glycogen synthesis in liver",
				false,
				"No. Glucagon promotes the breakdown of glycogen, not its synthesis.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336620;


		
		

		
			
			p.question = "Type 1 diabetes mellitus _____. (<script type=\"text/javascript\">ebook(\'4502\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "is an autoimmune disease in which the immune system attacks beta cells in the pancreas",
				true,
				"Correct. This form of diabetes typically starts in childhood; it is treated with insulin injections.");
			
				p.addAnswer(2, "is a common disorder in overweight individuals older than 40",
				false,
				"No. Adult onset is a characteristic of type 2 diabetes, although in recent years development in younger individuals has been on the rise.");
			
				p.addAnswer(3, "is treated by improving insulin receptor efficiency rather than by giving insulin",
				false,
				"No. Loss of receptor sensitivity is a characteristic of type 2 diabetes.");
			
				p.addAnswer(4, "is the most common form of the disease; more than 90% of all diabetics have type 1 diabetes",
				false,
				"No. Type 2 diabetes, also called insulin-dependent diabetes, is the most common form.");
			
				p.addAnswer(5, "can be controlled for many years with exercise and a proper diet",
				false,
				"No. The responsiveness of the disease to diet and exercise is a characteristic of type 2 diabetes.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336621;


		
		

		
			
			p.question = "Which one of the following conditions in a silkworm moth would result in metamorphosis from pupa to adult? (<script type=\"text/javascript\">ebook(\'4503\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "lack of a prothoracic gland",
				false,
				"No. In this case, brain hormone would not be produced, and therefore neither would ecdysone.");
			
				p.addAnswer(2, "stimulation of the corpora allata",
				false,
				"No. These glands release juvenile hormone.");
			
				p.addAnswer(3, "high concentration of juvenile hormone",
				false,
				"No. Juvenile hormone acts to maintain the juvenile state.");
			
				p.addAnswer(4, "low concentration of juvenile hormone",
				true,
				"Correct. Juvenile hormone promotes the retention of larval characteristics.");
			
				p.addAnswer(5, "high concentration of brain hormone",
				false,
				"No. Brain hormone controls the secretion of ecdysone.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336622;


		
		

		
			
			p.question = "In insects, ecdysone is released from _____. (<script type=\"text/javascript\">ebook(\'4503\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "neurosecretory cells in the brain",
				false,
				"No. These cells produce brain hormone.");
			
				p.addAnswer(2, "prothoracic glands",
				true,
				"Correct. The glands are stimulated by brain hormone to release ecdysone.");
			
				p.addAnswer(3, "corpora allata",
				false,
				"No. This is a small pair of endocrine glands just behind the brain that release juvenile hormone.");
			
				p.addAnswer(4, "the insect\'s cocoon",
				false,
				"No. The hormone is released from the prothoracic glands.");
			
				p.addAnswer(5, "the outer layer of the insect as it molts",
				false,
				"No. The hormone is released from the prothoracic glands.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336623;


		
		

		
			
			p.question = "Which one of the following endocrine organs only stores hormones produced by the hypothalamus? (<script type=\"text/javascript\">ebook(\'4503\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "thyroid",
				false,
				"No. The thyroid secretes hormones that it produces.");
			
				p.addAnswer(2, "adrenal cortex",
				false,
				"No. The adrenal cortex secretes hormones that it produces.");
			
				p.addAnswer(3, "adrenal medulla",
				false,
				"No. The adrenal medulla produces and secretes epinephrine and norepinephrine.");
			
				p.addAnswer(4, "anterior pituitary",
				false,
				"No. The anterior pituitary secretes hormones that it produces.");
			
				p.addAnswer(5, "posterior pituitary",
				true,
				"Correct. The posterior pituitary stores and secretes two hormones produced in the hypothalamus.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336624;


		
		

		
			
			p.question = "As a young girl, Maria suffered a head injury that damaged her pituitary. An injury to the pituitary is particularly serious because of all the functions controlled by this gland. As Maria got older, she and her doctors found that all of the following <b>except</b> her _____ were affected. (<script type=\"text/javascript\">ebook(\'4503\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "metabolic rate",
				false,
				"No. The pituitary produces TSH, which regulates the thyroid gland. Thyroxine does affect the metabolic rate.");
			
				p.addAnswer(2, "growth",
				false,
				"No. The pituitary produces growth hormone, which does affect growth.");
			
				p.addAnswer(3, "menstrual cycle",
				false,
				"No. Two hormones from the pituitary, LH and FSH, do influence the female reproductive cycle.");
			
				p.addAnswer(4, "water regulation",
				false,
				"No. Antidiuretic hormone, secreted by the posterior pituitary, acts on kidneys, increasing water retention and decreasing urine volume.");
			
				p.addAnswer(5, "blood sugar level",
				true,
				"Correct. Under normal circumstances, the hormones glucagon and insulin maintain blood sugar within its homeostatic range. These hormones are not controlled by the pituitary.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336625;


		
		

		
			
			p.question = "A doctor might give an expectant mother _____ to stimulate uterine contractions and induce labor. (<script type=\"text/javascript\">ebook(\'4503\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "adrenocorticotropic hormone (ACTH)",
				false,
				"No. ACTH is a tropic hormone; it influences the cortical region of the adrenal gland.");
			
				p.addAnswer(2, "thyroxine",
				false,
				"No. Thyroxine assists with the regulation of metabolism in most cells.");
			
				p.addAnswer(3, "oxytocin",
				true,
				"Correct. Oxytocin is released from the posterior pituitary as part of a positive feedback loop involving uterine contractions.");
			
				p.addAnswer(4, "insulin",
				false,
				"No. The action of insulin is to lower blood sugar.");
			
				p.addAnswer(5, "follicle-stimulating hormone (FSH)",
				false,
				"No. The action of FSH is to stimulate follicle maturation in women and sperm production in men.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336626;


		
		

		
			
			p.question = "The regulation of water volume in the blood involves which hormone? (<script type=\"text/javascript\">ebook(\'4503\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "oxytocin",
				false,
				"No. Oxytocin stimulates the contraction of smooth muscle in the uterus and plays a role in the release of milk from the mammary glands.");
			
				p.addAnswer(2, "insulin",
				false,
				"No. Insulin is involved in the regulation of blood sugar levels.");
			
				p.addAnswer(3, "FSH",
				false,
				"No. FSH is a hormone that affects the gonads.");
			
				p.addAnswer(4, "ADH",
				true,
				"Correct. Antidiuretic hormone (ADH) is secreted by the posterior pituitary and acts on the kidneys, increasing water retention and thus decreasing urine volume.");
			
				p.addAnswer(5, "glucagon",
				false,
				"No. Glucagon is involved in the regulation of blood sugar levels.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336627;


		
		

		
			
			p.question = "How does the hypothalamus control the secretion of growth hormone (GH) from the anterior pituitary? (<script type=\"text/javascript\">ebook(\'4503\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "The hypothalamus produces a releasing hormone that stimulates the pituitary to secrete GH.",
				true,
				"Correct. Releasing hormones make the anterior pituitary secrete its hormones.");
			
				p.addAnswer(2, "The hypothalamus sends a hormone to the target cells that makes them receptive to GH.",
				false,
				"No. Consider the gland that is an intermediary between the hypothalamus and other glands.");
			
				p.addAnswer(3, "Feedback from the target cells is sent to the posterior pituitary, which signals the hypothalamus to stimulate the anterior pituitary.",
				false,
				"No. Feedback from the target cells would stimulate the hypothalamus.");
			
				p.addAnswer(4, "The hypothalamus stimulates an action potential in the posterior pituitary, which then sends a releasing hormone to the anterior pituitary.",
				false,
				"No. The anterior pituitary is not under the direction of the posterior pituitary.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336628;


		
		

		
			
			p.question = "Which of the following is a neurohormone secreted by the posterior pituitary? (<script type=\"text/javascript\">ebook(\'4503\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "insulin",
				false,
				"No. Insulin is secreted by the pancreas.");
			
				p.addAnswer(2, "oxytocin",
				true,
				"Correct. The posterior pituitary releases oxytocin and antidiuretic hormone.");
			
				p.addAnswer(3, "ACTH",
				false,
				"No. ACTH is secreted by the anterior pituitary.");
			
				p.addAnswer(4, "thyroxine",
				false,
				"No. Thyroxine is secreted by the thyroid gland.");
			
				p.addAnswer(5, "PTH",
				false,
				"No. PTH is secreted by the parathyroid glands.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336629;


		
		

		
			
			p.question = "FSH (follicle-stimulating hormone) and LH (luteinizing hormone) are tropic hormones that are also known as _____. (<script type=\"text/javascript\">ebook(\'4503\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "gonadotropins",
				true,
				"Correct. FSH and LH are called gonadotropins because they stimulate the activities of male and female gonads, the testes and ovaries.");
			
				p.addAnswer(2, "prostaglandins",
				false,
				"No. These are local regulators that act on various tissues in different ways.");
			
				p.addAnswer(3, "neurohormones",
				false,
				"No. FSH and LH are released from the anterior pituitary, not neurosecretory cells.");
			
				p.addAnswer(4, "cytokines",
				false,
				"No. These are regulators that play a role in immune responses.");
			
				p.addAnswer(5, "androgens",
				false,
				"No. But the synthesis of androgens is controlled by FSH and LH.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336630;


		
		

		
			
			p.question = "Which of the following hormones specifically act(s) to trigger secretion of hormones by another endocrine gland? (<script type=\"text/javascript\">ebook(\'4503\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "thyroid hormones (T<sub>3</sub> and T<sub>4</sub>)",
				false,
				"No. These hormones do not affect other endocrine glands by stimulating endocrine secretion, although they may influence the bioenergetics of the cells of other endocrine glands.");
			
				p.addAnswer(2, "progesterone",
				false,
				"No. The target of progesterone is the female reproductive system, primarily the uterus.");
			
				p.addAnswer(3, "adrenocorticotropic hormone (ACTH)",
				true,
				"Correct. The target of ACTH is the adrenal cortex.");
			
				p.addAnswer(4, "antidiuretic hormone (ADH)",
				false,
				"No. The target of ADH is the collecting duct of the nephron.");
			
				p.addAnswer(5, "melatonin",
				false,
				"No. The target of melatonin appears to be the suprachiasmatic nucleus, which functions as a biological clock.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336631;


		
		

		
			
			p.question = "Which is a correct statement about prolactin? (<script type=\"text/javascript\">ebook(\'4503\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "It is produced by the posterior pituitary in all vertebrates.",
				false,
				"No. It is produced by the anterior pituitary in all vertebrates.");
			
				p.addAnswer(2, "It regulates the balance between salt and water in saltwater fish such as the barracuda.",
				false,
				"No. Prolactin regulates the balance between salt and water in freshwater fish such as guppies.");
			
				p.addAnswer(3, "It regulates larval development in beetles and grasshoppers.",
				false,
				"No. Prolactin regulates larval development in amphibians such as frogs and salamanders.");
			
				p.addAnswer(4, "It controls fat metabolism and reproduction in birds.",
				true,
				"Correct. Fat metabolism and reproduction are regulated by prolactin in birds.");
			
				p.addAnswer(5, "It stimulates the mammary glands to produce milk in birds.",
				false,
				"No. Birds do not have mammary glands.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336632;


		
		

		
			
			p.question = "The mammary glands of a pregnant female will begin to produce milk in response to changes in the level of which of the following hormones? (<script type=\"text/javascript\">ebook(\'4503\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "prolactin",
				true,
				"Correct. Prolactin, produced by the anterior pituitary, stimulates milk production.");
			
				p.addAnswer(2, "progesterone",
				false,
				"No. Progesterone helps maintain the uterine lining for implantation and eventually the growth of a developing embryo.");
			
				p.addAnswer(3, "estrogen",
				false,
				"No. Estrogen is involved in the development of female secondary sex characteristics and the maintenance of the reproductive system.");
			
				p.addAnswer(4, "relaxin",
				false,
				"No. Relaxin is a hormone associated with changes that occur in the birth canal prior to delivery.");
			
				p.addAnswer(5, "oxytocin",
				false,
				"No. Prolactin stimulates milk synthesis, and oxytocin stimulates the release of milk from the mammary glands.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336633;


		
		

		
			
			p.question = "The major tropic action of growth hormone is to signal the _____ to release _____. (<script type=\"text/javascript\">ebook(\'4503\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "thyroid; T<sub>3</sub> and T<sub>4</sub>",
				false,
				"No. The thyroid is stimulated by TSH, released from the anterior pituitary.");
			
				p.addAnswer(2, "pancreas; glucagon",
				false,
				"No. The pancreas releases glucagon when blood glucose levels drop.");
			
				p.addAnswer(3, "liver; insulin-like growth factors (IGFs)",
				true,
				"Correct. IGFs circulate in the blood and directly stimulate bone and cartilage growth.");
			
				p.addAnswer(4, "hypothalamus; thyroid-releasing hormone",
				false,
				"No. The hypothalamus is stimulated to produce TRH by dropping levels of T<sub>3</sub> and T<sub>4</sub>.");
			
				p.addAnswer(5, "adrenal medulla; epinephrine",
				false,
				"No. The brain sends nerve signals to the adrenal medulla to stimulate the release of epinephrine.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336634;


		
		

		
			
			p.question = "How is the level of thyroxine in the blood regulated? (<script type=\"text/javascript\">ebook(\'4504\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Thyroxine stimulates the pituitary to secrete thyroid-stimulating hormone (TSH).",
				false,
				"No. This would produce a positive feedback loop with increasing concentrations of thyroxine.");
			
				p.addAnswer(2, "TSH inhibits the secretion of thyroxine from the thyroid gland.",
				false,
				"No. TSH (thyroid-stimulating hormone) stimulates the secretion of thyroxine from the thyroid gland.");
			
				p.addAnswer(3, "TSH-releasing hormone (TRH) inhibits the secretion of thyroxine by the thyroid gland.",
				false,
				"No. Think about the name. Why would it be called a releasing hormone if it prevented the release of thyroxine?");
			
				p.addAnswer(4, "Thyroxine stimulates the hypothalamus to secrete TRH.",
				false,
				"No. Since TRH ultimately results in the release of thyroxine, this would become a positive feedback loop.");
			
				p.addAnswer(5, "High levels of T<sub>3</sub> and T<sub>4</sub> inhibit the secretion of TRH and TSH.",
				true,
				"Correct. This is a negative feedback loop that maintains proper levels of TRH.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336635;


		
		

		
			
			p.question = "Which disorder is correctly matched with its cause? (<script type=\"text/javascript\">ebook(\'4504\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "pituitary dwarfism; hyposecretion of growth hormone",
				true,
				"Correct. In children, a growth-hormone deficiency could lead to pituitary dwarfism. Hyposecretion in adults results in poor protein synthesis and affects the hair, skin, and muscles.");
			
				p.addAnswer(2, "acromegaly; hypersecretion of thyroxine",
				false,
				"No. Acromegaly results when there is excessive growth hormone in adulthood.");
			
				p.addAnswer(3, "low blood calcium; hypersecretion of parathyroid hormone (PTH)",
				false,
				"No. Since PTH elevates blood calcium, a hypersecretion would have just the opposite effect.");
			
				p.addAnswer(4, "diabetes mellitus; hypersecretion of insulin",
				false,
				"No. Diabetes mellitus results from too little insulin rather than too much.");
			
				p.addAnswer(5, "acromegaly; hyposecretion of growth hormone",
				false,
				"No. Acromegaly is a condition in adults in which too much growth hormone is produced. In children this condition, if untreated, causes gigantism.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336636;


		
		

		
			
			p.question = "Which is a correct statement about the thyroid gland? (<script type=\"text/javascript\">ebook(\'4504\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "It produces the lipid class of hormones.",
				false,
				"No. It produces a peptide hormone, calcitonin, and two amine hormones.");
			
				p.addAnswer(2, "Fluorine is essential to proper thyroid function.",
				false,
				"No. Iodine is essential for the thyroid to make thyroxine and triiodothyronine.");
			
				p.addAnswer(3, "Thyroid hormones trigger the change of an aquatic tadpole into a terrestrial bullfrog.",
				true,
				"Correct. Thyroid hormones are involved in bullfrog maturation.");
			
				p.addAnswer(4, "Goiter is caused by hyperthyroidism.",
				false,
				"No. Hypothyroidism, the underproduction of thyroid hormones, can lead to a goiter.");
			
				p.addAnswer(5, "Thyroxine and triiodothyronine, two of the thyroid hormones, are steroid hormones.",
				false,
				"No. They affect cells in a similar way as steroid hormones (they are also lipid-soluble), but they are amine hormones.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336637;


		
		

		
			
			p.question = "Hyperthyroidism, typically characterized by a high metabolic rate and high blood pressure, might be expected when _____. (<script type=\"text/javascript\">ebook(\'4504\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the pituitary secretes high concentrations of thyroxine",
				false,
				"No. The thyroid gland secretes thyroxine.");
			
				p.addAnswer(2, "thyroid-stimulating hormone (TSH) concentration is high",
				true,
				"Correct. When TSH binds to specific receptors in the thyroid gland, a signal transduction pathway triggers the synthesis and release of T<sub>3</sub> and T<sub>4</sub>. An excessive secretion of thyroid hormones, known as hyperthyroidism, produces such symptoms as sweating, high body temperature, weight loss, irritability, and increased blood pressure.");
			
				p.addAnswer(3, "thyroxine concentration is low",
				false,
				"No. Thyroxine stimulates the metabolic rate.");
			
				p.addAnswer(4, "the production of TSH-releasing factor is inhibited",
				false,
				"No. TSH stimulates the release of thyroid hormones.");
			
				p.addAnswer(5, "a person has an iodine deficiency",
				false,
				"No. In this situation, T<sub>3</sub> and T<sub>4</sub> would not be produced; the result would be hypothyroidism.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336638;


		
		

		
			
			p.question = "If a diet is deficient in iodine, a goiter may form because _____. (<script type=\"text/javascript\">ebook(\'4504\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the thyroid cannot release T<sub>3</sub> and T<sub>4</sub> so the hormones build up in the gland",
				false,
				"No. Without iodine, the thyroid cannot even produce these hormones.");
			
				p.addAnswer(2, "low blood levels of T<sub>3</sub> and T<sub>4</sub> inhibit the negative feedback loop, and an overload of TRH causes enlargement of the gland",
				false,
				"No. It is correct that low blood levels inhibit the negative feedback loop, but it is TSH that causes enlargement of the gland.");
			
				p.addAnswer(3, "low blood levels of T<sub>3</sub> and T<sub>4</sub> inhibit the negative feedback loop, and an overload of TSH causes enlargement of the gland",
				true,
				"Correct. The hypothalamus continues to release TRH, causing the anterior pituitary to continue secreting TSH.");
			
				p.addAnswer(4, "This sentence cannot be completed because researchers are not sure why goiters form.",
				false,
				"No. Low blood levels of T<sub>3</sub> and T<sub>4</sub> inhibit the negative feedback loop. An overload of TSH causes enlargement of the gland.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336639;


		
		

		
			
			p.question = "How does parathyroid hormone affect levels of Ca<sup>2+</sup> in the blood? (<script type=\"text/javascript\">ebook(\'4504\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "When Ca<sup>2+</sup> levels fall, PTH increases the matrix of bone and stimulates reabsorption of Ca<sup>2+</sup> in the small intestines.",
				false,
				"No. PTH stimulates osteoclasts to decompose the bone matrix and stimulates reabsorption of Ca<sup>2+</sup>in the kidneys.");
			
				p.addAnswer(2, "When Ca<sup>2+</sup> levels rise, PTH stimulates the uptake of calcium in bones and the release of calcium in urine.",
				false,
				"No. When Ca<sup>2+</sup> levels fall, PTH stimulates osteoclasts to decompose the bone matrix and stimulates reabsorption of Ca<sup>2+</sup> in the kidneys.");
			
				p.addAnswer(3, "When Ca<sup>2+</sup> levels fall, PTH stimulates bone cells to decompose the matrix of bone and stimulates reabsorption of Ca<sup>2+</sup> in the renal tubules.",
				true,
				"Correct. These two actions will build up the level of calcium in the blood.");
			
				p.addAnswer(4, "When Ca<sup>2+</sup> levels rise, PTH stimulates the conversion of vitamin D to its active hormonal form in the kidneys and facilitates accumulation of calcium in bones.",
				false,
				"No. When Ca<sup>2+</sup> levels fall, PTH stimulates the conversion of vitamin D to its active form and facilitates breakdown of calcium in bones.");
			
				p.addAnswer(5, "When Ca<sup>2+</sup> levels fall, PTH stimulates the conversion of vitamin D in the liver and stimulates bone cells to decompose the matrix of bone.",
				false,
				"No. When Ca<sup>2+</sup> levels fall, PTH stimulates the conversion of vitamin D in the kidneys.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336640;


		
		

		
			
			p.question = "Which of the following hormones has the broadest range of targets? (<script type=\"text/javascript\">ebook(\'4504\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "ADH",
				false,
				"No. The target for ADH is the collecting duct of the kidney.");
			
				p.addAnswer(2, "oxytocin",
				false,
				"No. The target for oxytocin is the smooth muscle of the uterus or the mammary glands of lactating female mammals.");
			
				p.addAnswer(3, "TSH",
				false,
				"No. The target for TSH is the thyroid gland.");
			
				p.addAnswer(4, "epinephrine",
				true,
				"Correct. Epinephrine stimulates all the receptors of the sympathetic branch of the autonomic nervous system, resulting in a very large distribution of action.");
			
				p.addAnswer(5, "ACTH",
				false,
				"No. The target for ACTH is the adrenal cortex.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336641;


		
		

		
			
			p.question = "Which statement below about the catecholamines secreted by the adrenal medulla is correct? (<script type=\"text/javascript\">ebook(\'4504\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "They are synthesized from the cholesterol.",
				false,
				"No. They are synthesized from the amino acid tyrosine.");
			
				p.addAnswer(2, "Epinephrine and norepinephrine are catecholamines.",
				true,
				"Correct. This is the one correct statement.");
			
				p.addAnswer(3, "They decrease the rate of glycogen breakdown in the liver and skeletal muscles.",
				false,
				"No. They increase the rate of glycogen breakdown in the liver and skeletal muscles.");
			
				p.addAnswer(4, "They decrease the rate of oxygen delivery to body cells.",
				false,
				"No. They increase the rate of oxygen delivery to body cells.");
			
				p.addAnswer(5, "They are released in response to FSH.",
				false,
				"No. ACTH stimulates the adrenal cortex to synthesize and secrete corticosteroids.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336642;


		
		

		
			
			p.question = "Which one of the following statements about the adrenal medulla is correct? (<script type=\"text/javascript\">ebook(\'4504\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "The hormones it produces cause the kidney to reabsorb sodium and water.",
				false,
				"No. Hormones such as aldosterone, produced by the adrenal cortex, have this effect on the kidneys.");
			
				p.addAnswer(2, "It produces steroid hormones.",
				false,
				"No. The adrenal medulla produces amine hormones.");
			
				p.addAnswer(3, "It cannot function in hormone production without releasing hormone (RH) from the hypothalamus.",
				false,
				"No. The adrenal cortex is activated when RH from the hypothalamus stimulates the anterior pituitary to send ACTH through blood vessels.");
			
				p.addAnswer(4, "The gland is stimulated by nerve signals carried from the brain.",
				true,
				"Correct. This provides a rapid, short-term response to stress.");
			
				p.addAnswer(5, "It secretes hormones that suppress inflammation and control pain.",
				false,
				"No. This is a long-term stress response provided by the adrenal cortex.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336643;


		
		

		
			
			p.question = "Which one of the following endocrine glands releases steroid hormones? (<script type=\"text/javascript\">ebook(\'4504\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "anterior pituitary",
				false,
				"No. The anterior pituitary makes only protein-based hormones.");
			
				p.addAnswer(2, "posterior pituitary",
				false,
				"No. The posterior lobe of the pituitary releases peptide hormones channeled into it by the hypothalamus.");
			
				p.addAnswer(3, "adrenal medulla",
				false,
				"No. The adrenal medulla makes the amine hormones epinephrine and norepinephrine.");
			
				p.addAnswer(4, "adrenal cortex",
				true,
				"Correct. The adrenal cortex, in addition to the testes and ovaries, secretes steroid hormones.");
			
				p.addAnswer(5, "pineal gland",
				false,
				"No. The pineal gland secretes the amine hormone melatonin.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336644;


		
		

		
			
			p.question = "Which one of the following is a problem with the long-term use of glucocorticoids, such as cortisone, to treat inflammation? (<script type=\"text/javascript\">ebook(\'4504\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "long-term elevated blood pressure",
				false,
				"No. This would be the effect of mineralocorticoids.");
			
				p.addAnswer(2, "suppression of the immune system",
				true,
				"Correct. Abnormally high levels of glucocorticoids administered as medication suppress certain components of the body\'s immune system.");
			
				p.addAnswer(3, "low blood glucose levels",
				false,
				"No. Glucocorticoids promote the synthesis of glucose from non-carbohydrate sources.");
			
				p.addAnswer(4, "abnormal blood clotting, which leads to excessive bruising",
				false,
				"No. This would not be a problem associated with glucocorticoid use.");
			
				p.addAnswer(5, "sleeplessness",
				false,
				"No. This could be the result of low melatonin levels.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336645;


		
		

		
			
			p.question = "Anabolic steroids, sometimes taken illegally by athletes and bodybuilders, are synthetic substitutes for natural _____ produced in the _____. (<script type=\"text/javascript\">ebook(\'4504\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "testosterone; anterior pituitary",
				false,
				"No. Testosterone is a type of androgen, but it is not produced in the anterior pituitary.");
			
				p.addAnswer(2, "FSH and LH; posterior pituitary",
				false,
				"No. These hormones are not related to muscle development.");
			
				p.addAnswer(3, "progestin; testes",
				false,
				"No. Progestins are a group of hormones involved in preparing and maintaining the uterus.");
			
				p.addAnswer(4, "androgens; gonads",
				true,
				"Correct. Anabolic steroids are synthetic androgens that are similar to hormones produced by the adrenal cortex and gonads. Taking these steroids interferes with natural negative feedback mechanisms.");
			
				p.addAnswer(5, "estrogens; anterior pituitary",
				false,
				"No. The anterior pituitary does not secrete estrogen.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336646;


		
		

		
			
			p.question = "In the winter, the _____ of vertebrates is apt to produce _____ than in summer months. (<script type=\"text/javascript\">ebook(\'4504\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "hypothalamus; less prolactin",
				false,
				"No. Although it is involved with its secretion, the hypothalamus does not produce prolactin.");
			
				p.addAnswer(2, "pineal gland; more melatonin",
				true,
				"Correct. Melatonin is secreted by the pineal gland in response to lack of daylight. Since there is less daylight in winter months, the pineal gland would release more melatonin.");
			
				p.addAnswer(3, "hypothalamus; less melatonin",
				false,
				"No. The hypothalamus is not involved with the production of melatonin.");
			
				p.addAnswer(4, "pineal gland; less growth hormone",
				false,
				"No. The pineal gland is the correct gland, but it is not involved in the production of growth hormone.");
			
				p.addAnswer(5, "adrenal cortex; more ADH",
				false,
				"No. ADH is produced in the hypothalamus and released by the posterior pituitary.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

