import FIxedNavBar from './components/NavBar';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import OurAchievements from './components/OurAchievements';
import ConnectWithUs from './components/ConnectWithUs';
import OurPlace from './components/OurPlace';
const App = () => {
  return (
    <>
      <FIxedNavBar />
      <Header />
      <Container>
        <OurAchievements />
        <OurPlace />
      </Container>
      <ConnectWithUs />
    </>
  );
};
export default App;