import './polyfills.server.mjs';
function o(t,n){return r=>{let e=r.value;if(e==null||e==="")return null;let u=e.toString().length;return u<t||u>n?{numericLength:{minLength:t,maxLength:n}}:null}}function i(){return t=>{let n=t.value;return n<0?{negativeAmount:{value:n}}:null}}export{o as a,i as b};
