/**
 * 🏭 GENERATED WITH 🖼️ Generate projects library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import Image from 'next/image';
import { Item } from '../../../components/Items/Item';
import background from '../all-projects.png';

/**
 * !!!
 *
 * @see !!!
 * @generated by generate-projects-library
 */
export function AllMyProjectsProject() {
    return (
        <Item>
            <Item.Title>All my projects</Item.Title>
            <Item.Description>
                <p>https://pavolhejny.com/documents/projects.html</p>
            </Item.Description>
            <Item.Image>
                <div
                    style={{
                        backgroundImage: `url(${background.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: '50% 30%',
                        backgroundRepeat: 'no-repeat',
                        aspectRatio: '3/2',
                    }}
                />
                {/* <Image alt="" src={background} draggable="false" /> */}
            </Item.Image>
        </Item>
    );
}
