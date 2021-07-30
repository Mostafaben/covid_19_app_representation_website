const images = [
	"https://raw.githubusercontent.com/Mostafaben/mostafaben.github.io/main/assets/img/mockups/13.png",
	"https://mostafaben.github.io/assets/img/mockups/9.png",
	"https://mostafaben.github.io/assets/img/mockups/6.png",
]

// const slider = document.getElementById("slider")
const imageContainer = document.getElementById("imageContainer")
let selectedImageIndex = 0

const img = document.createElement("img")

function nextImage(direction) {
	direction = parseInt(direction)
	selectedImageIndex = (selectedImageIndex + direction) % images.length
	if (selectedImageIndex < 0) selectedImageIndex = images.length - 1
	imageContainer.src = images[selectedImageIndex]
}

nextImage(0)
