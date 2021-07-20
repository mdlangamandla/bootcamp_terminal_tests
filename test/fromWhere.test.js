let assert = require("assert");
let fromWhere = require("../fromWhere");

describe('The fromWhere function', ()=>{

    it('Should return Cape Town.', ()=>{
        
        assert.equal('Cape Town', fromWhere('CA'));
    });
    
    it('Should return Bellville.', ()=>{
        
        assert.equal('Bellville', fromWhere('CY'));
    });

    it('Should return Paarl.', ()=>{
        
        assert.equal('Paarl', fromWhere('CJ'));
    });
 

    it('Should return Some other place.', ()=>{
        
        assert.equal('Some other place!', fromWhere('MP'));
    });

});