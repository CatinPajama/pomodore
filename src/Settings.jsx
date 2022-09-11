import ReactSlider from "react-slider";
import "./Settings.css"
export default function Settings({workTime, setWorkTime, breakTime, setBreakTime, laps, setLaps}) {
    let workTimeChange = (val) => {
        if (val !== workTime)
            setWorkTime(val);
    }
    let breakTimeChange = (val) => {
        if (val !== breakTime)
            setBreakTime(val);
    }
    
    let lapsChange = (val) => {
        if (laps !== val) {
            setLaps(val);
        }
    }
    return (
        <>
        <label>Work Time : {workTime} </label>
        <ReactSlider className={"slider"} thumbClassName={"thumb"} trackClassName={"track"} value={workTime} max={120} min={5} onChange={workTimeChange}/>
        <br/>
        <label>Break Time : {breakTime} </label>
        <ReactSlider className={"slider break"} thumbClassName={"thumb break"} trackClassName={"track"} value={breakTime} max={30} min={1} onChange={breakTimeChange}/>
        <label>Lap Count : {laps} </label>
        <ReactSlider className={"slider lap"} thumbClassName={"thumb lap"} trackClassName={"track"} value={laps} max={8} min={1} onChange={lapsChange}/>
        </>
    )
}
