import React from "react"
import styled from "styled-components"
import { AppContext } from "../App/AppProvider"
import CoinTile from "./CoinTile"

export const CoinGridStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(
		auto-fill,
		minmax(${window.innerWidth < 767.98 ? "150px" : "200px"}, 1fr)
	);
	grid-gap: 15px;
	margin-top: 30px;
`

const getRemainingCoins = (coinList, filteredCoins) => {
	if (!filteredCoins) {
		return Object.keys(coinList).slice(0, 100)
	}

	return filteredCoins
}

const displayCoins = (coinList, topSection, favorites, filteredCoins) => {
	return topSection ? favorites : getRemainingCoins(coinList, filteredCoins)
}

export default ({ topSection }) => {
	return (
		<AppContext.Consumer>
			{({ coinList, favorites, filteredCoins }) => {
				return (
					<CoinGridStyled>
						{displayCoins(coinList, topSection, favorites, filteredCoins).map(
							coinKey => {
								return (
									<CoinTile
										key={coinKey}
										topSection={topSection}
										coinKey={coinKey}
									/>
								)
							}
						)}
					</CoinGridStyled>
				)
			}}
		</AppContext.Consumer>
	)
}
