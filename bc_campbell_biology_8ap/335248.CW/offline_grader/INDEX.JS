

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "19: Viruses > Practice Test";
	ak.quiz_loc_with_commas = "19: Viruses, Practice Test";
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
		
		p.id = 335249;


		
		

		
			
			p.question = "Viruses can vary with respect to all of the following characteristics <b>except</b> _____. (<script type=\"text/javascript\">ebook(\'1901\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "DNA or RNA as the genetic material",
				false,
				"No. This is a difference among viruses and is used for classification.");
			
				p.addAnswer(2, "the presence or absence of metabolic machinery",
				true,
				"Correct. Viruses are not classified by the presence or absence of metabolic machinery, because viruses do not contain metabolic machinery.");
			
				p.addAnswer(3, "single- or double-stranded nucleic acids",
				false,
				"No. This is a difference among viruses.");
			
				p.addAnswer(4, "the presence or absence of a membranous envelope",
				false,
				"No. This is a difference among viruses.");
			
				p.addAnswer(5, "the type of host cell it can infect",
				false,
				"No. This is a difference among viruses.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335250;


		
		

		
			
			p.question = "A microbiologist analyzes chemicals obtained from an enveloped RNA virus that infects monkeys. He finds that the viral envelope contains a protein characteristic of monkey cells. Which of the following is the most likely explanation? (<script type=\"text/javascript\">ebook(\'1901\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "The viral envelope forms as the virus leaves the host cell.",
				true,
				"Correct. An enveloped virus is wrapped in host plasma membrane or nuclear membrane (which contains host proteins).");
			
				p.addAnswer(2, "The virus forced the monkey cell to make proteins for its envelope.",
				false,
				"No. This may be true, but the protein in question is a normal monkey protein.");
			
				p.addAnswer(3, "The virus is a prophage.",
				false,
				"No. A prophage is a viral genome that has been incorporated into a bacterial chromosome.");
			
				p.addAnswer(4, "Its presence is a result of the monkey\'s immunological response.",
				false,
				"No. This does not explain the presence of either the envelope or the monkey protein found on the envelope.");
			
				p.addAnswer(5, "The virus fools its host by mimicking its proteins.",
				false,
				"No. Although this may be true, it is not an explanation of how the virus acquired the protein.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335251;


		
		

		
			
			p.question = "Which of the following, if any, may be a component of a virus? (<script type=\"text/javascript\">ebook(\'1901\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "protein",
				false,
				"No. Protein is a component of viruses, but there is a better answer.");
			
				p.addAnswer(2, "double-stranded (ds) DNA",
				false,
				"No. Double-stranded DNA is the genetic material of some viruses, but there is a better answer.");
			
				p.addAnswer(3, "phospholipid bilayer",
				false,
				"No. Many animal viruses have an envelope made up of a lipid bilayer, but there is a better answer.");
			
				p.addAnswer(4, "single-stranded (ss) RNA",
				false,
				"No. Single-stranded RNA is the genetic material of certain viruses, but there is a better answer.");
			
				p.addAnswer(5, "all of the above",
				true,
				"Correct. Viral genomes may consist of double-stranded or single-stranded DNA, double-stranded or single-stranded RNA, and many contain an envelope made up of a phospholipid bilayer.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335252;


		
		

		
			
			p.question = "Viruses that infect bacteria are called _____. (<script type=\"text/javascript\">ebook(\'1901\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "bacterioviruses",
				false,
				"No. Viruses that infect bacteria are called bacteriophages or, simply, phages.");
			
				p.addAnswer(2, "bacteriophages",
				true,
				"Correct. Viruses that infect bacteria are called bacteriophages or, simply, phages.");
			
				p.addAnswer(3, "capsomeres",
				false,
				"No. Capsomeres are the protein subunits of the capsid, the protein shell that encloses the viral genome.");
			
				p.addAnswer(4, "proviruses",
				false,
				"No. A provirus is viral DNA that is integrated into the host cell\'s genome.");
			
				p.addAnswer(5, "retroviruses",
				false,
				"No. Retroviruses are a type of RNA virus.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335253;


		
		

		
			
			p.question = "HIV, the virus that causes AIDS, only infects certain cells within the immune system. This is because _____. (<script type=\"text/javascript\">ebook(\'1902\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the virus is not very mobile within the body and only comes into contact with a limited number of immune cells",
				false,
				"No. This is not the basis of the limitation.");
			
				p.addAnswer(2, "other cells produce toxins that destroy the virus before infection can take place",
				false,
				"No. This is not true.");
			
				p.addAnswer(3, "the virus binds to specific receptors that are only present on certain immune cells",
				true,
				"Correct. The virus binds to receptors such as CD4 that are only present on certain cells such as helper T cells.");
			
				p.addAnswer(4, "the virus gets into all cells, but the viral RNA is immediately destroyed in all but a small number of immune system cells",
				false,
				"No. This is not true.");
			
				p.addAnswer(5, "infection requires the presence of a specific DNA sequence that is only present in the genome of certain immune system cells",
				false,
				"No. This is not true.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335254;


		
		

		
			
			p.question = "Cancer cells often have protein receptor molecules on their surfaces that differ from those on normal body cells. Given this fact, how might viruses be used to treat cancer? (<script type=\"text/javascript\">ebook(\'1902\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Viruses are pathogenic and will infect the host. This treatment will not work.",
				false,
				"No. Viruses only infect specific cells based on the \"lock-and-key\" fit between viral surface proteins and cell surface receptors. There are many viruses, for instance, that do not infect humans because human cells do not have the right receptors.");
			
				p.addAnswer(2, "Viruses could be used to carry genes exclusively to the normal body cells. These genes could encode proteins that would help destroy the cancer cells.",
				false,
				"No. This would be a round-about approach similar to gene therapy. Unfortunately, it is easier to engineer a virus to destroy a cell than to give it new and better attributes.");
			
				p.addAnswer(3, "Viruses could be engineered to infect only cancer cells by altering viral surface proteins to recognize only the receptors on cancer cells.",
				true,
				"Correct. The host specificity of viruses could be used to make cancer cells \"sick\" while normal body cells would not be infected. This approach would reduce the collateral damage seen in chemotherapy.");
			
				p.addAnswer(4, "Viruses sometimes cause cancer. This is a bad idea.",
				false,
				"No. While it is true that some viruses, human papilloma virus, for example, can cause cancer, there are also examples of viral infections curing cancer.");
			
				p.addAnswer(5, "Viruses could be engineered to attach to the surface receptors on cancer cells to alert the immune system to the presence of cancer.",
				false,
				"No. While this seems like a promising approach, viruses attach to cell surface receptors for the purpose of being brought inside the cell. They do not always remain on the outside of the specific cell for long enough to be effective in alerting the immune system.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335255;


		
		

		
			
			p.question = "Why are phages useful in treating bacterial infections in humans? (<script type=\"text/javascript\">ebook(\'1902\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Because of their host specificity, they only attack bacteria. They do not affect eukaryotic cells.",
				false,
				"No. This is true, but there is a better answer.");
			
				p.addAnswer(2, "Because of their specificity, a phage can be used that will only infect the pathogenic bacteria, leaving helpful bacteria alone.",
				false,
				"No. This is true, but there is a better answer.");
			
				p.addAnswer(3, "Because phages are free to evolve, bacteria are less likely to develop a lasting resistance to them.",
				false,
				"No. This is true, but there is a better answer.");
			
				p.addAnswer(4, "They are not useful, and the practice has been banned in all countries.",
				false,
				"No. Although phage therapy is not widely used in the United States, it has been used successfully for decades in many other countries.");
			
				p.addAnswer(5, "The first three answers are correct.",
				true,
				"Correct. Phage therapy is useful because of its host specificity and ability to evolve to avoid the problems of resistance.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335256;


		
		

		
			
			p.question = "Which of the following can a virus do without a host cell? (<script type=\"text/javascript\">ebook(\'1902\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "synthesize proteins",
				false,
				"No. Viruses do not have ribosomes or tRNAs");
			
				p.addAnswer(2, "produce ATP for energy",
				false,
				"No. Viruses cannot synthesize any of the enzymes necessary to carry out metabolism.");
			
				p.addAnswer(3, "transcribe DNA",
				false,
				"No. DNA viruses use the RNA polymerase of the host to transcribe viral DNA.");
			
				p.addAnswer(4, "produce nucleotides for use in replication and transcription",
				false,
				"No. Viruses use the host\'s nucleotides. The virus does not have the appropriate enzymes to synthesize nucleotides.");
			
				p.addAnswer(5, "none of the above",
				true,
				"Correct. Viruses are obligate intracellular parasites. They require a host cell to carry out all of the above cellular processes (and more).");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335257;


		
		

		
			
			p.question = "When a virus infects an <i>E. coli</i> cell, what part of the virus enters the bacterial cytoplasm? (<script type=\"text/javascript\">ebook(\'1902\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the entire virus",
				false,
				"No. Portions of the virus remain outside the host cell.");
			
				p.addAnswer(2, "only the nucleic acid",
				true,
				"Correct. After attaching to receptors on the surface of the bacterial cell, the virus injects its DNA into the cell.");
			
				p.addAnswer(3, "the protein capsid and enclosed nucleic acid",
				false,
				"No. Only the nucleic acid is required for viral replication.");
			
				p.addAnswer(4, "the tail fibers",
				false,
				"No. The tail remains outside the host cell.");
			
				p.addAnswer(5, "the protein capsid only",
				false,
				"No. The capsid remains outside the host cell.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335258;


		
		

		
			
			p.question = "The phage reproductive cycle that kills the bacterial host cell is a _____ cycle, and a phage that always reproduces this way is a _____ phage. (<script type=\"text/javascript\">ebook(\'1902\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "lytic; virulent",
				true,
				"Correct. A lytic cycle ends with the lysis of the bacterial host cell.");
			
				p.addAnswer(2, "lytic; lysogenic",
				false,
				"No. These are both types of reproductive cycles.");
			
				p.addAnswer(3, "lysogenic; temperate",
				false,
				"No. A lysogenic cycle does not kill the bacterial host cell.");
			
				p.addAnswer(4, "virulent; lytic",
				false,
				"No. The term \"lytic\" refers to a type of viral reproductive cycle.");
			
				p.addAnswer(5, "lysogenic; virulent",
				false,
				"No. A virus with a lysogenic cycle is a temperate virus.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335259;


		
		

		
			
			p.question = "In the lytic life cycle of phages _____. (<script type=\"text/javascript\">ebook(\'1902\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the cell typically dies, releasing many copies of the virus",
				true,
				"Correct. After attaching to receptors on the surface of the bacterial cell, the phage injects its nucleic acid into the cell. The phage then hijacks the cellular machinery to manufacture many copies of itself.");
			
				p.addAnswer(2, "the viral capsid is assembled according to the genetic information of the bacterium",
				false,
				"No. The viral capsid assembles spontaneously from its subunits, the capsomeres.");
			
				p.addAnswer(3, "the entire phage is taken into the bacterium",
				false,
				"No. Components of the phage remain outside the host cell.");
			
				p.addAnswer(4, "DNA replication is not part of the life cycle",
				false,
				"No. Phage DNA is replicated by the host cell\'s metabolic machinery.");
			
				p.addAnswer(5, "phage DNA is incorporated into the host cell\'s genome",
				false,
				"No. Such an event is a component of the lysogenic cycle.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335260;


		
		

		
			
			p.question = "Restriction enzymes help defend bacteria against viral infections by _____. (<script type=\"text/javascript\">ebook(\'1902\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "preventing the binding of the virus to the cell surface",
				false,
				"No. Restriction enzymes work inside the cell.");
			
				p.addAnswer(2, "preventing entry of the viral DNA into the cell",
				false,
				"No. Restriction enzymes work on DNA that has already entered the cell.");
			
				p.addAnswer(3, "cutting viral DNA once it has entered the cell",
				true,
				"Correct. Restriction enzymes cut viral DNA, but bacterial DNA is modified in such a way as to protect it against the enzymes.");
			
				p.addAnswer(4, "preventing the synthesis of viral capsomeres in the cell",
				false,
				"No. Restriction enzymes act upon the viral DNA.");
			
				p.addAnswer(5, "preventing integration of the viral genome into the host chromosome",
				false,
				"No. Restriction enzymes act directly upon the viral DNA, cutting it at specific short nucleotide sequences.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335261;


		
		

		
			
			p.question = "A phage that inserts itself into the host DNA is called _____. (<script type=\"text/javascript\">ebook(\'1902\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "a bud",
				false,
				"No. Another answer is the correct one.");
			
				p.addAnswer(2, "lysogenic",
				true,
				"Correct. In the lysogenic cycle, the nucleic acid enters the host cell and the phage \"ghost\" remains outside. The phage DNA forms a circle and is incorporated into the host chromosome as a prophage.");
			
				p.addAnswer(3, "a bacteriophage",
				false,
				"No. \"Bacteriophage\" and \"phage\" are synonyms.");
			
				p.addAnswer(4, "semipermeable",
				false,
				"No. Another answer is the correct one.");
			
				p.addAnswer(5, "a capsomere",
				false,
				"No. Capsomeres are the protein subunits of capsids.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335262;


		
		

		
			
			p.question = "A prophage is a(n) _____. (<script type=\"text/javascript\">ebook(\'1902\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "emerging virus",
				false,
				"No. The term \"emerging virus\" refers to viruses that make what seems to be a sudden appearance in the world.");
			
				p.addAnswer(2, "virus that infects bacteria",
				false,
				"No. This type of virus is called a bacteriophage.");
			
				p.addAnswer(3, "type of retrovirus",
				false,
				"No. The term \"retrovirus\" refers to RNA viruses of animals that transcribe their RNA into DNA when they infect a host. This DNA can then be incorporated into the host cell\'s DNA as a provirus.");
			
				p.addAnswer(4, "prion that has been integrated into a bacterial cell\'s chromosome",
				false,
				"No. A prion is an infectious protein.");
			
				p.addAnswer(5, "viral genome that has been incorporated into a bacterial cell\'s chromosome",
				true,
				"Correct. This is one of the events of the lysogenic cycle.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335263;


		
		

		
			
			p.question = "In the lysogenic cycle of phages _____. (<script type=\"text/javascript\">ebook(\'1902\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the nucleic acid core of the phage is all that enters the host cell",
				false,
				"No. This choice is correct, but it is not the best response.");
			
				p.addAnswer(2, "only a small number of the viral genes are expressed",
				false,
				"No. This choice is correct, but it is not the best response.");
			
				p.addAnswer(3, "the viral nucleic acid inserts itself into the host chromosome",
				false,
				"No. This choice is correct, but it is not the best response.");
			
				p.addAnswer(4, "the viral nucleic acid is replicated along with the host DNA",
				false,
				"No. This choice is correct, but it is not the best response.");
			
				p.addAnswer(5, "all of the above",
				true,
				"Correct. In the lysogenic cycle, the phage DNA enters the host cell, forms a circle, and is then incorporated into the host chromosome as a prophage. The prophage replicates with each round of host replication. Under certain conditions, the prophage exits the host chromosome and enters the lytic cycle.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335264;


		
		

		
			
			p.question = "What is the origin of the phospholipid membrane that envelops many animal viruses? (<script type=\"text/javascript\">ebook(\'1902\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "It is produced by viral enzymes and contains only viral proteins and phospholipids.",
				false,
				"No. It is taken from the host cells membrane, so it contains many components from the host cell.");
			
				p.addAnswer(2, "It is assembled from free phospholipids floating in the cell\'s cytoplasm.",
				false,
				"No. There are very few free phospholipids in the cytoplasm because they self-assemble into bilayers in aqueous solutions. This is not where viruses obtain their outer membranes.");
			
				p.addAnswer(3, "It is \"stolen\" from the host cell and contains only host cell proteins and phospholipids.",
				false,
				"No. Although it is taken from the host, it also contains many components that are encoded by the viral genome.");
			
				p.addAnswer(4, "It is assembled in the ER based on signals sent out by the viral genome.",
				false,
				"No. It is \"stolen\" from the host cell and then altered with the addition of viral components.");
			
				p.addAnswer(5, "It is \"stolen\" from the host cell, but it contains some proteins encoded by the viral genome.",
				true,
				"Correct. Newly formed viruses \"cloak\" themselves in phospholipids membrane derived from the host, but certain components encoded by the viral genome are also included in the envelope.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335265;


		
		

		
			
			p.question = "Why can flare-ups of herpesvirus infection recur throughout a person\'s life? (<script type=\"text/javascript\">ebook(\'1902\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "The herpesvirus becomes a prophage during the lysogenic cycle of the infection, so the viral genome is recombined with the host DNA.",
				false,
				"No. This is a description of how a virus acts during infection of a bacterium. It has some similarities to the behavior of the herpesvirus, but it is not the same.");
			
				p.addAnswer(2, "Herpesvirus can leave its DNA behind as minichromosomes in nerve cell nuclei. Stress can trigger another round of virus production, producing characteristic blisters and sores.",
				true,
				"Correct. Herpesvirus remains in a person\'s cells virtually for their whole lifetime, so flare-ups are always a possibility.");
			
				p.addAnswer(3, "Herpesvirus is very common in the environment, so it is easy for a person to become re-infected.",
				false,
				"No. While herpesvirus is fairly common, flare-ups recur because the virus may leave its genome in the nuclei of nerve cells where stress can trigger another round of virus production.");
			
				p.addAnswer(4, "Herpesvirus may cloak itself in a cell\'s nuclear envelope, making it very difficult for the immune system to recognize.",
				false,
				"No. Herpesvirus does use the nuclear envelope\'s membrane as its envelope at some times, but recurrences are caused by the virus leaving its DNA in the nucleus of certain nerve cells. When triggered, the viral DNA can set off another round of virus production.");
			
				p.addAnswer(5, "The herpesvirus always kills its host cell when it leaves. Cycles of cell death cause the recurring flare-ups.",
				false,
				"No. Herpesvirus often leaves an infected cell intact. In fact it may leave its viral genes in the nucleus as minichromosomes. Flare-ups occur when the viral genes are triggered to produce more of the virus.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335266;


		
		

		
			
			p.question = "How do retroviruses, such as HIV, differ from other viruses? (<script type=\"text/javascript\">ebook(\'1902\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "They have much simpler reproductive cycles than other RNA viruses.",
				false,
				"No. Of the RNA viruses, retroviruses have the most complex reproductive cycles.");
			
				p.addAnswer(2, "They contain DNA that is used as a template to make RNA.",
				false,
				"No. Retroviruses are not DNA viruses.");
			
				p.addAnswer(3, "They can reproduce only inside living cells.",
				false,
				"No. This is true of all viruses.");
			
				p.addAnswer(4, "They contain nucleic acids that code for proteins.",
				false,
				"No. This is true of all viruses.");
			
				p.addAnswer(5, "They contain the enzyme reverse transcriptase.",
				true,
				"Correct. The enzyme that transcribes DNA from RNA is called reverse transcriptase.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335267;


		
		

		
			
			p.question = "Reverse transcription, carried out by retroviruses, is the process by which _____. (<script type=\"text/javascript\">ebook(\'1902\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "DNA information is copied into RNA",
				false,
				"No. This is \"standard\" transcription, not reverse transcription.");
			
				p.addAnswer(2, "RNA information is copied into DNA",
				true,
				"Correct. Retroviruses are equipped with an enzyme called reverse transcriptase, which makes a DNA copy of an RNA template, providing information flow from RNA to DNA.");
			
				p.addAnswer(3, "RNA information is \"read\" to form a protein molecule",
				false,
				"No. This is translation.");
			
				p.addAnswer(4, "DNA is duplicated",
				false,
				"No. This is DNA replication.");
			
				p.addAnswer(5, "information is copied from a protein molecule into RNA",
				false,
				"No. This would be \"reverse translation.\"");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335268;


		
		

		
			
			p.question = "Which statement below is a correct comparison of a \"regular\" RNA virus and a RNA retrovirus? (<script type=\"text/javascript\">ebook(\'1902\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Only the regular RNA virus performs transcription.",
				false,
				"No. Both types of RNA viruses perform transcription.");
			
				p.addAnswer(2, "Only the RNA retrovirus performs translation.",
				false,
				"No. Translation is required for the manufacture of viral proteins.");
			
				p.addAnswer(3, "Only the regular RNA virus produces DNA from an RNA template.",
				false,
				"No. A regular RNA virus bypasses DNA.");
			
				p.addAnswer(4, "Only RNA retroviruses produce DNA using DNA replicase.",
				false,
				"No. Reverse transcriptase is the enzyme that produces DNA from RNA.");
			
				p.addAnswer(5, "Both produce protein coats via translation of mRNA.",
				true,
				"Correct. Both regular RNA viruses and retroviruses have genes encoding the protein coats in which they are encased.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335269;


		
		

		
			
			p.question = "When comparing DNA and RNA viruses, which mutate more quickly, and why? (<script type=\"text/javascript\">ebook(\'1902\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "RNA viruses because no proofreading is done on RNA molecules.",
				true,
				"Correct. There are no proofreading enzymes for RNA, so mutations in the RNA genome of a virus are not repaired, and mutations can persist.");
			
				p.addAnswer(2, "They all mutate at the same rate.",
				false,
				"No. Mutations in the genomes of DNA viruses are corrected by the cell\'s proofreading enzymes. RNA molecules are not proofread, so mutations in RNA viruses persist.");
			
				p.addAnswer(3, "DNA viruses because they usually have larger genomes and thus more loci for mutations to occur.",
				false,
				"No. DNA viruses have lower mutation rates because the host cell\'s proofreading enzymes correct most of the errors in the virus\'s DNA genome.");
			
				p.addAnswer(4, "DNA viruses because the host cell\'s proofreading enzymes do not work on viral DNA.",
				false,
				"No. DNA is DNA. The host cell\'s proofreading enzymes will bind to and proofread viral DNA.");
			
				p.addAnswer(5, "RNA viruses because RNA is single-stranded and thus more prone to mutations.",
				false,
				"No. RNA viruses mutate more quickly because RNA molecules are not proofread.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335270;


		
		

		
			
			p.question = "The symptoms of a viral infection in a person can be caused by _____. (<script type=\"text/javascript\">ebook(\'1903\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the death of infected cells",
				false,
				"No. This choice is correct, but there is a better response.");
			
				p.addAnswer(2, "the reaction of the individual\'s immune system to the infection",
				false,
				"No. This choice is correct, but there is a better response.");
			
				p.addAnswer(3, "the production of toxins by infected cells",
				false,
				"No. This choice is correct, but there is a better response.");
			
				p.addAnswer(4, "toxic viral components, such as envelope proteins",
				false,
				"No. This choice is correct, but there is a better response.");
			
				p.addAnswer(5, "all of the above",
				true,
				"Correct. Each of these can contribute to the symptoms of a viral infection.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335271;


		
		

		
			
			p.question = "Vaccines for viral diseases are _____ and help prevent infection by _____. (<script type=\"text/javascript\">ebook(\'1903\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "harmless derivatives of pathogenic viruses; stimulating the immune system to mount a defense against the actual pathogen",
				true,
				"Correct. Vaccines can be tremendously effective. For example, vaccination has eradicated smallpox.");
			
				p.addAnswer(2, "nucleoside inhibitors; inhibiting the replication of the viral genome",
				false,
				"No. Nucleoside inhibitors such as AZT are not vaccines but are instead a separate class of anti-viral drugs.");
			
				p.addAnswer(3, "protease inhibitors; preventing synthesis of envelope proteins",
				false,
				"No. Protease inhibitors are not vaccines but are instead a separate class of anti-viral drugs.");
			
				p.addAnswer(4, "antibiotic formulations; specifically killing infected cells",
				false,
				"No. Antibiotics are not effective against viral infections.");
			
				p.addAnswer(5, "antibiotic formulations; killing bacteria that assist viruses in infecting animal cells",
				false,
				"No. Vaccines for viral diseases are directed against the virus itself.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335272;


		
		

		
			
			p.question = "Emerging viruses can originate from which of the following sources? (<script type=\"text/javascript\">ebook(\'1903\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "animal viruses",
				false,
				"No. This is a possible source, but there is a better answer.");
			
				p.addAnswer(2, "the mutation of existing human viruses",
				false,
				"No. This is a possible source, but there is a better answer.");
			
				p.addAnswer(3, "viruses previously confined to small, isolated populations that can now spread due to technological or social changes such as the development of affordable international travel",
				false,
				"No. This is a possible source, but there is a better answer.");
			
				p.addAnswer(4, "all of the above",
				true,
				"Correct. These are all ways that previously unknown pathogenic viruses can emerge.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. At least one of the first four choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335273;


		
		

		
			
			p.question = "What is the function of hemagglutinin in the influenza virus? (<script type=\"text/javascript\">ebook(\'1903\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Hemagglutinin is the name of the reverse transcriptase enzyme in the influenza virus.",
				false,
				"No. Influenza is not a retrovirus.");
			
				p.addAnswer(2, "Hemagglutinin helps release new viruses from infected cells.",
				false,
				"No. Neuriminidase is the enzyme that helps release new viruses from infected cells.");
			
				p.addAnswer(3, "Hemagglutinin is part of the protein capsid of the influenza virus.",
				false,
				"No. Hemagglutinin helps the virus attach to host cells.");
			
				p.addAnswer(4, "Hemagglutinin is the protein that helps the influenza virus attach to host cells.",
				true,
				"Correct. There are 16 type of hemagglutinin in various strains of influenza, but they all function in recognition and attachment.");
			
				p.addAnswer(5, "Hemagglutinin is involved in assembling the membrane envelope that the virus uses as a cloak when it leaves an infected cell.",
				false,
				"No. Hemagglutinin helps the virus attach to host cells.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335274;


		
		

		
			
			p.question = "Birds act as a natural _____ for the influenza _____ virus.(<script type=\"text/javascript\">ebook(\'1903\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "defense; A",
				false,
				"No. Birds are a major reservoir for influenza A, and their ability to migrate all over the world is a major factor in the spread of avian flu.");
			
				p.addAnswer(2, "reservoir; C",
				false,
				"No. Influenza type C only infects humans.");
			
				p.addAnswer(3, "buffer; B",
				false,
				"No. Birds are a major reservoir for influenza A, and their ability to migrate all over the world is a major factor in the spread of avian flu.");
			
				p.addAnswer(4, "reservoir; A",
				true,
				"Correct. Birds are a major reservoir for influenza A, and their ability to migrate all over the world is a major factor in the spread of avian flu.");
			
				p.addAnswer(5, "pandemic; B",
				false,
				"No. Birds are a major reservoir for influenza A, and their ability to migrate all over the world is a major factor in the spread of avian flu.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335275;


		
		

		
			
			p.question = "Which of the following is an example of vertical transmission of a virus in plants? (<script type=\"text/javascript\">ebook(\'1903\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Viral particles are carried by the wind from one plant to another.",
				false,
				"No. This is an example of horizontal transmission.");
			
				p.addAnswer(2, "Viral particles are carried from one plant to another by a pair of pruning shears.",
				false,
				"No. This is an example of horizontal transmission.");
			
				p.addAnswer(3, "Two neighboring plants touch each other, allowing viruses present in one plant to infect the other plant.",
				false,
				"No. This is an example of horizontal transmission.");
			
				p.addAnswer(4, "An infected plant produces seeds that contain the virus, giving rise to infected progeny.",
				true,
				"Correct. Vertical transmission refers to the spread of a virus from parent to offspring.");
			
				p.addAnswer(5, "all of the above",
				false,
				"No. Only one of the choices represents vertical transmission.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335276;


		
		

		
			
			p.question = "Plant viruses spread throughout the plant by way of _______. (<script type=\"text/javascript\">ebook(\'1903\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "chloroplasts",
				false,
				"No. Chloroplasts generally stay within one plant cell, so they would not help a virus spread through a plant.");
			
				p.addAnswer(2, "plasmodesmata",
				true,
				"Correct. Plasmodesmata connect the cytoplasm of different cells and allow nutrients and fluids to move throughout the plant. Viruses can spread through these connections.");
			
				p.addAnswer(3, "central vacuoles",
				false,
				"No. The central vacuole is confined to a single cell.");
			
				p.addAnswer(4, "the lymphatic system",
				false,
				"No. Plants do not have a lymphatic system");
			
				p.addAnswer(5, "vertical transmission",
				false,
				"No. Vertical transmission refers to the spread of a virus by way of infected seeds.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335277;


		
		

		
			
			p.question = "Circular RNA molecules that function like a virus in plants are termed _____. (<script type=\"text/javascript\">ebook(\'1903\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "rhabdovirus",
				false,
				"No. Single-stranded RNA is the genetic material of these viruses.");
			
				p.addAnswer(2, "viroid",
				true,
				"Correct. Viroids are tiny molecules of circular RNA that infect plants.");
			
				p.addAnswer(3, "retrovirus",
				false,
				"No. Retroviruses are viruses.");
			
				p.addAnswer(4, "prion",
				false,
				"No. Prions are proteins.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335278;


		
		

		
			
			p.question = "Prions are _____ that are thought to cause disease by _____. (<script type=\"text/javascript\">ebook(\'1903\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "abnormally shaped proteins; inducing similar but normally shaped proteins in the brain to adopt the abnormal form",
				true,
				"Correct. The abnormally shaped proteins are thought to clump together, causing microscopic holes in the brain that are ultimately fatal.");
			
				p.addAnswer(2, "RNA molecules; encoding toxic proteins",
				false,
				"No. Prions are proteins.");
			
				p.addAnswer(3, "mutant DNA molecules; encoding toxic proteins",
				false,
				"No. Prions are proteins.");
			
				p.addAnswer(4, "an abnormal type of capsid; dramatically enhancing the rate of viral infection",
				false,
				"No. Prions are not viral proteins.");
			
				p.addAnswer(5, "DNA molecules; jumping around the genome and mutating genes",
				false,
				"No. Prions are proteins. \"Jumping\" DNA molecules are transposons.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

