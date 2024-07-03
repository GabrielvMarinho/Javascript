
function make2DArrays(cols, rows){
  let arr = new Array(cols);
  for(let i =0; i<arr.length; i++){
    arr[i] = new Array(rows);
    for(let j=0; j<arr[i].length; j++){
      arr[i][j] = 0;
    }
  }
  return arr;
}
let grid;
let w = 10;


function setup() {
  createCanvas(600, 400);
  cols = width/w;
  rows = height/w;
  grid = make2DArrays(cols, rows);

  for( let i=0; i<cols; i++){
    for( let j=0; j<rows; j++){
      grid[i][j]=0;
    }
  }
}
function mouseDragged(){
  let col = floor(mouseX/w);
  let row = floor(mouseY/w);
  grid[col][row] = 1;
  
}

function draw() {
  background(0);
  for( let i=0; i<cols; i++){
    for( let j=0; j<rows; j++){
      noStroke();
      if (grid[i][j]==1){
        let x = i*w;
        let y = j*w;
        square(x, y, w);
      }
    }
  }
  let nextGrid = make2DArrays(cols, rows);
  for( let i=0; i<cols; i++){
    for( let j=0; j<rows; j++){
      let state = grid[i][j];
      if(state == 1){
        let below = grid[i][j + 1];

        let dir = 1;
        if(random(1)<0.5){
          dir=dir*-1;
        }
        let belowA, belowB;


        if(i>0 && i<cols-1){
          belowA = grid[i+dir][j+1];
          belowB = grid[i-dir][j+1];
        }
      
        if(j==rows-1){
          nextGrid[i][j]=1;
        }else if(below == 0){
          nextGrid[i][j+1] = 1;
        }else if(belowA==0){
          nextGrid[i+1][j+1]=1;
        }else if(belowB==0){
          nextGrid[i-1][j+1]=1;
        }
        else{
          nextGrid[i][j]=1;
        }
      
        
        }
      }
    }
    grid = nextGrid;

}

  

