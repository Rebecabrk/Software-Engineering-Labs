const {
    getAppartmentId,
    existsIdRequested
} = require ('../getAppId_db.js');

describe('getAppartamentId function', () => {
    jest.mock('../getAppId_db.js', () =>({
        existsIdRequested: jest.fn()
    }));

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('should return concatenated facilityPath and idAppRequested if id exists', async() =>{
        const facilityPath = 'Unirea/pool';
        const idAppRequested = '1';
        existsIdRequested.mockResolvedValue(true);

        const result = await getAppartmentId(facilityPath, idAppRequested);

        expect(result).toBe(`${facilityPath}/${idAppRequested}`);
    });

    test('should throw an error if id does not exist', async () => {
        const facilityPath = 'facility';
        const idAppRequested = 'id';
        existIdRequested.mockResolvedValue(false);
    
        await expect(getAppartmentId(facilityPath, idAppRequested)).rejects.toThrow(
          `ID ${idAppRequested} is not valid.`
        );
      });
});