const {
    getRoomType,
    existsRoomType
} = require('../getRoomType_db.js');

describe('getRoomType function', () =>{
    jest.mock('../getRoomType_db.js', () =>({
        existsRoomType: jest.fn()
    }));

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('should return concatenated idRequestedPath and roomType if roomType exist', async() =>{
        const idRequestedPath = 'unirea/apps/app1';
        const roomType = 'bedroom';
        existsRoomType.mockResolvedValue(true);

        const result = await getRoomType(idRequestedPath, roomType);

        expect(result).toBe(`${idRequestedPath}/${roomType}`);
    });

    test('should throw an error if roomType does not exist', async() =>{
        const idRequestedPath = 'unirea/apps/app1';
        const roomType = 'rageRoom';
        existsRoomType.mockResolvedValue(false);
        
        await expect(getFacilityType(hotelId, facilityType)).rejects.toThrow(`ID ${roomType} is not valid.`);
    });
})