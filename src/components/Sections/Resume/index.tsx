import {FC, memo} from 'react';

import {SectionId} from '../../../data/data';
import Section from '../../Layout/Section';

const Resume: FC = memo(() => {
  return <Section className="bg-neutral-100 h-[600px]" sectionId={SectionId.Resume}></Section>;
});

Resume.displayName = 'Resume';
export default Resume;
