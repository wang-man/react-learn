type UserID = string// 定义有效的用户信息类型
type UserInfo = "name" | "email" | "avatarUrl"


const users: Record<UserID, UserInfo> = { "uid1": "name" }


