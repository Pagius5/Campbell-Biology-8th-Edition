
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
     
      p = new Problem("multiplechoice");
      p.id = 2751028;
      
        p.question = "Which of the following statements best describes the trend in the species versus island area data?";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "There is a decreasing trend in species number as island size increases.\n",
                      false, null);
        
         p.addAnswer(2, "The number of species on an island increases by roughly 30 for every 5000-square-mile increase in land area.\n",
                      false, null);
        
         p.addAnswer(3, "The increase in number of species with increasing land area slows for larger islands, suggesting that there may be a maximum number of species an island can hold regardless of size.",
                      true, null);
        
         p.addAnswer(4, "There is no detectable influence of island size on number of species.",
                      false, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2751029;
      
        p.question = "Roughly five orders of magnitude separate the smallest and largest islands on the log plot.  How many orders of magnitude separate them on the standard plot?";
        p.explanationincorrect = "Try again.";
         
         p.addAnswer(1, "1",
                      false, null);
        
         p.addAnswer(2, "2",
                      false, null);
        
         p.addAnswer(3, "5",
                      true, null);
        
         p.addAnswer(4, "10",
                      false, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2751030;
      
        p.question = "If another island were present in the Caribbean that was about 1000 square miles in size, how many species of amphibians and reptiles would you expect to find on it?  Choose the most likely number from the options below.";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "5",
                      false, null);
        
         p.addAnswer(2, "9",
                      false, null);
        
         p.addAnswer(3, "19",
                      true, null);
        
         p.addAnswer(4, "90",
                      false, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2751031;
      
        p.question = "Adjust the immigration rate curve so that its maximum value (on the Y-axis) is 4.  Adjust the extinction curve so that its maximum is 2.  Choose the number below that is closest to the predicted number of species on this island.";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "25",
                      false, null);
        
         p.addAnswer(2, "40",
                      false, null);
        
         p.addAnswer(3, "50",
                      false, null);
        
         p.addAnswer(4, "60",
                      true, null);
        
         p.addAnswer(5, "75",
                      false, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2751032;
      
        p.question = "Imagine a chain of islands of the same size that are at increasing distances from a mainland.  The immigration rate should be highest for islands close to the mainland because they should receive the most colonizers.  The extinction rate should be the same for all these islands.  \n\nUse the equilibrium model of island biogeography to predict how the number of species on an island changes with distance from a mainland.  Select the statement below that best represents your prediction.";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "The number of species increases as island size increases.",
                      false, null);
        
         p.addAnswer(2, "The number of species increases with distance from the mainland.",
                      false, null);
        
         p.addAnswer(3, "The number of species decreases with distance from the mainland.",
                      true, null);
        
         p.addAnswer(4, "Immigration and extinction rates balance out so that there is no change in species number with distance from the mainland.",
                      false, null);
          ak.addProblem(p);


   } // end function InitializeAnswerKey

  function SupportEmailReporter () {
    return true;
  }

  function GradeSenderLocation () {
    
       return "http://wpslive.pearsoncmg.com/WPS_CDROM_Grade_Sender";
     }


