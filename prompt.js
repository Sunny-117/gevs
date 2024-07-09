import inquirer from 'inquirer';
/**
 * @param {string} message 询问提示语句
 * @returns  {Object} 根据name属性获取用户输入的值{confirm: true/false}
 */
export const inquirerConfirm = async (message) => {
    const answer = await inquirer.prompt({
        type: "confirm",
        name: "confirm",
        message,
    });
    return answer;
}