/* =========================================
// This JS file is for the AP CD of c8e that links to:
// http://wps.aw.com/bc_campbell_biology_8ap

// There are separate JS files for each project!
// (WebDevr Linda Young, 2007)

// Campbell BIOLOGY 8E AP* Edition
========================================= */

var d=document
var nut = navigator.userAgent.toLowerCase();

// quiz RR path fix for OS10 Safari bug
if (nut.indexOf("safari")!=-1) { var qzmediapath="../../mediaserver/bc/";} 
else { var qzmediapath="../../../mediaserver/bc/";}

// E-Book Array
var ebkImg;
var ebkURL;

if (d.title == "Hint") {
	ebkImg = "../../../placeholders/ebk.gif"
	ebkURL = "../../../placeholders/CWebook.html"
} else {
	ebkImg = "../../placeholders/ebk.gif"
	ebkURL = "../../placeholders/CWebook.html"
}

var ebk = new Array()
ebk["0100"] = ["01",	"Chapter 1",	"Introduction: Themes in the Study of Life"]
ebk["01OV"] = ["01",	"Overview",		"Inquiring About the World of Life"]
ebk["0101"] = ["01.01",	"Concept 1.1",	"Themes help connect the concepts of biology"]
ebk["0102"] = ["01.02",	"Concept 1.2",	"<i>The Core Theme:</i> Evolution accounts for the unity and diversity of life"]
ebk["0103"] = ["01.03",	"Concept 1.3",	"Scientists use two main forms of inquiry in their study of nature"]
ebk["01RV"] = ["01.S",	"Review",		""]

ebk["0200"] = ["02",	"Chapter 2",	"The Chemical Context of Life"]
ebk["02OV"] = ["02",	"Overview",		"Chemical Connection to Biology"]
ebk["0201"] = ["02.01",	"Concept 2.1",	"Matter consists of chemical elements in pure form and in combinations called compounds"]
ebk["0202"] = ["02.02",	"Concept 2.2",	"An element's properties depend on the structure of its atoms"]
ebk["0203"] = ["02.03",	"Concept 2.3",	"The formation and function of molecules depend on chemical bonding between atoms"]
ebk["0204"] = ["02.04",	"Concept 2.4",	"Chemical reactions make and break chemical bonds"]
ebk["02RV"] = ["02.S",	"Review",		""]

ebk["0300"] = ["03",	"Chapter 3",	"Water and the Fitness of the Environment"]
ebk["03OV"] = ["03",	"Overview",		"The Molecule That Supports All of Life"]
ebk["0301"] = ["03.01",	"Concept 3.1",	"The polarity of water molecules results in hydrogen bonding"]
ebk["0302"] = ["03.02",	"Concept 3.2",	"Four emergent properties of water contribute to Earth's fitness for life"]
ebk["0303"] = ["03.03",	"Concept 3.3",	"Acidic and basic conditions affect living organisms"]
ebk["03RV"] = ["03.S",	"Review",		""]

ebk["0400"] = ["04",	"Chapter 4",	"Carbon and the Molecular Diversity of Life"]
ebk["04OV"] = ["04",	"Overview",		"Carbon: The Backbone of Life"]
ebk["0401"] = ["04.01",	"Concept 4.1",	"Organic chemistry is the study of carbon compounds"]
ebk["0402"] = ["04.02",	"Concept 4.2",	"Carbon atoms can form diverse molecules by bonding to four other atoms"]
ebk["0403"] = ["04.03",	"Concept 4.3",	"A small number of chemical groups are key to the functioning of biological molecules"]
ebk["04RV"] = ["04.S",	"Review",		""]

ebk["0500"] = ["05",	"Chapter 5",	"The Structure and Function of Large Biological Molecules"]
ebk["05OV"] = ["05",	"Overview",		"The Molecules of Life"]
ebk["0501"] = ["05.01",	"Concept 5.1",	"Macromolecules are polymers, built from monomers"]
ebk["0502"] = ["05.02",	"Concept 5.2",	"Carbohydrates serve as fuel and building material"]
ebk["0503"] = ["05.03",	"Concept 5.3",	"Lipids are a diverse group of hydrophobic molecules"]
ebk["0504"] = ["05.04",	"Concept 5.4",	"Proteins have many structures, resulting in a wide range of functions"]
ebk["0505"] = ["05.05",	"Concept 5.5",	"Nucleic acids store and transmit hereditary information"]
ebk["05RV"] = ["05.S",	"Review",		""]

ebk["0600"] = ["06",	"Chapter 6",	"A Tour of the Cell"]
ebk["06OV"] = ["06",	"Overview",		"The Fundamental Units of Life"]
ebk["0601"] = ["06.01",	"Concept 6.1",	"To study cells, biologists use microscopes and the tools of biochemistry"]
ebk["0602"] = ["06.02",	"Concept 6.2",	"Eukaryotic cells have internal membranes that compartmentalize their functions"]
ebk["0603"] = ["06.03",	"Concept 6.3",	"The eukaryotic cell's genetic instructions are housed in the nucleus and carried out by the ribosomes"]
ebk["0604"] = ["06.04",	"Concept 6.4",	"The endomembrane system regulates protein traffic and performs metabolic functions in the cell"]
ebk["0605"] = ["06.05",	"Concept 6.5",	"Mitochondria and chloroplasts change energy from one form to another"]
ebk["0606"] = ["06.06",	"Concept 6.6",	"The cytoskeleton is a network of fibers that organizes structures and activities in the cell"]
ebk["0607"] = ["06.07",	"Concept 6.7",	"Extracellular components and connections between cells help coordinate cellular activities"]
ebk["06RV"] = ["06.S",	"Review",		""]

ebk["0700"] = ["07",	"Chapter 7",	"Membrane Structure and Function"]
ebk["07OV"] = ["07",	"Overview",		"Life at the Edge"]
ebk["0701"] = ["07.01",	"Concept 7.1",	"Cellular membranes are fluid mosaics of lipids and proteins"]
ebk["0702"] = ["07.02",	"Concept 7.2",	"Membrane structure results in selective permeability"]
ebk["0703"] = ["07.03",	"Concept 7.3",	"Passive transport is diffusion of a substance across a membrane with no energy investment"]
ebk["0704"] = ["07.04",	"Concept 7.4",	"Active transport uses energy to move solutes against their gradients"]
ebk["0705"] = ["07.05",	"Concept 7.5",	"Bulk transport across the plasma membrane occurs by exocytosis and endocytosis"]
ebk["07RV"] = ["07.S",	"Review",		""]

ebk["0800"] = ["08",	"Chapter 8",	"An Introduction to Metabolism"]
ebk["08OV"] = ["08",	"Overview",		"The Energy of Life"]
ebk["0801"] = ["08.01",	"Concept 8.1",	"An organism's metabolism transforms matter and energy, subject to the laws of thermodynamics"]
ebk["0802"] = ["08.02",	"Concept 8.2",	"The free-energy change of a reaction tells us whether or not the reaction occurs spontaneously"]
ebk["0803"] = ["08.03",	"Concept 8.3",	"ATP powers cellular work by coupling exergonic reactions to endergonic reactions"]
ebk["0804"] = ["08.04",	"Concept 8.4",	"Enzymes speed up metabolic reactions by lowering energy barriers"]
ebk["0805"] = ["08.05",	"Concept 8.5",	"Regulation of enzyme activity helps control metabolism"]
ebk["08RV"] = ["08.S",	"Review",		""]

ebk["0900"] = ["09",	"Chapter 9",	"Cellular Respiration: Harvesting Chemical Energy"]
ebk["09OV"] = ["09",	"Overview",		"Life Is Work"]
ebk["0901"] = ["09.01",	"Concept 9.1",	"Catabolic pathways yield energy by oxidizing organic fuels"]
ebk["0902"] = ["09.02",	"Concept 9.2",	"Glycolysis harvests chemical energy by oxidizing glucose to pyruvate"]
ebk["0903"] = ["09.03",	"Concept 9.3",	"The citric acid cycle completes the energy-yielding oxidation of organic molecules"]
ebk["0904"] = ["09.04",	"Concept 9.4",	"During oxidative phosphorylation, chemiosmosis couples electron transport to ATP synthesis"]
ebk["0905"] = ["09.05",	"Concept 9.5",	"Fermentation enables some cells to produce ATP without the use of oxygen"]
ebk["0906"] = ["09.06",	"Concept 9.6",	"Glycolysis and the citric acid cycle connect to many other metabolic pathways"]
ebk["09RV"] = ["09.S",	"Review",		""]

ebk["1000"] = ["10",	"Chapter 10",	"Photosynthesis"]
ebk["10OV"] = ["10",	"Overview",		"The Process That Feeds the Biosphere"]
ebk["1001"] = ["10.01",	"Concept 10.1",	"Photosynthesis converts light energy to the chemical energy of food"]
ebk["1002"] = ["10.02",	"Concept 10.2",	"The light reactions convert solar energy to the chemical energy of ATP and NADPH"]
ebk["1003"] = ["10.03",	"Concept 10.3",	"The Calvin cycle uses ATP and NADPH to convert CO2 to sugar"]
ebk["1004"] = ["10.04",	"Concept 10.4",	"Alternative mechanisms of carbon fixation have evolved in hot, arid climates"]
ebk["10RV"] = ["10.S",	"Review",		""]

ebk["1100"] = ["11",	"Chapter 11",	"Cell Communication"]
ebk["11OV"] = ["11",	"Overview",		"The Cellular Internet"]
ebk["1101"] = ["11.01",	"Concept 11.1",	"External signals are converted to responses within the cell"]
ebk["1102"] = ["11.02",	"Concept 11.2",	"Reception: A signal molecule binds to a receptor protein, causing it to change shape"]
ebk["1103"] = ["11.03",	"Concept 11.3",	"Transduction: Cascades of molecular interactions relay signals from receptors to target molecules in the cell"]
ebk["1104"] = ["11.04",	"Concept 11.4",	"Response: Cell signaling leads to regulation of transcription or cytoplasmic activities"]
ebk["1105"] = ["11.05",	"Concept 11.5",	"Apoptosis (programmed cell death) integrates multiple cell-signaling pathways"]
ebk["11RV"] = ["11.S",	"Review",		""]

ebk["1200"] = ["12",	"Chapter 12",	"The Cell Cycle"]
ebk["12OV"] = ["12",	"Overview",		"Apoptosis (programmed cell death) integrates multiple cell-signaling pathways"]
ebk["1201"] = ["12.01",	"Concept 12.1",	"Cell division results in genetically identical daughter cells"]
ebk["1202"] = ["12.02",	"Concept 12.2",	"The mitotic phase alternates with interphase in the cell cycle"]
ebk["1203"] = ["12.03",	"Concept 12.3",	"The eukaryotic cell cycle is regulated by a molecular control system"]
ebk["12RV"] = ["12.S",	"Review",		""]

ebk["1300"] = ["13",	"Chapter 13",	"Meiosis and Sexual Life Cycles"]
ebk["13OV"] = ["13",	"Overview",		"Variations on a Theme"]
ebk["1301"] = ["13.01",	"Concept 13.1",	"Offspring acquire genes from parents by inheriting chromosomes"]
ebk["1302"] = ["13.02",	"Concept 13.2",	"Fertilization and meiosis alternate in sexual life cycles"]
ebk["1303"] = ["13.03",	"Concept 13.3",	"Meiosis reduces the number of chromosome sets from diploid to haploid"]
ebk["1304"] = ["13.04",	"Concept 13.4",	"Genetic variation produced in sexual life cycles contributes to evolution"]
ebk["13RV"] = ["13.S",	"Review",		""]

ebk["1400"] = ["14",	"Chapter 14",	"Mendel and the Gene Idea"]
ebk["14OV"] = ["14",	"Overview",		"Drawing from the Deck of Genes"]
ebk["1401"] = ["14.01",	"Concept 14.1",	"Mendel used the scientific approach to identify two laws of inheritance"]
ebk["1402"] = ["14.02",	"Concept 14.2",	"The laws of probability govern Mendelian inheritance"]
ebk["1403"] = ["14.03",	"Concept 14.3",	"Inheritance patterns are often more complex than predicted by simple Mendelian genetics"]
ebk["1404"] = ["14.04",	"Concept 14.4",	"Many human traits follow Mendelian patterns of inheritance"]
ebk["14RV"] = ["14.S",	"Review",		""]

