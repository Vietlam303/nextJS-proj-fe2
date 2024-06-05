import React from 'react'
import styles from './loading.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookMedical, faBookJournalWhills, faBookTanakh, faBookQuran } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from "framer-motion";
import './load.js'

const loading = () => {
  
  return (
    < motion.div className={styles.body}
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 2 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ delay: 0.3 }}
    >
     <div className={styles.container}>
        <div className={styles.iconload}>
          <div className={styles.icon}><FontAwesomeIcon icon={faBookMedical} /></div>
          <div className={styles.icon}><FontAwesomeIcon icon={faBookJournalWhills} /></div>
          <div className={styles.icon}><FontAwesomeIcon icon={faBookTanakh} /></div>
          <div className={styles.icon}><FontAwesomeIcon icon={faBookQuran} /></div>
        </div>
        <div className={styles.contentload}>
          Loading....
        </div>
     </div>
    </motion.div>
  )
}

export default loading