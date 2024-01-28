import { setCoordinates } from "./userSlice";
import { useDispatch } from "react-redux";
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};
function success(pos) {
  const dispatch = useDispatch();
  const crd = pos.coords;

  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  dispatch(setCoordinates({ lat: crd.latitude, lng: crd.longitude }));
}
function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
export default getCoordinates = () => {
  navigator.geolocation.getCurrentPosition(success, error, options);
};
