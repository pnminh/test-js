/**
 * a pattern includes request(stock request), wrapped in a command(buy or sell order), and invoker(broker) to invoke commands
 */
class Stock{
    constructor(name,quantity){
        this.name = name;
        this.quantity = quantity;
    }
    buy(){
        console.log(`buying ${this.name} with quantity ${this.quantity}`);
    }
    sell(){
        console.log(`selling ${this.name} with quantity ${this.quantity}`);
    }
}
class StockOrder{
    constructor(stock){
        this.stock = stock;
    }
}
class BuyStockOrder extends StockOrder{
    constructor(stock){
        super(stock);
    }
    execute(){
        console.log("Executing buying stock order for stock " + this.stock.name);
        this.stock.buy();
    }
}
class SellStockOrder extends StockOrder{
    constructor(stock){
        super(stock);
    }
    execute(){
        console.log("Executing selling stock order for stock " + this.stock.name);
        this.stock.buy();
    }
}
class Broker{
    constructor(){
        this.orders=[];
    }
    addOrder(order){
        this.orders.push(order);
    }
    placeOrders(){
        this.orders.forEach(order => {console.log('placing order...');order.execute()})
    }
}
var broker = new Broker();
var stock = new Stock('ABC',10)
var buyOrder = new BuyStockOrder(stock);
var sellOrder = new SellStockOrder(stock);
broker.addOrder(buyOrder);
broker.addOrder(sellOrder);
broker.placeOrders();