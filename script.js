const menuBtn = $('.center');

menuBtn.on('click',function(){
    menuBtn.find('div').toggleClass('animate-line');
    menuBtn.find('div').removeClass('no-animate');
})

