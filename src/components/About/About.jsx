import cn from 'classnames'
import './About.scss';
import { Greeting } from './Greeting/Greeting';


export const About = ({className}) => {
    return <div className={cn("about", className)}>
        <Greeting />
    </div>
}