import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from '../../styles/ds.module.css'
import Modal from '../common/Modal'
import { spriteToJsonBubble } from '../../utils/spriteToJson'
import {
  FormInputGroup,
  FormSelectGroup,
  PrimaryButton,
  PrimaryAltButton
} from '../common/FormControls'
import LoadScreen from '../common/LoadScreen'
import LoadLayer from '../common/LoadLayer'
import { fetchChallenge } from '../../store/actions/fetchActions'
import { loadFile } from '../../store/actions/studioActions'

const LoadChallenges = props => {
  const dispatch = useDispatch()
  const [isModal, setIsModal] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [env, setEnv] = useState('dev')
  const [objId, setObjId] = useState('')

  const handleClose = () => {
    setIsModal(false)
  }

  const handleOpen = () => {
    setIsModal(true)
  }

  const handleSubmit = () => {
    console.log(env, objId)
    setIsSubmitting(true)
    dispatch(fetchChallenge(env, objId)).then(data => {
      if (data.error) {
        setIsSubmitting(false)
        alert('Challenge with id: ' + objId + ' Not Found')
      }

      dispatch(loadFile(data))
      setIsSubmitting(false)
      handleClose()
    })
  }

  return (
    <>
      {isModal ? (
        <Modal handleClose={handleClose}>
          {isSubmitting ? (
            <LoadLayer />
          ) : (
            <form className={styles.mdfm}>
              <FormSelectGroup
                title="Environment"
                value={env}
                onChange={e => setEnv(e.target.value)}
              >
                <option key="dev" value="dev">
                  dev
                </option>
                <option key="prod" value="prod">
                  prod
                </option>
              </FormSelectGroup>
              <FormInputGroup
                title="Challenge ID"
                value={objId}
                onChange={e => setObjId(e.target.value)}
              ></FormInputGroup>
              <div className={styles.fxr}>
                <PrimaryAltButton type="button" onClick={handleClose}>
                  Cancel
                </PrimaryAltButton>
                <PrimaryButton type="button" onClick={handleSubmit}>
                  Load
                </PrimaryButton>
              </div>
            </form>
          )}
        </Modal>
      ) : null}
      <div className={styles.tlspl} onClick={handleOpen}>
        Load Challenge
      </div>
    </>
  )
}

export default LoadChallenges
