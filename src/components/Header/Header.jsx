import cn from 'classnames';
import './Header.scss';

export const Header = ({ className }) => {
    return <header className={cn(className, "header")}>
          <nav role="navigation">
            <ul className='links'>
                <li><a href="#">Мои работы</a></li>
                <li><a href="#head2">Обо мне</a></li>
            </ul>
          </nav>
    </header>
}