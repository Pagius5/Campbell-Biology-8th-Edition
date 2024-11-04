
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
      p.id = 2751020;
      
        p.question = "Which continent has more than 12,000 cubic kilometers of water available per year?";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "Europe",
                      false, null);
        
         p.addAnswer(2, "North America",
                      false, null);
        
         p.addAnswer(3, "Africa",
                      false, null);
        
         p.addAnswer(4, "Asia",
                      true, null);
        
         p.addAnswer(5, "South America",
                      false, null);
        
         p.addAnswer(6, "Australia",
                      false, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2751021;
      
        p.question = "Africa is much larger than Europe.  Why doesn\'t it have much more fresh water?";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "Its population is greater.",
                      false, null);
        
         p.addAnswer(2, "Much of its land area is covered with desert.",
                      true, null);
        
         p.addAnswer(3, "The equator crosses it.",
                      false, null);
        
         p.addAnswer(4, "War and conflict have restricted access to water.",
                      false, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2751022;
      
        p.question = "Which continent has the highest ratio of available fresh water to population size?";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "Europe",
                      false, null);
        
         p.addAnswer(2, "North America",
                      false, null);
        
         p.addAnswer(3, "Africa",
                      false, null);
        
         p.addAnswer(4, "Asia",
                      false, null);
        
         p.addAnswer(5, "South America",
                      false, null);
        
         p.addAnswer(6, "Australia",
                      true, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2751023;
      
        p.question = "Which continents currently have sufficient water to meet the needs of their populations?";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "North America, Asia, and South America",
                      false, null);
        
         p.addAnswer(2, "North America, South America, Africa, and Australia",
                      true, null);
        
         p.addAnswer(3, "Europe, Africa, and Australia",
                      false, null);
        
         p.addAnswer(4, "Europe, Africa, and Asia",
                      false, null);
          ak.addProblem(p);


  
      p = new Problem("truefalse");
      p.id = 2751024;
      
        p.question = "Fresh water available per capita should remain stable over the next 50 years.";
        p.addAnswer(1,"True", false ,
                    "Since population will increase over the next 50 years, the per capita availability of fresh water is expected to decrease.");
        p.addAnswer(2,"False", ! false ,
                    "");
       ak.addProblem(p);


  
      p = new Problem("truefalse");
      p.id = 2751025;
      
        p.question = "Asia has abundant water resources, but its high population size is causing water shortages.";
        p.addAnswer(1,"True", true ,
                    "");
        p.addAnswer(2,"False", ! true ,
                    "The statement is a correct interpretation of this graph.");
       ak.addProblem(p);


  
      p = new Problem("truefalse");
      p.id = 2751026;
      
        p.question = "If some of Australia\'s water resources could be diverted to Asia, it would eliminate Asia\'s water shortages.";
        p.addAnswer(1,"True", false ,
                    "The total water available in Australia is only a small fraction of the total water for Asia.");
        p.addAnswer(2,"False", ! false ,
                    "");
       ak.addProblem(p);


   } // end function InitializeAnswerKey

  function SupportEmailReporter () {
    return true;
  }

  function GradeSenderLocation () {
    
       return "http://wpslive.pearsoncmg.com/WPS_CDROM_Grade_Sender";
     }


