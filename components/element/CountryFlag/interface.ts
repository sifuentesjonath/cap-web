interface EmojiProps extends React.HTMLAttributes<HTMLSpanElement> {
	cdnSuffix?: string;
	cdnUrl?: string;
	countryCode: string;
	style?: React.CSSProperties;
	svg?: false;
}

interface ImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
	cdnSuffix?: string;
	cdnUrl?: string;
	countryCode: string;
	style?: React.CSSProperties;
	svg?: true;
}

export type ReactCountryFlagProps = EmojiProps | ImgProps;
