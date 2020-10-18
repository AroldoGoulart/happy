import Image from "../models/Image";
import serverInfo from '../config/serverInfo';
const { baseUrl } = serverInfo;

export default {
    render(image: Image) {
        return {
            id: image.id,
            url: `http://${baseUrl}/uploads/${image.path}`
        }
    },

    renderMany(images: Image[]) {
        return images.map(
            image => this.render(image)
        );
    }
}