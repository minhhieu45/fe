export default function Footer() {
    return (
        <>
            <footer>
                <ul className="menuFooter d-flex align-center justify-content-center">
                    <li className="itemFooter"><a href="">
                        Atlassian Jira <a href="#">Project Management Software</a> (v9.1.0#901000-sha1:5ed254e)
                    </a></li>
                    <li className="itemFooter"><a href="">About Jira</a></li>
                    <li className="itemFooter"><a href="">Report a problem</a></li>
                </ul>
                <img
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjEyN3B4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAxMjcgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0Ni4yICg0NDQ5NikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+PHRpdGxlPkF0bGFzc2lhbiBob3Jpem9udGFsIGJsdWUgZ3JhZGllbnQgLSBzbWFsbDwvdGl0bGU+PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSI5OS42ODQ3MTYlIiB5MT0iMTUuODEzODEyOCUiIHgyPSIzOS44NDQ0Mzk5JSIgeTI9Ijk3LjQzODgzODglIiBpZD0ibGluZWFyR3JhZGllbnQtMSI+PHN0b3Agc3RvcC1jb2xvcj0iIzAwNTJDQyIgb2Zmc2V0PSIwJSI+PC9zdG9wPjxzdG9wIHN0b3AtY29sb3I9IiMyNjg0RkYiIG9mZnNldD0iOTIuMyUiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48ZyBpZD0iMjRweC1Ib3Jpem9udGFsLShzbWFsbCkiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGlkPSJBdGxhc3NpYW4taG9yaXpvbnRhbC1ibHVlLWdyYWRpZW50LS0tc21hbGwiIGZpbGwtcnVsZT0ibm9uemVybyI+PGcgaWQ9IkF0bGFzc2lhbi1ob3Jpem9udGFsLXdoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgNC4wMDAwMDApIj48cGF0aCBkPSJNNC42MDMzNTA3LDcuNzQxNTQ2MiBDNC41MDk1NzU4OCw3LjYyMDE0MjYgNC4zNTg0ODY5LDcuNTU2MDU2NCA0LjIwNDk1MDU5LDcuNTcyNTYwMDMgQzQuMDUxNDE0MjcsNy41ODkwNjM2NSAzLjkxNzc2Miw3LjY4Mzc1NjY5IDMuODUyNTI4Niw3LjgyMjI1MjA4IEwwLjA0Nzk5ODYzOTksMTUuMzQ3ODk5MSBDLTAuMDIyNDcwNDI5OSwxNS40ODczNTA2IC0wLjAxNDkzNzU4ODQsMTUuNjUyOTU3MiAwLjA2NzkwNzI3NzcsMTUuNzg1NTgyNyBDMC4xNTA3NTIxNDQsMTUuOTE4MjA4MyAwLjI5NzA5NzA2MywxNS45OTg5NDMyIDAuNDU0Njg0MDMzLDE1Ljk5ODk1OCBMNS43NTIyOTYzOSwxNS45OTg5NTggQzUuOTI1NjQ4NDEsMTYuMDAyOTM5NyA2LjA4NTA3NzY2LDE1LjkwNTQ0MTggNi4xNTg5ODE3OSwxNS43NTAyNTIxIEM3LjMwMTc0Mzk2LDEzLjQxNDAxNjggNi42MDkxODk2NSw5Ljg2MTc4MTQ5IDQuNjAzMzUwNyw3Ljc0MTU0NjIgWiIgaWQ9IlNoYXBlIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIj48L3BhdGg+PHBhdGggZD0iTTcuMzkwNjM3MDUsMC44OTE0MjM5MTMgQzUuNDYyMDY1NTMsMy44MjcyNjU0OCA1LjIzOTQ3OTAxLDcuNTUxMTY1ODUgNi44MDQ4NjczOSwxMC42OTE0MjM5IEw5LjM1ODg5OTIyLDE1Ljc0NTA3MSBDOS40MzU5MTU5MiwxNS44OTc0Nzk2IDkuNTkzMzU1NDYsMTUuOTkzNzYwNyA5Ljc2NTU4NDYyLDE1Ljk5Mzc3NjkgTDE1LjA2MjI0NTcsMTUuOTkzNzc2OSBDMTUuMjE5ODMyNiwxNS45OTM3NjIxIDE1LjM2NjE3NzYsMTUuOTEzMDI3MiAxNS40NDkwMjI0LDE1Ljc4MDQwMTYgQzE1LjUzMTg2NzMsMTUuNjQ3Nzc2MSAxNS41Mzk0MDAxLDE1LjQ4MjE2OTUgMTUuNDY4OTMxMSwxNS4zNDI3MTggQzE1LjQ2ODkzMTEsMTUuMzQyNzE4IDguMzQzMTM3MDUsMS4yNDEzMDYyNyA4LjE2NDA1Mjc4LDAuODg4NjAwMzg0IEM4LjA5MTgwMjE3LDAuNzQyMTAwMTcyIDcuOTQxMjEyNTUsMC42NDk0MDE1MDEgNy43NzY0NDk3NCwwLjY1MDAwMzAwNSBDNy42MTE2ODY5MiwwLjY1MDYwNDUwOSA3LjQ2MTc5Mjg5LDAuNzQ0NDAwMTY0IDcuMzkwNjM3MDUsMC44OTE0MjM5MTMgTDcuMzkwNjM3MDUsMC44OTE0MjM5MTMgWiIgaWQ9IlNoYXBlIiBmaWxsPSIjMjY4NEZGIj48L3BhdGg+PHBhdGggZD0iTTY5LjUxODI2NjksNi45Mjc5NTQ0MSBDNjkuNTE4MjY2OSw4Ljc5MTQ4MzgyIDcwLjM5MjA0NTksMTAuMjcxMDEzMiA3My44MDk4NjgsMTAuOTI0MTg5NyBDNzUuODQ5MDAyOCwxMS4zNDc3MTkxIDc2LjI3NjE0MTQsMTEuNjczMzY2MiA3Ni4yNzYxNDE0LDEyLjM0NTgzNjggQzc2LjI3NjE0MTQsMTIuOTk5MDEzMiA3NS44NDgwNTE1LDEzLjQyMTgzNjggNzQuNDExODA5OSwxMy40MjE4MzY4IEM3Mi42NzU5MzEsMTMuMzkwOTU4NiA3MC45NzQ3NTY4LDEyLjkzNTUzOCA2OS40NTk5OTkxLDEyLjA5NjE4OTcgTDY5LjQ1OTk5OTEsMTUuMTMxNDgzOCBDNzAuNDg5MzE3NCwxNS42MzEwMTMyIDcxLjg0ODUwMjgsMTYuMTg4MTg5NyA3NC4zNzMwNDQsMTYuMTg4MTg5NyBDNzcuOTQ2MTY3NiwxNi4xODgxODk3IDc5LjM2Mzg1ODYsMTQuNjExNzE5MSA3OS4zNjM4NTg2LDEyLjI2ODg5NTYgTTc5LjM2Mzg1ODYsMTIuMjY4ODk1NiBDNzkuMzYzODU4NiwxMC4wNTk0ODM4IDc4LjE3OTIzODgsOS4wMjE4MzY3NiA3NC44MzkxODY0LDguMzExMjQ4NTMgQzcyLjk5NDM1NjgsNy45MDc3MTkxMiA3Mi41NDc3MTYzLDcuNTA0NDI1IDcyLjU0NzcxNjMsNi45Mjc5NTQ0MSBDNzIuNTQ3NzE2Myw2LjE5ODU0MjY1IDczLjIwNzkyNjEsNS44OTA1NDI2NSA3NC40MzEzMTE4LDUuODkwNTQyNjUgQzc1LjkwNzI3MDYsNS44OTA1NDI2NSA3Ny4zNjM3Mjc1LDYuMzMyNDI1IDc4Ljc0MjQxNDgsNi45NDcyNDg1MyBMNzguNzQyNDE0OCw0LjA0NjA3MjA2IEM3Ny40MjA0MDk5LDMuNDUwNzY5MzcgNzUuOTgwNjAzOSwzLjE1NTQwODc5IDc0LjUyODM0NTUsMy4xODE2MDE0NyBDNzEuMjI3MDU5LDMuMTgxNjAxNDcgNjkuNTE4MjY2OSw0LjYwMzI0ODUzIDY5LjUxODI2NjksNi45Mjc5NTQ0MSIgaWQ9IlNoYXBlIiBmaWxsPSIjMDA1MkNDIj48L3BhdGg+PHBvbHlnb24gaWQ9IlNoYXBlIiBmaWxsPSIjMDA1MkNDIiBwb2ludHM9IjExNS40MTk5OTggMy4zODAwMDAxMSAxMTUuNDE5OTk4IDE2LjAwMjU4ODMgMTE4LjEzODYwNyAxNi4wMDI1ODgzIDExOC4xMzg2MDcgNi4zNzcxNzY1OSAxMTkuMjg0NDYxIDguOTMyMjM1NDEgMTIzLjEyOTQyMSAxNi4wMDI1ODgzIDEyNi41NDcyNDMgMTYuMDAyNTg4MyAxMjYuNTQ3MjQzIDMuMzgwMDAwMTEgMTIzLjgyODYzNSAzLjM4MDAwMDExIDEyMy44Mjg2MzUgMTEuNTI2MTE3OCAxMjIuNzk5MzE3IDkuMTYyODIzNjQgMTE5LjcxMTU5OSAzLjM4MDAwMDExIj48L3BvbHlnb24+PHJlY3QgaWQ9IlJlY3RhbmdsZS1wYXRoIiBmaWxsPSIjMDA1MkNDIiB4PSI5NS4xNjAwMDM3IiB5PSIzLjM4MDAwMDExIiB3aWR0aD0iMi45NzExODE2NSIgaGVpZ2h0PSIxMi42MjI1ODgyIj48L3JlY3Q+PHBhdGggZD0iTTkxLjczMzg2MTQsMTIuMjY4ODk1NiBDOTEuNzMzODYxNCwxMC4wNTk0ODM4IDkwLjU0OTI0MTUsOS4wMjE4MzY3NiA4Ny4yMDkxODkxLDguMzExMjQ4NTMgQzg1LjM2NDM1OTUsNy45MDc3MTkxMiA4NC45MTc3MTkxLDcuNTA0NDI1IDg0LjkxNzcxOTEsNi45Mjc5NTQ0MSBDODQuOTE3NzE5MSw2LjE5ODU0MjY1IDg1LjU3NzkyODgsNS44OTA1NDI2NSA4Ni44MDEzMTQ2LDUuODkwNTQyNjUgQzg4LjI3NzI3MzQsNS44OTA1NDI2NSA4OS43MzM3MzAzLDYuMzMyNDI1IDkxLjExMjQxNzYsNi45NDcyNDg1MyBMOTEuMTEyNDE3Niw0LjA0NjA3MjA2IEM4OS43OTA0MTI2LDMuNDUwNzY5MzcgODguMzUwNjA2NiwzLjE1NTQwODc5IDg2Ljg5ODM0ODMsMy4xODE2MDE0NyBDODMuNTk3MDYxOCwzLjE4MTYwMTQ3IDgxLjg4ODI2OTYsNC42MDMyNDg1MyA4MS44ODgyNjk2LDYuOTI3OTU0NDEgQzgxLjg4ODI2OTYsOC43OTE0ODM4MiA4Mi43NjIwNDg2LDEwLjI3MTAxMzIgODYuMTc5ODcwNywxMC45MjQxODk3IEM4OC4yMTkwMDU2LDExLjM0NzcxOTEgODguNjQ2MTQ0MiwxMS42NzMzNjYyIDg4LjY0NjE0NDIsMTIuMzQ1ODM2OCBDODguNjQ2MTQ0MiwxMi45OTkwMTMyIDg4LjIxODA1NDMsMTMuNDIxODM2OCA4Ni43ODE4MTI3LDEzLjQyMTgzNjggQzg1LjA0NTkzMzcsMTMuMzkwOTU4NiA4My4zNDQ3NTk1LDEyLjkzNTUzOCA4MS44MzAwMDE4LDEyLjA5NjE4OTcgTDgxLjgzMDAwMTgsMTUuMTMxNDgzOCBDODIuODU5MzIwMiwxNS42MzEwMTMyIDg0LjIxODUwNTYsMTYuMTg4MTg5NyA4Ni43NDMwNDY4LDE2LjE4ODE4OTcgQzkwLjMxNjE3MDQsMTYuMTg4MTg5NyA5MS43MzM4NjE0LDE0LjYxMTcxOTEgOTEuNzMzODYxNCwxMi4yNjg4OTU2IiBpZD0iU2hhcGUiIGZpbGw9IiMwMDUyQ0MiPjwvcGF0aD48cG9seWdvbiBpZD0iU2hhcGUiIGZpbGw9IiMwMDUyQ0MiIHBvaW50cz0iNDYuNDM5OTk4NiAzLjM4MDAwMDExIDQ2LjQzOTk5ODYgMTYuMDAyNTg4MyA1Mi41NDY5Mzg3IDE2LjAwMjU4ODMgNTMuNTA4NDc2MiAxMy4yNzQzNTMxIDQ5LjQzMDQ0NDMgMTMuMjc0MzUzMSA0OS40MzA0NDQzIDMuMzgwMDAwMTEiPjwvcG9seWdvbj48cG9seWdvbiBpZD0iU2hhcGUiIGZpbGw9IiMwMDUyQ0MiIHBvaW50cz0iMzQuMzY5OTk4OSAzLjM4MDAwMDExIDM0LjM2OTk5ODkgNi4xMDgwMDAxMSAzNy42NzEyODU0IDYuMTA4MDAwMTEgMzcuNjcxMjg1NCAxNi4wMDI1ODgzIDQwLjY2MTczMTEgMTYuMDAyNTg4MyA0MC42NjE3MzExIDYuMTA4MDAwMTEgNDQuMTk2MDg4OCA2LjEwODAwMDExIDQ0LjE5NjA4ODggMy4zODAwMDAxMSI+PC9wb2x5Z29uPjxwYXRoIGQ9Ik0zMC4wMzgyMDYxLDMuMzgwMDAwMTEgTDI2LjExOTA0MzEsMy4zODAwMDAxMSBMMjEuNjcwMDAwMSwxNi4wMDI1ODgzIEwyNS4wNjc2MDY4LDE2LjAwMjU4ODMgTDI1LjY5ODMyNTksMTMuODc2NzA2IEMyNy4yNTE2ODczLDE0LjMyNzk2NjkgMjguOTAzNDIxNCwxNC4zMjc5NjY5IDMwLjQ1Njc4MjgsMTMuODc2NzA2IEwzMS4wODc1MDE5LDE2LjAwMjU4ODMgTDM0LjQ4NTgyMjIsMTYuMDAyNTg4MyBMMzAuMDM4MjA2MSwzLjM4MDAwMDExIFogTTI4LjA3ODUwNTcsMTEuNjAwNDcwNyBDMjcuNTI1MDU2LDExLjYwMDQzOSAyNi45NzQ0NTcsMTEuNTIyMDc2NiAyNi40NDM0NDAyLDExLjM2Nzc2NDggTDI4LjA3ODUwNTcsNS44NTkyOTQyMyBMMjkuNzEzNTcxMiwxMS4zNjk2NDcyIEMyOS4xODI0NjA5LDExLjUyMzMyMjEgMjguNjMxODYzNywxMS42MDEwNTAzIDI4LjA3ODUwNTcsMTEuNjAwNDcwNyBMMjguMDc4NTA1NywxMS42MDA0NzA3IFoiIGlkPSJTaGFwZSIgZmlsbD0iIzAwNTJDQyI+PC9wYXRoPjxwYXRoIGQ9Ik02My4wNjc5Njg5LDMuMzgwMDAwMTEgTDU5LjE0OTA0MzgsMy4zODAwMDAxMSBMNTQuNzAwMDAwOCwxNi4wMDI1ODgzIEw1OC4wOTgzMjEsMTYuMDAyNTg4MyBMNTguNzI5MDQwMSwxMy44NzY3MDYgQzYwLjI4MjQwMTUsMTQuMzI3OTY2OSA2MS45MzQxMzU2LDE0LjMyNzk2NjkgNjMuNDg3NDk3LDEzLjg3NjcwNiBMNjQuMTE4MjE2MSwxNi4wMDI1ODgzIEw2Ny41MTY1MzYzLDE2LjAwMjU4ODMgTDYzLjA2Nzk2ODksMy4zODAwMDAxMSBaIE02MS4xMDg1MDY0LDExLjYwMDQ3MDcgQzYwLjU1NTA1NjcsMTEuNjAwNDM5IDYwLjAwNDQ1NzYsMTEuNTIyMDc2NiA1OS40NzM0NDA4LDExLjM2Nzc2NDggTDYxLjEwODUwNjQsNS44NTkyOTQyMyBMNjIuNzQzNTcxOSwxMS4zNjk2NDcyIEM2Mi4yMTI0NjE2LDExLjUyMzMyMjEgNjEuNjYxODY0NCwxMS42MDEwNTAzIDYxLjEwODUwNjQsMTEuNjAwNDcwNyBMNjEuMTA4NTA2NCwxMS42MDA0NzA3IFoiIGlkPSJTaGFwZSIgZmlsbD0iIzAwNTJDQyI+PC9wYXRoPjxwYXRoIGQ9Ik0xMDguODM3OTY5LDMuMzgwMDAwMTEgTDEwNC45MTkwNDQsMy4zODAwMDAxMSBMMTAwLjQ3MDAwMSwxNi4wMDI1ODgzIEwxMDMuODY4MzIxLDE2LjAwMjU4ODMgTDEwNC40OTkwNDEsMTMuODc2NzA2IEMxMDYuMDUyNDAyLDE0LjMyNzk2NjkgMTA3LjcwNDEzNiwxNC4zMjc5NjY5IDEwOS4yNTc0OTcsMTMuODc2NzA2IEwxMDkuODg4MjE3LDE2LjAwMjU4ODMgTDExMy4yODY3NzUsMTYuMDAyNTg4MyBMMTA4LjgzNzk2OSwzLjM4MDAwMDExIFogTTEwNi44NzczMTgsMTEuNjAwNDcwNyBDMTA2LjMyMzg2OCwxMS42MDA0MzkgMTA1Ljc3MzI2OSwxMS41MjIwNzY2IDEwNS4yNDIyNTIsMTEuMzY3NzY0OCBMMTA2Ljg3NzMxOCw1Ljg1OTI5NDIzIEwxMDguNTEyMzgzLDExLjM2OTY0NzIgQzEwNy45ODEyNzMsMTEuNTIzMzIyMSAxMDcuNDMwNjc2LDExLjYwMTA1MDMgMTA2Ljg3NzMxOCwxMS42MDA0NzA3IEwxMDYuODc3MzE4LDExLjYwMDQ3MDcgWiIgaWQ9IlNoYXBlIiBmaWxsPSIjMDA1MkNDIj48L3BhdGg+PC9nPjwvZz48L2c+Cjwvc3ZnPg==" alt="" />
            </footer>
        </>
    )
}