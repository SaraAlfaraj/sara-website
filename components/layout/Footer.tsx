export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-8 flex justify-center text-sm text-text-muted">
        <p>© {new Date().getFullYear()} سارة. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
}
