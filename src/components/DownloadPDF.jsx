import React, { useState } from 'react';

/**
 * DownloadPDF Component
 * Client-side PDF generation from the current note's content.
 * Uses html2canvas + jspdf.
 *
 * Props:
 *   filename (string) - Name for downloaded PDF (without .pdf)
 *   label (string)    - Button label text
 */
export default function DownloadPDF({
  filename = 'ds-academic-note',
  label = 'Download as PDF',
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDownload = async () => {
    setLoading(true);
    setError(null);

    try {
      // Dynamically import heavy libraries
      const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
        import('html2canvas'),
        import('jspdf'),
      ]);

      // Select the main article content
      const article = document.querySelector('article.theme-doc-markdown') ||
        document.querySelector('article') ||
        document.querySelector('.main-wrapper');

      if (!article) {
        throw new Error('No content found to export.');
      }

      // Elements to temporarily hide during capture
      const toHide = document.querySelectorAll(
        '.navbar, footer, .theme-doc-sidebar-container, .pagination-nav, .download-pdf-btn, .breadcrumbs'
      );
      toHide.forEach(el => (el.style.visibility = 'hidden'));

      const canvas = await html2canvas(article, {
        scale: 2,
        useCORS: true,
        allowTaint: false,
        backgroundColor: '#ffffff',
        logging: false,
        windowWidth: 900,
      });

      toHide.forEach(el => (el.style.visibility = ''));

      const imgData = canvas.toDataURL('image/png', 0.95);
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true,
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 10;
      const contentWidth = pageWidth - margin * 2;

      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = contentWidth / imgWidth;
      const scaledHeight = imgHeight * ratio;

      let yOffset = 0;
      const pageContentHeight = pageHeight - margin * 2;

      while (yOffset < scaledHeight) {
        if (yOffset > 0) pdf.addPage();

        pdf.addImage(
          imgData,
          'PNG',
          margin,
          margin - yOffset,
          contentWidth,
          scaledHeight,
          undefined,
          'FAST'
        );

        // Clip to page
        pdf.setFillColor(255, 255, 255);
        pdf.rect(0, 0, pageWidth, margin, 'F');
        pdf.rect(0, pageHeight - margin, pageWidth, margin, 'F');

        yOffset += pageContentHeight;
      }

      // Footer on each page
      const totalPages = pdf.internal.getNumberOfPages();
      for (let i = 1; i <= totalPages; i++) {
        pdf.setPage(i);
        pdf.setFontSize(8);
        pdf.setTextColor(150);
        pdf.text(
          `DS Academic — dsdipu.dev  |  Page ${i} of ${totalPages}`,
          pageWidth / 2,
          pageHeight - 4,
          { align: 'center' }
        );
      }

      pdf.save(`${filename}.pdf`);
    } catch (err) {
      console.error('PDF generation failed:', err);
      setError('Could not generate PDF. Try printing from your browser (Ctrl+P).');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'inline-block' }}>
      <button
        className="download-pdf-btn"
        onClick={handleDownload}
        disabled={loading}
        aria-label={label}
      >
        {loading ? (
          <>
            <span style={{ animation: 'spin 1s linear infinite', display: 'inline-block' }}>⏳</span>
            Generating PDF...
          </>
        ) : (
          <>📥 {label}</>
        )}
      </button>

      {error && (
        <div style={{
          marginTop: '0.5rem',
          fontSize: '0.8rem',
          color: '#E53E3E',
          background: 'rgba(229,62,62,0.08)',
          padding: '0.4rem 0.75rem',
          borderRadius: '6px',
        }}>
          ⚠️ {error}
        </div>
      )}

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
