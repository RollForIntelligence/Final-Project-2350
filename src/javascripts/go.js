
let vidArray = ['<iframe width="560" height="315" src="https://www.youtube.com/embed/xMshtO8h7RU?si=jhrkImhzWR2ETh8w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>', 
'<iframe width="560" height="315" src="https://www.youtube.com/embed/RnNNDoQmlCg?si=MkqeKTVEWEwm6JfM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>', 
'<iframe width="560" height="315" src="https://www.youtube.com/embed/yiX5KmZ_ojA?si=8BSF9ZMAgSIDE8XS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>', 
'<iframe width="560" height="315" src="https://www.youtube.com/embed/xaJtSIr7hKQ?si=EFo4DoXWEt6O7zA2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>']

function displayVideoA() {
  document.querySelector(".video").innerHTML = vidArray[0]
}

function displayVideoB() {
  document.querySelector(".video").innerHTML = vidArray[1]
  document.querySelector(".video").classList.remove("d-none")
}

function displayVideoC() {
  document.querySelector(".video").innerHTML = vidArray[2]
  document.querySelector(".video").classList.remove("d-none")
}

function displayVideoD() {
  document.querySelector(".video").innerHTML = vidArray[3]
  document.querySelector(".video").classList.remove("d-none")
}

document.getElementById("Beginner").onclick = displayVideoA
document.getElementById("Intermediate").onclick = displayVideoB
document.getElementById("Advanced").onclick = displayVideoC
document.getElementById("Masters at work").onclick = displayVideoD