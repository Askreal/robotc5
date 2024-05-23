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
function Forward () {
    pins.servoWritePin(AnalogPin.P15, 180)
    pins.servoWritePin(AnalogPin.P16, 0)
}
input.onButtonPressed(Button.A, function () {
    while (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P8) == 0) {
        Forward()
    }
    Stop()
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
    awry()
}
function Activate (num: number) {
    if (num == 1) {
        NLeft()
        awry()
    } else if (num == 2) {
        basic.showIcon(IconNames.Heart)
    } else if (num == 3) {
        basic.showIcon(IconNames.Heart)
    } else if (num == 4) {
        basic.showIcon(IconNames.Heart)
    } else if (num == 5) {
        basic.showIcon(IconNames.Heart)
    } else if (num == 6) {
        basic.showIcon(IconNames.Heart)
    } else if (num == 7) {
        basic.showIcon(IconNames.Heart)
    } else if (num == 8) {
        basic.showIcon(IconNames.Heart)
    } else if (num == 9) {
        basic.showIcon(IconNames.Heart)
    } else if (num == 10) {
        basic.showIcon(IconNames.Heart)
    } else if (num == 11) {
        basic.showIcon(IconNames.Heart)
    } else if (num == 12) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.Heart)
    }
}
function awry () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P8) == 0) {
        basic.showIcon(IconNames.Asleep)
        while (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P8) == 0) {
            Left()
        }
        Stop()
        basic.showIcon(IconNames.Duck)
        return 0
    } else if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P8) == 1) {
        basic.showIcon(IconNames.Butterfly)
        while (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P8) == 1) {
            Right()
        }
        Stop()
        basic.showIcon(IconNames.Duck)
        return 0
    }
    return 0
}
function Driver () {
    let event2: number;
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
        event2 = event2 + 1
        Activate(event2)
    }
}
input.onButtonPressed(Button.AB, function () {
    awry()
})
input.onButtonPressed(Button.B, function () {
    NLeft()
})
function Right () {
    pins.servoWritePin(AnalogPin.P16, 180)
    pins.servoWritePin(AnalogPin.P15, 180)
}
function Stop () {
    pins.servoWritePin(AnalogPin.P15, 90)
    pins.servoWritePin(AnalogPin.P16, 90)
}
function Backward () {
    pins.servoWritePin(AnalogPin.P16, 0)
    pins.servoWritePin(AnalogPin.P15, 180)
}
let event = 0
pins.digitalWritePin(DigitalPin.P15, 0)
pins.digitalWritePin(DigitalPin.P16, 0)
basic.forever(function () {
    Driver()
})
