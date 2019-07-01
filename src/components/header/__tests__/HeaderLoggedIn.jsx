import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import HeaderLoggedIn from '../HeaderLoggedIn';

describe('HeaderLoggedIn', () => {
  it('can be rendered correctly', () => {
    const wrapper = mount(
      <MemoryRouter>
        <HeaderLoggedIn
          startFetchDataLoading={false}
          revokeLoading={false}
          userName="User Name"
          userIcon="/path/to/user/icon"
          toggleMenuHandler={() => {}}
          startFetchDataHandler={() => {}}
          revokeHandler={() => {}}
        />
      </MemoryRouter>,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('can handle toggling menu', () => {
    const toggleMenuHandler = jest.fn();
    const wrapper = shallow(
      <HeaderLoggedIn
        startFetchDataLoading={false}
        revokeLoading={false}
        userName="User Name"
        userIcon="/path/to/user/icon"
        toggleMenuHandler={toggleMenuHandler}
        startFetchDataHandler={() => {}}
        revokeHandler={() => {}}
      />,
    );

    wrapper.find('#toggle-menu-button').simulate('click');

    expect(toggleMenuHandler).toHaveBeenCalled();
  });

  it('can handle revoking session', () => {
    const revokeHandler = jest.fn();
    const wrapper = shallow(
      <HeaderLoggedIn
        startFetchDataLoading={false}
        revokeLoading={false}
        userName="User Name"
        userIcon="/path/to/user/icon"
        toggleMenuHandler={() => {}}
        startFetchDataHandler={() => {}}
        revokeHandler={revokeHandler}
      />,
    );

    wrapper.find('#revoke-button').simulate('click');

    expect(revokeHandler).toHaveBeenCalled();
  });

  it('can handle fetching data', () => {
    const startFetchDataHandler = jest.fn();
    const wrapper = shallow(
      <HeaderLoggedIn
        startFetchDataLoading={false}
        revokeLoading={false}
        userName="User Name"
        userIcon="/path/to/user/icon"
        toggleMenuHandler={() => {}}
        startFetchDataHandler={startFetchDataHandler}
        revokeHandler={() => {}}
      />,
    );

    wrapper.find('#start-fetch-data-button').simulate('click');

    expect(startFetchDataHandler).toHaveBeenCalled();
  });
});
