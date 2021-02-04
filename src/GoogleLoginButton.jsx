import React from "react";
import { GoogleLogin } from "react-google-login";

const GoogleLoginButton = () => {
  const responseGoogle = async ({ profileObj }) => {
    const { imageUrl } = profileObj;
    console.log(imageUrl);
  };

  return (
    <div>
      <GoogleLogin
          clientId={"281154283163-bsa8jkvn8jh1vnf5kklv153cmtko7bc8.apps.googleusercontent.com"}
          buttonText={"로그인"}
          onSuccess={responseGoogle}
          // onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
    </div>
  );
};

export default GoogleLoginButton;
