//
//  WebViewController.h
//  MeiTuan
//
//  Created by Young_Code on 2019/4/30.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <WebKit/WebKit.h>

@class WKWebView;

typedef int (^MyBlock)(WKWebView *);

@interface NativeWebView : WKWebView

@property (nonatomic, copy) MyBlock block;

- (void)log;

@end
