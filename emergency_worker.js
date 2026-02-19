let counter=0;
setInterval(function(){
counter++;
postMessage(counter);
},500);
