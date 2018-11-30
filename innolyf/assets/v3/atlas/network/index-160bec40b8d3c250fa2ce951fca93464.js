function getFormData(e){var t=[].slice.call(e.querySelectorAll("[name]")),n={};return t.forEach(function(e){n[e.getAttribute("name")]=e.value}),n}function submitForm(e){var t=document.querySelector("meta[name=csrf-token]").getAttribute("content"),n=getFormData(e),r=new XMLHttpRequest;r.addEventListener("load",submitDone),r.open("POST.html","/atlas"),r.setRequestHeader("Content-Type","application/json;charset=UTF-8"),r.setRequestHeader("x-stripe-csrf-token",t),r.send(JSON.stringify(n))}function submitDone(){modal.classList.add("success")}var modalOverlay=document.querySelector(".modal-overlay"),modal=modalOverlay.querySelector(".join-modal"),form=modal.querySelector("form"),submitButton=form.querySelector("input[type='submit']"),closeButton=modal.querySelector("a.close"),HASHES=["#join","#apply","#request-access"],showJoinModal=function(){modalOverlay.classList.add("visible"),modal.querySelectorAll("input[type='text']")[0].focus()},hideJoinModal=function(){modalOverlay.classList.remove("visible"),history.replaceState(undefined,undefined,"#"),setTimeout(function(){submitButton.classList.remove("common-Button--disabled"),modal.classList.remove("success")},350)};modalOverlay.addEventListener("click",hideJoinModal),closeButton.addEventListener("click",hideJoinModal),modal.addEventListener("click",function(e){e.stopPropagation()}),document.addEventListener("keyup",function(e){e.keyCode==27&&hideJoinModal()}),window.addEventListener("hashchange",function(){HASHES.indexOf(location.hash)>-1&&showJoinModal()}),document.addEventListener("DOMContentLoaded",function(){HASHES.indexOf(location.hash)>-1&&showJoinModal()}),form.addEventListener("submit",function(e){e.preventDefault();var t=[].slice.call(form.querySelectorAll("*[required]")),n=!0;t.forEach(function(e){e.validity.valid?e.parentNode.classList.remove("invalid"):(n=!1,e.parentNode.classList.add("invalid"))}),n&&(submitButton.classList.add("common-Button--disabled"),submitForm(form))});var RegionSelector=function(e,t){var n=this;n.visible=!1,n.onRegionChange=function(e){},n.dom={},n.dom.sourceButton=e,n.dom.root=t,n.dom.popoverArrow=n.dom.root.querySelector(".arrow"),n.dom.regions=[].slice.call(n.dom.root.querySelectorAll("ul.regions li a")),n.dom.map=n.dom.root.querySelector(".map"),n.selectedRegion=n.dom.regions.filter(function(e){return e.classList.contains("selected")})[0].getAttribute("data-region"),n.updateLayout=n.updateLayout.bind(n),n.dom.regions.forEach(function(e){var t=new Image;t.src="/img/v3/atlas/network/region_maps/"+e.getAttribute("data-region")+".svg",e.addEventListener("click",function(t){t.preventDefault(),n.dom.regions.forEach(function(t){t!=e&&t.classList.remove("selected")}),e.classList.add("selected"),n.selectedRegion=e.getAttribute("data-region"),setTimeout(function(){n.setVisible(!1)},250),n.onRegionChange({uid:n.selectedRegion,name:e.innerText})}),e.addEventListener("mouseenter",function(){n.dom.map.style.backgroundImage="url(/img/v3/atlas/network/region_maps/"+e.getAttribute("data-region")+".svg)"}),e.addEventListener("mouseleave",function(){n.dom.map.style.backgroundImage="url(/img/v3/atlas/network/region_maps/"+n.selectedRegion+".svg)"})}),document.body.addEventListener("click",function(){n.setVisible(!1)}),n.dom.root.addEventListener("click",function(e){e.stopPropagation()}),n.dom.sourceButton.addEventListener("click",function(e){e.stopPropagation(),n.setVisible(!n.visible)}),window.addEventListener("scroll",n.updateLayout),window.addEventListener("resize",n.updateLayout),n.updateLayout()};RegionSelector.prototype={updateLayout:function(){var e=this,t=e.dom.sourceButton.getBoundingClientRect(),n=Math.round(t.left-window.innerWidth/2+t.width/2-6),r=t.top+window.pageYOffset+50;e.dom.popoverArrow.style.marginLeft=n+"px",e.dom.root.style.marginTop=r+"px"},setVisible:function(e){var t=this;t.visible=e,t.visible?t.dom.root.classList.add("visible"):t.dom.root.classList.remove("visible")}};var Gallery=function(e,t,n){var r=this;r.companies=e,r.region="global",r.REGION_NAMES={africa:"Africa","asia-pacific":"Asia Pacific",europe:"Europe","latin-america":"Latin America","middle-east":"Middle East","north-america":"North America"},r.popoverVisible=!1,r.POPOVER_X_PADDING=30,r.popoverDismissalTimer=null,r.TOUCH_DEVICE="ontouchstart"in document.documentElement,r.dom={},r.dom.root=t,r.dom.popover=n,r.dom.popoverOverlay=r.dom.popover.parentElement,r.dom.popoverCloseButton=r.dom.popover.querySelector("a.close"),r.logos=[].slice.call(r.dom.root.querySelectorAll("a")),r.logos.forEach(function(e){r.TOUCH_DEVICE?e.addEventListener("click",function(){r.showPopover(e)}):(e.addEventListener("mouseenter",function(){clearTimeout(r.popoverDismissalTimer),r.showPopover(e)}),e.addEventListener("mouseout",function(e){r._hidePopoverAfterDelay(200)}))}),r.TOUCH_DEVICE?r.dom.popoverCloseButton.addEventListener("click",function(){r._setPopoverVisible(!1)}):(r.dom.popover.addEventListener("mouseenter",function(){clearTimeout(r.popoverDismissalTimer)}),r.dom.popover.addEventListener("mouseleave",function(){r._hidePopoverAfterDelay(200)}),window.addEventListener("scroll",function(e){e.preventDefault(),r._setPopoverVisible(!1)}))};Gallery.prototype={_setPopoverVisible:function(e){var t=this;t.popoverVisible=e,t.popoverVisible?t.dom.popoverOverlay.classList.add("visible"):t.dom.popoverOverlay.classList.remove("visible")},_hidePopoverAfterDelay:function(e){var t=this;t.popoverDismissalTimer=setTimeout(function(){t._setPopoverVisible(!1)},e)},_labelForRegions:function(e){var t=this;return e.length==Object.keys(t.REGION_NAMES).length?"Global":e.map(function(e){return t.REGION_NAMES[e]}).sort().join(", ")},_setPopoverContent:function(e){var t=this;t.dom.popover.querySelector(".name").innerText=e.name;var n=t._labelForRegions(e.regions);t.dom.popover.querySelector(".region").innerText=n,t.dom.popover.querySelector(".description").innerText=e.copy;var r=t.dom.popover.querySelector("a.info");e.url!==undefined?(r.parentElement.style.display="inline-block",r.setAttribute("href",e.url)):r.parentElement.style.display="none";var i=t.dom.popover.querySelector("a.contact");e.email!==undefined&&e.email.length>0?(i.parentElement.style.display="inline-block",i.setAttribute("href","mailto:"+e.email)):i.parentElement.style.display="none"},setRegion:function(e){var t=this;t.region=e,t.logos.forEach(function(n){var r=t.companies[n.getAttribute("data-company")];e=="all"||r.regions.indexOf(e)!=-1?n.parentElement.style.display="block":n.parentElement.style.display="none"})},showPopover:function(e){var t=this,n=t.companies[e.getAttribute("data-company")];t._setPopoverContent(n);if(!t.TOUCH_DEVICE){var r=e.getBoundingClientRect(),i,s=Math.round(r.top-t.dom.popover.offsetHeight/2+r.height/2);r.left+r.width+t.dom.popover.offsetWidth+t.POPOVER_X_PADDING<window.innerWidth-20?(i=Math.round(r.left+r.width+t.POPOVER_X_PADDING),t.dom.popover.classList.add("right"),t.dom.popover.classList.remove("left")):(i=Math.round(r.left-t.dom.popover.offsetWidth-t.POPOVER_X_PADDING),t.dom.popover.classList.add("left"),t.dom.popover.classList.remove("right")),t.dom.popover.style.left=i+"px",t.dom.popover.style.top=s+"px"}t._setPopoverVisible(!0)}},function(){var e=JSON.parse(document.getElementById("network-partners-data").textContent),t=new Gallery(e,document.querySelector("section.companies .row"),document.querySelector(".info-popover")),n=document.querySelector("a.common-Button.region"),r=new RegionSelector(n,document.querySelector(".region-selector"));r.onRegionChange=function(e){n.innerText=e.name,r.updateLayout(),t.setRegion(e.uid)}}();