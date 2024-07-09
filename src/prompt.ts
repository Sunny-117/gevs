import inquirer from "inquirer";

export const inquirerConfirm = async (message) => {
  const answer = await inquirer.prompt({
    type: "confirm",
    name: "confirm",
    message,
  });
  return answer;
};
