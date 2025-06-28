export default function CounterButton(props){

    const buttonStyle={
        fontSize:"30px",
        backgroundColor:"#00a5ab",
        width:"100px",
        margin:"10px",
        padding:"15px",
        color:"white",
        borderRadius:"20px"
    }
    return (
        <div className="Counter">
            <div>
                <button className="button" style={buttonStyle} onClick={()=>props.increment(props.by)}>+{props.by}</button>
                <button className="button" style={buttonStyle} onClick={()=>{props.decrement(props.by)}}>-{props.by}</button>
            </div>
        </div>
    );
}