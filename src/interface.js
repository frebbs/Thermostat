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
        $('#temperature').text(thermostat.temperature).attr('class', thermostat.energyUsage());
    }

    function displayWeather(city) {
        const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
        const token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
        const units = '&units=metric';
        $.get(url + token + units, function (data) {
            $('#current-temperature').text(data.main.temp);
        });
    }
    $('#select-city').submit(function(event) {
        event.preventDefault();
        let city = $('#current-city').val();
        displayWeather(city);
    });
    displayWeather('London');

});

