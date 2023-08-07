"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[946],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var o=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(r),h=i,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||n;return r?o.createElement(m,l(l({ref:t},c),{},{components:r})):o.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,l=new Array(n);l[0]=h;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:i,l[1]=a;for(var u=2;u<n;u++)l[u]=r[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},4958:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>a,toc:()=>u});var o=r(7462),i=(r(7294),r(3905));const n={sidebar_position:2},l="Milk 2%",a={unversionedId:"build-guides/milk",id:"build-guides/milk",title:"Milk 2%",description:"This Guide will help you build your Milk2% macropad kit.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/build-guides/milk.md",sourceDirName:"build-guides",slug:"/build-guides/milk",permalink:"/it/docs/build-guides/milk",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"ISO Pad",permalink:"/it/docs/build-guides/iso-pad"},next:{title:"Lily58 Pro",permalink:"/it/docs/build-guides/lily58pro"}},s={},u=[{value:"0 - What you need",id:"0---what-you-need",level:2},{value:"1 - Solder pin headers to the pcb",id:"1---solder-pin-headers-to-the-pcb",level:2},{value:"2 - Insert switches and solder switch pins",id:"2---insert-switches-and-solder-switch-pins",level:2},{value:"3 - Solder the microcontroller",id:"3---solder-the-microcontroller",level:2},{value:"3.1 ProMicro ATMel32u4",id:"31-promicro-atmel32u4",level:3},{value:"3.2 Helios RP2040",id:"32-helios-rp2040",level:3},{value:"4 - Flash the firmware on your microcontroller",id:"4---flash-the-firmware-on-your-microcontroller",level:2},{value:"4.1 - ATMel32u4",id:"41---atmel32u4",level:3},{value:"4.2 - RP2040",id:"42---rp2040",level:3},{value:"5 - Configure your macropad",id:"5---configure-your-macropad",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"milk-2"},"Milk 2%"),(0,i.kt)("p",null,"This Guide will help you build your Milk2% macropad kit."),(0,i.kt)("p",null,"PHOTO HERE"),(0,i.kt)("h2",{id:"0---what-you-need"},"0 - What you need"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Solder Iron"),(0,i.kt)("li",{parentName:"ul"},"Solder wire"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Soldering skills")),(0,i.kt)("li",{parentName:"ul"},"A computer in order to flash the firmware (MacOS, Windows, Linux)")),(0,i.kt)("h2",{id:"1---solder-pin-headers-to-the-pcb"},"1 - Solder pin headers to the pcb"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Make sure to solder the ehaders in the right side of the PCB as shown.")),(0,i.kt)("p",null,"PHOTO HERE"),(0,i.kt)("h2",{id:"2---insert-switches-and-solder-switch-pins"},"2 - Insert switches and solder switch pins"),(0,i.kt)("p",null,"Insert the switches in the macropad, carefully in the right orientation as shown, position the PCB in the Milk case in the right side with headers facing up and with the label ",(0,i.kt)("strong",{parentName:"p"},"This side up and towards port")," facing the USB hole of the case."),(0,i.kt)("p",null,"PHOTO HERE"),(0,i.kt)("p",null,"Now Solder the switches' pins"),(0,i.kt)("p",null,"PHOTO HERE"),(0,i.kt)("h2",{id:"3---solder-the-microcontroller"},"3 - Solder the microcontroller"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Make sure of which microcontroller you are using, this tutorial shows a Promicro32u4 and Helios RP2040, follow the right part!")),(0,i.kt)("h3",{id:"31-promicro-atmel32u4"},"3.1 ProMicro ATMel32u4"),(0,i.kt)("p",null,"Position the microcontroller facing up (with the chip showing up), solder the needed pins."),(0,i.kt)("p",null,"PHOTO HERE"),(0,i.kt)("h3",{id:"32-helios-rp2040"},"3.2 Helios RP2040"),(0,i.kt)("p",null,"Position the microcontroller facing up (with the chip showing up), ",(0,i.kt)("strong",{parentName:"p"},"check the photo for the pin position")," as the Helios has an extra row of pins."),(0,i.kt)("p",null,"PHOTO HERE"),(0,i.kt)("h2",{id:"4---flash-the-firmware-on-your-microcontroller"},"4 - Flash the firmware on your microcontroller"),(0,i.kt)("p",null,"Like step 3, this one too has 2 different paths depending on the microcontroller you have."),(0,i.kt)("h3",{id:"41---atmel32u4"},"4.1 - ATMel32u4"),(0,i.kt)("p",null,"Flash your firmware with QMK blablablabla...\nlink firmware "),(0,i.kt)("h3",{id:"42---rp2040"},"4.2 - RP2040"),(0,i.kt)("p",null,"Connect the RP2040 to your computer, it should show up as a RaspberryPi memory drive. "),(0,i.kt)("p",null,"Copy ",(0,i.kt)("strong",{parentName:"p"},"ZanniKB's ARM Firmware")," available from ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://LINK!!!!!!!!!"},"HERE"))," in the root memory off the RP2040."),(0,i.kt)("p",null,"Your microcontroller will automatically reboot after the file has finished transferring."),(0,i.kt)("h2",{id:"5---configure-your-macropad"},"5 - Configure your macropad"),(0,i.kt)("p",null,"Using VIA you can now set custom macros or keys to your macropad."))}d.isMDXComponent=!0}}]);