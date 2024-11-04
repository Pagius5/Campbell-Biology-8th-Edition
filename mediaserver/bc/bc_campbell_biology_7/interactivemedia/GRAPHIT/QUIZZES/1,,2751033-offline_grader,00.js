
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
      p.id = 2751034;
      
        p.question = "In the early part of this curve, production grows exponentially.  This is expected when producers act independently and seek to maximize their production.  Later in the curve, oil production plateaus and grows only slowly.  Which historical event listed below do you think is most likely related to this shift from maximized to limited oil production?";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "the end of the World War II in 1945",
                      false, null);
        
         p.addAnswer(2, "the assassination of John F. Kennedy in 1963",
                      false, null);
        
         p.addAnswer(3, "the OPEC oil embargo of 1973",
                      true, null);
        
         p.addAnswer(4, "the Gulf War of 1991",
                      false, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2751035;
      
        p.question = "Assume that the Hubbert\'s Curve shown represents oil production for a nation in which production began in 1960.  When is this nation\'s oil production expected to peak?";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "1970",
                      false, null);
        
         p.addAnswer(2, "2000",
                      false, null);
        
         p.addAnswer(3, "2010",
                      true, null);
        
         p.addAnswer(4, "2050",
                      false, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2751036;
      
        p.question = "Which of the following range of years represents a reasonable estimate of when global oil production will peak?";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "1975--1990",
                      false, null);
        
         p.addAnswer(2, "1995--2005",
                      true, null);
        
         p.addAnswer(3, "2005--2020",
                      false, null);
        
         p.addAnswer(4, "2025--2050",
                      false, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2751037;
      
        p.question = "Assume that the actual total available oil turns out to be 2000 billion barrels.  By roughly how many years does this delay the peak in oil production?";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "0 years",
                      false, null);
        
         p.addAnswer(2, "5 years",
                      true, null);
        
         p.addAnswer(3, "20 years",
                      false, null);
        
         p.addAnswer(4, "50 years",
                      false, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2751038;
      
        p.question = "Assume you are advising the President on energy policy.  What would be your estimate of how long the United States can expect to maintain its current level of oil consumption?  Use the Hubbert Curve and the data provided on previous trends in oil production.";
        p.explanationincorrect = "";
         
         p.addAnswer(1, " more than 100 years",
                      false, null);
        
         p.addAnswer(2, "50 to 75 years",
                      false, null);
        
         p.addAnswer(3, "20 to 50 years",
                      true, null);
        
         p.addAnswer(4, "up to 5 years",
                      false, null);
          ak.addProblem(p);


   } // end function InitializeAnswerKey

  function SupportEmailReporter () {
    return true;
  }

  function GradeSenderLocation () {
    
       return "http://wpslive.pearsoncmg.com/WPS_CDROM_Grade_Sender";
     }


