(function WebSuperheroHandler(){
    var self = this;

    // Event handler
    $(function() {
        $(window).scroll(onScroll);
        $(document).on('click', '.nav-button', toggleMenu);
     });

     function onScroll(event) {
        var scroll = $(window).scrollTop();

        if(scroll > 400){
            $('.second-article').addClass('animate-fade-in-left');
        }

        if(scroll > 1000){
            $('.third-article').addClass('animate-fade-in-left');
        }

        if(scroll > 1400){
            $('.fourth-article').addClass('animate-fade-in-left');
        }

        $('.picture-holder').css('top', scroll/2 + 30 + 'px');
    }

    function toggleMenu(event){
        $('.nav-ul').slideToggle();
    }

})();