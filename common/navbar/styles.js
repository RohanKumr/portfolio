import styled from 'styled-components'

export const NavbarContainer = styled.div`
    width:0vw;
    height:100px;
    background:${(props)=> props.active ? `red;` : `red` };
    transition-duration: 300ms;
    

    ${(props)=> !props.active && `
    animation: fromLeft;
    animation-duration: 700ms;
    animation-timing-function: linear;
    
    @keyframes fromLeft {
        from {
            // background: red;
            width:0vw;
        }
        to {
            // background: red;
            width:100vw;
        }
    }
    ` }
`;