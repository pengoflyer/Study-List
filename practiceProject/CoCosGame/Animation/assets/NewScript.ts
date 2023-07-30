
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        let ani = this.getComponent(cc.Animation)
        // 播放动画
        ani.play("run")
        ani.pause()
        ani.resume()
        ani.stop()
    }

    update (dt) {}

    custom() {
        console.log("被调用了")
    }
}
