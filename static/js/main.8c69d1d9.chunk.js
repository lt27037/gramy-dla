(this["webpackJsonpgramy-dla"]=this["webpackJsonpgramy-dla"]||[]).push([[0],{119:function(e,t,s){},120:function(e,t,s){},121:function(e,t,s){},122:function(e,t,s){},123:function(e,t,s){},124:function(e,t,s){},125:function(e,t,s){},126:function(e,t,s){},224:function(e,t,s){},225:function(e,t,s){},226:function(e,t,s){},227:function(e,t,s){},228:function(e,t,s){},229:function(e,t,s){},232:function(e,t,s){},233:function(e,t,s){},234:function(e,t,s){},235:function(e,t,s){},236:function(e,t,s){},237:function(e,t,s){},238:function(e,t,s){},239:function(e,t,s){},240:function(e,t,s){"use strict";s.r(t);var i=s(0),a=s(1),n=s(11),c=s.n(n),o=(s(85),s(20)),r=s(47),l=s.n(r),u=s(75),m=s(6),d=s(3),j=s(29),p=s.n(j),b=(s(52),s(119),function(e){return e.preventDefault()}),h={acf:{tytul:"",zajawka:"",datadodania:"",zdjecie:""},id:"0000000"},O=function(e){var t=e.items,s=void 0===t?[h]:t,a=null===s||void 0===s?void 0:s.map((function(e){return Object(i.jsx)("div",{className:"photoCarousel__item",children:Object(i.jsx)("img",{alt:e.acf.name,className:"photoCarousel__img",onDragStart:b,src:e.acf.miniurl},e.id)})}));return Object(i.jsx)("div",{className:"photoCarousel",children:Object(i.jsx)(p.a,{mouseTracking:!0,items:a,autoHeight:!1,responsive:{0:{items:3},786:{items:4},1200:{items:7},1550:{items:9},1800:{items:9}},autoPlay:!0,disableButtonsControls:!0,disableDotsControls:!0,infinite:!0,autoPlayInterval:3e3})})},x=(s(120),function(e){return e.preventDefault()}),f={acf:{tytul:"",zajawka:"",datadodania:"",zdjecie:""},id:"0000000"},v=function(e){var t=e.items,s=void 0===t?[f]:t,n=Object(a.useState)(1900),c=Object(m.a)(n,2),o=c[0],r=c[1],l=s.map((function(e){var t=e.id,s=e.acf;return Object(i.jsxs)("div",{className:"photoSlider__item",children:[Object(i.jsx)("img",{alt:s.title,className:"photoSlider__img",onDragStart:x,src:o>=786?s.zdjecie:s.zdjeciemini},t),Object(i.jsxs)("div",{className:"photoSlider__content",children:[Object(i.jsx)("h3",{className:"photoSlider__content__discription",children:s.content}),Object(i.jsx)("h2",{className:"photoSlider__content__title",children:s.title})]})]})})),u=function(){r(Number(window.innerWidth))};return Object(a.useEffect)((function(){return r(Number(window.innerWidth)),window.addEventListener("resize",u),function(){window.removeEventListener("resize",u)}}),[]),Object(i.jsx)("div",{className:"photoSlider",children:Object(i.jsx)(p.a,{mouseTracking:!0,items:l,autoHeight:!1,autoPlay:!0,disableDotsControls:!0,infinite:!0,autoPlayInterval:5e3})})},_=(s(121),function(e){var t=e.event;return Object(i.jsxs)("div",{className:"event",children:[Object(i.jsx)("div",{className:"event__info",children:"".concat(t.date,", ").concat(t.time)}),Object(i.jsx)("div",{className:"event__title",children:t.title}),Object(i.jsx)("img",{src:t.thumbnail,alt:"miniatura wydarzenia",className:"event__photo"}),Object(i.jsx)("button",{className:"button",children:"Zobacz szczeg\xf3\u0142y"})]})}),z=(s(122),[{id:1,date:"11.01.2021",time:"19:00",title:"Gramy dla Anny",thumbnail:"https://picsum.photos/id/102/400/300"}]),w=function(){return Object(i.jsxs)("div",{className:"closestEvent",children:[Object(i.jsx)("h3",{className:"closestEvent__title",children:"Najbli\u017csze wyda\u017cenie"}),Object(i.jsx)(_,{event:z[0]})]})},g=(s(123),function(){return Object(i.jsxs)("div",{className:"becomeVolunteer",children:[Object(i.jsx)("h3",{className:"becomeVolunteer__title",children:"Zosta\u0144 wolontariuszem!"}),Object(i.jsx)("img",{src:"https://picsum.photos/300/200",alt:"Zdj\u0119cie banera zosta\u0144 wolontariuszem",className:"becomeVolunteer__photo"}),Object(i.jsx)("button",{className:"button",children:"Do\u0142\u0105cz do nas!"})]})}),N=(s(124),{acf:{tytul:"",zajawka:"",datadodania:"",zdjecie:""},id:"0000000"}),y=function(e){var t=e.post,s=void 0===t?N:t,a=s.acf,n=a.tytul,c=a.zajawka,o=a.datadodania,r=a.zdjecie;return Object(i.jsxs)("div",{className:"postShortcut",id:s.id,children:[Object(i.jsx)("img",{src:r,alt:"Miniatura posta",className:"postShortcut__photo"}),Object(i.jsxs)("div",{className:"postShortcut__content",children:[Object(i.jsx)("div",{className:"postShortcut__date",children:o}),Object(i.jsx)("h3",{className:"postShortcut__title",children:n}),Object(i.jsxs)("p",{className:"postShortcut__text",children:[c,"...",Object(i.jsx)("span",{className:"postShortcut__more",children:"Czytaj dalej"})]})]})]})},k=(s(125),{id:198,acf:{tytul:"Trzyma obyczajem pa\u0144skim i psy tu\u017c nad niego",tresc:"Pas taki mo\u017cna wydrukowa\u0107 wszystkie dzienne rachunki przeziera\u0107 nareszcie rzek\u0142 do swawoli. Z kim on je nape\u0142ni\u0142 my\u015blami. Po c\xf3\u017c k\u0142\xf3ci\u0107 si\u0119 pan Podkomorzy i ust nie ma jutro sam oczu nie ma albo szabl\u0105 robi\u0107. Wiedzia\u0142, \u017ce dzi\u015b nagodzi do spoczynku. Starsi i pannom s\u0142u\u017cy\u0142o. S\u0119dzia, z wo\u017anym Protazym ze \u017cniwa i ju\u017c robi\u0142 projekt, \u017ce przymiot\xf3w jego pami\u0119\u0107 droga do afekt\xf3w i zwyci\u0119zca, wydartych potomkom Cezar\xf3w rzuci\u0142 w niebo, miecz obur\u0105cz trzyma.",zajawka:"Pas taki mo\u017cna wydrukowa\u0107 wszystkie dzienne rachunki przeziera\u0107 nareszcie rzek\u0142 do swawoli. Z kim on",datadodania:"21 stycznia 2021, 15:06:58",zdjecie:"https://gora1234.webd.pro/wp-content/uploads/2021/01/post8-min.jpg",zdjeciemini:!1}}),S=function(e){var t=e.sponsors,s=e.sliders,n=e.posts,c=(void 0===n?[k]:n).map((function(e){return Object(i.jsx)(y,{post:e},e.id)}));return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(v,{items:s}),Object(i.jsx)(O,{items:t}),Object(i.jsxs)("div",{className:"homeBox",children:[Object(i.jsx)(w,{}),Object(i.jsx)(g,{}),Object(i.jsx)("div",{className:"someOvject",children:"*Tu b\u0119dzie kalendarz lub co\u015b innego*"}),Object(i.jsxs)("div",{className:"homePostWrapper",children:[Object(i.jsx)("h3",{className:"homePostWrapper__title",children:"Aktualno\u015bci"}),c||null,Object(i.jsx)("button",{className:"button",children:"Zobacz wi\u0119cej"})]})]})]})},q=(s(126),function(e){var t=e.sponsors,s=e.posts,n=Object(a.useState)([]),c=Object(m.a)(n,2),o=c[0],r=c[1];return Object(a.useEffect)((function(){window.scrollTo(0,0);var e=void 0!==s[0].acf?s.map((function(e){return Object(i.jsx)(y,{post:e},e.id)})):null;r(e)}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(O,{items:t}),Object(i.jsx)("h2",{className:"news__title",children:"Aktualno\u015bci"}),Object(i.jsx)("div",{className:"news__postWrapper",children:0!==o.length?o:null})]})}),E=s(79),L=s(77),C=s.n(L),P=(s(223),s(224),function(e){var t=e.photos,s=Object(a.useState)(!1),n=Object(m.a)(s,2),c=n[0],o=n[1],r=Object(a.useState)(""),l=Object(m.a)(r,2),u=l[0],d=l[1],j=Object(a.useState)(4),p=Object(m.a)(j,2),b=p[0],h=p[1],O=Object(a.useState)("80%"),x=Object(m.a)(O,2),f=x[0],v=x[1],_=Object(a.useRef)(null),z=t.map((function(e){return"https://picsum.photos/id/".concat(e.id,"/").concat(Math.floor(e.width/3),"/").concat(Math.floor(e.height/3),".webp")})),w=function(e){"IMG"===e.target.nodeName&&(d(e.target.src),o(!c))},g=function(){var e=window.innerWidth;e<=786?(h(1),v("98%")):e>787&&e<=1200?(h(2),v("90%")):e>1201&&e<=1550?(h(3),v("90%")):e>=1551&&(h(5),v("100%"))};return Object(a.useEffect)((function(){var e=_.current.querySelector(".galleryWrapper");return e.addEventListener("click",w),window.addEventListener("resize",g),function(){e.removeEventListener("click",w),window.removeEventListener("resize",g)}}),[]),Object(a.useEffect)((function(){var e=_.current.querySelector(".galleryWrapper").querySelectorAll("img");void 0!==e&&e.length>z.length&&g()})),Object(a.useLayoutEffect)((function(){g()}),[]),Object(i.jsxs)("div",{className:"galleryBox",ref:_,children:[Object(i.jsx)(C.a,{numCols:b,containerWidth:f,className:"galleryWrapper",animate:!0,forceOrder:!1,imageUrls:z}),Object(i.jsx)(E.a,{show:c,photos:[u],onClose:function(){return o(!c)}})]})}),A=(s(225),function(e){var t=e.sponsors,s=e.photos;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(O,{items:t}),Object(i.jsx)(P,{photos:s})]})}),B=(s(226),s(227),function(e){var t=e.photo,s=e.text;return Object(i.jsxs)("section",{className:"aboutSection",children:[Object(i.jsx)("img",{src:t,alt:"Zdj\u0119cie w sekcji o nas",className:"aboutSection__photo"}),Object(i.jsx)("p",{className:"aboutSection__text",children:s}),Object(i.jsx)("img",{src:t,alt:"Zdj\u0119cie w sekcji o nas",className:"aboutSection__background"})]})}),W=function(){return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(i.jsxs)("div",{className:"aboutWrapper",children:[Object(i.jsx)(B,{photo:"https://picsum.photos/id/696/750/500.webp",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum consequatur quo, inventore nisi ipsum rem debitis maiores blanditiis quos, porro, officia non nihil amet deleniti? Eligendi iste dignissimos nihil hic."}),Object(i.jsx)(B,{photo:"https://picsum.photos/id/999/750/500.webp",text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias eum quia dolor cum animi quos expedita sint odio modi vero enim, vitae maxime necessitatibus, quod a aperiam perspiciatis earum ab!"}),Object(i.jsx)(B,{photo:"https://picsum.photos/id/145/750/500.webp",text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias eum quia dolor cum animi quos expedita sint odio modi vero enim, vitae maxime necessitatibus, quod a aperiam perspiciatis earum ab!"}),Object(i.jsx)(B,{photo:"https://picsum.photos/id/866/750/500.webp",text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias eum quia dolor cum animi quos expedita sint odio modi vero enim, vitae maxime necessitatibus, quod a aperiam perspiciatis earum ab!"}),Object(i.jsx)(B,{photo:"https://picsum.photos/id/1005/750/500.webp",text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias eum quia dolor cum animi quos expedita sint odio modi vero enim, vitae maxime necessitatibus, quod a aperiam perspiciatis earum ab!"})]})},Z=(s(228),function(e){var t=e.src,s=e.alt,a=e.name;return Object(i.jsxs)("div",{className:"sponsorProfile",children:[Object(i.jsx)("img",{src:t,alt:s,className:"sponsorProfile__photo"}),Object(i.jsx)("span",{className:"sponsorProfile__name",children:a})]})}),D=(s(229),function(e){var t=e.sponsors.map((function(e){var t=e.id,s=e.acf;return Object(i.jsx)(Z,{src:s.url,alt:"Zdj\u0119cie profilowe sponsora ".concat(s.name,"."),name:s.name},t)})),s=Object(d.f)();return Object(i.jsxs)("div",{className:"sponsors",children:[Object(i.jsx)("h2",{className:"sponsors__title",children:" Serdecznie dzi\u0119kujemy wszystkim kt\xf3rzy wspieraj\u0105 nasze dzia\u0142ania!"}),Object(i.jsx)("p",{className:"sponsors__italic",children:"Nie liczy si\u0119 to ile posiadasz, ale ile dajesz innym i jak si\u0119 z nimi dzielisz. Pomagaj\u0105c innym pomagasz i sobie. Starajcie si\u0119 zostawi\u0107 ten \u015bwiat cho\u0107 troch\u0119 lepszym, ni\u017c go zastali\u015bcie."}),Object(i.jsx)("div",{className:"sponsors__profilesWrapper",children:t}),Object(i.jsx)("button",{className:"button",onClick:function(){s.push({pathname:"/zostan-sponsorem"})},children:"Zosta\u0144 Sponsorem"})]})}),T=(s(232),function(e){var t=e.events,s=e.month,a=e.year,n=t.map((function(e){return Object(i.jsx)(_,{event:e},e.id)}));return Object(i.jsxs)("section",{className:"monthSection",children:[Object(i.jsxs)("h2",{className:"monthSection__header",children:[s," ",a]}),n]})}),I=(s(233),[{id:1,date:"11.12.2020",time:"19:00",title:"Gramy dla Janka",thumbnail:"https://picsum.photos/id/131/400/300"},{id:2,date:"31.12.2020",time:"17:00",title:"Gramy dla Pauliny",thumbnail:"https://picsum.photos/id/584/400/300"}]),F=[{id:1,date:"11.01.2021",time:"19:00",title:"Gramy dla Anny",thumbnail:"https://picsum.photos/id/102/400/300"}],G=function(e){var t=e.sponsors;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]),console.log(),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(O,{items:t}),Object(i.jsx)(T,{events:I,month:"Grudzie\u0144",year:"2020"}),Object(i.jsx)(T,{events:F,month:"Stycze\u0144",year:"2021"})]})},V=(s(234),function(e){var t=e.sponsors;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(O,{items:t}),Object(i.jsx)("h2",{className:"volunteer__title",children:"Zapraszamy do wsp\xf3\u0142pracy wszystkie ch\u0119tne osoby!"}),Object(i.jsx)("p",{className:"volunteer__text",children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam voluptas nesciunt saepe explicabo ullam laboriosam voluptates vel nulla cum maxime est quisquam et dicta asperiores quis, eveniet, quibusdam voluptatum iusto. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti dicta voluptate, sed inventore ipsam quibusdam natus consequuntur, praesentium iusto obcaecati quo aliquid enim earum incidunt quod delectus omnis necessitatibus nisi!"}),Object(i.jsx)("img",{src:"https://picsum.photos/id/447/600/400",alt:"Zdj\u0119cie wolontariuszy stowarzyszenia",className:"volunteer__photo"}),Object(i.jsx)("p",{className:"volunteer__text",children:"Adipisicing elit. Ipsam voluptas nesciunt saepe explicabo ullam laboriosam voluptates vel nulla cum maxime est quisquam et dicta asperiores quis, eveniet, quibusdam voluptatum iusto lorem ipsum dolor sit amet consectetur. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus animi alias recusandae perferendis magni tempore saepe ipsum. Fuga molestias laboriosam velit, adipisci consectetur et ipsa? Voluptate officia doloremque autem nam."}),Object(i.jsx)("h2",{className:"volunteer__title",children:"* tu b\u0119dzie formularz *"})]})}),J=(s(235),function(e){var t=e.sponsors;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(O,{items:t}),Object(i.jsx)("h3",{className:"become__title",children:"Zapraszamy do wsparcia naszego stowarzyszenia"}),Object(i.jsxs)("div",{className:"become__wrapper",children:[Object(i.jsxs)("div",{className:"become__wrapper__leftBar",children:[Object(i.jsx)("h3",{className:"become__wrapper__leftBar__titleA",children:"Dzi\u0119ki waszej pomocy mo\u017cemy"}),Object(i.jsx)("h2",{className:"become__wrapper__leftBar__titleB",children:"gra\u0107 dalej!"}),Object(i.jsx)("p",{className:"become__wrapper__leftBar__text",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam fuga tempore harum veritatis reprehenderit dicta dolores accusamus, minima officiis qui assumenda vel voluptas ipsam, nihil, consequatur corrupti. Iure, adipisci quidem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident ipsum dolor sapiente vero mollitia voluptas optio libero molestias placeat. Nihil adipisci ipsa exercitationem facere illum tempora quod cumque totam laborum."}),Object(i.jsx)("p",{className:"become__wrapper__leftBar__text",children:"Consectetur adipisicing elit. Perferendis tenetur sit recusandae a quasi blanditiis deleniti quibusdam, voluptatibus provident, tempora magni, optio officiis consequuntur cum laudantium nobis itaque. Itaque, quasi? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo excepturi rerum consectetur, praesentium alias molestiae delectus voluptatum ab atque neque possimus quod assumenda. At obcaecati earum vel sunt saepe iure!"})]}),Object(i.jsxs)("div",{className:"become__wrapper__rightBar",children:[Object(i.jsx)("h2",{className:"become__wrapper__rightBar__title",children:"Oto jak mo\u017cna nas wspom\xf3c"}),Object(i.jsxs)("div",{className:"become__wrapper__rightBar__data",children:[Object(i.jsx)("span",{className:"data__text",children:"Dane do przelewu"}),Object(i.jsx)("span",{className:"data__accontNumber",children:"33 4343 2134 1234 1234 5321"}),Object(i.jsx)("span",{className:"data__info",children:"W tytule przelewu podaj Nazw\u0119 firmy / imi\u0119 i nazwisko oraz adress email lub numer telefonu"}),Object(i.jsx)("span",{className:"data__info",children:"* DO DOKO\u0143CZENIA I KONSULTACJI *"})]})]})]})]})}),M=(s(236),function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),s=t[0],n=t[1],c=Object(a.useState)([]),o=Object(m.a)(c,2),r=o[0],j=o[1],p=Object(a.useState)([]),b=Object(m.a)(p,2),h=b[0],O=b[1],x=Object(a.useState)([]),f=Object(m.a)(x,2),v=f[0],_=f[1],z=function(){var e=Object(u.a)(l.a.mark((function e(t){var s,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return s=e.sent,e.next=6,s.json();case 6:return i=e.sent,e.abrupt("return",i);case 10:e.prev=10,e.t0=e.catch(0),console.error("B\u0142\u0105d \u0142\u0105czenia z serwerem! "+e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){var e="https://gora1234.webd.pro/wp-json/acf/v3/posts?categories",t="".concat(e,"=2"),s="".concat(e,"=3"),i="".concat(e,"=4");z(t).then((function(e){return n(e)})),z(s).then((function(e){return j(e)})),z(i).then((function(e){return _(e)})),z("https://picsum.photos/v2/list?page=4&limit=99").then((function(e){return O(e)}))}),[]),console.log("rerender! aktualny stan pobierania z api: "+r.length),Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)(d.c,{children:[Object(i.jsx)(d.a,{path:"/",exact:!0,children:Object(i.jsx)(S,{sponsors:s,sliders:r,posts:v})}),Object(i.jsx)(d.a,{path:"/aktualnosci",children:Object(i.jsx)(q,{sponsors:s,posts:v})}),Object(i.jsx)(d.a,{path:"/galeria",children:Object(i.jsx)(A,{sponsors:s,photos:h})}),Object(i.jsx)(d.a,{path:"/onas",children:Object(i.jsx)(W,{})}),Object(i.jsx)(d.a,{path:"/sponsorzy",children:Object(i.jsx)(D,{sponsors:s})}),Object(i.jsx)(d.a,{path:"/wydarzenia",children:Object(i.jsx)(G,{sponsors:s})}),Object(i.jsx)(d.a,{path:"/zostan-wolontariuszem",children:Object(i.jsx)(V,{sponsors:s})}),Object(i.jsx)(d.a,{path:"/zostan-sponsorem",children:Object(i.jsx)(J,{sponsors:s})})]})})}),R=(s(237),function(){return Object(i.jsx)("footer",{className:"footer",children:"Footer"})}),H=s.p+"static/media/logo@inne.815f207e.png",K=(s(238),[{name:"Strona g\u0142\xf3wna",path:"/",exact:!0},{name:"Aktualno\u015bci",path:"/aktualnosci",exact:!1},{name:"Galeria",path:"/galeria",exact:!1},{name:"O nas",path:"/onas",exact:!1},{name:"Sponsorzy",path:"/sponsorzy",exact:!1},{name:"Wydarzenia",path:"/wydarzenia",exact:!1}]),U=function(){var e=Object(d.f)(),t=Object(a.useRef)(null),s=Object(a.useRef)(null),n=K.map((function(e){return Object(i.jsx)("li",{className:"header__menu__list__option",children:Object(i.jsx)(o.b,{to:e.path,exact:e.exact,activeClassName:"option--active",children:e.name})},e.path)})),c=function(e){var t=e.target,s=t.firstChild,i=t.nextElementSibling,a=i.nextElementSibling;s.classList.toggle("btn--active"),i.classList.toggle("menu--active"),a.classList.toggle("button--active")},r=function(e){var t=e.target;if("A"===t.nodeName){var s=t.parentNode.parentNode.parentNode,i=s.previousElementSibling.firstChild,a=s.nextElementSibling;i.classList.remove("btn--active"),s.classList.remove("menu--active"),a.classList.remove("button--active")}};return Object(a.useEffect)((function(){var e=t.current.querySelector(".header__menuBtn__btn"),s=t.current.querySelector(".header__menu__list");return e.addEventListener("click",c),s.addEventListener("click",r),function(){e.removeEventListener("click",c),s.removeEventListener("click",r)}}),[]),Object(i.jsxs)("header",{className:"header",ref:t,children:[Object(i.jsx)("img",{src:H,alt:"Logo stowa\u017cyszenia",className:"header__logo"}),Object(i.jsx)("div",{className:"header__menuBtn",onClick:c,children:Object(i.jsx)("button",{className:"header__menuBtn__btn"})}),Object(i.jsx)("nav",{className:"header__menu",children:Object(i.jsx)("ul",{className:"header__menu__list",children:n})}),Object(i.jsx)("button",{className:"header__button",ref:s,onClick:function(t){var s=t.target,i=s.previousElementSibling,a=s;i.previousElementSibling.firstChild.classList.remove("btn--active"),i.classList.remove("menu--active"),a.classList.remove("button--active"),e.push({pathname:"/zostan-wolontariuszem"})},children:"Zosta\u0144 wolontariuszem"})]})},Q=(s(239),function(){return Object(i.jsx)(o.a,{basename:"/gramy-dla",children:Object(i.jsxs)("div",{id:"main",children:[Object(i.jsx)(U,{}),Object(i.jsx)(M,{}),Object(i.jsx)(R,{})]})})});c.a.render(Object(i.jsx)(Q,{}),document.getElementById("root"))},85:function(e,t,s){}},[[240,1,2]]]);
//# sourceMappingURL=main.8c69d1d9.chunk.js.map