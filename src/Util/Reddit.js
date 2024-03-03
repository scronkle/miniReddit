import React from "react";
import mockData from "./newcastle";


const Reddit = {
  home: () => {
    return fetch("https://www.reddit.com/r/newcastle/top.json")
    .then(response => response.json())
    .then(jsonResponse => console.log(jsonResponse))
  },
  mockFetch: () => {
    return mockData
  }
}

export {Reddit}