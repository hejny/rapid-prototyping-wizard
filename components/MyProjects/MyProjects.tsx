import { Item } from '../Items/Item';
import { Items } from '../Items/Items';
import { Section } from '../Section/Section';
import styles from './MyProjects.module.css';
import { ProjectPlaceholder, ProjectTowns } from './projects-images';

export function MyProjects() {
    return (
        <Section id="myProjects" className={styles.myProjects}>
            <h2>What have I worked on?</h2>
            <p>
                Lorem <b>ipsum dolor sit amet consectetur adipisicing elit</b>. Maxime mollitia, molestiae quas vel sint
                commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit
                fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
                officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid.
                Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis
                modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet
                laborum.
            </p>
            <Items>
                <Item title="Birds.cz" description="Afdasdf fdsf sfsdf werwert dsgsdg">
                    <ProjectPlaceholder />
                </Item>
                <Item title="Towns.cz" description="Afdasdf fdsf sfsdf werwert dsgsdg">
                    <ProjectTowns />
                </Item>
                <Item title="Collboard.com" description="Afdasdf fdsf sfsdf werwert dsgsdg">
                    <ProjectPlaceholder />
                </Item>
            </Items>
        </Section>
    );
}
