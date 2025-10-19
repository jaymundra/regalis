import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from './firebase';

export interface WaitlistData {
  name: string;
  email: string;
  selectedProducts: Array<{
    name: string;
    images: string[];
    price: string;
    discounted: string;
  }>;
  submittedAt: Timestamp;
}

export const addToWaitlist = async (data: Omit<WaitlistData, 'submittedAt'>) => {
  try {
    // console.error('Adding data to firebase', data);
    const selectedProductNames = data.selectedProducts.map(product => product.name);

    const docRef = await addDoc(collection(db, 'waitlist'), {
      ...data,
      selectedProducts: selectedProductNames,  // store only names
      submittedAt: Timestamp.now(),
    });
    // console.error('Added data to firebase', data);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error adding to waitlist:', error);
    return { success: false, error };
  }
};
