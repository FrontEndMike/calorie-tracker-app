import React from "react";

const calculateResults = ( data ) => {
    const {age, sex, height, weight, activity} = data;
    let BMR = 0;
    if (data.sex === "male") {
        BMR = 10 * data.weight + 6.25 * data.height - 5 * data.age + 5;
    } else if (data.sex === "female") {
        BMR = 10 * data.weight + 6.25 * data.height - 5 *data. age - 161;
    }
    
    console.log(BMR);
}

export default calculateResults;