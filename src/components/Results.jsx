import React from "react";

const Results = ({data, results, onReset}) => {
    const {name, goals} = data;

    const goalDescription = {
        fat_loss : "fat loss",
        aggressive_fat_loss : "aggressive fat loss",
        maintenance : "maintenance",
        muscle_gain : "muscle gain",
    }

    let specGoals = goals;

    if (goalDescription[specGoals]) {
        specGoals = goalDescription[specGoals];
    } else {
        console.log("Goal not found");
        return;
    }
        return(
            <div className="card right-element justify-center">
                <h2 className="text-4xl text-center">Results:</h2>
                <p>{name}, based on your {specGoals} goals your estimated daily calorie intake is <strong>{results}</strong> kcal/day.</p>
                <div className="mt-8">
                    <button onClick={onReset}>Recalculate</button>
                </div>
            </div>
        );
};

export default Results;