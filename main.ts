input.onButtonPressed(Button.A, function () {
    Running = 1
})
input.onButtonPressed(Button.B, function () {
    Running = 0
})
let Running = 0
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
Running = 0
basic.forever(function () {
    if (Running == 1) {
        RingbitCar.forward()
        basic.showIcon(IconNames.Happy)
        if (RingbitCar.ringbitcar_sonarbit(RingbitCar.Distance_Unit.Distance_Unit_cm) < 20) {
            basic.showIcon(IconNames.No)
            RingbitCar.running_distance(RingbitCar.Direction_run.backward, 15)
            RingbitCar.steering_angle(RingbitCar.Direction_turn.right, 120)
        }
    } else {
        RingbitCar.brake()
        basic.showNumber(RingbitCar.ringbitcar_sonarbit(RingbitCar.Distance_Unit.Distance_Unit_cm))
    }
})
