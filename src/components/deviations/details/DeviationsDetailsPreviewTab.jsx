import React from 'react';
import PropTypes from 'prop-types';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Level from 'react-bulma-components/lib/components/level';

/* eslint-disable react/no-danger */

export default function DeviationsDetailsPreviewTab({
  preview,
  title,
}) {
  return (
    <Section>
      <Container>
        <Level>
          <Level.Item>
            <img alt={title} src={preview.src} />
          </Level.Item>
        </Level>
      </Container>
    </Section>
  );
}

DeviationsDetailsPreviewTab.propTypes = {
  preview: PropTypes.shape({
    src: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
};

/* eslint-enable no-danger */
