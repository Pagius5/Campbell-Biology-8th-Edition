
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
      p.id = 2757612;
      
        p.question = "How much more timber was removed from \"other private\" lands versus \"national forest\" land?";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "about the same",
                      false, null);
        
         p.addAnswer(2, "twice as much",
                      false, null);
        
         p.addAnswer(3, "ten times as much",
                      true, null);
        
         p.addAnswer(4, "one hundred times as much",
                      false, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2757613;
      
        p.question = "Which type of land lost the largest proportion of its timber in 1996?";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "national forest",
                      false, null);
        
         p.addAnswer(2, "other public",
                      false, null);
        
         p.addAnswer(3, "forest industry",
                      false, null);
        
         p.addAnswer(4, "other private",
                      false, null);
        
         p.addAnswer(5, "can\'t answer with the available information",
                      true, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2757614;
      
        p.question = "For which type of land is the total volume of forest (in cubic feet) decreasing?";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "national forest",
                      false, null);
        
         p.addAnswer(2, "other public",
                      false, null);
        
         p.addAnswer(3, "forest industry",
                      true, null);
        
         p.addAnswer(4, "other private",
                      false, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2757615;
      
        p.question = "Which of the following are accurate statements based on the information in this graph?";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "Overall, U.S. forest land is experiencing net growth as of 1996.",
                      false, null);
        
         p.addAnswer(2, "Lands other than forest industry land appear to be managed to produce net forest growth.",
                      false, null);
        
         p.addAnswer(3, "National forest land had the greatest growth relative to the amount of harvesting.",
                      false, null);
        
         p.addAnswer(4, "All of the above.",
                      true, null);
        
         p.addAnswer(5, "None of the above.",
                      false, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2757616;
      
        p.question = "Which world region experienced the largest change in forested land between 1990 and 2000?";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "Africa",
                      true, null);
        
         p.addAnswer(2, "South America",
                      false, null);
        
         p.addAnswer(3, "Asia",
                      false, null);
        
         p.addAnswer(4, "North America",
                      false, null);
        
         p.addAnswer(5, "Europe",
                      false, null);
        
         p.addAnswer(6, "West Asia",
                      false, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2757617;
      
        p.question = "Which of the following are accurate statements based on the information in this graph?";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "The information in this graph is consistent with the information in the graph of harvesting and growth in U.S. forests from Step 2.",
                      false, null);
        
         p.addAnswer(2, "The world overall is experiencing a net loss of forest.",
                      false, null);
        
         p.addAnswer(3, "Loss of forested land appears to be greater in the developing world than in the developed world.",
                      false, null);
        
         p.addAnswer(4, "All of the above.",
                      true, null);
        
         p.addAnswer(5, "None of the above.",
                      false, null);
          ak.addProblem(p);


   } // end function InitializeAnswerKey

  function SupportEmailReporter () {
    return true;
  }

  function GradeSenderLocation () {
    
       return "http://wpslive.pearsoncmg.com/WPS_CDROM_Grade_Sender";
     }


