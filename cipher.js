/**
 * Encrypt a word in ascii code
 * @param word Word of the user
 * @returns {[]} Encrypted word
 */
function cipher(){
    let cipherWord=[]
    for(i=0;i<document.getElementById("word").value.length;i++){
        cipherWord.push(document.getElementById("word").value.charCodeAt(i))}
    document.getElementById("code").innerHTML=cipherWord.join()
}
