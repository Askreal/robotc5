def Forward():
    sensors.dd_mmotor(AnalogPin.P13, 1, AnalogPin.P14, 255)
    sensors.dd_mmotor(AnalogPin.P15, 1, AnalogPin.P16, 255)

def on_button_pressed_a():
    while pins.digital_read_pin(DigitalPin.P1) == 0 and pins.digital_read_pin(DigitalPin.P8) == 0:
        Forward()
    Stop()
input.on_button_pressed(Button.A, on_button_pressed_a)

def NLeft():
    sensors.dd_mmotor(AnalogPin.P13, 1, AnalogPin.P14, 255)
    sensors.dd_mmotor(AnalogPin.P15, 1, AnalogPin.P16, 255)
def Driver():
    if pins.digital_read_pin(DigitalPin.P1) == 0 and pins.digital_read_pin(DigitalPin.P8) == 0:
        Forward()
    elif pins.digital_read_pin(DigitalPin.P1) == 1 and pins.digital_read_pin(DigitalPin.P8) == 0:
        while pins.digital_read_pin(DigitalPin.P1) == 1 and pins.digital_read_pin(DigitalPin.P8) == 0:
            pass
        Stop()
    elif pins.digital_read_pin(DigitalPin.P1) == 0 and pins.digital_read_pin(DigitalPin.P8) == 1:
        pass
    elif pins.digital_read_pin(DigitalPin.P1) == 1 and pins.digital_read_pin(DigitalPin.P8) == 1:
        pass

def on_button_pressed_b():
    pass
input.on_button_pressed(Button.B, on_button_pressed_b)

def Stop():
    sensors.dd_mmotor(AnalogPin.P15, 0, AnalogPin.P16, 0)
    sensors.dd_mmotor(AnalogPin.P13, 0, AnalogPin.P14, 0)
def Backward():
    sensors.dd_mmotor(AnalogPin.P15, 0, AnalogPin.P16, 255)
    sensors.dd_mmotor(AnalogPin.P13, 0, AnalogPin.P14, 255)

def on_forever():
    pass
basic.forever(on_forever)
