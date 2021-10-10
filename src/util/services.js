import axios from 'axios';

export const baseURL = 'https://temp01.dopeness.ml';

export const login = async ({ username, pass}) => {
    try {
        const user = await axios.post(`${baseURL}/auth/local`, {
            identifier: username,
            password: pass,
        });
        return user.data;
    } catch (error) {
        return false;
    }
};

export const getPrize = async () => {
    const prizeList = await axios.get(
        `${baseURL}/prizes?_sort=createdAt:DESC` 
    )
    return prizeList.data;
};

export const getCampaign = async () => {
    const campaignsList = await axios.get(
        `${baseURL}/campaigns?_sort=createdAt:DESC` 
    )
    return campaignsList.data;
};

export const createNewPrize = async (format) => {
    const isCreated = await axios.post(
        `${baseURL}/prizes` , format
    );
    return isCreated;
}

export const deletePrize = async (id) => {
    const isDeleted = await axios.delete(
        `${baseURL}/prizes/${id}`
    );
    return isDeleted;
}

export const updatePrize = async (id, format) => {
    const updated = await Request.put(
        `${baseURL}/prizes` , format
    );
    return updated;
};