import ReactSlider from "react-slider";
import "./Settings.css"
export default function Settings({workTime, setWorkTime, breakTime, setBreakTime, isSettings, isSetSettings}) {
    let workTimeChange = (val) => {
        setWorkTime(val);
    }
    let breakTimeChange = (val) => {
        setBreakTime(val);
    }
    return (
        <>
        <label>Work Time : {workTime} </label>
        <ReactSlider className={"slider"} thumbClassName={"thumb"} trackClassName={"track"} value={workTime} max={120} min={5} onChange={workTimeChange}/>
        <br/>
        <label>Break Time : {breakTime} </label>
        <ReactSlider className={"slider break"} thumbClassName={"thumb break"} trackClassName={"track"} value={breakTime} max={120} min={5} onChange={breakTimeChange}/>
        </>
    )
}
