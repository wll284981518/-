<template>
	<div class="Edit-kdzl">
		<div class="tk-header">
			<div class="header-left">
				<router-link to="/edit" tag="div" class="header-left">
					<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAwCAYAAAAGlsrkAAADgUlEQVRYR8XY+6ulUxzH8dcYYsglGteI/OASpsYPrkXKdRq5TogIM5Mf5D8RPx23URTygzCuTcYouSU1Ipo0buMSEWJCGPpMa9eeZ9az97P3efbxrdM5nf3s9V7ftb6Xz/dZ5H+yRQvEPQCnIb8/wdaFAAe2GidjL/yMuVmC98BRuAtHNk723VmB98T5uAIHV65z8yzA8fQ6XIAlaDL+nMVRH4JbcHpL0G7H09jQp8cnFU+PR7xu2md4Bu9hRx/grJH7vAYHVY72X7yPx/D1YDfzBe+NFViJ/N20vwr0Afw2/OF8wEfgSpxR8rMJ/REv4hVkA7vYtOATcROOrRxtACkS9+ND/FMLtEnBixHoHS35Gcg23IPvR5XjScAH4kJchn1a7vNVrMdP43pAV/C+uL3kZ+pt0/7G43gNf4yD5vNx4Hx+GO7EcZUFkyo/4OESvV2YO58ZBc59noOrcGjLigmeJ/EpsonO1gbO/5MqlyLH3HwuQbSxlL9fOtOGHqyBU31uxNktC/6O58vPbvnZdRNNcOrs9TgBOeqmfVXq7Ttt+TkN+CzcUPKzuaHc38d4FF92XXxcHqdpX4yrW/IzqfIR7isVqQ/uzqBJUYintSKfQrABLyMNvDcL+F4srayYbpKushnxulcL+G4cXlk10ZvCkECaCfhc3Iz9KvBIlU14Dr/26XI8TtpEmK1qgcfbLXhwXMeZZGPDaROlv7ZFvmTNrXiopNNE5bG2oWa+RoBHmi5D0qxpaQhpe6/PN8prJTN9N40haVaztL2kWBRjpxbYxePhZy4pRaXWJPLcG6WSTRV0o9pitPFyXIujW7xPO3yilNMd0wZX24lECNyKUyoPJMiiJgN/q0/wYK2U09tGSNls4Cm80DXoxkmfYSdy15kYLi8DdtPB5PvbZQPfjfN+EnDWSrFJr47wq5XZKJP07Gjqz0fBJwUP1orwy5R/TMuAllI7VwRgL4J+2IkM3Dn281paarRYxpeMMWk4u9i0Hg8H3UVl8s8Q3rRosg+wriny5wsegCKb0uH2bxlTI5vSYr8ZfKEvcNbLABclkwG9JhS/xbN4M/29T3DgeRWRJpNBoGYJukjjl/oGD2ARjhnYU3hqw8C6WYFz1GeWJlPL922zAsfzwQu2NcigMGxfzBI8AEXLBR6FkxE3Of3IQoCzgcBPLcGX105bFgq8W4T/B/tloBIPNqWNAAAAAElFTkSuQmCC" />
				</router-link>
			</div>
			<p>求导</p>
		</div>
		<div class="kdzl-color">

		</div>
		<div class="kdzl-choose">
			<div class="choose-tk">
				<div class="choose-tk-left">
					<router-link to="/textgit" tag="div" class="choose-tk-left">
						<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA2CAYAAACfkiopAAAFTElEQVRoQ+2ba2hcRRTHz7m7IeLbD1JbH/VV4gPxgVpFKrYqFS0mtq575yaVfBEfRbBI8YuStB8UpB9U6gM/aHCTObMGq62VqFRNUbRWLT76QYWKDyREUGNq0Ibd+5e57A2bdpO9N+mm697Mh7Dsnjkzv3vOnZlz5oSJiDzP2wJgnf2ckNbFruuuZeZXEgJsMf8holZWSu0joosjgu8noqcdx9lboEKxUh/HdxjApcx8LxFdFlHvnIn5jn9tvi+/24IfIKLjI4y8a2RkZOXAwMDBCLKBiFKqn4jujCpfazkAW40xa+w4FvxvIjquyqDDLS0ti7q7u/24k1NKfU9ES+L2q4U8M6/QWn8Qgv9FRCdONxAzb9Rad1uZzs7Ok8fHx5/wfX9hpT7M/HsqlXq0t7d3yP7uuu49zPxiLUBi6hxn5tO01n9GBgfQaozZXnLfJ4loQ5VB+0SkowS+lJl3x5xkLcR/EpGzQ8XW1ataHMAqY8xbJfAcEQVQ07SdInKz/T2bzV7lOM6eWpDE0QngZ2PM4ljgzNymtd5WAn+BiOyKPWUDsM0Y0xaAt2evcXznkziTrIUsgEJTU9PpuVzut8DVXdcdY+Zjq7zj/3vwAJa5Q2vdF77jI0R0UhLAAewzxlwSgu8iouuTAF5iXC8iT1lXv5KZP0sQuEW9j+1fz/NWA3h5qv0cwN3GGLua29NYrMVNKbWCiN6rxYI1C52dAXgJaAGA24jIeoBTrtT3/efz+fxXMwHPZDLnpNPpR2YxySPZdZSIekXk6wnwqNrjWjyq3rmWmweP+sTnLT7Nkyo/uUV9oHMtN+Hqrusus4s2Mx8WQgLoMsZ8PJPFLZvNXug4zjNzDVZpPACjdvfK5/M7AnCl1MNEtHmqyZUf9eK6uuu6NzBzEAPXS2Pmh9jzvJUA3k7SAcYa0oalnxLR1QkCz4rIq5Hi8UYIS0uGHRSR5fZzpJxbo4CXZ5KSZHGbKF0kIsOhxaumnhrB4gB+NcacSURIFDgR/SAi54WLeJJc/d/m5uaFPT09NuOUrMWNiG4XkTdD8KpXSI3wjpdc/EMRCdJs1tX3EtHlSTnAMPMarfVWe2S9FUBwWTDNWb0h0sshH4BMIoMUIlo/EZbaqx77LlfKuTVSWMrMPXaBm089RY2V48bjUfXOtdy8xaM+8YazuOd5iwHYepXDcm5VLhRGQTjIxKeWbRcT18T1dqHgOE6ur6/vm/IrJHt9eswUSbopr5BSqdSSYrFoz78/hrU05VnWOr1CWsvZbPYKx3G+iHGAsRnTB0vyy0TkI/u5vb39It/3bcnHCQD6jTF32e/rpTCgnC9INrquu5OZb4wB/i4R2TKPCeiwb0dHR0uxWPyWiL4TkQvqERzABmPMZntW/4OITokB/hIRfS4iz1Xqo5RqA+AVi0XV399frDOLfykiQVwSuxTE9gmzGFaBUupxW1EhIpNqYTOZTKrewAG0G2P0jDIw5VZWSj1ARM+WvtskIl2HekE9WRzAWcaYX2YF7nne/QAmuXt5IWD4AOoIfHhoaOiMwcHBwozBK0GX7eHdxpiNdQi+X0TOD+cVKecGYLUx5nXbyXXddcy8pcpJr0tENpW2uet83w+2vKPcxtLp9IJcLjcWWrxqES8z36K1fueQd3pajtDtlVK2JNyWhh/1BmC5MWYwDritAT0XwPsxZ7+2UCi8lk6n7cOdVFcTU8+REn9DRO4Iwe2Bo2UazUUAO5i5dYajbwdwU7XqyRnqjt2NmZdqrffYfbyTmW2pV8UGAMwcO3yNPaO563CAmVeFQUqi/hkHwGP/AQL7u4r8M5lcAAAAAElFTkSuQmCC" />
						<span>题库选择</span>
					</router-link>
				</div>
				<img class="choose-tk-right" src="https://wap.365msmk.com/img/setting@2x.07fa0236.png" />
			</div>
			<div class="choose-lesson">
				<div class="choose-lesson-cen">
					<img class="cen-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTg0MTlDRTlEMTREMTFFOUE2RjZDNTg2QUFCQkEyMjkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTg0MTlDRUFEMTREMTFFOUE2RjZDNTg2QUFCQkEyMjkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5NDBGQTkzQUQxNEQxMUU5QTZGNkM1ODZBQUJCQTIyOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5ODQxOUNFOEQxNEQxMUU5QTZGNkM1ODZBQUJCQTIyOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqZOy9kAAAKxSURBVHja1JlLSFRRGMfP3IYMMZSyFj0WgvRAoUgiyqYHUWJotoraRBIltDFsGUFtWklrpU1gUqtIorAHITMGvSGoLDJ6QG1CgizC3r+PvoHhNo9zrzN3Tn/4LUbu4zffuXM837mxZDJpppGFsAnWwgr9XAMeTMI7eAp34QaM+y+QSCSsbhQPIbcAumA1bM1zjWpYBGugU/92C+7BWXgQ5KZBROthHxyBWSFHoFk5DKeh31bYs7yBVHAMjk5D0p8DcD+VSp20OThW4BmVig/BdlPaPIMWnte3YSpaC08ikJQskxGjus1BReUHI6VeYqJLpcwMyDYFER2F5Sb6yPOfRHaxjegVqDPlS2W2mcAvuhtaTfkzj6r25RKdD2eMO+lCdlU20W6oMG6l1y86B3qMe9lMVbdkih4q4n+cYmd/pmircTfbqGqFpz+idQ6LzoU2EW0z7qfDc7ya6TTI6qgxwAmPYBCmYEbIm/7SczfCDstzauK6ALHJQ2gqYpVO6RLSRrZKhr7K8sKDJRjSq5bHzfQCrPI7SzDXtlse58nQf9FGrFAataO8Bj+lOwgp91uLI9dbb3nOdxH9EOA5rdP+Kep89rRfcT2fRPT2fyA67ukU4Xoui+greOyw5Fe4mJ6arjssOkK/P5EW7XdY9FzmevQ5DDgoOUY1B/w90zEHRXuyNXdv4IRDkjep5nCuvv44vHBEdGehnRLZeP1RZkmKmZgsJPpRFwtTZZLcg+ToP8unHAffgQ26YIkye5E8n3Wdl+ckeUGwEl5HIPhNNhvSU1FQUcl7WGr+7reXKvK2pB7JkXwHxS2/7UG4oDsq7UUSlK3F3lxDHUY0nWGlA3ZBi24OBO1AL+l1+oKcGOY905BSrR2kvNFq0B2X2dpXxXTWkClmAl7KBK6Ln1DP/B8BBgCh/owRp6GJBgAAAABJRU5ErkJggg==" />
					<div class="cen-center">
						<div class="center-name">
							高数一
						</div>
						<div class="center-class">
							0/4
						</div>
						<div class="center-color">

						</div>
					</div>
					<div class="choose-lesson-right">
						<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAsCAYAAAB2d9g5AAAEFElEQVRYR72XXWhcRRTHz//errtpo9WyVIW2ghYtFMSPEIX60G0he/fe7EOCLEgftKAULbax+KBv+yg+xBhsUbFIVVRCIC2rc+9NWlb8gBgiLSLWT0RLKcav2qx2t7t3jkzZLWFzZ3s3u3WeLszM/zdn7pz/mQH9zw3MDN/3H2LmO5n5TKlUOpHL5YJrtQ64rjtMRA83AMz8TaVSGR8aGjp/LaAK+CIRbWgS/8s0zbGBgYHvuw1VwOeI6O4Q4QDAEcuyjncTCiHEBgDPE9FNYcIAPk4mk4f7+vqq3QBDiUxNTd0Yj8f3AdgSJsrMPwVB8FI2m/29U+hloGoTExNmb2/vLgCWBloyTXM8nU5/1Qn0CrAhIoTYBuAJIrquWZiZmYjez2QyHwBQ3223ZUClMDMzs6larR4AsF4T7VxPT8+rqVSq3C4xFKhEfN9fw8x7mfkejehZAKOWZZ1rB6oFKhHlQp7nKVMY0kRaZuZDjuPMR4W2BDZEfN+/X0r5JBGt1qTO0dnZ2cl8Pi+vBo4EVCKe593KzM+EuFKD8WUikXgllUqVWkEjA5VIsVhMVCqVPcz8gEb0NynlqOM4P+ugbQEb/3V6etoJguARAGHzLwE4bFnWJ6Hbf7U91/V7nreVmfcR0fWaMf7i4uI7zaWu7QiXihcKhWQsFhth5ts10G/L5fLLS0tdR0AFmZ+fjy0sLOwGsF1zgs8HQTDmOM53qr9jYAMihNgB4DEiWhUCDpj5bdu2p7sGrKfOZmYeIaJ1mi2e7Cqw7sNrq9Xq/rBSx+Bq14HHjh+7OXYppox/Y3OUAC52FSiEuBfA3hYW+FZXgPWr5rCUcjjMDJhZmfxrjuN83jGwUCisNk3zKQD3aQ7KuVqtNprNZs92nBa+72+UUipDvyW0fIG/KF0oHcrlchcb/SuOUAjxIIA9RBRvhqmrCIBJy7KONl9F2gbm83mjv79fGbej2cJ/pJQHHcc51bF5CyFuIKKnAWzV2Ngv6tqRTqcXOi5PQog7AOwnoqQG9pmU8g3btisdF2DXdbczeDcYMY1Pvmvbthul1LX8h8VicVW5XH6UiHaGnkLmv6WU44ODg6ejwFqmhed566SUIwA2a2A/GIYxZlnWn1FhWqDv+1uCIFAGvFYjdiKRSBxJpVK1dmChQM/zLGbeRUTmsvxSbs94M5PJfNQuaFniCyHihmE8zszbNFv4BxGN2bb940phVyL0fX89Mx9g5k0asa+Zedy27QudwC4DXde9i4ieJaI1msg+nJubey/KrTrKYtTb4QVNZBVVUmzbno0iFHWMenK/DqB36QQAv9Yt6kxUoajjVITqoOxYMuFkrVY7mM1m/40q0s441N1kJzPfZhjG6XQ6/elKX7dRwG2Xpyiircb8B7MWwq3eGGL8AAAAAElFTkSuQmCC" />
					</div>

				</div>
			</div>
			<div class="choose-lesson">
				<div class="choose-lesson-cen">
					<img class="cen-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTg0MTlDRTlEMTREMTFFOUE2RjZDNTg2QUFCQkEyMjkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTg0MTlDRUFEMTREMTFFOUE2RjZDNTg2QUFCQkEyMjkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5NDBGQTkzQUQxNEQxMUU5QTZGNkM1ODZBQUJCQTIyOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5ODQxOUNFOEQxNEQxMUU5QTZGNkM1ODZBQUJCQTIyOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqZOy9kAAAKxSURBVHja1JlLSFRRGMfP3IYMMZSyFj0WgvRAoUgiyqYHUWJotoraRBIltDFsGUFtWklrpU1gUqtIorAHITMGvSGoLDJ6QG1CgizC3r+PvoHhNo9zrzN3Tn/4LUbu4zffuXM837mxZDJpppGFsAnWwgr9XAMeTMI7eAp34QaM+y+QSCSsbhQPIbcAumA1bM1zjWpYBGugU/92C+7BWXgQ5KZBROthHxyBWSFHoFk5DKeh31bYs7yBVHAMjk5D0p8DcD+VSp20OThW4BmVig/BdlPaPIMWnte3YSpaC08ikJQskxGjus1BReUHI6VeYqJLpcwMyDYFER2F5Sb6yPOfRHaxjegVqDPlS2W2mcAvuhtaTfkzj6r25RKdD2eMO+lCdlU20W6oMG6l1y86B3qMe9lMVbdkih4q4n+cYmd/pmircTfbqGqFpz+idQ6LzoU2EW0z7qfDc7ya6TTI6qgxwAmPYBCmYEbIm/7SczfCDstzauK6ALHJQ2gqYpVO6RLSRrZKhr7K8sKDJRjSq5bHzfQCrPI7SzDXtlse58nQf9FGrFAataO8Bj+lOwgp91uLI9dbb3nOdxH9EOA5rdP+Kep89rRfcT2fRPT2fyA67ukU4Xoui+greOyw5Fe4mJ6arjssOkK/P5EW7XdY9FzmevQ5DDgoOUY1B/w90zEHRXuyNXdv4IRDkjep5nCuvv44vHBEdGehnRLZeP1RZkmKmZgsJPpRFwtTZZLcg+ToP8unHAffgQ26YIkye5E8n3Wdl+ckeUGwEl5HIPhNNhvSU1FQUcl7WGr+7reXKvK2pB7JkXwHxS2/7UG4oDsq7UUSlK3F3lxDHUY0nWGlA3ZBi24OBO1AL+l1+oKcGOY905BSrR2kvNFq0B2X2dpXxXTWkClmAl7KBK6Ln1DP/B8BBgCh/owRp6GJBgAAAABJRU5ErkJggg==" />
					<div class="cen-center">
						<div class="center-name">
							积分
						</div>
						<div class="center-class">
							0/4
						</div>
						<div class="center-color">

						</div>
					</div>
					<div class="choose-lesson-right">
						<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAsCAYAAAB2d9g5AAAEFElEQVRYR72XXWhcRRTHz//errtpo9WyVIW2ghYtFMSPEIX60G0he/fe7EOCLEgftKAULbax+KBv+yg+xBhsUbFIVVRCIC2rc+9NWlb8gBgiLSLWT0RLKcav2qx2t7t3jkzZLWFzZ3s3u3WeLszM/zdn7pz/mQH9zw3MDN/3H2LmO5n5TKlUOpHL5YJrtQ64rjtMRA83AMz8TaVSGR8aGjp/LaAK+CIRbWgS/8s0zbGBgYHvuw1VwOeI6O4Q4QDAEcuyjncTCiHEBgDPE9FNYcIAPk4mk4f7+vqq3QBDiUxNTd0Yj8f3AdgSJsrMPwVB8FI2m/29U+hloGoTExNmb2/vLgCWBloyTXM8nU5/1Qn0CrAhIoTYBuAJIrquWZiZmYjez2QyHwBQ3223ZUClMDMzs6larR4AsF4T7VxPT8+rqVSq3C4xFKhEfN9fw8x7mfkejehZAKOWZZ1rB6oFKhHlQp7nKVMY0kRaZuZDjuPMR4W2BDZEfN+/X0r5JBGt1qTO0dnZ2cl8Pi+vBo4EVCKe593KzM+EuFKD8WUikXgllUqVWkEjA5VIsVhMVCqVPcz8gEb0NynlqOM4P+ugbQEb/3V6etoJguARAGHzLwE4bFnWJ6Hbf7U91/V7nreVmfcR0fWaMf7i4uI7zaWu7QiXihcKhWQsFhth5ts10G/L5fLLS0tdR0AFmZ+fjy0sLOwGsF1zgs8HQTDmOM53qr9jYAMihNgB4DEiWhUCDpj5bdu2p7sGrKfOZmYeIaJ1mi2e7Cqw7sNrq9Xq/rBSx+Bq14HHjh+7OXYppox/Y3OUAC52FSiEuBfA3hYW+FZXgPWr5rCUcjjMDJhZmfxrjuN83jGwUCisNk3zKQD3aQ7KuVqtNprNZs92nBa+72+UUipDvyW0fIG/KF0oHcrlchcb/SuOUAjxIIA9RBRvhqmrCIBJy7KONl9F2gbm83mjv79fGbej2cJ/pJQHHcc51bF5CyFuIKKnAWzV2Ngv6tqRTqcXOi5PQog7AOwnoqQG9pmU8g3btisdF2DXdbczeDcYMY1Pvmvbthul1LX8h8VicVW5XH6UiHaGnkLmv6WU44ODg6ejwFqmhed566SUIwA2a2A/GIYxZlnWn1FhWqDv+1uCIFAGvFYjdiKRSBxJpVK1dmChQM/zLGbeRUTmsvxSbs94M5PJfNQuaFniCyHihmE8zszbNFv4BxGN2bb940phVyL0fX89Mx9g5k0asa+Zedy27QudwC4DXde9i4ieJaI1msg+nJubey/KrTrKYtTb4QVNZBVVUmzbno0iFHWMenK/DqB36QQAv9Yt6kxUoajjVITqoOxYMuFkrVY7mM1m/40q0s441N1kJzPfZhjG6XQ6/elKX7dRwG2Xpyiircb8B7MWwq3eGGL8AAAAAElFTkSuQmCC" />
					</div>

				</div>
			</div>
			<div class="choose-lesson">
				<div class="choose-lesson-cen">
					<img class="cen-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTg0MTlDRTlEMTREMTFFOUE2RjZDNTg2QUFCQkEyMjkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTg0MTlDRUFEMTREMTFFOUE2RjZDNTg2QUFCQkEyMjkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5NDBGQTkzQUQxNEQxMUU5QTZGNkM1ODZBQUJCQTIyOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5ODQxOUNFOEQxNEQxMUU5QTZGNkM1ODZBQUJCQTIyOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqZOy9kAAAKxSURBVHja1JlLSFRRGMfP3IYMMZSyFj0WgvRAoUgiyqYHUWJotoraRBIltDFsGUFtWklrpU1gUqtIorAHITMGvSGoLDJ6QG1CgizC3r+PvoHhNo9zrzN3Tn/4LUbu4zffuXM837mxZDJpppGFsAnWwgr9XAMeTMI7eAp34QaM+y+QSCSsbhQPIbcAumA1bM1zjWpYBGugU/92C+7BWXgQ5KZBROthHxyBWSFHoFk5DKeh31bYs7yBVHAMjk5D0p8DcD+VSp20OThW4BmVig/BdlPaPIMWnte3YSpaC08ikJQskxGjus1BReUHI6VeYqJLpcwMyDYFER2F5Sb6yPOfRHaxjegVqDPlS2W2mcAvuhtaTfkzj6r25RKdD2eMO+lCdlU20W6oMG6l1y86B3qMe9lMVbdkih4q4n+cYmd/pmircTfbqGqFpz+idQ6LzoU2EW0z7qfDc7ya6TTI6qgxwAmPYBCmYEbIm/7SczfCDstzauK6ALHJQ2gqYpVO6RLSRrZKhr7K8sKDJRjSq5bHzfQCrPI7SzDXtlse58nQf9FGrFAataO8Bj+lOwgp91uLI9dbb3nOdxH9EOA5rdP+Kep89rRfcT2fRPT2fyA67ukU4Xoui+greOyw5Fe4mJ6arjssOkK/P5EW7XdY9FzmevQ5DDgoOUY1B/w90zEHRXuyNXdv4IRDkjep5nCuvv44vHBEdGehnRLZeP1RZkmKmZgsJPpRFwtTZZLcg+ToP8unHAffgQ26YIkye5E8n3Wdl+ckeUGwEl5HIPhNNhvSU1FQUcl7WGr+7reXKvK2pB7JkXwHxS2/7UG4oDsq7UUSlK3F3lxDHUY0nWGlA3ZBi24OBO1AL+l1+oKcGOY905BSrR2kvNFq0B2X2dpXxXTWkClmAl7KBK6Ln1DP/B8BBgCh/owRp6GJBgAAAABJRU5ErkJggg==" />
					<div class="cen-center">
						<div class="center-name">
							生物
						</div>
						<div class="center-class">
							0/1
						</div>
						<div class="center-color">

						</div>
					</div>
					<div class="choose-lesson-right">
						<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAsCAYAAAB2d9g5AAAEFElEQVRYR72XXWhcRRTHz//errtpo9WyVIW2ghYtFMSPEIX60G0he/fe7EOCLEgftKAULbax+KBv+yg+xBhsUbFIVVRCIC2rc+9NWlb8gBgiLSLWT0RLKcav2qx2t7t3jkzZLWFzZ3s3u3WeLszM/zdn7pz/mQH9zw3MDN/3H2LmO5n5TKlUOpHL5YJrtQ64rjtMRA83AMz8TaVSGR8aGjp/LaAK+CIRbWgS/8s0zbGBgYHvuw1VwOeI6O4Q4QDAEcuyjncTCiHEBgDPE9FNYcIAPk4mk4f7+vqq3QBDiUxNTd0Yj8f3AdgSJsrMPwVB8FI2m/29U+hloGoTExNmb2/vLgCWBloyTXM8nU5/1Qn0CrAhIoTYBuAJIrquWZiZmYjez2QyHwBQ3223ZUClMDMzs6larR4AsF4T7VxPT8+rqVSq3C4xFKhEfN9fw8x7mfkejehZAKOWZZ1rB6oFKhHlQp7nKVMY0kRaZuZDjuPMR4W2BDZEfN+/X0r5JBGt1qTO0dnZ2cl8Pi+vBo4EVCKe593KzM+EuFKD8WUikXgllUqVWkEjA5VIsVhMVCqVPcz8gEb0NynlqOM4P+ugbQEb/3V6etoJguARAGHzLwE4bFnWJ6Hbf7U91/V7nreVmfcR0fWaMf7i4uI7zaWu7QiXihcKhWQsFhth5ts10G/L5fLLS0tdR0AFmZ+fjy0sLOwGsF1zgs8HQTDmOM53qr9jYAMihNgB4DEiWhUCDpj5bdu2p7sGrKfOZmYeIaJ1mi2e7Cqw7sNrq9Xq/rBSx+Bq14HHjh+7OXYppox/Y3OUAC52FSiEuBfA3hYW+FZXgPWr5rCUcjjMDJhZmfxrjuN83jGwUCisNk3zKQD3aQ7KuVqtNprNZs92nBa+72+UUipDvyW0fIG/KF0oHcrlchcb/SuOUAjxIIA9RBRvhqmrCIBJy7KONl9F2gbm83mjv79fGbej2cJ/pJQHHcc51bF5CyFuIKKnAWzV2Ngv6tqRTqcXOi5PQog7AOwnoqQG9pmU8g3btisdF2DXdbczeDcYMY1Pvmvbthul1LX8h8VicVW5XH6UiHaGnkLmv6WU44ODg6ejwFqmhed566SUIwA2a2A/GIYxZlnWn1FhWqDv+1uCIFAGvFYjdiKRSBxJpVK1dmChQM/zLGbeRUTmsvxSbs94M5PJfNQuaFniCyHihmE8zszbNFv4BxGN2bb940phVyL0fX89Mx9g5k0asa+Zedy27QudwC4DXde9i4ieJaI1msg+nJubey/KrTrKYtTb4QVNZBVVUmzbno0iFHWMenK/DqB36QQAv9Yt6kxUoajjVITqoOxYMuFkrVY7mM1m/40q0s441N1kJzPfZhjG6XQ6/elKX7dRwG2Xpyiircb8B7MWwq3eGGL8AAAAAElFTkSuQmCC" />
					</div>

				</div>
			</div>
			<div class="choose-lesson">
				<div class="choose-lesson-cen">
					<img class="cen-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTg0MTlDRTlEMTREMTFFOUE2RjZDNTg2QUFCQkEyMjkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTg0MTlDRUFEMTREMTFFOUE2RjZDNTg2QUFCQkEyMjkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5NDBGQTkzQUQxNEQxMUU5QTZGNkM1ODZBQUJCQTIyOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5ODQxOUNFOEQxNEQxMUU5QTZGNkM1ODZBQUJCQTIyOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqZOy9kAAAKxSURBVHja1JlLSFRRGMfP3IYMMZSyFj0WgvRAoUgiyqYHUWJotoraRBIltDFsGUFtWklrpU1gUqtIorAHITMGvSGoLDJ6QG1CgizC3r+PvoHhNo9zrzN3Tn/4LUbu4zffuXM837mxZDJpppGFsAnWwgr9XAMeTMI7eAp34QaM+y+QSCSsbhQPIbcAumA1bM1zjWpYBGugU/92C+7BWXgQ5KZBROthHxyBWSFHoFk5DKeh31bYs7yBVHAMjk5D0p8DcD+VSp20OThW4BmVig/BdlPaPIMWnte3YSpaC08ikJQskxGjus1BReUHI6VeYqJLpcwMyDYFER2F5Sb6yPOfRHaxjegVqDPlS2W2mcAvuhtaTfkzj6r25RKdD2eMO+lCdlU20W6oMG6l1y86B3qMe9lMVbdkih4q4n+cYmd/pmircTfbqGqFpz+idQ6LzoU2EW0z7qfDc7ya6TTI6qgxwAmPYBCmYEbIm/7SczfCDstzauK6ALHJQ2gqYpVO6RLSRrZKhr7K8sKDJRjSq5bHzfQCrPI7SzDXtlse58nQf9FGrFAataO8Bj+lOwgp91uLI9dbb3nOdxH9EOA5rdP+Kep89rRfcT2fRPT2fyA67ukU4Xoui+greOyw5Fe4mJ6arjssOkK/P5EW7XdY9FzmevQ5DDgoOUY1B/w90zEHRXuyNXdv4IRDkjep5nCuvv44vHBEdGehnRLZeP1RZkmKmZgsJPpRFwtTZZLcg+ToP8unHAffgQ26YIkye5E8n3Wdl+ckeUGwEl5HIPhNNhvSU1FQUcl7WGr+7reXKvK2pB7JkXwHxS2/7UG4oDsq7UUSlK3F3lxDHUY0nWGlA3ZBi24OBO1AL+l1+oKcGOY905BSrR2kvNFq0B2X2dpXxXTWkClmAl7KBK6Ln1DP/B8BBgCh/owRp6GJBgAAAABJRU5ErkJggg==" />
					<div class="cen-center">
						<div class="center-name">
							不定积分
						</div>
						<div class="center-class">
							0/3
						</div>
						<div class="center-color">

						</div>
					</div>
					<div class="choose-lesson-right">
						<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAsCAYAAAB2d9g5AAAEFElEQVRYR72XXWhcRRTHz//errtpo9WyVIW2ghYtFMSPEIX60G0he/fe7EOCLEgftKAULbax+KBv+yg+xBhsUbFIVVRCIC2rc+9NWlb8gBgiLSLWT0RLKcav2qx2t7t3jkzZLWFzZ3s3u3WeLszM/zdn7pz/mQH9zw3MDN/3H2LmO5n5TKlUOpHL5YJrtQ64rjtMRA83AMz8TaVSGR8aGjp/LaAK+CIRbWgS/8s0zbGBgYHvuw1VwOeI6O4Q4QDAEcuyjncTCiHEBgDPE9FNYcIAPk4mk4f7+vqq3QBDiUxNTd0Yj8f3AdgSJsrMPwVB8FI2m/29U+hloGoTExNmb2/vLgCWBloyTXM8nU5/1Qn0CrAhIoTYBuAJIrquWZiZmYjez2QyHwBQ3223ZUClMDMzs6larR4AsF4T7VxPT8+rqVSq3C4xFKhEfN9fw8x7mfkejehZAKOWZZ1rB6oFKhHlQp7nKVMY0kRaZuZDjuPMR4W2BDZEfN+/X0r5JBGt1qTO0dnZ2cl8Pi+vBo4EVCKe593KzM+EuFKD8WUikXgllUqVWkEjA5VIsVhMVCqVPcz8gEb0NynlqOM4P+ugbQEb/3V6etoJguARAGHzLwE4bFnWJ6Hbf7U91/V7nreVmfcR0fWaMf7i4uI7zaWu7QiXihcKhWQsFhth5ts10G/L5fLLS0tdR0AFmZ+fjy0sLOwGsF1zgs8HQTDmOM53qr9jYAMihNgB4DEiWhUCDpj5bdu2p7sGrKfOZmYeIaJ1mi2e7Cqw7sNrq9Xq/rBSx+Bq14HHjh+7OXYppox/Y3OUAC52FSiEuBfA3hYW+FZXgPWr5rCUcjjMDJhZmfxrjuN83jGwUCisNk3zKQD3aQ7KuVqtNprNZs92nBa+72+UUipDvyW0fIG/KF0oHcrlchcb/SuOUAjxIIA9RBRvhqmrCIBJy7KONl9F2gbm83mjv79fGbej2cJ/pJQHHcc51bF5CyFuIKKnAWzV2Ngv6tqRTqcXOi5PQog7AOwnoqQG9pmU8g3btisdF2DXdbczeDcYMY1Pvmvbthul1LX8h8VicVW5XH6UiHaGnkLmv6WU44ODg6ejwFqmhed566SUIwA2a2A/GIYxZlnWn1FhWqDv+1uCIFAGvFYjdiKRSBxJpVK1dmChQM/zLGbeRUTmsvxSbs94M5PJfNQuaFniCyHihmE8zszbNFv4BxGN2bb940phVyL0fX89Mx9g5k0asa+Zedy27QudwC4DXde9i4ieJaI1msg+nJubey/KrTrKYtTb4QVNZBVVUmzbno0iFHWMenK/DqB36QQAv9Yt6kxUoajjVITqoOxYMuFkrVY7mM1m/40q0s441N1kJzPfZhjG6XQ6/elKX7dRwG2Xpyiircb8B7MWwq3eGGL8AAAAAElFTkSuQmCC" />
					</div>

				</div>
			</div>
			<div class="choose-lesson">
				<div class="choose-lesson-cen">
					<img class="cen-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTg0MTlDRTlEMTREMTFFOUE2RjZDNTg2QUFCQkEyMjkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTg0MTlDRUFEMTREMTFFOUE2RjZDNTg2QUFCQkEyMjkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5NDBGQTkzQUQxNEQxMUU5QTZGNkM1ODZBQUJCQTIyOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5ODQxOUNFOEQxNEQxMUU5QTZGNkM1ODZBQUJCQTIyOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqZOy9kAAAKxSURBVHja1JlLSFRRGMfP3IYMMZSyFj0WgvRAoUgiyqYHUWJotoraRBIltDFsGUFtWklrpU1gUqtIorAHITMGvSGoLDJ6QG1CgizC3r+PvoHhNo9zrzN3Tn/4LUbu4zffuXM837mxZDJpppGFsAnWwgr9XAMeTMI7eAp34QaM+y+QSCSsbhQPIbcAumA1bM1zjWpYBGugU/92C+7BWXgQ5KZBROthHxyBWSFHoFk5DKeh31bYs7yBVHAMjk5D0p8DcD+VSp20OThW4BmVig/BdlPaPIMWnte3YSpaC08ikJQskxGjus1BReUHI6VeYqJLpcwMyDYFER2F5Sb6yPOfRHaxjegVqDPlS2W2mcAvuhtaTfkzj6r25RKdD2eMO+lCdlU20W6oMG6l1y86B3qMe9lMVbdkih4q4n+cYmd/pmircTfbqGqFpz+idQ6LzoU2EW0z7qfDc7ya6TTI6qgxwAmPYBCmYEbIm/7SczfCDstzauK6ALHJQ2gqYpVO6RLSRrZKhr7K8sKDJRjSq5bHzfQCrPI7SzDXtlse58nQf9FGrFAataO8Bj+lOwgp91uLI9dbb3nOdxH9EOA5rdP+Kep89rRfcT2fRPT2fyA67ukU4Xoui+greOyw5Fe4mJ6arjssOkK/P5EW7XdY9FzmevQ5DDgoOUY1B/w90zEHRXuyNXdv4IRDkjep5nCuvv44vHBEdGehnRLZeP1RZkmKmZgsJPpRFwtTZZLcg+ToP8unHAffgQ26YIkye5E8n3Wdl+ckeUGwEl5HIPhNNhvSU1FQUcl7WGr+7reXKvK2pB7JkXwHxS2/7UG4oDsq7UUSlK3F3lxDHUY0nWGlA3ZBi24OBO1AL+l1+oKcGOY905BSrR2kvNFq0B2X2dpXxXTWkClmAl7KBK6Ln1DP/B8BBgCh/owRp6GJBgAAAABJRU5ErkJggg==" />
					<div class="cen-center">
						<div class="center-name">
							求解
						</div>
						<div class="center-class">
							0/2
						</div>
						<div class="center-color">

						</div>
					</div>
					<div class="choose-lesson-right">
						<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAsCAYAAAB2d9g5AAAEFElEQVRYR72XXWhcRRTHz//errtpo9WyVIW2ghYtFMSPEIX60G0he/fe7EOCLEgftKAULbax+KBv+yg+xBhsUbFIVVRCIC2rc+9NWlb8gBgiLSLWT0RLKcav2qx2t7t3jkzZLWFzZ3s3u3WeLszM/zdn7pz/mQH9zw3MDN/3H2LmO5n5TKlUOpHL5YJrtQ64rjtMRA83AMz8TaVSGR8aGjp/LaAK+CIRbWgS/8s0zbGBgYHvuw1VwOeI6O4Q4QDAEcuyjncTCiHEBgDPE9FNYcIAPk4mk4f7+vqq3QBDiUxNTd0Yj8f3AdgSJsrMPwVB8FI2m/29U+hloGoTExNmb2/vLgCWBloyTXM8nU5/1Qn0CrAhIoTYBuAJIrquWZiZmYjez2QyHwBQ3223ZUClMDMzs6larR4AsF4T7VxPT8+rqVSq3C4xFKhEfN9fw8x7mfkejehZAKOWZZ1rB6oFKhHlQp7nKVMY0kRaZuZDjuPMR4W2BDZEfN+/X0r5JBGt1qTO0dnZ2cl8Pi+vBo4EVCKe593KzM+EuFKD8WUikXgllUqVWkEjA5VIsVhMVCqVPcz8gEb0NynlqOM4P+ugbQEb/3V6etoJguARAGHzLwE4bFnWJ6Hbf7U91/V7nreVmfcR0fWaMf7i4uI7zaWu7QiXihcKhWQsFhth5ts10G/L5fLLS0tdR0AFmZ+fjy0sLOwGsF1zgs8HQTDmOM53qr9jYAMihNgB4DEiWhUCDpj5bdu2p7sGrKfOZmYeIaJ1mi2e7Cqw7sNrq9Xq/rBSx+Bq14HHjh+7OXYppox/Y3OUAC52FSiEuBfA3hYW+FZXgPWr5rCUcjjMDJhZmfxrjuN83jGwUCisNk3zKQD3aQ7KuVqtNprNZs92nBa+72+UUipDvyW0fIG/KF0oHcrlchcb/SuOUAjxIIA9RBRvhqmrCIBJy7KONl9F2gbm83mjv79fGbej2cJ/pJQHHcc51bF5CyFuIKKnAWzV2Ngv6tqRTqcXOi5PQog7AOwnoqQG9pmU8g3btisdF2DXdbczeDcYMY1Pvmvbthul1LX8h8VicVW5XH6UiHaGnkLmv6WU44ODg6ejwFqmhed566SUIwA2a2A/GIYxZlnWn1FhWqDv+1uCIFAGvFYjdiKRSBxJpVK1dmChQM/zLGbeRUTmsvxSbs94M5PJfNQuaFniCyHihmE8zszbNFv4BxGN2bb940phVyL0fX89Mx9g5k0asa+Zedy27QudwC4DXde9i4ieJaI1msg+nJubey/KrTrKYtTb4QVNZBVVUmzbno0iFHWMenK/DqB36QQAv9Yt6kxUoajjVITqoOxYMuFkrVY7mM1m/40q0s441N1kJzPfZhjG6XQ6/elKX7dRwG2Xpyiircb8B7MWwq3eGGL8AAAAAElFTkSuQmCC" />
					</div>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Edit-kdzl"
	}
