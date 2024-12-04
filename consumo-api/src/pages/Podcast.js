import React, { useEffect, useState } from "react";

const Podcast = () => {
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    // Função que carrega a API do YouTube Iframe
    const loadYouTubeAPI = () => {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    };

    // Função chama API YouTube estiver pronta
    window.onYouTubeIframeAPIReady = () => {
      const ytPlayer = new window.YT.Player('YoutubePlayer', {
        events: {
          'onReady': (event) => setPlayer(event.target)
        }
      });
    };

    loadYouTubeAPI();
  }, []);

  return (
    <div style={{ minHeight: '80vh', padding: '5%', fontSize: '1rem', backgroundColor: '#f4f4f4', borderRadius: '8px' }}>
      <div>
        <h1
          style={{
            textAlign: 'center',
            fontFamily: 'Verdana, sans-serif',
            fontSize: '3vw',
            color: '#aa9864',
            transition: 'color 0.3s ease, transform 0.3s ease',
            marginBottom: '1rem',
            lineHeight: '1.2',
            letterSpacing: '2px',
            textShadow: '1px 1px 3px rgba(0,0,0,0.1)'
          }}
          onMouseEnter={e => {
            e.target.style.color = 'rgb(50, 58, 35)';
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={e => {
            e.target.style.color = '#aa9864';
            e.target.style.transform = 'scale(1)';
          }}
        >
          Bem vindos ao nosso Podcast:
        </h1>
        <h1
          style={{
            textAlign: 'center',
            fontFamily: 'Impact, sans-serif',
            fontSize: '4vw',
            color: 'rgb(50, 58, 35)',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            lineHeight: '1.2',
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
          }}
          onMouseEnter={e => {
            e.target.style.color = '#aa9864';
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={e => {
            e.target.style.color = 'rgb(50, 58, 35)';
            e.target.style.transform = 'scale(1)';
          }}
        >
          Papo de Urutu
        </h1>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem' }}>
        <div style={{ maxWidth: '1000px', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          {/* Texto de apresentação do Podcast */}
          <div style={{
            fontFamily: 'Verdana, sans-serif',
            fontSize: '1.2rem',
            color: '#555',
            lineHeight: '1.6',
            textAlign: 'justify',
            padding: '0 5%',
            marginBottom: '2rem'
          }}>
            <p style={{ marginBottom: '1.5rem' }}> O <strong>Papo de Urutu</strong> é mais do que um podcast, é um espaço para todas as vozes, independente de todas as nossas diferenças. Na sede da Urutu, damos voz aos sons que nascem nas quebradas, nas ruas, nas praças e nos becos, através de pequenos shows, concertos, batalhas de rap, e aqui, no nosso podcast, não poderia ser diferente! Também buscamos promover o poder da leitura e o conhecimento que vem dos livros, sempre com aquele papo reto, que une e instiga a comunicação de toda a comunidade de forma criativa e profunda.</p>

            <p style={{ marginBottom: '1.5rem' }}> Aqui, acreditamos no poder das histórias que inspiram e transformam. Cada pessoa tem uma jornada única, e a sua pode ser a faísca que acende a chama de outros. Queremos ouvir sua voz, suas lutas, suas vitórias e suas experiências de superação. Junte-se a nós e compartilhe sua história, seja ela de coragem, resistência ou conquista. Ao dividir sua vivência, você pode se tornar exemplo e inspiração para os mais jovens e para todos que buscam força para seguir em frente. Aqui, cada conversa é uma oportunidade de aprendizado e conexão. Não fique de fora, venha fazer parte dessa troca poderosa que une e eleva a todos!</p>

            <p style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
              <strong>Venha ser Urutu!</strong></p>

          </div>

          {/* Player de vídeo do YouTube */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <iframe
              id="ytplayer"
              type="text/html"
              width="100%"
              height="auto"
              style={{
                maxWidth: '100%',
                aspectRatio: '16/9',
                borderRadius: '8px',
                border: '2px solid #ddd',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
              }}
              src="https://www.youtube.com/embed/Mu_zVUSdRSc?enablejsapi=1"
              allowFullScreen
              title="Papo de Urutu Video"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Podcast;
