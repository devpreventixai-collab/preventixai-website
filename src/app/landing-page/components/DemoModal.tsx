
import { useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoModal = ({ isOpen, onClose }: DemoModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-scale-in">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h3 className="text-2xl font-bold text-text-primary">PreventixAI Platform Demo</h3>
            <p className="text-sm text-text-secondary mt-1">See how we transform incident management</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-smooth"
            aria-label="Close modal"
          >
            <Icon name="XMarkIcon" size={24} variant="outline" className="text-text-secondary" />
          </button>
        </div>

        <div className="p-6">
          <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden mb-6">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="PlayIcon" size={40} variant="solid" className="text-white" />
                </div>
                <p className="text-white text-lg font-semibold">2-Minute Product Walkthrough</p>
                <p className="text-white/70 text-sm mt-2">Demo video would play here</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-surface rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <Icon name="DocumentTextIcon" size={24} variant="solid" className="text-primary" />
                <h4 className="font-semibold text-text-primary">Guided Forms</h4>
              </div>
              <p className="text-sm text-text-secondary">See how AI guides care workers through complete incident reports</p>
            </div>

            <div className="bg-surface rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <Icon name="ChartBarIcon" size={24} variant="solid" className="text-primary" />
                <h4 className="font-semibold text-text-primary">AI Analytics</h4>
              </div>
              <p className="text-sm text-text-secondary">Watch pattern detection identify risks across all incidents</p>
            </div>

            <div className="bg-surface rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <Icon name="DocumentCheckIcon" size={24} variant="solid" className="text-primary" />
                <h4 className="font-semibold text-text-primary">CQC Reports</h4>
              </div>
              <p className="text-sm text-text-secondary">Generate professional compliance reports in one click</p>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-gray-200 bg-surface">
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 text-base font-semibold text-primary bg-white border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-smooth"
            >
              Close Demo
            </button>
            <a
              href="#get-started"
              onClick={onClose}
              className="flex-1 px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-primary to-blue-600 rounded-lg shadow-lg hover:bg-primary-hover text-center"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoModal;
