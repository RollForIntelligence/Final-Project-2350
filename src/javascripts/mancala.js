
let vidArray = ['<iframe width="560" height="315" src="https://www.youtube.com/embed/OX7rj93m6o8?si=jNTi4f3AqfxPaMD8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>', 
'<iframe width="560" height="315" src="https://www.youtube.com/embed/v3mdhewHmB0?si=7r5yaSNmYKIrNxdu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>', 
'<iframe width="560" height="315" src="https://www.youtube.com/embed/Mg8AHyM2cZo?si=O-IYAsWBOTBaIfBq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>', 
'<iframe width="560" height="315" src="https://www.youtube.com/embed/NN7S0KikdMk?si=rPxiw2ZIp5qGUtHS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>']

function displayVideoA() {
  document.querySelector(".video").innerHTML = vidArray[0]
  document.querySelector(".video").classList.remove("d-none")
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