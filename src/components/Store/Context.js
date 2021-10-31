const { createContext } = require("react");


const StoreContext = createContext({
  token: null,
  setToken: () => {},
})


export default StoreContext;