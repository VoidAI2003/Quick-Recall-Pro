import Button from "../components/Button.jsx";
import Entry from "../components/entry.jsx"
function Form(){
    return(<>
        <main className="d-flex justify-content-end py-5">
        <div className="dw-150 form" 
        style={{textAlign:"center",background:"linear-gradient(#01001c,#020026,#02002f,#353359,#bbb1fa)",
         borderRadius:"20px",padding:"50px"}}>

            <h2 style={{color:"#D6EAF9"}}>Sign In</h2>
            <hr style={{borderColor:"#DFDFDF"}}/>
            <form action="POST">
                <Entry type={'text'} placeholder={'Username'} label={"User Name"} id={"Username"}/>
                <Entry type={'email'} placeholder={'Email'} label={"Email"} id={"email"}/>
                <Entry type={'password'} placeholder={'Password'} label={"Password"} id={"password"} />
                <a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/">Forgot Password ? </a>
                <br /><br />
            <Button text={"Sign In"}/>
            
            
            </form>
           
        </div>
    </main>
    
    </>);
}

export default Form