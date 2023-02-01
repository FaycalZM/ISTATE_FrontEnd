import { GoogleLogin } from "react-google-login";
import { CLIENT_ID } from "../../utils/environement";

export default function Login() {
  const onSuccess = (res) => console.log("Succes", res.profileObj);
  const onFailure = () => alert("Failed to login")

  return (
    <div>
      <GoogleLogin
        clientId={CLIENT_ID}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        isSignedIn={true}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}
