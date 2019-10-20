import React from "react"
import styled, { css } from "styled-components"
import { AppContext } from "./AppProvider"

const Logo = styled.div`
	font-size: 1.5em;
`

const Bar = styled.div`
	display: grid;
	grid-template-columns: 180px auto 100px 100px;
	margin-bottom: 40px;
`

const ControlButtonElem = styled.div`
	cursor: pointer;
	${props =>
		props.active &&
		css`
			background-color: #f4f4f4;
		`}
`

const ControlButton = ({ name }) => {
	return (
		<AppContext.Consumer>
			{({ page, setPage }) => (
				<ControlButtonElem active={page === name} onClick={() => setPage(name)}>
					{name}
				</ControlButtonElem>
			)}
		</AppContext.Consumer>
	)
}

const AppBar = () => {
	return (
		<Bar>
			<Logo>CryptoDash</Logo>
			<div />
			<ControlButton active name="Dashboard" />
			<ControlButton name="Settings" />
		</Bar>
	)
}

export default AppBar