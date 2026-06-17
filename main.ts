input.onButtonPressed(Button.A, function () {
    motorOn = true
    basic.showIcon(IconNames.Yes)
    serial.writeLine("START pressed | Motor ON")
})
input.onButtonPressed(Button.B, function () {
    motorOn = false
    basic.showIcon(IconNames.No)
    serial.writeLine("STOP pressed | Motor OFF")
})
let motorOn = false
serial.writeLine("TEST START")
motorOn = false
basic.showIcon(IconNames.No)
basic.forever(function () {
    if (motorOn) {
        led.toggle(0, 0)
        basic.pause(500)
        serial.writeLine("motor running")
        basic.pause(1500)
    } else {
        basic.pause(200)
    }
})
