// Define the BoardMember class
class BoardMember {
    constructor(name, homeState, training) {
      this.name = name;
      this.homeState = homeState;
      this.training = training;
    }
  
    veto() {
      return "No, I must disagree";
    }
  
    approve() {
      return "You can do that!";
    }
  
    doCharity() {
      return "I like to help people.";
    }
  
    releasePressStatement() {
      return "You will see great things from Scuber.";
    }
  
    sayHi() {
      return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;
    }
  }
  
  // Test the BoardMember class
  describe("boardMembers", () => {
    let boardMember;
  
    beforeEach(() => {
      boardMember = new BoardMember("Mr. Chairman", "Delaware", "law");
    });
  
    it("boardMember Constructor Function", () => {
      expect(boardMember).to.be.an.instanceof(BoardMember);
    });
  
    it("veto()", () => {
      expect(boardMember.veto()).to.equal("No, I must disagree");
    });
  
    it("approve()", () => {
      expect(boardMember.approve()).to.equal("You can do that!");
    });
  
    it("doCharity()", () => {
      expect(boardMember.doCharity()).to.equal("I like to help people.");
    });
  
    it("releasePressStatement()", () => {
      expect(boardMember.releasePressStatement()).to.equal(
        "You will see great things from Scuber."
      );
    });
  
    it("sayHi()", () => {
      expect(boardMember.sayHi()).to.equal(
        "Hi, my name is Mr. Chairman. I am from Delaware, and I was trained in law."
      );
    });
  });
  