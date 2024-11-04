
  function InitializeAnswerKey(ak) {
    var p = null;
    ak.sitetitle = " Campbell Biology";
    ak.booktitle = " Biology, Seventh Edition";
    ak.author = " Campbell, Reece";
    ak.quizlocation = " Graph It!&nbsp;&#62;&nbsp;Assignment";
    ak.section = " Assignment";
    ak.chapter = 0;
    ak.book = " Biology, Seventh Edition";

    // right now only works for MC and fill-ins
     
      p = new Problem("truefalse");
      p.id = 2750996;
      
        p.question = "This data suggests that the U.S. Clean Air Act of 1970 was ineffective in the reduction of carbon monoxide pollution.";
        p.addAnswer(1,"True", false ,
                    "");
        p.addAnswer(2,"False", ! false ,
                    "The sharp decline in CO emissions since 1970 suggests that the U.S. Clean Air Act of 1970 was very effective in the reduction of carbon monoxide pollution.");
       ak.addProblem(p);


  
      p = new Problem("truefalse");
      p.id = 2750997;
      
        p.question = "The fact that lead emissions are so much lower than carbon monoxide emissions suggests that lead is not really an important pollutant.";
        p.addAnswer(1,"True", false ,
                    "");
        p.addAnswer(2,"False", ! false ,
                    "Some substances can have strong physiological effects even at low concentrations. Lead is, in fact, a very significant pollutant.  ");
       ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2750998;
      
        p.question = "What was the impact of removing lead from gasoline in the 1980s?";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "This action had little or no impact on lead emissions.",
                      false, null);
        
         p.addAnswer(2, "It is not possible to determine the impact because there are no data for 1940.",
                      false, null);
        
         p.addAnswer(3, "Lead emissions decreased only slightly.",
                      false, null);
        
         p.addAnswer(4, "There was a greater than fourfold decrease in lead emissions.",
                      true, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2750999;
      
        p.question = "Which pollutant has generally increased in emissions over the span of this data set?";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "particulates",
                      false, null);
        
         p.addAnswer(2, "carbon monoxide",
                      false, null);
        
         p.addAnswer(3, "SO<sub>2</sub>",
                      false, null);
        
         p.addAnswer(4, "volatile organic compounds",
                      false, null);
        
         p.addAnswer(5, "NO<sub>2</sub>",
                      true, null);
        
         p.addAnswer(6, "lead",
                      false, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2751000;
      
        p.question = "Imagine that new studies indicate that decreasing NO<sub>2</sub> levels should be a top priority.  What pollution source should be the focus of emission reduction programs?";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "automobiles",
                      false, null);
        
         p.addAnswer(2, "garden equipment",
                      false, null);
        
         p.addAnswer(3, "industrial emissions",
                      false, null);
        
         p.addAnswer(4, "electric generation",
                      false, null);
        
         p.addAnswer(5, "a balanced focus on automobiles, industry, and electric generation",
                      true, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2751001;
      
        p.question = "Which of the following control programs is most likely responsible for the decrease in SO<sub>2</sub> and volatile organic compounds since 1970?";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "increased fuel efficiency of automobiles",
                      false, null);
        
         p.addAnswer(2, "increased use of electric garden equipment",
                      false, null);
        
         p.addAnswer(3, "reductions in industrial and electric generation emissions",
                      true, null);
        
         p.addAnswer(4, "smoke-stack scrubbers to remove soot from coal plants",
                      false, null);
          ak.addProblem(p);


   } // end function InitializeAnswerKey

  function SupportEmailReporter () {
    return true;
  }

  function GradeSenderLocation () {
    
       return "http://wpslive.pearsoncmg.com/WPS_CDROM_Grade_Sender";
     }


