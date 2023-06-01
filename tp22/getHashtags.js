function getHashtags(phrase){

    let words_in_phrase = phrase.split(" ");
    words_in_phrase.sort(compareWords);
    
    if(words_in_phrase.length>3){
     let hashtags = ["#"+words_in_phrase[words_in_phrase.length-1],"#"+words_in_phrase[words_in_phrase.length-2],"#"+words_in_phrase[words_in_phrase.length-3]];
        return hashtags;
    }
    else{
        let hashtags=' ';
        for(let i=words_in_phrase.length-1; i>=0; i--){
            hashtags += "#"+words_in_phrase[i];
        }
        return hashtags;
    }
    document.write()

}

function compareWords(a,b){
    return a.length - b.length;
}