var Bus = function() {

  this.studentsOnTheBus = [];
  this.driverName = "";
  this.color = "";
  this.gas = 0;

  this.studentEntersBus = function() {
    console.log("Student Enters Bus")
  };

  this.busChatter = function() {
    if((detentions < 10) && (gpa > 2)) {
      console.log("Student catchphrase");
    } else {
      console.log("student still cannot have fun");
    }
  };
};


module.exports = Bus;