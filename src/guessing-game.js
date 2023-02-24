class GuessingGame {
    constructor() {
        this.solution=undefined;
        this.min=0;
        this.max=0;
    }
    
    setRange(min, max) {
        this.min=min;
        this.max=max;
    }

    guess() {
       this.solution=Math.round((this.min + this.max) / 2);
        return this.solution;
    }

    lower() {
        this.max=this.solution;
        this.solution=Math.round((this.min + this.max) / 2);
        return this.solution;
    }

    greater() {
        this.min=this.solution;
        this.solution=Math.round((this.min + this.max) / 2);
        return this.solution;
    }
}

module.exports = GuessingGame;
