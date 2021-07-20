module.exports = (act)=> {
  
    var arr = act.split(",");
    var callArr = [];
    var smsArr = [];
    
    for (var i = 0; i < arr.length; i++) {
      var newArr = arr[i];
      var split = newArr.trim();
      if (split.startsWith("call")) {
        callArr.push(split);
      } else if (split.startsWith("sms")) {
        smsArr.push(split);
        console.log(smsArr);
      }
      
    }
    var newCallArr = callArr.length;
    var newSmsArr = smsArr.length;
    var r = "R";
    
    var total = newCallArr * 2.75 + newSmsArr * 0.65;
    var grandTotal = r + total.toFixed(2);
    return grandTotal;
};