import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import RegisterPage from "./pages/Auth/Register";
import LoginPage from "./pages/Auth/Login";
import Home from "./pages/Home/Home";
import { useLazyGetProfileQuery } from "./app/services/authApi";
import { addProfile } from "./app/feature/appSlice";

const App = () => {
  const dispatch = useDispatch();
  const [lor, setLor] = useState(false);

  // ✅ Fetch token & profile from Redux store
  const token = useSelector((state) => state.app.token);
  const profile = useSelector((state) => state.app.profile);
  const role = profile?.role || "";

  // ✅ Fetch profile from API
  const [getProfile, { data: fetchedProfile, isSuccess, isFetching }] =
    useLazyGetProfileQuery();

  // ✅ Fetch profile when token exists but profile is missing
  useEffect(() => {
    if (token && !profile?.userId) {
      getProfile();
    }
  }, [token, getProfile, profile]);

  // ✅ Update Redux store when profile is fetched
  useEffect(() => {
    if (isSuccess && fetchedProfile) {
      dispatch(addProfile(fetchedProfile));
    }
  }, [isSuccess, fetchedProfile, dispatch]);

  // ✅ Show a loading state to prevent unwanted redirects
  if (token && !profile?.userId && isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {token && profile?.userId ? (
        <Home role={role} />
      ) : lor ? (
        <LoginPage setLor={setLor} />
      ) : (
        <RegisterPage setLor={setLor} />
      )}
    </div>
  );
};

export default App;
