"use strict";
/**
 * @author peizhao
 */
var timeago = require('./timeago');
console.log(timeago.timeago(Date.parse("21-Dec-2015 11:59:35") / 1000));
console.log(timeago.timeago(Date.parse("21-Dec-2015 14:59:35") / 1000));
console.log(timeago.timeago(Date.parse("19-Nov-2015 11:59:35") / 1000));
console.log(timeago.timeago(Date.parse("19-Nov-2013 11:59:35") / 1000));
console.log(timeago.timeago(Date.parse("19-Nov-2017 11:59:35") / 1000));
console.log(timeago.timeago(Date.parse("25-Dec-2015 11:59:35") / 1000));
console.log(timeago.timeago(Date.parse("19-Jan-2016 11:59:35") / 1000));
console.log(timeago.timeago(Date.parse("21-Dec-2015 11:59:35") / 1000));
console.log(timeago.timeago(Date.parse("20-Dec-2015 15:59:35") / 1000));
console.log(timeago.timeago(Date.parse("19-Nov-2015 11:59:35") / 1000));
console.log(timeago.timeago(Date.parse("17-Nov-2015 11:59:35") / 1000));
console.log(timeago.timeago(Date.parse("21-Dec-2015 14:58:35") / 1000));
