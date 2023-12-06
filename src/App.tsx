// ========== components ========== \\
import Main from './layout/main'
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './components/Landing';
const App:React.FC = ():JSX.Element => {
  return (
    <Main>
      <Header />
      <Landing />
      <Footer />
    </Main>
  );
}

export default App;