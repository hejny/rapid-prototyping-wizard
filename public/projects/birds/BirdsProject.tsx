/**
 * 🏭 GENERATED WITH 🖼️ Generate projects library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import { Item } from '../../../src/components/Items/Item';
import { Translate } from '../../../src/components/Translate/Translate';
// import { effectToRef } from '../../../src/utils/Drawing/effectToRef';
// import { birdsEffect } from '../../../src/utils/Drawing/projectsEffectsLibrary';
import outline from './outline.svg';

/**
 * Presentation of project Birds
 *
 * @see /public/projects/birds/birds.en.md
 * @see /public/projects/birds/birds.cs.md
 * @generated by generate-projects-library
 */
export function BirdsProject() {
    return (
        <a href="#" target="_blank" rel="noreferrer">
            <Item>
                <Item.Title>
                    <Translate locale="en">Birds</Translate>
                    <Translate locale="cs">ČSO</Translate>
                </Item.Title>
                <Item.Description>
                    <Translate locale="en">
                        <p>A series of citizen science projects for the Czech Society for Ornithology.</p>
                    </Translate>
                    <Translate locale="cs">
                        <p>
                            Mnoho projektů pro Českou společnost ornitologickou, např. mobilní aplikace, mezinárodní
                            sčítání ptáků na krmítkách,…
                        </p>
                    </Translate>
                </Item.Description>
                <Item.Image>
                    <div
                        // ref={effectToRef(birdsEffect)}
                        style={{
                            backgroundImage: `url(${outline.src})`,
                        }}
                    />
                    {/* <Image alt="Bird outline" src={background} draggable="false" placeholder="blur" /> */}
                </Item.Image>
            </Item>
        </a>
    );
}
