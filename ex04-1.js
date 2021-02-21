function cointoss() {
const num = Math.random() // numは0.0〜1.0のランダムな数値

if (num >= 0.5) {
console.log('表')
} else {
console.log('裏')
}
}
// ①ここを埋める

for (let i = 0; i < 10; i++/* ②ここを埋める */) {
cointoss()
}

