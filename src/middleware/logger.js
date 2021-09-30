const logger = (store) => (next) => (action) => {
    console.group(action.type)
    console.log("The actions: ", action)
    const result = next(action)
    console.log("The new state: ", store.getState())
    console.groupEnd()
    return result
}

export default logger