import axios from 'axios';

export const baseURL = 'https://temp01.dopeness.ml';

export const getPrize = async () => {
    const prizeList = await axios.get(
        `${baseURL}/prizes`
    )

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return prizeList.data;
};

export const createNewPrize = async (format) => {
    const isCreated = await axios.post(
        `${baseURL}/prizes` , format
    );
    return isCreated;
}