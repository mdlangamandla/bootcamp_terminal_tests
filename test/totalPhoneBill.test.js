let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");

describe('The totalPhoneBill function', ()=>{
    
    it('Should return the total phone bill.', ()=>{
        
        assert.equal('R10.20', totalPhoneBill('call,call,call,sms, sms, sms'));
    });

    it('Should return the total phone bill.', ()=>{
        
        assert.equal('R13.60', totalPhoneBill('call,call,call,call, sms, sms, sms, sms'));
    });

});