ebk["1500"] = ["15",	"Chapter 15",	"The Chromosomal Basis of Inheritance"]
ebk["15OV"] = ["15",	"Overview",		"Locating Genes Along Chromosomes"]
ebk["1501"] = ["15.01",	"Concept 15.1",	"Mendelian inheritance has its physical basis in the behavior of chromosomes"]
ebk["1502"] = ["15.02",	"Concept 15.2",	"Sex-linked genes exhibit unique patterns of inheritance"]
ebk["1503"] = ["15.03",	"Concept 15.3",	"Linked genes tend to be inherited together because they are located near each other on the same chromosome"]
ebk["1504"] = ["15.04",	"Concept 15.4",	"Alterations of chromosome number or structure cause some genetic disorders"]
ebk["1505"] = ["15.05",	"Concept 15.5",	"Some inheritance patterns are exceptions to the standard chromosome theory"]
ebk["15RV"] = ["15.S",	"Review",		""]

ebk["1600"] = ["16",	"Chapter 16",	"The Molecular Basis of Inheritance"]
ebk["16OV"] = ["16",	"Overview",		"Life's Operating Instructions"]
ebk["1601"] = ["16.01",	"Concept 16.1",	"DNA is the genetic material"]
ebk["1602"] = ["16.02",	"Concept 16.2",	"Many proteins work together in DNA replication and repair"]
ebk["1603"] = ["16.03",	"Concept 16.3",	"A chromosome consists of a DNA molecule packed together with proteins"]
ebk["16RV"] = ["16.S",	"Review",		""]

ebk["1700"] = ["17",	"Chapter 17",	"From Gene to Protein"]
ebk["17OV"] = ["17",	"Overview",		"The Flow of Genetic Information"]
ebk["1701"] = ["17.01",	"Concept 17.1",	"Genes specify proteins via transcription and translation"]
ebk["1702"] = ["17.02",	"Concept 17.2",	"Transcription is the DNA-directed synthesis of RNA: <i>a closer look</i>"]
ebk["1703"] = ["17.03",	"Concept 17.3",	"Eukaryotic cells modify RNA after transcription"]
ebk["1704"] = ["17.04",	"Concept 17.4",	"Translation is the RNA-directed synthesis of a polypeptide: <i>a closer look</i>"]
ebk["1705"] = ["17.05",	"Concept 17.5",	"Point mutations can affect protein structure and function"]
ebk["1706"] = ["17.06",	"Concept 17.6",	"While gene expression differs among the domains of life, the concept of a gene is universal"]
ebk["17RV"] = ["17.S",	"Review",		""]

ebk["1800"] = ["18",	"Chapter 18",	"Regulation of Gene Expression"]
ebk["18OV"] = ["18",	"Overview",		"Conducting the Genetic Orchestra"]
ebk["1801"] = ["18.01",	"Concept 18.1",	"Bacteria often respond to environmental change by regulating transcription"]
ebk["1802"] = ["18.02",	"Concept 18.2",	"Eukaryotic gene expression can be regulated at any stage"]
ebk["1803"] = ["18.03",	"Concept 18.3",	"Noncoding RNAs play multiple roles in controlling gene expression"]
ebk["1804"] = ["18.04",	"Concept 18.4",	"A program of differential gene expression leads to the different cell types in a multicellular organism"]
ebk["1805"] = ["18.05",	"Concept 18.5",	"Cancer results from genetic changes that affect cell cycle control"]
ebk["18RV"] = ["18.S",	"Review",		""]

ebk["1900"] = ["19",	"Chapter 19",	"Viruses"]
ebk["19OV"] = ["19",	"Overview",		"A Borrowed Life"]
ebk["1901"] = ["19.01",	"Concept 19.1",	"A virus consists of a nucleic acid surrounded by a protein coat"]
ebk["1902"] = ["19.02",	"Concept 19.2",	"Viruses reproduce only in host cells"]
ebk["1903"] = ["19.03",	"Concept 19.3",	"Viruses, viroids, and prions are formidable pathogens in animals and plants"]
ebk["19RV"] = ["19.S",	"Review",		""]

ebk["2000"] = ["20",	"Chapter 20",	"Modern Biotechnology"]
ebk["20OV"] = ["20",	"Overview",		"The DNA Toolbox"]
ebk["2001"] = ["20.01",	"Concept 20.1",	"DNA cloning yields multiple copies of a gene or other DNA segment"]
ebk["2002"] = ["20.02",	"Concept 20.2",	"DNA technology allows us to study the sequence, expression, and function of a gene"]
ebk["2003"] = ["20.03",	"Concept 20.3",	"Cloning organisms may lead to production of stem cells for research and other applications"]
ebk["2004"] = ["20.04",	"Concept 20.4",	"The practical applications of DNA technology affect our lives in many ways"]
ebk["20RV"] = ["20.S",	"Review",		""]

ebk["2100"] = ["21",	"Chapter 21",	"Genomes and their Evolution"]
ebk["21OV"] = ["21",	"Overview",		"Reading the Leaves from the Tree of Life"]
ebk["2101"] = ["21.01",	"Concept 21.1",	"New approaches have accelerated the pace of genome sequencing"]
ebk["2102"] = ["21.02",	"Concept 21.2",	"Scientists use bioinformatics to analyze genomes and their functions"]
ebk["2103"] = ["21.03",	"Concept 21.3",	"Genomes vary in size, number of genes, and gene density"]
ebk["2104"] = ["21.04",	"Concept 21.4",	"Multicellular eukaryotes have much noncoding DNA and many multigene families"]
ebk["2105"] = ["21.05",	"Concept 21.5",	"Duplication, rearrangement, and mutation of DNA contribute to genome evolution"]
ebk["2106"] = ["21.06",	"Concept 21.6",	"Comparing genome sequences provides clues to evolution and development"]
ebk["21RV"] = ["21.S",	"Review",		""]

ebk["2200"] = ["22",	"Chapter 22",	"Descent with Modification: A Darwinian View of Life"]
ebk["22OV"] = ["22",	"Overview",		"Endless Forms Most Beautiful"]
ebk["2201"] = ["22.01",	"Concept 22.1",	"The Darwinian revolution challenged traditional views of a young Earth inhabited by unchanging species"]
ebk["2202"] = ["22.02",	"Concept 22.2",	"Descent with modification by natural selection explains the adaptations of organisms and the unity and diversity of life"]
ebk["2203"] = ["22.03",	"Concept 22.3",	"Evolution is supported by an overwhelming amount of scientific evidence"]
ebk["22RV"] = ["22.S",	"Review",		""]

ebk["2300"] = ["23",	"Chapter 23",	"The Evolution of Populations"]
ebk["23OV"] = ["23",	"Overview",		"The Smallest Unit of Evolution"]
ebk["2301"] = ["23.01",	"Concept 23.1",	"Mutation and sexual reproduction produce the genetic variation that makes evolution possible"]
ebk["2302"] = ["23.02",	"Concept 23.2",	"The Hardy-Weinberg equation can be used to test whether a population is evolving"]
ebk["2303"] = ["23.03",	"Concept 23.3",	"Natural selection, genetic drift, and gene flow can alter allele frequencies in a population"]
ebk["2304"] = ["23.04",	"Concept 23.4",	"Natural selection is the only mechanism that consistently causes adaptive evolution"]
ebk["23RV"] = ["23.S",	"Review",		""]

ebk["2400"] = ["24",	"Chapter 24",	"The Origin of Species"]
ebk["24OV"] = ["24",	"Overview",		"That \"Mystery of Mysteries\""]
ebk["2401"] = ["24.01",	"Concept 24.1",	"The biological species concept emphasizes reproductive isolation"]
ebk["2402"] = ["24.02",	"Concept 24.2",	"Speciation can take place with or without geographic separation"]
ebk["2403"] = ["24.03",	"Concept 24.3",	"Hybrid zones provide opportunities to study factors that cause reproductive isolation"]
ebk["2404"] = ["24.04",	"Concept 24.4",	"Speciation can occur rapidly or slowly and can result from changes in few or many genes"]
ebk["24RV"] = ["24.S",	"Review",		""]

ebk["2500"] = ["25",	"Chapter 25",	"The History of Life on Earth"]
ebk["25OV"] = ["25",	"Overview",		"Lost Worlds"]
ebk["2501"] = ["25.01",	"Concept 25.1",	"Conditions on early Earth made the origin of life possible"]
ebk["2502"] = ["25.02",	"Concept 25.2",	"The fossil record documents the history of life"]
ebk["2503"] = ["25.03",	"Concept 25.3",	"Key events in life's history include the origins of single-celled and multicelled organisms and the colonization of land"]
ebk["2504"] = ["25.04",	"Concept 25.4",	"The rise and fall of dominant groups reflect continental drift, mass extinctions, and adaptive radiations"]
ebk["2505"] = ["25.05",	"Concept 25.5",	"Major changes in body form can result from changes in the sequences and regulation of developmental genes"]
ebk["2506"] = ["25.06",	"Concept 25.6",	"Evolution is not goal oriented"]
ebk["25RV"] = ["25.S",	"Review",		""]

ebk["2600"] = ["26",	"Chapter 26",	"Phylogeny and The Tree of Life"]
ebk["26OV"] = ["26",	"Overview",		"Investigating the Tree of Life"]
ebk["2601"] = ["26.01",	"Concept 26.1",	"Phylogenies show evolutionary relationships"]
ebk["2602"] = ["26.02",	"Concept 26.2",	"Phylogenies are inferred from morphological and molecular data"]
ebk["2603"] = ["26.03",	"Concept 26.3",	"Shared characters are used to construct phylogenetic trees"]
ebk["2604"] = ["26.04",	"Concept 26.4",	"An organism's evolutionary history is documented in its genome"]
ebk["2605"] = ["26.05",	"Concept 26.5",	"Molecular clocks help track evolutionary time"]
ebk["2606"] = ["26.06",	"Concept 26.6",	"New information continues to revise our understanding of the tree of life"]
ebk["26RV"] = ["26.S",	"Review",		""]

ebk["2700"] = ["27",	"Chapter 27",	"Bacteria and Archaea"]
ebk["27OV"] = ["27",	"Overview",		"Masters of Adaptation"]
ebk["2701"] = ["27.01",	"Concept 27.1",	"Structural and functional adaptations contribute to prokaryotic success"]
ebk["2702"] = ["27.02",	"Concept 27.2",	"Rapid reproduction, mutation, and genetic recombination promote genetic diversity in prokaryotes"]
ebk["2703"] = ["27.03",	"Concept 27.3",	"Diverse nutritional and metabolic adaptations have evolved in prokaryotes"]
ebk["2704"] = ["27.04",	"Concept 27.4",	"Molecular systematics is illuminating prokaryotic phylogeny"]
ebk["2705"] = ["27.05",	"Concept 27.5",	"Prokaryotes play crucial roles in the biosphere"]
ebk["2706"] = ["27.06",	"Concept 27.6",	"Prokaryotes have both harmful and beneficial impacts on humans"]
ebk["27RV"] = ["27.S",	"Review",		""]

ebk["2800"] = ["28",	"Chapter 28",	"Protists"]
ebk["28OV"] = ["28",	"Overview",		"Living Small"]
ebk["2801"] = ["28.01",	"Concept 28.1",	"Most eukaryotes are single-celled organisms"]
ebk["2802"] = ["28.02",	"Concept 28.2",	"Excavates include protists with modified mitochondria and protists with unique flagella"]
ebk["2803"] = ["28.03",	"Concept 28.3",	"Chromalveolates may have originated by secondary endosymbiosis"]
ebk["2804"] = ["28.04",	"Concept 28.4",	"Rhizaria are a diverse group defined by DNA similarities"]
ebk["2805"] = ["28.05",	"Concept 28.5",	"Red algae and green algae are the closest relatives of land plants"]
ebk["2806"] = ["28.06",	"Concept 28.6",	"Unikonts include protists that are closely related to fungi and animals"]
ebk["2807"] = ["28.07",	"Concept 28.7",	"Protists play key roles in ecological relationships"]
ebk["28RV"] = ["28.S",	"Review",		""]

ebk["2900"] = ["29",	"Chapter 29",	"Plant Diversity I: How Plants Colonized Land"]
ebk["29OV"] = ["29",	"Overview",		"The Greening of Earth"]
ebk["2901"] = ["29.01",	"Concept 29.1",	"Land plants evolved from green algae"]
ebk["2902"] = ["29.02",	"Concept 29.2",	"Mosses and other nonvascular plants have life cycles dominated by gametophytes"]
ebk["2903"] = ["29.03",	"Concept 29.3",	"Ferns and other seedless vascular plants were the first plants to grow tall"]
ebk["29RV"] = ["29.S",	"Review",		""]

