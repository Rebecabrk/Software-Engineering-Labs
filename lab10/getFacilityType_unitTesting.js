const {
    getFacilityType, 
    existsHotelId,
    existsFacilityType
} = require('../getFacility_db.js');

describe('getFacilityType function', () =>{
    jest.mock('../getFacilityType_db.js', () =>({
        existsHotelId: jest.fn(),
        existsFacilityType: jest.fn()
    }));

    afterEach(() =>{
        jest.clearAllMocks();
    });

    test('should return concatenated hotelId and facilityType if both exist', async() =>{
        const hotelId = '3';
        const facilityType = 'pool';
        existsHotelId.mockResolvedValue(true);
        existsFacilityType.mockResolvedValue(true);

        const result = await getFacilityType(hotelId, facilityType);

        expect(result).toBe(`${hotelId}/${facilityType}`);
    });

    test('should throw an error if hotelId does not exist', async() =>{
        const hotelId = '100';
        const facilityType = 'pool';
        existsHotelId.mockResolvedValue(false);
        
        await expect(getFacilityType(hotelId, facilityType)).rejects.toThrow(`ID ${hotelId} is not valid.`);
    });

    test('should throw an error if facilityType does not exist', async() =>{
        const hotelId = '3';
        const facilityType = 'parachute';
        existsHotelId.mockResolvedValue(true);
        existsFacilityType.mockResolvedValue(false);
        
        await expect(getFacilityType(hotelId, facilityType)).rejects.toThrow(`Facility ${facilityType} is not valid.`);
    });
})