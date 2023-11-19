import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { routes } from '../../../data/global';

export default function MobileNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMenuMounted, setIsMenuMounted] = useState(false);

    function toggleMenu() {
        if (isMenuOpen) {
            setIsMenuOpen(false);
            document.body.style.overflow = '';
        } else {
            setIsMenuOpen(true);
            document.body.style.overflow = 'hidden';
        }
    }

    useEffect(() => {
        if (isMenuOpen) {
            setIsMenuMounted(true);
        } else {
            // Delay unmounting for a smoother exit transition
            const timeoutId = setTimeout(() => setIsMenuMounted(false), 700);
            return () => clearTimeout(timeoutId);
        }
    }, [isMenuOpen]);

    useEffect(() => {
        return function cleanup() {
            document.body.style.overflow = '';
        };
    }, []);

    return (
        <nav>
            <div
                className="w-full justify-between flex items-center p-5 bg-bg"
                style={{ zIndex: 101 }}
            >
                <li className="list-none font-bold text-lg">
                    <Link to="/" className="flex items-center">
                        <img
                            className="transform hover:rotate-360 hover:scale-75 transition-transform duration-500 rounded-full"
                            src="./img/icons/logo.svg"
                            width="50"
                        />
                        NegruIoan
                    </Link>
                </li>
                <button
                    className="burger visible md:hidden"
                    aria-label="Toggle menu"
                    type="button"
                    onClick={toggleMenu}
                >
                    <MenuIcon data-hide={isMenuOpen} />
                    <CrossIcon data-hide={!isMenuOpen} />
                </button>
            </div>
            {isMenuMounted && (
                <ul
                    className={`menu flex flex-col absolute bg-bg
            ${isMenuOpen && 'menuRendered'}`}
                >
                    {routes.map((item, index) => (
                        <li
                            key={index}
                            className="border-b border-gray-900 text-gray-100 text-sm font-semibold"
                            style={{
                                transitionDelay: `${150 + index * 25}ms`,
                            }}
                        >
                            <Link
                                to={item.path}
                                className="flex w-auto pb-4"
                                onClick={toggleMenu}
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}

function MenuIcon(props) {
    return (
        <svg
            className="h-5 w-5 absolute text-gray-100"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            {...props}
        >
            <path
                d="M2.5 7.5H17.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M2.5 12.5H17.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function CrossIcon(props) {
    return (
        <svg
            className="h-5 w-5 absolute text-gray-100"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            shapeRendering="geometricPrecision"
            {...props}
        >
            <path d="M18 6L6 18" />
            <path d="M6 6l12 12" />
        </svg>
    );
}
