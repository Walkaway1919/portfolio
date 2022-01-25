import { Card } from './Card/Card';
import './Works.scss';
import cardGame from '../../assets/img/cardgame.png'
import weatherApp from '../../assets/img/weather.jpg'
import todoList from '../../assets/img/todolist.png'

export const Works = () => {
    return <div className="works">
                <a name="my_works"></a>
                <p className="works__message">Это примеры моих работ</p>
                <div className='works__cards'>
                    <Card name='Memory game' description='Игра на запоминание с переворотом карточек. Сделана на React.js' img={cardGame}/>
                    <Card name='Weather forecast' description='Прогноз погоды на React с использование API OpenWeatherMap API' img={weatherApp} link='https://walkaway1919.github.io/weather_report/'/>
                    <Card name='Todo list' description='Планировщик заданий с фильтрацией и drug-ang-drop на чистом JS' link='https://walkaway1919.github.io/todolist/' img={todoList}/>
                </div>
        </div>
}