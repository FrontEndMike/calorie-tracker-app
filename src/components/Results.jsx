import React from "react";

const Results = ({data, results}) => {
    const {name,  activity, goals} = data;
        return(
            <div className="card right-element">
                <p>{name}, based on your {goals} goals your estimated daily calorie intake is <strong>{results}</strong> kcal/day.</p>
            </div>
        );
};

export default Results;