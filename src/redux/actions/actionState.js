import axios from "axios";

export const Register = ({ name, email, password }) => async (dispatch) => {
    try {
        const res = await axios.post(
            "https://cors-anywhere.herokuapp.com/https://july-monthly-test.herokuapp.com/user/register",
            {
                name: name,
                email: email,
                password: password,
            }
        );
        dispatch({ type: "Register", payload: res.data.user });
    } catch (error) {}
};

export const Login = ({ email, password }) => async (dispatch) => {
    try {
        const res = await axios.post(
            "https://cors-anywhere.herokuapp.com/https://july-monthly-test.herokuapp.com/user/login",
            {
                email: email,
                password: password,
            }
        );
        dispatch({ type: "Login", payload: res.data.token });
    } catch (error) {}
};

export const getImages = () => async (dispatch) => {
    try {
        const res = await axios(
            "https://cors-anywhere.herokuapp.com/https://july-monthly-test.herokuapp.com/property"
        );
        dispatch({ type: "Images", payload: res.data });
    } catch (error) {
        console.log(error);
    }
};

export const Logout = (token) => async (dispatch) => {
    try {
        const config = {
            headers: {
                Authorization: token,
                "Content-Type": "application/json",
            },
        };
        console.log(token);
        const data = await axios.post(
            "https://cors-anywhere.herokuapp.com/https://july-monthly-test.herokuapp.com/user/logout",
            null,
            config
        );

        dispatch({ type: "LOG_OUT", payload: data.data.status });
        console.log(data.data);
    } catch (error) {
        console.log(error.message);
    }
};
