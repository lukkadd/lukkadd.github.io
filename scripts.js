function RandBin() {
    let max = 1;
    let min = 0;
    return Math.floor(Math.random()*(max-min+1))
}

function setupRow(){
    let firstRow = document.querySelector(".row");
    for(let i = 0; i < 101; i++){
        let Cell = document.createElement("div");
        Cell.classList.add("square");
        firstRow.appendChild(Cell);
        RandRow(firstRow);
    }
}

function compareRule(self, prevSelf, leftSibling,rightSibling, rule){
    if(state(leftSibling) == rule[0] &&
       state(prevSelf) == rule[1] &&
       state(rightSibling) == rule[2]
      ){
        setBasedOnRule(self, rule[3]);
    }
}

function setBasedOnRule(self,ruleState){
    if(ruleState == 1){
        self.classList.add("active");
        self.classList.remove("inactive");
    }else{
        self.classList.add("inactive");
        self.classList.remove("active");
    }
}

function processRow(lastRow,newRow){
    for(let i = 0;i<lastRow.childElementCount;i++){
        let self = newRow.childNodes[i];
        let prevSelf = lastRow.childNodes[i];
        let leftSibling = 
            prevSelf.previousElementSibling || 
            lastRow.childNodes[ 
            lastRow.childNodes.length - 1];
        let rightSibling = 
            prevSelf.nextElementSibling || 
            lastRow.childNodes[0];
        
        compareRule(self, prevSelf, leftSibling,rightSibling, [1,1,1,0]);
        compareRule(self, prevSelf, leftSibling,rightSibling, [1,1,0,0]);
        compareRule(self, prevSelf, leftSibling,rightSibling, [1,0,1,0]);
        compareRule(self, prevSelf, leftSibling,rightSibling, [1,0,0,1]);
        compareRule(self, prevSelf, leftSibling,rightSibling, [0,1,1,0]);
        compareRule(self, prevSelf, leftSibling,rightSibling, [0,1,0,1]);
        compareRule(self, prevSelf, leftSibling,rightSibling, [0,0,1,1]);
        compareRule(self, prevSelf, leftSibling,rightSibling, [0,0,0,0]);
        
    }
}

function DoubleRow() {
    let allRows = document.querySelectorAll(".row");
    let lastRow = allRows[0];
    let newRow = lastRow.cloneNode(true);
    document.querySelector(".main").appendChild(newRow);
    processRow(newRow,lastRow);
}

function RandRow(row){
    for(let i = 0; i<row.childElementCount;i++){
        if(RandBin() == 1){
        row.childNodes[i].classList.add("active");
        row.childNodes[i].classList.remove("inactive");
        } else{
        row.childNodes[i].classList.remove("active");
        row.childNodes[i].classList.add("inactive");
        }   
    }
}

function state(Cell){
    if(Cell.classList.contains("active")){
        return 1;
    }else{
        return 0;
    }
}

setupRow();

setInterval(DoubleRow,500);
