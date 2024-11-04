

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "6: A Tour of the Cell > Practice Test";
	ak.quiz_loc_with_commas = "6: A Tour of the Cell, Practice Test";
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
		
		p.id = 334338;


		
		

		
			
			p.question = "Which of the following is the simplest collection of matter that can live? <script type=\"text/javascript\">ebook(\'06OV\',\'quiz\')</script>";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "cell",
				true,
				"Correct.");
			
				p.addAnswer(2, "tissue",
				false,
				"No. Tissues are made of these most fundamental units.");
			
				p.addAnswer(3, "organ",
				false,
				"No. Organs are made of tissues, that in turn are made of these most fundamental units.");
			
				p.addAnswer(4, "molecules",
				false,
				"No. Molecules are not alive.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the choices above is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334339;


		
		

		
			
			p.question = "A researcher wants to film the movement of chromosomes during cell division. Which type of microscope should he choose and why is it the best choice? (<script type=\"text/javascript\">ebook(\'0601\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "light microscope, because of its high resolving power",
				false,
				"No. On the basis of resolving power, light microscopes are relatively poor compared with electron microscopes.");
			
				p.addAnswer(2, "transmission electron microscope, because of its high magnifying power",
				false,
				"No. In all types of electron microscopy, preparation of the samples for microscopy kills the cells.");
			
				p.addAnswer(3, "scanning electron microscope, because of its ability to visualize the surface of subcellular objects.",
				false,
				"No. In all types of electron microscopy, preparation of the samples for microscopy kills the cells.");
			
				p.addAnswer(4, "transmission electron microscope, because of its high resolving power",
				false,
				"No. In all types of electron microscopy, preparation of the samples for microscopy kills the cells.");
			
				p.addAnswer(5, "light microscope, because the specimen is alive",
				true,
				"Correct. Although the resolution of the light microscope is far less than electron microscopes, light microscopy is the only technique that permits one to observe living cells.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334340;


		
		

		
			
			p.question = "Cell fractionation _____. (<script type=\"text/javascript\">ebook(\'0601\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "results in the disruption of the cells and their organelles",
				true,
				"Correct. The organelles are usually separated by centrifugation.");
			
				p.addAnswer(2, "requires the use of a scanning electron microscope",
				false,
				"No. Although the isolated components may be identified by SEM, microscopy is not part of the normal process.");
			
				p.addAnswer(3, "uses strong acids to break apart cells",
				false,
				"No. Strong acids would likely destroy most organelles.");
			
				p.addAnswer(4, "is no longer used in modern cell biology",
				false,
				"No. Cell fractionization is still commonly used.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the statements is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334341;


		
		

		
			
			p.question = "The average wavelength of visible light is about 550 nanometers (or 0.5 micrometers). Which of the following cellular structures is <b>unlikely</b> to be resolved with a light microscope? (<script type=\"text/javascript\">ebook(\'0601\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the nucleus, which is typically about 5 micrometers in diameter",
				false,
				"No. The dimensions of the nucleus are larger than the wavelength of light, so it can be resolved with a light microscope.");
			
				p.addAnswer(2, "chromosomes in the nucleus during cell division",
				false,
				"No. Chromosomes are about the same length as the nucleus, so they can be resolved with a light microscope.");
			
				p.addAnswer(3, "nuclear pore complexes (100 nanometers in diameter) on the nuclear membrane",
				true,
				"Correct. The dimensions of the core complex are smaller than the wavelength of visible light and thus cannot be resolved with a light microscope.");
			
				p.addAnswer(4, "a typical bacterial cell, which is between 0.5 and 2.0 micrometers in diameter",
				false,
				"No. Most bacteria are larger than the wavelength of visible light and thus can be resolved with a light microscope.");
			
				p.addAnswer(5, "a typical eukaryotic cell, which is between 10 and 100 micrometers in diameter",
				false,
				"No. The size of a typical eukaryotic cell is much larger than the wavelength of visible light and can be easily resolved with a light microscope.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334342;


		
		

		
			
			p.question = "Consider two cells with the same volume but with very different surface areas due to differences in their shapes. The cell with the larger surface area is likely to _____. (<script type=\"text/javascript\">ebook(\'0602\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "have a very high metabolic rate",
				false,
				"No. High metabolic rates are determined by what happens inside the cell, not by the shape of the cell.");
			
				p.addAnswer(2, "be buried deep in the interior of an organism",
				false,
				"No. Cells with high surface-to-volume ratios are distinguished by their function, not their location within an organism.");
			
				p.addAnswer(3, "be involved in the rapid uptake of compounds from the cell\'s environment",
				true,
				"Correct. The high surface area is likely to be associated with high transport rates of compounds across the plasma membrane. The greater the surface area, the greater the potential for transport.");
			
				p.addAnswer(4, "be a prokaryotic cell",
				false,
				"No. Prokaryotic cells are distinguished by their lack of organelles, not their surface-to-volume ratio.");
			
				p.addAnswer(5, "be nearly spherical in shape",
				false,
				"No. For two cells of the same volume, a cell that is spherical will have a smaller surface area than a cell with a convoluted shape.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334343;


		
		

		
			
			p.question = "Which of the following are likely to limit the maximum size of a cell? (<script type=\"text/javascript\">ebook(\'0602\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the time it takes a molecule to diffuse across a cell",
				false,
				"No. Although it is true that diffusion time increases with cell size, this is not the only correct answer.");
			
				p.addAnswer(2, "the cell\'s surface-to-volume ratio",
				false,
				"No. Although it is true that surface-to-volume ratios decrease as cell size increases, this is not the only correct answer.");
			
				p.addAnswer(3, "the shape of the cell",
				false,
				"No. Although it is true that flat cells have a greater surface-to-volume ratio than more rounded cells, this is not the only correct answer.");
			
				p.addAnswer(4, "All of the choices are correct.",
				true,
				"Correct.");
			
				p.addAnswer(5, "None of the choices are correct.",
				false,
				"No. The first three choices are correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334344;


		
		

		
			
			p.question = "Which of the following structures is found in eukaryotic but not prokaryotic cells? (<script type=\"text/javascript\">ebook(\'0602\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "cytosol",
				false,
				"No. In prokaryotic cells, all of the volume enclosed by the plasma membrane is cytosol.");
			
				p.addAnswer(2, "plasma membrane",
				false,
				"No. All cells, prokaryotic and eukaryotic, have plasma membranes.");
			
				p.addAnswer(3, "mitochondria",
				true,
				"Correct. Only eukaryotic cells have membranous organelles such as mitochondria.");
			
				p.addAnswer(4, "ribosomes",
				false,
				"No. Ribosomes are required for protein synthesis and are present in prokaryotic and eukaryotic cells.");
			
				p.addAnswer(5, "RNA",
				false,
				"No. All living cells contain RNA.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334345;


		
		

		
			
			p.question = "A substance moving from outside the cell into the cytoplasm must pass through _____. (<script type=\"text/javascript\">ebook(\'0602\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "a microtubule",
				false,
				"No. A microtubule is not a tunnel connecting the inside and the outside of the cell. It is a part of the cytoskeleton.");
			
				p.addAnswer(2, "several different organelle membranes",
				false,
				"No. There is only a single membrane that separates the outside of the cell from its cytoplasm.");
			
				p.addAnswer(3, "a ribosome",
				false,
				"No. Ribosomes are sites where protein synthesis occurs.");
			
				p.addAnswer(4, "the nucleus",
				false,
				"No. The nucleus is an organelle that is completely enclosed in the cytoplasm of eukaryotic cells.");
			
				p.addAnswer(5, "the plasma membrane",
				true,
				"Correct. The plasma membrane defines the boundary between the cytoplasm and the outside of the cell.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334346;


		
		

		
			
			p.question = "In terms of cellular function, what is the <b>most important</b> difference between prokaryotic and eukaryotic cells? (<script type=\"text/javascript\">ebook(\'0602\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Only eukaryotic cells can synthesize proteins but prokaryotic cells cannot.",
				false,
				"No. Prokaryotic and eukaryotic cells contain the DNA that encodes proteins and the ribosomes that make them.");
			
				p.addAnswer(2, "Only eukaryotic cells have DNA.",
				false,
				"No. Although prokaryotic cells lack nuclei, they still contain chromosomes made of DNA that are capable of encoding all of the cells\' functions.");
			
				p.addAnswer(3, "Compartmentalization of the cytoplasm by membrane-bounded organelles only occurs in eukaryotic cells.",
				true,
				"Correct. The presence of membrane-bounded organelles in eukaryotes permits cellular functions to occur in specialized, isolated compartments.");
			
				p.addAnswer(4, "Eukaryotic cells have a plasma membrane and prokaryotic cells do not.",
				false,
				"No. Prokaryotic and eukaryotic cells have a plasma membrane.");
			
				p.addAnswer(5, "Eukaryotic cells are larger than prokaryotic cells.",
				false,
				"No. Eukaryotic cells are typically larger than prokaryotic cells, but size does not affect the function of most cells.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334347;


		
		

		
			
			p.question = "Bacterial cells are prokaryotic; unlike a typical eukaryotic cell they _____. (<script type=\"text/javascript\">ebook(\'0602\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "lack chromosomes",
				false,
				"No. All cells contain DNA in the form of chromosomes.");
			
				p.addAnswer(2, "have a smaller nucleus",
				false,
				"No. Prokaryotic cells do not have a nucleus, although they do contain chromosomes in the nucleoid region.");
			
				p.addAnswer(3, "lack a plasma membrane",
				false,
				"No. All cells have a plasma membrane.");
			
				p.addAnswer(4, "have no membrane-bounded organelles in their cytoplasm",
				true,
				"Correct. Prokaryotic cells have no membrane-bounded organelles.");
			
				p.addAnswer(5, "have no ribosomes",
				false,
				"No. Both prokaryotic and eukaryotic cells contain ribosomes for protein synthesis.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334348;


		
		

		
			
			p.question = "Which of the following features do prokaryotes and eukaryotes have in common? (<script type=\"text/javascript\">ebook(\'0602\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "mitochondria, cytoplasm, plasma membrane",
				false,
				"No. Prokaryotes lack mitochondria.");
			
				p.addAnswer(2, "ribosomes, plasma membrane, cytoplasm",
				true,
				"Correct.");
			
				p.addAnswer(3, "nucleus, plasma membrane, ribosomes",
				false,
				"No. Prokaryotes are named for their lack of a nucleus.");
			
				p.addAnswer(4, "mitochondria, ribosomes, cytoplasm",
				false,
				"No. Prokaryotes lack mitochondria.");
			
				p.addAnswer(5, "ribosomes, nucleus, plasma membrane",
				false,
				"No. Prokaryotes are named for their lack of a nucleus.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334349;


		
		

		
			
			p.question = "A certain cell has ribosomes and DNA, and is surrounded by a membrane. But there are no mitochondria present. Based on this information, this cell is most likely _____. (<script type=\"text/javascript\">ebook(\'0602\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "a cell from a pine tree",
				false,
				"No. The above description is that of a prokaryotic cell; all plant cells are eukaryotic.");
			
				p.addAnswer(2, "a grasshopper cell",
				false,
				"No. The above description is that of a prokaryotic<b> </b>cell; insects, like all animals, are composed of eukaryotic cells.");
			
				p.addAnswer(3, "a yeast (fungus) cell",
				false,
				"No. The above description is that of a prokaryotic<b> </b>cell; yeast cells are eukaryotic.");
			
				p.addAnswer(4, "a bacterium",
				true,
				"Correct. Mitochondria are absent in a prokaryotic cell.");
			
				p.addAnswer(5, "The description above could fit any of the cells listed in the answers.",
				false,
				"No. There is only one correct answer. Of the four choices, three are eukaryotic cells, and the fourth is prokaryotic.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334350;


		
		

		
			
			p.question = "What is the functional connection between the nucleolus, nuclear pores, and the nuclear membrane?\n (<script type=\"text/javascript\">ebook(\'0603\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Subunits of ribosomes are assembled in the nucleolus and pass through the nuclear membrane via the nuclear pores.",
				true,
				"Correct. Proteins and ribosomal RNA are assembled into ribosomal subunits in the nucleolus.");
			
				p.addAnswer(2, "The nuclear pores are connections between the nuclear membrane and the endoplasmic reticulum that permit ribosomes to assemble on the surface of the ER.",
				false,
				"No. Nuclear pores are connections between the interior and exterior of the nucleus, not with the ER.");
			
				p.addAnswer(3, "The nucleolus contains messenger RNA (mRNA), which crosses the nuclear envelope through the nuclear pores.",
				false,
				"No. The nucleolus does not contain mRNA, but mRNA does leave the nucleus through the nuclear pores.");
			
				p.addAnswer(4, "Endoplasmic reticulum membrane is produced in the nucleolus and leaves the nucleus through the nuclear pores.",
				false,
				"No. The nucleolus is not a site of membrane synthesis for the ER.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. There is a correct answer among the choices.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334351;


		
		

		
			
			p.question = "If we used a light microscope to examine an active cell, involved in extensive protein production, we would expect that chromosomes would appear as _____. (<script type=\"text/javascript\">ebook(\'0603\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "a diffuse mass",
				true,
				"Correct. Chromosomes typically coil up and appear as dense strands as a cell prepares for mitosis or meiosis.");
			
				p.addAnswer(2, "very thin but dense bands",
				false,
				"No. During active protein synthesis, when mRNA is produced, chromosomes appear diffuse.");
			
				p.addAnswer(3, "very thick, very light bands",
				false,
				"No. During active protein synthesis, when mRNA is produced, chromosomes appear diffuse.");
			
				p.addAnswer(4, "very thick, very dense, and very dark bands",
				false,
				"No. During active protein synthesis, when mRNA is produced, chromosomes appear diffuse.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334352;


		
		

		
			
			p.question = "Of the following organelles associated with the endomembrane system, which group is primarily involved in synthesizing molecules needed by the cell?\n (<script type=\"text/javascript\">ebook(\'0604\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "lysosome, vacuole, ribosome",
				false,
				"No. Lysosomes contain digestive enzymes, and vacuoles function primarily in storage.");
			
				p.addAnswer(2, "ribosome, rough endoplasmic reticulum, smooth endoplasmic reticulum",
				true,
				"Correct. Each of these structures is capable of synthesizing molecules needed by cells.");
			
				p.addAnswer(3, "vacuole, rough endoplasmic reticulum, smooth endoplasmic reticulum",
				false,
				"No. Vacuoles function primarily in storage.");
			
				p.addAnswer(4, "smooth endoplasmic reticulum, ribosome, vacuole",
				false,
				"No. Vacuoles function primarily in storage.");
			
				p.addAnswer(5, "rough endoplasmic reticulum, lysosome, vacuole",
				false,
				"No. Lysosomes contain digestive enzymes, and vacuoles function primarily in storage.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334353;


		
		

		
			
			p.question = "Which one of the following organelles is <b>unlikely</b> to show enhanced abundance in the pancreatic cells that secrete large amounts of digestive enzymes? (<script type=\"text/javascript\">ebook(\'0604\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "rough endoplasmic reticulum",
				false,
				"No. The ribosomes of rough ER are the place where proteins that are secreted are synthesized; therefore, they would be abundant in cells secreting proteins.");
			
				p.addAnswer(2, "free cytoplasmic ribosomes",
				true,
				"Correct. Secreted proteins are not synthesized on free cytoplasmic ribosomes; therefore, these ribosomes would not show enhanced abundance.");
			
				p.addAnswer(3, "Golgi apparatus",
				false,
				"No. Secreted proteins are modified and sorted in the Golgi, so secretory cells are likely to contain more Golgi.");
			
				p.addAnswer(4, "transport vesicles",
				false,
				"No. Transport vesicles are involved in moving secreted proteins between the rough ER, Golgi, and plasma membrane, so they would be more abundant in secretory cells.");
			
				p.addAnswer(5, "All of the above will increase in pancreatic cells secreting digestive enzymes.",
				false,
				"No. One of the above will not increase in cells secreting a lot of proteins.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334354;


		
		

		
			
			p.question = "A plant was grown in a test tube containing radioactive nucleotides, the molecules from which DNA is built. Later examination of dividing cells in the plant showed the majority of the radioactivity to be concentrated in the _____. (<script type=\"text/javascript\">ebook(\'0604\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "rough endoplasmic reticulum",
				false,
				"No. The rough ER is the site of protein synthesis for those proteins destined for secretion; it contains no DNA.");
			
				p.addAnswer(2, "lysosome",
				false,
				"No. Lysosomes function in the breakdown of cellular components and do not contain DNA.");
			
				p.addAnswer(3, "smooth endoplasmic reticulum",
				false,
				"No. The smooth ER is primarily involved in lipid synthesis; it contains no DNA.");
			
				p.addAnswer(4, "central vacuole",
				false,
				"No. Vacuoles are generally storage organelles and contain no DNA.");
			
				p.addAnswer(5, "nucleus",
				true,
				"Correct. DNA, in association with protein, is stored as chromatin within the nucleus of a eukaryotic cell.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334355;


		
		

		
			
			p.question = "Which of the following categories best describes the function of the rough endoplasmic reticulum?\n (<script type=\"text/javascript\">ebook(\'0604\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "breakdown of complex foods",
				false,
				"No. Organelles such as lysosomes fit in this category.");
			
				p.addAnswer(2, "energy processing",
				false,
				"No. Mitochondria and chloroplasts are energy-processing organelles.");
			
				p.addAnswer(3, "manufacturing",
				true,
				"Correct. The rough endoplasmic reticulum is involved in the manufacture of proteins for the endomembrane system.");
			
				p.addAnswer(4, "structural support of cells",
				false,
				"No. This category involves organelles such as those found in the cytoskeleton and cell walls.");
			
				p.addAnswer(5, "information storage",
				false,
				"No. This is a primary function of the nucleus.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334356;


		
		

		
			
			p.question = "You would expect a cell with an extensive Golgi apparatus to _____. (<script type=\"text/javascript\">ebook(\'0604\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "make a lot of ATP",
				false,
				"No. The mitochondria and chloroplasts are the primary sites of ATP production.");
			
				p.addAnswer(2, "secrete a lot of protein",
				true,
				"Correct. The Golgi apparatus modifies and sorts the lipids and proteins produced in the ER. Cells that secrete a lot of material require an extensive Golgi apparatus.");
			
				p.addAnswer(3, "move rapidly",
				false,
				"No. It is the cytoskeleton that is primarily involved in cell motility.");
			
				p.addAnswer(4, "perform photosynthesis",
				false,
				"No. Chloroplasts are associated with photosynthesis.");
			
				p.addAnswer(5, "store large quantities of ions",
				false,
				"No. Vacuoles are the organelles that are primarily involved with ion storage.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334357;


		
		

		
			
			p.question = "A researcher made an interesting observation about a protein made by the rough endoplasmic reticulum and eventually used to build a cell\'s plasma membrane. The protein in the plasma membrane was actually slightly different from the protein made in the ER. The protein was probably altered in the _____.\n (<script type=\"text/javascript\">ebook(\'0604\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Golgi apparatus",
				true,
				"Correct. Vesicles carrying proteins from the rough ER fuse with the Golgi apparatus, where the proteins may be altered.");
			
				p.addAnswer(2, "smooth endoplasmic reticulum",
				false,
				"No. The smooth ER is the primary site where the cell produces lipids.");
			
				p.addAnswer(3, "plasma membrane",
				false,
				"No. Although the protein ends up in the plasma membrane, any modifications were most likely made before the protein arrived at the plasma membrane.");
			
				p.addAnswer(4, "transport vesicles",
				false,
				"No. Transport vesicles function to move membrane and proteins between the organelles of the endomembrane system.");
			
				p.addAnswer(5, "rough endoplasmic reticulum",
				false,
				"No. The protein was originally synthesized on ribosomes of the rough ER, but modification occurs elsewhere.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334358;


		
		

		
			
			p.question = "Consider a protein that is made in the rough endoplasmic reticulum. You observe that when the synthesis of the protein is completed, the protein is located in the ER membrane. Where else in the cell might this protein be found? (<script type=\"text/javascript\">ebook(\'0604\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "in the aqueous interior of a lysosome functioning as a digestive enzyme",
				false,
				"No. Proteins that are inserted into the rough ER membrane are membrane proteins, not soluble proteins.");
			
				p.addAnswer(2, "in the cytoplasm, functioning as an enzyme in carbohydrate synthesis",
				false,
				"No. Cytoplasmic proteins are synthesized on free cytoplasmic ribosomes.");
			
				p.addAnswer(3, "embedded in the plasma membrane functioning in the transport of molecules into the cell",
				true,
				"Correct. This is the only answer where the protein is a membrane protein.");
			
				p.addAnswer(4, "in the internal space of the Golgi apparatus, being modified before the protein is excreted",
				false,
				"No. Proteins that are inserted into the rough ER membrane are membrane proteins, not soluble proteins to be excreted.");
			
				p.addAnswer(5, "in a mitochondrion functioning in ATP synthesis",
				false,
				"No. Mitochondria are not part of the endomembrane system.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334359;


		
		

		
			
			p.question = "Which of the following sequences represents the order in which a protein made in the rough endoplasmic reticulum might move through the endomembrane system? (<script type=\"text/javascript\">ebook(\'0604\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "lysosome; plasma membrane",
				false,
				"No. Materials from the ER do not go to lysosomes without going to another organelle first.");
			
				p.addAnswer(2, "Golgi apparatus; mitochondria",
				false,
				"No. Mitochondria are not part of the endomembrane system.");
			
				p.addAnswer(3, "Golgi apparatus; vacuole",
				true,
				"Correct. Proteins of the endomembrane system are synthesized in the rough ER, modified and sorted in the Golgi, and then transported to other organelles of the endomembrane system such as vacuoles.");
			
				p.addAnswer(4, "plasma membrane; nuclear envelope",
				false,
				"No. Proteins made in the rough ER do not move to the plasma membrane without first passing through the Golgi. Also, proteins do not move from the plasma membrane to the nuclear envelope");
			
				p.addAnswer(5, "nuclear envelope; lysosome",
				false,
				"No. Although proteins can move from the rough ER directly to the nuclear envelope (because they are continuous membranes), proteins do not move from the nuclear envelope to lysosomes.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334360;


		
		

		
			
			p.question = "Which of the following is (are) most likely to be involved in the process of producing proteins for a chloroplast or mitochondrion, neither of which is part of the endomembrane system? (<script type=\"text/javascript\">ebook(\'0604\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "transport vesicles",
				false,
				"No. Transport vesicles move membrane and protein among components of the endomembrane system.");
			
				p.addAnswer(2, "free cytoplasmic ribosomes",
				true,
				"Correct. This is the only answer that is not part of the endomembrane system. Most proteins that function in chloroplasts and mitochondria are made on free cytoplasmic ribosomes and then imported into their respective organelles.");
			
				p.addAnswer(3, "the Golgi apparatus",
				false,
				"No. The Golgi apparatus is part of the endomembrane system; chloroplasts and mitochondria are not.");
			
				p.addAnswer(4, "rough endoplasmic reticulum",
				false,
				"No. The rough ER is part of the endomembrane system; chloroplasts and mitochondria are not.");
			
				p.addAnswer(5, "smooth endoplasmic reticulum",
				false,
				"No. The smooth ER is part of the endomembrane system; chloroplasts and mitochondria are not.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334361;


		
		

		
			
			p.question = "A protein that ultimately functions in the plasma membrane of a cell is most likely to have been synthesized _____. (<script type=\"text/javascript\">ebook(\'0604\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "on ribosomes on the nuclear envelope",
				false,
				"No. Most of the proteins synthesized on ribosomes on the nuclear envelope remain in the nuclear envelope.");
			
				p.addAnswer(2, "on free cytoplasmic ribosomes",
				false,
				"No. Proteins made on free cytoplasmic ribosomes do not end up in the membranes of the endomembrane system.");
			
				p.addAnswer(3, "in the rough endoplasmic reticulum",
				true,
				"Correct. All of the membrane proteins of the endomembrane systems are made in the rough ER.");
			
				p.addAnswer(4, "in the mitochondria",
				false,
				"No. Proteins synthesized on mitochondrial ribosomes remain in the mitochondria.");
			
				p.addAnswer(5, "in the plasma membrane",
				false,
				"No. Proteins that function in the plasma membrane are synthesized in the same place as all of the other membranes of the endomembrane system.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334362;


		
		

		
			
			p.question = "Which one of the following five membranes is most likely to have a lipid composition that is distinct from the other four? (<script type=\"text/javascript\">ebook(\'0605\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "endoplasmic reticulum",
				false,
				"No. The ER is the source of lipids for all membranes in the endomembrane system");
			
				p.addAnswer(2, "plasma membrane",
				false,
				"No. The plasma membrane is part of the endomembrane system and is composed of lipids made in the ER.");
			
				p.addAnswer(3, "mitochondrial outer membrane",
				true,
				"Correct. The mitochondria are not part of the endomembrane system and must synthesize their own lipids.");
			
				p.addAnswer(4, "lysosome membrane",
				false,
				"No. The membrane of the lysosome is part of the endomembrane system and is composed of lipids made in the ER.");
			
				p.addAnswer(5, "Golgi apparatus",
				false,
				"No. The membranes of the Golgi apparatus are part of the endomembrane system and are composed of lipids made in the ER.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334363;


		
		

		
			
			p.question = "Chloroplasts and mitochondria are thought to be of prokaryotic origin. One piece of evidence that supports this hypothesis is that these organelles contain prokaryotic-like ribosomes. These ribosomes are probably most similar to ribosomes found ______.\n (<script type=\"text/javascript\">ebook(\'0605\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "free in the cytoplasm of eukaryotes",
				false,
				"No. The ribosomes in eukaryotic cells are different from those in prokaryotes.");
			
				p.addAnswer(2, "on the rough ER",
				false,
				"No. The ribosomes on the rough ER are eukaryotic; they are different from those in prokaryotes.");
			
				p.addAnswer(3, "in bacterial cells",
				true,
				"Correct. The ribosomes in bacteria are prokaryotic.");
			
				p.addAnswer(4, "The first two answers are correct.",
				false,
				"No. The ribosomes in eukaryotic cells are different from those in prokaryotes.");
			
				p.addAnswer(5, "The first three answers are correct.",
				false,
				"No. Only the third answer is correct. The ribosomes in bacteria are prokaryotic.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334364;


		
		

		
			
			p.question = "Which one of the following statements about chloroplasts and mitochondria is true? (<script type=\"text/javascript\">ebook(\'0605\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Mitochondria but not chloroplasts contain a small amount of DNA.",
				false,
				"No. Both chloroplasts and mitochondria contain small amounts of DNA that encode some of their proteins.");
			
				p.addAnswer(2, "Chloroplasts and mitochondria are components of the endomembrane system.",
				false,
				"No. Neither chloroplasts nor mitochondria are part of the endomembrane system.");
			
				p.addAnswer(3, "Chloroplasts and mitochondria are composed of two separate membranes.",
				false,
				"No. Mitochondria are composed of two membranes, but chloroplasts have three membranes&#8212;two envelope membranes and the internal thylakoid membranes.");
			
				p.addAnswer(4, "Chloroplasts and mitochondria synthesize some of their own proteins.",
				true,
				"Correct. Chloroplasts and mitochondria can synthesize some of their own proteins because they contain DNA and ribosomes.");
			
				p.addAnswer(5, "all of the above",
				false,
				"No. Only one of the choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334365;


		
		

		
			
			p.question = "Which of the following is a possible reason for grouping the peroxisomes with chloroplasts and mitochondria? (<script type=\"text/javascript\">ebook(\'0605\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "They are all involved in ATP synthesis.",
				false,
				"No. Peroxisomes are not involved in ATP synthesis.");
			
				p.addAnswer(2, "They all contain two or more membranes.",
				false,
				"No. Peroxisomes are composed of a single bilayer membrane.");
			
				p.addAnswer(3, "They all contain DNA and make some of their own proteins.",
				false,
				"No. Peroxisomes do not contain any DNA.");
			
				p.addAnswer(4, "They are all part of the plastid family of organelles.",
				false,
				"No. Chloroplasts are part of the plastid family (including amyloplasts, chromoplasts, etc.), but mitochondria and peroxisomes are not.");
			
				p.addAnswer(5, "None of these organelles are part of the endomembrane system.",
				true,
				"Correct. Chloroplasts, mitochondria, and peroxisomes are not part of the endomembrane system.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334366;


		
		

		
			
			p.question = "Which type of cell is most likely to have the most mitochondria? (<script type=\"text/javascript\">ebook(\'0605\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "muscle cells in the legs of a marathon runner",
				true,
				"Correct. Cellular respiration releases energy that cells need to carry out their functions. Active muscle cells need a lot of energy.");
			
				p.addAnswer(2, "photosynthetic cells in the leaves of a tree",
				false,
				"No. Although all cells need mitochondria for energy, the most mitochondria will be found in the cells with the highest energy demand.");
			
				p.addAnswer(3, "bacterial cells that are growing on sugars",
				false,
				"No. Bacteria are prokaryotes and do not have organelles, including mitochondria.");
			
				p.addAnswer(4, "inactive yeast cells that are stored for future use",
				false,
				"No. Although all cells need mitochondria for energy, the most mitochondria will be found in the cells with the highest energy demand.");
			
				p.addAnswer(5, "non-dividing cells in the skin on your finger",
				false,
				"No. Although all cells need mitochondria for energy, the most mitochondria will be found in the cells with the highest energy demand.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334367;


		
		

		
			
			p.question = "Which of the following is/are true? (<script type=\"text/javascript\">ebook(\'0605\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Mitochondria are involved in energy metabolism.",
				false,
				"No. Although mitochondria are the sites of cellular respiration and the production of ATP, this is not the only correct answer.");
			
				p.addAnswer(2, "Mitochondria have more than one membrane.",
				false,
				"No. Although mitochondria<b> </b>do have two membranes, the inner and outer mitochondrial membranes, this is not the only correct answer.");
			
				p.addAnswer(3, "Mitochondria contain DNA and ribosomes.",
				false,
				"No. Although mitochondria<b> </b>are semi-autonomous (they are capable of synthesizing some of their own proteins), this is not the only correct answer.");
			
				p.addAnswer(4, "Mitochondria are independent of the endomembrane system.",
				false,
				"No. Although this is true, this is not the only correct answer.");
			
				p.addAnswer(5, "all of the above",
				true,
				"Correct. Each of the answers correctly describes characteristics of mitochondria.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334368;


		
		

		
			
			p.question = "The observation that chloroplasts and mitochondria each contain their own DNA and synthesize some of the proteins that function in these organelles suggests that chloroplasts and mitochondria ______. (<script type=\"text/javascript\">ebook(\'0605\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "are produced by the nucleus of the cell",
				false,
				"No. The presence of DNA in these organelles is unique to these organelles and not derived from the nucleus.");
			
				p.addAnswer(2, "must divide each time the cell containing them divides",
				true,
				"Correct. The fact that chloroplasts and mitochondria contain DNA that encodes for some of their proteins means that these organelles must divide each time the cell that contains them divides.");
			
				p.addAnswer(3, "are part of the endomembrane system",
				false,
				"No. The presence of DNA is not a characteristic of organelles in the endomembrane system except the nucleus.");
			
				p.addAnswer(4, "are involved in energy metabolism of the cell",
				false,
				"No. Mitochondria and chloroplasts are both involved in energy metabolism, but this is not a consequence of these organelles containing DNA.");
			
				p.addAnswer(5, "contain two or more membranes",
				false,
				"No. Mitochondria and chloroplasts do have two or more membranes, but this is not a consequence of these organelles containing DNA.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334369;


		
		

		
			
			p.question = "Which of the following are possible sites of protein synthesis in a typical eukaryotic cell? (<script type=\"text/javascript\">ebook(\'0605\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the cytoplasm",
				false,
				"No. Proteins can be synthesized on free ribosomes in the cytoplasm, but this is not the only place in the cell where protein synthesis occurs.");
			
				p.addAnswer(2, "the rough endoplasmic reticulum",
				false,
				"No. Proteins can be synthesized on bound ribosomes on the rough ER, but this is not the only place in the cell where protein synthesis occurs.");
			
				p.addAnswer(3, "in mitochondria",
				false,
				"Some proteins that function in the mitochondria can be synthesized on ribosomes in the mitochondria, but this is not the only place in a cell where protein synthesis occurs.");
			
				p.addAnswer(4, "The first two answers are correct.",
				false,
				"No. This is not the best answer to this question.");
			
				p.addAnswer(5, "The first three answers are correct.",
				true,
				"Correct. Ribosomes are present in the cytoplasm, on the rough ER, and in mitochondria (and chloroplasts).");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334370;


		
		

		
			
			p.question = "Which of the following organelles might be found inside other organelles? (<script type=\"text/javascript\">ebook(\'0605\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the nucleolus",
				false,
				"No. The nucleolus is not an organelle, although it does occur inside of the nucleus.");
			
				p.addAnswer(2, "mitochondria",
				false,
				"No. Mitochondria are organelles that are found only in the cytoplasm, not inside other organelles.");
			
				p.addAnswer(3, "ribosomes",
				true,
				"Correct. Ribosomes are nonmembranous organelles that are found in the cytoplasm but also in mitochondria and chloroplasts.");
			
				p.addAnswer(4, "transport vesicles",
				false,
				"No. Transport vesicles are not organelles even though they do transport membrane components between organelles of the endomembrane system.");
			
				p.addAnswer(5, "No organelles are found inside of other organelles.",
				false,
				"No. One of the organelles listed above is found inside of other organelles.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334371;


		
		

		
			
			p.question = "Which of the following cellular processes or characteristics is/are related to the cytoskeleton? (<script type=\"text/javascript\">ebook(\'0606\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "transmission of information from the cell surface to the interior of the cell",
				false,
				"No. Although correct, this is not the only correct answer.");
			
				p.addAnswer(2, "movement of the chromosomes during cell division",
				false,
				"No. Although correct, this is not the only correct answer.");
			
				p.addAnswer(3, "movement of cilia or flagella",
				false,
				"No. Although correct, this is not the only correct answer.");
			
				p.addAnswer(4, "contraction of muscle cells",
				false,
				"No. Although correct, this is not the only correct answer.");
			
				p.addAnswer(5, "all of the above",
				true,
				"Correct. All of the answers correctly describe a function of the cytoskeleton.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334372;


		
		

		
			
			p.question = "Which of following structures are found in plant cells and animal cells? (<script type=\"text/javascript\">ebook(\'0606\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "cell walls",
				false,
				"No. Cell walls exist in plant cells but not animal cells.");
			
				p.addAnswer(2, "chloroplasts",
				false,
				"No. Chloroplasts exist in plant cells but not animal cells.");
			
				p.addAnswer(3, "central vacuoles",
				false,
				"No. Plant cells have central vacuoles, but animal cells do not.");
			
				p.addAnswer(4, "a cytoskeleton",
				true,
				"Correct. All plant cells and animal cells have a cytoskeleton.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the answers is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334373;


		
		

		
			
			p.question = "Which statement about the cytoskeleton is true? (<script type=\"text/javascript\">ebook(\'0606\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Intermediate filaments are hollow tubes of protein that provide structural support.",
				false,
				"No. Microtubules are relatively rigid structures that provide support in the cell.");
			
				p.addAnswer(2, "Microtubules are chains of proteins that resist stretching.",
				false,
				"No. Microfilaments are polymers of the protein actin that are quite strong and resist breaking under tension.");
			
				p.addAnswer(3, "Microfilaments are more permanent structures in cells compared to intermediate filaments and microtubules.",
				false,
				"No. Intermediate filaments are more permanent in their structure than microfilaments and microtubules.");
			
				p.addAnswer(4, "Components of the cytoskeleton are often involved with movement of organelles within the cytoplasm.",
				true,
				"Correct. The interaction of motor proteins with the cytoskeleton is responsible for the movement of organelles in cells.");
			
				p.addAnswer(5, "Plant cells lack a cytoskeleton because they have a rigid cell wall.",
				false,
				"No. The cytoskeleton is important in many other processes besides maintaining cell shape.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334374;


		
		

		
			
			p.question = "Cilia and flagella move due to the interaction of the cytoskeleton with which of the following? (<script type=\"text/javascript\">ebook(\'0606\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "actin",
				false,
				"No. Actin is a protein that is a major component of microfilaments.");
			
				p.addAnswer(2, "pseudopodia",
				false,
				"No. Pseudopodia are transient cell structures involved in amoeboid movement.");
			
				p.addAnswer(3, "mitochondria",
				false,
				"No. Mitochondria supply the energy for motion in the cytoskeleton, but they do not cause the motion.");
			
				p.addAnswer(4, "tubulin",
				false,
				"No. Tubulin is the major protein component of microtubules.");
			
				p.addAnswer(5, "motor proteins",
				true,
				"Correct. Motor proteins, such as dynein, use energy to move parts of the cytoskeleton.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334375;


		
		

		
			
			p.question = "Where would you expect to find proteins involved with movement of structures <b>within</b> a cell?\n (<script type=\"text/javascript\">ebook(\'0606\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "muscles",
				false,
				"No. Muscles are not components of cells; rather, muscles are composed of cells.");
			
				p.addAnswer(2, "cytoskeleton",
				true,
				"Correct. Movement of organelles and vesicles within cells is accomplished by the cytoskeleton.");
			
				p.addAnswer(3, "transport vesicles moving from the ER to the Golgi",
				false,
				"No. Although these vesicles move within the cell, proteins in the vesicles do not cause the motion.");
			
				p.addAnswer(4, "plasma membrane",
				false,
				"No. Although the plasma membrane can change shape (as in amoeboid motion), proteins in the plasma membrane do not cause the motion.");
			
				p.addAnswer(5, "ribosomes",
				false,
				"No. Ribosomes can move within a cell (between the cytoplasm and the rough ER, for example), but proteins in the ribosome do not cause this motion.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334376;


		
		

		
			
			p.question = "Basal bodies are most closely associated with which one of the following cell components? (<script type=\"text/javascript\">ebook(\'0606\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "nucleus",
				false,
				"No. Basal bodies are made up of components of the cytoskeleton and are not associated with the nucleus.");
			
				p.addAnswer(2, "mitochondria",
				false,
				"No. Basal bodies are made up of components of the cytoskeleton and are not associated with the mitochondria.");
			
				p.addAnswer(3, "cilia",
				true,
				"Correct. The microtubule assembly of a cilium or flagellum is anchored in the cell by a basal body.");
			
				p.addAnswer(4, "the central vacuole",
				false,
				"No. Basal bodies are made up of components of the cytoskeleton and are not associated with the vacuole.");
			
				p.addAnswer(5, "Golgi apparatus",
				false,
				"No. Basal bodies are made up of components of the cytoskeleton and are not associated with the Golgi.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334377;


		
		

		
			
			p.question = "Which of the following organelles lack membranes as part of their structure? (<script type=\"text/javascript\">ebook(\'0606\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "vacuoles",
				false,
				"No. Vacuoles are surrounded by membranes.");
			
				p.addAnswer(2, "mitochondria",
				false,
				"No. Mitochondria are surrounded by membranes.");
			
				p.addAnswer(3, "microfilaments",
				true,
				"Correct. Microfilaments (part of the cytoskeleton) are organelles that are not surrounded by membranes.");
			
				p.addAnswer(4, "nucleus",
				false,
				"No. A nucleus is surrounded by membranes.");
			
				p.addAnswer(5, "All of the choices are surrounded by membranes.",
				false,
				"No. One of the choices is a part of a cell not surrounded by membranes.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334378;


		
		

		
			
			p.question = "Dye injected into a plant cell might be able to enter an adjacent cell through _____. (<script type=\"text/javascript\">ebook(\'0607\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "a tight junction",
				false,
				"No. Tight junctions do not connect the cytoplasm of adjacent cells. Also, this type of junction does not occur in plants.");
			
				p.addAnswer(2, "a microtubule",
				false,
				"No. Although microtubules are hollow, they are a component of the cytoskeleton and do not connect the cytoplasm of adjacent cells.");
			
				p.addAnswer(3, "a cell wall",
				false,
				"No. The cell wall is an extracellular structure and does not connect the cytoplasm of adjacent cells.");
			
				p.addAnswer(4, "plasmodesmata",
				true,
				"Correct. The cell walls of plant cells contain numerous channels, with strands of cytoplasm passing through them and connecting one cell\'s cytoplasm to that of an adjacent cell.");
			
				p.addAnswer(5, "a gap junction",
				false,
				"No. Gap junctions do not occur in plants; however, when present in animal cells they do form cytoplasmic channels between adjacent cells.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334379;


		
		

		
			
			p.question = "Which of the following correctly compares the extracellular matrix (ECM) of animal cells to cell walls of plant cells? (<script type=\"text/javascript\">ebook(\'0607\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Both the ECM and the plant cell wall are composed of varying mixtures of proteins and carbohydrates.",
				true,
				"Correct. The structures that are external to most cells are composed of proteins and carbohydrates.");
			
				p.addAnswer(2, "The structures that are external to the plasma membrane are essentially independent of the plasma membrane in both groups.",
				false,
				"No. Both the ECM and plant cell walls are connected to proteins that are embedded in the plasma membrane.");
			
				p.addAnswer(3, "The ECM and plant cell walls completely cover the plasma membrane of their respective cells.",
				false,
				"No. There are direct cytoplasmic connections between adjacent cells (gap junctions and plasmodesmata) that pass through the ECM and plant cell walls, respectively.");
			
				p.addAnswer(4, "Both the ECM and plant cell walls provide rigid structures that determine the shape of their respective cells.",
				false,
				"No. Although plant cell walls can be rigid, animal ECMs can change shape very easily.");
			
				p.addAnswer(5, "Cell walls and ECMs provide for tight contact between adjacent cells.",
				false,
				"No. Although plant cells are essentially glued together by their walls, the ECMs of animal cells permit some cells to move past each other.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334380;


		
		

		
			
			p.question = "Your intestine is lined with individual cells. No fluids leak between these cells from the gut into your body. Why? (<script type=\"text/javascript\">ebook(\'0607\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "The intestinal cells are fused together into one giant cell.",
				false,
				"No. Intestinal cells are not fused together into one giant cell.");
			
				p.addAnswer(2, "The intestinal cells are bound together by plasmodesmata.",
				false,
				"No. Plasmodesmata are not found in animal cells.");
			
				p.addAnswer(3, "The intestinal cells are bound together by tight junctions.",
				true,
				"Correct. The membranes of neighboring cells are actually fused at a tight junction, forming a seal that prevents the leakage of extracellular fluid across the layer of epithelial cells.");
			
				p.addAnswer(4, "The intestinal cells are bound together by gap junctions.",
				false,
				"No. Gap junctions are cytoplasmic connections between adjacent animal cells.");
			
				p.addAnswer(5, "The intestinal cells are bound together by the extracellular matrix.",
				false,
				"No. The extracellular matrix of animal cells does not glue adjacent cells together.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334381;


		
		

		
			
			p.question = "Which of the following statements correctly describes a common characteristic of a plant cell wall and an animal cell extracellular matrix? (<script type=\"text/javascript\">ebook(\'0607\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Both are permeable to water and small solutes.",
				false,
				"No. Although true, this is not the only correct answer.");
			
				p.addAnswer(2, "Both are synthesized in the ER and Golgi apparatus.",
				false,
				"No. Although true, this is not the only correct answer.");
			
				p.addAnswer(3, "Both are composed primarily of carbohydrates.",
				false,
				"No. The ECM of animal cells is primarily glycoproteins&#8212;proteins with small carbohydrates attached.");
			
				p.addAnswer(4, "The first two answers are correct.",
				true,
				"Correct. Both are permeable to water and small solutes and both are produced in the ER and Golgi apparatus.");
			
				p.addAnswer(5, "The first three answers are correct.",
				false,
				"No. The ECM of animal cells is primarily glycoproteins&#8212;proteins with small carbohydrates attached.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334382;


		
		

		
			
			p.question = "The walls of plant cells are largely composed of polysaccharides and proteins that are synthesized ____. (<script type=\"text/javascript\">ebook(\'0607\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "externally to the plasma membrane",
				false,
				"No. There are no ribosomes for protein synthesis outside of the cell.");
			
				p.addAnswer(2, "in the smooth endoplasmic reticulum",
				false,
				"No. The smooth ER is largely the site of lipid biosynthesis for the endomembrane system.");
			
				p.addAnswer(3, "in the Golgi apparatus",
				false,
				"No. Although many of the polysaccharides of the wall are made in the Golgi, there is a more complete answer.");
			
				p.addAnswer(4, "in the rough endoplasmic reticulum and the Golgi apparatus",
				true,
				"Correct. Proteins of the cell wall are made in the rough ER, and the polysaccharides are made in the Golgi.");
			
				p.addAnswer(5, "in the rough endoplasmic reticulum",
				false,
				"No. Although the proteins of the cell wall are made in the rough ER, there is a more complete answer.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

