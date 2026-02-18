## Adding New Pages to Your Vite React App

Follow these steps to add new pages using React Router:

---

### 1. Create a New Page Component
- In `src/pages/`, create a new file (e.g., `MyNewPage.tsx`).
- Example:

```tsx
import React from 'react';

function MyNewPage() {
  return (
    <div>
      <h1>My New Page</h1>
      <p>This is the content for your new page.</p>
    </div>
  );
}

export default MyNewPage;
```

### 2. Add a Route for the New Page
- Open `src/App.tsx`.
- Import your new page component:

```tsx
import MyNewPage from './pages/MyNewPage';
```
- Add a `<Route>` inside your `<Routes>`:

```tsx
<Route path="/my-new-page" element={<MyNewPage />} />
```

### 3. Add a Link to the Sidebar or Menu
- Use `<Link>` from `react-router-dom` to navigate to your new page.
- Example:

```tsx
<Link to="/my-new-page" className="category-btn">
  My New Page
</Link>
```

### 4. Visit Your New Page
- Start your dev server (`npm run dev`).
- Go to `http://localhost:5173/my-new-page` (or click your sidebar/menu link).

---

Keep these steps handy for easy reference!
