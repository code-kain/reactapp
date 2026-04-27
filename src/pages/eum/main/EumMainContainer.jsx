import React from 'react';
import theme from '../../../styles/theme';
import { height } from '@fortawesome/free-solid-svg-icons/fa0';

const EumMainContainer = () => {
  return (
    <>
      <div >
        <div style={{
        display : 'flex',
        justifyContent: 'center',
        alignContent:'center',
        alignItems:'flex-end',
        marginTop: '223px'
        }}>
          <h1 style={{fontSize: theme.FONT_SIZE.h1, 
            fontWeight: theme.FONT_WEIGHT.bold, 
            textAlign:'center',
            FONT_LINE: theme.FONT_LINE.h1,
            letterSpacing: '-0.02em'
          }}>
            손짓 하나로 <br /> 
            <span style = {{color : theme.TEXT_COLOR.primary}}>
              마음이 이어지는 곳
            </span> <br />
            이음
          </h1>
        </div>

        <div style={{
        display : 'flex',
        justifyContent: 'center',
        alignContent:'center',
        alignItems:'flex-end',
        marginTop: '36px'
        
        }}>
          <h7 style={{
            fontSize: theme.FONT_SIZE.h7, 
            fontWeight: theme.FONT_WEIGHT.regular, 
            color: theme.GRAYSCALE[7], 
            textAlign:'center',
            FONT_LINE: theme.FONT_LINE.h7,
            letterSpacing: '-0.02em'
            }}>
            수어를 배우고 싶은 청인과 함께하고 싶은 농인 <br />
            모두를 위한 따뜻한 대화 공간이에요.
          </h7>
        </div>

        <div style={{
        display : 'flex',
        justifyContent: 'center',
        alignContent:'center',
        alignItems:'flex-end',
        marginTop: '36px',
        
        }}>
          <button style={{
            backgroundColor : theme.PALETTE.primary.main,
            color: theme.PALETTE.white,
            fontSize: theme.FONT_SIZE.h7,
            fontWeight: theme.FONT_WEIGHT.bold, 
            textAlign:'center',
            padding: '20px 50px',
            borderRadius : '50px',
            letterSpacing: '-0.02em',
            marginBottom:'40px'
            }}>
            지금 시작하기 →
          </button>
        </div>

        <div style={{
        display : 'flex',
        justifyContent: 'center',
        alignItems:'flex-end',
        maxHeight:'1221px',
        height: '1000px',
        backgroundColor: theme.GRAYSCALE[8]
        }}>
          <span style={{ 
            textAlign:'center', 
            letterSpacing: '-0.02em',
            FONT_LINE : theme.FONT_LINE.h4,
            fontSize: theme.FONT_SIZE.h3,
            fontWeight: theme.FONT_WEIGHT.bold,
            }}>
            이음에서만 만날 수 있는 <br />
            다양한 콘텐츠를 소개합니다.
          </span>
        </div>

        <div style={{height:'80px', display:'flex'}}>
          <span style={{height:'54px'}}>fasdfa</span>
          <span> dfafsdf</span>
        </div>





      </div>
    </>
  );
};

export default EumMainContainer;
