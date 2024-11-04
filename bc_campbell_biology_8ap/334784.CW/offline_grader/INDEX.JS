

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "13: Meiosis and Sexual Life Cycles > Activities Quiz";
	ak.quiz_loc_with_commas = "13: Meiosis and Sexual Life Cycles, Activities Quiz";
	ak.quiz_title = "Activities Quiz";

	
		ak.help_url = "../../placeholders/help_placeholder.html";
	
	ak.essay_total = 0;
	ak.pair_problem_total = 0;
	ak.pair_total = 0;
	ak.problem_total = 23;
	ak.non_essay_total = 23;
	ak.scored_item_total = 23;

	
	
	


	
	ak.copyright_date = "2008";
	ak.brandname = "Pearson Benjamin Cummings";
	ak.legal = "../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.pearsoned.com%2Flegal%2Findex.htm";


	// Loop over all problems
	
	
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334785;


		
		

		
			
			p.question = "Click on the image to view an animation. What name is given to this process? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?13&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Asexual and Sexual Life Cycles</a>)<br><br><OBJECT classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=../../placeholders/external_placeholder.html?http%3A%2F%2Fdownload.macromedia.com%2Fpub%2Fshockwave%2Fcabs%2Fflash%2Fswflash.cab#version=5,0,0,0 WIDTH=216 HEIGHT=160><PARAM NAME=movie VALUE=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/1301q.swf\"><PARAM NAME=quality VALUE=high><PARAM NAME=bgcolor VALUE=#FFFFFF><EMBED src=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/1301q.swf\" quality=high bgcolor=#FFFFFF WIDTH=216 HEIGHT=160 TYPE=\"application/x-shockwave-flash\" PLUGINSPAGE=\"../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.macromedia.com%2Fshockwave%2Fdownload%2Findex.cgi%3FP1_Prod_Version%3DShockwaveFlash\"></EMBED></object>";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "meiosis",
				false,
				"Meiosis is the process by which a diploid cell gives rise to haploid cells.");
			
				p.addAnswer(2, "sexual reproduction",
				false,
				"Sexual reproduction requires more than a single individual.");
			
				p.addAnswer(3, "fertilization",
				false,
				"No, that is incorrect.");
			
				p.addAnswer(4, "gametogenesis",
				false,
				"Gametogenesis is the formation of gametes.");
			
				p.addAnswer(5, "asexual reproduction",
				true,
				"A single individual is reproducing.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334786;


		
		

		
			
			p.question = "Gametes are produced by _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?13&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Asexual and Sexual Life Cycles</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the cell cycle",
				false,
				"In the cell cycle a diploid cell gives rise to diploid daughter cells.");
			
				p.addAnswer(2, "fertilization",
				false,
				"Fertilization is the fusion of a male and a female gamete.");
			
				p.addAnswer(3, "meiosis",
				true,
				"Meiosis produces haploid gametes from a diploid parental cell.");
			
				p.addAnswer(4, "mitosis",
				false,
				"Mitosis is a component of the cell cycle.");
			
				p.addAnswer(5, "asexual reproduction",
				false,
				"Asexual reproduction does not involve the production of gametes.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334787;


		
		

		
			
			p.question = "Normal human gametes carry _____ chromosomes. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?13&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Asexual and Sexual Life Cycles</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "23 pairs of",
				false,
				"This would make for a total of 46 chromosomes");
			
				p.addAnswer(2, "23",
				true,
				"This is the number of chromosomes in a single set of human chromosomes.");
			
				p.addAnswer(3, "5",
				false,
				"More.");
			
				p.addAnswer(4, "46",
				false,
				"This is the number of chromosomes in human somatic cells.");
			
				p.addAnswer(5, "46 pairs of",
				false,
				"This would be an extreme case of polyploidy.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334788;


		
		

		
			
			p.question = "Meiosis I produces _____ cells, each of which is _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?13&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Meiosis Animation</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "two ... haploid",
				true,
				"At the end of meiosis I there are two haploid cells.");
			
				p.addAnswer(2, "four ... haploid",
				false,
				"This choice is partially correct.");
			
				p.addAnswer(3, "two... diploid",
				false,
				"This is what is produced by the cell cycle.");
			
				p.addAnswer(4, "four ... diploid",
				false,
				"No, that is incorrect.");
			
				p.addAnswer(5, "two... identical to the other",
				false,
				"Meiosis I does not result in identical cells.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334789;


		
		

		
			
			p.question = "Meiosis II typically produces _____ cells, each of which is _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?13&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Meiosis Animation</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "two ... haploid",
				false,
				"No, that is incorrect.");
			
				p.addAnswer(2, "four ... haploid",
				true,
				"At the end of meiosis II there are typically 4 haploid cells.");
			
				p.addAnswer(3, "two... diploid",
				false,
				"This is what is produced by the cell cycle.");
			
				p.addAnswer(4, "four ... diploid",
				false,
				"No, that is incorrect.");
			
				p.addAnswer(5, "four ... identical to the other",
				false,
				"Meiosis II does not result in identical cells.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334790;


		
		

		
			
			p.question = "Click on the diagram to view an animation. This animation illustrates the events of _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?13&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Meiosis Animation</a>)<br><br><OBJECT classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=../../placeholders/external_placeholder.html?http%3A%2F%2Fdownload.macromedia.com%2Fpub%2Fshockwave%2Fcabs%2Fflash%2Fswflash.cab#version=5,0,0,0 WIDTH=216 HEIGHT=160><PARAM NAME=movie VALUE=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/1306q.swf\"><PARAM NAME=quality VALUE=high><PARAM NAME=bgcolor VALUE=#FFFFFF><EMBED src=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/1306q.swf\" quality=high bgcolor=#FFFFFF WIDTH=216 HEIGHT=160 TYPE=\"application/x-shockwave-flash\" PLUGINSPAGE=\"../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.macromedia.com%2Fshockwave%2Fdownload%2Findex.cgi%3FP1_Prod_Version%3DShockwaveFlash\"></EMBED></object>";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "anaphase II",
				false,
				"Chromatin does not condense during anaphase II.");
			
				p.addAnswer(2, "prophase I",
				false,
				"The cells in the animation are haploid; in prophase I cells are diploid.");
			
				p.addAnswer(3, "telophase I and cytokinesis",
				false,
				"During telophase I chromatin decondenses.");
			
				p.addAnswer(4, "telophase II and cytokinesis",
				false,
				"During telophase II chromatin decondenses.");
			
				p.addAnswer(5, "prophase II",
				true,
				"The events of prophase II are essentially the same as those of mitotic prophase except that prophase II cells are haploid.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334791;


		
		

		
			
			p.question = "Click on the diagram to view an animation. This animation illustrates the events of _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?13&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Meiosis Animation</a>)<br><br><OBJECT classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=\"../../placeholders/external_placeholder.html?http%3A%2F%2Fdownload.macromedia.com%2Fpub%2Fshockwave%2Fcabs%2Fflash%2Fswflash.cab#version=5,0,0,0\" WIDTH=216 HEIGHT=160><PARAM NAME=movie VALUE=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/1307q.swf\"><PARAM NAME=quality VALUE=high><PARAM NAME=bgcolor VALUE=#FFFFFF><EMBED src=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/1307q.swf\" quality=high bgcolor=#FFFFFF WIDTH=216 HEIGHT=160 TYPE=\"application/x-shockwave-flash\" PLUGINSPAGE=\"../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.macromedia.com%2Fshockwave%2Fdownload%2Findex.cgi%3FP1_Prod_Version%3DShockwaveFlash\"></EMBED></object>";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "anaphase I",
				false,
				"The cells in the animation are haploid; during anaphase I cells are diploid.");
			
				p.addAnswer(2, "telophase I and cytokinesis",
				false,
				"Sister chromatids do not pull apart during telophase I.");
			
				p.addAnswer(3, "prophase II",
				false,
				"Sister chromatids do not pull apart during prophase II.");
			
				p.addAnswer(4, "interphase",
				false,
				"Chromosomes consisting of sister chromatids form during interphase.");
			
				p.addAnswer(5, "anaphase II",
				true,
				"During anaphase II sister chromatids separate and migrate to opposite poles.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334792;


		
		

		
			
			p.question = "Click on the diagram to view an animation. This animation illustrates the events of _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?13&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Meiosis Animation</a>)<br><br><OBJECT classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=\"../../placeholders/external_placeholder.html?http%3A%2F%2Fdownload.macromedia.com%2Fpub%2Fshockwave%2Fcabs%2Fflash%2Fswflash.cab#version=5,0,0,0\" WIDTH=216 HEIGHT=160><PARAM NAME=movie VALUE=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/1308q.swf\"><PARAM NAME=quality VALUE=high><PARAM NAME=bgcolor VALUE=#FFFFFF><EMBED src=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/1308q.swf\" quality=high bgcolor=#FFFFFF WIDTH=216 HEIGHT=160 TYPE=\"application/x-shockwave-flash\" PLUGINSPAGE=\"../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.macromedia.com%2Fshockwave%2Fdownload%2Findex.cgi%3FP1_Prod_Version%3DShockwaveFlash\"></EMBED></object>";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "telophase and cytokinesis",
				false,
				"Two diploid cells are present at the end of (mitotic) telophase and cytokinesis.");
			
				p.addAnswer(2, "telophase I and cytokinesis",
				false,
				"Two haploid cells are present at the end of telophase I and cytokinesis.");
			
				p.addAnswer(3, "telophase II and cytokinesis",
				true,
				"Four haploid cells are present at the end of telophase II and cytokinesis.");
			
				p.addAnswer(4, "telophase I",
				false,
				"This animation includes cytoplasmic division.");
			
				p.addAnswer(5, "telophase II",
				false,
				"This animation includes cytoplasmic division.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334793;


		
		

		
			
			p.question = "During _____ sister chromatids separate. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?13&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Meiosis Animation</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "prophase I",
				false,
				"Sister chromatids do not separate during prophase I.");
			
				p.addAnswer(2, "prophase II",
				false,
				"Sister chromatids do not separate during prophase II.");
			
				p.addAnswer(3, "anaphase II",
				true,
				"Anaphase II is essentially the same as mitotic anaphase except that the cell is haploid.");
			
				p.addAnswer(4, "interphase",
				false,
				"Sister chromatids form during interphase.");
			
				p.addAnswer(5, "metaphase I",
				false,
				"Sister chromatids do not separate during metaphase I.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334794;


		
		

		
			
			p.question = "Click on the diagram to view an animation. This animation illustrates the events of _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?13&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Meiosis Animation</a>)<br><br><OBJECT classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=\"../../placeholders/external_placeholder.html?http%3A%2F%2Fdownload.macromedia.com%2Fpub%2Fshockwave%2Fcabs%2Fflash%2Fswflash.cab#version=5,0,0,0\" WIDTH=216 HEIGHT=160><PARAM NAME=movie VALUE=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/1310q.swf\"><PARAM NAME=quality VALUE=high><PARAM NAME=bgcolor VALUE=#FFFFFF><EMBED src=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/1310q.swf\" quality=high bgcolor=#FFFFFF WIDTH=216 HEIGHT=160 TYPE=\"application/x-shockwave-flash\" PLUGINSPAGE=\"../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.macromedia.com%2Fshockwave%2Fdownload%2Findex.cgi%3FP1_Prod_Version%3DShockwaveFlash\"></EMBED></object>";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "telophase and cytokinesis",
				false,
				"At the end of telophase and cytokinesis there are two diploid cells.");
			
				p.addAnswer(2, "telophase II and cytokinesis",
				false,
				"At the end of telophase II and cytokinesis there are four haploid cells.");
			
				p.addAnswer(3, "prophase II and cytokinesis",
				false,
				"Cytokinesis does not accompany prophase II.");
			
				p.addAnswer(4, "interphase",
				false,
				"Cytokinesis does not accompany interphase.");
			
				p.addAnswer(5, "telophase I and cytokinesis",
				true,
				"At the end of telophase I and cytokinesis there are two haploid cells.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334795;


		
		

		
			
			p.question = "At the end of _____ and cytokinesis, haploid cells contain chromosomes that each consist of two sister chromatids. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?13&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Meiosis Animation</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "metaphase II",
				false,
				"The question does not describe the result of metaphase II.");
			
				p.addAnswer(2, "telophase I",
				true,
				"At the end of telophase I and cytokinesis, there are two haploid cells with chromosomes that consist of two sister chromatids each.");
			
				p.addAnswer(3, "telophase",
				false,
				"At the end of mitotic telophase and cytokinesis, chromosomes do not consist of two sister chromatids.");
			
				p.addAnswer(4, "telophase II",
				false,
				"At the end of telophase II and cytokinesis, chromosomes do not consist of two sister chromatids.");
			
				p.addAnswer(5, "interphase",
				false,
				"At the end of interphase, a single diploid cell contains chromosomes that each consist of two sister chromatids.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334796;


		
		

		
			
			p.question = "Click on the diagram to view an animation. This is an animation of _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?13&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Meiosis Animation</a>)<br><br><OBJECT classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=\"../../placeholders/external_placeholder.html?http%3A%2F%2Fdownload.macromedia.com%2Fpub%2Fshockwave%2Fcabs%2Fflash%2Fswflash.cab#version=5,0,0,0\" WIDTH=216 HEIGHT=160><PARAM NAME=movie VALUE=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/1312q.swf\"><PARAM NAME=quality VALUE=high><PARAM NAME=bgcolor VALUE=#FFFFFF><EMBED src=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/1312q.swf\" quality=high bgcolor=#FFFFFF WIDTH=216 HEIGHT=160 TYPE=\"application/x-shockwave-flash\" PLUGINSPAGE=\"../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.macromedia.com%2Fshockwave%2Fdownload%2Findex.cgi%3FP1_Prod_Version%3DShockwaveFlash\"></EMBED></object>";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "prophase I",
				true,
				"Homologous chromosomes pair during prophase I..");
			
				p.addAnswer(2, "metaphase II",
				false,
				"The nuclear envelope and nucleoli do not disperse during metaphase II.");
			
				p.addAnswer(3, "metaphase I",
				false,
				"The nuclear envelope and nucleoli do not disperse during metaphase I.");
			
				p.addAnswer(4, "telophase II and cytokinesis",
				false,
				"The nuclear envelope and nucleoli re-form during telophase II.");
			
				p.addAnswer(5, "prophase II",
				false,
				"Homologous chromosomes do not pair during prophase II.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334797;


		
		

		
			
			p.question = "Click on the diagram to view an animation. This animation illustrates the events of _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?13&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Meiosis Animation</a>)<br><br><OBJECT classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=\"../../placeholders/external_placeholder.html?http%3A%2F%2Fdownload.macromedia.com%2Fpub%2Fshockwave%2Fcabs%2Fflash%2Fswflash.cab#version=5,0,0,0\" WIDTH=216 HEIGHT=160><PARAM NAME=movie VALUE=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/1313q.swf\"><PARAM NAME=quality VALUE=high><PARAM NAME=bgcolor VALUE=#FFFFFF><EMBED src=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/1313q.swf\" quality=high bgcolor=#FFFFFF WIDTH=216 HEIGHT=160 TYPE=\"application/x-shockwave-flash\" PLUGINSPAGE=\"../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.macromedia.com%2Fshockwave%2Fdownload%2Findex.cgi%3FP1_Prod_Version%3DShockwaveFlash\"></EMBED></object>";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "anaphase I",
				false,
				"The cells in the animation are haploid; anaphase I cells are diploid.");
			
				p.addAnswer(2, "interphase",
				false,
				"Chromosomes are not visible during interphase.");
			
				p.addAnswer(3, "anaphase II",
				false,
				"The alignment of chromosomes along the cell&#213;s equator is not associated with anaphase II.");
			
				p.addAnswer(4, "metaphase II",
				true,
				"Metaphase II is essentially the same as mitotic metaphase except that the cells are haploid.");
			
				p.addAnswer(5, "prophase I",
				false,
				"The cells in the animation are haploid; prophase I cells are diploid.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334798;


		
		

		
			
			p.question = "Click on the diagram to view an animation. This animation illustrates the events of _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?13&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Meiosis Animation</a>)<br><br><OBJECT classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=\"../../placeholders/external_placeholder.html?http%3A%2F%2Fdownload.macromedia.com%2Fpub%2Fshockwave%2Fcabs%2Fflash%2Fswflash.cab#version=5,0,0,0\" WIDTH=216 HEIGHT=160><PARAM NAME=movie VALUE=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/1314q.swf\"><PARAM NAME=quality VALUE=high><PARAM NAME=bgcolor VALUE=#FFFFFF><EMBED src=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/1314q.swf\" quality=high bgcolor=#FFFFFF WIDTH=216 HEIGHT=160 TYPE=\"application/x-shockwave-flash\" PLUGINSPAGE=\"../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.macromedia.com%2Fshockwave%2Fdownload%2Findex.cgi%3FP1_Prod_Version%3DShockwaveFlash\"></EMBED></object>";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "anaphase I",
				false,
				"Anaphase I does not involve the alignment of tetrads along the cell&#213;s equator.");
			
				p.addAnswer(2, "telophase I and cytokinesis",
				false,
				"Telophase I does not involve the alignment of tetrads along the cell&#213;s equator.");
			
				p.addAnswer(3, "prophase II",
				false,
				"The cell in the animation is diploid; in prophase II cells are haploid.");
			
				p.addAnswer(4, "metaphase II",
				false,
				"The cell in the animation is diploid; in metaphase II cells are haploid.");
			
				p.addAnswer(5, "metaphase I",
				true,
				"During metaphase I tetrads align along the metaphase plate.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334799;


		
		

		
			
			p.question = "Synapsis occurs during _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?13&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Meiosis Animation</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "prophase I",
				true,
				"Synapsis, the pairing of homologous chromosomes, occurs during prophase I.");
			
				p.addAnswer(2, "telophase I and cytogenesis",
				false,
				"Synapsis is not associated with telophase I.");
			
				p.addAnswer(3, "prophase II",
				false,
				"Synapsis is not associated with prophase II.");
			
				p.addAnswer(4, "metaphase II",
				false,
				"Synapsis is not associated with metaphase II.");
			
				p.addAnswer(5, "anaphase II",
				false,
				"Synapsis is not associated with anaphase II.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334800;


		
		

		
			
			p.question = "Homologous chromosomes migrate to opposite poles during _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?13&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Meiosis Animation</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "telophase II and cytokinesis",
				false,
				"The migration of sister chromosomes to opposite poles is not associated with telophase II.");
			
				p.addAnswer(2, "prophase II",
				false,
				"The migration of sister chromosomes to opposite poles is not associated with prophase II.");
			
				p.addAnswer(3, "anaphase I",
				true,
				"During anaphase I sister chromatids remain attached at their centromeres, and homologous chromosomes move to opposite poles.");
			
				p.addAnswer(4, "metaphase I",
				false,
				"The migration of sister chromosomes to opposite poles is not associated with metaphase I.");
			
				p.addAnswer(5, "metaphase II",
				false,
				"The migration of sister chromosomes to opposite poles is not associated with metaphase II.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334801;


		
		

		
			
			p.question = "During _____ chromosomes align single file along the equator of a haploid cell. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?13&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Meiosis Animation</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "prophase I",
				false,
				"Prophase I cells are diploid.");
			
				p.addAnswer(2, "metaphase I",
				false,
				"Metaphase I cells are diploid.");
			
				p.addAnswer(3, "anaphase I",
				false,
				"Anaphase I cells are diploid.");
			
				p.addAnswer(4, "metaphase II",
				true,
				"Metaphase II is essentially the same as mitotic metaphase except that the cell is haploid.");
			
				p.addAnswer(5, "telophase I and cytokinesis",
				false,
				"This event is not associated with telophase I.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334802;


		
		

		
			
			p.question = "Click on the diagram to view an animation. This animation illustrates the events of _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?13&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Meiosis Animation</a>)<p><div><OBJECT classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=\"../../placeholders/external_placeholder.html?http%3A%2F%2Fdownload.macromedia.com%2Fpub%2Fshockwave%2Fcabs%2Fflash%2Fswflash.cab#version=5,0,0,0\" WIDTH=216 HEIGHT=160><PARAM NAME=movie VALUE=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/1318q.swf\"><PARAM NAME=quality VALUE=high><PARAM NAME=bgcolor VALUE=#FFFFFF><EMBED src=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/1318q.swf\" quality=high bgcolor=#FFFFFF WIDTH=216 HEIGHT=160 TYPE=\"application/x-shockwave-flash\" PLUGINSPAGE=\"../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.macromedia.com%2Fshockwave%2Fdownload%2Findex.cgi%3FP1_Prod_Version%3DShockwaveFlash\"></EMBED></object></div>";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "metaphase II",
				false,
				"The cell in the animation is diploid; in metaphase II cells are haploid.");
			
				p.addAnswer(2, "prophase I",
				false,
				"Homologous chromosomes do not separate during prophase I.");
			
				p.addAnswer(3, "prophase II",
				false,
				"Homologous chromosomes do not separate during prophase II.");
			
				p.addAnswer(4, "telophase I and cytokinesis",
				false,
				"By the time of telophase I homologous chromosomes have already separated.");
			
				p.addAnswer(5, "anaphase I",
				true,
				"During anaphase I homologous chromosomes, consisting of sister chromatids, migrate to opposite poles.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334803;


		
		

		
			
			p.question = "At the end of _____ and cytokinesis there are four haploid cells. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?13&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Meiosis Animation</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "telophase II",
				true,
				"At the end of telophase II and cytokinesis there are four haploid cells.");
			
				p.addAnswer(2, "prophase II",
				false,
				"At the end of prophase II there are two haploid cells.");
			
				p.addAnswer(3, "anaphase I",
				false,
				"At the end of anaphase I there is one diploid cell.");
			
				p.addAnswer(4, "prophase I",
				false,
				"At the end of prophase I there is one diploid cell.");
			
				p.addAnswer(5, "interphase",
				false,
				"At the end of interphase there is one diploid cell.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334804;


		
		

		
			
			p.question = "During _____ a spindle forms in a haploid cell. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?13&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Meiosis Animation</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "prophase I",
				false,
				"Prophase I cells are diploid.");
			
				p.addAnswer(2, "anaphase II",
				false,
				"A spindle does not form during anaphase II.");
			
				p.addAnswer(3, "telophase I and cytokinesis",
				false,
				"During telophase I the spindle disperses.");
			
				p.addAnswer(4, "metaphase II",
				false,
				"A spindle does not form during metaphase II.");
			
				p.addAnswer(5, "prophase II",
				true,
				"Prophase II is essentially the same as mitotic prophase except that the cells are haploid.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334805;


		
		

		
			
			p.question = "Click on the diagram to view an animation. This animation illustrates _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?13&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Meiosis Animation</a>)<br><br><OBJECT classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=\"../../placeholders/external_placeholder.html?http%3A%2F%2Fdownload.macromedia.com%2Fpub%2Fshockwave%2Fcabs%2Fflash%2Fswflash.cab#version=5,0,0,0\" WIDTH=216 HEIGHT=160><PARAM NAME=movie VALUE=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/1321q.swf\"><PARAM NAME=quality VALUE=high><PARAM NAME=bgcolor VALUE=#FFFFFF><EMBED src=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/1321q.swf\" quality=high bgcolor=#FFFFFF WIDTH=216 HEIGHT=160 TYPE=\"application/x-shockwave-flash\" PLUGINSPAGE=\"../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.macromedia.com%2Fshockwave%2Fdownload%2Findex.cgi%3FP1_Prod_Version%3DShockwaveFlash\"></EMBED></object>";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "anaphase II",
				false,
				"Chromosomes are visible during anaphase II.");
			
				p.addAnswer(2, "prophase II",
				false,
				"Chromosomes are visible during prophase II.");
			
				p.addAnswer(3, "anaphase I",
				false,
				"Chromosomes are visible during anaphase I.");
			
				p.addAnswer(4, "interphase",
				true,
				"During interphase the centrosome duplicates and the chromosomes are not condensed.");
			
				p.addAnswer(5, "prophase I",
				false,
				"Chromosomes condense visibly during prophase I.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334806;


		
		

		
			
			p.question = "Click on the diagram to view an animation. This animation illustrates the process of _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?13&C','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Origins of Genetic Variation</a>)<br><br><OBJECT classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=\"../../placeholders/external_placeholder.html?http%3A%2F%2Fdownload.macromedia.com%2Fpub%2Fshockwave%2Fcabs%2Fflash%2Fswflash.cab#version=5,0,0,0\" WIDTH=216 HEIGHT=160><PARAM NAME=movie VALUE=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/1322q.swf\"><PARAM NAME=quality VALUE=high><PARAM NAME=bgcolor VALUE=#FFFFFF><EMBED src=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/1322q.swf\" quality=high bgcolor=#FFFFFF WIDTH=216 HEIGHT=160 TYPE=\"application/x-shockwave-flash\" PLUGINSPAGE=\"../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.macromedia.com%2Fshockwave%2Fdownload%2Findex.cgi%3FP1_Prod_Version%3DShockwaveFlash\"></EMBED></object>";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "random fertilization",
				false,
				"Fertilization is the fusion of a male and a female gamete.");
			
				p.addAnswer(2, "centromere separation",
				false,
				"This animation does not illustrate the separation of centromeres.");
			
				p.addAnswer(3, "karyokinesis",
				false,
				"Karyokinesis is division of the nucleus.");
			
				p.addAnswer(4, "synapsis and crossing over",
				true,
				"Synapsis, the pairing of homologous chromosomes, is followed by crossing over, the exchange of genetic material between nonsister chromatids of homologous chromosomes.");
			
				p.addAnswer(5, "cytokinesis",
				false,
				"Cytokinesis is division of the cytoplasm.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334807;


		
		

		
			
			p.question = "Click on the diagram to view an animation. Which of these gametes contains one or more recombinant chromosomes? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?13&C','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Origins of Genetic Variation</a>)<p><div><OBJECT classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=\"../../placeholders/external_placeholder.html?http%3A%2F%2Fdownload.macromedia.com%2Fpub%2Fshockwave%2Fcabs%2Fflash%2Fswflash.cab#version=5,0,0,0\" WIDTH=216 HEIGHT=160><PARAM NAME=movie VALUE=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/1323q.swf\"><PARAM NAME=quality VALUE=high><PARAM NAME=bgcolor VALUE=#FFFFFF><EMBED src=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/1323q.swf\" quality=high bgcolor=#FFFFFF WIDTH=216 HEIGHT=160 TYPE=\"application/x-shockwave-flash\" PLUGINSPAGE=\"../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.macromedia.com%2Fshockwave%2Fdownload%2Findex.cgi%3FP1_Prod_Version%3DShockwaveFlash\"></EMBED></object></div>";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "A and B",
				false,
				"This answer is partially correct.");
			
				p.addAnswer(2, "B and C",
				true,
				"Each of the chromosomes in gametes B and C are composed of material derived from both parents.");
			
				p.addAnswer(3, "A and C",
				false,
				"This answer is partially correct.");
			
				p.addAnswer(4, "A and D",
				false,
				"Both of these gametes contain chromosomes composed of genetic material derived from only a single parent.");
			
				p.addAnswer(5, "D and E",
				false,
				"Both of these gametes contain chromosomes composed of genetic material derived from only a single parent.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

