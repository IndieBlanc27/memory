import { createGrid } from "../main/grid.js";
import chai from 'chai'
const expect = chai.expect

describe("Memory Grid",()=>{
    it("must contain cards",()=>{
        const grid = createGrid(null)
        expect(grid).to.not.be.null
        const card = grid[4][2]
        expect(card).to.not.be.null
        expect(card.visible).to.be.false
        expect(card.face).to.not.be.empty
        expect(card.face).to.eql('back')
    })
})
