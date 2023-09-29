import {FC, memo} from 'react';

import {SectionId} from '../../../data/data';

import Section from '../../Layout/Section';

const Contact: FC = memo(() => {
  return <Section className="bg-neutral-800 h-[1000px]" sectionId={SectionId.Contact}></Section>;
});

Contact.displayName = 'About';
export default Contact;
