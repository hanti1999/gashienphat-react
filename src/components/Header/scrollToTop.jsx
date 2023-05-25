function ScrollTop() {
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        let myBtn = document.getElementById("scrollToTopBtn");
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            myBtn.className = "showSTTBtn";
        } else {
            myBtn.className = "opacity-0 invisible";
        }
    }

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <button onClick={topFunction} id="scrollToTopBtn" className='opacity-0 invisible'>
            <i className="fa-solid fa-angle-up"></i>
        </button>
    )
}

export default ScrollTop