function Left () {
    pins.servoWritePin(AnalogPin.P16, 180)
    pins.servoWritePin(AnalogPin.P15, 180)
}
function Forward () {
    pins.servoWritePin(AnalogPin.P15, 10)
    pins.servoWritePin(AnalogPin.P16, 180)
}
function UnCatch () {
    pins.servoWritePin(AnalogPin.P14, 0)
}
function NRigth () {
    Forward()
    basic.pause(1000)
    Stop()
    Right()
    basic.pause(1000)
    Stop()
    awry()
    basic.pause(1500)
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
    basic.pause(1000)
    Stop()
    Left()
    basic.pause(1000)
    Stop()
    awry()
    basic.pause(1500)
}
function Activate (num: number) {
    if (num == 1) {
        Stop()
        basic.pause(500)
        NLeft()
        Stop()
    } else if (num == 2) {
        Stop()
        basic.pause(500)
        NRigth()
        Stop()
        Forward()
        basic.pause(500)
    } else if (num == 3) {
        Forward()
    }
}
function shutdown () {
    pins.servoWritePin(AnalogPin.P14, 90)
}
function awry () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P8) == 0) {
        while (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P8) == 0) {
            Right()
            basic.pause(150)
        }
        Stop()
        return 0
    } else if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P8) == 1) {
        while (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P8) == 1) {
            Left()
            basic.pause(150)
        }
        Stop()
        return 0
    }
    return 0
}
function Driver () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P8) == 0) {
        Forward()
    } else if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P8) == 0) {
        Stop()
        basic.pause(200)
        awry()
    } else if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P8) == 1) {
        Stop()
        basic.pause(200)
        awry()
    } else if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P8) == 1) {
        Stop()
        basic.pause(200)
        event = event + 1
        if (event == 4) {
            Activate(state)
        } else if (event == 5) {
            Stop()
        } else if (event < 4) {
            Forward()
            basic.pause(500)
        }
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
    pins.servoWritePin(AnalogPin.P16, 0)
    pins.servoWritePin(AnalogPin.P15, 0)
}
function Catch () {
    pins.servoWritePin(AnalogPin.P14, 180)
}
function Stop () {
    pins.servoWritePin(AnalogPin.P15, 90)
    pins.servoWritePin(AnalogPin.P16, 90)
}
function Backward () {
    pins.servoWritePin(AnalogPin.P16, 180)
    pins.servoWritePin(AnalogPin.P15, 0)
}
let state = 0
let event = 0
event = 0
state = 0
pins.digitalWritePin(DigitalPin.P14, 0)
pins.digitalWritePin(DigitalPin.P16, 0)
pins.digitalWritePin(DigitalPin.P15, 0)
basic.pause(2000)
basic.forever(function () {
    if (state == 0) {
        basic.showIcon(IconNames.Asleep)
    } else {
        if (event >= 5) {
            basic.showNumber(event)
            Stop()
            basic.showIcon(IconNames.Angry)
        } else {
            Driver()
        }
    }
})
