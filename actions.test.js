const sameType = require("./actions.js");

describe("Validate sameType", () => {
  // Realiza agrupamento de testes, sendo possível separar os casos de teste
  beforeEach(() => {
    // Executado antes de cada teste
    console.log("Running before each test.");
  });
  beforeAll(() => {
    // Executado antes de todos os testes
    console.log("Running before all tests.");
  });
  test("Correct Values", () => {
    expect(sameType([1, 2, 3, 4])).toBe(true);
    expect(sameType(["1", "2", "3", "4"])).toBe(true);
    expect(sameType([false, true, false, true])).toBe(true);
  });

  test("Incorrect Values", () => {
    expect(sameType([1, "2", 3, 4])).toBe(false);
    expect(sameType(["1", "2", "3", 4])).toBe(false);
    expect(sameType([false, true, "false", true])).toBe(false);
  });

  afterAll(() => {
    // Função executada após todos os testes forem executados
    console.log("Finish");
  });
});
