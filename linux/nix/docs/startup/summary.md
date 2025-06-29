# NixOS Guide
> Description: A basic introduction on building a NixOS config on your personal machine
> Author: __youtuber__ Matthias benaets

# NixOS
- Introduction
    - Linux distribution based on Nix packages manager
    - Support declarative reproducible system configuraton
    - "Unbreakable"
        - Boot to specific configuraton generations. (as mentioned above - reproducible)
    - nix-store: no /lib & /usr/lib  almost no-existant /bin & /usr/bin. -> /nix/store
    - nix-env: install packages at user level without having to change system state

- Getting Started
    - NixOS website
        - [NixOS]()
        - [Manual]()
            - Downloads -> NixOS -> More -> Manual
        - [Unstable]()
            - Downloads -> NixOS -> More -> also available
    - Burning ISO
    - Booting into ISO
        - Via USB
        - Virt-Manager
    - partitioning
- Initial Configuration
    - Generate
    - Configuration.nix
        - Argument on how to evaluate config:
            {config, pkgs, ...}:
        - Pull in other file used withinthe config:
            import = [./hardware-configuration.nix];
        - Boot
        - NetWorking
        - Internationalisation
        - Display Manager/Desktop Environments/Windows Managers...
        - Hardware
        - Users
        - Packages
        - StateVersion
    - Hardware-configuration.nix
- Installation
- Declaring packages, services, settings, etc...
- Extras

# Home-Manager
- Introdcution
- Getting Started
    - Initial
    - NixOS Modules
        - Add to configruation.Nix
        ```
        let
        in
        {
            imports = [ <home-manager/nixos> ];
            users.users.<name> = {
                inNormalUser = true;
            }
            home-manager.users.<name> = { pkgs, ...}: {
                home.packages = [ pkgs.atool pkgs.httpie ];
            };
        }
    - Standalone
- Configuration
- Dotfiles


# Flakes
- Introdcution
- Getting Started
- Configuration
    - NixOS
    - Home-Manager
        - Flake.;nix
          - Seperate
            ```
            {
               inputs = {
                    ...
                    home-manager = {
                    url = github:nix-community/home-manager;
                    inputs.nixpkgs.follows = "nixpkgs";
                    };
                };
                outputs = { self, nixpkgs, home-manager, ...}:
                let
                ...
                in {
                ...
                hmConfig = {
                <user> =
                home-manager.lib.homeManagerConfiguration {
                inherit system pkgs;
                username = "<user>";
                homeDirectory = "/home/<user>";
                configuration = {
                    imports = [
                    /home/<user>/.config/home/home.nix
                ];
                };
            };
            };
            };
            };
            ```
          - Inside nixosConfigurations
        - Build
- Updating
- Flake on fresh install
    - Boot into ISO
      ```
      sudo su
      nix-env -iA nixos.git
      git clone <repo url> /mnt/<path>
      reboot
      /* login */
      sudo rm -r /etc/nixos/configuration.nix
      /* move build to desired location */
      ```

# Personal Config

# Resources
