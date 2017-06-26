const MySportsFeed    = require("mysportsfeeds-node");
const msf             = new MySportsFeed("1.0", true);

msf.authenticate("mg.perkins14", "mg.perk14");
msf.app = msf;
module.exports = msf;