var data = document.getElementById("data");

fetch("https://ahob85.github.io/codenext/grade10/term2/musicplayer/index.html").then(function(response) {
  data.innerHTML = "fuck";
}).catch(function(err){
  data.innerHTML = "shit";
});
