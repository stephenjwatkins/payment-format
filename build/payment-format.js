define([],function(){function t(e){var t;return e.selectionStart!=null&&e.selectionStart!==e.selectionEnd?!0:(typeof document!="undefined"&&document!==null?(t=document.selection)!=null?typeof t.createRange=="function"?t.createRange().text:void 0:void 0:void 0)?!0:!1}function n(e){var n,r,i,s;n=e.target,i=String.fromCharCode(e.which);if(!/^\d+$/.test(i))return;if(t(n))return;return s=(n.value+i).replace(/\D/g,""),r=a(s),r?s.length<=r.length[r.length.length-1]:s.length<=16}function r(e){var t,n,r,i;t=a(e);if(!t)return e;r=t.length[t.length.length-1],e=e.replace(/\D/g,""),e=e.slice(0,r);if(t.format.global)return(i=e.match(t.format))!=null?i.join(" "):void 0;n=t.format.exec(e);if(n==null)return;return n.shift(),n=n.filter(function(e){return e}),n.join(" ")}function i(e){var t,n,r,i,s,o,u;r=String.fromCharCode(e.which);if(!/^\d+$/.test(r))return;t=e.target,u=t.value,n=a(u+r),i=(u.replace(/\D/g,"")+r).length,o=16,n&&(o=n.length[n.length.length-1]);if(i>=o)return;if(t.selectionStart!=null&&t.selectionStart!==u.length)return;n&&n.type==="amex"?s=/^(\d{4}|\d{4}\s\d{6})$/:s=/(?:^|\s)(\d{4})$/;if(s.test(u))return e.preventDefault(),setTimeout(function(){return t.value=u+" "+r});if(s.test(u+r))return e.preventDefault(),setTimeout(function(){return t.value=u+r+" "})}function s(e){var t,n;t=e.target,n=t.value;if(e.which!==8)return;if(t.selectionStart!=null&&t.selectionStart!==n.length)return;if(/\d\s$/.test(n))return e.preventDefault(),setTimeout(function(){return t.value=n.replace(/\d\s$/,"")});if(/\s\d?$/.test(n))return e.preventDefault(),setTimeout(function(){return t.value=n.replace(/\s\d?$/,"")})}function o(e){return setTimeout(function(){var t,n;t=e.target,n=t.value,n=r(n),t.value=n})}function u(e){var t,n,r,i,s;t=e.target,s=t.value,i=i(s)||"unknown",t.classList.contains(i)||(n=function(){var e,t,n;n=[];for(e=0,t=cards.length;e<t;e++)r=cards[e],n.push(r.type);return n}(),t.removeClass("unknown"),t.removeClass(n.join(" ")),t.addClass(i),t.toggleClass("identified",i!=="unknown"))}function a(e){e=(e+"").replace(/\D/g,"");for(var t=0;t<cards.length;t++){var n=cards[t];if(n.pattern.test(e))return n}}function f(e){for(var t=0;t<cards.length;t++){var n=cards[t];if(n.type===e)return n}}function l(e){var t=!0,n=0,r=(e+"").split("").reverse();for(var i=0;i<r.length;i++){digit=r[i],digit=parseInt(digit,10);if(t=!t)digit*=2;digit>9&&(digit-=9),n+=digit}return n%10===0}function c(e){var e=(e+"").replace(/\s+|-/g,"");if(!/^\d+$/.test(e))return!1;var t=a(e);return t?t.length.indexOf(e.length)>=0&&(t.luhn===!1||l(e)):!1}function h(e,t){e=e.replace(/\s+/g,"");if(!/^\d+$/.test(e))return!1;var n=f(t);return n!=null?n.cvcLength.indexOf(e.length)>=0:e.length>=3&&e.length<=4}function p(e){var t;return e?((t=a(e))!=null?t.type:void 0)||null:null}function d(e,t){var n,r,i;return typeof e=="object"&&"month"in e&&(i=e,e=i.month,t=i.year),!e||!t?!1:(e=(e+"").replace(/\s+/g,""),t=(t+"").replace(/\s+/g,""),/^\d+$/.test(e)?/^\d+$/.test(t)?1<=e&&e<=12?(t.length===2&&(t<70?t="20"+t:t="19"+t),t.length!==4?!1:(r=new Date(t,e),n=new Date,r.setMonth(r.getMonth()-1),r.setMonth(r.getMonth()+1,1),r>n)):!1:!1:!1)}function v(e){var n,r,i;n=e.target,r=String.fromCharCode(e.which);if(!/^\d+$/.test(r))return;if(t(n))return;i=n.value+r,i=i.replace(/\D/g,"");if(i.length>6)return!1}function m(e){return setTimeout(function(){var t,n;return t=e.target,n=t.value,n=E(n),t.value=n})}function g(e){var t,n,r;n=String.fromCharCode(e.which);if(!/^\d+$/.test(n))return;t=e.target,r=t.value+n;if(/^\d$/.test(r)&&r!=="0"&&r!=="1")return e.preventDefault(),setTimeout(function(){return t.value="0"+r+" / "});if(/^\d\d$/.test(r))return e.preventDefault(),setTimeout(function(){return t.value=""+r+" / "})}function y(e){var t,n,r;n=String.fromCharCode(e.which);if(!/^\d+$/.test(n))return;t=e.target,r=t.value;if(/^\d\d$/.test(r))return t.value=""+r+" / "}function b(e){var t,n,r;r=String.fromCharCode(e.which);if(r!=="/"&&r!==" ")return;t=e.target,n=t.value;if(/^\d$/.test(n)&&n!=="0")return t.value="0"+n+" / "}function w(e){var t,n;t=e.target,n=t.value;if(e.which!==8)return;if(t.selectionStart!=null&&t.selectionStart!==n.length)return;if(/\s\/\s\d?$/.test(n))return e.preventDefault(),setTimeout(function(){return t.value=n.replace(/\s\/\s\d?$/,"")})}function E(e){var t,n,r,i;n=e.match(/^\D*(\d{1,2})(\D+)?(\d{1,4})?/);if(!n)return"";t=n[1]||"",r=n[2]||"",i=n[3]||"";if(i.length>0||r.length>0&&!/\ \/?\ ?/.test(r))r=" / ";return t.length===1&&t!=="0"&&t!=="1"&&(t="0"+t,r=" / "),t+r+i}function S(e){var t;return e.metaKey||e.ctrlKey?!0:e.which===32?!1:e.which===0?!0:e.which<33?!0:(t=String.fromCharCode(e.which),!!/[\d\s]/.test(t))}function x(e){N(e),e.addEventListener("keypress",n),e.addEventListener("keypress",i),e.addEventListener("keydown",s),e.addEventListener("paste",o),e.addEventListener("change",o),e.addEventListener("input",o)}function T(e){return N(e),e.addEventListener("keypress",v),e.addEventListener("keypress",g),e.addEventListener("keypress",b),e.addEventListener("keypress",y),e.addEventListener("keydown",w),e.addEventListener("change",m),e.addEventListener("input",m),this}function N(e){e.addEventListener("keypress",S)}var e=/(\d{1,4})/g;return e=/(\d{1,4})/g,cards=[{type:"visaelectron",pattern:/^4(026|17500|405|508|844|91[37])/,format:e,length:[16],cvcLength:[3],luhn:!0},{type:"maestro",pattern:/^(5(018|0[23]|[68])|6(39|7))/,format:e,length:[12,13,14,15,16,17,18,19],cvcLength:[3],luhn:!0},{type:"forbrugsforeningen",pattern:/^600/,format:e,length:[16],cvcLength:[3],luhn:!0},{type:"dankort",pattern:/^5019/,format:e,length:[16],cvcLength:[3],luhn:!0},{type:"visa",pattern:/^4/,format:e,length:[13,16],cvcLength:[3],luhn:!0},{type:"mastercard",pattern:/^5[0-5]/,format:e,length:[16],cvcLength:[3],luhn:!0},{type:"amex",pattern:/^3[47]/,format:/(\d{1,4})(\d{1,6})?(\d{1,5})?/,length:[15],cvcLength:[3,4],luhn:!0},{type:"dinersclub",pattern:/^3[0689]/,format:e,length:[14],cvcLength:[3],luhn:!0},{type:"discover",pattern:/^6([045]|22)/,format:e,length:[16],cvcLength:[3],luhn:!0},{type:"unionpay",pattern:/^(62|88)/,format:e,length:[16,17,18,19],cvcLength:[3],luhn:!1},{type:"jcb",pattern:/^35/,format:e,length:[16],cvcLength:[3],luhn:!0}],{validateCardNumber:c,validateCardCVC:h,validateCardExpiry:d,cardType:p,makeCardFormatter:x,makeExpiryFormatter:T}});