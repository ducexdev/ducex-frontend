"use client";
import React, { useEffect, useState, useRef } from 'react';
import { FileText, Download, Upload, X, Search, FileUp } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import styles from './Documents.module.css';
import portalApiClient from '@/utils/portalApiClient';

export default function DocumentsPage() {
  const [matters, setMatters] = useState<any[]>([]);
  const [documents, setDocuments] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMatter, setSelectedMatter] = useState('ALL');
  
  // Upload modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploadMatter, setUploadMatter] = useState('');
  const [uploadTitle, setUploadTitle] = useState('');
  const [uploadDesc, setUploadDesc] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      // First get matters
      const mattersRes = await portalApiClient.get('/portal/matters');
      const mattersList = mattersRes.data.data;
      setMatters(mattersList);

      // Then get documents for each matter (in a real app, you'd likely have a /portal/documents endpoint that aggregates)
      // Since our API currently requires matter uuid, we'll fetch them concurrently for all matters
      const docsPromises = mattersList.map((m: any) => portalApiClient.get(`/portal/matters/${m.uuid}/documents`));
      const docsResponses = await Promise.all(docsPromises);
      
      let allDocs: any[] = [];
      docsResponses.forEach((res: any, index: number) => {
        const matterDocs = res.data.data.map((d: any) => ({
          ...d,
          matterName: mattersList[index].title,
          matterUuid: mattersList[index].uuid
        }));
        allDocs = [...allDocs, ...matterDocs];
      });

      // Sort by newest
      allDocs.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      setDocuments(allDocs);
    } catch (err) {
      console.error('Failed to load documents', err);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredDocs = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesMatter = selectedMatter === 'ALL' || doc.matterUuid === selectedMatter;
    return matchesSearch && matchesMatter;
  });

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile || !uploadMatter || !uploadTitle) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('title', uploadTitle);
    if (uploadDesc) formData.append('description', uploadDesc);

    try {
      await portalApiClient.post(`/portal/matters/${uploadMatter}/documents`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      // Reset and refresh
      setIsModalOpen(false);
      setSelectedFile(null);
      setUploadTitle('');
      setUploadDesc('');
      setUploadMatter('');
      await fetchData();
    } catch (err) {
      console.error('Upload failed', err);
      alert('Failed to upload document. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  if (isLoading && documents.length === 0) {
    return <div>Loading documents...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Document Center</h1>
        <Button onClick={() => setIsModalOpen(true)} variant="accent">
          <Upload size={18} style={{ marginRight: '8px' }} /> Upload Document
        </Button>
      </div>

      <div className={styles.controls}>
        <Search size={20} color="var(--color-text-light)" />
        <input 
          type="text" 
          placeholder="Search documents by name..." 
          className={styles.searchInput}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select 
          className={styles.selectInput}
          value={selectedMatter}
          onChange={(e) => setSelectedMatter(e.target.value)}
        >
          <option value="ALL">All Matters</option>
          {matters.map(m => (
            <option key={m.uuid} value={m.uuid}>{m.title}</option>
          ))}
        </select>
      </div>

      <div className={styles.documentsTable}>
        {filteredDocs.length === 0 ? (
          <div className={styles.emptyState}>
            No documents found matching your criteria.
          </div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Document Name</th>
                <th>Matter</th>
                <th>Uploaded Date</th>
                <th>Size</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredDocs.map(doc => (
                <tr key={doc.id}>
                  <td>
                    <div className={styles.fileNameCell}>
                      <div className={styles.fileIcon}>
                        <FileText size={20} />
                      </div>
                      <div>
                        <div className={styles.fileName}>{doc.title}</div>
                        {doc.description && <div className={styles.fileDesc}>{doc.description}</div>}
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className={styles.badge}>{doc.matterName}</span>
                  </td>
                  <td>{new Date(doc.createdAt).toLocaleDateString()}</td>
                  <td>
                    {doc.versions?.[0] ? `${(Number(doc.versions[0].fileSize) / 1024).toFixed(1)} KB` : 'Unknown'}
                  </td>
                  <td>
                    <a 
                      href={`${process.env.NEXT_PUBLIC_API_URL}/portal/documents/${doc.uuid}/download`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.actionBtn}
                      download
                    >
                      <Download size={18} /> Download
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {isModalOpen && (
        <div className={styles.uploadModal}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>Upload Document</h3>
              <button className={styles.closeBtn} onClick={() => setIsModalOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleUpload}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Select Matter *</label>
                <select 
                  className={styles.input}
                  value={uploadMatter}
                  onChange={(e) => setUploadMatter(e.target.value)}
                  required
                >
                  <option value="">-- Choose Matter --</option>
                  {matters.map(m => (
                    <option key={m.uuid} value={m.uuid}>{m.title}</option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Document Title *</label>
                <input 
                  type="text" 
                  className={styles.input}
                  value={uploadTitle}
                  onChange={(e) => setUploadTitle(e.target.value)}
                  placeholder="e.g. Signed Contract"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Description (Optional)</label>
                <input 
                  type="text" 
                  className={styles.input}
                  value={uploadDesc}
                  onChange={(e) => setUploadDesc(e.target.value)}
                  placeholder="Brief description"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>File *</label>
                <div className={styles.fileInputContainer}>
                  <input 
                    type="file" 
                    className={styles.fileInput} 
                    onChange={handleFileSelect}
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    required
                  />
                  <div className={styles.fileInputText}>
                    <FileUp size={32} color="var(--color-accent)" />
                    <span>Click to browse or drag and drop</span>
                    <span style={{ fontSize: '0.75rem' }}>Supports PDF, DOCX, JPG, PNG (Max 10MB)</span>
                  </div>
                </div>
                {selectedFile && (
                  <div className={styles.selectedFileName}>
                    Selected: {selectedFile.name} ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
                  </div>
                )}
              </div>

              <Button 
                type="submit" 
                variant="accent" 
                fullWidth 
                isLoading={isUploading}
                style={{ marginTop: 'var(--space-4)' }}
              >
                Upload Document
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
