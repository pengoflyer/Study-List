# 工作笔记一 --- 坐标点(point)


1.因为最近工作中涉及到一个地图相关的程序，就把坐标点的程序单独剥离出来一个类，现实了一些小方法，如十字相邻，九宫格相邻...
2.Go语言的初学者，想看看Go学得咋样，就用Go来实现的。

```go 
	
type pos struct {
	X int32
	Y int32
}

// 新建pos对象
func new_pos(x, y int32) *pos {
	return &pos{
		X: x,
		Y: y,
	}
}

// 有效性检查
func (self *pos) vaild(w, h int32) bool {
	return (self.X > 0 && self.X <= w) && (self.Y > 0 && self.Y <= h)
}

// x方向距离
func (self *pos) distance_x(pos *pos) int32 {
	return abs_int32(self.X - pos.X)
}

// y方向距离
func (self *pos) distance_y(pos *pos) int32 {
	return abs_int32(self.Y - pos.Y)
}
// int32绝对值
func abs_int32(n int32) (int32) {
	if n > 0 {
		return n
	}
	return -n
}

// 判断十字相邻
func (self *pos) near_cross(w, h int32, pos *pos) bool {
	if !self.vaild(w, h) || !pos.vaild(w, h) {
		return false
	}

	dx := self.distance_x(pos)
	dy := self.distance_y(pos)

	return (dx == 1 && dy == 0) || (dx == 0 && dy == 1)
}

// 判断九宫格相邻
func (self *pos) near_9_grid(w, h int32, pos *pos) bool {
	if !self.vaild(w, h) || !pos.vaild(w, h) {
		return false
	}

	if self.near_cross(w, h, pos) {
		return true
	}

	return self.distance_x(pos) == 1 && self.distance_y(pos) == 1
}

// 十字相邻点合集
func (self *pos) produce_near_cross_pos(w, h, n int32) (ret []*pos) {
	for i := -n; i <= n; i++ {
		for j := -n; j <= n; j++{
			p := new_pos(self.X+i, self.Y+j)
			if self.near_cross(w, h, p) {
				ret = append(ret, p)
			}
		}
	}

	return
}

// 九宫格相邻点合集
func (self *pos) produce_near_9_grid_pos(w, h, n int32) (ret []*pos) {
	for i := -n; i <= n; i++ {
		for j := -n; j <= n; j++{
			p := new_pos(self.X+i, self.Y+j)
			if self.near_9_grid(w, h, p) {
				ret = append(ret, p)
			}
		}
	}

	return
}

// ==========================================================
// 测试函数
func test_pos(w, h, x, y, limit int32){
	cur_pos := new_pos(x, y)

	fmt.Println("十字相邻点集：")
	cross_pos := cur_pos.produce_near_cross_pos(w, h, limit) 
	for _, cr := range cross_pos {
		fmt.Println(cr)
	}
	
	fmt.Println("=========================")
	fmt.Println("九宫格相邻点集：")
	grid_9_pos := cur_pos.produce_near_9_grid_pos(w, h, limit) 
	for _, cr := range grid_9_pos {
		fmt.Println(cr)
	}
}

```

3.测试结果：(边界点+正常点(中间点))
3.1 边界点测试结果：
```go
test_pos(10, 4, 1, 1, 2)

十字相邻点集：
&{1 2}
&{2 1}
=========================
九宫格相邻点集：
&{1 2}
&{2 1}
&{2 2}

```
3.2 中间点测试结果：
```go
test_pos(10, 4, 3, 3, 2)

十字相邻点集：
&{2 3}
&{3 2}
&{3 4}
&{4 3}
=========================
九宫格相邻点集：
&{2 2}
&{2 3}
&{2 4}
&{3 2}
&{3 4}
&{4 2}
&{4 3}
&{4 4}

```


