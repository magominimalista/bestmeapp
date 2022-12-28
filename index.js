const fs = require('fs');

const questions = [
    "Qual o seu nome?",
    "Descreva quem é você. Como se sente no mundo, que identidade assume.",
    "O que te faz bem? Cite até 3 coisas que te fazem sorrir.",
    "O que te faz mal? Cite até 3 coisas que te fazem se sentir ruim.",
    "Liste seus pontos fortes",
    "Liste seus pontos fracos",
    "Quais suas necessidades?",
    "Quais suas limitações",
    "Liste seus bons hábitos",
    "Liste seus maus hábitos",
    "Liste os hábitos que você quer conquistar em 2023",
    "Quais são seus medos atualmente? O que te limita?",
    "Pelo que foi grato em 2022?",
    "Pelo que é grato em sua vida?",
    "O que te motiva?",
    "O que é sucesso pra você?",
    "Sua maior qualidade",
    "Sua melhor habilidade",
    "Melhor lugar no momento",
    "O que mais gosta em você",
    "O que menos gosta em você",
    "Última vez que fez algo novo",
    "O melhor de 2022:",
    "O pior de 2022:",
    "Em 2022 eu aprendi:",
    "Em 2023 vou parar de:",
    "Em 2023 vou focar em:",
    "Em 2023 vou aprender:",
    "Em 2023 o que você deseja/espera:",
    "Deseja acrescentar algo em seu relatório?"
];

const ask = (index = 0) => {
  process.stdout.write("\n" + questions[index] + " > ");
};

ask();

const answers = [];

process.stdin.on("data", (data) => {
  answers.push(data.toString().trim());
  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    const output = `
# Relatório anual de ${answers[0]}!

### Descreva quem é você. Como se sente no mundo, que identidade assume.
${answers[1]}

---

### O que te faz bem? Cite até 3 coisas que te fazem sorrir.
${answers[2]}

---

### O que te faz mal? Cite até 3 coisas que te fazem se sentir ruim.
${answers[3]}

---

### Liste seus pontos fortes
${answers[4]}

---

### Liste seus pontos fracos
${answers[5]}

---

### Quais suas necessidades?
${answers[6]}

---

### Quais suas limitações
${answers[7]}

---

### Liste seus bons hábitos
${answers[8]}

---

### Liste seus maus hábitos
${answers[9]}

---

### Liste os hábitos que você quer conquistar em 2023
${answers[10]}

---

### Quais são seus medos atualmente? O que te limita?
${answers[11]}

---

### Pelo que foi grato em 2022?
${answers[12]}

---

### Pelo que é grato em sua vida?
${answers[13]}

---

### O que te motiva?
${answers[14]}

---

### O que é sucesso pra você?
${answers[15]}

---

### Sua maior qualidade
${answers[16]}

---

### Sua melhor habilidade
${answers[17]}

---

### Melhor lugar no momento
${answers[18]}

---

### O que mais gosta em você
${answers[19]}

---

### O que menos gosta em você
${answers[20]}

---

### Última vez que fez algo novo
${answers[21]}

---

### O melhor de 2022:
${answers[22]}

---

### O pior de 2022:
${answers[23]}

---

### Em 2022 eu aprendi:
${answers[24]}

---

### Em 2023 vou parar de:
${answers[25]}

---

### Em 2023 vou focar em:
${answers[26]}

---

### Em 2023 vou aprender:
${answers[27]}

---

### Em 2023 o que você deseja/espera:
${answers[28]}

---

### Deseja acrescentar algo em seu relatório?
${answers[29]}

    `;

    fs.writeFile("output.md", output, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Arquivo salvo com sucesso!");
      }
      process.exit();
    });
  }
});