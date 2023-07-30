
const {ccclass, property} = cc._decorator;

@ccclass
export default class BgControl extends cc.Component {
    // onLoad () {}

    start () {
        this.loadMusic()
    }

    // 音频播放
    loadMusic() {
        let player: cc.AudioSource = this.getComponent(cc.AudioSource)
        cc.loader.loadRes("plan", cc.AudioClip, (res, clip) => {
            // 赋值音频
            player.clip = clip
            player.loop = true
            player.volume = 1

            // 播放
            player.play()
            
            // 是否正在播放
            // player.isPlaying
            // 暂停播放
            // player.pause()
            // 恢复播放
            // player.resume()
            // 停止播放
            // player.stop()
        })
    }

    update (dt) {
        // 移动
        // 遍历子物体（背景）
        for (let bgNode of this.node.children) {
            bgNode.y -= 50*dt
            
            if (bgNode.y < -(bgNode.height-2)) {
                console.log(bgNode.height)
                bgNode.y += 2*bgNode.height
            }
        }
    }
}
