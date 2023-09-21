import React, { FC } from 'react'
// Component
import PropertyPopup from './PropertyPopup';
// Icons
import Image from 'next/image';
import { DownloadIcon } from '@heroicons/react/outline';
// Styles
import {
  LabelContainer,
  ImageContainer,
  DateText,
  FileTypeText,
  FileNameText,
} from './style'
// Helpers
import parsePropertyName, { parseDetailedAddressPropertyName } from '@utils/property/parsePropertyName';
import cutStringByLimit from '@utils/cutStringByLimit';
// Type
import { PropertyType } from '@/service/apiTypes';

interface IDocumentFileLabel {
  fileKey: any;
  fileType: string;
  date: string;
  fileTypeImage: StaticImageData;
  fileName: string;
  property?: PropertyType;
  isMobile?: boolean;
  handleDownload: (key: any) => Promise<void>;
}

const DocumentFileLabel: FC<IDocumentFileLabel> = props => {
  const {
    fileKey,
    fileType,
    date,
    fileTypeImage,
    property,
    fileName,
    isMobile = false, // This component should not care about isMobile (?
    handleDownload,
  } = props;
  const isLabel = property && fileName !== 'Management Agreement';
  return (
    <LabelContainer key={fileKey} >
      <div className="pl-8 uppercase">
        <FileTypeText>{fileType}</FileTypeText>
      </div>

      <div>
        <DateText>{date}</DateText>
      </div>

      <ImageContainer className="flex">
        <Image
          src={fileTypeImage}
          alt="Bullet 1"
          objectFit="contain"
          className="btn-back"
          width={isMobile ? 25 : 40}
          height={isMobile ? 25 : 40}
        />
      </ImageContainer>

      <div className="filename-container">
        <FileNameText>{fileName}</FileNameText>
      </div>

      <div className="flex items-center gap-6 pr-8">
        {
          isLabel &&
          <PropertyPopup
            placeHolder={parseDetailedAddressPropertyName(property)}
            hoverText={cutStringByLimit(parseDetailedAddressPropertyName(property), 24)}
          />
        }
        <a href="#" style={{ cursor: "pointer" }}>
          <DownloadIcon
            className="h-6 w-6 "
            onClick={() => handleDownload(fileKey)}
          />
        </a>
      </div>
    </LabelContainer>
  )
}

export default DocumentFileLabel;
