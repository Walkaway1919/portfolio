import cn from 'classnames';
import { Header } from './components/Header/Header';
import { Layout, Main } from './components/Layout/Layout';
import { Footer } from './components/Footer/Footer';
import { Works } from './components/Works/Works';
import { About } from './components/About/About';
import './App.scss';

function App() {
  return (
    <Layout>
        <Header className="layout__header" />
        <Main className={"layout__main"}>
          <Works />
          {/* <Intro />
          <Skills />
          <AboutMe /> */}
          <About className={"layout__about"}/>
        </Main>
        <Footer className="layout__footer"/>
    </Layout>
  );
}

export default App;
