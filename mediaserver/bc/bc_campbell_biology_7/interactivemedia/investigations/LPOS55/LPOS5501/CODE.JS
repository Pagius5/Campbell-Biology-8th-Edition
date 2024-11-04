//Prairie Restoration Activity Code
//   this code to be loaded into main frame window to handle
//   1) storage of data variables
//   2) communication between frames
//   3) data and calculation checking
//   4) building the graph

//***********************************************
//***Declare and initialize data variables*******
//***********************************************
// total # species in each group
var grtot=4
var ghtot=2
var sbtot=5
var rdtot=2
var fxtot=1
var alltot=grtot+ghtot+sbtot+rdtot+fxtot
// data arrays for 1st sampling of each group
var gr1=new Array()
var gh1=new Array()
var sb1=new Array()
var rd1=new Array()
var fx1=new Array()
//data arrays for 6-month sampling of each group
var gr6=new Array()
var gh6=new Array()
var sb6=new Array()
var rd6=new Array()
var fx6=new Array()
//initialize data arrays at 0 ... index will be site number
for (i=1;i<=4;i++)
{
	gr1[i]=0
	gh1[i]=0
	sb1[i]=0
	rd1[i]=0
	fx1[i]=0
	gr6[i]=0
	gh6[i]=0
	sb6[i]=0
	rd6[i]=0
	fx6[i]=0
}


//***********************************************
//***Handle calls from Flash movies *************
//***********************************************
//NOTE: All of these functions are called from the media.html
//		file for the appropriate step.  They are initially
//      invoked by a javascript call from a Flash.

//flags to check that all Flash calls have occurred -- indicating that student 
//   has completed all required steps prior to calculations
var area1RodentsFlag = 0
var area1FoxesBirdsFlag = 0
var area1QuadratFlag = 0
var allAreasFirstSample2Flag = 0
var allAreasFirstSample3Flag = 0
var allAreasFirstSample4Flag = 0
var allAreas6moSampleFlag = 0

function testFlash(message)
{
	//alert("this is a test...")
	alert(message)
}

//Called by 080203.swf on trap sampling for rodents
function area1Rodents(nRodents)
{
	//store data
	rd1[1] = parseInt(nRodents)
	//write GuideText
	htmlDoc = "<html><head><link rel='StyleSheet' href='../../../css/gt.css' type='text/css'></head><body text='black' bgcolor='#FFFFFF'>"
	htmlDoc += "<p>Rodents are tricky creatures to sample because they live underground.   They are usually sampled using randomly placed traps.</p>"
	htmlDoc += "<p>Your trapping found <b>" + nRodents + " rodent species</b> in site #1.</p>"
	htmlDoc += "<p>Be sure to enter the data in your Lab Notebook.  If you haven't opened your notebook yet you can do so by clicking on the cover.  Don't worry about the percentages now, you will enter these later.</p>"
	htmlDoc += "<p>Once you've entered your data, you can proceed with the remaining sampling methods.</p>"
	htmlDoc += "<p>Click on the <i><b>Next</b></i> button if you are done sampling all the target species.</p>"
	htmlDoc += "</BODY></HTML>"
	top.GuideText.document.open()
	top.GuideText.document.write(htmlDoc)
	top.GuideText.document.close()
	area1RodentsFlag++
}

//Called by 080203.swf on binocular scanning for birds and foxes
function area1FoxesBirds(nFoxes,nBirds)
{
	//store data
	fx1[1] = parseInt(nFoxes)
	sb1[1] = parseInt(nBirds)
	//write GuideText
	htmlDoc = "<html><head><link rel='StyleSheet' href='../../../css/gt.css' type='text/css'></head><body text='black' bgcolor='#FFFFFF'>"
	htmlDoc += "<p>Mobile animals like songbirds and foxes are hard to sample.  You decide to carefully scan the site with binoculars and count the number of songbird species and to look for fox dens.</p>"
	htmlDoc += "<p>Your scanning found <b>" + nFoxes + " fox species</b> and <b>" + nBirds + " songbird species</b> in site #1.</p>"
	htmlDoc += "<p>Be sure to enter the data in your Lab Notebook.  If you haven't opened your notebook yet you can do so by clicking on the cover.  Don't worry about the percentages now, you will enter these later.</p>"
	htmlDoc += "<p>Once you've entered your data, you can proceed with the remaining sampling methods.</p>"
	htmlDoc += "<p>Click on the <i><b>Next</b></i> button if you are done sampling all the target species.</p>"
	htmlDoc += "</BODY></HTML>"
	top.GuideText.document.open()
	top.GuideText.document.write(htmlDoc)
	top.GuideText.document.close()
	area1FoxesBirdsFlag++
}

