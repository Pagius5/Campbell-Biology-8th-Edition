// Must declare var mode="still" in head of page.


// If starting at still image, changes to animated and button changes to replay.
// If already animated image, replays image and button remains replay.
// Initial button on page can be button other than "animate".
function handleAnimateOrReplayBtnClick(xsOnImage) {
	if(mode == "still") {
		mode = "animate";
		document.animation.src = "images/" + xsOnImage + ".gif";
		document.button.src    = "../../images/replay.gif";
	} else {
		document.animation.src = "images/" + xsOnImage + ".gif";
	}
}

// NOTE: This function could be replaced by the one below it.
// If starting at still image, changes to animated and button changes to Reset.
// If already animated image, replaces image with still and button changes to animate.
function handleAnimateOrResetBtnClick(xsOffImage, xsOnImage) {
	if(mode == "still") {
		mode = "animate";
		document.animation.src = "images/" + xsOnImage + ".gif";
		document.button.src    = "../../images/reset.gif";
	} else {
		mode = "still";
		document.animation.src = "images/" + xsOffImage + ".gif";
		document.button.src    = "../../images/animate.gif";
	}
}

// If starting at still image, image changes to Animated and button changes to xsAnimateModeBtnSrc.
// If already animated image, replaces image with still and button changes to xsStillModeBtnSrc.
// xsNameSuffix allows you to add a suffix to the name of the button and image. Pass in "" if no suffix
function animateImgAndSwitchBtn(xsStillImgSrc, xsAnimateImgSrc, xsStillModeBtnSrc, xsAnimateModeBtnSrc, xsNameSuffix) {
	if(mode == "still") {
		mode = "animate";

		document.images["animate" + xsNameSuffix].src = "images/" + xsAnimateImgSrc + ".gif";
		document.images["button" + xsNameSuffix].src  = "../../images/" + xsAnimateModeBtnSrc + ".gif";
	} else {
		mode = "still";
		
		document.images["animate" + xsNameSuffix].src = "images/" + xsStillImgSrc + ".gif";
		document.images["button" + xsNameSuffix].src    = "../../images/" + xsStillModeBtnSrc + ".gif";
	}
}
