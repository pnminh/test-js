function testClosure() {
    for (var i = 0; i < 4; i++) {
        setTimeout(() => {
            console.log(`i as var is ${i}`)
        }, 0);
    }
}
function testClosureWithBlockScopeUsingLet(){
    for (let i = 0; i < 4; i++) {
        setTimeout(() => {
            console.log(`i as let is ${i}`)
        }, 0);
    }
}
testClosure();
testClosureWithBlockScopeUsingLet();