//Called by 080203.swf on binocular scanning for birds and foxes
function area1Quadrat(nGrasses,nHoppers)
{
	//store data
	gr1[1] = parseInt(nGrasses)
	gh1[1] = parseInt(nHoppers)
	//write GuideText
	htmlDoc = "<html><head><link rel='StyleSheet' href='../../../css/gt.css' type='text/css'></head><body text='black' bgcolor='#FFFFFF'>"
	htmlDoc += "<p>Grasses and small organisms (like grasshoppers) are usually estimated by counting the number of species found within a randomly placed sampler called a quadrat.  Usually, several quadrats are taken and the average number of species is calculated.</p>"
	htmlDoc += "<p>Your sampling found <b>" + nGrasses + " grass species</b> and <b>" + nHoppers + " grasshopper species</b> in site #1.</p>"
	htmlDoc += "<p>Be sure to enter the data in your Lab Notebook.  If you haven't opened your notebook yet you can do so by clicking on the cover.  Don't worry about the percentages now, you will enter these later.</p>"
	htmlDoc += "<p>Once you've entered your data, you can proceed with the remaining sampling methods.</p>"
	htmlDoc += "<p>Click on the <i><b>Next</b></i> button if you are done sampling all the target species.</p>"
	htmlDoc += "</BODY></HTML>"
	top.GuideText.document.open()
	top.GuideText.document.write(htmlDoc)
	top.GuideText.document.close()
	area1QuadratFlag++
}

//Called by 080204.swf on sampling one of the sites
function allAreasFirstSample(area,nGrasses,nHoppers,nBirds,nRodents,nFoxes)
{
	//store data
	gr1[area] = parseInt(nGrasses)
	gh1[area] = parseInt(nHoppers)
	fx1[area] = parseInt(nFoxes)
	sb1[area] = parseInt(nBirds)
	rd1[area] = parseInt(nRodents)
	//write GuideText
	htmlDoc = "<html><head><link rel='StyleSheet' href='../../../css/gt.css' type='text/css'></head><body text='black' bgcolor='#FFFFFF'>"
	htmlDoc += "<p>Your sampling of site #" + area + " found the following: </p>"
	htmlDoc += "<center><table border=1>"
	htmlDoc += "<tr><th>Target Group</th><th>Number of Species</th></tr>"
	htmlDoc += "<tr><td>Grasses</td><td align='center'>" + nGrasses + "</td></tr>"
	htmlDoc += "<tr><td>Grasshoppers</td><td align='center'>" + nHoppers + "</td></tr>"
	htmlDoc += "<tr><td>Songbirds</td><td align='center'>" + nBirds + "</td></tr>"
	htmlDoc += "<tr><td>Rodents</td><td align='center'>" + nRodents + "</td></tr>"
	htmlDoc += "<tr><td>Foxes</td><td align='center'>" + nFoxes + "</td></tr>"
	htmlDoc += "</table></center>"
	htmlDoc += "<p>Be sure to enter your data in your Lab Notebook.  You will enter the percentages later.</p>"
	switch(area)
	{
		case "2":
			htmlDoc += "<p>In comparison with site #1 (same size but closer), are there more or fewer species at site #2?"
			htmlDoc += " Clicking on the correct answer will take you to site #3.</p>"
			allAreasFirstSample2Flag++
			break;
		case "3":
			htmlDoc += "<p>In comparison with site #1 (similar distance but smaller), are there more or fewer species at site #3? "
			htmlDoc += " Clicking on the correct answer will take you to site #4.</p>"
			allAreasFirstSample3Flag++
			break;
		case "4":
			htmlDoc += "<p>In comparison with site #3 (same size but closer to existing prairie), are there more or fewer species at site #4?"
			htmlDoc += " Clicking on the correct answer will take you to the next step.</p>"
			allAreasFirstSample4Flag++
			break;
	}
	htmlDoc += "</BODY></HTML>"
	top.GuideText.document.open()
	top.GuideText.document.write(htmlDoc)
	top.GuideText.document.close()
}

