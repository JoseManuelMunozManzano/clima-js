!function(e){var t={};function n(c){if(t[c])return t[c].exports;var r=t[c]={i:c,l:!1,exports:{}};return e[c].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,c){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(c,r,function(t){return e[t]}.bind(null,r));return c},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/public/js",n(n.s=0)}([function(e,t){var n=document.querySelector(".container"),c=document.querySelector("#resultado"),r=document.querySelector("#formulario");function i(e){e.preventDefault();var t=document.querySelector("#ciudad").value,n=document.querySelector("#pais").value;""!==t&&""!==n?function(e,t){var n="https://api.openweathermap.org/data/2.5/weather?q=".concat(e,",").concat(t,"&units=metric&lang=es&appid=").concat("66d8fedebc4f194e22afe4356eeb5ff1");(function(){d();var e=document.createElement("div");e.classList.add("sk-fading-circle"),e.innerHTML='\n    <div class="sk-circle1 sk-circle"></div>\n    <div class="sk-circle2 sk-circle"></div>\n    <div class="sk-circle3 sk-circle"></div>\n    <div class="sk-circle4 sk-circle"></div>\n    <div class="sk-circle5 sk-circle"></div>\n    <div class="sk-circle6 sk-circle"></div>\n    <div class="sk-circle7 sk-circle"></div>\n    <div class="sk-circle8 sk-circle"></div>\n    <div class="sk-circle9 sk-circle"></div>\n    <div class="sk-circle10 sk-circle"></div>\n    <div class="sk-circle11 sk-circle"></div>\n    <div class="sk-circle12 sk-circle"></div>\n  ',c.appendChild(e)})(),fetch(n).then((function(e){return e.json()})).then((function(e){d(),"404"!==e.cod?function(e){var t=e.name,n=e.main,r=n.temp,i=n.temp_max,a=n.temp_min,d=document.createElement("p");d.textContent="Clima en ".concat(t),d.classList.add("font-bold","text-2xl");var o=document.createElement("p");o.innerHTML="".concat(parseInt(r)," &#8451;"),o.classList.add("font-bold","text-6xl");var l=document.createElement("p");l.innerHTML="Max: ".concat(parseInt(i)," &#8451;"),l.classList.add("text-xl");var s=document.createElement("p");s.innerHTML="Min: ".concat(parseInt(a)," &#8451;"),s.classList.add("text-xl");var u=document.createElement("div");u.classList.add("text-center","text-white"),u.appendChild(d),u.appendChild(o),u.appendChild(l),u.appendChild(s),c.appendChild(u)}(e):a("Ciudad no encontrada")}))}(t,n):a("Ambos campos son obligatorios")}function a(e){if(!document.querySelector(".bg-red-100")){var t=document.createElement("div");t.classList.add("bg-red-100","border-red-400","text-red-700","px-4","py-3","rounded","max-w-md","mx-auto","mt-6","text-center"),t.innerHTML='\n    <strong class="font-bold">Error!</strong>\n    <span class="block">'.concat(e,"</span>\n  "),n.appendChild(t),setTimeout((function(){t.remove()}),3e3)}}function d(){for(;c.firstChild;)c.removeChild(c.firstChild)}window.addEventListener("load",(function(){r.addEventListener("submit",i)}))}]);
//# sourceMappingURL=32250c836ddabf528d62.js.map