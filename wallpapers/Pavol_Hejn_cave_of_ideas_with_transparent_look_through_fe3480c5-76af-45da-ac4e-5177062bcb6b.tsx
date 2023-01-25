import { Float } from '../../components/Float/Float';
import cave_of_ideas_with_transparent_look_through from './Pavol_Hejn_cave_of_ideas_with_transparent_look_through_fe3480c5-76af-45da-ac4e-5177062bcb6b.png';

/**
 * Image of cave of ideas with transparent look through
 *
 * @see https://www.midjourney.com/app/jobs/fe3480c5-76af-45da-ac4e-5177062bcb6b
 * @not-generated by generate-wallpapers-library
 */
export function CaveOfIdeasWithTransparentLookThroughImageXfe3480c5() {
    return (
        <div
            style={{
                // Image:
                backgroundImage: `url(${cave_of_ideas_with_transparent_look_through.src})` /* <- TODO: url(...) vs url('...') */,
                backgroundSize: 'cover',
                backgroundPosition: '50% 80%',
                backgroundColor: '#ccc' /* <- TODO: Create from image / project color */,

                // Description:
                display: 'flex',
                justifyContent: 'end',
                alignItems: 'end',
                paddingBottom: 20,
                paddingRight: 5,
            }}
        >
            <Float>
                <a
                    href="https://www.midjourney.com/app/jobs/fe3480c5-76af-45da-ac4e-5177062bcb6b"
                    style={{ zIndex: 10, fontSize: 10, textDecoration: 'none', color: '#ccc', textShadow: 'none' }}
                >
                    {/*

                    TODO: Text
                    
                    > Created by AI

                    Should be referenced at the bottom of the page

                    */}
                </a>
            </Float>
        </div>
    );
}