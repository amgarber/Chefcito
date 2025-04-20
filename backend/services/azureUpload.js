const { BlobServiceClient } = require("@azure/storage-blob");

const uploadToAzure = async (file) => {
    console.log(" Connection String:", process.env.AZURE_STORAGE_CONNECTION_STRING);

    const blobServiceClient = BlobServiceClient.fromConnectionString(process.env.AZURE_STORAGE_CONNECTION_STRING);
    const containerClient = blobServiceClient.getContainerClient(process.env.AZURE_CONTAINER_NAME);

    const blobName = `${Date.now()}-${file.originalname}`;
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    await blockBlobClient.uploadData(file.buffer, {
        blobHTTPHeaders: { blobContentType: file.mimetype }
    });

    return blockBlobClient.url;
};

module.exports = uploadToAzure;
