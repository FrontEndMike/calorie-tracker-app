import React, { useState } from "react";


const Form = ({ formData, setFormData, onSubmit }) => {
    if (!formData) {
        console.error("formData is undefined in Form.js");
        return <p>Error: formData is missing!</p>;
    }
    const handleChange = (event) => {
        /* Update data based on name & value */
        const { name, value } = event.target;


        setFormData((prevData => ({
            ...prevData, /* Keep previous data "formData" */
            [name]: value, /* Set new form value to the data that has changed */
        })));
    };

    /* On submit pass new props back to parent */
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    }

    return(
         <form className="card right-element" onSubmit={handleSubmit}>
            <label htmlFor="name" className="">
                <span className="sr-only">Name</span>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Name"
                    value={formData.name ?? ""}
                    onChange={handleChange}
                    required
                />
            </label>

            <label htmlFor="age" className="">
                <span className="sr-only">Age</span>
                <input 
                    type="number" 
                    id="age" 
                    name="age" 
                    placeholder="Age"
                    min="0"
                    max="110"
                    value={formData.age}
                    onChange={handleChange}
                    required
                />
            </label>

            <label htmlFor="sex" className="">
                <span className="sr-only">Sex</span>
                <select 
                    name="sex"
                    onChange={handleChange}
                    value={formData.sex}
                    required
                >
                    <option>Select Sex</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </label>

            <label htmlFor="height" className="">
                <span className="sr-only">Height</span>
                <select 
                    name="height"
                    onChange={handleChange}
                    value={formData.height}
                    required
                >
                    <option>Select Height</option>
                    <option value="48">4'0" (122 cm)</option>
                    <option value="49">4'1" (125 cm)</option>
                    <option value="50">4'2" (127 cm)</option>
                    <option value="51">4'3" (130 cm)</option>
                    <option value="52">4'4" (132 cm)</option>
                    <option value="53">4'5" (135 cm)</option>
                    <option value="54">4'6" (137 cm)</option>
                    <option value="55">4'7" (140 cm)</option>
                    <option value="56">4'8" (142 cm)</option>
                    <option value="57">4'9" (145 cm)</option>
                    <option value="58">4'10" (147 cm)</option>
                    <option value="59">4'11" (150 cm)</option>
                    <option value="60">5'0" (152 cm)</option>
                    <option value="61">5'1" (155 cm)</option>
                    <option value="62">5'2" (157 cm)</option>
                    <option value="63">5'3" (160 cm)</option>
                    <option value="64">5'4" (163 cm)</option>
                    <option value="65">5'5" (165 cm)</option>
                    <option value="66">5'6" (168 cm)</option>
                    <option value="67">5'7" (170 cm)</option>
                    <option value="68">5'8" (173 cm)</option>
                    <option value="69">5'9" (175 cm)</option>
                    <option value="70">5'10" (178 cm)</option>
                    <option value="71">5'11" (180 cm)</option>
                    <option value="72">6'0" (183 cm)</option>
                    <option value="73">6'1" (185 cm)</option>
                    <option value="74">6'2" (188 cm)</option>
                    <option value="75">6'3" (191 cm)</option>
                    <option value="76">6'4" (193 cm)</option>
                    <option value="77">6'5" (196 cm)</option>
                    <option value="78">6'6" (198 cm)</option>
                    <option value="79">6'7" (201 cm)</option>
                    <option value="80">6'8" (203 cm)</option>
                    <option value="81">6'9" (206 cm)</option>
                    <option value="82">6'10" (208 cm)</option>
                    <option value="83">6'11" (211 cm)</option>
                    <option value="84">7'0" (213 cm)</option>
                    <option value="85">7'1" (216 cm)</option>
                    <option value="86">7'2" (218 cm)</option>
                    <option value="87">7'3" (221 cm)</option>
                    <option value="88">7'4" (224 cm)</option>
                    <option value="89">7'5" (226 cm)</option>
                    <option value="90">7'6" (229 cm)</option>
                    <option value="91">7'7" (231 cm)</option>
                    <option value="92">7'8" (234 cm)</option>
                    <option value="93">7'9" (236 cm)</option>
                    <option value="94">7'10" (239 cm)</option>
                    <option value="95">7'11" (241 cm)</option>
                </select>
            </label>

            <label htmlFor="weight" className="">
                <span className="sr-only">Weight</span>
                <input 
                    type="number" 
                    id="weight" 
                    name="weight" 
                    placeholder="Weight"
                    min="0"
                    max="800"
                    value={formData.weight}
                    onChange={handleChange}
                    required
                />
            </label>

            <label htmlFor="activity" className="">
                <span className="sr-only">Activity Level</span>
                <select 
                    id="activity" 
                    name="activity"
                    value={formData.activity}
                    onChange={handleChange}
                    required
                >
                    <option>Select Activity Level</option>
                    <option value="sedentary">Sedentary (little to no exercise)</option>
                    <option value="light">Lightly active (1-3 days of exercise per week)</option>
                    <option value="moderately">Moderately active (3-5 days per week)</option>
                    <option value="very">Very active (6-7 days per week)</option>
                    <option value="super_active">Super active (intense training or a physically demanding job)</option>
                </select>
            </label>
            <label htmlFor="goals" className="">
                <span className="sr-only">Goals</span>
                <select 
                    id="goals" 
                    name="goals"
                    value={formData.goals}
                    onChange={handleChange}
                    required
                >
                    <option>Select Goal</option>
                    <option value="fat_loss">Fat loss</option>
                    <option value="aggressive_fat_loss">Aggressive Fat loss</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="muscle_gain">Muscle gain</option>
                </select>
            </label>
            <div className="mt-8">
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default Form;