window.onload = () => {
    window.addEventListener('scroll', () => {
        $('#header-scroll').toggleClass('sticky', window.scrollY > 0);
    });
}
$(document).ready(function () {
    $('#check').on('click', function () {
        $('#modal-menu-container').css('transform', 'translateX(0%)');
        $('#overlayer').css('display', 'block');
    })

    $('#modal-close').on('click', function () {
        $('#modal-menu-container').css('transform', 'translateX(110%)');
        $('#overlayer').css('display', 'none');
    });

    $('#overlayer').on('click', function () {
        $('#modal-menu-container').css('transform', 'translateX(110%)');
        $('#overlayer').css('display', 'none');
    });

    $('.site-nav-wrap a').on('click', function (e) {
        if (this.hash !== '') {
            e.preventDefault();

            const hash = this.hash;
            const links = document.querySelectorAll('.site-nav-wrap a');

            links.forEach(e => {
                e.classList.remove('active');
            });

            $(this).addClass('active')

            $('html, body').animate(
                {
                    scrollTop: $(hash).offset().top
                },
                800
            );
        }
    });
});
