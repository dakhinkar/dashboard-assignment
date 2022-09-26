import React, {startTransition, useState} from "react";
import Card from "./Component/Card/Card";
import Indicator from "./Component/Display/Indicator";
import styles from './App.module.css';

const App = () => {
    // const [status, setStatus] = useState({
    //     total: 0,
    //     offline: 0,
    //     alert: 0,
    //     warning: 0,
    //     normal : 0 
    // // });
    // const [offlineState, setOffline] = useState(0);
    // const [alertState, setAlert] = useState(0);
    // const [warningState, setWarning] = useState(0);
    // const [normalState, setNormal] = useState(0);
    // const [totalState, setTotal] = useState(0);

    const data = [
        {
            id: 13,
            deviceName: "ORI-CM-BUSH",
            zone: "ZONE 000",
            valueCal: {
                value1: "Batt...",
                value2: "24 C"
            },
            deviceStatus: {
                status: "Offline",
                value: "25 V"
            },
            timestampInfo: {
                date: "06/06",
                time: "17:49",
                value: "24 C"
            },
            location: "GURGAON"

        },
        {
            id: 14,
            deviceName: "ORI-CM-BUSH",
            zone: "ZONE 000",
            valueCal: {
                value1: "Batt...",
                value2: "24 C"
            },
            deviceStatus: {
                status: "Normal",
                value: "25 V"
            },
            timestampInfo: {
                date: "06/06",
                time: "17:49",
                value: "24 C"
            },
            location: "GURGAON"

        },
        {
            id: 15,
            deviceName: "ORI-CM-BUSH",
            zone: "ZONE 000",
            valueCal: {
                value1: "8.60 V",
                value2: "24 C"
            },
            deviceStatus: {
                status: "Normal",
                value: "25 V"
            },
            timestampInfo: {
                date: "06/06",
                time: "17:49",
                value: "24 C"
            },
            location: "GURGAON"

        },
        {
            id: 16,
            deviceName: "ORI-CM-BUSH",
            zone: "ZONE 000",
            valueCal: {
                value1: "Batt...",
                value2: "24 C"
            },
            deviceStatus: {
                status: "Offline",
                value: "25 V"
            },
            timestampInfo: {
                date: "06/06",
                time: "17:49",
                value: "24 C"
            },
            location: "GURGAON"

        },
        
    ];

    const initialState = () => {
        let total = 0;
        let offline = 0;
        let alert = 0;
        let normal = 0;
        let warning = 0;
        data.forEach((ele) => {
            if (ele.deviceStatus.status === "Offline") {
                offline++;
            } else if (ele.deviceStatus.status === "Alert") {
                alert++;
            } else if (ele.deviceStatus.status === "Normal") {
                normal++;
            } else {
                warning++;
            }
            total++;
        })

        return { total, alert, offline, normal, warning };

    }

    const [status, setStatus] = useState(initialState);
    

    return (
        <div>
            <Indicator status={status}/>
            <div className={styles.container} >
                {
                data && data.map((ele) => (<Card key={ele.id} data={ ele } />))
                }
                
            </div>
            
        </div>
    );

}

export default App;
