// 定义底部栏的表示
class Bottom {
    // 用来记录score level
     score: number = 0;
     level: number = 0;
    private maxLevel: number = 10;
    private levelUp: number = 5;
    scoreEle: HTMLElement;
    levelEle: HTMLElement;
    constructor(maxLevel: number = 10, levelUp: number = 1) {
        this.scoreEle = document.getElementById("score")!;
        this.levelEle = document.getElementById("level")!;
        this.maxLevel = maxLevel;
        this.levelUp = levelUp;
    }
    // 设置分数增加的方法
    addScore() {
        this.score++;
        this.scoreEle.innerHTML = this.score + '';
        // 判断分数是多少
        if (this.score % this.levelUp === 0) {
            this.addLevel()
        }
    }
    //提升等级
    addLevel() {
        if (this.level < this.maxLevel) {
            this.level++;
            this.levelEle.innerHTML = this.level + '';
        }
    }
}
export default Bottom;
// const scorePanel = new bottom()
// for (let i = 0; i < 11; i++) {
//     scorePanel.addScore()
// }