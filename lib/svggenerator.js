class SVG {
    constructor () {
        this.text = ""
        this.shape = ""
    }
    render(){
        return `<svg height="100%" width="100%" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">	${this.shape} ${this.text} </svg>`
    }

    setText(incomingText,color) {
        this.text = `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${color}">${incomingText}</text>`;
    }
    setShape(incomingShape) {
        this.shape = incomingShape.render();
    }
}
module.exports = { SVG };