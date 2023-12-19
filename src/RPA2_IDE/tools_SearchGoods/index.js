// class 模板
class tools_SearchGoods {
    constructor(goodsName, goodsPrice) {
        this.goodsName = goodsName;
        this.goodsPrice = goodsPrice;
    }
    run() {
        console.log('父类run() :>>', this.goodsName, this.goodsPrice);
    }
}

// // 创建一个子类(tools_SearchGoods_plus) 去继承 tools_SearchGoods
class tools_SearchGoods_plus extends tools_SearchGoods {
    constructor(goodsName, goodsPrice, goodsNum) {
        super(goodsName, goodsPrice);
        this.goodsNum = goodsNum;
    }
    run() {
        // super.run();
        console.log('子类run() :>>', this.goodsNum);
    }
}

// 暴露 两个 class tools_SearchGoods_plus
export { tools_SearchGoods, tools_SearchGoods_plus };