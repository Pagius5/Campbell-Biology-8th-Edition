
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
      p.id = 2750977;
      
        p.question = "Which animal product is least efficient at converting feed consumed into the final product?";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "milk",
                      false, null);
        
         p.addAnswer(2, "chicken",
                      false, null);
        
         p.addAnswer(3, "eggs",
                      false, null);
        
         p.addAnswer(4, "pork",
                      false, null);
        
         p.addAnswer(5, "beef",
                      true, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2750978;
      
        p.question = "Roughly how many pounds of pork do you expect to get for every 100 pounds of feed consumed?";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "130",
                      false, null);
        
         p.addAnswer(2, "100",
                      false, null);
        
         p.addAnswer(3, "20",
                      true, null);
        
         p.addAnswer(4, "10",
                      false, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2750979;
      
        p.question = "Assume you are raising beef and that feed is costing you $1.00 per pound.  Roughly how much money are you spending on feed for each pound of beef produced?";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "$0.13",
                      false, null);
        
         p.addAnswer(2, "$1.30",
                      false, null);
        
         p.addAnswer(3, "$13.00",
                      true, null);
        
         p.addAnswer(4, "$130.00",
                      false, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2750980;
      
        p.question = "Surprisingly, milk has a conversion efficiency greater than 100%.  What is the best explanation for this?";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "Cows and cattle are generally better than other animals at converting feed into product.",
                      false, null);
        
         p.addAnswer(2, "Milk producers have been applying innovative practices that should soon raise milk production efficiency to 150%.",
                      false, null);
        
         p.addAnswer(3, "Most of milk\'s mass comes from water consumption, not feed consumption.",
                      true, null);
        
         p.addAnswer(4, "This represents a measurement error in the data.",
                      false, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2750981;
      
        p.question = "For a country with abundant land and water resources but limited financial resources, which animal product would most likely be favored by agricultural policy?";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "milk",
                      true, null);
        
         p.addAnswer(2, "chicken",
                      false, null);
        
         p.addAnswer(3, "eggs",
                      false, null);
        
         p.addAnswer(4, "pork",
                      false, null);
        
         p.addAnswer(5, "beef",
                      false, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2750982;
      
        p.question = "For a country where chicken raising and eating is a cultural taboo but water resources are scarce, which animal product would most likely be favored by agricultural policy?";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "milk",
                      false, null);
        
         p.addAnswer(2, "chicken",
                      false, null);
        
         p.addAnswer(3, "eggs",
                      false, null);
        
         p.addAnswer(4, "pork",
                      true, null);
        
         p.addAnswer(5, "beef",
                      false, null);
          ak.addProblem(p);


  
      p = new Problem("multiplechoice");
      p.id = 2750983;
      
        p.question = "Despite its high resource usage, beef is a major commodity due to the high value per pound of the final product.  Which of the following changes would cause a reduction in beef production?";
        p.explanationincorrect = "";
         
         p.addAnswer(1, "a precipitous fall in the price per pound of beef",
                      false, null);
        
         p.addAnswer(2, "a dramatic rise in the cost of feed, land, and water to the beef producer",
                      false, null);
        
         p.addAnswer(3, "an agricultural program that subsidized pork production so that the profit per pound of pork was comparable to that for beef",
                      false, null);
        
         p.addAnswer(4, "all of the above",
                      true, null);
        
         p.addAnswer(5, "none of the above",
                      false, null);
          ak.addProblem(p);


   } // end function InitializeAnswerKey

  function SupportEmailReporter () {
    return true;
  }

  function GradeSenderLocation () {
    
       return "http://wpslive.pearsoncmg.com/WPS_CDROM_Grade_Sender";
     }


