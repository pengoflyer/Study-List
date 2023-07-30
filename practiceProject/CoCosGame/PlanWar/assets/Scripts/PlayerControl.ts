
const {ccclass, property} = cc._decorator;

@ccclass
export default class PlayerControl extends cc.Component {
    @property(cc.Prefab)
    bulletPre: cc.Prefab = null // 子弹预设体

    // onLoad () {}

    start () {
        // 移动
        this.node.on(cc.Node.EventType.TOUCH_MOVE, (event) => {
            // 跟随
            this.node.setPosition(event.getLocation())
        })

        // 攻击 计时器
        this.schedule(() => {
            // 创建子弹
            let bullet = cc.instantiate(this.bulletPre)
            // 设置父物体
            bullet.setParent(cc.director.getScene())
            // 设置子弹初始位置
            bullet.x = this.node.x
            bullet.y = this.node.y + 35
            
        }, 0.5)
        
        // 开起碰撞检测
        cc.director.getCollisionManager().enabled = true
    }

    update (dt) {
        
    }

    onCollisionEnter(other) {
        if (other.tag == 1) {
            cc.loader.loadRes('plane_boom', cc.SpriteFrame, (err, res)=> {
                this.node.getComponent(cc.Sprite).spriteFrame = res

                setTimeout(() => {
                    this.node.destroy()
                }, 300);
            })
            
        }
    }
}
