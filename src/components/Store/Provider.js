
import useStorage from '../../Hooks/useStoreage/useStorege';
import Context from './Context'


const StoreProvider = ({children}) => {

  const { token, setToken } = useStorage('token')


  return(
    <Context.Provider
      value={{
        token,
        setToken,
      }}
    >
      {children}
    </Context.Provider>
  )

}


export default StoreProvider;