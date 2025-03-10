const { DateTime } = require("luxon");

/* Useful Functions (from API Documentation)

DateTime obj = {
                    year: number, 
                    month: number (1-12), 
                    day: number (1-31), 
                    hour: number (0-23), 
                    minute: number (0-59)
                }

.now() -- Create a DateTime for the current instant, in the system's time zone

.fromObject(obj) -- Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults

.toFormat(str) -- format date according to custom string input

.toLocaleString(DateTime.DATE_MED) -- "[Month] [Day #], [Year]" format

.toLocaleString(DateTime.DATETIME_FULL) -- "[Day] [Month] [Day #], [Year] at [Time] [Time Zone]" format

.plus(obj) -- adds parameters in obj to date

.minus(obj) -- subtracts parameters in obj to date

.setZone(str) -- converts time zone of DateTime obj
        multiple ways to format: 
        - "Region/City" such as "America/New York" or "Europe/Paris"
        - "code" such as "UTC-7" or "UTC-9"

Note: You can also compare dates!
dt1 > dt2
dt1 == dt2
...

*/
