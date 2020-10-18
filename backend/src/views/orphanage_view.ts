import Orphanage from '../models/Orphanage';

import imageView from './images_view';

export default {
  render(orphanage: Orphanage) {
    const { 
        id,
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends,
        images
    } = orphanage;

    return {
      id,
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images: imageView.renderMany(images)
    }
  },

  renderMany(orphanages: Orphanage[]) {
    return orphanages.map(
      orphanage => this.render(orphanage)
    );
}}
