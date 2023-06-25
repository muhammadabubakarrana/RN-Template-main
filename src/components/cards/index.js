import React from 'react'
import Wrapper from '../wrapper';

export const Primary = ({ style, width, height, children }) => {
    return (
        <Wrapper isCardView>
            {children}
        </Wrapper>
    );
}