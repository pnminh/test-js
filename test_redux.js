/* let store = {
  test: 0
};
const increment = { type: "INCREMENT" };
const decrement = { type: "DECREMENT" };
let test = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
};
let commands = [test];
let dispatch = action => {
  commands.reduce((intermediateStore, command) => {
    let storeFragment = store[command.name];
    store[command.name] = command(storeFragment, action);
    return store;
  }, store);
};
dispatch(increment);
dispatch(increment);
dispatch(decrement);
console.log(store); */
// assert.equals(store.count, 1)
// try it out on the babel repl

//action/command/event
let addNum = num => {
  return {
    type: "ADD",
    num
  };
};
let minusNum = num => {
  return {
    type: "MINUS",
    num
  };
};
//view store
let store = {
  operate: 10
};
//reducer
let operate = (state, action) => {
  switch (action.type) {
    case "ADD":
      return state + action.num;
    case "MINUS":
      return state - action.num;
    default:
      return state;
  }
};
//event handler???
let dispatch = (action,reducer) => {
  store[reducer.name] = reducer(store[reducer.name], action);
};
dispatch(addNum(5),operate);
dispatch(minusNum(2),operate);
console.log(store);



//action:event
//reducer list: list of reducers, each with name = store fragment
//reducer: pure function that return a new state based on the event type.
//One event can trigger multiple reducers
