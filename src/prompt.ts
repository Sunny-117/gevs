import inquirer from 'inquirer'

export async function inquirerConfirm(message: string) {
  const answer = await inquirer.prompt({
    type: 'confirm',
    name: 'confirm',
    message,
  })
  return answer
}
