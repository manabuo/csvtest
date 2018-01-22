import * as CCXT from "ccxt"

const {ccclass, property} = cc._decorator;

@ccclass
export class CsvScene extends cc.Component {

    onLoad() {
        // init logic
        
        console.log (CCXT.exchanges)        
    }
}
