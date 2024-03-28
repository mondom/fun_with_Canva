const canvas = document.querySelector('#draw')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext('2d')

ctx.strokeStyle = '#BADA55'
ctx.lineJoin = 'round'
ctx.lineCap = 'round'
ctx.lineWidth = 20

// powyższe style ustawiają kolor rysowania oraz style linii

let isDrawing = false
let lastX = 0
let lastY = 0
let color = 0

function draw(e) {
	if (!isDrawing) return
	ctx.strokeStyle = `hsl(${color}, 100%, 50%)`
	ctx.beginPath()
	// start from
	ctx.moveTo(lastX, lastY)
	// go to
	ctx.lineTo(e.offsetX, e.offsetY)
	ctx.stroke()
	;[lastX, lastY] = [e.offsetX, e.offsetY]
	color++
}

canvas.addEventListener('mousedown', e => {
	isDrawing = true
	;[lastX, lastY] = [e.offsetX, e.offsetY]
})

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mouseup', () => (isDrawing = false))
canvas.addEventListener('mouseout', () => (isDrawing = false))

// ustawiamy flagę, która ustawia nam opcję rysowania, tylko jeśli przycisk myszy jest wciśnięty, pozwala nam to na przesunięcie kusora bez ingerencji w rysunek
