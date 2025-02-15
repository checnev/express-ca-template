# Express Clean Architecture Template

____
## Project Structure
This project follows the Clean Architecture principles, with a focus on clear separation of concerns and testability. Below is a description of the layers, their responsibilities, the folder structure, and the flow of data between them.

### Project Layers

#### 1. App Layer
The App Layer is the foundational layer responsible for the overall configuration and setup of the application. It contains key components like application configuration, providers, and routing, which allow the app to function correctly and handle incoming requests.

#### 2. Domain Layer
Contains the core business logic of the application.

- `Repositories`: Interfaces for repositories that are used for Dependency Injection (DI) in Use Cases. Repositories abstract the data access logic.
- `Entities`: Domain models and critical business logic. These are the core of the application and represent the fundamental business concepts.
- `UseCases`: The specific business use cases that implement the logic for various user actions. Use cases work with repositories and domain models to implement the business rules.

#### 3. Data Layer
Handles data manipulation and interaction.

- `Repositories (Implementations)`: Concrete implementations of the repositories defined in the Domain Layer. These repositories interact with data sources to retrieve or store data.
- `DTO`: Data Transfer Objects used to interact with the database and represent the data in a format that is compatible with the storage mechanism.
- `DataSources?`: **Optional Layer.** The sources of data (e.g., databases, APIs). These manage the actual interaction with external systems and are injected into repositories.

#### 4. Feature Layer
Responsible for handling the user-facing aspects of the application, like HTTP controllers and API responses.

- `Controllers`: HTTP controllers responsible for handling incoming HTTP requests. They convert HTTP DTOs into Domain Models, using mappers.
- `DTO`: Data Transfer Objects for HTTP communication.

#### 5. Infrastructure Layer
Contains configuration files, setup, and low-level system details (e.g., logging, environment setup). This layer serves as the "glue" for connecting various systems and services together.

## Folder Structure
Here is an example of the folder structure based on the layers described above:

```
src/
├──  app/
│    ├── middleware/           # Application middlewares
│    └── routes                # Routers and router config
│ 
├──  domain/
│    ├── repositories/         # Interfaces for repositories
│    ├── entities/             # Domain models and business logic
│    └── usecases/             # Use cases implementing business logic
│
├──  data/
│    ├── repositories/         # Implementations of repositories
│    ├── dto/                  # Data Transfer Objects for database interaction
│    └── datasources/          # Data sources for database interaction (e.g., TypeORM, Axios)
│     
├──  feature/
│    ├── controllers/          # HTTP controllers
│    ├── dto/                  # HTTP Data Transfer Objects
│    └── mappers/              # Mappers for converting between DTOs and Domain Models
|
└──  infrastructure/           # Some infrastructure details (e.g. logger, database)
```

## Data Flow
```
Controller (Feature Layer)
    │
    └──► Use Case (Domain Layer)
            │
            └──► Repository (Data Layer)
                    │
                    └──► Data Source (Data Layer)
```

### 1. Controller (Feature Layer)
- Receives HTTP requests and parses the incoming data (HTTP DTO).
- Converts the HTTP DTO into a Domain Model using the appropriate mapper.
- Passes the Domain Model to the Use Case for processing.

### 2. Use Case (Domain Layer)
- Injects the necessary repositories (via Dependency Injection).
- Accepts Domain Models and implements business logic.
- Interacts with repositories to persist or retrieve data.
- Returns the results to the controller.

### 3. Repository (Data Layer)
- Injects Data Sources to interact with the actual data storage (e.g., database). _**The Data Source is Optional**,  but you can interact with the data storage directly from the repository implementation._
- Converts Domain Models into Database DTOs (and vice versa) for compatibility with the data layer.
- Passes the data to or from the Data Source.

### 4. Data Source (Data Layer) `Optional`
- Manages the actual interaction with the external data storage (e.g., database, third-party API).
- Converts Database DTOs into a format suitable for storage or transmission.
- Executes queries or commands on the underlying data system.

#### Optional Layer for Testing
This structure allows for testing by interacting directly with the repositories, bypassing the usual flow of DI and Use Cases.
This is an optional layer for convenience and does not affect the overall architecture.


## Conclusion
This architecture ensures that business logic is isolated from external systems, making the application more maintainable, testable, and flexible. By adhering to these principles, we can easily swap out technology choices (like changing from TypeORM to another ORM) without impacting core business logic.