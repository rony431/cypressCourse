module.exports = function () {
    // Comentarios
    // POM para login selectores
    var dataLogin = {
        user : 'standard_user',
        password : 'secret_sauce',
        selectorUser : '#user-name',
        selectorPassword : '#password',
        selectorButton : '#login-button',
        numberRandom () {
            return Math.floor(Math.random() * 100000)
        },
        nameRandom (){
            //backtick ``, '' , "" permite concatenar 
            var numberDinamic =  Math.floor(Math.random() * 10000)
            var name = `ronald${numberDinamic}`
            return name
        },
        selectorError : 'form > div> h3',
        messageError : 'Epic sadface: Username and password do not match any user in this service',
        messageErrorContain : 'Username and password do not match',
        productSelector : '#header_container>div>span',
        price : 'div:nth-child(1) > div> div.pricebar > div'
    }
    return {dataLogin}
}