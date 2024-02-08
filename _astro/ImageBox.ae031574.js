import{j as e}from"./jsx-runtime.391947bd.js";import{r as n}from"./index.ed373d49.js";import{S as a}from"./Skeleton.c5ac5f1f.js";const u=({image:t,id:o="image-0"})=>{const[r,s]=n.useState(!0);return n.useEffect(()=>{document.getElementById(o).complete===!0&&s(!1)},[]),e.jsxs("div",{className:`\r
                overflow-hidden\r
                rounded-xl\r
                h-full\r
                w-full\r
                relative\r
            `,children:[e.jsx("img",{id:o,loading:"lazy",decoding:"async",className:`\r
				    w-full\r
				    h-full\r
					object-cover\r
					rounded-xl\r
                    duration-200\r
				`,style:{opacity:r?"0":"1"},src:t}),e.jsx(a,{isLoading:r})]})};export{u as ImageBox};
