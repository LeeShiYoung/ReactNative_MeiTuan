//
//  WebViewController.m
//  MeiTuan
//
//  Created by Young_Code on 2019/4/30.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "NativeWebView.h"
#import <React/RCTLog.h>

@implementation NativeWebView

- (void)log {
  RCTLog(@"%@", self);
}

- (void)touchesBegan:(NSSet<UITouch *> *)touches withEvent:(UIEvent *)event {
  
  self.block(self);
}



@end
