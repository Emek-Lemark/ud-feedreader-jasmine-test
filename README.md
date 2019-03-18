# Feed Reader Testing with Jasmine
## Project Overview

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included Jasmine and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.

### How to run project
* Download or clone the repo
* Open index.html and see the specs at the bottom of the page
* All tests are written on feedreader.js using jasmine

### Tests 
* A test that ensures that all `allFeeds` objects are defined.
* A test that ensures that all `allFeeds` objects have a URL defined and that the URL is not empty.
* A test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
* A test that ensures the menu element is hidden by default.
* A test that ensures the menu changes visibility when the menu icon is clicked. Two expectations: does the menu display when clicked and does it hide when clicked again?
* A test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
* A test that ensures that the `.entry-links` start with "http://" or with "https://"
* A test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.

### Credits
* The [Study Jam by Mohamed Riaad](https://www.youtube.com/watch?v=Ut_L8YUImbw)
is a great resource to understand the feed reader project. It also
helped me understand async testing and better ways to use arrow functions.
* The [Jasmine Documentation](https://jasmine.github.io/tutorials/your_first_suite)
