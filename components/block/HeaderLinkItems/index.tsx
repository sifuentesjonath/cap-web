import { FC, useEffect, useState } from 'react'
import items from './items.json';
// Components
import LinkItem from '@components/block/LinkItem';
interface IHeaderLinkItemsProps {
  exclude?: string[];
  isMobile?: boolean;
  onClick?: () => void;
  itemsClassName?: string;
}
const HeaderLinkItems: FC<IHeaderLinkItemsProps> = ({ exclude = [], isMobile, onClick, itemsClassName }) => {
  const [itemKeys, setItemKeys] = useState<string[]>(Object.keys(items));

  const LinkItemStyle = `site-navlink ${isMobile ? 'text-white' : 'text-black'} font-normal text-md transition-colors duration-300`;

  useEffect(() => {
    if (!exclude || exclude.length === 0) return;

    const newItemKeys = itemKeys.filter(itemKey => !exclude.includes(itemKey));
    setItemKeys(newItemKeys);
  }, []);

  return (
    <>
      {itemKeys && itemKeys.length != 0 &&
        itemKeys.map((itemKey) => {
          return (
            <LinkItem
              onClick={onClick}
              key={`link_to_${itemKey}`}
              href={items[itemKey].href}
              className={itemsClassName ? itemsClassName : LinkItemStyle}
            >
              {itemKey}
            </LinkItem>
          )
        })
      }
    </>
  )
}

export default HeaderLinkItems