</script>

<style lscoped>
	.tk-header {
		width: 100%;
		height: 11.73333vw;
		position: fixed;
		z-index: 999;
		width: 100%;
		background: #fff;
		position: relative;
	}
	
	.tk-header>p {
		font-size: 4.8vw;
		color: #595959;
		position: absolute;
		left: 50%;
		top: 32%;
		text-overflow: ellipsis;
		max-width: 66.66667vw;
	}
	
	.header-left {
		float: left;
		width: 10.66667vw;
		height: 11.73333vw;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.header-left>img {
		height: 4.26667vw;
	}
	
	.kdzl-color {
		height: 2.66667vw;
		background: #f0f2f5;
	}
	
	.kdzl-choose {
		padding: 4vw;
		display: flex;
		flex-flow: column;
	}
	
	.choose-tk {
		margin-bottom: 5.33333vw;
	}
	
	.choose-tk-left {
		float: left;
		display: flex;
		align-items: center;
	}
	
	.choose-tk-left>img {
		width: 4.13333vw;
		margin-right: 1.33333vw;
	}
	
	.choose-tk-left>span {
		font-size: 4vw;
		text-align: center;
	}
	
	.choose-tk-right {
		float: right;
		width: 4.13333vw;
		margin-right: 1.33333vw;
	}
	
	.choose-lesson {
		border: 1px solid #d9d9d9;
		border-radius: 1.33333vw;
		margin-bottom: 2.66667vw;
		padding: 4vw 2.66667vw;
	}
	
	.choose-lesson-cen {
		display: flex;
		align-items: center;
		position: relative;
	}
	
	.cen-img {
		width: 3.73333vw;
		position: absolute;
		top: .26667vw;
	}
	
	.cen-center {
		position: relative;
		width: 81%;
		display: flex;
		align-items: center;
		margin: 0 auto;
	}
	
	.center-name {
		flex-grow: 1;
		font-size: 3.46667vw;
		color: #595959;
		padding-bottom: 2.66667vw;
	}
	
	.center-class {
		font-size: 3.46667vw;
		width: 8.53333vw;
		text-align: center;
		display: flex;
		color: #8c8c8c;
		padding: 0 10.13333vw;
		padding-bottom: 2.66667vw;
	}
	
	.center-color {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: .8vw;
		background: #f0f2f5;
		border-radius: .4vw;
		overflow: hidden;
	}
	
	.choose-lesson-right>img {
		width: 1.86667vw;
	}
</style>