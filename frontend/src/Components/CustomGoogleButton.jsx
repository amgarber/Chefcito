import { useGoogleLogin } from '@react-oauth/google';
import '../css/GoogleButton.css'; // crea este archivo o adaptalo al tuyo

function CustomGoogleButton({ onSuccess }) {
    const login = useGoogleLogin({
        onSuccess,
        onError: () => {
            alert("Google Sign-in failed");
        }
    });

    return (
        <div className="google-btn" onClick={() => login()}>
            <div className="google-icon-wrapper">
                <img className="google-icon" src="/google-icon.svg" alt="Google" />
            </div>
            <p className="btn-text"><b>Sign in with Google</b></p>
        </div>
    );
}

export default CustomGoogleButton;
