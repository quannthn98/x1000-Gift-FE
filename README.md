# Gift_x1000 - Telegram Mini App Mockup

A complete set of HTML/CSS mockup pages for **Gift_x1000**, a Telegram-based PvP coin flip betting platform where players bet TON cryptocurrency on coin flip games.

## Overview

This project contains fully designed and functional HTML mockup pages for a Telegram Mini App. All pages are mobile-optimized, feature a cohesive design system, and include interactive elements with JavaScript.

## Design Features

- **Modern Gradient UI** with Telegram design language
- **Dark Theme** with glassmorphism effects
- **Mobile-First** responsive design (optimized for Telegram Mini App)
- **Smooth Animations** and transitions
- **Interactive Components** with JavaScript
- **Consistent Navigation** across all pages
- **No External Dependencies** (except system fonts)

## Color Scheme

- Primary Gradients: Blue (#2481cc) to Purple (#9c6ade)
- Success: Green gradients (#4ade80 to #22c55e)
- Warning: Orange/Gold gradients (#fb923c to #fbbf24)
- Background: Dark mode (#0f0f0f to #1a1a2e)

## Pages Included

### Core Pages

1. **index.html** - Home/Lobby Page
   - Welcome banner with platform statistics
   - List of active game rooms
   - Quick stats display
   - Floating action button to create games
   - Bottom navigation bar

2. **create-game.html** - Create Game Room
   - Bet amount input with quick amount buttons
   - Choose your side (Heads/Tails) selector
   - Room privacy settings (public/private)
   - Fee calculator and breakdown
   - Current wallet balance display

3. **game-room.html** - Active Game Room
   - Animated coin flip in center
   - Player cards with avatars and stats
   - Game status indicator with countdown
   - Live chat and emoji reactions
   - Fairness proof link
   - Result modal with win/loss display

4. **wallet.html** - Wallet Management
   - Large balance display with gradient card
   - Deposit and withdraw buttons
   - Recent transactions list
   - Wallet address with copy functionality
   - QR code display (toggle)
   - Quick statistics grid

5. **transactions.html** - Transaction History
   - Filterable transaction list (All/Deposits/Withdrawals/Wins/Losses)
   - Detailed transaction information
   - Blockchain transaction hashes
   - Status badges
   - Load more functionality

6. **profile.html** - User Profile
   - User avatar and username display
   - Level badge
   - Statistics dashboard (games played, win/loss ratio, etc.)
   - Performance overview chart
   - Achievement badges (12/20 unlocked)
   - Quick action buttons

7. **leaderboard.html** - Rankings
   - Top players list with rankings
   - Multiple filter options (Win Rate, Most Games, Biggest Wins, Streak)
   - Time period filters (Today, This Week, All Time)
   - User's current rank highlight
   - Medal icons for top 3 players

8. **game-history.html** - Personal Game History
   - List of completed games
   - VS display with opponent information
   - Win/Loss indicators
   - Fairness proof verification links
   - Filter tabs (All/Wins/Losses)
   - Statistics summary

9. **fairness-proof.html** - Provably Fair Verification
   - Explanation of fairness system
   - Game ID input for verification
   - Seed display (server seed, client seed, nonce)
   - Verification result display
   - Step-by-step "How it Works" section
   - Manual verification instructions
   - External tools links

10. **settings.html** - Settings & Preferences
    - Account management
    - Notification preferences (3 toggles)
    - Language and sound settings
    - Gaming preferences
    - Responsible gaming settings
    - Security & privacy options
    - Legal links (Terms, Privacy Policy)
    - Support section
    - Danger zone (Clear cache, Logout)

11. **deposit.html** - Deposit TON
    - Large QR code display
    - Wallet address with copy button
    - Important information cards
    - Transaction status tracker (4 steps)
    - Minimum deposit information
    - Network confirmation details
    - Step-by-step instructions

12. **withdraw.html** - Withdraw TON
    - Available balance display
    - Amount input with quick amount buttons
    - Destination address input
    - Real-time fee calculation
    - Fee breakdown display
    - Important warnings (minimum, maximum, processing time)
    - Security verification notice
    - Confirmation modal

13. **how-to-play.html** - Tutorial/Help
    - Welcome card
    - Video tutorial placeholder
    - 5-step tutorial with icons
    - Game rules section
    - FAQ accordion (7 questions)
    - Quick links to other pages
    - Support contact button

### Bonus Pages

14. **404.html** - Page Not Found Error
    - Animated 404 display
    - Friendly error message
    - Quick navigation buttons
    - Popular pages grid
    - Support link

15. **error.html** - Connection Error
    - Connection status checker
    - Internet/Server/TON Network status
    - Troubleshooting tips
    - Retry connection button
    - Refresh and home buttons
    - Real-time online/offline detection

## Design System

### Shared Stylesheet (styles.css)

The `styles.css` file contains a complete design system including:

- CSS Custom Properties (variables) for colors, spacing, and more
- Glassmorphism cards and components
- Button styles (primary, success, outline, ghost)
- Input fields and form elements
- Bottom navigation bar
- Modal dialogs
- Toast notifications
- Loading spinners
- Empty states
- Progress bars
- Toggle switches
- Badges and avatars
- Statistics grids
- List items
- Tabs
- Utility classes

### Key Components

#### Glassmorphism Cards
```html
<div class="glass-card">
  <!-- Content -->
</div>
```

#### Buttons
```html
<button class="btn btn-primary">Primary Button</button>
<button class="btn btn-success">Success Button</button>
<button class="btn btn-outline">Outline Button</button>
<button class="btn btn-ghost">Ghost Button</button>
```

#### Bottom Navigation
```html
<nav class="bottom-nav">
  <a href="index.html" class="nav-item active">
    <div class="nav-icon">🏠</div>
    <div class="nav-label">Home</div>
  </a>
  <!-- More items -->
</nav>
```

#### Stats Grid
```html
<div class="stats-grid">
  <div class="stat-card">
    <div class="stat-value">1,247</div>
    <div class="stat-label">Players Online</div>
  </div>
  <!-- More stats -->
</div>
```

#### Modal Dialog
```html
<div class="modal-overlay">
  <div class="modal">
    <div class="modal-header">
      <h2 class="modal-title">Title</h2>
    </div>
    <div class="modal-body">
      <!-- Content -->
    </div>
    <div class="modal-footer">
      <button class="btn btn-outline">Cancel</button>
      <button class="btn btn-primary">Confirm</button>
    </div>
  </div>
</div>
```

## File Structure

```
x1000-Gift-FE/
├── styles.css              # Shared stylesheet with design system
├── index.html              # Home/Lobby page
├── create-game.html        # Create game room
├── game-room.html          # Active game room
├── wallet.html             # Wallet management
├── transactions.html       # Transaction history
├── profile.html            # User profile
├── leaderboard.html        # Rankings
├── game-history.html       # Personal game history
├── fairness-proof.html     # Provably fair verification
├── settings.html           # Settings and preferences
├── deposit.html            # Deposit TON
├── withdraw.html           # Withdraw TON
├── how-to-play.html        # Tutorial and help
├── 404.html                # 404 error page
├── error.html              # Connection error page
└── README.md               # This file
```

## Usage

### Opening the Mockups

1. Clone or download this repository
2. Open any HTML file in a modern web browser
3. Navigate between pages using the links and buttons

### Recommended Browser

- Chrome, Firefox, Safari, or Edge (latest versions)
- Mobile device browser or browser developer tools (mobile view)

### Testing on Mobile

1. Open browser developer tools (F12)
2. Toggle device toolbar (Ctrl+Shift+M or Cmd+Shift+M)
3. Select a mobile device or set custom viewport (recommended: 375x667 or 390x844)

## Interactive Features

### JavaScript Functionality

Each page includes interactive JavaScript for:

- **Navigation**: Click on links and buttons to navigate between pages
- **Forms**: Input validation and dynamic calculations
- **Modals**: Popup dialogs with confirm/cancel actions
- **Toggles**: Settings switches with visual feedback
- **Accordions**: FAQ expand/collapse functionality
- **Tabs**: Filter and sort data by categories
- **Animations**: Coin flip, loading states, and transitions
- **Copy to Clipboard**: Wallet addresses and transaction hashes
- **Real-time Updates**: Fee calculations, countdowns, and status checks

## Customization

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
  --primary-blue: #2481cc;
  --primary-purple: #9c6ade;
  --success-green: #4ade80;
  /* Add more customizations */
}
```

### Adding New Pages

1. Copy an existing HTML file as a template
2. Update the `<title>` tag
3. Modify the content inside `<div class="container">`
4. Update the active nav item in bottom navigation
5. Link to the new page from other pages

### Modifying the Design System

All reusable components are defined in `styles.css`. Modify classes to change:

- Button styles
- Card appearances
- Colors and gradients
- Spacing and sizing
- Animations and transitions

## Mock Data

All pages use realistic mock data for demonstration:

- Player names and avatars
- Game IDs and transaction hashes
- TON amounts and statistics
- Timestamps and dates
- Achievements and badges

## Browser Compatibility

- Modern browsers with CSS Grid and Flexbox support
- CSS Custom Properties (variables)
- ES6 JavaScript features
- No polyfills required for modern browsers

## Performance

- No external dependencies (fast loading)
- Optimized CSS (single file)
- Minimal JavaScript
- No image assets (emoji icons only)
- Mobile-optimized

## Future Enhancements

To convert these mockups into a functional app:

1. **Backend Integration**
   - Connect to TON blockchain
   - Implement real-time game updates
   - Add user authentication
   - Create API endpoints

2. **Database**
   - Store user profiles
   - Save game history
   - Track transactions
   - Maintain leaderboards

3. **Real-time Features**
   - WebSocket for live games
   - Push notifications
   - Live chat functionality

4. **Telegram Integration**
   - Telegram Mini App API
   - User authentication via Telegram
   - Telegram notifications
   - Deep linking

5. **Security**
   - Implement provably fair system
   - Secure wallet management
   - Transaction signing
   - Rate limiting

## License

This is a mockup project created for demonstration purposes.

## Credits

Created as a complete mockup for Gift_x1000 - A Telegram Mini App for PvP coin flip betting.

---

**Note**: This is a static HTML/CSS mockup. All functionality is simulated with JavaScript for demonstration purposes. No real cryptocurrency transactions occur in these mockups.
