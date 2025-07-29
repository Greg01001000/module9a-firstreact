function UserProfile() {
  const name = "Isaac Newton";
  const bio = "Physics and math enthusiast who loves conversations about concepts of light and gravity.";
  const profileImage = "https://cdn.britannica.com/56/59856-050-AAA3AA05/Godfrey-Kneller-Isaaac-Newton-oil-painting-National-1702.jpg";

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto', padding: '24px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', backgroundColor: 'white', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <img src={profileImage} alt={`${name}'s profile`} style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', border: '4px solid #e1e5e9', marginBottom: '16px' }} />
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: 'black' }}>{name}</h1>
      <p style={{ fontSize: '16px', color: '#555' }}>{bio}</p>
    </div>
  );
}

export default UserProfile;