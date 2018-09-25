function range(start_num, end_num, step_count = 1) {
    let array = [];
    if (step_count == 1) {
        for (let i = start_num; i <= end_num; i++) {
            array.push(i);
        }
    } else if (step_count > 0) {
        for (let i = start_num; i <= end_num; i = i+step_count) {
            array.push(i);
        }
    } else if (step_count < 0) {
        for (let i = end_num; i >= start_num; i = i - step_count) {
            console.log(i)
            array.push(i)
        }
    }
    return array;
}

function sumOfRange(arrayOfNumbers) {
    let sum = 0;
    for (number of arrayOfNumbers) {
        sum += number;
    }
    return sum;
}

console.log(try_array = range(2,10,-2));
//alert(sumOfRange(try_array));