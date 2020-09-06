export const repository = {
  getUserData() {
    const data = localStorage.getItem('_values')
    if(data) {
      return JSON.parse(data)
    }
  },
  setUserData(values) {
    localStorage.setItem('_values', JSON.stringify(values))
  }
}