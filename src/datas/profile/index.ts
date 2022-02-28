import avatarImg from '@/assets/images/avatar.png'

/**
 * 用户信息
 */
export const userInfo = {
  fullName: '石朝辉',
  nickname: 'StoneHui',
  email: '464206200@qq.com',
  wechat: 'StoneHui_',
  city: '广东广州',
  avatar: avatarImg,
}

/**
 * 创建徽章
 * @param name 名称
 * @param logo logo
 * @param logoColor logo 颜色
 * @returns 徽章地址
 */
function createBadge(name: string, logo: string, logoColor = '') {
  const finalName = name.replaceAll(' ', '%20')
  const finalLogoColor = logoColor.replace('#', '%23')
  return `https://img.shields.io/badge/${finalName}-%23323330.svg?&style=for-the-badge&logo=${logo}&logoColor=${finalLogoColor}`
}

/**
 * 用户徽章列表
 */
export const userBadgeList = [
  // 应用类型
  [
    createBadge(
      'Web',
      'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjQzMjY2ODY0MzA0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI5MDIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNODI0Ljg4ODg4OSA2MzAuOTkyNTkzbC0xMjIuMDI2NjY3LTUwLjM0NjY2N2EyOC40NDQ0NDQgMjguNDQ0NDQ0IDAgMSAwLTIxLjE0MzcwMyA1My41NzAzN2w2MC4xMTI1OTIgMjQuMzY3NDA4LTYwLjExMjU5MiAyNy41OTExMTFhMjguNDQ0NDQ0IDI4LjQ0NDQ0NCAwIDAgMC0xNC42MDE0ODIgMzcuMzU3MDM3QTI4LjkxODUxOSAyOC45MTg1MTkgMCAwIDAgNjkzLjA5NjI5NiA3MzkuNTU1NTU2YTE1LjQ1NDgxNSAxNS40NTQ4MTUgMCAwIDAgMTEuMzc3Nzc4LTMuMjIzNzA0bDEyMC40MTQ4MTUtNTQuOTkyNTkzYTI4LjkxODUxOSAyOC45MTg1MTkgMCAwIDAgMTYuMjEzMzMzLTI1Ljk3OTI1OUEyNS42OTQ4MTUgMjUuNjk0ODE1IDAgMCAwIDgyNC44ODg4ODkgNjMwLjk5MjU5M3pNNTQ4LjU5ODUxOSA1MTcuMzA5NjNhMjguNDQ0NDQ0IDI4LjQ0NDQ0NCAwIDAgMC0zNS43NDUxODYgMTcuODI1MTg1bC02MS42Mjk2MjkgMTg4LjM5NzAzN2EyOC40NDQ0NDQgMjguNDQ0NDQ0IDAgMCAwIDE3LjgyNTE4NSAzNS43NDUxODUgMTcuNTQwNzQxIDE3LjU0MDc0MSAwIDAgMCA4LjE1NDA3NCAxLjYxMTg1MiAzMS42NjgxNDggMzEuNjY4MTQ4IDAgMCAwIDI3LjU5MTExMS0xOS41MzE4NTJsNjEuNzI0NDQ1LTE4OC4zMDIyMjJhMjguNDQ0NDQ0IDI4LjQ0NDQ0NCAwIDAgMC0xNy45Mi0zNS43NDUxODV6TTM1OC42ODQ0NDQgNTk3LjMzMzMzM2EzMC4xNTExMTEgMzAuMTUxMTExIDAgMCAwLTM3LjM1NzAzNy0xNi4yMTMzMzNMMTk5LjExMTExMSA2MzAuOTkyNTkzYTMwLjQzNTU1NiAzMC40MzU1NTYgMCAwIDAtMTcuODI1MTg1IDI1Ljk3OTI1OUEyOC40NDQ0NDQgMjguNDQ0NDQ0IDAgMCAwIDE5Ny45NzMzMzMgNjgyLjY2NjY2N2wxMjAuMTMwMzcxIDU1LjE4MjIyMmEzMC4wNTYyOTYgMzAuMDU2Mjk2IDAgMCAwIDExLjM3Nzc3NyAzLjIyMzcwNCAyOC45MTg1MTkgMjguOTE4NTE5IDAgMCAwIDI1Ljk3OTI2LTE2LjIxMzMzNCAyOC40NDQ0NDQgMjguNDQ0NDQ0IDAgMCAwLTE0LjYwMTQ4Mi0zNy4zNTcwMzdsLTYwLjExMjU5Mi0yNy41OTExMTEgNjAuMTEyNTkyLTI0LjM2NzQwN2MxNi4yMTMzMzMtNy43NzQ4MTUgMjQuMzY3NDA3LTI0LjA4Mjk2MyAxNy44MjUxODUtMzguMjEwMzcxeiIgZmlsbD0iIzAwOTdGRiIgcC1pZD0iMjkwMyI+PC9wYXRoPjxwYXRoIGQ9Ik04NTMuMzMzMzMzIDE3MC42NjY2NjdhNTYuODg4ODg5IDU2Ljg4ODg4OSAwIDAgMSA1Ni44ODg4ODkgNTYuODg4ODg5djU2OC44ODg4ODhhNTYuODg4ODg5IDU2Ljg4ODg4OSAwIDAgMS01Ni44ODg4ODkgNTYuODg4ODg5SDE3MC42NjY2NjdhNTYuODg4ODg5IDU2Ljg4ODg4OSAwIDAgMS01Ni44ODg4ODktNTYuODg4ODg5VjIyNy41NTU1NTZhNTYuODg4ODg5IDU2Ljg4ODg4OSAwIDAgMSA1Ni44ODg4ODktNTYuODg4ODg5aDY4Mi42NjY2NjZtMC01Ni44ODg4ODlIMTcwLjY2NjY2N0ExMTMuNzc3Nzc4IDExMy43Nzc3NzggMCAwIDAgNTYuODg4ODg5IDIyNy41NTU1NTZ2NTY4Ljg4ODg4OGExMTMuNzc3Nzc4IDExMy43Nzc3NzggMCAwIDAgMTEzLjc3Nzc3OCAxMTMuNzc3Nzc4aDY4Mi42NjY2NjZhMTEzLjc3Nzc3OCAxMTMuNzc3Nzc4IDAgMCAwIDExMy43Nzc3NzgtMTEzLjc3Nzc3OFYyMjcuNTU1NTU2YTExMy43Nzc3NzggMTEzLjc3Nzc3OCAwIDAgMC0xMTMuNzc3Nzc4LTExMy43Nzc3Nzh6IiBmaWxsPSIjMDA5N0ZGIiBwLWlkPSIyOTA0Ij48L3BhdGg+PHBhdGggZD0iTTk2Ny4xMTExMTEgMzY1LjMyMTQ4MUg1Ni44ODg4ODl2NTYuODg4ODg5aDkxMC4yMjIyMjJ2LTU2Ljg4ODg4OXoiIGZpbGw9IiMwMDk3RkYiIHAtaWQ9IjI5MDUiPjwvcGF0aD48cGF0aCBkPSJNMjI0Ljk5NTU1NiAyNzMuNTQwNzQxbS00Mi42NjY2NjcgMGE0Mi42NjY2NjcgNDIuNjY2NjY3IDAgMSAwIDg1LjMzMzMzMyAwIDQyLjY2NjY2NyA0Mi42NjY2NjcgMCAxIDAtODUuMzMzMzMzIDBaIiBmaWxsPSIjMDA5N0ZGIiBwLWlkPSIyOTA2Ij48L3BhdGg+PHBhdGggZD0iTTM1Ny40NTE4NTIgMjczLjU0MDc0MW0tNDIuNjY2NjY3IDBhNDIuNjY2NjY3IDQyLjY2NjY2NyAwIDEgMCA4NS4zMzMzMzQgMCA0Mi42NjY2NjcgNDIuNjY2NjY3IDAgMSAwLTg1LjMzMzMzNCAwWiIgZmlsbD0iIzAwOTdGRiIgcC1pZD0iMjkwNyI+PC9wYXRoPjxwYXRoIGQ9Ik00ODkuOTA4MTQ4IDI3My41NDA3NDFtLTQyLjY2NjY2NyAwYTQyLjY2NjY2NyA0Mi42NjY2NjcgMCAxIDAgODUuMzMzMzM0IDAgNDIuNjY2NjY3IDQyLjY2NjY2NyAwIDEgMC04NS4zMzMzMzQgMFoiIGZpbGw9IiMwMDk3RkYiIHAtaWQ9IjI5MDgiPjwvcGF0aD48L3N2Zz4=',
    ),
    createBadge('android', 'android', '#3DDC84'),
    createBadge(
      '微信小程序',
      'ogo=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAwNDM5NDU4NTQwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjU2MzEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTE1LjAxMTc2NSAxMC4wMzkyMTZjLTI3Ny4wODIzNTMgMC01MDEuOTYwNzg0IDIyNC44Nzg0MzEtNTAxLjk2MDc4NSA1MDEuOTYwNzg0czIyNC44Nzg0MzEgNTAxLjk2MDc4NCA1MDEuOTYwNzg1IDUwMS45NjA3ODQgNTAxLjk2MDc4NC0yMjQuODc4NDMxIDUwMS45NjA3ODQtNTAxLjk2MDc4NGMwLTI3OC4wODYyNzUtMjI0Ljg3ODQzMS01MDEuOTYwNzg0LTUwMS45NjA3ODQtNTAxLjk2MDc4NHogbTE2Ni42NTA5OCA1MzkuMTA1ODgyYy0yMi4wODYyNzUgNC4wMTU2ODYtNDEuMTYwNzg0IDAtNTEuMi0yMS4wODIzNTMtOS4wMzUyOTQtMjAuMDc4NDMxIDQuMDE1Njg2LTM0LjEzMzMzMyAxOC4wNzA1ODgtNDYuMTgwMzkyIDcuMDI3NDUxLTYuMDIzNTI5IDE1LjA1ODgyNC0xMC4wMzkyMTYgMjMuMDkwMTk2LTE0LjA1NDkwMiAzMy4xMjk0MTItMTkuMDc0NTEgNjEuMjM5MjE2LTQ0LjE3MjU0OSA0NC4xNzI1NDktODYuMzM3MjU1LTE1LjA1ODgyNC0zOS4xNTI5NDEtNTEuMi00OS4xOTIxNTctODkuMzQ5MDE5LTQ0LjE3MjU0OS00NC4xNzI1NDkgNi4wMjM1MjktNjguMjY2NjY3IDMyLjEyNTQ5LTY4LjI2NjY2NyA3Ny4zMDE5NjEgMCA2OS4yNzA1ODggMi4wMDc4NDMgMTM5LjU0NTA5OC0xLjAwMzkyMSAyMDguODE1Njg2LTQuMDE1Njg2IDc4LjMwNTg4Mi04Ny4zNDExNzYgMTQ3LjU3NjQ3MS0xNjcuNjU0OTAyIDE0NC41NjQ3MDYtODYuMzM3MjU1LTMuMDExNzY1LTE1NS42MDc4NDMtNzMuMjg2Mjc1LTE1NC42MDM5MjItMTc2LjY5MDE5NiAyLjAwNzg0My00OC4xODgyMzUgNDUuMTc2NDcxLTg3LjM0MTE3NiAxMDQuNDA3ODQzLTExMy40NDMxMzcgMjUuMDk4MDM5LTExLjA0MzEzNyA0OS4xOTIxNTctMTEuMDQzMTM3IDYzLjI0NzA1OSAxNy4wNjY2NjYgMTYuMDYyNzQ1IDMzLjEyOTQxMi0xMS4wNDMxMzcgNDQuMTcyNTQ5LTMzLjEyOTQxMiA1NC4yMTE3NjUtNDQuMTcyNTQ5IDE5LjA3NDUxLTY2LjI1ODgyNCA1MC4xOTYwNzgtNDUuMTc2NDcgOTUuMzcyNTQ5IDIwLjA3ODQzMSA0Mi4xNjQ3MDYgNjEuMjM5MjE2IDUxLjIgMTA0LjQwNzg0MyAzNi4xNDExNzcgMzYuMTQxMTc2LTEyLjA0NzA1OSA1MC4xOTYwNzgtNDEuMTYwNzg0IDQ5LjE5MjE1Ny03OS4zMDk4MDQtMS4wMDM5MjItNjMuMjQ3MDU5LTEuMDAzOTIyLTEyNS40OTAxOTYgMC0xODguNzM3MjU1IDEuMDAzOTIyLTc1LjI5NDExOCAzNi4xNDExNzYtMTIzLjQ4MjM1MyAxMDUuNDExNzY0LTE0OC41ODAzOTIgNjMuMjQ3MDU5LTIyLjA4NjI3NSAxNDEuNTUyOTQxLTIuMDA3ODQzIDE4NC43MjE1NjkgNDguMTg4MjM1IDY0LjI1MDk4IDc5LjMwOTgwNCAxNS4wNTg4MjQgMjE1Ljg0MzEzNy04Ni4zMzcyNTUgMjM2LjkyNTQ5eiIgZmlsbD0iIzE2RDMyOCIgcC1pZD0iNTYzMiI+PC9wYXRoPjwvc3ZnPg==',
    ),
    createBadge(
      '微信小游戏',
      'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAwNDM5ODM0MjgwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjY2MTAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyIDUxMm0tNTEyIDBhNTEyIDUxMiAwIDEgMCAxMDI0IDAgNTEyIDUxMiAwIDEgMC0xMDI0IDBaIiBmaWxsPSIjRkE3NDAyIiBwLWlkPSI2NjExIj48L3BhdGg+PHBhdGggZD0iTTI1MS41NjI2NjcgNzc3LjA4OGMxMTMuMjM3MzMzIDExMy4yMzczMzMgMjg1LjM5NzMzMyAxMjQuNzE0NjY3IDM4NC41MTIgMjUuNiA5OS4wNzItOTkuMDcyIDg3LjU5NDY2Ny0yNzEuMjMyLTI1LjY0MjY2Ny0zODQuNDY5MzMzLTExMy4yOC0xMTMuMjgtMjg1LjQ0LTEyNC43NTczMzMtMzg0LjUxMi0yNS42NDI2NjctOTkuMTE0NjY3IDk5LjExNDY2Ny04Ny42MzczMzMgMjcxLjIzMiAyNS42IDM4NC41MTJ6IiBmaWxsPSIjRkZGRkZGIiBwLWlkPSI2NjEyIj48L3BhdGg+PHBhdGggZD0iTTQzOC40IDU2OS4wNDUzMzNjNTYuOTE3MzMzIDMxLjU3MzMzMyAxMjIuNzUyIDIxLjYzMiAxNDYuOTg2NjY3LTIyLjE4NjY2NiAyNC4zMi00My43MzMzMzMtMi4xNzYtMTA0Ljc4OTMzMy01OS4wOTMzMzQtMTM2LjM2MjY2Ny01Ni45MTczMzMtMzEuNTMwNjY3LTEyMi43MDkzMzMtMjEuNjMyLTE0Ni45ODY2NjYgMjIuMTg2NjY3LTI0LjI3NzMzMyA0My43MzMzMzMgMi4yMTg2NjcgMTA0LjgzMiA1OS4wOTMzMzMgMTM2LjM2MjY2NnoiIGZpbGw9IiNGQTc0MDIiIHAtaWQ9IjY2MTMiPjwvcGF0aD48cGF0aCBkPSJNNjgyLjUzODY2NyAzNTkuNjhjMjAuNTIyNjY3IDU2LjQ0OCA3NS4zMDY2NjcgODguMzIgMTIyLjM2OCA3MS4yNTMzMzMgNDcuMDE4NjY3LTE3LjE1MiA2OC40OC03Ni44IDQ3Ljk1NzMzMy0xMzMuMjA1MzMzLTIwLjU2NTMzMy01Ni40NDgtNzUuMzQ5MzMzLTg4LjMyLTEyMi4zNjgtNzEuMjUzMzMzLTQ3LjAxODY2NyAxNy4xNTItNjguNTIyNjY3IDc2LjgtNDcuOTU3MzMzIDEzMy4yMDUzMzN6IiBmaWxsPSIjRkZGRkZGIiBwLWlkPSI2NjE0Ij48L3BhdGg+PC9zdmc+',
    ),
  ],
  // 框架
  [
    createBadge('react', 'react', '#61DAFB'),
    createBadge('vue', 'vue.js', '#4FC08D'),
    createBadge(
      'Taro',
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAA8CAYAAADi8H14AAAAAXNSR0IArs4c6QAABO9JREFUeAHtW8lqFUEU9TlFBRU1Ik4IwRlRiPNCcCAuVHChS0Vw5Q/4Ee4FF/oD4l4MuNZEs3AgRg1RiKhx1jiLGs8Jr5O2X3dVdfere8u0F4rXr+/tuueeVJ+uqn6pTaqIjYyMLESp+9CWoy1Bm4Xm03pqtdr5qT4zhNA3iJ0GHEfRdqFNEcR0j7kmNMEgl4SeQtvAYoVtlODJwkml0x1DQg1yn0Me3rFY5xGM0dCK+ON1wOvxOQdNy86igHOm5MC7CP6dphiPvtHRy/6tBANoC+JO15smqcQb2Z3owPDZAV/N4Pfp6o06NxIMcum/iHY4uiCAT956XSYcwE3p22yK8ej7ib77o/5tGnwBgSGRS9ydkIdfUQEZnytw3vc0LCP1pH7g+xE5MwnGKGhH0IkoMKDPyw5Y+IzQsjH9JYBMguGj7oZmIwB0xQGUJsFj+kucqQRj9M6Gj5Pz0Owmbr9XJlDAPgP+NlOMR98w8D2N959KMAL2oBkfgPFOBI9d5GEN8GTV5RvqX/LAZFlA9vtGUrB/F4KDkQfWmDVKQyT4I/AeggQcsfxxuOdQZgbxCNe/tuTIct9POhoIRgGc4qxKBgbw/TswHLDg4N7DMkuMzf3XQ8oWHPMPQn+HY99HD9MkIsTRS7AfkuBTvs9MOZfn1GcEsxWxBv1lJ/8KwZyeNYyOFBbKEvwipU/XU3aCIQ8knJvSodknALKt3oiZU7QyVpRgrtwG0hInR/AWBM1LC1Q+5yIP04ExWU8e2L8RbJxjGzp7AP3lHkSDJQFVWX/fgB2Xu6SBRJxIlQcG/gsE8/b7SrAW05IHwrITDP3l8niHpQgNt4s8cN+X+9ZlrKj+voU8DGUljo/g3QjiC8LQzIVgjt4ym+vfcL3LLCWNm8zRy+A4wSHqLx88LoVrTs+MC5PQCeb0jCTbTEt/OT9vWB7HwY4SXF8er447Ajl2kQcuj8tIG0kqOj17DP39YuIqGsEdpiBFnwvBZeWB7/jGXvHkrNWov+wr2uwJUX+5ucOHj804d31vCzL4r8LXafCbXDdMTvpq9eUxb5H5tmBh/0vkGxTIeRK3+V1feSgRXB6HRi7rdZEHxpUx7jFbb/MyCUhwiPrLmQOL923dGL1Fl8dO2KjBLOaSU7SfoKXodm2ia2qvy/QscVnur125r8h5QZnVT85U6eF4BpyBZ2+61/vZgxjB1HpvRolQs/oDdqsSgAHf5LIuVYKRfx0aN5k07LpEUm2Ct0sUmZHjP8EZxDTjNBcxt5rRka0PtREM/eUSd6MNoCc//0Gl6PI4FyQ1goGyHS1aqucC3YRgEXkgTk2CJ7z+VpXgZ5CHwSbcBU5dqIxg6G8r0LU5IWx+kJg8ELoKwchbCXmoIsHc2Olh4VKmNYK3SRWYyHMb+lv0x32Jrty+ihMM/V0JaAvc4DU9SlR/iV6cYOSsjP5WjWD+9uwhi5Y00REMeeDrda7gNIxvL/iKXtRECUZlm9BaRCscT3Zt/FDuSJpgLf3lyO2Wo3U8U1UI7oM8lPntxDhjOY/ECIb+zgW25MvNnHALh3t/uZmFTIxgAOC7N62XrCr6S9IlCdbSX67celmshlWBYE7PUv9BRYJwEYKhv8tRzGKJglJyiC+P4xhECEZCLXlgrWoPOCaf6ATzB9JDLFTLpF469qHAJwpFev3lpEs9fwBpxe4J7SMAYgAAAABJRU5ErkJggg==',
    ),
    createBadge(
      'Node',
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFCElEQVR4AaXUA6xkXRbF8f9e+9yqNsa2PRMnY9u2bdvh2LatYKxgbHte8/XLM6tu3XP2d5K26+tayW9dG+IC8+JvPPaeL/36k/7z3M899p+P/9BD71xxITTuii//waO94kXffMR1X/qtx/4pefqWGdfY1G+u3U/pO72m+W2v8WtW7Ni0OVWMQ+OuuH7Ac9fGx5qm+btMNwKCI9m0uVeixM2l9O9k/sGu5K5iHBpnJb/s+guay4yyZI81AKLCOJJecrkbpZTA9CSTtXJ7VsV5nXPh5Vdu31xhMCPpzWaI4IyJqt/vUXKxHIUIa8DeKdMBM7t1xdnoxIlypWmvyJedvTqXX/ypJ/3AjEsDwXniEsmdyIXDJ0EEXN5NP5H0Q4grV/R6jVccpVrsOTRvFft/288UvSc1/NfErYDC4RjnSwR13+QIiEIdWpSgRBRht0sp7UnJ31ZKzhUQViEIrnXly4T3475XuMWwNfH0E65YjJmoMCO5k3MQpZAjKBGqoBCGnmvShifdw0RUqBb7Z2e3x0hfalfUmAAwLiQB7qJEUEo5MoRcKyKsBCTzTX+amvry9//6+80//+ffTbWIbJt68m51Xw8smDSSnXAXSh1Sh4GAmaVFltbW7NKbd/UJM9XC3cOTgq5hMNdgzkQxMwpBKQFRThgP9szOIKmst4MAQgCNpyNvsbEx3YcCBJMloMuFUoIKMzG9uMhoNKIx4RgVqoUZSI67sOKsz/QwDyZNLpmcgxKZLnccWFzAlABDFZWglgx3q4Qn0c73KCNj0nQ505UCYcwsL5IjY2ZgIocRGKpFSkIy7MiJyJzhXA9NehcMBu2Qtsssra+SJDCgkguToVoEIHH44KoSdMsN3VCYTXR8uuiYX10CcyTHMXTCchkgceRsQILkYtC1/PMfc9RxJovRRqYv4SbkCSkdHpdXtbAAVTKskmB6ZZbF+ZbFxSGSMUmCYBSZxkVjhlcy4QjVglSQAiyQG/NrqwzaESkZe/6/hGQEMcE9MIbdCJnhMpKLfnKaJFSLolwV5EFYx4H5OZKEmbG0PGRubh2XmCQRwfqopfFEMsMAN1AtchQ6ddAU9s8tkEshOJyUxH/+u0BETPx33BgN6UrBlUiecEuoFq0GZBuxMthgdmHltKvd2Bhx4NAK7jbhScDKcJ3kTtt1SKISG3lgOY3s4KEldIZb3TRiau88OQcYE70Lo9xR74RdYfulSOaoFunSbTu/sNbfWMtn/O4joOsKe/Yv4K6JH8XSYK1ZGq128xtLqBZzv2mWFvbnx8o5a5KLqQPzDNsOM5v0JB59aGVhrS05VIvVlc7KUJ+86cv+J4zPnHjxnBiDf03NXNy7EByJzD5VGRGf7XJnFaqFNuWo+MMbryE6e6Q5NwD+XNmJO3GJ6bkV1gbtxTmwGfzJza/nlh7ddp1XlBJRoVoc1dHlilGb/9blfGPEfYGNE04El/GPqelxftFWDar7bmn6N9m9Zds/Kq6w81K54ijV4mwus2X3Ny6zbfcWjDec+BLNL68yv7SGYZwjb+il3uYdm7Z+o+JsVIvzudYlr/RqLjXqYXwNILnz9z0HkIwTLxeCiPjqcrfe27DhqyvOR+Os9O/VKWN/PzPQ/fG4Bcae9eGQ6YVFJAFQIvZUN3fZA3b6llwxDo2z0g12XSNucNUrF7Zmw/gdHleV2yP+c3B6VKK0uZSHm7hq0/PfB2F1WCrGcRGqhheqx+Gf1gAAAABJRU5ErkJggg==',
    ),
    createBadge('flutter', 'flutter', '#02569B'),
    createBadge(
      'Cocos Creator',
      'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAwNDQyODUzMDgxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjMxNTMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNODM0LjgxNiA2NjUuOTQxMzMzczM1LjkyNTMzMy0xODAuNjUwNjY3LTcyLjc4OTMzMy00MTEuMjY0YzAgMC0xNy45NjI2NjcgMzguMjI5MzMzLTE3Ljk2MjY2NyA1Ny4zMDEzMzQgMCAwLTExOS40MjQtMTg3LjczMzMzMy0zMzIuNTQ0LTMxMS45Nzg2NjcgMCAwIDE2LjY4MjY2NyA5MS42OTA2NjcgMjIuNjk4NjY3IDEwMy40MjQgMCAwLTIwMS4xNzMzMzMgMTQ1LjQwOC0yNTAuNDEwNjY3IDM1NS40MTMzMzNMMTI5LjkyIDM4NS40MDhzLTQuMjY2NjY3IDE2MC4yMTMzMzMgMCAxOTUuNDEzMzMzYzQuNjkzMzMzIDM1LjE1NzMzMyAzOC45MTIgMzE0LjE5NzMzMyAyNzEuMzYgMzg0LjY4MjY2NyAyMzIuMzYyNjY3IDcwLjUyOCAzOTUuMDA4LTEwNS42ODUzMzMgNDk0LjcyLTMxMS4zMzg2NjdsLTYxLjE4NCAxMS43NzZ6IG0tNDIzLjI5NiAxNzAuNDk2Yy02MS4xODQgMTQuOTMzMzMzLTEyNy41NzMzMzMtMzkuNjgtMTQ4LjA1MzMzMy0xMjEuOTQxMzMzLTIwLjk5Mi04Mi4yMTg2NjcgMTIuMzczMzMzLTE2MC45ODEzMzMgNzMuNi0xNzUuODcyIDYxLjE4NC0xNC44OTA2NjcgMTI3Ljk1NzMzMyAzOS42OCAxNDguNDggMTIxLjk4NCAyMC41NjUzMzMgODIuMjE4NjY3LTEyLjggMTYwLjkzODY2Ny03NC4wMjY2NjcgMTc1LjgyOTMzM3ogbTM0NC45Ni0xMjEuOTQxMzMzYy0yMC41NjUzMzMgODIuMzA0LTg2Ljg2OTMzMyAxMzYuODMyLTE0OC4wNTMzMzMgMTIxLjk0MTMzMy02MS42NTMzMzMtMTQuODkwNjY3LTk0LjYzNDY2Ny05My42MTA2NjctNzQuMDY5MzM0LTE3NS44MjkzMzMgMjAuNTIyNjY3LTgyLjMwNCA4Ni44NjkzMzMtMTM2Ljg3NDY2NyAxNDguNDgtMTIxLjk4NCA2MS4yMjY2NjcgMTQuOTMzMzMzIDk0LjE2NTMzMyA5My42NTMzMzMgNzMuNjQyNjY3IDE3NS44NzJ6IG0tMjgxLjE3MzMzMy0zMC4zMzZjLTE1LjQ0NTMzMy02MC45MjgtNzEuMDgyNjY3LTk5LjcxMi0xMjQuNTg2NjY3LTg2Ljc0MTMzMy01My44ODggMTMuMDU2LTg0LjczNiA3Mi45Ni02OS43MTczMzMgMTMzLjg0NTMzMyAxNS4zNiA2MC44ODUzMzMgNzEuMDQgOTkuNzEyIDEyNC41NDQgODYuNjU2IDUzLjg4OC0xMi45NzA2NjcgODQuNzM2LTcyLjg3NDY2NyA2OS43Ni0xMzMuNzZ6IG0xOTMuODc3MzMzLTg2Ljc0MTMzM2MtNTMuNTA0LTEyLjk3MDY2Ny0xMDkuMTQxMzMzIDI1LjgxMzMzMy0xMjQuNTg2NjY3IDg2Ljc0MTMzMy0xNS4zNiA2MC44ODUzMzMgMTUuODcyIDEyMC43NDY2NjcgNjkuMzc2IDEzMy43NiA1My40NjEzMzMgMTMuMDU2IDEwOS41NjgtMjUuNzcwNjY3IDEyNC41NDQtODYuNjU2IDE1LjM2LTYwLjg4NTMzMy0xNS44NzItMTIwLjc4OTMzMy02OS4zMzMzMzMtMTMzLjg0NTMzM3ogbS0yNjkuMjI2NjY3IDE2Mi41MTczMzNhMjguMjg4IDI4LjI4OCAwIDAgMS0yOC42NzItMjcuOTA0YzAtMTUuNDAyNjY3IDEyLjg0MjY2Ny0yNy45NDY2NjcgMjguNjcyLTI3Ljk0NjY2NyAxNS40MDI2NjcgMCAyOC4yNDUzMzMgMTIuNTQ0IDI4LjI0NTMzNCAyNy45NDY2NjdhMjguMTYgMjguMTYgMCAwIDEtMjguMjQ1MzM0IDI3LjkwNHogbTIxOS45ODkzMzQgMGEyOC4xNiAyOC4xNiAwIDAgMS0yOC4yNDUzMzQtMjcuOTA0YzAtMTUuNDAyNjY3IDEyLjgtMjcuOTQ2NjY3IDI4LjI0NTMzNC0yNy45NDY2NjdhMjcuOTQ2NjY3IDI3Ljk0NjY2NyAwIDEgMSAwIDU1Ljg1MDY2N3oiIHAtaWQ9IjMxNTQiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L3N2Zz4=',
    ),
  ],
  // 语言
  [
    createBadge('javascript', 'javascript', '#F7DF1E'),
    createBadge('typescript', 'typescript', '#007ACC'),
    createBadge('html5', 'html5', '#E34F26'),
    createBadge('css3', 'css3', '#1572B6'),
    createBadge('java', 'java', '#FFFFFF'),
    createBadge('kotlin', 'kotlin', '#0095D5'),
    createBadge('dart', 'dart', '#0175C2'),
    createBadge('python', 'python', '#3776AB'),
  ],
]
