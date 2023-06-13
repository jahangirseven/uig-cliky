import React from 'react'
import styles from './Pagination.module.css'

function Pagination() {
  return (
    <div className={styles.pagination}>
        <span className={styles.prev}>PREV</span>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span className={styles.prev}>NEXT</span>
    </div>
  )
}

export default Pagination