import { useEffect, useRef } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

function EmailApprovalHandler() {
    const { token, action } = useParams();
    const navigate = useNavigate();
    const alreadyProcessed = useRef(false);
    const location = useLocation();

    useEffect(() => {
        console.log("🔁 EmailApprovalHandler montado");
        console.log("📦 Token:", token);
        console.log("📦 Action:", action);

        if (alreadyProcessed.current) return;
        alreadyProcessed.current = true;

        const jwt = localStorage.getItem("token");
        const role = localStorage.getItem("role");

        console.log("🔐 Token en localStorage:", jwt);
        console.log("🔐 Rol:", role);

        // Si no está loggeado como admin
        if (!jwt || role !== "ADMIN") {
            // Si ya redirigimos antes, no volver a hacerlo
            if (location.state?.redirectedOnce) {
                toast.error("❌ Debés iniciar sesión como ADMIN para aprobar recetas");
                console.error("🔴 No se puede procesar solicitud sin token o rol ADMIN");
                navigate("/home");
                return;
            }

            // Limpiar token por seguridad
            localStorage.removeItem("token");
            localStorage.removeItem("role");
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("tokenData");

            // Redirigimos al login con flag para mostrar toast allá
            navigate("/login", {
                state: {
                    redirectAfterLogin: `/email/request/${token}/${action}`,
                    redirectedOnce: true,
                    toastMessage: "⚠️ Iniciá sesión como ADMIN para continuar",
                    fromEmailLink: true // ✅ clave para evitar toasts duplicados
                }
            });
            return;
        }

        // Si está loggeado como admin, procesar aprobación
        processApproval(jwt);

    }, [token, action]);

    const processApproval = async (jwt) => {
        try {
            const res = await fetch(`http://localhost:3001/api/email/request/${token}/${action}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });

            const data = await res.json();

            if (res.ok) {
                toast.success(data.message || "✅ Acción realizada correctamente");
                navigate(`/admin/recipe/${data.recipeId}`, {
                    state: { fromEmail: true, action: action }
                });
            } else {
                toast.error(data.message || "❌ Error al procesar solicitud");
                setTimeout(() => navigate("/home"), 3000);
            }

        } catch (err) {
            console.error("Error al aprobar/rechazar receta:", err);
            toast.error("❌ Error inesperado");
            setTimeout(() => navigate("/home"), 3000);
        }
    };

    return <div style={{ padding: "2rem", textAlign: "center" }}>Procesando solicitud...</div>;
}

export default EmailApprovalHandler;
