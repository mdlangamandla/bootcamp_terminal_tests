let assert = require("assert");
let countRegNumber = require("../countRegNumber");

describe('The countRegNumber function', ()=>{
    
    it('Should return the number of registration numbers in given string.', ()=>{
        
        assert.equal(3, countRegNumber('CA 182736,CY 523519,CJ 812328'));
    });

    it('Should return the number of registration numbers in given string.', ()=>{
        
        assert.equal(4, countRegNumber('CA 42665,AA 12 RT GP, CY 8574132, CJ 765432'));
    });

});