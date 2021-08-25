// Change theme mode
 $(document).ready(function(){
     $('#header-nav-item--theme').click(function(){
         
        if($('#header-nav-item--theme').hasClass('light-theme')){
            $('#header-nav-item--theme').removeClass('light-theme').addClass('dark-theme')
            $('#header-nav-item--theme-icon').removeClass('fa-moon').addClass('fa-sun')
            $('#header-nav-item--theme-name').text('Chế độ sáng');
        }
        else{
            $('#header-nav-item--theme').removeClass('dark-theme').addClass('light-theme')
          
            $('#header-nav-item--theme-icon').removeClass('fa-sun').addClass('fa-moon')
            $('#header-nav-item--theme-name').text('Chế độ tối')
        }
        document.body.classList.toggle('dark-theme')
     })
     $('.container-blur').click(function(){
         console.log('Chọn')
     })



     var temp=$('.pro-top__review__list li img')
     document.getElementById('pro-top__review__large-img').style.backgroundImage ="url('"+temp[0].src+"')"


     var liWidth= parseInt($('.pro-top__review__item')[0].offsetWidth)
    $('.pro-top__review__item').height(liWidth);
    function reportWindowSize(){
        var liWidth= parseInt($('.pro-top__review__item')[0].offsetWidth)
    $('.pro-top__review__item').height(liWidth);
    }
    window.onresize = reportWindowSize;
});
// Hide search bar
document.getElementById('icon-hide-search').onclick=function(){
    document.getElementById('header-bottom').style.display = "none"   
}
// Show navigate tablet, mobile mode
document.getElementById('header-search-icon').onclick= function (){
    const style = window.getComputedStyle(document.getElementById('header-bottom'));
    if(style.display === 'none')
    {
        document.getElementById('header-bottom').style.display = "flex";
    }
    else{
        document.getElementById('search__input').focus();
    }
}

document.getElementById('header-nav__menu-icon').onclick= function(){
    var item=document.getElementById('header-nav-list');
    var container= document.getElementById('container');
     
    if(item.classList.toggle('header-nav-list-active'))  {
        $('.header-menu-icon').removeClass('fa-bars').addClass('fa-times')
    }else{
        $('.header-menu-icon').removeClass('fa-times').addClass('fa-bars')
    }
    container.classList.toggle('container-blur')
}

// Single-products
$('.pro-top__review__list li img').click(function() {
    $('.pro-top__review__item--active').removeClass('pro-top__review__item--active')
    $(this).parent().addClass('pro-top__review__item--active')
    var src=$(this).attr('src');
    document.getElementById('pro-top__review__large-img').style.backgroundImage ="url('"+src+"')"
});

$('#pro-bottom__viewtype-btn').click(function(){
    $('.pro-bottom__details--desc').toggleClass('pro-bottom__details--desc-see-less');
    if( $('.pro-bottom__details--desc').hasClass('pro-bottom__details--desc-see-less')){
        $('#pro-bottom__viewtype-btn').text('See less')
    }else{
        $('#pro-bottom__viewtype-btn').text('View more')
    }
    
})
$(document).ready(function(){
    console.log($('.pro-bottom__details--desc').height())
    if($('.pro-bottom__details--desc').height() <400)
    {
    $('#pro-bottom__viewtype-btn').hide()
    }

})

