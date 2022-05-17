import HomePage from '../pages/HomePage'

describe("Example",()=>{
    let homepage;
  beforeAll(async()=>{
      homepage = new HomePage();
  })
  it("Homepage Should Work", async()=>{
      await homepage.visit();
  })
  it("Navbar Should Display", async()=>{
    await homepage.isNavbarDisplayed();
})

})