import './Card.scss';
import cn from 'classnames'
export const Card = ({ className, big = false, description, name, link, img }) => {
    return <div className={cn("card", className, {["card--big"]: big})}>
            <picture className="card__image">
                <img src={img}></img>
            </picture>
                <p className="card__name">{name}</p>
                <p className="card__description">{description}</p>
                <a href={link}>ссылка</a>
            </div>
}