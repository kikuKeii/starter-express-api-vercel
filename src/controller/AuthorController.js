const URL = require("../helper/MainHelper"); //get URL From MainHelper
var request = require("request");
var cheerio = require("cheerio");


exports.index = (req, res) => {
    //request element from URL
    request(URL.github_URL, function (error, response, body) {
        if (error) {
            res.send(response.statusCode);
        }
        var list = []; //create array Vaeiable for results list CSS Selector
        var $ = cheerio.load(body);
        const gitHub = URL.github_URL;
        $(".js-profile-editable-replace").each((i, e) => {
            const fullName = $(e).find("span.vcard-fullname").text();
            const userName = $(e).find("span.vcard-username").text();
            const imgProfile = $(e).find("a > img.avatar-user").attr("src");
            const desc = $(e).find(".user-profile-bio > div").text();
            const followers = $(e).find("div.mb-3 > a:nth-child(1) > span").text();
            const following = $(e).find("div.mb-3 > a:nth-child(2) > span").text();
            const organization = $(e).find("ul > li:nth-child(1) > span > div").text();
            const location = $(e).find("ul > li:nth-child(2) > span").text();
            const url = $(e).find("ul > li:nth-child(3) > a").attr("href");
            const socialLink = $(e).find("ul > li:nth-child(4) > a").attr("href");

            //push scrape results to variable list
            list.push({
                userName,
                fullName,
                imgProfile,
                desc
            },
            {
                followers,
                following
            },
            {
                organization,
                location,
                url,
                socialLink,
                gitHub
            })
        })
        //send json response
        res.json([
            {
                response: "author",
                message: "this route for response api author",
            },
            {
                author: list,
                support : "https://ko-fi.com/X8X031K5P"
            }
        ])
    })
};