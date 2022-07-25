$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll>0){
        $("#header").addClass("shadow-lg");
    }
    else{
        $("#header").removeClass("shadow-lg");
    }
});