//引入样式
import './style/index.less'

//定义food
class food {
    // 定义一个属性表示对应的元素
    element: HTMLElement
    constructor() {
        //获取页面中的food元素并赋值给element
        this.element = document.getElementById('food')!;
    }
    // 定义一个获取食物坐标的方法
    get X() {
        return this.element.offsetLeft;
    }
    get Y() {
        return this.element.offsetTop;
    }
    // 修改食物位置
    change() {
        //生成随机位置
        //要求食物坐标位10的倍数
        let change_left = Math.round(Math.random() * 29) * 10;
        let change_top = Math.round(Math.random() * 29) * 10;

        this.element.style.left = change_left + 'px';
        this.element.style.top = change_top + "px";

    }
}

// 定义底部栏的表示
class bottom {
    // 用来记录score level
    private score: number = 0;
    private level: number = 0;
    scoreEle: HTMLElement;
    levelEle: HTMLElement;
    constructor() {
        this.scoreEle = document.getElementById("score")!;
        this.levelEle = document.getElementById("level")!;
    }
    // 设置分数增加的方法
    addScore() {
        this.score++;
        this.scoreEle.innerHTML = this.score + '';
        // 判断分数是多少
        if (this.score % 10 === 0) {
            this.addLevel()
        }
    }
    //提升等级
    addLevel() {
        if (this.level < 10) {
            this.level++;
            this.levelEle.innerHTML = this.level + '';
        }
    }
}
