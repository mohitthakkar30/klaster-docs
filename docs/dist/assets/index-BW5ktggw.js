import{j as e,L as j,c as n,a as f,b as _,R as b,d as P,T as c,C as i,u as H}from"./index-CMKOqEG3.js";var N="vocs_Button_button",y="vocs_Button_button_accent";function k({children:t,className:a,href:r,variant:h}){return e.jsx(j,{className:n(a,N,h==="accent"&&y),href:r,variant:"styleless",children:t})}var C="vocs_HomePage_button",L="vocs_HomePage_buttons",M="vocs_HomePage_description",B="vocs_HomePage_logo",l="vocs_HomePage_packageManager",D="vocs_HomePage",R="vocs_HomePage_tabs",u="vocs_HomePage_tabsContent",T="vocs_HomePage_tabsList",$="vocs_HomePage_tagline",w="vocs_HomePage_title";function d({children:t,className:a}){return e.jsx("div",{className:n(a,D),children:t})}function E({className:t}){const{logoUrl:a,title:r}=f();return a?e.jsx("div",{className:n(t,B),children:e.jsx(_,{})}):e.jsx("h1",{className:n(t,w),children:r})}function m({children:t,className:a}){return e.jsx("div",{className:n(a,$),children:t})}function g({children:t,className:a}){return e.jsx("div",{className:n(a,M),children:t})}function v({children:t,className:a}){return e.jsx("div",{className:n(a,L),children:t})}function o(t){return e.jsx(k,{...t,className:n(C,t.className)})}function x({name:t,type:a="install"}){return e.jsxs(b,{className:R,defaultValue:"npm",children:[e.jsxs(P,{className:T,children:[e.jsx(c,{value:"npm",children:"npm"}),e.jsx(c,{value:"pnpm",children:"pnpm"}),e.jsx(c,{value:"yarn",children:"yarn"})]}),e.jsxs(i,{className:u,value:"npm",children:[e.jsx("span",{className:l,children:"npm"})," ",a==="init"?"init":"install"," ",t]}),e.jsxs(i,{className:u,value:"pnpm",children:[e.jsx("span",{className:l,children:"pnpm"})," ",a==="init"?"create":"add"," ",t]}),e.jsxs(i,{className:u,value:"yarn",children:[e.jsx("span",{className:l,children:"yarn"})," ",a==="init"?"create":"add"," ",t]})]})}const X=Object.freeze(Object.defineProperty({__proto__:null,Button:o,Buttons:v,Description:g,InstallPackage:x,Logo:E,Root:d,Tagline:m},Symbol.toStringTag,{value:"Module"})),G={layout:"landing"};function p(t){return X||s("HomePage",!1),o||s("HomePage.Button",!0),v||s("HomePage.Buttons",!0),g||s("HomePage.Description",!0),x||s("HomePage.InstallPackage",!0),d||s("HomePage.Root",!0),m||s("HomePage.Tagline",!0),e.jsxs(d,{children:[e.jsx(m,{children:"Klaster Docs"}),e.jsx(x,{name:"klaster-sdk",type:"install"}),e.jsx(g,{children:"Klaster enables developers to build chain abstracted flows and apps."}),e.jsxs(v,{children:[e.jsx(o,{href:"/zero-to-hero-klaster-guide",variant:"accent",children:"Get started"}),e.jsx(o,{href:"https://github.com/0xPolycode/",children:"GitHub"})]})]})}function I(t={}){const{wrapper:a}={...H(),...t.components};return a?e.jsx(a,{...t,children:e.jsx(p,{...t})}):p()}function s(t,a){throw new Error("Expected "+(a?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}export{I as default,G as frontmatter};
