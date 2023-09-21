import statementImage from '@/public/images/documents_icon_statement.png';
import taxImage from '@/public/images/documents_icon_tax.png';
import agreementImage from '@/public/images/documents_icon_agreement.png';
import authorizeImage from '@/public/images/documents_icon_authorization.png';
import otherImage from '@/public/images/documents_icon_other.png';
import { FiltersType } from './documentFilteringHandling';

export const Icons = {
    statementImage,
    taxImage,
    agreementImage,
    authorizeImage,
    otherImage
}

type ButtonType = {
    image: StaticImageData;
    buttonTitle: FiltersType
}
/** Button titles are used for triggering filtering, see `getFilteringCriterium()`*/
export const buttons:ButtonType[] = [
    {   image:statementImage,
        buttonTitle: 'Statements'
    },
    {
        image:taxImage,
        buttonTitle: 'Taxes'
    },
    {
        image:agreementImage,
        buttonTitle: 'Agreements'
    },
    {
        image: otherImage,
        buttonTitle: 'Other'
    }
]

export const getIcon = (name:string):StaticImageData => {
    const { statementImage, taxImage, agreementImage, otherImage  } = Icons;
    const icon = {
        'statements': statementImage,
        'agreements': agreementImage, // This one is missing, same image as above for now.
        'managementagreement': agreementImage, // This one is missing, same image as above for now.
        'taxes': taxImage,
        'other': otherImage
    }
    return icon[name.toLowerCase()];
}