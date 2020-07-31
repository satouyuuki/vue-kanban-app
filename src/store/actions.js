/* eslint-disable no-unused-vars */
import * as types from './mutation-types'
import { Auth, List, Task } from '../api'
/* eslint-enable no-usused-vars */

export default {
  // login: ({ commit }) => {
  //   // TODO:
  // throw new Error('login action should be implemented')
  login: ({ commit }, authInfo) => {
    return Auth.login(authInfo)
      .then(({ token, userId }) => {
        commit(types.AUTH_LOGIN, { token, userId })
      })
      .catch(err => { throw err })
  },
  fetchLists: ({ commit }) => {
    // TODO:
    throw new Error('fetchLists action should be implemented')
  },
  addTask: ({ commit }) => {
    // TODO:
    throw new Error('addTask action should be implemented')
  },
  updateTask: ({ commit }) => {
    // TODO:
    throw new Error('updateTask action should be implemented')
  },
  remoteTask: ({ commit }) => {
    // TODO:
    throw new Error('remoteTask action should be implemented')
  },
  logout: ({ commit }) => {
    // TODO:
    throw new Error('logout action should be implemented')
  }
}
