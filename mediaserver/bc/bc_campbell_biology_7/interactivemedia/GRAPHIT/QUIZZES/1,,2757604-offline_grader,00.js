
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
      p.id = 2757605;
      
        p.question = "How big is the range of soil degradation observed between continents?";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "about 7%",
                      false, null);
        
         p.addAnswer(2, "about 15%",
                      true, null);
        
         p.addAnswer(3, "about 22%",
                      false, null);
        
         p.addAnswer(4, "about 50%",
                      false, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2757606;
      
        p.question = "Which continent likely represents the largest absolute land area experiencing degradation?";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "Africa",
                      false, null);
        
         p.addAnswer(2, "Asia",
                      true, null);
        
         p.addAnswer(3, "Europe",
                      false, null);
        
         p.addAnswer(4, "North America",
                      false, null);
        
         p.addAnswer(5, "South America",
                      false, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2757607;
      
        p.question = "For which continents is land degradation having the least impact on global grain production?";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "Africa and Asia",
                      false, null);
        
         p.addAnswer(2, "Asia and Europe",
                      false, null);
        
         p.addAnswer(3, "North and South America",
                      false, null);
        
         p.addAnswer(4, "Europe and North America",
                      false, null);
        
         p.addAnswer(5, "Africa and South America",
                      true, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2757608;
      
        p.question = "Assume you are advising the UN on global soil conservation projects.  If you had to select one continent, where would you recommend the UN concentrate its efforts based on the information in this graph?";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "Africa",
                      false, null);
        
         p.addAnswer(2, "Asia",
                      true, null);
        
         p.addAnswer(3, "Europe",
                      false, null);
        
         p.addAnswer(4, "North America",
                      false, null);
        
         p.addAnswer(5, "South America",
                      false, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2757609;
      
        p.question = "Which continent has the largest proportion of land with more than moderate degradation?";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "Africa",
                      true, null);
        
         p.addAnswer(2, "Asia",
                      false, null);
        
         p.addAnswer(3, "Europe",
                      false, null);
        
         p.addAnswer(4, "North America",
                      false, null);
        
         p.addAnswer(5, "South America",
                      false, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2757610;
      
        p.question = "Assume that these categories represent a progression of degradation through time.  In other words, if left unchecked, lightly degraded soil progresses into moderately degraded soil and so forth.  Which continent poses the greatest concern for future loss of agricultural productivity?";
        p.explanationincorrect = "That\'s not correct.  One of the other continents has a larger portion of soil about to become strongly or extremely degraded.";
         
         p.addAnswer(1, "Africa",
                      false, null);
        
         p.addAnswer(2, "Asia",
                      false, null);
        
         p.addAnswer(3, "Europe",
                      true, null);
        
         p.addAnswer(4, "North America",
                      false, null);
        
         p.addAnswer(5, "South America",
                      false, null);
          ak.addProblem(p);


   } // end function InitializeAnswerKey

  function SupportEmailReporter () {
    return true;
  }

  function GradeSenderLocation () {
    
       return "http://wpslive.pearsoncmg.com/WPS_CDROM_Grade_Sender";
     }


