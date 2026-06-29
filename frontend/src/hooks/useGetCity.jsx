import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentCity,
  setCurrentAddress,
  setCurrentState,
} from "../redux/userSlice";

function useGetCity() {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);
  const apikey = import.meta.env.VITE_GEOAPIKEY;
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const result = await axios.get(
        `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&format=json&apiKey=${apikey}`,
      );
      dispatch(setCurrentCity(result?.data?.results[0].city));
      dispatch(setCurrentState(result?.data?.results[0].state));
      dispatch(
        setCurrentAddress(
          result?.data?.results[0].address_line2 || address_line1,
        ),
      );
    });
  }, [userData]);
}

export default useGetCity;
