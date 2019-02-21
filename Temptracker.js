
//An Array of Temperature
var temp = [15, 20, 23, 47, 48, 25, 25,25,26];
var max_temp;
var min_temp;
var mean_temp;
var mode_temp;
function insert_temp() {
    temp.push(33, 34);
    console.log("Temperature Array",temp);
}

//Calulating maximum Temperature
function get_max() {
    max_temp = temp[0];
    for (var i = 0; i < temp.length; i++) {
        if (max_temp < temp[i]) {
            max_temp = temp[i];
        }
    }
   console.log("Maximum of Temp",max_temp);
}
//Calculating minimum temperature
function get_min() {
    min_temp = temp[0];
    for (var i = 0; i < temp.length; i++) {
        if (min_temp > temp[i]) {
            min_temp = temp[i];
        }
    }
    console.log("Minimum of Temp",min_temp);
}

//Calulating mean Of Temperature
function get_mean() {
    var sumOfTemp=0;
    for (var i = 0; i < temp.length; i++) {
        sumOfTemp = sumOfTemp + temp[i];
       
    }


    mean_temp = (sumOfTemp / temp.length);
    console.log("Mean of Temp",mean_temp);
}

//Calulating Mode Of Temperature
function get_mode() 
{
    
   var counter=0;
   
   var countmax=0;
   for(let i=0;i<temp.length;i++)
   {
       for(let j=i+1;j<temp.length;j++)
       {
           if(temp[i]==temp[j])
           {
               counter++;
           }
           if(counter>countmax)
           {
               countmax=counter;
               mode_temp=temp[i];
           }
       }
   }
    console.log("Mode of Temp",mode_temp)
}
insert_temp();
get_max();
get_min();
get_mean();
get_mode();