import { UniqueIdService } from "./unique-id.service"

describe(UniqueIdService.name, () => {

  let service: UniqueIdService = null;

  //Tem como papel principal garantir que cada chamada à função it tenha seu próprio conjunto de dados de testes.
  beforeEach(() => {
    service = new UniqueIdService();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id.startsWith('app')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should not generate multiple ids when called multiple times`, () => {
    const ids = new Set();
    for (let i = 0; i < 50; i++) {
      ids.add(service.generateUniqueIdWithPrefix('app-'));
    }

    expect(ids.size).toBe(50);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name} should return the number of Ids generated when called`, () => {
    service.generateUniqueIdWithPrefix('app-')
    service.generateUniqueIdWithPrefix('app-')
    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should throw Error when called`, () => {
    expect(() => service.generateUniqueIdWithPrefix(null)).toThrow();
    expect(() => service.generateUniqueIdWithPrefix('')).toThrow();
    expect(() => service.generateUniqueIdWithPrefix(undefined)).toThrow();
  })
})
