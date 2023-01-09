const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
  it("Returns the literal '11' when given above input", () => {
    const trivialKey = deterministicPartitionKey({partitionKey: "11"});
    expect(trivialKey).toBe("11");
  });
  it("Returns the literal 'abcdedfghi' when given above input", () => {
    const trivialKey = deterministicPartitionKey({partitionKey: "abcdedfghi"});
    expect(trivialKey).toBe("abcdedfghi");
  });
  it("Returns the literal '2a790c7f01fe76dc2e3608612ee9df4a6aba2f595a6a41df69aee334535b6333a63b7bc01a27ee647e22f9ad5270d4aa7ea9422b68ce715a55bc05f68d781a46' when given above input", () => {
    const trivialKey = deterministicPartitionKey({partitionKey: "01234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789"});
    expect(trivialKey).toBe("2a790c7f01fe76dc2e3608612ee9df4a6aba2f595a6a41df69aee334535b6333a63b7bc01a27ee647e22f9ad5270d4aa7ea9422b68ce715a55bc05f68d781a46");
  });
  it("Returns the literal '85024edfd934d85936045ac7cab448502662184ef0e083a586a52808b659185da7cf82b7e7f327710298567f2ef55ace3c0f64b5fe3363b79bb9c3127bca7fa7' when given above input", () => {
    const trivialKey = deterministicPartitionKey("11");
    expect(trivialKey).toBe("85024edfd934d85936045ac7cab448502662184ef0e083a586a52808b659185da7cf82b7e7f327710298567f2ef55ace3c0f64b5fe3363b79bb9c3127bca7fa7");
  });
  it("Returns the literal '0a14418e93312aa65ac9e970d4278a769c842a2019a094ceb111380073d19bc32e7b599768a45386943ebc7f2eab4893c01330f208aa20c6dbe47b2b183fdc67' when given above input", () => {
    const trivialKey = deterministicPartitionKey(11);
    expect(trivialKey).toBe("0a14418e93312aa65ac9e970d4278a769c842a2019a094ceb111380073d19bc32e7b599768a45386943ebc7f2eab4893c01330f208aa20c6dbe47b2b183fdc67");
  });
  it("Returns the literal '7a6a2933ef46051a725a1773f74b778c2083626d6718902c25ce9d14edaa8f6eec05947387258b9d2ac265434dba8c29a63ff1586c9b55d2ddfbf776a1fc0b14' when given above input", () => {
    const trivialKey = deterministicPartitionKey({patition: '11'});
    expect(trivialKey).toBe("7a6a2933ef46051a725a1773f74b778c2083626d6718902c25ce9d14edaa8f6eec05947387258b9d2ac265434dba8c29a63ff1586c9b55d2ddfbf776a1fc0b14");
  });
  it("Returns the literal 'a159389c37f37d73d90e4bc50b27b2cf3dde9f6015756885d2e6e2fe8845904249e2e32a9a1d0788aedb7a236dc12a968e0b1def7309a99f0534725503f6e5d9' when given above input", () => {
    const trivialKey = deterministicPartitionKey({patitionElse: '11'});
    expect(trivialKey).toBe("a159389c37f37d73d90e4bc50b27b2cf3dde9f6015756885d2e6e2fe8845904249e2e32a9a1d0788aedb7a236dc12a968e0b1def7309a99f0534725503f6e5d9");
  });
});
