import { useState } from 'react';
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { cart } from '../assets/icons';
import { close } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <header className="padding-x py-8 absolute z-20 w-full">
        <nav className="flex justify-between items-center max-container">
            <a href="/">
                <img 
                src={headerLogo}
                alt="Logo"
                width={130}
                height={29}
                />
            </a>
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                {navLinks.map(item => (
                    <li key={item.label}>
                        <a
                        href={item.href}
                        className="font-montserrat leading-normal text-lg text-slate-gray"
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="mr-4 max-lg:hidden">
                <img
                src={cart}
                alt="cart"
                width={35}
                height={35}
                className="cursor-pointer"
                />
            </div>

            <div 
            onClick={handleClick}
            className="hidden max-lg:block max-lg:z-30">
                {!isOpen ? 
                <img
                src={hamburger}
                alt="Hamburger"
                width={25}
                height={25}
                /> :
                <img
                src={close}
                alt="close"
                width={25}
                height={25}
                />
                }
            </div>

            <ul
            className={!isOpen ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center gap-16"}
            >
                {navLinks.map(item => (
                    <li key={item.label}>
                        <a
                        onClick={handleClick}
                        href={item.href}
                        className="font-montserrat leading-normal text-xl text-slate-gray"
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
                <div onClick={handleClick}>
                    <img
                    src={cart}
                    alt="cart"
                    width={35}
                    height={35}
                    className="cursor-pointer"
                    />
                </div>
            </ul>
        </nav>
    </header>
  );
}

export default Nav;