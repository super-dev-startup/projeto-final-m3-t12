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
|/apresentation          | PUT & GET         |
|/services               | GET & POST        |
|/services/:id           | DELETE & PUT      |
|/contacts               | POST & GET        |
|/contacts/:id           | PUT, DELETE       |

### API
URL base --> https://project-m3-kenzie.herokuapp.com/


> **Métodos que precisam de Autenticação**
> **PUT** `/apresentation/1` <br/> <br/>
> **POST** `/services` <br/> <br/>
> **PUT, POST, DELETE** `/services/:id` <br/> <br/>
> **POST** `/contacts` <br/> <br/>
> **PUT, POST, DELETE** `/contatos/:id`<br/>

------------------------------------------ <br/>
> **LOGIN** -->
> **POST** Endpoint: `/login`

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

<br/> <br/>
> **APRESENTAÇÃO** -->
> **PUT ou GET** Endpoint: `/apresentation`

* OBS: Em caso de alteração(PUT) a requisição deve ser feita enviando todos os dados, modificando apenas o(s) qual(is) se pretende alterar. Todos os atributos do objeto podem ser alterados.

O objeto de retorno será:

```
{
    "title": "Sua bio aqui",
    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    "body": " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    "born-in": "New York",
    "experience": "7+",
    "date-of-birth": "27 June 1992",
    "project-completed": "50+",
    "happy-cliente": "30+"
}
```

<br/> <br/>
> **CONTACTS** -->
> **PUT, POST ou GET** Endpoint: `/contacts`

Objeto da requisição POST: 

```
{
	"plataforma": "url"
}
```

O objeto de retorno da requisão GET será:

```
[
	{
		"whatsapp": "Use PUT pata alterar",
		"id": 1
	},
	{
		"instagram": "Use PUT pata alterar",
		"id": 2
	},
	{
		"twitter": "Use PUT pata alterar",
		"id": 3
	},
	{
		"facebook": "Use PUT pata alterar",
		"id": 4
	},
	{
		"email": "fotographer@mail.com",
		"id": 5
	}
]
```
 <br/> <br/>
> **SERVICES** -->
> **PUT, POST ou GET** Endpoint: `/services`

Objeto da requisição POST:

```
{
	"name": "string"
	"price": number
	"portfolio": url["string"]
}
```

O objeto de retorno da requisão GET será:

```
[
	{
		"name": "graduation",
		"price": 600,
		"portfolio": [
			"img1",
			"img2",
			"img3"
		],
		"id": 1
	},
	{
		"name": "wedding",
		"price": 900,
		"id": 2,
		"portfolio": [
			"img4",
			"img5",
			"img6"
		]
	}
]
```


------------------------------------------

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
- React elastic carousel
- React Icons
## Ferramentas utilizadas
- Jira
- JSON Server / Auth
- Whimsical
- Figma
- Git Hub
### O nível de complexidade estimado do projeto é de 7,5 (1-10)
[Links do projeto](https://linktr.ee/superdevs)
