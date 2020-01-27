'use strict';

describe('Themostat', () => {
    let thermostat;

    beforeEach( () => {
        thermostat = new Thermostat();
    })

    it('starts at 20 degrees', () => {
        expect(thermostat.temperature).toEqual(20);
    })
});

