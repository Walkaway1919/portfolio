import './Card.scss';
import cn from 'classnames'
export const Card = ({ className, big = false, description, name, link, img}) => {
    return <div className={cn("card", className, {["card--big"]: big})}>
            <picture className="card__image">
                <a target="_blank" href={link}><img src={img} alt=""/></a>
            </picture>
                <a target="_blank" href={link}><p className="card__name">{name}</p></a>
                
                <p className="card__description">{description}</p>
            </div>
}