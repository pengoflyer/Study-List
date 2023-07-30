package main

import "./LSP"

func main() {
	var zs = &LSP.Solider{}

	zs.SetGun(&LSP.HandGun{})
	zs.KillEnemy()
}
