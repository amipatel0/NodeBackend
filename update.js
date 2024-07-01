const getConnect = require('./mongodb');

const updateData = async () => {
    try {
        const collection = await getConnect();
        const result = await collection.updateMany(
            { sid: 'S02' },
            {
                $set: { sid:'s02',sname: 'Kriya Patel', sem: '01' }
            }
        );
        console.log(result);
    } catch (error) {
        console.error('Error updating data:', error);
    }
};

updateData();
