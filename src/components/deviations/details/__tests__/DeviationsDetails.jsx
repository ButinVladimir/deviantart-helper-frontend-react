import React from 'react';
import { shallow } from 'enzyme';
import DeviationsDetails from '../DeviationsDetails';
import * as tabs from '../../../../consts/tabs';

describe('DeviationsDetails', () => {
  it('can be rendered correctly when details are loading', () => {
    const wrapper = shallow(
      <DeviationsDetails
        title="Details"
        tab={tabs.PREVIEW}
        detailsLoading
        clearDataHandler={() => {}}
        changeTabHandler={() => {}}
        loadDeviationDetailsHandler={() => {}}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  describe('when details are not loading', () => {
    const props = {
      title: 'Details',
      detailsLoading: false,
      clearDataHandler: () => {},
      changeTabHandler: () => {},
      loadDeviationDetailsHandler: () => {},
    };

    it('can be rendered when selected tab is description', () => {
      const wrapper = shallow(
        <DeviationsDetails
          {...props}
          tab={tabs.DESCRIPTION}
        />,
      );

      expect(wrapper).toMatchSnapshot();
    });

    it('can be rendered when selected tab is preview', () => {
      const wrapper = shallow(
        <DeviationsDetails
          {...props}
          tab={tabs.PREVIEW}
        />,
      );

      expect(wrapper).toMatchSnapshot();
    });

    it('can be rendered when selected tab is chart', () => {
      const wrapper = shallow(
        <DeviationsDetails
          {...props}
          tab={tabs.CHART}
        />,
      );

      expect(wrapper).toMatchSnapshot();
    });
  });

  it('can handle clearing data and loading details', () => {
    const clearDataHandler = jest.fn();
    const loadDeviationDetailsHandler = jest.fn();
    shallow(
      <DeviationsDetails
        title="Details"
        tab={tabs.PREVIEW}
        detailsLoading
        clearDataHandler={clearDataHandler}
        changeTabHandler={() => {}}
        loadDeviationDetailsHandler={loadDeviationDetailsHandler}
      />,
    );

    expect(clearDataHandler).toHaveBeenCalled();
    expect(loadDeviationDetailsHandler).toHaveBeenCalled();
  });
});
