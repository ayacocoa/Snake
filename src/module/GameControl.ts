//游戏控制
import Food from './food'
import Bottom from './bottom';
import Snake from './snake'

class GameControl {
    snake: Snake;
    food: Food;
    bottom: Bottom;
    //创建一个属性，来储存蛇的移动方向
    direction: string = '';
    // 游戏是否结束
    isLive = true;
    constructor() {
        this.bottom = new Bottom();
        this.food = new Food();
        this.snake = new Snake();
        this.init();
    }

    //游戏初始化，调用游戏即开始
    init() {
        // 绑定按键事件
        document.addEventListener('keydown', this.keydownHandler.bind(this))
        this.run();
    }

    // 创建键盘按下的函数
    keydownHandler(event: KeyboardEvent) {
        //检查按键是否合法
        //修改direction属性
        this.direction = event.key;

    }
    //让蛇移动
    run() {
        //根据this.direction控制蛇的改变
        let X = this.snake.X;
        let Y = this.snake.Y;
        //根据按键方向修改方向
        switch (this.direction) {
            case "ArrowUp":
                //向上移动
                Y -= 10;
                break;
            case "ArrowDown":
                //向下移动
                Y += 10;
                break;
            case "ArrowLeft":
                //向左移动
                X -= 10;
                break;
            case "ArrowRight":
                //向右移动
                X += 10;
                break;
        }
        //修改蛇的方向
        this.snake.X = X;
        this.snake.Y = Y;
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.bottom.level) * 30);

    }

}
export default GameControl