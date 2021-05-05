import React from 'react';

export function NoTokensMessage( { selectedAddress }) {
    return (
        <>
            <p>You don't have tokens to transfer</p>
            <p>
                To get some tokens, open a terminal in the root of the repo and run:
                <br />
                <br />
                <code>npx hardhat --network localhost faucet {selectedAddress}</code>
            </p>
        </>
    );
}