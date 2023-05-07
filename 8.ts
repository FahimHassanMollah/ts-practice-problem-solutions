type Literal = 'red' | 'blue' | 'green'
function print(param1: Literal, param2?: boolean) {
    if (param2) {
        console.log(param1.toUpperCase());
        
    }
    else {
        console.log(param1.toLowerCase());
    }
    
}

print('red',true);