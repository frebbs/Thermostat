$(document).ready(() => {
    let thermostat = new Thermostat();
    $('#temperature').text(thermostat.getCurrentTemperature());
});



// interface.js
$(document).ready(() => {
    let thermostat = new Thermostat();
    updateTemperature();

    $('#temperature-up').click(() => {
        thermostat.up();
        updateTemperature();
    });

    $('#temperature-down').click(() => {
        thermostat.down();
        updateTemperature();
    });

    $('#temperature-reset').click(() => {
        thermostat.resetTemperature();
        updateTemperature();
    });

    $('#powersaving-on').click(() => {
        thermostat.switchPowerSavingsModeOn();
        $('#power-saving-status').text('on');
        updateTemperature();
    });

    $('#powersaving-off').click(() => {
        thermostat.switchPowerSavingsModeOff();
        $('#power-saving-status').text('off');
        updateTemperature();
    });

    function updateTemperature() {
        $('#temperature').text(thermostat.temperature);
        $('#temperature').attr('class', thermostat.energyUsage());
    }

});