ebk["3000"] = ["30",	"Chapter 30",	"Plant Diversity II: The Evolution of Seed Plants"]
ebk["30OV"] = ["30",	"Overview",		"Transforming the World"]
ebk["3001"] = ["30.01",	"Concept 30.1",	"Seeds and pollen grains are key adaptations in seed plants for life on land"]
ebk["3002"] = ["30.02",	"Concept 30.2",	"Gymnosperms bear \"naked\" seeds, typically on cones"]
ebk["3003"] = ["30.03",	"Concept 30.3",	"The reproductive adaptations of angiosperms include flowers and fruits"]
ebk["3004"] = ["30.04",	"Concept 30.4",	"Human welfare depends greatly on seed plants"]
ebk["30RV"] = ["30.S",	"Review",		""]

ebk["3100"] = ["31",	"Chapter 31",	"Fungi"]
ebk["31OV"] = ["31",	"Overview",		"Mighty Mushrooms"]
ebk["3101"] = ["31.01",	"Concept 31.1",	"Fungi are heterotrophs that feed by absorption"]
ebk["3102"] = ["31.02",	"Concept 31.2",	"Fungi produce spores through sexual or asexual life cycles"]
ebk["3103"] = ["31.03",	"Concept 31.3",	"The ancestor of fungi was an aquatic, single-celled, flagellated protist"]
ebk["3104"] = ["31.04",	"Concept 31.4",	"Fungi have radiated into a diverse set of lineages"]
ebk["3105"] = ["31.05",	"Concept 31.5",	"Fungi affect nutrient cycling, ecological interactions, and human welfare"]
ebk["31RV"] = ["31.S",	"Review",		""]

ebk["3200"] = ["32",	"Chapter 32",	"An Introduction to Animal Diversity"]
ebk["32OV"] = ["32",	"Overview",		"Welcome to Your Kingdom"]
ebk["3201"] = ["32.01",	"Concept 32.1",	"Animals are multicellular, heterotrophic eukaryotes with tissues that develop from embryonic layers"]
ebk["3202"] = ["32.02",	"Concept 32.2",	"The history of animals may span more than half a billion years"]
ebk["3203"] = ["32.03",	"Concept 32.3",	"Animals can be characterized by \"body plans\""]
ebk["3204"] = ["32.04",	"Concept 32.4",	"New views of animal phylogeny are emerging from molecular data"]
ebk["32RV"] = ["32.S",	"Review",		""]

ebk["3300"] = ["33",	"Chapter 33",	"Invertebrates"]
ebk["33OV"] = ["33",	"Overview",		"Life Without a Backbone"]
ebk["3301"] = ["33.01",	"Concept 33.1",	"Sponges are basal animals that lack true tissues"]
ebk["3302"] = ["33.02",	"Concept 33.2",	"Cnidarians are an ancient phylum of eumetazoans"]
ebk["3303"] = ["33.03",	"Concept 33.3",	"Lophotrochozoans, a clade identified by molecular data, have the widest range of animal body forms"]
ebk["3304"] = ["33.04",	"Concept 33.4",	"Ecdysozoans are the most species-rich animal group"]
ebk["3305"] = ["33.05",	"Concept 33.5",	"Echinoderms and chordates are deuterostomes"]
ebk["33RV"] = ["33.S",	"Review",		""]

ebk["3400"] = ["34",	"Chapter 34",	"Vertebrates"]
ebk["34OV"] = ["34",	"Overview",		"Half a Billion Years of Backbones"]
ebk["3401"] = ["34.01",	"Concept 34.1",	"Chordates have a notochord and a dorsal, hollow nerve cord"]
ebk["3402"] = ["34.02",	"Concept 34.2",	"Craniates are chordates that have a head"]
ebk["3403"] = ["34.03",	"Concept 34.3",	"Vertebrates are craniates that have a backbone"]
ebk["3404"] = ["34.04",	"Concept 34.4",	"Gnathostomes are vertebrates that have jaws"]
ebk["3405"] = ["34.05",	"Concept 34.5",	"Tetrapods are gnathostomes that have limbs"]
ebk["3406"] = ["34.06",	"Concept 34.6",	"Amniotes are tetrapods that have a terrestrially adapted egg"]
ebk["3407"] = ["34.07",	"Concept 34.7",	"Mammals are amniotes that have hair and produce milk"]
ebk["3408"] = ["34.08",	"Concept 34.8",	"Humans are mammals that have a large brain and bipedal locomotion"]
ebk["34OV"] = ["34.S",	"Review",		""]

ebk["3500"] = ["35",	"Chapter 35",	"Plant Structure, Growth, and Development"]
ebk["35OV"] = ["35",	"Overview",		"Plastic Plants?"]
ebk["3501"] = ["35.01",	"Concept 35.1",	"The plant body has a hierarchy of organs, tissues, and cells"]
ebk["3502"] = ["35.02",	"Concept 35.2",	"Meristems generate cells for new organs"]
ebk["3503"] = ["35.03",	"Concept 35.3",	"Primary growth lengthens roots and shoots"]
ebk["3504"] = ["35.04",	"Concept 35.4",	"Secondary growth adds girth to stems and roots in woody plants"]
ebk["3505"] = ["35.05",	"Concept 35.5",	"Growth, morphogenesis, and differentiation produce the plant body"]
ebk["35RV"] = ["35.S",	"Review",		""]

ebk["3600"] = ["36",	"Chapter 36",	"Resource Acquisition and Transport in Vascular Plants"]
ebk["36OV"] = ["36",	"Overview",		"Underground Plants"]
ebk["3601"] = ["36.01",	"Concept 36.1",	"Land plants acquire resources both above and below ground"]
ebk["3602"] = ["36.02",	"Concept 36.2",	"Transport occurs by short-distance diffusion or active transport and by long-distance bulk flow"]
ebk["3603"] = ["36.03",	"Concept 36.3",	"Water and minerals are transported from roots to shoots"]
ebk["3604"] = ["36.04",	"Concept 36.4",	"Stomata help regulate the rate of transpiration"]
ebk["3605"] = ["36.05",	"Concept 36.5",	"Sugars are transported from leaves and other sources to sites of use or storage"]
ebk["3606"] = ["36.06",	"Concept 36.6",	"The symplast is highly dynamic"]
ebk["36RV"] = ["36.S",	"Review",		""]

ebk["3700"] = ["37",	"Chapter 37",	"Soil and Plant Nutrition"]
ebk["37OV"] = ["37",	"Overview",		"\"The nation that destroys its soil destroys itself\""]
ebk["3701"] = ["37.01",	"Concept 37.1",	"Soil is a living, finite resource"]
ebk["3702"] = ["37.02",	"Concept 37.2",	"Plants require essential elements to complete their life cycles"]
ebk["3703"] = ["37.03",	"Concept 37.3",	"Plant nutrition often involves relationships with other organisms"]
ebk["37RV"] = ["37.S",	"Review",		""]

ebk["3800"] = ["38",	"Chapter 38",	"Angiosperm Reproduction and Biotechnology"]
ebk["38OV"] = ["38",	"Overview",		"Flowers of Deceit"]
ebk["3801"] = ["38.01",	"Concept 38.1",	"Flowers, double fertilization, and fruits are unique features of the angiosperm life cycle"]
ebk["3802"] = ["38.02",	"Concept 38.2",	"Flowering plants reproduce sexually, asexually, or both"]
ebk["3803"] = ["38.03",	"Concept 38.3",	"Humans modify crops by breeding and genetic engineering"]
ebk["38RV"] = ["38.S",	"Review",		""]

ebk["3900"] = ["39",	"Chapter 39",	"Plant Responses to Internal and External Signals"]
ebk["39OV"] = ["39",	"Overview",		""]
ebk["3901"] = ["39.01",	"Concept 39.1",	"Signal transduction pathways link signal reception to response"]
ebk["3902"] = ["39.02",	"Concept 39.2",	"Plant hormones help coordinate growth, development, and responses to stimuli"]
ebk["3903"] = ["39.03",	"Concept 39.3",	"Responses to light are critical for plant success"]
ebk["3904"] = ["39.04",	"Concept 39.4",	"Plants respond to a wide variety of stimuli other than light"]
ebk["3905"] = ["39.05",	"Concept 39.5",	"Plants defend respond to attacks by herbivores and pathogens"]
ebk["39RV"] = ["39.S",	"Review",		""]

ebk["4000"] = ["40",	"Chapter 40",	"Basic Principles of Animal Form and Function"]
ebk["40OV"] = ["40",	"Overview",		"Diverse Forms, Common Challenges"]
ebk["4001"] = ["40.01",	"Concept 40.1",	"Animal form and function are correlated at all levels of organization"]
ebk["4002"] = ["40.02",	"Concept 40.2",	"Feedback control loops maintain the internal environment in many animals"]
ebk["4003"] = ["40.03",	"Concept 40.3",	"Homeostatic processes for thermoregulation involve form, function, and behavior"]
ebk["4004"] = ["40.04",	"Concept 40.4",	"Energy requirements are related to animal size, activity, and environment"]
ebk["40RV"] = ["40.S",	"Review",		""]

ebk["4100"] = ["41",	"Chapter 41",	"Animal Nutrition"]
ebk["41OV"] = ["41",	"Overview",		"The Need to Feed"]
ebk["4101"] = ["41.01",	"Concept 41.1",	"An animal's diet must supply chemical energy, organic molecules, and essential nutrients"]
ebk["4102"] = ["41.02",	"Concept 41.2",	"The main stages of food processing are ingestion, digestion, absorption, and elimination"]
ebk["4103"] = ["41.03",	"Concept 41.3",	"Organs specialized for successive stages of food processing form the mammalian digestive system"]
ebk["4104"] = ["41.04",	"Concept 41.4",	"Evolutionary adaptations of vertebrate digestive systems correlate with diet"]
ebk["4105"] = ["41.05",	"Concept 41.5",	"Homeostatic mechanisms contribute to an animal's energy balance"]
ebk["41RV"] = ["41.S",	"Review",		""]

ebk["4200"] = ["42",	"Chapter 42",	"Circulation and Gas Exchange"]
ebk["42OV"] = ["42",	"Overview",		"Promoting Free Exchange"]
ebk["4201"] = ["42.01",	"Concept 42.1",	"Circulatory systems enable exchange at a distance"]
ebk["4202"] = ["42.02",	"Concept 42.2",	"Coordinated cycles of heart contraction drive double circulation in mammals"]
ebk["4203"] = ["42.03",	"Concept 42.3",	"Blood pressure and flow reflect the structure and arrangement of blood vessels"]
ebk["4204"] = ["42.04",	"Concept 42.4",	"Blood components mediate exchange, transport, and defense"]
ebk["4205"] = ["42.05",	"Concept 42.5",	"Gas exchange occurs across specialized respiratory surfaces"]
ebk["4206"] = ["42.06",	"Concept 42.6",	"Breathing ventilates the lungs"]
ebk["4207"] = ["42.07",	"Concept 42.7",	"Adaptations for exchange include pigments that bind and transport gases"]
ebk["42RV"] = ["42.S",	"Review",		""]

ebk["4300"] = ["43",	"Chapter 43",	"The Immune System"]
ebk["43OV"] = ["43",	"Overview",		"Reconnaissance, Recognition, and Response"]
ebk["4301"] = ["43.01",	"Concept 43.1",	"Innate immunity, recognition and response rely on shared pathogen traits"]
ebk["4302"] = ["43.02",	"Concept 43.2",	"In acquired immunity, lymphocyte receptors provide pathogen-specific recognition"]
ebk["4303"] = ["43.03",	"Concept 43.3",	"Acquired immunity defends against infection of body cells and fluids"]
ebk["4304"] = ["43.04",	"Concept 43.4",	"Disruptions in immune system function can elicit or exacerbate disease"]
ebk["43RV"] = ["43.S",	"Review",		""]

ebk["4400"] = ["44",	"Chapter 44",	"Osmoregulation and Excretion"]
ebk["44OV"] = ["44",	"Overview",		"A Balancing Act"]
ebk["4401"] = ["44.01",	"Concept 44.1",	"Osmoregulation balances the uptake and loss of water and solutes"]
ebk["4402"] = ["44.02",	"Concept 44.2",	"An animal's nitrogenous wastes reflect its phylogeny and habitat"]
ebk["4403"] = ["44.03",	"Concept 44.3",	"Diverse excretory systems are variations on a tubular theme"]
ebk["4404"] = ["44.04",	"Concept 44.4",	"Nephron structure is organized for stepwise processing of blood filtrate"]
ebk["4405"] = ["44.05",	"Concept 44.5",	"Hormonal circuits link kidney function, water balance, and blood pressure"]
ebk["44RV"] = ["44.S",	"Review",		""]

