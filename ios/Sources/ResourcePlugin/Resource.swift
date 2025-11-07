import Foundation

@objc public class Resource: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
