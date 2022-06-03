input.onButtonPressed(Button.A, function () {
    basic.showString("H")
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . . . # .
            . . # . .
            . . # # #
            # # . . #
            # . . . .
            `)
        basic.showLeds(`
            . . . . #
            . . . # .
            . . # . .
            # # # # #
            . . . . #
            `)
        basic.showLeds(`
            . . . . #
            . . . # .
            . . # . .
            # # # # #
            # . . . #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Pablo Falero")
})