ebk["4500"] = ["45",	"Chapter 45",	"Hormones and the Endocrine System"]
ebk["45OV"] = ["45",	"Overview",		""]
ebk["4501"] = ["45.01",	"Concept 45.1",	"Hormones and other signaling molecules bind to target receptors, triggering specific response pathways"]
ebk["4502"] = ["45.02",	"Concept 45.2",	"Negative feedback and antagonistic hormone pairs are common features of the endocrine system"]
ebk["4503"] = ["45.03",	"Concept 45.3",	"The endocrine and nervous systems act individually and together to regulate an animal's physiology"]
ebk["4504"] = ["45.04",	"Concept 45.4",	"Endocrine glands respond to diverse stimuli in regulating metabolism, homeostasis, development, and behavior"]
ebk["45RV"] = ["45.S",	"Review",		""]

ebk["4600"] = ["46",	"Chapter 46",	"Animal Reproduction"]
ebk["46OV"] = ["46",	"Overview",		"Pairing Up for Sexual Reproduction"]
ebk["4601"] = ["46.01",	"Concept 46.1",	"Both asexual and sexual reproduction occur in the animal kingdom"]
ebk["4602"] = ["46.02",	"Concept 46.2",	"Fertilization depends on mechanisms that bring together sperm and eggs of the same species"]
ebk["4603"] = ["46.03",	"Concept 46.3",	"Reproductive organs produce and transport gametes"]
ebk["4604"] = ["46.04",	"Concept 46.4",	"The timing and pattern of meiosis in mammals differ for males and females"]
ebk["4605"] = ["46.05",	"Concept 46.5",	"The interplay of tropic and sex hormones regulates mammalian reproduction"]
ebk["4606"] = ["46.06",	"Concept 46.6",	"In placental mammals, an embryo develops fully within the mother's uterus"]
ebk["46RV"] = ["46.S",	"Review",		""]

ebk["4700"] = ["47",	"Chapter 47",	"Animal Development"]
ebk["47OV"] = ["47",	"Overview",		""]
ebk["4701"] = ["47.01",	"Concept 47.1",	"After fertilization, embryonic development proceeds through cleavage, gastrulation, and organogenesis"]
ebk["4702"] = ["47.02",	"Concept 47.2",	"Morphogenesis in animals involves specific changes in cell shape, position, and adhesion"]
ebk["4703"] = ["47.03",	"Concept 47.3",	"The developmental fate of cells depends on their history and on inductive signals"]
ebk["47RV"] = ["47.S",	"Review",		""]

ebk["4800"] = ["48",	"Chapter 48",	"Nerves, Synapses, and Signaling"]
ebk["48OV"] = ["48",	"Overview",		""]
ebk["4801"] = ["48.01",	"Concept 48.1",	"Neuron organization and structure reflect function in information transfer"]
ebk["4802"] = ["48.02",	"Concept 48.2",	"Ion pumps and ion channels maintain the resting potential of a neuron"]
ebk["4803"] = ["48.03",	"Concept 48.3",	"Action potentials are the signals conducted by axons"]
ebk["4804"] = ["48.04",	"Concept 48.4",	"Neurons communicate with other cells at synapses"]
ebk["48RV"] = ["48.S",	"Review",		""]

ebk["4900"] = ["49",	"Chapter 49",	"Nervous Systems"]
ebk["49OV"] = ["49",	"Overview",		""]
ebk["4901"] = ["49.01",	"Concept 49.1",	"Nervous systems consist of circuits of neurons and supporting cells"]
ebk["4902"] = ["49.02",	"Concept 49.2",	"The vertebrate brain is regionally specialized"]
ebk["4903"] = ["49.03",	"Concept 49.3",	"The cerebral cortex controls voluntary movement and cognitive functions"]
ebk["4904"] = ["49.04",	"Concept 49.4",	"Changes in synaptic connections underlie memory and learning"]
ebk["4905"] = ["49.05",	"Concept 49.5",	"Nervous system disorders can be understood in molecular terms"]
ebk["49RV"] = ["49.S",	"Review",		""]

ebk["5000"] = ["50",	"Chapter 50",	"Sensory and Motor Mechanisms"]
ebk["50OV"] = ["50",	"Overview",		""]
ebk["5001"] = ["50.01",	"Concept 50.1",	"Sensory receptors transduce stimulus energy and transmit signals to the central nervous system"]
ebk["5002"] = ["50.02",	"Concept 50.2",	"The mechanoreceptors responsible for hearing and equilibrium detect moving fluid or settling particles"]
ebk["5003"] = ["50.03",	"Concept 50.3",	"The senses of taste and smell rely on similar sets of sensory receptors"]
ebk["5004"] = ["50.04",	"Concept 50.4",	"Similar mechanisms underlie vision throughout the animal kingdom"]
ebk["5005"] = ["50.05",	"Concept 50.5",	"The physical interaction of protein filaments is required for muscle function"]
ebk["5006"] = ["50.06",	"Concept 50.6",	"Skeletal systems transform muscle contraction into locomotion"]
ebk["50RV"] = ["50.S",	"Review",		""]

ebk["5100"] = ["51",	"Chapter 51",	"Animal Behavior"]
ebk["51OV"] = ["51",	"Overview",		""]
ebk["5101"] = ["51.01",	"Concept 51.1",	"Discrete sensory inputs can stimulate both simple and complex behaviors"]
ebk["5102"] = ["51.02",	"Concept 51.2",	"Learning establishes specific links between experience and behavior"]
ebk["5103"] = ["51.03",	"Concept 51.3",	"Genetic makeup and environment both contribute to the development of behavior"]
ebk["5104"] = ["51.04",	"Concept 51.4",	"Selection for individual survival and reproductive success can explain most behaviors"]
ebk["5105"] = ["51.05",	"Concept 51.5",	"Inclusive fitness can account for the evolution of altruistic social behavior"]
ebk["51RV"] = ["51.S",	"Review",		""]

ebk["5200"] = ["52",	"Chapter 52",	"An Introduction to Ecology and the Biosphere"]
ebk["52OV"] = ["52",	"Overview",		"The Scope of Ecology"]
ebk["5201"] = ["52.01",	"Concept 52.1",	"Ecology integrates all areas of biological research and informs environmental decision making"]
ebk["5202"] = ["52.02",	"Concept 52.2",	"Interactions between organisms and the environment limit the distribution of species"]
ebk["5203"] = ["52.03",	"Concept 52.3",	"Aquatic biomes are diverse and dynamic systems that cover most of Earth"]
ebk["5204"] = ["52.04",	"Concept 52.4",	"The structure and distribution of terrestrial biomes are controlled by climate and disturbance"]
ebk["52RV"] = ["52.S",	"Review",		""]

ebk["5300"] = ["53",	"Chapter 53",	"Population Ecology"]
ebk["53OV"] = ["53",	"Overview",		"Counting Sheep"]
ebk["5301"] = ["53.01",	"Concept 53.1",	"Dynamic biological processes influence population density, dispersion, and demographics"]
ebk["5302"] = ["53.02",	"Concept 53.2",	"Life history traits are products of natural selection"]
ebk["5303"] = ["53.03",	"Concept 53.3",	"The exponential model describes population growth in an idealized, unlimited environment"]
ebk["5304"] = ["53.04",	"Concept 53.4",	"The logistic model describes how a population grows more slowly as it nears its carrying capacity"]
ebk["5305"] = ["53.05",	"Concept 53.5",	"Many factors that regulate population growth are density dependent"]
ebk["5306"] = ["53.06",	"Concept 53.6",	"The human population is no longer growing exponentially but is still increasing rapidly"]
ebk["53RV"] = ["53.S",	"Review",		""]

ebk["5400"] = ["54",	"Chapter 54",	"Community Ecology"]
ebk["54OV"] = ["54",	"Overview",		"A Sense of Community"]
ebk["5401"] = ["54.01",	"Concept 54.1",	"Community interactions are classified by whether they help, harm, or have no effect on the species involved"]
ebk["5402"] = ["54.02",	"Concept 54.2",	"Dominant and keystone species exert strong controls on community structure"]
ebk["5403"] = ["54.03",	"Concept 54.3",	"Disturbance influences species diversity and composition"]
ebk["5404"] = ["54.04",	"Concept 54.4",	"Biogeographic factors affect community biodiversity"]
ebk["5405"] = ["54.05",	"Concept 54.5",	"Community ecology is useful for understanding pathogen life cycles and controlling human disease"]
ebk["54RV"] = ["54.S",	"Review",		""]

ebk["5500"] = ["55",	"Chapter 55",	"Ecosystems"]
ebk["55OV"] = ["55",	"Overview",		"Observing Ecosystems"]
ebk["5501"] = ["55.01",	"Concept 55.1",	"Physical laws govern energy flow and chemical cycling in ecosystems"]
ebk["5502"] = ["55.02",	"Concept 55.2",	"Energy and other limiting factors control primary production in ecosystems"]
ebk["5503"] = ["55.03",	"Concept 55.3",	"Energy transfer between trophic levels is typically only 10% efficient"]
ebk["5504"] = ["55.04",	"Concept 55.4",	"Biological and geological processes cycle nutrients between organic and inorganic parts of an ecosystem"]
ebk["5505"] = ["55.05",	"Concept 55.5",	"Human activities now dominate most chemical cycles on Earth"]
ebk["55RV"] = ["55.S",	"Review",		""]

ebk["5600"] = ["56",	"Chapter 56",	"Conservation Biology and Restoration Ecology"]
ebk["56OV"] = ["56",	"Overview",		"Striking Gold"]
ebk["5601"] = ["56.01",	"Concept 56.1",	"Human activities threaten Earth's biodiversity"]
ebk["5602"] = ["56.02",	"Concept 56.2",	"Population conservation focuses on population size, genetic diversity, and critical habitat"]
ebk["5603"] = ["56.03",	"Concept 56.3",	"Landscape and regional conservation aim to sustain entire biotas"]
ebk["5604"] = ["56.04",	"Concept 56.4",	"Restoration ecology attempts to restore degraded ecosystems to a more natural state"]
ebk["5605"] = ["56.05",	"Concept 56.5",	"Sustainable development seeks to improve the human condition while conserving biodiversity"]
ebk["56RV"] = ["56.S",	"Review",		""]

