'use strict';

describe('Themostat', () => {
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

});

