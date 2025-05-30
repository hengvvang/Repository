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
    let ws_example2 = Crate {
        crate_type: CrateType::Example,
        name: "ws_example2",
        path: "examples/ws_example2.rs",
    };
    println!("{ws_example2:#?}");
}
