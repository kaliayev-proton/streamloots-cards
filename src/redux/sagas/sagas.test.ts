import { takeEvery } from 'redux-saga/effects';
import { fetchCardsSaga } from './cards';
import { watchCards } from './index';

describe('Fetch cards saga', () => {
  const generator = watchCards();
  
  it('should wait for every FETCH_CARDS action creator and call fetchCardsSaga', () => {
    expect(generator.next().value)
      .toEqual(takeEvery('FETCH_CARDS', fetchCardsSaga));
  });
  
  it('should be done on next iteration', () => {
    expect(generator.next().done).toBeTruthy();
  });
});