import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
      <LeftSection>
          <SectionTitle main center>
              Hola <br />
              Soy Juan Ibarra
          </SectionTitle>
          <SectionText>
              Licenciado en sistemas de UADE, COO en Activity Consultoría. <br/>
              Ademas me especializo en técnicas de productividad personal y gestión de tiempo.
          </SectionText>
          <Button onClick= { () => window.location = '#about' }>Más sobre mí</Button>
      </LeftSection>
  </Section>
);

export default Hero;