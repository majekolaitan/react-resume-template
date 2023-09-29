import {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Hero: FC = memo(() => {
  return <Section noPadding sectionId={SectionId.Hero} className="h-[800px] bg-red-300"></Section>;
});

Hero.displayName = 'Hero';
export default Hero;
