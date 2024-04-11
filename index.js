// Your code here
class Polygon{
    constructor(sides){
        this.sides = sides

    }

    get countSides(){
        return this.sides.length

    }

    get perimeter(){
        return this.sides.reduce((sum, side)=>sum+side, 0)

    }
}
class Triangle extends Polygon {
    constructor(sides){
        super(sides)
    }
    get isValid(){
        const [l, w, h] = this.sides;
        return l + w > h && l + h > w && w + h > l

    }
}
class Square extends Polygon {
    constructor(sides){
        super(sides)
    }
    get isValid(){
        return this.sides.every(side =>side === this.sides[0])
    }
    get area(){
        return this.sides[0] * this.sides[0]
        
    }
}