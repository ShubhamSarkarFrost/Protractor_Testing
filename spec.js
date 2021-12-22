var logger = require("./log");
const {ExpectedConditions, browser, element} = require("protractor");

describe("User should be navigated to Bigbasket Website", function () {
    it("should navigate to the Bigbasket URL", function () {
        browser.get("https://bigbasket.com");
        browser.getCurrentUrl().then(function (url) {
            console.log(url);
            expect(url).toEqual("https://www.bigbasket.com/");
            expect(browser.getTitle()).toContain("bigbasket");
            logger.log("info", "navigating to the Website");
        });
    });
    it("Should click on the Search for Rice by clicking on Search Button", function () {
        element(by.model("vm.searchPhrase")).sendKeys("Rice");
        element(by.xpath(".//button[@qa='searchBtn']")).click();
        logger.log(
            "info",
            "Verify whether the Global Search functionality works!!"
        );
    });

    it("Verify whether shop by category works or not", function () {
        element(by.xpath(".//a[@qa='categoryDD']")).click();
        element(by.xpath("(.//a[@qa='catL1'])[1]")).click();
    });
});
