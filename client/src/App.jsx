import image from "./assets/secure.png";
import Form from "../src/composite/Form.jsx";
function App() {
    return(<>
    
        <div className="container text-center ">
            <div className="row">
                <div className="col img-pos">
                    <img src={image} className="img-container" width={"400px"} alt="logo" />
                </div>
                <div className="col">
                    <Form/>
                 </div>
            </div>
            
        </div>
    </>);

}

export default App

