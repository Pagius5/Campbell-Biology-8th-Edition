

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "23: The Evolution of Populations > Activities Quiz";
	ak.quiz_loc_with_commas = "23: The Evolution of Populations, Activities Quiz";
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
		
		p.id = 335436;


		
		

		
			
			p.question = "Click on the diagram to start the animation. What process is illustrated by this animation? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?23&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Causes of Evolutionary Change</a>)<br><br><OBJECT classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=\"../../placeholders/external_placeholder.html?http%3A%2F%2Fdownload.macromedia.com%2Fpub%2Fshockwave%2Fcabs%2Fflash%2Fswflash.cab#version=5,0,0,0\" WIDTH=260 HEIGHT=100><PARAM NAME=movie VALUE=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/2301q.swf\"><PARAM NAME=quality VALUE=high><PARAM NAME=bgcolor VALUE=#FFFFFF><EMBED src=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/2301q.swf\" quality=high bgcolor=#FFFFFF WIDTH=260 HEIGHT=100 TYPE=\"application/x-shockwave-flash\" PLUGINSPAGE=\"../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.macromedia.com%2Fshockwave%2Fdownload%2Findex.cgi%3FP1_Prod_Version%3DShockwaveFlash\"></EMBED></OBJECT>";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "natural selection",
				false,
				"No, that is incorrect.");
			
				p.addAnswer(2, "nonrandom mating",
				false,
				"No mating is occurring in this animation.");
			
				p.addAnswer(3, "mutation",
				false,
				"A mutation is an alteration in the structure of a DNA sequence.");
			
				p.addAnswer(4, "stabilizing selection",
				false,
				"No, that is incorrect.");
			
				p.addAnswer(5, "gene flow",
				true,
				"Gene flow is the migration of individuals or gametes.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335437;


		
		

		
			
			p.question = "Click on the diagram to start the animation. What process is illustrated by this animation? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?23&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Causes of Evolutionary Change</a>)<br><br><OBJECT classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=\"../../placeholders/external_placeholder.html?http%3A%2F%2Fdownload.macromedia.com%2Fpub%2Fshockwave%2Fcabs%2Fflash%2Fswflash.cab#version=5,0,0,0\" WIDTH=260 HEIGHT=100><PARAM NAME=movie VALUE=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/2302q.swf\"><PARAM NAME=quality VALUE=high><PARAM NAME=bgcolor VALUE=#FFFFFF><EMBED src=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/2302q.swf\" quality=high bgcolor=#FFFFFF WIDTH=260 HEIGHT=100 TYPE=\"application/x-shockwave-flash\" PLUGINSPAGE=\"../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.macromedia.com%2Fshockwave%2Fdownload%2Findex.cgi%3FP1_Prod_Version%3DShockwaveFlash\"></EMBED></OBJECT>";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "natural selection",
				true,
				"This is natural selection, since environmental conditions dictate that green individuals are more likely to reproduce than are red individuals.");
			
				p.addAnswer(2, "nonrandom mating",
				false,
				"No, that is incorrect.");
			
				p.addAnswer(3, "mutation",
				false,
				"A mutation is an alteration in the structure of a DNA sequence.");
			
				p.addAnswer(4, "migration",
				false,
				"Migration is not seen in this animation.");
			
				p.addAnswer(5, "gene flow",
				false,
				"Gene flow is the migration of individuals or gametes.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335438;


		
		

		
			
			p.question = "Generation-to-generation change in the allele frequencies in a population is _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?23&A','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Causes of Evolutionary Change</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "microevolution",
				true,
				"Generation-to-generation change in the allele frequencies in a population is the definition of microevolution.");
			
				p.addAnswer(2, "genetic drift",
				false,
				"Genetic drift is generation-to-generation change in allele frequencies that is attributable to a small population size. However, since the question does not specify the mechanism of change, another choice makes for a better answer.");
			
				p.addAnswer(3, "natural selection",
				false,
				"Natural selection is generation-to-generation change in allele frequencies that is attributable to differential reproductive success in the face of environmental factors. However, since the question does not specify the mechanism of change, another choice makes for a better answer.");
			
				p.addAnswer(4, "mutation",
				false,
				"Mutation can result in generation-to-generation change in allele frequencies as a result of changes in the DNA sequence. However, since the question does not specify the mechanism of change, another choice makes for a better answer.");
			
				p.addAnswer(5, "macroevolution",
				false,
				"Macroevolution is evolution occurring on a larger scale than the population level.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335439;


		
		

		
			
			p.question = "Which of these individuals is a homozygous genotype? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?23&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Genetic Variation from Sexual Recombination</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "AA",
				true,
				"When both of the alleles of a given gene pair are the same, the individual is homozygous for that gene.");
			
				p.addAnswer(2, "Aa",
				false,
				"No, that is incorrect.");
			
				p.addAnswer(3, "Gg",
				false,
				"No, that is incorrect.");
			
				p.addAnswer(4, "AG",
				false,
				"Even though both of these are capital letters, they are two different letters.");
			
				p.addAnswer(5, "aG",
				false,
				"No, that is incorrect.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335440;


		
		

		
			
			p.question = "All the genes in a population are that population\'s _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?23&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Genetic Variation from Sexual Recombination</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "gene pool",
				true,
				"All the alleles of all the genes of a population make up a gene pool.");
			
				p.addAnswer(2, "fitness",
				false,
				"Fitness is a measure of an individual\'s reproductive success.");
			
				p.addAnswer(3, "genotype",
				false,
				"\"Genotype\" refers to an individual\'s genetic complement. However, genotypic frequencies are a way of describing the correct answer to this question.");
			
				p.addAnswer(4, "Hardy-Weinberg",
				false,
				"No, that is incorrect.");
			
				p.addAnswer(5, "phenotype",
				false,
				"\"Phenotype\" refers to an organism\'s appearance.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335441;


		
		

		
			
			p.question = "Genetic drift is a process based on _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?23&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Genetic Variation from Sexual Recombination</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "differential reproductive success correlated to the relationship between a phenotype and the environment",
				false,
				"This describes natural selection.");
			
				p.addAnswer(2, "immigration",
				false,
				"This is a component of gene flow.");
			
				p.addAnswer(3, "mutation",
				false,
				"Mutation is a change in the DNA sequence.");
			
				p.addAnswer(4, "the role of chance",
				true,
				"Genetic drift requires a small sample size.");
			
				p.addAnswer(5, "emigration",
				false,
				"This is a component of gene flow.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335442;


		
		

		
			
			p.question = "A mutation occurs when _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?23&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Genetic Variation from Sexual Recombination</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "individuals leave a population",
				false,
				"This is a component of gene flow.");
			
				p.addAnswer(2, "individuals enter a population",
				false,
				"This is a component of gene flow.");
			
				p.addAnswer(3, "some individuals leave more offspring than other individuals",
				false,
				"This is natural selection.");
			
				p.addAnswer(4, "there is a change in the DNA sequence of a gene",
				true,
				"This is the definition of mutation.");
			
				p.addAnswer(5, "population sizes are small",
				false,
				"Genetic drift occurs when population sizes are small.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335443;


		
		

		
			
			p.question = "Every few years a giant axe chops off the head of every person who is over 6 feet tall. How will this affect the human population? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?23&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Genetic Variation from Sexual Recombination</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Gene flow will increase.",
				false,
				"Why?");
			
				p.addAnswer(2, "Alleles that promote \"tallness\" will decrease in frequency.",
				true,
				"A reduction in \"tallness\" alleles is the change expected as a result of this type of selection.");
			
				p.addAnswer(3, "Genetic drift will play less of a role in the evolution of humans.",
				false,
				"No, that is incorrect.");
			
				p.addAnswer(4, "It will increase in number since shorter people use fewer resources than taller people.",
				false,
				"Well ..., maybe..., eventually..., but another choice makes for a better answer.");
			
				p.addAnswer(5, "The mutation rate will increase.",
				false,
				"Why?");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335444;


		
		

		
			
			p.question = "Modern travel along with migration reduces the probability of _____ having an effect on the evolution of humans. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?23&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Genetic Variation from Sexual Recombination</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "gene flow",
				false,
				"Gene flow is the migration of alleles.");
			
				p.addAnswer(2, "mutation",
				false,
				"No, that is incorrect.");
			
				p.addAnswer(3, "disease",
				false,
				"Such travel is likely to increase the impact of disease on human populations.");
			
				p.addAnswer(4, "genetic drift",
				true,
				"Modern travel and migration decreases the chances of there being a small, isolated population.");
			
				p.addAnswer(5, "natural selection",
				false,
				"Natural selection is differential reproductive success.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335445;


		
		

		
			
			p.question = "The ease with which humans travel across the globe is likely to increase _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?23&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Genetic Variation from Sexual Recombination</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "natural selection",
				false,
				"No, that is incorrect.");
			
				p.addAnswer(2, "gene flow",
				true,
				"When people travel or migrate, they take their alleles with them.");
			
				p.addAnswer(3, "mutation",
				false,
				"No, that is incorrect.");
			
				p.addAnswer(4, "genetic drift",
				false,
				"One would think that genetic drift would be less likely.");
			
				p.addAnswer(5, "all of these",
				false,
				"Only one of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335446;


		
		

		
			
			p.question = "Homologous pairs of chromosomes are lined up independently of other such pairs during _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?23&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Genetic Variation from Sexual Recombination</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "metaphase I",
				true,
				"This describes metaphase I.");
			
				p.addAnswer(2, "anaphase I",
				false,
				"Homologous chromosomes separate during anaphase I.");
			
				p.addAnswer(3, "prophase II",
				false,
				"Cells in meiosis I are haploid.");
			
				p.addAnswer(4, "metaphase II",
				false,
				"Cells in meiosis I are haploid.");
			
				p.addAnswer(5, "telophase II",
				false,
				"Cells in meiosis I are haploid.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335447;


		
		

		
			
			p.question = "Crossing over, resulting in an increase in genetic variation, occurs between _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?23&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Genetic Variation from Sexual Recombination</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "sex cells and somatic cells",
				false,
				"No, that is incorrect.");
			
				p.addAnswer(2, "sister chromatids of homologous chromosomes",
				false,
				"Since these chromatids are identical, such crossing over would not increase genetic variation.");
			
				p.addAnswer(3, "nonsister chromatids of homologous chromosomes",
				true,
				"This process produces chromosomes containing genes inherited from both parents.");
			
				p.addAnswer(4, "sister chromatids of nonhomologous chromosomes",
				false,
				"No, that is incorrect.");
			
				p.addAnswer(5, "nonsister chromatids of nonhomologous chromosomes",
				false,
				"This does not describe crossing over.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335448;


		
		

		
			
			p.question = "In human gamete production there is an average of _____ crossover events per chromosome pair. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?23&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Genetic Variation from Sexual Recombination</a>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "0&#150;1",
				false,
				"More.");
			
				p.addAnswer(2, "2&#150;3",
				true,
				"These crossover events increase the genetic variation among gametes.");
			
				p.addAnswer(3, "5&#150;6",
				false,
				"Fewer.");
			
				p.addAnswer(4, "9&#150;10",
				false,
				"Fewer.");
			
				p.addAnswer(5, "10+",
				false,
				"Fewer.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335449;


		
		

		
			
			p.question = "Click on the diagram to start the animation. Which of these gametes contain one or more recombinant chromosomes? (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?23&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Genetic Variation from Sexual Recombination</a>)<br><br><OBJECT classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=\"../../placeholders/external_placeholder.html?http%3A%2F%2Fdownload.macromedia.com%2Fpub%2Fshockwave%2Fcabs%2Fflash%2Fswflash.cab#version=5,0,0,0\" WIDTH=260 HEIGHT=100><PARAM NAME=movie VALUE=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/2314q.swf\"><PARAM NAME=quality VALUE=high><PARAM NAME=bgcolor VALUE=#FFFFFF><EMBED src=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/2314q.swf\" quality=high bgcolor=#FFFFFF WIDTH=260 HEIGHT=100 TYPE=\"application/x-shockwave-flash\" PLUGINSPAGE=\"../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.macromedia.com%2Fshockwave%2Fdownload%2Findex.cgi%3FP1_Prod_Version%3DShockwaveFlash\"></EMBED></OBJECT>";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "A, B, and C",
				false,
				"Gamete A does not carry a recombinant chromosome.");
			
				p.addAnswer(2, "C, D, E, F, and G",
				false,
				"Gametes D and E do not carry a recombinant chromosome.");
			
				p.addAnswer(3, "B, C, and G",
				false,
				"Yes, but there is one more gamete that also carries a recombinant chromosome.");
			
				p.addAnswer(4, "B, C, F, and G",
				true,
				"These gametes carry chromosomes produced as a result of crossing over.");
			
				p.addAnswer(5, "B, C, D, and G",
				false,
				"Gamete D does not carry a recombinant chromosome.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335450;


		
		

		
			
			p.question = "Click on the diagram to start the animation. This animation illustrates _____ as it occurs during _____. (<a href=\"javascript:void(0)\" onclick=\"window.open('"+qzmediapath+"bc_campbell_biology_7/activities/load.html?23&B','rrpop','menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10')\" class=\"quizList\">Activity: Genetic Variation from Sexual Recombination</a>)<br><br><OBJECT classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=\"../../placeholders/external_placeholder.html?http%3A%2F%2Fdownload.macromedia.com%2Fpub%2Fshockwave%2Fcabs%2Fflash%2Fswflash.cab#version=5,0,0,0\" WIDTH=260 HEIGHT=100><PARAM NAME=movie VALUE=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/2315q.swf\"><PARAM NAME=quality VALUE=high><PARAM NAME=bgcolor VALUE=#FFFFFF><EMBED src=\""+qzmediapath+"bc_campbell_biology_8/img/activities_quizzes/2315q.swf\" quality=high bgcolor=#FFFFFF WIDTH=260 HEIGHT=100 TYPE=\"application/x-shockwave-flash\" PLUGINSPAGE=\"../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.macromedia.com%2Fshockwave%2Fdownload%2Findex.cgi%3FP1_Prod_Version%3DShockwaveFlash\"></EMBED></OBJECT>";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "centrosome separation ... anaphase II",
				false,
				"Centrosomes do not separate during anaphase II.");
			
				p.addAnswer(2, "cytokinesis ... telophase I",
				false,
				"Cytokinesis is a division of the cytoplasm.");
			
				p.addAnswer(3, "crossing over ... prophase I",
				true,
				"Crossing over, the exchange of genetic material between the nonsister chromatids of homologous chromosomes, occurs during prophase I.");
			
				p.addAnswer(4, "random fertilization ... prophase I",
				false,
				"Fertilization is the fusion of male and female gametes.");
			
				p.addAnswer(5, "karyokinesis ... prophase II",
				false,
				"Karyokinesis is a division of the nucleus.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

