(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(t,e,r){"use strict";r(34),r(27),r(150),r(38),r(116),r(213),r(11),r(45),r(28),r(79),r(108),r(29);var o=r(156),n=r(37),c=r(161),d=function(t){return t.split(/[\n\s,;]+/).filter((function(t){var e=t.replace(/[^0-9]+(\.[0-9]{1,2})/g,"");return!(!e.length||isNaN(e))})).map((function(t){return parseFloat(t.replace(/[^0-9]+(\.[0-9]{1,2})/g,""))}))},l=function(t){return t.filter((function(e,r){return t.indexOf(e)==r})).sort((function(a,b){return a-b}))},m=function(t,e){return t.filter((function(t){return t==e})).length},f=function(t,e){var r=l(t);if(e>0){for(var o=0,i=0;i<e;i++)o+=m(t,r[i]);return m(t,r[e])+o}return m(t,r[0])},x=function(t,e){return m(t,e)/t.length},h=function(t,e){var r=l(t);if(e>0){for(var o=0,i=0;i<e;i++)o+=x(t,r[i]);return x(t,r[e])+o}return x(t,r[0])},v=function(t){return t.reduce((function(a,b){return a+b}),0)/t.length},y=function(t){var e=Object(c.a)(t).sort((function(a,b){return a-b})),r=Math.floor(e.length/2);return e.length%2?e[r]:(e[r-1]+e[r])/2},k=function(t){var e,r={};t.forEach((function(t){t in r||(r[t]=0),r[t]++}));var o=0;return Object.entries(r).forEach((function(t){var r=Object(n.a)(t,2),c=r[0],d=r[1];d>o&&(e=parseInt(c),o=parseInt(d.toString()))})),e},w=function(t){var e=t.reduce((function(a,b){return a*b}),1);return Math.pow(e,1/t.length)},_=function(t){var e=0;return t.forEach((function(t){e+=Math.pow(t,2)})),Math.sqrt(e/t.length)},M=function(t,q){return(t.length+1)*q/4},z=function(t,q){return(t.length+1)*q/10},O=function(t,q){return(t.length+1)*q/100};e.a=function(t,e){Object(o.a)(t),e("cleanDataSet",d),e("orderedDataSet",l),e("absoluteFrecuency",m),e("relativeFrecuency",x),e("accAbsoluteFrecuency",f),e("accRelativeFrecuency",h),e("arithmeticMean",v),e("arithmeticMedian",y),e("arithmeticMode",k),e("geometricMean",w),e("cuadraticMean",_),e("quartil",M),e("decile",z),e("percentile",O)}},113:function(t,e,r){"use strict";var o=r(0),n=r(157),c=r.n(n);o.a.use(c.a)},114:function(t,e,r){"use strict";var o=r(0),n=r(158),c=r.n(n);o.a.use(c.a)},160:function(t,e,r){"use strict";var o={created:function(){localStorage.getItem("dark-mode")&&JSON.parse(localStorage.getItem("dark-mode"))&&document.getElementsByTagName("body")[0].classList.add("dark-mode")}},n=r(12),component=Object(n.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("NavBar"),this._v(" "),e("div",{staticClass:"py-2 dark:bg-gray-800"},[e("div",{staticClass:"container mx-auto"},[e("Nuxt",{staticClass:"animate__animated animate__fadeIn"})],1),this._v(" "),e("DarkModeSwitcher")],1),this._v(" "),e("Footer")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{NavBar:r(216).default,DarkModeSwitcher:r(217).default,Footer:r(218).default})},163:function(t,e,r){r(164),t.exports=r(165)},200:function(t,e,r){var content=r(201);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(59).default)("38dfa7e4",content,!0,{sourceMap:!1})},201:function(t,e,r){(e=r(58)(!1)).push([t.i,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}button{background-color:transparent;background-image:none}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}fieldset,ol,ul{margin:0;padding:0}ol,ul{list-style:none}html{font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,"Noto Sans","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5}*,:after,:before{box-sizing:border-box;border:0 solid #e2e8f0}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#a0aec0}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#a0aec0}input::placeholder,textarea::placeholder{color:#a0aec0}[role=button],button{cursor:pointer}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}code,kbd,pre,samp{font-family:Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}.appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.bg-white{--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity))}.bg-gray-300{--bg-opacity:1;background-color:#e2e8f0;background-color:rgba(226,232,240,var(--bg-opacity))}.bg-blue-500{--bg-opacity:1;background-color:#4299e1;background-color:rgba(66,153,225,var(--bg-opacity))}.border-gray-900{--border-opacity:1;border-color:#1a202c;border-color:rgba(26,32,44,var(--border-opacity))}.rounded{border-radius:.25rem}.rounded-full{border-radius:9999px}.border-0{border-width:0}.border-4{border-width:4px}.border-b-2{border-bottom-width:2px}.border-t{border-top-width:1px}.border-b{border-bottom-width:1px}.cursor-pointer{cursor:pointer}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.table{display:table}.grid{display:grid}.hidden{display:none}.flex-wrap{flex-wrap:wrap}.content-center{align-content:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.font-bold{font-weight:700}.h-6{height:1.5rem}.h-16{height:4rem}.h-24{height:6rem}.h-64{height:16rem}.text-lg{font-size:1.125rem}.text-xl{font-size:1.25rem}.text-2xl{font-size:1.5rem}.text-3xl{font-size:1.875rem}.text-6xl{font-size:4rem}.my-2{margin-top:.5rem;margin-bottom:.5rem}.mx-2{margin-left:.5rem;margin-right:.5rem}.my-3{margin-top:.75rem;margin-bottom:.75rem}.my-4{margin-top:1rem;margin-bottom:1rem}.my-8{margin-top:2rem;margin-bottom:2rem}.mx-auto{margin-left:auto;margin-right:auto}.mt-1{margin-top:.25rem}.mt-2{margin-top:.5rem}.mr-2{margin-right:.5rem}.mb-2{margin-bottom:.5rem}.ml-2{margin-left:.5rem}.mb-3{margin-bottom:.75rem}.mb-4{margin-bottom:1rem}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.p-2{padding:.5rem}.px-1{padding-left:.25rem;padding-right:.25rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.px-2{padding-left:.5rem;padding-right:.5rem}.py-4{padding-top:1rem;padding-bottom:1rem}.py-10{padding-top:2.5rem;padding-bottom:2.5rem}.pt-1{padding-top:.25rem}.pb-2{padding-bottom:.5rem}.pt-3{padding-top:.75rem}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.bottom-0{bottom:0}.shadow{box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)}.text-left{text-align:left}.text-center{text-align:center}.text-black{--text-opacity:1;color:#000;color:rgba(0,0,0,var(--text-opacity))}.text-white{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}.text-blue-600{--text-opacity:1;color:#3182ce;color:rgba(49,130,206,var(--text-opacity))}.hover\\:text-gray-700:hover{--text-opacity:1;color:#4a5568;color:rgba(74,85,104,var(--text-opacity))}.select-none{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.align-middle{vertical-align:middle}.whitespace-no-wrap{white-space:nowrap}.w-6{width:1.5rem}.w-10{width:2.5rem}.w-full{width:100%}.z-0{z-index:0}.z-10{z-index:10}.z-40{z-index:40}.gap-2{grid-gap:.5rem;gap:.5rem}.gap-3{grid-gap:.75rem;gap:.75rem}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.transition{transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform}.ease-in{transition-timing-function:cubic-bezier(.4,0,1,1)}.duration-200{transition-duration:.2s}@-webkit-keyframes spin{to{transform:rotate(1turn)}}@keyframes spin{to{transform:rotate(1turn)}}@-webkit-keyframes ping{75%,to{transform:scale(2);opacity:0}}@keyframes ping{75%,to{transform:scale(2);opacity:0}}@-webkit-keyframes pulse{50%{opacity:.5}}@keyframes pulse{50%{opacity:.5}}@-webkit-keyframes bounce{0%,to{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}@keyframes bounce{0%,to{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}.noselect{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.dark-mode{--bg-opacity:1;background-color:#000;background-color:rgba(0,0,0,var(--bg-opacity))}.dark-mode *{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}.dark-mode .swal2-html-container{color:#000!important}.btn-primary{--bg-opacity:1;background-color:#4299e1;background-color:rgba(66,153,225,var(--bg-opacity));--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity));border-radius:.25rem;box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);padding:.5rem 1rem;text-align:center}.btn-primary:hover{--bg-opacity:1;background-color:#2c5282;background-color:rgba(44,82,130,var(--bg-opacity))}.btn-primary:focus{outline:2px solid transparent;outline-offset:2px}.textarea{border-width:1px;box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);border-radius:.25rem;--text-opacity:1;color:#000;color:rgba(0,0,0,var(--text-opacity));width:100%;padding:.5rem}.textarea:focus{outline:2px solid transparent;outline-offset:2px;--border-opacity:1;border-color:#a0aec0;border-color:rgba(160,174,192,var(--border-opacity))}.dark-mode .textarea{--border-opacity:1;border-color:#2c5282;border-color:rgba(44,82,130,var(--border-opacity));--bg-opacity:1;background-color:#2d3748;background-color:rgba(45,55,72,var(--bg-opacity));--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}.dark-mode .textarea:focus{--border-opacity:1;border-color:#718096;border-color:rgba(113,128,150,var(--border-opacity))}.table{table-layout:auto;width:100%;box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)}.table tfoot,.table thead{--bg-opacity:1;background-color:#f7fafc;background-color:rgba(247,250,252,var(--bg-opacity))}.dark-mode .table tfoot,.dark-mode .table thead{--bg-opacity:1;background-color:#1a202c;background-color:rgba(26,32,44,var(--bg-opacity))}.table tbody tr:hover{--bg-opacity:1;background-color:#edf2f7;background-color:rgba(237,242,247,var(--bg-opacity))}.dark-mode .table tbody tr:hover{--bg-opacity:1;background-color:#2d3748;background-color:rgba(45,55,72,var(--bg-opacity))}.table td{padding:.5rem 1rem;border-width:1px}.dark-mode .table td{--border-opacity:1;border-color:#2c5282;border-color:rgba(44,82,130,var(--border-opacity))}.left-table-titles{--bg-opacity:1;background-color:#f7fafc;background-color:rgba(247,250,252,var(--bg-opacity))}.dark-mode .left-table-titles{--bg-opacity:1;background-color:#1a202c;background-color:rgba(26,32,44,var(--bg-opacity))}select{background-color:#edf2f7;background-color:rgba(237,242,247,var(--bg-opacity));border-width:1px}.dark-mode select,select{--bg-opacity:1;border-radius:.25rem;padding:.5rem 1rem;width:100%}.dark-mode select{background-color:#1a202c;background-color:rgba(26,32,44,var(--bg-opacity));--border-opacity:1;border-color:#2c5282;border-color:rgba(44,82,130,var(--border-opacity))}select:focus{outline:2px solid transparent;outline-offset:2px;--border-opacity:1;border-color:#a0aec0;border-color:rgba(160,174,192,var(--border-opacity))}.text-input{--bg-opacity:1;background-color:#edf2f7;background-color:rgba(237,242,247,var(--bg-opacity));border-radius:.25rem;padding:.5rem 1rem;border-width:1px;width:100%}.text-input:focus{outline:2px solid transparent;outline-offset:2px;--border-opacity:1;border-color:#a0aec0;border-color:rgba(160,174,192,var(--border-opacity))}.dark-mode .text-input{--bg-opacity:1;background-color:#1a202c;background-color:rgba(26,32,44,var(--bg-opacity));border-radius:.25rem;padding:.5rem 1rem;--border-opacity:1;border-color:#2c5282;border-color:rgba(44,82,130,var(--border-opacity));width:100%}.dark-mode .text-input:focus{outline:2px solid transparent;outline-offset:2px;--border-opacity:1;border-color:#a0aec0;border-color:rgba(160,174,192,var(--border-opacity))}@media (min-width:640px){.sm\\:container{width:100%}}@media (min-width:640px) and (min-width:640px){.sm\\:container{max-width:640px}}@media (min-width:640px) and (min-width:768px){.sm\\:container{max-width:768px}}@media (min-width:640px) and (min-width:1024px){.sm\\:container{max-width:1024px}}@media (min-width:640px) and (min-width:1280px){.sm\\:container{max-width:1280px}}@media (min-width:768px){.md\\:container{width:100%}}@media (min-width:768px) and (min-width:640px){.md\\:container{max-width:640px}}@media (min-width:768px) and (min-width:768px){.md\\:container{max-width:768px}}@media (min-width:768px) and (min-width:1024px){.md\\:container{max-width:1024px}}@media (min-width:768px) and (min-width:1280px){.md\\:container{max-width:1280px}}@media (min-width:768px){.md\\:inline{display:inline}.md\\:flex{display:flex}.md\\:hidden{display:none}.md\\:flex-wrap{flex-wrap:wrap}.md\\:py-2{padding-top:.5rem;padding-bottom:.5rem}.md\\:whitespace-normal{white-space:normal}.md\\:w-auto{width:auto}.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media (min-width:1024px){.lg\\:container{width:100%}}@media (min-width:1024px) and (min-width:640px){.lg\\:container{max-width:640px}}@media (min-width:1024px) and (min-width:768px){.lg\\:container{max-width:768px}}@media (min-width:1024px) and (min-width:1024px){.lg\\:container{max-width:1024px}}@media (min-width:1024px) and (min-width:1280px){.lg\\:container{max-width:1280px}}@media (min-width:1280px){.xl\\:container{width:100%}}@media (min-width:1280px) and (min-width:640px){.xl\\:container{max-width:640px}}@media (min-width:1280px) and (min-width:768px){.xl\\:container{max-width:768px}}@media (min-width:1280px) and (min-width:1024px){.xl\\:container{max-width:1024px}}@media (min-width:1280px) and (min-width:1280px){.xl\\:container{max-width:1280px}}',""]),t.exports=e},202:function(t,e,r){"use strict";var o=r(81);r.n(o).a},203:function(t,e,r){(e=r(58)(!1)).push([t.i,"#fixed-nav-div[data-v-78818752]{--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity))}#fixed-nav-div[data-v-78818752],.dark-mode #fixed-nav-div[data-v-78818752]{padding:.5rem;box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);position:fixed;z-index:40;width:100%}.dark-mode #fixed-nav-div[data-v-78818752]{border-bottom-width:1px;--border-opacity:1;border-color:#1a202c;border-color:rgba(26,32,44,var(--border-opacity));background-color:#0b0b0b}.nav-link[data-v-78818752]{margin-left:.5rem;margin-right:.5rem;font-size:1.125rem;border-bottom-width:2px;border-color:transparent}.nav-link[data-v-78818752]:hover{--text-opacity:1;color:#553c9a;color:rgba(85,60,154,var(--text-opacity))}.dark-mode .nav-link[data-v-78818752]:hover{--text-opacity:1;color:#e2e8f0;color:rgba(226,232,240,var(--text-opacity))}.github-link[data-v-78818752]{color:#3182ce;color:rgba(49,130,206,var(--text-opacity))}.dark-mode .github-link[data-v-78818752],.github-link[data-v-78818752]{--text-opacity:1;margin-left:.5rem;margin-right:.5rem;font-size:1.125rem}.dark-mode .github-link[data-v-78818752]{color:#fff;color:rgba(255,255,255,var(--text-opacity))}.github-link[data-v-78818752]:hover{--text-opacity:1;color:#2c5282;color:rgba(44,82,130,var(--text-opacity))}.dark-mode .github-link[data-v-78818752]:hover{--text-opacity:1;color:#e2e8f0;color:rgba(226,232,240,var(--text-opacity))}.nuxt-link-exact-active.nav-link[data-v-78818752]{--text-opacity:1;color:#553c9a;color:rgba(85,60,154,var(--text-opacity))}.dark-mode .nuxt-link-exact-active.nav-link[data-v-78818752]{--text-opacity:1;color:#e2e8f0;color:rgba(226,232,240,var(--text-opacity))}@media (min-width:768px){.nav-link[data-v-78818752]:hover,.nuxt-link-exact-active.nav-link[data-v-78818752]{--border-opacity:1;border-color:#9f7aea;border-color:rgba(159,122,234,var(--border-opacity))}@supports ((-webkit-backdrop-filter:none) or (backdrop-filter:none)){#fixed-nav-div[data-v-78818752]{background-color:hsla(0,0%,100%,.8)}#fixed-nav-div[data-v-78818752],.dark-mode #fixed-nav-div[data-v-78818752]{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.dark-mode #fixed-nav-div[data-v-78818752]{background-color:rgba(11,11,11,.8)}}}",""]),t.exports=e},204:function(t,e,r){"use strict";var o=r(82);r.n(o).a},205:function(t,e,r){(e=r(58)(!1)).push([t.i,".toggle-checkbox[data-v-56aaa15c]:checked{@apply: right-0;right:0;border-color:#ff938c}.toggle-checkbox:checked+.toggle-label[data-v-56aaa15c]{background-color:#ff938c}*[data-v-56aaa15c]{outline:2px solid transparent;outline-offset:2px}",""]),t.exports=e},206:function(t,e,r){"use strict";var o=r(83);r.n(o).a},207:function(t,e,r){(e=r(58)(!1)).push([t.i,"#fixed-footer-div[data-v-3cb5b7f7]{border-width:1px 0 0;--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity))}#fixed-footer-div[data-v-3cb5b7f7],.dark-mode #fixed-footer-div[data-v-3cb5b7f7]{height:4rem;position:fixed;z-index:40;bottom:0;width:100%;display:flex;justify-content:center;align-content:center;flex-wrap:wrap}.dark-mode #fixed-footer-div[data-v-3cb5b7f7]{--border-opacity:1;border-color:#1a202c;border-color:rgba(26,32,44,var(--border-opacity));background-color:#0b0b0b}@media (min-width:768px){@supports ((-webkit-backdrop-filter:none) or (backdrop-filter:none)){#fixed-footer-div[data-v-3cb5b7f7]{background-color:hsla(0,0%,100%,.7)}#fixed-footer-div[data-v-3cb5b7f7],.dark-mode #fixed-footer-div[data-v-3cb5b7f7]{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.dark-mode #fixed-footer-div[data-v-3cb5b7f7]{background-color:rgba(11,11,11,.7)}}}",""]),t.exports=e},208:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return l})),r.d(e,"mutations",(function(){return m}));r(20),r(34),r(27),r(77),r(78),r(56),r(29);var o=r(30);function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={xTrain:[],yTrain:[],current_xTrain:[],current_yTrain:[],regression:null},l=function(){return c({},d)},m={resetState:function(t){Object.assign(t,c({},d))},set_xTrain:function(t,data){t.xTrain=data},set_yTrain:function(t,data){t.yTrain=data},set_current_xTrain:function(t,data){t.current_xTrain=data},set_current_yTrain:function(t,data){t.current_yTrain=data},set_regression:function(t,data){t.regression=data}}},209:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return l})),r.d(e,"mutations",(function(){return m}));r(20),r(34),r(27),r(77),r(78),r(56),r(29);var o=r(30);function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={data:[],orderedData:[],dataTable:[],totalAbsoluteFrecuency:0,total_xi2_fi:0,total_d_absolute:0,total_d_absolute_2:0},l=function(){return c({},d)},m={resetState:function(t){Object.assign(t,c({},d))},setData:function(t,data){t.data=data},setOrderedData:function(t,e){t.orderedData=e},setDataTable:function(t,e){t.dataTable=e},setTotalAbsoluteFrecuency:function(t,e){t.totalAbsoluteFrecuency=e},setTotal_xi2_fi:function(t,e){t.total_xi2_fi=e},setTotal_d_absolute:function(t,e){t.total_d_absolute=e},setTotal_d_absolute_2:function(t,e){t.total_d_absolute_2=e}}},216:function(t,e,r){"use strict";r.r(e);var o={data:function(){return{openMenu:!1}},methods:{closeMenu:function(){this.openMenu=!1}},watch:{$route:function(){this.closeMenu()}}},n=(r(202),r(12)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeMenu,expression:"closeMenu"}],staticClass:"animate__animated animate__fadeInDown animate__faster",attrs:{id:"fixed-nav-div"}},[r("div",{staticClass:"flex justify-between container mx-auto flex-wrap animate__animated animate__fadeInDown z-10"},[t._m(0),t._v(" "),r("div",{staticClass:"md:hidden text-3xl text-black hover:text-gray-700 z-10"},[t.openMenu?t._e():r("i",{staticClass:"fas fa-bars cursor-pointer",on:{click:function(e){t.openMenu=!t.openMenu}}}),t._v(" "),t.openMenu?r("i",{staticClass:"fas fa-times cursor-pointer",on:{click:function(e){t.openMenu=!t.openMenu}}}):t._e()]),t._v(" "),r("div",{staticClass:"block w-full md:w-auto md:flex md:flex-wrap content-center animate__animated animate__fadeIn z-0",class:{hidden:!t.openMenu}},[this.$route.query.standalone?t._e():r("nuxt-link",{staticClass:"block text-center my-2 nav-link",attrs:{to:"/"}},[t._v("Datos no agrupados")]),t._v(" "),this.$route.query.standalone?t._e():r("nuxt-link",{staticClass:"block text-center my-2 nav-link",attrs:{to:"/linealRegression"}},[t._v("Regresión lineal")]),t._v(" "),this.$route.query.standalone?t._e():r("nuxt-link",{staticClass:"block text-center my-2 nav-link",attrs:{to:"/appDownload"}},[t._v("Descargar APP")]),t._v(" "),this.$route.query.standalone?r("nuxt-link",{staticClass:"block text-center my-2 nav-link",attrs:{to:"/?standalone=true"}},[t._v("Datos no agrupados")]):t._e(),t._v(" "),this.$route.query.standalone?r("nuxt-link",{staticClass:"block text-center my-2 nav-link",attrs:{to:"/linealRegression?standalone=true"}},[t._v("Regresión lineal")]):t._e(),t._v(" "),t._m(1)],1)])]),t._v(" "),r("div",{staticClass:"w-full h-16"})])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex"},[e("div",{staticClass:"flex noselect"},[e("img",{staticClass:"w-18",attrs:{src:"icon.svg",alt:"Ícono de la aplicación"}}),this._v(" "),e("div",{staticClass:"flex flex-wrap content-center"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"block text-center my-2 github-link",attrs:{href:"https://github.com/MyCaliGT",target:"_blank"}},[e("i",{staticClass:"fab fa-github"}),this._v(" Github")])}],!1,null,"78818752",null);e.default=component.exports},217:function(t,e,r){"use strict";r.r(e);var o={data:function(){return{darkMode:!1}},created:function(){localStorage.getItem("dark-mode")&&JSON.parse(localStorage.getItem("dark-mode"))&&(this.darkMode=!0)},watch:{darkMode:function(t){t?(document.getElementsByTagName("body")[0].classList.add("dark-mode"),localStorage.setItem("dark-mode",JSON.stringify(!0))):(document.getElementsByTagName("body")[0].classList.remove("dark-mode"),localStorage.removeItem("dark-mode"))}}},n=(r(204),r(12)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex justify-center mt-2 mb-4 noselect"},[r("div",{staticClass:"mr-2"},[r("span",{staticClass:"text-xl font-bold cursor-pointer",on:{click:function(e){t.darkMode=!t.darkMode}}},[t._v("Modo oscuro:")])]),t._v(" "),r("div",{staticClass:"relative inline-block w-10 mt-1 align-middle select-none transition duration-200 ease-in"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.darkMode,expression:"darkMode"}],staticClass:"toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer",attrs:{type:"checkbox",name:"toggle",id:"toggle"},domProps:{checked:Array.isArray(t.darkMode)?t._i(t.darkMode,null)>-1:t.darkMode},on:{change:function(e){var r=t.darkMode,o=e.target,n=!!o.checked;if(Array.isArray(r)){var c=t._i(r,null);o.checked?c<0&&(t.darkMode=r.concat([null])):c>-1&&(t.darkMode=r.slice(0,c).concat(r.slice(c+1)))}else t.darkMode=n}}}),t._v(" "),r("label",{staticClass:"toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer",attrs:{for:"toggle"}})])])}),[],!1,null,"56aaa15c",null);e.default=component.exports},218:function(t,e,r){"use strict";r.r(e);r(57);var o={data:function(){return{currentFooterMessage:0,footerMessages:["Crafteado con el 💙 por Maycol Cali.","Hecho con 😴 en la pandemia 🦠."]}},methods:{nextFooterMessage:function(){var t=this.currentFooterMessage+1;t>this.footerMessages.length-1?this.currentFooterMessage=0:this.currentFooterMessage=t}},computed:{currentFooterHTML:function(){return'\n        <span class="animate__animated animate__fadeIn">'.concat(this.footerMessages[this.currentFooterMessage],"</span>\n      ")}},created:function(){var t=this;setInterval((function(){t.nextFooterMessage()}),5e3)}},n=(r(206),r(12)),component=Object(n.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"h-16 w-full"}),this._v(" "),e("div",{staticClass:"animate__animated animate__fadeInUp animate__faster",attrs:{id:"fixed-footer-div"}},[e("span",{staticClass:"text-center"},[this._v("\n      © "+this._s((new Date).getFullYear())+".\n      "),e("span",{domProps:{innerHTML:this._s(this.currentFooterHTML)}}),this._v(" "),this._m(0)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{target:"_blank",href:"https://github.com/MyCaliGT"}},[e("i",{staticClass:"fab fa-github"})])}],!1,null,"3cb5b7f7",null);e.default=component.exports},31:function(t,e,r){"use strict";var o={props:["error"]},n=r(12),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"py-10"},[r("lottie-player",{staticClass:"mx-auto h-64 animate__animated animate__fadeIn",attrs:{src:"/estadistica/error-lottie.json",background:"transparent",speed:"1",loop:"",autoplay:""}}),t._v(" "),404===t.error.statusCode?r("div",{staticClass:"my-4 text-center text-2xl font-bold"},[t._v("\n    Error 404. Página no encontrada.\n  ")]):t._e(),t._v(" "),404!==t.error.statusCode?r("div",{staticClass:"my-4 text-center text-2xl font-bold"},[t._v("\n    Error "+t._s(t.error.statusCode)+". Ocurrió un error inesperado.\n  ")]):t._e()],1)}),[],!1,null,null,null);e.a=component.exports},81:function(t,e,r){var content=r(203);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(59).default)("0aeaa4e7",content,!0,{sourceMap:!1})},82:function(t,e,r){var content=r(205);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(59).default)("7938fb20",content,!0,{sourceMap:!1})},83:function(t,e,r){var content=r(207);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(59).default)("1ee7511a",content,!0,{sourceMap:!1})}},[[163,5,1,6]]]);