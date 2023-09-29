import {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  return <Section className="bg-neutral-800 h-[800px]" sectionId={SectionId.Portfolio}></Section>;
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;
