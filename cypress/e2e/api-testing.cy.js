import { pet } from "../pages/apiVariable";
var apiUrl = 'https://petstore.swagger.io/v2/pet/'
describe('POST /pet API', () => {
    it('it should create a new pet', () => {
      cy.request('POST', apiUrl, pet).then((response) => {
        expect(response.status).to.equal(200);
      });
    });
    it('it should get the pet information ', () => {
      cy.request('GET', `${apiUrl}431`).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.name).to.equal('ronnypet')
      });
    });
    it('it should delete a  pet', () => {
      cy.request('DELETE', `${apiUrl}431`).then((response) => {
        expect(response.status).to.equal(200);
      });
    });
    it('it should validate deletion ', () => {
      cy.request({
        method: 'GET',
        url: `${apiUrl}431`,
        failOnStatusCode: false,
        headers:
        {
            'Content-Type': 'text/plain'
        }
    }).then((response) => {
        expect(response.status).to.equal(404);
      });
    });
  });