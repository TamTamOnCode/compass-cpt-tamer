let angle = 0
basic.forever(function () {
    angle = input.compassHeading()
    if (angle > 315 && (angle <= 360 || angle >= 0 && angle <= 45)) {
        basic.showString("N")
        music.playMelody("B A B A - - - - ", 120)
    } else if (angle > 45 && angle <= 135) {
        basic.showString("E")
        music.playMelody("G F G F - - - - ", 120)
    } else if (angle > 135 && angle <= 225) {
        basic.showString("S")
        music.playMelody("E D E D - - - - ", 120)
    } else if (angle > 225 && angle <= 315) {
        basic.showString("W")
        music.playMelody("C5 C C5 C - - - - ", 120)
    }
})
