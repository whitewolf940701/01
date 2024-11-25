// JavaScript Document

$(document).ready(function(){        

    $(".menu").click(function(){

        $("nav").slideToggle();            

    });



    $(window).on('load resize',function(){

        var a_w = document.body.clientWidth;

        if(a_w >= 768) $("nav").show(); else $("nav").hide();                

    });

    // group
    $(".fancybox").fancybox({

        openEffect    : 'fade', //'elastic', 'fade' or 'none'
        closeEffect   : 'fade'

    });

   
    //single
    $("#s2").fancybox({

        openEffect  : 'fade', //彈出
        closeEffect : 'fade',

        helpers : {
            title : {
                type : 'inside' // 'float', 'inside', 'outside' or 'over'
            }
        }

    });



});