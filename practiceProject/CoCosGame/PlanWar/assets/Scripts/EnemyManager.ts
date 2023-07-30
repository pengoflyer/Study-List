import BgControl from "./BgControl";

const {ccclass, property} = cc._decorator;

@ccclass
export default class EnemyManager extends cc.Component {
    // 敌机预设体
    @property(cc.Prefab)
    enemyPrefab: cc.Prefab = null

    static maxEnemyCnt: number = 5
    

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {  
        // 每隔2s创建一个敌机
        this.schedule(()=> {
            this.randEnemy()  
        }, 2)
    }

    randEnemy() {
        let xMap: Map<number, number> = new Map<number, number>()
        // 检查有效的x坐标
        let check_vaild_x = function(x: number):Boolean {

            let vaild: boolean = true

            xMap.forEach((val, key)=> {
                if(x >= val-46 && x <= val+46) {
                    vaild = false
                    return 
                }
            })

            return vaild
        }

        for (let i = 0; i < EnemyManager.maxEnemyCnt; i++) {
            let x = Math.random()*380+23
            if (!check_vaild_x(x)) {
                continue
            }

            xMap.set(x, x)  
            let enemy = cc.instantiate(this.enemyPrefab)
            enemy.setParent(cc.director.getScene())
            enemy.y = this.node.y + Math.random()*15
            enemy.x = x     
        } 
    }


    // update (dt) {
        
    // }
}
