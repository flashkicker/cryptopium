import React from "react"
import styled from "styled-components"
import { Tile } from "../Shared/Tile"
import CoinImage from "../Shared/CoinImage"
import { AppContext } from "../App/AppProvider"

const SpotlightName = styled.h2`
	text-align: center;
`

export default () => {
	return (
		<AppContext.Consumer>
			{({ currentFavorite, coinList, theme }) => (
				<Tile theme={theme}>
					<SpotlightName>{coinList[currentFavorite].CoinName}</SpotlightName>
					<CoinImage spotlight coin={coinList[currentFavorite]} />
				</Tile>
			)}
		</AppContext.Consumer>
	)
}


