describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.get('h1').contains('Build, Evaluate and Improve Prompts 10x faster')
    cy.get('p').contains('Empower your team to build, evaluate, and deploy high-performing prompts for LLM-based applications. Pype streamlines collaboration, version control, and performance analysis, helping you deliver reliable AI solutions faster.')

  })
})