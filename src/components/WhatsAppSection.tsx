import { MessageCircle, ArrowRight } from "lucide-react";

const WhatsAppSection = () => {
  return (
    <section className="section-dark" id="whatsapp">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-[#25D366]/10 to-[#25D366]/5 rounded-2xl border border-[#25D366]/30 p-6 sm:p-8 md:p-10 text-center">
            {/* WhatsApp Icon */}
            <div className="flex justify-center mb-5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#25D366] flex items-center justify-center">
                <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" />
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
              Stay Connected with <span className="text-primary">Aasuri</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-6">
              For artists, parents, and art lovers
            </p>

            {/* CTA Button */}
            <a
              href="https://wa.me/your-whatsapp-link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-[#25D366] hover:bg-[#22c55e] text-white font-semibold rounded-full transition-colors text-sm sm:text-base"
            >
              <MessageCircle className="w-5 h-5" />
              Join Our WhatsApp Updates Group
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Note */}
            <p className="text-xs sm:text-sm text-muted-foreground mt-4">
              Open to everyone. You don't need to be a student.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppSection;
