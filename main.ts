let running = false
let start = 0
let time = 0
input.onButtonPressed(Button.A, function () {
    running = true
    start = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    if (running) {
        time += input.runningTime() - start
    }
    running = false
})
basic.forever(function () {
    if (running) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
    } else {
        basic.showIcon(IconNames.Asleep)
    }
})
basic.forever(function () {
    while (input.logoIsPressed()) {
        if (!(running)) {
            basic.showNumber(Math.idiv(time, 1000))
        }
    }
})
