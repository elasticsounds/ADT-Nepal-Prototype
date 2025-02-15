pubcoder.projectID = pubcoder.projectID || "3FB1753D59D41140A862E7ADABD43946";
pubcoder.project.id = pubcoder.project.id || "3FB1753D59D41140A862E7ADABD43946";
pubcoder.project.title = pubcoder.project.title || "acer\'s Project";
pubcoder.page.id = pubcoder.page.id || 84;
pubcoder.page.title = pubcoder.page.title || "4";
pubcoder.page.number = pubcoder.page.number || 4;
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
var obj111_onTap_activeActionGroupIndex = -1;
var obj111_onTap_runningActionsCount = 0;
var obj111_onTap_loopCount = 0;
var obj114_onTap_activeActionGroupIndex = -1;
var obj114_onTap_runningActionsCount = 0;
var obj114_onTap_loopCount = 0;
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
		
obj111_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj111_onTap_activeActionGroupIndex = -1;
		$("#obj111").trigger("obj111_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 111) {
				console.warn("de-queueing event obj111." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj111").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj111_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj205
(function(){
	window.obj111_onTap_runningActionsCount = obj111_onTap_runningActionsCount + 1;

	var selector = "#obj205";
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
					window.obj111_onTap_runningActionsCount = window.obj111_onTap_runningActionsCount - 1;
if (window.obj111_onTap_runningActionsCount < 0) {
	window.obj111_onTap_runningActionsCount = 0;
} else if (window.obj111_onTap_runningActionsCount == 0) {
	obj111_onTap_actionGroup1();
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
				window.obj111_onTap_runningActionsCount = window.obj111_onTap_runningActionsCount - 1;
if (window.obj111_onTap_runningActionsCount < 0) {
	window.obj111_onTap_runningActionsCount = 0;
} else if (window.obj111_onTap_runningActionsCount == 0) {
	obj111_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj111_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj111_onTap_activeActionGroupIndex = -1;
		$("#obj111").trigger("obj111_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 111) {
				console.warn("de-queueing event obj111." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj111").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj111_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj208 
hide_323();
function hide_323() {
	var selector = "#obj208";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj111_onTap_runningActionsCount = obj111_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj111_onTap_runningActionsCount = window.obj111_onTap_runningActionsCount - 1;
if (window.obj111_onTap_runningActionsCount < 0) {
	window.obj111_onTap_runningActionsCount = 0;
} else if (window.obj111_onTap_runningActionsCount == 0) {
	obj111_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_323(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj111_onTap_runningActionsCount = window.obj111_onTap_runningActionsCount - 1;
if (window.obj111_onTap_runningActionsCount < 0) {
	window.obj111_onTap_runningActionsCount = 0;
} else if (window.obj111_onTap_runningActionsCount == 0) {
	obj111_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj111_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj111_onTap_activeActionGroupIndex = -1;
		$("#obj111").trigger("obj111_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 111) {
				console.warn("de-queueing event obj111." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj111").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj111_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_912();
function playAudioFile_912() {
	window.obj111_onTap_runningActionsCount = obj111_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile912")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile912");
			$("#obj_audio_playSoundFile912").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj111_onTap_runningActionsCount = window.obj111_onTap_runningActionsCount - 1;
if (window.obj111_onTap_runningActionsCount < 0) {
	window.obj111_onTap_runningActionsCount = 0;
} else if (window.obj111_onTap_runningActionsCount == 0) {
	obj111_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj111_onTap_runningActionsCount = window.obj111_onTap_runningActionsCount - 1;
if (window.obj111_onTap_runningActionsCount < 0) {
	window.obj111_onTap_runningActionsCount = 0;
} else if (window.obj111_onTap_runningActionsCount == 0) {
	obj111_onTap_actionGroup3();
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
				window.obj111_onTap_runningActionsCount = window.obj111_onTap_runningActionsCount - 1;
if (window.obj111_onTap_runningActionsCount < 0) {
	window.obj111_onTap_runningActionsCount = 0;
} else if (window.obj111_onTap_runningActionsCount == 0) {
	obj111_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj111_onTap_runningActionsCount = window.obj111_onTap_runningActionsCount - 1;
if (window.obj111_onTap_runningActionsCount < 0) {
	window.obj111_onTap_runningActionsCount = 0;
} else if (window.obj111_onTap_runningActionsCount == 0) {
	obj111_onTap_actionGroup3();
}
		}
	}
	
	
	
}


















};
obj111_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj111_onTap_activeActionGroupIndex = -1;
		$("#obj111").trigger("obj111_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 111) {
				console.warn("de-queueing event obj111." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj111").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj111_onTap_activeActionGroupIndex = 3;
	





















};
obj114_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj114_onTap_activeActionGroupIndex = -1;
		$("#obj114").trigger("obj114_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 114) {
				console.warn("de-queueing event obj114." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj114").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj114_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj208
(function(){
	window.obj114_onTap_runningActionsCount = obj114_onTap_runningActionsCount + 1;

	var selector = "#obj208";
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
					window.obj114_onTap_runningActionsCount = window.obj114_onTap_runningActionsCount - 1;
if (window.obj114_onTap_runningActionsCount < 0) {
	window.obj114_onTap_runningActionsCount = 0;
} else if (window.obj114_onTap_runningActionsCount == 0) {
	obj114_onTap_actionGroup1();
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
				window.obj114_onTap_runningActionsCount = window.obj114_onTap_runningActionsCount - 1;
if (window.obj114_onTap_runningActionsCount < 0) {
	window.obj114_onTap_runningActionsCount = 0;
} else if (window.obj114_onTap_runningActionsCount == 0) {
	obj114_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj114_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj114_onTap_activeActionGroupIndex = -1;
		$("#obj114").trigger("obj114_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 114) {
				console.warn("de-queueing event obj114." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj114").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj114_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj205 
hide_322();
function hide_322() {
	var selector = "#obj205";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj114_onTap_runningActionsCount = obj114_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj114_onTap_runningActionsCount = window.obj114_onTap_runningActionsCount - 1;
if (window.obj114_onTap_runningActionsCount < 0) {
	window.obj114_onTap_runningActionsCount = 0;
} else if (window.obj114_onTap_runningActionsCount == 0) {
	obj114_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_322(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj114_onTap_runningActionsCount = window.obj114_onTap_runningActionsCount - 1;
if (window.obj114_onTap_runningActionsCount < 0) {
	window.obj114_onTap_runningActionsCount = 0;
} else if (window.obj114_onTap_runningActionsCount == 0) {
	obj114_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj114_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj114_onTap_activeActionGroupIndex = -1;
		$("#obj114").trigger("obj114_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 114) {
				console.warn("de-queueing event obj114." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj114").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj114_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_913();
function playAudioFile_913() {
	window.obj114_onTap_runningActionsCount = obj114_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile913")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile913");
			$("#obj_audio_playSoundFile913").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj114_onTap_runningActionsCount = window.obj114_onTap_runningActionsCount - 1;
if (window.obj114_onTap_runningActionsCount < 0) {
	window.obj114_onTap_runningActionsCount = 0;
} else if (window.obj114_onTap_runningActionsCount == 0) {
	obj114_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj114_onTap_runningActionsCount = window.obj114_onTap_runningActionsCount - 1;
if (window.obj114_onTap_runningActionsCount < 0) {
	window.obj114_onTap_runningActionsCount = 0;
} else if (window.obj114_onTap_runningActionsCount == 0) {
	obj114_onTap_actionGroup3();
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
				window.obj114_onTap_runningActionsCount = window.obj114_onTap_runningActionsCount - 1;
if (window.obj114_onTap_runningActionsCount < 0) {
	window.obj114_onTap_runningActionsCount = 0;
} else if (window.obj114_onTap_runningActionsCount == 0) {
	obj114_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj114_onTap_runningActionsCount = window.obj114_onTap_runningActionsCount - 1;
if (window.obj114_onTap_runningActionsCount < 0) {
	window.obj114_onTap_runningActionsCount = 0;
} else if (window.obj114_onTap_runningActionsCount == 0) {
	obj114_onTap_actionGroup3();
}
		}
	}
	
	
	
}


















};
obj114_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj114_onTap_activeActionGroupIndex = -1;
		$("#obj114").trigger("obj114_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 114) {
				console.warn("de-queueing event obj114." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj114").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj114_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		























/*
 *
 *   obj111: Event Touch Down
 *
 */
$("#obj111").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj111_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj111_onTap is still running");
	return;
}
var obj111_onTap_runningActionsCount = 0;
var obj111_onTap_loopCount = 0;
obj111_onTap_actionGroup0();
});










/*
 *
 *   obj114: Event Touch Down
 *
 */
$("#obj114").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj114_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj114_onTap is still running");
	return;
}
var obj114_onTap_runningActionsCount = 0;
var obj114_onTap_loopCount = 0;
obj114_onTap_actionGroup0();
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
	
$("#obj106").trigger('SCEventShow');
$("#obj108").trigger('SCEventShow');
$("#obj111").trigger('SCEventShow');
$("#obj114").trigger('SCEventShow');
	
});