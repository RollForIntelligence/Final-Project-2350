
let vidArray = ['<iframe width="560" height="315" src="https://www.youtube.com/embed/OCSbzArwB10?si=CxPnE4Q1q3KilImA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>', 
'<iframe width="560" height="315" src="https://www.youtube.com/embed/goW1cFHaxtU?si=ggLhnl4bHzEknzKD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>', 
'<iframe width="560" height="315" src="https://www.youtube.com/embed/tQPnSQGWg-U?si=zxirc35b0RP8CspI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>', 
'<iframe width="560" height="315" src="https://www.youtube.com/embed/1WEyUZ1SpHY?si=GuQfWK0QCce51OpR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>']

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