import { Card } from './Card/Card';
import './Works.scss';
import cardGame from '../../assets/img/cardgame.png'
import weatherApp from '../../assets/img/weather.jpg'
import todoList from '../../assets/img/todolist.png'
import blog from '../../assets/img/banking-app.png'
import cn from 'classnames'

export const Works = ({className}) => {
    return <div className={cn(className, "works")}>
                <a name="my_works"></a>
                <p className="works__message">Это примеры моих работ</p>
                <div className='works__cards'>
                    <Card className="works__card" name='Weather forecast' description='Прогноз погоды на React с использование API OpenWeatherMap API' img={weatherApp} link='https://walkaway1919.github.io/weather_report/'/>
                    <Card className="works__card" name='Memory game' description='Игра на запоминание с переворотом карточек. Сделана на React.js' img={cardGame} link='https://walkaway1919.github.io/card-game/'/>
                    <Card className="works__card" name='Todo list' description='Планировщик заданий с фильтрацией и кастомной системой drug-ang-drop на ванильном JS' link='https://walkaway1919.github.io/todolist/' img={todoList}/>
                    <Card className={cn("works__card", ["works__card--big"])} big={true} name='Blog' description='Банковский блог на Next.js в процессе разработки' img={blog}/>
                    
                </div>
                
        </div>
}