//Called by 080204.swf on sampling at 6-months
function allAreas6moSample(area,nGrasses,nHoppers,nBirds,nRodents,nFoxes)
{
	//store data
	gr6[area] = parseInt(nGrasses)
	gh6[area] = parseInt(nHoppers)
	fx6[area] = parseInt(nFoxes)
	sb6[area] = parseInt(nBirds)
	rd6[area] = parseInt(nRodents)
	//populate notebook for 6-month sampling
	fill6moSampleSite(area)
	allAreas6moSampleFlag++
}

function fill6moSampleSite(area)
{
	fldName = "gr6n" + area
	top.Notebook.document.forms.notebook[fldName].value = gr6[area]
	fldName = "gh6n" + area
	top.Notebook.document.forms.notebook[fldName].value = gh6[area]
	fldName = "fx6n" + area
	top.Notebook.document.forms.notebook[fldName].value = fx6[area]
	fldName = "sb6n" + area
	top.Notebook.document.forms.notebook[fldName].value = sb6[area]
	fldName = "rd6n" + area
	top.Notebook.document.forms.notebook[fldName].value = rd6[area]
}

//***********************************************
//***Functions called to check calculations *****
//***********************************************
//flag to check that calculations are done prior to plotting
var calcDoneFlag = 0

function fixData()
{
	//check that all steps have occured...return false if any haven't
	if(area1RodentsFlag == 0) {return false}
	if(area1FoxesBirdsFlag == 0) {return false}
	if(area1QuadratFlag == 0) {return false}
	if(allAreasFirstSample2Flag == 0) {return false}
	if(allAreasFirstSample3Flag == 0) {return false}
	if(allAreasFirstSample4Flag == 0) {return false}
	if(allAreas6moSampleFlag == 0) {return false}
	
	//check that all data has been entered by student
	for(area=1;area<=4;area++)
	{
		fldName = "gr1n" + area
		if(top.Notebook.document.forms.notebook[fldName].value == "") {return false}
		fldName = "gh1n" + area
		if(top.Notebook.document.forms.notebook[fldName].value == "") {return false}
		fldName = "fx1n" + area
		if(top.Notebook.document.forms.notebook[fldName].value == "") {return false}
		fldName = "sb1n" + area
		if(top.Notebook.document.forms.notebook[fldName].value == "") {return false}
		fldName = "rd1n" + area
		if(top.Notebook.document.forms.notebook[fldName].value == "") {return false}
	}
	
	//fix data entries for initial sample (6mo was populated automatically)
	fillInitialSample()
	return true
}

function fillInitialSample()
{
	for(area=1;area<=4;area++)
	{
		fldName = "gr1n" + area
		top.Notebook.document.forms.notebook[fldName].value = gr1[area]
		fldName = "gh1n" + area
		top.Notebook.document.forms.notebook[fldName].value = gh1[area]
		fldName = "fx1n" + area
		top.Notebook.document.forms.notebook[fldName].value = fx1[area]
		fldName = "sb1n" + area
		top.Notebook.document.forms.notebook[fldName].value = sb1[area]
		fldName = "rd1n" + area
		top.Notebook.document.forms.notebook[fldName].value = rd1[area]
	}
}

function totalCorrect()
{
	//calc total of site 3, initial sample
	calc  = gr1[3]
	calc += gh1[3]
	calc += sb1[3]
	calc += rd1[3]
	calc += fx1[3]
	entered = parseInt(top.Notebook.document.forms.notebook["tt1n3"].value)
	
	if(entered==calc)
	{
		//if entered value matches...
		fillTotals()
		//then...
		return true
	}
	else
	{
		//if not...
		return false
	}
}

function fillTotals()
{
	//calc and enter all totals
	for(var i=1;i<=4;i++)
	{
		calc  = gr1[i]
		calc += gh1[i]
		calc += sb1[i]
		calc += rd1[i]
		calc += fx1[i]
		fldName = "tt1n" + i
		top.Notebook.document.forms.notebook[fldName].value = calc
	}
	for(var i=1;i<=4;i++)
	{
		calc  = gr6[i]
		calc += gh6[i]
		calc += sb6[i]
		calc += rd6[i]
		calc += fx6[i]
		fldName = "tt6n" + i
		top.Notebook.document.forms.notebook[fldName].value = calc
	}
}

