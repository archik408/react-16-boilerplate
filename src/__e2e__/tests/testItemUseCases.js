
module.exports = {
    'Navigate from AppPage to TestPage' : function (client) {
        const page = client.page.AppPage();
        page.navigate();
        page.expect.element('@openTestBtn').to.be.visible;
        page.expect.element('@logo').to.be.visible;
        page.expect.element('@title').to.be.visible;
        page.expect.element('@title').to.contain.text('Welcome to React');
        page.expect.element('@openTestBtn').to.contain.text('Open Test Page');
        page.click('@openTestBtn');
        client.pause(1000);
        client.assert.containsText('.Test p', 'Items:');
        client.end();
    },
    'Add and remove test items on TestPage' : function (client) {
        const page = client.page.TestPage();
        page.navigate();
        page.expect.element('@container').to.be.visible;
        page.expect.element('@items').to.be.visible;
        page.expect.element('@addBtn').to.be.visible;
        page.expect.element('@removeBtn').to.be.visible;
        page.expect.element('@addBtn').to.contain.text('Add \'11\'');
        page.expect.element('@removeBtn').to.contain.text('Remove \'11\'');
        page.expect.element('@items').to.contain.text('9\n10');
        page.click('@addBtn');
        client.pause(1000);
        page.expect.element('@items').to.contain.text('11\n9\n10');
        page.click('@removeBtn');
        client.pause(1000);
        page.expect.element('@items').to.contain.text('9\n10');
        client.end();
    },

};