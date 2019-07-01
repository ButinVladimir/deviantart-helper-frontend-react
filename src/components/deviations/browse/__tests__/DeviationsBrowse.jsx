import React from 'react';
import { shallow } from 'enzyme';
import DeviationsBrowse from '../DeviationsBrowse';

describe('DeviationsBrowse', () => {
  it('can be rendered correctly when page is not loading', () => {
    const wrapper = shallow(
      <DeviationsBrowse
        pageLoading={false}
        clearDataHandler={() => {}}
        preloadDeviationsHandler={() => {}}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('can be rendered correctly when page is loading', () => {
    const wrapper = shallow(
      <DeviationsBrowse
        pageLoading
        clearDataHandler={() => {}}
        preloadDeviationsHandler={() => {}}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('handles clearing data', () => {
    const clearDataHandler = jest.fn();
    shallow(
      <DeviationsBrowse
        pageLoading
        clearDataHandler={clearDataHandler}
        preloadDeviationsHandler={() => {}}
      />,
    );

    expect(clearDataHandler).toHaveBeenCalled();
  });

  it('handles preloading deviations', () => {
    const preloadDeviationsHandler = jest.fn();
    shallow(
      <DeviationsBrowse
        pageLoading
        clearDataHandler={() => {}}
        preloadDeviationsHandler={preloadDeviationsHandler}
      />,
    );

    expect(preloadDeviationsHandler).toHaveBeenCalled();
  });
});
