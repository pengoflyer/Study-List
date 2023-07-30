
const {ccclass, property} = cc._decorator;

@ccclass
export default class EnemyControl extends cc.Component {
    isDie: boolean = false
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
    }

    update (dt) {
        // 移动
        if (!this.isDie) {
            this.node.y -= 300*dt
        }
       
        if (this.node.y < -720) {
            this.node.destroy()
        }
    }

    // 死亡
    die() {
        this.isDie = true

        this.playBoomMusic()

        // 动态加载爆炸图片，并替换当前图片为爆炸图片
        cc.loader.loadRes('emney_boom', cc.SpriteFrame, (err, res) => {
            this.node.getComponent(cc.Sprite).spriteFrame = res
        })

        
        // 300毫秒后销毁
        setTimeout(() => {
            this.node.destroy()
        }, 300);
    }

    playBoomMusic() {
        cc.loader.loadRes("enemy_plane_boom", cc.AudioClip, (res, clip) => {
            // 播放
            let audioId: number = cc.audioEngine.playEffect(clip, false)
            // // 是否正在播放
            // cc.audioEngine.isMusicPlaying()
            // // 暂定
            // cc.audioEngine.stop(audioId)
            // // 恢复
            // cc.audioEngine.resume(audioId)
            // // 停止
            // cc.audioEngine.stop(audioId)
            // // 循环
            cc.audioEngine.setLoop(audioId, false)
            // // 声音大小
            cc.audioEngine.setVolume(audioId, 1)
        })
    }
}
