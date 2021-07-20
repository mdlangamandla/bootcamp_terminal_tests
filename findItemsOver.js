module.exports = (list2, threshold2)=> {
    var newThreshold = [];
  
  for (var i = 0; i < list2.length; i++) {
     var newArr = list2[i];
    
     if (newArr.qty > threshold2) {
        newThreshold.push(newArr); 
     }
  }
  return newThreshold;
};