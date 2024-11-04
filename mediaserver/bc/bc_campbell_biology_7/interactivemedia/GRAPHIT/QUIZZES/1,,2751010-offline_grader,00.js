
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
      p.id = 2751011;
      
        p.question = "During which time period was the growth of fish captures greatest?";
        p.explanationincorrect = "Another time period experienced faster growth.";
         
         p.addAnswer(1, "1955 to 1970",
                      true, null);
        
         p.addAnswer(2, "1970 to 1985",
                      false, null);
        
         p.addAnswer(3, "1985 to 2000",
                      false, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2751012;
      
        p.question = "Choose the likeliest explanation for the trend shown in this graph.";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "New fisheries are constantly being discovered and developed.",
                      false, null);
        
         p.addAnswer(2, "Most potential fisheries in the world\'s oceans had been discovered by about 1970.",
                      true, null);
        
         p.addAnswer(3, "Most of the world\'s fisheries had been severely overfished by about 1970.",
                      false, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2751013;
      
        p.question = "Which development stage consistently represents the highest proportion of fisheries resources since 1950?";
        p.explanationincorrect = "One of the other stages represented a consistently higher proportion.";
         
         p.addAnswer(1, "undeveloped",
                      false, null);
        
         p.addAnswer(2, "developing",
                      true, null);
        
         p.addAnswer(3, "fully developed",
                      false, null);
        
         p.addAnswer(4, "senescent",
                      false, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2751014;
      
        p.question = "Which development stage(s) increased in proportion by more than 20% since 1950?";
        p.explanationincorrect = "One of the other stages represented a consistently higher proportion.";
         
         p.addAnswer(1, "undeveloped",
                      false, null);
        
         p.addAnswer(2, "developing",
                      false, null);
        
         p.addAnswer(3, "fully developed",
                      false, null);
        
         p.addAnswer(4, "senescent",
                      false, null);
        
         p.addAnswer(5, "the second and third choices",
                      false, null);
        
         p.addAnswer(6, "the third and fourth choices",
                      true, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2751015;
      
        p.question = "Choose the best statement for how this graph explains the global fish capture trends in Step 1.";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "The proportion of developing fisheries has declined, leading to slowed growth in the global fish catch.",
                      false, null);
        
         p.addAnswer(2, "New, undeveloped fisheries have disappeared, leading to a precipitous drop in the global fish catch.",
                      false, null);
        
         p.addAnswer(3, "Fully developed and senescent fisheries have been increasing relative to others, leading to slowed growth in the global fish catch.",
                      true, null);
        
         p.addAnswer(4, "Developing fisheries have replaced undeveloped fisheries, leading to accelerated growth in the global fish catch.",
                      false, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2751016;
      
        p.question = "For projection 2, which resource stage represents roughly 50% of all resources in 2025?";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "undeveloped",
                      false, null);
        
         p.addAnswer(2, "developing",
                      false, null);
        
         p.addAnswer(3, "fully developed",
                      true, null);
        
         p.addAnswer(4, "senescent",
                      false, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2751017;
      
        p.question = "Given that projection 1 holds true, choose the most likely trend for global fish captures over the next 40 years.";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "rapidly accelerating fish captures",
                      false, null);
        
         p.addAnswer(2, "steadily increasing fish captures",
                      false, null);
        
         p.addAnswer(3, "stable or slightly declining fish captures",
                      false, null);
        
         p.addAnswer(4, "rapidly declining fish captures",
                      true, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2751018;
      
        p.question = "Given that projection 2 holds true, choose the most likely trend for global fish captures over the next 40 years.";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "rapidly accelerating fish captures",
                      false, null);
        
         p.addAnswer(2, "steadily increasing fish captures",
                      false, null);
        
         p.addAnswer(3, "stable or slightly declining fish captures",
                      true, null);
        
         p.addAnswer(4, "rapidly declining fish captures",
                      false, null);
          ak.addProblem(p);


   } // end function InitializeAnswerKey

  function SupportEmailReporter () {
    return true;
  }

  function GradeSenderLocation () {
    
       return "http://wpslive.pearsoncmg.com/WPS_CDROM_Grade_Sender";
     }


