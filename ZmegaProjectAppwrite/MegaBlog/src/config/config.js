//it noting just best practices this block our website to get cresh because in .env may passed 
//number null other data types value. it insure that passed only string value
const config = {
   appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
   appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
   appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
   appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
   appwriteBuckedId: String(import.meta.env.VITE_APPWRITE_BUCKED_ID),
        
}


export default config 