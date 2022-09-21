//৮. event loop লুপ কি জিনিস। এই রিলেটেড পুরা জিনিসটা আজকে অনেকেই বুঝবে না। তাও আরেকবার দেখে রাখবে। 

// https://www.youtube.com/watch?v=8aGhZQkoFbQ&vl=en&ab_channel=JSConf


// In My Opinion: 
// The event loop is responsible for executing code. When we run some async operation our code, It will move to Queue using Browser API and then it will move to event loop where the event loop checks the call stack and when the stack is available then process the executed code from the event loop.