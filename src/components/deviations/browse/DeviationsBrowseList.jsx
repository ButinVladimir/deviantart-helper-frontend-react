import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Level from 'react-bulma-components/lib/components/level';
import Loader from 'react-bulma-components/lib/components/loader';
import DeviationsPreview from '../shared/DeviationsPreview';

export default class DeviationsBrowseList extends Component {
  componentDidMount() {
    const { preloadDeviationsHandler } = this.props;
    preloadDeviationsHandler();
  }

  render() {
    const {
      deviations,
      pageLoading,
      selectedIds,
      toggleSelectionHandler,
    } = this.props;
    const mappedDeviations = deviations.map(d => (
      <DeviationsPreview
        key={d.id}
        selected={selectedIds.includes(d.id)}
        toggleSelectionHandler={toggleSelectionHandler}
        {...d}
      />
    ));

    return (
      <Section>
        <Container>
          {pageLoading && (
            <Level>
              <Level.Item>
                <Loader className="custom-loader" />
              </Level.Item>
            </Level>
          )}

          {!pageLoading && (
            <ul>
              {mappedDeviations}
            </ul>
          )}
        </Container>
      </Section>
    );
  }
}

DeviationsBrowseList.propTypes = {
  deviations: PropTypes.arrayOf(PropTypes.any).isRequired,
  pageLoading: PropTypes.bool.isRequired,
  selectedIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  preloadDeviationsHandler: PropTypes.func.isRequired,
  toggleSelectionHandler: PropTypes.func.isRequired,
};
