

function printThisPage() {
	window.focus();
	if (window.print) {
		window.print();
	} else {
		alert('The "Print this page" link is not supported in your browser version.  To print this page, ' 
				+ 'first highlight the text, then select Print from the File menu.');
	}
}

function MM_openBrWindow(theURL,winName,features) {
	var openedWindow = window.open(theURL,winName,features);
	openedWindow.focus();
	return false;
}

function checkemail(email) {
	var re = /^[a-z0-9][a-z0-9_.\\\'-]*@[a-z0-9]([a-z0-9_\\\'-])*([.][a-z0-9][a-z0-9_]*)+$/i;
	return re.test(email);   
}

//function og_submitformail(f) {
//	f.action = GradeSenderLocation();
//	f.submit();
//}

function gradeformvalidate () {
	if(document.graderform.student_name.value.length == 0) {
		alert('Please enter your name.');
		return false;
	}
	var student_email = (document.graderform.student.value) ? document.graderform.student.value : "" ;
	var teacher_email = (document.graderform.teacher.value) ? document.graderform.teacher.value : "" ;
	var ta_email = (document.graderform.ta.value) ? document.graderform.ta.value : "" ;
	var other_email = (document.graderform.other.value) ? document.graderform.other.value : "" ;

	student_email = student_email.replace(/\s+/g, '');
	teacher_email = teacher_email.replace(/\s+/g, '');
	ta_email = ta_email.replace(/\s+/g, '');
	other_email = other_email.replace(/\s+/g, '');

	var num_emails = 0;
	var errMsg = '';
	if(document.graderform.mail_student.checked) {
		++num_emails;
		if(student_email == '' || !checkemail(student_email)) {
			errMsg = 'Your email address is not valid.';
		}
	}
	if(document.graderform.mail_teacher.checked) {
		++num_emails;
		if(teacher_email == '' || !checkemail(teacher_email)) {
			if(errMsg != '')
				errMsg += '\n';
			errMsg += 'The instructor email address is not valid.';
		}
	}
	if(document.graderform.mail_ta.checked) {
		++num_emails;
		if(ta_email == '' || !checkemail(ta_email)) {
			if(errMsg != '')
				errMsg += '\n';
			errMsg += 'The TA email address is not valid.';
		}
	}
	if(document.graderform.mail_other.checked) {
		++num_emails;
		if(other_email == '' || !checkemail(other_email)) {
			if(errMsg != '')
				errMsg += '\n';
			errMsg += 'The "other" email address is not valid.';
		}
	}
	if(num_emails == 0) {
		errMsg = 'Please select and enter at least one email address.';
	}
	if(errMsg != '') {
		window.alert(errMsg);
		return false;
	}
	document.graderform.submit();
	return true;
}

