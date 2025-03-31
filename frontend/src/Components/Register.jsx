import {useState} from "react";


function  Register( { MdOutlineMail, AiFillLock, FormHandle }) {

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    function handleRegister(e){
        e.preventDefault();

        if(!Email || !Password){
            return;
        }
        console.log(Email, Password);
        setEmail('');
        setPassword('');
    }

    return (
        <div className="form-container">
            <h2>Register <br /> now</h2>
            <h3> Sign in with your email and password to continue </h3>
            <form onSubmit={ handleRegister }>
                <div className="form-control">
                    <input
                        type="text"
                        placeholder = "Enter your email"
                        onChange={ (e) => setEmail(e.target.value) } />
                    <MdOutlineMail className="Mail Icon"/>
                </div>

                <div className="form-control">
                    <input
                        type="password"
                           placeholder = "Confirm your password"
                        onChange={(e) =>  setPassword(e.target.value)} />
                    <AiFillLock className = "Password Icon" />
                </div>

                <div className="form-control">
                    <input
                        type="password"
                        placeholder = "Confirm your password"
                        onChange={(e) =>  setPassword(e.target.value)} />
                    <AiFillLock className = "Password Icon" />
                </div>

                <button onClick={handleRegister}>Sign Up</button>

            </form>
            <p onClick = {() => FormHandle('Login')}> Already have an account? Sign up here.</p>
        </div>

    );
}

export default Register;
