import React from 'react'
import styles from './fc.module.css'

export const DetailInputGroup = props => {
  return (
    <div className={styles.dig}>
      <label className={styles.dttl}>{props.title}: </label>
      <input
        type={props.type}
        id={props.id}
        name={props.id}
        placeholder={props.placeholder}
        value={props.value}
        className={styles.dif}
        {...props}
      />
    </div>
  )
}

export const DetailSelectGroup = props => {
  return (
    <div className={styles.dig}>
      <label className={styles.dttl}>{props.title}: </label>
      <select
        id={props.id}
        name={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        className={styles.dif}
        {...props}
      >
        {props.children}
      </select>
    </div>
  )
}

export const FormInputGroup = props => {
  return (
    <div className={styles.dmf}>
      <label className={styles.dmfttl}>{props.title}</label>
      <input
        type={props.type}
        id={props.id}
        name={props.id}
        placeholder={props.placeholder}
        value={props.value}
        className={styles.dmfif}
        {...props}
      />
    </div>
  )
}

export const FormSelectGroup = props => {
  return (
    <div className={styles.dmf}>
      <label className={styles.dmfttl}>{props.title}</label>
      <select
        type={props.type}
        id={props.id}
        name={props.id}
        value={props.value}
        className={styles.dmfif}
        onBlur={props.handleBlur}
        {...props}
      >
        {props.children}
      </select>
    </div>
  )
}

export const PrimaryButton = ({ ...props }) => (
  <button className={`${styles.dmbtn} ${styles.pr}`} {...props}>
    {props.children}
  </button>
)

export const PrimaryAltButton = ({ ...props }) => (
  <button className={`${styles.dmbtn} ${styles.pra}`} {...props}>
    {props.children}
  </button>
)