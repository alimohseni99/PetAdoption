# Pet Adoption API

This project is a web API for managing pet adoptions. Users can view available pets, adopt pets, and manage their adopted pets. The API has two main features: Pet Management and Adoption Management.

## Table of Contents
- Overview
- [Tech Stack](#tech-stack)
- Features
- Routes
- Setup
- Testing
- [Project Board](#project-board)
- Excalidraw

## Overview
The Pet Adoption API allows users to manage pet adoptions. Users can view available pets, adopt pets, and manage their adopted pets. The API has two main features: Pet Management and Adoption Management.

## Tech Stack
- TypeScript
- TSX
- Node.js test runner
- Express.js
- Supertest
- Zod
- UUID

## Features
1. **Pet Management**
   - Add a new pet
   - Get all available pets
   - Get a pet by ID
   - Update pet details
   - Delete a pet

2. **Adoption Management**
   - Adopt a pet
   - Get all adopted pets
   - Get an adopted pet by ID
   - Update adoption details
   - Return a pet (delete adoption)

## Routes
1. **Pet Management**
   - `GET /pets` - Get all available pets
   - `POST /pets` - Add a new pet
   - `GET /pets/:id` - Get a pet by ID
   - `PUT /pets/:id` - Update a pet
   - `DELETE /pets/:id` - Delete a pet

2. **Adoption Management**
   - `POST /adoptions` - Adopt a pet
   - `GET /adoptions` - Get all adopted pets
   - `GET /adoptions/:id` - Get an adopted pet by ID
   - `PUT /adoptions/:id` - Update adoption details
   - `DELETE /adoptions/:id` - Return a pet

## Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/pet-adoption-api.git
   cd petadoption
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

## Testing
1. Run integration tests:
   ```bash
   npm test
   ```

2. Run unit tests:
   ```bash
   npm run test:unit
   ```

## Project Board
A project board is set up to track the progress of the project. The board is divided into columns for each half-day to show the order in which tasks were completed.

## Excalidraw

![Exalidraw big picture plan](https://github.com/user-attachments/assets/8bbd0c74-e257-420b-9140-2ce37b39419b)

