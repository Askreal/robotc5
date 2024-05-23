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
function event () {
	
}
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
function awry () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P8) == 0) {
        basic.showIcon(IconNames.Asleep)
        while (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P8) == 0) {
            Left()
        }
        Stop()
        return 0
    } else if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P8) == 1) {
        basic.showIcon(IconNames.Butterfly)
        while (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P8) == 1) {
            Right()
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
        basic.pause(1000)
        awry()
    } else if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P8) == 1) {
        Stop()
        basic.pause(1000)
        awry()
    } else if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P8) == 1) {
        Stop()
        basic.pause(1000)
    }
}
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
pins.digitalWritePin(DigitalPin.P15, 0)
pins.digitalWritePin(DigitalPin.P16, 0)
basic.forever(function () {
	
})
