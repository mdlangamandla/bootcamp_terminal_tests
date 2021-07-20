let assert = require("assert");
let isWeekday = require("../isWeekday");

describe('The isWeekDay function', ()=>{
    
    it('Should return true if a day falls in week day.', ()=>{
        
        assert.equal(true, isWeekday('Monday'));
    });

    it('Should return false if a day does not fall in week day.', ()=>{
        
        assert.equal(false, isWeekday('Saturday'));
    });

});