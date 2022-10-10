input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function () {
    basic.showIcon(IconNames.Ghost)
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        . # # # .
        # . # . #
        `)
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showString("LOS")
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        . # # # .
        # . # . #
        `)
    basic.showLeds(`
        . # . # .
        . # # # .
        . # # # .
        # . # . #
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        . # # # .
        # . # . #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . # # # .
        # . # . #
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        # . # . #
        . # # # .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    music.playMelody("B A B C5 B A B B ", 120)
    basic.showIcon(IconNames.EigthNote)
    basic.showIcon(IconNames.QuarterNote)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("NICHT SCHUETTELN")
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
})
input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function () {
    basic.showString("Hallo Jakob")
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . # .
        . . # . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        # . . . #
        . # # # .
        `)
    basic.showIcon(IconNames.Heart)
})
input.onPinTouchEvent(TouchPin.P2, input.buttonEventDown(), function () {
    basic.showIcon(IconNames.Duck)
})
input.onPinTouchEvent(TouchPin.P3, input.buttonEventDown(), function () {
    basic.showIcon(IconNames.Snake)
})
basic.forever(function () {
    basic.setLedColor(0x00ffff)
})
