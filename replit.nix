{ pkgs }: {
	deps = [
		pkgs.cloc
  pkgs.mkcert
  pkgs.simp_le
  pkgs.acme-sh
  pkgs.sudo
  pkgs.python38Packages.certbot
  pkgs.nodejs-12_x
		pkgs.nodePackages.typescript-language-server
		pkgs.yarn
		pkgs.replitPackages.jest
	];
}