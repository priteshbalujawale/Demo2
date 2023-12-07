function childExt(){let e,t,n;null!=document.querySelector(".client-extension-container")?function e(){let t=document.querySelectorAll(".pr-failed-cc-container");t.forEach(e=>e.remove());let n=document.querySelectorAll(".pr-failed-heading-container");n.forEach(e=>e.remove())}():(function e(){let t=document.createElement("div");t.classList.add("client-extension-container"),t.id="pr-ext",document.body.appendChild(t);let n=document.createElement("div");n.classList.add("client-side-extension-body","child-ext-popup","ext-popup"),n.id="ext_body",t.appendChild(n);let l=document.createElement("button");l.classList.add("ext-open","btn"),l.id="ext_open",l.innerText="A",t.appendChild(l);let a=document.createElement("button");a.classList.add("ext-close","btn"),a.id="ext_close",a.innerText="X",n.appendChild(a);let i=document.createElement("button");i.classList.add("ext-move","btn"),i.id="ext_move",i.innerText="Ⓜ",n.appendChild(i);let d=document.createElement("div");d.classList.add("m-main-content"),n.appendChild(d)}(),function e(){let t=document.getElementById("ext_close"),n=document.getElementById("ext_body"),l=document.getElementById("ext_open"),a=document.getElementById("ext_body"),i=document.getElementById("ext_move");l.addEventListener("click",function(){n.classList.add("ext-popup"),l.classList.remove("show"),n.style.left="auto",n.style.top="10%"}),t.addEventListener("click",function(){n.classList.remove("ext-popup"),l.classList.add("show")});let d=!1,r,s;function o(e){if(d){let t=e.clientX-r,n=e.clientY-s,l=window.innerWidth-a.offsetWidth,i=window.innerHeight-a.offsetHeight;a.style.left=Math.min(l,Math.max(0,t))+"px",a.style.top=Math.min(i,Math.max(0,n))+"px"}}i.addEventListener("mousedown",function(e){e.preventDefault(),d=!0,r=e.clientX-a.offsetLeft,s=e.clientY-a.offsetTop,document.addEventListener("mousemove",o),document.addEventListener("mouseup",function(){d=!1,document.removeEventListener("mousemove",o)})})}(),e=[],t=[],n=[],function e(t){if(t.nodeType===Node.TEXT_NODE&&""!==t.textContent.trim()){let l=t.parentElement,a=l.getBoundingClientRect();a.width>0&&a.height>0&&n.push(l)}else for(let i of t.childNodes)e(i)}(document.body),n.forEach(n=>{let l=window.getComputedStyle(n),a=l.color,i=function e(t){let n=window.getComputedStyle(t),l=n.backgroundColor,a=l.match(/rgba?\((\d+), (\d+), (\d+), ([\d.]+)\)/);if(!(a&&.55>parseFloat(a[4]))&&"transparent"!==l)return l;{let i=t.parentElement;return i?e(i):""}}(n),d=parseFloat(l.fontSize);function r(e){let t=function e(t){let n=t.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?))?\s*\)/);if(!n)return null;{let[,l,a,i,d]=n.map(Number);return{r:l,g:a,b:i,a:d||1}}}(e),n=t.r,l=t.g,a=t.b,i=t.a,d=("0"+Math.round(n*i+255*(1-i)).toString(16)).slice(-2),r=("0"+Math.round(l*i+255*(1-i)).toString(16)).slice(-2),s=("0"+Math.round(a*i+255*(1-i)).toString(16)).slice(-2);return`#${d}${r}${s}`}function s(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,t,n,l){return t+t+n+n+l+l});let t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}function o(e,t,n){let l=[e,t,n].map(function(e){return(e/=255)<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)});return .2126*l[0]+.7152*l[1]+.0722*l[2]}i=r(i),a=r(a),i=s(i),a=s(a);let c=o(a.r,a.g,a.b),p=o(i.r,i.g,i.b),h=c>p?(p+.05)/(c+.05):(c+.05)/(p+.05);h>1/3&&d>24?(e.push({element:n.textContent.trim(),type:"large text",result:"FAIL",fgColor:a,bgColor:i}),t.push(n)):h>1/4.5&&d<=24&&(e.push({element:n.textContent.trim(),type:"small text",result:"FAIL",fgColor:a,bgColor:i}),t.push(n))}),function e(t,n){let l=document.querySelector(".m-main-content"),a=document.createElement("div");if(a.classList.add("m-result-row","m-result-row-1"),a.setAttribute("id","contrastResult"),a.setAttribute("data-target","result-1"),l.appendChild(a),t.length>0){let i=document.createElement("strong");i.classList.add("contrastContainerTitle"),i.innerText="Color Contrast",a.appendChild(i);let d=document.createElement("input");d.setAttribute("type","checkbox"),d.classList.add("pr-contrast-Container-CheckBox"),a.appendChild(d);let r=document.createElement("label");r.classList.add("pr-contrast-Container-CheckBox-label"),r.innerText="Highlight Failed CC",d.insertAdjacentHTML("afterend",r.innerHTML);let s=document.createElement("div");s.classList.add("contrastContainer"),a.appendChild(s);for(let o=0;o<t.length;o++){let c=["Element","Element Type","Element FG Color","Element BG Color",],p=document.createElement("ul");p.classList.add("contrastTitle","m-title"),c.forEach(e=>{let t=document.createElement("li");t.textContent=e,p.appendChild(t)});let{element:h,type:u,fgColor:m,bgColor:C,urls:g}=t[o];h=h||"",u=u||"",m=m?`rgb ${m.r}, ${m.g}, ${m.b}`:"",C=C?`rgb ${C.r}, ${C.g}, ${C.b}`:"";let f=document.createElement("div");f.classList.add("page-cc");let E=document.createElement("ul");E.classList.add("failed-contrast-container","failed-container","hover-failed-contrast-container");let x=document.createElement("li");x.innerText=h;let L=document.createElement("li");L.textContent=u;let $=document.createElement("li");$.textContent=m;let y=document.createElement("li");y.textContent=C,E.appendChild(x),E.appendChild(L),E.appendChild($),E.appendChild(y),s.appendChild(f),f.appendChild(p),f.appendChild(E)}let b=document.querySelector(".contrastContainer .page-cc");if(!b){let v=document.createElement("div");v.classList.add("noIssueContainer"),v.innerHTML="No Color Contrast Issue",a.appendChild(v)}}else{let T=document.createElement("div");T.classList.add("noIssueContainer"),T.innerHTML="No Color Contrast Issue",a.appendChild(T)}(function e(t){let n=document.createElement("div"),l=document.createElement("span");l.classList.add("pr-failed-cc-container"),l.style.backgroundColor="#e80000",l.style.color="#fff",l.style.padding="5px",l.style.fontSize="10px",l.textContent="CC Fail",n.appendChild(l);let a=t,i=document.querySelector(".pr-contrast-Container-CheckBox");i&&i.addEventListener("click",function(){if(!0==i.checked)a.forEach(e=>{e.insertAdjacentHTML("beforebegin",n.innerHTML)});else{let e=document.querySelectorAll(".pr-failed-cc-container");e.forEach(e=>e.remove())}})})(n)}(e,t),function e(){let t=[],n=[];document.URL;let l=document.querySelectorAll("h1, h2, h3, h4, h5, h6"),a=l[0],i=!0,d=!1,r=!1,s="";document.querySelectorAll("h1").length>1&&(d=!0);for(let o=0;o<l.length;o++)if(""===l[o].innerText.trim()){r=!0;break}let c=0;for(let p=0;p<l.length;p++){let h=parseInt(l[p].tagName.charAt(1));if(h>c+1){i=!1;break}c=h}"h1"!==a.tagName.toLowerCase()?(s+="h1 is not the first heading. ",t.push({result:s})):d?(s+="Multiple h1 headings detected. ",t.push({result:s})):r?(s+="Blank heading detected. ",t.push({result:s})):i?(s+="Heading structure is valid. ",[].push({result:s})):(s+="Invalid heading structure. ",t.push({result:s}));for(let u=0;u<l.length;u++){let m=l[u].tagName,C=l[u].textContent;n.push({headingLevel:m,headingText:C})}(function e(t){let n=document.querySelector(".m-main-content"),l=document.createElement("div");l.classList.add("m-result-row","active","m-result-row-0"),l.setAttribute("id","headingResult"),l.setAttribute("data-target","result-0"),n.appendChild(l);let a=document.createElement("strong");a.classList.add("headingContainerTitle"),a.innerText="Headings",l.appendChild(a);let i=document.createElement("input");i.setAttribute("type","checkbox"),i.classList.add("pr-heading-Container-CheckBox"),l.appendChild(i);let d=document.createElement("label");if(d.classList.add("pr-heading-Container-CheckBox-label"),d.innerText="Highlight Headings",i.insertAdjacentHTML("afterend",d.innerHTML),t.length>0){let r=document.createElement("div");r.classList.add("headingContainer"),l.appendChild(r),t.forEach(e=>{let{result:t}=e,n=document.createElement("div");n.classList.add("page-heading");let l=document.createElement("ul");l.classList.add("failed-heading-container","failed-container");let a=document.createElement("li");a.textContent=t,l.appendChild(a),n.appendChild(l);let i=document.getElementById("yourHeadingContainerId");i.appendChild(n)})}else{let s=document.createElement("strong");s.classList.add("noIssueContainer"),s.innerHTML="No Heading structure Issues",l.appendChild(s)}})(t),function e(t){let n=document.getElementById("headingResult");if(t){let l=document.createElement("div");l.classList.add("headingContainer"),n.appendChild(l),t.forEach(e=>{let{headingLevel:t,headingText:n}=e,a=n.split(" ");var i="color:#000 !important";a.forEach(e=>{if(e.length>1){let t=e.charAt(0);/[a-z]/.test(t)?i="color:#d80000 !important":/^[A-Z]+$/.test(e)&&(i="color:#d80000 !important")}});let d=document.createElement("div");d.classList.add("page-heading");let r=document.createElement("ul");r.classList.add("failed-heading-container","failed-container");let s=document.createElement("li");s.textContent=t;let o=document.createElement("li");o.textContent=n,o.style.cssText=i,r.appendChild(s),r.appendChild(o),d.appendChild(r),l.appendChild(d)})}else{let a=document.createElement("div");a.classList.add("noIssueContainer"),a.innerHTML="No Heading structure Issues",n.appendChild(a)}}(n),function e(t){console.log(t);let n=t,l=document.querySelector(".pr-heading-Container-CheckBox");l&&l.addEventListener("click",function(){if(!0==l.checked)n.forEach(e=>{let t=document.createElement("div"),n=document.createElement("span");n.classList.add("pr-failed-heading-container"),n.style.backgroundColor="#6400FF",n.style.color="#fff",n.style.padding="5px",n.style.fontSize="10px",n.textContent=e.tagName,t.appendChild(n),e.insertAdjacentHTML("beforebegin",t.innerHTML)});else{let e=document.querySelectorAll(".pr-failed-heading-container");e.forEach(e=>e.remove())}})}(l)}(),function e(){document.URL;let t=document.querySelector("title").text;(function e(t){let n=document.querySelector(".flfooterbrand a"),l;l=n?n.text:"";let a=document.querySelector(".m-main-content"),i=document.createElement("div");i.classList.add("m-result-row","m-result-row-2"),i.setAttribute("id","titleResult"),i.setAttribute("data-target","result-2"),a.appendChild(i);let d=document.createElement("strong");d.classList.add("titleContainerTitle"),d.innerText="Page Title",i.appendChild(d);let r=document.createElement("div");r.classList.add("titleContainer"),i.appendChild(r);let s=!t.includes(l),o=t.substring(t.length-l.length,t.length),c=s||o!==l,p=document.createElement("div");p.classList.add("page-titles");let h=document.createElement("ul");h.classList.add("failed-title-container","failed-container");let u=document.createElement("li");u.textContent=t,u.style.cssText=c?"color: #d80000 !important":"color: #333333",h.appendChild(u),p.appendChild(h),r.appendChild(p)})(t)}(),function e(){let t=document.querySelectorAll("img"),n=[];t.forEach(e=>{let t=document.domain+e.getAttribute("src"),l=e.getAttribute("alt"),a=e.hasAttribute("alt"),i=0!==e.getBoundingClientRect().width&&0!==e.getBoundingClientRect().height&&!t.startsWith("http");a&&i?n.push({src:t,alt:l}):!a&&i&&n.push({src:t,alt:"No alt"})}),function e(t){let n=function e(t){let n=new Set,l=[];return t.forEach(e=>{let{src:t,alt:a}=e;n.has(t)||(n.add(t),l.push({src:t,alt:a}))}),l}(t),l=document.querySelector(".m-main-content"),a=document.createElement("div");a.classList.add("m-result-row","m-result-row-3"),a.setAttribute("id","imgResult"),a.setAttribute("data-target","result-3"),l.appendChild(a);let i=document.createElement("strong");i.classList.add("imgContainerTitle"),i.innerText="Image",a.appendChild(i);let d=document.createElement("div");d.classList.add("imgContainer"),a.appendChild(d);let d=document.createElement("div");d.classList.add("imgContainer");let r=document.createElement("ul");r.classList.add("imgTitle","m-title");let s=document.createElement("li");s.textContent="Images";let o=document.createElement("li");o.textContent="Alt Text",r.appendChild(s),r.appendChild(o),d.appendChild(r);for(let c=0;c<n.length;c++){let p=document.createElement("div");p.classList.add("page-heading");let h=document.createElement("ul");h.classList.add("img-container","failed-container");let u=document.createElement("li"),m=document.createElement("img");m.style.width="150px",m.style.height="auto",m.src=`https://${n[c].src}`,m.alt=n[c].alt,u.appendChild(m);let C=document.createElement("li");C.classList.add("alt-text"),C.textContent=`"${n[c].alt}"`,h.appendChild(u),h.appendChild(C),p.appendChild(h),d.appendChild(p)}}(n)}())}
