import styles from './Indicator.module.css';



const Indicator = ({status}) => {
    return (
        <>
            <div className={`${styles.header}`}>
                <div className={`${styles.sky} ${styles.spacing}`}>
                    Temperature Alaram setting (deg C)
                </div>
                <div className={`${styles.alert} ${styles.spacing}`}>
                    Hotspot above 100 deg C
                </div>
                <div className={`${styles.warning} ${styles.spacing}`}>
                    High above 90 deg C
                </div>
                <div className={`${styles.offline} ${styles.spacing}`}>
                    Change
                </div>
            </div>
            <div className={`${styles.header}`}>
                <div className={`${styles.sky} ${styles.spacing}`}>
                    Total  { status.total  }      
                </div>
                <div className={`${styles.offline} ${styles.spacing}`}>
                    {status.offline} Offline
                </div>
                <div className={`${styles.alert} ${styles.spacing}`}>
                    {status.alert} Alert
                </div>
                <div className={`${styles.warning} ${styles.spacing}`}>
                    {status.warning} Warning
                </div>
                <div className={`${styles.normal} ${styles.spacing}`}>
                    {status.normal} Normal
                </div>
            </div>    
        </>
    );
}

export default Indicator;