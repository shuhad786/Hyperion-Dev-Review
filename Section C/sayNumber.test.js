const sayNumber = require('./sayNumber');
 
describe("sayNumber", () => {
    it("should return 'Zero.' for input 0", () => {
      expect(sayNumber(0)).toEqual("Zero.");
    });
  
    it("should return 'Eleven.' for input 11", () => {
      expect(sayNumber(11)).toEqual("Eleven.");
    });
  
    it("should return 'Fourteen.' for input 14", () => {
      expect(sayNumber(14)).toEqual("Fourteen.");
    });
  
    it("should return 'Fifteen.' for input 15", () => {
      expect(sayNumber(15)).toEqual("Fifteen.");
    });
  
    it("should return 'Forty-three.' for input 43", () => {
      expect(sayNumber(43)).toEqual("Forty-three.");
    });
  
    it("should return 'Fifty.' for input 50", () => {
      expect(sayNumber(50)).toEqual("Fifty.");
    });
  
    it("should return 'One thousand and one.' for input 1001", () => {
      expect(sayNumber(1001)).toEqual("One thousand and one.");
    });
  
    it("should return 'Twenty thousand.' for input 20000", () => {
      expect(sayNumber(20000)).toEqual("Twenty thousand.");
    });
  
    it("should return 'One million, thirty-three thousand, two hundred and eighty-six.' for input 1033286", () => {
      expect(sayNumber(1033286)).toEqual("One million, thirty-three thousand, two hundred and eighty-six.");
    });
  
    it("should return 'Twelve million and thirteen.' for input 12000013", () => {
      expect(sayNumber(12000013)).toEqual("Twelve million and thirteen.");
    });
  
    it("should return 'Ninety trillion, three hundred and seventy-six billion, ten thousand and twelve.' for input 90376000010012", () => {
      expect(sayNumber(90376000010012)).toEqual("Ninety trillion, three hundred and seventy-six billion, ten thousand and twelve.");
    });
  });