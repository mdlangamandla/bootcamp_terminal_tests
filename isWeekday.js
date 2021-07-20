module.exports = (weekDay)=> {
    return weekDay.startsWith("Mon") || weekDay.startsWith("Tue") || weekDay.startsWith("Wedn") || weekDay.startsWith("Thur") || weekDay.startsWith("Fri");
};