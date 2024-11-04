

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "BioFlix Quiz > BioFlix (eTutor) Quiz > Meiosis";
	ak.quiz_loc_with_commas = "BioFlix Quiz, BioFlix (eTutor) Quiz, Meiosis";
	ak.quiz_title = "Meiosis";

	
		ak.help_url = "../../placeholders/help_placeholder.html";
	
	ak.essay_total = 0;
	ak.pair_problem_total = 0;
	ak.pair_total = 0;
	ak.problem_total = 5;
	ak.non_essay_total = 5;
	ak.scored_item_total = 5;

	
	
	


	
	ak.copyright_date = "2008";
	ak.brandname = "Pearson Benjamin Cummings";
	ak.legal = "../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.pearsoned.com%2Flegal%2Findex.htm";


	// Loop over all problems
	
	
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 341061;


		
		

		
			
			p.question = "Meiosis starts with a single diploid cell and produces";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "four diploid cells.",
				false,
				"Meiosis produces haploid cells, not diploid cells.");
			
				p.addAnswer(2, "eight haploid cells.",
				false,
				"Meiosis produces four haploid cells, not eight haploid cells.");
			
				p.addAnswer(3, "four haploid cells.",
				true,
				"Correct. Meiosis produces four haploid cells. ");
			
				p.addAnswer(4, "two diploid cells.",
				false,
				"Meiosis produces haploid cells, not diploid cells.");
			
				p.addAnswer(5, "two haploid cells.",
				false,
				"Meiosis produces four haploid cells, not two haploid cells.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 341062;


		
		

		
			
			p.question = "A cell preparing to undergo meiosis duplicates its chromosomes during";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "interphase.",
				true,
				"Correct. Chromosomes are duplicated during interphase.");
			
				p.addAnswer(2, "prophase I.",
				false,
				"Chromosomes are duplicated before prophase I. During prophase I, the duplicated chromosomes condense. In addition, homologous chromosomes stick together in pairs.");
			
				p.addAnswer(3, "metaphase I.",
				false,
				"Chromosomes are duplicated before metaphase I. During metaphase I, homologous chromosomes stick together in pairs in the middle of the cell. ");
			
				p.addAnswer(4, "anaphase I.",
				false,
				"Chromosomes are duplicated before anaphase I. During anaphase I, the homologous chromosomes separate from each other and move toward opposite poles.");
			
				p.addAnswer(5, "meiosis II.",
				false,
				"Chromosomes are duplicated before meiosis II. During meiosis II, the sister chromatids separate and four haploid cells are produced.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 341063;


		
		

		
			
			p.question = "During prophase I of meiosis,";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the homologous chromosomes separate and move towards opposite poles.",
				false,
				"The homologous chromosomes separate and move towards opposite poles during anaphase I.");
			
				p.addAnswer(2, "homologous chromosomes stick together in pairs.",
				true,
				"Correct. Homologous chromosomes stick together in pairs during prophase I.");
			
				p.addAnswer(3, "there are two daughter cells, each with 23 chromosomes. ",
				false,
				"Two daughter cells, each with 23 chromosomes, are produced only after telophase I and cytokinesis.");
			
				p.addAnswer(4, "there are four haploid daughter cells.",
				false,
				"There are four haploid daughter cells only after meiosis II is complete.");
			
				p.addAnswer(5, "chromosome pairs are positioned in the middle of the cell.",
				false,
				"The chromosome pairs are positioned in the middle of the cell during metaphase I.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 341064;


		
		

		
			
			p.question = "The correct order of events during meiosis is";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "prophase I, anaphase I, metaphase I, telophase I, meiosis II, cytokinesis.",
				false,
				"Metaphase I occurs before anaphase I. ");
			
				p.addAnswer(2, "prophase I, anaphase I, telophase I, metaphase I, meiosis II.",
				false,
				"Metaphase I occurs before anaphase I.");
			
				p.addAnswer(3, "prophase I, metaphase I, anaphase I, telophase I, cytokinesis, meiosis II.",
				true,
				"Correct. Meiosis starts with prophase I and continues with metaphase I,<b> </b>anaphase I, telophase I, and cytokinesis. This is followed by meiosis II.");
			
				p.addAnswer(4, "metaphase I, prophase I, telophase I, anaphase I, cytokinesis, meiosis II.",
				false,
				"Prophase I occurs before metaphase I, and anaphase I occurs before telophase I.");
			
				p.addAnswer(5, "metaphase I, prophase I, anaphase I, telophase I, cytokinesis, meiosis II.",
				false,
				"Prophase I occurs before metaphase I.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 341065;


		
		

		
			
			p.question = "During meiosis, segments of nonsister chromatids can trade places. This recombination of maternal and paternal genetic material is a key feature of meiosis. During what phase of meiosis does recombination occur?";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "prophase I.",
				true,
				"Correct. Segments of nonsister chromatids trade places during prophase I, resulting in recombination.");
			
				p.addAnswer(2, "anaphase I.",
				false,
				"Segments of nonsister chromatids trade places before anaphase I.");
			
				p.addAnswer(3, "meiosis II.",
				false,
				"Segments of nonsister chromatids trade places before meiosis II.");
			
				p.addAnswer(4, "telophase I.",
				false,
				"Segments of nonsister chromatids trade places before telophase I.");
			
				p.addAnswer(5, "Metaphase I.",
				false,
				"Segments of nonsister chromatids trade places before metaphase I.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

