class CallInterval{
    constructor(){
        let i = 0;
        this.id = setInterval(()=>{this.emitNumber(i++)},200);
    }
    emitNumber (num){
        let max = 10;
        if(num === max){
            this.complete();
            this.destroy();
            
        }else{
            this.next(num);
        }
    }
    destroy(){
        clearInterval(this.id);
    }
}
interval = new CallInterval();
interval.complete = ()=>{
    console.log('done');
}
interval.next = (num)=>{
    console.log(`num: ${num}`)
}