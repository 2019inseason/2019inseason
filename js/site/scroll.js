
var productTab={};
var networkTab={};

function initScrollMagic()
{
    var _controller = new ScrollMagic.Controller();
    
    //背景視差滾動
    $('.scroll__trigger').each(function(index){

        TweenMax.set($(this).find('.scorll__bgn'),{y:$(this).data('percent')+'%'});
            var bgnSlide = new ScrollMagic.Scene({
                triggerElement:this,
                triggerHook:$(this).data('hook'),
                duration:'100%'
            })
            .setTween(TweenMax.to($(this).find('.scorll__bgn'),.1,{y:0+'%',ease:Power0.easeNone}))
            // .addIndicators({name: "bgn-"+index})
            .addTo(_controller);
    });

    //Product tab bar在scroll時會pinned
    productTab = new ScrollMagic.Scene({
        triggerElement:"#productBar",
        triggerHook:0,
        duration:getProductHeight()
    })
    .setClassToggle("#productTab", "pin")
    .setPin("#productTab")
    // .addIndicators({name: "pin-product"})
    .addTo(_controller);

    productTab.on("update", function (event) {
        productChange();
    });

    productTab__rwd = new ScrollMagic.Scene({
        triggerElement:"#productBar",
        triggerHook:0,
        duration:getProductHeight__rwd()
    })
    .setClassToggle("#productTab--rwd", "pin")
    .setPin("#productTab--rwd")
    // .addIndicators({name: "pin-product"})
    .addTo(_controller);

    productTab__rwd.on("update", function (event) {
        productChange__rwd();
    });

    //Network tab bar在scroll時會pinned
    networkTab = new ScrollMagic.Scene({
        triggerElement:"._network__tab-container",
        //offset:getProdutnYpos(),
        triggerHook:0,
        duration:setNetworkHeight()
    })
    .setClassToggle("#networkTab", "pin")
    .setPin("#networkTab")
    //.addIndicators({name: "pin-network"})
    .addTo(_controller);

    networkTab.on("update", function (event) {
        //console.log("Scene updated.");
        networkChange();

    });

    //Nav 選項隨著scroll到的區塊改變顏色
    $('.sectionSpy').each(function(index){
        var _this=$(this);
        var sectionSpy= new ScrollMagic.Scene({
            triggerElement:this,
            triggerHook:0.5,
            duration:$(this).innerHeight()
        })
        .setClassToggle('.nav-'+$(this).attr('id'), "active")
        // .addIndicators({name: "section-"+index})
        .addTo(_controller);
        if(index==3){
            sectionSpy.offset(60);
        }
        sectionSpy.on("update", function (event) {
            //console.log(_this.innerHeight());
            this.duration(_this.innerHeight());
            //setSectionH(sectionSpy,);
        });
    })
    //Product Bar選項隨著scroll到的區塊改變顏色
    $('.sectionSpy-product').each(function(index){
        var _this=$(this);
        var sectionSpy= new ScrollMagic.Scene({
            triggerElement:this,
            triggerHook:0.3,
            duration:$(this).innerHeight()
        })
        .setClassToggle('.nav-'+$(this).attr('id'), "active")
        // .addIndicators({name: "section-"+index})
        .addTo(_controller);

        sectionSpy.on("update", function (event) {
            this.duration(_this.innerHeight());
        });
    })

    
}

// function getSectionH($target)
// {
//     console.log($target);
//     return $target.innerHeight();
// }

// function setSectionH(obj,$target)
// {
//     //if(obj.duration)obj.duration(getSectionH($target));
// }

function getProductHeight()
{
    var productH;
    var tapY=0;
    if($(window).width()>=768)tapY=$('._product__title').position().top+$('._product__title').innerHeight(); 
    else tapY=0;
    productH=$('._product__right').outerHeight()-$('#productTab').outerHeight()-tapY+(getProdutnYpos());
    if(productH<0)productH=1;
    return productH;
}
function getProductHeight__rwd()
{
    var productH;
    var tapY=0;
    // if($(window).width()>=768)tapY=$('._product__title').position().top+$('._product__title').innerHeight(); 
    // else tapY=0;
    productH=$('._product__right').outerHeight()-$('#productTab--rwd').outerHeight()-tapY+(getProdutnYpos());
    // productH=$('._product__right').outerHeight()-$('#productTab--rwd').outerHeight()-tapY;
    if(productH<0)productH=1;
    return productH;
}
function getProdutnYpos()
{
    var ypos;
    if($(window).width()>=768)ypos=-$('#nav').innerHeight()*1.8;
    else ypos=20;
    return ypos;
}
function productChange()
{
    //console.log(getProductHeight());
    if(productTab.duration)productTab.duration(getProductHeight());
    if(productTab.offset)productTab.offset(getProdutnYpos());
    //if(productTab.offset)productTab.offset();
}
function productChange__rwd()
{
    //console.log(getProductHeight());
    if(productTab__rwd.duration)productTab__rwd.duration(getProductHeight__rwd());
    if(productTab__rwd.offset)productTab__rwd.offset(5);
    //if(productTab.offset)productTab.offset();
}


function setNetworkHeight(){
    var networkH;
    // var tapY=0;
    // if($(window).width()>768)tapY=$('#productBar').position().top; 
    // else tapY=0;
    networkH=$('._network__content').innerHeight()-$('._network__tab-container').position().top-$('._network__tab-container').outerHeight();
    if(networkH<0)networkH=1;
    return networkH;
}
function networkChange()
{
    //console.log(getProductHeight());
    if(networkTab.duration)networkTab.duration(setNetworkHeight());
    //if(networkTab.offset)productTab.offset(getProdutnYpos());
    //if(productTab.offset)productTab.offset();
}

