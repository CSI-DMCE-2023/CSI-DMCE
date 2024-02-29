import React from 'react'

const SrollToTop = () => {
    const [isVisible, setIsVisible] = React.useState(false)

    const toggleVisibility = () => {
        if (window.pageYOffset > 200) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    onscroll = () => {
        toggleVisibility()
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <button id='scroll-to-top' className={isVisible ? "flex" : "hidden"} onClick={scrollToTop}>
            <i className="fa-solid fa-caret-up"></i>
        </button>
    )
}

export default SrollToTop