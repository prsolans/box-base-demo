# Box Base Demo
## Set up and installation for local web application with some integrated Box parts.

*Prequisites* You will need to have some familiarity with Terminal on your Mac, and the ability to copy/paste/

### Step 1: Get the application

#### Using Git From Terminal ####
1. Go to Terminal
2. Go to a parent folder of your choice
3. Clone from Git -
      Copy/paste: `git clone https://github.com/prsolans/box-base-demo.git newboxdemo`

### Step 2: Build your environment
You need some stuff to make this run. Here's how to do it.
1. Change to the proper folder
    Copy/paste: `cd newboxdemo`
2. Install the dependencies
    Copy/paste:`npm install && npm update`

### Step 3: Run the application
To get this application fired up, you will need to use Terminal.
1. From Terminal, navigate to the folder where the application is located
2. Run the app
      Copy/paste: `DEBUG=myapp:* npm start`
3. Navigate to http://127.0.0.1:3000 in your browser to see the application.
* this will work.... sort of*

### Step 4: Amend your hosts file
To make Box UI Elements work in your app, you will need to add a line to your hosts file
1. Open your hosts file (assumes Mac) from terminal `open /etc/hosts`
2. Add a line like this `prswebapi.com 127.0.0.1`

### Step 5: Customize the application
First, you will connect this app to your demo environment.
1. Get Developer Token
2. Update Folders

Next, you can adjust the style
1. Update logo
2. Set colors

You'll want to refine some styles and some content.

#### Style
Adding a new logo: Save your new logo file as a PNG image in the folder *public/images/*

Updating the colors: Open the stylesheet found at *public/stylesheets/style.css*. Search for the words 'EDIT ME' to find where to update colors.

#### Content
By default you have three pages built out.

1. /views/index.pug - This is the homepage layout. You can adjust the text here.
2. /views/videos.pug - You can refine the text for this page, and swap out the Embed Widget URL for the Box content element.
3. /views/factsheets.pug - You can refine the text for this page, and swap out the Embed Widget URL for the Box content element.
4. public/js/folder-explorer.js - Update folderId to set the root folder displayed. Update the accessToken as well.

You can adjust the page titles displayed by adjusting the *title* and *subtitle* attributes found in the /routes/* files.

