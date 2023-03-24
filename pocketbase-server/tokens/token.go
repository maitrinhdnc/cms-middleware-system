package main

import (
    "log"

    "github.com/pocketbase/pocketbase"
    "github.com/pocketbase/pocketbase/core"
)

func main() {
    app := pocketbase.New()

    app.OnAdminAuthRequest().Add(func(e *core.AdminAuthEvent) error {
        log.Println(e.Token)

        return nil
    })

    if err := app.Start(); err != nil {
        log.Fatal(err)
    }
}