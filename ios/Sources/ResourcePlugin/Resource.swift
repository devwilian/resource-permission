import Foundation

@objc public class Resource: NSObject {
    @objc public func echo(_ value: String) -> String {
        print("FROM XCODE" + value)
        return value
    }
}
