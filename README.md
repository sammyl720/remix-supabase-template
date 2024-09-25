# Remix TypeScript Template with Supabase Authentication and Authorization

This template provides a starting point for building a Remix application with TypeScript, featuring authentication and authorization using Supabase. It includes:

- **User Authentication**: Signup, login, and logout functionality.
- **Role-Based Authorization**: Protect routes based on user roles.
- **Tailwind CSS Styling**: Pre-configured UI components for a modern look.
- **Top Navigation Bar**: A responsive navbar that adapts to authentication state.

---

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Install Dependencies](#2-install-dependencies)
  - [3. Supabase Setup](#3-supabase-setup)
  - [4. Configure Environment Variables](#4-configure-environment-variables)
  - [5. Run the Application](#5-run-the-application)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Usage](#usage)
  - [Authentication Pages](#authentication-pages)
  - [Protected Routes](#protected-routes)
  - [Authorization](#authorization)
- [Styling](#styling)
- [Security Considerations](#security-considerations)
- [Contributing](#contributing)
- [License](#license)

---

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Install Node.js (version 14 or higher)
- **npm**: Comes with Node.js
- **Supabase Account**: Sign up at [Supabase](https://supabase.com/)

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/sammyl720/remix-supabase-template.git
cd remix-supabase-template
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Supabase Setup

#### Create a Supabase Project

- Log in to your Supabase account.
- Create a new project.

#### Obtain Supabase Keys

- Go to your project's settings.
- Navigate to **API** under the **Settings** tab.
- Copy the following keys:
  - `SUPABASE_URL`
  - `SUPABASE_ANON_KEY`
  - `SUPABASE_SERVICE_ROLE_KEY`

#### Set Up Database Schema

In the Supabase SQL editor, run the following SQL command to create a `profiles` table:

```sql
create table profiles (
  id uuid references auth.users not null primary key,
  role text default 'user'
);
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory and add the following:

```env
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
SESSION_SECRET=your_session_secret
```

- **Replace** `your_supabase_url`, `your_supabase_anon_key`, and `your_supabase_service_role_key` with the values from your Supabase project.
- **Generate** a strong, random string for `SESSION_SECRET`.

### 5. Run the Application

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`.

---

## Available Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the app for production.
- `npm start`: Run the built app in production mode.

---

## Usage

### Authentication Pages

- **Signup**: Visit `/signup` to create a new account.
- **Login**: Visit `/login` to sign in.
- **Logout**: Click the **Logout** button in the navigation bar to sign out.

### Protected Routes

- **Home Page** (`/`): Accessible only to authenticated users.
- **Unauthorized Access**: Attempting to access restricted pages without proper authorization redirects to `/unauthorized`.

### Authorization

- **User Roles**: Roles are stored in the `profiles` table.
- **Role-Based Access**: Modify the `role` field in the `profiles` table to manage access levels.

---

## Styling

- **Tailwind CSS**: Used for styling components.
- **Forms**: Enhanced with focus states, hover effects, and responsive design.
- **Navigation Bar**: Adapts based on authentication state (shows Login/Signup or Logout).

---

## Security Considerations

- **Environment Variables**: Do not commit the `.env` file to version control.
- **Supabase Keys**: Keep your `SUPABASE_SERVICE_ROLE_KEY` secure and use it only on the server side.
- **Session Secret**: Use a strong, unique secret for `SESSION_SECRET`.
- **HTTPS**: Ensure the app is served over HTTPS in production.
- **Session Handling**: Properly destroy sessions on logout to prevent session fixation attacks.
- **CSRF Protection**: Remix forms include CSRF protection by default.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository.
2. **Create** a new branch: `git checkout -b feature/YourFeature`.
3. **Commit** your changes: `git commit -m 'Add some feature'`.
4. **Push** to the branch: `git push origin feature/YourFeature`.
5. **Open** a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Additional Notes

- **Extensibility**: Feel free to extend this template with additional features like password reset, email verification, or more complex role management.
- **Customization**: Modify the styling and components to match your project's branding and design needs.
- **Feedback**: If you encounter any issues or have suggestions, please open an issue in the repository.

---

Happy coding! 🚀
