import Button from "./components/Button";
import Entry from "./components/entry"

function App() {
    return(<>
    <main className="d-flex align-items-right py-5">
        <div className="dw-150 m-auto" 
        style={{textAlign:"center",background:"linear-gradient(#01001c,#020026,#02002f,#353359,#bbb1fa)",
         borderRadius:"20px",padding:"50px"}}>

            <h2 style={{color:"#D6EAF9"}}>Sign In</h2>
            <hr style={{borderColor:"#DFDFDF"}}/>
            <Entry type={'text'} placeholder={'Username'} label={"User Name"} />
            <Entry type={'email'} placeholder={'Email'} label={"Email"} />
            <Entry type={'password'} placeholder={'Password'} label={"Password"} />
            <Button text={"Sign In"}/>
        </div>
    </main>
    </>);

}

export default App

