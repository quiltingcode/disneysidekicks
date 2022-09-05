# **_Disney Sidekicks_**

# Testing

## Code Validation

The Disney Sidekicks site has been passed through the [W3C html Validator](https://validator.w3.org/), the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) and the [JS Hint Validator](https://jshint.com/).

## W3C html Validation Results

* Index.html - 1 error. Details can be found in the [Bugs](<#known-bugs>) section. The issue was easily fixed and after a retest, no more errors were returned.

![W3C html home page validation results](assets/readmeimages/w3validator-pass.PNG)


## W3C CSS Validation Results

* Style.css – No errors were found.

![CSS validation test pass results](assets/readmeimages/w3c-css-validator-pass.PNG)

## JS Hint Validation Results

* Script.js - 2 warnings, 1 undefined variable and 1 unused variable found.  Details can be found in the [Bugs](<#known-bugs>) section. The issues were fixed and after further testing, no more errors were returned.

![JSHint validation test pass results](assets/readmeimages/jshint-pass.PNG)

## Responsiveness Test

The responsive design tests were carried out manually throughout the build using Google Chrome Dev Tools. I used a mobile first approach basing my initial design around the iPhone SE (375 x 667px) which became my first media query break point. I then selected one more break point at 768px and above for larger devices. 

During the testing process I also used the [Responsive Design Checker](https://www.responsivedesignchecker.com/) website to simulate the website on several other devices. Here are my findings:

### Mobile Devices

||<p>iPhone 6/7 plus</p><p>414 x 736</p>|<p>Samsung Galaxy S5/6/7</p><p>360 x 640</p>|<p>Google Pixel/Nexus 5/6</p><p>411 x 731</p>|
| :- | :-: | :-: | :-: |
|Render|Pass |Pass|Pass|
|Images|Pass|Pass|Pass|
|Links|Pass|Pass|Pass|

I chose not to test the iPhone models 3, 4, or 5 as these have a smaller screen (320 x 480) and were only supported officially by Apple until March 2021. 

On devices with a height of 640 pixels, such as the Samsung mobile devices, once the quiz has begun, you have to scroll down after choosing an answer to see the bottom of the question container in some cases where the question is longer. The next button sometimes is slightly hidden, but I find this scrolling acceptable in the case of certain longer questions for shorter devices. 

### Tablet Devices

||<p>Amazon Kindle Fire</p><p>768 x 1024</p>|<p>Samsung Galaxy Tab 10</p><p>800 x 1280</p>|<p>Apple iPad Pro</p><p>1366 x 1024</p><p></p>|
| :- | :-: | :-: | :-: |
|Render|Pass|Pass(2nd time)|Pass |
|Images|Pass|Pass|Pass|
|Links|Pass|Pass|Pass|

When I tested the form page on the Samsung Galaxy Tab 10, the background image was not reaching the bottom of the screen, so it was leaving a blank area across the bottom of the device. I changed the CSS styling of the background size from 'Auto' to '200rem' and I have re-tested. The image now seems to cover the full screen, on taller devices. I don't like it however that the image is moving on each click of the buttons. 

![tablet device view of quiz](assets/readmeimages/samsung-tablet-testing.PNG)

On the larger Apple iPad Pro, the rules text appears very small in comparison with the relative screen size. I have therefore decided to create a third media query break point at 1200px to make the font bigger for wider screens.



### Desktop Devices

||<p>24 “ Desktop</p><p>1920 x 1200</p>|<p>19” Desktop</p><p>1440 x 900</p>|<p>10” Notebook</p><p>1024 x 600</p>|
| :- | :-: | :-: | :-: |
|Render|Pass|Pass|Pass|
|Images|Pass|Pass|Pass|
|Links|Pass|Pass|Pass|

On wide display devices the images of the site are restricted in width to 820px. This helps the UX by not spreading the content too wide on the extra wide screens.

The font-size on the 24 “ Desktop device appears very small. I decided to add another media query break point at 1400px and add styling to increase the font-size for these wide devices. Due to this I also had to increase the height of the category places div elements because the text was overflowing out. Now the text seems more proportionate to the size of the images. 

On large devices the Love Andalucia header doesn’t stand out as much as on smaller devices and almost becomes overshadowed by the next h2 header. I have added a new media query for devices larger from 1400px to increase the font-size of the header. It looks more proportional now and stands out as it should.

Looking at the events page on these very wide devices, the table could be made wider to use up more of the available width. Now that I have an additional break point created, I can style in this change. 

On the form page, the form element overflows from the background container and almost goes into the footer. Within the 1400px media query, I changed the margins to keep the form within its image container. 

When testing the form page on the 19” desktop, the height of the device is only 900px so again, I get the same issue whereby the form overflows out of the background container and over the footer. I have reduced the font-size of the form text to overcome this issue.

## Browser Compatibility 

Love Andalucia was tested on the following browsers:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox

I do not have any Apple devices available to carry out testing on a Safari browser. Appearance and functionality appear to be consistent throughout all browsers.

In the Firefox and Edge browsers, two of the photos in the Places page do not load. I do, however, see a description of the photo from the alt text in the code. I compressed the two files using and  <https://tinypng.com/>. I also renamed all the image files to be simpler with no spaces, and reviewed the file paths of all the photos across the site. Images now load correctly.  

## Known Bugs

### Resolved

1. Navigation bar spilling over into a second line in smaller mobile devices. Nav > a selector margin changed from 1rem to 0.5rem.

2. Home page text box disappearing off the right-hand side of the screen. Used up a 90-minute tutor session to get advice on my screen alignment in general and the tutor suggested the google map code I had inserted below (which comes with all its own styling embedded) was causing the overall width of my screen to be wider and therefore other elements were stretching to the right as well. I deleted the google maps insert and removed all the width styling on the page. This re-centred all the homepage elements correctly once again. I generated a new google map, but using a much smaller width parameter, and now there is no page overflow. 

3. When I added a contact email and telephone number to the footer, I gave the email element an ID of #email and styled it accordingly. Later, when I was looking at the form page, I noticed that my email address input field had gone out of alignment. Using Chrome Dev Tools, it showed me that the styling for the contact footer email was also affecting the email address input field. I renamed the email ID to be more specific and the form email input field was no longer pushed to the right and out of alignment with the other fields. 

4. I noticed that the footer was missing when I scrolled down through the Places page. All the other pages were OK though. Using Chrome Dev Tools to locate it, I realised it had travelled up the screen and was hidden underneath one of the images. I tried to look up reasons for this on the <https://stackoverflow.com/> website but, having tried various solutions such as sticky footer and absolute positioning, it would not move down. I scheduled a tutor session, and the tutor instructed my in the process of adding a <main> tag into all the pages and creating a flexbox system. This made no difference, but then the tutor noticed that I had a fixed height of 400px set on my destinations-box element and said this was causing the footer to sit up right below this 400px limit. The limit was removed, and the footer went back down into its place. I have also tried to use the rem unit of measurement wherever possible as opposed to px for better responsive design. 

5. When I started researching how to make the images responsive to the device size as the photos would increase but not remain centred when moving up from mobile size to tablet size for example. I changed the styling to display the images as block elements with margin: auto and this solved the centring issue.

6. I add font awesome icons next to the footer telephone number and email instead of writing the words, but the icons wouldn’t load in the browser. This was due to the version of the icons not being compatible with the browser, so I changed the fal version to the older fas version and these icons load correctly now. 

7. As a result of the W3C html validation test, the index.html page had 1 error. 

![Index.html validation error](assets/readmeimages/w3-validator-error.PNG)

This error says that I have used an <a></a> tag within a button element for my link back to the home page from the end page, but according to the W3 Validator this is not allowed.  

8. As a result of the JS Hint validation test, 2 warnings, 1 undefined variable and 1 unused variable were found.

![JSHint validation test results](assets/readmeimages/jshinterrors.PNG)

Initially, 45 warnings were found, but when I asked the question in the Slack forum as to why I had so many " 'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz)." errors, I was informed that this was simply a case of changing the JS Hint configuration to include New JavaScript Features (ES6) which were not previously included.

Having changed the configuration I was left with 2 warnings:
 * A missing semi-colon
 * A missing let variable inside a for loop

The undefined 'i' variable that I had created was inside a loop to retrieve the 3 possible answer objects from the questions array. However, it turns out that a loop was not necessary and therefore the variable was not doing anything. I removed the loop function and left the three answers and question image as separate commands within the displayQuestion function , and after testing the game again, the questions, answers and image are all still retrieved correctly. 

This left me with a simple issue of a global variable which I created initally, but never included it in my functions in the end. I deleted this variable and re-ran the full length of code through the validator. 

### Unresolved

1. The form, on the face of it acts like you would expect it to, and acknowledges your data input, however the data doesn't actually push anywhere. This is a limitation within this project and would be rectified for a true deployment of the Love Andalucia site.

## Additional Testing

### Lighthouse

I used the Lighthouse test within Google Chrome Dev Tools to test the following:

- Performance
- Accessibility
- Best Practices
- SEO

The results were overall very positive:

![Lighthouse report](assets/readmeimages/lighthouse.PNG)

## Peer Review

In addition to the above tests, I asked my peers to review this website and their overall response was very positive. 

One person suggested that the list of events would be better in chronological order as the events occur through the year so I implemented this change. 

Please click [**_here_**](README.md) to return to the Love Andalucia README file.
