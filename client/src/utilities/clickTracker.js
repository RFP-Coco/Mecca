import axios from 'axios';
/**
 *
 * @param {SyntheticEvent} event
 */
export default function clickTracker(event) {
  /**
   * @type {object} interaction
   *
   */
  const interaction = {
    element: event.target.tagName,
    widget: event.currentTarget.id,
    time: new Date().toLocaleString(),
  };

  axios.post('/api/interactions', interaction)
    .then((result) => console.log('your click has been tracked', result))
    .catch((err) => console.log(err));
}
