const { expect } = require('@wdio/globals')
const allureReporter = require('@wdio/allure-reporter').default
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
describe('Suite', () => {
    it('Case', () => {
        allureReporter.addFeature('Feature')
    })
})