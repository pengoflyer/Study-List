
const {ccclass, property} = cc._decorator;

@ccclass
export default class RequestHtml extends cc.Component {

   
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        let url = "http://api/douban.com/v2/movie/top250?start=25&count-25"


        console.log(url)
        
        let request = cc.loader.getXMLHttpRequest()
        request.open("GET", url, true)
        request.onreadystatechange = () => {
            console.log(request.readyState)
            if (request.readyState == 4 && request.status == 200) {
                console.log(request.responseText)
            }
        }
    }

    // update (dt) {}
}
