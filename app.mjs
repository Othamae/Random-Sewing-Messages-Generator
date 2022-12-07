import { adjetives, verbs, clothes} from "./resources/data.mjs";


const getRandomElement =array =>{   
    return array[Math.floor(Math.random()*array.length)];
}

const getRandomSentence=()=>{
    const verb = getRandomElement(verbs);
    const adjetive = getRandomElement(adjetives);
    const clothing = getRandomElement(clothes);
    if (startWithVowel(adjetive)){
        return `You can ${verb} an ${adjetive} ${clothing} with your own hands!!`
    }
    return `You can ${verb} a ${adjetive} ${clothing} with your own hands!!`
}

const startWithVowel = (word)=>{
    if (word[0].toLowerCase()==='a' ||word[0]==='e'||word[0]==='i'||word[0]==='o'||word[0]==='u'){
        return true;
    }
    return false;
}


console.log(getRandomSentence());


document.querySelector('button').addEventListener('click', ()=>{
    document.getElementById('message').innerHTML = getRandomSentence();
})

