

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "37: Plant Nutrition > Activities Quiz";
	ak.quiz_loc_with_commas = "37: Plant Nutrition, Activities Quiz";
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
		
		p.id = 336145;


		
		

		
			
			p.question = "Click Start to begin the animation. What name is given to the process seen in this animation? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?37&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: How Plants Obtain Minerals from Soil</a>)<br><br><OBJECT classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=\"../../placeholders/external_placeholder.html?http%3A%2F%2Fdownload.macromedia.com%2Fpub%2Fshockwave%2Fcabs%2Fflash%2Fswflash.cab#version=5,0,0,0\" WIDTH=432 HEIGHT=319><PARAM NAME=movie VALUE=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/3701q.swf\"><PARAM NAME=quality VALUE=high><PARAM NAME=bgcolor VALUE=#FFFFFF><EMBED src=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/3701q.swf\" quality=high bgcolor=#FFFFFF WIDTH=432 HEIGHT=319 TYPE=\"application/x-shockwave-flash\" PLUGINSPAGE=\"../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.macromedia.com%2Fshockwave%2Fdownload%2Findex.cgi%3FP1_Prod_Version%3DShockwaveFlash\"></EMBED></OBJECT>";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "root hair exchange",
				false,
				"While root hairs are involved in the process, this is not the name given to the process.");
			
				p.addAnswer(2, "ion pumping",
				false,
				"However, roots may pump hydrogen ions into the soil to facilitate the process seen here.");
			
				p.addAnswer(3, "carbonation",
				false,
				"While carbonate ions are involved in the process, the process is not known as carbonation.");
			
				p.addAnswer(4, "anion exchange",
				false,
				"Anions have a negative charge; the exchange ions have positive charges.");
			
				p.addAnswer(5, "cation exchange",
				true,
				"Cations, positively charged ions, in the soil solution are displacing cations on soil particles.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336146;


		
		

		
			
			p.question = "The release of CO<sub>2</sub> into the soil results in the formation of _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?37&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: How Plants Obtain Minerals from Soil</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "hydrogen ions and oxygen ions",
				false,
				"This choice is partially correct.");
			
				p.addAnswer(2, "sodium ions and chloride ions",
				false,
				"No, that is incorrect.");
			
				p.addAnswer(3, "hydrogen ions and carbonate ions",
				true,
				"When carbon dioxide combines with water hydrogen in the soil, cations and carbonate anions are released.");
			
				p.addAnswer(4, "carbonate ions and oxygen ions",
				false,
				"This choice is partially correct.");
			
				p.addAnswer(5, "potassium ions and calcium ions",
				false,
				"No, that is incorrect.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336147;


		
		

		
			
			p.question = "What process is the source of the CO<sub>2</sub> that root hairs release into the soil? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?37&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: How Plants Obtain Minerals from Soil</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "photosynthesis",
				false,
				"Photosynthesis involves the incorporation CO<sub>2</sub>.");
			
				p.addAnswer(2, "respiration",
				true,
				"CO<sub>2</sub> is a by-product of respiration.");
			
				p.addAnswer(3, "photolysis",
				false,
				"In plants, photolysis is the splitting of water.");
			
				p.addAnswer(4, "photosynthesis and respiration",
				false,
				"One of these is correct.");
			
				p.addAnswer(5, "respiration and photolysis",
				false,
				"One of these is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336148;


		
		

		
			
			p.question = "The binding of H<sup>&#8211;</sup> ions to soil particles _____.  (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?37&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: How Plants Obtain Minerals from Soil</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "displaces mineral cations",
				true,
				"Positively charged hydrogen ions displace positively charged mineral ions on soil particles.");
			
				p.addAnswer(2, "displaces mineral anions",
				false,
				"It is unlikely that a cation will displace an anion.");
			
				p.addAnswer(3, "promotes the clumping of soil particles",
				false,
				"No, it doesn\'t.");
			
				p.addAnswer(4, "is counteracted by acid precipitation",
				false,
				"Acid precipitation increases the number of hydrogen ions found in the soil.");
			
				p.addAnswer(5, "displaces nitrates from soil particles",
				false,
				"Anions, such as nitrates, tend not to be bound to soil particles.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336149;


		
		

		
			
			p.question = "Which of these ions is most likely to be leached from the soil? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?37&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: How Plants Obtain Minerals from Soil</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "potassium ions",
				false,
				"Potassium ions are positively charged and are therefore likely to be bound to negatively charged soil particles.");
			
				p.addAnswer(2, "magnesium ions",
				false,
				"Magnesium ions are positively charged and are therefore likely to be bound to negatively charged soil particles.");
			
				p.addAnswer(3, "calcium ions",
				false,
				"Calcium ions are positively charged and are therefore likely to be bound to negatively charged soil particles.");
			
				p.addAnswer(4, "chlorine ions",
				true,
				"Chlorine ions are negatively charged and are therefore not likely to be bound to negatively charged soil particles.");
			
				p.addAnswer(5, "iron ions",
				false,
				"Iron ions are positively charged and are therefore likely to be bound to negatively charged soil particles.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336150;


		
		

		
			
			p.question = "Acid precipitation _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?37&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: How Plants Obtain Minerals from Soil</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "promotes the attachment of anions to soil particles",
				false,
				"Even with acid precipitation soil particles are negatively charged and thus are not likely to bind other negatively charged particles.");
			
				p.addAnswer(2, "enhances the diffusion of cations into root hairs",
				false,
				"As a result of acid precipitation there is less diffusion of cations into root hairs.");
			
				p.addAnswer(3, "has no effect on soil fertility",
				false,
				"Yes, it does.");
			
				p.addAnswer(4, "increases soil fertility",
				false,
				"Since acid precipitation mimics cation exchange you might think that this is so, but it isn\'t.");
			
				p.addAnswer(5, "decreases soil fertility",
				true,
				"Acid precipitation promotes cation exchange. However, the precipitation then washes the ions away before they can diffuse into root hairs.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336151;


		
		

		
			
			p.question = "How do cations enter root hairs? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?37&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: How Plants Obtain Minerals from Soil</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "osmosis",
				false,
				"Osmosis is the diffusion of water; the cations that enter root hairs are minerals.");
			
				p.addAnswer(2, "active transport",
				false,
				"Active transport requires the cell to expend energy. The transport of cations into root hairs does not, directly, require the expenditure of energy.");
			
				p.addAnswer(3, "endocytosis",
				false,
				"Endocytosis requires the cell to expend energy. The transport of cations into root hairs does not, directly, require the expenditure of energy.");
			
				p.addAnswer(4, "phagocytosis",
				false,
				"Phagocytosis requires the cell to expend energy. The transport of cations into root hairs does not, directly, require the expenditure of energy.");
			
				p.addAnswer(5, "diffusion",
				true,
				"Cations diffuse into root hairs.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336152;


		
		

		
			
			p.question = "Assimilation is indicated by the letter(s) _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?37&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: The Nitrogen Cycle</a>)<br><br><img SRC=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/3708q.jpg\" ALT=\"Question #8\" BORDER=\"1\">";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "A",
				true,
				"Assimilation is the uptake of nutrients into an organism.");
			
				p.addAnswer(2, "B",
				false,
				"Assimilation is not the conversion of ammonium to nitrites.");
			
				p.addAnswer(3, "C",
				false,
				"Assimilation is not the production of ammonium.");
			
				p.addAnswer(4, "C and D",
				false,
				"C and D are indicating two different processes.");
			
				p.addAnswer(5, "D and E",
				false,
				"Neither of these is assimilation.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336153;


		
		

		
			
			p.question = "Nitrogen-fixing bacteria is(are) indicated by the letter(s) _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?37&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: The Nitrogen Cycle</a>)<br><br><img SRC=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/3709q.jpg\" ALT=\"Question #9\" BORDER=\"1\">";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "A",
				false,
				"These are denitrifying bacteria.");
			
				p.addAnswer(2, "A and B",
				false,
				"A is indicating denitrifying bacteria and B is indicating nitrifying bacteria.");
			
				p.addAnswer(3, "B and C",
				false,
				"B and C are indicating nitrifying bacteria.");
			
				p.addAnswer(4, "C and D",
				false,
				"This choice is partially correct.");
			
				p.addAnswer(5, "D and E",
				true,
				"Both of these pointers are indicating nitrogen-fixing bacteria. Nitrogen fixation is the conversion of nitrogen to a form that plants can use.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336154;


		
		

		
			
			p.question = "Nitrification is indicated by the letter(s) _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?37&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: The Nitrogen Cycle</a>)<br><br><img SRC=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/3710q.jpg\" ALT=\"Question #10\" BORDER=\"1\">";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "A",
				false,
				"This is assimilation.");
			
				p.addAnswer(2, "B",
				true,
				"Nitrification is the conversion of organic nitrogen-containing compounds to nitrites and nitrates.");
			
				p.addAnswer(3, "B and C",
				false,
				"This choice is partially correct.");
			
				p.addAnswer(4, "B and E",
				false,
				"This choice is partially correct.");
			
				p.addAnswer(5, "D and E",
				false,
				"D is indicating nitrogen fixation and E is indicating nitrogen-fixing bacteria.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336155;


		
		

		
			
			p.question = "Denitrifying bacteria convert _____ to _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?37&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: The Nitrogen Cycle</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "ammonium ... nitrogen gas",
				false,
				"Other bacteria convert ammonium to another nitrogen compound, which is then converted to nitrogen gas.");
			
				p.addAnswer(2, "nitrates ... nitrogen gas",
				true,
				"Denitrifying bacteria convert nitrates to nitrogen gas.");
			
				p.addAnswer(3, "nitrogen gas ... ammonium",
				false,
				"Denitrifying bacteria convert nitrogen to a form that is more easily lost from the soil ecosystem than is ammonium.");
			
				p.addAnswer(4, "nitrogen gas ... nitrates",
				false,
				"Denitrifying bacteria convert nitrogen to a form that is more easily lost from the soil ecosystem than are nitrates.");
			
				p.addAnswer(5, "nitrogen gas ... nitrites",
				false,
				"Denitrifying bacteria convert nitrogen to a form that is more easily lost from the soil ecosystem than are nitrites.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336156;


		
		

		
			
			p.question = "Nitrifying bacteria convert _____ to _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?37&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: The Nitrogen Cycle</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "nitrogen gas ... ammonium",
				false,
				"This conversion is accomplished by nitrogen-fixing bacteria.");
			
				p.addAnswer(2, "nitrogen gas ... nitrates",
				false,
				"Lightning converts nitrogen gas to nitrates.");
			
				p.addAnswer(3, "ammonium ... nitrites",
				true,
				"Nitrifying bacteria convert ammonium to nitrites.");
			
				p.addAnswer(4, "nitrates ... nitrogen gas",
				false,
				"Denitrifying bacteria convert nitrates to nitrogen gas.");
			
				p.addAnswer(5, "ammonium ... nitrogen gas",
				false,
				"Denitrifying bacteria convert nitrates and nitrites to nitrogen gas.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336157;


		
		

		
			
			p.question = "_____ removes nitrogen from the atmosphere. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?37&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: The Nitrogen Cycle</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Denitrification",
				false,
				"Denitrification adds nitrogen gas to the atmosphere.");
			
				p.addAnswer(2, "Nitrification",
				false,
				"Nitrification is the conversion of the nitrogen in organic compounds to nitrates or nitrites.");
			
				p.addAnswer(3, "Mineralization",
				false,
				"Mineralization is the conversion of the nitrogen in organic compounds to ammonium.");
			
				p.addAnswer(4, "Nitrogen fixation",
				true,
				"Nitrogen fixation is the conversion of nitrogen gas to a form that can be used by plants (and other organisms).");
			
				p.addAnswer(5, "Assimilation",
				false,
				"Assimilation is uptake of nutrients into an organism.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336158;


		
		

		
			
			p.question = "Which one of these is a nitrate? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?37&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: The Nitrogen Cycle</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "NO<sub>2</sub><sup>&#8211;</sup>",
				false,
				"NO<sub>2</sub><sup>&#8211;</sup> is a nitrite.");
			
				p.addAnswer(2, "NH<sub>4</sub><sup>&#8211;</sup>",
				false,
				"NH<sub>4</sub><sup>&#8211;</sup> is ammonium.");
			
				p.addAnswer(3, "NH<sub>2</sub>",
				false,
				"NH<sub>2</sub> is an amino group.");
			
				p.addAnswer(4, "SH",
				false,
				"SH is a sulfhydryl group; it does not contain nitrogen.");
			
				p.addAnswer(5, "NO<sub>3</sub><sup>&#8211;</sup>",
				true,
				"NO<sub>3</sub><sup>&#8211;</sup> is a nitrate.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336159;


		
		

		
			
			p.question = "Which one of these is a nitrite? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?37&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: The Nitrogen Cycle</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "NO<sub>2</sub><sup>&#8211;</sup>",
				true,
				"This is a nitrite.");
			
				p.addAnswer(2, "NH<sub>4</sub><sup>&#8211;</sup>",
				false,
				"This is ammonium.");
			
				p.addAnswer(3, "NH<sub>2</sub>",
				false,
				"This is an amino group.");
			
				p.addAnswer(4, "PO<sub>4</sub><sup>&#8211;</sup>",
				false,
				"This is a phosphate group; it does not contain nitrogen.");
			
				p.addAnswer(5, "NO<sub>3</sub><sup>&#8211;</sup>",
				false,
				"This is a nitrate.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

