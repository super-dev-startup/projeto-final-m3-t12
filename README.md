# SuperDevs Startup
**Somos uma startup que facilita a vida de profissionais auitônomos que precisam aumentar sua presença digital, sem abrir mão de qualidade e eficiência. _Somos #1 em custo benefício_**
## Qual problema estamos resolvendo?
-   Em um mundo cada vez mais digital, os padrões de consumo e pesquisa por produtos e serviços mudaram radicalmente, tudo acontece pela internet. Sabemos que os profissionais precisam acompanhar as mudanças que essa digitalização traz, é muito importante que seus serviços e produtos estejam disponível nesse novo ambiente. Porém ainda há uma dificuldade em estabelecer uma presença digital e ter um portfólio profissional publicado na internet e apenas perfis profissionais nas redes sociais não são mais suficientes para estabelecer essa presença. As principais causas dessa dificuldade são os altos valores para criação de sites personalizados, o difícil acesso aos profissionais qualificados para direcionar as necessidades do cliente para um solução eficiente e a falta de personalização adequada por meio das plataformas que criar sites mais generalistas.
## Qual é a solução?
-   Como forma de cobrir esse gap, pensamos em uma solução que fosse viável criar projetos personalizados seguindo um padrão de: Apresentação profissional, serviços/produtos disponíveis, portfólio, contratação do serviço e envio de dúvida ou proposta para o profissional. Para a execução desse MVP, escolhemos um cliente que é fotógrafo e precisa de um site personalizado.
## Quais as features da aplicação?
1.  **Endpoints**

|  Rota                  | Tipo              |
|----------------------  | ------------------|
|/apresentação           | PUT & GET         |
|/servicos               | GET & POST        |
|/servicos/:id           | DELETE, PUT & POST|
|/servicos/portfolio/:id | PUT, DELETE & GET |
|/contatos               | POST & GET        |
|/contatos/:id           | PUT, DELETE       |

2.  **Features do Front**
 - Descrição da atividade profissional do proprietário do site
 - Links dos contatos do proprietário no cabeçalho do site
 - Serviços prestados pelo proprietário
 - Portfólio dos serviços prestados, exibidos por tipo de serviço selecionado
 - Barra lateral com preço e botão de contratação
 - Layout adaptado para edição pelo administrador quando este estiver logado/autenticado
## Bibliotecas utilizadas no projeto
- React Hook Form
- Yup/Resolver
- React Toastfy
- Styled Components
- React Router Dom v6
- Axios
## Ferramentas utilizadas
- Jira
- JSON Server / Auth
- Whimsical
- Figma
- Git Hub
### O nível de complexidade estimado do projeto é de 7,5 (1-10)
[Links do projeto](https://linktr.ee/superdevs)
