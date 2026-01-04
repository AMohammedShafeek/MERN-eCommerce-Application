# Copilot Instructions - MERN eCommerce Application

## Project Architecture

This is a **three-tier MERN (MongoDB, Express, React, Node.js) eCommerce application**:

- **`server/`** - Express.js REST API backend with MongoDB
- **`admin/`** - React admin dashboard (Vite + Tailwind + MUI)
- **`ecom/`** - React customer frontend (Vite + Tailwind + MUI)

### Data Flow

1. Frontend apps (`admin`, `ecom`) make API calls to `server/api/*` endpoints
2. Backend validates JWT tokens in cookies/Authorization headers, processes requests via controllers
3. Controllers query MongoDB via Mongoose models
4. Images uploaded to Cloudinary via `multer` middleware
5. Responses returned with consistent `{error, success, message}` pattern

## Tech Stack & Build Commands

### Server (Node.js + Express)

- **Start development**: `npm run dev` (uses nodemon in `server/`)
- **Build/Run production**: `npm start`
- **Environment**: `.env` file required with `MONGODB_URI`, `PORT`, JWT secrets, Cloudinary keys, email service config
- **Key dependencies**: Express 5.2, Mongoose 9.0, JWT, bcrypt, multer, nodemailer, Cloudinary

### Frontend Apps (React + Vite)

- **Start development**: `npm run dev` (runs on `http://localhost:5173` by default)
- **Build for production**: `npm run build` (outputs to `dist/`)
- **Environment**: Both use `@vitejs/plugin-react` with Tailwind CSS v4 and MUI v7
- **State management**: Context API (`MyContext` in `App.jsx`)
- **Styling**: Tailwind + Emotion (MUI) + styled-components

## Authentication Pattern

### Token Management

- Access tokens generated in `generatedAccessToken.js` - **expires in 5 hours**
- Refresh tokens generated in `generatedRefreshToken.js`
- Tokens stored in **httpOnly cookies** (via `cookie-parser`)
- Auth middleware (`server/middlewares/auth.js`) extracts from `request.cookies.accessToken` or `Authorization: Bearer <token>`

### User Model Structure

- Email uniqueness enforced (`unique: true`)
- Passwords hashed with bcrypt
- Tracks `verify_email`, `access_token`, `refresh_token`, `last_login_date`, `status` (Active/Inactive/Suspended)
- Address references stored as ObjectId array

## API Structure & Routing

### Route Pattern

All routes follow `/api/<resource>` convention:

- `POST /api/user/*` - User endpoints (login, register, profile)
- `POST /api/category/*` - Category CRUD
- `POST /api/product/*` - Product CRUD (with image upload)
- All authenticated routes require `auth` middleware

### Image Upload Workflow

1. Client sends files to `POST /api/product/uploadImages` with `auth` + `multer` middleware
2. Controller uploads via Cloudinary, returns `secure_url`
3. Temporary file deleted from `uploads/` directory after upload
4. Response: `{images: [...urls]}`

### Response Format (Consistent Pattern)

```json
{
  "success": boolean,
  "error": boolean,
  "message": "string",
  "data": {}
}
```

## Component Patterns

### Admin Dashboard

- **Key files**: `admin/src/Pages/Dashboard`, `admin/src/components`
- **Sidebar-based navigation**: `Sidebar.jsx` + `Header.jsx` (responsive toggle)
- **Context sharing**: `MyContext` provides `isLogin`, `isOpenSideBar` state
- **Main sections**: Dashboard, Users, Products, Categories, Orders, HomeSlides

### Customer Frontend

- **Key files**: `ecom/src/Pages/Home`, `ecom/src/components`
- **Features**: Product listing, cart drawer, product detail dialog (MUI Dialog), wishlist, checkout
- **Toast notifications**: Using `react-hot-toast` (`openAlertBox` function for success/error)
- **Cart/Dialog state**: `openProductDetailDialog`, `openCartDrawer` in Context

## Developer Workflows

### Setting Up Development Environment

