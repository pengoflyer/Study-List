package LSP

import "fmt"

type IGun interface {
	Shoot()
}

type HandGun struct {
}

func (hg *HandGun) Shoot() {
	fmt.Println("hand gun shooting...")
}

type ISolider interface {
	KillEnemy()
}

type Solider struct {
	gun IGun
}

func (s *Solider) SetGun(igun IGun) {
	s.gun = igun
}

func (s *Solider) KillEnemy() {
	s.gun.Shoot()
}
