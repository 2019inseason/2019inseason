$(function(){var a=0,n=-90,s=["#006781","#4B8D32","#D6CD25","#006857","#ED7235","#FF947B","#AF485C","#F7B42F","#AE7516","#C99A6B","#2E8E89","#325984"],i=0,o=["jan.json","feb.json","mar.json","apr.json","may.json","jun.json","july.json","aug.json","sep.json","oct.json","nov.json","dec.json"],p=0,d=1;$("._island_intro__seasonSection--1").addClass("active"),$("._island_intro__row--x").addClass("active");var e=new Swiper(".swiper-container--bg",{loop:!0,speed:1e3,pagination:{el:".swiper-pagination",dynamicBullets:!0},mousewheel:!0});e.on("slideNextTransitionStart",function(){console.log("next"),a+=90,n+=90,$("._island_intro__row--x").css("transform","rotate("+a+"deg)"),$("._island_intro__row--y").css("transform","rotate("+n+"deg)")}),e.on("slidePrevTransitionStart",function(){console.log("prev"),a-=90,n-=90,$("._island_intro__row--x").css("transform","rotate("+a+"deg)"),$("._island_intro__row--y").css("transform","rotate("+n+"deg)")}),e.on("slideChangeTransitionStart",function(){console.log(this.activeIndex),13==(i=this.activeIndex)?i=1:0==i&&(i=12);var a=i-1;$("._island_intro__circle").css("background-color",s[a]),$("._island_intro__view").css("background-color",s[a]),d=(p=a)+1,1!=i&&4!=i||(console.log("circle1"),$("._island_intro__seasonSection").removeClass("active"),$("._island_intro__seasonSection--1").addClass("active")),5!=i&&8!=i||(console.log("circle2"),$("._island_intro__seasonSection").removeClass("active"),$("._island_intro__seasonSection--2").addClass("active")),9!=i&&12!=i||(console.log("circle3"),$("._island_intro__seasonSection").removeClass("active"),$("._island_intro__seasonSection--3").addClass("active")),i%2==1?($("._island_intro__row--x").addClass("active"),$("._island_intro__row--y").removeClass("active")):($("._island_intro__row--y").addClass("active"),$("._island_intro__row--x").removeClass("active"))}),$("._island_intro__btn").click(function(){$(".wrapper").removeClass("animsition"),console.log("animIndex: "+p);var a={container:document.getElementById("bodymovin"),renderer:"svg",loop:!0,autoplay:!0,path:"img/json/"+o[p]};bodymovin.loadAnimation(a).addEventListener("DOMLoaded",function(){var a=document.querySelector("#bodymovin"),n=document.querySelector("#bodymovin svg"),s=$("#anim-container").innerWidth(),i=$("#bodymovin svg").innerWidth(),o=0,p=0;function e(){console.log("mouse move"),(o+=(s-i-o)*(.02*p))<0?o=0:i-s<o&&(o=i-s),n.style.transform="translate3d("+-Math.round(o)+"px,0px , 0px)"}a.addEventListener("mousemove",function(a){p=(a.pageX-s/2)/(s-i)/2});var l=setInterval(e,10);function t(a,n,s,i){var o=document.createElementNS("http://www.w3.org/2000/svg","image");return o.setAttributeNS(null,"height",a),o.setAttributeNS(null,"x",n),o.setAttributeNS(null,"y",s),o.setAttributeNS("http://www.w3.org/1999/xlink","href","img/island-hover/"+d+"/"+i+".svg"),o}switch(d){case 1:$("#cabbage").append(t(82,-1.7,-1.8,"cabbage")),$("#botsai").append(t(92,-1.6,-1.6,"botsai")),$("#broccoli").append(t(60,-1.2,-1.2,"broccoli")),$("#uto").append(t(204,-1.4,-1.7,"uto")),$("#tonghau").append(t(61,-1.8,-1.5,"tonghau")),$("#baitsai").append(t(100,-1.5,-1,"baitsai")),$("#pea").append(t(96,14.5,-1.4,"pea")),$("#orange").append(t(123,-1.8,-1.5,"orange")),$("#strawberry").append(t(79,-1.7,-1.5,"strawberry")),$("#ponkan").append(t(102,-1.6,-1.8,"ponkan"));break;case 2:$("#cabbage").append(t(205,-4,-3.8,"cabbage")),$("#botsai").append(t(85,-1.6,-1.6,"botsai")),$("#broccoli").append(t(277,-5.2,-3.8,"broccoli")),$("#tonghau").append(t(54,-1.8,-1.5,"tonghau")),$("#baitsai").append(t(80,-2.2,-2,"baitsai")),$("#pea").append(t(113,-2,-2,"pea")),$("#strawberry").append(t(79,-1.2,-1.3,"strawberry")),$("#ponkan").append(t(124,-2.2,-2,"ponkan")),$("#nuipan").append(t(305,13.3,-2.2,"nuipan"));break;case 3:$("#cabbage").append(t(63,-2,-1.8,"cabbage")),$("#botsai").append(t(74,-1.7,-1.5,"botsai")),$("#broccoli").append(t(68.7,-2,-1.5,"broccoli")),$("#tonghau").append(t(90,-.8,-1,"tonghau")),$("#baitsai").append(t(80,-1.5,-1.5,"baitsai")),$("#pea").append(t(78,19.2,-1.8,"pea")),$("#strawberry").append(t(66,-2,-1.8,"strawberry")),$("#nuipan").append(t(73,4.5,-1.5,"nuipan")),$("#pumpkin").append(t(78,-2,-1.8,"pumpkin")),$("#lusion").append(t(70,2.8,-1.8,"lusion")),$("#melon").append(t(77.7,-2.8,-2,"melon"));break;case 4:$("#tonghau").append(t(77,-1.2,-1.2,"tonghau")),$("#baitsai").append(t(88,-1.6,-1.5,"baitsai")),$("#pea").append(t(114,-2.2,5.5,"pea")),$("#nuipan").append(t(115,23,-1.8,"nuipan")),$("#pumpkin").append(t(73.5,-1.8,-1.8,"pumpkin")),$("#lusion").append(t(73,.5,-1.8,"lusion")),$("#melon").append(t(96,-1.8,-1.6,"melon")),$("#kongshintsai").append(t(79,-1.2,-1.8,"kongshintsai")),$("#longshutsai").append(t(80,-2.4,-2.4,"longshutsai")),$("#kukua").append(t(119,-1.2,-1.8,"kukua")),$("#watermelon").append(t(84,-2.8,-2,"watermelon")),$("#tauzi").append(t(104,-2,-1.5,"tauzi"));break;case 5:$("#pumpkin").append(t(64.5,-2.4,-1.2,"pumpkin")),$("#lusion").append(t(62,3.7,-1.8,"lusion")),$("#melon").append(t(60,-2,-1.8,"melon")),$("#kongshintsai").append(t(83,-1.2,-1.8,"kongshintsai")),$("#longshutsai").append(t(71,-1.6,-1.6,"longshutsai")),$("#kukua").append(t(117,-1.3,-1.5,"kukua")),$("#watermelon").append(t(86.2,-2.2,-2,"watermelon")),$("#tauzi").append(t(137,-1.6,-1.6,"tauzi")),$("#pear").append(t(104,-1.2,-1,"pear")),$("#liangwu").append(t(110,-2,-1.8,"liangwu")),$("#lizi").append(t(118,-1.8,-2,"lizi"));break;case 6:$("#pumpkin").append(t(115,-1.5,-1.6,"pumpkin")),$("#lusion").append(t(66,2.8,-1.8,"lusion")),$("#melon").append(t(89.5,-1.8,-1.6,"melon")),$("#kongshintsai").append(t(65,-1.4,-1.8,"kongshintsai")),$("#longshutsai").append(t(70,-2.5,-2.2,"longshutsai")),$("#kukua").append(t(128,-1.4,-1.4,"kukua")),$("#watermelon").append(t(98.2,-2,-1.6,"watermelon")),$("#tauzi").append(t(139,-2,-1.8,"tauzi")),$("#pear").append(t(104,-1.2,-1.2,"pear")),$("#liangwu").append(t(104,-1.4,-1.5,"liangwu")),$("#lizi").append(t(110,-1.4,-1.8,"lizi")),$("#grape").append(t(160,-1.3,-1.8,"grape"));break;case 7:$("#pumpkin").append(t(74,-1.5,-1.6,"pumpkin")),$("#melon").append(t(81.5,-2,-1.6,"melon")),$("#kongshintsai").append(t(48,-1.6,-1.8,"kongshintsai")),$("#longshutsai").append(t(84,-1.6,-1.6,"longshutsai")),$("#kukua").append(t(101,-1.4,-1.5,"kukua")),$("#pear").append(t(117.8,-1.8,-1.6,"pear")),$("#liangwu").append(t(85,-1.4,-1.5,"liangwu")),$("#lizi").append(t(97,-1.5,-1.8,"lizi")),$("#grape").append(t(131,-1,-1.5,"grape")),$("#passionfruit").append(t(90,-1.3,-1.8,"passionfruit")),$("#tauzi").append(t(102,-1.2,-1.4,"tauzi"));break;case 8:$("#broccoli").append(t(82.7,-1.6,-1.5,"broccoli")),$("#uto").append(t(221,-1.4,-1.4,"uto")),$("#pumpkin").append(t(100,-1.5,-1.6,"pumpkin")),$("#melon").append(t(66,-2,-1.6,"melon")),$("#kongshintsai").append(t(65,-1.4,-1.8,"kongshintsai")),$("#kukua").append(t(99,-1.8,-1.8,"kukua")),$("#tauzi").append(t(120,-1.8,-2.2,"tauzi")),$("#pear").append(t(120,-1.2,-1.2,"pear")),$("#lizi").append(t(102,-1.7,-2,"lizi")),$("#grape").append(t(90,-1.3,-1.6,"grape")),$("#passionfruit").append(t(98,-1.3,-1.8,"passionfruit")),$("#liango").append(t(380,-5,-3.5,"liango"));break;case 9:$("#broccoli").append(t(68,-2,-1.5,"broccoli")),$("#uto").append(t(140,-1.6,-1.4,"uto")),$("#ponkan").append(t(106,-1.6,-1.8,"ponkan")),$("#pumpkin").append(t(87,-1.8,-1.6,"pumpkin")),$("#melon").append(t(70.5,-2,-1.2,"melon")),$("#kongshintsai").append(t(54,-1.4,-1.6,"kongshintsai")),$("#kukua").append(t(115,-1.4,-1.6,"kukua")),$("#pear").append(t(102,-1,-1.4,"pear")),$("#passionfruit").append(t(97,-1.6,-1.6,"passionfruit")),$("#liango").append(t(118,17.9,-1.6,"liango")),$("#papaya").append(t(213,-1.1,-1.4,"papaya"));break;case 10:$("#broccoli").append(t(115,-1.6,-2,"broccoli")),$("#uto").append(t(167,-1.6,-1.7,"uto")),$("#tonghau").append(t(137,-1.6,-1.3,"tonghau")),$("#ponkan").append(t(105,-2,-1.8,"ponkan")),$("#pumpkin").append(t(81,-1.3,-1.4,"pumpkin")),$("#melon").append(t(84.5,-2.2,-2,"melon")),$("#grape").append(t(121,-5.6,-2,"grape")),$("#liango").append(t(105,-1.3,-1.8,"liango")),$("#papaya").append(t(205,-1.7,-1.9,"papaya")),$("#shizi").append(t(91,-1.5,-1.5,"shizi")),$("#whitelobo").append(t(97,4.3,-1.8,"whitelobo"));break;case 11:$("#cabbage").append(t(66,-1.7,-1.8,"cabbage")),$("#botsai").append(t(76,-1.8,-1.6,"botsai")),$("#broccoli").append(t(45,-1.4,-1.4,"broccoli")),$("#uto").append(t(161,-1.4,-1.3,"uto")),$("#tonghau").append(t(56,-1.8,-1.5,"tonghau")),$("#baitsai").append(t(89,-1.5,-1.5,"baitsai")),$("#pea").append(t(81,12.4,-1.2,"pea")),$("#orange").append(t(102,-1.2,-1,"orange")),$("#ponkan").append(t(111,-1.8,-1.8,"ponkan")),$("#melon").append(t(69,-1.6,-1.6,"melon")),$("#grape").append(t(127,-1.3,-1.4,"grape")),$("#shizi").append(t(113,-1.8,-1.8,"shizi")),$("#whitelobo").append(t(131,-1.8,-1.5,"whitelobo"))}$("#cabbage").click(function(){$("._island_crop__shadow,._island_crop").css("display","block"),setTimeout(function(){$("#js_cabbage,._island_crop").addClass("active"),$("html").addClass("popup"),clearInterval(l)},500)}),$("#broccoli").click(function(){$("._island_crop__shadow,._island_crop").css("display","block"),setTimeout(function(){$("#js_broccoli,._island_crop").addClass("active"),$("html").addClass("popup"),clearInterval(l)},500)}),$("#botsai").click(function(){$("._island_crop__shadow,._island_crop").css("display","block"),setTimeout(function(){$("#js_botsai,._island_crop").addClass("active"),$("html").addClass("popup"),clearInterval(l)},500)}),$("#uto").click(function(){$("._island_crop__shadow,._island_crop").css("display","block"),setTimeout(function(){$("#js_uto,._island_crop").addClass("active"),$("html").addClass("popup"),clearInterval(l)},500)}),$("#tonghau").click(function(){$("._island_crop__shadow,._island_crop").css("display","block"),setTimeout(function(){$("#js_tonghau,._island_crop").addClass("active"),$("html").addClass("popup"),clearInterval(l)},500)}),$("#baitsai").click(function(){$("._island_crop__shadow,._island_crop").css("display","block"),setTimeout(function(){$("#js_baitsai,._island_crop").addClass("active"),$("html").addClass("popup"),clearInterval(l)},500)}),$("#pea").click(function(){$("._island_crop__shadow,._island_crop").css("display","block"),setTimeout(function(){$("#js_pea,._island_crop").addClass("active"),$("html").addClass("popup"),clearInterval(l)},500)}),$("#orange").click(function(){$("._island_crop__shadow,._island_crop").css("display","block"),setTimeout(function(){$("#js_orange,._island_crop").addClass("active"),$("html").addClass("popup"),clearInterval(l)},500)}),$("#strawberry").click(function(){$("._island_crop__shadow,._island_crop").css("display","block"),setTimeout(function(){$("#js_strawberry,._island_crop").addClass("active"),$("html").addClass("popup"),clearInterval(l)},500)}),$("#ponkan").click(function(){$("._island_crop__shadow,._island_crop").css("display","block"),setTimeout(function(){$("#js_ponkan,._island_crop").addClass("active"),$("html").addClass("popup"),clearInterval(l)},500)}),$("#nuipan").click(function(){$("._island_crop__shadow,._island_crop").css("display","block"),setTimeout(function(){$("#js_nuipan,._island_crop").addClass("active"),$("html").addClass("popup"),clearInterval(l)},500)}),$("#pumpkin").click(function(){$("._island_crop__shadow,._island_crop").css("display","block"),setTimeout(function(){$("#js_pumpkin,._island_crop").addClass("active"),$("html").addClass("popup"),clearInterval(l)},500)}),$("#lusion").click(function(){$("._island_crop__shadow,._island_crop").css("display","block"),setTimeout(function(){$("#js_lusion,._island_crop").addClass("active"),$("html").addClass("popup"),clearInterval(l)},500)}),$("#melon").click(function(){$("._island_crop__shadow,._island_crop").css("display","block"),setTimeout(function(){$("#js_melon,._island_crop").addClass("active"),$("html").addClass("popup"),clearInterval(l)},500)}),$("#kongshintsai").click(function(){$("._island_crop__shadow,._island_crop").css("display","block"),setTimeout(function(){$("#js_kongshintsai,._island_crop").addClass("active"),$("html").addClass("popup"),clearInterval(l)},500)}),$("#longshutsai").click(function(){$("._island_crop__shadow,._island_crop").css("display","block"),setTimeout(function(){$("#js_longshutsai,._island_crop").addClass("active"),$("html").addClass("popup"),clearInterval(l)},500)}),$("#kukua").click(function(){$("._island_crop__shadow,._island_crop").css("display","block"),setTimeout(function(){$("#js_kukua,._island_crop").addClass("active"),$("html").addClass("popup"),clearInterval(l)},500)}),$("#watermelon").click(function(){$("._island_crop__shadow,._island_crop").css("display","block"),setTimeout(function(){$("#js_watermelon,._island_crop").addClass("active"),$("html").addClass("popup"),clearInterval(l)},500)}),$("#tauzi").click(function(){$("._island_crop__shadow,._island_crop").css("display","block"),setTimeout(function(){$("#js_tauzi,._island_crop").addClass("active"),$("html").addClass("popup"),clearInterval(l)},500)}),$("#pear").click(function(){$("._island_crop__shadow,._island_crop").css("display","block"),setTimeout(function(){$("#js_pear,._island_crop").addClass("active"),$("html").addClass("popup"),clearInterval(l)},500)}),$("#liangwu").click(function(){$("._island_crop__shadow,._island_crop").css("display","block"),setTimeout(function(){$("#js_liangwu,._island_crop").addClass("active"),$("html").addClass("popup"),clearInterval(l)},500)}),$("#lizi").click(function(){$("._island_crop__shadow,._island_crop").css("display","block"),setTimeout(function(){$("#js_lizi,._island_crop").addClass("active"),$("html").addClass("popup"),clearInterval(l)},500)}),$("#grape").click(function(){$("._island_crop__shadow,._island_crop").css("display","block"),setTimeout(function(){$("#js_grape,._island_crop").addClass("active"),$("html").addClass("popup"),clearInterval(l)},500)}),$("#passionfruit").click(function(){$("._island_crop__shadow,._island_crop").css("display","block"),setTimeout(function(){$("#js_passionfruit,._island_crop").addClass("active"),$("html").addClass("popup"),clearInterval(l)},500)}),$("#liango").click(function(){$("._island_crop__shadow,._island_crop").css("display","block"),setTimeout(function(){$("#js_liango,._island_crop").addClass("active"),$("html").addClass("popup"),clearInterval(l)},500)}),$("#papaya").click(function(){$("._island_crop__shadow,._island_crop").css("display","block"),setTimeout(function(){$("#js_papaya,._island_crop").addClass("active"),$("html").addClass("popup"),clearInterval(l)},500)}),$("#shizi").click(function(){$("._island_crop__shadow,._island_crop").css("display","block"),setTimeout(function(){$("#js_shizi,._island_crop").addClass("active"),$("html").addClass("popup"),clearInterval(l)},500)}),$("#whitelobo").click(function(){$("._island_crop__shadow,._island_crop").css("display","block"),setTimeout(function(){$("#js_whitelobo,._island_crop").addClass("active"),$("html").addClass("popup"),clearInterval(l)},500)}),$(".js-crop_close").click(function(){l=setInterval(e,10),$("html").removeClass("popup"),$(this).parent("._island_crop").removeClass("active"),setTimeout(function(){$("._island_crop__window").removeClass("active")},1e3)}),$(".js-detail_back").click(function(){clearInterval(l)})}),setTimeout(function(){$("html").addClass("start_anim")},800),setTimeout(function(){$("._island_intro").css("display","none")},1600)}),$(".js-detail_back").click(function(){$("._island_intro").css("display","block"),$("._island_crop__shadow,._island_crop").css("display","none"),setTimeout(function(){$("html").removeClass("start_anim")},800),setTimeout(function(){bodymovin.destroy(),$(".wrapper").addClass("animsition")},2e3)})});