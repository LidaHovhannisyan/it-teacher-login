import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
  app: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7fa99b",
    minHeight: "100vh",
  },
  container: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#e0ebeb",
    borderRadius: "10px",
    height: "600px",
    width: "1000px",
    "@media (max-width: 950px)": {
      height: "400px",
      width: "400px",
      display: "block",
    },
  },
  left: {
    "@media (max-width: 950px)": {
      height: "80px",
      width: "80px",
      margin: "0 auto",
    },
  },
  avatar: {
    height: "300px",
    width: "300px",
    borderRadius: "50%",
    boxShadow: "10px 5px 5px #7fa99b",
    "@media (max-width: 950px)": { height: "80px", width: "80px" },
  },

  right: {
    height: "500px",
    width: "400px",
    display: "block",
    textAlign: "center",
    "@media (max-width: 950px)": {
      height: "500px",
      width: "300px",
      margin: "0 auto",
    },
  },
  loginTitle: {
    color: "#24527a",
    fontSize: "50px",
    textShadow: "3px 4px #a7bcb9",
    "@media (max-width: 950px)": { fontSize: "26px" },
  },
  input: {
    height: "60px",
    width: "400px",
    backgroundColor: "#a0c1b8",
    borderRadius: "25px",
    border: "none",
    marginBottom: 30,
    fontSize: "20px",
    color: "#1b335f",
    "&:focus": {
      outline: "none",
      fontSize: "24px",
      boxShadow: "3px 4px #7fa99b",
    },
    "&::placeholder": {
      paddingLeft: 10,
      fontSize: "1.2em",
    },
    "@media (max-width: 950px)": {
      height: "40px",
      width: "250px",
      marginBottom: 10,
      fontSize: 18,
      "&::placeholder": {
        fontSize: "0.8em",
      },
      "&:focus": {
        fontSize: "21px",
      },
    },
  },
  inputSubmit: {
    height: "60px",
    width: "400px",
    backgroundColor: "#2c7873",
    borderRadius: "25px",
    border: "none",
    marginBottom: 30,
    fontSize: "20px",
    fontWeight: 900,
    color: "#1b335f",
    cursor: "pointer",
    boxShadow: "3px 4px #7fa99b",
    "@media (max-width: 950px)": {
      height: "40px",
      width: "250px",
      marginBottom: 0,
    },
  },
  forgot: {
    fontSize: "18px",
    fontWeight: 500,
    color: "grey",
    cursor: "pointer",
    "@media (max-width: 950px)": { fontSize: "14px" },
  },
  navigate: {
    fontSize: "18px",
    fontWeight: 500,
    color: "#24527a",
    "@media (max-width: 950px)": { fontSize: "14px" },
  },
});

function Login() {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <div className={classes.container}>
        <div className={classes.left}>
          <img
            className={classes.avatar}
            src="assets/img_avatar.png"
            alt="avatar"
          />
        </div>
        <div className={classes.right}>
          <h1 className={classes.loginTitle}>User Login</h1>
          <form className={classes.form}>
            <input
              className={classes.input}
              placeholder="Email"
              type="email"
            ></input>
            <br />
            <input
              className={classes.input}
              placeholder="Password"
              type="password"
            ></input>
            <input
              className={classes.inputSubmit}
              value="Login"
              type="submit"
            ></input>
          </form>
          <p className={classes.forgot}>Forgot Username / Password?</p>
          <p className={classes.navigate}>
            Have no account yet? <Link to="/createaccount">Create account</Link>{" "}
            here.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
