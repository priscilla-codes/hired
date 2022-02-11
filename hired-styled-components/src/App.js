import { MainWrapper } from './styles/MainWrapper.styled';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <MainWrapper>
        <Navbar></Navbar>
        <MainContent></MainContent>
      </MainWrapper>
      <Footer></Footer>
    </>
  );
}

export default App;
