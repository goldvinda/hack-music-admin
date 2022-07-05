import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../Redux/userSlice";
import { useEffect } from "react";

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(logoutUser());

    return () => {
      navigate("/");
    };
  }, []);

  return <></>;
}

export default Logout;
