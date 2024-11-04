

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "20: Modern Biotechnology > Activities Quiz";
	ak.quiz_loc_with_commas = "20: Modern Biotechnology, Activities Quiz";
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
		
		p.id = 335282;


		
		

		
			
			p.question = "The unpaired nucleotides produced by the action of restriction enzymes are referred to as _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?20&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Restriction Enzymes</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "sticky ends",
				true,
				"They are called sticky ends since they will \"stick\" to a complementary single-stranded sequence.");
			
				p.addAnswer(2, "base sequences",
				false,
				"What is the specific term applied to such base sequences?");
			
				p.addAnswer(3, "single strands",
				false,
				"Only a segment of any resultant DNA fragment is single-stranded.");
			
				p.addAnswer(4, "restriction fragments",
				false,
				"The entire piece of cut DNA is a restriction fragment. However, the question is asking about the unpaired nucleotides of the restriction fragments.");
			
				p.addAnswer(5, "ligases",
				false,
				"However, ligase does have a role in the production of recombinant DNA.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335283;


		
		

		
			
			p.question = "The sticky end of the DNA restriction fragment shown here will pair with a DNA restriction fragment with the sticky end _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?20&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Restriction Enzymes</a>)<br><br><img SRC=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/2002q.jpg\" ALT=\"Question #2\" BORDER=\"1\" >";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "-ACGT",
				true,
				"The matching of sticky ends follows the rules of specific base pairing.");
			
				p.addAnswer(2, "-AAAA",
				false,
				"You may want to review specific base pairing.");
			
				p.addAnswer(3, "-ACGU",
				false,
				"DNA does not contain uracil.");
			
				p.addAnswer(4, "-GTAC",
				false,
				"You may want to review specific base pairing.");
			
				p.addAnswer(5, "-TGCA",
				false,
				"In order to pair, the strands must be complementary.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335284;


		
		

		
			
			p.question = "In order to insert a human gene into a plasmid, both must _____ (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?20&C','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Cloning a Gene in Bacteria</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "have identical DNA sequences",
				false,
				"The entire DNA sequence does not need to be identical.");
			
				p.addAnswer(2, "originate from the same type of cell",
				false,
				"Plasmids are obtained from bacteria.");
			
				p.addAnswer(3, "code for the same gene product",
				false,
				"No. They don\'t.");
			
				p.addAnswer(4, "be cut by the same restriction enzyme",
				true,
				"Doing so will result in the formation of complementary sticky ends.");
			
				p.addAnswer(5, "be the same length",
				false,
				"The DNA sequences do not need to be the same length.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335285;


		
		

		
			
			p.question = "What enzyme forms covalent bonds between restriction fragments? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?20&C','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Cloning a Gene in Bacteria</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "DNA primase",
				false,
				"This enzyme makes the RNA primer needed for DNA replication.");
			
				p.addAnswer(2, "DNA helicase",
				false,
				"DNA helicase uncoils the DNA double helix during DNA replication.");
			
				p.addAnswer(3, "single-stranded binding protein",
				false,
				"During DNA replication this enzyme holds DNA strands apart so that they can serve as templates for the synthesis of complementary strands.");
			
				p.addAnswer(4, "DNA polymerase",
				false,
				"During DNA replication this enzyme is responsible for adding nucleotides to the newly forming DNA strand.");
			
				p.addAnswer(5, "DNA ligase",
				true,
				"DNA ligase catalyzes the formation of covalent bonds between restriction fragments.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335286;


		
		

		
			
			p.question = "Click on the diagram to start the animation.<br>What name is given to the process shown in this animation? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?20&C','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Cloning a Gene in Bacteria</a>)<br><br><OBJECT classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=\"../../placeholders/external_placeholder.html?http%3A%2F%2Fdownload.macromedia.com%2Fpub%2Fshockwave%2Fcabs%2Fflash%2Fswflash.cab#version=5,0,0,0\" WIDTH=216 HEIGHT=160><PARAM NAME=movie VALUE=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/2005q.swf\"><PARAM NAME=quality VALUE=high><PARAM NAME=bgcolor VALUE=#FFFFFF><EMBED src=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/2005q.swf\" quality=high bgcolor=#FFFFFF WIDTH=216 HEIGHT=160 TYPE=\"application/x-shockwave-flash\" PLUGINSPAGE=\"../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.macromedia.com%2Fshockwave%2Fdownload%2Findex.cgi%3FP1_Prod_Version%3DShockwaveFlash\"></EMBED></OBJECT>";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "transduction",
				false,
				"This is the name given to the process by which a phage transfers bacterial DNA from one bacterium to another.");
			
				p.addAnswer(2, "translation",
				false,
				"This is the process by which information encoded in an mRNA sequence is used to build a polypeptide chain.");
			
				p.addAnswer(3, "conjugation",
				false,
				"This is the process by which one bacterium directly transfers genetic material to another bacterium.");
			
				p.addAnswer(4, "cloning",
				false,
				"Cloning occurs with the replication of a recombinant plasmid.");
			
				p.addAnswer(5, "transformation",
				true,
				"Transformation is the process by which a bacterium takes up a plasmid from the surrounding solution.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335287;


		
		

		
			
			p.question = "Click on the diagram to start the animation.<br>What name is given to the process shown in this animation? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?20&C','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Cloning a Gene in Bacteria</a>)<br><br><OBJECT classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=\"../../placeholders/external_placeholder.html?http%3A%2F%2Fdownload.macromedia.com%2Fpub%2Fshockwave%2Fcabs%2Fflash%2Fswflash.cab#version=5,0,0,0\" WIDTH=216 HEIGHT=160><PARAM NAME=movie VALUE=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/2006q.swf\"><PARAM NAME=quality VALUE=high><PARAM NAME=bgcolor VALUE=#FFFFFF><EMBED src=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/2006q.swf\" quality=high bgcolor=#FFFFFF WIDTH=216 HEIGHT=160 TYPE=\"application/x-shockwave-flash\" PLUGINSPAGE=\"../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.macromedia.com%2Fshockwave%2Fdownload%2Findex.cgi%3FP1_Prod_Version%3DShockwaveFlash\"></EMBED></OBJECT>";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "transduction",
				false,
				"This is the name given to the process by which a phage transfers bacterial DNA from one bacterium to another.");
			
				p.addAnswer(2, "translation",
				false,
				"This is the process by which information encoded in an mRNA sequence is used to build a polypeptide chain.");
			
				p.addAnswer(3, "conjugation",
				false,
				"This is the process by which one bacterium directly transfers genetic material to another bacterium.");
			
				p.addAnswer(4, "cloning",
				true,
				"Cloning occurs with the replication of a recombinant plasmid.");
			
				p.addAnswer(5, "transformation",
				false,
				"Transformation is the process by which a bacterium takes up a plasmid from the surrounding solution.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335288;


		
		

		
			
			p.question = "Click on the diagram to start the animation. This is an animation of gel electrophoresis. Which of these DNA molecules is the shortest? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?20&D','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Gel Electrophoresis of DNA</a>)<br><br><OBJECT classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=\"../../placeholders/external_placeholder.html?http%3A%2F%2Fdownload.macromedia.com%2Fpub%2Fshockwave%2Fcabs%2Fflash%2Fswflash.cab#version=5,0,0,0\" WIDTH=150 HEIGHT=125><PARAM NAME=movie VALUE=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/2007q.swf\"><PARAM NAME=quality VALUE=high><PARAM NAME=bgcolor VALUE=#FFFFFF><EMBED src=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/2007q.swf\" quality=high bgcolor=#FFFFFF WIDTH=150 HEIGHT=125 TYPE=\"application/x-shockwave-flash\" PLUGINSPAGE=\"../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.macromedia.com%2Fshockwave%2Fdownload%2Findex.cgi%3FP1_Prod_Version%3DShockwaveFlash\"></EMBED></OBJECT>";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "A",
				false,
				"No, that is incorrect.");
			
				p.addAnswer(2, "B",
				false,
				"This is one of the longer DNA molecules.");
			
				p.addAnswer(3, "C",
				false,
				"This is a \"midsize\" DNA molecule.");
			
				p.addAnswer(4, "D",
				false,
				"This is a \"midsize\" DNA molecule.");
			
				p.addAnswer(5, "E",
				true,
				"The shorter the DNA molecule, the farther it moves.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335289;


		
		

		
			
			p.question = "In gel electrophoresis DNA molecules migrate from _____ to _____ ends of the gel. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?20&D','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Gel Electrophoresis of DNA</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "acidic ... basic",
				false,
				"The entire gel is of the same pH.");
			
				p.addAnswer(2, "negative ... positive",
				true,
				"An electrical current is generated across the gel, and DNA molecules migrate from the negative end toward the positive end.");
			
				p.addAnswer(3, "basic ... acidic",
				false,
				"The entire gel is of the same pH.");
			
				p.addAnswer(4, "long ... short",
				false,
				"Perhaps you are thinking that shorter DNA molecules move farther than longer DNA molecules.");
			
				p.addAnswer(5, "positive ... negative",
				false,
				"You have the right idea but the wrong answer.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335290;


		
		

		
			
			p.question = "This is a DNA fingerprint exhibiting samples from a victim, two suspects, and the crime scene. Which of these DNA fragments is common to both the victim and Suspect 1? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?20&G','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: DNA Fingerprinting</a>)<br><br><img SRC=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/2009q.jpg\" ALT=\"Question #9\" BORDER=\"1\">";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "A",
				false,
				"You need to reexamine the results.");
			
				p.addAnswer(2, "B",
				true,
				"A visual comparison of the gel electrophoresis results should reveal that Suspect 1 has a DNA fragment that matches victim DNA fragment B.");
			
				p.addAnswer(3, "C",
				false,
				"You need to reexamine the results.");
			
				p.addAnswer(4, "D",
				false,
				"You need to reexamine the results.");
			
				p.addAnswer(5, "E",
				false,
				"You need to reexamine the results.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335291;


		
		

		
			
			p.question = "This is a DNA fingerprint exhibiting samples from a victim, two suspects, and the crime scene. Which of these DNA fragments is common to both the victim and Suspect 2? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?20&G','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: DNA Fingerprinting</a>)<br><br><img SRC=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/2010q.jpg\" ALT=\"Question #10\" BORDER=\"1\">";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "A",
				false,
				"You need to reexamine the results.");
			
				p.addAnswer(2, "B",
				false,
				"You need to reexamine the results.");
			
				p.addAnswer(3, "C",
				true,
				"A visual comparison of the gel electrophoresis results should reveal that Suspect 2 has a DNA fragment that matches victim DNA fragment C.");
			
				p.addAnswer(4, "D",
				false,
				"You need to reexamine the results.");
			
				p.addAnswer(5, "E",
				false,
				"You need to reexamine the results.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335292;


		
		

		
			
			p.question = "Why is Suspect 1 considered more likely to have committed the crime than Suspect 2? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?20&G','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: DNA Fingerprinting</a>)<br><br><img SRC=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/2011q.jpg\" ALT=\"Question #11\" BORDER=\"1\">";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "The crime scene sample contains DNA fragments from both the victim and Suspect 1.",
				true,
				"Such a good match between crime scene DNA fragments and Suspect 1 DNA fragments strongly suggest that Suspect 1 committed the crime.");
			
				p.addAnswer(2, "The crime scene sample contains DNA fragments from both the victim and Suspect 2.",
				false,
				"Suspect 1 has a better match to the crime scene DNA fragments than Suspect 2.");
			
				p.addAnswer(3, "Suspect 1 and the victim have more DNA fragments in common that do the victim and Suspect 2.",
				false,
				"Such matches do not provide information with regard to who committed the crime. However, the more DNA fragments in common between two individuals, the closer their genetic relationship.");
			
				p.addAnswer(4, "Suspect 2 and the victim have more DNA fragments in common that do the victim and Suspect 1.",
				false,
				"Such matches do not provide information with regard to who committed the crime. However, the more DNA fragments in common between two individuals, the closer their genetic relationship.");
			
				p.addAnswer(5, "Suspect 1 and Suspect 2 have more DNA fragments in common than either have in common with the victim.",
				false,
				"This provides information only with regard to the genetic relationship between Suspect 1 and Suspect 2, not who committed the crime.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335293;


		
		

		
			
			p.question = "Why is golden rice pale yellow in color? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?20&H','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Making Decisions About DNA Technology: Golden Rice</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "It is rich in chlorophyll <i>a</i>.",
				false,
				"Chlorophyll <i>a</i> is blue-green.");
			
				p.addAnswer(2, "It is nutrient-poor.",
				false,
				"Golden rice is rich in, especially, one particular nutrient.");
			
				p.addAnswer(3, "It is rich in beta-carotene.",
				true,
				"Beta-carotene confers a yellow color on the rice.");
			
				p.addAnswer(4, "It is rich in chlorophyll <i>b</i>.",
				false,
				"Chlorophyll <i>b</i> is yellow-green.");
			
				p.addAnswer(5, "It is rich in phycobilins.",
				false,
				"Phycobilins are pigments found in red algae.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335294;


		
		

		
			
			p.question = "Which of these is a symptom of vitamin A deficiency? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?20&H','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Making Decisions About DNA Technology: Golden Rice</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "osteoporosis",
				false,
				"This is a symptom of calcium deficiency.");
			
				p.addAnswer(2, "impaired taste perception",
				false,
				"This is a symptom of vitamin E deficiency.");
			
				p.addAnswer(3, "overstimulation of the immune system",
				false,
				"This is a symptom of vitamin A toxicity.");
			
				p.addAnswer(4, "blindness",
				true,
				"Chronic vitamin A deficiency can lead to blindness.");
			
				p.addAnswer(5, "impaired blood clotting",
				false,
				"This is a symptom of vitamin K deficiency.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335295;


		
		

		
			
			p.question = "Which of these is a vitamin A precursor? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?20&H','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Making Decisions About DNA Technology: Golden Rice</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "cobalamin",
				false,
				"This is another name for vitamin B<sub>12</sub>.");
			
				p.addAnswer(2, "pyridoxine",
				false,
				"This is another name for vitamin B<sub>6</sub>.");
			
				p.addAnswer(3, "plasmid",
				false,
				"Plasmids, circular bits of DNA, are found in bacteria.");
			
				p.addAnswer(4, "beta-carotene",
				true,
				"The body can convert beta-carotene into vitamin A.");
			
				p.addAnswer(5, "thiamin",
				false,
				"This is another name for vitamin B<sub>1</sub>.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335296;


		
		

		
			
			p.question = "The transfer of antibiotic-resistant genes from genetically engineered bacteria to disease-causing bacteria _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?20&H','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Making Decisions About DNA Technology: Golden Rice</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "would, if it occurred, be no cause for concern",
				false,
				"If it did occur, it would have the potential of being a major health threat.");
			
				p.addAnswer(2, "has occurred",
				false,
				"It hasn\'t.");
			
				p.addAnswer(3, "is likely to occur",
				false,
				"It isn\'t.");
			
				p.addAnswer(4, "can never occur",
				false,
				"Well, \"never\" is too strong a word to use.");
			
				p.addAnswer(5, "seems unlikely",
				true,
				"It seems unlikely to occur and there is no evidence that it has occurred.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

