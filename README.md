# Blood Aid Network (Client)

The Blood Donation website is a user-centric platform designed to facilitate blood donations by connecting donors with recipients. It includes features for searching and filtering donors, detailed donor profiles, user account management, and administrative tools for overseeing site activity and user accounts. The aim is to promote and streamline the process of blood donation, ensuring that those in need can easily find willing donors and that the donation process is secure, efficient, and user-friendly.

# Live Site Link: https://blood-donation-client-theta.vercel.app

## Features

- User registration and login
- Search and Filter option for blood donors by location and blood type
- Send blood request and View all blood requests
- User profile management (view, edit and change password)
- Donation history tracking and view your incoming blood requests
- Admin dashboard for managing users and update users status and role
- Mobile-friendly responsive design
- Secure authentication and data encryption
- image upload function use cloudinary

## Technology

- Typescript
- Next.js
- MUI
- Redux-toolkit
- React-hook-form
- Zod
- Sonner

### Login Credentials to test

- Admin

  - email: jahid@gmail.com
  - username: Jahid123
  - password: 123456

- User1

  - email: ashikur@gmail.com
  - username: ashikur123
  - password: 123456

  - User2

  - email: sabbir@gmail.com
  - username: Sabiir123
  - password: 123456

### Installation locally

1. Clone the repository:

```bash
https://github.com/NaimurAlltime/blood-donation-client.git
```

2. Navigate to the project directory:

```bash
cd blood-donation-server
```

3. Install dependencies:

```bash
npm install
```

4. Create a .env file in the root directory and configure environment variables:

````bash
NEXT_PUBLIC_BACKEND_API_URL=...
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=...
NEXT_PUBLIC_CLOUDINARY_API_KEY=...
NEXT_PUBLIC_CLOUDINARY_API_SECRET=...
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=...


### Running the Application

1. Convert the typescript file to javascript file

```bash
npm run build
````

2. Running typescript in development environment

```bash
npm run dev
```
