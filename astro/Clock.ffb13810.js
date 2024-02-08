import{j as r}from"./jsx-runtime.391947bd.js";/* empty css                       */import{r as c}from"./index.ed373d49.js";const g=()=>{const s=["kirby","pikachu"];let e=0,a=new Date,t=a.toLocaleString("es-VE",{timeZone:"America/Caracas",hour12:!1});const n=/(\d{1,2}):(\d{1,2}):(\d{1,2})/,[l,i]=c.useState(n.exec(t)[1]),[d,x]=c.useState(n.exec(t)[2]),m=()=>{a=new Date,t=a.toLocaleString("es-VE",{timeZone:"America/Caracas",hour12:!1}),i(n.exec(t)[1]),x(n.exec(t)[2])};console.log();const u=()=>{const o=document.getElementById("pixel-art");o.classList.remove(s[e]),e+1<s.length?e+=1:e=0,o.classList.add(s[e])};return setInterval(m),r.jsxs("button",{onClick:()=>u(),className:`\r
                grid\r
                h-full\r
                w-full\r
                font-bold\r
                text-5xl\r
                grid-rows-1\r
                grid-cols-1\r
                rounded-xl\r
                overflow-hidden\r
\r
                md:text-6xl\r
            `,children:[r.jsxs("div",{className:`\r
                    time-display\r
                    duration-300\r
                    row-start-1\r
                    col-start-1\r
                    z-10\r
                    self-center\r
                `,children:[r.jsx("span",{children:l}),r.jsx("span",{className:"flickering",children:":"}),r.jsx("span",{children:d})]}),r.jsx("div",{id:"pixel-art",className:`\r
                    kirby\r
                    duration-300\r
                    row-start-1\r
                    col-start-1\r
                `})]})};export{g as Clock};
