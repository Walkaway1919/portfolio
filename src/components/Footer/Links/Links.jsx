import './Links.scss';
import cn from 'classnames'
export const Link = ({ className, href, img, alt }) => {
    return <a className={cn("link", className)} href={href}>
            <img src={img} alt={alt}></img>
        </a>
}