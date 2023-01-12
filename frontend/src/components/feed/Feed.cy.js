import Feed from "./Feed";
const navigate = () => {};

describe("Feed", () => {
  it(
    "Calls the /posts endpoint and lists all the posts",
    { defaultCommandTimeout: 10000 },
    () => {
      window.localStorage.setItem("token", "fakeToken");

      cy.intercept("GET", "/posts", (req) => {
        req.reply({
          statusCode: 200,
          body: {
            posts: [
              { _id: 1, message: "Hello, world" },
              { _id: 2, message: "Hello again, world" },
            ],
          },
        });
      }).as("getPosts");

      cy.mount(<Feed navigate={navigate} />);

      cy.wait("@getPosts").then(() => {
        cy.get('[data-cy="post"]')
          .should("contain.text", "Hello, world")
          .and("contain.text", "Hello again, world");
      });
    }
  );
  it(
    "Calls the /posts endpoint and lists all the posts with time added",
    { defaultCommandTimeout: 10000 },
    () => {
      window.localStorage.setItem("token", "fakeToken");

      cy.intercept("GET", "/posts", (req) => {
        req.reply({
          statusCode: 200,
          body: {
            posts: [
              {
                _id: 1,
                message: "Hello, world",
                iat: "2017-02-14T12:51:48.000Z",
              },
              {
                _id: 2,
                message: "Hello again, world",
                iat: "2017-02-14T12:52:48.000Z",
              },
            ],
          },
        });
      }).as("getPosts");

      cy.mount(<Feed navigate={navigate} />);

      cy.wait("@getPosts").then(() => {
        cy.get('[data-cy="post"]')
          .should("contain.text", "Hello, world", "2017-02-14T12:51:48.000Z")
          .and(
            "contain.text",
            "Hello again, world",
            "2017-02-14T12:52:48.000Z"
          );
      });
    }
  );
});
