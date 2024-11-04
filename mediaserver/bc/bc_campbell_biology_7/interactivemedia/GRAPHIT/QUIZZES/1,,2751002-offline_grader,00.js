
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
      p.id = 2751003;
      
        p.question = "Which of the following is the best statement regarding the graph of atmospheric CO<sub>2</sub> concentrations?";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "There has been negligible change in atmospheric CO<sub>2</sub> concentrations over the past 50 years.",
                      false, null);
        
         p.addAnswer(2, "Atmospheric CO<sub>2</sub> concentrations have increased by more than 10% over the past 50 years.",
                      true, null);
        
         p.addAnswer(3, "Atmospheric CO<sub>2</sub> concentrations have increased by more than 100% over the past 50 years.",
                      false, null);
        
         p.addAnswer(4, "There has been a catastrophic increase in atmospheric CO<sub>2</sub> concentrations over the past 50 years.",
                      false, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2751004;
      
        p.question = "Which of the following is the best statement regarding the graph of atmospheric CO<sub>2</sub> and surface temperature changes over the past 50 years?";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "This data set represents the strongest evidence available for anthropogenic global warming.",
                      false, null);
        
         p.addAnswer(2, "The data demonstrates that, in spite of increases in CO<sub>2</sub> concentrations, there has only been a minimal rise in average surface temperatures.",
                      false, null);
        
         p.addAnswer(3, "This data set is meaningless because CO<sub>2</sub> concentrations and surface temperatures are constantly fluctuating over geologic time scales.",
                      false, null);
        
         p.addAnswer(4, "This data is consistent with the hypothesis that increased atmospheric concentrations of CO<sub>2</sub> may be causing an increase in average surface temperatures.",
                      true, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2751005;
      
        p.question = "Assume that you wanted to give the impression that, although CO<sub>2</sub> levels have indeed increased over the past 50 years, they have not had a significant impact on average surface temperatures.  Which of the scales shown in Step 3 would be the best choice?";
        p.explanationincorrect = "Try all the suggested scale changes.  Which gives the impression stated in the question?";
         
         p.addAnswer(1, "scale 1",
                      false, null);
        
         p.addAnswer(2, "scale 2",
                      false, null);
        
         p.addAnswer(3, "scale 3",
                      true, null);
        
         p.addAnswer(4, "scale 4",
                      false, null);
        
         p.addAnswer(5, "none of the available scales",
                      false, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2751006;
      
        p.question = "For which of the scales shown in Step 3 is the increase in CO<sub>2</sub> concentrations less than 10%?";
        p.explanationincorrect = "The numerical relationships in a set of data do not change regardless of the scales used for a graph of the data.";
         
         p.addAnswer(1, "scale 1",
                      false, null);
        
         p.addAnswer(2, "scale 2",
                      false, null);
        
         p.addAnswer(3, "scale 3",
                      false, null);
        
         p.addAnswer(4, "scale 4",
                      false, null);
        
         p.addAnswer(5, "all of the scales",
                      false, null);
        
         p.addAnswer(6, "none of the scales",
                      true, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2751007;
      
        p.question = "Choose the list of predicted trajectories for CO<sub>2</sub> concentration that matches them in order with the aggressive, moderate, and minimal control scenarios.";
        p.explanationincorrect = "Sorry, that\'s not correct.";
         
         p.addAnswer(1, "A, B, C",
                      false, null);
        
         p.addAnswer(2, "C, A, B",
                      false, null);
        
         p.addAnswer(3, "C, B, A",
                      true, null);
        
         p.addAnswer(4, "B, A, C",
                      false, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2751008;
      
        p.question = "Assuming that increasing CO<sub>2</sub> concentrations are directly linked to increased surface temperatures, which scenario should result in a reduction of temperatures to below their 1960--1990 averages by 2040?";
        p.explanationincorrect = "Sorry, that\'s not correct.";
         
         p.addAnswer(1, "aggressive control",
                      false, null);
        
         p.addAnswer(2, "moderate control",
                      false, null);
        
         p.addAnswer(3, "minimal control",
                      false, null);
        
         p.addAnswer(4, "all of the scenarios",
                      false, null);
        
         p.addAnswer(5, "none of the scenarios",
                      true, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2751009;
      
        p.question = "Which of the following arguments could be made for NOT adopting an aggressive control strategy worldwide?";
        p.explanationincorrect = "Sorry, that\'s not correct.";
         
         p.addAnswer(1, "The economic costs would be too high.",
                      false, null);
        
         p.addAnswer(2, "It would limit the ability of developing nations to achieve the standard of living already enjoyed by developed nations.",
                      false, null);
        
         p.addAnswer(3, "It is impossible to predict the future, and therefore we cannot know the actual impact of global climate changes.",
                      false, null);
        
         p.addAnswer(4, "None of the above.",
                      false, null);
        
         p.addAnswer(5, "All of the above.",
                      true, null);
          ak.addProblem(p);


   } // end function InitializeAnswerKey

  function SupportEmailReporter () {
    return true;
  }

  function GradeSenderLocation () {
    
       return "http://wpslive.pearsoncmg.com/WPS_CDROM_Grade_Sender";
     }


