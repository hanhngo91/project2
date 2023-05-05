import React, { useEffect, useState } from "react";
import "./Register.scss";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

function Register() {
  const [userData, setUserData] = useState([]);
  const [username, setUsername] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [closeRegister, setCloseRegister] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  const [userLogin, setUserLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  const navigate = useNavigate();

  const loadUsers = async () => {
    await axios
      .get("http://localhost:8000/users")
      .then((res) => {
        console.log(res.data);
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    loadUsers();
  }, []);
  //Check empty input:
  const checkEmpty = (field) => {
    if (field === null || field === "" || field === undefined) {
      return false;
    } else {
      return true;
    }
  };

  //Validate phonenumber:
  const validatePhonenumber = () => {
    const regex = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
    if (regex.test(phonenumber) && phonenumber.length === 12) {
      return true;
    } else {
      return false;
    }
  };

  //Validate email:
  const validateEmail = () => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(email)) {
      return true;
    } else {
      return false;
    }
  };

  //Validate password:
  const validatePassword = () => {
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/; //Minimum 8 characters, at least one letter and one number
    if (regex.test(password)) {
      return true;
    } else {
      return false;
    }
  };

  //Check confirm password:
  const checkConfirmPassword = () => {
    if (password === confirmPassword) {
      return true;
    } else {
      return false;
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    let checkUsername = userData.find((user) => user.username === username);
    let checkEmail = userData.find((user) => user.email === email);
    let checkPhonenumber = userData.find(
      (user) => user.phonenumber === phonenumber
    );
    let newUser = {
      id: Math.floor(new Date()),
      username: username,
      phonenumber: phonenumber,
      email: email,
      password: password,
      order: [],
      cartProducts: [],
      favoriteProducts: [],
    };
    if (
      checkEmpty(username) == true &&
      checkEmpty(phonenumber) == true &&
      checkEmpty(email) == true &&
      checkEmpty(password) == true &&
      isSignUp == true &&
      validatePhonenumber() == true &&
      validateEmail() == true &&
      validatePassword() == true &&
      checkConfirmPassword() == true
    ) {
      await axios.post("http://localhost:8000/users", newUser);
      setTimeout(() => {
        alert("User registered successfully!");
      }, 200);
      setIsSignUp(false);
    } else if (checkUsername) {
      setError("Username is already used!");
    } else if (checkEmail) {
      setError("Email is already used!");
    } else if (checkPhonenumber) {
      setError("Phone number is already used!");
    } else {
      console.log(validatePhonenumber(phonenumber));
      console.log(validateEmail(email));
      console.log(validatePassword(password));

      setError("Something went wrong!");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    let checkUsername = userData.find((user) => user.username === userLogin);
    let checkPassword = userData.find(
      (user) => user.password === passwordLogin
    );
    console.log(checkUsername);
    console.log(checkPassword);
    let loginStatus;
    if (userLogin === "Hannie" && passwordLogin === "Hanh1234") {
      loginStatus = userLogin;
      localStorage.setItem("loginStatus", loginStatus);
      navigate("/admin");
    } else if (!checkEmpty(userLogin) || !checkEmpty(passwordLogin)) {
      setError("Please fill in all field!");
      return;
    } else if (checkUsername && checkPassword) {
      loginStatus = userLogin;
      localStorage.setItem("loginStatus", loginStatus);
      setTimeout(() => {
        alert("Login successfully!");
      }, 200);
      document.querySelector(".register").style.display = "none";
      navigate("/");
    } else {
      setError("Something went wrong!");
      return;
    }
  };

  return (
    <div className="register">
      <CloseIcon
        className="closeBtn"
        onClick={() => setCloseRegister(!closeRegister)} //can't close the register modal
      />
      <h2>{isSignUp ? "Create Account" : "Log in"}</h2>
      <p className="error">{error}</p>
      {isSignUp ? (
        <>
          <form onSubmit={handleRegister}>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              required={true}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="text"
              id="phonenumber"
              name="phonenumber"
              placeholder="090-123-4567"
              required={true}
              onChange={(e) => setPhonenumber(e.target.value)}
            />

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required={true}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required={true}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              id="password-check"
              name="password-check"
              placeholder="Confirm password"
              required={true}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <input className="secondary-button" type="submit" />
            <button to="/login" onClick={() => setIsSignUp(false)}>
              I've got an account! Log in!
            </button>
          </form>
        </>
      ) : (
        <>
          <form onSubmit={handleLogin} id="form-login">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={userLogin}
              onChange={(e) => setUserLogin(e.target.value)}
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={passwordLogin}
              onChange={(e) => setPasswordLogin(e.target.value)}
            />
            <input className="secondary-button" type="submit" /> <br />
            <button to="/register" onClick={() => setIsSignUp(true)}>
              I'm new here! Register!
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default Register;
