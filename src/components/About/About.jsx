import cn from 'classnames'
import './About.scss';
import { Greeting } from './Greeting/Greeting';
import { Special } from './Special/Special';


export const About = ({className}) => {
    return <div className={cn("about", className)}>
        <a name="about_me"></a>
        <Greeting />
        <Special className='about__special'/>
    </div>
}