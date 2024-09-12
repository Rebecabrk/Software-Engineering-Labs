/* functie care scoate valorile dintr-un json 
    pentru a insera acele valori in baza de date
*/

function uploadPanorama(){
    
    try{
        const {imagePath, imagePinpoints} = await /* functia baiatilor care trimite un json */
        let sqlInsert = "insert into accomodations (imagePath, imagePinPoints) values " + imagePath + ", " + imagePinpoints + ";";

        /* apelam functia care face conexiunea cu baza de date 
        si executam sqlInsert */
    }catch(error){
        console.error(error);
    }
}

/* testing pentru functie */

describe('uploadPanorama', () => {
    test('should upload panorama successfully', async () => {
        httpGetPanorama.mockResolvedValueOnce({
            imagePath: 'insert here real imagePath',
            imagePinpoints: 'insert here real imagePinpoints'
        });

        runAsyncQueryOnDatabase.mockResolvedValueOnce();

        await uploadPanorama();

        expect(httpGetPanorama).toHaveBeenCalled();
        expect(runAsyncQueryOnDatabase).toHaveBeenCalledWith("insert into accommodations (imagePath, imagePinPoints) values (exampleImagePath,exampleImagePinpoints)");
        expect(console.log).toHaveBeenCalledWith("Panorama uploaded successfully");
    });

    test('should handle error during panorama upload', async () => {
        httpGetPanorama.mockRejectedValueOnce(new Error('Failed to get panorama'));

        await uploadPanorama();

        expect(httpGetPanorama).toHaveBeenCalled();
        expect(console.error).toHaveBeenCalledWith("Error uploading panorama:", expect.any(Error));
    });
});