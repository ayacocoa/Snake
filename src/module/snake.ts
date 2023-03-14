class Snake {
    // 蛇头元素
    head: HTMLElement;
    // 蛇的身体（包括蛇头）
    bodies: HTMLCollection;
    element: HTMLElement;
    constructor() {
        this.head = document.querySelector('#snake > div')!;
        this.element = document.getElementById('snake')!;
        this.bodies = this.element.getElementsByTagName('div');

    }
    //获取蛇头坐标
    get X() {
        return this.head.offsetLeft;
    }
    get Y() {
        return this.head.offsetTop;
    }

    //设置蛇头坐标
    set X(value: number) {
        if (this.X === value)
            return;
        if (value < 0 || value > 290) {
            throw new Error('蛇撞墙了')
        }
        // 检查不能掉头
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            if (value > this.X) {
                //说明向右走
                value = this.X - 10;
            } else {
                value = this.X + 10;
            }
        }
        this.moveBody();
        this.head.style.left = value + 'px';
        this.checkHeadBody();
    }
    set Y(value: number) {
        if (this.Y === value)
            return;
        if (value < 0 || value > 290) {
            throw new Error('蛇撞墙了')
        }
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            if (value > this.Y) {
                value = this.Y - 10;
            } else {
                value = this.Y + 10;
            }
        }
        this.moveBody();
        this.head.style.top = value + 'px'
        this.checkHeadBody();
    }

    //蛇增加身体
    addBody() {
        // 想element中加入一个div
        this.element.insertAdjacentHTML("beforeend", "<div></div>")
    }
    // 设置蛇身体的移动 从后往前改
    moveBody() {
        // 遍历
        for (let i = this.bodies.length - 1; i > 0; i--) {
            let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';

        }

    }
    // 检查头与身体是否相撞
    checkHeadBody() {
        //获取所有身体
        for (let i = 1; i < this.bodies.length; i++){
            let bd = this.bodies[i] as HTMLElement;
            if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
                throw new Error('撞到自己')
            }
        }
    }
}
export default Snake;