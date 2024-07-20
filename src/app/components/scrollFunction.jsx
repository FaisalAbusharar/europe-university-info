import React from 'react';
import '../styles/animations.css'

const ScrollTo = ({
    yOffset = 0,
    elementId = '',
    scrollBehavior = 'smooth',
    children,
}) => {
    // Define the scroll function
    const scrollFunction = (event) => {
        event.preventDefault();
        const element = document.getElementById(elementId);
        if (element) {
            element.classList.add('pulse-animation')

            window.setTimeout(() => {
                element.classList.remove('pulse-animation')
            }, 500)

            element.scrollIntoView({ behavior: scrollBehavior });

            // Adjust position if scrolled too far
            window.setTimeout(() => {
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: scrollBehavior });
            }, 150); // Delay to ensure initial scroll has completed
        }
    };

    // Return the children with the scrollFunction attached to their onClick event
    return React.cloneElement(children, { onClick: scrollFunction });
};

export default ScrollTo;
