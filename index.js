const address = require('./src/formatAddress.js');
const structuredAddress = {
    "postcode":"s1 4up",
    "posttown":"SALISBURY"
}
for(i=0;i<100;i++){
    address.format(structuredAddress)
}
