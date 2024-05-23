def NLeft2():
    Forward()
    basic.pause(500)
    Stop()
    basic.pause(100)
    while pins.digital_read_pin(DigitalPin.P1) == 0:
        Left()
    Stop()
    basic.pause(100)
    while pins.digital_read_pin(DigitalPin.P1) == 1:
        Left()
    Stop()
    while pins.digital_read_pin(DigitalPin.P1) == 1:
        Left()
def Left():
    pins.servo_write_pin(AnalogPin.P16, 0)
    pins.servo_write_pin(AnalogPin.P15, 0)
def Forward():
    pins.servo_write_pin(AnalogPin.P15, 180)
    pins.servo_write_pin(AnalogPin.P16, 0)

def on_button_pressed_a():
    while pins.digital_read_pin(DigitalPin.P1) == 0 and pins.digital_read_pin(DigitalPin.P8) == 0:
        Forward()
    Stop()
input.on_button_pressed(Button.A, on_button_pressed_a)

def NLeft():
    Forward()
    basic.pause(1800)
    Stop()
    awry()
    basic.pause(1800)
    Left()
    basic.pause(1800)
    Stop()
    awry()
def Activate(num: number):
    if num == 1:
        NLeft()
        awry()
    elif num == 2:
        basic.show_icon(IconNames.HEART)
    elif num == 3:
        basic.show_icon(IconNames.HEART)
    elif num == 4:
        basic.show_icon(IconNames.HEART)
    elif num == 5:
        basic.show_icon(IconNames.HEART)
    elif num == 6:
        basic.show_icon(IconNames.HEART)
    elif num == 7:
        basic.show_icon(IconNames.HEART)
    elif num == 8:
        basic.show_icon(IconNames.HEART)
    elif num == 9:
        basic.show_icon(IconNames.HEART)
    elif num == 10:
        basic.show_icon(IconNames.HEART)
    elif num == 11:
        basic.show_icon(IconNames.HEART)
    elif num == 12:
        basic.show_icon(IconNames.HEART)
    else:
        basic.show_icon(IconNames.HEART)
def awry():
    if pins.digital_read_pin(DigitalPin.P1) == 1 and pins.digital_read_pin(DigitalPin.P8) == 0:
        basic.show_icon(IconNames.ASLEEP)
        while pins.digital_read_pin(DigitalPin.P1) == 1 and pins.digital_read_pin(DigitalPin.P8) == 0:
            Left()
        Stop()
        basic.show_icon(IconNames.DUCK)
        return 0
    elif pins.digital_read_pin(DigitalPin.P1) == 0 and pins.digital_read_pin(DigitalPin.P8) == 1:
        basic.show_icon(IconNames.BUTTERFLY)
        while pins.digital_read_pin(DigitalPin.P1) == 0 and pins.digital_read_pin(DigitalPin.P8) == 1:
            Right()
        Stop()
        basic.show_icon(IconNames.DUCK)
        return 0
    return 0
def Driver():
    if pins.digital_read_pin(DigitalPin.P1) == 0 and pins.digital_read_pin(DigitalPin.P8) == 0:
        Forward()
    elif pins.digital_read_pin(DigitalPin.P1) == 1 and pins.digital_read_pin(DigitalPin.P8) == 0:
        Stop()
        basic.pause(1000)
        awry()
    elif pins.digital_read_pin(DigitalPin.P1) == 0 and pins.digital_read_pin(DigitalPin.P8) == 1:
        Stop()
        basic.pause(1000)
        awry()
    elif pins.digital_read_pin(DigitalPin.P1) == 1 and pins.digital_read_pin(DigitalPin.P8) == 1:
        Stop()
        basic.pause(1000)
        event2 = event2 + 1
        Activate(event2)

def on_button_pressed_ab():
    awry()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    NLeft()
input.on_button_pressed(Button.B, on_button_pressed_b)

def Right():
    pins.servo_write_pin(AnalogPin.P16, 180)
    pins.servo_write_pin(AnalogPin.P15, 180)
def Stop():
    pins.servo_write_pin(AnalogPin.P15, 90)
    pins.servo_write_pin(AnalogPin.P16, 90)
def Backward():
    pins.servo_write_pin(AnalogPin.P16, 0)
    pins.servo_write_pin(AnalogPin.P15, 180)
    
event = 0
pins.digital_write_pin(DigitalPin.P15, 0)
pins.digital_write_pin(DigitalPin.P16, 0)

def on_forever():
    Driver()
basic.forever(on_forever)