function changeCorrect()
{
	tot1 = parseInt(top.Notebook.document.forms.notebook["tt1n1"].value)
	calc = parseInt(top.Notebook.document.forms.notebook["tt6n1"].value) - tot1
	entered = parseInt(top.Notebook.document.forms.notebook["change1"].value)
	if(entered == calc)	
	{
		//if entered value is correct, fill in others
		fillChanges()
		//then...
		return true
	}
	else
	{
		//if not...
		return false
	}
}

function fillChanges()
{
	for(var i=1;i<=4;i++)
	{
		fldName = "tt1n" + i
		tot1 = parseInt(top.Notebook.document.forms.notebook[fldName].value)
		fldName = "tt6n" + i
		calc = parseInt(top.Notebook.document.forms.notebook[fldName].value) - tot1
		fldName = "change" + i
		top.Notebook.document.forms.notebook[fldName].value = calc
	}
}

function pcttotCorrect()
{
	calc1 = Math.round((parseInt(top.Notebook.document.forms.notebook["tt1n1"].value)/14)*100)
	calc2 = Math.round((parseInt(top.Notebook.document.forms.notebook["tt6n1"].value)/14)*100)
	entered1 = parseInt(top.Notebook.document.forms.notebook["tt1p1"].value)
	entered2 = parseInt(top.Notebook.document.forms.notebook["tt6p1"].value)
	if((entered1==calc1)&&(entered2==calc2))
	{
		//if entered value is correct, fill in others
		fillPctTot()
		//then...
		return true
	}
	else
	{
		//if not...
		return false
	}
}

function fillPctTot()
{
	for(var i=1;i<=4;i++)
	{
		fldName = "tt1n" + i
		calc = Math.round((parseInt(top.Notebook.document.forms.notebook[fldName].value)/alltot)*100)
		fldName = "tt1p" + i
		top.Notebook.document.forms.notebook[fldName].value = calc
	}
	for(var i=1;i<=4;i++)
	{
		fldName = "tt6n" + i
		calc = Math.round((parseInt(top.Notebook.document.forms.notebook[fldName].value)/alltot)*100)
		fldName = "tt6p" + i
		top.Notebook.document.forms.notebook[fldName].value = calc
	}
}

function pctgrCorrect()
{
	calc = Math.round((gr1[1]/grtot)*100)
	entered = parseInt(top.Notebook.document.forms.notebook["gr1p1"].value)
	if(entered == calc)
	{
		//if entered value is correct, fill in others
		fillPctGroups()
		//set calcDoneFlag to 1 ... can now proceed to plotting
		calcDoneFlag = 1
		//then...
		return true
	}
	else
	{
		//if not...
		return false
	}
}

function fillPctGroups()
{
	for(var i=1;i<=4;i++)
	{
		fldName = "gr1p" + i
		top.Notebook.document.forms.notebook[fldName].value = Math.round((gr1[i]/grtot)*100)
		fldName = "gh1p" + i
		top.Notebook.document.forms.notebook[fldName].value = Math.round((gh1[i]/ghtot)*100)
		fldName = "sb1p" + i
		top.Notebook.document.forms.notebook[fldName].value = Math.round((sb1[i]/sbtot)*100)
		fldName = "rd1p" + i
		top.Notebook.document.forms.notebook[fldName].value = Math.round((rd1[i]/rdtot)*100)
		fldName = "fx1p" + i
		top.Notebook.document.forms.notebook[fldName].value = Math.round((fx1[i]/fxtot)*100)
	}
	for(var i=1;i<=4;i++)
	{
		fldName = "gr6p" + i
		top.Notebook.document.forms.notebook[fldName].value = Math.round((gr6[i]/grtot)*100)
		fldName = "gh6p" + i
		top.Notebook.document.forms.notebook[fldName].value = Math.round((gh6[i]/ghtot)*100)
		fldName = "sb6p" + i
		top.Notebook.document.forms.notebook[fldName].value = Math.round((sb6[i]/sbtot)*100)
		fldName = "rd6p" + i
		top.Notebook.document.forms.notebook[fldName].value = Math.round((rd6[i]/rdtot)*100)
		fldName = "fx6p" + i
		top.Notebook.document.forms.notebook[fldName].value = Math.round((fx6[i]/fxtot)*100)
	}
}

