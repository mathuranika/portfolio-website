(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{1317:function(e,t,n){Promise.resolve().then(n.t.bind(n,936,23)),Promise.resolve().then(n.t.bind(n,8877,23)),Promise.resolve().then(n.bind(n,6304))},8877:function(){},936:function(e){e.exports={style:{fontFamily:"'__Inter_aaf875', '__Inter_Fallback_aaf875'",fontStyle:"normal"},className:"__className_aaf875"}},6304:function(e,t,n){"use strict";n.d(t,{ThemeProvider:function(){return s}});var c=n(2265),a=["light","dark"],o="(prefers-color-scheme: dark)",r="undefined"==typeof window,l=c.createContext(void 0),s=e=>c.useContext(l)?e.children:c.createElement(m,{...e}),i=["light","dark"],m=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:r=!0,enableColorScheme:s=!0,storageKey:m="theme",themes:y=i,defaultTheme:v=r?"system":"light",attribute:g="data-theme",value:b,children:S,nonce:p}=e,[w,_]=c.useState(()=>u(m,v)),[k,C]=c.useState(()=>u(m)),E=b?Object.values(b):y,T=c.useCallback(e=>{let t=e;if(!t)return;"system"===e&&r&&(t=f());let c=b?b[t]:t,o=n?h():null,l=document.documentElement;if("class"===g?(l.classList.remove(...E),c&&l.classList.add(c)):c?l.setAttribute(g,c):l.removeAttribute(g),s){let e=a.includes(v)?v:null,n=a.includes(t)?t:e;l.style.colorScheme=n}null==o||o()},[]),x=c.useCallback(e=>{let t="function"==typeof e?e(e):e;_(t);try{localStorage.setItem(m,t)}catch(e){}},[t]),L=c.useCallback(e=>{C(f(e)),"system"===w&&r&&!t&&T("system")},[w,t]);c.useEffect(()=>{let e=window.matchMedia(o);return e.addListener(L),L(e),()=>e.removeListener(L)},[L]),c.useEffect(()=>{let e=e=>{e.key===m&&x(e.newValue||v)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[x]),c.useEffect(()=>{T(null!=t?t:w)},[t,w]);let N=c.useMemo(()=>({theme:w,setTheme:x,forcedTheme:t,resolvedTheme:"system"===w?k:w,themes:r?[...y,"system"]:y,systemTheme:r?k:void 0}),[w,x,t,k,r,y]);return c.createElement(l.Provider,{value:N},c.createElement(d,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:r,enableColorScheme:s,storageKey:m,themes:y,defaultTheme:v,attribute:g,value:b,children:S,attrs:E,nonce:p}),S)},d=c.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:r,enableSystem:l,enableColorScheme:s,defaultTheme:i,value:m,attrs:d,nonce:u}=e,h="system"===i,f="class"===r?"var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(d.map(e=>"'".concat(e,"'")).join(","),")"),";"):"var d=document.documentElement,n='".concat(r,"',s='setAttribute';"),y=s?(a.includes(i)?i:null)?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(i,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",v=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],c=m?m[e]:e,o=t?e+"|| ''":"'".concat(c,"'"),l="";return s&&n&&!t&&a.includes(e)&&(l+="d.style.colorScheme = '".concat(e,"';")),"class"===r?t||c?l+="c.add(".concat(o,")"):l+="null":c&&(l+="d[s](n,".concat(o,")")),l},g=t?"!function(){".concat(f).concat(v(t),"}()"):l?"!function(){try{".concat(f,"var e=localStorage.getItem('").concat(n,"');if('system'===e||(!e&&").concat(h,")){var t='").concat(o,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(v("dark"),"}else{").concat(v("light"),"}}else if(e){").concat(m?"var x=".concat(JSON.stringify(m),";"):"").concat(v(m?"x[e]":"e",!0),"}").concat(h?"":"else{"+v(i,!1,!1)+"}").concat(y,"}catch(e){}}()"):"!function(){try{".concat(f,"var e=localStorage.getItem('").concat(n,"');if(e){").concat(m?"var x=".concat(JSON.stringify(m),";"):"").concat(v(m?"x[e]":"e",!0),"}else{").concat(v(i,!1,!1),";}").concat(y,"}catch(t){}}();");return c.createElement("script",{nonce:u,dangerouslySetInnerHTML:{__html:g}})}),u=(e,t)=>{let n;if(!r){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},h=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},f=e=>(e||(e=window.matchMedia(o)),e.matches?"dark":"light")}},function(e){e.O(0,[232,971,23,744],function(){return e(e.s=1317)}),_N_E=e.O()}]);