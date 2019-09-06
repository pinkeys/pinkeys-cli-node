const inquirer = require('inquirer')

module.exports = {
  askPinKeysQuestions: function () {
    const questions =
      [
        {
          name: 'username',
          type: 'input',
          message: 'Enter username',
          validate: function (value) {
            if (value.length && value.length >= 5) {
              return true
            } else {
              return 'Please enter the name of the PinKeys\' user to lookup'
            }
          }
        },
        {
          name: 'key_type',
          type: 'list',
          message: 'Key type to extract',
          choices: ['rsa', 'pgp', 'ssh'],
          validate: function (value) {
            if (value.length && value.length >= 5) {
              return true
            } else {
              return 'Please enter the name of the PinKeys\' user to lookup'
            }
          }
        }

      ]
    return inquirer.prompt(questions)
  }
}
