import image from '../../../assets/img/photo.jpg'
import './Special.scss';
import cn from 'classnames';
export const Special = ({className}) => {
    return <div className={cn("special", className)}>
        <a name="about_me"></a>
        <img src={image} className='special__img'/>
        <p className="special__text">Я серьезно увлекаюсь историей, литературой и гаджетами. В свободное от работы время я читаю книги и решаю задачи на LitCode и CodeWars. Я коммуникабельна и открыта, люблю работать в команде.</p>
    </div>
}