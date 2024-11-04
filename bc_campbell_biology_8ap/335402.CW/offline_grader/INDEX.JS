

function InitializeAnswerKey(ak) {
	var p = null;
	

	ak.site_title = "BIOLOGY 8e AP* Edition CD-ROM";
	ak.book_title = "BIOLOGY 8e AP* Edition";
	ak.author = "Campbell and Reece";
	ak.quiz_location = "22: Descent with Modification: A Darwinian View of Life > Practice Test";
	ak.quiz_loc_with_commas = "22: Descent with Modification: A Darwinian View of Life, Practice Test";
	ak.quiz_title = "Practice Test";

	
		ak.help_url = "../../placeholders/help_placeholder.html";
	
	ak.essay_total = 0;
	ak.pair_problem_total = 0;
	ak.pair_total = 0;
	ak.problem_total = 30;
	ak.non_essay_total = 30;
	ak.scored_item_total = 30;

	
	
	


	
	ak.copyright_date = "2008";
	ak.brandname = "Pearson Benjamin Cummings";
	ak.legal = "../../placeholders/external_placeholder.html?http%3A%2F%2Fwww.pearsoned.com%2Flegal%2Findex.htm";


	// Loop over all problems
	
	
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335403;


		
		

		
			
			p.question = "Darwin originally defined evolution as _____. (<script type=\"text/javascript\">ebook(\'22OV\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the passing of acquired characteristics to offspring",
				false,
				"No. Lamarck proposed this theory.");
			
				p.addAnswer(2, "an individual\'s ability to adapt to its environment",
				false,
				"No. Individuals do not evolve. Only populations evolve.");
			
				p.addAnswer(3, "descent with modification",
				true,
				"Correct. Darwin proposed that Earth\'s many species are descendants of ancestral species that differed from present-day species.");
			
				p.addAnswer(4, "a way to classify organisms based on morphological similarities",
				false,
				"No. Although Darwin\'s concept of evolution fit well with Linnaeus\'s classification system, his theory is an explanation of the pattern, not a description of it.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335404;


		
		

		
			
			p.question = "Which of the following is a key observation that must be explained in a unifying theory about life? (<script type=\"text/javascript\">ebook(\'22OV\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "All living things require oxygen to survive.",
				false,
				"No. There are many anaerobic organisms.");
			
				p.addAnswer(2, "Many basic characteristics are shared by all living things.",
				true,
				"Correct. Organisms do share many basic characteristics. Darwin reasoned that the diverse organisms found on Earth today evolved from a few common ancestors.");
			
				p.addAnswer(3, "Evolution is based on descent with modification.",
				false,
				"No. Darwin proposed descent with modification as a mechanism to produce the observed diversity of life.");
			
				p.addAnswer(4, "The Earth is very old.",
				false,
				"No. While this is an important idea in understanding how living things evolve, it is not a key observation about living things.");
			
				p.addAnswer(5, "Organisms are rarely well-suited to their environments.",
				false,
				"No. Most organisms are well-suited to their environments.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335405;


		
		

		
			
			p.question = "Which of the following is an example of the process of evolution? (<script type=\"text/javascript\">ebook(\'22OV\',\'quiz\')</script> and <script type=\"text/javascript\">ebook(\'2203\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the existence of homologous traits such as the forelimbs of mammals",
				false,
				"No. This is an example of the pattern of evolution.");
			
				p.addAnswer(2, "the large number and diversity of species of marsupials in Australia",
				false,
				"No. This is an example of biogeography, part of the observable pattern of evolution.");
			
				p.addAnswer(3, "the changes in organisms over time observed in the fossil record",
				false,
				"No. This is an example of the pattern of evolution.");
			
				p.addAnswer(4, "predation",
				true,
				"Correct. Predation acts as a process of natural selection. Natural selection is one of the major processes that drives evolution.");
			
				p.addAnswer(5, "the observed match between organisms and their environments",
				false,
				"No. This is an example of the pattern of evolution.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335406;


		
		

		
			
			p.question = "Which of the following is a true statement about Charles Darwin? (<script type=\"text/javascript\">ebook(\'2201\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "He was the first to discover that living things can change, or evolve.",
				false,
				"No. Many others made that observation prior to Darwin.");
			
				p.addAnswer(2, "He based his theory on the inheritance of acquired characteristics.",
				false,
				"No. This statement is true of Lamarck, not Darwin.");
			
				p.addAnswer(3, "He worked out the principles of population genetics.",
				false,
				"No. Darwin did not have a great enough understanding of genetics.");
			
				p.addAnswer(4, "He proposed natural selection as the mechanism of evolution.",
				true,
				"Correct. The proposal of a testable mechanism was a key point in the acceptance of his theory.");
			
				p.addAnswer(5, "He was the first to conclude that Earth is billions of years old.",
				false,
				"No. Hutton and Lyell realized that Earth must be very old.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335407;


		
		

		
			
			p.question = "The <i>scala naturae</i>, or scale of nature, is based on the ideas of _____. (<script type=\"text/javascript\">ebook(\'2201\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Darwin",
				false,
				"No. Darwin is best known for proposing natural selection as a mechanism of evolution.");
			
				p.addAnswer(2, "Lamarck",
				false,
				"No. Lamarck is best known for proposing the inheritance of acquired characteristics.");
			
				p.addAnswer(3, "Aristotle",
				true,
				"Correct. Aristotle believed that all living forms could be arranged on a ladder, or scale, of increasing complexity.");
			
				p.addAnswer(4, "Mendel",
				false,
				"No. Mendel is best known for his work in genetics.");
			
				p.addAnswer(5, "Lyell",
				false,
				"No. Lyell is best known for proposing uniformitarianism.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335408;


		
		

		
			
			p.question = "At the time Darwin voyaged on HMS <i>Beagle</i>, the popularly accepted theory in Western culture that explained the origin of Earth\'s plants and animals held that the various species _____. (<script type=\"text/javascript\">ebook(\'2201\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "arose continually from nonliving materials by spontaneous generation",
				false,
				"No. Although spontaneous generation was not completely disproved until 1859, this is not the best answer.");
			
				p.addAnswer(2, "had been created by divine intervention a few thousand years before",
				true,
				"Correct. Darwin\'s view of life contrasted sharply with the conventional paradigm of an Earth only a few thousand years old, populated by unchanging forms of life that had been individually made during a single week in which the Creator formed the entire universe.");
			
				p.addAnswer(3, "had evolved from now-extinct organisms",
				false,
				"No. The predominant theory of the time held that new species could not come into existence.");
			
				p.addAnswer(4, "arose from a single species that had survived the biblical flood",
				false,
				"No. The correct answer is related to a different part of the Bible.");
			
				p.addAnswer(5, "are all related to one another",
				false,
				"No. Darwin proposed that all life is somehow related.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335409;


		
		

		
			
			p.question = "Carolus Linneaus is considered to be the founder of _____ and _____. (<script type=\"text/javascript\">ebook(\'2201\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "paleontology; believed in catastrophism",
				false,
				"No. This describes Cuvier.");
			
				p.addAnswer(2, "gradualism; believed the same geologic forces are operating today that occurred in the past",
				false,
				"No. This describes James Hutton and Charles Lyell.");
			
				p.addAnswer(3, "the binomial system of naming organisms; named organisms according to their family and genus",
				false,
				"No. Organisms are named according to their genus and species.");
			
				p.addAnswer(4, "evolution; first proposed that acquired characteristics are inherited",
				false,
				"No. Lamarck first proposed that acquired characteristics are inherited.");
			
				p.addAnswer(5, "the binomial classification system; thought that resemblances among different species reflected the pattern of their creation",
				true,
				"Correct. Although he is considered the founder of taxonomy, Linnaeus accepted the theory of creation.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335410;


		
		

		
			
			p.question = "The modern idea of extinction as a common occurrence in Earth\'s history was first proposed in the early 19th century writings of _____. (<script type=\"text/javascript\">ebook(\'2201\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Cuvier",
				true,
				"Correct. Cuvier advocated catastrophism, speculating that extinctions apparent in the fossil record corresponded to a catastrophe, such as a flood or drought.");
			
				p.addAnswer(2, "Lamarck",
				false,
				"No. Lamarck is best known for proposing the inheritance of acquired characteristics.");
			
				p.addAnswer(3, "Aristotle",
				false,
				"No. Aristotle believed that all living forms could be arranged on a scale or ladder of increasing complexity, the scale of nature.");
			
				p.addAnswer(4, "Wallace",
				false,
				"No. Wallace is best known for proposing natural selection independently of Charles Darwin.");
			
				p.addAnswer(5, "Lyell",
				false,
				"No. Lyell is best known for uniformitarianism.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335411;


		
		

		
			
			p.question = "Lyell\'s principle of uniformitarianism _______. (<script type=\"text/javascript\">ebook(\'2201\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "was rejected by Darwin in favor of catastrophism",
				false,
				"No. Darwin came to agree with Lyell that processes at work in the present could have produced observed geologic features.");
			
				p.addAnswer(2, "was compatible with the idea of the Earth being only a few thousand years old",
				false,
				"No. For present-day earth processes to have produced observed geologic features, those processes would have had to act over millions or billions of years.");
			
				p.addAnswer(3, "was similar to Lamarck\'s theory of inheritance of acquired characteristics",
				false,
				"No. Lyell was considering geologic processes as opposed to biological processes.");
			
				p.addAnswer(4, "states that current geologic processes are very different from those that operated in the past.",
				false,
				"No. Uniformitarianism states that current geologic processes are the same as those that operated in the past.");
			
				p.addAnswer(5, "strongly influenced Darwin\'s view of how living organisms could change over time.",
				true,
				"Correct. Darwin embraced the idea of an old Earth and rejected the idea that living organisms had been specially created. He applied the idea of slow change to the evolution of organisms.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335412;


		
		

		
			
			p.question = "At the time Charles Darwin sailed on HMS <i>Beagle</i>, _____. (<script type=\"text/javascript\">ebook(\'2201\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the idea that animals and plants might change over time was absent from Western science",
				false,
				"No. Several others had at least proposed this idea.");
			
				p.addAnswer(2, "several biologists had proposed that species might change over time, but none had suggested a convincing mechanism that might cause the change",
				true,
				"Correct. By the end of the 18th century, several naturalists had suggested that life evolved along with the evolution of Earth. An important facet of Darwin\'s work is the concept of natural selection as the cause of adaptive evolution.");
			
				p.addAnswer(3, "the idea of evolution was widely accepted because it could fit in to the biblical story of creation",
				false,
				"No. Evolution is not a part of the biblical story of creation.");
			
				p.addAnswer(4, "the idea of evolution was widely accepted by scientists, but Darwin\'s great impact was to popularize it for the layperson",
				false,
				"No. Darwin proposed evolution by natural selection some time after his return from the voyage.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335413;


		
		

		
			
			p.question = "Because he was well aware of the effect his theory of evolution would have on the public and on the Church of England, Darwin delayed publishing his work for several decades while he gathered additional evidence. Which of the following lines of evidence did he use to support his theory? (<script type=\"text/javascript\">ebook(\'2202\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Artificial selection can produce organisms that differ markedly from their wild ancestors, and island species around the world all appear to be related to each other.",
				false,
				"No. Darwin used the argument about artificial selection, but he observed that island species seemed to be related to organisms from the closest mainland.");
			
				p.addAnswer(2, "Adaptations to specific environments increase an organism\'s ability to survive and reproduce, and organisms seem to produce only as many offspring as the environment can support.",
				false,
				"No. Organisms generally produce many more offspring than the environment can support.");
			
				p.addAnswer(3, "All species are capable of producing more offspring than the environment can support, and artificial selection can produce organisms that differ from their wild ancestors.",
				true,
				"Correct. Darwin used these two lines of evidence (among others) to support his theory of descent with modification.");
			
				p.addAnswer(4, "Some individuals leave more descendants than other individuals, but the individuals in a population are essentially identical to each other.",
				false,
				"No. Individuals in a population vary in their heritable traits.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the answers is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335414;


		
		

		
			
			p.question = "During his voyage around the world, Darwin was inspired to think about evolution by _____. (<script type=\"text/javascript\">ebook(\'2202\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "the works of others such as Lamarck",
				false,
				"No. This answer is correct, but there is a better response.");
			
				p.addAnswer(2, "fossils he collected",
				false,
				"No. The fossils Darwin studied did show definite lines of descent, but there is a better answer.");
			
				p.addAnswer(3, "studying adaptations of organisms to their environments",
				false,
				"No. Darwin was especially interested in the variety of G&#225;lapagos finch species, but there is a better answer.");
			
				p.addAnswer(4, "the unique organisms he saw in the G&#225;lapagos Islands",
				false,
				"No. His interest was especially piqued by the G&#225;lapagos finches, but there is a better response.");
			
				p.addAnswer(5, "all of the above",
				true,
				"Correct. During his voyage on the HMS <i>Beagle</i>, Darwin was inspired to think about evolution by the writings of Lamarck, fossils, the adaptations of organisms like the G&#225;lapagos finches, and the uniqueness of organisms.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335415;


		
		

		
			
			p.question = "In Darwin\'s view of descent with modification _____. (<script type=\"text/javascript\">ebook(\'2202\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "an organism\'s traits only affect its own survival",
				false,
				"No. An organism\'s heritable traits will also affect the survival of its offspring.");
			
				p.addAnswer(2, "natural selection can improve the match between an organism and its environment",
				true,
				"Correct. Natural selection acting in a particular environment can refine the match between an organism and its environment.");
			
				p.addAnswer(3, "individuals can evolve",
				false,
				"No. Populations evolve.");
			
				p.addAnswer(4, "environmental changes have no effect on the organisms living in that environment",
				false,
				"No. A trait that is advantageous in one environment may be detrimental in another.");
			
				p.addAnswer(5, "natural selection only operates when an organism needs to evolve",
				false,
				"No. Natural selection is always operating.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335416;


		
		

		
			
			p.question = "What insight did Darwin gain from reading Thomas Malthus\'s essay on human suffering? (<script type=\"text/javascript\">ebook(\'2202\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "Organisms have the capacity to overreproduce.",
				true,
				"Correct. Malthus contended that human suffering is a product of humans reproducing faster than food and other resources can increase. This is actually a characteristic of many life-forms on Earth.");
			
				p.addAnswer(2, "Natural selection should be capable of considerable modifications over hundreds of thousands of generations.",
				false,
				"No. This insight was the result of examining artificial selection.");
			
				p.addAnswer(3, "Population size usually remains relatively stable.",
				false,
				"No. This was not an insight he gained from reading Malthus. However, this is related to the correct answer.");
			
				p.addAnswer(4, "Favorable characteristics of a population accumulate over time.",
				false,
				"No. This is an insight of Darwin, but it is not related to his reading of Malthus.");
			
				p.addAnswer(5, "all of the above",
				false,
				"No. Only one of the other answers is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335417;


		
		

		
			
			p.question = "The breeding of plants and animals for particular traits by humans is called _____. (<script type=\"text/javascript\">ebook(\'2202\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "natural selection",
				false,
				"No. Natural selection is differential reproductive success in nature.");
			
				p.addAnswer(2, "sexual recombination",
				false,
				"No. Sexual recombination refers to new combinations of alleles resulting from fertilization.");
			
				p.addAnswer(3, "paleontology",
				false,
				"No. Paleontology is the study of fossils.");
			
				p.addAnswer(4, "artificial selection",
				true,
				"Correct. This is the mating of organisms with desirable characteristics. One example is the breeding of cows to produce offspring with higher milk yields.");
			
				p.addAnswer(5, "homology",
				false,
				"No. Homology refers to organisms sharing traits based on common ancestry.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335418;


		
		

		
			
			p.question = "During periods of rapid environmental change, what may happen to a species that was well-suited to the former environment? (<script type=\"text/javascript\">ebook(\'2202\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "The species may go extinct.",
				false,
				"No. This statement is true, but there is a better answer.");
			
				p.addAnswer(2, "Individuals with particular traits that provide an advantage in the new environment will have higher reproductive success.",
				false,
				"No. This statement is true, but there is a better answer.");
			
				p.addAnswer(3, "The population may change so much in adapting to the new environment that it is considered a new species.",
				false,
				"No. This statement is true, but there is a better answer.");
			
				p.addAnswer(4, "Traits that were favorable in the original environment may be detrimental in the new environment.",
				false,
				"No. This statement is true, but there is a better answer.");
			
				p.addAnswer(5, "all of the above",
				true,
				"Correct. When environments change, species will either adapt, possibly giving rise to new species, or go extinct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335419;


		
		

		
			
			p.question = "The smallest unit that can evolve is a(n) _____. (<script type=\"text/javascript\">ebook(\'2202\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "species",
				false,
				"No. An entire species does not necessarily evolve.");
			
				p.addAnswer(2, "genotype",
				false,
				"No. This does not make sense.");
			
				p.addAnswer(3, "individual",
				false,
				"No. This is what Lamarck thought, but there is little evidence that individual organisms evolve.");
			
				p.addAnswer(4, "population",
				true,
				"Correct. Evolution can be measured only as changes in relative proportions of heritable variations in a population over many generations.");
			
				p.addAnswer(5, "morph",
				false,
				"No. This is just a form of a species.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335420;


		
		

		
			
			p.question = "According to the theory of evolution, all of the different kinds of homologies&#151;anatomical, molecular, and embryological&#151;should _____. (<script type=\"text/javascript\">ebook(\'2203\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "be completely independent of each other",
				false,
				"No. This would not be expected if the organisms exhibiting such homologies were genetically related to each other.");
			
				p.addAnswer(2, "produce similar patterns of evolutionary relatedness",
				true,
				"Correct. According to evolutionary theory, the different types of homologies should generally produce evolutionary patterns that corroborate each other.");
			
				p.addAnswer(3, "yield very different hierarchical patterns",
				false,
				"No. Exactly the opposite is expected.");
			
				p.addAnswer(4, "link all of the species currently present on Earth",
				false,
				"No. It would be surprising if, for example, redwood trees exhibited anatomical homologies with mammals.");
			
				p.addAnswer(5, "be understood to have come about by chance alone",
				false,
				"No. Descent with modification (evolution) is<b> not</b> due to chance alone, so these homologies cannot be due to chance alone.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335421;


		
		

		
			
			p.question = "When they were first sold, aerosol insecticides were highly effective in killing flies and mosquitoes. Now, several decades later, a much smaller proportion of these insects die when sprayed. The reason fewer insects die when they are sprayed is that _____. (<script type=\"text/javascript\">ebook(\'2203\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "mosquitoes that survive spraying develop an immunity to the insecticide",
				false,
				"No. This is not what would be predicted by natural selection.");
			
				p.addAnswer(2, "many mosquitoes today are descendants of mosquitoes with insecticide-resistant characteristics",
				true,
				"Correct. Individuals whose characteristics best fit them to their environment are likely to leave more offspring than are less fit individuals. This unequal ability of individuals to survive and reproduce will lead to a gradual change in a population, with favorable characteristics accumulating over the generations.");
			
				p.addAnswer(3, "mosquitoes are deliberately adapting themselves to this man-made change in the environment",
				false,
				"No. Mosquitoes do not have this ability.");
			
				p.addAnswer(4, "the original spraying has caused a permanent mutation, giving the insects genetic resistance to the spray",
				false,
				"No. It is far too unlikely that the spraying could lead to such an immediate advantageous mutation.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335422;


		
		

		
			
			p.question = "A population of zooplankton is exposed to a small number of predatory fish that feed on the larger-sized (adult) zooplankton. Which of the following predictions would most likely occur based on the principles of natural selection? (<script type=\"text/javascript\">ebook(\'2203\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "The predatory fish will evolve smaller mouths so that they do not drive their prey to extinction.",
				false,
				"No. Natural selection does not operate in order to bring about some future benefit.");
			
				p.addAnswer(2, "The zooplankton will become sexually mature at larger sizes.",
				false,
				"No. This is exactly the opposite of what one should predict.");
			
				p.addAnswer(3, "The predatory fish will evolve poor eyesight so as to preserve their food supply.",
				false,
				"No. Natural selection does not operate in order to bring about some future benefit.");
			
				p.addAnswer(4, "Adult zooplankton will start to reach sexual maturity when they are still relatively small.",
				true,
				"Correct. This would permit the zooplankton to reproduce in spite of the predation pressure on larger individuals.");
			
				p.addAnswer(5, "The first and the third choices are both good predictions.",
				false,
				"No. Natural selection does not operate in order to bring about some future benefit.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335423;


		
		

		
			
			p.question = "How did HIV become resistant to the drug 3TC? (<script type=\"text/javascript\">ebook(\'2203\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "The drug did not work in the way that the developers intended.",
				false,
				"No. Think about the question in relation to natural selection.");
			
				p.addAnswer(2, "Patients did not take the drug as it was prescribed.",
				false,
				"No. Although this may be a factor in the formation of drug-resistant pathogens, in this situation there is a better answer.");
			
				p.addAnswer(3, "The virus mutated in response to the drug.",
				false,
				"No. This is not how drug-resistant pathogens emerge.");
			
				p.addAnswer(4, "Some members of the virus population must have had a genetic variation that made them resistant to 3TC.",
				true,
				"Correct. Those viruses that survived the early dosages passed on the genes that enabled them to resist the drug.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the other answers is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335424;


		
		

		
			
			p.question = "An important challenge to traditional (pre-1860) ideas about species was the observation that seemingly dissimilar organisms such as hummingbirds, humans, and whales have similar skeletal structures. This most directly suggested to biologists that _____. (<script type=\"text/javascript\">ebook(\'2203\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "only the best-adapted organisms can survive",
				false,
				"No. This does not account for similarities among dissimilar organisms.");
			
				p.addAnswer(2, "advantageous changes can be passed along to offspring",
				false,
				"No. While true, this does not account for similarities among dissimilar organisms.");
			
				p.addAnswer(3, "most evolution occurs rapidly following a mass extinction",
				false,
				"No. This does not account for similarities among dissimilar organisms.");
			
				p.addAnswer(4, "dissimilar organisms might have evolved from a distant, common ancestor",
				true,
				"Correct. Similarity in characteristics resulting from a common ancestor is known as homology, and such anatomical signs of evolution are known as homologous structures.");
			
				p.addAnswer(5, "all of the above",
				false,
				"No. Only one of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335425;


		
		

		
			
			p.question = "Animals that possess homologous structures probably _____. (<script type=\"text/javascript\">ebook(\'2203\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "are headed for extinction",
				false,
				"No. They probably evolved from a common ancestor, which has nothing to do with their ability to survive the prevailing environment.");
			
				p.addAnswer(2, "evolved from the same ancestor",
				true,
				"Correct. \"Homology\" refers to similarity attributable to common ancestry.");
			
				p.addAnswer(3, "have increased genetic diversity",
				false,
				"No. The origin of their homologous structures has nothing to do with genetic diversity.");
			
				p.addAnswer(4, "by chance had similar mutations independently in the past",
				false,
				"No. It is unlikely that two unrelated species would experience similar mutations.");
			
				p.addAnswer(5, "are not related",
				false,
				"No. Just the opposite is true.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335426;


		
		

		
			
			p.question = "On an evolutionary tree _______.\n(<script type=\"text/javascript\">ebook(\'2203\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "organisms that are positioned close to each other are closely related",
				false,
				"No. The positioning of branch points, points at which organisms most recently shared a common ancestor, are better indications of relatedness.");
			
				p.addAnswer(2, "homologous characteristics form a nested pattern",
				true,
				"Correct. We would expect this pattern to form through descent with modification.");
			
				p.addAnswer(3, "scientists are sure of the correct placement and relationships of all organisms",
				false,
				"No. Evolutionary trees are more like hypotheses for which supporting evidence is still being collected.");
			
				p.addAnswer(4, "the concept of descent with modification is not well-represented",
				false,
				"No. The nested pattern is what would be expected from descent with modification.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the other answers is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335427;


		
		

		
			
			p.question = "The approach to evolution that involves the study of similar structures that appear during the development of different organisms is known as the study of _____. (<script type=\"text/javascript\">ebook(\'2203\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "comparative physiology",
				false,
				"No. This is the study of common life processes, activities, and functions in related organisms.");
			
				p.addAnswer(2, "embryological homologies (comparative embryology)",
				true,
				"Correct. This is the study of similar structures appearing during the embryonic development of related organisms.");
			
				p.addAnswer(3, "biogeography",
				false,
				"No. This is the study of geographic relationships among organisms.");
			
				p.addAnswer(4, "molecular biology",
				false,
				"No. This is the study of the molecular basis of genes and gene expression.");
			
				p.addAnswer(5, "cladistics",
				false,
				"No. This is the study of taxonomic classifications based on evolutionary studies.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335428;


		
		

		
			
			p.question = "Vestigial organs are _____. (<script type=\"text/javascript\">ebook(\'2203\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "evidence for Lamarck\'s theory of use and disuse",
				false,
				"No. Lamarck\'s theory of use and disuse referred to body parts that would change in structure and function during an organism\'s lifetime.");
			
				p.addAnswer(2, "remnants of structures that were useful to an organism\'s ancestors",
				true,
				"Correct. For example, some species of snakes have remnants of pelvic and leg bones.");
			
				p.addAnswer(3, "one piece of evidence that does not support the theory of evolution",
				false,
				"No. The presence of vestigial organs does support the theory of evolution.");
			
				p.addAnswer(4, "examples of anatomical imperfections such as the human knee",
				false,
				"No. This is not a term to describe anatomical imperfections.");
			
				p.addAnswer(5, "homologies that can only be observed in embryos",
				false,
				"No. This is not true of vestigial organs.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335429;


		
		

		
			
			p.question = "All known organisms transcribe genetic information to protein molecules via the same genetic code. This finding strongly supports the hypothesis that _____. (<script type=\"text/javascript\">ebook(\'2203\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "there\'s only one possible way to encode information in a macromolecule",
				false,
				"No. That only a single system is used does not mean it is the only system that would work.");
			
				p.addAnswer(2, "the earliest macromolecules probably arose when lightning struck an oxygen-free atmosphere",
				false,
				"No. The question is not asking how the very first life-form may have originated.");
			
				p.addAnswer(3, "all organisms are descended from a single common ancestor",
				true,
				"Correct. A common genetic code is overwhelming evidence that all life is related.");
			
				p.addAnswer(4, "the genetic code will never be broken",
				false,
				"No. The genetic code has been broken.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335430;


		
		

		
			
			p.question = "Evidence from molecular biology supports the theory of evolution by demonstrating that _____. (<script type=\"text/javascript\">ebook(\'2203\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "homologous proteins have arisen independently in many different animal groups",
				false,
				"No. Homologous features are similar because of their common ancestry and, thus, did not arise independently in many different groups.");
			
				p.addAnswer(2, "closely related animal species have similar geographic distributions",
				false,
				"No. Biogeography is the study of the geographic distribution of life.");
			
				p.addAnswer(3, "closely related organisms have more similar DNA and proteins",
				true,
				"Correct. Evolutionary relationships among species are reflected in their DNA and proteins. If two species have similar libraries of genes and proteins, with sequences of monomers that match closely, the sequences most likely descended from a common ancestor.");
			
				p.addAnswer(4, "closely related organisms have similar stages of development",
				false,
				"No. This is an embryological homology.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the other choices is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335431;


		
		

		
			
			p.question = "What did Darwin observe about species on islands? (<script type=\"text/javascript\">ebook(\'2203\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "They are rarely endemic.",
				false,
				"No. Actually, the opposite is true. Many island species are not found anywhere else in the world.");
			
				p.addAnswer(2, "They are often closely related to species from similar ecological niches all over the world.",
				false,
				"No. This is not true.");
			
				p.addAnswer(3, "They are often closely related to species from the nearest mainland or neighboring islands.",
				true,
				"Correct. If a species that disperses from a mainland to an island succeeds in its new environment, it may give rise to several new species as populations spread to other islands in the archipelago.");
			
				p.addAnswer(4, "Darwin only studied the Galapagos and, therefore, could not develop many insights about species on islands.",
				false,
				"No. This is not true.");
			
				p.addAnswer(5, "none of the above",
				false,
				"No. One of the other answers is correct.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

		// ----- multiplechoice ------------
		//
		
			p = new Problem("multiplechoice");
		
		p.id = 335432;


		
		

		
			
			p.question = "To describe evolution as a \"scientific theory\" means that _____. (<script type=\"text/javascript\">ebook(\'2203\',\'quiz\')</script>)";
			p.incorrect_any_expl = "";
			p.incorrect_any_expl_flag = 0;
			p.incorrect_expls_flag = 1;
			p.correct_expls_flag = 1;
			
			
			// num_correct: 1

			
			
				p.addAnswer(1, "it is an untested idea",
				false,
				"No. This may be true of hypotheses, but scientific theories have generally withstood rigorous testing.");
			
				p.addAnswer(2, "it is not factual",
				false,
				"No. On the contrary, the theory of evolution is supported by much factual evidence.");
			
				p.addAnswer(3, "it is a matter of opinion",
				false,
				"No. It is no more a matter of opinion than is the cell theory, the chromosomal theory of inheritance, the germ theory, or gravitational theory.");
			
				p.addAnswer(4, "it is a broad model that is supported by many observations and much experimental evidence",
				true,
				"Correct. Evidence from many fields of biology makes evolution the \"central, unifying principle of biology.\"");
			
				p.addAnswer(5, "it can be considered dogma",
				false,
				"No. Scientists do not consider theories to be dogma. For example, many evolutionary biologists currently are questioning whether natural selection is primarily responsible for evolutionary history.");
			
			
		

		

		
			ak.addProblem(p);
		

		
	

} // end function InitializeAnswerKey

