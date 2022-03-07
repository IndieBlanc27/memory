import {expect} from 'chai'
import mocha from 'mocha'
import {memory} from "./memory.js"

describe("Memory Game", function(){
    it("The two cards are same", function(){
        let result = memory("image5.jpeg", "image5.jpeg")
        expect(result).to.equal(true);
    })

    it("The two cards aren't same", function(){
        let result = memory("image5.jpeg", "image1.jpeg")
        expect(result).to.equal(false);
    })
})