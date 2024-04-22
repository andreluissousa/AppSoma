import chalk from 'chalk';
import app from "./app";

const port = 3000;

console.info("-------------------------------------------------------");
console.info(chalk.blue(`Aplicação de soma rodando na porta ${port}`));

app.listen(port);
