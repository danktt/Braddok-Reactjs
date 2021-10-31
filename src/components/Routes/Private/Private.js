// import { useContext } from "react"
import { Redirect, Route } from "react-router"
import { isAuthenticated } from "../../../auth"
// import StoreContext from "../../Store/Context"



const RoutesPrivate = ({component: Component, ...rest}) => {

  // const { token } = useContext(StoreContext)


  return (
    <Route {...rest} render={props => (
      isAuthenticated() ? (
        <Component {...props} />
      ): (
        <Redirect to={{pathname: '/', state:{ from: props.location}}} />
      )  
      
      
      )
    }
    
    />
    )
  }

export default RoutesPrivate