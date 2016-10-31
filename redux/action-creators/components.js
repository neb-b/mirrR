export default async function updateComponents (components) {
  return {
    type: 'UPDATE_COMPONENTS',
    payload: { components }
  }
}
