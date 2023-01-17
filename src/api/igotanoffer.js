import axios from 'axios';

const convertApiData = (apiData) => {
    const result = [];
    for (const { fields } of apiData) {
        try {
            const updatedRecord = {
                mentorImage: fields.photo[0].thumbnails.large.url,
                mentorName: fields.Name,
                company: fields.Company,
                previousCompanies: fields['Previous companies'],
                role: fields.Role,
                conductsInterviews: fields['Interview types'],
            }

            result.push(updatedRecord);
        } catch (err) { }
    }

    return result;
};

export const genQueryApi = async (isProductionPage = true) => {
    const rawResponse = await axios.get(`https://hello-world-oli3pqpn7a-oa.a.run.app/?interviewTypes=tech&companies=meta,google${ isProductionPage ? '' : '&vivalavida=74a6c406d7bb32326a8df074c817eea58541dce91f295716238b88d00a831335aca4eb6164ab3dab293ca21e0426a9f4' }`);
    const data = rawResponse.data.data;
    const techMentorsData = convertApiData(data);

    return { rawResponse, techMentorsData, };
}