function replaceJS(text){
    return `${text.replace(/Ram/gi,'Shyam')}`//remove i from gi to make it case-sensitive
}
const sent = "Ram work well,ram is sincere";
console.log(replaceJS(sent));