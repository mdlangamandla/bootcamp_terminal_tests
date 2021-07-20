let assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe('The yearsAgo function', ()=>{
    
    it('Should return the number of years ago.',()=>{
        
        assert.equal(11, yearsAgo(2010));
    });

    it('Should return the number of years ago.',()=>{
        
        assert.equal(26, yearsAgo(1995));
    });

});