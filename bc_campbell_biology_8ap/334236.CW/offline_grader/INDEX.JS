

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "5: The Structure and Function of Macromolecules > Activities Quiz";
	ak.quiz_loc_with_commas = "5: The Structure and Function of Macromolecules, Activities Quiz";
	ak.quiz_title = "Activities Quiz";

	
		ak.help_url = "../../placeholders/help_placeholder.html";
	
	ak.essay_total = 0;
	ak.pair_problem_total = 0;
	ak.pair_total = 0;
	ak.problem_total = 25;
	ak.non_essay_total = 25;
	ak.scored_item_total = 25;

	
	
	


	
	ak.copyright_date = "2008";
	ak.brandname = "Pearson Benjamin Cummings";
	ak.legal = "../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.pearsoned.com%2Flegal%2Findex.htm";


	// Loop over all problems
	
	
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334237;


		
		

		
			
			p.question = "Click on the diagram to start the animation. What name is given to the process seen in this animation? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?5&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Making and Breaking Polymers</a>)<br><br><OBJECT classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=\"../../placeholders/external_placeholder.html?http%3A%2F%2Fdownload.macromedia.com%2Fpub%2Fshockwave%2Fcabs%2Fflash%2Fswflash.cab#version=5,0,0,0\" WIDTH=216 HEIGHT=160><PARAM NAME=movie VALUE=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/0501q.swf\"><PARAM NAME=quality VALUE=high><PARAM NAME=bgcolor VALUE=#FFFFFF><EMBED src=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/0501q.swf\" quality=high bgcolor=#FFFFFF WIDTH=216 HEIGHT=160 TYPE=\"application/x-shockwave-flash\" PLUGINSPAGE=\"../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.macromedia.com%2Fshockwave%2Fdownload%2Findex.cgi%3FP1_Prod_Version%3DShockwaveFlash\"></EMBED></OBJECT>";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "hydrolysis",
				false,
				"Hydrolysis involves the addition of water.");
			
				p.addAnswer(2, "water formation",
				false,
				"While water is being formed, this is not the name of the reaction.");
			
				p.addAnswer(3, "catabolism",
				false,
				"Catabolism involves going from the more complex to the simpler.");
			
				p.addAnswer(4, "dehydration synthesis",
				true,
				"The linking of the monomers involves the removal of water.");
			
				p.addAnswer(5, "monomerization",
				false,
				"No, that is incorrect.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334238;


		
		

		
			
			p.question = "Glycogen is _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?5&C','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Carbohydrates</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the form in which plants store sugars",
				false,
				"Plants store sugars as starch.");
			
				p.addAnswer(2, "a polysaccharide found in animals",
				true,
				"Animals store energy in the form of glycogen.");
			
				p.addAnswer(3, "a polysaccharide found in plant cell walls",
				false,
				"Cellulose is a polysaccharide found in plant cell walls.");
			
				p.addAnswer(4, "a transport protein that carries oxygen",
				false,
				"Glycogen is not a protein.");
			
				p.addAnswer(5, "a source of saturated fat",
				false,
				"Glycogen is not a fat.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334239;


		
		

		
			
			p.question = "glucose + glucose &#8212;> _____ by _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?5&C','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Carbohydrates</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "lactose + water ... hydrolysis",
				false,
				"Hydrolysis involves the addition of water.");
			
				p.addAnswer(2, "starch + water ... dehydration synthesis",
				false,
				"Starch is a polysaccharide.");
			
				p.addAnswer(3, "sucrose + water ... dehydration synthesis",
				false,
				"Sucrose is formed when glucose and fructose are linked.");
			
				p.addAnswer(4, "cellulose + water ... hydrolysis",
				false,
				"Hydrolysis involves the addition of water.");
			
				p.addAnswer(5, "maltose + water ... dehydration synthesis",
				true,
				"Maltose is the disaccharide formed when two glucose molecules are linked by dehydration synthesis.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334240;


		
		

		
			
			p.question = "Which of these is a source of lactose? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?5&C','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Carbohydrates</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "sugar beets",
				false,
				"Sucrose is the sugar found in sugar beets.");
			
				p.addAnswer(2, "milk",
				true,
				"Lactose is the sugar found in milk.");
			
				p.addAnswer(3, "potatoes",
				false,
				"Potatoes are rich in starch.");
			
				p.addAnswer(4, "sugar cane",
				false,
				"Sucrose is the sugar found in sugar cane.");
			
				p.addAnswer(5, "starch",
				false,
				"Maltose forms by the hydrolysis of starch.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334241;


		
		

		
			
			p.question = "Which of these is a polysaccharide? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?5&C','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Carbohydrates</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "sucrose",
				false,
				"Sucrose is a disaccharide.");
			
				p.addAnswer(2, "glucose",
				false,
				"Glucose is a monosaccharide.");
			
				p.addAnswer(3, "galactose",
				false,
				"Galactose is a monosaccharide.");
			
				p.addAnswer(4, "lactose",
				false,
				"Lactose is a disaccharide.");
			
				p.addAnswer(5, "cellulose",
				true,
				"Cellulose is a carbohydrate composed of many monomers.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334242;


		
		

		
			
			p.question = "_____ is the most abundant organic compound on Earth. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?5&C','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Carbohydrates</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Glucose",
				false,
				"Glucose is not the most abundant organic compound found on Earth.");
			
				p.addAnswer(2, "Cellulose",
				true,
				"Cellulose, a component of plant cell walls, is the most abundant organic compound found on earth.");
			
				p.addAnswer(3, "Lactose",
				false,
				"Lactose is not the most abundant organic compound found on Earth.");
			
				p.addAnswer(4, "Starch",
				false,
				"Starch is not the most abundant organic compound found on Earth.");
			
				p.addAnswer(5, "Glycogen",
				false,
				"Glycogen is not the most abundant organic compound found on Earth.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334243;


		
		

		
			
			p.question = "Which of these is NOT a lipid? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?5&D','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Lipids</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "phospholipid",
				false,
				"Phospholipids are lipids.");
			
				p.addAnswer(2, "cholesterol",
				false,
				"Cholesterol is a lipid.");
			
				p.addAnswer(3, "steroids",
				false,
				"Steroids are lipids.");
			
				p.addAnswer(4, "RNA",
				true,
				"RNA is a nucleic acid");
			
				p.addAnswer(5, "wax",
				false,
				"Waxes are lipids.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334244;


		
		

		
			
			p.question = "This figure is an example of a(n) _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?5&D','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Lipids</a>)<br><br><img SRC=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/0508q.jpg\" ALT=\"Question #8\" BORDER=\"1\">";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "nucleic acid",
				false,
				"Nucleic acids do not have hydrocarbon tails.");
			
				p.addAnswer(2, "protein",
				false,
				"Proteins are composed of amino acids.");
			
				p.addAnswer(3, "saturated fat",
				true,
				"The fatty acid tails lack double bonds.");
			
				p.addAnswer(4, "unsaturated fat",
				false,
				"Unsaturated fats have at least one double bond in their tails.");
			
				p.addAnswer(5, "steroid",
				false,
				"Steroids are composed of four rings.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334245;


		
		

		
			
			p.question = "Which of these is a phospholipid? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?5&D','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Lipids</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "<IMG SRC=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/0509a1.jpg\" ALT=\"Question #5, Answer #1\" BORDER=\"1\">",
				false,
				"This is an illustration of the quaternary structure of a protein.");
			
				p.addAnswer(2, "<IMG SRC=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/0509a2.jpg\" ALT=\"Question #5, Answer #2\" BORDER=\"1\">",
				false,
				"This is vitamin D, a steroid.");
			
				p.addAnswer(3, "<IMG SRC=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/0509a3.jpg\" ALT=\"Question #5, Answer #3\" BORDER=\"1\">",
				false,
				"This is cellulose, a polysaccharide.");
			
				p.addAnswer(4, "<IMG SRC=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/0509a4.jpg\" ALT=\"Question #5, Answer #4\" BORDER=\"1\">",
				false,
				"This is an amino acid.");
			
				p.addAnswer(5, "<IMG SRC=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/0509a5.jpg\" ALT=\"Question #5, Answer #5\" BORDER=\"1\">",
				true,
				"Phospholipids are composed of a phosphate group, a glycerol, and fatty acids.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334246;


		
		

		
			
			p.question = "Which of these is rich in unsaturated fats? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?5&D','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Lipids</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "a fat that is solid at room temperature",
				false,
				"Fats that are solid at room temperature are rich in saturated fats.");
			
				p.addAnswer(2, "butter",
				false,
				"Butter is rich in saturated fats.");
			
				p.addAnswer(3, "beef fat",
				false,
				"Beef fat is rich in saturated fats.");
			
				p.addAnswer(4, "lard",
				false,
				"Lard is rich in saturated fat.");
			
				p.addAnswer(5, "olive oil",
				true,
				"Olive oil is a plant oil, and most plant oils are rich in unsaturated fats.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334247;


		
		

		
			
			p.question = "A function of cholesterol that does not harm health is its role _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?5&D','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Lipids</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "in calcium and phosphate metabolism",
				false,
				"Vitamin D plays a role in calcium and phosphate metabolism.");
			
				p.addAnswer(2, "as a component of animal cell membranes",
				true,
				"Cholesterol is an important component of animal cell membranes.");
			
				p.addAnswer(3, "as the primary female sex hormone",
				false,
				"Estradiol is the primary female sex hormone.");
			
				p.addAnswer(4, "the most abundant male sex hormone",
				false,
				"Testosterone is the most abundant male sex hormone.");
			
				p.addAnswer(5, "All of cholesterol\'s effects cause the body harm.",
				false,
				"No, that is incorrect.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334248;


		
		

		
			
			p.question = "Click on the diagram to start the animation. This animation illustrates the functioning of a _____ protein. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?5&E','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Protein Functions</a>)<br><br><OBJECT classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=\"../../placeholders/external_placeholder.html?http%3A%2F%2Fdownload.macromedia.com%2Fpub%2Fshockwave%2Fcabs%2Fflash%2Fswflash.cab#version=5,0,0,0\" WIDTH=216 HEIGHT=160><PARAM NAME=movie VALUE=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/0512q.swf\"><PARAM NAME=quality VALUE=high><PARAM NAME=bgcolor VALUE=#FFFFFF><EMBED src=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/0512q.swf\" quality=high bgcolor=#FFFFFF WIDTH=216 HEIGHT=160 TYPE=\"application/x-shockwave-flash\" PLUGINSPAGE=\"../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.macromedia.com%2Fshockwave%2Fdownload%2Findex.cgi%3FP1_Prod_Version%3DShockwaveFlash\"></EMBED></OBJECT>";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "contractile",
				false,
				"Neither the cell, nor a part of the cell, is moving.");
			
				p.addAnswer(2, "receptor",
				false,
				"A molecule is not binding to the protein, nor is the protein emitting a second messenger.");
			
				p.addAnswer(3, "transport",
				true,
				"The protein is transporting a substance across the cell membrane.");
			
				p.addAnswer(4, "structural protein",
				false,
				"This is not illustrating the action of a structural protein.");
			
				p.addAnswer(5, "gene regulatory",
				false,
				"The protein in this animation is not binding to DNA.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334249;


		
		

		
			
			p.question = "Arrow A is indicating a(n) _____ protein. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?5&E','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Protein Functions</a>)<br><br><img SRC=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/0513q.jpg\" ALT=\"Question #13\" BORDER=\"1\">";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "transport",
				false,
				"Transport proteins carry molecules from place to place.");
			
				p.addAnswer(2, "enzyme",
				false,
				"Enzymes catalyze reactions.");
			
				p.addAnswer(3, "receptor",
				false,
				"This is not a receptor protein.");
			
				p.addAnswer(4, "signal",
				false,
				"This is not a signal protein.");
			
				p.addAnswer(5, "structural",
				true,
				"The arrow is indicating a structural protein.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334250;


		
		

		
			
			p.question = "Arrow D is indicating a _____ protein. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?5&E','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Protein Functions</a>)<br><br><img SRC=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/0514q.jpg\" ALT=\"Question #14\" BORDER=\"1\">";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "gene regulatory",
				false,
				"This protein cannot bind to DNA.");
			
				p.addAnswer(2, "receptor",
				true,
				"This protein has a binding site for a signal protein and can emit a second messenger.");
			
				p.addAnswer(3, "storage",
				false,
				"Ovalbumin is an example of a storage protein.");
			
				p.addAnswer(4, "transport",
				false,
				"This protein is not transporting a molecule.");
			
				p.addAnswer(5, "defensive",
				false,
				"Antibodies are a type of defensive protein.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334251;


		
		

		
			
			p.question = "Which of these does NOT contain a structural protein? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?5&E','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Protein Functions</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "muscles",
				false,
				"Muscles contain structural protein.");
			
				p.addAnswer(2, "tendons",
				false,
				"Tendons contain structural protein.");
			
				p.addAnswer(3, "ovalbumin",
				true,
				"Ovalbumin is a storage protein.");
			
				p.addAnswer(4, "spider silk",
				false,
				"Spider silk contains structural proteins.");
			
				p.addAnswer(5, "ligaments",
				false,
				"Ligaments contain structural protein.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334252;


		
		

		
			
			p.question = "Defensive proteins are manufactured by the _____ system. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?5&E','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Protein Functions</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "immune",
				true,
				"The immune system is involved in protecting the body against invasion by foreign objects.");
			
				p.addAnswer(2, "nervous",
				false,
				"The nervous system plays a role in coordinating body activity.");
			
				p.addAnswer(3, "digestive",
				false,
				"The primary role of the digestive system is the digestion and absorption of nutrients.");
			
				p.addAnswer(4, "integumentary",
				false,
				"While it has a defensive role, this is not the system that manufactures defensive proteins.");
			
				p.addAnswer(5, "cardiovascular",
				false,
				"However, the cardiovascular system does transport defensive proteins.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334253;


		
		

		
			
			p.question = "Proteins are polymers of _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?5&F','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Protein Structure</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "CH<SUB>2</SUB>O units",
				false,
				"This is suggestive of a carbohydrate.");
			
				p.addAnswer(2, "nucleotides",
				false,
				"Nucleic acids are polymers of nucleic acids.");
			
				p.addAnswer(3, "amino acids",
				true,
				"Proteins are polymers of amino acids.");
			
				p.addAnswer(4, "hydrocarbons",
				false,
				"Proteins contain more different elements than are found in hydrocarbons.");
			
				p.addAnswer(5, "glycerol",
				false,
				"Glycerol is a component of fats.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334254;


		
		

		
			
			p.question = "What type of bond joins the monomers in a protein\'s primary structure? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?5&F','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Protein Structure</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "ionic",
				false,
				"Ionic bonds are not involved in a protein\'s primary structure.");
			
				p.addAnswer(2, "hydrophobic",
				false,
				"Hydrophobic interactions are not involved in a protein\'s primary structure.");
			
				p.addAnswer(3, "peptide",
				true,
				"The amino acids of a protein are linked by peptide bonds.");
			
				p.addAnswer(4, "S&#151;S",
				false,
				"Bonds between sulfur atoms are not involved in a protein\'s primary structure.");
			
				p.addAnswer(5, "hydrogen",
				false,
				"Hydrogen bonds are not involved in a protein\'s primary structure.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334255;


		
		

		
			
			p.question = "Which of these illustrates the secondary structure of a protein? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?5&F','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Protein Structure</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "<IMG SRC=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/0519a1.jpg\" ALT=\"Question #19, Answer #1\" BORDER=\"1\">",
				false,
				"This is an amino acid.");
			
				p.addAnswer(2, "<IMG SRC=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/0519a2.jpg\" ALT=\"Question #19, Answer #2\" BORDER=\"1\">",
				false,
				"This type of folding is characteristic of a protein\'s tertiary structure.");
			
				p.addAnswer(3, "<IMG SRC=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/0519a3.jpg\" ALT=\"Question #19, Answer #3\" BORDER=\"1\">",
				false,
				"This is an illustration of a protein\'s primary structure.");
			
				p.addAnswer(4, "<IMG SRC=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/0519a4.jpg\" ALT=\"Question #19, Answer #4\" BORDER=\"1\">",
				false,
				"A protein\'s quaternary structure involves two or more polypeptide chains.");
			
				p.addAnswer(5, "<IMG SRC=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/0519a5.jpg\" ALT=\"Question #19, Answer #5\" BORDER=\"1\">",
				true,
				"Alpha helices and beta pleated sheets are characteristic of a protein\'s secondary structure.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334256;


		
		

		
			
			p.question = "The secondary structure of a protein results from _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?5&F','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Protein Structure</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "hydrogen bonds",
				true,
				"Electronegative oxygen and nitrogen atoms leave hydrogen atoms with partial positive charges.");
			
				p.addAnswer(2, "ionic bonds",
				false,
				"Ionic bonds play a role in another of the levels of protein structure.");
			
				p.addAnswer(3, "hydrophobic interactions",
				false,
				"Hydrophobic interactions play a role in another of the levels of protein structure.");
			
				p.addAnswer(4, "peptide bonds",
				false,
				"Not directly.");
			
				p.addAnswer(5, "bonds between sulfur atoms",
				false,
				"Bonds between sulfur atoms play a role in another of the levels of protein structure.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334257;


		
		

		
			
			p.question = "Tertiary structure is NOT directly dependent on _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?5&F','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Protein Structure</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "hydrophobic interactions",
				false,
				"Hydrophobic R groups cluster on the inside of a protein.");
			
				p.addAnswer(2, "peptide bonds",
				true,
				"Peptide bonds link together the amino acids of a protein\'s primary structure.");
			
				p.addAnswer(3, "hydrogen bonds",
				false,
				"Hydrogen bonds may form between hydrophilic R groups or between hydrophilic R groups and water.");
			
				p.addAnswer(4, "ionic bonds",
				false,
				"Ionic bonds form between ionized R groups.");
			
				p.addAnswer(5, "bonds between sulfur atoms",
				false,
				"Bonds between sulfur atoms help stabilize a protein\'s tertiary structure.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334258;


		
		

		
			
			p.question = "If a strand of DNA has the nitrogen base sequence ATTTGC, what will be the sequence of the matching strand? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?5&H','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Nucleic Acid Structure</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "GCAAAT",
				false,
				"This is not how the nitrogenous bases pair.");
			
				p.addAnswer(2, "ATTTGC",
				false,
				"This is not how the nitrogenous bases pair.");
			
				p.addAnswer(3, "TAAACG",
				true,
				"Adenine pairs with thymine and guanine pairs with cytosine.");
			
				p.addAnswer(4, "TUUUCG",
				false,
				"DNA does not contain uracil.");
			
				p.addAnswer(5, "UAAACG",
				false,
				"DNA does not contain uracil.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334259;


		
		

		
			
			p.question = "If a DNA double helix is 100 nucleotide pairs long and contains 25 adenine bases, how many guanine bases does it contain? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?5&H','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Nucleic Acid Structure</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "25",
				false,
				"There would be 25 thymine bases.");
			
				p.addAnswer(2, "150",
				false,
				"This is the sum of guanine and cytosine bases.");
			
				p.addAnswer(3, "75",
				true,
				"100 nucleotide pairs are a total of 200 nucleotides. Because of base pairing, if there are 25 adenine there must also be 25 guanine. This leaves 200&#150;50 = 150 nucleotides to be divided evenly between guanine and cytosine.");
			
				p.addAnswer(4, "50",
				false,
				"The sum of adenine and thymine bases equals 50.");
			
				p.addAnswer(5, "200",
				false,
				"This is the total number of nitrogenous bases in this double helix.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334260;


		
		

		
			
			p.question = "The two strands of a DNA double helix are held together by _____ that form between pairs of nitrogenous bases. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?5&H','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Nucleic Acid Structure</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "hydrogen bonds",
				true,
				"Nitrogenous base pairs are joined by hydrogen bonds.");
			
				p.addAnswer(2, "ionic bonds",
				false,
				"Nitrogenous base pairs are not held together by ionic bonds.");
			
				p.addAnswer(3, "hydrophilic interactions",
				false,
				"Nitrogenous base pairs are not held together by hydrophilic interactions.");
			
				p.addAnswer(4, "S&#151;S bonds",
				false,
				"DNA does not contain sulfur.");
			
				p.addAnswer(5, "covalent bonds",
				false,
				"Nitrogenous base pairs are not held together by covalent bonds.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334261;


		
		

		
			
			p.question = "A nucleotide is composed of a(n) _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?5&H','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Nucleic Acid Structure</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "phosphate group, a nitrogen-containing base, and a hydrocarbon",
				false,
				"Hydrocarbons are not a component of nucleotides.");
			
				p.addAnswer(2, "phosphate group, a nitrogen-containing base, and a five-carbon sugar",
				true,
				"These are the components of a nucleotide.");
			
				p.addAnswer(3, "glycerol, a nitrogen-containing base, and a five-carbon sugar",
				false,
				"Glycerol is found in fats.");
			
				p.addAnswer(4, "amino group, a nitrogen-containing base, and a five-carbon sugar",
				false,
				"Amino groups are components of amines, not nucleic acids.");
			
				p.addAnswer(5, "sulfhydryl group, a nitrogen-containing base, and a five-carbon sugar",
				false,
				"Sulfhydryl groups are not characteristic of nucleotides.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

