var log = {

    fun: function(){
        console.log("This is function present in export.js file")
    },
    info: function(info){
        console.log(`Info : ${info}`)
    },
    warning: function(warning){
        console.log(`Warning : ${warning}`)
    },
    error: function(error){
        console.log(`Error : ${error}`)
    },
}

 module.exports = log

module.exports.display = function(){return "This is additional method"}

module.exports.message = "This is Message !"
