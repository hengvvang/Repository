// std::fmt::Display
use std::fmt;

struct Position {
    longitude: f32,
    latitude: f32,
}

impl fmt::Display for Position {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "({}, {})", self.longitude, self.latitude)
    }
}

fn main() {
    assert_eq!(
        "(1.987, 2.983)",
        format!(
            "{}",
            Position {
                longitude: 1.987,
                latitude: 2.983,
            }
        ),
    );
}
