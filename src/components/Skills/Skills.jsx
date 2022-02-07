import './Skills.scss';
import cn from 'classnames';
import { Logo } from './Logo/Logo';
import iconHTML from './Logo/image/html.svg';
import iconCSS from './Logo/image/css.svg';
import iconJS from './Logo/image/js.svg';
import iconReact from './Logo/image/react.svg';
import iconGit from './Logo/image/git.svg';
import iconSass from './Logo/image/sass.svg';
export const Skills = ({className}) => {
    return <div className={cn(className, "skills")}> 
       <p className='skills__message'>Мои ключевые навыки:</p>
       <div className='skills__image-block'>
           <Logo img={iconHTML} alt='html5'/>
           <Logo img={iconCSS} alt='css3'/>
           <Logo img={iconJS} alt='js'/>
           <Logo img={iconReact} alt='react'/>
           <Logo img={iconGit} alt='git'/>
           <Logo img={iconSass} alt='sass'/>
       </div>
    </div>
}