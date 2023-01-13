describe('viewing all posts', () => {
  it('', () => {
    //signup
      cy.signup("naomi@test.com", "654321")

    //login
    cy.login("naomi@test.com", "654321")

    //go to posts page
    cy.visit("/posts")

    //will see all posts
    cy.get()

  });

});



// window.localStorage.setItem("token", "fakeToken")


// cy.intercept('GET', '/posts', (req) => {
//     req.reply({
//       statusCode: 200,
//       body: { posts: [
//         {_id: 1, message: "Hello, world"},
//         {_id: 2, message: "Hello again, world"}
//       ] }
//     })
//   }
// ).as("getPosts")

// cy.mount(<Feed navigate={navigate}/>)

// cy.wait("@getPosts").then(() =>{
//   cy.get('[data-cy="post"]')
//   .should('contain.text', "Hello, world")
//   .and('contain.text', "Hello again, world")
// })
// })
// })




// describe("Signing in", () => {

//   before(() => {
//     cy.signup("user@email.com", "12345678")
//   })

//   it("with valid credentials, redirects to '/posts'", () => {
//     cy.visit("/login");
//     cy.get("#email").type("user@email.com");
//     cy.get("#password").type("12345678");
//     cy.get("#submit").click();

//     cy.url().should("include", "/posts");
//   });
