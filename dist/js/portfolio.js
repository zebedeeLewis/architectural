!function(){"use strict";const e="no-scroll",t=Object.freeze({On:"navbar--toggled",Off:"navbar"}),n=Object.freeze({On:"scrim--active",Off:"scrim"}),c=Object.freeze({On:!0,Off:!1});function o(o,s){const r=o.document,f=s.element,i=r.querySelector("."+n.Off)||r.querySelector("."+n.On),a=r.querySelector("body");switch(s.toggled){case c.On:!function(e){e.classList.add(t.On),e.classList.remove(t.Off)}(f),i&&function(e){e.classList.add(n.On),e.classList.remove(n.Off)}(i),a&&function(t){t.classList.add(e)}(a);break;case c.Off:!function(e){e.classList.add(t.Off),e.classList.remove(t.On)}(f),i&&function(e){e.classList.add(n.Off),e.classList.remove(n.On)}(i),a&&function(t){t.classList.remove(e)}(a)}return s}!function(e){e.document.addEventListener("DOMContentLoaded",(()=>{!function(e,t){const n=e.document.querySelector(t);if(!n)throw Error(`Selected element "${t}" does not exist`);const s={element:n,toggled:c.Off};o(e,s),function(e,t){const n=t.element;n.querySelector(".navbar__toggle-open").addEventListener("click",(()=>{t.toggled=c.On,o(e,t)})),n.querySelector(".navbar__toggle-close").addEventListener("click",(()=>{t.toggled=c.Off,o(e,t)}))}(e,s)}(e,"#main-nav")}))}(window)}();