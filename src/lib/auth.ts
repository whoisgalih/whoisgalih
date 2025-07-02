import { adminAuth, adminDb } from "./firebase-admin"
import bcrypt from "bcryptjs"
import { AuthUser, SignUpCredentials } from "@/types/auth"

export async function verifyCredentials(email: string, password: string): Promise<AuthUser | null> {
  try {
    // If Firebase is not configured, return a demo user for testing
    if (!adminDb) {
      if (email === "demo@example.com" && password === "password123") {
        return {
          id: "demo-user-id",
          email: "demo@example.com",
          name: "Demo User",
        }
      }
      return null
    }

    // Get user document from Firestore
    const userDoc = await adminDb.collection('users').doc(email).get()
    
    if (!userDoc.exists) {
      return null
    }

    const userData = userDoc.data()
    
    if (!userData || !userData.hashedPassword) {
      return null
    }

    // Verify password
    const isValid = await bcrypt.compare(password, userData.hashedPassword)
    
    if (!isValid) {
      return null
    }

    return {
      id: userDoc.id,
      email: userData.email,
      name: userData.name,
      image: userData.image,
    }
  } catch (error) {
    console.error('Error verifying credentials:', error)
    return null
  }
}

export async function createUser(credentials: SignUpCredentials): Promise<AuthUser | null> {
  try {
    // If Firebase is not configured, simulate user creation for demo
    if (!adminDb) {
      // Simulate user creation success for demo
      return {
        id: credentials.email,
        email: credentials.email,
        name: credentials.name,
      }
    }

    // Check if user already exists
    const existingUser = await adminDb.collection('users').doc(credentials.email).get()
    
    if (existingUser.exists) {
      throw new Error('User already exists')
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(credentials.password, 12)

    // Create user document in Firestore
    const userData = {
      email: credentials.email,
      name: credentials.name || '',
      hashedPassword,
      createdAt: new Date().toISOString(),
    }

    await adminDb.collection('users').doc(credentials.email).set(userData)

    return {
      id: credentials.email,
      email: credentials.email,
      name: credentials.name,
    }
  } catch (error) {
    console.error('Error creating user:', error)
    return null
  }
}

export async function getUserById(id: string): Promise<AuthUser | null> {
  try {
    // If Firebase is not configured, return demo user
    if (!adminDb) {
      if (id === "demo-user-id") {
        return {
          id: "demo-user-id",
          email: "demo@example.com",
          name: "Demo User",
        }
      }
      return null
    }

    const userDoc = await adminDb.collection('users').doc(id).get()
    
    if (!userDoc.exists) {
      return null
    }

    const userData = userDoc.data()
    
    return {
      id: userDoc.id,
      email: userData?.email,
      name: userData?.name,
      image: userData?.image,
    }
  } catch (error) {
    console.error('Error getting user by ID:', error)
    return null
  }
}