function NLeft2 () {
    Forward()
    basic.pause(500)
    Stop()
    basic.pause(100)
    while (pins.digitalReadPin(DigitalPin.P1) == 0) {
        Left()
    }
    Stop()
    basic.pause(100)
    while (pins.digitalReadPin(DigitalPin.P1) == 1) {
        Left()
    }
    Stop()
    while (pins.digitalReadPin(DigitalPin.P1) == 1) {
        Left()
    }
}
function Left () {
    pins.servoWritePin(AnalogPin.P16, 0)
    pins.servoWritePin(AnalogPin.P15, 0)
}
function shutdown_test () {
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    0
    )
}
function Forward () {
    pins.servoWritePin(AnalogPin.P15, 180)
    pins.servoWritePin(AnalogPin.P16, 0)
}
function UnCatch () {
    pins.servoWritePin(AnalogPin.P14, 0)
}
function NRigth () {
    Forward()
    basic.pause(1800)
    Stop()
    awry()
    basic.pause(1800)
    Right()
    basic.pause(1800)
    Stop()
}
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . # . . .
        # # # # #
        . # . . .
        . . . . .
        `)
    state = 1
})
function NLeft () {
    Forward()
    basic.pause(1800)
    Stop()
    awry()
    basic.pause(1800)
    Left()
    basic.pause(1800)
    Stop()
}
function ULeft () {
    Catch()
    basic.pause(1800)
    Stop()
    basic.pause(1800)
    Left()
    basic.pause(3600)
    Stop()
}
function Activate (num: number) {
    if (num == 4 && state == 1) {
        NLeft()
    } else if (num == 4 && state == 2) {
        Forward()
    } else if (num == 4 && state == 3) {
        NRigth()
    } else if (num == 5) {
        Stop()
    }
}
function UnCatch_test () {
    sensors.DDMmotor(
    AnalogPin.P15,
    1,
    AnalogPin.P16,
    255
    )
}
function shutdown () {
    pins.servoWritePin(AnalogPin.P14, 90)
}
function Catch_test () {
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    255
    )
}
function awry () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P8) == 0) {
        basic.showIcon(IconNames.Asleep)
        while (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P8) == 0) {
            Left()
            basic.pause(200)
        }
        Stop()
        basic.showIcon(IconNames.Duck)
        return 0
    } else if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P8) == 1) {
        basic.showIcon(IconNames.Butterfly)
        while (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P8) == 1) {
            Right()
            basic.pause(200)
        }
        Stop()
        basic.showIcon(IconNames.Duck)
        return 0
    }
    return 0
}
function Driver () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P8) == 0) {
        Forward()
    } else if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P8) == 0) {
        Stop()
        basic.pause(1000)
        awry()
    } else if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P8) == 1) {
        Stop()
        basic.pause(1000)
        awry()
    } else if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P8) == 1) {
        Stop()
        basic.pause(1000)
        event = event + 1
        Activate(event)
    }
}
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        `)
    state = 3
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . # .
        # # # # #
        . . . # .
        . . . . .
        `)
    state = 2
})
function Right () {
    pins.servoWritePin(AnalogPin.P16, 180)
    pins.servoWritePin(AnalogPin.P15, 180)
}
function Catch () {
    pins.servoWritePin(AnalogPin.P14, 180)
}
function Stop () {
    pins.servoWritePin(AnalogPin.P15, 90)
    pins.servoWritePin(AnalogPin.P16, 90)
}
function Backward () {
    pins.servoWritePin(AnalogPin.P16, 0)
    pins.servoWritePin(AnalogPin.P15, 180)
}
let state = 0
let event = 0
event = 0
pins.digitalWritePin(DigitalPin.P14, 0)
pins.digitalWritePin(DigitalPin.P16, 0)
pins.digitalWritePin(DigitalPin.P15, 0)
basic.pause(5000)
basic.forever(function () {
    Driver()
})
