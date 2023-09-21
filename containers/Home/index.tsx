// import HomeHero from './HomeHero';
import HomeHero from './HomeHero';
import AddRental from './AddRental';
import MapDemo from './Map-Demo';
import ConnectTeam from './ConnectTeam';
import Watch from './Watch';
import Features from './Features';
import Buildings from './Buildings';
import Security from './Security';

import { HomeContainer } from './style';

const Home = () => {
  return (
    <HomeContainer>
      <HomeHero />
      <AddRental />
      <MapDemo />
      <ConnectTeam />
      <Watch />
      <Features />
      <Buildings />
      {/* <Security /> */}
    </HomeContainer>
  );
}

export default Home;