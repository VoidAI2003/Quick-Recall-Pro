import Button from "../components/Button.jsx";
import Entry from "../components/entry.jsx"
function Form(){
    return(<>
        <div  className="d-flex justify-content-end py-5">
        <div className="form "
        style={{zIndex:1,textAlign:"center",background:"#020026",
         borderRadius:"20px",padding:"40px 75px 40px 75px"}}>

            <h2 style={{color:"#D6EAF9"}}>Sign In</h2>
            <hr style={{borderColor:"#FFFFFF"}}/>
            <form action="POST">
                <Entry type={'text'} placeholder={'Username'} label={"User Name"} id={"Username"}/>
                <Entry type={'email'} placeholder={'Email'} label={"Email"} id={"email"}/>
                <Entry type={'password'} placeholder={'Password'} label={"Password"} id={"password"} />
                <a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/">Forgot Password ? </a>
                <br /><br />
            <Button text={"Sign In"}/>
            
            
            </form>
           
        </div>
    </div>
    
    </>);
}

export default Form