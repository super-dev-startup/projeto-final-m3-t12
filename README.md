# SuperDevs Startup
**Somos uma startup que facilita a vida de profissionais autônomos que precisam aumentar sua presença digital, sem abrir mão de qualidade e eficiência. _Somos #1 em custo benefício_**
## Qual problema estamos resolvendo?
-   Em um mundo cada vez mais digital, os padrões de consumo e pesquisa por produtos e serviços mudaram radicalmente, tudo acontece pela internet. Sabemos que os profissionais precisam acompanhar as mudanças que essa digitalização traz, e é muito importante que seus serviços e produtos estejam disponíveis nesse novo ambiente. Porém ainda há uma dificuldade em estabelecer uma presença digital e ter um portfólio profissional publicado na internet e apenas perfis profissionais nas redes sociais não são mais suficientes para estabelecer essa presença. As principais causas dessa dificuldade são os altos valores para criação de sites personalizados, o difícil acesso aos profissionais qualificados para direcionar as necessidades do cliente para uma solução eficiente e a falta de personalização adequada por meio das plataformas que criam sites mais generalistas.
## Qual é a solução?
-   Como forma de cobrir esse gap, pensamos em uma solução que fosse viável para criar projetos personalizados seguindo um padrão de: apresentação profissional, serviços/produtos disponíveis, portfólio, contratação do serviço e envio de dúvidas ou propostas para o profissional. Para a execução desse MVP, escolhemos um cliente que é fotógrafo e precisa de um site personalizado.
## Quais as features da aplicação?
1.  **Endpoints**

|  Rota                  | Tipo              |
|----------------------  | ------------------|
|/login                  | POST              |
|/apresentation/1        | PUT & GET         |
|/servicos               | GET & POST        |
|/servicos/:id           | DELETE & PUT      |
|/contacts               | POST & GET        |
|/contacts/:id           | PUT, DELETE       |

### API
URL base --> https://project-m3-kenzie.herokuapp.com/

> **LOGIN**
> **POST** `/login`

Faça o login com:

```
{
	"email": "fotographer@mail.com",
	"password": "123456"
}
```

O objeto de retorno será:

```
{
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZvdG9ncmFwaGVyQG1haWwuY29tIiwiaWF0IjoxNjYxODkxMjE5LCJleHAiOjE2NjE4OTQ4MTksInN1YiI6ImFkbWluIn0.9lgbx_atZMz-_d7IsxjFZLP7PWnUhsQ3d5cAGqNv83A",
	"user": {
		"email": "fotographer@mail.com",
		"name": "Tyler",
		"age": 38,
		"id": "admin"
	}
}
```

> **Métodos que precisam de Autenticação**
> > **PUT** `/apresentation/1` <br/>
> > **POST** `/services` <br/>
> > **PUT POST DELETE** `/services/:id` <br/>
> > **POST** `/contacts` <br/>
> > **PUT POST DELETE** `/contatos/:id`


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
