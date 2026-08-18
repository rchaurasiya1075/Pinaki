import { auth, db } from "./firebase-config.js";
import { 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged,
    sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { 
    doc, 
    setDoc, 
    getDoc, 
    collection, 
    getDocs 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

let currentAuthMode = "login";

// AUTH MODAL TOGGLES
window.openAuthModal = () => {
    document.getElementById("authModal").classList.add("active");
};

window.closeAuthModal = () => {
    document.getElementById("authModal").classList.remove("active");
    document.getElementById("authError").innerText = "";
};

window.switchAuthMode = (mode) => {
    currentAuthMode = mode;
    const isSignup = mode === "signup";
    
    document.getElementById("loginTabBtn").classList.toggle("active", !isSignup);
    document.getElementById("signupTabBtn").classList.toggle("active", isSignup);
    document.getElementById("nameGroup").style.display = isSignup ? "block" : "none";
    document.getElementById("loginOptions").style.display = isSignup ? "none" : "block";
    
    document.getElementById("authTitle").innerText = isSignup ? "Create Account" : "Welcome Back";
    document.getElementById("authSubmitBtn").querySelector("span").innerText = isSignup ? "Sign Up" : "Log In";
};

// LOGIN / SIGNUP SUBMISSION
window.handleAuthSubmit = async (e) => {
    e.preventDefault();
    const email = document.getElementById("authEmail").value;
    const password = document.getElementById("authPassword").value;
    const name = document.getElementById("authName").value;
    const errorEl = document.getElementById("authError");
    errorEl.innerText = "";

    try {
        if (currentAuthMode === "signup") {
            const userCred = await createUserWithEmailAndPassword(auth, email, password);
            // Save User Record to Firestore
            await setDoc(doc(db, "users", userCred.user.uid), {
                name: name || "User",
                email: email,
                role: "customer",
                createdAt: new Date().toISOString()
            });
        } else {
            await signInWithEmailAndPassword(auth, email, password);
        }
        closeAuthModal();
    } catch (err) {
        errorEl.innerText = err.message.replace("Firebase: ", "");
    }
};

// FORGOT PASSWORD
window.handleForgotPassword = async () => {
    const email = document.getElementById("authEmail").value;
    if (!email) {
        alert("Please enter your email address first.");
        return;
    }
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent to your email!");
    } catch (err) {
        alert(err.message);
    }
};

// AUTH STATE OBSERVER
onAuthStateChanged(auth, async (user) => {
    const navUserText = document.getElementById("navUserText");
    const mobileUserLabel = document.getElementById("mobileUserLabel");
    const adminNavBtn = document.getElementById("adminNavBtn");

    if (user) {
        // Fetch User Role
        try {
            const userDoc = await getDoc(doc(db, "users", user.uid));
            if (userDoc.exists()) {
                const userData = userDoc.data();
                navUserText.innerText = userData.name.split(" ")[0];
                mobileUserLabel.innerText = userData.name.split(" ")[0];
                if (userData.role === "admin") {
                    adminNavBtn.style.display = "flex";
                }
            }
        } catch (e) {
            console.error("User Profile Load Error", e);
        }
    } else {
        navUserText.innerText = "Login";
        mobileUserLabel.innerText = "Account";
        adminNavBtn.style.display = "none";
    }
});

// PROFILE CLICK ON MOBILE
window.handleMobileProfileClick = () => {
    if (auth.currentUser) {
        if (confirm("Logout from PINAKI?")) {
            signOut(auth);
        }
    } else {
        openAuthModal();
    }
};

// DUMMY PRODUCT RENDERER
async function loadProducts() {
    const productGrid = document.getElementById("productGrid");
    try {
        const querySnapshot = await getDocs(collection(db, "products"));
        if(querySnapshot.empty) {
            // Render Fallback Products if DB empty
            productGrid.innerHTML = `
                <div class="product-card">
                    <div class="product-img-wrapper"><img src="https://via.placeholder.com/150" alt="Product"></div>
                    <div class="product-info">
                        <div class="product-title">Sample Smartphone 5G</div>
                        <div class="price-row"><span class="curr-price">₹12,999</span><span class="old-price">₹15,999</span><span class="discount">18% off</span></div>
                        <button class="btn-add-cart">Add to Cart</button>
                    </div>
                </div>
            `;
            return;
        }
        productGrid.innerHTML = "";
        querySnapshot.forEach((doc) => {
            const p = doc.data();
            productGrid.innerHTML += `
                <div class="product-card">
                    <div class="product-img-wrapper"><img src="${p.imageUrl || 'https://via.placeholder.com/150'}" alt="${p.title}"></div>
                    <div class="product-info">
                        <div class="product-title">${p.title}</div>
                        <div class="price-row"><span class="curr-price">₹${p.price}</span></div>
                        <button class="btn-add-cart">Add to Cart</button>
                    </div>
                </div>
            `;
        });
    } catch (e) {
        productGrid.innerHTML = "<p>Error loading products.</p>";
    }
}

document.addEventListener("DOMContentLoaded", loadProducts);
