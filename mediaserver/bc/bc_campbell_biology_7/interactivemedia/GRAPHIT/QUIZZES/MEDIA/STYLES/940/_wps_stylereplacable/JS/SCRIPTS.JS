//*************** Begin browser sniffer and CSS deployment ***************
//////////////////////////////////////////////////////////
// Make the sniffer object
var is = new sniffer();

	if (is.mac) {
		if (is.nav) {
		vsFileName = "mac_nn.css";   // stylesheet for mac netscape only
		} else {
		vsFileName = "mac_ie.css";      // stylesheet for mac ie and any other mac browsers
		}
	} else {
		vsFileName = "pc.css";      // stylesheet for win browsers 
		}

	document.write("<LINK REL='Stylesheet' HREF='" + myRoot + "css/" + vsFileName + "'>");
  
//////////////////////////////////////////////////////////
// Platform and browser sniffer
function sniffer() {
	// convert all characters to lowercase to simplify testing
    var agt = navigator.userAgent.toLowerCase();
    //alert(agt);									//for curiosity
    // *** BROWSER VERSION NUMBERS***
    this.major = parseInt(navigator.appVersion)
    this.minor = parseFloat(navigator.appVersion)
	// *** BROWSER TYPE ***
    this.nav = ((agt.indexOf('mozilla')!=-1) && ((agt.indexOf('spoofer')==-1)
                && (agt.indexOf('compatible') == -1)))
	this.ie = (agt.indexOf("msie") != -1)
	// *** OS PLATFORM ***
	this.mac = (agt.indexOf("mac")!=-1)
}
//*************** End browser sniffer and CSS deployment ***************

//spawn window function
function spawnWindow(theURL,winName,properties) { 
  window.open(theURL,winName,properties);
  //window.moveTo(400, 200)
}

//netscape resize fix
 if(!window.saveInnerWidth) {
   window.onresize = resizeIt;
   window.saveInnerWidth = window.innerWidth;
   window.saveInnerHeight = window.innerHeight;
 }

 function resizeIt() {
     if (saveInnerWidth < window.innerWidth || 
         saveInnerWidth > window.innerWidth || 
         saveInnerHeight > window.innerHeight || 
         saveInnerHeight < window.innerHeight ) 
     {
        // window.history.go(0);
        location.reload();
     }
 }

 //spawn flashcards function
function opnflashcards() { 
 window.open('../flashcards/flashcards.html','myFlash','toolbar=0,location=0,status=0,menubar=0,scrollbars=auto,resizable=1,width=600,height=500');
}

//spawn footnotes
function opnFn(whichFoot) { 
  window.open(whichFoot,'myFoot','toolbar=0,location=0,status=0,menubar=0,scrollbars=1,resizable=1,width=340,height=170');
}
 
//open a window, then write to it  for thumbnails
function getProperties(whichFigure,imageName,imageSource,imgWidth,imgHeight) { 
   var  properties = "<html><head><style type='text/css'>.figure_caption {color:#000000; font-family: Arial, Helvetica, sans-serif; font-size:11px; font-weight: normal;} .text {color:#000000; font-family: Arial, Helvetica, sans-serif; font-size:12px; font-weight: normal;}</style><title>" + whichFigure + "</title></head><body bgColor='#ffffff' leftmargin='0' topmargin='0' marginheight='0' marginwidth='0'><img src='"+imageName+"'  border='0' name='bigFigure' /><br><br><div align='right' class='text'><a href='javascript:window.close();'><img src='../img/close.gif' width='42' height='18' border='0' alt='close window'></a>&nbsp;&nbsp;</div></body></html>";
   return properties; 
   } 
   
function bigFig(whichFigure,imageName,imageSource,imgWidth,imgHeight) {
//determine what popup window size should be based on thumbnail size
var figHeight= eval(imgHeight/imgWidth*imgWidth*3+40)
var figWidth= eval(imgWidth*3)

var newWindow = window.open("","video","toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=auto,resizable=1,height="+figHeight+",width="+figWidth+"");
newWindow.document.write(getProperties(whichFigure,imageName,imageSource,imgWidth,imgHeight));
newWindow.document.close();
newWindow.focus();
   }
   
function openmovie(mUrl)
{
mov_window =
window.open(mUrl,'mov_window','toolbar=0,location=0,status=0,menubar=0,scrollbars=auto,resizable=1,width=370,height=180');
//mov_window.moveTo(0,0);
}
   
function opentutorial(tUrl)
{
tut_window =
window.open(tUrl,'tut_window','toolbar=0,location=0,status=0,menubar=0,scrollbars=auto,resizable=1,width=800,height=600');
//tut_window.moveTo(0,0);
}

function openSmtutorial(tUrl)
{
tut_window =
window.open(tUrl,'tut_window','toolbar=0,location=0,status=0,menubar=0,scrollbars=auto,resizable=1,width=370,height=180');
//tut_window.moveTo(0,0);
}
 
//open a window, then write to it for glossary
function glossProperties(gLetter) { 
   var  gProperties = "<html><head><meta http-equiv='content-type' content='text/html;charset=iso-8859-1'><title>The Cosmic Perspective 2e - Glossary</title></head><frameset rows='50,*,30' framespacing='0' border='1' frameborder='NO'><frame src='../gloss/top.htm' name='top' scrolling='no' noresize><frame src='../gloss/main.htm#" + gLetter + "' name='main' scrolling='auto'><frame src='../gloss/bottom.htm' name='bottom' scrolling='no' noresize></frameset><noframes><body bgcolor='#ffffff'><center><table border='0' cellpadding='0' cellspacing='0' ><tr><td><font face='arial,helvetica' size='2' >This page uses frames.<br>Please download the latest version of <ahref='http://www.microsoft.com/ie/download' target='new'>Internet Explorer</a>or <a href='http://home.netscape.com/computing/download/' target='new'>Netscape</a>.Thank you.</td></tr></table></body></noframes></html>";
   return gProperties; 
   } 
   
function openGloss(gLetter) {

var gWindow = window.open("","gloss","toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=auto,resizable=1,height=500,width=500");
gWindow.document.write(glossProperties(gLetter));
gWindow.document.close();
gWindow.focus();
   }
