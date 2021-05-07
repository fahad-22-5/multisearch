import { useState } from "react";
import Btn from "./Btn";
const Input = () => {

    const[input, setinput] = useState("")

    const handleventchange = (e) => {
        setinput(e.target.value);
    };

    return (
        <div className="box">
            <p>One place for all your queries.</p>
            <input
             type="text" className="search"
             placeholder="Search"
             value={input}
             onChange={handleventchange}
             />
             <p>Search through your desired engines or maybe, all at once.</p>
             <br/>
            <Btn enter = {input} />
        </div>
    )
}

export default Input
