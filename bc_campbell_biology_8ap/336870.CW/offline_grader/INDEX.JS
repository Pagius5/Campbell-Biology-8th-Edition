

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "50: Sensory and Motor Mechanisms > Practice Test";
	ak.quiz_loc_with_commas = "50: Sensory and Motor Mechanisms, Practice Test";
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
		
		p.id = 336871;


		
		

		
			
			p.question = "Although we often assume that our sense organs are reporting a complete picture of the world to our brains, in fact the world is full of stimuli (very low frequency sound, cosmic rays, electrical fields, etc.) that our sense organs cannot detect. This situation is best characterized as a failure of our sense organs to ______ these stimuli. (<script type=\"text/javascript\">ebook(\'5001\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "translate",
				false,
				"No. This is not the correct term.");
			
				p.addAnswer(2, "intercept",
				false,
				"No. This is not the correct term.");
			
				p.addAnswer(3, "transduce",
				true,
				"Correct. The detection of a stimulus involves a conversion of the stimulus energy to a change in the membrane potential of the receptor cell, a process called sensory transduction.");
			
				p.addAnswer(4, "integrate",
				false,
				"No. Integration occurs in the nervous system.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336872;


		
		

		
			
			p.question = "You look all over for your glasses and then find them pushed back onto your forehead. This error could be attributed to ______. (<script type=\"text/javascript\">ebook(\'5001\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "perception",
				false,
				"No. Perception occurs when the brain becomes aware of a sensation and interprets it.");
			
				p.addAnswer(2, "transduction",
				false,
				"No. Transduction occurs when the energy of a stimulus causes a change in the membrane potential of a receptor cell.");
			
				p.addAnswer(3, "sensation",
				false,
				"No. Sensations are the action potentials that reach the brain via sensory neurons.");
			
				p.addAnswer(4, "sensory adaptation",
				true,
				"Correct. Sensory adaptation is the loss of the conscious perception of a stimulus; it explains how you can study in a noisy room or tolerate your roommate\'s poor personal hygiene habits.");
			
				p.addAnswer(5, "accommodation",
				false,
				"No. Accommodation is a visual process referring to changes in the shape of the lens.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336873;


		
		

		
			
			p.question = "A fish detects vibrations in the water around it by means of its lateral lines, rows of sensory receptors along each side of the body. Based on what you know about sensory receptors, the lateral line receptors are probably which of the following? (<script type=\"text/javascript\">ebook(\'5001\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "mechanoreceptors",
				true,
				"Correct. The stretch on the membrane of the mechanoreceptor alters the membrane potential and can result in an action potential.");
			
				p.addAnswer(2, "electromagnetic receptors",
				false,
				"No. These receptors respond to light, electricity, and magnetism.");
			
				p.addAnswer(3, "chemoreceptors",
				false,
				"No. Chemoreceptors are sensitive to variations in the chemical composition of their environment.");
			
				p.addAnswer(4, "muscle spindles",
				false,
				"No. These receptors respond to stretch in muscles.");
			
				p.addAnswer(5, "nociceptors",
				false,
				"No. These receptors respond to pain.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336874;


		
		

		
			
			p.question = "If we stand up too quickly, blood pressure and, hence, blood flow to the brain will decrease. Which receptors will respond to this decrease in blood pressure? (<script type=\"text/javascript\">ebook(\'5001\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "chemoreceptors",
				false,
				"No. Chemoreceptors are stimulated by variations in the immediate chemical environment; examples include receptors for glucose, calcium, and pH.");
			
				p.addAnswer(2, "thermoreceptors",
				false,
				"No. Thermoreceptors are stimulated by changes in temperature. Thermoreceptors are located in the skin and hypothalamus.");
			
				p.addAnswer(3, "photoreceptors",
				false,
				"No. Photoreceptors, a type of electromagnetic receptor, are stimulated by visible light.");
			
				p.addAnswer(4, "mechanoreceptors",
				true,
				"Correct. The special receptors that monitor blood pressure belong to the mechanoreceptors group. The receptors that sense this blood pressure drop are located in the carotid arteries.");
			
				p.addAnswer(5, "electromagnetic receptors",
				false,
				"No. Electromagnetic receptors are stimulated by electromagnetic radiation, such as visible light, electricity, and magnetism.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336875;


		
		

		
			
			p.question = "Which one of the following classes of sensory receptors consists of neurons with naked dendrites? (<script type=\"text/javascript\">ebook(\'5001\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "tendon stretch receptor",
				false,
				"No. Naked dendrites are not mechanoreceptors.");
			
				p.addAnswer(2, "deep-pressure receptor",
				false,
				"No. Naked dendrites are not mechanoreceptors.");
			
				p.addAnswer(3, "hair cell in cochlea",
				false,
				"No. Naked dendrites are not mechanoreceptors.");
			
				p.addAnswer(4, "pain receptor",
				true,
				"Correct. Pain receptors in humans are a class of naked dendrites, called nociceptors, in the epidermis of the skin.");
			
				p.addAnswer(5, "chemical receptor",
				false,
				"No. Naked dendrites are not chemoreceptors.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336876;


		
		

		
			
			p.question = "The round window is found ______. (<script type=\"text/javascript\">ebook(\'5002\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "in the pain receptors",
				false,
				"No. The receptors of the organ of Corti do not respond to pain.");
			
				p.addAnswer(2, "in the taste areas of the tongue",
				false,
				"No. The receptors of the organ of Corti do not respond to taste.");
			
				p.addAnswer(3, "in the cochlea",
				true,
				"Correct. A sound leaves the cochlea via the round window.");
			
				p.addAnswer(4, "in the semicircular canals",
				false,
				"No. The receptors of the organ of Corti do not play a role in the maintenance of equilibrium.");
			
				p.addAnswer(5, "surrounding the pupil of the eye",
				false,
				"No. The receptors of the organ of Corti do not play a role in vision.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336877;


		
		

		
			
			p.question = "Organs in the inner ear of mammals are the cochlea, semicircular canals, and vestibule. Match them to their functions. (<script type=\"text/javascript\">ebook(\'5002\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "cochlea, hearing<br>\nsemicircular canals, equilibrium<br>\nvestibule, equilibrium",
				true,
				"Correct. The cochlea is for hearing, and equilibrium is regulated by both the vestibule and semicircular canals.");
			
				p.addAnswer(2, "cochlea, hearing<br>\nsemicircular canals, hearing<br>\nvestibule, equilibrium",
				false,
				"No. The semicircular canals do not function in hearing.");
			
				p.addAnswer(3, "cochlea, balance<br>\nsemicircular canals, hearing<br>\nvestibule, hearing",
				false,
				"No. The cochlea does not function in balance.");
			
				p.addAnswer(4, "cochlea, hearing<br>\nsemicircular canals, equilibrium<br>\nvestibule, hearing",
				false,
				"No. The vestibule does not function in hearing.");
			
				p.addAnswer(5, "cochlea, balance<br>\nsemicircular canals, balance<br>\nvestibule, hearing",
				false,
				"No. The cochlea does not function in balance.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336878;


		
		

		
			
			p.question = "Sitting too close to the amplifiers at a concert may ________. (<script type=\"text/javascript\">ebook(\'5002\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "affect the alignment of the semicircular canals",
				false,
				"No. The alignment of the semicircular canals is stable.");
			
				p.addAnswer(2, "cause fluid leakage from the cochlea",
				false,
				"No. It is unlikely that loud noises would cause the cochlea to leak fluid.");
			
				p.addAnswer(3, "cause the hammer to damage the anvil and stirrup bones",
				false,
				"No. There is a better choice than this.");
			
				p.addAnswer(4, "cause permanent damage to the hair cells in the ears",
				true,
				"Correct. Volume is determined by the amplitude of a sound wave. The greater the amplitude of a sound, the more vigorous the vibrations of the fluid in the cochlea, the greater the bending of the hair cells, and the more action potentials are generated in the sensory neurons.");
			
				p.addAnswer(5, "cause the pinnae to curl",
				false,
				"No. The outermost portion of the ear will not curl.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336879;


		
		

		
			
			p.question = "The brain determines the loudness of a sound from the ______. (<script type=\"text/javascript\">ebook(\'5002\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "part of the organ of Corti stimulated by the sound",
				false,
				"No. The stimulation of different regions of the organ of Corti is perceived as variations in pitch.");
			
				p.addAnswer(2, "rate of nerve impulses received",
				true,
				"Correct. The brain determines the loudness of a sound from the rate of nerve impulses received.");
			
				p.addAnswer(3, "range of air pressure changes in the middle ear",
				false,
				"No. The middle ear contains the auditory ossicles that span the cavity connecting the tympanic membrane to the oval window.");
			
				p.addAnswer(4, "part of the brain receiving nerve impulses from the ear",
				false,
				"No. If this were true, there would need to be a routing system at the beginning of the neural pathway.");
			
				p.addAnswer(5, "intensity of the nerve impulses received",
				false,
				"No. Once a threshold is reached, each neuron produces an action potential characteristic for that neuron. Each action potential is identical.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336880;


		
		

		
			
			p.question = "If the basilar membranes in the ears were equal in width and flexibility along their length, how would this affect a person\'s sense of hearing? (<script type=\"text/javascript\">ebook(\'5002\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "The person would be totally deaf.",
				false,
				"No. The person could detect sounds and distinguish those that differed in loudness.");
			
				p.addAnswer(2, "The person could not distinguish different pitches.",
				true,
				"Correct. Sections of the basilar membrane would not be differentially sensitive to vibration frequency, so information about pitch could not be transmitted to the brain.");
			
				p.addAnswer(3, "The person could not distinguish loud sounds from quiet sounds.",
				false,
				"No. The loudness of a sound determines the degree to which the hair cells bend, which is unaffected by variations in the width or flexibility of the basilar membrane.");
			
				p.addAnswer(4, "The person would hear normally.",
				false,
				"No. The person would be unable to detect differences in pitch.");
			
				p.addAnswer(5, "The person could distinguish a greater range of pitches than a normal human.",
				false,
				"No. The person would be unable to detect differences in pitch.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336881;


		
		

		
			
			p.question = "A person born without otoliths in the ears would be ______. (<script type=\"text/javascript\">ebook(\'5002\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "totally deaf",
				false,
				"No. A lack of otoliths would affect the sense of balance, not hearing.");
			
				p.addAnswer(2, "unable to determine the rate of motion of the head",
				false,
				"No. The semicircular canals, which monitor the rate of motion of the head, don\'t depend on otoliths for proper functioning.");
			
				p.addAnswer(3, "unable to determine the position of the head with respect to gravity",
				true,
				"Correct. Otoliths determine the direction that hair cells bend in the utricle and saccule. This allows the brain to determine the position of the head with respect to gravity.");
			
				p.addAnswer(4, "hearing-impaired, but not totally deaf",
				false,
				"No. A lack of otoliths would affect the sense of balance, not hearing.");
			
				p.addAnswer(5, "unable to send action potentials from the ears to the brain",
				false,
				"No. Action potentials are still sent to the brain from sensory neurons at the bases of the semicircular canals and from the sensory neurons in the cochlea.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336882;


		
		

		
			
			p.question = "Taste and smell are two distinct senses in animals living in terrestrial environments. Animals living in aquatic environments, however, have no distinction between taste and smell. Which response might explain this difference? (<script type=\"text/javascript\">ebook(\'5003\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Animals living in aquatic environments do not have noses.",
				false,
				"No. Dolphins live in an aquatic environment, and they have a nose.");
			
				p.addAnswer(2, "Aquatic animals do not rely on chemoreceptors to respond to their environment.",
				false,
				"No. Chemoreceptors can be very important when aquatic animals search for food.");
			
				p.addAnswer(3, "The equivalent of air in the terrestrial environment does not exist in an aqueous environment.",
				true,
				"Correct. For an animal to smell something, the molecules must travel through the air and then interact with the olfactory receptors.");
			
				p.addAnswer(4, "Aquatic animals rarely remain in one place long enough to be able to smell something.",
				false,
				"No. Even animals that remain stationary must be able to sense chemical changes in the environment.");
			
				p.addAnswer(5, "Aquatic animals cannot smell because they lack chemoreceptors on the anterior portion of their body.",
				false,
				"No. Please think carefully about what is uniquely different between the two senses.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336883;


		
		

		
			
			p.question = "Which one of the following statements is correct? (<script type=\"text/javascript\">ebook(\'5003\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "The receptors in human taste buds are responsible for recognizing five types of tastants.",
				true,
				"Correct.  The five types are sweet, salty, bitter, sour, and umami (savory).");
			
				p.addAnswer(2, "There is no distinction between taste and smell in terrestrial animals.",
				false,
				"No. There is no distinction between taste and smell in aquatic animals");
			
				p.addAnswer(3, "Most papillae on the tongue are associated with nipple-shaped projections called taste buds.",
				false,
				"No. Most taste buds on the tongue are associated with nipple-shaped projections called papillae.");
			
				p.addAnswer(4, "Only one region of the tongue with taste buds can detect a particular type of taste.",
				false,
				"No. Any region of the tongue with taste buds can detect any of the types of taste.");
			
				p.addAnswer(5, "In gustation, the sensory cells are neurons.",
				false,
				"No. In olfaction, unlike gustation, the sensory cells are neurons.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336884;


		
		

		
			
			p.question = "Compound eyes are advantageous for small prey species to detect a potential predator because ______. (<script type=\"text/javascript\">ebook(\'5004\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "each ommatidium contains many photoreceptor cells",
				false,
				"No. Ommatidia contain very few photoreceptor cells.");
			
				p.addAnswer(2, "all animals with compound eyes can detect ultraviolet radiation",
				false,
				"No. Only some animals with compound eyes, such as honeybees, can detect ultraviolet radiation. In any case, the ability to detect ultraviolet radiation is irrelevant to predator avoidance.");
			
				p.addAnswer(3, "they permit sensitive motion detection",
				true,
				"Correct. Each ommatidium detects light from a very small part of the total field of view. Even a slight movement of a predator\'s body will cause sensory transduction in different ommatidia, which the brain will interpret as motion.");
			
				p.addAnswer(4, "with compound eyes, the brain forms many separate visual images",
				false,
				"No. The brain integrates the information from all of the ommatidia to form a single visual image.");
			
				p.addAnswer(5, "light is not necessary for compound eyes to produce action potentials",
				false,
				"No. Light is required for the photoreceptors in compound eyes to produce receptor potentials and cause sensory neurons to generate action potentials.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336885;


		
		

		
			
			p.question = "Instead of shouting, \"Don\'t fire until you see the whites of their eyes!\" at Bunker Hill, Col. William Prescott could have said, \"Don\'t fire until you see their ______!\" (<script type=\"text/javascript\">ebook(\'5004\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "retinas",
				false,
				"No. The retina, which contains photoreceptors, is not the white of the eye.");
			
				p.addAnswer(2, "corneas",
				false,
				"No. The cornea is transparent.");
			
				p.addAnswer(3, "foveas",
				false,
				"No. The fovea is the region of the retina where cones are most highly concentrated.");
			
				p.addAnswer(4, "scleras",
				true,
				"Correct. The globe of the vertebrate eye consists of a tough white outer layer of connective tissue called the sclera.");
			
				p.addAnswer(5, "irises",
				false,
				"No. The iris is the pigmented region of the eye that regulates the diameter of the pupil.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336886;


		
		

		
			
			p.question = "Which of the following correctly traces the path of light into your eyes? (<script type=\"text/javascript\">ebook(\'5004\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "lens, cornea, pupil, retina",
				false,
				"No. The path of light begins at the cornea.");
			
				p.addAnswer(2, "cornea, pupil, lens, retina",
				true,
				"Correct. This is the basic path of light.");
			
				p.addAnswer(3, "cornea, lens, pupil, retina",
				false,
				"No. Light must pass through the pupil before reaching the lens.");
			
				p.addAnswer(4, "lens, pupil, cornea, retina",
				false,
				"No. The path of light begins at the cornea.");
			
				p.addAnswer(5, "pupil, cornea, lens, retina",
				false,
				"No. The path of light begins at the cornea.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336887;


		
		

		
			
			p.question = "The fluid in the anterior chamber of the eye is the _______. (<script type=\"text/javascript\">ebook(\'5004\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "aqueous humor",
				true,
				"Correct. The lens and the ciliary body divide the eye into two chambers, an anterior chamber filled with aqueous humor and a posterior chamber filled with vitreous humor.");
			
				p.addAnswer(2, "ciliary humor",
				false,
				"No. There is no such thing.");
			
				p.addAnswer(3, "vitreous humor",
				false,
				"No. The vitreous humor is the fluid in the posterior chamber of the eye.");
			
				p.addAnswer(4, "pupilary humor",
				false,
				"No. There is no such thing.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336888;


		
		

		
			
			p.question = "Correct focusing of the image on the retina in humans is achieved by changing the ______. (<script type=\"text/javascript\">ebook(\'5004\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "distance between the lens of the eye and the retina",
				false,
				"No. This is the focusing mechanism used by fish.");
			
				p.addAnswer(2, "shape of the lens of the eye",
				true,
				"Correct. Humans change focus by changing the shape of the lens, a change called accommodation.");
			
				p.addAnswer(3, "size of the retina",
				false,
				"No. Although the retina contains the photoreceptors, focusing is not affected by changing its size.");
			
				p.addAnswer(4, "shape of the eyeball",
				false,
				"No. Although the shape of the eyeball affects whether an image is focused in front of, on, or behind the retina, changing the shape of the eyeball is not involved in the normal focusing process called accommodation.");
			
				p.addAnswer(5, "curvature of the cornea",
				false,
				"No. Although the curvature of the cornea affects vision, changing the curvature of the cornea is not involved in the normal focusing process called accommodation.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336889;


		
		

		
			
			p.question = "When you move an object from 15 inches in front of your eyes to 10 inches in front of your eyes, the lenses ______. (<script type=\"text/javascript\">ebook(\'5004\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "decrease in diameter",
				false,
				"No. The lenses increase in diameter.");
			
				p.addAnswer(2, "move forward",
				false,
				"No. If the eye were to move forward, it would move the focal point off the retina.");
			
				p.addAnswer(3, "become more rounded",
				true,
				"Correct. Greater curvature is needed to view near objects. Increasing the diameter of the lens is the accommodation for near vision.");
			
				p.addAnswer(4, "become flatter",
				false,
				"No. A reduction in curvature is the accommodation for viewing distant objects.");
			
				p.addAnswer(5, "move backward",
				false,
				"No. If the eye were to move backward, it would move the focal point off the retina.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336890;


		
		

		
			
			p.question = "Incapacitating the muscles of a mammalian eye would result in an inability ______. (<script type=\"text/javascript\">ebook(\'5004\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "to regulate the amount of light entering the eye and an inability of the photoreceptor cells to transduce light energy",
				false,
				"No. Muscles are required for the regulation of light entering the eye, but not for sensory transduction.");
			
				p.addAnswer(2, "to expel aqueous humor from the eye, resulting in glaucoma",
				false,
				"No. Aqueous humor leaves the eye through ducts. Blockage of the ducts can cause glaucoma (increased pressure inside the eye), but muscles are not involved.");
			
				p.addAnswer(3, "of the photoreceptor cells to transduce light energy",
				false,
				"No. Muscles are not required for sensory transduction.");
			
				p.addAnswer(4, "to regulate the amount of light entering the eye and an inability to focus light",
				true,
				"Correct. Muscles in the iris permit regulation of the amount of light entering the eye, and muscles attached to the lens allow the focusing of light.");
			
				p.addAnswer(5, "to focus light and an inability of the photoreceptor cells to transduce light energy",
				false,
				"No. Muscles are required for the focusing of light, but not for sensory transduction.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336891;


		
		

		
			
			p.question = "A baby is born with the normal number and distribution of rods, but no cones. We would expect that the baby\'s vision would be _______. (<script type=\"text/javascript\">ebook(\'5004\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "color-blind, easily blinded by bright light, and capable only of coarse resolving power",
				true,
				"Correct. Rods are more sensitive to light than cones but do not distinguish colors. They are found in greatest density at the peripheral regions of the retina and are completely absent from the fovea.");
			
				p.addAnswer(2, "normal on the left side of the visual field but blurred and gray on the right side",
				false,
				"No. Vision should not be affected in this manner.");
			
				p.addAnswer(3, "normal on the right side of the visual field but totally blind on the left side",
				false,
				"No. There should be vision on both sides of the visual field.");
			
				p.addAnswer(4, "absent; the baby would be totally blind",
				false,
				"No. Consider the conditions under which rods permit vision.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336892;


		
		

		
			
			p.question = "While driving your car at night, you notice that you have poor peripheral vision. You might suspect this problem to be associated with which part(s) of the eye? (<script type=\"text/javascript\">ebook(\'5004\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "fovea",
				false,
				"No. The fovea is the center of the visual field, and cones are concentrated here.");
			
				p.addAnswer(2, "photopsin",
				false,
				"No. Photopsin is the visual pigment found in cones. Cones respond to color.");
			
				p.addAnswer(3, "iris",
				false,
				"No. The iris regulates the amount of light that enters the eye.");
			
				p.addAnswer(4, "conjunctiva",
				false,
				"No. This is the membrane that covers the surface of the sclera.");
			
				p.addAnswer(5, "none of the above",
				true,
				"Correct. The rods are involved with peripheral vision. The photopigment in rods is rhodopsin.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336893;


		
		

		
			
			p.question = "The greatest concentration of cone receptors is found at the ______. (<script type=\"text/javascript\">ebook(\'5004\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "conal point",
				false,
				"No. The greatest concentration of cone receptors is found at the fovea.");
			
				p.addAnswer(2, "fovea",
				true,
				"Correct. Cones can distinguish colors in daylight, and in humans they are densest at the fovea, the center of the visual field.");
			
				p.addAnswer(3, "sclera",
				false,
				"No. The sclera, a part of the outermost layer of the eye, functions to maintain the shape of the eyeball.");
			
				p.addAnswer(4, "periphery of the retina",
				false,
				"No. Rods are most highly concentrated about the periphery of the retina.");
			
				p.addAnswer(5, "optic chiasm",
				false,
				"No. The optic chiasm is where 50% of the fibers of each optic nerve cross to the opposite side of the brain.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336894;


		
		

		
			
			p.question = "The body uses the vitamin A precursors from some foods to make a substance called retinal, which ______. (<script type=\"text/javascript\">ebook(\'5004\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "is a visual pigment that absorbs light",
				true,
				"Correct. Absorbing light causes the retina to change shape and dissociate from opsin, which activates a transduction pathway.");
			
				p.addAnswer(2, "provides energy for the function of rods and cones",
				false,
				"No. Rods and cones transduce light energy when stimulated and use ATP to provide for their metabolism.");
			
				p.addAnswer(3, "colors the iris of the eye",
				false,
				"No. Pigments such as melanin are responsible for the various colors of the iris.");
			
				p.addAnswer(4, "stimulates the neurons in the retina to form branches and connections",
				false,
				"No. Retinal combines with other molecules called opsins and is found only in the outer segment of photoreceptor cells.");
			
				p.addAnswer(5, "keeps the lens clear and transparent",
				false,
				"No. Retinal is found within the retina.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336895;


		
		

		
			
			p.question = "Which one of the following occurs when you move from a bright area into a darkened room? (<script type=\"text/javascript\">ebook(\'5004\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Rods and cones hyperpolarize.",
				false,
				"No. At low light levels rods and cones will depolarize.");
			
				p.addAnswer(2, "The iris dilates, increasing the size of the pupil.",
				true,
				"Correct. By changing size, the iris regulates the amount of light entering the pupil.");
			
				p.addAnswer(3, "The size of the pupil decreases.",
				false,
				"No. Decreasing the size of the pupil would decrease the amount of light that enters the eye.");
			
				p.addAnswer(4, "The lens focuses light off the cones and onto the rods.",
				false,
				"No. Actually in a normal eye, the accommodation process focuses light on the fovea, where cones are the most highly concentrated, regardless of light levels.");
			
				p.addAnswer(5, "The lens becomes more spherical.",
				false,
				"No. The process of changing lens thickness, accommodation, to focus on an object is a light-independent event. It is related to how close the object is to the eye.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336896;


		
		

		
			
			p.question = "A human born with nonfunctional rhodopsin would ______. (<script type=\"text/javascript\">ebook(\'5004\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "lack color vision",
				false,
				"No. Rhodopsin, found in rods, is not responsible for color vision.");
			
				p.addAnswer(2, "be unable to see in dim light",
				true,
				"Correct. Rhodopsin, contained in rods, absorbs dim light.");
			
				p.addAnswer(3, "be unable to see in bright light",
				false,
				"No. Rods, which contain rhodopsin, are not responsible for vision in bright light.");
			
				p.addAnswer(4, "be totally blind",
				false,
				"No. The rods, which contain rhodopsin, would not work, but the cones would still transduce light, permitting vision in all but dim light.");
			
				p.addAnswer(5, "be unable to obtain a sharp image by looking straight at an object",
				false,
				"No. Because rods, which contain rhodopsin, are not found at the fovea anyway, forward vision would be normal.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336897;


		
		

		
			
			p.question = "Difficulty in distinguishing red from green is most likely due to a defect in which cells? (<script type=\"text/javascript\">ebook(\'5004\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "rod cells",
				false,
				"No. Rod cells do not allow for color vision.");
			
				p.addAnswer(2, "cone cells",
				true,
				"Correct. Cones can distinguish colors in daylight and, in humans, are densest at the fovea, the center of the visual field.");
			
				p.addAnswer(3, "lens cells",
				false,
				"No. The lens, which is composed of layers of protein, plays a role in focusing light rays on the retina.");
			
				p.addAnswer(4, "cornea cells",
				false,
				"No. The cornea, a component of the outer layer of the eyeball, plays a role in focusing light rays on the retina.");
			
				p.addAnswer(5, "iris cells",
				false,
				"No. The iris is the pigmented portion of the eye that regulates the size of the pupil.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336898;


		
		

		
			
			p.question = "Which choice below is the correct order of the neural pathways that light travels after hitting the retina? (<script type=\"text/javascript\">ebook(\'5004\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "photoreceptors, bipolar cells, ganglion cells, optic nerve",
				true,
				"Correct. Light triggers photoreceptors, which synapse with bipolar cells, which synapse with ganglion cells. Then the impulse travels through the optic nerve to the thalamus and cerebral cortex.");
			
				p.addAnswer(2, "horizontal cells, ganglion cells, bipolar cells, photoreceptors",
				false,
				"No. Photoreceptors synapse with horizontal cells and bipolar cells.");
			
				p.addAnswer(3, "photoreceptors, ganglion cells, horizontal cells, amacrine cells",
				false,
				"No. Photoreceptors do not synapse with ganglion cells.");
			
				p.addAnswer(4, "photoreceptors, horizontal cells, ganglion cells, bipolar cells",
				false,
				"No. In this sequence, bipolar cells precede ganglion cells.");
			
				p.addAnswer(5, "bipolar cells, photoreceptors, ganglion cells",
				false,
				"No. Photoreceptors do not synapse with ganglion cells.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336899;


		
		

		
			
			p.question = "In the vertebrate eye, one kind of sensory processing occurs when light falls on a single photoreceptor cell and excites that cell and nearby receptors, whereas more distant photoreceptor cells are inhibited from transmitting impulses. This phenomenon is called ______. (<script type=\"text/javascript\">ebook(\'5004\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "a reflex circuit",
				false,
				"No. When a rod or cone stimulates a horizontal cell, the horizontal cell stimulates nearby receptors but inhibits more-distant, unilluminated receptors and bipolar cells, making the light spot appear lighter and the dark surroundings even darker. This is called <i>lateral inhibition</i>.");
			
				p.addAnswer(2, "accommodation",
				false,
				"No. Accommodation is the process that plays a role in focusing light on the retina.");
			
				p.addAnswer(3, "lateral inhibition",
				true,
				"Correct. When a rod or cone stimulates a horizontal cell, the horizontal cell stimulates nearby receptors but inhibits more-distant, unilluminated receptors and bipolar cells, making the light spot appear lighter and the dark surroundings even darker. This is called <i>lateral inhibition</i>.");
			
				p.addAnswer(4, "neuronal habituation",
				false,
				"No. When a rod or cone stimulates a horizontal cell, the horizontal cell stimulates nearby receptors but inhibits more-distant, unilluminated receptors and bipolar cells, making the light spot appear lighter and the dark surroundings even darker. This is called <i>lateral inhibition</i>.");
			
				p.addAnswer(5, "visual sensitization",
				false,
				"No. When a rod or cone stimulates a horizontal cell, the horizontal cell stimulates nearby receptors but inhibits more-distant, unilluminated receptors and bipolar cells, making the light spot appear lighter and the dark surroundings even darker. This is called <i>lateral inhibition</i>.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336900;


		
		

		
			
			p.question = "Which statement about muscle contraction is correct? (<script type=\"text/javascript\">ebook(\'5005\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Thick filaments stretch while thin filaments stay the same length.",
				false,
				"No. Neither the thin filaments nor the thick filaments change in length when the sarcomere shortens.");
			
				p.addAnswer(2, "Thin filaments stretch while thick filaments stay the same length.",
				false,
				"No. Neither the thin filaments nor the thick filaments change in length when the sarcomere shortens.");
			
				p.addAnswer(3, "A typical muscle fiber at rest contains enough ATP for millions of contractions.",
				false,
				"No. A typical muscle fiber at rest contains only enough ATP for a few contractions.");
			
				p.addAnswer(4, "Thin filaments contain actin and thick filaments contain myosin.",
				true,
				"Correct.");
			
				p.addAnswer(5, "Iron and fats bound to actin play a critical role in muscle cell contraction and relaxation.",
				false,
				"No. Calcium ions and proteins bound to actin play a critical role in muscle cell contraction and relaxation.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336901;


		
		

		
			
			p.question = "What do all muscle tissues have in common? (<script type=\"text/javascript\">ebook(\'5005\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "The individual cells are joined by intercalated discs.",
				false,
				"No. Intercalated discs are found only between the cells of cardiac muscle.");
			
				p.addAnswer(2, "The basic contractile unit is the sarcomere.",
				false,
				"No. Sarcomeres are found in striated muscle and not in smooth muscle.");
			
				p.addAnswer(3, "Calcium must enter the cytosol before contraction can occur.",
				true,
				"Correct. All three types of muscles require calcium for contraction.");
			
				p.addAnswer(4, "They have transverse tubules along which the action potential travels before it stimulates the release of calcium from the endoplasmic reticulum.",
				false,
				"No. There are no transverse tubules in smooth muscle.");
			
				p.addAnswer(5, "The binding site for calcium is located on the troponin complex.",
				false,
				"No. Smooth muscle lacks troponin.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336902;


		
		

		
			
			p.question = "What type of muscle is striated with intercalated disks? (<script type=\"text/javascript\">ebook(\'5005\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "cardiac muscle",
				true,
				"Correct.");
			
				p.addAnswer(2, "skeletal muscle",
				false,
				"No. Skeletal muscle does not have intercalated disks.");
			
				p.addAnswer(3, "smooth muscle",
				false,
				"No. Smooth muscle is not striated and does not have intercalated disks.");
			
				p.addAnswer(4, "cardiac and skeletal muscle",
				false,
				"No. Skeletal muscle does not have intercalated disks.");
			
				p.addAnswer(5, "smooth and skeletal muscle",
				false,
				"No. Skeletal muscle does not have intercalated disks. Smooth muscle is not striated and does not have intercalated disks.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336903;


		
		

		
			
			p.question = "Why is having a hydrostatic skeleton, rather than an internal skeleton, advantageous to an earthworm? (<script type=\"text/javascript\">ebook(\'5006\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Having an internal skeleton would not allow the fine movements an earthworm uses when it moves.",
				false,
				"No. A snake such as a sidewinder can move very gracefully over soft terrain, and it has an internal skeleton.");
			
				p.addAnswer(2, "Having an internal skeleton would prevent an earthworm from being able to burrow underground tunnels.",
				false,
				"Many vertebrates live underground. Some, like the mole, can dig very extensive networks of tunnels.");
			
				p.addAnswer(3, "Having a hydrostatic skeleton allows the earthworm to use peristaltic motion to move over the substrate.",
				true,
				"Correct. The rhythmic wave motion associated with peristalsis, which the earthworm uses to move over the ground, would not be possible if the animal had a rigid internal skeleton.");
			
				p.addAnswer(4, "Having a hydrostatic skeleton means that having muscles is not a requirement for movement.",
				false,
				"No. A hydrostatic skeleton is actually a fluid-filled cavity or compartment that responds to muscle contractions. Because fluids cannot be compressed, the earthworm will elongate when circular muscles in individual segments contract.");
			
				p.addAnswer(5, "Actually, earthworms do not have a skeleton.",
				false,
				"No. You might want to review Concept 50.5.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336904;


		
		

		
			
			p.question = "Locomotion requires that an animal expend energy to overcome ______. (<script type=\"text/javascript\">ebook(\'5006\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "friction and gravity",
				true,
				"Correct.  Animals must expend energy to overcome both these forces.");
			
				p.addAnswer(2, "friction",
				false,
				"No. This is true, but animals must also expend energy to overcome gravity.");
			
				p.addAnswer(3, "temperature",
				false,
				"No. Temperature is not a major factor affecting locomotion.");
			
				p.addAnswer(4, "gravity",
				false,
				"No. This is true, but animals must also expend energy to overcome friction.");
			
				p.addAnswer(5, "temperature and pressure",
				false,
				"No. Temperature and pressure are not major factors affecting locomotion.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336905;


		
		

		
			
			p.question = "When comparing the different styles and adaptations of each major type of locomotion, the most energy-efficient mode of locomotion is ______. (<script type=\"text/javascript\">ebook(\'5006\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "swimming",
				true,
				"Correct.  Swimming animals expend little energy to resist gravity, making this form of locomotion very energy-efficient.");
			
				p.addAnswer(2, "flying",
				false,
				"No. Flying animals use more energy than swimming or running animals with the same body mass.");
			
				p.addAnswer(3, "running",
				false,
				"No. Running animals generally expend more energy per meter traveled than equivalently sized animals specialized for swimming.");
			
				p.addAnswer(4, "flying or running",
				false,
				"No. Flying animals use more energy than swimming or running animals with the same body mass.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

