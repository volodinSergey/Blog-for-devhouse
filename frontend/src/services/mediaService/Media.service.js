import Axios from '@/api/axios'

import { useImageAdapter } from '@/services/mediaService/Media.service.adapters'

const MediaService = {
    upload: async (file) => {
        const { data: uploadedImage } = await Axios.post('/api/upload', file)

        const adaptedUploadedImage = useImageAdapter(uploadedImage)

        return adaptedUploadedImage
    }
}

export default MediaService