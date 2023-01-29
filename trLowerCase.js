function toTrLowerCase(text) {
    var newText = "";                    

    for (let i = 0; i < text.length; i++) {
        const element = text[i];

        if (text[i] == "I") {
            newText = newText+ "ı"
        }else{
            newText = newText + text[i].toLocaleLowerCase();
        }     

        
    }        
    
   return newText;
}