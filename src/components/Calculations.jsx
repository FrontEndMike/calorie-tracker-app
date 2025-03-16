import React from "react";

const calculateResults = (data) => {
    const {age, sex, height, weight, activity, goals} = data;
    let BMR = 0;
    const kgWeight = weight * 0.453592; //Convert lbs to kg
    const cmHeight = height * 2.54; //Convert in to cm
    if (sex === "male") {
        BMR = 10 * kgWeight + 6.25 * cmHeight - 5 * age + 5;
    } else if (sex === "female") {
        BMR = 10 * kgWeight + 6.25 * cmHeight - 5 * age - 161;
    }

    const activityMultipliers = {
        sedentary : 1.2,
        light : 1.375,
        moderately : 1.55,
        very : 1.725,
        super_active : 1.9
    }

    const activityLevel = activity;

    if (activityMultipliers[activityLevel]){
        BMR = BMR * activityMultipliers[activityLevel];
    } else return;

    const calGoals = {
        fat_loss : -500,
        aggressive_fat_loss : -750,
        maintenance : 0,
        muscle_gain : 250,
    }

    const specGoals = goals;

    if (calGoals.hasOwnProperty(specGoals)) {
        BMR = BMR + calGoals[specGoals];
    } else {
        console.log("Goal not found");
        return;
    }
    console.log("Calculations page: " + BMR)
    return Math.round(BMR);
}

export default calculateResults;