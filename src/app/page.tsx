export default function HomePage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      fontFamily: 'system-ui, sans-serif',
      backgroundColor: '#f0f0f0'
    }}>
      <h1 style={{ fontSize: '3rem', color: '#333', marginBottom: '1rem' }}>
        ✅ VERCEL BUILD FUNKTIONIERT!
      </h1>
      <p style={{ fontSize: '1.5rem', color: '#666' }}>
        Ferienwohnung Unterm Schloß - Hambach
      </p>
      <p style={{ marginTop: '2rem', fontSize: '1rem', color: '#999' }}>
        Build Zeit: {new Date().toISOString()}
      </p>
    </div>
  );
}
