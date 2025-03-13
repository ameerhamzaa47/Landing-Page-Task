# Weather Widget Landing Page

## Overview
This project is a responsive landing page for a product, featuring a weather widget that allows users to check the current weather in any city. The page emphasizes **semantic HTML**, **accessibility**, and **interactivity**. Additionally, the landing page includes a theme toggle and a weather component that fetches data from the OpenWeather API.

The project showcases modern front-end practices, including mobile-first design, client-side validation, and caching for API responses.

## Features
- **Responsive Layout**: The page adjusts gracefully to different screen sizes (mobile, tablet, desktop) using CSS Flexbox and Grid.
- **Semantic HTML**: Proper use of semantic tags like `<header>`, `<main>`, `<section>`, and `<footer>` ensures good accessibility and SEO.
- **Weather Widget**: Fetches real-time weather data from OpenWeather API, displays it in a dynamic card layout, and allows users to search for weather by city.
- **Theme Toggle**: Users can toggle between light and dark modes, with their preferences saved in `localStorage`.
- **Client-Side Validation**: Form inputs have real-time validation for user-friendly interaction.
- **Caching**: Weather data is cached using `localStorage` to reduce the number of API calls.

## Tech Stack
- **HTML5**: For semantic markup and accessibility.
- **CSS3**: Mobile-first design with Flexbox, Grid, CSS Variables for dynamic theming.
- **JavaScript**: Asynchronous handling with Fetch API, dynamic theme toggle, and form validation.
- **OpenWeather API**: Used for fetching weather data.

## Setup Instructions

### Prerequisites
You need to have the following installed:
- A modern browser (Chrome, Firefox, Safari, etc.)

### Steps to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/weather-widget-landing-page.git
