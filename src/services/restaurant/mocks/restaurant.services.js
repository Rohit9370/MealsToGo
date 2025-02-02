import { mockImages, mocks } from ".";
import camelize from "camelize";

// Function to request restaurant data based on location
export const restaurantRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const locationMocks = mocks[location];
    if (!locationMocks) {
      reject("not found");
    }
    resolve(locationMocks);
  });
};

// Function to transform restaurant results
export const restaurantsTransform = ({ results = [] }) => {
const mappedResult = results.map((restaurant) => {
    restaurant.photos=restaurant.photos.map((p)=>{
      return mockImages[Math.ceil(Math.random()*(mockImages.length-1))]
    }
    )
    return {
      ...restaurant,//here we are spread of the things
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
      address:restaurant.vicinity

    };
  });
  return camelize(mappedResult); // Return the mapped result
};

// Calling the restaurantRequest function and transforming the results
restaurantRequest()
  .then(restaurantsTransform)
  .then((transfromResponse) => {
    return transfromResponse;
  })
  .catch((err) => {
    console.log(err);
  });
