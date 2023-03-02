import { createUseStyles } from "react-jss";
import { useNavigate } from "react-router";

const useStyles = createUseStyles({
  app: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#7fa99b",
    minHeight: "100vh",
  },
  registrationTitle: {
    color: "#24527a",
    fontSize: "50px",
    textShadow: "3px 4px #a7bcb9",
    "@media (max-width: 720px)": { fontSize: "30px" },
  },
  container: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#e0ebeb",
    borderRadius: "10px",
    height: "650px",
    width: "900px",
    "@media (max-width: 950px)": { width: 400 },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    "@media (max-width: 950px)": { width: 300, display: "block" },
  },
  divContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    "@media (max-width: 950px)": { display: "block" },
  },
  label: {
    display: "block",
    fontSize: 16,
    color: "#385170",
    paddingLeft: 20,
    paddingBottom: 15,
    "@media (max-width: 950px)": { fontSize: 14, paddingBottom: 0 },
  },

  input: {
    height: "40px",
    width: "350px",
    backgroundColor: "#a0c1b8",
    borderRadius: "15px",
    border: "none",
    marginBottom: 30,
    fontSize: "16px",
    color: "#1b335f",
    textAlign: "center",
    "&:focus": {
      outline: "none",
      fontSize: "20px",
      boxShadow: "3px 4px #7fa99b",
      marginBottom: 15,
    },
    "&::placeholder": {
      paddingLeft: 10,
      fontSize: "1.2em",
    },
    "@media (max-width: 950px)": {
      width: 300,
      fontSize: "14px",
      marginBottom: 15,
      textAlign: "center",
    },
  },
  inputEmail: {
    height: "40px",
    width: "750px",
    backgroundColor: "#a0c1b8",
    borderRadius: "15px",
    border: "none",
    marginBottom: 30,
    fontSize: "16px",
    color: "#1b335f",
    textAlign: "center",
    "&:focus": {
      outline: "none",
      fontSize: "20px",
      boxShadow: "3px 4px #7fa99b",
    },
    "&::placeholder": {
      paddingLeft: 10,
      fontSize: "1.2em",
    },
    "@media (max-width: 950px)": {
      width: 300,
      fontSize: "14px",
      marginBottom: 15,
    },
  },
  divEmail: { display: "block", margin: "0 auto" },
  divChoice: {
    width: "350px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  radioLabel: {
    fontSize: 20,
    color: "#385170",
    paddingRight: 30,
    "&:hover": { fontWeight: "bold" },
    "@media (max-width: 950px)": { fontSize: 16 },
  },
  checkLabel: {
    fontSize: 20,
    color: "#385170",
    paddingLeft: 20,
    "@media (max-width: 950px)": { fontSize: 16, paddingLeft: 5 },
  },
  link: {
    fontSize: 18,
    color: "#385170",
    fontWeight: "bold",
    textDecoration: "none",
    paddingLeft: 5,
    paddingRight: 5,
    "@media (max-width: 950px)": { fontSize: 16 },
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
  },
  account: {
    height: "50px",
    backgroundColor: "#5dacbd",
    border: "none",
    borderRadius: "5px",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
    "&:hover": { cursor: "pointer" },
    "@media (max-width: 950px)": { height: "30px", fontSize: 12 },
  },
  login: {
    height: "50px",
    width: 70,
    backgroundColor: "#f95959",
    border: "none",
    borderRadius: "5px",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
    "&:hover": { cursor: "pointer" },
    "@media (max-width: 950px)": { height: "30px", fontSize: 12, width: 50 },
  },
});

function Registration() {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.app}>
      <header>
        <h1 className={classes.registrationTitle}>Registration Form</h1>
      </header>
      <section className={classes.container}>
        <form className={classes.form}>
          <div className={classes.divContainer}>
            <div>
              <label className={classes.label} htmlFor="first_name">
                First name
              </label>
              <input
                className={classes.input}
                type="text"
                id="first_name"
              ></input>
            </div>
            <div>
              {" "}
              <label className={classes.label} htmlFor="last_name">
                Last name
              </label>
              <input
                className={classes.input}
                type="text"
                id="last_name"
              ></input>
            </div>
          </div>
          <div className={classes.divEmail}>
            <label className={classes.label} htmlFor="email">
              Email
            </label>
            <input
              className={classes.inputEmail}
              type="email"
              id="email"
            ></input>
          </div>
          <div className={classes.divContainer}>
            <div>
              <label className={classes.label} htmlFor="userName">
                Username
              </label>
              <input
                className={classes.input}
                type="text"
                id="userName"
              ></input>
            </div>
            <div className={classes.divChoice}>
              <input type="radio" id="male" name="contact" value="male"></input>
              <label htmlFor="male" className={classes.radioLabel}>
                Male
              </label>
              <input
                type="radio"
                id="female"
                name="contact"
                value="female"
              ></input>
              <label htmlFor="female" className={classes.radioLabel}>
                Female
              </label>
            </div>
          </div>

          <div className={classes.divContainer}>
            <div>
              <label className={classes.label} htmlFor="password">
                Password
              </label>
              <input
                className={classes.input}
                type="password"
                id="password"
              ></input>
            </div>
            <div>
              <label className={classes.label} htmlFor="confirm_password">
                Confirm password
              </label>
              <input
                className={classes.input}
                type="password"
                id="confirm_password"
              ></input>
            </div>
          </div>
          <div>
            <input type="checkbox" name="checkbox" value="Bike"></input>
            <label htmlFor="checkbox" className={classes.checkLabel}>
              <span>
                I agree to the
                <a className={classes.link} href="">
                  Terms of Service
                </a>
                and{" "}
                <a className={classes.link} href="">
                  Privacy Policy.
                </a>
              </span>
            </label>
          </div>
          <div className={classes.buttons}>
            <button className={classes.account}>Create Account</button>
            <button
              className={classes.login}
              onClick={() => {
                navigate("/it-teacher-login");
              }}
            >
              Login
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Registration;
