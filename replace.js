function replaceJS(text){
    return `${text.replace(/Ram/gi,'Shyam')}`
}

const sent = "Ram work well,ram is sincere";
console.log(replaceJS(sent));