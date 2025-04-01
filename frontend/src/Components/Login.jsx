import {useState} from "react";


function  Login( { MdOutlineMail, AiFillLock, FormHandle}) {

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    function handleLogin(e){
        e.preventDefault();
        console.log(Email, Password);
        setEmail('');
        setPassword('');
    }

    return (
        <div className="form-container">
            <h2>Welcome <br /> back!</h2>
            <h3> Access your account securely by using your email and password</h3>
            <form onSubmit={ handleLogin }>
                <div className="form-control">
                    <input
                        type="text"
                        placeholder = "Email"
                        onChange={(e) => setEmail(e.target.value)} />
                    <MdOutlineMail className="Mail Icon"/>
                </div>

                <div className="form-control">
                    <input
                        type="password"
                        placeholder = "Password" onChange={(e) => setPassword(e.target.value)} />
                    <AiFillLock className = "Password Icon" />
                </div>

                <button onClick={handleLogin}>Sign In</button>

            </form>
            <div className="component">
                <div className="dontHaveAnContainer">
                    Don't have an account? <b onClick={() => FormHandle('Register')}>Sign up here</b>.
                </div>
            </div>
        </div>

    );
}
export default Login