1. Install dependencies in each folder: `npm install` (server, admin, ecom)
2. Create `.env` in server folder with:
   ```
   MONGODB_URI=mongodb://...
   PORT=4000
   SECRET_KEY_ACCESS_TOKEN=<secret>
   SECRET_KEY_REFRESH_TOKEN=<secret>
   cloudinary_Config_Cloud_Name=<name>
   cloudinary_Config_api_key=<key>
   cloudinary_Config_api_secret=<secret>
   SMTP_HOST=<email_config>
   ```
3. Run server: `npm run dev` in `server/`
4. Run admin: `npm run dev` in `admin/` (typically port 5173)
5. Run ecom: `npm run dev` in `ecom/` (typically another dev port)

### Debugging

- Backend logs via `morgan` HTTP logger and `console.log` statements
- Frontend errors visible in browser DevTools
- MongoDB connection errors thrown immediately in `connectDB()` - check `.env` MONGODB_URI

### Adding New Features

1. **New API endpoint**: Create controller in `server/controllers/`, route in `server/route/`, register in `server/index.js`
2. **New model**: Add to `server/models/`, export as Mongoose schema
3. **New admin page**: Create in `admin/src/Pages/`, add route in `admin/src/App.jsx`, link from sidebar
4. **New frontend page**: Create in `ecom/src/Pages/`, add route in `ecom/src/App.jsx`

## Code Conventions

- **ES6 modules**: `import`/`export` syntax everywhere
- **Async/await**: Used for async operations (no `.then()` chains)
- **File naming**: PascalCase for components (`.jsx`), camelCase for utilities/controllers
- **CSS**: Tailwind utility classes (responsive: `md:`, `lg:`) + optional inline styled-components
- **MUI components**: Always styled with `styled()` HOC (see `Header.jsx` `StyledBadge` example)
- **Component exports**: Default export for pages/components
- **Error handling**: Try-catch blocks in async functions, consistent HTTP status codes (200, 400, 401, 500)

## Important Files to Know

**Backend**:

- [server/index.js](server/index.js) - Express app setup, route registration
- [server/config/connectDB.js](server/config/connectDB.js) - MongoDB connection
- [server/middlewares/auth.js](server/middlewares/auth.js) - JWT validation logic
- [server/middlewares/multer.js](server/middlewares/multer.js) - File upload config
- [server/models/](server/models/) - All data schemas

**Admin Frontend**:

- [admin/src/App.jsx](admin/src/App.jsx) - Context provider, route definitions
- [admin/src/components/Header/Header.jsx](admin/src/components/Header/Header.jsx) - Top navigation + logout
- [admin/src/components/Sidebar/Sidebar.jsx](admin/src/components/Sidebar/Sidebar.jsx) - Navigation menu

**Customer Frontend**:

- [ecom/src/App.jsx](ecom/src/App.jsx) - Context provider, route definitions, cart state
- [ecom/src/components/Header/Header.jsx](ecom/src/components/Header/Header.jsx) - Top navigation
- [ecom/src/Pages/ProductList/ProductList.jsx](ecom/src/Pages/ProductList/ProductList.jsx) - Product filtering/display

## Common Tasks Quick Reference

| Task                           | How                                                                                                    |
| ------------------------------ | ------------------------------------------------------------------------------------------------------ |
| Add product filter             | Edit `ecom/src/Pages/ProductList/ProductList.jsx`, add filter state to Context                         |
| Update admin dashboard widgets | Modify `admin/src/Pages/Dashboard/Dashboard.jsx` + add `DashboardBox.jsx` component                    |
| Change API base URL            | Add axios/fetch interceptor in appropriate app (not visible in provided code - check for `.env` usage) |
| Add new admin user role        | Update `server/models/user.model.js` status enum, add auth check in controllers                        |
| Modify product schema          | Update `server/models/product.model.js`, create migration if needed, update controllers                |

## Notes for AI Agents

- **No TypeScript**: Pure JavaScript codebase (JSX for React)
- **No explicit state management library**: Uses React Context API only
- **Upload directory**: Temporary files stored in `server/uploads/` - deleted after Cloudinary upload
- **Email**: Configured via nodemailer - check `config/emailService.js` and `config/sendEmail.js`
- **Responsive design**: Breakpoints in `responsive.css` + Tailwind breakpoints
- **Test commands not found**: Project uses no test runner (no Jest/Vitest config visible)
