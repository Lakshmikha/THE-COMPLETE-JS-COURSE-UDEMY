    const MarkDetails = {
    name : 'Mark Miller', 
    mass : 78, 
    height : 1.69, 
    calcBMI : function() {
        this.bmi = this.mass / (this.height)**2;
        return this.bmi;
    } };

    const JohnDetails = {
    name : 'John Smith', 
    mass : 92, 
    height : 1.95, 
    calcBMI : function() {
        this.bmi = this.mass / (this.height)**2;
        return this.bmi;
    } };

    MarkDetails.calcBMI();
    JohnDetails.calcBMI();


    if (MarkDetails.bmi > JohnDetails.bmi){
        console.log(`Mark's BMI ${MarkDetails.bmi} is higher than John's ${JohnDetails.bmi}`);
    }else {
        console.log(`John's BMI ${JohnDetails.bmi} is higher than Mark's ${MarkDetails.bmi}`);

    }

    // IMPROVEMENT
    // calling the function, even when its in an object is necessary