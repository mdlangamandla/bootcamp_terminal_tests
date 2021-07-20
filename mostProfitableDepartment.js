module.exports = function (list) {
    var obj = {};
    var mostSales = 0;
    var mostDep = undefined;
    
    for (var i = 0; i < list.length; i++) {
       var arr = list[i];
       var sales = arr.sales;
       var dep = arr.department;
       
       if (obj[dep] === undefined) {
          obj[dep] = 0;  
       } 
        obj[dep] += sales;    
    }
    
    for (const depName in obj) {
       if (obj[depName] > mostSales) {
         mostSales = obj[depName];
         mostDep = depName;
       }
      }
   return mostDep;
};