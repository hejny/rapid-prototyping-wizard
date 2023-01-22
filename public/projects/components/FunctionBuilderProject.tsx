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
import background from '../collboard-function-builder-3.png';

/**
 * !!!
 *
 * @see !!!
 * @generated by generate-projects-library
 */
export function FunctionBuilderProject() {
    return (
        <a href="https://github.com/collboard/function-builder" target="_blank" rel="noreferrer">
            <Item>
                <Item.Title>Function builder</Item.Title>
                <Item.Description>
                    <p>@@@</p>
                </Item.Description>
                <Item.Image>
                    <div
                        style={{
                            backgroundImage: `url(${background.src})`,
                            backgroundSize: 'cover',
                            backgroundPosition: '50% 30%',
                            backgroundRepeat: 'no-repeat',
                            width: '100%',
                            height: '100%',
                        }}
                    />
                    {/* <Image alt="@@@" src={background} draggable="false" /> */}
                </Item.Image>
            </Item>
        </a>
    );
}
