# Firebase Setup Instructions

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or select an existing project
3. Follow the setup wizard to create your project

## Step 2: Register Your Web App

1. In your Firebase project, click on the web icon (</>) to add a web app
2. Register your app with a nickname (e.g., "Regalis Waitlist")
3. Firebase will provide you with a configuration object

## Step 3: Update Firebase Configuration

Open `src/lib/firebase.ts` and replace the placeholder values with your actual Firebase configuration:

```typescript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};
```

## Step 4: Enable Firestore Database

1. In Firebase Console, go to "Build" > "Firestore Database"
2. Click "Create database"
3. Choose "Start in production mode" (we'll set up security rules next)
4. Select a location for your database

## Step 5: Set Up Security Rules

In Firestore Database, go to the "Rules" tab and add these rules:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /waitlist/{document} {
      allow read: if request.auth != null;
      allow create: if true;
    }
  }
}
```

## Step 6: Enable Analytics (Optional)

1. In Firebase Console, go to "Build" > "Analytics"
2. Follow the setup wizard to enable Google Analytics
3. Analytics will automatically track page views and custom events

## Step 7: View Your Data

- **Waitlist submissions**: Go to Firestore Database > waitlist collection
- **Analytics**: Go to Analytics > Dashboard to view user behavior, clicks, and drop-off rates

## What Gets Tracked

### Waitlist Data
- User name
- User email
- Selected products (name, image, price)
- Submission timestamp

### Analytics Events
- Page views
- Product clicks
- Product selections/deselections
- Waitlist modal opens
- Section scrolls
- Waitlist signups (with product count)

## Testing

After setup, test the integration by:
1. Selecting products on your website
2. Joining the waitlist
3. Checking Firestore for the new document
4. Viewing Analytics for tracked events
