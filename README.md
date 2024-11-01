# PetAdoption

PetAdoption is a web API project built using Express.js for managing pet adoptions. This project was created as part of a weekend assignment.

## Project Overview

This project includes the following features:
- A backend API built with Express.js.
- Integration tests for each route.
- Unit tests following the ZOMBIES pattern.

## Tech Stack

- TypeScript
- Node.js
- Express.js
- Supertest
- Zod
- UUID

## Features

The application includes the following routes:
- `GET /api/pets`: Get all pets.
- `POST /api/pets`: Create a new pet.
- `GET /api/pets/:id`: Get a pet by ID.
- `DELETE /api/pets/:id`: Delete a pet by ID.
- `PUT /api/pets/:id`: Update a pet by ID.

## Project Structure

- The code architecture follows best practices with tidy naming conventions and factory functions.
- Features are isolated and do not directly access each other's database data. Inter-feature communication is done through service methods.

## Testing

- Each route has an integration test.
- Unit tests are implemented for at least one feature using pure functions without side effects.

## Presentation

A video presentation is available showcasing:
- An introduction to the developer.
- An overview of the project and its big picture plan.
- A demonstration of the project board and the work completed over the weekend.
- A live demo of the application and its test cases.
- A walkthrough of the code fulfilling the project requirements.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/alimohseni99/PetAdoption.git
   ```
