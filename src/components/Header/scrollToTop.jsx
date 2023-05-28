import React, { useState, useEffect } from 'react'

function ScrollTop() {
    const [showScrollBtn, setShowScrollBtn] = useState(false);

    useEffect(() => {
        window.onscroll = () => {handleScroll()};

        const handleScroll = () => {
            setShowScrollBtn(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200)
        }
    }, [])
    
    // click and back to top
    const topFunction = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <button onClick={topFunction} className={showScrollBtn ? 'showSTTBtn' : 'opacity-0 invisible'}>
            <i className="fa-solid fa-angle-up"></i>
        </button>
    )
}

export default ScrollTop