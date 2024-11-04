

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "18: Control of Gene Expression > Practice Test";
	ak.quiz_loc_with_commas = "18: Control of Gene Expression, Practice Test";
	ak.quiz_title = "Practice Test";

	
		ak.help_url = "../../placeholders/help_placeholder.html";
	
	ak.essay_total = 0;
	ak.pair_problem_total = 0;
	ak.pair_total = 0;
	ak.problem_total = 37;
	ak.non_essay_total = 37;
	ak.scored_item_total = 37;

	
	
	


	
	ak.copyright_date = "2008";
	ak.brandname = "Pearson Benjamin Cummings";
	ak.legal = "../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.pearsoned.com%2Flegal%2Findex.htm";


	// Loop over all problems
	
	
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335190;


		
		

		
			
			p.question = "This chapter contains a lengthy discussion of the <i>trp</i> operon involved in regulating the synthesis of tryptophan. In the case of <i>E. coli</i>, the bacterium may need to synthesize tryptophan, or its host, a human, may supply all the tryptophan it needs. Think back to Chapter 17. Why do both bacteria and humans need tryptophan? (<script type=\"text/javascript\">ebook(\'1801\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "It is important in inducing sleep.",
				false,
				"No. It may have a role in inducing sleep in humans, but that is not its basic function.");
			
				p.addAnswer(2, "It is an important constituent of cell walls in both humans and bacteria.",
				false,
				"No. It is not particularly used in cell walls, and humans don\'t have cell walls.");
			
				p.addAnswer(3, "Tryptophan induces the lac operon.",
				false,
				"No. Allolactose induces the lac operon.");
			
				p.addAnswer(4, "It is one of the 20 amino acids used by all organisms to synthesize proteins.",
				true,
				"Correct. All organisms need tryptophan, but there is no point in wasting resources to synthesize it if it is available in the environment.");
			
				p.addAnswer(5, "It is an important enzyme in the glycolysis pathway.",
				false,
				"No. It is one of the 20 amino acids used to synthesize proteins.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335191;


		
		

		
			
			p.question = "Which statement about feedback inhibition is true? (<script type=\"text/javascript\">ebook(\'1801\',\'quiz\')</script>)";
			p.incorrect_any_expl = "No. This is true, but there is a better answer.";
			p.incorrect_any_expl_flag = 1;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "It is typically found in anabolic pathways.",
				false,
				"");
			
				p.addAnswer(2, "It allows a cell to adapt quickly to fluctuations in the availability of important substances.",
				false,
				"");
			
				p.addAnswer(3, "The end product of the metabolic pathway controls the activity of the first enzyme in the pathway.",
				false,
				"");
			
				p.addAnswer(4, "If the end product accumulates in the cell, the whole pathway is shut down.",
				false,
				"");
			
				p.addAnswer(5, "all of the above",
				true,
				"Correct. All of these statements about feedback inhibition are true.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335192;


		
		

		
			
			p.question = "In prokaryotic genomes groups of functionally related genes along with their promoters and operators are found together in __________ (<script type=\"text/javascript\">ebook(\'1801\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "a repressor",
				false,
				"No. A repressor may attach to the operator in this structure.");
			
				p.addAnswer(2, "an operon",
				true,
				"Correct. Putting these related sequences together helps prokaryotes keep related genes under coordinate control.");
			
				p.addAnswer(3, "a regulatory gene",
				false,
				"No. Regulatory genes are usually located elsewhere on the chromosome.");
			
				p.addAnswer(4, "an enhancer",
				false,
				"No. Enhancers are found in eukaryotic genomes.");
			
				p.addAnswer(5, "a transcription factor",
				false,
				"No. Prokaryotes do not use transcription factors.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335193;


		
		

		
			
			p.question = "A bacterium can make the amino acid glycine or absorb it from its surroundings. A biochemist finds that glycine binds to a repressor protein and causes the repressor to bind to the bacterial chromosome, turning off an operon. If it is like other similar operons, the presence of glycine will result in the _____. (<script type=\"text/javascript\">ebook(\'1801\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "inhibition of bacterial cell division",
				false,
				"No. Operons are not directly involved in regulating bacterial cell division.");
			
				p.addAnswer(2, "breakdown of glycine",
				false,
				"No. Since glycine is used in protein synthesis, it does not make sense to break it down.");
			
				p.addAnswer(3, "cessation of the synthesis of glycine",
				true,
				"Correct. Because synthesis of glycine requires energy and raw materials, it does not make sense to synthesize it when it is available in the environment.");
			
				p.addAnswer(4, "formation of sex pili",
				false,
				"No. Sex pili are involved in conjugation, not in regulating the production of glycine.");
			
				p.addAnswer(5, "production of the repressor protein",
				false,
				"No. The repressor protein is generally present, but it is not activated unless glycine is present.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335194;


		
		

		
			
			p.question = "In general, operons that encode the enzymes of a biosynthetic (anabolic) pathway (such as the <i>trp</i> operon) are _____, and those encoding the enzymes of a catabolic pathway (such as the <i>lac</i> operon) are _____. (<script type=\"text/javascript\">ebook(\'1801\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "repressible; inducible",
				true,
				"Correct. Anabolic pathways are generally on unless their product is not needed. Catabolic pathways need to adjust to the available substrate.");
			
				p.addAnswer(2, "inducible; repressible",
				false,
				"No. Anabolic pathways are generally on unless their product is not needed. Catabolic pathways need to adjust to the available substrate.");
			
				p.addAnswer(3, "permanently on; permanently off",
				false,
				"No. Neither type is permanently on or off. They can both be regulated.");
			
				p.addAnswer(4, "permanently off; permanently on",
				false,
				"No. Neither type is permanently on or off. They can both be regulated.");
			
				p.addAnswer(5, "easily mutated; resistant to mutations",
				false,
				"No. All parts of the genome are equally susceptible to mutations.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335195;


		
		

		
			
			p.question = "In an inducible operon, the inducer is often the _____ in the pathway being regulated; the inducer binds to the _____, thus rendering it _____. (<script type=\"text/javascript\">ebook(\'1801\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "end product; corepressor; inactive",
				false,
				"No. The end product is usually a repressor in anabolic pathways, not the inducer in a catabolic pathway.");
			
				p.addAnswer(2, "end product; repressor; inactive",
				false,
				"No. The end product is usually a repressor in anabolic pathways, not the inducer in a catabolic pathway.");
			
				p.addAnswer(3, "substrate; corepressor; inactive",
				false,
				"No. A corepressor works with a repressor protein to switch a repressible operon off. This is an example of an inducible operon.");
			
				p.addAnswer(4, "substrate; repressor; active",
				false,
				"No. The end result of the substrate binding to the repressor is to render the repressor inactive.");
			
				p.addAnswer(5, "substrate; repressor; inactive",
				true,
				"Correct. The presence of the substrate turns the operon on by binding to the repressor and inactivating it.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335196;


		
		

		
			
			p.question = "You have inserted the gene for human growth factor into the <i>E. coli</i> lactose operon, replacing the structural genes with the gene for human growth factor. What substance must you add to your culture of bacteria to cause them to produce human growth factor for you? (<script type=\"text/javascript\">ebook(\'1801\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "repressor protein",
				false,
				"No. The repressor protein is already present and bound to the operator.");
			
				p.addAnswer(2, "operator protein",
				false,
				"No. The operator is a nucleotide sequence.");
			
				p.addAnswer(3, "human growth factor",
				false,
				"No. A bacterial cell will not know what to do with human growth factor.");
			
				p.addAnswer(4, "allolactose",
				true,
				"Correct. Allolactose will bind to the repressor protein, inactivating it, and allowing transcription of the genes in the operon, including human growth factor.");
			
				p.addAnswer(5, "transcription factors",
				false,
				"No. Prokaryotes do not use transcription factors.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335197;


		
		

		
			
			p.question = "Both repressible and inducible operons control gene expression at the level of _____. (<script type=\"text/javascript\">ebook(\'1801\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "transcription",
				true,
				"Correct. The repressors that attach to operators act to block transcription.");
			
				p.addAnswer(2, "DNA packing",
				false,
				"No. Operons act at the transcriptional level.");
			
				p.addAnswer(3, "post-transcriptional processing",
				false,
				"No. Prokaryotic mRNA does not undergo post-transcriptional processing.");
			
				p.addAnswer(4, "translation",
				false,
				"No. Operons act at the transcriptional level.");
			
				p.addAnswer(5, "post-translational processing",
				false,
				"No. Operons act at the transcriptional level.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335198;


		
		

		
			
			p.question = "Gene expression in bacteria is regulated primarily by _____. (<script type=\"text/javascript\">ebook(\'1801\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "controlling gene packing and unpacking",
				false,
				"No. DNA packing and unpacking is not of primary importance in the control of bacterial gene expression.");
			
				p.addAnswer(2, "controlling the transcription of genes into mRNA",
				true,
				"Correct. In prokaryotes, most gene expression is regulated by controlling transcription.");
			
				p.addAnswer(3, "controlling the translation of mRNA into protein",
				false,
				"No. There is some regulation at the translation level, but this is not where most regulation occurs.");
			
				p.addAnswer(4, "transcription factors encoded for by mitochondrial DNA",
				false,
				"No. Bacteria do not use transcription factors or have mitochondria.");
			
				p.addAnswer(5, "selectively breaking down the proteins encoded by the genes",
				false,
				"No. Gene expression can be regulated by means of protein degradation, but this is not the primary mechanism of control.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335199;


		
		

		
			
			p.question = "The control of gene expression is more complex in multicellular eukaryotes than in prokaryotes because _____. (<script type=\"text/javascript\">ebook(\'1802\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "eukaryotic cells are much smaller",
				false,
				"No. Eukaryotic cells are larger.");
			
				p.addAnswer(2, "in a multicellular eukaryote, different cells are specialized for different functions",
				true,
				"Correct. Also, eukaryotic cells are more complex than prokaryotic cells. Some of the basics of the regulation of gene expression, however, are common to prokaryotes and eukaryotes.");
			
				p.addAnswer(3, "prokaryotes are restricted to stable environments",
				false,
				"No. Prokaryotes are found in many environments subject to frequent change, such as the human intestine.");
			
				p.addAnswer(4, "eukaryotic chromosomes have fewer nucleotides; therefore, each nucleotide sequence must do several jobs",
				false,
				"No. Eukaryotic cells have more nucleotides than do prokaryotic cells.");
			
				p.addAnswer(5, "the genes of eukaryotes provide information for making proteins",
				false,
				"No. This is equally true of prokaryotic genes.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335200;


		
		

		
			
			p.question = "In some cases DNA methylation and histone deacetylation combine to ___. (<script type=\"text/javascript\">ebook(\'1802\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "turn certain genes on",
				false,
				"No. Histone acetylation is sometimes associated with enhancement of transcription, but both DNA methylation and histone deacetylation tend to repress transcription.");
			
				p.addAnswer(2, "silence certain genes",
				true,
				"Correct. Both DNA methylation and histone deacetylation tend to repress transcription.");
			
				p.addAnswer(3, "remove genomic imprinting",
				false,
				"No. DNA methylation is involved in setting up patterns of genomic imprinting.");
			
				p.addAnswer(4, "form a transcription factor",
				false,
				"No. Transcription factors are protein complexes. DNA methylation and histone deacetylation generally repress transcription.");
			
				p.addAnswer(5, "form an enhancer",
				false,
				"No. An enhancer is a nucleotide sequence in the DNA.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335201;


		
		

		
			
			p.question = "In eukaryotes, DNA packing seems to affect gene expression primarily by _____. (<script type=\"text/javascript\">ebook(\'1802\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "controlling access to DNA",
				true,
				"Correct. For example, the genes of tightly packed heterochromatin are usually not transcribed, presumably because RNA polymerase and other necessary proteins can\'t make contact with the DNA.");
			
				p.addAnswer(2, "positioning related genes near each other",
				false,
				"No. You are probably thinking of prokaryotic operons.");
			
				p.addAnswer(3, "protecting DNA from mutations",
				false,
				"No. Even if true, this would not be a general mechanism of gene regulation.");
			
				p.addAnswer(4, "enhancing the recombination of genes",
				false,
				"No. Genetic recombination usually occurs only during meiosis and is not a general mechanism of gene regulation.");
			
				p.addAnswer(5, "allowing unpacked genes to be eliminated from the genome",
				false,
				"No. With certain rare exceptions, eukaryotes tend not to eliminate genes from their genome.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335202;


		
		

		
			
			p.question = "A scientist clones a regulatory gene that is involved in controlling the expression of other genes, and discovers that the regulatory gene encodes a histone deacetylase enzyme. It is likely that this enzyme regulates gene expression by _____. (<script type=\"text/javascript\">ebook(\'1802\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "causing tighter packing of the chromatin at the target gene, thereby inhibiting transcription",
				true,
				"Correct. Deacetylation increases the positive charges on histones, allowing them to bind more tightly to DNA.");
			
				p.addAnswer(2, "causing looser packing of the chromatin at the target gene, thereby inhibiting transcription",
				false,
				"No. Deacetylation causes tighter packing of the chromatin.");
			
				p.addAnswer(3, "causing tighter packing of the chromatin at the target gene, thereby enhancing transcription",
				false,
				"No. Tightly packed chromatin is less easily transcribed.");
			
				p.addAnswer(4, "causing looser packing of the chromatin at the target gene, thereby enhancing transcription",
				false,
				"No. Deacetylation causes tighter packing of the chromatin.");
			
				p.addAnswer(5, "causing tighter packing of the chromatin at the target gene, thereby inhibiting translation",
				false,
				"No. Tighter packing of the chromatin at the target gene inhibits transcription.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335203;


		
		

		
			
			p.question = "In a eukaryote, activating transcription factors may stimulate gene expression by binding to a DNA site called a(n) _____. (<script type=\"text/javascript\">ebook(\'1802\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "operon",
				false,
				"No. Operons are found in prokaryotes.");
			
				p.addAnswer(2, "histone",
				false,
				"No. Histones are a type of protein that is bound to the DNA, forming nucleosomes.");
			
				p.addAnswer(3, "enhancer",
				true,
				"Correct. Enhancers are sites within the DNA where activators bind, increasing the rate of transcription.");
			
				p.addAnswer(4, "promoter",
				false,
				"No. Eukaryotic repressors do not usually bind directly to promoter DNA.");
			
				p.addAnswer(5, "silencer",
				false,
				"No. Silencing is the process of inhibiting transcription, not stimulating it.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335204;


		
		

		
			
			p.question = "Enhancers _____. (<script type=\"text/javascript\">ebook(\'1802\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "increase the rate of transcription",
				false,
				"No. This choice is correct, but there is a better response.");
			
				p.addAnswer(2, "are found in eukaryotic genomes",
				false,
				"No. This choice is correct, but there is a better response.");
			
				p.addAnswer(3, "may be located upstream or downstream from the genes they regulate",
				false,
				"No. This choice is correct, but there is a better response.");
			
				p.addAnswer(4, "may be located thousands of base pairs away from the promoter",
				false,
				"No. This choice is correct, but there is a better response.");
			
				p.addAnswer(5, "all of the above",
				true,
				"Correct. Enhancers increase the rate of transcription and may be located thousands of base pairs away from the promoter, either upstream or downstream.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335205;


		
		

		
			
			p.question = "Dioxin, produced as a by-product of various industrial chemical processes, is suspected of causing cancer and birth defects in animals and humans. It apparently acts by entering cells and binding to specific proteins, which then enter the nucleus and alter the pattern of gene expression. Therefore, dioxin acts by mimicking the action of _____. (<script type=\"text/javascript\">ebook(\'1802\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "proteins of the mitochondria",
				false,
				"No. Mitochondria are not involved in the expression of most genes.");
			
				p.addAnswer(2, "DNA polymerase",
				false,
				"No. DNA polymerase is involved in DNA replication, not gene expression.");
			
				p.addAnswer(3, "steroid hormones",
				true,
				"Correct. Steroid hormones enter cells, bind to specific receptors, and enter the nucleus to affect transcription.");
			
				p.addAnswer(4, "enhancers",
				false,
				"No. Enhancers are DNA sequences.");
			
				p.addAnswer(5, "histones",
				false,
				"No. This is unlikely because the same set of histones is bound to all genes.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335206;


		
		

		
			
			p.question = "Post-transcriptional controls _____. (<script type=\"text/javascript\">ebook(\'1802\',\'quiz\')</script>)";
			p.incorrect_any_expl = "No. This choice is correct, but there is a better response.";
			p.incorrect_any_expl_flag = 1;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "can include translational controls",
				false,
				"");
			
				p.addAnswer(2, "can affect mRNA stability",
				false,
				"");
			
				p.addAnswer(3, "may regulate the rate at which a molecule is translated",
				false,
				"");
			
				p.addAnswer(4, "can regulate mRNA splicing",
				false,
				"");
			
				p.addAnswer(5, "all of the above",
				true,
				"Correct. Post-transcriptional control can occur at many steps, including mRNA stability, splicing, and translation.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335207;


		
		

		
			
			p.question = "Which one of the following is a means of controlling eukaryotic gene expression? (<script type=\"text/javascript\">ebook(\'1802\',\'quiz\')</script>)";
			p.incorrect_any_expl = "No. This is true, but there is a better answer.";
			p.incorrect_any_expl_flag = 1;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "DNA packing",
				false,
				"");
			
				p.addAnswer(2, "transcriptional regulation",
				false,
				"");
			
				p.addAnswer(3, "mRNA processing",
				false,
				"");
			
				p.addAnswer(4, "methylation of DNA",
				false,
				"");
			
				p.addAnswer(5, "All of the above play a role in the regulation of gene expression.",
				true,
				"Correct. All of the above do play a role in the regulation of eukaryotic gene expression.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335208;


		
		

		
			
			p.question = "What is the evolutionary significance of alternative RNA splicing? (<script type=\"text/javascript\">ebook(\'1802\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "It expands the number of proteins that can be coded for by one gene, increasing an organism\'s ability to produce novel proteins.",
				true,
				"Correct. Some genes could produce thousands of different proteins from a single gene. In most cases, only a few of the possibilities are actually produced. However, different splicing could give rise to novel proteins, some of which could be advantageous.");
			
				p.addAnswer(2, "It can silence genes, giving cells another way of controlling gene expression.",
				false,
				"No. RNA splicing does not appear to silence genes.");
			
				p.addAnswer(3, "Because it is not specific to a cell type, alternative RNA splicing can make sweeping changes in gene expression, allowing an organism to adapt quickly to new situations.",
				false,
				"No. Splicing of RNA is closely controlled by the particular cell in which it is occurring. It is one way cells regulate gene expression, insuring that a cell expresses appropriate genes.");
			
				p.addAnswer(4, "It acts as a defense against viral RNA, helping organisms avoid infection, particularly by cancer-causing viruses",
				false,
				"No. Alternative RNA splicing does not appear to have any connection to viral RNA.");
			
				p.addAnswer(5, "The introns that are spliced out can become miRNAs and can recognize and degrade mRNA transcripts",
				false,
				"No. miRNAs are coded for by specific sequences of DNA.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335209;


		
		

		
			
			p.question = "What is the role of proteasomes? (<script type=\"text/javascript\">ebook(\'1802\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "They are giant protein complexes that recognize ubiquitin and degrade the tagged proteins.",
				true,
				"Correct. Mutations that make cell cycle proteins impervious to proteasome degradation can lead to cancer.");
			
				p.addAnswer(2, "They inject double-stranded RNA into a cell, turning off a gene with the same sequence.",
				false,
				"No. This describes the action of miRNA.");
			
				p.addAnswer(3, "They encode for products that help prevent uncontrolled cell growth.",
				false,
				"No. This refers to tumor-suppressor genes.");
			
				p.addAnswer(4, "They are segments of noncoding DNA that help regulate transcription by binding certain proteins.",
				false,
				"No. This refers to control elements.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335210;


		
		

		
			
			p.question = "What determines how long a particular mRNA molecule will persist in a eukaryotic cell? (<script type=\"text/javascript\">ebook(\'1802\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the number of introns removed during processing",
				false,
				"No. Introns do not leave the nucleus, so they do not play a role in the breakdown process that occurs in the cytoplasm.");
			
				p.addAnswer(2, "nucleotide sequences in the poly-A tail",
				true,
				"Correct. Nucleotide sequences in the untranslated region at the 3\' end of the molecule seem to be crucial in determining how long-lived a particular mRNA is.");
			
				p.addAnswer(3, "the number of exons removed during processing",
				false,
				"No. The exons present or absent are not the determining factor. The ends of the molecule are more important.");
			
				p.addAnswer(4, "the length of the 5\' cap",
				false,
				"No. Enzymes that break down RNAs generally start at the 3\' end.");
			
				p.addAnswer(5, "the presence of proteasomes in the cytoplasm\n\n",
				false,
				"No. Proteasomes break down proteins, not RNAs.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335211;


		
		

		
			
			p.question = "The discovery of many non-coding RNAs is causing scientists to revise the long-held view that ______ (<script type=\"text/javascript\">ebook(\'1803\',\'quiz\')</script>)";
			p.incorrect_any_expl = "No. This is true, but there is a better answer.";
			p.incorrect_any_expl_flag = 1;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "All genes code for proteins.",
				false,
				"");
			
				p.addAnswer(2, "There are only 3 types of RNA&#151;tRNA, rRNA, and mRNA.",
				false,
				"");
			
				p.addAnswer(3, "The vast majority of the human genome consists of \"junk\" DNA.",
				false,
				"");
			
				p.addAnswer(4, "Only DNA that codes for protein, tRNA, and rRNA is transcribed.",
				false,
				"");
			
				p.addAnswer(5, "all of the above",
				true,
				"Correct. All of the above \"facts\" have been challenged by the discovery of a number of types of RNA that do not code for protein.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335212;


		
		

		
			
			p.question = "MicroRNAs and small interfering RNAs both function similarly in \"silencing\" genes. What are two ways in which they may act? (<script type=\"text/javascript\">ebook(\'1803\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "inhibit RNA splicing and bind to complementary DNA sequences to prevent transcription",
				false,
				"No. These RNAs do not affect RNA splicing or bind to DNA.");
			
				p.addAnswer(2, "cut up mRNAs using the Dicer enzyme and bind to complementary mRNA sequences to prevent translation",
				false,
				"No. The Dicer enzyme is involved in forming miRNAs and siRNAs but not in degrading mRNAs.");
			
				p.addAnswer(3, "cut up mRNAs using the Dicer enzyme and bind to complementary DNA sequences to prevent transcription",
				false,
				"No. The Dicer enzyme is involved in forming miRNAs and siRNAs but not in degrading mRNAs. Also, these RNAs bind to other RNA molecules, not to DNA.");
			
				p.addAnswer(4, "degrade mRNA and bind to complementary mRNA sequences to prevent translation",
				true,
				"Correct. miRNAs and siRNAs act in both of these ways to prevent a transcribed gene from being translated into protein. In addition to their normal roles in cells, researchers see these RNAs as useful tools in studying the function of genes by being able to silence them.");
			
				p.addAnswer(5, "degrade mRNA and inhibit RNA splicing",
				false,
				"No. They do not affect RNA splicing.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335213;


		
		

		
			
			p.question = "Specific cells that appear undifferentiated under the microscope but are already fated to become muscle cells are called _____. (<script type=\"text/javascript\">ebook(\'1804\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "meristematic cells",
				false,
				"No. Meristematic cells are found in the roots and shoots of plants.");
			
				p.addAnswer(2, "bicoids",
				false,
				"No. Bicoid is a morphogen.");
			
				p.addAnswer(3, "myoblasts",
				true,
				"Correct. Under certain conditions precursor cells undergo changes in gene expression that commit them to becoming muscle cells. Once this differentiation has occurred, the cells are called myoblasts.");
			
				p.addAnswer(4, "muscle cells",
				false,
				"No. Although the cells are committed to becoming muscle cells, they do not yet have the structure of mature muscle cells.");
			
				p.addAnswer(5, "myocytes",
				false,
				"No. A myocyte is a fully differentiated muscle fiber.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335214;


		
		

		
			
			p.question = "MyoD promotes muscle cell development by _____. (<script type=\"text/javascript\">ebook(\'1804\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "turning on the expression of multiple muscle-related genes",
				true,
				"Correct. MyoD is a protein that acts as a transcription factor to turn on many genes, including the gene that codes for MyoD, that are involved in muscle cell development.");
			
				p.addAnswer(2, "stimulating a receptor on the surface of muscle cells, thus activating a signal-transduction pathway that promotes muscle development",
				false,
				"No. MyoD is a transcription factor that binds to enhancers directly in the DNA.");
			
				p.addAnswer(3, "increasing the translation of muscle-related genes",
				false,
				"No. Genes are transcribed, not translated.");
			
				p.addAnswer(4, "stimulating the production of muscle-specific splicing variants of certain mRNAs",
				false,
				"No. MyoD acts as a transcription factor to stimulate the transcription of genes. It does not act at the RNA level.");
			
				p.addAnswer(5, "enhancing apoptosis of non-muscle cells",
				false,
				"No. There is no evidence that MyoD stimulates apoptosis in non-muscle cells.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335215;


		
		

		
			
			p.question = "Cytoplasmic determinants _____. (<script type=\"text/javascript\">ebook(\'1804\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "are coded for by maternal genes",
				true,
				"Correct. Cytoplasmic determinants are present in egg cells before fertilization. Mutations in the mother\'s genes can lead to defects such as a fly embryo having two heads.");
			
				p.addAnswer(2, "act by binding to a plasma protein receptor that then initiates a signal-transduction pathway",
				false,
				"No. Cytoplasmic determinants are present inside the cell at the time of fertilization.");
			
				p.addAnswer(3, "are coded for by paternal genes",
				false,
				"No. Cytoplasmic determinants are present in the cell before fertilization.");
			
				p.addAnswer(4, "are carried to the ovum by the sperm",
				false,
				"No. Cytoplasmic determinants are present in the cell before fertilization.");
			
				p.addAnswer(5, "are coded for by embryonic genes",
				false,
				"No. Cytoplasmic determinants are present in the cell before fertilization.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335216;


		
		

		
			
			p.question = "Cells can influence each other\'s development by a process known as _____. (<script type=\"text/javascript\">ebook(\'1804\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "fating",
				false,
				"No. This is not the correct term.");
			
				p.addAnswer(2, "chimeras",
				false,
				"No. This is not the correct term.");
			
				p.addAnswer(3, "induction",
				true,
				"Correct. Induction occurs when cell signals from one cell affect the development of nearby cells.");
			
				p.addAnswer(4, "cleavage",
				false,
				"No. This is not the correct term.");
			
				p.addAnswer(5, "apoptosis",
				false,
				"No. This is not the correct term.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335217;


		
		

		
			
			p.question = "Instead of developing a head and a tail, an abnormal <i>Drosophila</i> embryo develops two tails. This is most likely due to _____. (<script type=\"text/javascript\">ebook(\'1804\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "apoptosis",
				false,
				"No. Apoptosis is the term for programmed cell death.");
			
				p.addAnswer(2, "a mutation in an operon",
				false,
				"No. Eukaryotes do not have operons.");
			
				p.addAnswer(3, "a failure involving post-transcriptional modification of mRNA",
				false,
				"No. There is no evidence to indicate that this condition arises from problems with modifications of mRNA.");
			
				p.addAnswer(4, "a mutation in a maternal effect gene",
				true,
				"Correct. Some maternal effect genes provide positional information in the developing embryo. Mutations in these genes can cause abnormal development.");
			
				p.addAnswer(5, "destruction of the RNA polymerase molecules responsible for the transcription of genes that encode head-related proteins",
				false,
				"No. This condition is caused by mutations in maternal effect genes.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335218;


		
		

		
			
			p.question = "Cell differentiation is first observable when _____. (<script type=\"text/javascript\">ebook(\'1804\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "mRNAs for tissue-specific proteins appear in a cell",
				true,
				"Correct. Even before a cell\'s structure begins to change, differentiation is heralded by the appearance of these mRNAs in the cell.");
			
				p.addAnswer(2, "apoptosis occurs",
				false,
				"No. Apoptosis is programmed cell death.");
			
				p.addAnswer(3, "a cell appears different under the microscope",
				false,
				"No. Cell differentiation is observable even before the cell begins to undergo changes in structure that are observable under a microscope.");
			
				p.addAnswer(4, "the genome of a particular cell changes",
				false,
				"No. A cell\'s genome does not change. The expression of the genes in the genome changes as a cell differentiates.");
			
				p.addAnswer(5, "patterns of mitosis change in different cells",
				false,
				"No. The process of mitosis is the same for all cells.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335219;


		
		

		
			
			p.question = "A cancer cell _____. (<script type=\"text/javascript\">ebook(\'1805\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "is typically more than 10 times larger than a normal cell",
				false,
				"No. This is not true.");
			
				p.addAnswer(2, "usually does not contain a nucleus",
				false,
				"No. A cancer cell does contain a nucleus.");
			
				p.addAnswer(3, "does not respond to the chemical signals that control cell division",
				true,
				"Correct. Cancer is a set of diseases in which cells escape from the control mechanisms normally limiting their rate of division.");
			
				p.addAnswer(4, "requires less nutrients than a normal cell",
				false,
				"No. Cancer cells are dividing cells and, as such, require lots of nutrients.");
			
				p.addAnswer(5, "all of the above",
				false,
				"No. Only one of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335220;


		
		

		
			
			p.question = "In the human genome, oncogenes _____. (<script type=\"text/javascript\">ebook(\'1805\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "stimulate cell division",
				true,
				"Correct. Oncogenes stimulate cell division.");
			
				p.addAnswer(2, "slow cell division",
				false,
				"No. This is not a characteristic of a cancer.");
			
				p.addAnswer(3, "suppress tumors",
				false,
				"No. Cancers are a type of tumor.");
			
				p.addAnswer(4, "promote cell adhesion",
				false,
				"No. Oncogenes promote cancer, and cancerous cells generally show decreased cell-cell adhesion.");
			
				p.addAnswer(5, "enhance DNA repair",
				false,
				"No. Oncogenes are cancer-causing genes; repair of DNA damage would help prevent cancer.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335221;


		
		

		
			
			p.question = "Most human cancers are _____. (<script type=\"text/javascript\">ebook(\'1805\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "caused by the accumulation of somatic mutations",
				true,
				"Correct. Most human cancers result from the accumulation of multiple mutations in a single somatic cell that then loses control over its rate of growth and cell division.");
			
				p.addAnswer(2, "caused by viruses",
				false,
				"No. Viruses are responsible for about 15% of human cancer cases.");
			
				p.addAnswer(3, "inherited from one parent, like an autosomal dominant allele",
				false,
				"No. Some are, but not most.");
			
				p.addAnswer(4, "inherited from both parents, like an autosomal recessive allele",
				false,
				"No. Some are, but not most.");
			
				p.addAnswer(5, "caused by radiation",
				false,
				"No. Radiation is one possible cause of cancer-causing mutations, but it is not the primary one.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335222;


		
		

		
			
			p.question = "What gene has been called the \"guardian angel of the genome?\" (<script type=\"text/javascript\">ebook(\'1805\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "The <i>p21</i> gene",
				false,
				"No. The <i>p21</i> gene can halt the cell cycle, but it is not the guardian angel.");
			
				p.addAnswer(2, "The <i>BRCA1</i> gene",
				false,
				"No. The <i>BRCA1</i> gene is involved in the development of breast cancer.");
			
				p.addAnswer(3, "The <i>ras</i> gene",
				false,
				"No. The <i>ras</i> gene is a proto-oncogene. When it is mutated it stimulates cell division.");
			
				p.addAnswer(4, "The <i>myoD</i> gene",
				false,
				"No. The <i>myoD</i> gene is a master regulatory gene involved in the differentiation of muscle cells.");
			
				p.addAnswer(5, "The <i>p53</i> gene",
				true,
				"Correct. The <i>p53</i> gene can activate several genes involved in DNA repair, halting of the cell cycle, or initiation of apoptosis.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335223;


		
		

		
			
			p.question = "What two genes are often mutated in colon cancer?\n (<script type=\"text/javascript\">ebook(\'1805\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "<i>ras</i> and <i>myoD</i>",
				false,
				"No. <i>myoD</i> is involved in muscle cell differentiation.");
			
				p.addAnswer(2, "<i>p21</i> and <i>p53</i>",
				false,
				"No. These both function primarily as tumor-suppressor genes. Full cancer development usually involves both oncogenes and tumor-suppressor genes.");
			
				p.addAnswer(3, "<i>ras</i> and <i>p53</i>",
				true,
				"Correct. <i>ras</i>, an oncogene, and <i>p53</i>, a tumor-suppressor gene, are often found to be mutated in colon cancers.");
			
				p.addAnswer(4, "<i>BRCA1</i> and <i>BRCA2</i>",
				false,
				"No. These genes are primarily involved in breast cancer development.");
			
				p.addAnswer(5, "<i>APC</i> and <i>myoD</i>",
				false,
				"No. Although <i>APC</i> is implicated in many inherited colon cancers, <i>myoD</i> is involved in the differentiation of muscle cells.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335224;


		
		

		
			
			p.question = "Why is cancer more prevalent in older people?\n (<script type=\"text/javascript\">ebook(\'1805\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Cancer involves an accumulation of mutations, so older people have had more time to accumulate mutations in their DNA.",
				true,
				"Correct. Older people have simply had more cell divisions, more exposure to environmental carcinogens, and so on. Chance dictates that they have had more opportunities for mutations to occur.");
			
				p.addAnswer(2, "Cancer is caused by viruses, and older people are more susceptible to viral infections.",
				false,
				"No. Viruses are responsible for about 15% of human cancer cases.");
			
				p.addAnswer(3, "Cancer lies dormant for many years before causing problems.",
				false,
				"No. Although some cancers develop slowly, many can be very aggressive and develop quickly.");
			
				p.addAnswer(4, "Most cancers are inherited as a recessive allele, so it takes time for the allele to be expressed.",
				false,
				"No. Most cancers are not inherited, and recessive alleles are not expressed.");
			
				p.addAnswer(5, "Cancer involves changes in gene expression, and it takes many years for gene expression to change.",
				false,
				"No. Gene expression can change almost instantaneously.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335225;


		
		

		
			
			p.question = "In what way can cancer be hereditary? (<script type=\"text/javascript\">ebook(\'1805\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "A person can inherit cancer cells from one of their parents.",
				false,
				"No. A person does not inherit cells from his/her parents. A person inherits chromosomes.");
			
				p.addAnswer(2, "One or two of several mutations necessary for full cancer development can be inherited, giving a person a predisposition to developing cancer.",
				true,
				"Correct. Because most cancers involve several mutations, a person who inherits one or more of these mutations will be more susceptible to cancer, but will not necessarily develop it?");
			
				p.addAnswer(3, "All of the mutations necessary for full cancer development can be inherited, giving a person a predisposition to developing cancer.",
				false,
				"No. It is unlikely that a person whose genome contained all the mutations necessary for full cancer development would live long enough to reproduce.");
			
				p.addAnswer(4, "Proto-oncogenes can be inherited, giving the person a predisposition to developing cancer.",
				false,
				"No. Proto-oncogenes are always inherited. For the most part proto-oncogenes are normal genes that code for growth factors.");
			
				p.addAnswer(5, "Tumor-suppressor genes can be inherited, giving the person a predisposition to developing cancer.",
				false,
				"No. Tumor-suppressor genes are always inherited, but they help prevent cancer.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335226;


		
		

		
			
			p.question = "The <i>BRCA1</i> and <i>BRCA2</i> genes are thought to be what type of genes? (<script type=\"text/javascript\">ebook(\'1805\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "proto-oncogenes",
				false,
				"No. They are probably tumor-suppressor genes.");
			
				p.addAnswer(2, "oncogenes",
				false,
				"No. They are probably tumor-suppressor genes.");
			
				p.addAnswer(3, "viral genes",
				false,
				"No. They are normal parts of the human genome.");
			
				p.addAnswer(4, "transcription factor genes",
				false,
				"No. They are probably tumor-suppressor genes.");
			
				p.addAnswer(5, "tumor-suppressor genes",
				true,
				"Correct. They are thought to be tumor-suppressor genes because the wild-type alleles protect against breast cancer.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

