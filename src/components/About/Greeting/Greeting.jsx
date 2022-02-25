import { Layout } from '../../Layout/Layout';
import './Greeting.scss';
export const Greeting = () => {
    return <div className="greeting">
        <div className="greeting__message">
            <h2>Привет! <span>👋</span></h2>
        </div>
        <div className="greeting__bio">
            <p>Меня зовут Юлия Астахова и я Frontend разработчик Junior+ уровня.</p>
            <p>Мой стек:</p>
            <ul className='greeting-list'>
                <li>JavaScript, TypeScript, CSS3, HTML5, Git</li>
                <li>React.js, Next.js, Webpack</li>
                <li>Flex, Grid, JSX, SCSS</li>
            </ul>
            <p>За посление полтора года я прошла более 10 курсов по frontend-разработке.</p>
            <p>Мне интересны высоконагруженные приложения в сфере FinTech и я бы хотела развиваться в этом направлении. Имею внушительный бекграунд в цифровом маркетинге (контекстная реклама): работала в распределенных командах, понимаю и разделяю принципы Agile/Scrum. В данный момент я ответственна за разработку всей фронтчасти финансового контентного ресурса.</p>
            <p>Со списком проектов, которые я уже разработала вы можете ознакомиться ниже.</p>
        </div>
    </div>
}