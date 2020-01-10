/**
 * action = {
 *   type: 'CREATE_EVENT',
 *   title: 'news Tokyo Olympic in 2020'
 *   body: 'The Olympic Games will be held in Tokyo in 2020! As a result ...'
 * }
 *
 * // before
 * state = [
 *   { id: 1, title: 'title1', body: 'body1' },
 *   { id: 2, title: 'title2', body: 'body2' },
 *   { id: 3, title: 'title3', body: 'body3' }
 * ]
 *
 * // after
 * state = [
 *   { id: 1, title: 'title1', body: 'body1' },
 *   { id: 2, title: 'title2', body: 'body2' },
 *   { id: 3, title: 'title3', body: 'body3' },
 *   {
 *     id: 4,
 *     title: 'news Tokyo Olympic in 2020'
 *     body: 'The Olympic Games will be held in Tokyo in 2020! As a result ...'
 *   }
 * ]
 *
 * // no state
 * state = []
 */
const events = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_EVENT':
      const event = {
        title: action.title,
        body: action.body,
      }
      const length = state.length
      const id = length > 0 ? state[length - 1].id + 1 : 1
      return [...state, { id, ...event }]

    case 'DELETE_EVENT':
      return state.filter(event => event.id !== action.id)

    case 'DELETE_ALL_EVENTS':
      return []

    default:
      return state
  }
}

export default events
