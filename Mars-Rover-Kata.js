// // Rover Object Goes Here

let roverx = {
    x:0,
    y:0,
  direction: "N",
  travelLog: [{x:0,y:0}]
  }
  
 // // --------------------------------//
  function turnLeft(rover){
    switch(rover.direction){
      case "N":   
      rover.direction="W"   
      console.log(`Rover is now facing West`);   
      break;
  
      case "S":  
      rover.direction="E"   
      console.log(`Rover is now facing East`);
      break;
  
      case "E":  
      rover.direction="N"   
      console.log(`Rover is now facing North`);
      break;
  
      case "W": 
      rover.direction="S" 
      console.log(`Rover is now facing South`);
      break;
    }
   console.log("turnLeft was called!");
  }
   
  // turnLeft(roverx);
  
  function turnRight(rover){
    switch(rover.direction){
      case "N": 
      rover.direction="E"   
      console.log(`Rover is now facing East`);
      break;
  
      case "S":   
      rover.direction="W"  
      console.log(`Rover is now facing West`);
      break;
  
      case "E":  
      rover.direction="S"   
      console.log(`Rover is now facing South`);
      break;
  
      case "W":
      rover.direction="N"     
      console.log(`Rover is now facing North`);
      break;
    }
   console.log("turnRight was called!");
  }
   
  //  turnRight(roverx);
  
  function moveForward(rover){
    if(rover.x>=0 && rover.x<9 && rover.y>=0 && rover.y<9 ){
      console.log("moveForward was called");
        switch(rover.direction){
          case "W": 
          rover.x--;
          break;
  
          case "N":  
          rover.y--;
          break;
  
          case "S":  
          if(rover.y===8){
            console.log('There is an obstacles, you cannot move forward! Please go around!')
            break;
          }
          rover.y++;        
          break;
  
          case "E":  
            rover.x++;
          break;
        }
      console.log(`Rover moved forward to location:[x=${rover.x}, y=${rover.y}] and facing: ${rover.direction} `);
        let newLog={x: rover.x , y: rover.y};
        rover.travelLog.push(newLog);      
    }
    else{
      console.log("You can't place Rover  outside of the board!");
    }
  }
  
  // moveForward(roverx);
  
  function moveBackward(rover){
    if(rover.x>=0 && rover.x<9 && rover.y>=0 && rover.y<9 ){
      console.log("moveBackward was called");
        switch(rover.direction){
          case "W": 
          rover.x++;
          break;
  
          case "N":  
          rover.y++;
          break;
  
          case "S":  
          rover.y--;
          break;
  
          case "E":  
          rover.x--;
          break;
        }
      console.log(`Rover moved backwards to location:[x=${rover.x}, y=${rover.y}]  and facing: ${rover.direction}`);
        let newLog={x: rover.x , y: rover.y};
        rover.travelLog.push(newLog);   
     }
    else{
      console.log("You can't place Rover  outside of the board!");
     }
  }
  
  // moveBackward(roverx);
  
  for(let i=0; i< roverx.travelLog.length; i++){
    console.log(`Rovers position ==>  x=${roverx.travelLog[i].x}, y=${roverx.travelLog[i].y}; facing North`);
    }
  
  function command(commands){  
    for(i=0;i<commands.length;i++){
      let order = commands[i];
      switch(order){
        case "f":
        moveForward(roverx);
        break;
        case "r":
        turnRight(roverx);
        break;
        case "l":
        turnLeft(roverx);
        break;
        case "b":
        moveBackward(roverx);
        break;
        }
      }
  console.log(roverx.travelLog);
  }
  
  let command1='rffflbblf';
  command(command1);
  