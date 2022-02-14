import React from "react";
import ExerciseList from "./ExerciseList";
import ItemList from './ItemList';
import { useState } from "react";
import { getExerciseByBodyPartName, getExerciseByMuscelsName } from "../helpers/selectors";


const exercises =[
    {
    bodyPart:"waist",
    equipment:"body weight",
    gifUrl:"http://d205bpvrqc9yn1.cloudfront.net/0001.gif",
    id:"0001",
    name:"3/4 sit-up",
    target:"abs",
    },
    {
    bodyPart:"waist",
    equipment:"body weight",
    gifUrl:"http://d205bpvrqc9yn1.cloudfront.net/0002.gif",
    id:"0002",
    name:"45° side bend",
    target:"abs",
    },
    {
    bodyPart:"upper legs",
    equipment:"body weight",
    gifUrl:"http://d205bpvrqc9yn1.cloudfront.net/1512.gif",
    id:"1512",
    name:"all fours squad stretch",
    target:"quads",
    },
    {
    bodyPart:"back",
    equipment:"cable",
    gifUrl:"http://d205bpvrqc9yn1.cloudfront.net/0007.gif",
    id:"0007",
    name:"alternate lateral pulldown",
    target:"lats",
    },
    {
    bodyPart:"lower legs",
    equipment:"body weight",
    gifUrl:"http://d205bpvrqc9yn1.cloudfront.net/1368.gif",
    id:"1368",
    name:"ankle circles",
    target:"calves",
    },
    {
    bodyPart:"back",
    equipment:"body weight",
    gifUrl:"http://d205bpvrqc9yn1.cloudfront.net/3293.gif",
    id:"3293",
    name:"archer pull up",
    target:"lats",
    }
] 

export default function Application() {
    const exerciseList = ["Body Parts", "Muscels"]
    const bodyPartsList = ["Back", "Cardio", "Chest", "Lower Arms", "Lower Legs", "Neck", "Shoulders", "Upper Arms", "Upper Legs", "Waist"]
    const muscelsList=[
        "Abductors",
        "Abs",
        "Adductors",
        "Biceps",
        "Calves",
        "Cardiovascular System",
        "Delts",
        "Forearms",
        "Glutes",
        "Hamstrings",
        "Lats",
        "Levator Scapulae",
        "Pectorals",
        "Quads",
        "Serratus Anterior",
        "Spine",
        "Traps",
        "Triceps",
        "Upper back"
    ]
    const [showBodyPart, setShowBodyPart ] = useState(false);
    const [showMuscels, setShowMuscels] = useState(false);
    const [showPartName, setShowPartName] = useState(false);
    const [showMuscelName, setShowMuscelName] = useState(false);
    const [bodyPartName, setBodyPartName] = useState("waist")
    const [muscelName, setMuscelName] = useState("lats")


    const onExerciseSelection = (name) => {
        console.log("In applications name is:", name)
        //if the name === BodyPart? setShowBodyPart(!showBodyPart)
        if(name === "Body Parts") {
            setShowBodyPart(!showBodyPart);
            setShowMuscels(false);
        }
        //if name === Muscels? setShowMuscels(!showMuscels) 
        if(name === "Muscels") {
            setShowMuscels(!showMuscels);
            setShowBodyPart(false);
        }
    } 
    // set the state on the selection of partName
    const onPartNameSelection = (bodyPartsList, partName) => {
        console.log(partName)
        if(bodyPartsList.includes(partName)){
            setBodyPartName(partName);
            setShowPartName(!showPartName);
        }
        if(muscelsList.includes(partName)){
            setMuscelName(partName);
            setShowMuscelName(!showMuscelName);
        }
    }
    
    const exercisesByBodyPart = getExerciseByBodyPartName(exercises,bodyPartName)
    const exercisesByMuscels = getExerciseByMuscelsName(exercises, muscelName)

    return (
        <div>
            <button onClick={() => {
               setShowMuscels(false); 
               setShowBodyPart(false);
            }}>Back Button</button>
            {(!showBodyPart && !showMuscels) && <ItemList header="List of Exercises" exerciseList={exerciseList} onClick={onExerciseSelection}/>}
            {showBodyPart  && <ItemList header="Body Parts" exerciseList={bodyPartsList}/>}
            {showMuscels && <ItemList header="Muscels" exerciseList={muscelsList}/>}
              { <ExerciseList exercises={exercisesByBodyPart} onClick={onExerciseSelection}/>}  
        </div>
    );
}
