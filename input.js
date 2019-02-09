const readline=require('readline') //importing require module
const rl=readline.createInterface({input:process.stdin,  //for input and output we use stdin,stdout
                           output:process.stdout})
let num1=Math.floor((Math.random()*10)+1)
let num2=Math.floor((Math.random()*10)+1)
let answer=num1+num2

rl.question(`what is ${num1}+ ${num2}?\n`,           //readline has a method to question
(something)=>{
    if(something.trim()==answer){

        rl.close() //To close the readline module , if the answer is correct!
    } else{
        rl.setPrompt('Incorrect!, Try again\n')  //This sets the propmt in the readline module and we have to call to use it
        rl.prompt()
        rl.on('line',(something)=>{ //we are going to listen to the line user types
            if(something.trim()==answer){ //Checking for the user input
                rl.close()

            } else{
                rl.setPrompt(`Your answer of ${something} is incorrect!\n`)
                rl.prompt()
            }



        })

    }

})

rl.on('close',()=>{  //This is used to listen for the event close
    console.log("You got it right!")

})
