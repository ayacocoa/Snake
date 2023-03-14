//定义food
class Food {
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
export default Food;
