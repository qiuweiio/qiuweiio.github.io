(function(t,e){var i=e.documentElement,s=t.devicePixelRatio||1;function l(){e.body?e.body.style.fontSize=12*s+"px":e.addEventListener("DOMContentLoaded",l)}l();function n(){var a=i.clientWidth/10;i.style.fontSize=a+"px"}if(n(),t.addEventListener("resize",n),t.addEventListener("pageshow",function(a){a.persisted&&n()}),s>=2){var d=e.createElement("body"),r=e.createElement("div");r.style.border=".5px solid transparent",d.appendChild(r),i.appendChild(d),r.offsetHeight===1&&i.classList.add("hairlines"),i.removeChild(d)}})(window,document);