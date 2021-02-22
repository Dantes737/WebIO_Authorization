const { Given, When, Then } = require('@cucumber/cucumber');

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');


Given(/^I am on the login page$/, () => {
    LoginPage.open()
});

When(/^I login with (.+) and (.+)$/, (email, password) => {
    LoginPage.login(email, password)
});
// When(/^I login with (\w+) and (.+)$/, (username, password) => {
//     LoginPage.login(username, password)
// });

Then(/^I should see the main page with all posts$/, () => {
    expect(browser).toHaveTitle('My profile | ThinkMobiles')
});

