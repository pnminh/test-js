let name='Mai'
let user = {'email':'aa@aa.com','password':'aa','role':'admin'}
callback(null,user);
callbackShortForm(null,user);
callbackDifferentKeyValue(null,user);
function callback(err,user){
    let users = {user:user};
    console.log(`callback:${JSON.stringify(users)}`);
}
//this is called from the queryUser as a callback to controller
function callbackShortForm(err,user){
    let users = {user};
    //used in view template
    console.log(`callbackShortForm:${JSON.stringify(users.user)}`);
}
function  callbackDifferentKeyValue(err,userValue){
    let users = {userKey:userValue};
    console.log(`callbackDifferentKeyValue:${JSON.stringify(users.userKey)}`);
}