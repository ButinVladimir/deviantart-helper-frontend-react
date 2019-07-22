import React from 'react';
import { shallow } from 'enzyme';
import DeviationsDetailsChartTab from '../DeviationsDetailsChartTab';

describe('DeviationsDetailsChartTab', () => {
  it('can be rendered correctly when timestamps are null', () => {
    const wrapper = shallow(
      <DeviationsDetailsChartTab
        id="1234-567"
        title="Title"
        timestampBegin={null}
        timestampEnd={null}
        metadata={null}
        metadataLoading={false}
        timestampBeginChangeHandler={() => {}}
        timestampEndChangeHandler={() => {}}
        submitHandler={() => {}}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('can be rendered correctly when timestamps are not null', () => {
    const wrapper = shallow(
      <DeviationsDetailsChartTab
        id="1234-567"
        title="Title"
        timestampBegin={2}
        timestampEnd={3}
        metadata={null}
        metadataLoading={false}
        timestampBeginChangeHandler={() => {}}
        timestampEndChangeHandler={() => {}}
        submitHandler={() => {}}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('can handle changing timestamp begin', () => {
    const timestampBeginChangeHandler = jest.fn();
    const wrapper = shallow(
      <DeviationsDetailsChartTab
        id="1234-567"
        title="Title"
        timestampBegin={2}
        timestampEnd={3}
        metadata={null}
        metadataLoading={false}
        timestampBeginChangeHandler={timestampBeginChangeHandler}
        timestampEndChangeHandler={() => {}}
        submitHandler={() => {}}
      />,
    );

    wrapper.find('#timestamp-begin').simulate('change');

    expect(timestampBeginChangeHandler).toHaveBeenCalled();
  });

  it('can handle changing timestamp end', () => {
    const timestampEndChangeHandler = jest.fn();
    const wrapper = shallow(
      <DeviationsDetailsChartTab
        id="1234-567"
        title="Title"
        timestampBegin={2}
        timestampEnd={3}
        metadata={null}
        metadataLoading={false}
        timestampBeginChangeHandler={() => {}}
        timestampEndChangeHandler={timestampEndChangeHandler}
        submitHandler={() => {}}
      />,
    );

    wrapper.find('#timestamp-end').simulate('change');

    expect(timestampEndChangeHandler).toHaveBeenCalled();
  });

  it('can handle submitting', () => {
    const submitHandler = jest.fn();
    const wrapper = shallow(
      <DeviationsDetailsChartTab
        id="1234-567"
        title="Title"
        timestampBegin={2}
        timestampEnd={3}
        metadata={null}
        metadataLoading={false}
        timestampBeginChangeHandler={() => {}}
        timestampEndChangeHandler={() => {}}
        submitHandler={submitHandler}
      />,
    );

    wrapper.find('#submit-button').simulate('click');

    expect(submitHandler).toHaveBeenCalled();
  });
});
