import EnemyControl from "./EnemyControl";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BulletControl extends cc.Component {
    @property
    speed: number = 800;


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    update (dt) {
        // 移动
        this.node.y += this.speed*dt
        // 出屏幕销毁
        if (this.node.y > 720) {
            this.node.destroy()
        }
    }

    
    onCollisionEnter(other) {
        // 如果碰撞到敌机，销毁敌机，再销毁自己
        if (other.tag == 1) {
            // 销毁敌机(通知敌机)
            other.getComponent(EnemyControl).die()
            // 销毁自己
            this.node.destroy()
        }
    }
}
