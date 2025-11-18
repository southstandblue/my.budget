const Footer = () => {
  return (
    <div className="border-t md:border-t-2 border-t-border-mode-light/85 dark:border-t-border-mode-dark px-3 py-3 md:py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-2xl md:text-4xl font-medium tracking-tight text-text-mode-light/85 dark:text-text-mode-dark">
          my.budget
        </span>
        <span className="flex gap-4 pt-2">
          <span className="md:text-lg text-sm text-center md:border-2 md:px-4 md:py-1 px-2 py-1 rounded-lg cursor-pointer primaryButton">
            Privacy Policy
          </span>
          <span className="md:text-lg text-sm text-center md:border-2 md:px-4 md:py-1 px-2 py-1 rounded-lg cursor-pointer primaryButton">
            Terms of Service
          </span>
          <span className="md:text-lg text-sm text-center md:border-2 md:px-4 md:py-1 px-2 py-1 rounded-lg cursor-pointer primaryButton">
            Contact Support
          </span>
        </span>
      </div>
      <span
        className="container mx-auto flex justify-center items-center text-sm tracking-tight text-text-mode-light/85 dark:text-text-mode-dark
       pt-3 md:pt-5 md:font-semibold"
      >
        copyright© claytonhq.co.uk 2025
      </span>
    </div>
  );
};
export default Footer;
