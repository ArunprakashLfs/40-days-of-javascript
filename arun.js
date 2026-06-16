const crypto = require("crypto");

const secretKey = Buffer.from(
    "e4b5b6c1d2f3e4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9",
    "hex"
);

const iv = Buffer.from(
    "b2d6e9f8a3c5d7f4e1a2c3d4f5b6e7a8",
    "hex"
);

const algorithm = "aes-256-cbc";

function encryptUser(text) {
    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
    let encrypted = cipher.update(text, "utf8", "hex");
    encrypted += cipher.final("hex");
    return encrypted;
}

const encryptedValue = encryptUser("P2559");
console.log(encryptedValue);
