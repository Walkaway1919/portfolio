import cn from 'classnames';
import './Header.scss';
import { Link, animateScroll as scroll } from "react-scroll";

export const Header = ({ className }) => {
    return <header className={cn(className, "header")}>
          <nav role="navigation">
            <ul className='links'>
            <Link
                activeClass="active"
                to="my_works"
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}

            >Мои работы</Link>
            <Link
                activeClass="active"
                to="about_me"
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}

            >Обо мне</Link>
            {/* <li><a href="#my_works">Мои работы</a></li> */}
            {/* <li><a href="#about_me">Обо мне</a></li> */}
            </ul>
          </nav>
    </header>
}