import { GoogleLogin } from "react-google-login";
import { CLIENT_ID } from "../../utils/environement";
import { AiOutlineGoogle } from "react-icons/ai";

export default function Login({ connect }) {
  const onSuccess = (res) => connect(res.profileObj.email);
  const onFailure = () => alert("Failed to login");

  return (
    <div>
      <GoogleLogin
        render={(renderProps) => (
          <button
            type="button"
            className="primary-btn-sm flex items-center gap-x-2 mx-auto md:m-0"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            <AiOutlineGoogle className="text-2xl" />
            Login
          </button>
        )}
        clientId={CLIENT_ID}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        isSignedIn={true}
        cookiePolicy="single_host_origin"
      />
    </div>
  );
}
