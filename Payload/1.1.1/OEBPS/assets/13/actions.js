pubcoder.projectID = pubcoder.projectID || "3FB1753D59D41140A862E7ADABD43946";
pubcoder.project.id = pubcoder.project.id || "3FB1753D59D41140A862E7ADABD43946";
pubcoder.project.title = pubcoder.project.title || "acer\'s Project";
pubcoder.page.id = pubcoder.page.id || 255;
pubcoder.page.title = pubcoder.page.title || "13";
pubcoder.page.number = pubcoder.page.number || 13;
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
var obj1279_onTap_activeActionGroupIndex = -1;
var obj1279_onTap_runningActionsCount = 0;
var obj1279_onTap_loopCount = 0;
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
		
obj1279_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1279_onTap_activeActionGroupIndex = -1;
		$("#obj1279").trigger("obj1279_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1279) {
				console.warn("de-queueing event obj1279." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1279").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1279_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1281();
function runjs_1281() {
	window.obj1279_onTap_runningActionsCount = obj1279_onTap_runningActionsCount + 1;

	(function(){
    // Ensure window.pubcoder and its globalvariables exist
    if (typeof window.pubcoder === "undefined") {
        window.pubcoder = {};
    }
    if (!window.pubcoder.globalvariables) {
        window.pubcoder.globalvariables = {};
    }
    
    // Toggle the videosDisabled state
    var currentState = window.pubcoder.globalvariables.videosDisabled;
    var newState = !currentState;
    window.pubcoder.globalvariables.videosDisabled = newState;
    
    // Persist the new state in localStorage
    localStorage.setItem('videosDisabled', newState.toString());
    console.log("Toggle Button: Toggled videosDisabled state to:", newState);
    
    // Update the video elements on the current page based on the new state.
    var videos = document.querySelectorAll("video");
    videos.forEach((video, index) => {
        if (!newState) {
            console.log("Toggle Button: Showing and playing video #" + (index + 1));
            video.style.display = "block"; // Adjust as needed for your layout
            video.play();
        } else {
            console.log("Toggle Button: Hiding and pausing video #" + (index + 1));
            video.pause();
            video.style.display = "none";
        }
    });
})();
	
	setTimeout(function() {
		window.obj1279_onTap_runningActionsCount = window.obj1279_onTap_runningActionsCount - 1;
if (window.obj1279_onTap_runningActionsCount < 0) {
	window.obj1279_onTap_runningActionsCount = 0;
} else if (window.obj1279_onTap_runningActionsCount == 0) {
	obj1279_onTap_actionGroup1();
}
	}, 1);
}







};
obj1279_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1279_onTap_activeActionGroupIndex = -1;
		$("#obj1279").trigger("obj1279_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1279) {
				console.warn("de-queueing event obj1279." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1279").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1279_onTap_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		





















































/*
 *
 *   obj1279: Event Touch Down
 *
 */
$("#obj1279").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1279_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1279_onTap is still running");
	return;
}
var obj1279_onTap_runningActionsCount = 0;
var obj1279_onTap_loopCount = 0;
obj1279_onTap_actionGroup0();
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
	
$("#obj290").trigger('SCEventShow');
$("#obj294").trigger('SCEventShow');
$("#obj292").trigger('SCEventShow');
$("#obj1312").trigger('SCEventShow');
$("#obj1284").trigger('SCEventShow');
$("#obj1279").trigger('SCEventShow');
	(function(){
    // Ensure window.pubcoder and its globalvariables exist
    if (typeof window.pubcoder === "undefined") {
        window.pubcoder = {};
    }
    if (!window.pubcoder.globalvariables) {
        window.pubcoder.globalvariables = {};
    }
    
    // Retrieve the stored state from localStorage.
    // If nothing is stored, default to true (videos hidden) and store it.
    var storedState = localStorage.getItem('videosDisabled');
    if (storedState === null) {
        window.pubcoder.globalvariables.videosDisabled = true;
        localStorage.setItem('videosDisabled', 'true');
        console.log("Global Code: No stored state. Setting videosDisabled to true (videos hidden) by default.");
    } else {
        // Convert the stored string ('true' or 'false') to a Boolean
        window.pubcoder.globalvariables.videosDisabled = (storedState === 'true');
        console.log("Global Code: Loaded videosDisabled state from localStorage:", window.pubcoder.globalvariables.videosDisabled);
    }
    
    // Update the video elements on the page based on the global state
    var isDisabled = window.pubcoder.globalvariables.videosDisabled;
    console.log("Global Code: Running video update. videosDisabled =", isDisabled);
    
    var videos = document.querySelectorAll("video");
    videos.forEach((video, index) => {
        // Start by ensuring videos are hidden and paused
        video.style.display = "none";
        video.pause();
        
        if (!isDisabled) {
            console.log("Global Code: Showing and playing video #" + (index + 1));
            video.style.display = "block"; // Adjust this if you need a specific display style
            video.play();
        } else {
            console.log("Global Code: Video #" + (index + 1) + " remains hidden and paused.");
        }
    });
})();
});