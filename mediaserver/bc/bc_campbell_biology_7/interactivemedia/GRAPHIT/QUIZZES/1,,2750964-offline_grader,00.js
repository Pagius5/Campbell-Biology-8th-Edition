
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
      p.id = 2750965;
      
        p.question = "The population of Greece is currently _______.";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "expanding",
                      false, null);
        
         p.addAnswer(2, "stable",
                      false, null);
        
         p.addAnswer(3, "declining",
                      true, null);
          ak.addProblem(p);


  
      p = new Problem("truefalse");
      p.id = 2750966;
      
        p.question = "Assuming the current trend continues, in 30 years Greece will have more children than reproductive-age individuals.";
        p.addAnswer(1,"True", false ,
                    "");
        p.addAnswer(2,"False", ! false ,
                    "");
       ak.addProblem(p);


  
      p = new Problem("truefalse");
      p.id = 2750967;
      
        p.question = "Assuming the current trend continues, in 30 years Greece will have more children than elderly members of the population.";
        p.addAnswer(1,"True", false ,
                    "");
        p.addAnswer(2,"False", ! false ,
                    "");
       ak.addProblem(p);


  
      p = new Problem("truefalse");
      p.id = 2750968;
      
        p.question = "Assuming the current trend continues, in 30 years Greece will have more reproductive-age individuals than children.";
        p.addAnswer(1,"True", true ,
                    "");
        p.addAnswer(2,"False", ! true ,
                    "");
       ak.addProblem(p);


  
      p = new Problem("truefalse");
      p.id = 2750969;
      
        p.question = "Assuming the current trend continues, in 30 years Greece will have more elderly than reproductive-age individuals";
        p.addAnswer(1,"True", true ,
                    "");
        p.addAnswer(2,"False", ! true ,
                    "");
       ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2750970;
      
        p.question = "Greece had more females than males in 2000.  Which of the following is the most likely explanation for this?";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "Females generally have a shorter life span than males.",
                      false, null);
        
         p.addAnswer(2, "Males generally have a shorter life span than females.",
                      true, null);
        
         p.addAnswer(3, "There should be an equal number of males and females in every age group, so this is likely an error in the 2000 census for Greece.",
                      false, null);
        
         p.addAnswer(4, "More females are born than males, and this difference remains throughout all age groups.",
                      false, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2750971;
      
        p.question = "The population of Colombia is currently _______.";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "expanding",
                      true, null);
        
         p.addAnswer(2, "stable",
                      false, null);
        
         p.addAnswer(3, "declining",
                      false, null);
          ak.addProblem(p);


  
      p = new Problem("truefalse");
      p.id = 2750972;
      
        p.question = "Assuming the current trend continues, in 30 years Colombia will have more children than reproductive-age individuals.";
        p.addAnswer(1,"True", true ,
                    "");
        p.addAnswer(2,"False", ! true ,
                    "");
       ak.addProblem(p);


  
      p = new Problem("truefalse");
      p.id = 2750973;
      
        p.question = "Assuming the current trend continues, in 30 years Colombia will have more children than elderly members of the population.";
        p.addAnswer(1,"True", true ,
                    "");
        p.addAnswer(2,"False", ! true ,
                    "");
       ak.addProblem(p);


  
      p = new Problem("truefalse");
      p.id = 2750974;
      
        p.question = "Assuming the current trend continues, in 30 years Colombia will have more reproductive-age individuals than children.";
        p.addAnswer(1,"True", false ,
                    "");
        p.addAnswer(2,"False", ! false ,
                    "");
       ak.addProblem(p);


  
      p = new Problem("truefalse");
      p.id = 2750975;
      
        p.question = "Assuming the current trend continues, in 30 years Colombia will have more elderly than reproductive-age individuals.";
        p.addAnswer(1,"True", false ,
                    "");
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


