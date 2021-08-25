import {Route} from 'dva/router';

export function renderRoutes(routeConfig){
  return routeConfig.map(({path, exact = false, component:RouteComponent, routes = []}, index) => {
    return (
      <Route key={index} path={path} exact={exact} render={
        (routeProps) => {
          return <RouteComponent  {...routeProps}  routes={routes}/>
        }
      }/>
    )
  })
}