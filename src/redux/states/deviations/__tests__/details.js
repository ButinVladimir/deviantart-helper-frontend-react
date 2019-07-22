import createDefaultDeviationsDetailsState from '../details';
import { DESCRIPTION } from '../../../../consts/tabs';

describe('Default deviations details state', () => {
  it('can be created without errors', () => {
    const state = createDefaultDeviationsDetailsState();

    expect(state).toMatchObject({
      tab: DESCRIPTION,
      id: '',
      title: '',
      url: '',
      publishedTime: 0,
      thumbnail: {
        src: '',
        height: 0,
        width: 0,
      },
      preview: {
        src: '',
        height: 0,
        width: 0,
      },
      description: '',
      nsfw: false,
      views: 0,
      favourites: 0,
      comments: 0,
      downloads: 0,
      timestampEnd: null,
      metadata: null,
      detailsLoading: false,
      metadataLoading: false,
    });
    expect(state).toHaveProperty('timestampBegin');
  });
});
