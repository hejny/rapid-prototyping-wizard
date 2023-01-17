/**
 * 🏭 GENERATED WITH 🖼️ Generate hackings library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import Image from 'next/image';
import { Item } from '../../../components/Items/Item';
import background /* <- TODO: Put filename into this import name .replace(/.[a-z0-9]+$/, '') */ from '../../../public/projects/collboard-geography-2.jpeg';

/**
 * !!!
 *
 * @see !!!
 * @generated by generate-hackings-library
 */
export function MapsForGeographyHacking() {
    return (
        <Item>
            <Item.Title>Maps for Geography</Item.Title>
            <Item.Description>
                {/* TODO: !!! Text should be selectable even inside of <a> */}
                <p>https://github.com/collboard/map</p>
                <p>
                    <img src="/public/projects/collboard-geography-2.jpeg" alt="" />
                </p>
            </Item.Description>
            <Item.Image>
                <Image alt="" src={background} draggable="false" />
            </Item.Image>
        </Item>
    );
}
