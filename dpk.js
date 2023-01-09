const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let determinedKey;

  // evaluates the event
  if (event) {
    // evaluates partitionKey
    if (event.partitionKey) {
      determinedKey = typeof event.partitionKey !== "string" ? JSON.stringify(evnet.partitionKey) : event.partitionKey ;
      // check determinedKey length bigger than 256-we only have this case when the event param has partitionKey
      if(determinedKey.length > MAX_PARTITION_KEY_LENGTH) {
        determinedKey = crypto.createHash("sha3-512").update(determinedKey).digest("hex");
      }
    } else {
      determinedKey = crypto.createHash("sha3-512").update(JSON.stringify(event)).digest("hex");
    }
  }
  else {
    determinedKey = TRIVIAL_PARTITION_KEY;
  }

  return determinedKey;
};