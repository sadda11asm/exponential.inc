import axios from 'axios';

const convertApiData = (apiData) => {
    const result = [];
    for (const { fields } of apiData) {
        try {
            if (fields.Name === "Saddam Asmatullayev") continue;
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

const removeEmptySpacesAndUndefined = (strArr) => {
    return strArr
        .filter(str => str !== undefined)
        .filter(str => str.replace(/\s/g, '').length !== 0);
};

const removeDuplicatesAndSort = (strArr) => {
    return [... new Set(strArr)].sort();
}

const getCompaniesList = (techMentorsData) => {
    let companies = techMentorsData.map(({ company }) => company);
    companies = removeEmptySpacesAndUndefined(companies);

    return removeDuplicatesAndSort(companies);
}

const getInterviewTypesList = (techMentorsData) => {
    let interviewTypes = techMentorsData.map(({ conductsInterviews }) => conductsInterviews).flat();
    interviewTypes = removeEmptySpacesAndUndefined(interviewTypes);

    return removeDuplicatesAndSort(interviewTypes);
};

export const genQueryApi = async (isProductionPage = true) => {
    const rawResponse = await axios.get(`https://hello-world-oli3pqpn7a-oa.a.run.app/?interviewTypes=tech&companies=meta,google${isProductionPage ? '' : '&vivalavida=74a6c406d7bb32326a8df074c817eea58541dce91f295716238b88d00a831335aca4eb6164ab3dab293ca21e0426a9f4'}`);
    const data = rawResponse.data.data;
    const techMentorsData = convertApiData(data);

    const companiesList = getCompaniesList(techMentorsData);
    const interviewTypesList = getInterviewTypesList(techMentorsData);

    return { rawResponse, techMentorsData, companiesList, interviewTypesList };
}
