const { expect } = require('@wdio/globals')
const makeAppointment = require('../curaObjects/makeAppointment')

describe('end to end testing for cura health', ()=>{
    it('make appointment', async ()=>{
        await makeAppointment.open()
        await makeAppointment.login('John Doe', 'ThisIsNotAPassword')
        await makeAppointment.bookSlot('1/6/2023')
        await makeAppointment.confirmAppointment()
        await makeAppointment.logout()
    })
})