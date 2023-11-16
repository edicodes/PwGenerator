//defining the array
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

//variables to target elements in the DOM + define the length of characters the pw needs to be
const pwRandomOne = document.getElementById('pw-random-one')
const pwRandomTwo = document.getElementById('pw-random-two')
const generateBtn = document.getElementById('generate-btn')
const pwEl = document.querySelectorAll('[data-copy-content]')
const copyBtn = document.querySelectorAll('.copy-btn')
let pwLength = 15


    
//get random indexes from the characters array
function getRandomChars() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

//get 15 random indexes and assign to the textContent for each paragraph-elements
function getRandomPassword() {
    let randomPwOne = ''
    for (let i = 0; i < pwLength; i++) {
        randomPwOne += getRandomChars()
    }
    pwRandomOne.textContent = randomPwOne
    
    let randomPwTwo = ''
    for (let i = 0; i < pwLength; i++) {
        randomPwTwo += getRandomChars()
    }
    pwRandomTwo.textContent = randomPwTwo
  
  //copy the generated password for each copy buttons nearest paragraph sibling with the attribute [data-copy-content]
  copyBtn.forEach(btn => {
    //select copy-btn sibling to get text to copy
    const sibling = btn.closest(".pw").querySelector('[data-copy-content]')  
    const tooltip = btn.closest(".pw").querySelector('[data-copy-tooltip]')  
    //get siblings text content to copy to clipboard
    let text = sibling.textContent
    
     btn.addEventListener('click', () => {        
        
        // navigator.clipboard.writeText(sibling.value)
        // sibling.select();
         navigator.clipboard.writeText(text)
        // document.execCommand('copy')
        // console.log(text)
        // alert('Your password has been copied')
        tooltip.classList.add('show')
        setTimeout(() => tooltip.classList.remove("show"), 2000);
    })
})
}

//calling getRandomPassword function when button is clicked    
generateBtn.addEventListener('click', () => {
    getRandomPassword()
})



    
//***************MESSY AND SLOPPY EXAMPLES OF A FEW OF THE FUNCTIONS I HAVE TRIED to get 15 differenct characters from the array */
// function randomPw() {
//     for (let i = 0; i < pwLength; i++) {
    
//         let randomizeOne = Math.floor(Math.random() * characters.length)
//         let randomizeTwo = Math.floor(Math.random() * characters.length)        
//         pwRandomOne.innerText = characters[randomizeOne]
//         pwRandomTwo.innerText = characters[randomizeTwo]
    
        
//     }
// }


// randomize characters from the array, get 15 of them (pwLength) and output to the respective DOM elements
//  function randomChar() {
//         let randomizeOne = Math.floor(Math.random() * characters.length)
//         let randomizeTwo = Math.floor(Math.random() * characters.length)
//         for (let i = 0; i < pwLength; i++) {
//             pwRandomOne.textContent += characters[randomizeOne]
//             pwRandomTwo.textContent += characters[randomizeTwo]
//             console.log(randomizeOne)
//         }
//     }

// function to be called on button click (supposed to return 15 random characters from the array)
// function randomPw() {
//     for (let i = 0; i < pwLength; i++) {
              
//         pwRandomOne.innerText = characters[randomChar()] 
//         pwRandomTwo.innerText = characters[randomChar()]
            
//         }
//     }

    
    
    // ********** and tried this
    
    // function randomPw() {
    // for (let i = 0; i < pwLength; i++) {
    //     let randomizeOne = Math.floor(Math.random() * characters.length) + 1
    //     let randomizeTwo = Math.floor(Math.random() * characters.length) + 1
              
    //     pwRandomOne.innerText = characters[randomizeOne] * 15
    //     pwRandomTwo.innerText = characters[randomizeTwo] * 15
       
            
    //     }
    // }
    
      // ********** and tried this too
      
    // function randomPw() {
    // for (let i = 0; i < pwLength; i++) {
    //     let randomizeOne = Math.floor(Math.random() * characters.length) + pwLength
    //     let randomizeTwo = Math.floor(Math.random() * characters.length) + pwLength
              
    //     pwRandomOne.innerText = characters[randomizeOne] * 1
    //     pwRandomTwo.innerText = characters[randomizeTwo] * 1
       
            
    //     }
    // }

//this too
// function example() {
//     let exampleTwo = randomChar * pwLength
    
// }

// example()
  