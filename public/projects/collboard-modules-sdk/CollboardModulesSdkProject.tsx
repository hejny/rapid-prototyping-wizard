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
// import { collboardModulesSdkEffect } from '../../../src/utils/Drawing/projectsEffectsLibrary';
import placeholder from './placeholder.svg';

/**
 * Presentation of project Collboard modules SDK
 *
 * @see /public/projects/collboard-modules-sdk/collboard-modules-sdk.en.md
 * @see /public/projects/collboard-modules-sdk/collboard-modules-sdk.cs.md
 * @generated by generate-projects-library
 */
export function CollboardModulesSdkProject() {
    return (
        <a href="https://github.com/collboard/modules-sdk" target="_blank" rel="noreferrer">
            <Item>
                <Item.Title>
                    <Translate locale="en">Collboard modules SDK</Translate>
                    <Translate locale="cs">Collboard Moduly</Translate>
                </Item.Title>
                <Item.Description>
                    <Translate locale="en">
                        <p>SDK enables modular design, breaking down complex apps for scalability and efficiency.</p>
                    </Translate>
                    <Translate locale="cs">
                        <p>
                            SDK pro virtuální tabuli Collboard, které umožňuje rozdělit složité aplikace na modulární
                            celky.
                        </p>
                    </Translate>
                </Item.Description>
                <Item.Image>
                    <div
                        // ref={effectToRef(collboardModulesSdkEffect)}
                        style={{
                            backgroundImage: `url(${placeholder.src})`,
                        }}
                    />
                    {/* <Image alt="Pseudo-USB gadget" src={background} draggable="false" placeholder="blur" /> */}
                </Item.Image>
            </Item>
        </a>
    );
}
