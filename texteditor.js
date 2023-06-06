var Size = Quill.import('attributors/style/size');
var Font = Quill.import('formats/font');
Size.whitelist = ['12px', '14px', '16px', '20px', '24px', '32px', '42px', '54px', '68px'];
Font.whitelist = ['sans serif', 'roboto', 'mirza', 'oswald', 'ubuntu'];
Quill.register(Size, true);
Quill.register(Font, true);

var quill = new Quill('#editor-container', {
    modules: {
        toolbar: '#toolbar-container'
    },
    placeholder: 'Type here...',
    theme: 'snow'  // or 'bubble'
});

// Calling on blur event
addOnBlurEvent();

// Function for on blur
function addOnBlurEvent() {
    let editor = document.getElementsByClassName('ql-editor');
    if(editor.length > 0) {
        editor[0].addEventListener('blur', createCanvas);
    }
}

// Function to create the canvas
function createCanvas() {

    html2canvas(document.getElementById('editor-container')).then(function(canvas) {
        let el = document.getElementById('canvas-container');
        el.innerHTML = '';
        el.appendChild(canvas);
    });

}
