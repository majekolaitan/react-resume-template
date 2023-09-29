import {FC, memo} from 'react';
import {SectionId} from '../../data/data';

import Section from '../Layout/Section';

const Testimonials: FC = memo(() => {
  return <Section className="bg-red-70 h-[900px]" noPadding sectionId={SectionId.Testimonials}></Section>;
});

export default Testimonials;
