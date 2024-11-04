
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
      p.id = 2757626;
      
        p.question = "What general trend is indicated by the graph of total MSW generation?";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "accelerating generation of MSW",
                      false, null);
        
         p.addAnswer(2, "constant increase in MSW generation",
                      true, null);
        
         p.addAnswer(3, "stable generation of MSW",
                      false, null);
        
         p.addAnswer(4, "constant decline in MSW generation",
                      false, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2757627;
      
        p.question = "By how much has total MSW generation changed since 1960?";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "It has been cut in half.",
                      false, null);
        
         p.addAnswer(2, "The net change is zero.",
                      false, null);
        
         p.addAnswer(3, "It has increased more than two times.",
                      true, null);
        
         p.addAnswer(4, "It has increased more than ten times.",
                      false, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2757628;
      
        p.question = "Which of the following represents the best statement regarding this graph?";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "Total MSW generation has increased in spite of a decrease in per capita generation.",
                      false, null);
        
         p.addAnswer(2, "Growth in per capita MSW generation accounts for all growth in total generation.",
                      false, null);
        
         p.addAnswer(3, "Growth in total MSW generation is most likely due to population increases rather than per capita generation increases.",
                      false, null);
        
         p.addAnswer(4, "Both total and per capita MSW generation grew steadily through 1990, while per capita generation seems to have recently stabilized.",
                      true, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2757629;
      
        p.question = "Assume that per capita MSW generation had grown between 1990 and 2000 at roughly the same rate as in previous years.  How would that have affected the total MSW curve?";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "Growth in total MSW generation would be unaffected between 1990 and 2000.",
                      false, null);
        
         p.addAnswer(2, "Growth in total MSW generation would be smaller between 1990 and 2000.",
                      false, null);
        
         p.addAnswer(3, "Growth in total MSW generation would be greater between 1990 and 2000.",
                      true, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2757630;
      
        p.question = "Which form of MSW management experienced the greatest growth between 1960 and 2000?";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "landfill",
                      false, null);
        
         p.addAnswer(2, "combustion",
                      false, null);
        
         p.addAnswer(3, "recovery for recycling",
                      false, null);
        
         p.addAnswer(4, "recovery for composting",
                      true, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2757631;
      
        p.question = "Assuming the trends indicated by the graph continue, when will there no longer be a need for new sanitary landfills in the United States.?";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "starting now",
                      false, null);
        
         p.addAnswer(2, "within 10 years",
                      false, null);
        
         p.addAnswer(3, "within 50 years",
                      false, null);
        
         p.addAnswer(4, "not for the foreseeable future",
                      true, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2757632;
      
        p.question = "Which of the following future trends would result in dominance of recycling as a MSW management strategy?";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "continued growth in tonnage going to recycling",
                      false, null);
        
         p.addAnswer(2, "slowing and stabilizing of total MSW generation",
                      false, null);
        
         p.addAnswer(3, "landfill and combustion maintaining current percentages",
                      false, null);
        
         p.addAnswer(4, "a combination of the first and second choices",
                      true, null);
        
         p.addAnswer(5, "a combination of the second and third choices",
                      false, null);
          ak.addProblem(p);


   } // end function InitializeAnswerKey

  function SupportEmailReporter () {
    return true;
  }

  function GradeSenderLocation () {
    
       return "http://wpslive.pearsoncmg.com/WPS_CDROM_Grade_Sender";
     }


