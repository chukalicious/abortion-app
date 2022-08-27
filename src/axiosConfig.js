export const config = {
  headers: {
    token: process.env.REACT_APP_API_KEY,
    "Access-Control-Allow-Origin": "*",
  },
};

export const baseUrl = "https://api.abortionpolicyapi.com/v1/";
export const insuranceEndpoint = "insurance_coverage/states/";
export const minorsEndpoint = "minors/states/";
export const statesEndpoint = "states/";
