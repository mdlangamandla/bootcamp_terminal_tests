module.exports = (list1)=> {
    var threshold = 20;
    var over20 = [];
    
    for (var i = 0; i < list1.length; i++) {
       var arr = list1[i];
      
       if (arr.qty > threshold) {
          over20.push(arr); 
       }
    }
    return over20;
};