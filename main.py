import os
import asyncio
import firebase_admin
from firebase_admin import credentials, firestore

# ==========================================
# 1. FIREBASE INITIALIZATION
# ==========================================
# Environmental Variable se path uthayega, default fallback 'firebase-key.json' rahega
cred_path = os.getenv("FIREBASE_CRED_PATH", "firebase-key.json")

if not firebase_admin._apps:
    if os.path.exists(cred_path):
        cred = credentials.Certificate(cred_path)
        firebase_admin.initialize_app(cred)
        print("✅ Firebase successfully connected via Key File!")
    else:
        print(f"⚠️ Warning: '{cred_path}' file nahi mili. Path ya secret settings check karein.")

# Firestore DB Instance
db = firestore.client() if firebase_admin._apps else None


# ==========================================
# 2. FIRESTORE DATABASE HELPER FUNCTIONS
# ==========================================

async def save_bot_config(bot_username: str, config_data: dict) -> bool:
    """Bot config data ko Firestore document me insert ya update karta hai."""
    if not db:
        print("❌ Firestore client initialized nahi hai.")
        return False
    try:
        doc_ref = db.collection("bot_configs").document(bot_username)
        doc_ref.set(config_data, merge=True)
        print(f"✅ Config updated successfully for '{bot_username}'")
        return True
    except Exception as e:
        print(f"❌ Save Error: {e}")
        return False


async def get_bot_config(bot_username: str) -> dict | None:
    """Firestore se bot config document fetch/read karta hai."""
    if not db:
        print("❌ Firestore client initialized nahi hai.")
        return None
    try:
        doc_ref = db.collection("bot_configs").document(bot_username)
        doc = doc_ref.get()
        if doc.exists:
            print(f"✅ Config fetched for '{bot_username}'")
            return doc.to_dict()
        else:
            print(f"ℹ️ No config found for '{bot_username}'")
            return None
    except Exception as e:
        print(f"❌ Read Error: {e}")
        return None


async def save_order_details(order_id: str, order_data: dict) -> bool:
    """Customer order details ko 'orders' collection me save karta hai."""
    if not db:
        return False
    try:
        doc_ref = db.collection("orders").document(order_id)
        doc_ref.set(order_data, merge=True)
        print(f"✅ Order '{order_id}' saved successfully!")
        return True
    except Exception as e:
        print(f"❌ Order Save Error: {e}")
        return False


# ==========================================
# 3. TEST EXECUTION / MAIN RUNNER
# ==========================================
async def main():
    if not db:
        print("Firebase connection fail ho gaya hai. File path check karein.")
        return

    print("\n--- Testing Firestore Operations ---")
    
    # Test Data Save (Write)
    sample_config = {
        "status": "active",
        "env_mode": "production",
        "max_connections": 10,
        "updated_at": firestore.SERVER_TIMESTAMP
    }
    await save_bot_config("TomyJokerBot", sample_config)

    # Test Data Fetch (Read)
    bot_data = await get_bot_config("TomyJokerBot")
    print("Fetched Bot Data:", bot_data)


if __name__ == "__main__":
    asyncio.run(main())
