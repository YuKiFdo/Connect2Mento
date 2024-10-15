# Connect2Mento

Connect2Mento is a mentorship platform designed to connect mentors and mentees for professional growth. The application supports separate login systems for mentors and mentees, mentor application approval, and administrative functionalities.

## Project Overview

Connect2Mento consists of three applications:

1. **Frontend - Connect2Mento (Mentee)**: Built with ReactJS and Vite.
2. **Frontend - Admin Connect2Mento**: Admin panel for managing mentors, built with ReactJS and Vite.
3. **Backend**: Built with Java Spring Boot for managing the application's logic, APIs, and database.

## Features

- Separate login for mentors and mentees.
- Mentor application process, with admin approval system.
- JWT-based authentication and role-based access.
- Admin dashboard for managing mentor applications.
- Mentee management including "date joined" and removal option.
- Gender-based avatar system based on database entries.
- BCrypt password hashing.
- API documentation created using Notion.

## Tech Stack

- **Frontend**: ReactJS (Vite)
- **Backend**: Java (Spring Boot)
- **Database**: MySQL
- **Authentication**: JWT tokens, BCrypt for password encryption
- **Containerization**: Docker
- **Hosting**: Azure Web Apps (Docker containers)
- **CI/CD**: GitHub Actions

## Dockerization

The Connect2Mento application is fully containerized using Docker. Each of the three components (frontend, admin frontend, backend) has its own Docker container.

### Docker Commands

To build and run the containers locally:

1. Build the Docker images:
   ```bash
   docker-compose build
   ```
2. Run the Docker containers:
   ```bash
    docker-compose up
    ```


### Hosting on Azure

The application is hosted on Azure Web Apps using Docker containers.

#### Hosted URLs
Mentee Frontend: [Connect2Mento (Mentee)](https://connect2mento-frontend.azurewebsites.net/) <br>
Admin Frontend: [Admin Connect2Mento](https://admin-connect2mento.azurewebsites.net/) <br>
Backend: [Connect2Mento API](connect2mento-backend.azurewebsites.net) 

##### Steps to deploy on Azure

1. Azure Container Registry (ACR): Store the Docker images in Azure.
   ```bash
    az acr build --image <image-name> --registry <acr-name> --file <Dockerfile-path> .
    ```

2. Push docker image to ACR
   ```bash
    docker push <acr-name>.azurecr.io/<image-name>:<tag>
    ```

3. Create Azure Web App
   ```bash
    az webapp create --resource-group <resource-group> --plan <app-service-plan> --name <app-name> --deployment-container-image-name <acr-name>.azurecr.io/<image-name>:<tag>
    ```

4. Configure Web App: Set environment variables and scaling configurations in Azure.


### Host to Run Locally

1. Clone the repository
   ```bash
   git clone 
    ```

2. Navigate to the appropriate folder (frontend, admin, or backend), install dependencies and run the development server.

3. Run the backend server first, then the frontend and admin frontend.
   ```bash
   npm install
   npm run dev
   ```
   ```bash
   mvn spring-boot:run
   ```
4. The application will be available at `localhost:3000` for the frontend, `localhost:3001` for the admin frontend, and `localhost:8080` for the backend.

#### API Documentation
The API documentation is available in Notion.

[API Documentation](https://guiltless-jobaria-bfb.notion.site/API-Documentation-for-Connect2Mento-10b136b1ef728073ac7fe60ebfeed000?pvs=25)
