/*

富文本：

<on click="test">点击</on>
<color=#ff00ff>颜色</color>
<size=60>大字号</size>
<i>斜体</i>
<u>下划线</u>
<outline color=red>描边</outline>

// 增加图集
<img src=""plane_boom" click="test"/>boom

*/
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        
    }

    // update (dt) {}

    test() {
        console.log("click test...")
    }
}
