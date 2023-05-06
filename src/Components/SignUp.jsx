import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const HEIGHT = window.innerHeight;
  useEffect(() => {
    alert("click on submit");
  }, []);
  return (
    <div
      style={{
        display: "flex",
        height: `${HEIGHT}px`,
      }}
    >
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          width: "40%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            fontSize: "72px",
            fontWeight: "700",
          }}
        >
          Board.
        </p>
      </div>
      <div
        style={{
          width: "60%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F5F5F5",
        }}
      >
        <div
          style={{
            // border: "2px solid red",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "385px",
          }}
        >
          <div style={{ fontSize: "36px", fontWeight: "700" }}>Sign In</div>
          <div
            style={{ fontSize: "16px", fontWeight: "400", marginTop: "5px" }}
          >
            Sign in to you account
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "26px",
              width: "98%",
              justifyContent: "space-between",
              fontSize: "12px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                backgroundColor: "white",
                width: "40%",
                borderRadius: "10px",
                padding: "2%",
              }}
            >
              <img
                style={{ width: "12px" }}
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
                alt="google"
              />
              <div>Sign In With Google</div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                backgroundColor: "white",
                width: "40%",
                borderRadius: "10px",
                padding: "2%",
              }}
            >
              <img
                style={{ width: "12px" }}
                src="https://e7.pngegg.com/pngimages/97/358/png-clipart-apple-logo-apple-logo-angle-image-file-formats-thumbnail.png"
                alt="apple"
              />
              <div>Sign In With Apple</div>
            </div>
          </div>
          <form
            onSubmit={() => {
              navigate("/dashboard");
            }}
            style={{
              backgroundColor: "#FFFFFF",
              display: "flex",
              flexDirection: "column",
              marginTop: "25px",
              width: "82%",
              borderRadius: "20px",
              padding: "30px",

              //   paddingTop: "30px",
              //   paddingBottom: "30px",
              alignItems: "flex-start",
            }}
          >
            <label style={{ fontSize: "16px", fontWeight: "400" }}>
              Email Address
            </label>
            <input
              type="text"
              placeholder="example@gmail.com"
              style={{
                width: "90%",
                marginTop: "10px",
                padding: "2%",
                borderRadius: "10px",
                borderWidth: "0px",
                backgroundColor: "#F5F5F5",
              }}
            />
            <label
              style={{ marginTop: "20px", fontSize: "16px", fontWeight: "400" }}
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              style={{
                width: "90%",
                marginTop: "10px",
                padding: "2%",
                borderRadius: "10px",
                borderWidth: "0px",
                backgroundColor: "#F5F5F5",
              }}
            />
            <label style={{ marginTop: "20px" }}>Forget Password</label>
            <input
              type="submit"
              style={{
                marginTop: "20px",
                width: "100%",
                padding: "3%",
                fontSize: "16px",
                fontWeight: "700",
                backgroundColor: "black",
                color: "white",
                borderRadius: "10px",
              }}
            />
          </form>
          <div
            style={{
              textAlign: "center",
              width: "100%",
              color: "#858585",
              fontSize: "16px",
            }}
          >
            <p>
              Don't have an account?
              <span style={{ color: "#346BD4" }}>Register here</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
