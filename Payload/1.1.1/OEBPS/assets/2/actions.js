pubcoder.projectID = pubcoder.projectID || "3FB1753D59D41140A862E7ADABD43946";
pubcoder.project.id = pubcoder.project.id || "3FB1753D59D41140A862E7ADABD43946";
pubcoder.project.title = pubcoder.project.title || "acer\'s Project";
pubcoder.page.id = pubcoder.page.id || 3;
pubcoder.page.title = pubcoder.page.title || "2";
pubcoder.page.number = pubcoder.page.number || 2;
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
var obj892_onTap_activeActionGroupIndex = -1;
var obj892_onTap_runningActionsCount = 0;
var obj892_onTap_loopCount = 0;
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
		
obj892_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj892_onTap_activeActionGroupIndex = -1;
		$("#obj892").trigger("obj892_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 892) {
				console.warn("de-queueing event obj892." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj892").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj892_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj890
(function(){
	window.obj892_onTap_runningActionsCount = obj892_onTap_runningActionsCount + 1;

	var selector = "#obj890";
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
					window.obj892_onTap_runningActionsCount = window.obj892_onTap_runningActionsCount - 1;
if (window.obj892_onTap_runningActionsCount < 0) {
	window.obj892_onTap_runningActionsCount = 0;
} else if (window.obj892_onTap_runningActionsCount == 0) {
	obj892_onTap_actionGroup1();
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
				window.obj892_onTap_runningActionsCount = window.obj892_onTap_runningActionsCount - 1;
if (window.obj892_onTap_runningActionsCount < 0) {
	window.obj892_onTap_runningActionsCount = 0;
} else if (window.obj892_onTap_runningActionsCount == 0) {
	obj892_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj892_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj892_onTap_activeActionGroupIndex = -1;
		$("#obj892").trigger("obj892_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 892) {
				console.warn("de-queueing event obj892." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj892").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj892_onTap_activeActionGroupIndex = 1;
	




//	action: playMovie
//	target: obj890 
playMovie_895();
function playMovie_895() {
	window.obj892_onTap_runningActionsCount = obj892_onTap_runningActionsCount + 1;
	var myVideo = $("#obj890")[0];
	var playFromBeginning = false;
	var waitForCompletion = true;
	var doFullscreen = false;
	if (playFromBeginning) myVideo.currentTime = 0;
	myVideo.play();
	try {
		if (doFullscreen) {
			function scheduleFullscreen(msec, tries) {
				if (typeof(tries) === "undefined") {
					tries = 1;
				} else if (tries > 5) return;
				var fn;
				if (myVideo.requestFullscreen) {
					console.warn("requestFullscreen;");
					fn = myVideo.requestFullscreen;
				} else if (myVideo.mozRequestFullScreen) {
					console.warn("mozRequestFullScreen;");
					fn = myVideo.mozRequestFullScreen;
				} else if (myVideo.webkitRequestFullscreen) {
					console.warn("webkitRequestFullscreen;");
					fn = myVideo.webkitRequestFullscreen;
				} else if (myVideo.msRequestFullscreen) {
					console.warn("msRequestFullscreen;");
					fn = myVideo.msRequestFullscreen;
				} else if (myVideo.webkitEnterFullscreen) {
					console.warn("webkitEnterFullscreen");
					fn = myVideo.webkitEnterFullscreen
				} else {
					console.warn("no fullscreen support");
					return;
				}
				if (fn == myVideo.webkitEnterFullscreen) {
					try {
						fn.call(myVideo);
					} catch (error) {
						scheduleFullscreen(1000, tries++);
					}
				} else {
					fn.call(myVideo).catch(function (err) { scheduleFullscreen(1000, tries++); });
				}
			}
			scheduleFullscreen(0);
		}
	} catch (error) {
		// do nothing, just don't go fullscreen
	}
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj892_onTap_runningActionsCount = window.obj892_onTap_runningActionsCount - 1;
if (window.obj892_onTap_runningActionsCount < 0) {
	window.obj892_onTap_runningActionsCount = 0;
} else if (window.obj892_onTap_runningActionsCount == 0) {
	obj892_onTap_actionGroup2();
}
		};
		// myVideo.addEventListener('pause', actionEnded, false);
		myVideo.addEventListener('ended', actionEnded, false);
	} else {
		window.obj892_onTap_runningActionsCount = window.obj892_onTap_runningActionsCount - 1;
if (window.obj892_onTap_runningActionsCount < 0) {
	window.obj892_onTap_runningActionsCount = 0;
} else if (window.obj892_onTap_runningActionsCount == 0) {
	obj892_onTap_actionGroup2();
}
	}
}

















};
obj892_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj892_onTap_activeActionGroupIndex = -1;
		$("#obj892").trigger("obj892_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 892) {
				console.warn("de-queueing event obj892." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj892").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj892_onTap_activeActionGroupIndex = 2;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		



/*
 *
 *   obj892: Event Touch Down
 *
 */
$("#obj892").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj892_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj892_onTap is still running");
	return;
}
var obj892_onTap_runningActionsCount = 0;
var obj892_onTap_loopCount = 0;
obj892_onTap_actionGroup0();
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
	
$("#obj892").trigger('SCEventShow');
$("#obj24").trigger('SCEventShow');
$("#obj26").trigger('SCEventShow');
$("#obj31").trigger('SCEventShow');
$("#obj67").trigger('SCEventShow');
$("#obj28").trigger('SCEventShow');
$("#obj882").trigger('SCEventShow');
	
});