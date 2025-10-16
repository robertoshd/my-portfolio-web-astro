import React, { useState, useEffect } from "react";
import "../styles/modal.css";


export default function Modal({ isOpen, onClose, project }) {
  const [selectedImage, setSelectedImage] = useState("");

  // Cada vez que cambie el proyecto seleccionado, se actualiza la imagen principal
  useEffect(() => {
    if (project?.images?.length > 0) {
      setSelectedImage(project.images[0]);
    } else {
      setSelectedImage("");
    }
  }, [project]);

  if (!isOpen || !project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Cerrar modal">×</button>
        
        {/* Imagen principal */}
        {selectedImage && (
          <img
            src={selectedImage}
            alt={project.title}
            className="modal-main-image"
          />
        )}

        {/* Galería de imágenes */}
        <div className="modal-gallery">

          {project.images?.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${project.title} imagen ${index + 1}`}
              className={`modal-thumb ${selectedImage === img ? "selected" : ""}`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
          
        </div>

        <h2><span class="text-yellow-500 font-bold">{project.title}</span></h2>

        <p><span class="text-purple-500">Descripción:</span> {project.description}</p>
        <p><span class="text-purple-500">Problemática:</span> {project.problem}</p>
        <p><span class="text-purple-500">Solución:</span> {project.solution}</p>
        <p><span class="text-purple-500">Diseño:</span> {project.design}</p>
        <p><span class="text-purple-500">Resultados:</span> {project.results}</p>

        {/* <a href={project.url} target="_blank" rel="noopener noreferrer">Ver proyecto</a> */}
       
      </div>
    </div>
  );
}
