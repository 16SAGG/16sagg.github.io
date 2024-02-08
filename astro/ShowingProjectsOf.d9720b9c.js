import{j as r}from"./jsx-runtime.391947bd.js";import{r as l}from"./index.ed373d49.js";import{p as c}from"./projects.ec14e2ed.js";import{u as x}from"./index.ab4330ae.js";import{s as i}from"./ProjectsStore.ba461d25.js";const a=()=>{const n=[];return c.map(t=>{t.technologies.map(o=>{n.find(s=>s===o.name)===void 0&&n.push(o.name)})}),n},w=()=>{const[n,t]=l.useState([]),o=x(i);l.useEffect(()=>{t(a());const s=window.location.hash;s!==""&&e(s.slice(1))},[]);const e=s=>i.set(s);return r.jsx(d,{technologiesList:n,onClickHandle:e,$showingProjectsOf:o})},d=({technologiesList:n=[],onClickHandle:t=()=>{},$showingProjectsOf:o=""})=>r.jsxs("div",{className:`\r
            dropdown\r
            h-full\r
            w-full\r
            relative\r
            `,children:[r.jsx("div",{className:`\r
                h-full\r
                w-full\r
                text-gray-200 \r
                font-bold \r
                text-3xl \r
                text-center \r
                flex\r
                flex-col\r
                items-center\r
                justify-center\r
                gap-7\r
                px-3\r
                pt-3\r
                pb-[30px]\r
\r
                md:text-4xl\r
                `,children:r.jsxs("ul",{className:" text-sm w-full rounded-t-xl overflow-y-scroll overflow-x-hidden text-gray-200",children:[r.jsx("li",{children:r.jsx("button",{onClick:()=>t("All"),className:`\r
                            block \r
                            px-4 \r
                            py-2\r
                            w-full\r
                            text-left\r
                            text-gray-600\r
\r
                            dark:text-gray-400\r
                                        \r
                            hover:text-[#FDFDFD]\r
                            dark:hover:text-[#FDFDFD]\r
                            hover:bg-gray-600 \r
                            `,children:"All"})}),n.map(e=>r.jsx("li",{children:r.jsx("button",{onClick:()=>t(e),className:`\r
                                    block \r
                                    px-4 \r
                                    py-2\r
                                    w-full\r
                                    text-left\r
                                    text-gray-600\r
\r
                                    dark:text-gray-400\r
                                    \r
                                    hover:text-[#FDFDFD]\r
                                    dark:hover:text-[#FDFDFD]\r
                                    hover:bg-gray-600 \r
                                    `,children:e})},e)),r.jsx("li",{className:"block py-[6px]"})]})}),r.jsxs("div",{className:`\r
                dropdown-cover\r
                absolute\r
                top-0\r
                h-full\r
                w-full\r
                z-10\r
                shadow-2xl\r
                text-[#FDFDFD]\r
                font-bold \r
                rounded-xl\r
                text-3xl \r
                text-center \r
                bg-[#7256FF]\r
                flex\r
                flex-col\r
                items-center\r
                justify-center\r
                gap-7\r
\r
                md:text-4xl\r
\r
                dark:bg-gradient-to-b from-[#344399] to-[#7256FF]\r
                `,children:[r.jsx("div",{className:"flex-grow"}),r.jsx("h2",{children:o}),r.jsx("svg",{className:"flex-grow w-4 h-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 10 6",children:r.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m1 1 4 4 4-4"})})]})]});export{w as ShowingProjectsOf};
