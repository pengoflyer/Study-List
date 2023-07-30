
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    map: cc.TiledMap
    player: cc.Node = null

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        // 获取地图信息
        this.map = this.getComponent(cc.TiledMap)

        // 普通层
        // this.map.getLayer()
        // 对象曾
        let playerLayer = this.map.getObjectGroup('player')
        // 获取某个对象
        let playerObj = playerLayer.getObject("startpos")
        console.log(playerObj)
        // 判断是否是玩家对象
        if (playerObj.isPlay != true) {
            // 加载玩家预设体
            cc.loader.loadRes('player', cc.Prefab, (res, playerPre) => {
                // 创建玩家
                this.player = cc.instantiate(playerPre)
                this.player.setParent(this.node.children[2].children[0])
                this.player.x = playerObj.x
                this.player.y = playerObj.y
            })

        }
    }

    update (dt) {
        // 摄像头跟随玩家
        if (this.player != null) {
            cc.Camera.main.node.x = this.player.x - 240
            cc.Camera.main.node.y = this.player.y - 160
        }
    }
}
