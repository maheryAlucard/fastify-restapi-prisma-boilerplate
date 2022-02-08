# fastify-restapi-prisma-boilerplate

This project is a NodeJs REST-API combined of [fastify](https://www.fastify.io/) [prisma](https://www.prisma.io) and [hygen](https://www.hygen.io/), to help developer concentrate on the coding by simplifying repetitive actions.

Database and model are managed by [prisma](https://www.prisma.io) ORM
Template are managed by [hygen](https://www.hygen.io/)

## Installation

You can clone the project and modify the name or you can use [bms-cli-mg](https://www.npmjs.com/package/bms-cli-mg) to create the your project.
For both methods you need to have [git](https://git-scm.com/) installed.

### Installation of [bms-cli-mg](https://www.npmjs.com/package/bms-cli-mg)

Cli need to be installed globally

```bash
npm install -g bms-cli-mg
```

Creat a new project from this project.

```bash
bms backend:create:project <your_project_name>
```

Then cd to your project and install modules.

```bash
cd <your_project_name>
npm install
```

### Installation without cli

Cone the project

```bash
git clone https://github.com/maheryAlucard/fastify-restapi-prisma-boilerplate.git
```

Modify folder name to desired name.
Then cd to your project

```bash
cd <your_project_name>
```

Update [name] in [package.json].
Then install modules.

```bash
npm install
```

Your project is good to go!

## Usage

First you need to initialize your database. go [here](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/connect-your-database-typescript-postgres) for more details on relational-databases and [here](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/mongodb/connect-your-database-typescript-mongodb) for mongodb

To start developing server

```bash
npm run start:watch
```

or

```bash
npm run dev
```

To build project

```bash
npm run build
```

### Add Model sets

With bms-cli

```bash
bms backend:g:model <model_name>
```

Without bms-cli

```bash
npm run g:model <model_name>
```

### Add socket message handler

With bms-cli

```bash
bms backend:g:sochandler <socket_message_name>
```

Without bms-cli

```bash
npm run g:sochandler <socket_message_name>
```

### Synchronies your database (needed after model creation)

With bms-cli

```bash
bms backend:db:sync
```

Without bms-cli

```bash
npm run syncdb
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
