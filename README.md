# Angular Module Federation Setup

This repository contains the initialization steps for an Angular Micro-Frontend workspace using Module Federation.

## 🛠️ Step-by-Step Workspace Setup

### 1. Generate Applications
Create the main shell application and the product remote application inside your workspace:
```bash
ng generate application shell --routing --style=scss --skip-tests
ng generate application product --routing --style=css --skip-tests
```

### 2. Install Module Federation
Install the module federation package tailored for Angular architecture:
```bash
npm i @angular-architects/module-federation@19
```

### 3. Initialize Webpack Configuration
Configure the host (shell) and remote (product) applications to use Module Federation on specific ports:
```bash
# Configure Shell as Host on Port 4200
ng g @angular-architects/module-federation:init-webpack --project shell --type host --port 4200 --skip-confirmation

# Configure Product as Remote on Port 4201
ng g @angular-architects/module-federation:init-webpack --project product --type remote --port 4201 --skip-confirmation

# Configure Product as Remote on Port 4202
ng g @angular-architects/module-federation:init-webpack --project product --type remote --port 4202 --skip-confirmation
```

### 4. Create Shared UI Library
Generate a shared library to reuse components across your applications:
```bash
ng g library shared-ui
```

## 🚀 Running the Applications

To run the shell, product, and account micro-frontends simultaneously, execute:
```bash
npm run run:all -- shell product account
```
