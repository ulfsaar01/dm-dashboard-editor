import React from 'react'
import { useDispatch } from 'react-redux'
import styles from '../../styles/ds.module.css'
import { updateArtboardBackground } from '../../store/actions/artboardActions'

const UploadImage = () => {
  const dispatch = useDispatch()

  const handleUploadImage = event => {
    //console.log(event)
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0]
      const reader = new FileReader()
      //console.log(file)
      reader.onload = e => {
        dispatch(updateArtboardBackground(e.target.result))
        //handleUploaded({ index: index, name: file.name, file: e.target.result })
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <>
      <input
        className={styles.upi}
        type="file"
        id="upload"
        name="upload"
        accept="image/*"
        onChange={event => {
          handleUploadImage(event)
        }}
      ></input>
      <label className={styles.tlspl} htmlFor="upload">
        <span>Upload Image</span>
      </label>
    </>
  )
}

export default UploadImage
