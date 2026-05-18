/* =========================
   Custom Alert
========================= */

.custom-alert {
    position: fixed;
    top: 6rem;
    right: 2rem;
    z-index: 9999;
    background: var(--white);
    border-left: 5px solid var(--primary);
    border-radius: 1rem;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
    padding: 1rem 1.25rem;
    min-width: 320px;
    max-width: 420px;
    transform: translateY(-20px);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease;
}

.custom-alert.show {
    transform: translateY(0);
    opacity: 1;
}

.custom-alert__content {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.custom-alert__content span {
    font-size: 2rem;
    color: var(--primary);
}

.custom-alert__content p {
    margin: 0;
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--secondary);
    line-height: 1.4;
}

.custom-alert--error {
    border-left-color: #ef4444;
}

.custom-alert--error .custom-alert__content span {
    color: #ef4444;
}

@media (max-width: 768px) {
    .custom-alert {
        top: 5.5rem;
        right: 1rem;
        left: 1rem;
        min-width: auto;
        max-width: none;
    }
}
