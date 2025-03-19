import React, { useState } from 'react'
import axios from 'axios';
import './IncluirVideoAula.css'; // Import the CSS file

const IncluirVideoAula = () => {
  const [videoCode, setVideoCode] = useState('');
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [curso, setCurso] = useState('');
  const [modulo, setModulo] = useState(1);
  const [categoria, setCategoria] = useState('');
  const [professor, setProfessor] = useState('');
  const [usuario, setUsuario] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    const srcMatch = input.match(/src="([^"]+)"/);
    if (srcMatch && srcMatch[1]) {
      setVideoCode(srcMatch[1]);
      console.log(srcMatch[1]);
    } else {
      setVideoCode('');
    }
  };

  const handleFieldChange = (setter: React.Dispatch<React.SetStateAction<any>>, field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setter(event.target.value);
    const videoData = {
      titulo,
      descricao,
      curso,
      modulo,
      categoria,
      professor,
      usuario,
      embbed_video: videoCode
    };
    (videoData as any)[field] = event.target.value;
    console.log('Updated video data:', videoData);
  };

  const handleSubmit = () => {
    const videoData = {
      titulo,
      descricao,
      curso,
      modulo,
      categoria,
      professor,
      usuario,
      embbed_video: videoCode
    };

    console.log('Video data to be sent:', videoData);

    axios.post(`${process.env.REACT_APP_API_BASE_URL}/cursos-embbed-video`, videoData)
      .then(response => {
        console.log('Video data sent successfully:', response.data);
      })
      .catch(error => {
        console.error('Error sending video data:', error);
      });
  };

  return (
    <div className="form-container">
      <input
        type="text"
        placeholder="Enter YouTube video code"
        value={videoCode}
        onChange={handleInputChange}
        className="input-field"
      />
      <input
        type="text"
        placeholder="Title"
        value={titulo}
        onChange={handleFieldChange(setTitulo, 'titulo')}
        className="input-field"
      />
      <input
        type="text"
        placeholder="Description"
        value={descricao}
        onChange={handleFieldChange(setDescricao, 'descricao')}
        className="input-field"
      />
      <input
        type="text"
        placeholder="Course"
        value={curso}
        onChange={handleFieldChange(setCurso, 'curso')}
        className="input-field"
      />
      <input
        type="number"
        placeholder="Module"
        value={modulo}
        onChange={handleFieldChange(setModulo, 'modulo')}
        className="input-field"
      />
      <input
        type="text"
        placeholder="Category"
        value={categoria}
        onChange={handleFieldChange(setCategoria, 'categoria')}
        className="input-field"
      />
      <input
        type="text"
        placeholder="Professor"
        value={professor}
        onChange={handleFieldChange(setProfessor, 'professor')}
        className="input-field"
      />
      <input
        type="text"
        placeholder="User"
        value={usuario}
        onChange={handleFieldChange(setUsuario, 'usuario')}
        className="input-field"
      />
      <button onClick={handleSubmit} className="submit-button">Submit</button>
      {videoCode && (
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src={`${videoCode}`}
            frameBorder="0"
            allowFullScreen
            title="YouTube video player"
          ></iframe>
        </div>
      )}
    </div>
  )
}

export default IncluirVideoAula