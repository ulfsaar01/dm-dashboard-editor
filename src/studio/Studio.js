import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import Workspace from './components/Workspace'
import { initialize, loadFile } from './store/actions/studioActions'

const Studio = () => {
  const dispatch = useDispatch()
  const { loading } = useSelector(state => state.studio)

  useEffect(() => {
    
    const handleIframeCallback = e => {
      if(e.data.source === "react-devtools-content-script") return
      if(e.data.source === "react-devtools-detector") return
      if(e.data.source === "react-devtools-inject-backend") return
      if(e.data.source === "react-devtools-bridge") return
      if(e.data === "ready") return
      //console.log(e.data)
      dispatch(loadFile({buttons:JSON.parse(e.data)}))
    }

    window.addEventListener('message', handleIframeCallback, false)
    
    //alert(window.name)
    dispatch(initialize())
    window.parent.postMessage("ready",'*')
    return () => window.removeEventListener('message', handleIframeCallback)
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
