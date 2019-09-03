const chalk = require('chalk')
const figlet = require('figlet')
const request = require('request')
const pinkeys_questions = require('./pinkeys-questions')

const run = async () => {

  console.log(chalk.red(figlet.textSync('PinKeys')));
  console.log(chalk.gray('\n       Privacy for Everyone\n'));

  const pinkeys_answers = await pinkeys_questions.askPinKeysQuestions();
  console.log(pinkeys_answers);

  request(`https://www.pinkeys.com/api/v1.0/users/${pinkeys_answers.username}/${pinkeys_answers.key_type}`,
  {json: true}, function(err, req, body) {
    if(err) return console.log(chalk.red(err));
    for(var key of body.user) {
      console.log(key.value)
    }  
  });
} 
run();