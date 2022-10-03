const firstElement = document.getElementById('first-element')
const nextElement = document.querySelector('#next-element')

function randomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

firstElement.addEventListener('click', () => {
    firstElement.style.color = randomColor()
    firstElement.style.background = randomColor()
})

nextElement.addEventListener('click', () => {
    nextElement.style.color = randomColor()
    nextElement.style.background = randomColor()
})

const secondImageDiv = document.querySelector('.second-image')
const secondImage = document.createElement('img')
secondImage.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Genoese_fortress_in_Sudak.jpg/900px-Genoese_fortress_in_Sudak.jpg"

let scale = 1

function addImage() {
    secondImage.style.scale = '1'
    scale = 1
    secondImageDiv.appendChild(secondImage)
}

function enlargeImage() {
    scale += 0.05
    secondImage.style.scale = `${scale}`

}

function shrinkImage() {
    scale -= 0.05
    secondImage.style.scale = `${scale}`
}

function deleteImage() {
    secondImage.remove()
}