import { mocks } from ".";
import camelize from "camelize";


export const restaurantRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve,reject)=>
{
const locationmocks = mocks[location];
if(!locationmocks) reject("not found");
resolve(locationmocks)
});
};
export const transfromresult=(result)=>
{
    const newResult=camelize(result);
    return newResult;
}
restaurantRequest().then(transfromresult).then((transfromresult)=>
  { 
     return transfromresult;
  }
)
.catch((err)=>
{
    console.log(err);
})
  