// Activity Array
var act = new Array()
act["01A"] = ["The Levels of Life Card Game","1&A"]
act["01B"] = ["Energy Flow and Chemical Cycling","1&B"] // and 55
act["01C"] = ["Form Fits Function: Cells","1&G"]
act["01D"] = ["Heritable Information: DNA","1&D"]
act["01E"] = ["Comparing Prokaryotic and Eukaryotic Cells","1&C"] // and 06
act["01F"] = ["Regulation: Negative and Positive Feedback","1&E"] // and 40
act["01G"] = ["Classification Schemes","1&F"] // and 26
act["01H"] = ["Science, Technology, and Society: DDT","1&H"] // and 52
act["02A"] = ["Structure of the Atomic Nucleus","2&A"]
act["02B"] = ["Electron Arrangement","2&B"]
act["02C"] = ["Build an Atom","2&C"]
act["02D"] = ["Covalent Bonds","2&D"]
act["02E"] = ["Nonpolar and Polar Molecules","2&E"]
act["02F"] = ["Ionic Bonds","2&F"]
act["02G"] = ["Hydrogen Bonds","2&G"]
act["03A"] = ["The Polarity of Water","3&A"]
act["03B"] = ["Cohesion of Water","3&B"]
act["03C"] = ["Dissociation of Water Molecules","3&C"]
act["03D"] = ["Acids, Bases, and pH","3&D"]
act["04A"] = ["Diversity of Carbon-Based Molecules","4&A"]
act["04B"] = ["Isomers","4&B"]
act["04C"] = ["Functional Groups","4&C"]
act["05A"] = ["Making and Breaking Polymers","5&A"]
act["05B"] = ["Models of Glucose","5&B"]
act["05C"] = ["Carbohydrates","5&C"]
act["05D"] = ["Lipids","5&D"]
act["05E"] = ["Protein Functions","5&E"]
act["05F"] = ["Protein Structure","5&F"]
act["05G"] = ["Nucleic Acid Functions","5&G"]
act["05H"] = ["Nucleic Acid Structure","5&H"]
act["06A"] = ["Metric System Review","6&A"]
act["06B"] = ["Prokaryotic Cell Structure and Function","6&B"] // and 27
act["06C"] = ["Build an Animal Cell and a Plant Cell","6&D"]
act["06D"] = ["Role of the Nucleus and Ribosomes in Protein Synthesis","6&E"]
act["06E"] = ["The Endomembrane System","6&F"]
act["06F"] = ["Build a Chloroplast and a Mitochondrion","6&G"]
act["06G"] = ["Cilia and Flagella","6&H"]
act["06H"] = ["Cell Junctions","6&I"]
act["06I"] = ["Review: Animal Cell Structure and Function","6&J"]
act["06J"] = ["Review: Plant Cell Structure and Function","6&K"]
act["07A"] = ["Membrane Structure","7&A"]
act["07B"] = ["Selective Permeability of Membranes","7&B"]
act["07C"] = ["Diffusion","7&C"]
act["07D"] = ["Osmosis and Water Balance in Cells","7&D"]
act["07E"] = ["Facilitated Diffusion","7&E"]
act["07F"] = ["Active Transport","7&F"]
act["07G"] = ["Exocytosis and Endocytosis","7&G"]
act["08A"] = ["Energy Transformations","8&A"]
act["08B"] = ["The Structure of ATP","8&B"]
act["08C"] = ["Chemical Reactions and ATP","8&C"]
act["08D"] = ["How Enzymes Work","8&D"]
act["09A"] = ["Build a Chemical Cycling System ","9&A"]
act["09B"] = ["Overview of Cellular Respiration","9&B"]
act["09C"] = ["Glycolysis","9&C"]
act["09D"] = ["The Citric Acid Cycle","9&D"]
act["09E"] = ["Electron Transport","9&E"]
act["09F"] = ["Fermentation","9&F"]
act["10A"] = ["The Sites of Photosynthesis","10&A"]
act["10B"] = ["Overview of Photosynthesis","10&B"]
act["10C"] = ["Light Energy and Pigments","10&C"]
act["10D"] = ["The Light Reactions","10&D"]
act["10E"] = ["The Calvin Cycle","10&E"]
act["10F"] = ["Photosynthesis in Dry Climates","10&F"]
act["11A"] = ["Overview of Cell Signaling","11&A"] // and 45
act["11B"] = ["Reception","11&B"]
act["11C"] = ["Signal Transduction Pathways","11&C"] // and 18
act["11D"] = ["Cellular Responses","11&D"]
act["11E"] = ["Build a Signaling Pathway","11&E"]
act["12A"] = ["Roles of Cell Division","12&A"]
act["12B"] = ["The Cell Cycle","12&B"]
act["12C"] = ["Mitosis and Cytokinesis Animation","12&C"]
act["12D"] = ["Mitosis and Cytokinesis Video","12&D"]
act["12E"] = ["Causes of Cancer","12&E"]
act["13A"] = ["Asexual and Sexual Life Cycles","13&A"]
act["13B"] = ["Meiosis Animation","13&B"]
act["13C"] = ["Origins of Genetic Variation","13&C"]
act["14A"] = ["Monohybrid Cross","14&A"]
act["14B"] = ["Dihybrid Cross","14&B"]
act["14C"] = ["Gregor's Garden","14&C"]
act["14D"] = ["Incomplete Dominance","14&D"]
act["15A"] = ["Sex-Linked Genes","15&B"]
act["15B"] = ["Linked Genes and Crossing Over","15&A"]
act["15C"] = ["Polyploid Plants","15&C"]
act["16A"] = ["The Hershey-Chase Experiment","16&A"]
act["16B"] = ["DNA and RNA Structure","16&B"]
act["16C"] = ["DNA Double Helix","16&C"]
act["16D"] = ["DNA Replication: An Overview","16&D"]
act["16E"] = ["DNA Replication: A Closer Look","16&E"]
act["16F"] = ["DNA Replication: A Review","16&F"]
act["16G"] = ["DNA Packing","19&A"]
act["17A"] = ["Overview of Protein Synthesis","17&A"]
act["17B"] = ["Transcription","17&B"]
act["17C"] = ["RNA Processing","17&C"]
act["17D"] = ["Translation","17&D"]
act["18A"] = ["The <i>lac</i> Operon in <i>E. coli</i>","18&E"]
act["18B"] = ["Overview: Control of Gene Expression","19&B"]
act["18C"] = ["Control of Transcription","19&C"]
act["18D"] = ["Post-Transcriptional Control Mechanisms","19&D"]
act["18E"] = ["Review: Control of Gene Expression","19&E"]
act["18F"] = ["Role of <i>bicoid</i> Gene in <i>Drosophila</i> Development","21&B"]
act["19A"] = ["Simplified Viral Reproductive Cycle","18&A"]
act["19B"] = ["Phage Lytic Cycle","18&B"]
act["19C"] = ["Phage Lysogenic and Lytic Cycles","18&C"]
act["19D"] = ["Retrovirus (HIV) Reproductive Cycle","18&D"]
act["20A"] = ["Applications of DNA Technology","20&A"]
act["20B"] = ["Restriction Enzymes","20&B"]
act["20C"] = ["Cloning a Gene in Bacteria","20&C"]
act["20D"] = ["Gel Electrophoresis of DNA","20&D"]
act["20E"] = ["Analyzing DNA Fragments Using Gel Electrophoresis","20&E"]
act["20F"] = ["DNA Fingerprinting","20&G"]
act["20G"] = ["Making Decisions About DNA Technology: Golden Rice","20&H"] // and 38
act["21A"] = ["The Human Genome Project: Genes on Human Chromosome 17","20&F"]
act["22A"] = ["Darwin and the Gal&#225;pagos Islands","22&A"]
act["22B"] = ["The Voyage of the <i>Beagle</i>: Darwin's Trip Around the World","22&B"]
act["22C"] = ["Reconstructing Forelimbs","22&C"]
act["23A"] = ["Genetic Variation from Sexual Recombination","23&B"]
act["23B"] = ["Causes of Evolutionary Change","23&A"]
act["24A"] = ["Overview of Macroevolution","24&A"]
act["25A"] = ["A Scrolling Geologic Record","25&A"]
act["25B"] = ["The History of Life","26&A"]
act["25C"] = ["Allometric Growth","24&B"]
act["27A"] = ["Classification of Prokaryotes","27&B"]
act["28A"] = ["Tentative Phylogeny of Eukaryotes","28&A"]
act["29A"] = ["Terrestrial Adaptations of Plants","29&A"]
act["29B"] = ["Highlights of Plant Phylogeny","29&B"]
act["29C"] = ["Moss Life Cycle","29&C"]
act["29D"] = ["Fern Life Cycle","29&D"]
act["30A"] = ["Pine Life Cycle","30&A"]
act["30B"] = ["Angiosperm Life Cycle","30&B"] // and 38
act["31A"] = ["Fungal Reproduction and Nutrition","31&A"]
act["31B"] = ["Fungal Life Cycles","31&B"]
act["32A"] = ["Animal Phylogenetic Tree","32&A"]
act["33A"] = ["Characteristics of Invertebrates","33&A"]
act["34A"] = ["Characteristics of Chordates","34&A"]
act["34B"] = ["Primate Diversity","34&B"]
act["34C"] = ["Human Evolution","34&C"]
act["35A"] = ["Root, Stem, and Leaf Sections","35&A"]
act["35B"] = ["Primary and Secondary Growth","35&B"]
act["36A"] = ["Transport of Xylem Sap","36&A"]
act["36B"] = ["Translocation of Phloem Sap","36&B"]
act["37A"] = ["How Plants Obtain Minerals from Soil","37&A"]
act["37B"] = ["The Nitrogen Cycle","37&B"] // and 55
act["38A"] = ["Seed and Fruit Development","38&B"]
act["39A"] = ["Leaf Abscission","39&A"]
act["39B"] = ["Flowering Lab","39&B"]
act["40A"] = ["Overview of Animal Tissues","40&A"]
act["40B"] = ["Epithelial Tissue","40&B"]
act["40C"] = ["Connective Tissue","40&C"]
act["40D"] = ["Muscle Tissue","40&E"]
act["40E"] = ["Nervous Tissue","40&D"]
act["41A"] = ["Analyzing Food Labels","41&C"]
act["41B"] = ["Case Studies of Nutritional Disorders","41&B"]
act["41C"] = ["Feeding Mechanisms of Animals","41&A"]
act["41D"] = ["Digestive System Function","41&D"]
act["41E"] = ["Hormonal Control of Digestion","41&E"]
act["42A"] = ["Mammalian Cardiovascular System Structure","42&A"]
act["42B"] = ["Path of Blood Flow in Mammals","42&B"]
act["42C"] = ["Mammalian Cardiovascular System Function","42&C"]
act["42D"] = ["The Human Respiratory System","42&D"]
act["42E"] = ["Transport of Respiratory Gases","42&E"]
act["43A"] = ["Immune Responses","43&A"]
act["43B"] = ["HIV Reproductive Cycle","43&B"]
act["44A"] = ["Structure of the Human Excretory System","44&A"]
act["44B"] = ["Nephron Function","44&B"]
act["44C"] = ["Control of Water Reabsorption","44&C"]
act["45A"] = ["Peptide Hormone Action","45&B"]
act["45B"] = ["Steroid Hormone Action","45&C"]
act["45C"] = ["Human Endocrine Glands and Hormones","45&D"]
act["46A"] = ["Reproductive System of the Human Female","46&B"]
act["46B"] = ["Reproductive System of the Human Male","46&A"]
act["47A"] = ["Sea Urchin Development","47&A"]
act["47B"] = ["Frog Development","47&B"]
act["48A"] = ["Neuron Structure","48&A"] // and 49
act["48B"] = ["Nerve Signals: Action Potentials","48&B"] // and 49
act["48C"] = ["Signal Transmission at a Chemical Synapse","48&C"] // and 49
act["50A"] = ["Structure and Function of the Eye","49&A"]
act["50B"] = ["Skeletal Muscle Structure","49&C"]
act["50C"] = ["Muscle Contraction","49&D"]
act["50D"] = ["Human Skeleton","49&B"]
act["51A"] = ["Honeybee Waggle Dance Video","51&A"]
act["52A"] = ["Adaptations to Biotic and Abiotic Factors","50&B"]
act["52B"] = ["Aquatic Biomes","50&C"]
act["52C"] = ["Terrestrial Biomes","50&D"]
act["53A"] = ["Techniques for Estimating Population Density and Size","52&A"]
act["53B"] = ["Investigating Survivorship Curves","52&B"]
act["53C"] = ["Human Population Growth","52&C"]
act["53D"] = ["Analyzing Age-Structure Pyramids","52&D"]
act["54A"] = ["Interspecific Interactions","53&A"]
act["54B"] = ["Food Webs","53&B"]
act["54C"] = ["Primary Succession","53&C"]
act["54D"] = ["Exploring Island Biogeography","53&D"]
act["55A"] = ["Pyramids of Production","54&A"]
act["55B"] = ["The Carbon Cycle","54&C"]
act["55C"] = ["Water Pollution from Nitrates","54&E"]
act["55D"] = ["The Greenhouse Effect","54&F"]
act["56A"] = ["Madagascar and the Biodiversity Crisis","55&A"]
act["56B"] = ["Introduced Species: Fire Ants","55&B"]
act["56C"] = ["Conservation Biology Review","55&C"]

