function print(...param1:number[]) {
    const min = Math.min(...param1);
    const max = Math.max(...param1);
    
}

const numbers: number[] = [10, 5, 7, 3, 12, 8];
print( ...numbers);

