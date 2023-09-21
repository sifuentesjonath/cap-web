// Style
import { BuildingCardContainer, Title } from './style';
// Images
import Image from 'next/image';
import theatre from '@/public/images/theatre-park.png';
import garrison from '@/public/images/garrison.png';
import theone from '@/public/images/theone.png';
import tenyork from '@/public/images/ten.png';
import icecondominius from '@/public/images/icecondominius.png';

const BuildingCard: React.FC<any> = ({ title, imageUrl }) => {
  const getBuildingImage = () => {
    switch (imageUrl) {
      case 'theatre': return theatre;
      case 'garrison': return garrison;
      case 'theone': return theone;
      case 'tenyork': return tenyork;
      case 'icecondominius': return icecondominius;
      default:
        throw 'no valid argument';
    }
  }

  return (
    <BuildingCardContainer>
      <div className='image-container'>
        <Image alt={`${title} building`} src={getBuildingImage()} layout='fixed' />
      </div>
      <div className='title-container'>
        <Title>{title}</Title>
      </div>
    </BuildingCardContainer>
  );
};

export default BuildingCard;
