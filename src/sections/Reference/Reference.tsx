import { Item } from '../../components/Items/Item';
import { Items } from '../../components/Items/Items';
import { Section } from '../../components/Section/Section';
import { Shuffle } from '../../components/Shuffle/Shuffle';
import { ProjectPlaceholder } from '../MyProjects/projects-images';
import styles from './Reference.module.css';

export function ReferenceSection() {
    return (
        <Section id="reference" className={styles.reference}>
            <h2>Reference</h2>

            <Items>
                <Shuffle seed="reference">
                    <Item>
                        <Item.Title>Birds</Item.Title>
                        <Item.Description>
                            Lorem <b>ipsum dolor sit amet consectetur adipisicing elit</b>. Maxime mollitia
                        </Item.Description>
                        <Item.Image>
                            <ProjectPlaceholder />
                        </Item.Image>
                    </Item>
                    <Item>
                        <Item.Title>Birds.cz</Item.Title>
                        <Item.Description>
                            Lorem <b>ipsum dolor sit amet consectetur adipisicing elit</b>. Maxime mollitia
                        </Item.Description>
                        <Item.Image>
                            <ProjectPlaceholder />
                        </Item.Image>
                    </Item>
                </Shuffle>
            </Items>
        </Section>
    );
}

/**
 * TODO: Round people
 * TODO: Ask for reference
 * TODO: Add links to multiple socials
 */
