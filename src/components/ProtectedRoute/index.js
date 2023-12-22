import {Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = props => {
  const token = Cookies.get('jwt_token')

  if (token === undefined) {
    return <Redirect to="/login" />
  }
  // problem:When an unauthenticated user tries to access the Home Route, Products Route or Cart Route, then the page should be navigated to the Login Route using the protected route
  // Fix:spread operator missing in props
  return <Route {...props} />
}

export default ProtectedRoute
