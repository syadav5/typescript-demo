let array = ['Hello', 'world', 'there'];

//printing using traditional methods

for (let i = 0; i < array.length; i++) {
    console.log(i);
    console.log('\n');
}

//Try using for in loop

for (let prop of array) {
    console.log(prop);
}

for (let value of array) {
    console.log(value);
}

console.log('let - in demo');
for (let prop in array) {
    console.log(prop);
    console.log(typeof prop);
    console.log(array[prop]);
    
}

console.log(array['2']);

array.forEach(function(val,ind){
alert(val);
//break; // This will cause error
});

// for - in is meant for object iteration and it may or may not perfectly work for arrays since the variable is of type string and may cause confusion
// for -of can be used for iterating over objects as well as arrays
//for - of also resolves the problem related to break or return 
//foreach has problem of return and break i.e. they dont work

