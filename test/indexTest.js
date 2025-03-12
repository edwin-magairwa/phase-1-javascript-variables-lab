const { expect } = require('chai');

describe('index.js', function() {
  const companyName = 'Scuber';
  describe('companyName', function() {
    it('is set as Scuber', function() {
      expect(companyName).to.equal('Scuber');
    });

    it('is defined as a const', function() {
      expect(() => { companyName = 'New Name'; }).to.throw(TypeError);
    });
  });

  describe('mostProfitableNeighborhood', function() {
    it('is declared as Chelsea', function() {
      expect(mostProfitableNeighborhood).to.equal('Chelsea');
    });

    it('is defined using let', function() {
      let isLet = false;
      try {
        mostProfitableNeighborhood = 'New Neighborhood';
        isLet = true;
      } catch (e) {
        isLet = false;
      }
      expect(isLet).to.be.true;
    });
  });

  describe('companyCeo', function() {
    it('is declared as Susan Smith', function() {
      expect(companyCeo).to.equal('Susan Smith');
    });

    it('is defined using let', function() {
      let isLet = false;
      try {
        companyCeo = 'New CEO';
        isLet = true;
      } catch (e) {
        isLet = false;
      }
      expect(isLet).to.be.true;
    });
  });
});

