let assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe('The isFromBellville function', ()=>{
    
    it('Should return true if registration number starts with CY.', ()=>{
        
        assert.equal(true, isFromBellville('CY 852 369'));
    });

    it('Should return false if registration number does not starts with CY.', ()=>{
        
        assert.equal(false, isFromBellville('CA 789 654'));
    });

});