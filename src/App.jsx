import cn from 'classnames';
import { Header } from './components/Header/Header';
import { Layout, Main } from './components/Layout/Layout';
import { Footer } from './components/Footer/Footer';
import { Works } from './components/Works/Works';
import { About } from './components/About/About';
import { Special } from './components/About/Special/Special';
import './App.scss';
import { Skills } from './components/Skills/Skills';

function App() {
  return (
    <Layout>
        <Header className="layout__header" />
        <Main className={"layout__main"}>
          {/* <Intro />
          <Skills />
        <AboutMe /> */}
          <About className={"layout__about"}/>
        <Works />
          <Skills className={"layout__skills"}/>
        </Main>
        <Special className='layout__special'/>
        <Footer className="layout__footer"/>
    </Layout>
  );
}

export default App;
