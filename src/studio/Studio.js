import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Workspace from './components/Workspace'
import { initialize } from './store/actions/studioActions'

const Studio = () => {
  const dispatch = useDispatch()
  const { loading } = useSelector(state => state.studio)

  useEffect(() => {
    dispatch(initialize())
  }, [dispatch])

  return (
    <Workspace loading={loading} />
  )
}
export default Studio