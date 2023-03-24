package auth

import (
	"os"
	"encoding/json"
	"crypto/hmac"
    "crypto/sha256"
    "encoding/hex"

	"github.com/pocketbase/pocketbase/models"


)

func ComputeHmac256(record *models.Record) string {
    secret, err := os.ReadFile("C:/Users/dsu654/Desktop/cms-middleware/pocketbase-server/config/key/secret.key")
	if err != nil {
        panic(err)
    }
	data, _ := json.Marshal(record)
    // Create a new HMAC by defining the hash type and the key (as byte array)
    h := hmac.New(sha256.New, []byte(secret))
    // Write Data to it
    h.Write([]byte(data))
    return hex.EncodeToString(h.Sum(nil))
}
