describe('Protractor Demo App', function() {
  var firstNumber = element(by.model('first'));
  var secondNumber = element(by.model('second'));
  var goButton = element(by.id('gobutton'));
  var latestResult = element(by.binding('latest'));
  var history = element.all(by.repeater('result in memory'));

  beforeEach(function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
  });

  // it('should have a title', function() {
  //   expect(browser.getTitle()).toEqual('Super Calculator');
  // });

  // it('should add one and two', function() {
  //   addTwoNumbers(1, 2);

  //   expect(latestResult.getText()).toEqual('3');
  // });

  // it('should add four and six', function() {
  //   addTwoNumbers(4, 6);

  //   expect(latestResult.getText()).toEqual('10');
  // });

  it('should have a history', function() {
    addTwoNumbers(1, 2);
    addTwoNumbers(3, 4);

    expect(history.last().getText()).toContain('1 + 2');
    expect(history.first().getText()).toContain('7'); // This is wrong!
  });

  function addTwoNumbers(a, b) {
    firstNumber.sendKeys(a);
    secondNumber.sendKeys(b);

    goButton.click();
  }

});