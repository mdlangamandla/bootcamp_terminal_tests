module.exports = (rNumber)=> {
    if (rNumber.startsWith("CY")) {
      return "Bellville";
    } else if (rNumber.startsWith("CJ")) {
      return "Paarl";
    } else if (rNumber.startsWith("CA")) {
      return "Cape Town";
    } else {
      return "Some other place!";
    }
};