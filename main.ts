let punkte_A = 0
let spiel_beendet = false
let punkte_B = 0
let durchgang_beendet = false
let durchgang_begonnen = false
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (punkte_A == 5) {
        basic.showLeds(`
            . . # . .
            . # # # #
            # # # # #
            . # # # #
            . . # . .
            `)
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
        spiel_beendet = true
    }
    if (punkte_B == 5) {
        basic.showLeds(`
            . . # . .
            # # # # .
            # # # # #
            # # # # .
            . . # . .
            `)
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
        spiel_beendet = true
    }
    if (!(spiel_beendet)) {
        basic.clearScreen()
        basic.showIcon(IconNames.Ghost)
        basic.pause(1000)
        basic.clearScreen()
        durchgang_beendet = false
        durchgang_begonnen = false
        basic.pause(randint(1000, 5000))
        durchgang_begonnen = true
        if (!(durchgang_beendet)) {
            basic.showIcon(IconNames.Heart)
        }
    }
})
input.onButtonPressed(Button.A, function () {
    if (!(spiel_beendet)) {
        if (durchgang_begonnen) {
            durchgang_beendet = true
            durchgang_begonnen = false
            basic.showLeds(`
                . . # . .
                . # # # #
                # # # # #
                . # # # #
                . . # . .
                `)
            basic.pause(500)
            basic.showIcon(IconNames.Yes)
            punkte_A += 1
        } else {
            if (!(durchgang_beendet)) {
                durchgang_begonnen = false
                durchgang_beendet = true
                basic.showLeds(`
                    . . # . .
                    . # # # #
                    # # # # #
                    . # # # #
                    . . # . .
                    `)
                basic.pause(500)
                basic.showIcon(IconNames.No)
                if (punkte_A > 0) {
                    punkte_A += -1
                }
            }
        }
    }
    basic.pause(500)
    basic.clearScreen()
    for (let index = 0; index <= punkte_A - 1; index++) {
        led.plot(0, index)
    }
    for (let index = 0; index <= punkte_B - 1; index++) {
        led.plot(4, index)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (spiel_beendet) {
        spiel_beendet = false
        punkte_A = 0
        punkte_B = 0
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    if (!(spiel_beendet)) {
        if (durchgang_begonnen) {
            durchgang_beendet = true
            durchgang_begonnen = false
            basic.showLeds(`
                . . # . .
                # # # # .
                # # # # #
                # # # # .
                . . # . .
                `)
            basic.pause(500)
            basic.showIcon(IconNames.Yes)
            punkte_B += 1
        } else {
            if (!(durchgang_beendet)) {
                durchgang_begonnen = false
                durchgang_beendet = true
                basic.showLeds(`
                    . . # . .
                    # # # # .
                    # # # # #
                    # # # # .
                    . . # . .
                    `)
                basic.pause(500)
                basic.showIcon(IconNames.No)
                if (punkte_B > 0) {
                    punkte_B += -1
                }
            }
        }
    }
    basic.pause(500)
    basic.clearScreen()
    for (let index = 0; index <= punkte_A - 1; index++) {
        led.plot(0, index)
    }
    for (let index = 0; index <= punkte_B - 1; index++) {
        led.plot(4, index)
    }
})
