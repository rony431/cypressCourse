describe('POST /pet API', () => {
    it('should return 200 when a new pet is successfully created', () => {
      cy.request('POST', 'https://petstore.swagger.io/v2/pet/', {
        id: 999,
        name: 'joge',
        category: {
          id: 1,
          name: 'Dogs',
        },
        photoUrls: ['photo_url'],
        tags: [
          {
            id: 0,
            name: 'dog',
          },
        ],
        status: 'available',
      }).then((response) => {
        expect(response.status).to.equal(200);
      });
    });
  });