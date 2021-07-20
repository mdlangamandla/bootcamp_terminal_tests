let assert = require("assert");
let regCheck = require("../regCheck");

describe('The regCheck function', ()=>{
    

    it('Should return false if location indicator does not refer to registration number.', ()=>{
        
        assert.equal(false, regCheck('DC 55 YU CA', 'GP'));
    });
    
    it('Should return true if location indicator refers to registration number.', ()=>{
        
        assert.equal(true, regCheck('DC 55 YU GP', 'GP'));
    });



});