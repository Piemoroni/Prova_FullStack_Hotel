# Hotel DB

Sistema web desenvolvido para gerenciamento de quartos e reservas de hotel, permitindo o cadastro, consulta e exclusão de quartos e reservas através de uma interface web integrada a uma API e banco de dados.

---

# Funcionalidades

## Quartos

- Cadastrar quarto
- Visualizar quartos cadastrados
- Excluir quarto
- Visualizar reservas de um quarto

## Reservas

- Cadastrar reserva
- Visualizar reservas
- Excluir reserva
- Associar reserva a um quarto

---

# Tecnologias Utilizadas

## Front-end

- HTML5
- CSS3
- JavaScript

## Back-end

- Node.js
- Express.js

## Banco de Dados

- MySQL

## ORM

- Prisma ORM

## Ferramentas

- Visual Studio Code
- GitHub
- Insomnia

---

# Banco de Dados

## Tabela Quarto

| Campo | Tipo |
|---------|---------|
| id | Int |
| numero | String |
| tipo | String |

## Tabela Reserva

| Campo | Tipo |
|---------|---------|
| id | Int |
| hospede | String |
| data_entrada | DateTime |
| data_saida | DateTime |
| quartoId | Int |

### Relacionamento

- Um quarto possui várias reservas.
- Uma reserva pertence a um único quarto.

---

# Como Executar o Projeto

## 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/hotelreservas.git
```

---

## 2. Acessar a pasta da API

```bash
cd hotelreservas/api
```

---

## 3. Instalar dependências

```bash
npm install
```

---

## 4. Configurar o banco de dados

Criar o banco:

```sql
CREATE DATABASE hotel_db;
```

Configurar o arquivo `.env`:

```env
DATABASE_URL="mysql://usuario:senha@localhost:3306/hotel_db"
```

---

## 5. Gerar o Prisma Client

```bash
npx prisma generate
```

---

## 6. Criar as tabelas

```bash
npx prisma db push
```

---

## 7. Iniciar o servidor

```bash
npm start
```

ou

```bash
node server.js
```

Servidor disponível em:

```text
http://localhost:3000
```

---

## 8. Executar o Front-end

Abrir a pasta:

```text
web/
```

e executar:

```text
index.html
```
---

# Wireframes e Inspirações

## Inspiração da Tela Principal

![Inspiração 1](./wireframes/insp1.png)

Inspiração Dada Pelo Professor - Cores

![Inspiração 2](./wireframes/insp2.png)

Inspiração Site Locadora de Filmes - Cadastrar

![Inspiração 3](./wireframes/insp3.png)

Inpiração Site Spotify - Menu Lateral

![Inspiração 4](./wireframes/insp4.png)

Inspiração Site Recitas - Consumo da API

---

# Prints do Projeto

## Tela Principal

![Tela Principal](./wireframes/inicio.png)


## Cadastro de Quarto

![Cadastro de Quarto](./wireframes/quarto.png)


## Tela de Reservas

![Tela de Reservas](./wireframes/reserva.png)


## Cadastro de Reserva

![Cadastro de Reserva](./wireframes/lista.png)

---

# Endpoints da API

## Quartos

| Método | Endpoint |
|----------|----------|
| GET | /quarto/listar |
| GET | /quarto/buscar/:id |
| POST | /quarto/cadastrar |
| DELETE | /quarto/excluir/:id |

---

## Reservas

| Método | Endpoint |
|----------|----------|
| GET | /reserva/listar |
| GET | /reserva/buscar/:id |
| POST | /reserva/cadastrar |
| DELETE | /reserva/excluir/:id |

---

# Desenvolvedora

Projeto desenvolvido como atividade prática de desenvolvimento web utilizando:

- Node.js
- Express
- Prisma ORM
- MySQL
- HTML
- CSS
- JavaScript


Por Pietra Moroni
---