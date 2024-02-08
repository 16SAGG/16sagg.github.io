import{j as e}from"./jsx-runtime.391947bd.js";import{u as i}from"./index.ab4330ae.js";import{r as c}from"./index.ed373d49.js";import{i as j}from"./languageStore.50a1028f.js";import{s as u}from"./ProjectsStore.ba461d25.js";import{S as x}from"./Skeleton.c5ac5f1f.js";const E=({id:n="",title:t={},image:m,technologies:a=[]})=>{const d=i(j),o=i(u),[r,p]=c.useState(!0),f=d?t.english:t.spanish,g=o==="All"||a.find(l=>l.name===o)!==void 0,s=`project-item-img-${n}`;return c.useEffect(()=>{document.getElementById(s).complete===!0&&p(!1)},[]),e.jsxs("a",{href:`/projects/${n}`,className:`\r
            rounded-xl\r
            select-none\r
            bg-[#FDFDFD]\r
            text-[#0F0F12]\r
            project-item\r
            relative \r
            h-full\r
            w-full\r
            text-md\r
            font-medium\r
            overflow-hidden\r
            px-3\r
            py-2\r
            leading-5\r
\r
            dark:bg-[#1D1C20]\r
            dark:text-[#FDFDFD]\r
\r
            md:text-lg\r
            md:py-3\r
            md:leading-[22px]\r
            `,style:{display:g?"block":"none"},children:[e.jsx("div",{style:{opacity:r?"0":"1"},children:e.jsx("p",{children:f})}),e.jsx("div",{className:`\r
                project-item-image\r
                absolute\r
                h-full\r
                w-full\r
                top-0\r
                left-0\r
                `,style:{opacity:r?"0":"1"},children:e.jsx("img",{id:s,loading:"lazy",decoding:"async",className:`\r
                        w-full\r
                        h-full\r
                        object-cover\r
                        rounded-xl\r
                    `,src:m})}),e.jsx(x,{isLoading:r})]})};export{E as ProjectItem};
