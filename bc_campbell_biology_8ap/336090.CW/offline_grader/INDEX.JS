

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "36: Transport in Vascular Plants > Activities Quiz";
	ak.quiz_loc_with_commas = "36: Transport in Vascular Plants, Activities Quiz";
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
		
		p.id = 336091;


		
		

		
			
			p.question = "The channels indicated by the pointer, are _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?36&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Transport of Xylem Sap</a>)<br><br><img SRC=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/3601q.jpg\" ALT=\"Question #1\" BORDER=\"1\" >";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "gap junctions",
				false,
				"Gap junctions, which do form channels between cells, are found in animal cells. See the Chapter 6 activity on cell junctions.");
			
				p.addAnswer(2, "desmosomes",
				false,
				"Desmosomes, a type of cell junction found in animal cells, do not form channels between cells. See the Chapter 6 activity on cell junctions.");
			
				p.addAnswer(3, "tight junctions",
				false,
				"Tight junctions, a type of cell junction found in animal cells, do not form channels between cells. See the Chapter 6 activity on cell junctions.");
			
				p.addAnswer(4, "mycorrhizae",
				false,
				"Mycorrhizae are associations of roots and fungi.");
			
				p.addAnswer(5, "plasmodesmata",
				true,
				"Water and ions can pass from cell to cell via these channels.  Also, recall that plasmodesmata are a type of cell junction.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336092;


		
		

		
			
			p.question = "Which of these are symbiotic associations? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?36&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Transport of Xylem Sap</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "root hairs",
				false,
				"No, that is incorrect.");
			
				p.addAnswer(2, "apoplasts",
				false,
				"The apoplast is a continuum of cell walls along which water and ions can traverse a root.");
			
				p.addAnswer(3, "Casparian strips",
				false,
				"The Casparian strip is a waterproof band found in roots.");
			
				p.addAnswer(4, "mycorrhizae",
				true,
				"Mycorrhizae are mutualistic associations of roots and fungi.");
			
				p.addAnswer(5, "symplast",
				false,
				"The symplast is a cytoplasmic continuum through which water and ions can traverse a root.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336093;


		
		

		
			
			p.question = "Click on the diagram to start the animation. This is an animation of the movement of water and ions through the root _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?36&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Transport of Xylem Sap</a>)<br><br><OBJECT classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=\"../../placeholders/external_placeholder.html?http%3A%2F%2Fdownload.macromedia.com%2Fpub%2Fshockwave%2Fcabs%2Fflash%2Fswflash.cab#version=5,0,0,0\" WIDTH=324 HEIGHT=240><PARAM NAME=movie VALUE=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/3603q.swf\"><PARAM NAME=quality VALUE=high><PARAM NAME=bgcolor VALUE=#FFFFFF><EMBED src=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/3603q.swf\" quality=high bgcolor=#FFFFFF  WIDTH=324 HEIGHT=240 TYPE=\"application/x-shockwave-flash\" PLUGINSPAGE=\"../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.macromedia.com%2Fshockwave%2Fdownload%2Findex.cgi%3FP1_Prod_Version%3DShockwaveFlash\"></EMBED></OBJECT>";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "from cell to cell, across cell membranes and cell walls",
				false,
				"This is not what is seen in the animation.");
			
				p.addAnswer(2, "via the symplastic route",
				false,
				"The symplastic route involves water and ions moving from cell to cell via a cytoplasmic continuum.");
			
				p.addAnswer(3, "via a combination of the movement through plasmodesmata and across cell membranes",
				false,
				"Perhaps you should take another look at the animation.");
			
				p.addAnswer(4, "via the mycorrhizal route",
				false,
				"No, that is incorrect.");
			
				p.addAnswer(5, "via the apoplastic route",
				true,
				"The animation illustrates water and ions moving along a cell wall continuum.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336094;


		
		

		
			
			p.question = "In roots the _____ forces water and solutes to pass through the plasma membranes of _____ cells before entering the _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?36&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Transport of Xylem Sap</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Casparian strip ... ectoderm ... xylem",
				false,
				"Water and solutes are already within the root; thus they have already passed through any outer layers of the root.");
			
				p.addAnswer(2, "Casparian strip ... endodermis ... xylem",
				true,
				"The Casparian strip is a waterproof barrier that forces water and solutes to pass through the plasma membranes of endodermis cells.");
			
				p.addAnswer(3, "Casparian strip ... endodermis ... phloem",
				false,
				"Phloem translocates phloem sap from the leaves.");
			
				p.addAnswer(4, "xylem ... endodermis ... Casparian strip",
				false,
				"You may have the right idea with just a few of your terms confused.");
			
				p.addAnswer(5, "transpiration ... endodermis ... xylem",
				false,
				"Transpiration is the evaporation of water from leaves; it does not force water through the plasma membranes of endodermis cells.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336095;


		
		

		
			
			p.question = "_____ provide(s) the major force for the movement of water and solutes from roots to leaves. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?36&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Transport of Xylem Sap</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Translocation",
				false,
				"Translocation is the transport of food that occurs in phloem.");
			
				p.addAnswer(2, "Bulk flow",
				false,
				"Bulk flow is the force responsible for the translocation that occurs in phloem.");
			
				p.addAnswer(3, "Transpiration",
				true,
				"Transpiration, the evaporation of water from leaves, exerts a pull that bears the primary responsibility for the movement of water and solutes from roots to leaves.");
			
				p.addAnswer(4, "Root pressure",
				false,
				"While root pressure is a force involved in the movement of water and solutes from roots to leaves, it is not the primary mechanism by which such movement occurs.");
			
				p.addAnswer(5, "Transfer cells",
				false,
				"Transfer cells are cells modified to enhance the movement of solutes between symplast and apoplast.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336096;


		
		

		
			
			p.question = "_____ bonds are responsible for the cohesion of water molecules. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?36&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Transport of Xylem Sap</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Ionic",
				false,
				"You might want to review chapter 3.");
			
				p.addAnswer(2, "Hydrogen",
				true,
				"Hydrogen bonds among water molecules are responsible for the tendency of those molecules to stick together.");
			
				p.addAnswer(3, "Nonpolar covalent",
				false,
				"You might want to review chapter 3.");
			
				p.addAnswer(4, "Polar covalent",
				false,
				"You might want to review chapter 3.");
			
				p.addAnswer(5, "Peptide",
				false,
				"Peptide bonds join amino acids.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336097;


		
		

		
			
			p.question = "_____ cells are the cells that regulate the opening and closing of stomata, thus playing a role in regulating transpiration. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?36&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Transport of Xylem Sap</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Tracheid",
				false,
				"Tracheids are a component of xylem.");
			
				p.addAnswer(2, "Casparian strip",
				false,
				"Stomata are found on leaves and stems; the Casparian strip is found in roots.");
			
				p.addAnswer(3, "Sieve-tube member",
				false,
				"Sieve-tube members are a component of phloem.");
			
				p.addAnswer(4, "Companion",
				false,
				"Companion cells are a component of phloem.");
			
				p.addAnswer(5, "Guard",
				true,
				"Guard cells regulate the opening and closing of stomata.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336098;


		
		

		
			
			p.question = "Which of these processes is responsible for leaves being considered sugar sources? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?36&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Translocation of Phloem Sap</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "catabolism",
				false,
				"Catabolism is the breakdown of compounds.");
			
				p.addAnswer(2, "glycolysis",
				false,
				"Glycolysis breaks down sugars.");
			
				p.addAnswer(3, "citric acid cycle",
				false,
				"The citric acid cycle is involved in the release of energy from fuel molecules.");
			
				p.addAnswer(4, "photosynthesis",
				true,
				"Leaves produce sugar via photosynthesis.");
			
				p.addAnswer(5, "Krebs cycle",
				false,
				"The Krebs cycle is another name for the citric acid cycle.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336099;


		
		

		
			
			p.question = "_____ transport(s) sugars from leaves to, for example, taproots. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?36&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Translocation of Phloem Sap</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Blood vessels",
				false,
				"Organisms with blood vessels do not have taproots.");
			
				p.addAnswer(2, "Tracheids",
				false,
				"Tracheids are a component of xylem.");
			
				p.addAnswer(3, "Phloem",
				true,
				"Phloem is responsible for the transport of sugars.");
			
				p.addAnswer(4, "Vessel elements",
				false,
				"Vessel elements are a component of xylem.");
			
				p.addAnswer(5, "Xylem",
				false,
				"Xylem transports water and ions from the roots up to the leaves.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336100;


		
		

		
			
			p.question = "Sugar moves from leaves into the _____ of _____ by _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?36&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Translocation of Phloem Sap</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "sieve-tube members ... phloem ... active transport",
				true,
				"Correct.");
			
				p.addAnswer(2, "sieve-tube members ... xylem ... active transport",
				false,
				"Sugar does not move into xylem.");
			
				p.addAnswer(3, "sieve-tube members ... phloem ... diffusion",
				false,
				"Sugar does not diffuse into sieve-tube members.");
			
				p.addAnswer(4, "tracheids ... phloem ... active transport",
				false,
				"Phloem does not contain tracheids.");
			
				p.addAnswer(5, "tracheids ... phloem ... diffusion",
				false,
				"Phloem is the only correct portion of this choice.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336101;


		
		

		
			
			p.question = "The water pressure that pushes water and sugar from sugar source to sugar sink is referred to as _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?36&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Translocation of Phloem Sap</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "translocation",
				false,
				"Translocation is the transport of food that occurs in phloem; it is not the water pressure responsible for the flow.");
			
				p.addAnswer(2, "bulk flow",
				true,
				"Bulk flow is the force responsible for the translocation that occurs in phloem.");
			
				p.addAnswer(3, "transpiration",
				false,
				"Transpiration, the evaporation of water from leaves, exerts a pull that bears the primary responsibility for the movement of water and solutes from roots to leaves.");
			
				p.addAnswer(4, "root pressure",
				false,
				"Root pressure is a force involved in the movement of water and solutes from roots to leaves.");
			
				p.addAnswer(5, "solute pressure",
				false,
				"No, that is incorrect.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336102;


		
		

		
			
			p.question = "Water moves into phloem by _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?36&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Translocation of Phloem Sap</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "root pressure",
				false,
				"Root pressure plays a role in the upward movement of water and solutes in xylem.");
			
				p.addAnswer(2, "transpiration",
				false,
				"Transpiration is the evaporation of water from leaves.");
			
				p.addAnswer(3, "osmosis",
				true,
				"Water moves down its concentration gradient into phloem by osmosis.");
			
				p.addAnswer(4, "endocytosis",
				false,
				"No, that is incorrect.");
			
				p.addAnswer(5, "active transport",
				false,
				"This movement of water, itself, does not require the cell to expend energy.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336103;


		
		

		
			
			p.question = "At a sugar sink, sugar is removed from phloem by _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?36&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Translocation of Phloem Sap</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "root pressure",
				false,
				"Root pressure plays a role in the upward movement of water and solutes in xylem.");
			
				p.addAnswer(2, "transpiration",
				false,
				"Transpiration is the evaporation of water from leaves.");
			
				p.addAnswer(3, "osmosis",
				false,
				"Osmosis is the diffusion of water.");
			
				p.addAnswer(4, "diffusion",
				false,
				"The cell must expend energy to move sugar from phloem into a sugar sink.");
			
				p.addAnswer(5, "active transport",
				true,
				"Active transport moves sugar from phloem into a sugar sink.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336104;


		
		

		
			
			p.question = "In a sugar sink, such as a taproot, sugar is converted into _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?36&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Translocation of Phloem Sap</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "starch",
				true,
				"Plants store carbohydrates in the form of starch.");
			
				p.addAnswer(2, "fatty acids",
				false,
				"In plants, most sugars are stored as a form of carbohydrate.");
			
				p.addAnswer(3, "cellulose",
				false,
				"While a carbohydrate, cellulose is not the form in which sugars are stored.");
			
				p.addAnswer(4, "glycogen",
				false,
				"Animals store carbohydrates in the form of glycogen.");
			
				p.addAnswer(5, "proteins",
				false,
				"In plants, most sugars are stored as a form of carbohydrate.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 336105;


		
		

		
			
			p.question = "_____ is responsible for the movement of sugars from leaves to taproots; _____ is responsible for the movements of sugar from taproots to leaves. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?36&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Translocation of Phloem Sap</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Transpiration ... transpiration",
				false,
				"Transpiration is the evaporation of water from leaves.");
			
				p.addAnswer(2, "Bulk flow ... bulk flow",
				true,
				"In both situations the mechanism of movement is the same.");
			
				p.addAnswer(3, "Bulk flow ... root pressure",
				false,
				"Root pressure plays a role in the upward movement of water and solutes in xylem.");
			
				p.addAnswer(4, "Bulk flow ... transpiration",
				false,
				"Transpiration is the evaporation of water from leaves.");
			
				p.addAnswer(5, "Root pressure ... bulk flow",
				false,
				"Root pressure plays a role in the upward movement of water and solutes in xylem.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

