"use strict";
var timeago = function(unix_timestamp) {
  var now = Math.round((new Date()).getTime() / 1000),
      minute_seconds = 60,
      hour_seconds = 3600,
      day_seconds = 86400,
      month_second = 2592000,
      year_second = 31536000,
      difference_in_seconds = now - unix_timestamp;
  if (difference_in_seconds >= 0) {
    if (difference_in_seconds < minute_seconds) {
      return "刚刚";
    } else if (difference_in_seconds < hour_seconds) {
      return Math.floor(difference_in_seconds / minute_seconds) + "分钟前";
    } else if (difference_in_seconds < day_seconds) {
      return Math.floor(difference_in_seconds / hour_seconds) + "小时前";
    } else if (difference_in_seconds < month_second) {
      return Math.floor(difference_in_seconds / day_seconds)+ "天前";
    } else if (difference_in_seconds < year_second) {
      return Math.floor(difference_in_seconds / month_second) + "月前";
    } else {
      return Math.floor(difference_in_seconds / year_second)+ "年前";
    }
  }
  else {
    difference_in_seconds = Math.abs(difference_in_seconds);
    if (difference_in_seconds < minute_seconds) {
      return "马上";
    } else if (difference_in_seconds < hour_seconds) {
      return Math.floor(difference_in_seconds / minute_seconds) + "分钟内";
    } else if (difference_in_seconds < day_seconds) {
      return Math.floor(difference_in_seconds / hour_seconds) + "小时内";
    } else if (difference_in_seconds < month_second) {
      return Math.floor(difference_in_seconds / day_seconds) + "天内";
    } else if (difference_in_seconds < year_second) {
      return Math.floor(difference_in_seconds / month_second) + "月内";
    } else {
      return Math.floor(difference_in_seconds / year_second) + "年内";
    }
  }
  return difference_in_seconds;
}
exports.timeago = timeago;