(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>o});var r=t(645),a=t.n(r)()((function(n){return n[1]}));a.push([n.id,"body {\n    background-color: beige;\n    margin: 0;\n}\n\n#topline {\n    height: 100px;\n    background-color: #57DDF3;\n    margin-top: 0;\n    display: flex;\n    align-items: center;\n}\n\nh1 {\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-weight: bolder;\n    font-size: 50px;\n    padding-left: 20px;\n    color: darkblue\n}\n\n#page {\n    display: grid;\n    grid-template-columns: 100px auto;\n}\n\n@media only screen and (min-width: 700px) {\n    #page {\n        grid-template-columns: 200px auto;\n    }\n}\n\n#navbar {\n    background-color: #A1F7A1;\n    height: 100vh;\n}\n\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\nli {\n    display: block;\n    padding: 10px 20px;\n    text-decoration: none;\n    font-size: 25px;\n}\n\nli:hover {\n    background-color: #C7F954;\n}\n\n.projects {\n    padding-left: 50px;\n}\n\nbutton {\n    font-size: 25px;\n    margin-left: 50px;\n    margin-top: 10px;\n    height: 35px;\n    width: 35px;\n    border-radius: 20%;\n    background-color: #C7F954;\n}\n\n.lighter {\n    color: grey;\n}\n\n.task-button {\n    margin-left: 20px;\n}\n\n.task-item {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\ninput {\n    margin-right: 10px;\n    height: 30px;\n    width: 30px;\n}\n\n.task {\n    width: 500px;\n    min-height: 40px;\n    margin: 20px;\n    padding: 20px;\n    font-size: 25px;\n    background-color: rgb(235, 190, 225);\n    display: grid;\n    grid-template-columns: 50px auto;\n    align-items: center;\n}\n/* \n\nhttps://www.canva.com/colors/color-palettes/sea-breeze/\n\nYellow Green #C7F954\nNeon Green #A1F7A1\nTurquoise #14C2DD\nCyan #57DDF3\n */",""]);const o=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);r&&a[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},i=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=o[d]||0,p="".concat(d," ").concat(l);o[d]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(e[u].references++,e[u].updater(m)):e.push({identifier:p,updater:a(m,r),references:1}),i.push(p)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var c=t(o[i]);e[c].references--}for(var s=r(n,a),d=0;d<o.length;d++){var l=t(o[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r=t.css,a=t.media,o=t.sourceMap;a?n.setAttribute("media",a):n.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e);var r={};(()=>{t.d(r,{Z:()=>x});var n=t(379),e=t.n(n),a=t(795),o=t.n(a),i=t(569),c=t.n(i),s=t(565),d=t.n(s),l=t(216),p=t.n(l),u=t(589),m=t.n(u),f=t(426),g={};g.styleTagTransform=m(),g.setAttributes=d(),g.insert=c().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=p(),e()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;document.getElementById("today").addEventListener("click",(()=>{document.getElementById("main-page").textContent="",alert("today")})),document.getElementById("week").addEventListener("click",(()=>alert("week"))),document.getElementById("task-button").addEventListener("click",(()=>(n=>{const e=document.createElement("div");e.classList.add("task");const t=document.getElementById("task-list"),r=document.createElement("input");r.type="checkbox",x(r),r.classList.add("task-content-checkbox"),e.appendChild(r);const a=document.createElement("span");a.classList.add("task-item"),a.textContent=n;const o=document.createElement("span");console.log("icon create"),o.classList.add("fa","fa-trash","fa-lg"),a.appendChild(o),e.appendChild(a),t.appendChild(e)})("default")));const h=document.getElementsByClassName("task-content-checkbox"),v=n=>{n.addEventListener("click",(()=>{n.checked?n.parentNode.classList.add("lighter"):n.checked||n.parentNode.classList.remove("lighter")}))};Array.from(h).forEach((n=>v(n))),document.getElementById("new-project").addEventListener("click",(()=>alert("new project")));const x=v})()})();