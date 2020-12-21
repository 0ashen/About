import styled from 'styled-components'


export const Wrapper = styled.div`

`

export const Book = styled.div`
  perspective: 1000px;
  position: relative;
  width: 250px;
  box-sizing: border-box;

  &:before {
    box-sizing: border-box;
    transition: all .5s;

    content: " ";
    position: absolute;
    top: 0;
    display: block;
    z-index: 2;

    border-left: solid 5px #b52845;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;

    width: 250px;
    height: 368px;
    background: linear-gradient(to right, #fff 0, #fff 95%, #ccc 95.5%, #fff 96%, #ccc 96.5%, #fff 97%, #ccc 97.5%, #fff 98%, #ccc 98.5%, #fff 99%, #ccc 99.5%, #fff 100%);
    border-top: solid 1px #aaa;
    border-right: solid 1px #aaa;
    border-bottom: solid 1px #aaa;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    transform: rotatey(-10deg) translateZ(-20px) translatex(9px);
  }

  &:hover:before {
    transform: rotatey(-15deg) translateZ(-20px) translatex(9px);
  }

  &:after {
    box-sizing: border-box;
    transition: all .5s;
    
    content: " ";
    position: absolute;
    top: 0;
    display: block;
    z-index: 1;
    
    border-left: solid 5px #b52845;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    transform: rotatey(-10deg);
  
    width: 250px;
    height: 368px;
    background: #09132c;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    box-shadow: 10px 2px 20px -3px rgba(20, 0, 70, .3);
    transform: rotatey(-10deg) translateZ(-30px) translatex(12px);

  }

  &:hover:after {
    box-shadow: 15px 2px 20px -3px rgba(20, 0, 70, .3);
    transform: rotatey(-15deg) translateZ(-30px) translatex(12px);
  }

  .cover {
    box-sizing: border-box;
    transition: all .5s;

    position: relative;
    z-index: 2;
    max-width: none !important;

    border-left: solid 5px #b52845;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    transform: rotatey(-10deg);

    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;

    background: #0b3752;



    a {
      color: #e74c3c;
      text-decoration: none;
      background-color: transparent;
      box-sizing: border-box;

      img {
        vertical-align: middle;
        border-style: none;
        box-sizing: border-box;

        max-width: 100%;
      }
    }
  }
  &:hover  .cover {
    transform: rotatey(-15deg);
  }
`