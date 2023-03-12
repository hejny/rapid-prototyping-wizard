import { createContext, ReactNode, useContext } from 'react';
import seedrandom from 'seedrandom';

/**
 * This will be a seed prefix for the random number generator used in the shuffling
 */
export const ShuffleSeedContext = createContext<string | number>('');

interface ShuffleProps {
    /**
     * This will be a seed suffix for the random number generator used in the shuffling
     */
    seed?: string | number;

    /**
     * Disable shuffling and display items in order as they are.
     */
    disable?: boolean;

    /**
     * Take only this number of items
     */
    limit?: number;

    /**
     * Items to shuffle
     */
    children: ReactNode;
}

export function Shuffle(props: ShuffleProps) {
    const { seed, disable, limit, children } = props;

    const shuffleSeedContext = useContext(ShuffleSeedContext);
    const random = seedrandom(shuffleSeedContext.toString() + (seed?.toString() || ''));

    if (!Array.isArray(children) || disable) {
        return children as any;
    }

    let shuffledChildren = [...children].sort(() => (random() > 0.5 ? 1 : -1));

    if (limit && limit !== Infinity) {
        shuffledChildren = shuffledChildren.slice(0, limit);
    }

    return (
        <>
            {/* !!! shuffleSeedContext.toString() */}
            {shuffledChildren}
        </>
    );
}

/**
 * TODO: Maybe some smarter syntax:
 *       Instead of:
 *       > <Items>
 *       >     <Shuffle>
 *       >         <FunctionsProject />
 *       >         <LibrariesProject />
 *       >         <MapsProject />
 *       >         <ModulesProject />
 *       >         <VrArProject />
 *       >     </Shuffle>
 *       >     <AllProjectsProject />
 *       > </Items>
 *       Do:
 *       > <Items>
 *       >     <Shuffle keep="LAST">
 *       >         <FunctionsProject />
 *       >         <LibrariesProject />
 *       >         <MapsProject />
 *       >         <ModulesProject />
 *       >         <VrArProject />
 *       >         <AllProjectsProject />
 *       >     </Shuffle>
 *       > </Items>
 *       Or with the hook:
 *       > <Items ref={shuffleRef('KEEP_LAST')}>
 *       >     <FunctionsProject />
 *       >     <LibrariesProject />
 *       >     <MapsProject />
 *       >     <ModulesProject />
 *       >     <VrArProject />
 *       >     <AllProjectsProject />
 *       > </Items>
 */
