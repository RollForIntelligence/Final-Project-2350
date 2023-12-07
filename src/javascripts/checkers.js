
let vidArray = ['<iframe width="560" height="315" src="https://www.youtube.com/embed/ZgEpwoVKoSs?si=4muLtajZeQGEwqJ3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>', 
'<iframe width="560" height="315" src="https://www.youtube.com/embed/c0kgGJ5ZF_s?si=jncbHpcAshGfeEG4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>', 
'<iframe width="560" height="315" src="https://www.youtube.com/embed/s353TEc7OGo?si=2WzTPJeiR9oqrsHS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>', 
'<iframe width="560" height="315" src="https://www.youtube.com/embed/-wsQeiaNovs?si=Si0oOK_loIqxGQGw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>']

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