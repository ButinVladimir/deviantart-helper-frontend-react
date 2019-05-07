import React from 'react';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Level from 'react-bulma-components/lib/components/level';
import Loader from 'react-bulma-components/lib/components/loader';

export default function CustomLoader() {
  return (
    <Section>
      <Container>
        <Level>
          <Level.Item>
            <Loader className="custom-loader" />
          </Level.Item>
        </Level>
      </Container>
    </Section>
  );
}
