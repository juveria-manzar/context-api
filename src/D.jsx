import { useContext } from "react";

// step 5: import the context whereyou want to get the state
import { countContext } from './A';

let D = () => {
    // step 6: inside the your component call useContext hookand give it the context from which you want the value
    let valueObject = useContext(countContext);
    return (
        <div className="d-vala-div">
            <p>{valueObject.count}</p> 
            <button onClick={()=>{
                valueObject.setCount(valueObject.count+1)
            }}>+</button>
        </div>
    )

}
export default D;
