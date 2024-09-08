
---

# Pype Assignment

This is a Next.js project structured with various components, dynamic routing, and integrations with Cypress for testing and a headless CMS (Swell). Below is a comprehensive guide to the project setup, components, and testing strategies.

## Project Structure

Here is an overview of the main directories and files in the project:

```
.next/
app/
  components/
    Navbar.tsx
    Footer.tsx
    FeatureBox.tsx
    ToggleButton.tsx
    VideoComponent.tsx
  dynamic/
    [slug]/
        page.tsx
  fonts/
  section/
  favicon.ico
  globals.css
  layout.tsx
  page.tsx
context/
  ThemeContext.js
cypress/
  downloads/
  e2e/
  fixtures/
  support/
lib/
  data.js
  node_modules/
public/
.env
.eslintrc.json
.gitignore
cypress.config.ts
next-env.d.ts
next.config.mjs
package-lock.json
package.json
postcss.config.ts
README.md
tailwind.config.ts
```

## Styling

All styling in the project is done using **Tailwind CSS**. Tailwind provides a utility-first approach to styling, allowing you to rapidly build custom designs without leaving your HTML. It simplifies the development process by using pre-defined classes, which makes the code easy to manage and understand.

### Key Benefits of Tailwind CSS in This Project:

- **Rapid Development**: With utility classes, you can style components quickly without writing custom CSS files.
- **Responsive Design**: Tailwind includes responsive utilities that make it easy to build mobile-first designs.
- **Consistency**: Utility classes ensure consistent spacing, colors, and typography across all components.


## Components

### Navbar

The `Navbar` component is located in the `components/` folder. It uses the `<nav>` tag to render a navigation bar that includes links to various pages of the website.

### Footer

The `Footer` component is also in the `components/` folder and utilizes the `<footer>` tag to render information about the website, including social media links and contact information.

### Layout

The `layout.tsx` file under `app/` imports the `Navbar` and `Footer` components, ensuring they are consistently rendered across all pages. It acts as the main layout wrapper for the application.

```tsx
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
```

### Header Component

For the landing page, the `Header` component serves as the first part of the page layout, usually containing the main headline and call-to-action button.

### Feature Box

The `FeatureBox` component highlights various features of the application. It's reusable and styled for visual appeal.

### Dynamic Routing

Dynamic routing is implemented in the `/dynamic/[slug]` file, which allows content to be loaded based on URL parameters dynamically.

## Context API - Toggle Button

The toggle button functionality is implemented using the `useContext` hook in `ThemeContext.js`, allowing global state management across the application.

## Headless CMS - Swell

Swell is used as the headless CMS to fetch and render the homepage features. You can configure the CMS by setting up an account on Swell and connecting it with your project. Below is a basic setup:

1. **Installation**: Follow Swell’s setup guide on their official website.
2. **Fetching Data**: Use the provided API endpoints to fetch the necessary data for your components.

## Testing with Cypress

Cypress is used for unit and end-to-end testing. To set up Cypress:

1. **Setup**: Run the following command to set up Cypress with your Next.js application:

   ```bash
    npm install -D cypress
   ```

2. **Running Tests**: Tests can be run headlessly or with the Cypress GUI.

   ```bash
    npm run cypress:open
   ```
Basic unit testing is performed

## Client and Server Components

The project strategically uses client and server components based on their use case. Client components handle interactivity, while server components are used where data fetching and non-interactive elements are concerned.

## Deployment

The project is deployed on Vercel. You can access the live site at: [Pype Assignment](https://pype-assignment-zeta.vercel.app/).

## Setup CMS and Testing

1. **CMS Configuration**:
   - Register on Swell and connect the API with your project.
   - Define content models and utilize Swell's endpoints to fetch data dynamically for your homepage.

2. **Testing with Cypress**:
   - Add test cases in the `cypress/e2e` folder to cover different user interactions.
   - Use commands like `cy.visit()` and `cy.get()` to navigate and validate components.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/Darkness447/pype-assignment.git
   cd pype-assignment
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Conclusion

This project showcases a robust Next.js application with integrated dynamic routing, CMS, testing capabilities, and thoughtfully designed components for a seamless user experience. Explore the code, modify components as needed, and feel free to contribute!

---

Let me know if you need any more adjustments or additions!