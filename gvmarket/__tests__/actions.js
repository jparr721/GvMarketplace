import * as actions from '../actions'
import RNFirebase from 'react-native-firebase'
import thunk from 'redux-thunk'

describe('firebase actions', () => {
  beforeEach(() => {
    RNFirebase.reset()
})

  test(types.firebase.FIREBASE_RESET_DATA, () => {
    const expectedAction = {
      type: types.firebase.FIREBASE_RESET_DATA,
    }
    expect(actions.clearData()).
    toEqual(expectedAction)
  })
