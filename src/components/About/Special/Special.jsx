import image from '../../../assets/img/photo.jpg'
import './Special.scss';
import cn from 'classnames';
export const Special = ({className}) => {
    return <div className={cn("special", className)}>
        <img src={image} className='special__img'/>
        <p className="special__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati necessitatibus est officia nihil illum reprehenderit sit in odit, sint unde similique. Tenetur voluptatum dolorem praesentium eligendi earum quas nulla nostrum.</p>
    </div>
}