// Investigation Activity Array
var inv = new Array()
inv["01A"] = ["How Do Environmental Changes Affect a Population?","22&A"] // and 22
inv["01B"] = ["How Does Acid Precipitation Affect Trees?","3&A"] // and 03
inv["02A"] = ["How Are Space Rocks Analyzed for Signs of Life?","2&A"]
inv["04A"] = ["What Factors Determine the Effectiveness of Drugs?","4&A"]
inv["06A"] = ["What Is the Size and Scale of Our World?","6&A"]
inv["07A"] = ["How Do Salt Concentrations Affect Cells?","7&A"]
inv["08A"] = ["How Is the Rate of Enzyme Catalysis Measured?","8&A"]
inv["09A"] = ["How Is the Rate of Cellular Respiration Measured?","9&A"]
inv["10A"] = ["How Does Paper Chromatography Separate Plant Pigments?","10&A"]
inv["10B"] = ["How Is the Rate of Photosynthesis Measured?","10&B"]
inv["11A"] = ["How Do Cells Communicate with Each Other?","11&A"]
inv["12A"] = ["How Much Time Do Cells Spend in Each Phase of Mitosis?","12&A"]
inv["13A"] = ["How Can the Frequency of Crossing Over Be Estimated?","13&A"]
inv["14A"] = ["How Do You Diagnose a Genetic Disorder?","14&A"]
inv["15A"] = ["What Can Fruit Flies Reveal About Inheritance?","15&A"]
inv["16A"] = ["What Is the Correct Model for DNA Replication?","16&A"]
inv["17A"] = ["How Is a Metabolic Pathway Analyzed?","17&A"]
inv["18A"] = ["How Do You Design a Gene Expression System?","19&A"]
inv["18B"] = ["How Do <i>bicoid</i> Mutations Alter Development?","21&A"]
inv["19A"] = ["What Causes Infections in AIDS Patients?","43&A"] // and 43
inv["19B"] = ["Why Do AIDS Rates Differ Across the U.S.?","43&B"] // and 43
inv["20A"] = ["How Can Antibiotic-Resistant Plasmids Transform <i>E. coli?</i>","20&A"]
inv["20B"] = ["How Can Gel Electrophoresis Be Used to Analyze DNA?","20&B"]
inv["22A"] = ["What Are the Patterns of Antibiotic Resistance?","22&B"] // and 27
inv["23A"] = ["How Can Frequency of Alleles Be Calculated?","23&A"]
inv["24A"] = ["How Do New Species Arise by Genetic Isolation?","24&A"]
inv["25A"] = ["How Did Life Begin on Early Earth?","26&A"]
inv["26A"] = ["How Is Phylogeny Determined by Comparing Proteins?","25&A"]
inv["27A"] = ["What Are the Modes of Nutrition in Prokaryotes?","27&A"]
inv["28A"] = ["What Kinds of Protists Do Various Habitats Support?","28&A"]
inv["29A"] = ["What Are the Different Stages of a Fern Life Cycle?","29&A"]
inv["30A"] = ["How Are Trees Identified by Their Leaves?","30&A"]
inv["31A"] = ["How Does the Fungus <i>Pilobolus</i> Succeed as a Decomposer?","31&A"]
inv["32A"] = ["How Do Molecular Data Fit Traditional Phylogenies?","32&A"]
inv["33A"] = ["How Are Insect Species Identified?","33&A"]
inv["34A"] = ["How Does Bone Structure Shed Light on the Origin of Birds?","34&A"]
inv["35A"] = ["What Are Functions of Monocot Tissues?","35&A"]
inv["36A"] = ["How Is the Rate of Transpiration Calculated?","36&A"]
inv["37A"] = ["How Does Acid Precipitation Affect Mineral Deficiency?","37&A"]
inv["38A"] = ["What Tells Desert Seeds When to Germinate?","38&A"]
inv["39A"] = ["What Plant Hormones Affect Organ Formation?","39&A"]
inv["40A"] = ["How Does Temperature Affect Metabolic Rate in <i>Daphnia</i>?","40&A"]
inv["41A"] = ["What Role Does Amylase Play in Digestion?","41&A"]
inv["42A"] = ["How Is Cardiovascular Fitness Measured?","42&A"]
inv["44A"] = ["What Affects Urine Production?","44&A"]
inv["45A"] = ["How Do Thyroxine and TSH Affect Metabolism?","45&A"]
inv["46A"] = ["What Might Obstruct the Male Urethra?","46&A"]
inv["47A"] = ["What Determines Cell Differentiation in the Sea Urchin?","47&A"]
inv["48A"] = ["What Triggers Nerve Impulses?","48&A"]
inv["50A"] = ["How Do Electrical Stimuli Affect Muscle Contraction?","49&A"]
inv["51A"] = ["How Can Pillbug Responses to Environments Be Tested?","51&A"]
inv["52A"] = ["How Do Abiotic Factors Affect Distribution of Organisms?","50&A"]
inv["54A"] = ["How Are Impacts on Community Diversity Measured?","53&A"]
inv["55A"] = ["How Do Temperature and Light Affect Primary Production?","54&A"]
inv["56A"] = ["How Are Potential Prairie Restoration Sites Analyzed?","55&A"] // [no quiz associated with this Investigation]

// Video Array
var vid = new Array()
vid["01A"] = ["Soaring Hawk","SoaringHawk-V"]											// and 22, 34, 50
vid["01B"] = ["Albatross Courtship Ritual","AlbatrossCourtship-V"]						// and 22, 24, 51
vid["01C"] = ["Blue-footed Boobies Courtship Ritual","BoobiesCourtship-V"]				// and 22, 24, 51
vid["01D"] = ["Gal&#225;pagos Islands Overview","GalapagosIslands-V"]					// and 22
vid["01E"] = ["Gal&#225;pagos Marine Iguana","MarineIguana-V"]							// and 22, 34
vid["01F"] = ["Gal&#225;pagos Sea Lion","SeaLion-V"]									// and 22, 34, 40
vid["01G"] = ["Gal&#225;pagos Tortoise","Tortoise-V"]									// and 22, 24, 34
vid["01H"] = ["Sea Horses","SeaHorses-V"]												// and 22, 34, 54
vid["06A"] = ["<i>Paramecium</i> Vacuole","ParameciumVacuole-V"]						// and 07, 28, 41
vid["06B"] = ["<i>Chlamydomonas</i>","Chlamydomonas-V"]									// and 07, 28
vid["06C"] = ["<i>Paramecium</i> Cilia","ParameciumCilia-V"]							// and 28, 41
vid["06D"] = ["Cytoplasmic Streaming","CytoplasmicStream-V"]
vid["07A"] = ["Turgid <i>Elodea</i>","TurgidElodea-V"]									// and 36
vid["07B"] = ["Plasmolysis","Plasmolysis-V"]											// and 36
vid["12A"] = ["Animal Mitosis (time-lapse)","AnimalMitosis-V"]
vid["13A"] = ["Hydra Budding","HydraBudding-V"]											// and 33, 46
vid["20A"] = ["Biotechnology Lab","BiotechnologyLab-V"]
vid["22A"] = ["Grand Canyon","GrandCanyon-V"]											// and 25
vid["22B"] = ["Snake Ritual Wrestling","SnakeWrestle-V"]								// and 34, 51
vid["24A"] = ["Giraffe Courtship Ritual","GiraffeCourtship-V"]							// and 51
vid["25A"] = ["Hydrothermal Vent","HydrothermalVent-V"]									// and 52
vid["25B"] = ["Volcanic Eruption","VolcanicEruption-V"]
vid["25C"] = ["Lava Flow","LavaFlow-V"]
vid["27A"] = ["Prokaryotic Flagella","ProkaryoticFlagella-V"]
vid["27B"] = ["Cyanobacteria","Cyanobacteria-V"]										// and 55
vid["27C"] = ["Tubeworms","Tubeworms-V"]												// and 33, 52
vid["28A"] = ["<i>Euglena</i>","Euglena-V"]
vid["28B"] = ["<i>Euglena</i> Motion","EuglenaMotion-V"]
vid["28C"] = ["Dinoflagellate","Dinoflagellate-V"]
vid["28D"] = ["<i>Stentor</i>","Stentor-V"]
vid["28E"] = ["<i>Stentor</i> ciliate movement","StentorCilia-V"]
vid["28F"] = ["<i>Vorticella</i> Cilia","VorticellaCilia-V"]
vid["28G"] = ["<i>Vorticella</i> Detail","VorticellaDetail-V"]
vid["28H"] = ["<i>Vorticella</i> Habitat","VorticellaHabitat-V"]
vid["28I"] = ["Diatoms Moving","DiatomsMoving-V"]
vid["28J"] = ["Various Diatoms","VariousDiatoms-V"]
vid["28K"] = ["Water Mold Oogonium","WaterMoldOogonium-V"]
vid["28L"] = ["Water Mold Zoospores","WaterMoldZoospores-V"]
vid["28M"] = ["<i>Volvox</i> Colony","VolvoxColony-V"]
vid["28N"] = ["<i>Volvox</i> Daughter","VolvoxDaughter-V"]
vid["28O"] = ["<i>Volvox</i> Flagella","VolvoxFlagella-V"]
vid["28P"] = ["Amoeba","Amoeba-V"]
vid["28Q"] = ["Amoeba Pseudopodia","AmoebaPseudopodia-V"]
vid["28R"] = ["Plasmodial Slime Mold Streaming","SlimeMoldStreaming-V"]
vid["28S"] = ["Plasmodial Slime Mold","SlimeMoldZoom-V"]
vid["30A"] = ["Flower Blooming Time Lapse","FlowerTimeLapse-V"]							// and 38
vid["30B"] = ["Time Lapse of Flowering Plant Life Cycle","PlantTimeLapse-V"]			// and 38
vid["30C"] = ["Bee Pollinating","BeePollinating-V"]										// and 33, 38, 51
vid["30D"] = ["Bat Pollinating <i>Agave</i> Plant","BatPollinating-V"]					// and 34, 38
vid["31A"] = ["<i>Phlyctochytrium</i> Zoospore Release","PhlyctochytriumSpore-V"]
vid["31B"] = ["<i>Allomyces</i> Zoospore Release","AllomycesSpore-V"]
vid["33A"] = ["Hydra Eating <i>Daphnia</i> (time-lapse)","HydraEating-V"]				// and 40, 41
vid["33B"] = ["Hydra Releasing Sperm","HydraSperm-V"]									// and 46
vid["33C"] = ["Jelly Swimming","JellySwimming-V"]										// and 50
vid["33D"] = ["Thimble Jellies","ThimbleJellies-V"]										// and 50
vid["33E"] = ["Coral Reef","CoralReef-V"]												// and 34, 50, 52, 56
vid["33F"] = ["Clownfish and Anemone","ClownfishAnemone-V"]								// and 34, 50, 52, 54
vid["33G"] = ["Rotifer","Rotifer-V"]
vid["33H"] = ["Nudibranchs","Nudibranchs-V"]
vid["33I"] = ["Earthworm Locomotion","EarthwormLocomot-V"]								// and 50
vid["33J"] = ["<i>C. elegans</i> Embryo Development (time-lapse)","CElegansEmbryo-V"]	// and 47
vid["33K"] = ["Butterfly Emerging","ButterflyEmerge-V"]
vid["33L"] = ["Lobster Mouth Parts","LobsterMouthParts-V"]								// and 41
vid["33M"] = ["Echinoderm Tube Feet","EchinodermTubeFeet-V"]							// and 50
vid["34A"] = ["Manta Ray","MantaRay-V"]													// and 50
vid["34B"] = ["Swans Taking Flight","SwansTakeFlight-V"]								// and 50, 52
vid["34C"] = ["Flapping Geese","FlappingGeese-V"]										// and 50, 52
vid["34D"] = ["Bat Licking Nectar","BatLicking-V"]
vid["34E"] = ["Shark Eating a Seal","SharkEatSeal-V"]									// and 41, 54
vid["34F"] = ["Wolves Agonistic Behavior","WolvesAgonistic-V"]							// and 51
vid["34G"] = ["Gibbons Brachiating","GibbonBrachiating-V"]								// and 50
vid["34H"] = ["Chimp Agonistic Behavior","ChimpAgonistic-V"]							// and 51
vid["34I"] = ["Chimp Cracking Nut","ChimpCrackNut-V"]									// and 51
vid["35A"] = ["Root Growth in a Radish Seed (time-lapse)","RootGrowth-V"]
vid["39A"] = ["Phototropism","Phototropism-V"]
vid["39B"] = ["Gravitropism","Gravitropism-V"]
vid["39C"] = ["<i>Mimosa</i> Leaf","MimosaLeaf-V"]
vid["43A"] = ["T Cell Receptors","TCellReceptors-V"]
vid["46A"] = ["Ultrasound of Human Fetus 1","UltrasoundOfFetus-V"]						// and 47
vid["46B"] = ["Ultrasound of Human Fetus 2","UltrasoundOfFetus2-V"]						// and 47
vid["47A"] = ["Sea Urchin Embryonic Development","SeaUrchinTimeLapse-V"] 				// and 12
vid["47B"] = ["Frog Embryo Development","FrogDevelop-V"]
vid["51A"] = ["Ducklings","Ducklings-V"]

