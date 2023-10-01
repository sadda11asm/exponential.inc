const functions = require('@google-cloud/functions-framework');
const axios = require('axios');
const Airtable = require('airtable');

const airtableToken = 'patuNH8RvOm5xeAHq.18bc32eccc212de047db17ebd8f827330a1488e04586b0e83507ffc0f5588a8e';

Airtable.configure({ apiKey: airtableToken, endpointUrl: 'https://api.airtable.com', });

const base = Airtable.base('appyRTvVi5X7t0wAv');









const cache = {
    data: [],
    companies: [],
    interviewTypes: [],
    ttl: new Date(),
};


const loadData = async () => {
    const rawData = await base('Tech mentors').select().all();

    return rawData.map((record) => record._rawJson);
}


const updateCache = async () => {
    cache.data = await loadData();
    
    const _companiesListSet = new Set(cache.data.map(item => item.fields.Company));
    _companiesListSet.delete(undefined);
    cache.companies = [..._companiesListSet].sort();

    const _interviewTypesSet = new Set(cache.data.map(item => item.fields['Interview types']).flat());
    _interviewTypesSet.delete(undefined);

    cache.interviewTypes = [..._interviewTypesSet].sort();

    const newDate = new Date();
    newDate.setMinutes(newDate.getMinutes() + 1);
    cache.ttl = newDate;
};





functions.http('helloHttp', async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');

  if (req.method === 'OPTIONS') {
    // Send response to OPTIONS requests
    res.set('Access-Control-Allow-Methods', 'GET');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Access-Control-Max-Age', '3600');
  } 

    // const rawCompanies = req.query.companies;
    // const rawInterviewTypes = req.query.interviewTypes;

    // if (!rawCompanies || !rawInterviewTypes) {
    //     return res.sendStatus(400);
    // }

    // const companies = rawCompanies.split(',');
    // const interviewTypes = rawInterviewTypes.split(',');

    if (req.query.telegramNotifyzzz) {
        console.log('some log', req.body);
        await axios.get(`https://api.telegram.org/bot5702389503:AAFooNR0hdmHk8jX7dQovTmWteuJXViYE5M/sendMessage?chat_id=-1001660413056&text=${JSON.stringify(req.body)}`)
        return res.sendStatus(200);
    }

    let isCached = true;

    if (cache.ttl < new Date() || cache.data.length === 0) {
        isCached = false;
    // if (true) {
        try {
            await updateCache();
        } catch (err) {
            console.error('error while updating cache', err);
            return res.sendStatus(500);
        }
    }

    const dataToUse = cache.data;

    const response = {
        'cached': isCached,
        'data': dataToUse,
        'companies': cache.companies,
        'interview_types': cache.interviewTypes,
    };
    
    return res.status(200).json(response);
});
