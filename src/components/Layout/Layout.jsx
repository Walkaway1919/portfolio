import cn from 'classnames';
import './Layout.scss';

export const Layout = ({children}) => {
    return <div className="layout">{children}</div>
}

export const Main = ({ className, children }) => <main className={cn( className, "main" )}>{children}</main>