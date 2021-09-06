import React from 'react'
import { Global, css } from '@emotion/react'

export const GlobalStyle = () => {
  return (
    <div>
      <Global
        styles={css`
          html,
          body,
          .root {
            font-size: 16px;
            min-height: 100vh;

            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          * {
            box-sizing: border-box;
            outline: none;
            font-weight: 400;
            font-family: 'Montserrat';
          }

          button {
            border: none;
            background: none;
            font-family: 'Muli';
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
          }

          @font-face {
            font-family: 'Montserrat';
            src: url('/Montserrat-Regular.ttf');
            font-weight: 400;
            font-style: normal;
          }

          @font-face {
            font-family: 'Montserrat';
            src: url('/Montserrat-Bold.ttf');
            font-weight: bold;
            font-style: normal;
          }

          @font-face {
            font-family: 'Muli';
            src: url('/Muli.ttf');
            font-weight: 400;
            font-style: normal;
          }

          @font-face {
            font-family: 'Muli';
            src: url('/Muli-Bold.ttf');
            font-weight: bold;
            font-style: normal;
          }
        `}
      />
    </div>
  )
}
