{ nixpkgs ? import <nixpkgs> {} }:

nixpkgs.stdenv.mkDerivation rec {
  name = "packages";
  buildInputs = [
    nixpkgs.cloc
    nixpkgs.coreutils
    nixpkgs.expect
    nixpkgs.gnumake42
    nixpkgs.gnused
    nixpkgs.jq
    nixpkgs.postgresql
  ];
}
