# Linktree Style Profile App

## Overview

A mobile-optimized single-page application that displays a personal profile with links to social media and websites in a Linktree-style layout.

## Visual Design

- Fixed dark theme throughout the application using the specified color palette, never switching to light mode
- Color scheme uses hex codes: ECBA82, 4F7CAC, 272727, 55D44C, 4059AD, and 252D2A for a cohesive and modern look
- Dark, modern gradient background using the provided palette colors with no white or black backgrounds
- Background gradient remains consistent regardless of system theme settings
- Accent colors from the palette are used for highlights and interactive elements
- Profile title is clearly visible with solid color from the palette, no transparency
- LinkedIn button has a solid background color from the custom palette, no transparency
- Email link button uses a high-contrast background color that ensures excellent readability for white text
- Download Contact button has a solid background color from the custom palette, no transparency
- Loading text during the loading animation is clearly visible with solid color, no transparency
- Enhanced futuristic loading animation featuring the user's profile picture (if set) with warp tunnel effects and visual enhancements for a striking modern experience
- Smooth animations and transitions for all interactions
- Mobile-first responsive design that works well on all screen sizes
- Appropriate social media icons for each platform, including the new X logo for X (formerly Twitter)

## Main Content Structure

The main content displays in the following order from top to bottom:

1. **Profile Title** - Title displayed at the top with clear visibility
2. **Profile Picture** - Circular profile image displayed prominently
3. **One-line Introduction** - Short personal tagline or description
4. **Social Media Links** - List of clickable links with icons for:
    - YouTube
    - X (formerly Twitter) - using X logo
    - LinkedIn
    - Instagram
    - GitHub
    - Email - displays as a clickable email link that opens the user's default email client with high-contrast background color for optimal white text readability
    - Additional website links as needed
    - Each link displays with its custom subtitle if set (e.g., "Visit my YouTube channel")
    - Links display in the order set by the admin
5. **Contact Download** - Button to download user's contact information as a vCard file

## Functionality

- All social media and website links open in new tabs when clicked
- Email links open the user's default email client with the email address pre-filled
- Social links and email display with their custom subtitles on the public profile
- Social links and email appear in the order specified by the admin
- vCard download generates a contact file with comprehensive user information including email address, name, introduction, and social links
- Smooth hover effects and transitions on all interactive elements
- Futuristic loading animation displays the user's profile picture (if available) with warp tunnel effects and modern visual enhancements before revealing the main profile content

---