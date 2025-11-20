// هنعمل كلاس

export default class Quiz {
    constructor(category , level ,number) {
        this.category = category;
        this.level=level;
        this.number=number;
        this.score = 0
    }


    // api
    async getQuiz(){
        const response = await fetch(`https://opentdb.com/api.php?amount=${this.number}&category=${this.category}&difficulty=${this.level}`)
        const data= await response.json()
        return data.results

        
        
    }
}