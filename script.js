const canvas = document.querySelector('#draw')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext('2d')

ctx.strokeStyle = '#BADA55'
ctx.lineJoin = 'round'
ctx.lineCap = 'round'

// powyższe style ustawiają kolor rysowania oraz style linii

let isDrawing = false
let lastX = 0
let lastY = 0

function draw(e) {
	if (!isDrawing) return
	ctx.beginPath()
    // start from
	ctx.moveTo(lastX, lastY)
    // go to
	ctx.lineTo(e.offsetX, e.offsetY)
	ctx.stroke()
    lastX = e.offsetX
    lastY = e.offsetY
}
canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mousedown', () => (isDrawing = true))
canvas.addEventListener('mouseup', () => (isDrawing = false))
canvas.addEventListener('mouseout', () => (isDrawing = false))

// ustawiamy flagę, która ustawia nam opcję rysowania, tylko jeśli przycisk myszy jest wciśnięty, pozwala nam to na przesunięcie kusora bez ingerencji w rysunek
