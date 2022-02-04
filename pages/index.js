import { Box, Button, Text, TextField, Image } from '@skynexui/components'
import React from 'react'
import { useRouter } from 'next/router'
import appConfig from '../config.json'

function Title(props) {
  const Tag = props.tag || 'h1'
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: ${appConfig.theme.colors.neutrals['000']};
          font-size: 24px;
          font-weight: 600;
        }
      `}</style>
    </>
  )
}

// componente react
// function HomePage() {
//   //escrito em jsx
//   return (
//   <div>
//     <GlobalStyle/>
//     <Title tag="h2">Boas Vindas</Title>
//     <h2>Discord - Alura Matrix</h2>
//   </div>
//   )
// }
// export default HomePage

export default function homePage() {
  // const username = 'radymillacristiano'

  // const para pegar o valor da variável e permitir que ela mude
  const [username, setUsername] = React.useState('radymillacristiano')
  const roteamento = useRouter()
  const inputChange = (event => setUsername(event.target.value))

  return (
    <>
      <Box
        styleSheet={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          // backgroundColor: appConfig.theme.colors.primary[500],
          backgroundImage:
            'url(https://c4.wallpaperflare.com/wallpaper/696/274/479/gradient-green-blue-violet-wallpaper-preview.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundBlendMode: 'multiply'
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row'
            },
            width: '100%',
            maxWidth: '700px',
            borderRadius: '5px',
            padding: '32px',
            margin: '16px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
            backgroundColor: appConfig.theme.colors.neutrals[700]
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={function (infosDoEvent) {
              infosDoEvent.preventDefault()
              console.log('submeteram algo')
              roteamento.push(`/chat?username=${username}`)
              // window.location.href = '/chat'
            }}
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: { xs: '100%', sm: '50%' },
              textAlign: 'center',
              marginBottom: '32px'
            }}
          >
            <Title tag="h2">Boas vindas!</Title>
            <Text
              variant="body3"
              styleSheet={{
                marginBottom: '32px',
                color: appConfig.theme.colors.neutrals[300]
              }}
            >
              {appConfig.name}
            </Text>

            {/* <input
            type="text" value={username} 
            onChange={function (event) {
              // onde estar o valor
              const valor = event.target.value;
              // trocar valor pelo react
              setUsername(valor);
            }}
            /> */}

            {
              <TextField
                value={username}
                placeholder='Digite seu usuário Github'
                onChange={inputChange}
                
                // onChange={function (event) {
                //   // onde estar o valor
                //   const valor = event.target.value
                //   // trocar valor pelo react
                //   setUsername(valor)
                // }}
                fullWidth
                textFieldColors={{
                  neutral: {
                    textColor: appConfig.theme.colors.neutrals[200],
                    mainColor: appConfig.theme.colors.neutrals[900],
                    mainColorHighlight: appConfig.theme.colors.primary[500],
                    backgroundColor: appConfig.theme.colors.neutrals[800]
                  }
                }}
              />
            }
            <Button
              type="submit"
              label="Entrar"
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals['000'],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600]
              }}
            />
          </Box>
          {/* Formulário */}

          {/* Photo Area */}
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              backgroundColor: appConfig.theme.colors.neutrals[800],
              border: '1px solid',
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px'
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '50%',
                marginBottom: '16px'
              }}
              src={
                username.length > 2
                  ? `https://github.com/${username}.png`
                  : 'https://icons.veryicon.com/png/o/miscellaneous/two-color-webpage-small-icon/user-244.png'
              }
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: '3px 10px',
                borderRadius: '1000px'
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  )
}
