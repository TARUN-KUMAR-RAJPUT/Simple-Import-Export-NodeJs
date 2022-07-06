const log = require("./export")

log.fun()

log.info('Here is your information')
log.warning('There could be problems')
log.error('Seems like there is an error')

console.log(log.display())

console.log(log.message)