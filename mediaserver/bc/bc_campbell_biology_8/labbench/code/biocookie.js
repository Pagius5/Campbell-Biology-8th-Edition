// AWL cookie functions for text entry, 

// tests if the cookie has been written yet.
function getBioCookie() {
	return getCookie("BioPlace");
}

// tests if the cookie has been written yet.
function getNumberedBioCookie(xsWhich) {
	return getCookie("BioPlace" + xsWhich);
}

// writes a cookie names AWL with the value xsValue
function writeBioCookie(xsValue) {
	setCookie("BioPlace", xsValue);
}

// This is for multiple answers on a page
// writes a cookie names AWL with the value xsValue
function writeNumberedBioCookie(xsWhich, xsValue) {
	setCookie("BioPlace" + xsWhich, xsValue);
}

// deletes the xsCookieNamecookie and reloads the page		
function deleteBioCookieAndReload() {
	deleteCookie("BioPlace");
	window.location.reload();
}

// deletes the xsCookieNamecookie and reloads the page		
function deleteNumberedBioCookieAndReload(xsWhich) {
	deleteCookie("BioPlace" + xsWhich);
	window.location.reload();
}

// deletes the xsCookieNamecookie		
function deleteNumberedBioCookie(xsWhich) {
	deleteCookie("BioPlace" + xsWhich);
}

//////////////////////////////////////
// name - name of the cookie
// value - value of the cookie
// [expires] - expiration date of the cookie (defaults to end of current session)
// [path] - path for which the cookie is valid (defaults to path of calling document)
// [domain] - domain for which the cookie is valid (defaults to domain of calling document)
// [secure] - Boolean value indicating if the cookie transmission requires a secure transmission
// * an argument defaults when it is assigned null as a placeholder
// * a null placeholder is not required for trailing omitted arguments
function setCookie(name, value, expires, path, domain, secure) {
  var curCookie = name + "=" + escape(value) +
	((expires) ? "; expires=" + expires.toGMTString() : "") +
	((path) ? "; path=" + path : "") +
	((domain) ? "; domain=" + domain : "") +
	((secure) ? "; secure" : "");
  	document.cookie = curCookie;
}

// name - name of the desired cookie
// * return string containing value of specified cookie or null if cookie does not exist
function getCookie(name) {
  var dc = document.cookie;
  var prefix = name + "=";
  var begin = dc.indexOf("; " + prefix);
  if (begin == -1) {
    begin = dc.indexOf(prefix);
    if (begin != 0) return null;
  } else
    begin += 2;
  var end = document.cookie.indexOf(";", begin);
  if (end == -1)
    end = dc.length;
  return unescape(dc.substring(begin + prefix.length, end));
}

// name - name of the cookie
// [path] - path of the cookie (must be same as path used to create cookie)
// [domain] - domain of the cookie (must be same as domain used to create cookie)
// * path and domain default if assigned null or omitted if no explicit argument proceeds
function deleteCookie(name, path, domain) {
  if (getCookie(name)) {
    document.cookie = name + "=" + 
    ((path) ? "; path=" + path : "") +
    ((domain) ? "; domain=" + domain : "") +
    "; expires=Thu, 01-Jan-70 00:00:01 GMT";
  }
}

// date - any instance of the Date object
// * hand all instances of the Date object to this function for "repairs"
function fixDate(date) {
  var base = new Date(0);
  var skew = base.getTime();
  if (skew > 0)
    date.setTime(date.getTime() - skew);
}
