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
import { effectToRef } from '../../../utils/Drawing/effectToRef';
import { mapsEffect } from '../../../utils/Drawing/projectsEffectsLibrary';
import background from './outline.svg';

/**
 * !!!
 *
 * @see !!!
 * @generated by generate-projects-library
 */
export function MapsProject() {
    return (
        <a href="https://github.com/collboard/map" target="_blank" rel="noreferrer">
            <Item>
                <Item.Title>Maps</Item.Title>
                <Item.Description>
                    <p>
                        Modul for Collboard to learn the geography. It was the developed in kooperation with capital
                        city of Prague
                    </p>
                </Item.Description>
                <Item.Image>
                    <div
                        ref={effectToRef(mapsEffect)}
                        style={{
                            backgroundImage: `url(${background.src})`,
                        }}
                    />
                    {/* <Image alt="@@@" src={background} draggable="false" /> */}
                </Item.Image>
            </Item>
        </a>
    );
}
