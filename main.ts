let strip: neopixel.Strip = null
let ir_waarde = 0
IR.IR_init()
let vooruit = 253
let rechts = 6
let achteruit = 125
let links = 31
let stop = 240
basic.forever(function () {
    ir_waarde = IR.IR_read()
    strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
    strip.showColor(neopixel.colors(NeoPixelColors.Purple))
})
basic.forever(function () {
    if (ir_waarde == vooruit) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        Maqueen_V5.motorRun(Maqueen_V5.Motors.All, Maqueen_V5.Dir.CW, 100)
    }
    if (ir_waarde == achteruit) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        Maqueen_V5.motorRun(Maqueen_V5.Motors.All, Maqueen_V5.Dir.CCW, 100)
    }
    if (ir_waarde == links) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        Maqueen_V5.motorRun(Maqueen_V5.Motors.M1, Maqueen_V5.Dir.CCW, 45)
        Maqueen_V5.motorRun(Maqueen_V5.Motors.M2, Maqueen_V5.Dir.CW, 45)
    }
    if (ir_waarde == rechts) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        Maqueen_V5.motorRun(Maqueen_V5.Motors.M2, Maqueen_V5.Dir.CCW, 45)
        Maqueen_V5.motorRun(Maqueen_V5.Motors.M1, Maqueen_V5.Dir.CW, 45)
    }
    if (ir_waarde == stop) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        Maqueen_V5.motorStop(Maqueen_V5.Motors.All)
    }
})
