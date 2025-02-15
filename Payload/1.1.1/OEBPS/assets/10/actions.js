pubcoder.projectID = pubcoder.projectID || "3FB1753D59D41140A862E7ADABD43946";
pubcoder.project.id = pubcoder.project.id || "3FB1753D59D41140A862E7ADABD43946";
pubcoder.project.title = pubcoder.project.title || "acer\'s Project";
pubcoder.page.id = pubcoder.page.id || 235;
pubcoder.page.title = pubcoder.page.title || "10";
pubcoder.page.number = pubcoder.page.number || 10;
pubcoder.page.alias = pubcoder.page.alias || "";

var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj242_onTap_activeActionGroupIndex = -1;
var obj242_onTap_runningActionsCount = 0;
var obj242_onTap_loopCount = 0;
var obj240_onTap_activeActionGroupIndex = -1;
var obj240_onTap_runningActionsCount = 0;
var obj240_onTap_loopCount = 0;
var obj238_onTap_activeActionGroupIndex = -1;
var obj238_onTap_runningActionsCount = 0;
var obj238_onTap_loopCount = 0;
var obj236_onTap_activeActionGroupIndex = -1;
var obj236_onTap_runningActionsCount = 0;
var obj236_onTap_loopCount = 0;
/*
 * 
 * Init SCCounter
 *
 * 
 */
 
 $(window).on(PubCoder.Events.PageLoad, function(){
	window.eventObj = {};
	/*
	 * 
	 * Init SCAnimation
	 * 
	 * 
	 */
	
	/*
	 *
	 *   Init Shake
	 *
	 */
	window.addEventListener('shake', function () {
		
	}, false);
	
	/*
	 *
	 *   Init Masked Images
	 *
	 */
	 
 	/*
	 * 
	 * Init SCPhotogallery
	 * 
	 * 
	 */
	
 	/*
	 * 
	 * Init SCQuizMulti
	 * 
	 * 
	 */
	
 	/*
	 * 
	 * Init SCDrawer
	 * 
	 * 
	 */
	
    
 	/*
	 * 
	 * Init SCWPanZoom
	 * 
	 * 
	 */
	
    
 	/*
	 * 
	 * Init SCWMemoryGame
	 * 
	 * 
	 */
	
	/*
	 * 
	 * Init SCCrosswords
	 * 
	 * 
	 */
	
	/*
	 * 
	 * Init SCFillInTheGaps
	 * 
	 * 
	 */
	
	/*
	 * 
	 * Init SCTrueFalse
	 * 
	 * 
	 */
	
	
	/*
	 * 
	 * Init SCMatchWordWithPicture
	 * 
	 * 
	 */
	
    
    
	if(! navigator.userAgent.match(/PubCoderHelper/i)) {
		/*
		 *
	 	 *   Action Groups
	 	 *
	 	 */
		
obj242_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj242_onTap_activeActionGroupIndex = -1;
		$("#obj242").trigger("obj242_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 242) {
				console.warn("de-queueing event obj242." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj242").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj242_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj300
(function(){
	window.obj242_onTap_runningActionsCount = obj242_onTap_runningActionsCount + 1;

	var selector = "#obj300";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj242_onTap_runningActionsCount = window.obj242_onTap_runningActionsCount - 1;
if (window.obj242_onTap_runningActionsCount < 0) {
	window.obj242_onTap_runningActionsCount = 0;
} else if (window.obj242_onTap_runningActionsCount == 0) {
	obj242_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj242_onTap_runningActionsCount = window.obj242_onTap_runningActionsCount - 1;
if (window.obj242_onTap_runningActionsCount < 0) {
	window.obj242_onTap_runningActionsCount = 0;
} else if (window.obj242_onTap_runningActionsCount == 0) {
	obj242_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj242_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj242_onTap_activeActionGroupIndex = -1;
		$("#obj242").trigger("obj242_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 242) {
				console.warn("de-queueing event obj242." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj242").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj242_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_914();
function playAudioFile_914() {
	window.obj242_onTap_runningActionsCount = obj242_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile914")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile914");
			$("#obj_audio_playSoundFile914").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj242_onTap_runningActionsCount = window.obj242_onTap_runningActionsCount - 1;
if (window.obj242_onTap_runningActionsCount < 0) {
	window.obj242_onTap_runningActionsCount = 0;
} else if (window.obj242_onTap_runningActionsCount == 0) {
	obj242_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj242_onTap_runningActionsCount = window.obj242_onTap_runningActionsCount - 1;
if (window.obj242_onTap_runningActionsCount < 0) {
	window.obj242_onTap_runningActionsCount = 0;
} else if (window.obj242_onTap_runningActionsCount == 0) {
	obj242_onTap_actionGroup2();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj242_onTap_runningActionsCount = window.obj242_onTap_runningActionsCount - 1;
if (window.obj242_onTap_runningActionsCount < 0) {
	window.obj242_onTap_runningActionsCount = 0;
} else if (window.obj242_onTap_runningActionsCount == 0) {
	obj242_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj242_onTap_runningActionsCount = window.obj242_onTap_runningActionsCount - 1;
if (window.obj242_onTap_runningActionsCount < 0) {
	window.obj242_onTap_runningActionsCount = 0;
} else if (window.obj242_onTap_runningActionsCount == 0) {
	obj242_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj242_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj242_onTap_activeActionGroupIndex = -1;
		$("#obj242").trigger("obj242_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 242) {
				console.warn("de-queueing event obj242." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj242").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj242_onTap_activeActionGroupIndex = 2;
	





















};
obj240_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj240_onTap_activeActionGroupIndex = -1;
		$("#obj240").trigger("obj240_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 240) {
				console.warn("de-queueing event obj240." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj240").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj240_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj302
(function(){
	window.obj240_onTap_runningActionsCount = obj240_onTap_runningActionsCount + 1;

	var selector = "#obj302";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj240_onTap_runningActionsCount = window.obj240_onTap_runningActionsCount - 1;
if (window.obj240_onTap_runningActionsCount < 0) {
	window.obj240_onTap_runningActionsCount = 0;
} else if (window.obj240_onTap_runningActionsCount == 0) {
	obj240_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj240_onTap_runningActionsCount = window.obj240_onTap_runningActionsCount - 1;
if (window.obj240_onTap_runningActionsCount < 0) {
	window.obj240_onTap_runningActionsCount = 0;
} else if (window.obj240_onTap_runningActionsCount == 0) {
	obj240_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj240_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj240_onTap_activeActionGroupIndex = -1;
		$("#obj240").trigger("obj240_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 240) {
				console.warn("de-queueing event obj240." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj240").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj240_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_915();
function playAudioFile_915() {
	window.obj240_onTap_runningActionsCount = obj240_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile915")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile915");
			$("#obj_audio_playSoundFile915").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj240_onTap_runningActionsCount = window.obj240_onTap_runningActionsCount - 1;
if (window.obj240_onTap_runningActionsCount < 0) {
	window.obj240_onTap_runningActionsCount = 0;
} else if (window.obj240_onTap_runningActionsCount == 0) {
	obj240_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj240_onTap_runningActionsCount = window.obj240_onTap_runningActionsCount - 1;
if (window.obj240_onTap_runningActionsCount < 0) {
	window.obj240_onTap_runningActionsCount = 0;
} else if (window.obj240_onTap_runningActionsCount == 0) {
	obj240_onTap_actionGroup2();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj240_onTap_runningActionsCount = window.obj240_onTap_runningActionsCount - 1;
if (window.obj240_onTap_runningActionsCount < 0) {
	window.obj240_onTap_runningActionsCount = 0;
} else if (window.obj240_onTap_runningActionsCount == 0) {
	obj240_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj240_onTap_runningActionsCount = window.obj240_onTap_runningActionsCount - 1;
if (window.obj240_onTap_runningActionsCount < 0) {
	window.obj240_onTap_runningActionsCount = 0;
} else if (window.obj240_onTap_runningActionsCount == 0) {
	obj240_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj240_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj240_onTap_activeActionGroupIndex = -1;
		$("#obj240").trigger("obj240_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 240) {
				console.warn("de-queueing event obj240." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj240").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj240_onTap_activeActionGroupIndex = 2;
	





















};
obj238_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj238_onTap_activeActionGroupIndex = -1;
		$("#obj238").trigger("obj238_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 238) {
				console.warn("de-queueing event obj238." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj238").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj238_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj309
(function(){
	window.obj238_onTap_runningActionsCount = obj238_onTap_runningActionsCount + 1;

	var selector = "#obj309";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj238_onTap_runningActionsCount = window.obj238_onTap_runningActionsCount - 1;
if (window.obj238_onTap_runningActionsCount < 0) {
	window.obj238_onTap_runningActionsCount = 0;
} else if (window.obj238_onTap_runningActionsCount == 0) {
	obj238_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj238_onTap_runningActionsCount = window.obj238_onTap_runningActionsCount - 1;
if (window.obj238_onTap_runningActionsCount < 0) {
	window.obj238_onTap_runningActionsCount = 0;
} else if (window.obj238_onTap_runningActionsCount == 0) {
	obj238_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj238_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj238_onTap_activeActionGroupIndex = -1;
		$("#obj238").trigger("obj238_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 238) {
				console.warn("de-queueing event obj238." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj238").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj238_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_916();
function playAudioFile_916() {
	window.obj238_onTap_runningActionsCount = obj238_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile916")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile916");
			$("#obj_audio_playSoundFile916").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj238_onTap_runningActionsCount = window.obj238_onTap_runningActionsCount - 1;
if (window.obj238_onTap_runningActionsCount < 0) {
	window.obj238_onTap_runningActionsCount = 0;
} else if (window.obj238_onTap_runningActionsCount == 0) {
	obj238_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj238_onTap_runningActionsCount = window.obj238_onTap_runningActionsCount - 1;
if (window.obj238_onTap_runningActionsCount < 0) {
	window.obj238_onTap_runningActionsCount = 0;
} else if (window.obj238_onTap_runningActionsCount == 0) {
	obj238_onTap_actionGroup2();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj238_onTap_runningActionsCount = window.obj238_onTap_runningActionsCount - 1;
if (window.obj238_onTap_runningActionsCount < 0) {
	window.obj238_onTap_runningActionsCount = 0;
} else if (window.obj238_onTap_runningActionsCount == 0) {
	obj238_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj238_onTap_runningActionsCount = window.obj238_onTap_runningActionsCount - 1;
if (window.obj238_onTap_runningActionsCount < 0) {
	window.obj238_onTap_runningActionsCount = 0;
} else if (window.obj238_onTap_runningActionsCount == 0) {
	obj238_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj238_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj238_onTap_activeActionGroupIndex = -1;
		$("#obj238").trigger("obj238_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 238) {
				console.warn("de-queueing event obj238." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj238").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj238_onTap_activeActionGroupIndex = 2;
	





















};
obj236_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj236_onTap_activeActionGroupIndex = -1;
		$("#obj236").trigger("obj236_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 236) {
				console.warn("de-queueing event obj236." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj236").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj236_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj311
(function(){
	window.obj236_onTap_runningActionsCount = obj236_onTap_runningActionsCount + 1;

	var selector = "#obj311";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj236_onTap_runningActionsCount = window.obj236_onTap_runningActionsCount - 1;
if (window.obj236_onTap_runningActionsCount < 0) {
	window.obj236_onTap_runningActionsCount = 0;
} else if (window.obj236_onTap_runningActionsCount == 0) {
	obj236_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj236_onTap_runningActionsCount = window.obj236_onTap_runningActionsCount - 1;
if (window.obj236_onTap_runningActionsCount < 0) {
	window.obj236_onTap_runningActionsCount = 0;
} else if (window.obj236_onTap_runningActionsCount == 0) {
	obj236_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj236_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj236_onTap_activeActionGroupIndex = -1;
		$("#obj236").trigger("obj236_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 236) {
				console.warn("de-queueing event obj236." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj236").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj236_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_917();
function playAudioFile_917() {
	window.obj236_onTap_runningActionsCount = obj236_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile917")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile917");
			$("#obj_audio_playSoundFile917").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj236_onTap_runningActionsCount = window.obj236_onTap_runningActionsCount - 1;
if (window.obj236_onTap_runningActionsCount < 0) {
	window.obj236_onTap_runningActionsCount = 0;
} else if (window.obj236_onTap_runningActionsCount == 0) {
	obj236_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj236_onTap_runningActionsCount = window.obj236_onTap_runningActionsCount - 1;
if (window.obj236_onTap_runningActionsCount < 0) {
	window.obj236_onTap_runningActionsCount = 0;
} else if (window.obj236_onTap_runningActionsCount == 0) {
	obj236_onTap_actionGroup2();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj236_onTap_runningActionsCount = window.obj236_onTap_runningActionsCount - 1;
if (window.obj236_onTap_runningActionsCount < 0) {
	window.obj236_onTap_runningActionsCount = 0;
} else if (window.obj236_onTap_runningActionsCount == 0) {
	obj236_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj236_onTap_runningActionsCount = window.obj236_onTap_runningActionsCount - 1;
if (window.obj236_onTap_runningActionsCount < 0) {
	window.obj236_onTap_runningActionsCount = 0;
} else if (window.obj236_onTap_runningActionsCount == 0) {
	obj236_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj236_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj236_onTap_activeActionGroupIndex = -1;
		$("#obj236").trigger("obj236_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 236) {
				console.warn("de-queueing event obj236." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj236").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj236_onTap_activeActionGroupIndex = 2;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		























/*
 *
 *   obj242: Event Touch Down
 *
 */
$("#obj242").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj242_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj242_onTap is still running");
	return;
}
var obj242_onTap_runningActionsCount = 0;
var obj242_onTap_loopCount = 0;
obj242_onTap_actionGroup0();
});










/*
 *
 *   obj240: Event Touch Down
 *
 */
$("#obj240").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj240_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj240_onTap is still running");
	return;
}
var obj240_onTap_runningActionsCount = 0;
var obj240_onTap_loopCount = 0;
obj240_onTap_actionGroup0();
});










/*
 *
 *   obj238: Event Touch Down
 *
 */
$("#obj238").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj238_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj238_onTap is still running");
	return;
}
var obj238_onTap_runningActionsCount = 0;
var obj238_onTap_loopCount = 0;
obj238_onTap_actionGroup0();
});










/*
 *
 *   obj236: Event Touch Down
 *
 */
$("#obj236").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj236_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj236_onTap is still running");
	return;
}
var obj236_onTap_runningActionsCount = 0;
var obj236_onTap_loopCount = 0;
obj236_onTap_actionGroup0();
});



































































		
		
		/*
		 *
	 	 *  Page is ready to be played
	 	 *
	 	 */
		XPUB.ready();
	 }
});
$(window).on(pubcoder.events.pagePlay, function() {
	$(window).trigger(pubcoder.events.pageReady);
	if (pubcoder.isInteractionObserverSupported) {
		var ob = new IntersectionObserver(function(entries) {
			$(entries).each(function (index, entry) {
				if (entry.isIntersecting) {
					$(entry.target).trigger(pubcoder.events.appear);
				} else {
					$(entry.target).trigger(pubcoder.events.disappear);
				}
			});
		}, {
			root: null,
			rootMargin: "0px",
			threshold: 0
		});
		$(".SCView").each(function (i, el) {
			ob.observe(el);
		});	
	}
	
$("#obj246").trigger('SCEventShow');
$("#obj244").trigger('SCEventShow');
$("#obj242").trigger('SCEventShow');
$("#obj240").trigger('SCEventShow');
$("#obj238").trigger('SCEventShow');
$("#obj236").trigger('SCEventShow');
$("#obj313").trigger('SCEventShow');
$("#obj315").trigger('SCEventShow');
	
});