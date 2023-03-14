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
        this.head.style.left = value + 'px'
    }
    set Y(value: number) {
        this.head.style.top = value + 'px'
    }

    //蛇增加身体
    addBody(){
    // 想element中加入一个div
    this.element.insertAdjacentHTML("beforeend","<div></div>")
    }

}
export default Snake;