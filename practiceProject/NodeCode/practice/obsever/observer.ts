// 观察者模式

interface IObserver {
    nameChange(newName)
}

class ObserverPerson{
    private _name: string
    observers: Array<IObserver> = new Array<IObserver>()

    set name(name: string) {
        this._name = name
        this.noticeObservers()
    }

    get name() {
        return this._name
    }

    addObserver(observer: IObserver) {
        this.observers.push(observer)
    }

    // 通知监听的观察者，名字改变
    noticeObservers() {
        for (let observer of this.observers) {
            observer.nameChange(this._name)
        }
    }
}

class Player implements IObserver {
    nameChange(newName: any) {
        console.log(`Player 监听到玩家名字改变。新名字${newName}`)
    }
}

class NearPlayer implements IObserver {
    nameChange(newName: any) {
        console.log(`NearPlayer 监听到玩家名字改变。新名字${newName}`)
    }
}

function test_observer() {
    let op = new ObserverPerson()
    op.addObserver(new Player())
    op.addObserver(new NearPlayer())

    op.name = "曾国藩"
}

test_observer()