

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "5: The Structure and Function of Macromolecules > Practice Test";
	ak.quiz_loc_with_commas = "5: The Structure and Function of Macromolecules, Practice Test";
	ak.quiz_title = "Practice Test";

	
		ak.help_url = "../../placeholders/help_placeholder.html";
	
	ak.essay_total = 0;
	ak.pair_problem_total = 0;
	ak.pair_total = 0;
	ak.problem_total = 47;
	ak.non_essay_total = 47;
	ak.scored_item_total = 47;

	
	
	


	
	ak.copyright_date = "2008";
	ak.brandname = "Pearson Benjamin Cummings";
	ak.legal = "../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.pearsoned.com%2Flegal%2Findex.htm";


	// Loop over all problems
	
	
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334263;


		
		

		
			
			p.question = "What is the process by which monomers are linked together to form polymers? (<script type=\"text/javascript\">ebook(\'0501\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "hydrolysis",
				false,
				"No. Hydrolysis is the process by which polymers are separated into monomers.");
			
				p.addAnswer(2, "monomerization",
				false,
				"No. The process would be a polymerization.");
			
				p.addAnswer(3, "protein formation",
				false,
				"No. This would be true only for the special case of linking amino acids together to form a polypeptide.");
			
				p.addAnswer(4, "coiling",
				false,
				"No. But this may occur to molecules that are already polymerized.");
			
				p.addAnswer(5, "dehydration or condensation reactions",
				true,
				"Correct. Monomers are linked together with the removal of a water molecule by dehydration (condensation) reactions.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334264;


		
		

		
			
			p.question = "In a hydrolysis reaction, _____, and in this process water is _____. (<script type=\"text/javascript\">ebook(\'0501\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "a polymer is broken up into its constituent monomers; consumed",
				true,
				"Correct. The meaning of \"hydrolysis\" is \"to break with water.\"");
			
				p.addAnswer(2, "a monomer is broken up into its constituent polymers; produced",
				false,
				"No. Monomers are smaller than polymers and are combined to form a polymer.");
			
				p.addAnswer(3, "monomers are assembled to produce a polymer; consumed",
				false,
				"No. Hydrolysis describes a catabolic process, although water is consumed during hydrolysis.");
			
				p.addAnswer(4, "monomers are assembled to produce a polymer; produced",
				false,
				"No. Hydrolysis describes a catabolic process. Look for an answer with fewer reactants and many products.");
			
				p.addAnswer(5, "a polymer is broken up into its constituent monomers; produced",
				false,
				"No. This choice is partially correct. In hydrolysis water is utilized as a reactant; water is not a product of a hydrolysis reaction.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334265;


		
		

		
			
			p.question = "The type of bond that forms to join monomers (such as sugars and amino acids) into polymers (such as starch and proteins) is a(n) _____ bond. (<script type=\"text/javascript\">ebook(\'0501\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "hydrogen",
				false,
				"No. A hydrogen bond is a relatively weak bond.");
			
				p.addAnswer(2, "covalent",
				true,
				"Correct. Monomers are joined together by a dehydration reaction in which two molecules are covalently bonded to each other through the loss of a water molecule.");
			
				p.addAnswer(3, "ionic",
				false,
				"No. Sugars are not ions.");
			
				p.addAnswer(4, "peptide",
				false,
				"No. This specific type of covalent bond is not found in polysaccharides.");
			
				p.addAnswer(5, "van der Waals",
				false,
				"No. Van der Waals interactions do not link monomers together. They play a role in the tertiary structure of proteins.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334266;


		
		

		
			
			p.question = "Which of the following is a polymer? (<script type=\"text/javascript\">ebook(\'0502\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "testosterone, a steroid hormone",
				false,
				"No. Testosterone is categorized as a lipid, more specifically a steroid. It is not composed of monomer building blocks. The molecules are characterized by a carbon skeleton consisting of four fused rings of carbon atoms.");
			
				p.addAnswer(2, "cellulose, a plant cell wall component",
				true,
				"Correct. The polysaccharide cellulose is a major component of plant cell walls. It is a polymer composed of many glucose monomers joined together by glycosidic linkages.");
			
				p.addAnswer(3, "glucose, an energy-rich molecule",
				false,
				"No. Glucose is a monosaccharide, a monomer.");
			
				p.addAnswer(4, "triacylglycerol, or fat",
				false,
				"No. Triacylglycerol is a fat composed of three fatty acid molecules joined by ester linkages to one molecule of glycerol.");
			
				p.addAnswer(5, "fructose, a component of sucrose",
				false,
				"No. Fructose is a monosaccharide, a monomer.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334267;


		
		

		
			
			p.question = "Cellulose is a _____ made of many _____. (<script type=\"text/javascript\">ebook(\'0502\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "polypeptide; monomers",
				false,
				"No. A polypeptide is a macromolecule constructed from amino acid monomers.");
			
				p.addAnswer(2, "carbohydrate; fatty acids",
				false,
				"No. Cellulose is a carbohydrate, but it is constructed of monosaccharide monomers.");
			
				p.addAnswer(3, "polymer; glucose molecules",
				true,
				"Correct. Cellulose is a polysaccharide and therefore a polymer, constructed from many monosaccharide glucose monomers.");
			
				p.addAnswer(4, "protein; amino acids",
				false,
				"No. Although amino acids are the monomers of a protein, cellulose is not a protein.");
			
				p.addAnswer(5, "lipid; triacylglycerols",
				false,
				"No. Cellulose is not a lipid. A triacylglycerol is a fat.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334268;


		
		

		
			
			p.question = "Generally, animals cannot digest (hydrolyze) the glycosidic linkages between the glucose molecules in cellulose. How then do cows get enough nutrients from eating grass? (<script type=\"text/javascript\">ebook(\'0502\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "They have to eat a lot of it.",
				false,
				"No. That wouldn\'t make it any more digestible.");
			
				p.addAnswer(2, "Microorganisms in their digestive tracts hydrolyze the cellulose to individual glucose units.",
				true,
				"Correct. Cows have digestive chambers populated by microorganisms that can produce certain hydrolytic enzymes that cows cannot. The enzymes hydrolyze (digest) the cellulose polymer into glucose monomers.");
			
				p.addAnswer(3, "Cows and other herbivores are exceptions and make some cellulose-digesting enzymes.",
				false,
				"No. Cows cannot digest cellulose without the help of their microorganismal flora, because they cannot produce an enzyme to hydrolyze the specific beta (&#946;) glycosidic linkages present in the cellulose polymer.");
			
				p.addAnswer(4, "The flat teeth and strong stomach of herbivores break the cellulose fibers so that the cows get enough nutrition from the cell contents.",
				false,
				"No. There would not be enough nutrients provided in this manner.");
			
				p.addAnswer(5, "all of the above",
				false,
				"No. Only one of the above is a correct answer.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334269;


		
		

		
			
			p.question = "In what polysaccharide form do plants store glucose to be available later as an energy source? (<script type=\"text/javascript\">ebook(\'0502\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "glycogen",
				false,
				"No. Glycogen is a glucose storage polymer found in animals.");
			
				p.addAnswer(2, "cellulose",
				false,
				"No. Cellulose is not digestible by plants, so cellulose cannot be an energy source.");
			
				p.addAnswer(3, "starch",
				true,
				"Correct. Starch is a glucose storage polymer in plants.");
			
				p.addAnswer(4, "protein",
				false,
				"No. Protein is a polypeptide, not a polysaccharide.");
			
				p.addAnswer(5, "fatty acids",
				false,
				"No. Fatty acids are not carbohydrates.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334270;


		
		

		
			
			p.question = "Which one of the following carbohydrate molecules has the lowest molecular weight?\n (<script type=\"text/javascript\">ebook(\'0502\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "sucrose",
				false,
				"No. Sucrose is a disaccharide.");
			
				p.addAnswer(2, "lactose",
				false,
				"No. Lactose is a disaccharide.");
			
				p.addAnswer(3, "glucose",
				true,
				"Correct. Glucose is a monosaccharide.");
			
				p.addAnswer(4, "cellulose",
				false,
				"No. Cellulose is a polysaccharide composed of many monosaccharides.");
			
				p.addAnswer(5, "chitin",
				false,
				"No. Chitin is a polysaccharide composed of many monosaccharides.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334271;


		
		

		
			
			p.question = "Which one of the following molecules is a monosaccharide? (<script type=\"text/javascript\">ebook(\'0502\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "C<sub>51</sub>H<sub>98</sub>O<sub>6</sub>",
				false,
				"No. Consider the C:H:O ratio present in a monosaccharide.");
			
				p.addAnswer(2, "C<sub>45</sub>H<sub>84</sub>O<sub>8</sub>PN",
				false,
				"No. Monosaccharides do not contain phosphorus or nitrogen. Also, consider the C:H:O ratio present in a monosaccharide.");
			
				p.addAnswer(3, "C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>",
				true,
				"Correct. Monosaccharides have molecular formulas that are multiples of CH<sub>2</sub>O.");
			
				p.addAnswer(4, "C<sub>25</sub>H<sub>43</sub>O<sub>8</sub>",
				false,
				"No. Consider the C:H:O ratio present in a monosaccharide.");
			
				p.addAnswer(5, "C<sub>22</sub>H<sub>49</sub>O<sub>10</sub>N<sub>5</sub>",
				false,
				"No. Monosaccharides do not contain nitrogen. Also, consider the C:H:O ratio present in a monosaccharide.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334272;


		
		

		
			
			p.question = "At a conference, the speaker\'s grand finale was sauteeing mealworms (insect larvae) in butter and serving them to the audience. They were crunchy (like popcorn hulls) because their exoskeletons contain the polysaccharide _____. (<script type=\"text/javascript\">ebook(\'0502\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "collagen",
				false,
				"No. This is a structural protein found in tendons and ligaments (among other places).");
			
				p.addAnswer(2, "cellulose",
				false,
				"No. This is a structural polysaccharide found in plant cell walls.");
			
				p.addAnswer(3, "linoleic acid",
				false,
				"No. For humans, this is an essential fatty acid.");
			
				p.addAnswer(4, "chitin",
				true,
				"Correct. Chitin is the structural polysaccharide found in arthropod exoskeletons.");
			
				p.addAnswer(5, "glycogen",
				false,
				"No. In animals, this is a glucose storage form of polysaccharide.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334273;


		
		

		
			
			p.question = "Carbohydrates are used in our bodies mainly for _____. (<script type=\"text/javascript\">ebook(\'0502\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "membrane construction",
				false,
				"No. Membranes are composed primarily of lipids.");
			
				p.addAnswer(2, "structural molecules, such as hair and fingernails",
				false,
				"No. These are composed primarily of protein.");
			
				p.addAnswer(3, "building genetic material",
				false,
				"No. Genetic material is composed of nucleic acids, and enzymatic proteins catalyze its construction.");
			
				p.addAnswer(4, "energy storage and release",
				true,
				"Correct. Simple sugar molecules, stored in polysaccharides such as glycogen in animals and starch in plants, are a major energy source for cellular work.");
			
				p.addAnswer(5, "lipid storage",
				false,
				"No. Although carbohydrates can be converted to lipids, carbohydrates and lipids are two different categories of the four major kinds of macromolecules found in living systems.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334274;


		
		

		
			
			p.question = "The polysaccharide that you are most likely to have eaten recently is _____. (<script type=\"text/javascript\">ebook(\'0502\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "chitin",
				false,
				"No. This is a polysaccharide found in insect exoskeletons.");
			
				p.addAnswer(2, "starch",
				true,
				"Correct. Starch is a storage polysaccharide found especially in certain plant tissues.");
			
				p.addAnswer(3, "glucose",
				false,
				"No. Glucose is a monosaccharide.");
			
				p.addAnswer(4, "lactose",
				false,
				"No. Lactose is a disaccharide.");
			
				p.addAnswer(5, "ribose",
				false,
				"No. Ribose is a monosaccharide.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334275;


		
		

		
			
			p.question = "One characteristic shared by sucrose, lactose, and maltose is that _____. (<script type=\"text/javascript\">ebook(\'0502\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "they are all polysaccharides",
				false,
				"No. They are not polysaccharides. A polysaccharide is composed of many monosaccharide building blocks.");
			
				p.addAnswer(2, "they are all monosaccharides",
				false,
				"No. They are not monosaccharides. A monosaccharide is a single sugar containing three to seven carbons.");
			
				p.addAnswer(3, "they are all disaccharides",
				true,
				"Correct. A disaccharide consists of two monosaccharides joined together by a glycosidic linkage.");
			
				p.addAnswer(4, "they all contain fructose",
				false,
				"No. Fructose is a six-carbon monosaccharide sugar.");
			
				p.addAnswer(5, "they are all indigestible by humans",
				false,
				"No. All three are digestible by humans.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334276;


		
		

		
			
			p.question = "A polysaccharide that is used for storing energy in human muscle and liver cells is _____. (<script type=\"text/javascript\">ebook(\'0502\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "glucose",
				false,
				"No. Glucose is a monosaccharide, not a polysaccharide.");
			
				p.addAnswer(2, "glycogen",
				true,
				"Correct. Humans and other vertebrates store glucose as a polysaccharide called glycogen in their liver and muscles.");
			
				p.addAnswer(3, "starch",
				false,
				"No. Starch is a plant polysaccharide.");
			
				p.addAnswer(4, "chitin",
				false,
				"No. Chitin is not found in humans. Chitin is a structural polysaccharide found in the exoskeleton of arthropods.");
			
				p.addAnswer(5, "cellulose",
				false,
				"No. Cellulose is a polysaccharide present in plant cell walls.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334277;


		
		

		
			
			p.question = "Carbohydrates can function in which of the following ways?\n (<script type=\"text/javascript\">ebook(\'0502\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "structural support",
				false,
				"No. Cellulose is an example of a structural polysaccharide, but there is a better answer.");
			
				p.addAnswer(2, "energy storage",
				false,
				"No. Plants store energy in the form of starch, but there is a better answer.");
			
				p.addAnswer(3, "information storage",
				false,
				"No. Nucleic acids function in energy storage.");
			
				p.addAnswer(4, "enzymatic catalysis",
				false,
				"No. Proteins act as enzymatic catalysts, not carbohydrates.");
			
				p.addAnswer(5, "both a and b",
				true,
				"Correct. Carbohydrates function as both storage molecules (starch, glycogen) and as structural support molecules (cellulose).");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334278;


		
		

		
			
			p.question = "In a 1-4 glycosidic linkage (<script type=\"text/javascript\">ebook(\'0502\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "The number 1 carbon in one monosaccharide is bound to the number 4 carbon in another monosaccharide.",
				true,
				"Correct. Glycosidic linkages, the covalent bonds that link simple sugars, are named according to the carbon atoms they join.");
			
				p.addAnswer(2, "The number 1 carbon in one nucleotide is bound to the number 4 carbon in another nucleotide.",
				false,
				"No. Glycosidic linkages are the covalent bonds found in carbohydrates, not nucleic acids.");
			
				p.addAnswer(3, "One monosaccharide is bound to four others.",
				false,
				"No. The one and the four refer to the carbon atoms involved in the linkage.");
			
				p.addAnswer(4, "There are four possible isomers of the structure.",
				false,
				"No. The one and four refer to the carbon atoms involved in the linkage.");
			
				p.addAnswer(5, "One glycerol molecule is bound to four fatty acids.",
				false,
				"No. Glycosidic linkages are the covalent bonds found in carbohydrates, not lipids.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334279;


		
		

		
			
			p.question = "Amylase is an enzyme that breaks down starch. Why can\'t the same enzyme break down cellulose?\n (<script type=\"text/javascript\">ebook(\'0502\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "The enzyme cannot attack cellulose because of its helical shape.",
				false,
				"No. Cellulose is straight; starch is helical.");
			
				p.addAnswer(2, "Cellulose molecules are much too large.",
				false,
				"No. Since amylase sequentially removes a disaccharide from one end of its substrate, it does not matter how large the molecule is.");
			
				p.addAnswer(3, "Starch is made of glucose; cellulose is made of fructose.",
				false,
				"No. Both cellulose and starch are made from glucose monomers.");
			
				p.addAnswer(4, "The bonds between the monosaccharide monomers in cellulose are much stronger.",
				false,
				"No. Bond strength is related to the bonded atoms, which for both molecules is carbon-to-oxygen glycosidic linkages.");
			
				p.addAnswer(5, "The monosaccharide monomers in cellulose are bonded together differently than in starch.",
				true,
				"Correct. The glucose monomers in cellulose are bonded in a beta glycosidic linkage, whereas those in starch have an alpha glycosidic linkage. The enzyme amylase is specific for the alpha glycosidic linkage.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334280;


		
		

		
			
			p.question = "The subunits (monomers) in cellulose are linked together by _____. (<script type=\"text/javascript\">ebook(\'0502\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "ionic bonds",
				false,
				"No. Carbohydrate monomers are not ions.");
			
				p.addAnswer(2, "glycosidic linkages",
				true,
				"Correct. The glucose monomers of cellulose are linked together by a specific type of covalent bond known as a glycosidic linkage.");
			
				p.addAnswer(3, "peptide bonds",
				false,
				"No. Peptide bonds link amino acids.");
			
				p.addAnswer(4, "phosphodiester linkages",
				false,
				"No. Nucleotides are joined together by phosphodiester linkages.");
			
				p.addAnswer(5, "ester linkages",
				false,
				"No. Fatty acids are joined to glycerol by ester linkages.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334281;


		
		

		
			
			p.question = "Which one of the following components of a tossed salad will pass through the human digestive tract and be digested the least? (<script type=\"text/javascript\">ebook(\'0502\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "sugar (in the dressing)",
				false,
				"No. Sugars will be digested and absorbed.");
			
				p.addAnswer(2, "oil (in the dressing)",
				false,
				"No. Oils will be digested and absorbed.");
			
				p.addAnswer(3, "starch (in the croutons)",
				false,
				"No. Starch is easily digested.");
			
				p.addAnswer(4, "cellulose (in the lettuce)",
				true,
				"Correct. Cellulose contains glycosidic linkages that cannot be broken by human digestive enzymes.");
			
				p.addAnswer(5, "protein (in the bacon bits)",
				false,
				"No. Most proteins are completely digestible.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334282;


		
		

		
			
			p.question = "Lipids differ from other large biological molecules in that they _____. (<script type=\"text/javascript\">ebook(\'0503\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "are much larger",
				false,
				"No. Actually, they are typically smaller than the other three types of biological macromolecules.");
			
				p.addAnswer(2, "are not truly polymers",
				true,
				"Correct. Lipids are not all made of the same type of monomer. Their association as a group (fats, phospholipids, and steroids) is related to their solubility behavior.");
			
				p.addAnswer(3, "do not have specific shapes",
				false,
				"No. All molecules have a specific shape.");
			
				p.addAnswer(4, "do not contain carbon",
				false,
				"No. Carbon forms the skeleton of fatty acids and steroids.");
			
				p.addAnswer(5, "do not contain nitrogen and phosphorus atoms",
				false,
				"No. Phospholipids contain phosphorus and may contain nitrogen. Nitrogen is present in protein, and both nitrogen and phosphorus are present in nucleic acids.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334283;


		
		

		
			
			p.question = "Which is the term for compounds that do not mix with water? (<script type=\"text/javascript\">ebook(\'0503\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "phospholipids",
				false,
				"No. Phospholipids are partially soluble in an aqueous medium because of their hydrophilic \"heads.\"");
			
				p.addAnswer(2, "hydrophobic",
				true,
				"Correct. Hydrophobic compounds are those that are insoluble in water.");
			
				p.addAnswer(3, "hydrophilic",
				false,
				"No. Hydrophilic compounds are those that are soluble in water.");
			
				p.addAnswer(4, "proteins",
				false,
				"No. Proteins may be soluble or insoluble in water depending on the number and types of their R (side) groups.");
			
				p.addAnswer(5, "hydrogen-bonded",
				false,
				"No. Although hydrogen-bonded compounds are likely to be water-soluble, this is not what the term means.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334284;


		
		

		
			
			p.question = "Nutritionally, saturated triacylglycerols are considered to be less healthful than unsaturated triacylglycerols. What is the difference between them?\n (<script type=\"text/javascript\">ebook(\'0503\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Saturated triacylglycerols are fats; unsaturated triacylglycerols are carbohydrates.",
				false,
				"No. All triacylglycerols are fats.");
			
				p.addAnswer(2, "Saturated triacylglycerols have more hydrogen atoms than unsaturated triacylglycerols.",
				true,
				"Correct. Saturated triacylglycerols are saturated with hydrogen atoms.");
			
				p.addAnswer(3, "Saturated triacylglycerols have more double bonds than unsaturated triacylglycerols.",
				false,
				"No. Saturated triacylglycerols have fewer double bonds than unsaturated triacylglycerols.");
			
				p.addAnswer(4, "Saturated triacylglycerols are liquid at room temperature.",
				false,
				"No. Saturated triacylglycerols are solid at room temperature; unsaturated triacylglycerols are liquid at room temperature.");
			
				p.addAnswer(5, "all of the above",
				false,
				"No. Only one of the above is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334285;


		
		

		
			
			p.question = "The lipids that form the main structural component of cell membranes are _____. (<script type=\"text/javascript\">ebook(\'0503\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "triacylglycerols",
				false,
				"No. Triacylglycerols are completely insoluble in aqueous solution and thus have an unsuitable structure for membranes.");
			
				p.addAnswer(2, "proteins",
				false,
				"No. Proteins do make up a substantial portion of cell membranes, but proteins are not lipids.");
			
				p.addAnswer(3, "cholesterol",
				false,
				"No. There is some cholesterol in cell membranes, but it is not the main structural component.");
			
				p.addAnswer(4, "carbohydrates",
				false,
				"No. Carbohydrates are not lipids.");
			
				p.addAnswer(5, "phospholipids",
				true,
				"Correct. Phospholipids have a hydrophilic head and two hydrophobic tails. This permits the phospholipids to be arranged in a bilayer, or double layer, which forms a boundary between the cell and its external environment.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334286;


		
		

		
			
			p.question = "If a small droplet of triacylglycerol molecules is suspended in water, the fat molecules form a \"ball of spaghetti\" with no particular orientation. But if a droplet of phospholipid molecules is put in water, all the molecules point outward, toward the water. Phospholipids are forced into this orientation because phospholipids have _____. (<script type=\"text/javascript\">ebook(\'0503\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "a charged end and a noncharged end",
				true,
				"Correct. The hydrocarbon tails of phospholipids are hydrophobic and are excluded from water. The negatively charged phosphate group and its attachments form a hydrophilic head that is attracted to water.");
			
				p.addAnswer(2, "three fatty acid molecules, all pointing in different directions",
				false,
				"No. Phospholipids are composed of two fatty acid tails attached to a glycerol to which is also attached an electrically charged head region. Think about how hydrophobic substances differ from hydrophilic ones.");
			
				p.addAnswer(3, "two fatty acid molecules pointing in different directions",
				false,
				"No. Think about how hydrophobic substances differ from hydrophilic ones.");
			
				p.addAnswer(4, "both a saturated fatty acid and an unsaturated fatty acid",
				false,
				"No. Unsaturated fatty acids and saturated fatty acids would have similar solubility when placed in water.");
			
				p.addAnswer(5, "two charged ends",
				false,
				"No. Only one end of a phospholipid molecule is charged.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334287;


		
		

		
			
			p.question = "Which one of the following is a true statement comparing phospholipids and triacylglycerols (fats and oils)? (<script type=\"text/javascript\">ebook(\'0503\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Both molecules contain a phosphate group.",
				false,
				"No. Triacylglycerols do not contain a phosphate group.");
			
				p.addAnswer(2, "Triacylglycerols may be saturated or unsaturated, but all phospholipids are saturated.",
				false,
				"No. The two fatty acid chains of phospholipids may be saturated or unsaturated.");
			
				p.addAnswer(3, "Phospholipids are the primary storage form for fats in our bodies.",
				false,
				"No. Triacylglycerols are the primary storage form for fats in our bodies.");
			
				p.addAnswer(4, "Phospholipid molecules have a distinctly polar \"head\" and a distinctly nonpolar \"tail,\" whereas triacylglycerols are predominantly nonpolar.",
				true,
				"Correct. Triacylglycerols consist of three (nonpolar) fatty acid tails attached to a glycerol molecule. Phospholipids have two fatty acid tails and a hydrophilic head containing a negatively charged phosphate group.");
			
				p.addAnswer(5, "In nature, phospholipids occur in fused rings (sterol form), whereas triacylglycerols maintain a straight-chain form.",
				false,
				"No. Phospholipids are not steroids. Triacylglycerols are composed of three fatty acids joined to a molecule of glycerol by ester linkages.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334288;


		
		

		
			
			p.question = "The sex hormones estrogen, progesterone, and testosterone belong to which class of molecules?\n (<script type=\"text/javascript\">ebook(\'0503\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "proteins",
				false,
				"No. They are not proteins.");
			
				p.addAnswer(2, "amino acids",
				false,
				"No. They are not amino acids.");
			
				p.addAnswer(3, "lipids",
				true,
				"Correct. Steroids, such as estrogen, progesterone, and testosterone are lipids based on their insolubility in water. The molecules are characterized by a carbon skeleton consisting of four fused rings of carbon atoms.");
			
				p.addAnswer(4, "carbohydrates",
				false,
				"No. They are not carbohydrates.");
			
				p.addAnswer(5, "nucleic acids",
				false,
				"No. They are not nucleic acids.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334289;


		
		

		
			
			p.question = "High cholesterol levels are considered a major risk factor for heart disease. If it is so bad for humans, why does the body make cholesterol in the first place?\n (<script type=\"text/javascript\">ebook(\'0503\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Cholesterol is not important for humans anymore. It is a holdover from hunter-gatherer days when food was scarce.",
				false,
				"No. Cholesterol is an important constituent of cell membranes and the basis for vertebrate sex hormones.");
			
				p.addAnswer(2, "Cholesterol is an important energy storage molecule.",
				false,
				"No. Although cholesterol is a lipid, it does not store energy.");
			
				p.addAnswer(3, "Cholesterol is an important constituent of nucleotides.",
				false,
				"No. Cholesterol is not directly involved in nucleotide synthesis.");
			
				p.addAnswer(4, "Cholesterol is the basis for many important molecules such as sex hormones.",
				true,
				"Correct. Cholesterol is the basis for many steroid molecules including sex hormones.");
			
				p.addAnswer(5, "Cholesterol aids in the formation of amino acids that are used to build proteins.",
				false,
				"No. Cholesterol is not directly involved in amino acid synthesis.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334290;


		
		

		
			
			p.question = "Manufacturers make vegetable oils solid or semisolid at room temperature by _____. (<script type=\"text/javascript\">ebook(\'0503\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "adding hydrogen atoms to the double bonds in the fatty acid hydrocarbon chains",
				true,
				"Correct. The phrase \"hydrogenated vegetable oils\" found on food labels means that unsaturated fats have been synthetically converted to saturated fats by the addition of hydrogen.");
			
				p.addAnswer(2, "removing hydrogen atoms and forming additional double bonds in the fatty acid hydrocarbon chains",
				false,
				"No. This would increase the liquid nature of the vegetable oil.");
			
				p.addAnswer(3, "removing hydrogen atoms and forming additional single bonds in the fatty acid hydrocarbon chains",
				false,
				"No. If hydrogen atoms were removed, additional double bonds would be formed.");
			
				p.addAnswer(4, "adding hydrogen atoms to the single bonds of the fatty acid hydrocarbon chains",
				false,
				"No. Additional hydrogen atoms cannot be added if each carbon of the fatty acid hydrocarbon chain is already saturated with hydrogen.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. There is one correct answer.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334291;


		
		

		
			
			p.question = "Which one of the following is the major energy storage compound of plant seeds?\n (<script type=\"text/javascript\">ebook(\'0503\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "amylose",
				false,
				"No. This is a type of polysaccharide.");
			
				p.addAnswer(2, "glycogen",
				false,
				"No. This is a polysaccharide.");
			
				p.addAnswer(3, "cellulose",
				false,
				"No. This is a polysaccharide.");
			
				p.addAnswer(4, "lipids",
				false,
				"No. The answer is more specific.");
			
				p.addAnswer(5, "oils",
				true,
				"Correct. Vegetable oils are generally obtained from seeds, in which compact storage is an asset to the plant.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334292;


		
		

		
			
			p.question = "Some lipids are formed when fatty acids are linked to glycerol. These subunits are linked together by _____.\n (<script type=\"text/javascript\">ebook(\'0503\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "glycosidic linkages",
				false,
				"No. Glycosidic linkages join carbohydrate monomers.");
			
				p.addAnswer(2, "ionic bonds",
				false,
				"No. Lipids are not ions.");
			
				p.addAnswer(3, "peptide bonds",
				false,
				"No. Peptide bonds link amino acids.");
			
				p.addAnswer(4, "phosphodiester linkages",
				false,
				"No. Phosphodiester linkages join nucleotides.");
			
				p.addAnswer(5, "ester linkages",
				true,
				"Correct. In making a fat, each of the three fatty acid molecules is bonded to a glycerol by an ester linkage type of covalent bond.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334293;


		
		

		
			
			p.question = "The fatty acid tails of a phospholipid are _____ because they _____. (<script type=\"text/javascript\">ebook(\'0503\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "hydrophobic; dissolve easily in water",
				false,
				"No. \"Hydrophobic\" means water fearing.");
			
				p.addAnswer(2, "hydrophobic; have no charges to which water molecules can adhere",
				true,
				"Correct. Phospholipid tails, which consist of nonpolar hydrocarbon chains, are hydrophobic.");
			
				p.addAnswer(3, "hydrophilic; consist of units assembled by dehydration reactions",
				false,
				"No. Fatty acid tails, which consist of nonpolar hydrocarbon chains, are not hydrophilic.");
			
				p.addAnswer(4, "hydrophilic; are easily hydrolyzed into their monomers",
				false,
				"No. Fatty acid tails, which consist of nonpolar hydrocarbon chains, are not hydrophilic. Fatty acid tails are not polymers; hence they are not composed of monomers.");
			
				p.addAnswer(5, "hydrophobic; consist of units assembled by dehydration reactions",
				false,
				"No. Both hydrophilic and hydrophobic molecules may be assembled by dehydration reactions.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334294;


		
		

		
			
			p.question = "The overall three-dimensional shape of a single polypeptide is called the _____. (<script type=\"text/javascript\">ebook(\'0504\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "double helix",
				false,
				"No. The double helix is the shape associated with the nucleic acid DNA.");
			
				p.addAnswer(2, "primary structure",
				false,
				"No. The primary structure is the polypeptide\'s sequence of amino acids.");
			
				p.addAnswer(3, "secondary structure",
				false,
				"No. Although the secondary structure involves three-dimensional shapes, these shapes are locally confined to small regions of the polypeptide.");
			
				p.addAnswer(4, "tertiary structure",
				true,
				"Correct. The tertiary structure is determined by hydrogen bonds, hydrophobic R groups, ionic bonds between R groups, van der Waals interactions, and disulfide bridges.");
			
				p.addAnswer(5, "quaternary structure",
				false,
				"No. Quaternary structure describes proteins that consist of two or more polypeptide chains, each with its own tertiary structure, combined to form a single functional protein.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334295;


		
		

		
			
			p.question = "When a protein is denatured, why does it lose its functionality?\n (<script type=\"text/javascript\">ebook(\'0504\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Denaturation breaks the weak bonds, such as hydrogen bonds and Van der Waals interactions, that hold the protein in its 3-dimensional shape. Without the proper shape, the protein cannot function.",
				true,
				"Correct. Denaturation disrupts secondary, tertiary, and quaternary protein structure, causing the protein to lose its form, and thus its function.");
			
				p.addAnswer(2, "Denaturation breaks the covalent bonds that hold the protein in its 3-dimensional shape. Without the proper shape, the protein cannot function.",
				false,
				"No. The covalent bonds that determine the protein\'s primary structure are not disrupted during denaturation, but these are not the bonds that hold the protein in its 3-dimensional shape.");
			
				p.addAnswer(3, "Denaturation destroys the primary structure of the protein, and the protein breaks down to monomers.",
				false,
				"No. Primary protein structure is generally not affected during denaturation.");
			
				p.addAnswer(4, "Different amino acids are substituted into the sequence, so the protein\'s properties change.",
				false,
				"No. Denaturation does not involve substitution of amino acids.");
			
				p.addAnswer(5, "The protein\'s pH changes, causing it to lose its functionality.",
				false,
				"No. Changes in pH may cause a protein to denature. Denaturation does not change the pH of the protein.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334296;


		
		

		
			
			p.question = "Which of the following lists ranks these molecules in the correct order by size? (<script type=\"text/javascript\">ebook(\'0504\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "water, sucrose, glucose, protein",
				false,
				"No. Sucrose is a disaccharide and glucose is a monosaccharide.");
			
				p.addAnswer(2, "protein, water, glucose, sucrose",
				false,
				"No. Water has only three atoms; it must be at the beginning or at the end of this ranking.");
			
				p.addAnswer(3, "water, protein, sucrose, glucose",
				false,
				"No. Proteins are typically assembled from many amino acids. Expect to see protein at either end of the ranking.");
			
				p.addAnswer(4, "protein, sucrose, glucose, water",
				true,
				"Correct. In this case, the ranking is from largest to smallest.");
			
				p.addAnswer(5, "glucose, water, sucrose, protein",
				false,
				"No. Water has only three atoms; it must be at the beginning or end of this ranking.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334297;


		
		

		
			
			p.question = "To what does the term \"polypeptide\" refer?\n (<script type=\"text/javascript\">ebook(\'0504\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "organic molecules linked by dehydration reactions",
				false,
				"No. This is true only if the organic molecules in question are amino acids.");
			
				p.addAnswer(2, "organic monomers covalently bonded",
				false,
				"No. This is true only if the organic molecules in question are amino acids.");
			
				p.addAnswer(3, "amino acids linked by hydrolysis",
				false,
				"No. Amino acids in a polypeptide are linked by dehydration reactions, not hydrolysis (which would separate them).");
			
				p.addAnswer(4, "carbohydrates with a hydrogen bond holding them together",
				false,
				"No. Polypeptides are proteins, not carbohydrates.");
			
				p.addAnswer(5, "none of the above",
				true,
				"Correct. A polypeptide is a chain of amino acids that have been linked together by dehydration reactions.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334298;


		
		

		
			
			p.question = "Enzyme molecules require a specific shape to perform their catalytic function. Which of the following might alter the shape of an enzymatic protein?\n (<script type=\"text/javascript\">ebook(\'0504\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "denaturing the protein",
				false,
				"No. A denatured protein is one which shape has changed to the point that it cannot be catalytic, but this is not the only correct answer.");
			
				p.addAnswer(2, "a change in salt concentrations or pH",
				false,
				"No. Salt concentration and pH changes may indeed change the shape and, therefore, the catalytic function of an enzyme, but this is not the only correct answer.");
			
				p.addAnswer(3, "heating the protein",
				false,
				"No. Heating the protein may indeed change the shape and, therefore, the catalytic function of an enzyme, but this is not the only correct answer.");
			
				p.addAnswer(4, "mixing in a chemical that removes hydrogen bonds",
				false,
				"No. Removing hydrogen bonds would alter the shape and, therefore, might change the catalytic function of an enzyme, but this is not the only correct answer.");
			
				p.addAnswer(5, "all of the above",
				true,
				"Correct. All of the above would affect the shape and therefore the catalytic activity of the enzymatic protein.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334299;


		
		

		
			
			p.question = "The alpha helix and beta pleated sheet represent which level of protein structure? (<script type=\"text/javascript\">ebook(\'0504\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "primary structure",
				false,
				"No. The primary structure is the sequence of amino acids.");
			
				p.addAnswer(2, "secondary structure",
				true,
				"Correct. Both the alpha helix and the beta pleated sheet are localized regions of polypeptides held in a given structure by hydrogen bonds.");
			
				p.addAnswer(3, "tertiary structure",
				false,
				"No. The tertiary structure is the overall three-dimensional shape of a polypeptide resulting from interactions between the R groups (side chains) of the various amino acids (hydrophobic interactions, hydrogen bonds, ionic bonds, and disulfide bridges).");
			
				p.addAnswer(4, "quaternary structure",
				false,
				"No. The quaternary structure is the aggregation of two or more polypeptide chains into one functional protein macromolecule.");
			
				p.addAnswer(5, "pentiary structure",
				false,
				"No. There is no such thing as a pentiary structure in a protein.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334300;


		
		

		
			
			p.question = "The peptide bond is _____.\n (<script type=\"text/javascript\">ebook(\'0504\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "a hydrogen bond joining amino acids together to form a polypeptide.",
				false,
				"No. Peptide bonds are not hydrogen bonds.");
			
				p.addAnswer(2, "A covalent bond joining simple sugars together to form a polypeptide.",
				false,
				"No. Peptide bonds do not link simple sugars together.");
			
				p.addAnswer(3, "a covalent bond joining amino acids together to form a polypeptide.",
				true,
				"Correct. The specific type of covalent bond joining two amino acids is a peptide bond.");
			
				p.addAnswer(4, "A hydrogen bond joining nucleotides together to form a nucleic acid.",
				false,
				"No. A peptide bond is not a hydrogen bond, and it does not join nucleotides together.");
			
				p.addAnswer(5, "A covalent bond joining nucleotides together to form a nucleic acid.",
				false,
				"No. Nucleotides are joined together by phosphodiester linkages, not peptide bonds.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334301;


		
		

		
			
			p.question = "Protein molecules are polymers (chains) of _____. (<script type=\"text/javascript\">ebook(\'0504\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "DNA molecules",
				false,
				"No. DNA is a polymer of nucleotides. What is the monomer used to form a protein?");
			
				p.addAnswer(2, "fatty acid molecules",
				false,
				"No. Fatty acids are a component of triacylglycerols (fats) and phospholipids.");
			
				p.addAnswer(3, "sucrose molecules",
				false,
				"No. Sucrose is a disaccharide sugar.");
			
				p.addAnswer(4, "amino acid molecules",
				true,
				"Polymers of amino acids are called polypeptides. A protein consists of one or more polypeptides folded into specific conformations.");
			
				p.addAnswer(5, "purines and pyrimidines",
				false,
				"No. Purines and pyrimidines are nitrogenous bases present in nucleotides, the monomers of nucleic acids.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334302;


		
		

		
			
			p.question = "The \"primary structure\" of a protein refers to _____. (<script type=\"text/javascript\">ebook(\'0504\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the &alpha; helix or &beta; pleated sheets",
				false,
				"No. These are both types of secondary structure.");
			
				p.addAnswer(2, "interactions among the side chains or R groups of the amino acids",
				false,
				"No. These contribute to the tertiary structure of a polypeptide.");
			
				p.addAnswer(3, "coiling due to hydrogen bonding between amino acids",
				false,
				"No. These contribute to the secondary structure of a polypeptide.");
			
				p.addAnswer(4, "the weak aggregation of two or more polypeptide chains into one functional macromolecule",
				false,
				"No. This refers to the quaternary structure of a protein.");
			
				p.addAnswer(5, "the sequence of amino acids",
				true,
				"Correct. The primary structure of a protein is its unique sequence of amino acids held together by the peptide type of covalent bond.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334303;


		
		

		
			
			p.question = "Which type of protein shields a newly forming protein from cytoplasmic influences while it is folding into its functional form? (<script type=\"text/javascript\">ebook(\'0505\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "antibodies",
				false,
				"No. Antibodies have a specific form that allows them to bind to foreign materials in the body.");
			
				p.addAnswer(2, "enzymes",
				false,
				"No. Enzymes are proteins that act as biological catalysts.");
			
				p.addAnswer(3, "Fibrous proteins",
				false,
				"No. Fibrous proteins usually function as structural proteins.");
			
				p.addAnswer(4, "chaperonins",
				true,
				"Correct. Chaperonins shield proteins from \"bad influences\" (interactions with other molecules in the cytoplasm) while they are folding into their functional forms.");
			
				p.addAnswer(5, "Receptor proteins",
				false,
				"No. Receptor proteins bind signaling molecules such as endorphins that may change the behavior of a cell.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334304;


		
		

		
			
			p.question = "A glucose molecule is to starch as _____.\n (<script type=\"text/javascript\">ebook(\'0505\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "a steroid is to a lipid",
				false,
				"No. A steroid is a type of lipid, but not a monomer.");
			
				p.addAnswer(2, "a protein is to an amino acid",
				false,
				"No. A protein is a polypeptide assembled from amino acid monomers.");
			
				p.addAnswer(3, "a nucleic acid is to a polypeptide",
				false,
				"No. Nucleic acids and polypeptides are two different types of macromolecules.");
			
				p.addAnswer(4, "a nucleotide is to a nucleic acid",
				true,
				"Correct. Nucleotides are the monomers that make nucleic acid polymers, just as glucose is the monosaccharide (monomer) from which starch (polymer) is constructed.");
			
				p.addAnswer(5, "an amino acid is to a nucleic acid",
				false,
				"No. Amino acids are the monomers of polypeptides, and nucleotides are the monomers of nucleic acids.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334305;


		
		

		
			
			p.question = "A shortage of phosphorus in the soil would make it especially difficult for a plant to manufacture _____. (<script type=\"text/javascript\">ebook(\'0505\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "DNA",
				true,
				"Correct. The backbone of a nucleic acid consists of alternating sugar and phosphate groups.");
			
				p.addAnswer(2, "proteins",
				false,
				"No. None of the amino acids used by living organisms contains phosphorus.");
			
				p.addAnswer(3, "cellulose",
				false,
				"No. Cellulose is a carbohydrate. It consists of carbon, oxygen, and hydrogen.");
			
				p.addAnswer(4, "fatty acids",
				false,
				"No. Fatty acids have long carbon skeletons with a carbonyl group at one end. They do not contain phosphorus.");
			
				p.addAnswer(5, "sucrose",
				false,
				"No. Sucrose is a disaccharide sugar (C<sub>12</sub>H<sub>22</sub>O<sub>11</sub>); it does not contain phosphorus.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334306;


		
		

		
			
			p.question = "On the basis of the principle of complementary base pairing, you would expect the percentage of _____ to be equal to the percentage of _____.\n (<script type=\"text/javascript\">ebook(\'0505\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "adenine; thymine",
				true,
				"Correct. Adenine and thymine form a complementary base pair.");
			
				p.addAnswer(2, "adenine; guanine",
				false,
				"No. Adenine does not form a complementary base pair with guanine.");
			
				p.addAnswer(3, "thymine; guanine",
				false,
				"No. Thymine does not form a complementary base pair with guanine.");
			
				p.addAnswer(4, "adenine; cytosine",
				false,
				"No. Adenine does not form a complementary base pair with cytosine.");
			
				p.addAnswer(5, "thymine; cytosine",
				false,
				"No. Thymine does not form a complementary base pair with cytosine.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334307;


		
		

		
			
			p.question = "Which of the following are pyrimidines found in the nucleic acid DNA? (<script type=\"text/javascript\">ebook(\'0505\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "adenine and guanine",
				false,
				"No. These examples are not pyrimidines; they are purines.");
			
				p.addAnswer(2, "thymine and cytosine",
				true,
				"Correct. Thymine and cytosine are pyrimidines found in DNA.");
			
				p.addAnswer(3, "thymine and adenine",
				false,
				"No. This answer is partially correct. Adenine is a purine.");
			
				p.addAnswer(4, "uracil and guanine",
				false,
				"No. Uracil is a pyrimidine found in RNA, but not in DNA. Guanine is a purine.");
			
				p.addAnswer(5, "guanine and cytosine",
				false,
				"No. This answer is partially correct. Guanine is a purine.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334308;


		
		

		
			
			p.question = "Which of the following describes a difference between DNA and RNA?\n (<script type=\"text/javascript\">ebook(\'0505\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "RNA molecules consist of a single polynucleotide chain, whereas DNA molecules consist of two polynucleotide chains organized into a double helix.",
				false,
				"No. This answer is correct, but there is a better response.");
			
				p.addAnswer(2, "One of their nitrogenous bases is different.",
				false,
				"No. Thymine is found only in DNA and uracil is found only in RNA, so the statement is true, but there is a better response.");
			
				p.addAnswer(3, "They contain different sugars.",
				false,
				"No. It is true that deoxyribose is the sugar in DNA and ribose is the sugar in RNA, but there is a better response.");
			
				p.addAnswer(4, "The first and second choices are correct differences.",
				false,
				"No. It is true that the first two choices both describe differences, but there is a better answer.");
			
				p.addAnswer(5, "The first three choices all describe differences.",
				true,
				"Correct. The first three choices describe distinctions between DNA and RNA.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 334309;


		
		

		
			
			p.question = "A nucleotide is made of which of the following chemical components?\n (<script type=\"text/javascript\">ebook(\'0505\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "a nitrogenous base, an amino acid, and a pentose sugar",
				false,
				"No. Nucleotides do not contain amino acids.");
			
				p.addAnswer(2, "a nitrogenous base, an amino acid, and a phosphate group",
				false,
				"No. Nucleotides do not contain amino acids.");
			
				p.addAnswer(3, "a nitrogenous base, a phosphate group, and a pentose sugar",
				true,
				"Correct. Each nucleotide consists of three parts: an organic molecule, called a nitrogenous base; a 5-carbon sugar, called a pentose; and a phosphate group.");
			
				p.addAnswer(4, "a nitrogenous base, a fatty acid, and an amino acid",
				false,
				"No. Nucleotides do not contain amino acids or fatty acids.");
			
				p.addAnswer(5, "a series of nitrogenous bases, a nucleic acid backbone, and a hexose sugar",
				false,
				"No. Nucleotides are the monomers of nucleic acids. Hexose sugars are not present in nucleotides; hence they are not present in nucleic acids.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

