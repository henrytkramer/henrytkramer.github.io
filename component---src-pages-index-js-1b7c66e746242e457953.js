"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{6377:function(e,t,a){var n=a(7294),r=a(5754);const i={initial:{opacity:0},animate:e=>({opacity:1,transition:{duration:1.2,delay:e}})},c={animate:e=>({y:0,opacity:1,transition:{delay:e,y:{type:"spring",stiffness:50,bounce:1,mass:1.1,duration:1},default:{duration:.8}}}),initial:{opacity:0,y:".8em"}};t.Z=e=>{let{text:t="",variants:a={},containerVariants:l={},delay:s=0,...o}=e;return Object.keys(a).length||(a=c),Object.keys(l).length||(l=i),n.createElement("div",Object.assign({style:{overflow:"hidden"}},o),n.createElement(r.E.div,{key:t,custom:s,variants:a,initial:"initial",animate:"animate"},t))}},4882:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),r=a(1883),i=a(5754),c=a(3854);const l={enter:e=>({opacity:1,y:0,transition:{delay:.05*e,duration:.3}}),exit:{opacity:0,backgroundColor:"red"},hidden:{opacity:0,y:30}};var s=e=>{let{event:t,i:a}=e;return n.createElement(i.E.div,{key:`${t.title}+${t.dateFormatted}`,custom:a,initial:"hidden",animate:"enter",exit:"exit",variants:l},n.createElement("div",{className:"events-module--row--e47e7"},n.createElement("div",{className:"events-module--date--1b94a"},n.createElement("span",{className:"nowrap"},t.dateFormatted)," ",t.endDateFormatted&&n.createElement(n.Fragment,null," — ",n.createElement("span",{className:"nowrap"},t.endDateFormatted))),n.createElement("div",{className:"events-module--location--87cb9"},t.location),n.createElement("div",{className:"events-module--description--73819"},n.createElement("div",{className:"events-module--title--5eb8d"},t.title),t.description),n.createElement("div",{className:"events-module--actions--dc3cb"},t.link&&n.createElement(r.Link,{target:"_blank",to:t.link,alt:"Details"},n.createElement("span",{className:"events-module--actions-text--6830b"},"Event Details")," ",n.createElement(c.Hi9,null)))))}},5869:function(e,t,a){var n=a(7294),r=(a(1883),a(4251)),i=a(4882);const c=function(e){let t=[],a=[],n=[];if(e){t=e.allGoogleScheduleSheet.nodes;const r={timeStyle:"short",hour12:!0},i={month:"short",day:"numeric"},c={month:"short",day:"numeric",year:"numeric"},l=(new Date).getFullYear(),s=Date.now();t.forEach((e=>{const t=new Date(e.date);e.date=t;const o=t.getFullYear()==l?i:c;if(e.dateFormatted=t.toLocaleDateString([],o),e.start){const t=new Date(e.date+" "+e.start);e.startFormatted=t.toLocaleTimeString([],r)}if(e.endDate){const t=new Date(e.endDate);e.endDateFormatted=t.toLocaleDateString([],o)}t.getTime()>=s?a.push(e):n.push(e)}))}return a.sort(((e,t)=>e.date-t.date)),n.sort(((e,t)=>t.date-e.date)),[a,n]};t.Z=e=>{let{data:t={},showing:a=0,limit:l=99}=e;const[s,o]=c(t),u=0===a?s:o;return n.createElement("div",null,u.slice(0,l).map(((e,t)=>n.createElement(r.M,{exitBeforeEnter:!0},n.createElement(i.Z,{event:e,i:t})))))}},1835:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var n=a(7294),r=a(1883),i=a(8032),c="button-module--button--504cd",l=a(5377);var s=e=>{const t=e.primary?"button-module--primary--76671":"",a=[c,t].join(" ");return n.createElement(l.Z,{to:e.link,className:a},e.children)},o=a(1876),u=a(6377),m=a(5091),d=a(8183),f=a(5869);var b=e=>{let{data:t}=e;return n.createElement(o.Z,null,n.createElement(d.Z,{title:"Home"}),n.createElement("div",{className:"jumbo-text"},n.createElement(u.Z,{text:"HENRY"}),n.createElement(u.Z,{text:"KRAMER",delay:.15})),n.createElement("div",{className:"hero"},n.createElement(i.S,{src:"../images/steinway-portrait.jpg",alt:"Portrait of Henry Kramer in front of a piano",style:{maxHeight:"85vh"},__imageData:a(5261)})),n.createElement(m.Z,null,n.createElement("h2",{className:"index-block"},n.createElement(r.Link,null,"Award-winning musician")," who combines stylish programming with insightful and exuberant interpretations.")),n.createElement(m.Z,null,n.createElement("section",{className:"index-block"},n.createElement("h2",null,"Albums"),n.createElement("div",{className:"two-flex"},n.createElement("div",{className:"album-cover"},n.createElement(i.S,{src:"../images/stellax_album.jpg",alt:"Schubert album cover, featuring Stella Chen",__imageData:a(4061)})),n.createElement("div",null,n.createElement("h3",null,"Stella x Schubert—"),n.createElement("p",null,"An electric program of Schubert with violinist Stella Chen"),n.createElement("div",null,n.createElement(s,{primary:!0,target:"_blank",link:"https://open.spotify.com/album/5GwhiGQMc4CbJ0vCD8p06V?si=RmojoKfeQvGfZTuCyGMJeA"},"Spotify"),n.createElement(s,{target:"_blank",link:"https://open.spotify.com/artist/4xdZ9fYujKkuzxnNBfm8KW?si=Hz6ZRG_1RCqAfNtCZYEoMg"},"See all albums")))),n.createElement("div",{className:"two-flex"},n.createElement("div",{className:"album-cover"},n.createElement(i.S,{src:"../images/voyage_album.jpg",alt:"Voyage album cover, Henry Kramer and cellist Christine Lee standing back to back",__imageData:a(805)})),n.createElement("div",null,n.createElement("h3",null,"Voyage—"),n.createElement("p",null,"Taking you somewhere elegeic and temporal. A collaboration with cellist Christine Lee featuring works by Elliot Carter, Barber, and Ysaÿe."),n.createElement("div",null,n.createElement(s,{primary:!0,target:"_blank",link:"https://open.spotify.com/album/3j3gbtGL6ZVHhATLk91nVD?si=2TUjW6n_TOu-6ttE3UZb1g"},"Spotify"),n.createElement(s,{target:"_blank",link:"https://open.spotify.com/artist/4xdZ9fYujKkuzxnNBfm8KW?si=Hz6ZRG_1RCqAfNtCZYEoMg"},"See all albums")))))),n.createElement(m.Z,null,n.createElement("section",{className:"index-block"},n.createElement("h2",null,"Videos"),n.createElement("div",{className:"two-flex"},n.createElement("div",null,n.createElement(i.S,{src:"../images/video-preview.png",alt:"Henry standing in front of an orchestra",style:{maxWidth:"30vw"},__imageData:a(5258)}))," ",n.createElement("div",null,n.createElement("h3",null,"Prokofiev Concerto No. 2—"),n.createElement("p",null,"Performed with the Belgian National Orchestra"),n.createElement("div",null,n.createElement(s,{primary:!0,link:"/media"},"Watch")))))),n.createElement("section",null,n.createElement("div",{className:"two-flex"},n.createElement("h2",null,"Upcoming Performances"),n.createElement(s,{link:"/schedule"},"See all")),n.createElement(f.Z,{data:t,limit:3})))}},4251:function(e,t,a){a.d(t,{M:function(){return w}});var n=a(7582),r=a(7294),i=a(9304),c=a(2396),l=a(8868);function s(){var e=(0,r.useRef)(!1);return(0,l.L)((function(){return e.current=!0,function(){e.current=!1}}),[]),e}var o=a(240),u=a(6681),m=a(6316),d=function(e){var t=e.children,a=e.initial,i=e.isPresent,c=e.onExitComplete,l=e.custom,s=e.presenceAffectsLayout,d=(0,u.h)(f),b=(0,m.M)(),p=(0,r.useMemo)((function(){return{id:b,initial:a,isPresent:i,custom:l,onExitComplete:function(e){var t,a;d.set(e,!0);try{for(var r=(0,n.XA)(d.values()),i=r.next();!i.done;i=r.next()){if(!i.value)return}}catch(l){t={error:l}}finally{try{i&&!i.done&&(a=r.return)&&a.call(r)}finally{if(t)throw t.error}}null==c||c()},register:function(e){return d.set(e,!1),function(){return d.delete(e)}}}}),s?void 0:[i]);return(0,r.useMemo)((function(){d.forEach((function(e,t){return d.set(t,!1)}))}),[i]),r.useEffect((function(){!i&&!d.size&&(null==c||c())}),[i]),r.createElement(o.O.Provider,{value:p},t)};function f(){return new Map}var b=a(5364),p=a(5411),v=function(e){return e.key||""};var w=function(e){var t=e.children,a=e.custom,o=e.initial,u=void 0===o||o,m=e.onExitComplete,f=e.exitBeforeEnter,w=e.presenceAffectsLayout,g=void 0===w||w,h=(0,n.CR)(function(){var e=s(),t=(0,n.CR)((0,r.useState)(0),2),a=t[0],i=t[1],l=(0,r.useCallback)((function(){e.current&&i(a+1)}),[a]);return[(0,r.useCallback)((function(){return c.ZP.postRender(l)}),[l]),a]}(),1),E=h[0],y=(0,r.useContext)(b.p).forceRender;y&&(E=y);var x=s(),k=function(e){var t=[];return r.Children.forEach(e,(function(e){(0,r.isValidElement)(e)&&t.push(e)})),t}(t),_=k,S=new Set,N=(0,r.useRef)(_),C=(0,r.useRef)(new Map).current,j=(0,r.useRef)(!0);if((0,l.L)((function(){j.current=!1,function(e,t){e.forEach((function(e){var a=v(e);t.set(a,e)}))}(k,C),N.current=_})),(0,p.z)((function(){j.current=!0,C.clear(),S.clear()})),j.current)return r.createElement(r.Fragment,null,_.map((function(e){return r.createElement(d,{key:v(e),isPresent:!0,initial:!!u&&void 0,presenceAffectsLayout:g},e)})));_=(0,n.ev)([],(0,n.CR)(_),!1);for(var Z=N.current.map(v),D=k.map(v),z=Z.length,R=0;R<z;R++){var A=Z[R];-1===D.indexOf(A)&&S.add(A)}return f&&S.size&&(_=[]),S.forEach((function(e){if(-1===D.indexOf(e)){var t=C.get(e);if(t){var n=Z.indexOf(e);_.splice(n,0,r.createElement(d,{key:v(t),isPresent:!1,onExitComplete:function(){C.delete(e),S.delete(e);var t=N.current.findIndex((function(t){return t.key===e}));if(N.current.splice(t,1),!S.size){if(N.current=k,!1===x.current)return;E(),m&&m()}},custom:a,presenceAffectsLayout:g},t))}}})),_=_.map((function(e){var t=e.key;return S.has(t)?e:r.createElement(d,{key:v(e),isPresent:!0,presenceAffectsLayout:g},e)})),"production"!==i.O&&f&&_.length>1&&console.warn("You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour."),r.createElement(r.Fragment,null,S.size?_:_.map((function(e){return(0,r.cloneElement)(e)})))}},5258:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/389ca75e005d11c44e1bbb0571b6dee3/1099d/video-preview.png","srcSet":"/static/389ca75e005d11c44e1bbb0571b6dee3/88537/video-preview.png 392w,\\n/static/389ca75e005d11c44e1bbb0571b6dee3/d450e/video-preview.png 784w,\\n/static/389ca75e005d11c44e1bbb0571b6dee3/1099d/video-preview.png 1568w","sizes":"(min-width: 1568px) 1568px, 100vw"},"sources":[{"srcSet":"/static/389ca75e005d11c44e1bbb0571b6dee3/d60ea/video-preview.webp 392w,\\n/static/389ca75e005d11c44e1bbb0571b6dee3/a1bc8/video-preview.webp 784w,\\n/static/389ca75e005d11c44e1bbb0571b6dee3/74b14/video-preview.webp 1568w","type":"image/webp","sizes":"(min-width: 1568px) 1568px, 100vw"}]},"width":1568,"height":892}')},805:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#281818","images":{"fallback":{"src":"/static/e9df90a720b068949c7c6a4b10ea16c7/a89ca/voyage_album.jpg","srcSet":"/static/e9df90a720b068949c7c6a4b10ea16c7/96deb/voyage_album.jpg 150w,\\n/static/e9df90a720b068949c7c6a4b10ea16c7/0fdf4/voyage_album.jpg 300w,\\n/static/e9df90a720b068949c7c6a4b10ea16c7/a89ca/voyage_album.jpg 600w","sizes":"(min-width: 600px) 600px, 100vw"},"sources":[{"srcSet":"/static/e9df90a720b068949c7c6a4b10ea16c7/c65bc/voyage_album.webp 150w,\\n/static/e9df90a720b068949c7c6a4b10ea16c7/078c3/voyage_album.webp 300w,\\n/static/e9df90a720b068949c7c6a4b10ea16c7/6d09e/voyage_album.webp 600w","type":"image/webp","sizes":"(min-width: 600px) 600px, 100vw"}]},"width":600,"height":600}')},4061:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/7ac0f2878817be14fe066290a43a8a0c/a89ca/stellax_album.jpg","srcSet":"/static/7ac0f2878817be14fe066290a43a8a0c/96deb/stellax_album.jpg 150w,\\n/static/7ac0f2878817be14fe066290a43a8a0c/0fdf4/stellax_album.jpg 300w,\\n/static/7ac0f2878817be14fe066290a43a8a0c/a89ca/stellax_album.jpg 600w","sizes":"(min-width: 600px) 600px, 100vw"},"sources":[{"srcSet":"/static/7ac0f2878817be14fe066290a43a8a0c/c65bc/stellax_album.webp 150w,\\n/static/7ac0f2878817be14fe066290a43a8a0c/078c3/stellax_album.webp 300w,\\n/static/7ac0f2878817be14fe066290a43a8a0c/6d09e/stellax_album.webp 600w","type":"image/webp","sizes":"(min-width: 600px) 600px, 100vw"}]},"width":600,"height":600}')},5261:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/b518f32778506c0de5907cb2241fd550/01062/steinway-portrait.jpg","srcSet":"/static/b518f32778506c0de5907cb2241fd550/ee7c4/steinway-portrait.jpg 512w,\\n/static/b518f32778506c0de5907cb2241fd550/42044/steinway-portrait.jpg 1024w,\\n/static/b518f32778506c0de5907cb2241fd550/01062/steinway-portrait.jpg 2048w","sizes":"(min-width: 2048px) 2048px, 100vw"},"sources":[{"srcSet":"/static/b518f32778506c0de5907cb2241fd550/6a7d4/steinway-portrait.webp 512w,\\n/static/b518f32778506c0de5907cb2241fd550/3b771/steinway-portrait.webp 1024w,\\n/static/b518f32778506c0de5907cb2241fd550/e98e7/steinway-portrait.webp 2048w","type":"image/webp","sizes":"(min-width: 2048px) 2048px, 100vw"}]},"width":2048,"height":1367}')}}]);
//# sourceMappingURL=component---src-pages-index-js-1b7c66e746242e457953.js.map