import{d as E,u as x,r as k,o as i,c as h,a as _,w as l,b as C,e as p,F as L,f as z,g as f,h as A,t as M,T as I,m as P,i as S,n as O,E as B,j as D,k as R,l as T,p as V,q as N}from"./vendor.8efc3c90.js";const $=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function e(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(t){if(t.ep)return;t.ep=!0;const n=e(t);fetch(t.href,n)}};$();var j="/me/assets/avatar.cf469ba4.jpg";const F=[{name:"\u4F5C\u54C1",url:"/works"},{name:"\u6E38\u620F",url:"/game"},{name:"GitHub",url:"https://github.com/shichaohui"},{name:"\u6398\u91D1",url:"https://juejin.im/user/57df619f5bbb50005e6c072a"},{name:"\u7B80\u4E66",url:"https://www.jianshu.com/u/2cbd13c2ceb8"},{name:"CSDN",url:"https://blog.csdn.net/u014165119"}];var H=(s,o)=>{const e=s.__vccOpts||s;for(const[a,t]of o)e[a]=t;return e};const q={id:"app"},W=["src"],G=E({setup(s){const o=x(),e=k({value:o.currentRoute.value.path});o.afterEach(n=>{e.value=n.path});function a(){o.push({path:"/"})}function t(n){if(/^https?:\/\/.+/.test(n)){window.open(n);const r=e.value;O(()=>e.value=r)}else o.push({path:n});e.value=n}return(n,r)=>{const d=B,m=D,w=R("router-view");return i(),h("div",q,[_(m,{class:"menu",mode:"horizontal","default-active":p(e).value,onSelect:t},{default:l(()=>[C("img",{class:"avatar",src:p(j),onClick:a},null,8,W),(i(!0),h(L,null,z(p(F),c=>(i(),f(d,{index:c.url},{default:l(()=>[A(M(c.name),1)]),_:2},1032,["index"]))),256))]),_:1},8,["default-active"]),_(w,null,{default:l(({Component:c,props:b})=>[_(I,{name:"fade",mode:"out-in",appear:!0},{default:l(()=>[(i(),f(S(c),P(b,{class:"content"}),null,16))]),_:2},1024)]),_:1})])}}});var K=H(G,[["__scopeId","data-v-85b4a8ba"]]);const U="modulepreload",v={},J="/me/",u=function(o,e){return!e||e.length===0?o():Promise.all(e.map(a=>{if(a=`${J}${a}`,a in v)return;v[a]=!0;const t=a.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${n}`))return;const r=document.createElement("link");if(r.rel=t?"stylesheet":U,t||(r.as="script",r.crossOrigin=""),r.href=a,document.head.appendChild(r),t)return new Promise((d,m)=>{r.addEventListener("load",d),r.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>o())},Q=[{name:"index",path:"/",component:()=>u(()=>import("./index.92198ebe.js"),["assets/index.92198ebe.js","assets/index.f2853015.css","assets/vendor.8efc3c90.js","assets/vendor.7416b5ec.css"])},{name:"game",path:"/game",component:()=>u(()=>import("./index.86d5cbb5.js"),["assets/index.86d5cbb5.js","assets/index.a6c5ea3b.css","assets/vendor.8efc3c90.js","assets/vendor.7416b5ec.css","assets/index.0b14fa6f.js","assets/index.ec4eb2df.css"])},{name:"note",path:"/note",component:()=>u(()=>import("./index.bb834c1c.js"),["assets/index.bb834c1c.js","assets/vendor.8efc3c90.js","assets/vendor.7416b5ec.css"])},{name:"works",path:"/works",component:()=>u(()=>import("./index.4469963e.js"),["assets/index.4469963e.js","assets/index.d951bc47.css","assets/vendor.8efc3c90.js","assets/vendor.7416b5ec.css","assets/index.0b14fa6f.js","assets/index.ec4eb2df.css"])}],g=T({history:V("/me/"),routes:Q});if(typeof window!="undefined"){let s=function(){var o=document.body,e=document.getElementById("__svg__icons__dom__");e||(e=document.createElementNS("http://www.w3.org/2000/svg","svg"),e.style.position="absolute",e.style.width="0",e.style.height="0",e.id="__svg__icons__dom__",e.setAttribute("xmlns","http://www.w3.org/2000/svg"),e.setAttribute("xmlns:link","http://www.w3.org/1999/xlink")),e.innerHTML='<symbol class="icon"  viewBox="0 0 1462 1024" id="icon-email"><path d="M1267.785 2.414H195.072A174.446 174.446 0 0 0 20.699 176.786v670.428a174.519 174.519 0 0 0 174.373 174.372h1072.713a174.519 174.519 0 0 0 174.373-174.372V176.786A174.519 174.519 0 0 0 1267.785 2.414zm93.916 844.8c0 51.785-42.204 93.915-93.916 93.915H195.072a93.989 93.989 0 0 1-93.915-93.915V176.786c0-51.785 42.13-93.915 93.915-93.915h1072.713c51.712 0 93.916 42.13 93.916 93.915v670.428zm-128.293-578.707a40.229 40.229 0 0 1-9.216 56.101l-428.91 308.005a107.3 107.3 0 0 1-124.855.292L238.665 324.681a40.229 40.229 0 0 1 46.812-65.536l431.542 308.151c9.436 6.656 21.943 6.656 31.306 0l428.982-308.078a40.229 40.229 0 0 1 56.101 9.29z" /></symbol><symbol class="icon"  viewBox="0 0 1024 1024" id="icon-location"><path d="M310.848 640a1759.136 1759.136 0 0 0 54.672 68.08c-89.088 19.28-148.608 54.224-148.608 84.512 0 44.672 129.12 99.424 291.664 99.424 162.528 0 291.648-54.752 291.648-99.424 0-30.288-59.52-65.232-148.608-84.512A1824.416 1824.416 0 0 0 706.304 640c100.096 29.696 166.832 83.248 166.832 152.592 0 109.04-164.72 178.832-364.56 178.832C308.72 971.424 144 901.632 144 792.592c0-69.344 66.752-122.896 166.848-152.592z" /><path d="M838.864 380.56c0 113.536-94.8 261.36-279.408 441.856a74.896 74.896 0 0 1-104.128-.064C270.784 641.92 176 494.08 176 380.56 176 197.072 324.208 48 507.424 48 690.64 48 838.88 197.072 838.88 380.56zm-73.648 0c0-144.32-115.744-260.704-257.792-260.704-142.048 0-257.776 116.464-257.776 260.704 0 88.88 86.16 223.04 257.776 390.944 171.68-167.84 257.792-302.064 257.792-390.944z" /><path d="M416 435.44a99.424 99.424 0 1 0 198.864.016A99.424 99.424 0 0 0 416 435.44z" /></symbol><symbol class="icon"  viewBox="0 0 1024 1024" id="icon-wechat"><path d="M588.288 370.176c30.208 0 55.808-22.528 55.808-55.808s-25.6-55.808-55.808-55.808-55.296 22.528-55.296 55.808 25.088 55.808 55.296 55.808zM336.896 258.56c-30.208 0-55.296 22.528-55.296 55.808s25.088 55.808 55.296 55.808 55.808-22.528 55.808-55.808-25.6-55.808-55.808-55.808zM576 566.784c-18.432 0-37.376 20.992-37.376 41.472 0 20.992 18.944 41.472 37.376 41.472 28.16 0 46.592-20.48 46.592-41.472 0-20.48-18.432-41.472-46.592-41.472zm167.424 0c-18.432 0-36.864 20.992-36.864 41.472 0 20.992 18.432 41.472 36.864 41.472 28.16 0 46.592-20.48 46.592-41.472 0-20.48-18.944-41.472-46.592-41.472zM957.44 660.48c0-75.264-37.888-143.36-96.256-191.488.512-3.584.512-6.656.512-9.728 0-288.256-205.312-394.752-400.384-394.752-218.112 0-396.8 155.648-396.8 353.792 0 114.176 59.392 207.872 158.72 280.576l1.024 93.184 98.304-40.96c34.304 7.168 50.176 10.752 72.704 12.288 44.544 92.672 147.456 157.696 269.824 157.696 34.304 0 69.12-9.216 103.424-17.92l94.72 54.272-26.112-90.112c68.608-53.76 120.32-125.952 120.32-206.848zm-580.096-16.384c0 14.336 1.536 28.16 3.584 41.472-8.192-1.536-17.408-3.584-29.696-5.632-3.584-.512-6.144-1.536-9.728-2.048l-15.872-3.584-14.848 6.144-19.968 8.704v-9.728l-.512-26.112-20.992-15.36c-41.472-30.72-73.728-64.512-94.72-100.864-10.752-17.92-18.432-37.376-24.064-56.832-5.12-19.968-8.192-40.96-8.192-62.464 0-74.24 32.768-143.36 91.136-195.584 29.184-25.6 62.976-46.592 101.376-60.416 39.936-14.848 81.92-22.528 125.952-22.528 41.984 0 82.944 5.632 119.808 17.408 39.424 12.288 73.728 30.72 102.4 54.272 30.72 25.088 54.784 57.344 71.168 95.232 16.384 36.352 25.088 78.336 27.648 125.44-39.936-19.968-84.48-31.232-131.072-31.232-153.088 0-273.408 109.568-273.408 243.712zm416.768 170.496 1.024 53.248-46.592-28.672c-29.696 7.68-58.368 15.36-83.968 15.36-31.232 0-61.44-5.12-89.6-15.872-27.136-10.24-50.688-24.576-71.168-43.008-40.448-35.84-62.464-83.968-62.464-134.144s21.504-98.304 61.952-134.144c19.968-18.432 44.032-32.768 71.168-43.008 28.16-10.752 58.368-15.872 89.6-15.872 29.184 0 58.368 5.12 85.504 15.872 27.136 10.24 51.2 24.576 71.68 43.008 20.48 18.432 36.352 38.912 48.128 61.44 11.776 23.04 17.408 47.616 17.408 72.192 0 26.624-8.192 52.736-24.576 79.36-15.872 26.112-38.912 50.688-68.096 74.24z" /></symbol>',o.insertBefore(e,o.lastChild)};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",s):s()}const y=N(K);y.use(g);g.isReady().then(()=>{y.mount("#app")});export{H as _,j as a};
//# sourceMappingURL=index.5b08e7ab.js.map
