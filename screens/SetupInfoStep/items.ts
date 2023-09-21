import bullet1Image from '@/public/images/one-green.png';
import bullet2Image from '@/public/images/two-green.png';
import bullet3Image from '@/public/images/three-green.png';

export interface ISetupInfoStepProps {
	onNext: () => void;
}

export interface IInfoItemProps {
	title: string;
	descriptionMd: string;
	// descriptionSm?: string;
	index: number;
}
export const images = {
	1: bullet1Image,
	2: bullet2Image,
	3: bullet3Image,
};