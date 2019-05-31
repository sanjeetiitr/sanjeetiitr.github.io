$(document).ready(function() {

	// TYPING ANIMATION
		

	// JAVASCRIPT MEDIA QUERIES
	if( $(window).width() < 992 ) {
  	$('.contact-us #right').removeClass('right');
  	$('.contact-us #left').removeClass('left');
  	$(".banner .textshadow").hide();
  } else {
  	$('.contact-us #right').addClass('right');
  	$('.contact-us #left').addClass('left');
  	$(".banner .textshadow").show();
  }

  if( $(window).width() < 670 ) {
		$('.banner .content').css('width', '400px');
		$('.banner .content p').css('width', '440px');
		$('.banner .content h2').css('font-size', '40px');
  } else {
  	$('.banner .content').css('width', '640px');
		$('.banner .content p').css('width', '640px');
		$('.banner .content h2').css('font-size', '64px');
  }

	$(window).resize(function() {
	    if( $(this).width() < 992 ) {
	    	$('.contact-us #right').removeClass('right');
	    	$('.contact-us #left').removeClass('left');
	    	$(".banner .textshadow").hide();
	    } else {
	    	$('.contact-us #right').addClass('right');
	    	$('.contact-us #left').addClass('left');
	    	$(".banner .textshadow").show();
	    }
	});
	$(window).resize(function() {
	    if( $(this).width() < 670 ) {
				$('.banner .content').css('width', '400px');
				$('.banner .content p').css('width', '440px');
				$('.banner .content h2').css('font-size', '40px');
	    } else {
	    	$('.banner .content').css('width', '640px');
				$('.banner .content p').css('width', '640px');
				$('.banner .content h2').css('font-size', '64px');
	    }
	});

	// OVERVIEW CONSOLE IMAGE CHANGE
	// $(".overview .cards").click(function() {
	// 	$(".overview .selected").removeClass("selected");
	// 	$(this).addClass("selected");
	// 	var id = $(this).attr("id"); 
	// 	var back = 0;
	// 	switch(id) {
	// 		case "1":
	// 			back = "training.jpeg";
	// 			break;
	// 		case "2":
	// 			back = "automation.gif";
	// 			break;
	// 		case "3":
	// 			back = "decision.png";
	// 			break;
	// 		case "4":
	// 			back = "results.jpg";
	// 			break;
	// 		default: 
	// 			back = "training.jpeg";
	// 	}


	// 	$(".overview .console").css({
	// 		"background": "url(../img/" + back + ")",
	// 		"background-repeat": "no-repeat",
	// 		"background-size": "cover"
	// 	});
	// 	switch(id) {
	// 		case "1":
	// 			$(".overview .console").css({
	// 				"background-size": "cover"
	// 			});
	// 			break;
	// 		case "2":
	// 			back = "img11.jpg";
	// 			break;
	// 		case "3":
	// 			back = "decision.png";
	// 			// $(".overview .console").css({
	// 			// 	"background-size": "200%"
	// 			// });
	// 			break;
	// 		case "4":
	// 			back = "img33.jpg";
	// 			break;
	// 		default: 
	// 			back = "img0.jpg";
	// 	}

	// OVERVIEW TEXT CHANGE
		$(".overview .cards").click(function() {
		$(".overview .selected").removeClass("selected");
		$(this).addClass("selected");
		var id = $(this).attr("id"); 
		var head = null;
		var txt = null;
		switch(id) {
			case "1":
				head= "Dynamic Training";
				txt = "Fast implementation is achieved by our deep learning approach which also guarantees continuous improvement of the model. The algorithm becomes smarter over time by learning from these conversations.";
				break;
			case "2":
				head= "Intelligent Automation";
				txt = "Every answer predicted by our deep neural networks is calculated on a confidence rating. Answers above the confidence threshold are automated, while the rest are served as intelligent prompts to contact centre managers in their integrated CRM systems.";
				break;
			case "3":
				head= "Better Decission Making";
				txt = "Derive key business insights, forecast your contact centre capacity and manage, measure & analyse the performance of your customer service team.";
				break;
			case "4":
				head= "Measurable Results";
				txt = "Optimise case handling time, increase quality and customer satisfaction scores and reinforce your contact center for peak activity.";
				break;
			default: 
				head= "Dynamic Training";
				txt = "Fast implementation is achieved by our deep learning approach which also guarantees continuous improvement of the model. The algorithm becomes smarter over time by learning from these conversations.";
		}


		// $(".overview .console .box .center h3").text(head);
		// $(".overview .console .box p").text(txt);
		$(".overview .console .box .center").slideUp(function() {
		  $(this).html("<h3>" + head + "</h3>").slideDown();
		});

		$(".overview .console .box p").slideUp(function() {
		  $(this).text(txt).slideDown();
		});


	});




	// .IN-ACTION SELECTIONS
	$(".in-action .options .option").click(function() {
		$(".in-action .options .selected").removeClass("selected");
		$(this).addClass("selected");
	});

	$(".in-action .tabs .tab").click(function() {
		$(".in-action .tabs .selected").removeClass("selected");
		$(this).addClass("selected");
		var id = $(this).find("div").attr("id");
		var ids = ["bank", "hotel", "resturaunt", "navigation"];

		for (var i = ids.length - 1; i >= 0; i--) {
			$(".in-action .tabs .tab #" + ids[i]).removeClass(ids[i] + "-white");
			$(".in-action .tabs .tab #" + ids[i]).addClass(ids[i] + "-black");
		};
		$(".in-action .tabs .tab #" + id).removeClass(id + "-black");
		$(".in-action .tabs .tab #" + id).addClass(id + "-white");
	});
	// IN-ACTION MOBILE SELECTION
	$(".in-action-mobile .tabs .tab").click(function() {
		var txt = $(this).find("h4").text();
		$(".in-action-mobile .dropdown button .name").text(txt);
	});




	// RANDOMIZATIONS	
		var strs = [["Where’s my pizza?", "Please provide order number","1A2B3C","It’s on the way, expect delivery in 20 mins!"], ["Lost my credit card", "Would you like to block it?", "Yes" ,"Please provide your card number","1234-5678-9012-3456","We’ve sent you an OTP, enter here.","988716","Confirm blocking your credit card?","Yes","Alright, your credit card is blocked"], ["Please ask chef to put extra cheese in the burger.", "Extra cheese for Doubly Whammy burger?","Yes","Alerting the chef for this.","Thanks!"],[ "Account balance", "Your current account balance is 324,134.99","Last transaction","2000 paid at Om Fuel Station, South Ex at 14:31 on 21st July"], ["What’s the luggage capacity?", "Cabin or check-in luggage?","Check-in","You can check in 25kg of 10x10x10 box with 1 PNR."], ["Is my flight on time?", "Kindly provide PNR","W3D7G8","Your flight Indigo 6160 to Del is on time  at1535 HRS."]];

		// var a: id number of the div algo is being applied to
		// var b: current element of the conversation construct

		var b = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		var x = "L";

		var sayhi_1 = function() {
			var a = 1;
			var i = 0;
			setInterval(function() {
				if(i>=5) {
					x = "R";
				} else {
					x = "L";
				}

				if(i == 5) {
					a = 1;
				}
				$("#"+x+a.toString()).html(strs[a][b[i]]);

				b[i] = b[i] + 1;
				if (b[i] == strs[a].length){
					b[i] = 0;	
				}
				if(b[i]%2 == 0) {
					$("#"+x+a.toString()).css("color", "rgba(255, 255, 0, 0.35)");
				} else {
					$("#"+x+a.toString()).css("color", "transparent");
				}
				++i;
				++a;
			}, 500);
			
			setTimeout(sayhi_1, 2400);
		}
		setTimeout(sayhi_1, 400);


	// STARRING
	$(".in-action .main .stars .img").hover(function() {
		var lim = $(this).attr("id");
		var stars = $(this).parent().find("div");
		console.log(stars);
		var arr = [];
		for (var i = lim - 1; i >= 0; i--) {
			$(stars[i]).addClass("starred");
		};
	});

	$(".in-action .main .stars").mouseleave(function() {
		$(this).children().removeClass("starred");
	});
});

