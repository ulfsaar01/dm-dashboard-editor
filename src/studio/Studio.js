import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import Workspace from './components/Workspace'
import { initialize } from './store/actions/studioActions'

const Studio = () => {
  const dispatch = useDispatch()
  const { loading } = useSelector(state => state.studio)

  useEffect(() => {
    dispatch(initialize())
  }, [dispatch])

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/:env/:id" component={Workspace} />
          <Route component={Workspace} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}
export default Studio
