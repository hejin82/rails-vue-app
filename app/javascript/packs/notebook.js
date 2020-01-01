import Vue from 'vue/dist/vue.esm';
import marked from 'marked';
import 'stylesheets/notebook.css';

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#notebook',
    components: {},
    data: {
      notes: JSON.parse(localStorage.getItem('notes')) || [],
      selectedId: localStorage.getItem('selected-id') || null
    },
    methods: {
      saveNote(val) {
        console.log('saving note:', val);
        localStorage.setItem('notes', JSON.stringify(this.notes));
        this.reportOperation('saving');
      },
      reportOperation(opName) {
        console.log('the ', opName, ' operation was completed!');
      },
      addNote() {
        const time = Date.now();
        const note = {
          id: String(time),
          title: 'New note ' + (this.notes.length + 1),
          content: '**Hi! This notebook is using markdown',
          created: time,
          favorite: false
        };
        this.notes.push(note);
      },
      removeNote() {
        if (this.selectedNote && confirm('delete the note?')) {
          const index = this.notes.indexOf(this.selectedNote);
          if (index != -1) {
            this.notes.splice(index, 1);
          }
        }
      },
      favoriteNote() {
        this.selectedNote.favorite = !this.selectedNote.favorite ^ true;
      },
      selectNote(note) {
        this.selectedId = note.id;
      }
    },
    created() {
      this.content = localStorage.getItem('content') || 'you can write in **markdown**';
    },
    computed: {
      notePreview() {
        return this.selectedNote ? marked(this.selectedNote.content) : '';
      },
      addButtonTitle() {
        return this.notes.length + ' note(s) already';
      },
      selectedNote() {
        return this.notes.find(note => note.id === this.selectedId) || { content: '', favorite: false };
      }
    },
    watch: {
      notes: {
        // handler(val, oldVal) {
        //   console.log('new note:', val, 'old note:', oldVal);
        //   localStorage.setItem('content', val);
        // },
        handler: 'saveNote',
        immediate: true,
        deep: true
      },
      selectedId(val) {
        localStorage.setItem('selected-id', val);
      }
    }
  });
});
