const { Given, When, Then } = require('@cucumber/cucumber');
const { disable } = require('mockery');
const fetch = require("node-fetch");
const request = require('request');
const LoginPage = require('../pageobjects/login.page');
// const SecurePage = require('../pageobjects/secure.page');


Given(/^I am on the login page$/, () => {
    LoginPage.open()
});


When(/^Try to do my api test$/, async () => {
    request.post({
        url: 'https://thinkmobiles.com/api/auth/sign-in/',
        form: {
                email: 'dantes.8ua8@gmail.com',
                password: 'lolyP0P11',
                rememberMe: false         
        },

    },
        function (err, httpResponse, body) {
            console.log(httpResponse);
            console.log(body);

        })
    //////////////################//////////////////////////////////

        // const data = {
    //     email: 'dantes.8ua8@gmail.com',
    //     password: 'lolyP0P11',
    //     rememberMe: false
    // };

    // const response = await fetch('https://thinkmobiles.com/api/auth/sign-in/',
    //  {
    //     method: 'POST',
    //     mode: 'cors', // no-cors, *cors, same-origin
    //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //     credentials: 'same-origin', // include, *same-origin, omit
    //     headers: {
    //         'Accept': '*/*',
    //         'Accept-Encoding': 'gzip, deflate, br',
    //         'Content-Length': '75',
    //         'Connection': 'keep-alive',
    //         'Content-Type': 'application/json',
    //         'origin': 'https://thinkmobiles.com',
    //         'referer': 'https://thinkmobiles.com/sign-in/'
    //     },
    //     redirect: 'follow', // manual, *follow, error
    //     referrerPolicy: 'no-referrer', // no-referrer, *client
    //     body: JSON.stringify(data)
    // });
    // console.log(response);

    ////////////########################/////////////////
    //     const data = {
    //     email: 'dantes.8ua8@gmail.com',
    //     password: 'lolyP0P11',
    //     rememberMe: false
    // };

    // fetch('https://thinkmobiles.com/api/auth/sign-in/', {
    //         method: 'post',
    //         body:    JSON.stringify(data),
    //         headers: { 'Content-Type': 'application/json' },
    //     })


});


When(/^I click on (.+)$/, (link) => {
    const MYlink = $(`[aria-label=${link}]`)
    // const classNameAndText = $('[name="username"]')
    MYlink.click()
});

When(/^As a user, I click on (.+)$/, (link) => {
    const MYlink = $(`=${link}`)
    MYlink.click()
});

When(/^I login with (.+) and (.+)$/, (email, password) => {
    LoginPage.login(email, password)
});

When(/^I enter not valid (.*) or (.*)$/, (email, password) => {

    LoginPage.notValid_login(email, password)
});

Then(/^I should see the main page with My profile$/, () => {
    expect(browser).toHaveTitle('My profile | ThinkMobiles')
});

Then(/^I should see the new page with (.*)$/, (title) => {
    expect(browser).toHaveTitleContaining(`${title}`)
});

Then(/^I click on chekbox Stay logged in$/, () => {

    const MYlink = $('.contact-us__checkbox-label')
    MYlink.click()
});


Then(/^Login button is disabled$/, () => {
    const loginBUTTON = $('.sign_up-submit')
    expect(loginBUTTON).not.toBeClickable()
});


Then(/^User see (.+) error$/, (message) => {
    const erMesage = $(`.input-error*=${message}`)
    expect(erMesage)
        // .toHaveText(message)
        .toHaveTextContaining(message)

});

