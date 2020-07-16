import styles from "./fp.module.css"

const FP = ({ children }) => {
    return <div className={styles.main}>{children}</div>
}

export default FP
