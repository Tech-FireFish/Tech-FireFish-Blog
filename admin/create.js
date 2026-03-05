// dashboard create.html 
// const { ClassicEditor, Heading, BlockQuote, Bold, Italic, Font, Link, List } = CKEDITOR;
const {
        ClassicEditor,
        Essentials,
        Paragraph,
        Bold,
        Italic,
        Font
		} = CKEDITOR;
ClassicEditor
	.create( document.querySelector( "#editor" ), {
		licenseKey: '<GPL>',
        plugins: [ Essentials, Paragraph, Bold, Italic, Font ],
		toolbar: [
			'heading',
			'|',
			'bold',
			'italic',
			'fontSize',
			'fontFamily',
			'fontColor',
			'|',
			'link',
			'bulletedList',
			'numberedList',
			'blockQuote'
			],
		heading: {
			options: [
				{ model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
				{ model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
				{ model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
			]
		},
		fontFamily: {
			options: [
				'default',
				'Ubuntu, Arial, sans-serif',
				'Ubuntu Mono, Courier New, Courier, monospace'
			]
		},
		fontColor: {
			colorPicker: {
				// Use 'hex' format for output instead of 'hsl'.
				format: 'hex'
			}
		},
	} )
    .then(editor => {
        window.editor=editor;
    })
	.catch( error => {
		console.log( error );
	} )
