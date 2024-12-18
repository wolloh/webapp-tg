export default {
  namespaced: true,
  state: {
    userData: {
      id: 123, // TODO: change to null
      username: "",
      first_name: "",
      last_name: ""
    }
  },
  getters: {
    getUserId: (state) => state.userData['id'],
    getUsername: (state) => state.userData['username'],
    getFirstName: (state) => state.userData['first_name'],
    getLastName: (state) => state.userData['last_name']
  },
  mutations: {
    SET_USER_DATA: (state, payload) => {
      state.userData = payload
    },
  },
  actions: {
    setUserData: (context, payload) => {
        context.commit('SET_USER_DATA', payload)
    },
  }
}