# LaZone Design Studio Theme Guide

## Color Palette

The LaZone Design Studio website uses a carefully selected color palette based on the brand's identity, emphasizing modern luxury with a bold orange and black theme.

### Primary Colors

| Color Name | Hex Code | CSS Variable | Tailwind Class | Description |
|------------|----------|--------------|----------------|-------------|
| Vibrant Orange | `#FF4E16` | `--primary` | `bg-lazone-orange` | Primary accent color, used for CTA buttons and highlights |
| Deep Black | `#222327` | `--background` (dark mode) | `bg-lazone-black` | Primary dark color, used for backgrounds in dark mode |

### Secondary Colors

| Color Name | Hex Code | Tailwind Class | Description |
|------------|----------|----------------|-------------|
| Light Gray | `#AEAEAE` | `bg-lazone-light` | Used for subtle highlights and secondary elements |
| Medium Gray | `#5B5B5B` | `bg-lazone-medium` | Used for text and borders |
| Dark Gray | `#3F3F3A` | `bg-lazone-dark` | Used for secondary elements |

## Usage Guidelines

### Buttons

- Primary buttons should use `bg-lazone-orange` with white text:
  ```jsx
  <Button className="bg-lazone-orange text-white hover:bg-lazone-orange/90">
    Button Text
  </Button>
  ```

- Secondary/outline buttons should use white borders with transparent background:
  ```jsx
  <Button variant="outline" className="border-white text-white hover:bg-white/10">
    Button Text
  </Button>
  ```

### Text

- Primary headings: Use the serif font with appropriate sizing
- Use `text-lazone-orange` for highlighted text
- Body text should use the default text color for good contrast

### Accents and Highlights

- Use `border-lazone-orange` for borders with accent color
- Use gradients with the lazone colors for overlay effects:
  ```jsx
  <div className="bg-gradient-to-t from-lazone-black/30 to-transparent"></div>
  ```

### Dark Mode

The website supports dark mode with appropriate color adjustments:
- Light backgrounds become `bg-lazone-black`
- Text colors are adjusted for better contrast

## CSS Variables

The theme uses CSS variables for consistent color application:

```css
:root {
  --primary: 14 100% 54%; /* FF4E16 - Vibrant orange */
  --background: 0 0% 99%; /* Light background */
}

.dark {
  --background: 225 9% 14%; /* 222327 - Deep black */
  /* Other dark mode variables */
}
```

## Maintaining Consistency

When adding new components or modifying existing ones, please:
1. Use the existing color variables and Tailwind classes
2. Maintain the established visual hierarchy
3. Follow accessibility best practices for color contrast
4. Ensure the orange accent color is used for key interactive elements 