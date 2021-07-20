let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");

describe('The countAllFromTown function', ()=>{
    
    it('Should return the number of registration numbers of given town.', ()=>{
        
        assert.equal(3, countAllFromTown('CJ 124,CF 258,CY 567,CF 321,CL 345, CF 456, CL 341', 'CF'));
        
    });

    it('Should return the number of registration numbers of given town.', ()=>{
        
        assert.equal(2, countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341', 'CL'));
        
    });

});