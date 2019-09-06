const chalk = require('chalk')
const figlet = require('figlet')
const request = require('request')
const pinkeysQuestions = require('./pinkeys-questions')

const run = async () => {
  console.log(chalk.red(figlet.textSync('PinKeys')))
  console.log(chalk.gray('\n       Privacy for Everyone\n'))

  const pinkeysAnswers = await pinkeysQuestions.askPinKeysQuestions()
  console.log(pinkeysAnswers)

  request(`https://www.pinkeys.com/api/v1.0/users/${pinkeysAnswers.username}/${pinkeysAnswers.key_type}`,
    { json: true }, function (err, res, body) {
      if (err) return console.log(chalk.red(err))
      if (res.statusCode !== 200) return console.log(chalk.red('User not found'))
      for (var key of body.user) {
        console.log(key.value)
      }
    })
}
run()
