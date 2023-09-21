import { FC } from 'react';
// Custom hooks
import useAnimationOnce from '@/hooks/useAnimationOnce';
// Style
import { MapContainer } from './style';
import MapChip from './MapChip';

// const mapDesktop = './images/map-demo.png';
const mapPhone = './images/map-demo-phone.png';

interface IMapHeroProps { }
const MapDemo: FC<IMapHeroProps> = (props) => {
  const [elementRef, canAnimate] = useAnimationOnce({
    root: null,
    rootMargin: '0px',
    threshold: .7
  });

  return (
    <MapContainer>
      <div className='map-image-container'>
        <img
          //@ts-ignore
          ref={elementRef} className='map-image' src={mapPhone} alt="Condoo Map" />

        <MapChip
          imageUrl={'./images/map-demo-chip-2-condo.png'}
          chipClassName={`two-condo-chip`}
          alt={'2 Condos'}
          isVisible={canAnimate}
        />

        <MapChip
          imageUrl={'./images/map-demo-chip-1-condo.png'}
          chipClassName={`one-condo-chip`}
          alt={'2 Condos'}
          isVisible={canAnimate}
        />

        <MapChip
          imageUrl={'./images/map-demo-chip-5-condo.png'}
          chipClassName={`five-condo-chip`}
          alt={'5 Condos'}
          isVisible={canAnimate}
        />

      </div>
    </MapContainer>
  );
};

export default MapDemo;
