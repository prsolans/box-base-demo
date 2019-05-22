# Box Base Demo 
## Set up and installation for local web application with some integrated Box parts.

*Prequisites* You will need to have some familiarity with Terminal on your Mac, and the ability to copy/paste/

### Step 1: Get the application

#### Using Git From Terminal ####
1. Go to Terminal
2. Go to a parent folder of your choice
3. Clone from Git - Copy/paste the following into the command line: `git clone https://github.com/prsolans/box-base-demo.git newboxdemo`

### Step 2: Run the application
To get this application fired up, you will need to use Terminal. 
1. From Terminal, navigate to the folder where the application is located: Type `cd newboxdemo`
2. Copy/paste the following: `DEBUG=myapp:* npm start`
3. Navigate to http://localhost:3000 in your browser to see the application.

### Step 3: Customize the application
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

