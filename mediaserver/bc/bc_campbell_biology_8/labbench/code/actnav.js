// to do: look for "guide" and if so, go to different folder
function goSelectedPage() {
	vsSelectedValue = document.activityNav.contents.options[document.activityNav.contents.selectedIndex].value;
	
	vsValue = new String(vsSelectedValue);
	vbGuideValue  = vsValue.indexOf("guide");
	
	if(vbGuideValue == -1)  {
		top.location = vsSelectedValue + ".html";
	} else {  
		top.location = "../../teaching/guides/" + vsSelectedValue + ".html";
	}
}

function OLDgoSelectedPage() {
	top.location=document.activityNav.contents.options[document.activityNav.contents.selectedIndex].value + ".html";
}



function setPullDown(xsConcept) {
	var viThisTopicIndex = 0;
	
	for(i=0;i<document.activityNav.contents.options.length; i++) {
		if(document.activityNav.contents.options[i].value == xsConcept) {
			viThisTopicIndex = i;
			break;
		}
	} 
	
	document.activityNav.contents.selectedIndex = viThisTopicIndex; 
}

