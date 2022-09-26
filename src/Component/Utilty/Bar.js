import styles from './Styles.module.css';
const Bar = ({color}) => {
    return (
        <div className={styles.bar} style={{backgroundColor: color}}>
            
        </div>
    );
}
export default Bar;
