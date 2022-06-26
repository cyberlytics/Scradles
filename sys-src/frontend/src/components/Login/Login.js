import './Login.css';

function Login(props) {

    return(
        <div className='Login' data-testid='login'>
            <div className='LoginElement'>
                <h2 className='Text'>Anmeldung</h2>
                <input className='Username' placeholder='Username' type='text'></input>
                <input className='Password' placeholder='Password' type='password'></input>
                <input className='Submit' type='submit' value='Login'></input>
            </div>
        </div>
    );    
}


export default Login;