let assert = require("assert");
let transportFee = require("../transportFee");

describe('The transportFee function',()=>{
    
    it('Should return transport fee for morning shift.',()=>{
        
        assert.equal('R20', transportFee('morning'));
    });

    it('Should return transport fee for afternoon shift.', ()=>{
        
        assert.equal("R10", transportFee('afternoon'));
    });

    it('Should return transport fee for nightshift.', ()=>{
        
        assert.equal("free", transportFee('nightshift'));
    });

});