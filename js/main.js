var sleepTime = 1000;
var interval = setInterval(() => {
    const a_tags = document.querySelectorAll('[id^="google_ads|banner|adchoices"]');
    if(a_tags){
        main(a_tags);
        sleepTime = 5000;
    }
}, sleepTime);

function main(a_tags){
    a_tags.forEach((element) => {
        try {
            deleteElement(element);
         }catch (e) {
            console.log(e);
         }
    });
}

function deleteElement(element) {  
    console.log(element.id);
    var child = element.lastElementChild;  
    while (child) { 
        element.removeChild(child); 
        child = element.lastElementChild; 
    }
} 