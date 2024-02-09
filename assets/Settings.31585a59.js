import{j as e}from"./jsx-runtime.391947bd.js";import{r as l}from"./index.ed373d49.js";import{u as g}from"./index.ab4330ae.js";import{i as c}from"./languageStore.50a1028f.js";const x=()=>e.jsx("svg",{className:"w-5 h-5 text-inherit","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 18 20",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M8.509 5.75c0-1.493.394-2.96 1.144-4.25h-.081a8.5 8.5 0 1 0 7.356 12.746A8.5 8.5 0 0 1 8.509 5.75Z"})}),m=()=>e.jsx("svg",{className:"w-5 h-5 text-inherit","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 3V1m0 18v-2M5.05 5.05 3.636 3.636m12.728 12.728L14.95 14.95M3 10H1m18 0h-2M5.05 14.95l-1.414 1.414M16.364 3.636 14.95 5.05M14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"})}),a={red:"rgb(252 165 165)",blue:"rgb(147 197 253)",yellow:"rgb(252 211 77)",pink:"rgb(251 207 232)"},h=({leftState:r=e.jsx("span",{}),peerBackground:t="gray",rightState:n=e.jsx("span",{}),value:o=!1,onChange:s=()=>{}})=>e.jsxs("label",{className:"relative inline-flex gap-2 items-center cursor-pointer",children:[r,e.jsx("input",{type:"checkbox",checked:o,onChange:()=>s(!o),className:"sr-only peer"}),e.jsx("div",{style:{backgroundColor:t},className:`\r
                w-11\r
                h-6\r
                rounded-full \r
                peer \r
                peer-checked:after:translate-x-full\r
                transition-all\r
                rtl:peer-checked:after:-translate-x-full\r
                after:content-[''] \r
                after:absolute \r
                after:top-[4px] \r
                after:start-[38px] \r
                after:bg-white\r
                after:shadow\r
                after:shadow-gray-800\r
                after:rounded-full \r
                after:w-5\r
                after:h-5 \r
                after:transition-all\r
\r
                md:w-20\r
                md:h-7\r
                md:after:w-6\r
                md:after:h-6\r
                md:after:top-[2px] \r
                md:after:start-[40px]\r
                md:peer-checked:after:translate-x-12\r
                md:rtl:peer-checked:after:-translate-x-12\r
                `}),n]}),y=()=>e.jsx("section",{className:`\r
            rounded-xl\r
            transition-all\r
            select-none\r
            h-full\r
            bg-[#FDFDFD]\r
\r
            dark:border-2\r
            dark:border-[#7256FF]\r
            dark:bg-transparent\r
\r
            hover:scale-105\r
            `,children:e.jsxs("div",{className:`\r
                flex\r
                flex-col\r
                gap-10\r
                justify-center\r
                items-center\r
                h-full\r
\r
                md:gap-12\r
                `,children:[e.jsx(u,{}),e.jsx(f,{})]})}),u=()=>{const r=g(c);l.useEffect(()=>{const n=localStorage.getItem("is-english-mode-active")==="true";t(n)},[]);const t=n=>{c.set(n),localStorage.setItem("is-english-mode-active",n)};return e.jsx(h,{leftState:e.jsx(i,{text:"ES",color:r?"gray":a.red}),rightState:e.jsx(i,{text:"EN",color:r?a.blue:"gray"}),peerBackground:r?a.blue:a.red,value:r,onChange:t})},f=()=>{const[r,t]=l.useState(!0);l.useEffect(()=>{const s=localStorage.getItem("is-dark-mode-active")==="true";n(s)},[]);const n=s=>{t(s),o(s),localStorage.setItem("is-dark-mode-active",s)},o=s=>{s?document.querySelector("body").classList.add("dark"):document.querySelector("body").classList.remove("dark")};return e.jsx(h,{leftState:e.jsx(d,{icon:e.jsx(m,{}),color:r?"gray":a.yellow}),rightState:e.jsx(d,{icon:e.jsx(x,{}),color:r?a.pink:"gray"}),peerBackground:r?a.pink:a.yellow,value:r,onChange:n})},i=({text:r="EN",color:t="gray"})=>e.jsx("span",{className:`\r
            text-center\r
            text-lg\r
            font-medium \r
            w-7\r
            h-7\r
            `,style:{color:t},children:r}),d=({icon:r=e.jsx("svg",{}),color:t="gray"})=>e.jsx("span",{className:`\r
            flex\r
            items-center\r
            justify-center\r
            w-7\r
            h-7\r
            `,style:{color:t},children:r});export{y as Settings};
