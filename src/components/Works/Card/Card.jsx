import './Card.scss';

export const Card = ({ classNane, big = false }) => {
    return <div className={cn("card", className, {["card--big"]: big})}>
            <picture className="card__image">
                <img src=''></img>
            </picture>
                <p className="card__name">название</p>
                <p className="description">описание</p>
                <a href="#"></a>
            </div>
}