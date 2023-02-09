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
        }
    }
    return {dataLogin}
}