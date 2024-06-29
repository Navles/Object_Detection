package com.dctapp;

import android.content.Intent;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class HelloModule extends ReactContextBaseJavaModule {

    private static ReactApplicationContext reactContext;

    HelloModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @Override
    public String getName() {
        return "HelloModule";
    }

    @ReactMethod
    public void navigateToNative() {
        Intent intent = new Intent(reactContext, MyNativeActivity.class);
        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        reactContext.startActivity(intent);
    }
}
