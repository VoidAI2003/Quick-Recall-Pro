// import { useState } from "react";
import  PropTypes  from "prop-types";
function Entry(props){
//    const [name, setName] = useState("");

   return(<>
   
   <div className=" p-2 input-group mb-3">
        <span className="input-group-text" id="basic-addon1">{props.label}</span>
        <input type={props.type} className=" entry form-control" placeholder={props.placeholder} aria-label={props.label} aria-describedby="basic-addon1"/>
    </div>
   </>);
}

Entry.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string
}
Entry.defualtProps ={
    label: "LABEL",
    type: "text",
    placeholder: "Place Holder Text"
}
export default Entry