// SCROLLL PLUGIN

// var stickyNavTop = $('.overview').offset().top;
// var inUseTop = $('.in-use').offset().top;
var navHeight = $(".navbar").height();
var tryHeadHeight = $(".try .heading").height();

var inActionTop = $('.in-action').offset().top - navHeight;
var introTop = $(".intro").offset().top;
var tryContainerTop = $('.try .container').offset().top - tryHeadHeight - navHeight;
var contactUsTop = $('.contact-us').offset().top - 700;
var overviewTop = $(".banner").offset().top + $(".banner").height() - navHeight;

 
var stickyNav = function(){
var scrollTop = $(window).scrollTop();

if(scrollTop) {
	$(".navbar").css({"background": "white", "color": "#777"});
	$(".navbar .links li a").removeClass("white");
	
	$(".navbar .navbar-header .navbar-brand").removeClass("white-logo");
	$(".navbar .navbar-header .navbar-brand").addClass("blue-logo");
  
  $('.navbar #overview').css({"background-position": "0 -100%"});
  $(".navbar-default .navbar-nav>#overview>a").css("color", "white");
} else {
	$(".navbar").css({"background": "transparent"});
	$(".navbar .links li a").addClass("white");
	
	$(".navbar .navbar-header .navbar-brand").removeClass("blue-logo");
	$(".navbar .navbar-header .navbar-brand").addClass("white-logo");
  
  $('.navbar #overview').css({"background-position": "initial"});
  $(".navbar-default .navbar-nav>#overview>a").css("color", "#777");
}

if (scrollTop > introTop) { 
} else {
}


if (scrollTop >= tryContainerTop) { 
  $('.navbar #automata').css({"background-position": "0 -100%"});
  $('.navbar #overview').css({"background-position": "initial"});
  $(".navbar-default .navbar-nav>#automata>a").css("color", "white");
  $(".navbar-default .navbar-nav>#overview>a").css("color", "#777");
} else {
  $('.navbar #automata').css({"background-position": "initial"});
  $(".navbar-default .navbar-nav>#automata>a").css("color", "#777");
}
if (scrollTop >= inActionTop) { 
  $('.navbar #demo').css({"background-position": "0 -100%"});
  $('.navbar #automata').css({"background-position": "initial"});
  $(".navbar-default .navbar-nav>#demo>a").css("color", "white");
  $(".navbar-default .navbar-nav>#automata>a").css("color", "#777");
} else {
  $('.navbar #demo').css({"background-position": "initial"});
  $(".navbar-default .navbar-nav>#demo>a").css("color", "#777");
}
if (scrollTop >= contactUsTop) {
  $('.navbar #contact').css({"background-position": "0 -100%"});
  $('.navbar #demo').css({"background-position": "initial"});	
  $(".navbar-default .navbar-nav>#contact>a").css("color", "white");
  $(".navbar-default .navbar-nav>#demo>a").css("color", "#777");
} else {
  $('.navbar #contact').css({"background-position": "initial"});
  $(".navbar-default .navbar-nav>#contact>a").css("color", "#777");
}


};





$("#contact").click(function() {
	window.scrollTo(0, $('.contact-us').offset().top);
});

$("#demo").click(function() {
	window.scrollTo(0, inActionTop);
});

$("#automata").click(function() {
	window.scrollTo(0, tryContainerTop);
});

$("#overview").click(function() {
	window.scrollTo(0, overviewTop);
});

stickyNav();
 
$(window).scroll(function() {
  stickyNav();
});