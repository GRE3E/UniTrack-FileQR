document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('fileInput');
    const uploadForm = document.getElementById('uploadForm');
    const uploadArea = document.querySelector('.upload-area');
    const successModal = document.getElementById('successModal');
    const closeModal = document.getElementById('closeModal');
    
    ['dragenter', 'dragover'].forEach(eventName => {
        uploadArea.addEventListener(eventName, (e) => {
            e.preventDefault();
            uploadArea.classList.add('highlight');
        });
    });
    
    ['dragleave', 'drop'].forEach(eventName => {
        uploadArea.addEventListener(eventName, (e) => {
            e.preventDefault();
            uploadArea.classList.remove('highlight');
        });
    });
    
    // Handle file drop
    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        if (e.dataTransfer.files.length) {
            fileInput.files = e.dataTransfer.files;
            handleUpload();
        }
    });
    
    fileInput.addEventListener('change', handleUpload);
    
    uploadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        handleUpload();
    });
    
    closeModal.addEventListener('click', () => {
        successModal.classList.remove('active');
        uploadForm.reset();
    });
    
    function handleUpload() {
        if (fileInput.files.length) {
            setTimeout(() => {
                successModal.classList.add('active');
            }, 1000);
        }
    }
    
    successModal.addEventListener('click', (e) => {
        if (e.target === successModal) {
            successModal.classList.remove('active');
            uploadForm.reset();
        }
    });
});