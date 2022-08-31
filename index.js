function distanceFromHqInBlocks(someValue){
    return Math.abs(someValue-42)
}
function distanceFromHqInFeet(someValue){
    return Math.abs(someValue-42)*264
}
function  distanceTravelledInFeet(value1, value2){
    return Math.abs(value1-value2)*264
}
function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start,destination)
    if (distance<=400) {
        return 0
        }
    else if (distance>400 && distance<=2000){
        return (distance-400)*0.02;
        }
    else if (distance>2000 && distance<2500){
        return 25;
        }
    else if (distance>2500){
        return 'cannot travel that far';
        }
    }
    
