module.exports = (date)=> {
    var today = new Date();
    var thisYear = today.getFullYear();
    
    var nD = new Date(date);
    
    return thisYear - nD;
};