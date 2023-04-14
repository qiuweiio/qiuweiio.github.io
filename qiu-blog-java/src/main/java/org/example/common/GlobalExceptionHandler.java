package org.example.common;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import org.springframework.stereotype.Controller;

import java.sql.SQLIntegrityConstraintViolationException;

@ControllerAdvice(annotations = {RestController.class, Controller.class})
@ResponseBody
@Slf4j
public class  GlobalExceptionHandler {
    /**
     * 异常处理方法 @ExceptionHandler 来指定拦截的是那一类型的异常。
     * @return
     */
    @ExceptionHandler(SQLIntegrityConstraintViolationException.class)
    public R<String> exceptionHandler(SQLIntegrityConstraintViolationException ex){
        // 打印异常信息 例如 ： Duplicate entry '666' for key 'idx_username'
        log.error(ex.getMessage());
        // 判断异常信息是否包括
        if(ex.getMessage().contains("Duplicate entry")){
            String[] split = ex.getMessage().split(" ");
            String msg = split[2] + "已存在";
            // 返回异常处理信息
            return R.error(msg);
        }
        return R.error("未知错误");
    }
}