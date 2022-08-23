import { db } from '../firebaseConfig'

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore'

const AnnCollectionRef = collection(db, 'Announcements')

class AnnouncementService {
  addAnn = (newAnn) => {
    return addDoc(AnnCollectionRef, newAnn)
  }
  updateAnn = (id, updatedAnn) => {
    const annDoc = doc(db, 'Announcements', id)
    return updateDoc(annDoc, updatedAnn)
  }
  deleteAnn = (id) => {
    const annDoc = doc(db, 'Announcements', id)
    return deleteDoc(annDoc)
  }
  getAllAnn = () => {
    return getDocs(AnnCollectionRef)
  }
  getAnn = (id) => {
    const annDoc = doc(db, 'Announcements', id)
    return getDoc(annDoc)
  }
}

export default new AnnouncementService()
