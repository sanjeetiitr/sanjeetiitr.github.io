(function(){function e(e){e.preventDefault(),e.stopPropagation();if(e.target.getAttribute("rel")!=="detail-anchor")return;t(e.target)}function t(e){if(e.classList.contains("open"))return;e.classList.add("open")}function n(e){if(!e.classList.contains("open"))return;e.classList.remove("open")}function r(){var e=document.querySelectorAll('[rel="detail-anchor"].open');e.forEach(n)}function i(){var t=document.querySelectorAll('[rel="detail-anchor"]');t.forEach(function(t){t.addEventListener("click",e),t.addEventListener("mouseenter",e),t.addEventListener("mouseleave",r)}),document.addEventListener("click",r),document.addEventListener("touchend",r)}i()})();