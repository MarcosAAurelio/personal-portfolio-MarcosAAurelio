# Meu Portfólio de Projetos

Repositório central para organizar projetos atuais, futuros e arquivados, com um portfólio responsivo para apresentá-los.

## Abrindo o portfólio

Abra o arquivo `index.html` no navegador. Para desenvolvimento local, você também pode usar a extensão Live Server do VS Code.

Os dados pessoais e profissionais ficam em `index.html`. Para adicionar ou alterar projetos, atualize a lista `projects` no início de `script.js` e forneça o texto nos dois idiomas.

O portfólio possui português e inglês, temas claro e escuro, navegação responsiva e botão para copiar o e-mail.

## Estrutura

```text
projetos/     Projetos em andamento
modelos/      Estruturas e arquivos reutilizáveis
arquivo/      Projetos concluídos ou pausados
docs/         Anotações e documentação geral
```

Cada projeto deve ficar em sua própria pasta dentro de `projetos/`:

```text
projetos/
└── nome-do-projeto/
    ├── README.md
    ├── src/
    └── ...
```

## Adicionando um projeto

1. Crie uma pasta: `mkdir projetos/nome-do-projeto`.
2. Adicione um `README.md` explicando objetivo, tecnologias e como executar.
3. Salve os arquivos do projeto nessa pasta.
4. Registre a mudança no Git:

```bash
git add .
git commit -m "Adiciona nome-do-projeto"
```

## Boas práticas

- Use nomes de pastas curtos, descritivos e sem espaços.
- Nunca salve senhas, chaves de API ou arquivos `.env` no Git.
- Mova trabalhos concluídos ou pausados para `arquivo/`.
- Ajuste o `.gitignore` quando um projeto usar ferramentas específicas.
