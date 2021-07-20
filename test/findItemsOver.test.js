let assert = require("assert");
let findItemsOver = require("../findItemsOver");

describe('The findItemsOver function', ()=>{

    it('Should return products with quantity higher than threshold.', ()=>{
        
        assert.deepEqual([{"name":"oranges","qty":37},{"name":"cakes","qty":33},{"name":"chocolates","qty":43},{"name":"peaches","qty":33}], findItemsOver([{"name":"apples","qty":10},{"name":"oranges","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":3},{"name":"cakes","qty":33},{"name":"chocolates","qty":43},{"name":"peaches","qty":33}], 30));
    });
    
    it('Should return products with quantity higher than threshold.', ()=>{
        
        assert.deepEqual([{"name":"pears","qty":37},{"name":"bananas","qty":27}], findItemsOver([{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":3}], 20));
    });

   

});