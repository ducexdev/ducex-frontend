'use client';
import React, { useCallback } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import CharacterCount from '@tiptap/extension-character-count';
import TextAlign from '@tiptap/extension-text-align';
import Typography from '@tiptap/extension-typography';
import {
  Bold, Italic, Underline as UnderlineIcon, Strikethrough,
  Heading1, Heading2, Heading3, List, ListOrdered,
  Quote, Link as LinkIcon, Undo, Redo, AlignLeft, AlignCenter, AlignRight,
} from 'lucide-react';
import styles from './TipTapEditor.module.css';

interface TipTapEditorProps {
  content: string;
  onChange: (html: string) => void;
  placeholder?: string;
}

export function TipTapEditor({ content, onChange, placeholder = 'Start writing your article...' }: TipTapEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: { levels: [1, 2, 3] } }),
      Underline,
      Link.configure({ openOnClick: false, defaultProtocol: 'https', HTMLAttributes: { target: '_blank', rel: 'noopener noreferrer' } }),
      Placeholder.configure({ placeholder }),
      CharacterCount,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Typography,
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: { class: 'tiptap' },
    },
    immediatelyRender: false,
  });

  const setLink = useCallback(() => {
    if (!editor) return;
    const previousUrl = editor.getAttributes('link').href as string;
    const url = window.prompt('Enter URL', previousUrl);
    if (url === null) return;
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  }, [editor]);

  if (!editor) return null;

  const charCount = editor.storage.characterCount?.characters?.() ?? 0;
  const wordCount = editor.storage.characterCount?.words?.() ?? 0;

  return (
    <div className={styles.editorWrapper}>
      {/* Toolbar */}
      <div className={styles.toolbar}>
        {/* Text formatting */}
        <ToolbarBtn onClick={() => editor.chain().focus().toggleBold().run()} active={editor.isActive('bold')} title="Bold">
          <Bold size={15} />
        </ToolbarBtn>
        <ToolbarBtn onClick={() => editor.chain().focus().toggleItalic().run()} active={editor.isActive('italic')} title="Italic">
          <Italic size={15} />
        </ToolbarBtn>
        <ToolbarBtn onClick={() => editor.chain().focus().toggleUnderline().run()} active={editor.isActive('underline')} title="Underline">
          <UnderlineIcon size={15} />
        </ToolbarBtn>
        <ToolbarBtn onClick={() => editor.chain().focus().toggleStrike().run()} active={editor.isActive('strike')} title="Strikethrough">
          <Strikethrough size={15} />
        </ToolbarBtn>

        <div className={styles.toolbarSep} />

        {/* Headings */}
        <ToolbarBtn onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} active={editor.isActive('heading', { level: 1 })} title="Heading 1">
          <Heading1 size={15} />
        </ToolbarBtn>
        <ToolbarBtn onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} active={editor.isActive('heading', { level: 2 })} title="Heading 2">
          <Heading2 size={15} />
        </ToolbarBtn>
        <ToolbarBtn onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} active={editor.isActive('heading', { level: 3 })} title="Heading 3">
          <Heading3 size={15} />
        </ToolbarBtn>

        <div className={styles.toolbarSep} />

        {/* Lists */}
        <ToolbarBtn onClick={() => editor.chain().focus().toggleBulletList().run()} active={editor.isActive('bulletList')} title="Bullet List">
          <List size={15} />
        </ToolbarBtn>
        <ToolbarBtn onClick={() => editor.chain().focus().toggleOrderedList().run()} active={editor.isActive('orderedList')} title="Ordered List">
          <ListOrdered size={15} />
        </ToolbarBtn>

        <div className={styles.toolbarSep} />

        {/* Block elements */}
        <ToolbarBtn onClick={() => editor.chain().focus().toggleBlockquote().run()} active={editor.isActive('blockquote')} title="Blockquote">
          <Quote size={15} />
        </ToolbarBtn>
        <ToolbarBtn onClick={setLink} active={editor.isActive('link')} title="Insert Link">
          <LinkIcon size={15} />
        </ToolbarBtn>

        <div className={styles.toolbarSep} />

        {/* Alignment */}
        <ToolbarBtn onClick={() => editor.chain().focus().setTextAlign('left').run()} active={editor.isActive({ textAlign: 'left' })} title="Align Left">
          <AlignLeft size={15} />
        </ToolbarBtn>
        <ToolbarBtn onClick={() => editor.chain().focus().setTextAlign('center').run()} active={editor.isActive({ textAlign: 'center' })} title="Align Center">
          <AlignCenter size={15} />
        </ToolbarBtn>
        <ToolbarBtn onClick={() => editor.chain().focus().setTextAlign('right').run()} active={editor.isActive({ textAlign: 'right' })} title="Align Right">
          <AlignRight size={15} />
        </ToolbarBtn>

        <div className={styles.toolbarSep} />

        {/* History */}
        <ToolbarBtn onClick={() => editor.chain().focus().undo().run()} active={false} title="Undo" disabled={!editor.can().undo()}>
          <Undo size={15} />
        </ToolbarBtn>
        <ToolbarBtn onClick={() => editor.chain().focus().redo().run()} active={false} title="Redo" disabled={!editor.can().redo()}>
          <Redo size={15} />
        </ToolbarBtn>
      </div>

      {/* Editor Content */}
      <div className={styles.editorContent}>
        <EditorContent editor={editor} />
      </div>

      {/* Footer: character & word count */}
      <div className={styles.editorFooter}>
        <span>{wordCount} words · {charCount} characters</span>
      </div>
    </div>
  );
}

/* ── Toolbar Button ─────────────────────────────────────────────────────── */
interface ToolbarBtnProps {
  onClick: () => void;
  active: boolean;
  children: React.ReactNode;
  title?: string;
  disabled?: boolean;
}

function ToolbarBtn({ onClick, active, children, title, disabled }: ToolbarBtnProps) {
  return (
    <button
      type="button"
      onMouseDown={e => { e.preventDefault(); onClick(); }}
      className={`${styles.toolbarBtn} ${active ? styles.toolbarBtnActive : ''}`}
      title={title}
      disabled={disabled}
      aria-pressed={active}
    >
      {children}
    </button>
  );
}