//***********************************************
//***Functions called to plot data **************
//***********************************************

function plot(whatData)
{
	if(calcDoneFlag == 1) //only produce plots after all calcs are done...starting step 6
	{
		switch(whatData)
		{
			case 'gr':
				data1 = gr1
				data6 = gr6
				total = grtot
				label = "Grasses"
				break
			case 'gh':
				data1 = gh1
				data6 = gh6
				total = ghtot
				label = "Grasshoppers"
				break
			case 'sb':
				data1 = sb1
				data6 = sb6
				total = sbtot
				label = "Songbirds"
				break
			case 'rd':
				data1 = rd1
				data6 = rd6
				total = rdtot
				label = "Rodents"
				break
			case 'fx':
				data1 = fx1
				data6 = fx6
				total = fxtot
				label = "Foxes"
				break
			case 'tot':
				data1 = new Array()
				data6 = new Array()
				for(i=1;i<=4;i++)
				{
					data1[i] = gr1[i] + gh1[i] + sb1[i] + rd1[i] + fx1[i]
					data6[i] = gr6[i] + gh6[i] + sb6[i] + rd6[i] + fx6[i]
				}
				total = alltot
				label = "All Target Groups"
				break
		}
		htmlDoc = '<html><body bgcolor="white">'
		//htmlDoc += '<center>'
		//this is the main graph table -- it holds all pieces of graph: 
		//   axes, labels, legend, data plot
		htmlDoc += '<table border="0" cellpadding="0" cellspacing"0">'
		//row 1 of main graph table
		htmlDoc += '<tr>'
		htmlDoc += '<td rowspan="3" valign="middle"><a href="notebook.html"><font size="-1">&lt;&lt; Return<br>to Notebook</font></a></td>'
		htmlDoc += '<td rowspan="2"><img src="ylabels.gif" width="75" height="180"></td>'
		htmlDoc += '<th align="center">' + label + '</th>'
		htmlDoc += '<td rowspan="2"><img src="legend.gif" width="75" height="180"></td>'
		htmlDoc += '</tr>'
		//row 2 of main graph table
		htmlDoc += '<tr><td>'
		//this is the actual plot and border....
		htmlDoc += '<table border="1"><tr><td><table border="0" cellspacing="0" cellpadding="0">'
		for(r=19;r>=0;r--)
		{
			htmlDoc += '<tr>'
			for(site=1;site<=4;site++)
			{
				htmlDoc += '<td nowrap><img src="onepixel.gif" width="30" height="8" border="0"></td>'
				color = ( ((data1[site]/total)*20) > r) ? "#6666FF" : "white"
				htmlDoc += '<td bgcolor="' + color + '" nowrap><img src="onepixel.gif" width="30" height="8" border="0"></td>'
				color = ( ((data6[site]/total)*20) > r) ? "#660099" : "white"
				htmlDoc += '<td bgcolor="' + color + '" nowrap><img src="onepixel.gif" width="30" height="8" border="0"></td>'
				if(site==4){htmlDoc += '<td nowrap><img src="onepixel.gif" width="30" height="8" border="0"></td>'}
			}
			htmlDoc += '</tr>'
		}
		htmlDoc += '</table></td></tr></table>'
		//...end plot and border
		htmlDoc += '</td></tr>'
		//row 3 of main graph table
		htmlDoc += '<tr><td colspan="3"><img src="xlabels.gif" width="540" height="40"></td></tr>'
		htmlDoc += '</table>'
		//...end of main graph table
		//htmlDoc += '<br><a href="notebook.html"><font size="-1">Return to Notebook</font></a>'
		//htmlDoc += '</center>'
		htmlDoc += '</body></html>'
		//write to notebook frame
		top.Notebook.document.open()
		top.Notebook.document.write(htmlDoc)
		top.Notebook.document.close()
	}
}

function fillNotebook()
{
	if(calcDoneFlag == 1) //only re-fill notebook after all calcs are done...starting step 6
	{
		//re-populate notebook
		fillInitialSample()
		for(i=1;i<=4;i++) {fill6moSampleSite(i)}
		fillTotals()
		fillChanges()
		fillPctTot()
		fillPctGroups()
	}
}
