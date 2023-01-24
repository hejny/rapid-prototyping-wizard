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
import { czechEventsEffect } from '../../../utils/Drawing/projectsEffectsLibrary';
import background from '../czechevents-screenshot.png';

/**
 * !!!
 *
 * @see !!!
 * @generated by generate-projects-library
 */
export function CzechEventsProject() {
    return (
        <a href="https://czech.events/" target="_blank" rel="noreferrer">
            <Item>
                <Item.Title>Czech.events</Item.Title>
                <Item.Description>
                    <p>Most interesting events in Czechia in Tech comunity</p>
                </Item.Description>
                <Item.Image>
                    <div
                        ref={effectToRef(czechEventsEffect)}
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
