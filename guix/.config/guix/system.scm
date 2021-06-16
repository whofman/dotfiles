;; This is an operating system configuration generated
;; by the graphical installer.

(use-modules (gnu) (nongnu packages linux))
(use-service-modules desktop networking ssh xorg)

(operating-system
  (kernel linux)
  (firmware (list linux-firmware))
  (locale "en_US.utf8")
  (timezone "Europe/Amsterdam")
  (keyboard-layout (keyboard-layout "us"))
  (host-name "guix")
  (users (cons* (user-account
                  (name "hans")
                  (comment "Hans Hofman")
                  (group "users")
                  (home-directory "/home/hans")
                  (supplementary-groups
                    '("wheel" "netdev" "audio" "video")))
                %base-user-accounts))
  (packages
    (append
      (list (specification->package "awesome")
            (specification->package "nss-certs"))
      %base-packages))
  (services
    (append
      (list (service gnome-desktop-service-type)
            (service openssh-service-type)
            (set-xorg-configuration
              (xorg-configuration
                (keyboard-layout keyboard-layout))))
      %desktop-services))
  (bootloader
    (bootloader-configuration
      (bootloader grub-efi-bootloader)
      (target "/boot/efi")
      (keyboard-layout keyboard-layout)))
  (file-systems
    (cons* (file-system
             (mount-point "/")
             (device
               (uuid "46664836-6384-45fa-8883-66b3a30cb165"
                     'ext4))
             (type "ext4"))
           (file-system
             (mount-point "/boot/efi")
             (device (uuid "291A-9DAA" 'fat32))
             (type "vfat"))
           %base-file-systems)))
