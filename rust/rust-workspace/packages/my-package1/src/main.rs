#[derive(Debug)]
enum CrateType {
    Binary,
    Library,
    Example,
    Test,
    Bench,
}
#[derive(Debug)]
struct Crate<'a> {
    crate_type: CrateType,
    name: &'a str,
    path: &'a str,
}
fn main() {
    let my_package1_main = Crate {
        crate_type: CrateType::Binary,
        name: "my_package1_main",
        path: "packages/my_package1/src/main.rs",
    };
    println!("{my_package1_main:#?}");
}
