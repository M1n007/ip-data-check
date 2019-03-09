#  ip-data-check 1.0.1

you can get data detail of ip like region, city, post code and more

## Installation

Use the npm  to install ip-data-check.

```javascript
npm i ip-data-check
```

## Usage

```javascript
const ip = require("ip-data-check");

const iplist = ["158.58.197.227"]; //you can add multiple ip

ip(iplist).then(res => console.log(res));

```

```
EXAMPLE RESPONSE

[ { ip: '158.58.197.227',
    city: 'Sofia',
    region: 'Sofia-Capital',
    region_code: '22',
    country: 'BG',
    country_name: 'Bulgaria',
    continent_code: 'EU',
    in_eu: true,
    postal: '1000',
    latitude: 42.683,
    longitude: 23.3175,
    timezone: 'Europe/Sofia',
    utc_offset: '+0200',
    country_calling_code: '+359',
    currency: 'BGN',
    languages: 'bg,tr-BG,rom',
    asn: 'AS43205',
    org: 'Bulsatcom EAD' } ]
 ```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)