import React from "react";
import mockHome from "./mockNewcastle/newcastleHome";
import mockNew from "./mockNewcastle/newcastleNew";
import mockTop from "./mockNewcastle/newcastleTop";


const testing = false;

let Reddit = {}

if (testing) {
  Reddit = {
    fetch: (feedTarget) => {
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
} else {
    Reddit = {
      fetch: (feedTarget) => {
        const realHome =  fetch(`https://www.reddit.com/${feedTarget}.json`)
        .then(response => response.json())
        .then((jsonResponse) => {return jsonResponse})
        return realHome 
    }
  }
}



export {Reddit}