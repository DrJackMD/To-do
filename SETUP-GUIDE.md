# Task Manager — Setup Guide
## Get your task manager live on GitHub Pages with Google Sheets sync

This guide walks you through every step. No coding knowledge required.
Estimated time: **20–30 minutes**, done once.

---

## PART 1 — Put the app on GitHub Pages
*This gives your task manager a permanent web address you can open on any device.*

### Step 1 — Create a GitHub account (skip if you already have one)
1. Go to **https://github.com** in your browser
2. Click **Sign up** and follow the prompts
3. Verify your email address when GitHub sends you a confirmation email

---

### Step 2 — Create a new repository (think of this as a folder on GitHub)
1. Once logged in, click the **+** icon in the top-right corner of GitHub
2. Click **New repository**
3. Under **Repository name**, type: `task-manager`
   *(you can use any name — just remember it)*
4. Make sure **Public** is selected  
   *(this is required for free GitHub Pages hosting)*
5. Check the box that says **Add a README file**
6. Click the green **Create repository** button

---

### Step 3 — Upload your task manager file
1. You should now see your new repository page
2. Click the **Add file** button (near the top of the page)
3. Click **Upload files**
4. Drag and drop the file called **`index.html`** (from the files you downloaded) into the upload area
   — OR — click **choose your files** and find `index.html` on your computer
5. Scroll down to where it says **Commit changes**
6. Leave the message as-is and click the green **Commit changes** button
7. Wait a few seconds — you'll be taken back to your repository page and should now see `index.html` listed

---

### Step 4 — Turn on GitHub Pages
1. On your repository page, click the **Settings** tab (near the top, looks like a gear icon)
2. In the left sidebar, scroll down and click **Pages**
3. Under **Branch**, click the dropdown that says **None** and select **main**
4. Leave the folder set to **/ (root)**
5. Click **Save**
6. A blue banner will appear that says "Your site is being deployed" — wait about 60 seconds
7. Refresh the page — a green banner will appear with your site's URL, something like:
   **`https://YOUR-USERNAME.github.io/task-manager`**
8. Click that link — your task manager should open! 🎉

> **Bookmark this URL on both your Windows computer and your Android phone.**

---

## PART 2 — Set up Google Sheets sync
*This lets changes on your phone instantly show up on your computer, and vice versa.*

### Step 5 — Create a new Google Spreadsheet
1. Go to **https://sheets.google.com** and sign in with your Google account
2. Click the **+** (Blank) button to create a new spreadsheet
3. Click where it says **Untitled spreadsheet** at the top and rename it to: `Task Manager Sync`
4. Leave the spreadsheet open — you'll need it in the next step

---

### Step 6 — Open the Apps Script editor
1. In your Google Sheet, click the **Extensions** menu at the top
2. Click **Apps Script**
3. A new tab will open — this is the Google Apps Script editor
4. You'll see a code editor with some default text that starts with `function myFunction() {`
5. **Select all of that default text and delete it** (Ctrl+A then Delete)

---

### Step 7 — Paste in the sync code
1. Open the file called **`Code.gs`** that was included with your download
   - Open it in Notepad (right-click → Open with → Notepad) or any text editor
2. Select all the text (Ctrl+A) and copy it (Ctrl+C)
3. Click back in the Apps Script tab and paste it in (Ctrl+V)
4. Click the **Save** button (floppy disk icon) or press Ctrl+S
5. The project name will say "Untitled project" — click it and rename it to `Task Manager Sync`, then click **Rename**

---

### Step 8 — Deploy the script as a web app
1. In the Apps Script editor, click the blue **Deploy** button (top right)
2. Click **New deployment**
3. Next to **Type**, click the gear icon ⚙ and select **Web app**
4. Fill in the fields:
   - **Description**: `Task Manager Sync` (or anything you like)
   - **Execute as**: `Me (your Google account)`
   - **Who has access**: `Anyone`  
     *(This sounds scary but just means your app can talk to the script — no one can see your tasks unless they have your exact URL)*
5. Click **Deploy**
6. Google will ask you to **Authorize access** — click **Authorize access**
7. A window pops up saying "Google hasn't verified this app" — click **Advanced**, then click **Go to Task Manager Sync (unsafe)**
   *(This is normal for personal scripts you write yourself — it just means Google hasn't reviewed it)*
8. Click **Allow**
9. You'll see a screen that says **Deployment successfully created**
10. Copy the **Web app URL** — it looks like:
    `https://script.google.com/macros/s/ABCDEFG.../exec`
    *(Click the copy icon next to it)*

---

### Step 9 — Connect the URL to your task manager
1. Open your task manager in the browser: `https://YOUR-USERNAME.github.io/task-manager`
2. At the top you'll see a yellow banner that says **"Sync not yet configured"**
3. Paste your Web app URL into the input field in that banner
4. Click **Save URL**
5. The banner disappears and the sync status in the top-right will briefly say **"Syncing…"** then **"Synced ✓"**

> **You only need to do this once per device.** Your phone will need the URL pasted in separately (see Part 3 below).

---

## PART 3 — Set up on your Android phone
*Get the app on your phone's home screen so it feels like a real app.*

### Step 10 — Open the app in Chrome on Android
1. Open **Chrome** on your Android phone
2. Type your URL into the address bar: `https://YOUR-USERNAME.github.io/task-manager`
3. When it loads, tap the yellow sync banner and paste in your Web app URL, then tap **Save URL**
   - The sync status should show **"Synced ✓"**

---

### Step 11 — Add to your home screen
1. In Chrome on Android, tap the **three dots** menu (top right corner)
2. Tap **Add to Home screen**
3. Name it `Task Manager` (or whatever you like)
4. Tap **Add**
5. It will appear on your home screen like a regular app — with its own icon!

> From now on, tapping that icon opens your task manager full-screen, with no browser bar, just like a native app.

---

## PART 4 — How syncing works day-to-day

- **Every time you add, edit, complete, or delete a task**, it automatically saves to Google Sheets in the background. You'll see "Saving…" then "Saved ✓" in the top right.
- **Every time you open the app or switch back to it**, it automatically pulls the latest tasks from Google Sheets. You'll see "Syncing…" then "Synced ✓".
- **If you're offline**, everything still works — changes save locally on the device and will sync the next time you have internet.
- **To manually force a sync**: just close and reopen the tab, or switch away and back.

---

## PART 5 — Making future updates

If you ever want to make changes to the app (new features, etc.) and receive an updated `index.html` file:

1. Go to your GitHub repository: `https://github.com/YOUR-USERNAME/task-manager`
2. Click on `index.html` in the file list
3. Click the **pencil icon** (Edit this file) in the top right
4. Select all the text (Ctrl+A) and delete it
5. Paste in the new file contents
6. Scroll down and click **Commit changes**
7. Wait about 60 seconds, then refresh the live site URL — it will be updated

---

## Troubleshooting

**The site says "404 Not Found"**
→ GitHub Pages can take up to 5 minutes to go live after the first deploy. Wait and refresh.

**Sync shows "Sync failed"**
→ Double-check that you pasted the full Web app URL including the `/exec` at the end. Also make sure "Who has access" was set to **Anyone** when you deployed.

**Changes on my phone aren't showing on my computer**
→ Switch away from the tab and back — this triggers a fresh sync pull. Or close and reopen the browser tab.

**I see "Google hasn't verified this app" again**
→ This is normal. Follow the same steps: Advanced → Go to (unsafe) → Allow.

---

*Keep this guide somewhere handy the first time through. After setup, you'll never need it again.*
