# CV Builder Application 📄

A modern, accessible CV builder application built with React and Vite. Create, customize, and preview your professional CV with an intuitive interface.

![The Odin Project](https://www.theodinproject.com/lessons/node-path-react-new-cv-application)
![Live Page](https://top-cv-application-919.pages.dev/)

## Features

- **Interactive Form Builder**: Add and manage multiple sections including:
  - Basic Information (name, contact details)
  - Work Experience
  - Education
  - Languages
  - Certifications
  - Skills

- **Real-time Preview**: See your CV update instantly as you make changes

- **Customization Options**: 
  - Toggle sections visibility
  - Hide/show individual entries
  - Delete unwanted entries
  - Load example data

- **Responsive Design**: 
  - Adaptive layouts for different screen sizes
  - Toggle between single and dual-pane views on smaller screens

- **Accessibility First**:
  - Screen reader friendly with ARIA labels
  - Keyboard navigation support
  - Live region announcements for actions
  - Semantic HTML structure

## Key Components

### Context Provider
- **CvContext**: Manages global state for CV data using React Context API

### Forms
- **CollectionForm**: Reusable component for managing collections (jobs, education, etc.)
- **Input & TextArea**: Accessible form inputs with proper labeling
- **Accordion**: Expandable sections with smooth animations

### View
- **View**: Live preview of the CV with semantic HTML structure

## ♿ Accessibility Features

This application is built with accessibility in mind:

- Semantic HTML elements (`<header>`, `<section>`, `<article>`, `<address>`)
- ARIA labels and live regions for screen reader support
- Focus management and visible focus indicators
- Color contrast meeting WCAG AA standards
- Unique IDs using React's `useId()` hook
- Announcements for dynamic content changes

## Author

**Pablo Perez**
- GitHub: [@yaoming16](https://github.com/yaoming16)
- Website: [yaoming16.github.io](https://yaoming16.github.io/)

