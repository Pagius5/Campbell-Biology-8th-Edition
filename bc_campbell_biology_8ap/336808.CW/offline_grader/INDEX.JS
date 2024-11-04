

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "49: Nervous Systems > Activities Quiz";
	ak.quiz_loc_with_commas = "49: Nervous Systems, Activities Quiz";
	ak.quiz_title = "Activities Quiz";

	
		ak.help_url = "../../placeholders/help_placeholder.html";
	
	ak.essay_total = 0;
	ak.pair_problem_total = 0;
	ak.pair_total = 0;
	ak.problem_total = 10;
	ak.non_essay_total = 10;
	ak.scored_item_total = 10;

	
	
	


	
	ak.copyright_date = "2008";
	ak.brandname = "Pearson Benjamin Cummings";
	ak.legal = "../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.pearsoned.com%2Flegal%2Findex.htm";


	// Loop over all problems
	
	
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336809;


		
		

		
			
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
		
		p.id = 336810;


		
		

		
			
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
		
		p.id = 336811;


		
		

		
			
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
		
		p.id = 336812;


		
		

		
			
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
		
		p.id = 336813;


		
		

		
			
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
		
		p.id = 336814;


		
		

		
			
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
		
		p.id = 336815;


		
		

		
			
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
		
		p.id = 336816;


		
		

		
			
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
		
		p.id = 336817;


		
		

		
			
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
		
		p.id = 336818;


		
		

		
			
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

