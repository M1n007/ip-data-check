const fetch = require("node-fetch");

module.exports = async ip => {
  const dataIP = [];

  for (i in ip) {
    await fetch("https://ipapi.co/" + ip[i] + "/json/")
      .then(res => res.json())
      .then(data => {
        dataIP.push(data);
      });
  }

  return dataIP;
};