// GraphIt! Array
var grit = new Array()
grit["intro"] = 		["An Introduction to Graphing"]							// 01
grit["soil"] = 			["Global Soil Degradation"] 							// 37
grit["age"] = 			["Age Pyramids and Population Growth"]					// 53
grit["species"] = 		["Species-Area Effect and Island Biogeography"]			// 54
grit["animal"] = 		["Animal Food Production Efficiency and Food Policy"]	// 55
grit["atmospheric"] =	["Atmospheric CO<sub>2</sub> and Temperature Changes"]	// 55
grit["forestation"] = 	["Forestation Change"]									// 56
grit["fisheries"] = 	["Global Fisheries and Overfishing"]					// 56
grit["municipal"] = 	["Municipal Solid Waste Trends in the U.S."]			// 56
grit["freshwater"] = 	["Global Fresh Water Resources"]						// 56
grit["prospects"] = 	["Prospects for Renewable Energy"]						// 56

// BLOL Array
var blol = new Array()
blol["evolution"] = 	["EvolutionLab"]			// 01, 23, 24
blol["hemoglobin"] = 	["HemoglobinLab"]			// 05, 42
blol["enzyme"] =		["EnzymeLab"]				// 08
blol["mitochondria"] =	["MitochondriaLab"]			// 09
blol["leaf"] =			["LeafLab"]					// 10
blol["pedigree"] = 		["PedigreeLab"]				// 13, 14, 15
blol["fly"] = 			["FlyLab"]					// 14, 15
blol["translation"] = 	["TranslationLab"]			// 17
blol["genetics"] = 		["PopulationGeneticsLab"]	// 23
blol["cardio"] = 		["CardioLab"]				// 42, 48
blol["ecology"] = 		["PopulationEcologyLab"]	// 53, 54
blol["demography"] = 	["DemographyLab"]			// 53

// LabBench Array
var lab = new Array()
lab["diffusion"] = 		["Diffusion & Osmosis","osmosis"]		// 07
lab["enzyme"] =			["Enzyme Catalysis","enzyme"]			// 08
lab["respiration"] =	["Cell Respiration","respiration"]		// 09
lab["photosynthesis"] =	["Photosynthesis","photo"]				// 10
lab["mitosis"] = 		["Mitosis & Meiosis","mitosis"]			// 12, 13
lab["genetics"] = 		["Genetics of Organisms","genetics"]	// 14, 15
lab["molecular"] = 		["Molecular Biology","molecular"]		// 20
lab["animal"] = 		["Animal Behavior","behavior"]			// 51

// BioFlix Array
var flix = new Array()
flix["animal"] = 		["Tour of an Animal Cell","etutors.htm?c8eanimal"]						// 06
flix["plant"] = 		["Tour of a Plant Cell","etutors.htm?c8eplant"]							// 06, 35
flix["respiration"] =	["Cellular Respiration","etutors.htm?c8erespiration"]					// 09
flix["photosynthesis"] =["Photosynthesis","etutors.htm?c8ephotosynthesis"]						// 10
flix["mitosis"] =		["Mitosis - Coming Soon","../code/comingsoon.gif"]						// 12
flix["meiosis"] = 		["Meiosis - Coming Soon","../code/comingsoon.gif"]						// 13
flix["protein"] = 		["Protein Synthesis - Coming Soon","../code/comingsoon.gif"]			// 17
flix["transport"] = 	["Water Transport in Plants - Coming Soon","../code/comingsoon.gif"]	// 36
flix["neurons"] = 		["How Neurons Work - Coming Soon","../code/comingsoon.gif"]				// 48
flix["muscle"] = 		["Muscle Contraction - Coming Soon","../code/comingsoon.gif"]			// 50

// MP3 Tutor Array
var mp3 = new Array()
mp3["properties"] = 	["The Properties of Water","Properties"]											// 03
mp3["protein"] = 		["Protein Structure and Function","Protein"]										// 05
mp3["basic"] =			["Basic Energy Concepts","Basic"]													// 08
mp3["cell1"] =			["Cellular Respiration Part 1 - Glycolysis","Cell1"]								// 09
mp3["cell2"] =			["Cellular Respiration Part 2 - Citric Acid Cycle and Electron Transport","Cell2"]	// 09
mp3["photosynthesis"] =	["Photosynthesis","Photosynthesis"]													// 10
mp3["mitosis"] =		["Mitosis","Mitosis"]																// 12
mp3["meiosis"] =		["Meiosis","Meiosis"]																// 13
mp3["comparison"] = 	["Mitosis-Meiosis Comparison","Compare"]											// 13
mp3["chromosomal"] = 	["Chromosomal Basis of Inheritance","Chromosomal"]									// 14, 15
mp3["dna"] = 			["DNA to RNA to Protein","Central"]													// 17
mp3["control"] = 		["Control of Gene Expression","Regulation"]											// 18
mp3["speciation"] = 	["Speciation","Speciation"]															// 24
mp3["evolution"] =		["Human Evolution","Human"]															// 34
mp3["transpiration"] = 	["Transpiration","Transpiration"]													// 36
mp3["flower"] = 		["From Flower to Fruit","Flower"]													// 38
mp3["digestive"] = 		["The Human Digestive System","Tour"]												// 41
mp3["immune"] = 		["The Human Immune System","Immune"]												// 43
mp3["female"] = 		["The Female Reproductive Cycle","Female"]											// 46
mp3["energy"] = 		["Energy Flow in Ecosystems","Trophic"]												// 55
mp3["global"] = 		["Global Warming","Global"]															// 55

// Discovery Video Array
var disc = new Array()
disc["cells"] = 		["Cells","cells"]									// 06
disc["space"] =			["Space Plants","space_plants"]						// 09
disc["fighting"] = 		["Fighting Cancer","fighting_cancer"]				// 12, 43
disc["novelty"] = 		["Novelty Gene","novelty_gene"]						// 14, 48
disc["emerging"] = 		["Emerging Diseases","emerging_disease"]			// 19
disc["cloning"] = 		["Cloning","cloning"]								// 20
disc["transgenics"] = 	["Transgenics","transgenics"]						// 20
disc["dna"] = 			["DNA Forensics","dna_forensics"]					// 20
disc["darwin"] = 		["Charles Darwin","charles_darwin"]					// 22
disc["early"] = 		["Early Life","early_life"]							// 25
disc["mass"] = 			["Mass Extinction","mass_extinctions"]				// 25
disc["antibiotic"] = 	["Antibiotic Resistance","antibiotics"]				// 27
disc["bacteria"] = 		["Bacteria","bacteria"]								// 27
disc["tasty"] = 		["Tasty Bacteria","tasty_bacteria"]					// 27
disc["fungi"] = 		["Fungi","molds"]									// 31
disc["leafcutter"] = 	["Leafcutter Ants","leafcutter_ants"]				// 31
disc["invertebrates"] = ["Invertebrates","invertebrates"]					// 33
disc["pollination"] = 	["Plant Pollination","plant_pollination"]			// 38
disc["cotton"] = 		["Colored Cotton","colored_cotton"]					// 38
disc["human"] = 		["An Introduction to the Human Body","human_body"]	// 40
disc["nutrition"] = 	["Nutrition","nutrition"]							// 41
disc["blood"] = 		["Blood","blood"]									// 42
disc["vaccines"] = 		["Vaccines","vaccines"]								// 43
disc["endocrine"] = 	["The Endocrine System","endocrine_system"]			// 45
disc["teen"] = 			["Teen Brains","teen_brains"]						// 48
disc["muscles"] = 		["Muscles and Bones","muscles_and_bones"]			// 50
disc["trees"] = 		["Trees","trees"]									// 52
disc["introduced"] =	["Introduced Species","introduced_species"]			// 56
disc["rain"] =			["Rain Forests","rain_forests"]						// 56

/* =========================================
// Global Media Assets
========================================= */
var string_ebk = "menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=800,height=600,screenX=10,screenY=10,left=10,top=10"
var string_act = "menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10"
var string_inv = "menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10"
var string_vid = "menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=620,height=370,screenX=10,screenY=10,left=10,top=10"
var string_grit = "menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=800,height=700,screenX=10,screenY=10,left=10,top=10"//
var string_blol = "menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=800,height=600,screenX=10,screenY=10,left=10,top=10"//
var string_lab = "menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=600,screenX=10,screenY=10,left=10,top=10"//
var string_flix = "menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=1004,height=728,screenX=10,screenY=10,left=10,top=10"//
var string_disc = "menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=1024,height=753,screenX=10,screenY=10,left=10,top=10"//
var string_flashcards = "menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=610,height=600,screenX=10,screenY=10,left=10,top=10"
var string_cumulative = "menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=740,height=520,screenX=10,screenY=10,left=10,top=10"
var string_workbook = "menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=780,height=580,screenX=10,screenY=10,left=10,top=10"

function open_ebk(path) {var win_ebk = window.open(path,"win_ebk",string_ebk); win_ebk.focus()}
function open_act(path) {var win_act = window.open(path,"win_act",string_act); win_act.focus()}
function open_inv(path) {var win_inv = window.open(path,"win_inv",string_inv); win_inv.focus()}
function open_vid(path) {var win_vid = window.open(path,"win_vid",string_vid); win_vid.focus()}
function open_grit(path) {var win_grit = window.open(path,"win_grit",string_grit); win_grit.focus()}
function open_blol(path) {var win_blol = window.open(path,"win_blol",string_blol); win_blol.focus()}
function open_lab(path) {var win_lab = window.open(path,"win_lab",string_lab); win_lab.focus()}
function open_flix(path) {var win_flix = window.open(path,"win_flix",string_flix); win_flix.focus()}
function open_mp3(path) {window.location.href = path; window.event.returnValue = false;}
function open_disc(path) {var win_disc = this.window.open(path,"win_disc",string_disc); win_disc.focus()}
function open_flashcards() {window.open("http://media.pearsoncmg.com/bc/bc_campbell_biology_8/flashcards/index.html","win_flashcards",string_flashcards)}
function open_cumulative() {window.open("http://media.pearsoncmg.com/bc/bc_campbell_biology_8/cumulative/index.html","win_cumulative",string_cumulative)}
function open_workbook() {window.open("http://wps.aw.com/bc_watermanstanley_inquiry","win_workbook",string_workbook)}

/* =========================================
// Chapter Guides - populate links
========================================= */
	// arrayID=0100 (Chapter 1: Introduction: Themes in the Study of Life)
	// substyle=cg
function chapter(arrayID,substyle) {
	var thisArray = ebk[arrayID]
	var prefix = thisArray[1]
	var thisTitle = thisArray[2]
	d.write("<span class='"+substyle+"Chapter'>"+prefix+": "+thisTitle+"</span>")}

	// arrayID=01OV,0101 (*IMG* Overview: Inquiring About the World of Life / *IMG* Concept 1.1: Themes help connect the concepts of biology) 
	// substyle=cg,quiz
function ebook(arrayID,substyle) {
	var thisArray = ebk[arrayID]
	var url = thisArray[0]
	var prefix = thisArray[1]
	var thisTitle = thisArray[2]
	if (thisTitle == "" || substyle == "quiz") {fulltitle = prefix}
	else {fulltitle = prefix+": "+thisTitle}
	//d.write("<span class='"+substyle+"Ebook'><img src='"+ebkImg+"' alt='ebook' border='0' width='16' height='14' align='absmiddle' /> <a href='javascript:void(0)' onclick=\"open_ebk('"+ebkURL+"?"+url+"');\" class='ebklink' title='"+fulltitle+"'>"+fulltitle+"</a></span>")}
	d.write("<span class='"+substyle+"Ebook'><b>"+fulltitle+"</b></span>")}

	// openthis function opens all the media assets
	// openthis calls a feature = act, inv, vid, grit, blol, lab, flix, mp3, disc
	// openthis calls an arrayID which correlates to the specific 'feature' -- window attributes can be added in the Global Media Assets section above
	// openthis calls a substyle = cg, quiz, toc
