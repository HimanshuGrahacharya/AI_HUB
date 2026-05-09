const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'public', 'script.ts');
let content = fs.readFileSync(filePath, 'utf8');

const targetStr = `      }

  const isResumeMode = document.getElementById('chat-mode-badge')!.style.display !== 'none';`;

const replacementStr = `      }

      if (isResume && modeBadge) {
        modeBadge.style.display = 'inline-block';
        showToast('Resume detected! Resume Analysis Mode activated.', 'success');
      }
    };
    reader.readAsDataURL(file);
  }
};

let attachedArenaFileBase64: string | null = null;
let attachedArenaFileName: string | null = null;
let attachedArenaFileType: string | null = null;

(window as any).removeArenaFile = function() {
  attachedArenaFileBase64 = null;
  attachedArenaFileName = null;
  attachedArenaFileType = null;
  const previewContainer = document.getElementById('arena-file-preview');
  const uploadInput = document.getElementById('arena-file-upload') as HTMLInputElement;
  if (previewContainer) previewContainer.style.display = 'none';
  if (uploadInput) uploadInput.value = '';
};

(window as any).handleArenaFileSelect = function(input: HTMLInputElement) {
  const file = input.files?.[0];
  if (file) {
    attachedArenaFileName = file.name;
    attachedArenaFileType = file.type;
    
    const isImage = file.type.startsWith('image/');
    const isVideo = file.type.startsWith('video/');
    
    const reader = new FileReader();
    reader.onload = function(e) {
      attachedArenaFileBase64 = e.target?.result as string;
      const previewContainer = document.getElementById('arena-file-preview');
      const imgWrapper = document.getElementById('arena-img-wrapper');
      const docWrapper = document.getElementById('arena-doc-wrapper');
      const previewImage = document.getElementById('arena-img-preview') as HTMLImageElement;
      const docName = document.getElementById('arena-doc-name');
      const docIcon = document.getElementById('arena-doc-icon');

      if (previewContainer) {
        previewContainer.style.display = 'block';
        if (isImage) {
          if (imgWrapper) imgWrapper.style.display = 'block';
          if (docWrapper) docWrapper.style.display = 'none';
          if (previewImage) previewImage.src = attachedArenaFileBase64!;
        } else {
          if (imgWrapper) imgWrapper.style.display = 'none';
          if (docWrapper) {
            docWrapper.style.display = 'flex';
            if (docName) docName.textContent = file.name;
            if (docIcon) {
                if (isVideo) docIcon.className = 'ph ph-video';
                else docIcon.className = 'ph ph-file-pdf';
            }
          }
        }
      }
    };
    reader.readAsDataURL(file);
  }
};

async function sendMessage() {
  const input = document.getElementById('message-input') as HTMLInputElement;
  let message = input.value.trim();
  if (!message && !attachedFileBase64) return;

  const isResumeMode = document.getElementById('chat-mode-badge')!.style.display !== 'none';`;

if (content.includes(targetStr)) {
    content = content.replace(targetStr, replacementStr);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Successfully repaired chat file logic and injected arena file logic.');
} else {
    console.error('Could not find target string to repair.');
}
