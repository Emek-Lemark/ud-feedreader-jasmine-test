/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', () => {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */ 
        it('URLs are defined and not empty', () => {
            for(let feed of allFeeds) {
                // Check if the URL is defined
                expect(feed.url).toBeDefined();
                // Check the length of the URL string is not equal to 0
                expect(feed.url.length).not.toBe(0);
                // If URL contains "http", it can include "https", too
                expect(feed.url).toMatch("http");
            }
        });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('names are defined and not empty', () => {
            for(let feed of allFeeds) {
                // Check if the URL is defined
                expect(feed.name).toBeDefined();
                // Check the length of the URL string is not equal to 0
                expect(feed.name.length).not.toBe(0);
                // Check if the feed name is a string
                expect(feed.name).toEqual(jasmine.any(String));
            }
        })
    });

    /* A new test suite named "The menu" */
    describe('The menu', () => {
        const menuIcon = document.querySelector('.menu-icon-link');

        /* A test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('element hides by default', () => {
            // Check if the class name is exactly "menu-hidden"
            expect(document.body.classList.contains('menu-hidden')).toBe(true);
        });
        /* A test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('changes visibility when the menu icon is clicked', () => {
            // On click the menu icon class name  is "menu-hidden"
            menuIcon.click();
            expect(document.body.classList.contains('menu-hidden')).toBe(false);
            // On second click the menu icon class name "menu-hidden" should be removed           
            menuIcon.click();
            expect(document.body.classList.contains('menu-hidden')).toBe(true);
        });
         
    });

    /* A new test suite named "Initial Entries" */
    describe('Initial Entries', () => {
        /* A test that ensures when the loadFeed
        * function is called and completes its work, there is at least
        * a single .entry element within the .feed container.
        * Remember, loadFeed() is asynchronous so this test will require
        * the use of Jasmine's beforeEach and asynchronous done() function.
        */
        beforeEach((done) => {
            loadFeed(0, () => {
                done();
            });
        });
        // done is called after async function is run
        it("should load entry element within feed container", ((done) => {
            // Store element in variable entries
            let entries = document.querySelector(".feed").getElementsByClassName("entry");
            // Store amount of elements in variable
            let amountOfEntries = entries.length;
            // Check that there are more than 0 entries
            expect(amountOfEntries).not.toBe(0);
            done();
            }));

        });

    /* A new test suite named "New Feed Selection" */
    describe('New Feed Selection', () => {
        /* A test that ensures when a new feed is loaded
        *  by the loadFeed function that the content actually changes.
        *  Remember, loadFeed() is asynchronous.
        */
        let firstFeed;
             beforeEach((done) => {
        /* Before the tests starts, the first feed loads and its contents
        *  are stored in a variable to be compared to updated feed.
        *  Then the new feed load(1) is loaded.
        */
        loadFeed(0, () => {
            firstFeed = document.querySelector(".feed").innerHTML;
            loadFeed(1, () => {
                done();
            });
        });
    });
        /* The innerHTML of the first feed is compared to the
        *  updated feed. The content has changed when they are not the same
        */
        it("checks if feeds are different", ((done) => {
            let newFeed = document.querySelector(".feed").innerHTML;
            expect(firstFeed).not.toBe(newFeed);
            done();
        }));
    });

}());
