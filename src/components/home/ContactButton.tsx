import { Link } from 'gatsby'
import React, { useState, useEffect, useRef } from 'react'
import { routes } from '../constants/routes'
import './Button.css'

const ContactButton = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const buttonRef = useRef(null);

    useEffect(() => {
        const checkScroll = () => {
            setIsScrolled(window.scrollY >= 20);
        };

        window.addEventListener('scroll', checkScroll);

        return () => {
            window.removeEventListener('scroll', checkScroll);
        };
    }, []);

    return (
        <div className={`py-5 hero-button-float ${isScrolled ? 'scrolled' : ''}`}>
            <div className='button-wrapper'>
                <Link
                    ref={buttonRef}
                    to={`${routes.projects.path}/#details`}
                    title={"caption"}
                    className="btn block w-[180px] bg-red-600 text-white h-[50px] py-4 px-8 text-sm lg:text-[14px] font-semibold text-center leading-5 uppercase rounded-3xl border-0 mt-8 lg:mt-[32px] outer"
                >
                    <span>Let's Talk</span>
                </Link>
            </div>
        </div>
    )
}

export default ContactButton