var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("7Y9D8");r=o("7Y9D8");function i(e,t){const n=Math.random()>.3;return new Promise(((o,r)=>{setTimeout((()=>{n?o({position:e,delay:t}):r({position:e,delay:t})}),t)}))}const u={form:document.querySelector(".form"),delayInp:document.querySelector('input[name="delay"]'),stepInp:document.querySelector('input[name="step"]'),amountInp:document.querySelector('input[name="amount"]'),button:document.querySelector('button[type="submit"]')};u.form.addEventListener("submit",(e=>{e.preventDefault();const t=u.delayInp.value,n=u.stepInp.value,o=u.amountInp.value;let l=t;for(let e=1;e<=o;e+=1){i(e,l).then((({position:e,delay:t})=>{r.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{r.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)})),l+=n}}));
//# sourceMappingURL=03-promises.61048279.js.map