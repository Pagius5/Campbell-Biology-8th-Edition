// used by the quiz to check a text entry answer
function checkTEAnswer(xsCurQ) {
	gsCurQ = xsCurQ.toString();
		
	if(document.textEntry.textArea.value != "" ) {
		vsNewPage = "q" + gsCurQ + "a.html";
	} else {
		vsNewPage = "teanswerprompt.html";
	}	
	
	parent.GuideText.location = vsNewPage;
}

// used by the quiz to check a multiple choice answer
function checkMCAnswer(xsCurQ) {
	gsCurQ = xsCurQ.toString();
	
	if(gsSelected != "0") {
		vsNewPage = "q" + gsCurQ + gsSelected + ".html";
	} else {
		vsNewPage = "mcanswerprompt.html";
	}	
	
	parent.GuideText.location = vsNewPage;
}
