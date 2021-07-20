let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");

describe('The countAllPaarl function', ()=>{
    
    let regNo = "CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123";
    let regNo2 = "CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123, CJ 5552, CJ 9334";

    it('Should return number of Paarl registration numbers', ()=>{
        
        assert.equal(3, countAllPaarl(regNo));
        
    });

    it('Should return number of Paarl registration numbers', ()=>{
        
        assert.equal(5, countAllPaarl(regNo2));
        
    });

});