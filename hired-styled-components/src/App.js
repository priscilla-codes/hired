import { MainWrapper } from './styles/MainWrapper.styled';
import { GlobalStyles } from './styles/Global';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <GlobalStyles />
      <MainWrapper>
        <Navbar></Navbar>
        <MainContent></MainContent>
      </MainWrapper>
      <Footer />
    </>
  );
}

export default App;
