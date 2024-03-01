import config from "../config/config";
import { Client, Databases, Storage, Query, ID } from "appwrite";

export class Service{ 
   client = new Client();
   databases;
   bucket;

   constructor(){
      this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId)
      this.databases = new Databases(this.client)
      this.bucket = new Storage(this.client);
   }

   async createPost({title, slug, content, blogImg, status,userId}){
       try {
         return await this.databases.createDocument(
            config.appwriteDatabaseId,
            config.appwriteCollectionId,
            slug,
            {
               title,
               content,
               blogImg,
               status,
               userId,
            }
         )
       } catch (error) {
         throw error
       }
   }
   async updatePost(slug,{title, content, blogImg, status}){
      try {
        return await this.databases.updateDocument(
           config.appwriteDatabaseId,
           config.appwriteCollectionId,
           slug,
           {
              title,
              content,
              blogImg,
              status,
           }
        )
      } catch (error) {
        throw error
      }
  }

  async deletePost(slug){
   try {
      await this.databases.deleteDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        {
           title,
           content,
           blogImg,
           status,
           userId,
        }
        )
        return true
   } catch (error) {
     throw error
     return false
   }
  }

   async getPost(slug){
   try {
      return await this.databases.getDocument(
         config.appwriteDatabaseId,
         config.appwriteCollectionId,
         slug
      )
      
   } catch (error) {
      throw error
   }
   }
// make query to have make index session in appwrite
   async getPosts(queries = [Query.equal("status", "active")]){
      try {
         return await this.databases.listDocuments(
            config.appwriteDatabaseId,
            config.appwriteCollectionId,
            queries,
            100,
            0
         )
         
      } catch (error) {
         throw error
      }
   }

   //file upload servies

   async uplordFile(file){
      try {
         return await this.bucket.createFile(
            config.appwriteBuckedId,
            ID.unique(),
            file
         )
      } catch (error) {
         throw error
      }
   }

   async deletFile(fileId){
      try {
         await this.bucked.deleteFile(
            config.appwriteBuckedId,
            fileId
         )
         return true
      } catch (error) {
         throw error
        
      }
   }

   getFilePrewiew(fileId){
      return this.bucket.getFilePreview(
         config.appwriteBuckedId,
         fileId
      )
   }


}



const service = new Service();
export default service;