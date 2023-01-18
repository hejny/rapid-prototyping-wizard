/**
 * 🏭 GENERATED WITH 🖼️ Generate projects library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import { Item } from '../../../components/Items/Item';
import background from '../geography-in-collboard.png';

/**
 * !!!
 *
 * @see !!!
 * @generated by generate-projects-library
 */
export function MapsForGeographyProject() {
    return (
        <Item>
            <Item.Title>Maps for Geography</Item.Title>
            <Item.Description>
                <p>https://github.com/collboard/map</p>
            </Item.Description>
            <Item.Image>
                <div
                    style={{
                        backgroundImage: `url(${background.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: '50% 30%',
                        backgroundRepeat: 'no-repeat',
                        aspectRatio: '3/2',
                        filter: 'invert(1)',
                    }}
                />
                {/* <Image alt="" src={background} draggable="false" /> */}
            </Item.Image>
        </Item>
    );
}
