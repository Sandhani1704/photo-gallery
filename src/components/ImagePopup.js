import React from 'react';
import './ImagePopup.css';
import { BackIcon } from '../assets/icons/BackIcon';

function ImagePopup({ card, isOpen, closeImagePopup }) {

  React.useEffect(() => {
    function handleEscClose(evt) {
      if (evt.key === 'Escape') {
        closeImagePopup();
      }
    }

    function closeByOverlayClick(evt) {
      if (evt.target.classList.contains('popup-image__overlay')) {
        closeImagePopup();
      }
    }

    document.addEventListener('keydown', handleEscClose);
    document.addEventListener('click', closeByOverlayClick);

    return () => {
      document.removeEventListener('keydown', handleEscClose);
      document.removeEventListener('click', closeByOverlayClick);
    };
  });

  function handleButtonBack() {
    closeImagePopup()
  }

  return (

    <section className={`popup popup-image ${isOpen && 'popup-image_opened'}`} >
      <div className="popup-image__overlay"></div>
      <div className="popup-image__container">
        <img src={card.url} alt={card.title} className="popup-image__image" />
        <p className="popup-image__caption">Заголовок: {card.title}</p>
        <p className="popup-image__caption">Ссылка на картинку: {card.url}</p>
        <p className="popup-image__caption">ID картинки: {card.id}</p>
        <button
          onClick={() => {
            handleButtonBack();
          }}
          aria-label="Назад"
          type="button"
          className={'popup-image__back-button'}
        >
          <span className={'popupControllBtnImage'}>
            <BackIcon />
          </span>
        </button>
      </div>
    </section>


  );
}

export default ImagePopup;