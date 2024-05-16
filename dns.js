const dns = require("dns/promises");

(async () => {
  
  const dnsName = await dns.lookup("www.google.com");
  console.log(dnsName);
  }
) ()
