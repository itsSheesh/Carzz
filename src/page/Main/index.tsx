// ========== components ========== \\
import Landing from '../../components/Landing';
import Main from '../../layout/main';
const HomePage:React.FC = ():JSX.Element => {
  return (
    <Main>
      <Landing />
    </Main>
  );
}

export default HomePage;