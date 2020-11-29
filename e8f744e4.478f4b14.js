(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{129:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return m}));var n=a(2),r=a(6),o=(a(0),a(143)),i={id:"dns-configuration",title:"How to configure your DNS records"},c={unversionedId:"installation/dns-configuration",id:"installation/dns-configuration",isDocsHomePage:!1,title:"How to configure your DNS records",description:"Configure your DNS Records to point at your server",source:"@site/docs/installation/dns-configuration.mdx",slug:"/installation/dns-configuration",permalink:"/installation/dns-configuration",editUrl:"https://github.com/erxes/erxes/edit/develop/docs/docs/installation/dns-configuration.mdx",version:"current",lastUpdatedBy:"davidkartuzinski",lastUpdatedAt:1606608290,sidebar:"docs",previous:{title:"CE Step by Step Installation",permalink:"/installation/ubuntu-step-by-step"},next:{title:"Troubleshooting Ubuntu Installation",permalink:"/installation/ubuntu-troubleshooting"}},l=[{value:"Configure your DNS Records to point at your server",id:"configure-your-dns-records-to-point-at-your-server",children:[{value:"Example with a domain called, example.com",id:"example-with-a-domain-called-examplecom",children:[]},{value:"Example with a subdomain called, erxes.example.com",id:"example-with-a-subdomain-called-erxesexamplecom",children:[]}]}],b={rightToc:l};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"configure-your-dns-records-to-point-at-your-server"},"Configure your DNS Records to point at your server"),Object(o.b)("p",null,"Your server will have an ",Object(o.b)("strong",{parentName:"p"},"ip address"),". You will need to point your domain (or subdomain) name to your new ",Object(o.b)("strong",{parentName:"p"},"erxes")," server."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If you are using a full ",Object(o.b)("strong",{parentName:"li"},"domain name"),", then you will need to follow the instructions from your ",Object(o.b)("strong",{parentName:"li"},"domain name registrar")," on how to configure the DNS Name Servers to point to your new server."),Object(o.b)("li",{parentName:"ul"},"If you are using a ",Object(o.b)("strong",{parentName:"li"},"subdomain"),", you will need to follow the instructions of updating the `A Records' of the ",Object(o.b)("strong",{parentName:"li"},"hosting company")," which is hosting your website.")),Object(o.b)("h3",{id:"example-with-a-domain-called-examplecom"},"Example with a domain called, example.com"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Example:")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"You will need to manage your Domain from, in this case, ",Object(o.b)("strong",{parentName:"p"},"Digital Ocean"),". You do this by adding the domain to the hosting server Domain Manager of where you're hosting ",Object(o.b)("strong",{parentName:"p"},"erxes"),"."),Object(o.b)("p",{parentName:"div"},"If your domain name is ",Object(o.b)("strong",{parentName:"p"},"example.com"),", and you are using, for example, ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.digitalocean.com/community/tutorials/how-to-point-to-digitalocean-nameservers-from-common-domain-registrars"}),"Digital Ocean"),", then at your ",Object(o.b)("strong",{parentName:"p"},"Domain Name Registrar")," you will adjust your ",Object(o.b)("strong",{parentName:"p"},"Name Server Settings")," to something like this below."),Object(o.b)("h3",Object(n.a)({parentName:"div"},{id:"name-server-setttings"}),"Name Server Setttings"),Object(o.b)("table",{parentName:"div"},Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name Server"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name server 1"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ns1.digitalocean.com")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name server 2"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ns2.digitalocean.com")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name server 3"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ns3.digitalocean.com")))))),Object(o.b)("h3",{id:"example-with-a-subdomain-called-erxesexamplecom"},"Example with a subdomain called, erxes.example.com"),Object(o.b)("p",null,'You first need to create a subdomain. For example, "erxes.example.com". Then you need to edit the ',Object(o.b)("strong",{parentName:"p"},"DNS"),"."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Example:")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If your domain name is ",Object(o.b)("strong",{parentName:"p"},"erxes.example.com"),", and the ",Object(o.b)("strong",{parentName:"p"},"ip address")," assigned to your server is ",Object(o.b)("strong",{parentName:"p"},"44.123.32.12"),", then you will have a two ",Object(o.b)("inlineCode",{parentName:"p"},"A records")," that look like this:"),Object(o.b)("table",{parentName:"div"},Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"erxes.example.com"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"points to 44.123.32.12")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"http://www.erxes.example.com"}),"www.erxes.example.com")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"points to 44.123.32.12")))),Object(o.b)("p",{parentName:"div"},Object(o.b)("strong",{parentName:"p"},"Note:"),' You do not need to create a subdomain specifically called "erxes.example.com", you can use another name of your choice such as "admin.example.com" or "123.example.com".'))))}m.isMDXComponent=!0},143:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),m=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=m(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=m(a),d=n,u=s["".concat(i,".").concat(d)]||s[d]||p[d]||o;return a?r.a.createElement(u,c(c({ref:t},b),{},{components:a})):r.a.createElement(u,c({ref:t},b))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var b=2;b<o;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);