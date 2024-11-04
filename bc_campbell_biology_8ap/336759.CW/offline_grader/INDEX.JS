

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "48: Nerves, Synapses, and Signaling > Activities Quiz";
	ak.quiz_loc_with_commas = "48: Nerves, Synapses, and Signaling, Activities Quiz";
	ak.quiz_title = "Activities Quiz";

	
		ak.help_url = "../../placeholders/help_placeholder.html";
	
	ak.essay_total = 0;
	ak.pair_problem_total = 0;
	ak.pair_total = 0;
	ak.problem_total = 15;
	ak.non_essay_total = 15;
	ak.scored_item_total = 15;

	
	
	


	
	ak.copyright_date = "2008";
	ak.brandname = "Pearson Benjamin Cummings";
	ak.legal = "../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.pearsoned.com%2Flegal%2Findex.htm";


	// Loop over all problems
	
	
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336760;


		
		

		
			
			p.question = "A neuron\'s nucleus is located in its _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?48&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Neuron Structure</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "cell body",
				true,
				"The cell body is the region of a neuron where the nucleus is found.");
			
				p.addAnswer(2, "axon",
				false,
				"A neuron\'s nucleus is not found in its axon.");
			
				p.addAnswer(3, "myelin sheath",
				false,
				"A myelin sheath surrounds certain axons; it is not a component of a neuron.");
			
				p.addAnswer(4, "dendrite",
				false,
				"A neuron\'s nucleus is not found in any of its dendrites.");
			
				p.addAnswer(5, "synaptic terminals",
				false,
				"Synaptic terminals store molecules of neurotransmitter; they do not house a neuron\'s nucleus.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336761;


		
		

		
			
			p.question = "A nerve impulse moves toward a neuron\'s cell body along _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?48&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Neuron Structure</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "dendrites",
				true,
				"Dendrites conduct an impulse from a synapse toward the cell body.");
			
				p.addAnswer(2, "synaptic terminals",
				false,
				"Synaptic terminals contain neurotransmitter molecules that relay the nerve impulse.");
			
				p.addAnswer(3, "oligodendrocytes",
				false,
				"Oligodendrocytes, also known as Schwann cells, produce the myelin sheath.");
			
				p.addAnswer(4, "axons",
				false,
				"Axons conduct a nerve impulse away from the cell body.");
			
				p.addAnswer(5, "nodes of Ranvier",
				false,
				"A node of Ranvier is a gap in the myelin sheath that may surround an axon.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336762;


		
		

		
			
			p.question = "A nerve impulse moves away from a neuron\'s cell body along _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?48&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Neuron Structure</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "dendrites",
				false,
				"Dendrites conduct an impulse from a synapse toward the cell body.");
			
				p.addAnswer(2, "Nissl bodies",
				false,
				"Nissl bodies, found in the cell body, are regions of rough endoplasmic reticulum.");
			
				p.addAnswer(3, "synapses",
				false,
				"Synapses are the junctions between neurons or between neurons and effectors.");
			
				p.addAnswer(4, "axons",
				true,
				"Axons conduct a nerve impulse away from the cell body.");
			
				p.addAnswer(5, "glia",
				false,
				"Glia, also known as neuroglia, are cells that support the functioning of neurons.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336763;


		
		

		
			
			p.question = "An impulse relayed along a myelinated axon \"jumps\" from _____ to _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?48&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Neuron Structure</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "oligodendrocyte ... Schwann cell",
				false,
				"These two terms are synonyms. Schwann cells form an insulated region about an axon, a region where depolarization does not occur.");
			
				p.addAnswer(2, "node of Ranvier ... Schwann cell",
				false,
				"This choice is partially correct.");
			
				p.addAnswer(3, "node of Ranvier ... node of Ranvier",
				true,
				"In myelinated neurons the impulse jumps from node of Ranvier to node of Ranvier.");
			
				p.addAnswer(4, "Schwann cell ... Schwann cell",
				false,
				"Schwann cells form an insulated region about an axon, a region where depolarization does not occur.");
			
				p.addAnswer(5, "Schwann cell ... node of Ranvier",
				false,
				"This choice is partially correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336764;


		
		

		
			
			p.question = "Axons insulated by a(n) _____ are able to conduct impulses faster that those not so insulated. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?48&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Neuron Structure</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "node of Ranvier",
				false,
				"A node of Ranvier is a gap in the insulation.");
			
				p.addAnswer(2, "synaptic terminal",
				false,
				"Synaptic terminals are found at the tips of axons; they are regions that store neurotransmitter molecules.");
			
				p.addAnswer(3, "myelin sheath",
				true,
				"Myelin sheaths, formed when Schwann cells wrap around an axon, allow such neurons to conduct impulses more rapidly than unmyelinated axons.");
			
				p.addAnswer(4, "layer of asbestos",
				false,
				"I hope not; asbestos exposure increases cancer risk.");
			
				p.addAnswer(5, "astrocytes",
				false,
				"Astrocytes are glial cells that have several functions; however, insulating neurons is not one of them.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336765;


		
		

		
			
			p.question = "What type of cell makes up the myelin sheath of a motor neuron? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?48&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Neuron Structure</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "astrocytes",
				false,
				"Astrocytes, while playing a supportive role in the nervous system, do not form a myelin sheath.");
			
				p.addAnswer(2, "microglial cells",
				false,
				"Microglial cells, while playing a supportive role in the nervous system, do not form a myelin sheath.");
			
				p.addAnswer(3, "Ranvier cells",
				false,
				"Nodes of Ranvier are gaps in the myelin sheath.");
			
				p.addAnswer(4, "ependymal cells",
				false,
				"Ependymal cells, while playing a supportive role in the nervous system, do not form a myelin sheath.");
			
				p.addAnswer(5, "Schwann cells",
				true,
				"Myelin sheaths are formed when Schwann cells wrap around the axons of motor neurons.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336766;


		
		

		
			
			p.question = "What part of a neuron relays signals from one neuron to another neuron or to an effector? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?48&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Neuron Structure</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "dendrite",
				false,
				"Dendrites conduct an impulse from a synapse toward the cell body.");
			
				p.addAnswer(2, "axon hillock",
				false,
				"An impulse is conducted away from a nerve cell body by an axon hillock.");
			
				p.addAnswer(3, "synaptic terminal",
				true,
				"Synaptic terminals contain neurotransmitter molecules that relay the nerve impulse across a synapse.");
			
				p.addAnswer(4, "axon",
				false,
				"Axons conduct a nerve impulse away from the cell body.");
			
				p.addAnswer(5, "node of Ranvier",
				false,
				"A node of Ranvier is a gap in the myelin sheath that may surround an axon.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336767;


		
		

		
			
			p.question = "A neuron has a resting potential of about _____ millivolts. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?48&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Nerve Signals: Action Potentials</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "+50",
				false,
				"Such a membrane potential indicates that the membrane has been depolarized and the neuron is conducting an impulse.");
			
				p.addAnswer(2, "+35",
				false,
				"Such a membrane potential indicates that the membrane has been depolarized and the neuron is conducting an impulse.");
			
				p.addAnswer(3, "&#150;55",
				false,
				"This is the threshold potential, the point at which depolarization is sufficient to stimulate a self-sustaining nerve impulse.");
			
				p.addAnswer(4, "&#150;70",
				true,
				"This is the resting potential, the charge difference found across the plasma membrane of a \"resting\" neuron.");
			
				p.addAnswer(5, "&#150;80",
				false,
				"Such a neuron would be hyperpolarized; its membrane potential is more negative than the resting potential.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336768;


		
		

		
			
			p.question = "An action potential moves along a(n) _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?48&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Nerve Signals: Action Potentials</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "myelin sheath",
				false,
				"A myelin sheath functions as insulation; thus an impulse moves by skipping from gap to gap in the myelin sheath.");
			
				p.addAnswer(2, "axon",
				true,
				"An axon is the only portion of a neuron capable of generating an action potential.");
			
				p.addAnswer(3, "dendrite",
				false,
				"Dendrites cannot generate an action potential.");
			
				p.addAnswer(4, "synapse",
				false,
				"Impulses, but not action potentials, are transmitted across synapses.");
			
				p.addAnswer(5, "cell body",
				false,
				"Cell bodies cannot generate an action potential.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336769;


		
		

		
			
			p.question = "At rest, which of these plays a role in establishing the charge differential across a neuron\'s plasma membrane? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?48&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Nerve Signals: Action Potentials</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the sodium-potassium pump moving sodium ions into the neuron and potassium ions out of the neuron",
				false,
				"The sodium-potassium pump moves sodium ions out of the neuron and potassium ions into the cell.");
			
				p.addAnswer(2, "the diffusion of sodium ions out of the neuron",
				false,
				"At rest, sodium ions slowly diffuse into the neuron.");
			
				p.addAnswer(3, "the diffusion of potassium ions into the neuron",
				false,
				"At rest, potassium ions flow freely out of the neuron.");
			
				p.addAnswer(4, "the sodium-potassium pump moving sodium ions out of the neuron and potassium ions into the neuron",
				true,
				"The sodium-potassium pump moves more sodium ions out of the cell than potassium ions into the cell; this net loss of positive ions establishes a charge differential across the plasma membrane.");
			
				p.addAnswer(5, "the diffusion of sodium ions into the neuron",
				false,
				"The diffusion of positively charged sodium ions into the neuron decreases the charge differential across the plasma membrane.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336770;


		
		

		
			
			p.question = "The transmission of a nerve impulse first triggers the _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?48&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Nerve Signals: Action Potentials</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "action of the sodium-potassium pump",
				false,
				"The sodium-potassium pump will operate later to restore the resting potential distribution of sodium and potassium ions.");
			
				p.addAnswer(2, "opening of voltage-gated sodium channels and the diffusion of sodium ions into the neuron",
				true,
				"This is the first of the events listed here. As a result of the inward flux of sodium ions, that region of the neuron depolarizes.");
			
				p.addAnswer(3, "opening of voltage-gated sodium channels and the diffusion of sodium ions out of the neuron",
				false,
				"Since the concentration of sodium ions is higher outside the neuron, sodium ions diffuse into the cell.");
			
				p.addAnswer(4, "opening of voltage-gated potassium channels and the diffusion of potassium ions out of the neuron",
				false,
				"While this does occur, it is not the first of the events listed here.");
			
				p.addAnswer(5, "opening of voltage-gated potassium channels and the diffusion of potassium ions into the neuron",
				false,
				"Since the concentration of potassium ions is higher inside the neuron, potassium ions diffuse out of the cell.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336771;


		
		

		
			
			p.question = "A stimulus has opened the voltage-gated sodium channels in an area of a neuron\'s plasma membrane. As a result, _____ rushes into the neuron and diffuses to adjacent areas; this in turn results in the _____ in the adjacent areas. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?48&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Nerve Signals: Action Potentials</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "potassium ... opening of voltage-gated potassium channels",
				false,
				"Potassium ions do not diffuse through voltage-gated sodium channels.");
			
				p.addAnswer(2, "sodium ... opening of voltage-gated potassium channels",
				false,
				"Sodium ions are not responsible for opening voltage-gated potassium channels");
			
				p.addAnswer(3, "sodium ... opening of voltage-gated sodium channels",
				true,
				"This describes part of the process by which an action potential travels along an axon.");
			
				p.addAnswer(4, "sodium ... closing of voltage-gated sodium channels",
				false,
				"This choice is partially correct.");
			
				p.addAnswer(5, "potassium ... opening of voltage-gated sodium channels",
				false,
				"This choice is partially correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336772;


		
		

		
			
			p.question = "Which of these causes the release of neurotransmitter molecules? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?48&C','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Signal Transmission at a Chemical Synapse</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the receipt of a signal from the postsynaptic neuron",
				false,
				"Information usually flows from the presynaptic neuron to the postsynaptic neuron.");
			
				p.addAnswer(2, "the opening of voltage-regulated calcium channels and the diffusion of calcium ions out of the neuron",
				false,
				"The opening of voltage-regulated calcium channels does play a role in the release of neurotransmitter molecules. However, when these calcium channels open, calcium ions diffuse into the neuron.");
			
				p.addAnswer(3, "an action potential reaching the end of the cell body",
				false,
				"Cell bodies do not release neurotransmitter.");
			
				p.addAnswer(4, "an action potential reaching the end of the axon",
				true,
				"When an action potential reaches the end of an axon, vesicles fuse with the plasma membrane and release neurotransmitter into the synaptic cleft.");
			
				p.addAnswer(5, "an action potential reaching the end of the dendrite",
				false,
				"Dendrites do not release neurotransmitter.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336773;


		
		

		
			
			p.question = "The space between an axon of one neuron and the dendrite of another neuron is called a(n) _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?48&C','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Signal Transmission at a Chemical Synapse</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "synaptic cleft",
				true,
				"\"Synaptic cleft\" is the name given to the space between two neurons that meet at a synapse.");
			
				p.addAnswer(2, "node of Ranvier",
				false,
				"In a myelinated neuron, nodes of Ranvier are gaps in the myelin sheath.");
			
				p.addAnswer(3, "internodes",
				false,
				"In a myelinated neuron, internodes are the myelinated regions between nodes of Ranvier.");
			
				p.addAnswer(4, "synapse",
				false,
				"A synapse, which includes a space, is the junction between two neurons.");
			
				p.addAnswer(5, "synaptic terminal",
				false,
				"A synaptic terminal is found on the end of an axon.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336774;


		
		

		
			
			p.question = "Neurons store neurotransmitter molecules in vesicles located within _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?48&C','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Signal Transmission at a Chemical Synapse</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the cell body",
				false,
				"The cell body does not store neurotransmitter.");
			
				p.addAnswer(2, "myelin",
				false,
				"The myelin sheath is an insulating material that covers certain axons; it does not store neurotransmitter.");
			
				p.addAnswer(3, "the synaptic cleft",
				false,
				"Stored neurotransmitter is released into the synaptic cleft.");
			
				p.addAnswer(4, "dendrites",
				false,
				"Dendrites do not store neurotransmitter.");
			
				p.addAnswer(5, "synaptic terminals",
				true,
				"Vesicles within synaptic terminals contain neurotransmitter that may be released into the synaptic cleft.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

