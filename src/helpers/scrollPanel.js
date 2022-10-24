/** @format */
import React, { RefObject, useEffect, useRef } from "react";
import styled from "styled-components";
import ChevronRight from "../Icon/ChevronRight";

const TabPanel = ( { tabPanel, scrollable, handleDataChange } ) => {
  const [active, setActive] = React.useState( 0 );
  const contentWrapper = useRef( null );
  const [scrollLeft, setScrollLeft] = React.useState( 0 );
  const sideScroll = ( element, speed, distance, step ) => {
    let scrollAmount = 0;
    const slideTimer = setInterval( () => {
      element.scrollLeft += step;
      setScrollLeft( element.scrollLeft );
      scrollAmount += Math.abs( step );
      if ( scrollAmount >= distance ) {
        clearInterval( slideTimer );
      }
    }, speed );
  };
  const isActive = ( activeTabId ) => activeTabId === active;
  const handleClick = ( activeList, tabItem, ) => {
    setActive( activeList );
    handleDataChange?.( tabItem );
  };

  useEffect( () => {
    handleClick( 0, "All" );
  }, [tabPanel] );
  return (
    <SummaryBadgeLabelContainer>
      <SummaryBadgeTitleContainer ref={ contentWrapper }>
        { tabPanel &&
          tabPanel.map( ( tabItem, index ) => {
            const clinicId = tabItem.split( ":" );
            return (
              <SummaryBadgeTitle
                onClick={ () => handleClick( index, clinicId.length === 2 ? clinicId[1] : tabItem ) }
                active={ isActive( index ) }
                key={ index }
              >
                { clinicId.length === 2 ? clinicId[0] : tabItem }
              </SummaryBadgeTitle>
            );
          } ) }
        <>
          { scrollable && (
            <>
              <ChevronRightContainer
                onClick={ () => {
                  sideScroll( contentWrapper.current, 25, 100, 10 );
                } }
              >
                <ChevronRight />
              </ChevronRightContainer>
              <>
                { scrollLeft > 0 ? (
                  <ChevronLeftContainer
                    onClick={ () => {
                      sideScroll( contentWrapper.current, 25, 100, -10 );
                    } }
                  >
                    <ChevronRight />
                  </ChevronLeftContainer>
                ) : (
                  ""
                ) }
              </>
            </>
          ) }
        </>
      </SummaryBadgeTitleContainer>
    </SummaryBadgeLabelContainer>
  );
};
export default TabPanel;

const SummaryBadgeTitleContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  overflow-x: scroll;
  width: 100%;
  padding: 7px 20px;
  background: #f9f9fa;
  border-radius: 23px;
  margin-bottom: 1.5rem;
  &::-webkit-scrollbar {
    display: none;
    width: 0px;
  }
`;
const SummaryBadgeTitle = styled.div < Iactive > `
  font-family: "Gilroy";
  background-color: ${ ( props ) => ( props.active ? "#D7E3FC;" : "" ) };
  font-weight: 500;
  border-radius: 23px;
  font-size: 14px;
  line-height: 17px;
  padding: 4px 16px;
  text-align: center;
  color: #051438;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
`;
const ChevronRightContainer = styled.div`
  background-color: #fff;
  position: absolute;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  right: 0px;
  top: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ChevronLeftContainer = styled( ChevronRightContainer )`
  left: 0px;
  transform: rotate(180deg);
`;
const SummaryBadgeLabelContainer = styled.div`
  position: relative;
`;
