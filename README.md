# Projects Structure

```
src/
├── app/
│   ├── config/
│   ├── middleware/
│   └── server.ts
├── data/
│   ├── repositories/
│   ├── dataSources/
│   └── dto/
├── domain/
│   ├── entities/
│   ├── useCases/
│   └── repositories/
├── features/
│   └──user/
│       ├── controllers/
│       ├── services/
│       ├── dto/
│       └── validations/

├── infrastructure/
│   ├── database/
│   ├── apiClients/
│   └── logger/
└── interfaces/
    ├── http/
    └── graphql/
```