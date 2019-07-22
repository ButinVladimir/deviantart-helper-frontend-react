import createFetchAction from '../fetch';
import lockToggleActionCreator from '../shared/lock-toggle';
import revokeActionCreator from '../shared/revoke';
import showErrorActionCreator from '../shared/show-error';
import Config from '../../../config/config';
import { GET, POST } from '../../../consts/fetch-methods';
import { SERVER_ROUTE_DEVIATIONS_BROWSE } from '../../../consts/server-routes';
import { LOCK_BROWSE_DEVIATIONS } from '../../../consts/locks';

jest.mock('../shared/lock-toggle', () => jest.fn());
jest.mock('../shared/revoke', () => jest.fn());
jest.mock('../shared/show-error', () => jest.fn());

describe('Fetch action creator helper', () => {
  const config = new Config();
  config.serverUrl = 'https://test/server/url/';

  beforeEach(() => {
    lockToggleActionCreator.mockReset();
    revokeActionCreator.mockReset();
    showErrorActionCreator.mockReset();
  });

  afterEach(() => {
    fetch.mockReset();
  });

  it('does not send request when state is locked', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => {});
    const getLockValue = jest.fn(() => true);

    await createFetchAction(
      GET,
      SERVER_ROUTE_DEVIATIONS_BROWSE,
      getLockValue,
      LOCK_BROWSE_DEVIATIONS,
      () => {},
      config,
    )(
      () => {},
      () => ({}),
    );

    expect(fetch).not.toHaveBeenCalled();
    expect(getLockValue).toHaveBeenCalled();
  });

  it('sends requests', async () => {
    const response = {};
    const jsonPromise = Promise.resolve(response);
    const fetchPromise = Promise.resolve({
      status: 200,
      json: () => jsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => fetchPromise);
    const successActionCreator = jest.fn();

    await createFetchAction(
      GET,
      SERVER_ROUTE_DEVIATIONS_BROWSE,
      () => false,
      LOCK_BROWSE_DEVIATIONS,
      successActionCreator,
      config,
    )(
      () => {},
      () => ({}),
    );

    expect(fetch).toHaveBeenCalled();
    expect(successActionCreator).toHaveBeenCalledWith(response);
    expect(successActionCreator).toHaveBeenCalledTimes(1);
    expect(lockToggleActionCreator.mock.calls).toEqual([
      [LOCK_BROWSE_DEVIATIONS, true],
      [LOCK_BROWSE_DEVIATIONS, false],
    ]);
  });

  it('prepares params for GET requests', async () => {
    const params = {
      param1: 'value',
      param2: 'anotherValue',
    };
    const jsonPromise = Promise.resolve({});
    const fetchPromise = Promise.resolve({
      status: 200,
      json: () => jsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => fetchPromise);

    await createFetchAction(
      GET,
      SERVER_ROUTE_DEVIATIONS_BROWSE,
      () => false,
      LOCK_BROWSE_DEVIATIONS,
      () => {},
      config,
      () => params,
    )(
      () => {},
      () => ({}),
    );

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch.mock.calls[0].length).toBe(2);
    expect(Array.from(fetch.mock.calls[0][0].searchParams.entries())).toEqual([
      ['param1', 'value'],
      ['param2', 'anotherValue'],
    ]);
    expect(fetch.mock.calls[0][1]).toEqual({
      mode: 'cors',
      credentials: 'include',
      method: GET,
    });
  });

  it('prepares params for POST requests', async () => {
    const params = {
      param1: 'value',
      param2: 'anotherValue',
    };
    const jsonPromise = Promise.resolve({});
    const fetchPromise = Promise.resolve({
      status: 200,
      json: () => jsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => fetchPromise);

    await createFetchAction(
      POST,
      SERVER_ROUTE_DEVIATIONS_BROWSE,
      () => false,
      LOCK_BROWSE_DEVIATIONS,
      () => {},
      config,
      () => params,
    )(
      () => {},
      () => ({}),
    );

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch.mock.calls[0].length).toBe(2);
    expect(Array.from(fetch.mock.calls[0][0].searchParams.entries())).toEqual([]);
    expect(fetch.mock.calls[0][1]).toEqual({
      mode: 'cors',
      credentials: 'include',
      method: POST,
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  });

  it('handles requests with status 304', async () => {
    const response = {};
    const jsonPromise = Promise.resolve(response);
    const fetchPromise = Promise.resolve({
      status: 304,
      json: () => jsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => fetchPromise);
    const successActionCreator = jest.fn();

    await createFetchAction(
      GET,
      SERVER_ROUTE_DEVIATIONS_BROWSE,
      () => false,
      LOCK_BROWSE_DEVIATIONS,
      successActionCreator,
      config,
    )(
      () => {},
      () => ({}),
    );

    expect(fetch).toHaveBeenCalled();
    expect(successActionCreator).toHaveBeenCalledWith(response);
    expect(successActionCreator).toHaveBeenCalledTimes(1);
    expect(lockToggleActionCreator.mock.calls).toEqual([
      [LOCK_BROWSE_DEVIATIONS, true],
      [LOCK_BROWSE_DEVIATIONS, false],
    ]);
  });

  it('handles requests with status 401', async () => {
    const fetchPromise = Promise.resolve({
      status: 401,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => fetchPromise);
    const successActionCreator = jest.fn();

    await createFetchAction(
      GET,
      SERVER_ROUTE_DEVIATIONS_BROWSE,
      () => false,
      LOCK_BROWSE_DEVIATIONS,
      successActionCreator,
      config,
    )(
      () => {},
      () => ({}),
    );

    expect(fetch).toHaveBeenCalled();
    expect(successActionCreator).toHaveBeenCalledTimes(0);
    expect(revokeActionCreator).toHaveBeenCalled();
    expect(lockToggleActionCreator.mock.calls).toEqual([
      [LOCK_BROWSE_DEVIATIONS, true],
      [LOCK_BROWSE_DEVIATIONS, false],
    ]);
  });

  it('handles requests with status 500', async () => {
    const errorText = 'A test error has occurred, ignore in logs';
    const fetchPromise = Promise.resolve({
      status: 500,
      text: () => Promise.resolve(errorText),
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => fetchPromise);
    const successActionCreator = jest.fn();

    await createFetchAction(
      GET,
      SERVER_ROUTE_DEVIATIONS_BROWSE,
      () => false,
      LOCK_BROWSE_DEVIATIONS,
      successActionCreator,
      config,
    )(
      () => {},
      () => ({}),
    );

    expect(fetch).toHaveBeenCalled();
    expect(successActionCreator).toHaveBeenCalledTimes(0);
    expect(showErrorActionCreator).toHaveBeenCalledWith(errorText);
    expect(lockToggleActionCreator.mock.calls).toEqual([
      [LOCK_BROWSE_DEVIATIONS, true],
      [LOCK_BROWSE_DEVIATIONS, false],
    ]);
  });

  it('handles requests with exceptions', async () => {
    const errorText = 'A test exception has been thrown, ignore in logs';
    jest.spyOn(global, 'fetch').mockImplementation(() => { throw new Error(errorText); });
    const successActionCreator = jest.fn();

    await createFetchAction(
      GET,
      SERVER_ROUTE_DEVIATIONS_BROWSE,
      () => false,
      LOCK_BROWSE_DEVIATIONS,
      successActionCreator,
      config,
    )(
      () => {},
      () => ({}),
    );

    expect(fetch).toHaveBeenCalled();
    expect(successActionCreator).toHaveBeenCalledTimes(0);
    expect(showErrorActionCreator).toHaveBeenCalledWith(errorText);
    expect(lockToggleActionCreator.mock.calls).toEqual([
      [LOCK_BROWSE_DEVIATIONS, true],
      [LOCK_BROWSE_DEVIATIONS, false],
    ]);
  });
});
