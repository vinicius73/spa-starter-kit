import * as TYPES from '../../store/types'

const state = {
  list: [],
  pagination: {},
}

/* eslint-disable no-param-reassign */
const mutations = {
  [TYPES.CATEGORIES_SET_DATA](st, obj) {
    st.list = obj.list
    st.pagination = obj.pagination
  },
}

const actions = {
  categoriesSetData({ commit }, obj) {
    commit(TYPES.CATEGORIES_SET_DATA, obj)
  },
}

export default {
  state,
  mutations,
  actions,
}
