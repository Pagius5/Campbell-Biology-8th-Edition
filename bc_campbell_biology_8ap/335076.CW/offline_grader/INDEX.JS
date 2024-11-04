

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "17: From Gene to Protein > Activities Quiz";
	ak.quiz_loc_with_commas = "17: From Gene to Protein, Activities Quiz";
	ak.quiz_title = "Activities Quiz";

	
		ak.help_url = "../../placeholders/help_placeholder.html";
	
	ak.essay_total = 0;
	ak.pair_problem_total = 0;
	ak.pair_total = 0;
	ak.problem_total = 20;
	ak.non_essay_total = 20;
	ak.scored_item_total = 20;

	
	
	


	
	ak.copyright_date = "2008";
	ak.brandname = "Pearson Benjamin Cummings";
	ak.legal = "../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.pearsoned.com%2Flegal%2Findex.htm";


	// Loop over all problems
	
	
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335077;


		
		

		
			
			p.question = "Click on the diagram to start the animation. What name is given to the process in which a strand of DNA is used as a template for the manufacture of a strand of pre-mRNA? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?17&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Overview of Protein Synthesis</a>)<br><br><OBJECT classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=\"../../placeholders/external_placeholder.html?http%3A%2F%2Fdownload.macromedia.com%2Fpub%2Fshockwave%2Fcabs%2Fflash%2Fswflash.cab#version=5,0,0,0\" WIDTH=324 HEIGHT=240><PARAM NAME=movie VALUE=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/1701q.swf\"><PARAM NAME=quality VALUE=high><PARAM NAME=bgcolor VALUE=#FFFFFF><EMBED src=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/1701q.swf\" quality=high bgcolor=#FFFFFF WIDTH=324 HEIGHT=240 TYPE=\"application/x-shockwave-flash\" PLUGINSPAGE=\"../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.macromedia.com%2Fshockwave%2Fdownload%2Findex.cgi%3FP1_Prod_Version%3DShockwaveFlash\"></EMBED></OBJECT>";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "RNA processing",
				false,
				"This is a latter stage of the process by which information encoded in DNA is converted to protein.");
			
				p.addAnswer(2, "gene expression",
				false,
				"\"Gene expression\" is the term for the conversion of genetic information into protein.");
			
				p.addAnswer(3, "polypeptide formation",
				false,
				"Polypeptide formation is a latter point in the process by which information encoded in DNA is used manufacture a protein.");
			
				p.addAnswer(4, "transcription",
				true,
				"Transcription is the process by which a DNA template is used for the manufacture of several different types of RNA.");
			
				p.addAnswer(5, "translation",
				false,
				"This is a latter stage of the process by which information encoded in DNA is converted to protein.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335078;


		
		

		
			
			p.question = "Click on the diagram to start the animation. What name is given to the process in which the information encoded in a strand of mRNA is used to construct a protein? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?17&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Overview of Protein Synthesis</a>)<br><br><OBJECT classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=\"../../placeholders/external_placeholder.html?http%3A%2F%2Fdownload.macromedia.com%2Fpub%2Fshockwave%2Fcabs%2Fflash%2Fswflash.cab#version=5,0,0,0\" WIDTH=324 HEIGHT=240><PARAM NAME=movie VALUE=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/1702q.swf\"><PARAM NAME=quality VALUE=high><PARAM NAME=bgcolor VALUE=#FFFFFF><EMBED src=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/1702q.swf\" quality=high bgcolor=#FFFFFF WIDTH=324 HEIGHT=240 TYPE=\"application/x-shockwave-flash\" PLUGINSPAGE=\"../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.macromedia.com%2Fshockwave%2Fdownload%2Findex.cgi%3FP1_Prod_Version%3DShockwaveFlash\"></EMBED></OBJECT>";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "RNA processing",
				false,
				"This is an earlier stage of the process by which information encoded in DNA is converted to protein.");
			
				p.addAnswer(2, "gene expression",
				false,
				"\"Gene expression\" is the term for the conversion of genetic information into protein.");
			
				p.addAnswer(3, "polypeptide formation",
				false,
				"Polypeptide formation is a latter point in the process by which information encoded in DNA is used manufacture a polypeptide.");
			
				p.addAnswer(4, "transcription",
				false,
				"This is an earlier stage of the process by which information encoded in DNA is converted to protein.");
			
				p.addAnswer(5, "translation",
				true,
				"Translation is the process by which information encoded in RNA is used to manufacture a polypeptide.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335079;


		
		

		
			
			p.question = "Click on the diagram to start the animation. _____ is the process in which pre-mRNA is edited into mRNA. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?17&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Overview of Protein Synthesis</a>)<br><br><OBJECT classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=\"../../placeholders/external_placeholder.html?http%3A%2F%2Fdownload.macromedia.com%2Fpub%2Fshockwave%2Fcabs%2Fflash%2Fswflash.cab#version=5,0,0,0\" WIDTH=324 HEIGHT=240><PARAM NAME=movie VALUE=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/1703q.swf\"><PARAM NAME=quality VALUE=high><PARAM NAME=bgcolor VALUE=#FFFFFF><EMBED src=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/1703q.swf\" quality=high bgcolor=#FFFFFF WIDTH=324 HEIGHT=240 TYPE=\"application/x-shockwave-flash\" PLUGINSPAGE=\"../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.macromedia.com%2Fshockwave%2Fdownload%2Findex.cgi%3FP1_Prod_Version%3DShockwaveFlash\"></EMBED></OBJECT>";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "RNA processing",
				true,
				"RNA processing edits the RNA transcript that has been assembled along a DNA template.");
			
				p.addAnswer(2, "Gene expression",
				false,
				"\"Gene expression\" is the term for the conversion of genetic information into protein.");
			
				p.addAnswer(3, "Polypeptide formation",
				false,
				"Polypeptide formation is a latter point in the process by which information encoded in DNA is used manufacture a protein.");
			
				p.addAnswer(4, "Transcription",
				false,
				"This is an earlier stage of the process by which information encoded in DNA is converted to protein.");
			
				p.addAnswer(5, "Translation",
				false,
				"This is a latter stage of the process by which information encoded in DNA is converted to protein.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335080;


		
		

		
			
			p.question = "Polypeptides are assembled from _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?17&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Overview of Protein Synthesis</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "hexoses",
				false,
				"The suffix \"-ose\" indicates that these are sugars.");
			
				p.addAnswer(2, "glycerol",
				false,
				"Glycerol is a component of neutral fats and phospholipids.");
			
				p.addAnswer(3, "nucleotides",
				false,
				"Nucleic acids are composed of nucleotides.");
			
				p.addAnswer(4, "proteins",
				false,
				"Proteins are more complex than polypeptides.");
			
				p.addAnswer(5, "amino acids",
				true,
				"Proteins are composed of amino acid monomers.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335081;


		
		

		
			
			p.question = "RNA processing converts the RNA transcript into _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?17&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Overview of Protein Synthesis</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "a protein",
				false,
				"RNA processing precedes translation.");
			
				p.addAnswer(2, "DNA",
				false,
				"DNA is used as a template for the manufacture of RNA transcripts.");
			
				p.addAnswer(3, "a eukaryotic cell",
				false,
				"No, that is incorrect.");
			
				p.addAnswer(4, "mRNA",
				true,
				"The editing of the RNA transcript produces mRNA.");
			
				p.addAnswer(5, "a polypeptide",
				false,
				"RNA processing precedes translation.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335082;


		
		

		
			
			p.question = "<a href=\"javascript:void(0)\" class=\"normlink\" onClick=\"open_embed('embed_1706q.html')\">Open this diagram and click on it to start the animation.</a> The gray unit in this animation represents _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?17&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Transcription</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "RNA",
				false,
				"RNA is the product of transcription.");
			
				p.addAnswer(2, "DNA",
				false,
				"DNA is a double helix.");
			
				p.addAnswer(3, "transcription factors",
				false,
				"Transcription factors are not seen in this animation.");
			
				p.addAnswer(4, "RNA polymerase",
				true,
				"RNA polymerase untwists a portion of the DNA double helix.");
			
				p.addAnswer(5, "the promoter",
				false,
				"The promoter is the region of DNA at which the process of transcription begins.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335083;


		
		

		
			
			p.question = "<a href=\"javascript:void(0)\" class=\"normlink\" onClick=\"open_embed('embed_1707q.html')\">Open this diagram and click on it to start the animation.</a> The green unit in this animation represents _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?17&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Transcription</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "RNA",
				false,
				"RNA is the product of transcription.");
			
				p.addAnswer(2, "DNA",
				false,
				"DNA is a double helix.");
			
				p.addAnswer(3, "transcription factors",
				false,
				"Transcription factors are not seen in this animation.");
			
				p.addAnswer(4, "RNA polymerase",
				false,
				"RNA polymerase untwists a portion of the DNA double helix.");
			
				p.addAnswer(5, "the promoter",
				true,
				"The promoter is the region of DNA at which the process of transcription begins.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335084;


		
		

		
			
			p.question = "<a href=\"javascript:void(0)\" class=\"normlink\" onClick=\"open_embed('embed_1708q.html')\">Open this diagram and click on it to start the animation.</a> The two blue strands in this animation represents _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?17&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Transcription</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "RNA",
				false,
				"The terminator is the region of DNA at which transcription terminates.");
			
				p.addAnswer(2, "DNA",
				true,
				"DNA is a double helix.");
			
				p.addAnswer(3, "transcription factors",
				false,
				"Transcription factors are not seen in this animation.");
			
				p.addAnswer(4, "RNA polymerase",
				false,
				"RNA polymerase untwists a portion of the DNA double helix.");
			
				p.addAnswer(5, "the promoter",
				false,
				"The promoter is the region of DNA at which the process of transcription begins.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335085;


		
		

		
			
			p.question = "Which of these correctly illustrates the pairing of DNA and RNA nucleotides? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?17&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Transcription</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "<table><tr><td>GTTACG</td></tr><tr><td>CAATCG</td></tr></table>",
				false,
				"Thymine is not found in RNA.");
			
				p.addAnswer(2, "<table><tr><td>GTTACG</td></tr><tr><td>CAAUGC</td></tr></table>",
				true,
				"In RNA, uracil takes the place of thymine.");
			
				p.addAnswer(3, "<table><tr><td>GTTACG</td></tr><tr><td>GTTACG</td></tr></table>",
				false,
				"This is not how specific base pairing works.");
			
				p.addAnswer(4, "<table><tr><td>GTTACG</td></tr><tr><td>ACCGTA</td></tr></table>",
				false,
				"This is not how specific base pairing works.");
			
				p.addAnswer(5, "<table><tr><td>GTTACG</td></tr><tr><td>UAACAU</td></tr></table>",
				false,
				"Guanine does not pair with uracil.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335086;


		
		

		
			
			p.question = "The direction of synthesis of an RNA transcript is _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?17&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Transcription</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "1\' &#151;> 5\'",
				false,
				"In nucleotides, nitrogen bases are attached to the 1\' carbon of a pentose sugar.");
			
				p.addAnswer(2, "5\' &#151;> 3\'",
				true,
				"Nucleotides are added to the 3\' end of RNA.");
			
				p.addAnswer(3, "1\' &#151;> 3\'",
				false,
				"In nucleotides, nitrogen bases are attached to the 1\' carbon of a pentose sugar.");
			
				p.addAnswer(4, "3\' &#151;> 5\'",
				false,
				"This is the direction in which RNA polymerase moves along the transcribed DNA strand.");
			
				p.addAnswer(5, "2\' &#151;> 4\'",
				false,
				"No, that is incorrect.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335087;


		
		

		
			
			p.question = "During RNA processing a(n) _____ is added to the 5\' end of the RNA. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?17&C','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: RNA Processing</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "3\' untranslated region",
				false,
				"A 3\' untranslated region  is present on the unmodified RNA transcript.");
			
				p.addAnswer(2, "a long string of adenine nucleotides",
				false,
				"A poly-A tail is added to the 3\' end of the RNA.");
			
				p.addAnswer(3, "5\' untranslated region",
				false,
				"A 5\' untranslated region is present on the unmodified RNA transcript.");
			
				p.addAnswer(4, "coding segment",
				false,
				"A coding segment is present on the unmodified RNA transcript.");
			
				p.addAnswer(5, "modified guanine nucleotide",
				true,
				"The 5\' cap consists of a modified guanine nucleotide.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335088;


		
		

		
			
			p.question = "During RNA processing a(n) _____ is added to the 3\' end of the RNA. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?17&C','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: RNA Processing</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "3\' untranslated region",
				false,
				"A 3\' untranslated region is present on the unmodified RNA transcript.");
			
				p.addAnswer(2, "a long string of adenine nucleotides",
				true,
				"A poly-A tail is added to the 3\' end of the RNA.");
			
				p.addAnswer(3, "5\' untranslated region",
				false,
				"A 5\' untranslated region is present on the unmodified RNA transcript.");
			
				p.addAnswer(4, "coding segment",
				false,
				"A coding segment is present on the unmodified RNA transcript.");
			
				p.addAnswer(5, "modified guanine nucleotide",
				false,
				"The 5\' cap consists of a modified guanine nucleotide.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335089;


		
		

		
			
			p.question = "Spliceosomes are composed of _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?17&C','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: RNA Processing</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "snRNPs and other proteins",
				true,
				"These are the component of spliceosomes.");
			
				p.addAnswer(2, "polymerases and ligases",
				false,
				"While spliceosomes have characteristics of ligases, they are not composed of polymerases and ligases.");
			
				p.addAnswer(3, "introns and exons",
				false,
				"Introns and exons are components of the RNA transcript.");
			
				p.addAnswer(4, "the RNA transcript and protein",
				false,
				"Spliceosomes act on RNA transcripts.");
			
				p.addAnswer(5, "snRNPs and snurps",
				false,
				"\"snurp\" is synonymous with \"snRNP.\"");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335090;


		
		

		
			
			p.question = "The RNA segments joined to one another by spliceosomes are _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?17&C','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: RNA Processing</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "caps",
				false,
				"A guanine cap is attached to the 5\' end of the RNA transcript.");
			
				p.addAnswer(2, "exons",
				true,
				"Exons are expressed regions.");
			
				p.addAnswer(3, "snRNPs",
				false,
				"snRNPs are components of spliceosomes.");
			
				p.addAnswer(4, "tails",
				false,
				"A poly-A tail is attached to the 3\' end of the RNA transcript.");
			
				p.addAnswer(5, "introns",
				false,
				"Introns are unexpressed regions.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335091;


		
		

		
			
			p.question = "Translation occurs in the _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?17&C','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: RNA Processing</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "cytoplasm",
				true,
				"Ribosomes, the sites of translation, are found in the cytoplasm.");
			
				p.addAnswer(2, "lysosome",
				false,
				"Lysosomes function in intracellular digestion.");
			
				p.addAnswer(3, "nucleus",
				false,
				"Assembled ribosomes are not found in the nucleus.");
			
				p.addAnswer(4, "mitochondrion",
				false,
				"Mitochondria function in cellular respiration.");
			
				p.addAnswer(5, "nucleoplasm",
				false,
				"Nucleoplasm is the matrix of the nucleus.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335092;


		
		

		
			
			p.question = "Which of these is a tRNA? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?17&D','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Translation</a>)<br><br><img SRC=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/1716q.jpg\" ALT=\"Question #16\" BORDER=\"1\">";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "A",
				false,
				"This is mRNA.");
			
				p.addAnswer(2, "B",
				true,
				"This is a tRNA.");
			
				p.addAnswer(3, "C",
				false,
				"This is a ribosome.");
			
				p.addAnswer(4, "D",
				false,
				"This is a polypeptide.");
			
				p.addAnswer(5, "E",
				false,
				"These are amino acids.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335093;


		
		

		
			
			p.question = "What enzyme catalyzes the attachment of an amino acid to tRNA? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?17&D','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Translation</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "aminoacyl-tRNA synthetase",
				true,
				"This enzyme matches a particular tRNA with a particular amino acid.");
			
				p.addAnswer(2, "rubisco",
				false,
				"This enzyme has a role in photosynthesis.");
			
				p.addAnswer(3, "dextrinase",
				false,
				"Dextrinase is an enzyme that digests carbohydrates.");
			
				p.addAnswer(4, "argininosuccinate lyase",
				false,
				"This enzyme is involved in converting argininosuccinate to arginine.");
			
				p.addAnswer(5, "nuclease",
				false,
				"Nucleases are enzymes that break down nucleic acids.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335094;


		
		

		
			
			p.question = "The tRNA anticodon, GAC, is complementary to the mRNA codon with the sequence _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?17&D','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Translation</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "CAG",
				false,
				"Adenine is not complementary to itself.");
			
				p.addAnswer(2, "CTG",
				false,
				"RNA lacks thymine.");
			
				p.addAnswer(3, "GAC",
				false,
				"Consider what the term \"complementary\" means.");
			
				p.addAnswer(4, "CUG",
				true,
				"In RNA uracil replaces thymine.");
			
				p.addAnswer(5, "TCG",
				false,
				"You need to review specific base pairing.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335095;


		
		

		
			
			p.question = "<a href=\"javascript:void(0)\" class=\"normlink\" onClick=\"open_embed('embed_1719q.html')\">Open this diagram and click on it to start the animation.</a> What name is given to this process? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?17&D','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Translation</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "initiation (of transcription)",
				false,
				"Transcription is the process by which an RNA transcript is manufactured.");
			
				p.addAnswer(2, "RNA processing",
				false,
				"No, that is incorrect.");
			
				p.addAnswer(3, "initiation (of translation)",
				true,
				"This animation illustrates the initiation of translation.");
			
				p.addAnswer(4, "elongation",
				false,
				"Elongation is a latter stage of the process.");
			
				p.addAnswer(5, "termination (of translation)",
				false,
				"Termination is a latter stage of the process.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335096;


		
		

		
			
			p.question = "The initiator tRNA attaches at the ribosome\'s _____ site. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?17&D','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Translation</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "A",
				false,
				"After initiation, tRNAs initially attach to ribosomes at the A site.");
			
				p.addAnswer(2, "translocation",
				false,
				"Translocation is the process by which a tRNA moves from the A site to the P site.");
			
				p.addAnswer(3, "E",
				false,
				"This is the site from which a tRNA exits the ribosome.");
			
				p.addAnswer(4, "P",
				true,
				"The initiator tRNA attaches to the ribosome\'s P site.");
			
				p.addAnswer(5, "Q",
				false,
				"There is no such site.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

