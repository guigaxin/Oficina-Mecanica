# Oficina Mecânica - API REST

API desenvolvida em Node.js com Express e MySQL para gerenciar veículos em uma oficina mecânica.

---

## O que você precisa ter instalado

Para rodar o projeto localmente:

* Node.js
* Git
* XAMPP (ou MySQL rodando na máquina)
* Alguma ferramenta para testar rotas (Postman, Insomnia ou Thunder Client)

---

## Configurando o Banco de Dados

1. Inicie o MySQL pelo painel do XAMPP.
2. Acesse o phpMyAdmin pelo navegador (http://localhost/phpmyadmin).
3. Vá na aba SQL e execute o comando abaixo para criar o banco e a tabela:

```sql
CREATE DATABASE IF NOT EXISTS oficina_mecanica;
USE oficina_mecanica;

CREATE TABLE IF NOT EXISTS veiculo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    placa VARCHAR(10) NOT NULL,
    modelo VARCHAR(50) NOT NULL,
    proprietario VARCHAR(100) NOT NULL
);
```
## Como rodar o Projeto

1. Clone o repositório:
```bash
git clone [https://github.com/guigaxin/Oficina-Mecanica.git](https://github.com/guigaxin/Oficina-Mecanica.git)
```

2. Entre na pasta do projeto:
```bash
cd Oficina-Mecanica
```

3. Instale as dependências:
```bash
npm install
```

4. Inicie o servidor:
```bash
npm run dev
```

O servidor vai rodar por padrão na porta 3000 (http://localhost:3000).

---

## Rotas da API

A rota base é /veiculo.

| Método | Endpoint | Descrição |
|---|---|---|
| GET | /veiculo | Retorna todos os veículos |
| GET | /veiculo/:id | Retorna um veículo específico por ID |
| POST | /veiculo | Cadastra um veículo |
| PUT | /veiculo/:id | Atualiza as informações de um veículo |
| DELETE | /veiculo/:id | Remove um veículo |

---

## Exemplo de uso

Para cadastrar um veículo via POST em `http://localhost:3000/veiculo`:

Corpo da requisição (JSON):
```json
{
  "placa": "ABC1D23",
  "modelo": "Civic",
  "proprietario": "Guilherme"
}
```

Resposta ao listar via GET em `http://localhost:3000/veiculo`:
```json
[
  {
    "id": 1,
    "placa": "ABC1D23",
    "modelo": "Civic",
    "proprietario": "Guilherme"
  }
]
```
