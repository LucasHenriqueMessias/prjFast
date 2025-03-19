import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './VideoAula.css';

const VideoAula = () => {
    const [fetchedVideos, setFetchedVideos] = useState<{ embbed_video: string; titulo: string; descricao: string }[]>([]);
    const [selectedVideo, setSelectedVideo] = useState<{ embbed_video: string; titulo: string; descricao: string } | null>(null);
    const navigate = useNavigate();
  
    useEffect(() => {
      axios.get(`${process.env.REACT_APP_API_BASE_URL}/cursos-embbed-video`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        }
      })
        .then(response => {
          const videoDataArray = response.data;
          if (Array.isArray(videoDataArray) && videoDataArray.length > 0) {
            setFetchedVideos(videoDataArray);
            console.log(videoDataArray);
          }
        })
        .catch(error => {
          console.error('Error fetching video data:', error);
          if (error.response && error.response.status === 404) {
            alert('Videos not found. Please check the API endpoint.');
          } else {
            alert('An error occurred while fetching videos. Please try again later.');
          }
        });
    }, []);

    const handleTitleClick = (video: { embbed_video: string; titulo: string; descricao: string }) => {
        setSelectedVideo(video);
      };

    const handleQuestionarioClick = (titulo: string) => {
        navigate('/questionario', { state: { cursoTitulo: titulo } });
      };

    return (
      <div className="App">
        <header className="App-header">
          <div className="content">
            <div className="video-display">
              {selectedVideo && (
                <div className="video-container">
                  <iframe
                    width="1120"
                    height="630"
                    src={`${selectedVideo.embbed_video}`}
                    frameBorder="0"
                    allowFullScreen
                    title={`Fetched YouTube video player ${selectedVideo.titulo}`}
                  ></iframe>
                  <div className="video-description" style={{ fontSize: '16px' }}>
                    {selectedVideo.descricao}
                  </div>
                  <button onClick={() => handleQuestionarioClick(selectedVideo.titulo)} className="go-to-questionnaire">
                    Questionário
                    </button>
                </div>
              )}
            </div>
            <div className="video-list" style={{ padding: '5rem', borderLeft: '200px' }}>
              {fetchedVideos.map((video, index) => (
                <div key={index} onClick={() => handleTitleClick(video)} className="video-title">
                  {video.titulo}
                </div>
              ))}
            </div>
          </div>
        </header>
      </div>
    );
  }


export default VideoAula