'use strict';

class Thermostat {

    constructor() {
        this.MINIMUM_TEMPERATURE = 10;
        this.temperature = 20;
        this.powerSavingMode = true
    };

    getCurrentTemperature() {
        return this.temperature
    };

    isMinimumTemperature() {
        return this.temperature === this.MINIMUM_TEMPERATURE
    };

    down() {
        if (this.isMinimumTemperature()) {
            return;
        }

        this.temperature --;
    };

    isPowerSavingModeOn() {
        return this.powerSavingMode === this.powerSavingMode ;
    };
}