function openthis(feature,arrayID,substyle) {
	var openCall = "open_"+feature
	switch(feature) {
		case 'act':
			var thisArray = act[arrayID]
			var thisTitle = thisArray[0]
			var thisUrl = "../../../mediaserver/bc/bc_campbell_biology_7/activities/load.html?"+thisArray[1]
			var thisLabel = "Activity"
			var openwindow = "popup"
			break;
		case 'inv':
			var thisArray = inv[arrayID]
			var thisTitle = thisArray[0]
			if (d.title == "Investigations") {
				var thisUrl = "../../mediaserver/bc/bc_campbell_biology_7/interactivemedia/investigations/load.html?"+thisArray[1]
			} else {
				var thisUrl = "../../../mediaserver/bc/bc_campbell_biology_7/interactivemedia/investigations/load.html?"+thisArray[1]
			}
			var thisLabel = "Investigation"
			var openwindow = "popup"
			break;
		case 'vid':
			var thisArray = vid[arrayID]
			var thisTitle = thisArray[0]
			var thisUrl = "../../../mediaserver/bc/bc_campbell_essentials_3/videos/"+thisArray[1]+".html"
			var thisLabel = "Video"
			var openwindow = "popup"
			break;
		case 'grit':
			var thisArray = grit[arrayID]
			var thisTitle = thisArray[0]
			if (d.title == "GraphIt!") {
				var thisUrl = "../../mediaserver/bc/bc_campbell_biology_7/interactivemedia/graphit/"+arrayID+".html"
			} else {
				var thisUrl = "../../../mediaserver/bc/bc_campbell_biology_7/interactivemedia/graphit/"+arrayID+".html"
			}
			var thisLabel = "GraphIt!"
			var openwindow = "popup"
			break;
		case 'blol':
			var thisArray = blol[arrayID]
			var thisTitle = thisArray[0]
			var thisUrl = "../../placeholders/CWblol.html"
			var thisLabel = "Biology Labs On-Line"
			var openwindow = "content"
			break;
		case 'lab':
			var thisArray = lab[arrayID]
			var thisTitle = thisArray[0]
			var thisUrl = "../../../mediaserver/bc/bc_campbell_biology_8/labbench/learning/"+thisArray[1]+"/intro.html"
			var thisLabel = "LabBench"
			var openwindow = "content"
			break;
		case 'flix':
			var thisArray = flix[arrayID]
			var thisTitle = thisArray[0]
			var thisUrl = "../../placeholders/CWbioflix.html"
			var thisLabel = "BioFlix"
			var openwindow = "content"
			break;
		case 'mp3':
			var thisArray = mp3[arrayID]
			var thisTitle = thisArray[0]
			var thisUrl = "../../placeholders/CWmp3tutors.html"
			var thisLabel = "MP3 Tutor"
			var openwindow = "content"
			break;
		case 'disc':
			var thisArray = disc[arrayID]
			var thisTitle = thisArray[0]
			var thisUrl = "../../placeholders/CWdiscoveryvideos.html"
			var thisLabel = "Discovery Video"
			var openwindow = "content"
			break;
	}
	// open in either the content page or as a popup
	// if opening in a content page, then use A HREF
	// but if not opening in a content page (i.e. popup), then use ONCLICK
	if (openwindow == "content") {
		if (((feature == "grit") && (arrayID == "intro") && (substyle == "toc")) ||
			((feature == "inv") && (arrayID == "01A") && (substyle == "toc")))
		{
			d.write("<span class='"+substyle+"List'><a href='"+thisUrl+"' class='toclink' id='firstCell' title='"+thisLabel+": "+thisTitle+"'>"+thisTitle+"</a></span>")
		}
		else if (substyle == "toc")
		{
			d.write("<span class='"+substyle+"List'><a href='"+thisUrl+"' class='toclink' title='"+thisLabel+": "+thisTitle+"'>"+thisTitle+"</a></span>")
		}
		else
		{
			d.write("<span class='"+substyle+"List'><a href='"+thisUrl+"' class='normlink' title='"+thisLabel+": "+thisTitle+"'>"+thisLabel+": "+thisTitle+"</a></span>")
		}
	} else {
		if (((feature == "grit") && (arrayID == "intro") && (substyle == "toc")) ||
			((feature == "inv") && (arrayID == "01A") && (substyle == "toc")))
		{
			d.write("<span class='"+substyle+"List'><a href='javascript:void(0)' onclick='"+openCall+"(\""+thisUrl+"\")' class='toclink' id='firstCell' title='"+thisLabel+": "+thisTitle+"'>"+thisTitle+"</a></span>")
		}
		else if (substyle == "toc")
		{
			d.write("<span class='"+substyle+"List'><a href='javascript:void(0)' onclick='"+openCall+"(\""+thisUrl+"\")' class='toclink' title='"+thisLabel+": "+thisTitle+"'>"+thisTitle+"</a></span>")
		}
		else
		{
			d.write("<span class='"+substyle+"List'><a href='javascript:void(0)' onclick='"+openCall+"(\""+thisUrl+"\")' class='normlink' title='"+thisLabel+": "+thisTitle+"'>"+thisLabel+": "+thisTitle+"</a></span>")
		}
	}
}


/* =========================================
// Chapter Review - populate text/links
========================================= */
// Chapter Review Array
var chaprev = new Array()	// Activities Quiz | Practice Test
chaprev["01"] = ["334003","334020"]
chaprev["02"] = ["334053","334073"]
chaprev["03"] = ["334113","334133"]
chaprev["04"] = ["334176","334202"]
chaprev["05"] = ["334236","334262"]
chaprev["06"] = ["334312","334337"]
chaprev["07"] = ["334385","334407"]
chaprev["08"] = ["334447","334473"]
chaprev["09"] = ["334521","334547"]
chaprev["10"] = ["334597","334617"]
chaprev["11"] = ["334655","334681"]
chaprev["12"] = ["334721","334741"]
chaprev["13"] = ["334784","334808"]
chaprev["14"] = ["334857","334883"]
chaprev["15"] = ["334930","334956"]
chaprev["16"] = ["335000","335030"]
chaprev["17"] = ["335076","335097"]
chaprev["18"] = ["335146","335189"]
chaprev["19"] = ["335229","335248"]
chaprev["20"] = ["335281","335297"]
chaprev["21"] = ["335338","335349"]
chaprev["22"] = ["335386","335402"]
chaprev["23"] = ["335435","335451"]
chaprev["24"] = ["335490","335496"]
chaprev["25"] = ["335529","335553"]
chaprev["26"] = ["335586","335592"]
chaprev["27"] = ["335625","335641"]
chaprev["28"] = ["335678","335694"]
chaprev["29"] = ["335729","335745"]
chaprev["30"] = ["335785","335801"]
chaprev["31"] = ["335837","335853"]
chaprev["32"] = ["335886","335897"]
chaprev["33"] = ["335925","335941"]
chaprev["34"] = ["335982","335994"]
chaprev["35"] = ["336028","336044"]
chaprev["36"] = ["336090","336106"]
chaprev["37"] = ["336144","336160"]
chaprev["38"] = ["336193","336205"]
chaprev["39"] = ["336239","336252"]
chaprev["40"] = ["336290","336306"]
chaprev["41"] = ["336356","336372"]
chaprev["42"] = ["336417","336433"]
chaprev["43"] = ["336479","336495"]
chaprev["44"] = ["336537","336553"]
chaprev["45"] = ["336590","336606"]
chaprev["46"] = ["336649","336665"]
chaprev["47"] = ["336710","336726"]
chaprev["48"] = ["336759","336775"]
chaprev["49"] = ["336808","336819"]
chaprev["50"] = ["336854","336870"]
chaprev["51"] = ["336908","336912"]
chaprev["52"] = ["336945","336961"]
chaprev["53"] = ["336997","337012"]
chaprev["54"] = ["337053","337069"]
chaprev["55"] = ["337096","337112"]
chaprev["56"] = ["337153","337169"]

function populateChapRev(arrayID) {
	var arrayChapRev = chaprev[arrayID]
	d.write("<div class='cgChapRev'>")
	d.write("<b>Chapter Review</b><br />")
	d.write("<div class='crList'>")
	d.write("The <a href='../../placeholders/CWselfquiz_global.html' class='boldlink' title='Chapter "+arrayID+" Self-Quiz'>Self-Quiz</a> ")
	d.write("includes multiple-choice questions from the end of the textbook chapter.")
	d.write("</div>")
	d.write("<div class='crList'>")	
	d.write("The <a href='../../"+arrayChapRev[0]+".cw/content/index.html' class='boldlink' title='Chapter "+arrayID+" Activities Quiz'>Activities Quiz</a> ")
	d.write("will test your knowledge of the content in the Activities above.")
	d.write("</div>")
	d.write("<div class='crList'>")
	d.write("The <a href='../../"+arrayChapRev[1]+".cw/content/index.html' class='boldlink' title='Chapter "+arrayID+" Practice Test'>Practice Test</a> ")
	d.write("will test your knowledge of the content in the textbook chapter.")
	d.write("</div><br />")
	d.write("<b>Word Study Tools</b><br />")
	d.write("<div class='crList'><a href='../../placeholders/_wordroots.html?http%3A%2F%2Fmedia.pearsoncmg.com%2Fbc%2Fbc_campbell_biology_8%2Fwordroots%2F"+arrayID+".html' class='normlink' title='Word Roots'>Word Roots</a></div>")
	d.write("<div class='crList'><a href='../../placeholders/_keyterms.html?http%3A%2F%2Fmedia.pearsoncmg.com%2Fbc%2Fbc_campbell_biology_8%2Fkeyterms%2F"+arrayID+".html' class='normlink' title='Key Terms'>Key Terms</a></div>")
	d.write("<div class='crList'><a href='../../placeholders/_flashcards.html' class='normlink' title='Flashcards'>Flashcards</a></div><br />")
	d.write("<a href='../../placeholders/CWart_global.html' class='boldlink' title='Art'>Art</a><br /><br />")
	d.write("<a href='../../placeholders/_apweblinks.html' class='boldlink' title='AP Biology Web Links'>AP Biology Web Links</a>")
	d.write("</div>")
}

/* =========================================
// Embedded Files for Quizzes
========================================= */
function open_embed(path) {
	var string_embed = "menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=350,height=350,screenX=10,screenY=10,left=10,top=10"
	var win_embed = window.open(path,"win_embed",string_embed); win_embed.focus()
}

/* =========================================
// Cell Biology Videos
========================================= */
function open_cellbio(path) {
	var thisUrl = "../../mediaserver/bc/bc_campbell_biology_8/cellbiovideos/"+path+".html"
	var string_cellbio = "menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=640,height=390,screenX=10,screenY=10,left=10,top=10"
	var win_cellbio = window.open(thisUrl,"win_cellbio",string_cellbio); win_cellbio.focus()
}

/* =========================================
// Campbell Interviews
========================================= */
function campbellInterview(person) {
	d.write("<div class='itvWith'>AN INTERVIEW WITH</div>")
	d.write("<div class='itvPerson'>"+person+"</div>")
}

/* =========================================
// FAQs (code by Dario Wong)
========================================= */
// check whether a list/menu item is in the collapsed or expanded mode
function faqsSwitch(question,answer) {
	var questionElement = d.getElementById(question) // the question clicked.
	var answerStyle = d.getElementById(answer).style // the style of the answer for the question clicked
	
	if (answerStyle.display == "none") { // if the list/menu item clicked is currently in collapsed mode...
		expandFAQsMenu(questionElement,answerStyle) // ...then expand it
	} else {
		collapseFAQsMenu(questionElement,answerStyle) // otherwise, collapse it
	}
}
	
var collapseText = "Click to hide the answer"
var expandText = "Click to display the answer"

// expands the list/menu item clicked and changes the '+' sign to the '-' sign; also changes the title text of the '-' sign
function expandFAQsMenu(questionElement,answerStyle) {
	questionElement.title = collapseText
	answerStyle.display = "block"
}

// collapses the list/menu item clicked and changes the '-' sign to the '+' sign; also changes the title text of the '+' sign
function collapseFAQsMenu(questionElement,answerStyle) {
	questionElement.title = expandText
	answerStyle.display = "none"
}

/* =========================================
// Legal - End User License Agreement
========================================= */
function open_legal() {window.open("../../../End_User_License_Agreement/eula.html","win_legal","menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1,width=600,height=600,screenX=10,screenY=10,left=10,top=10")}

/* =========================================
// Swap Images
========================================= */
function MM_swapImgRestore() { //v3.0
	var i,x,a=document.MM_sr;
	for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
	var d=document;
	if(d.images) {
		if(!d.MM_p) d.MM_p=new Array();
		var i,j=d.MM_p.length,a=MM_preloadImages.arguments;
		for(i=0; i<a.length; i++)
		if (a[i].indexOf("#")!=0) {d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}
	}
}

function MM_findObj(n, d) { //v4.01
	var p,i,x;
	if(!d) d=document;
	if((p=n.indexOf("?"))>0&&parent.frames.length) {d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
	if(!(x=d[n])&&d.all) x=d.all[n];
	for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
	for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
	if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
	var i,j=0,x,a=MM_swapImage.arguments;
	document.MM_sr=new Array;
	for(i=0;i<(a.length-2);i+=3)
	if ((x=MM_findObj(a[i]))!=null) {document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

/* =========================================
// This JS file is for the AP CD of c8e that links to:
// http://wps.aw.com/bc_campbell_biology_8ap

// There are separate JS files for each project!
// (WebDevr Linda Young, 2007)
========================================= */
