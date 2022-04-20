// type Extract<T, U> = T extends U ? T : never

// 子类集成父类返回子类
class People {}
class Chinese extends People {}
type testExtract = Extract<Chinese, People>

// 类型的extends
// type textExtract2 =
