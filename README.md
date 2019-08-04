# Box Base Demo
## Set up and installation for local web application with some integrated Box parts.

*Prequisites*
* A text editor - I'd recommend VSCode or Sublime Text
* Some familiarity with (or willingness to learn about) Terminal
* The ability to copy/paste

*It will help if you are familiar with*
* JavaScript
* HTML
* CSS
* Git

*You'll have no issues if you are familiar with*
* Node
* Express
* Pug

### Step 1: Get the application

#### Using Git From Terminal ####
1. Go to Terminal
2. Go to a parent folder of your choice
3. Clone from Git -
      Copy/paste: `git clone https://github.com/prsolans/box-base-demo.git localboxdemo`

### Step 2: Build your environment
You need some stuff to make this run. Here's how to do it.
1. Change to the proper folder
    Copy/paste: `cd localboxdemo`
2. Install the dependencies
    Copy/paste:`npm install && npm update`

### Step 3: Create your Box application
You need to connect to a Box app that you create in the Dev Console.
1. Create a "Custom App"
2. Leverage OAuth 2.0 with JWT for the authentication
3. Go the the "Configuration" tab
4. Copy the "Developer Token" to your clipboard

### Step 4: Configure your local application
We are going to use the Developer Token to authenticate this app into your demo account. It's super easy - the only downside is that you will need to refresh this token every 60 minutes in your app.

5. Open the file at /localboxdemo/app.js in your text editor
6. Starting at Line 15, you will see a section with values you should update:
* devToken - Paste the Developer Token from step 4 here
* rootFolder - This is the ID of the folder you want to display as a Content Explorer in the app
* uploadFolder - This is the ID of the folder in your app that will set to kick off the license ML endpoint
* version - This is for display purposes only. It will appear in the footer of the app

### Step 5: Amend your hosts file
To make Box UI Elements work in your app, you will need to add a line to your hosts file
1. Open your hosts file (assumes Mac) from terminal `open /etc/hosts`
2. Copy/paste: `localboxdemo.com 127.0.0.1`

### Step 6: Run the application
To get this application fired up, you will need to use Terminal.
1. From Terminal, navigate to the folder where the application is located
2. Run the app
      Copy/paste: `npm start`
3. Navigate to http://localboxdemo.com:3000 in your browser to see the application.

### Step 7: Customize the application
You can update the branding and the colors
1. Update logo - Replace the file at /localboxdemo/public/images/logo.png
2. Set colors - Edit the file at /localboxdemo/public/stylesheets/style.css (Look for EDIT ME)

### Step 8: Telling the story
You should now have a working and branded app.
1. You can find the text in the /localboxdemo/views folder. You can adjust any language and links here to help tell your story
2. The *rootFolder* you set in Step 4 will appear at http://localboxdemo.com:3000/home, and can be edited on the /localboxdemo/views/home.pug file
3. The *uploadFolder* you set in Step 4 will appear at http://localboxdemo.com:3000/input, and can be edited on the /localboxdemo/views/input.pug file

#### Using the MEGA Endpoint
To make my demo shine, I am leveraging the DemoEng MEGA Endpoint (shout-outs to Elliot Glasenk, Wes Byers and the incomparable Demo Engineering team). When configured for the *uploadFolder*, files _containing the word license in the title_ and uploaded via localboxdemo will automatically have relevant details extracted and turned into Box Skills Cards.

For complete instructions, go here: https://cloud.app.box.com/notes/449593329660?s=mgfuea9ard5xxkvlyijnthv9svhtztl1

#### Adding in some process
You can also trigger a Relay to kick off when the file is uploaded to your *uploadFolder*. This is a good way to demonstrate the value of Box in providing visibility into common and repeatable tasks.

#### MORE ADVANCED STUFF
If you create the proper metadata templates, and review the code on /localboxdemo/routes/metadata.js, you can parse the Skills card data and get it applied as structured Box metadata. In addition to being cooler, this also let's you kick off a Relay automatically based on metadata. If you get this far and need help, please reach out to me (Paul R Solans - prs@box.com).
