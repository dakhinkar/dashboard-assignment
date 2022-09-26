import styles from './Card.module.css';
import Circle from '../Utilty/Circle';
import Bar from '../Utilty/Bar';
import { useState } from 'react';
const Card = ({ data }) => {
    // console.log(data);
    const { id, deviceName, zone, valueCal, deviceStatus, timestampInfo, location } = data;
    const colorHandler = () => {

        if (deviceStatus.status === "Offline") {
            return "grey";
        } else if (deviceStatus.status === "Normal") {
            return "lightgreen";
        } else if (deviceStatus.status === "Warning") {
            return "yellow";
        } else {
            return "red";
        }
    }
    const secondColorHandler = () => {
        let len = valueCal.value1.length;

        if (deviceStatus.status === "Offline" || valueCal.value1.charAt(len - 1) !== 'V') {
            return "grey";
        } else if (deviceStatus.status === "Normal") {
            return "lightgreen";
        } else if (deviceStatus.status === "Warning") {
            return "yellow";
        } else {
            return "red";
        }


    }
    const [color, setColor] = useState(colorHandler);
    const [secondColor, setSecondColor] = useState(secondColorHandler);

    return (
        <div className={styles.container}>

            <div className={styles.header} style={{ backgroundColor: `${color === "grey" ? "" : color}` }}>
                <span>
                    {id}
                </span>
                <span>
                    {deviceName}
                </span>
                <span>
                    {zone}
                </span>

            </div>
            <div className={styles.body}>
                <div className={styles.row}>
                    <div>
                        <Circle color={secondColor} />
                        <span>{valueCal.value1}</span>
                    </div>
                    <div>
                        <Bar />
                        <Circle color={color} />
                    </div>
                    <div>
                        {valueCal.value2}
                    </div>
                </div>

                <div className={styles.row}>
                    <div>
                        <Circle color={color} />
                        <span>{deviceStatus.status}</span>
                    </div>
                    <div>
                        <Bar color="yellow" />
                        <Circle color={color} />
                    </div>
                    <div>
                        {deviceStatus.value}
                    </div>
                </div>
                <div className={styles.row}>
                    <div>
                        <span>{timestampInfo.date}@{timestampInfo.time}</span>
                    </div>
                    <div>
                        <Bar color="blue" />
                        <Circle color={color} />
                    </div>
                    <div>
                        {timestampInfo.value}
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                {location} : Location...
            </div>
        </div >
    )
}

export default Card;