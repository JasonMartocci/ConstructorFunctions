var Bus = function(studentsOnTheBus, driverName, color, gas, studentEntersBus, busChatter){
  this.studentsOnTheBus = studentsOnTheBus;
  this.driverName = driverName;
  this.color = color;
  this.gas = gas;
  this.studentEntersBus = function(){
        console.log("student enters bus");
    };
  this.busChatter = function(){
    if((detentions < 10) && (gpa > 2)) {
      console.log(catchPhrase);
    } else {
      console.log("student cannot have fun");
    }
  }
}