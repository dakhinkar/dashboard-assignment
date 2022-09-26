import styles from './Styles.module.css';
const Circle = ({color}) => {
    return (
        <div className={styles.circle} style={{backgroundColor: color}}>

        </div>
    );
}

export default Circle;
