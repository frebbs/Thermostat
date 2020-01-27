'use strict';

describe('Thermostat', () => {
    let thermostat;

    beforeEach( () => {
        thermostat = new Thermostat();
    });

    it('starts at 20 degrees', () => {
        expect(thermostat.getCurrentTemperature()).toEqual(20);
    });

    it('has a minimum of 10 degrees', () => {
        for (let x = 0; x < 11; x++) {
            thermostat.down();
        }
        expect(thermostat.getCurrentTemperature()).toEqual(10);
    });

    it('has power saving mode on by default', () => {
       expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });

    it('can switch off Power Saving Mode', () => {
        thermostat.switchPowerSavingsModeOff();
        expect(thermostat.isPowerSavingModeOn()).toBe(false);
    });

    it('can switch on Power Saving Mode', () => {
        thermostat.switchPowerSavingsModeOff();
        expect(thermostat.isPowerSavingModeOn()).toBe(false);
        thermostat.switchPowerSavingsModeOn();
        expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });

    it('can be reset beck to default mode (PSM ON)', () => {
       for (let x = 0; x < 14; x++) {
           thermostat.up();
       }
       thermostat.resetTemperature();
       expect(thermostat.getCurrentTemperature()).toEqual(20);
    });

    describe('when power saving mode is on', () => {
       it('has a maximum temperature of 25 degrees', () => {
           for(let x = 0; x < 6; x++) {
            thermostat.up();
           }
           expect(thermostat.getCurrentTemperature()).toEqual(25);
       });
    });

    describe('when power saving mode is off', () => {
        it('has a maximum temperature of 32 degrees', () => {
           thermostat.switchPowerSavingsModeOff();
           for(let x = 0; x < 15; x++) {
               thermostat.up();
           }
           expect(thermostat.getCurrentTemperature()).toEqual(32);
        });
    });

});

