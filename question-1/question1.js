/*
--------------Question 1: ES6 Features----------------------------------
Create a script with a function named lowerCaseWords that takes a mixed array as input.
The function will do the following.
return a promise that is resolved or rejected
filter the non-strings and lower case the remaining words
Input
const mixedArray =['Pizza,10,true,25,false,'wings']
Output
['pizza','wings']
Question */
//creating function
function lowerCaseWords(array){
    //using promises
        let promise= new Promise((resolve, reject) => {
            //check
                if (!Array.isArray(array)){
                    reject("You need to add an array ");
                    return;
                }
            let words=array.filter(function(item){
                return typeof item === "string";
            });

                let lowercase=words.map(function(word){
                    return word.toLowerCase();
            });
                    resolve(lowercase);
        });
        return promise;
    }
        const mixedArray=['PIZZA',10,true,25,false,'WINGS'];
        lowerCaseWords(mixedArray)
        .then(function(result){
            console.log(result);
        })
        .catch(function(error){
            console.log(error);
        });



     /*
--------mental notes--------
const mixedArray=['PIIZA',10,true,25,false,'WINGS'];
    lowerCaseWords=(mixedArray);




        //defining promise
        if string & lowerCaseWords{
            reject | "cant add values"
        }else{
            resolve {
                id: diplsay string
                message: here are the data non-string data types in lowercase
            }
        }
    }

    mixedArrayOfTypes=['Pizza',10,true,25,false,'wings']
}
    */