import cn from 'classnames';
import './Footer.scss';
import { Link } from './Links/Links';
import iconLinkedin from './Links/Icons/linkedIn_white.svg';
import iconTelegram from './Links/Icons/telegram_white.svg'
import iconGit from './Links/Icons/git.svg'

export const Footer = ({className}) => {
    return <footer className={cn("footer", className)}>
        <p className="footer__message">Связаться со мной</p>
        <div className="footer__links">
            <Link className='in' href="https://www.linkedin.com/in/walkaway1919" alt='linkedin' img={iconLinkedin}/>
            <Link className='tg' href="https://t.me/nightman_cometh" alt='telegram' img={iconTelegram}/>
            <Link className='git' href="https://github.com/Walkaway1919" alt='git' img={iconGit}/>
        </div>
    </footer>
}