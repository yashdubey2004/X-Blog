import conf from '../conf/conf.js';
import { Client, Databases, ID, Storage, Query } from 'appwrite';

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteurl)
            .setProject(conf.appwriteprojectID);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwritedatabaseID,
                conf.appwritecollectionID,
                slug,
                { title, content, featuredImage, status, userId }
            );
        } catch (error) {
            throw error;
        }
    }

    async updatePost(documentId, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwritedatabaseID,
                conf.appwritecollectionID,
                documentId,
                { title, content, ...(featuredImage && { featuredImage }), status }
            );
        } catch (error) {
            throw error;
        }
    }

    async deletePost(slug) {
        try {
            return await this.databases.deleteDocument(
                conf.appwritedatabaseID,
                conf.appwritecollectionID,
                slug
            );
        } catch (error) {
            throw error;
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwritedatabaseID,
                conf.appwritecollectionID,
                slug
            );
        } catch (error) {
            throw error;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwritedatabaseID,
                conf.appwritecollectionID,
                queries
            );
        } catch (error) {
            throw error;
        }
    }

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwritebucketID,
                ID.unique(),
                file
            );
        } catch (error) {
            throw error;
        }
    }

    async deleteFile(fileId) {
        try {
            return await this.bucket.deleteFile(
                conf.appwritebucketID,
                fileId
            );
        } catch (error) {
            throw error;
        }
    }

    getFilePreview(fileId, width = 200, height = 200) {
        try {
            return this.bucket.getFilePreview(
                conf.appwritebucketID,
                fileId,
                width,
                height
            );
        } catch (error) {
            throw error;
        }
    }
}

const service = new Service();
export default service;