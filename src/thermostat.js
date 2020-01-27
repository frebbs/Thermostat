'use strict';

class Thermostat {

    constructor() {
        this.MINIMUM_TEMPERATURE = 10;
        this.MAX_LIMIT_PSM_ON = 25;
        this.MAX_LIMIT_PSM_OFF = 32;
        this.DEFAULT_TEMPERATURE = 20;

        this.temperature = this.DEFAULT_TEMPERATURE;
        this.powerSavingMode = true;
    };

    getCurrentTemperature() {
        return this.temperature;
    };

    isMinimumTemperature() {
        return this.temperature === this.MINIMUM_TEMPERATURE;
    };

    down() {
        if (this.isMinimumTemperature()) {
            return;
        }

        this.temperature --;
    };

    up() {
        if (this.isMaximumTemperature()) {
            return;
        }

        this.temperature ++;
    };

    isPowerSavingModeOn() {
        return this.powerSavingMode === true
    };

    switchPowerSavingsModeOff() {
       return this.powerSavingMode = false;
    };

    switchPowerSavingsModeOn() {
     return this.powerSavingMode = true;
    };

    isMaximumTemperature() {
        if(this.isPowerSavingModeOn() === false) {
            return this.temperature === this.MAX_LIMIT_PSM_OFF;
        }
        return this.temperature === this.MAX_LIMIT_PSM_ON;
    };

    resetTemperature() {
        this.temperature = this.DEFAULT_TEMPERATURE;
    };

}