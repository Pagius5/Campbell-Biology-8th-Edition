 //--------
// functions used by the "step" doc (ex. step01.html) to advance to the next step 
//--------

//used by step (stepnav.htm) pages. When user clicks on "next", or "prev" loads the frame page 
// for the next (or previous) step. Increment is 1 for next, -1 for prev
// full URL is ...st##/stepnav.html

function goStep(increment) {
	// fix this to get the step num
	docName         = new String(document.URL);
	// strip the docName from the URL so we can get st##
	pathName        = getPathFromFullURL(docName);
		
	// isolate the step	
	step            = Number(pathName.substring(pathName.length - 2, pathName.length));
	
	newStep         = pad(step + increment); // pad returns string with two digits

	// load the 3 frames but not the actnav
	    parent.Media.location     = "../" + "st" + newStep + "/media.html";
	    parent.Step.location      = "../" + "st" + newStep + "/stepnav.html";
	    parent.GuideText.location = "../" + "st" + newStep + "/gt01.html";
	
 	// reloads entier frame
	//parent.document.location = "../" + "st" + newStep + "/frame.html";
}

//used by step (st010101.htm) pages, when user hits replay. Just reloads the frame.
function replay() {
 	parent.Media.document.location     = "media.html";
 	parent.GuideText.document.location = "gt01.html";
}


//copy of gostep for ch55 (special case)
function goStep55(increment) {
	// fix this to get the step num
	docName         = new String(document.URL);
	// strip the docName from the URL so we can get st##
	pathName        = getPathFromFullURL(docName);
		
	// isolate the step	
	step            = Number(pathName.substring(pathName.length - 2, pathName.length));
	
	newStep         = pad(step + increment); // pad returns string with two digits

	// load the 3 frames but not the actnav
	    top.Media.location     = "../" + "st" + newStep + "/media.html";
	    top.Nav.location      = "../" + "st" + newStep + "/stepnav.html";
	    top.GuideText.location = "../" + "st" + newStep + "/gt01.html";
	
 	// reloads entier frame
	//parent.document.location = "../" + "st" + newStep + "/frame.html";
}

//copy of gostep for ch55 (special case)
function replay55() {
 	top.Media.document.location     = "media.html";
 	top.GuideText.document.location = "gt01.html";
}




// converts a number to a string and makes sure it's two digits. Adds 0 if one digit.
function pad(theNum) {
   num = new String(theNum)
   
   if(num.length == 1) 
		num = "0" + num;

	return num;
}

// returns true if not running on HTTP, but locally
function isLocal(xsURL) {
	viHTTPLoc = xsURL.lastIndexOf("http");
	
	if(viHTTPLoc == -1) {
		return true;
	} else {
		return false;
	}
}

// strip the name of the doc from the URL and return the path (without / on the end)
function getPathFromFullURL(xsURL) {
	vbLocal = isLocal(xsURL);
	
	if(vbLocal && 
		navigator.appName == "Microsoft Internet Explorer" && 
		navigator.platform == "Win32"){
    		viSlashLoc = xsURL.lastIndexOf("\\"); 
 	}else{
 		viSlashLoc = xsURL.lastIndexOf("/");
 	}
 	
 	vsToReturn = xsURL.substring(0,viSlashLoc);
 	
 	return vsToReturn;
}

//used by stepnav pages when loading, to set the activity pull-down (based on doc name)
function SetActivityPullDown(xsWhich) {
	var viThisActivityIndex = 0;
	var viPullDownLength = parent.Actnav.document.forms[0].activity.options.length;

	for(i=0;i<viPullDownLength; i++) {
		vsValue = parent.Actnav.document.forms[0].activity.options[i].value;
		if(vsValue == xsWhich) {
			viThisActivityIndex = i;
			break;
		}
	} 
	
	parent.Actnav.document.forms[0].activity.selectedIndex = viThisActivityIndex; 
	//parent.Actnav.document.forms[0].activity.value = xsWhich;
}
