
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
      p.id = 2757619;
      
        p.question = "By how much would solar have to grow to match the current level of hydroelectric power?";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "about 2 times",
                      false, null);
        
         p.addAnswer(2, "about 10 times",
                      false, null);
        
         p.addAnswer(3, "about 50 times",
                      true, null);
        
         p.addAnswer(4, "about 100 times",
                      false, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2757620;
      
        p.question = "Which renewable energy source experienced a 32% annual rate of growth from 1970 to 2000?";
        p.explanationincorrect = "What does the y-axis represent?";
         
         p.addAnswer(1, "geothermal",
                      false, null);
        
         p.addAnswer(2, "solar",
                      true, null);
        
         p.addAnswer(3, "wind",
                      false, null);
        
         p.addAnswer(4, "tide",
                      false, null);
        
         p.addAnswer(5, "none of them",
                      false, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2757621;
      
        p.question = "Wind currently represents 0.02% of all energy sources.  If the current rate of growth maintains, what proportion will it represent in two years?";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "20%",
                      false, null);
        
         p.addAnswer(2, "4%",
                      false, null);
        
         p.addAnswer(3, ".045%",
                      true, null);
        
         p.addAnswer(4, ".02%",
                      false, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2757622;
      
        p.question = "Do you expect these rates to be higher or lower over the next 30-year period (2000 to 2030)?";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "These growth rates are relative to small absolute numbers.  They will most likely decrease as the total contribution by renewables increases.",
                      true, null);
        
         p.addAnswer(2, "These growth rates will likely stay the same or grow as interest in renewables increases.",
                      false, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2757623;
      
        p.question = "Which projection has nonrenewables at less than 50% by 2050?";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "projection 1",
                      false, null);
        
         p.addAnswer(2, "projection 2",
                      false, null);
        
         p.addAnswer(3, "both projections",
                      false, null);
        
         p.addAnswer(4, "neither projection",
                      true, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2757624;
      
        p.question = "Assume depletion of nonrenewables requires renewables (excluding combustibles and waste) to account for more than 30% by 2040.  What growth rates of renewables must be achieved and by when?";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "Current growth rates are sufficient to meet this goal.",
                      false, null);
        
         p.addAnswer(2, "more than 5% annual growth rate by 2025",
                      false, null);
        
         p.addAnswer(3, "more than 15% annual growth rate by 2025",
                      false, null);
        
         p.addAnswer(4, "more than 15% growth rate starting immediately",
                      true, null);
          ak.addProblem(p);


   } // end function InitializeAnswerKey

  function SupportEmailReporter () {
    return true;
  }

  function GradeSenderLocation () {
    
       return "http://wpslive.pearsoncmg.com/WPS_CDROM_Grade_Sender";
     }


