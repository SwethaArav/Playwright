//switch case control statement

function findDays(days) {
    switch (days) {
        case "Monday":
            console.log("1st day in a week");
            
            break;

        case "Sunday": 
            console.log("Holiday");
            
            break;

        case "Friday": 
            console.log("Finally week is gonna end");
            
            break;
    
        default:
             console.log("Weekday");
            break;
    }
    
}
findDays("Friday")