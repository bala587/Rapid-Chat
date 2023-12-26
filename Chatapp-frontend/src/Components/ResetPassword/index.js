import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import './reset.css';

const ResetPassword = () => {
  const [userData, setUserData] = useState({
    userId: "",
    token: "",
    password: "",
  });
  const navigate = useNavigate();
  const search = useLocation().search;
  const token = new URLSearchParams(search).get("token");
  const userId = new URLSearchParams(search).get("id");

  useEffect(() => {
    setUserData({ ...userData, userId: userId, token: token });
  }, []);

  const handleLogin = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/resetPassword`,
        userData,
        { withCredentials: true }
      );
      if (response) {
        navigate("/login");
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div>
      <h3 id="rs">Reset Password</h3>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={userData.password}
            placeholder="Password"
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Reset
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
