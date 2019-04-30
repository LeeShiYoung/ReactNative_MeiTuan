//
//  NativeWebviewManager.m
//  MeiTuan
//
//  Created by Young_Code on 2019/4/30.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "NativeWebviewManager.h"
#import "NativeWebView.h"
#import <WebKit/WebKit.h>
#import <React/RCTLog.h>
#import <React/UIView+React.h>

@implementation NativeWebviewManager

RCT_EXPORT_MODULE(NativeWebView_iOS)

RCT_EXPORT_VIEW_PROPERTY(onLog, RCTBubblingEventBlock)

- (UIView *)view {
  NativeWebView *wv = [[NativeWebView alloc] init];
  
  [wv loadRequest:[NSURLRequest requestWithURL:[NSURL URLWithString:@"https://www.baidu.com"]]];
  
  return wv;
}


@end
