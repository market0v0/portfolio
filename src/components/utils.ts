const MIN_RADIUS = 7.5
const MAX_RADIUS = 12
const DEPTH = 3
const NUM_POINTS = 500

export const scrollToSection = (id: string): any => {
  const section = document.getElementById(id)
  if (section != null) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}

const getGradientStop = (ratio: number, leftColor: string, rightColor: string): any => {
  ratio = ratio > 1 ? 1 : ratio < 0 ? 0 : ratio

  const c0 = leftColor.match(/.{1,2}/g)?.map((oct) => parseInt(oct, 16) * (1 - ratio))
  const c1 = rightColor.match(/.{1,2}/g)?.map((oct) => parseInt(oct, 16) * ratio)

  if (c0 != null && c1 != null) {
    const ci = [0, 1, 2].map((i) => Math.min(Math.round(c0[i] + c1[i]), 255))
    const color = ci.reduce((a, v) => (a << 8) + v, 0).toString(16).padStart(6, '0')

    return `#${color}`
  } else {
    return '#000000' // or any default color
  }
}

const calculateColor = (x: number, leftColor: string, rightColor: string): any => {
  const maxDiff = MAX_RADIUS * 0.1
  const distance = x + MAX_RADIUS

  const ratio = distance / maxDiff

  const stop = getGradientStop(ratio, leftColor, rightColor)
  return stop
}

const randomFromInterval = (min: number, max: number): any => {
  return Math.random() * (max - min) + min
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const pointsInner = (leftColor: string, rightColor: string) => Array.from(
  { length: NUM_POINTS },
  (v, k) => k + 2
).map((num) => {
  const randomRadius = randomFromInterval(MIN_RADIUS, MAX_RADIUS)
  const randomAngle = Math.random() * Math.PI * 2

  const x = Math.cos(randomAngle) * randomRadius
  const y = Math.sin(randomAngle) * randomRadius
  const z = randomFromInterval(-DEPTH, DEPTH)

  const color = calculateColor(x, leftColor, rightColor)

  return {
    idx: num,
    position: [x, y, z],
    color
  }
})

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const pointsOuter = (leftColor: string, rightColor: string) => Array.from(
  { length: NUM_POINTS / 4 },
  (v, k) => k + 1
).map((num) => {
  const randomRadius = randomFromInterval(MIN_RADIUS / 2, MAX_RADIUS * 2)
  const angle = Math.random() * Math.PI * 2

  const x = Math.cos(angle) * randomRadius
  const y = Math.sin(angle) * randomRadius
  const z = randomFromInterval(-DEPTH * 10, DEPTH * 10)

  const color = calculateColor(x, leftColor, rightColor)

  return {
    idx: num,
    position: [x, y, z],
    color
  }
})
