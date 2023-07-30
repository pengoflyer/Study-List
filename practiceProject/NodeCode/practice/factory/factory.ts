// 工厂模式

enum enemyType {
    Monster,
    Boss
}


class Enemy {
    static Create(etype: enemyType): Enemy {
        switch (etype) {
            case enemyType.Monster:
                return new Monster()
            case enemyType.Boss:
                return new Boss()
        }
    }
}

class Monster extends Enemy {
    name: string = 'monster'
    
    print() {
        console.log(this.name)
    }
}

class Boss extends Enemy{
    name: string = 'boss'

    print() {
        console.log(this.name)
    }
}

function test_factory() {
    let monster = Enemy.Create(enemyType.Monster)
    console.log(monster)
    let boss = Enemy.Create(enemyType.Boss)
    console.log(boss)
}
test_factory()