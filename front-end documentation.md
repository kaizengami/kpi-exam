## modules

### frontend-admin-ui

This module is used to manage tenants and IMEIs.

##### libraries used

- React
- Redux / redux-saga
- react-router-dom
- TypeScript
- styled-components

### frontend-dealer-ui

This module is used for dealers who will register new users of FreeFone program.

##### libraries used

- React (React Hooks)
- TypeScript
- styled-components

## How to build / run

1. Open in terminal project directory (frontend-admin-ui or rontend-dealer-ui)

2. Install npm packages: npm install

3. To run project open <b>infrastructure</b> repository on branch <b>docker-compose</b>

> ###### Important all repositories must be in one directory. Example:

- FreeFoneProject
  - backend-portal
  - frontend-admin-ui
  - infrastructure

4. In infrastructure repository open <b>/docker_infra</b> folder and run command <b>./start.sh</b> to build in Docker Compose all projects dependencies including frontend and backend

5. After build look for message in terminal: <b>List of running containers with IP addresses</b>. It will show all running containers and theirs IPs. Module <b>frontend-admin-ui</b> is running on port <b>:3000</b> and module <b>frontend-dealer-ui</b> is running on port <b>:4000</b>
