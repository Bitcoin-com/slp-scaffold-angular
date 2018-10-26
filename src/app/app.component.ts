import { Component } from "@angular/core";
let SLPSDK = require("slp-sdk/lib/SLP").default;
let SLP = new SLPSDK();
(async () => {
  try {
    let list = await SLP.list();
    console.log(list);
  } catch (error) {
    console.error(error);
  }
})();
