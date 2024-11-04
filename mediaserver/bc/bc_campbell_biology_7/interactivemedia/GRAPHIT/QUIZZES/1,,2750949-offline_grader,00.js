
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
      p.id = 2750950;
      
        p.question = "For the graph of data on stem density and snowshoe hare density, which statement best summarizes the trend shown in the graph?";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "The density of stems decreases as hare density increases.",
                      false, null);
        
         p.addAnswer(2, "There appears to be no relationship between stem density and hare density.",
                      false, null);
        
         p.addAnswer(3, "The density of hares increases as the density of stems increases.",
                      true, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2750951;
      
        p.question = "As stem density increases from about 35 stems to about 55 stems per hectare, what is the increase in snowshoe hare density?";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "0.2 hares per hectare",
                      false, null);
        
         p.addAnswer(2, "1000 hares per hectare",
                      false, null);
        
         p.addAnswer(3, "5 hares per hectare",
                      false, null);
        
         p.addAnswer(4, "1 hare per hectare",
                      true, null);
        
         p.addAnswer(5, "0 hares per hectare",
                      false, null);
          ak.addProblem(p);


  
      p = new Problem("truefalse");
      p.id = 2750952;
      
        p.question = "Increasing density of tree and bush stems has a positive effect on snowshoe hare abundance.";
        p.addAnswer(1,"True", true ,
                    "");
        p.addAnswer(2,"False", ! true ,
                    "");
       ak.addProblem(p);


  
      p = new Problem("truefalse");
      p.id = 2750953;
      
        p.question = "Areas with more than 100 stems per hectare should have hare densities approaching 4 hares per hectare.";
        p.addAnswer(1,"True", false ,
                    "");
        p.addAnswer(2,"False", ! false ,
                    "");
       ak.addProblem(p);


  
      p = new Problem("truefalse");
      p.id = 2750954;
      
        p.question = "Greater abundance of tree and bush stems results in higher birth rates for snowshoe hares.";
        p.addAnswer(1,"True", false ,
                    "");
        p.addAnswer(2,"False", ! false ,
                    "");
       ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2750955;
      
        p.question = "For the graph showing fish body lengths and the percentage of tern diets that they comprise, which statement best summarizes the trend shown in the graph?";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "The blue-grey noddy tern and the sooty tern have identical diets with respect to fish size.",
                      false, null);
        
         p.addAnswer(2, "The sooty tern\'s diet is composed mostly of smaller fish and the blue-grey noddy\'s diet is composed mostly of moderate to large fish.",
                      false, null);
					  
         p.addAnswer(3, "The sooty tern\'s diet is composed mostly of smaller fish and the blue-grey noddy\'s diet is composed mostly of moderate to large fish.",
                      true, null);
        
         p.addAnswer(4, "There is no overlap in the diets of the two species with respect to fish size.",
                      false, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2750956;
      
        p.question = "For what sizes of fish is there the least amount of overlap in the diets of these two tern species?";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "0--2 cm",
                      false, null);
        
         p.addAnswer(2, "4--6 cm",
                      false, null);
        
         p.addAnswer(3, "greater than 6 cm",
                      true, null);
        
         p.addAnswer(4, "less than 6 cm",
                      false, null);
          ak.addProblem(p);


  
      p = new Problem("truefalse");
      p.id = 2750957;
      
        p.question = "For the sooty tern, there is a steady decrease in the percent of diet as fish length decreases from 6 cm to 0 cm. ";
        p.addAnswer(1,"True", false ,
                    "");
        p.addAnswer(2,"False", ! false ,
                    "");
       ak.addProblem(p);


  
      p = new Problem("truefalse");
      p.id = 2750958;
      
        p.question = "The sooty tern consumes more fish than the blue-grey noddy tern.";
        p.addAnswer(1,"True", false ,
                    "");
        p.addAnswer(2,"False", ! false ,
                    "");
       ak.addProblem(p);


  
      p = new Problem("truefalse");
      p.id = 2750959;
      
        p.question = "Even though they live in the same location, these two species probably experience minimal competition for food.";
        p.addAnswer(1,"True", true ,
                    "");
        p.addAnswer(2,"False", ! true ,
                    "");
       ak.addProblem(p);


  
      p = new Problem("truefalse");
      p.id = 2750960;
      
        p.question = "Since the points don\'t form a straight line, it would have been better to draw this as a scatter plot.";
        p.addAnswer(1,"True", false ,
                    "");
        p.addAnswer(2,"False", ! false ,
                    "");
       ak.addProblem(p);


  
      p = new Problem("truefalse");
      p.id = 2750961;
      
        p.question = "It would have been reasonable to place stream flow on the X-axis instead of year.";
        p.addAnswer(1,"True", false ,
                    "");
        p.addAnswer(2,"False", ! false ,
                    "");
       ak.addProblem(p);


  
      p = new Problem("truefalse");
      p.id = 2750962;
      
        p.question = "Stream flow rates have apparently been decreasing worldwide since 1966.";
        p.addAnswer(1,"True", false ,
                    "");
        p.addAnswer(2,"False", ! false ,
                    "");
       ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2750963;
      
        p.question = "Between 1966 and 1995, what has been the approximate decrease in stream flow rates in Monteverde?";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "1.7 m<sup>3</sup>/sec",
                      false, null);
        
         p.addAnswer(2, "1.2 m<sup>3</sup>/sec",
                      false, null);
        
         p.addAnswer(3, "0.8 m<sup>3</sup>/sec",
                      true, null);
        
         p.addAnswer(4, "There has been no observable change.",
                      false, null);
          ak.addProblem(p);


   } // end function InitializeAnswerKey

  function SupportEmailReporter () {
    return true;
  }

  function GradeSenderLocation () {
    
       return "http://wpslive.pearsoncmg.com/WPS_CDROM_Grade_Sender";
     }


