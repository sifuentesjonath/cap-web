import bullet1Image from '@/public/images/one-green.png';
import bullet2Image from '@/public/images/two-green.png';
import bullet3Image from '@/public/images/three-green.png';

export interface ISetupInfoStepProps {
	onPrev: () => void;
}

export interface IInfoItemProps {
	descriptionMd: string;
	descriptionSm: string;
	index: number; 
}

export const images = {
	1: bullet1Image,
	2: bullet2Image,
	3: bullet3Image,
};

export const items = [
	{
		id: 1,
		descriptionMd:
		'Our team will reach out to you shortly to answer any questions you may have. ',
		descriptionSm: 
		'Our team will reach out to you shortly to answer any questions you may have. ',
	},
	{
		id: 2,
		descriptionMd:
		'Go ahead and explore your account. Download the mobile app so you can Condoo on the go!',
		descriptionSm: 
		'Go ahead and explore your account. Download the mobile app so you can Condoo on the go!',
	}
];