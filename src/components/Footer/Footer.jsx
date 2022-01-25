import cn from 'classnames';
import './Footer.scss';
import { Link } from './Links/Links';
import iconLinkedin from './Links/Icons/linkedIn_white.svg';
import iconTelegram from './Links/Icons/telegram_white.svg'

export const Footer = ({className}) => {
    return <footer className={cn("footer", className)}>
        <p className="footer__message">Связаться со мной</p>
        <div className="footer__links">
            <Link className='in' href="https://www.linkedin.com/in/%D1%8E%D0%BB%D0%B8%D1%8F-%D0%B0%D1%81%D1%82%D0%B0%D1%85%D0%BE%D0%B2%D0%B0-7b44681a9/" alt='linkedin' img={iconLinkedin}/>
            <Link className='tg' href="https://t.me/nightman_cometh" alt='telegram' img={iconTelegram}/>
        </div>
    </footer>
}