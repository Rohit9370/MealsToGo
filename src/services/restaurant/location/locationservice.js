import camelize from "camelize";
import { location } from "./location.mock";

// Corrected LocationRequest function
export const LocationRequest = (searchTerm) => {
  const locationMock = location[searchTerm.toLowerCase()] // Use lowercase to match keys
  return new Promise((resolve, reject) => {
    if (!locationMock) {
      reject("not found");
    }
    resolve(locationMock);
  });
};

// Corrected LocationTransfrom function
export const LocationTransform = (results) => {
  const { geometry = {} } = camelize(results.result)[0]; // camelize result directly
  const { lng, lat} = geometry.location;
  return { lng, lat,viewport:geometry.viewport};
};

