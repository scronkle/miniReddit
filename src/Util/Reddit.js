import React from "react";
import mockHome from "./mockData/newcastleHome";
import mockNew from "./mockData/newcastleNew";
import mockTop from "./mockData/newcastleTop";


const Reddit = {
  home: () => {
    return fetch("https://www.reddit.com/r/newcastle/top.json")
    .then(response => response.json())
    .then(jsonResponse => console.log(jsonResponse))
  },
  mockFetch: (feedTarget) => {
    switch (feedTarget) {
      case "home":
        return mockHome
      case "top":
        return mockTop
      case "new":
        return mockNew
    }
    
  }
}

export {Reddit}