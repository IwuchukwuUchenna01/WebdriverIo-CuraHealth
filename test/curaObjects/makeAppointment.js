const Page = require('../curaObjects/page')
const { $ } = require('@wdio/globals')

class MakeAppointment extends Page{
    get btnMakeAppointment(){
        return $('#btn-make-appointment')
    }
    get userName(){
        return $("//input[@id='txt-username']")
        //return $('#txt-username')
    }
    get password(){
        return $("//input[@id='txt-password']")
        //return $('#txt-password')
    }
    get btnLogin(){
        return $('#btn-login')
    }
    get clickFacility(){
        return $('#combo_facility')
    }
    get selectFacility(){
        return $('option[value="Tokyo CURA Healthcare Center"]')
    }
    get boxReadmission(){
        return $('#chk_hospotal_readmission')
    }
    get radioMedicaid(){
        return $('.col-sm-4 > label:nth-of-type(2)')
    }
    get visitDate(){
        return $('input[placeholder="dd/mm/yyyy"]')
    }
    get addComment(){
        return $('#txt_comment')
    }
    get btnBookAppointment(){
        return $('#btn-book-appointment')
    }
    get verifySuccess(){
        return $('h2')
    }
    get returnToHomePage(){
        return $('a[href="https://katalon-demo-cura.herokuapp.com/"]')
    }
    //select burger menu to Logout 
    get burgerMenu(){
        return $('#menu-toggle')
    }
    get btnLogout(){
        return $('a[href="authenticate.php?logout"]')
    }

    async login (username, password) {
        await this.btnMakeAppointment.click()
        await this.userName.setValue(username);
        await this.password.setValue(password);
        await this.btnLogin.click();
        
    }
    async bookSlot(date){
        await this.clickFacility.click()
        await this.selectFacility.click()
        await this.boxReadmission.click()
        await this.radioMedicaid.click()
        await this.visitDate.setValue(date)
        await this.addComment.setValue('this is crazy')
        await this.btnBookAppointment.click()
    }
    async confirmAppointment(){
        await this.verifySuccess.isEqual('Appointment Confirmation')
        await this.returnToHomePage.click()
    }
    async logout(){
        await this.burgerMenu.click()
        await this.btnLogout.click()
    }
}
module.exports = new MakeAppointment();